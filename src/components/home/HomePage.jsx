import Hero from './Hero';
import TrustBar from './TrustBar';
import BestsellersSection from './BestsellersSection';
import UGCSection from './UGCSection';
import CategoriesSection from './CategoriesSection';
import BrandStorySection from './BrandStorySection';
import TestimonialsSection from './TestimonialsSection';
import NewsletterSection from './NewsletterSection';

const HomePage = () => {
  return (
    <main>
      <Hero />
      <TrustBar />
      <BestsellersSection />
      <UGCSection />
      <CategoriesSection />
      <BrandStorySection />
      <TestimonialsSection />
      <NewsletterSection />
    </main>
  );
};

export default HomePage;
