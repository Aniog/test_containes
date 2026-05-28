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
    <div className="bg-gray-950" style={{ fontFamily: 'Inter, sans-serif' }}>
      <Navbar />
      <Hero />
      <ExploreSection />
      <GallerySection />
      <OrganismsSection />
      <ScienceSection />
      <SpotlightSection />
      <AboutSection />
      <Footer />
    </div>
  );
}

export default App;
