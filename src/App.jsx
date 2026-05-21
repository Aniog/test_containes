import NavBar from './components/microcosmos/NavBar';
import HeroSection from './components/microcosmos/HeroSection';
import IntroSection from './components/microcosmos/IntroSection';
import OrganismsSection from './components/microcosmos/OrganismsSection';
import FeatureSection from './components/microcosmos/FeatureSection';
import GallerySection from './components/microcosmos/GallerySection';
import DiscoverySection from './components/microcosmos/DiscoverySection';
import CtaSection from './components/microcosmos/CtaSection';
import Footer from './components/microcosmos/Footer';

function App() {
  return (
    <div className="bg-gray-950 text-white min-h-screen">
      <NavBar />
      <HeroSection />
      <IntroSection />
      <OrganismsSection />
      <FeatureSection />
      <GallerySection />
      <DiscoverySection />
      <CtaSection />
      <Footer />
    </div>
  );
}

export default App;
