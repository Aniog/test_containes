import HomeHero from '../components/home/HomeHero';
import HomeFeatures from '../components/home/HomeFeatures';
import HomeStats from '../components/home/HomeStats';
import HomeCTA from '../components/home/HomeCTA';

export default function Home() {
  return (
    <>
      <HomeHero />
      <HomeStats />
      <HomeFeatures />
      <HomeCTA />
    </>
  );
}
