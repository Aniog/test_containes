import Navbar from './components/microcosmos/Navbar';
import HeroSection from './components/microcosmos/HeroSection';
import AboutSection from './components/microcosmos/AboutSection';
import GallerySection from './components/microcosmos/GallerySection';
import WorldsSection from './components/microcosmos/WorldsSection';
import TechniquesSection from './components/microcosmos/TechniquesSection';
import MosaicSection from './components/microcosmos/MosaicSection';
import ScaleSection from './components/microcosmos/ScaleSection';
import CtaSection from './components/microcosmos/CtaSection';
import Footer from './components/microcosmos/Footer';

function App() {
  return (
    <div className="min-h-screen bg-[#050a0f] text-slate-200" style={{ fontFamily: 'Inter, sans-serif' }}>
      <Navbar />
      <HeroSection />
      <AboutSection />
      <GallerySection />
      <WorldsSection />
      <TechniquesSection />
      <MosaicSection />
      <ScaleSection />
      <CtaSection />
      <Footer />
    </div>
  );
}

export default App;
