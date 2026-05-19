import HeroSection from './components/microcosmos/HeroSection';
import ExploreSection from './components/microcosmos/ExploreSection';
import GallerySection from './components/microcosmos/GallerySection';
import WorldsSection from './components/microcosmos/WorldsSection';
import ScienceSection from './components/microcosmos/ScienceSection';
import CreaturesSection from './components/microcosmos/CreaturesSection';
import QuoteSection from './components/microcosmos/QuoteSection';
import ContactSection from './components/microcosmos/ContactSection';
import Footer from './components/microcosmos/Footer';

function App() {
  return (
    <div className="bg-black min-h-screen">
      <HeroSection />
      <ExploreSection />
      <GallerySection />
      <WorldsSection />
      <ScienceSection />
      <CreaturesSection />
      <QuoteSection />
      <ContactSection />
      <Footer />
    </div>
  );
}

export default App;
