import Navbar from '@/components/microcosmos/Navbar';
import HeroSection from '@/components/microcosmos/HeroSection';
import ExploreSection from '@/components/microcosmos/ExploreSection';
import GallerySection from '@/components/microcosmos/GallerySection';
import FeaturesSection from '@/components/microcosmos/FeaturesSection';
import SpecimenSection from '@/components/microcosmos/SpecimenSection';
import CtaSection from '@/components/microcosmos/CtaSection';
import Footer from '@/components/microcosmos/Footer';

function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <Navbar />
      <HeroSection />
      <ExploreSection />
      <GallerySection />
      <FeaturesSection />
      <SpecimenSection />
      <CtaSection />
      <Footer />
    </div>
  );
}

export default App;
