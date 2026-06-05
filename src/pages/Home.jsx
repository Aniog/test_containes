import Layout from '../components/layout/Layout';
import HomeHero from '../components/home/HomeHero';
import HomeFeatured from '../components/home/HomeFeatured';
import HomeFactsStrip from '../components/home/HomeFactsStrip';
import HomeCallToAction from '../components/home/HomeCallToAction';

const Home = () => {
  return (
    <Layout>
      <HomeHero />
      <HomeFeatured />
      <HomeFactsStrip />
      <HomeCallToAction />
    </Layout>
  );
};

export default Home;
