import Head from 'next/head';
import { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import StripePaymentForm from '../components/StripePaymentForm';

export default function Signup() {
  const [selectedPlan, setSelectedPlan] = useState('premium');
  
  const plans = {
    basic: {
      name: "Basic",
      price: "€9.99",
      features: [
        "AI-generated workout plans",
        "Basic progress tracking",
        "Limited exercise library",
        "Community access",
        "Email support"
      ]
    },
    premium: {
      name: "Premium",
      price: "€19.99",
      features: [
        "Everything in Basic",
        "AI-generated nutrition plans",
        "Advanced progress tracking",
        "Full exercise library",
        "Priority support",
        "Workout calendar integration"
      ]
    },
    elite: {
      name: "Elite",
      price: "€29.99",
      features: [
        "Everything in Premium",
        "Personalized coaching feedback",
        "Priority access to new features",
        "Exclusive content and webinars",
        "One monthly video consultation",
        "Custom workout program design"
      ]
    }
  };

  return (
    <div>
      <Head>
        <title>Sign Up for FitAI - Start Your Fitness Journey Today</title>
        <meta name="description" content="Sign up for FitAI and get personalized AI-powered workout and nutrition plans. Start your 14-day free trial today." />
        <meta name="keywords" content="fitness signup, AI fitness subscription, workout plan subscription, fitness app trial" />
      </Head>

      <Header />
      
      <main>
        <section className="py-16 md:py-24 bg-gray-50">
          <div className="container-custom">
            <div className="max-w-4xl mx-auto">
              <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 text-center">
                Start Your Fitness Journey with FitAI
              </h1>
              <p className="text-xl text-gray-600 mb-12 text-center">
                Choose your plan and begin your 14-day free trial. No credit card required to start.
              </p>
              
              {/* Plan Selection */}
              <div className="bg-white rounded-lg shadow-md p-6 mb-12">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Select Your Plan</h2>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
                  {Object.entries(plans).map(([planId, plan]) => (
                    <div 
                      key={planId}
                      className={`border rounded-lg p-4 cursor-pointer transition-colors ${
                        selectedPlan === planId 
                          ? 'border-primary-500 bg-primary-50' 
                          : 'border-gray-200 hover:border-primary-300'
                      }`}
                      onClick={() => setSelectedPlan(planId)}
                    >
                      <div className="flex items-center mb-2">
                        <div 
                          className={`w-5 h-5 rounded-full border mr-2 flex items-center justify-center ${
                            selectedPlan === planId 
                              ? 'border-primary-500' 
                              : 'border-gray-300'
                          }`}
                        >
                          {selectedPlan === planId && (
                            <div className="w-3 h-3 rounded-full bg-primary-500"></div>
                          )}
                        </div>
                        <h3 className="font-bold text-gray-900">{plan.name}</h3>
                      </div>
                      <div className="ml-7">
                        <div className="font-bold text-gray-900 mb-1">{plan.price}/month</div>
                        <div className="text-sm text-gray-600">after 14-day free trial</div>
                      </div>
                    </div>
                  ))}
                </div>
                
                <div className="text-center text-sm text-gray-600 mb-4">
                  All plans include a 14-day free trial. You can cancel anytime.
                </div>
              </div>
              
              {/* Payment Form */}
              <div className="bg-white rounded-lg shadow-md p-6">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Payment Information</h2>
                <StripePaymentForm plan={plans[selectedPlan]} />
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
