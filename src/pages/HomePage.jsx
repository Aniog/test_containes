import HeroSection from '../components/home/HeroSection';
import TrustBar from '../components/home/TrustBar';
import Bestsellers from '../components/home/Bestsellers';
import UGCRow from '../components/home/UGCRow';
import ShopByCategory from '../components/home/ShopByCategory';
import BrandStory from '../components/home/BrandStory';
import Testimonials from '../components/home/Testimonials';
import NewsletterSection from '../components/home/NewsletterSection';

export default function HomePage() {
  return (
    <main>
      <HeroSection />
      <TrustBar />
      <Bestsellers />
      <UGCRow />
      <ShopByCategory />
      <BrandStory />
      <Testimonials />
      <NewsletterSection />
    </main>
  );
}