import './App.css';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import HeroSection from './components/home/HeroSection';
import ProductsSection from './components/home/ProductsSection';
import WhyUsSection from './components/home/WhyUsSection';
import AboutSection from './components/home/AboutSection';
import ContactSection from './components/home/ContactSection';

function App() {
  return (
    <div className="bg-steel-950 min-h-screen">
      <Navbar />
      <main>
        <HeroSection />
        <ProductsSection />
        <WhyUsSection />
        <AboutSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}

export default App;
