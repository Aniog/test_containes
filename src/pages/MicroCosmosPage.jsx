import Navbar from '@/components/microcosmos/Navbar';
import HeroSection from '@/components/microcosmos/HeroSection';
import AboutSection from '@/components/microcosmos/AboutSection';
import GallerySection from '@/components/microcosmos/GallerySection';
import WorldsSection from '@/components/microcosmos/WorldsSection';
import TechSection from '@/components/microcosmos/TechSection';
import SpotlightSection from '@/components/microcosmos/SpotlightSection';
import CtaSection from '@/components/microcosmos/CtaSection';
import Footer from '@/components/microcosmos/Footer';

const MicroCosmosPage = () => (
  <div className="bg-[#050a14] min-h-screen">
    <Navbar />
    <HeroSection />
    <AboutSection />
    <GallerySection />
    <WorldsSection />
    <TechSection />
    <SpotlightSection />
    <CtaSection />
    <Footer />
  </div>
);

export default MicroCosmosPage;
