import HomeHero from '../components/home/HomeHero';
import HomePlatforms from '../components/home/HomePlatforms';
import HomeFeaturedDeals from '../components/home/HomeFeaturedDeals';
import HomeLatestNews from '../components/home/HomeLatestNews';
import { DEALS, NEWS_ARTICLES } from '../lib/data';

const Home = ({ onAddToCart }) => {
  const featuredDeals = DEALS.slice(0, 6);
  const latestNews = NEWS_ARTICLES.slice(0, 4);

  return (
    <div>
      <HomeHero />
      <HomePlatforms />
      <HomeFeaturedDeals deals={featuredDeals} onAddToCart={onAddToCart} />
      <HomeLatestNews articles={latestNews} />
    </div>
  );
};

export default Home;
