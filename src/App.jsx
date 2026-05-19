import NavBar from './components/microcosmos/NavBar';
import HeroSection from './components/microcosmos/HeroSection';
import WorldSection from './components/microcosmos/WorldSection';
import GallerySection from './components/microcosmos/GallerySection';
import SpecimensSection from './components/microcosmos/SpecimensSection';
import EcosystemSection from './components/microcosmos/EcosystemSection';
import PhotoStripSection from './components/microcosmos/PhotoStripSection';
import ContactSection from './components/microcosmos/ContactSection';

function App() {
  return (
    <div className="bg-black min-h-screen text-white">
      <NavBar />
      <HeroSection />
      <WorldSection />
      <GallerySection />
      <SpecimensSection />
      <EcosystemSection />
      <PhotoStripSection />
      <ContactSection />
    </div>
  );
}

export default App;
