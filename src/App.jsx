import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import HeroSection from './components/home/HeroSection';
import ProductsSection from './components/home/ProductsSection';
import FeaturesSection from './components/home/FeaturesSection';
import AboutSection from './components/home/AboutSection';
import ContactSection from './components/home/ContactSection';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main>
        <HeroSection />
        <ProductsSection />
        <FeaturesSection />
        <AboutSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}

export default App;
