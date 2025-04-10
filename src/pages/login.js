import Head from 'next/head';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';

export default function Login() {
  const router = useRouter();
  const [email, setEmail] = useState('test@example.com');
  const [password, setPassword] = useState('password123');
  const [rememberMe, setRememberMe] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    // Check if user is already logged in
    const isLoggedIn = localStorage.getItem('fitai_test_user');
    if (isLoggedIn) {
      router.push('/dashboard');
    }
  }, [router]);

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // For demo purposes, we'll accept any login with the test credentials
    if (email === 'test@example.com' && password === 'password123') {
      // Store login state in localStorage
      localStorage.setItem('fitai_test_user', JSON.stringify({
        email,
        name: 'Test User',
        loggedInAt: new Date().toISOString()
      }));
      
      // Redirect to dashboard
      router.push('/dashboard');
    } else {
      setError('Invalid credentials. Please use test@example.com / password123');
    }
  };

  return (
    <div>
      <Head>
        <title>Log In - FitAI | AI-Powered Fitness Platform</title>
        <meta name="description" content="Log in to your FitAI account to access your personalized AI workout and nutrition plans." />
        <meta name="robots" content="noindex, nofollow" />
      </Head>

      <Header />
      
      <main>
        <section className="py-16 md:py-24 bg-gray-50">
          <div className="container-custom">
            <div className="max-w-md mx-auto bg-white rounded-lg shadow-lg p-8">
              <h1 className="text-2xl font-bold text-gray-900 mb-6 text-center">
                Log In to Your Account
              </h1>
              
              {error && (
                <div className="mb-6 bg-red-50 border border-red-200 text-red-600 px-4 py-3 rounded">
                  {error}
                </div>
              )}
              
              <div className="mb-6 bg-blue-50 border border-blue-200 text-blue-600 px-4 py-3 rounded">
                <p className="font-medium">Test Account Credentials:</p>
                <p>Email: test@example.com</p>
                <p>Password: password123</p>
              </div>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    Email Address
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary-500 focus:border-primary-500"
                    placeholder="your.email@example.com"
                  />
                </div>
                
                <div>
                  <div className="flex items-center justify-between mb-1">
                    <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                      Password
                    </label>
                    <Link href="/forgot-password" className="text-sm text-primary-600 hover:text-primary-500">
                      Forgot your password?
                    </Link>
                  </div>
                  <input
                    id="password"
                    name="password"
                    type="password"
                    autoComplete="current-password"
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary-500 focus:border-primary-500"
                  />
                </div>
                
                <div className="flex items-center">
                  <input
                    id="remember-me"
                    name="remember-me"
                    type="checkbox"
                    checked={rememberMe}
                    onChange={(e) => setRememberMe(e.target.checked)}
                    className="h-4 w-4 text-primary-600 focus:ring-primary-500 border-gray-300 rounded"
                  />
                  <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-700">
                    Remember me
                  </label>
                </div>
                
                <div>
                  <button
                    type="submit"
                    className="w-full btn-primary"
                  >
                    Log In
                  </button>
                </div>
              </form>
              
              <div className="mt-6 text-center">
                <p className="text-sm text-gray-600">
                  Don't have an account?{' '}
                  <Link href="/signup" className="text-primary-600 hover:text-primary-500 font-medium">
                    Sign up for a free trial
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
