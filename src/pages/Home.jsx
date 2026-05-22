import HomeHero from '@/components/home/HomeHero';
import HomeFeatures from '@/components/home/HomeFeatures';
import HomeGallery from '@/components/home/HomeGallery';
import HomeStats from '@/components/home/HomeStats';

const Home = () => {
  return (
    <div>
      <HomeHero />
      <HomeFeatures />
      <HomeGallery />
      <HomeStats />
    </div>
  );
};

export default Home;
