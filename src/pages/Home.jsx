import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import HeroSection from '@/components/home/HeroSection';
import ProductsSection from '@/components/home/ProductsSection';
import FeaturesSection from '@/components/home/FeaturesSection';
import ContactSection from '@/components/home/ContactSection';

const Home = () => {
  return (
    <div style={{ background: '#0D1117', color: '#C9D1D9' }}>
      <Navbar />
      <HeroSection />
      <ProductsSection />
      <FeaturesSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Home;
