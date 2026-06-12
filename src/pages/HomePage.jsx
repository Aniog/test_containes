import Navbar from '@/components/layout/Navbar';
import HeroSection from '@/components/home/HeroSection';
import ProductsSection from '@/components/home/ProductsSection';
import FeaturesSection from '@/components/home/FeaturesSection';
import IndustriesSection from '@/components/home/IndustriesSection';
import AboutSection from '@/components/home/AboutSection';
import ContactSection from '@/components/home/ContactSection';
import Footer from '@/components/layout/Footer';

const HomePage = () => (
  <div className="font-sans">
    <Navbar />
    <HeroSection />
    <ProductsSection />
    <FeaturesSection />
    <IndustriesSection />
    <AboutSection />
    <ContactSection />
    <Footer />
  </div>
);

export default HomePage;
