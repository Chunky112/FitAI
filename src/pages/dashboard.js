import Head from 'next/head';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

export default function Dashboard() {
  const router = useRouter();
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  
  // Mock user data
  const mockUser = {
    name: "Test User",
    email: "test@example.com",
    plan: "Premium",
    startDate: "April 10, 2025",
    trialEndDate: "April 24, 2025",
    nextBillingDate: "April 24, 2025",
    workoutPlan: {
      goal: "Build Muscle",
      level: "Intermediate",
      daysPerWeek: 4,
      nextWorkout: {
        day: "Upper Body",
        exercises: [
          { name: "Bench Press", sets: 4, reps: "8-10", weight: "70kg" },
          { name: "Incline Dumbbell Press", sets: 3, reps: "10-12", weight: "25kg" },
          { name: "Lat Pulldown", sets: 4, reps: "10-12", weight: "65kg" },
          { name: "Seated Cable Row", sets: 3, reps: "10-12", weight: "60kg" },
          { name: "Lateral Raises", sets: 3, reps: "12-15", weight: "12kg" },
          { name: "Tricep Pushdown", sets: 3, reps: "12-15", weight: "25kg" }
        ]
      }
    },
    nutritionPlan: {
      calories: 2400,
      protein: 180,
      carbs: 240,
      fat: 80,
      mealPlan: [
        { meal: "Breakfast", description: "Protein oatmeal with berries and nuts", calories: 450 },
        { meal: "Snack", description: "Greek yogurt with honey and banana", calories: 300 },
        { meal: "Lunch", description: "Grilled chicken salad with quinoa", calories: 550 },
        { meal: "Pre-workout", description: "Protein shake with apple", calories: 250 },
        { meal: "Dinner", description: "Salmon with sweet potato and vegetables", calories: 650 },
        { meal: "Evening snack", description: "Cottage cheese with berries", calories: 200 }
      ]
    },
    progress: {
      workoutsCompleted: 12,
      totalWorkoutMinutes: 720,
      weightTracking: [
        { date: "Mar 10", weight: 82.5 },
        { date: "Mar 17", weight: 82.1 },
        { date: "Mar 24", weight: 81.8 },
        { date: "Mar 31", weight: 81.3 },
        { date: "Apr 7", weight: 80.9 }
      ],
      measurements: {
        chest: 102,
        waist: 84,
        hips: 98,
        arms: 38,
        thighs: 60
      }
    }
  };

  useEffect(() => {
    // Check if user is logged in
    const isLoggedIn = localStorage.getItem('fitai_test_user');
    
    if (isLoggedIn) {
      setUser(mockUser);
    } else {
      // Redirect to login if not logged in
      router.push('/login');
    }
    
    setLoading(false);
  }, [router]);

  const handleLogout = () => {
    localStorage.removeItem('fitai_test_user');
    router.push('/');
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary-600 mx-auto"></div>
          <p className="mt-4 text-gray-600">Loading your dashboard...</p>
        </div>
      </div>
    );
  }

  if (!user) {
    return null; // Will redirect to login
  }

  return (
    <div>
      <Head>
        <title>Dashboard - FitAI | Your AI Fitness Coach</title>
        <meta name="description" content="Access your personalized AI workout and nutrition plans on your FitAI dashboard." />
        <meta name="robots" content="noindex, nofollow" />
      </Head>

      <Header />
      
      <main className="bg-gray-50 min-h-screen">
        <div className="container-custom py-8">
          {/* Dashboard Header */}
          <div className="bg-white rounded-lg shadow-md p-6 mb-6">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between">
              <div>
                <h1 className="text-2xl font-bold text-gray-900">Welcome back, {user.name}</h1>
                <p className="text-gray-600">Your {user.plan} plan is active - Trial ends on {user.trialEndDate}</p>
              </div>
              <div className="mt-4 md:mt-0">
                <button 
                  onClick={handleLogout}
                  className="text-gray-600 hover:text-gray-900 font-medium"
                >
                  Log Out
                </button>
              </div>
            </div>
          </div>
          
          {/* Dashboard Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Main Content - 2/3 width on large screens */}
            <div className="lg:col-span-2 space-y-6">
              {/* Today's Workout */}
              <div className="bg-white rounded-lg shadow-md p-6">
                <h2 className="text-xl font-bold text-gray-900 mb-4">Today's Workout: {user.workoutPlan.nextWorkout.day}</h2>
                <div className="overflow-x-auto">
                  <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-gray-50">
                      <tr>
                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Exercise</th>
                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Sets</th>
                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Reps</th>
                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Weight</th>
                      </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                      {user.workoutPlan.nextWorkout.exercises.map((exercise, index) => (
                        <tr key={index}>
                          <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{exercise.name}</td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{exercise.sets}</td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{exercise.reps}</td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{exercise.weight}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                <div className="mt-6 flex justify-between">
                  <button className="btn-secondary">View Full Workout Plan</button>
                  <button className="btn-primary">Start Workout</button>
                </div>
              </div>
              
              {/* Nutrition Plan */}
              <div className="bg-white rounded-lg shadow-md p-6">
                <h2 className="text-xl font-bold text-gray-900 mb-4">Today's Nutrition Plan</h2>
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="bg-gray-50 rounded-lg p-4">
                    <p className="text-sm text-gray-500">Daily Calories</p>
                    <p className="text-2xl font-bold text-gray-900">{user.nutritionPlan.calories}</p>
                  </div>
                  <div className="bg-gray-50 rounded-lg p-4">
                    <p className="text-sm text-gray-500">Protein</p>
                    <p className="text-2xl font-bold text-gray-900">{user.nutritionPlan.protein}g</p>
                  </div>
                  <div className="bg-gray-50 rounded-lg p-4">
                    <p className="text-sm text-gray-500">Carbs</p>
                    <p className="text-2xl font-bold text-gray-900">{user.nutritionPlan.carbs}g</p>
                  </div>
                  <div className="bg-gray-50 rounded-lg p-4">
                    <p className="text-sm text-gray-500">Fat</p>
                    <p className="text-2xl font-bold text-gray-900">{user.nutritionPlan.fat}g</p>
                  </div>
                </div>
                
                <h3 className="text-lg font-bold text-gray-900 mb-3">Meal Plan</h3>
                <div className="space-y-4">
                  {user.nutritionPlan.mealPlan.map((meal, index) => (
                    <div key={index} className="flex justify-between items-center border-b pb-3">
                      <div>
                        <p className="font-medium text-gray-900">{meal.meal}</p>
                        <p className="text-sm text-gray-600">{meal.description}</p>
                      </div>
                      <div className="text-right">
                        <p className="text-sm text-gray-500">{meal.calories} cal</p>
                      </div>
                    </div>
                  ))}
                </div>
                
                <div className="mt-6">
                  <button className="btn-secondary w-full">View Full Nutrition Plan</button>
                </div>
              </div>
            </div>
            
            {/* Sidebar - 1/3 width on large screens */}
            <div className="space-y-6">
              {/* Progress Summary */}
              <div className="bg-white rounded-lg shadow-md p-6">
                <h2 className="text-xl font-bold text-gray-900 mb-4">Your Progress</h2>
                <div className="space-y-4">
                  <div>
                    <p className="text-sm text-gray-500 mb-1">Workouts Completed</p>
                    <div className="flex items-center">
                      <span className="text-2xl font-bold text-gray-900 mr-2">{user.progress.workoutsCompleted}</span>
                      <span className="text-sm text-green-600">+3 this week</span>
                    </div>
                  </div>
                  
                  <div>
                    <p className="text-sm text-gray-500 mb-1">Total Workout Time</p>
                    <div className="flex items-center">
                      <span className="text-2xl font-bold text-gray-900 mr-2">{user.progress.totalWorkoutMinutes} min</span>
                      <span className="text-sm text-green-600">+180 min this week</span>
                    </div>
                  </div>
                  
                  <div>
                    <p className="text-sm text-gray-500 mb-1">Weight Tracking</p>
                    <div className="h-40 bg-gray-50 rounded-lg p-2 flex items-end justify-between">
                      {user.progress.weightTracking.map((point, index) => (
                        <div key={index} className="flex flex-col items-center">
                          <div 
                            className="bg-primary-600 w-6" 
                            style={{ 
                              height: `${(point.weight - 80) * 20}px`,
                              minHeight: '10px'
                            }}
                          ></div>
                          <p className="text-xs text-gray-500 mt-1">{point.date}</p>
                        </div>
                      ))}
                    </div>
                    <div className="flex justify-between mt-2">
                      <p className="text-xs text-gray-500">Starting: 82.5kg</p>
                      <p className="text-xs text-gray-500">Current: 80.9kg</p>
                    </div>
                  </div>
                </div>
                
                <div className="mt-6">
                  <button className="btn-secondary w-full">View Detailed Progress</button>
                </div>
              </div>
              
              {/* Account Info */}
              <div className="bg-white rounded-lg shadow-md p-6">
                <h2 className="text-xl font-bold text-gray-900 mb-4">Account Information</h2>
                <div className="space-y-3">
                  <div>
                    <p className="text-sm text-gray-500">Current Plan</p>
                    <p className="font-medium text-gray-900">{user.plan}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Trial End Date</p>
                    <p className="font-medium text-gray-900">{user.trialEndDate}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Next Billing Date</p>
                    <p className="font-medium text-gray-900">{user.nextBillingDate}</p>
                  </div>
                </div>
                
                <div className="mt-6 space-y-3">
                  <button className="btn-secondary w-full">Manage Subscription</button>
                  <button className="text-primary-600 hover:text-primary-700 text-sm font-medium w-full text-center">Update Payment Method</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
