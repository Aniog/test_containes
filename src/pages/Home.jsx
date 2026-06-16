import HomeHero from '@/components/home/HomeHero';
import HomeStats from '@/components/home/HomeStats';
import HomeFeatures from '@/components/home/HomeFeatures';
import HomeProducts from '@/components/home/HomeProducts';
import HomeCTA from '@/components/home/HomeCTA';

const Home = () => {
  return (
    <>
      <HomeHero />
      <HomeStats />
      <HomeFeatures />
      <HomeProducts />
      <HomeCTA />
    </>
  );
};

export default Home;
