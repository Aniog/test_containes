import Hero from '@/components/home/Hero';
import FeaturedProducts from '@/components/home/FeaturedProducts';
import WhyChoose from '@/components/home/WhyChoose';
import Testimonials from '@/components/home/Testimonials';
import CTABanner from '@/components/home/CTABanner';

const Home = () => {
  return (
    <>
      <Hero />
      <FeaturedProducts />
      <WhyChoose />
      <Testimonials />
      <CTABanner />
    </>
  );
};

export default Home;
