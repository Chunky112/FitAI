import React from 'react';

export default function TestimonialSection() {
  const testimonials = [
    {
      quote: "FitAI has completely transformed my fitness journey. The personalized workout plans adapt to my progress, and I've seen more results in 3 months than I did in a year of gym membership.",
      author: "Sarah J.",
      role: "Premium Member",
      image: "testimonial-1.jpg"
    },
    {
      quote: "As someone with a busy schedule, FitAI has been a game-changer. The AI creates efficient workouts based on my available time and equipment, and the nutrition guidance has helped me lose 15 pounds!",
      author: "Michael T.",
      role: "Elite Member",
      image: "testimonial-2.jpg"
    },
    {
      quote: "I was skeptical about AI fitness coaching, but FitAI proved me wrong. The personalization is incredible, and it feels like having a personal trainer at a fraction of the cost.",
      author: "Emma R.",
      role: "Basic Member",
      image: "testimonial-3.jpg"
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-gray-900 text-white">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Trusted by Fitness Enthusiasts
          </h2>
          <p className="text-xl text-gray-300">
            See what our members are saying about their experience with FitAI.
          </p>
        </div>

        {/* Testimonials */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-gray-800 rounded-lg p-8 shadow-lg">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 rounded-full bg-gray-600 flex items-center justify-center mr-4">
                  {/* Placeholder for testimonial avatar */}
                  <span className="text-xl">👤</span>
                </div>
                <div>
                  <h4 className="font-bold">{testimonial.author}</h4>
                  <p className="text-gray-400">{testimonial.role}</p>
                </div>
              </div>
              <div className="mb-4">
                {[1, 2, 3, 4, 5].map((star) => (
                  <svg
                    key={star}
                    className="w-5 h-5 text-yellow-400 inline-block"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                  </svg>
                ))}
              </div>
              <p className="text-gray-300 italic mb-4">"{testimonial.quote}"</p>
            </div>
          ))}
        </div>

        {/* Stats */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
          <div>
            <div className="text-4xl font-bold text-primary-400 mb-2">10,000+</div>
            <p className="text-gray-400">Active Members</p>
          </div>
          <div>
            <div className="text-4xl font-bold text-primary-400 mb-2">92%</div>
            <p className="text-gray-400">Satisfaction Rate</p>
          </div>
          <div>
            <div className="text-4xl font-bold text-primary-400 mb-2">15M+</div>
            <p className="text-gray-400">Workouts Completed</p>
          </div>
          <div>
            <div className="text-4xl font-bold text-primary-400 mb-2">4.9/5</div>
            <p className="text-gray-400">Average Rating</p>
          </div>
        </div>
      </div>
    </section>
  );
}
