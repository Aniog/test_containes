import Layout from '../components/layout/Layout';
import HomeHero from '../components/home/HomeHero';
import HowItWorks from '../components/home/HowItWorks';
import ServiceHighlights from '../components/home/ServiceHighlights';

export default function Home() {
  return (
    <Layout>
      <HomeHero />
      <HowItWorks />
      <ServiceHighlights />
    </Layout>
  );
}
