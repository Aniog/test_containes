import Navbar from './components/Navbar';
import HeroSection from './components/home/HeroSection';
import ProductsSection from './components/home/ProductsSection';
import AboutSection from './components/home/AboutSection';
import ContactSection from './components/home/ContactSection';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-am-bg text-am-text">
      <Navbar />
      <main>
        <HeroSection />
        <ProductsSection />
        <AboutSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}

export default App;
