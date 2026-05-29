import Hero from '@/components/home/Hero';
import StatsBar from '@/components/home/StatsBar';
import Features from '@/components/home/Features';
import BikeShowcase from '@/components/home/BikeShowcase';
import Testimonials from '@/components/home/Testimonials';

const Home = () => {
  return (
    <>
      <Hero />
      <StatsBar />
      <Features />
      <BikeShowcase preview />
      <Testimonials />
    </>
  );
};

export default Home;
