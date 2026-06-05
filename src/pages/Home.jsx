import HomeHero from '@/components/home/HomeHero';
import HomeFeatures from '@/components/home/HomeFeatures';
import HomeSpotlight from '@/components/home/HomeSpotlight';
import HomeCTA from '@/components/home/HomeCTA';

export default function Home() {
  return (
    <>
      <HomeHero />
      <HomeFeatures />
      <HomeSpotlight />
      <HomeCTA />
    </>
  );
}
