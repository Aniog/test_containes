import HomeHero from '../components/home/HomeHero';
import HomeFeatured from '../components/home/HomeFeatured';
import HomeCategories from '../components/home/HomeCategories';
import HomeMission from '../components/home/HomeMission';

const Home = () => {
  return (
    <div className="bg-[#050810]">
      <HomeHero />
      <HomeFeatured />
      <HomeCategories />
      <HomeMission />
    </div>
  );
};

export default Home;
