import HomeHero from '@/components/home/HomeHero';
import HomeStats from '@/components/home/HomeStats';
import HomeFeatured from '@/components/home/HomeFeatured';
import HomeArticles from '@/components/home/HomeArticles';
import HomeCTA from '@/components/home/HomeCTA';

const Home = () => {
  return (
    <>
      <HomeHero />
      <HomeStats />
      <HomeFeatured />
      <HomeArticles />
      <HomeCTA />
    </>
  );
};

export default Home;
