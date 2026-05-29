import HeroSection from '@/components/home/HeroSection';
import IntroSection from '@/components/home/IntroSection';
import OrganismsSection from '@/components/home/OrganismsSection';
import GallerySection from '@/components/home/GallerySection';
import FactsSection from '@/components/home/FactsSection';
import HabitatsSection from '@/components/home/HabitatsSection';
import Footer from '@/components/home/Footer';

export default function Home() {
  return (
    <div className="bg-[#050a14] min-h-screen">
      <HeroSection />
      <IntroSection />
      <div id="organisms">
        <OrganismsSection />
      </div>
      <div id="gallery">
        <GallerySection />
      </div>
      <div id="facts">
        <FactsSection />
      </div>
      <div id="habitats">
        <HabitatsSection />
      </div>
      <Footer />
    </div>
  );
}
