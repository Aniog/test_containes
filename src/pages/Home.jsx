import HomeHero from '@/components/home/HomeHero';
import HomeFeatured from '@/components/home/HomeFeatured';
import HomeFacts from '@/components/home/HomeFacts';
import HomeCallout from '@/components/home/HomeCallout';

const Home = () => {
  return (
    <>
      <HomeHero />
      <HomeFeatured />
      <HomeFacts />
      <HomeCallout />
    </>
  );
};

export default Home;
