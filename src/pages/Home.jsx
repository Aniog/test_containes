import HomeHero from '@/components/home/HomeHero';
import HomeCategories from '@/components/home/HomeCategories';
import HomeFeatures from '@/components/home/HomeFeatures';
import HomeCTA from '@/components/home/HomeCTA';

export default function Home() {
  return (
    <main>
      <HomeHero />
      <HomeCategories />
      <HomeFeatures />
      <HomeCTA />
    </main>
  );
}
