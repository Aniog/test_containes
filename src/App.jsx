import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import HeroSection from './components/home/HeroSection';
import ProductsSection from './components/home/ProductsSection';
import AboutSection from './components/home/AboutSection';
import FeaturesSection from './components/home/FeaturesSection';
import ContactSection from './components/home/ContactSection';

function App() {
  return (
    <div className="min-h-screen bg-[#0D1B2A]">
      <Navbar />
      <main>
        <HeroSection />
        <ProductsSection />
        <AboutSection />
        <FeaturesSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}

export default App;
