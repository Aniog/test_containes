import Navbar from './components/desk/Navbar';
import Hero from './components/desk/Hero';
import WhySection from './components/desk/WhySection';
import TipsSection from './components/desk/TipsSection';
import ProductsSection from './components/desk/ProductsSection';
import FaqSection from './components/desk/FaqSection';
import ContactSection from './components/desk/ContactSection';
import Footer from './components/desk/Footer';

function App() {
  return (
    <div className="min-h-screen bg-slate-50 font-sans">
      <Navbar />
      <Hero />
      <WhySection />
      <TipsSection />
      <ProductsSection />
      <FaqSection />
      <ContactSection />
      <Footer />
    </div>
  );
}

export default App;
