import Navbar from './components/microcosmos/Navbar';
import Hero from './components/microcosmos/Hero';
import ExploreSection from './components/microcosmos/ExploreSection';
import GallerySection from './components/microcosmos/GallerySection';
import WorldsSection from './components/microcosmos/WorldsSection';
import ScienceSection from './components/microcosmos/ScienceSection';
import FullWidthBanner from './components/microcosmos/FullWidthBanner';
import DiscoverSection from './components/microcosmos/DiscoverSection';
import Footer from './components/microcosmos/Footer';

function App() {
  return (
    <div className="bg-cosmos-deep min-h-screen font-sans">
      <Navbar />
      <Hero />
      <ExploreSection />
      <GallerySection />
      <WorldsSection />
      <ScienceSection />
      <FullWidthBanner />
      <DiscoverSection />
      <Footer />
    </div>
  );
}

export default App;
