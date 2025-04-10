import Head from 'next/head';
import Link from 'next/link';
import Header from '../components/Header';
import Footer from '../components/Footer';
import HeroSection from '../components/HeroSection';
import FeatureSection from '../components/FeatureSection';
import PricingSection from '../components/PricingSection';
import TestimonialSection from '../components/TestimonialSection';
import CTASection from '../components/CTASection';

export default function Home() {
  return (
    <div>
      <Head>
        <title>FitAI - AI-Powered Personalized Fitness Platform</title>
        <meta name="description" content="Get personalized workout and nutrition plans powered by artificial intelligence. Achieve your fitness goals with FitAI's adaptive programming." />
        <meta name="keywords" content="AI fitness, personalized workout plan, AI personal trainer, fitness app, nutrition planning" />
      </Head>

      <Header />
      
      <main>
        <HeroSection />
        <FeatureSection />
        <TestimonialSection />
        <PricingSection />
        <CTASection />
      </main>

      <Footer />
    </div>
  );
}
