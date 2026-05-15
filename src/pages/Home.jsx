import HomeHero from '../components/home/HomeHero';
import HomeCategoryCards from '../components/home/HomeCategoryCards';
import HomeFeatureStrip from '../components/home/HomeFeatureStrip';
import HomeCallToAction from '../components/home/HomeCallToAction';

const Home = () => {
  return (
    <main>
      <HomeHero />
      <HomeFeatureStrip />
      <HomeCategoryCards />
      <HomeCallToAction />
    </main>
  );
};

export default Home;
