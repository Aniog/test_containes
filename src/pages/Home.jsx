import HeroSection from '../components/home/HeroSection';
import FeaturedSection from '../components/home/FeaturedSection';
import FactsSection from '../components/home/FactsSection';
import LatestArticles from '../components/home/LatestArticles';
import CtaBanner from '../components/home/CtaBanner';

const Home = () => {
  return (
    <>
      <HeroSection />
      <FeaturedSection />
      <FactsSection />
      <LatestArticles />
      <CtaBanner />
    </>
  );
};

export default Home;
