import Navbar from '@/components/layout/Navbar';
import HeroSection from '@/components/home/HeroSection';
import FlavorsSection from '@/components/home/FlavorsSection';
import AboutSection from '@/components/home/AboutSection';
import FunFactsSection from '@/components/home/FunFactsSection';
import Footer from '@/components/layout/Footer';

const Home = () => {
  return (
    <div className="font-poppins">
      <Navbar />
      <HeroSection />
      <FlavorsSection />
      <AboutSection />
      <FunFactsSection />
      <Footer />
    </div>
  );
};

export default Home;
