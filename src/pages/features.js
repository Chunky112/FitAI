import Head from 'next/head';
import Header from '../components/Header';
import Footer from '../components/Footer';
import FeatureSection from '../components/FeatureSection';

export default function Features() {
  return (
    <div>
      <Head>
        <title>Features - FitAI | AI-Powered Fitness Platform</title>
        <meta name="description" content="Explore the powerful features of FitAI, including AI workout planning, nutrition guidance, progress tracking, and more." />
        <meta name="keywords" content="AI fitness features, workout planning, nutrition guidance, fitness tracking" />
      </Head>

      <Header />
      
      <main>
        <section className="py-16 md:py-24 bg-gray-50">
          <div className="container-custom">
            <div className="max-w-4xl mx-auto text-center mb-16">
              <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Powerful Features to Transform Your Fitness Journey
              </h1>
              <p className="text-xl text-gray-600">
                FitAI combines cutting-edge artificial intelligence with exercise science to deliver a truly personalized fitness experience.
              </p>
            </div>
            
            <FeatureSection />
            
            <div className="mt-24 max-w-3xl mx-auto bg-white rounded-lg shadow-lg p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Advanced AI Technology</h2>
              <p className="text-gray-600 mb-6">
                Our proprietary AI algorithms analyze thousands of data points to create personalized fitness plans that adapt to your progress, preferences, and goals. Unlike generic workout apps, FitAI continuously learns from your performance and adjusts your program for optimal results.
              </p>
              
              <h3 className="text-xl font-bold text-gray-900 mb-4">How Our AI Works:</h3>
              <ul className="space-y-4 mb-8">
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-primary-600 mt-1 mr-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <div>
                    <span className="font-medium">Initial Assessment:</span> We analyze your fitness level, goals, available equipment, time constraints, and exercise preferences.
                  </div>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-primary-600 mt-1 mr-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <div>
                    <span className="font-medium">Program Creation:</span> Our AI generates a personalized workout program with optimal exercise selection, sets, reps, and progression.
                  </div>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-primary-600 mt-1 mr-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <div>
                    <span className="font-medium">Continuous Learning:</span> As you log workouts, the AI analyzes your performance, recovery, and progress to refine your program.
                  </div>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-primary-600 mt-1 mr-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <div>
                    <span className="font-medium">Adaptive Programming:</span> Your program evolves based on your progress, automatically adjusting difficulty, volume, and exercise selection.
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
