import Head from 'next/head';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Link from 'next/link';

export default function Blog() {
  // Sample blog posts data
  const blogPosts = [
    {
      id: 1,
      title: 'How AI is Revolutionizing Personal Fitness',
      excerpt: 'Discover how artificial intelligence is transforming the fitness industry by providing truly personalized workout and nutrition plans.',
      date: 'April 8, 2025',
      author: 'Sarah Johnson',
      category: 'Technology',
      image: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80'
    },
    {
      id: 2,
      title: 'The Science Behind Personalized Workout Plans',
      excerpt: 'Learn about the scientific principles that guide our AI in creating effective, personalized workout programs tailored to your goals.',
      date: 'April 5, 2025',
      author: 'Dr. Michael Chen',
      category: 'Fitness Science',
      image: 'https://images.unsplash.com/photo-1554284126-aa88f22d8b74?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80'
    },
    {
      id: 3,
      title: '5 Ways AI Can Improve Your Nutrition Habits',
      excerpt: 'Explore how artificial intelligence can help you develop better eating habits and create sustainable nutrition plans.',
      date: 'April 1, 2025',
      author: 'Emily Rodriguez',
      category: 'Nutrition',
      image: 'https://images.unsplash.com/photo-1498837167922-ddd27525d352?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80'
    },
    {
      id: 4,
      title: 'Beginner\'s Guide to AI-Powered Fitness',
      excerpt: 'New to AI fitness? This comprehensive guide will help you understand how to get the most out of your AI-powered fitness journey.',
      date: 'March 28, 2025',
      author: 'James Wilson',
      category: 'Guides',
      image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80'
    },
    {
      id: 5,
      title: 'Success Stories: Real Results from AI Fitness Programs',
      excerpt: 'Read inspiring stories from FitAI members who have achieved remarkable results with our AI-powered fitness platform.',
      date: 'March 25, 2025',
      author: 'Lisa Thompson',
      category: 'Success Stories',
      image: 'https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80'
    },
    {
      id: 6,
      title: 'Comparing AI Personal Trainers to Human Trainers',
      excerpt: 'An in-depth comparison of AI-powered fitness coaching and traditional personal training, exploring the pros and cons of each approach.',
      date: 'March 20, 2025',
      author: 'Dr. Michael Chen',
      category: 'Fitness Science',
      image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80'
    }
  ];

  return (
    <div>
      <Head>
        <title>Blog - FitAI | AI-Powered Fitness Platform</title>
        <meta name="description" content="Explore the latest articles on AI fitness, workout tips, nutrition advice, and success stories from the FitAI blog." />
        <meta name="keywords" content="fitness blog, AI fitness articles, workout tips, nutrition advice" />
      </Head>

      <Header />
      
      <main>
        <section className="py-16 md:py-24 bg-gray-50">
          <div className="container-custom">
            <div className="max-w-4xl mx-auto text-center mb-16">
              <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                FitAI Blog
              </h1>
              <p className="text-xl text-gray-600">
                Expert insights, fitness tips, and success stories to help you on your fitness journey.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {blogPosts.map((post) => (
                <div key={post.id} className="bg-white rounded-lg shadow-lg overflow-hidden">
                  <div className="h-48 overflow-hidden">
                    <img 
                      src={post.image} 
                      alt={post.title}
                      className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                    />
                  </div>
                  <div className="p-6">
                    <div className="flex items-center text-sm text-gray-500 mb-2">
                      <span>{post.date}</span>
                      <span className="mx-2">•</span>
                      <span>{post.category}</span>
                    </div>
                    <h2 className="text-xl font-bold text-gray-900 mb-2">
                      <Link href={`/blog/${post.id}`} className="hover:text-primary-600">
                        {post.title}
                      </Link>
                    </h2>
                    <p className="text-gray-600 mb-4">
                      {post.excerpt}
                    </p>
                    <div className="flex items-center">
                      <div className="w-8 h-8 bg-gray-200 rounded-full mr-3"></div>
                      <span className="text-sm text-gray-700">{post.author}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="mt-12 text-center">
              <button className="btn-secondary">
                Load More Articles
              </button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
