import Navbar from '@/components/home/Navbar';
import HeroSection from '@/components/home/HeroSection';
import ProductsSection from '@/components/home/ProductsSection';
import FeaturesSection from '@/components/home/FeaturesSection';
import AboutSection from '@/components/home/AboutSection';
import CTASection from '@/components/home/CTASection';
import Footer from '@/components/home/Footer';

const Home = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <HeroSection />
      <ProductsSection />
      <FeaturesSection />
      <AboutSection />
      <CTASection />
      <Footer />
    </div>
  );
};

export default Home;
