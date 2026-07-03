import './App.css';
import Navbar from './components/sections/Navbar';
import HeroSection from './components/sections/HeroSection';
import IntroSection from './components/sections/IntroSection';
import GallerySection from './components/sections/GallerySection';
import OrganismsSection from './components/sections/OrganismsSection';
import MicroscopySection from './components/sections/MicroscopySection';
import EcosystemSection from './components/sections/EcosystemSection';
import FactsSection from './components/sections/FactsSection';
import CloseupSection from './components/sections/CloseupSection';
import FooterSection from './components/sections/FooterSection';

function App() {
  return (
    <div className="bg-cosmos-bg min-h-screen">
      <Navbar />
      <HeroSection />
      <IntroSection />
      <GallerySection />
      <OrganismsSection />
      <MicroscopySection />
      <EcosystemSection />
      <FactsSection />
      <CloseupSection />
      <FooterSection />
    </div>
  );
}

export default App;
