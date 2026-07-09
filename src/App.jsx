import Navbar from './components/microcosmos/Navbar';
import HeroSection from './components/microcosmos/HeroSection';
import AboutSection from './components/microcosmos/AboutSection';
import CategoriesSection from './components/microcosmos/CategoriesSection';
import GallerySection from './components/microcosmos/GallerySection';
import MicroscopySection from './components/microcosmos/MicroscopySection';
import EcosystemsSection from './components/microcosmos/EcosystemsSection';
import QuoteSection from './components/microcosmos/QuoteSection';
import SpotlightSection from './components/microcosmos/SpotlightSection';
import TimelineSection from './components/microcosmos/TimelineSection';
import CtaSection from './components/microcosmos/CtaSection';
import Footer from './components/microcosmos/Footer';
import './App.css';

function App() {
  return (
    <div className="bg-cosmos-bg min-h-screen">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <CategoriesSection />
      <GallerySection />
      <MicroscopySection />
      <EcosystemsSection />
      <QuoteSection />
      <SpotlightSection />
      <TimelineSection />
      <CtaSection />
      <Footer />
    </div>
  );
}

export default App;
