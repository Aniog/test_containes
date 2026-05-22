import HomeHero from '@/components/home/HomeHero';
import HomeFeatured from '@/components/home/HomeFeatured';
import HomeHabitats from '@/components/home/HomeHabitats';
import HomeCallToAction from '@/components/home/HomeCallToAction';

const Home = () => {
  return (
    <div className="bg-[#050d1a] min-h-screen">
      <HomeHero />
      <HomeFeatured />
      <HomeHabitats />
      <HomeCallToAction />
    </div>
  );
};

export default Home;
