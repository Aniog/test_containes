import './App.css';
import { Toaster } from 'sonner';
import Navbar from './components/Navbar';
import HeroSection from './components/home/HeroSection';
import ProductsSection from './components/products/ProductsSection';
import AboutSection from './components/about/AboutSection';
import ContactSection from './components/contact/ContactSection';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-bg-light">
      <Toaster position="top-right" richColors />
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
