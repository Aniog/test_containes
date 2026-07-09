import Navbar from './components/microcosmos/Navbar';
import Hero from './components/microcosmos/Hero';
import ExploreSection from './components/microcosmos/ExploreSection';
import GallerySection from './components/microcosmos/GallerySection';
import OrganismsSection from './components/microcosmos/OrganismsSection';
import ScienceSection from './components/microcosmos/ScienceSection';
import SpotlightSection from './components/microcosmos/SpotlightSection';
import AboutSection from './components/microcosmos/AboutSection';
import Footer from './components/microcosmos/Footer';

function App() {
  return (
    <div className="bg-[#050a0f] min-h-screen">
      <Navbar />
      <Hero />
      <ExploreSection />
      <div className="section-divider" />
      <GallerySection />
      <div className="section-divider" />
      <OrganismsSection />
      <div className="section-divider" />
      <ScienceSection />
      <div className="section-divider" />
      <SpotlightSection />
      <div className="section-divider" />
      <AboutSection />
      <Footer />
    </div>
  );
}

export default App;
