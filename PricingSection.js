import Link from 'next/link';

export default function PricingSection() {
  const plans = [
    {
      name: "Basic",
      price: "€9.99",
      period: "per month",
      description: "Perfect for beginners looking to start their fitness journey",
      features: [
        "AI-generated workout plans",
        "Basic progress tracking",
        "Limited exercise library",
        "Community access",
        "Email support"
      ],
      cta: "Start Free Trial",
      popular: false
    },
    {
      name: "Premium",
      price: "€19.99",
      period: "per month",
      description: "Our most popular plan for serious fitness enthusiasts",
      features: [
        "Everything in Basic",
        "AI-generated nutrition plans",
        "Advanced progress tracking",
        "Full exercise library",
        "Priority support",
        "Workout calendar integration"
      ],
      cta: "Start Free Trial",
      popular: true
    },
    {
      name: "Elite",
      price: "€29.99",
      period: "per month",
      description: "The ultimate fitness experience with personalized coaching",
      features: [
        "Everything in Premium",
        "Personalized coaching feedback",
        "Priority access to new features",
        "Exclusive content and webinars",
        "One monthly video consultation",
        "Custom workout program design"
      ],
      cta: "Start Free Trial",
      popular: false
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-gray-50" id="pricing">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Simple, Transparent Pricing
          </h2>
          <p className="text-xl text-gray-600">
            Choose the plan that fits your fitness goals and budget. All plans include a 14-day free trial.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <div 
              key={index} 
              className={`bg-white rounded-lg overflow-hidden shadow-lg border ${
                plan.popular ? 'border-primary-500 relative' : 'border-gray-200'
              }`}
            >
              {plan.popular && (
                <div className="absolute top-0 right-0 bg-primary-500 text-white px-4 py-1 rounded-bl-lg text-sm font-medium">
                  Most Popular
                </div>
              )}
              <div className="p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                <div className="flex items-baseline mb-4">
                  <span className="text-4xl font-bold text-gray-900">{plan.price}</span>
                  <span className="text-gray-600 ml-2">{plan.period}</span>
                </div>
                <p className="text-gray-600 mb-6">{plan.description}</p>
                <Link 
                  href="/signup" 
                  className={`block text-center py-3 px-6 rounded-md font-medium transition-colors ${
                    plan.popular 
                      ? 'bg-primary-600 hover:bg-primary-700 text-white' 
                      : 'bg-white border border-gray-300 hover:bg-gray-50 text-gray-700'
                  }`}
                >
                  {plan.cta}
                </Link>
              </div>
              <div className="bg-gray-50 p-8">
                <h4 className="text-lg font-medium text-gray-900 mb-4">What's included:</h4>
                <ul className="space-y-3">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start">
                      <svg
                        className="w-5 h-5 text-primary-600 mt-1 mr-2"
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
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* FAQ Section */}
        <div className="mt-16 max-w-3xl mx-auto">
          <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Frequently Asked Questions</h3>
          <div className="space-y-6">
            <div>
              <h4 className="text-lg font-medium text-gray-900 mb-2">Can I cancel my subscription at any time?</h4>
              <p className="text-gray-600">Yes, you can cancel your subscription at any time. If you cancel during your free trial, you won't be charged.</p>
            </div>
            <div>
              <h4 className="text-lg font-medium text-gray-900 mb-2">How does the 14-day free trial work?</h4>
              <p className="text-gray-600">You'll have full access to all features of your chosen plan for 14 days. No charge will be made until the trial period ends.</p>
            </div>
            <div>
              <h4 className="text-lg font-medium text-gray-900 mb-2">Can I switch plans later?</h4>
              <p className="text-gray-600">Absolutely! You can upgrade or downgrade your plan at any time through your account settings.</p>
            </div>
            <div>
              <h4 className="text-lg font-medium text-gray-900 mb-2">Do you offer refunds?</h4>
              <p className="text-gray-600">We offer a 30-day money-back guarantee if you're not satisfied with our service.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
