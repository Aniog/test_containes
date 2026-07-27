import Navbar from './components/layout/Navbar';
import HeroSection from './components/home/HeroSection';
import FeaturesSection from './components/home/FeaturesSection';
import AboutSection from './components/home/AboutSection';
import ContactSection from './components/home/ContactSection';
import Footer from './components/layout/Footer';

function App() {
  return (
    <div className="font-sans">
      <Navbar />
      <HeroSection />
      <FeaturesSection />
      <AboutSection />
      <ContactSection />
      <Footer />
    </div>
  );
}

export default App;
