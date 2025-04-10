import { useState } from 'react';
import { loadStripe } from '@stripe/stripe-js';
import { Elements, CardElement, useStripe, useElements } from '@stripe/react-stripe-js';

// Replace with your Stripe publishable key when in production
const stripePromise = loadStripe('pk_test_51NxSample1234567890StripeTestKey');

const CheckoutForm = ({ plan }) => {
  const stripe = useStripe();
  const elements = useElements();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);
  const [email, setEmail] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);
    setError(null);

    if (!stripe || !elements) {
      setLoading(false);
      return;
    }

    // Create subscription on the server
    try {
      const response = await fetch('/api/create-subscription', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          plan,
          email,
        }),
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const { clientSecret, subscriptionId } = await response.json();

      // Confirm the payment with Stripe
      const result = await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: elements.getElement(CardElement),
          billing_details: {
            email: email,
          },
        },
      });

      if (result.error) {
        setError(result.error.message);
        setLoading(false);
      } else {
        // Payment succeeded
        setSuccess(true);
        setLoading(false);
        
        // Store subscription info in localStorage for demo purposes
        // In a real app, this would be stored in a database and associated with the user account
        localStorage.setItem('fitai_subscription', JSON.stringify({
          id: subscriptionId,
          plan: plan.name,
          price: plan.price,
          startDate: new Date().toISOString(),
          trialEndDate: new Date(Date.now() + 14 * 24 * 60 * 60 * 1000).toISOString(),
        }));
      }
    } catch (err) {
      setError('An error occurred while processing your payment. Please try again.');
      console.error('Payment error:', err);
      setLoading(false);
    }
  };

  if (success) {
    return (
      <div className="bg-green-50 p-6 rounded-lg text-center">
        <svg className="w-12 h-12 text-green-500 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
        </svg>
        <h3 className="text-xl font-bold text-gray-900 mb-2">Payment Successful!</h3>
        <p className="text-gray-600 mb-4">Thank you for subscribing to FitAI {plan.name} plan. Your 14-day free trial has started.</p>
        <button 
          className="btn-primary"
          onClick={() => window.location.href = '/dashboard'}
        >
          Go to Dashboard
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Email Address
        </label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="form-input w-full rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500"
          placeholder="your.email@example.com"
        />
      </div>
      
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Card Details
        </label>
        <div className="border border-gray-300 rounded-md p-4 bg-white">
          <CardElement 
            options={{
              style: {
                base: {
                  fontSize: '16px',
                  color: '#424770',
                  '::placeholder': {
                    color: '#aab7c4',
                  },
                },
                invalid: {
                  color: '#9e2146',
                },
              },
            }}
          />
        </div>
      </div>
      
      {error && (
        <div className="text-red-500 text-sm">
          {error}
        </div>
      )}
      
      <button
        type="submit"
        disabled={!stripe || loading || !email}
        className={`w-full btn-primary ${(loading || !email) ? 'opacity-70 cursor-not-allowed' : ''}`}
      >
        {loading ? 'Processing...' : `Start 14-Day Free Trial`}
      </button>
      
      <p className="text-xs text-gray-500 text-center">
        By subscribing, you agree to our <a href="/terms" className="underline">Terms of Service</a> and <a href="/privacy" className="underline">Privacy Policy</a>. Your subscription will begin after your 14-day free trial. You won't be charged if you cancel during your trial.
      </p>
    </form>
  );
};

export default function StripePaymentForm({ plan }) {
  return (
    <Elements stripe={stripePromise}>
      <div className="max-w-md mx-auto">
        <div className="bg-gray-50 p-6 rounded-lg mb-6">
          <h3 className="text-xl font-bold text-gray-900 mb-2">{plan.name} Plan</h3>
          <div className="flex items-baseline mb-4">
            <span className="text-3xl font-bold text-gray-900">{plan.price}</span>
            <span className="text-gray-600 ml-2">per month</span>
          </div>
          <ul className="space-y-2 mb-4">
            {plan.features.map((feature, index) => (
              <li key={index} className="flex items-start">
                <svg
                  className="w-5 h-5 text-primary-600 mt-0.5 mr-2"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  ></path>
                </svg>
                <span className="text-sm">{feature}</span>
              </li>
            ))}
          </ul>
        </div>
        
        <CheckoutForm plan={plan} />
      </div>
    </Elements>
  );
}
