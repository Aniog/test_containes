import HomeHero from '@/components/home/HomeHero';
import HomeFeatured from '@/components/home/HomeFeatured';
import HomeSpotlight from '@/components/home/HomeSpotlight';
import HomeFeatures from '@/components/home/HomeFeatures';
import HomeMosaic from '@/components/home/HomeMosaic';
import HomeCTA from '@/components/home/HomeCTA';

const Home = () => {
  return (
    <>
      <HomeHero />
      <HomeFeatured />
      <HomeSpotlight />
      <HomeFeatures />
      <HomeMosaic />
      <HomeCTA />
    </>
  );
};

export default Home;
