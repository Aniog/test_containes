import './App.css';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import HeroSection from './components/home/HeroSection';
import ProductsSection from './components/home/ProductsSection';
import AboutSection from './components/home/AboutSection';
import ServicesSection from './components/home/ServicesSection';
import TestimonialsSection from './components/home/TestimonialsSection';
import ContactSection from './components/home/ContactSection';

function App() {
  return (
    <div className="min-h-screen bg-warm-bg">
      <Navbar />
      <main>
        <HeroSection />
        <ProductsSection />
        <AboutSection />
        <ServicesSection />
        <TestimonialsSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}

export default App;
