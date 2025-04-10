import '../styles/globals.css';
import Head from 'next/head';
import { useRouter } from 'next/router';

function MyApp({ Component, pageProps }) {
  const router = useRouter();
  
  // Default meta tags
  const defaultTitle = 'FitAI - AI-Powered Personalized Fitness Platform';
  const defaultDescription = 'Get personalized workout and nutrition plans powered by artificial intelligence. Achieve your fitness goals with FitAI\'s adaptive programming.';
  const defaultKeywords = 'AI fitness, personalized workout plan, AI personal trainer, fitness app, nutrition planning';
  const defaultOgImage = '/images/fitai-social-share.jpg';
  
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>{pageProps.title || defaultTitle}</title>
        <meta name="description" content={pageProps.description || defaultDescription} />
        <meta name="keywords" content={pageProps.keywords || defaultKeywords} />
        
        {/* Open Graph / Social Media Meta Tags */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content={`https://fitai.com${router.asPath}`} />
        <meta property="og:title" content={pageProps.title || defaultTitle} />
        <meta property="og:description" content={pageProps.description || defaultDescription} />
        <meta property="og:image" content={pageProps.ogImage || defaultOgImage} />
        
        {/* Twitter Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={pageProps.title || defaultTitle} />
        <meta name="twitter:description" content={pageProps.description || defaultDescription} />
        <meta name="twitter:image" content={pageProps.ogImage || defaultOgImage} />
        
        {/* Favicon */}
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        
        {/* Fonts */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Montserrat:wght@500;600;700;800&display=swap" rel="stylesheet" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
