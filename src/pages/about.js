import Head from 'next/head';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function About() {
  return (
    <div>
      <Head>
        <title>About - FitAI | AI-Powered Fitness Platform</title>
        <meta name="description" content="Learn about FitAI, our mission to transform fitness through AI technology, and the team behind the platform." />
        <meta name="keywords" content="about FitAI, AI fitness company, fitness technology, fitness innovation" />
      </Head>

      <Header />
      
      <main>
        <section className="py-16 md:py-24 bg-gray-50">
          <div className="container-custom">
            <div className="max-w-4xl mx-auto text-center mb-16">
              <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                About FitAI
              </h1>
              <p className="text-xl text-gray-600">
                We're on a mission to make personalized fitness accessible to everyone through the power of artificial intelligence.
              </p>
            </div>
            
            <div className="bg-white rounded-lg shadow-lg p-8 mb-16">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Our Story</h2>
              <p className="text-gray-600 mb-6">
                FitAI was founded in 2023 by a team of fitness professionals and AI engineers who recognized a fundamental problem in the fitness industry: generic, one-size-fits-all workout programs don't work for most people.
              </p>
              <p className="text-gray-600 mb-6">
                We set out to create a platform that could provide the personalization of a personal trainer at a fraction of the cost, making expert fitness guidance accessible to everyone. By leveraging the latest advancements in artificial intelligence, we've developed a system that creates truly personalized workout and nutrition plans that adapt as you progress.
              </p>
              <p className="text-gray-600">
                Today, FitAI helps thousands of members achieve their fitness goals with AI-powered plans that continuously evolve based on their performance, preferences, and feedback.
              </p>
            </div>
            
            <div className="bg-white rounded-lg shadow-lg p-8 mb-16">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Our Mission</h2>
              <p className="text-gray-600 mb-6">
                Our mission is to democratize access to personalized fitness guidance, making it possible for anyone, anywhere to achieve their health and fitness goals with expert-level programming tailored to their unique needs.
              </p>
              <p className="text-gray-600">
                We believe that fitness should be accessible, personalized, and effective. By combining cutting-edge AI technology with exercise science, we're creating a future where everyone can have a fitness program that's perfectly tailored to their goals, preferences, and lifestyle.
              </p>
            </div>
            
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Our Values</h2>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Personalization</h3>
                  <p className="text-gray-600">
                    We believe that fitness is not one-size-fits-all. Every aspect of our platform is designed to provide a personalized experience tailored to your unique needs and goals.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Innovation</h3>
                  <p className="text-gray-600">
                    We're constantly pushing the boundaries of what's possible with AI in fitness, developing new features and capabilities to enhance your experience.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Accessibility</h3>
                  <p className="text-gray-600">
                    We're committed to making expert fitness guidance accessible to everyone, regardless of their experience level or background.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Results</h3>
                  <p className="text-gray-600">
                    Everything we do is focused on helping you achieve real, measurable results in your fitness journey.
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
