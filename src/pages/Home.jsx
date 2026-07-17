import Hero from '../components/home/Hero';
import TrustBar from '../components/home/TrustBar';
import BestsellersSection from '../components/home/BestsellersSection';
import UGCReelSection from '../components/home/UGCReelSection';
import CategoriesSection from '../components/home/CategoriesSection';
import BrandStorySection from '../components/home/BrandStorySection';
import TestimonialsSection from '../components/home/TestimonialsSection';
import NewsletterSection from '../components/home/NewsletterSection';

const Home = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <TrustBar />
      <BestsellersSection />
      <UGCReelSection />
      <CategoriesSection />
      <BrandStorySection />
      <TestimonialsSection />
      <NewsletterSection />
    </div>
  );
};

export default Home;
