import HeroSection from '@/components/home/HeroSection';
import StatsSection from '@/components/home/StatsSection';
import FeaturedOrganisms from '@/components/home/FeaturedOrganisms';
import DiscoverySection from '@/components/home/DiscoverySection';
import CtaBanner from '@/components/home/CtaBanner';

const Home = () => {
  return (
    <>
      <HeroSection />
      <StatsSection />
      <FeaturedOrganisms />
      <DiscoverySection />
      <CtaBanner />
    </>
  );
};

export default Home;
