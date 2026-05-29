import Navbar from './components/microcosmos/Navbar';
import Hero from './components/microcosmos/Hero';
import ExploreSection from './components/microcosmos/ExploreSection';
import GallerySection from './components/microcosmos/GallerySection';
import OrganismsSection from './components/microcosmos/OrganismsSection';
import ScienceSection from './components/microcosmos/ScienceSection';
import SpotlightSection from './components/microcosmos/SpotlightSection';
import ContactSection from './components/microcosmos/ContactSection';
import Footer from './components/microcosmos/Footer';

function App() {
  return (
    <div className="min-h-screen bg-gray-950 text-white" style={{ fontFamily: 'Inter, sans-serif' }}>
      <Navbar />
      <Hero />
      <ExploreSection />
      <GallerySection />
      <OrganismsSection />
      <ScienceSection />
      <SpotlightSection />
      <ContactSection />
      <Footer />
    </div>
  );
}

export default App;
