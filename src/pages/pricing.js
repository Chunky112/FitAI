import Head from 'next/head';
import Header from '../components/Header';
import Footer from '../components/Footer';
import PricingSection from '../components/PricingSection';

export default function Pricing() {
  return (
    <div>
      <Head>
        <title>Pricing - FitAI | AI-Powered Fitness Platform</title>
        <meta name="description" content="Choose the FitAI plan that fits your fitness goals and budget. All plans include a 14-day free trial with personalized AI workout and nutrition plans." />
        <meta name="keywords" content="fitness subscription, AI fitness pricing, workout plan subscription, fitness app pricing" />
      </Head>

      <Header />
      
      <main>
        <section className="py-16 md:py-24 bg-gray-50">
          <div className="container-custom">
            <div className="max-w-4xl mx-auto text-center mb-16">
              <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Simple, Transparent Pricing
              </h1>
              <p className="text-xl text-gray-600">
                Choose the plan that fits your fitness goals and budget. All plans include a 14-day free trial.
              </p>
            </div>
            
            <PricingSection />
            
            <div className="mt-24 max-w-3xl mx-auto">
              <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">Frequently Asked Questions</h2>
              
              <div className="bg-white rounded-lg shadow-lg divide-y">
                <div className="p-6">
                  <h3 className="text-lg font-bold text-gray-900 mb-2">Can I cancel my subscription at any time?</h3>
                  <p className="text-gray-600">
                    Yes, you can cancel your subscription at any time. If you cancel during your free trial, you won't be charged.
                  </p>
                </div>
                
                <div className="p-6">
                  <h3 className="text-lg font-bold text-gray-900 mb-2">How does the 14-day free trial work?</h3>
                  <p className="text-gray-600">
                    You'll have full access to all features of your chosen plan for 14 days. No charge will be made until the trial period ends.
                  </p>
                </div>
                
                <div className="p-6">
                  <h3 className="text-lg font-bold text-gray-900 mb-2">Can I switch plans later?</h3>
                  <p className="text-gray-600">
                    Absolutely! You can upgrade or downgrade your plan at any time through your account settings.
                  </p>
                </div>
                
                <div className="p-6">
                  <h3 className="text-lg font-bold text-gray-900 mb-2">Do you offer refunds?</h3>
                  <p className="text-gray-600">
                    We offer a 30-day money-back guarantee if you're not satisfied with our service.
                  </p>
                </div>
                
                <div className="p-6">
                  <h3 className="text-lg font-bold text-gray-900 mb-2">Are there any long-term contracts?</h3>
                  <p className="text-gray-600">
                    No, all our plans are month-to-month with no long-term commitment required.
                  </p>
                </div>
                
                <div className="p-6">
                  <h3 className="text-lg font-bold text-gray-900 mb-2">Do you offer discounts for annual subscriptions?</h3>
                  <p className="text-gray-600">
                    Yes, we offer a 20% discount when you choose annual billing for any of our plans.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
