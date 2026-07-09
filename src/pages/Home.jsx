import HomeHero from '@/components/home/HomeHero';
import HomeFeatures from '@/components/home/HomeFeatures';
import HomeEvents from '@/components/home/HomeEvents';
import HomeChampions from '@/components/home/HomeChampions';
import HomeCTA from '@/components/home/HomeCTA';

export default function Home() {
  return (
    <main>
      <HomeHero />
      <HomeFeatures />
      <HomeEvents />
      <HomeChampions />
      <HomeCTA />
    </main>
  );
}
