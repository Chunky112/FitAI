// This file contains the server-side API route for handling Stripe payment intents
// In a production environment, this would include proper authentication and security measures

import Stripe from 'stripe';

// Initialize Stripe with your secret key
// In production, this should be stored as an environment variable
const stripe = new Stripe('sk_test_51NxSample1234567890StripeTestKey');

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { plan, email } = req.body;
    
    // Convert plan price to cents for Stripe
    const amount = parseInt(plan.price.replace('€', '')) * 100;
    
    // Create a customer
    const customer = await stripe.customers.create({
      email: email,
      metadata: {
        plan: plan.name
      }
    });
    
    // Create a subscription
    const subscription = await stripe.subscriptions.create({
      customer: customer.id,
      items: [
        {
          price_data: {
            currency: 'eur',
            product_data: {
              name: `FitAI ${plan.name} Plan`,
              description: `Monthly subscription to FitAI ${plan.name} plan`,
            },
            unit_amount: amount,
            recurring: {
              interval: 'month',
            },
          },
        },
      ],
      payment_behavior: 'default_incomplete',
      expand: ['latest_invoice.payment_intent'],
      trial_period_days: 14, // 14-day free trial
    });
    
    // Return the client secret for the payment intent
    res.status(200).json({
      subscriptionId: subscription.id,
      clientSecret: subscription.latest_invoice.payment_intent.client_secret,
    });
  } catch (error) {
    console.error('Error creating subscription:', error);
    res.status(500).json({ error: error.message });
  }
}
