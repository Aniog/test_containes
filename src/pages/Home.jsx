import Layout from '../components/layout/Layout';
import HomeHero from '../components/home/HomeHero';
import HomeFeatured from '../components/home/HomeFeatured';
import HomeSpotlight from '../components/home/HomeSpotlight';
import HomeStats from '../components/home/HomeStats';

export default function Home() {
  return (
    <Layout>
      <HomeHero />
      <HomeFeatured />
      <HomeSpotlight />
      <HomeStats />
    </Layout>
  );
}
