import HomeHero from '../components/home/HomeHero';
import HomeLiveMatches from '../components/home/HomeLiveMatches';
import HomeTopScorers from '../components/home/HomeTopScorers';
import HomeFeaturedTeams from '../components/home/HomeFeaturedTeams';
import HomeStadiums from '../components/home/HomeStadiums';

const Home = () => (
  <div>
    <HomeHero />
    <HomeLiveMatches />
    <HomeTopScorers />
    <HomeFeaturedTeams />
    <HomeStadiums />
  </div>
);

export default Home;
