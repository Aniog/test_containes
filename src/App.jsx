import Navbar from './components/navbar/Navbar';
import HeroSection from './components/hero/HeroSection';
import AboutSection from './components/about/AboutSection';
import ProductsSection from './components/products/ProductsSection';
import FeaturesSection from './components/features/FeaturesSection';
import ContactSection from './components/contact/ContactSection';
import Footer from './components/footer/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main>
        <HeroSection />
        <AboutSection />
        <ProductsSection />
        <FeaturesSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}

export default App;
