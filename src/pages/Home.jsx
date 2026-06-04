import HomeHero from '@/components/home/HomeHero';
import HomeFeatured from '@/components/home/HomeFeatured';
import HomeFactsGrid from '@/components/home/HomeFactsGrid';
import HomeArticlePreview from '@/components/home/HomeArticlePreview';
import HomeCTA from '@/components/home/HomeCTA';

const Home = () => {
  return (
    <>
      <HomeHero />
      <HomeFeatured />
      <HomeFactsGrid />
      <HomeArticlePreview />
      <HomeCTA />
    </>
  );
};

export default Home;
