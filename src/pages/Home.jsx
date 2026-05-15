import Navbar from '../components/home/Navbar';
import HeroSection from '../components/home/HeroSection';
import AboutSection from '../components/home/AboutSection';
import ProductsSection from '../components/home/ProductsSection';
import IndustriesSection from '../components/home/IndustriesSection';
import AdvantagesSection from '../components/home/AdvantagesSection';
import ContactSection from '../components/home/ContactSection';
import Footer from '../components/home/Footer';

export default function Home() {
  return (
    <div className="min-h-screen bg-[#0A1628]">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <ProductsSection />
      <IndustriesSection />
      <AdvantagesSection />
      <ContactSection />
      <Footer />
    </div>
  );
}
