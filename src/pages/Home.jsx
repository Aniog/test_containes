import HomeHero from '@/components/home/HomeHero';
import HomeFeatured from '@/components/home/HomeFeatured';
import HomeWhyItMatters from '@/components/home/HomeWhyItMatters';
import HomeCTA from '@/components/home/HomeCTA';

const Home = () => {
  return (
    <>
      <HomeHero />
      <HomeFeatured />
      <HomeWhyItMatters />
      <HomeCTA />
    </>
  );
};

export default Home;
