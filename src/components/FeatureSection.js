import { useState } from 'react';

export default function FeatureSection() {
  const features = [
    {
      title: "AI Workout Planning",
      description: "Get personalized workout plans based on your goals, fitness level, and available equipment. Our AI adapts your program as you progress.",
      icon: "💪",
    },
    {
      title: "Nutrition Guidance",
      description: "Receive customized meal plans and nutrition advice tailored to your fitness goals, dietary preferences, and lifestyle.",
      icon: "🥗",
    },
    {
      title: "Progress Tracking",
      description: "Track your workouts, measurements, and achievements with detailed analytics and visual progress charts.",
      icon: "📊",
    },
    {
      title: "Video Demonstrations",
      description: "Access high-quality video demonstrations for all exercises to ensure proper form and technique.",
      icon: "🎬",
    },
    {
      title: "Community Support",
      description: "Join a community of like-minded individuals for motivation, accountability, and shared experiences.",
      icon: "👥",
    },
    {
      title: "Expert Content",
      description: "Learn from fitness professionals with our library of articles, guides, and educational resources.",
      icon: "📚",
    },
  ];

  const [activeTab, setActiveTab] = useState('workout');

  const tabContent = {
    workout: {
      title: "AI-Powered Workout Planning",
      description: "Our advanced AI algorithms create personalized workout plans based on your goals, fitness level, available equipment, and time constraints. The system adapts your program based on your progress and feedback, ensuring optimal results.",
      image: "workout-planner.jpg",
      features: [
        "Personalized exercise selection",
        "Adaptive progression algorithms",
        "Equipment-based modifications",
        "Recovery optimization",
        "Form guidance and technique tips",
      ],
    },
    nutrition: {
      title: "Smart Nutrition Planning",
      description: "Get personalized meal plans and nutrition recommendations tailored to your fitness goals, dietary preferences, and lifestyle. Our AI helps you make better food choices while still enjoying the foods you love.",
      image: "nutrition-planner.jpg",
      features: [
        "Customized macro calculations",
        "Meal suggestions and recipes",
        "Grocery list generation",
        "Dietary restriction accommodations",
        "Supplement recommendations",
      ],
    },
    tracking: {
      title: "Comprehensive Progress Tracking",
      description: "Track your fitness journey with detailed analytics and visual progress charts. Monitor your workouts, measurements, and achievements to stay motivated and see your improvement over time.",
      image: "progress-tracking.jpg",
      features: [
        "Body measurement tracking",
        "Workout performance metrics",
        "Visual progress photos",
        "Achievement milestones",
        "Detailed progress reports",
      ],
    },
  };

  return (
    <section className="py-16 md:py-24 bg-white" id="features">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Powered by AI, Designed for Results
          </h2>
          <p className="text-xl text-gray-600">
            Our platform combines cutting-edge artificial intelligence with exercise science to deliver a truly personalized fitness experience.
          </p>
        </div>

        {/* Feature Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => (
            <div key={index} className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow border border-gray-100">
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>

        {/* Feature Tabs */}
        <div className="mt-16">
          <div className="flex flex-wrap justify-center border-b border-gray-200 mb-8">
            <button
              className={`px-6 py-3 font-medium text-sm focus:outline-none ${
                activeTab === 'workout'
                  ? 'text-primary-600 border-b-2 border-primary-600'
                  : 'text-gray-500 hover:text-gray-700'
              }`}
              onClick={() => setActiveTab('workout')}
            >
              Workout Planning
            </button>
            <button
              className={`px-6 py-3 font-medium text-sm focus:outline-none ${
                activeTab === 'nutrition'
                  ? 'text-primary-600 border-b-2 border-primary-600'
                  : 'text-gray-500 hover:text-gray-700'
              }`}
              onClick={() => setActiveTab('nutrition')}
            >
              Nutrition Planning
            </button>
            <button
              className={`px-6 py-3 font-medium text-sm focus:outline-none ${
                activeTab === 'tracking'
                  ? 'text-primary-600 border-b-2 border-primary-600'
                  : 'text-gray-500 hover:text-gray-700'
              }`}
              onClick={() => setActiveTab('tracking')}
            >
              Progress Tracking
            </button>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                {tabContent[activeTab].title}
              </h3>
              <p className="text-gray-600 mb-6">
                {tabContent[activeTab].description}
              </p>
              <ul className="space-y-3">
                {tabContent[activeTab].features.map((feature, index) => (
                  <li key={index} className="flex items-start">
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
            <div className="relative h-[300px] md:h-[400px] rounded-lg overflow-hidden shadow-lg">
              {/* Placeholder for feature image */}
              <div className="absolute inset-0 bg-gradient-to-br from-gray-200 to-gray-300 flex items-center justify-center">
                <div className="text-center p-8">
                  <div className="text-6xl mb-4">
                    {activeTab === 'workout' ? '🏋️‍♂️' : activeTab === 'nutrition' ? '🥗' : '📊'}
                  </div>
                  <h3 className="text-xl font-bold mb-2">{tabContent[activeTab].title}</h3>
                  <p className="text-gray-600">Interactive {activeTab} planning and tracking</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
