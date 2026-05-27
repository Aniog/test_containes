import HomeHero from '@/components/home/HomeHero';
import HomeFeatured from '@/components/home/HomeFeatured';
import HomeStats from '@/components/home/HomeStats';
import HomeHighlights from '@/components/home/HomeHighlights';
import HomeCallToAction from '@/components/home/HomeCallToAction';

const Home = () => {
  return (
    <div className="bg-cosmos-bg">
      <HomeHero />
      <HomeFeatured />
      <HomeStats />
      <HomeHighlights />
      <HomeCallToAction />
    </div>
  );
};

export default Home;
