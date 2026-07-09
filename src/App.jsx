import HeroSection from '@/components/microcosmos/HeroSection';
import IntroSection from '@/components/microcosmos/IntroSection';
import FeaturedWorlds from '@/components/microcosmos/FeaturedWorlds';
import GallerySection from '@/components/microcosmos/GallerySection';
import CategoriesSection from '@/components/microcosmos/CategoriesSection';
import FactsSection from '@/components/microcosmos/FactsSection';
import FooterSection from '@/components/microcosmos/FooterSection';

function App() {
  return (
    <div className="bg-[#050a0f] min-h-screen">
      <HeroSection />
      <IntroSection />
      <FeaturedWorlds />
      <GallerySection />
      <CategoriesSection />
      <FactsSection />
      <FooterSection />
    </div>
  );
}

export default App;
