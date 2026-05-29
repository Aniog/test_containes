import Navbar from '@/components/home/Navbar';
import Hero from '@/components/home/Hero';
import StatsBar from '@/components/home/StatsBar';
import Features from '@/components/home/Features';
import BikeShowcase from '@/components/home/BikeShowcase';
import AboutSection from '@/components/home/AboutSection';
import Testimonials from '@/components/home/Testimonials';
import Footer from '@/components/home/Footer';

const Home = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <StatsBar />
      <Features />
      <BikeShowcase />
      <AboutSection />
      <Testimonials />
      <Footer />
    </div>
  );
};

export default Home;
