import Link from 'next/link';

export default function CTASection() {
  return (
    <section className="py-16 md:py-24 bg-primary-600">
      <div className="container-custom">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Transform Your Fitness Journey?
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Join thousands of members who are achieving their fitness goals with personalized AI-powered plans. Start your 14-day free trial today.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/signup" className="btn bg-white text-primary-600 hover:bg-gray-100 text-center">
              Start Free Trial
            </Link>
            <Link href="/features" className="btn border-2 border-white text-white hover:bg-white/10 text-center">
              Learn More
            </Link>
          </div>
          <p className="mt-6 text-white/80 text-sm">
            No credit card required. Cancel anytime.
          </p>
        </div>
      </div>
    </section>
  );
}
