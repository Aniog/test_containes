import NavBar from './components/microcosmos/NavBar';
import HeroSection from './components/microcosmos/HeroSection';
import AboutSection from './components/microcosmos/AboutSection';
import GallerySection from './components/microcosmos/GallerySection';
import OrganismsSection from './components/microcosmos/OrganismsSection';
import TechniquesSection from './components/microcosmos/TechniquesSection';
import PanoramaSection from './components/microcosmos/PanoramaSection';
import SpotlightSection from './components/microcosmos/SpotlightSection';
import QuickGridSection from './components/microcosmos/QuickGridSection';
import FooterSection from './components/microcosmos/FooterSection';
import './App.css';

function App() {
  return (
    <div className="min-h-screen bg-cosmos-bg text-cosmos-text">
      <NavBar />
      <HeroSection />
      <AboutSection />
      <GallerySection />
      <OrganismsSection />
      <TechniquesSection />
      <PanoramaSection />
      <SpotlightSection />
      <QuickGridSection />
      <FooterSection />
    </div>
  );
}

export default App;
