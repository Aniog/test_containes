import NavBar from './components/applewatch/NavBar';
import HeroSection from './components/applewatch/HeroSection';
import FeaturesSection from './components/applewatch/FeaturesSection';
import SeriesSection from './components/applewatch/SeriesSection';
import SpecsSection from './components/applewatch/SpecsSection';
import CTASection from './components/applewatch/CTASection';
import Footer from './components/applewatch/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <NavBar />
      <HeroSection />
      <FeaturesSection />
      <SeriesSection />
      <SpecsSection />
      <CTASection />
      <Footer />
    </div>
  );
}

export default App;
