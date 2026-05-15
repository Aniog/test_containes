import { useEffect } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import Navbar from './components/home/Navbar';
import HeroSection from './components/home/HeroSection';
import AboutSection from './components/home/AboutSection';
import ProductsSection from './components/home/ProductsSection';
import AdvantagesSection from './components/home/AdvantagesSection';
import HonorsSection from './components/home/HonorsSection';
import ContactSection from './components/home/ContactSection';
import Footer from './components/home/Footer';

function App() {
  // Single top-level image load so cross-section ID references (e.g. [hero-title])
  // are always resolvable — individual section refs cannot see IDs outside their container.
  useEffect(() => {
    ImageHelper.loadImages(strkImgConfig, document.body);
  }, []);

  return (
    <div className="min-h-screen font-sans">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <ProductsSection />
      <AdvantagesSection />
      <HonorsSection />
      <ContactSection />
      <Footer />
    </div>
  );
}

export default App;
