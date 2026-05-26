import HomeHero from '@/components/home/HomeHero';
import CategoryGrid from '@/components/home/CategoryGrid';
import FeaturedProducts from '@/components/home/FeaturedProducts';
import PromoSection from '@/components/home/PromoSection';
import TrustBadges from '@/components/home/TrustBadges';

export default function Home() {
  return (
    <main>
      <HomeHero />
      <CategoryGrid />
      <FeaturedProducts />
      <PromoSection />
      <TrustBadges />
    </main>
  );
}
