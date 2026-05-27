import Navbar from '@/components/home/Navbar';
import Hero from '@/components/home/Hero';
import Features from '@/components/home/Features';
import NutritionTips from '@/components/home/NutritionTips';
import Recipes from '@/components/home/Recipes';
import Testimonials from '@/components/home/Testimonials';
import NewsletterCTA from '@/components/home/NewsletterCTA';
import Footer from '@/components/home/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <Navbar />
      <Hero />
      <Features />
      <NutritionTips />
      <Recipes />
      <Testimonials />
      <NewsletterCTA />
      <Footer />
    </div>
  );
}

export default App;
