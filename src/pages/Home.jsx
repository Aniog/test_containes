import NavBar from '@/components/home/NavBar';
import HeroSection from '@/components/home/HeroSection';
import AboutSection from '@/components/home/AboutSection';
import GallerySection from '@/components/home/GallerySection';
import CategoriesSection from '@/components/home/CategoriesSection';
import SpecimensSection from '@/components/home/SpecimensSection';
import FactsSection from '@/components/home/FactsSection';
import FooterSection from '@/components/home/FooterSection';

export default function Home() {
  return (
    <div className="min-h-screen bg-[#050d1a]">
      <NavBar />
      <HeroSection />
      <AboutSection />
      <GallerySection />
      <CategoriesSection />
      <SpecimensSection />
      <FactsSection />
      <FooterSection />
    </div>
  );
}
