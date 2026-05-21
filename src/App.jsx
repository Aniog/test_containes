import NavBar from '@/components/microcosmos/NavBar';
import HeroSection from '@/components/microcosmos/HeroSection';
import AboutSection from '@/components/microcosmos/AboutSection';
import GallerySection from '@/components/microcosmos/GallerySection';
import WorldsSection from '@/components/microcosmos/WorldsSection';
import TechniquesSection from '@/components/microcosmos/TechniquesSection';
import FeaturedSection from '@/components/microcosmos/FeaturedSection';
import CtaSection from '@/components/microcosmos/CtaSection';
import Footer from '@/components/microcosmos/Footer';

function App() {
  return (
    <div className="bg-[#050a14] min-h-screen text-white">
      <NavBar />
      <HeroSection />
      <AboutSection />
      <GallerySection />
      <WorldsSection />
      <TechniquesSection />
      <FeaturedSection />
      <CtaSection />
      <Footer />
    </div>
  );
}

export default App;
