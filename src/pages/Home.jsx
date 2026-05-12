import HomeHero from '@/components/home/HomeHero';
import HomeNavCards from '@/components/home/HomeNavCards';
import HomeStats from '@/components/home/HomeStats';
import HomeHighlights from '@/components/home/HomeHighlights';
import HomeCTA from '@/components/home/HomeCTA';

export default function Home() {
  return (
    <>
      <HomeHero />
      <HomeNavCards />
      <HomeStats />
      <HomeHighlights />
      <HomeCTA />
    </>
  );
}
