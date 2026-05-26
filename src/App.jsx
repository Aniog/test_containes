import HeroSection from './components/pizza/HeroSection';
import AboutSection from './components/pizza/AboutSection';
import MenuSection from './components/pizza/MenuSection';
import FeaturesSection from './components/pizza/FeaturesSection';
import ContactSection from './components/pizza/ContactSection';
import Footer from './components/pizza/Footer';

function App() {
  return (
    <div className="bg-[#FFF8F0]">
      <HeroSection />
      <AboutSection />
      <MenuSection />
      <FeaturesSection />
      <ContactSection />
      <Footer />
    </div>
  );
}

export default App;
