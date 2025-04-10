// This file contains the server-side API route for handling Stripe webhook events
// In a production environment, this would include proper authentication and security measures

import Stripe from 'stripe';
import { buffer } from 'micro';

// Initialize Stripe with your secret key
// In production, this should be stored as an environment variable
const stripe = new Stripe('sk_test_51NxSample1234567890StripeTestKey');

// Disable the default body parser to receive the raw body for webhook signature verification
export const config = {
  api: {
    bodyParser: false,
  },
};

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const buf = await buffer(req);
  const sig = req.headers['stripe-signature'];
  const webhookSecret = 'whsec_sample1234567890StripeWebhookTestKey'; // In production, use an environment variable

  let event;

  try {
    // Verify the webhook signature
    event = stripe.webhooks.constructEvent(buf, sig, webhookSecret);
  } catch (err) {
    console.error(`Webhook signature verification failed: ${err.message}`);
    return res.status(400).send(`Webhook Error: ${err.message}`);
  }

  // Handle specific webhook events
  try {
    switch (event.type) {
      case 'customer.subscription.created':
        // A new subscription is created
        const subscriptionCreated = event.data.object;
        console.log('New subscription created:', subscriptionCreated.id);
        // In a real application, you would update your database here
        break;
        
      case 'customer.subscription.updated':
        // A subscription is updated (e.g., plan change, trial ending)
        const subscriptionUpdated = event.data.object;
        console.log('Subscription updated:', subscriptionUpdated.id);
        // In a real application, you would update your database here
        break;
        
      case 'customer.subscription.deleted':
        // A subscription is canceled or expires
        const subscriptionDeleted = event.data.object;
        console.log('Subscription canceled:', subscriptionDeleted.id);
        // In a real application, you would update your database here
        break;
        
      case 'invoice.payment_succeeded':
        // Payment for a subscription succeeded
        const invoice = event.data.object;
        console.log('Payment succeeded for invoice:', invoice.id);
        // In a real application, you would update your database here
        break;
        
      case 'invoice.payment_failed':
        // Payment for a subscription failed
        const failedInvoice = event.data.object;
        console.log('Payment failed for invoice:', failedInvoice.id);
        // In a real application, you would notify the customer and update your database
        break;
        
      default:
        // Unexpected event type
        console.log(`Unhandled event type: ${event.type}`);
    }

    // Return a 200 response to acknowledge receipt of the event
    res.status(200).json({ received: true });
  } catch (err) {
    console.error(`Error processing webhook: ${err.message}`);
    res.status(500).json({ error: 'Webhook handler failed' });
  }
}
