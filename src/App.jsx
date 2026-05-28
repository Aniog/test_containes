import Navbar from './components/sections/Navbar';
import HeroSection from './components/sections/HeroSection';
import AboutSection from './components/sections/AboutSection';
import ProductsSection from './components/sections/ProductsSection';
import ProcessSection from './components/sections/ProcessSection';
import AdvantagesSection from './components/sections/AdvantagesSection';
import ContactSection from './components/sections/ContactSection';
import Footer from './components/sections/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white text-[#1C2B3A]">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <ProductsSection />
      <ProcessSection />
      <AdvantagesSection />
      <ContactSection />
      <Footer />
    </div>
  );
}

export default App;
