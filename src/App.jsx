import Navbar from './components/microcosmos/Navbar';
import HeroSection from './components/microcosmos/HeroSection';
import ExploreSection from './components/microcosmos/ExploreSection';
import FeatureSection from './components/microcosmos/FeatureSection';
import GallerySection from './components/microcosmos/GallerySection';
import ScaleSection from './components/microcosmos/ScaleSection';
import DiscoveriesSection from './components/microcosmos/DiscoveriesSection';
import CtaSection from './components/microcosmos/CtaSection';
import Footer from './components/microcosmos/Footer';

function App() {
  return (
    <div className="min-h-screen bg-[#050a0f]">
      <Navbar />
      <HeroSection />
      <ExploreSection />
      <FeatureSection />
      <GallerySection />
      <ScaleSection />
      <DiscoveriesSection />
      <CtaSection />
      <Footer />
    </div>
  );
}

export default App;
