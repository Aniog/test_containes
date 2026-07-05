import Hero from '../components/home/Hero';
import TrustBar from '../components/home/TrustBar';
import BestsellersSection from '../components/home/BestsellersSection';
import UGCSection from '../components/home/UGCSection';
import CategoryTiles from '../components/home/CategoryTiles';
import BrandStorySection from '../components/home/BrandStorySection';
import TestimonialsSection from '../components/home/TestimonialsSection';
import NewsletterSection from '../components/home/NewsletterSection';

export default function Home() {
  return (
    <>
      <Hero />
      <TrustBar />
      <BestsellersSection />
      <UGCSection />
      <CategoryTiles />
      <BrandStorySection />
      <TestimonialsSection />
      <NewsletterSection />
    </>
  );
}
