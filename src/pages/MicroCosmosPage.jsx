import HeroSection from '@/components/microcosmos/HeroSection';
import IntroSection from '@/components/microcosmos/IntroSection';
import GallerySection from '@/components/microcosmos/GallerySection';
import OrganismsSection from '@/components/microcosmos/OrganismsSection';
import EnvironmentsSection from '@/components/microcosmos/EnvironmentsSection';
import TechniquesSection from '@/components/microcosmos/TechniquesSection';
import DiscoveriesSection from '@/components/microcosmos/DiscoveriesSection';
import PhotoGrid from '@/components/microcosmos/PhotoGrid';
import Footer from '@/components/microcosmos/Footer';

const MicroCosmosPage = () => {
  return (
    <div className="bg-gray-950 min-h-screen">
      <HeroSection />
      <IntroSection />
      <GallerySection />
      <OrganismsSection />
      <EnvironmentsSection />
      <TechniquesSection />
      <DiscoveriesSection />
      <PhotoGrid />
      <Footer />
    </div>
  );
};

export default MicroCosmosPage;
