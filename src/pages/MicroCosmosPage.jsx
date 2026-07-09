import Nav from '@/components/microcosmos/Nav';
import Hero from '@/components/microcosmos/Hero';
import ExploreSection from '@/components/microcosmos/ExploreSection';
import GallerySection from '@/components/microcosmos/GallerySection';
import WorldsSection from '@/components/microcosmos/WorldsSection';
import ScienceSection from '@/components/microcosmos/ScienceSection';
import CtaBanner from '@/components/microcosmos/CtaBanner';
import AboutSection from '@/components/microcosmos/AboutSection';
import Footer from '@/components/microcosmos/Footer';

export default function MicroCosmosPage() {
  return (
    <div className="bg-[#050a0f] min-h-screen">
      <Nav />
      <Hero />
      <ExploreSection />
      <GallerySection />
      <WorldsSection />
      <ScienceSection />
      <CtaBanner />
      <AboutSection />
      <Footer />
    </div>
  );
}
