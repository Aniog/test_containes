import HomeHero from '../components/home/HomeHero';
import FeaturedGames from '../components/home/FeaturedGames';
import HomeDealsBanner from '../components/home/HomeDealsBanner';
import LatestNews from '../components/home/LatestNews';
import HomePlatforms from '../components/home/HomePlatforms';

const Home = () => (
  <div>
    <HomeHero />
    <FeaturedGames />
    <HomeDealsBanner />
    <LatestNews />
    <HomePlatforms />
  </div>
);

export default Home;
