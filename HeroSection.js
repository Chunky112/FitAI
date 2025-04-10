import Link from 'next/link';
import Image from 'next/image';

export default function HeroSection() {
  return (
    <section className="bg-gradient-to-br from-primary-50 to-secondary-50 py-16 md:py-24">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Hero Content */}
          <div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
              Your <span className="text-primary-600">AI-Powered</span> Personal Fitness Coach
            </h1>
            <p className="mt-6 text-xl text-gray-700 max-w-2xl">
              Get personalized workout and nutrition plans tailored to your goals, fitness level, and preferences. Powered by artificial intelligence that adapts as you progress.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <Link href="/signup" className="btn-primary text-center">
                Start Free Trial
              </Link>
              <Link href="/features" className="btn-outline text-center">
                Learn More
              </Link>
            </div>
            <div className="mt-8 flex items-center">
              <div className="flex -space-x-2">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="w-10 h-10 rounded-full border-2 border-white bg-gray-200 flex items-center justify-center overflow-hidden">
                    {/* Placeholder for user avatars */}
                    <span className="text-xs font-medium text-gray-600">U{i}</span>
                  </div>
                ))}
              </div>
              <div className="ml-4">
                <div className="flex items-center">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <svg
                      key={star}
                      className="w-5 h-5 text-yellow-400"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                    </svg>
                  ))}
                </div>
                <p className="text-sm text-gray-600">
                  <span className="font-bold">4.9/5</span> from over 1,000 users
                </p>
              </div>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative h-[400px] md:h-[500px] rounded-lg overflow-hidden shadow-xl">
            {/* Placeholder for hero image */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary-400 to-secondary-500 flex items-center justify-center">
              <div className="text-white text-center p-8">
                <div className="text-6xl mb-4">🏋️‍♀️</div>
                <h3 className="text-2xl font-bold mb-2">AI Fitness Dashboard</h3>
                <p className="text-white/80">Personalized workout plans, nutrition tracking, and progress analytics</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
