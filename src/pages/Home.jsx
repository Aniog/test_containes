import HomeHero from '@/components/home/HomeHero';
import HomeStats from '@/components/home/HomeStats';
import HomeFeatured from '@/components/home/HomeFeatured';
import HomeCallout from '@/components/home/HomeCallout';

const Home = () => {
  return (
    <>
      <HomeHero />
      <HomeStats />
      <HomeFeatured />
      <HomeCallout />
    </>
  );
};

export default Home;
