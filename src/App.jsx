import Navbar from './components/home/Navbar';
import HeroSection from './components/home/HeroSection';
import AboutSection from './components/home/AboutSection';
import ProductsSection from './components/home/ProductsSection';
import AdvantagesSection from './components/home/AdvantagesSection';
import HonorsSection from './components/home/HonorsSection';
import ContactSection from './components/home/ContactSection';
import Footer from './components/home/Footer';

function App() {
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
