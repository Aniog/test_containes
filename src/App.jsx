import './App.css';
import NavBar from './components/microcosmos/NavBar';
import HeroSection from './components/microcosmos/HeroSection';
import AboutSection from './components/microcosmos/AboutSection';
import GallerySection from './components/microcosmos/GallerySection';
import WorldsSection from './components/microcosmos/WorldsSection';
import OrganismsSection from './components/microcosmos/OrganismsSection';
import StatsSection from './components/microcosmos/StatsSection';
import FooterSection from './components/microcosmos/FooterSection';

function App() {
  return (
    <div className="bg-black min-h-screen text-white">
      <NavBar />
      <HeroSection />
      <AboutSection />
      <GallerySection />
      <div id="worlds">
        <WorldsSection />
      </div>
      <div id="organisms">
        <OrganismsSection />
      </div>
      <StatsSection />
      <FooterSection />
    </div>
  );
}

export default App;

