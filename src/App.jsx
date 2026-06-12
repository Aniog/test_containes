import "./App.css";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import HeroSection from "./components/home/HeroSection";
import ProductsSection from "./components/home/ProductsSection";
import FeaturesSection from "./components/home/FeaturesSection";
import AboutSection from "./components/home/AboutSection";
import TestimonialsSection from "./components/home/TestimonialsSection";
import CtaBanner from "./components/home/CtaBanner";
import ContactSection from "./components/home/ContactSection";

function App() {
  return (
    <div className="min-h-screen font-inter">
      <Navbar />
      <main>
        <HeroSection />
        <ProductsSection />
        <FeaturesSection />
        <AboutSection />
        <TestimonialsSection />
        <CtaBanner />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}

export default App;
