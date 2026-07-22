import NavBar from './components/microcosmos/NavBar';
import HeroSection from './components/microcosmos/HeroSection';
import ExploreSection from './components/microcosmos/ExploreSection';
import GallerySection from './components/microcosmos/GallerySection';
import OrganismsSection from './components/microcosmos/OrganismsSection';
import ScienceSection from './components/microcosmos/ScienceSection';
import PhotoWallSection from './components/microcosmos/PhotoWallSection';
import SpotlightSection from './components/microcosmos/SpotlightSection';
import Footer from './components/microcosmos/Footer';

function App() {
  return (
    <div className="bg-cosmos-bg min-h-screen text-cosmos-text font-sans">
      <NavBar />
      <HeroSection />
      <ExploreSection />
      <GallerySection />
      <OrganismsSection />
      <ScienceSection />
      <PhotoWallSection />
      <SpotlightSection />
      <Footer />
    </div>
  );
}

export default App;
