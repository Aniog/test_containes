import NavBar from '@/components/microcosmos/NavBar';
import HeroSection from '@/components/microcosmos/HeroSection';
import IntroSection from '@/components/microcosmos/IntroSection';
import CategoriesSection from '@/components/microcosmos/CategoriesSection';
import GallerySection from '@/components/microcosmos/GallerySection';
import FeaturedSection from '@/components/microcosmos/FeaturedSection';
import SpecimenGrid from '@/components/microcosmos/SpecimenGrid';
import QuoteSection from '@/components/microcosmos/QuoteSection';
import ArticlesSection from '@/components/microcosmos/ArticlesSection';
import Footer from '@/components/microcosmos/Footer';

const MicroCosmosPage = () => {
  return (
    <div className="min-h-screen bg-[#050810]">
      <NavBar />
      <main>
        <HeroSection />
        <IntroSection />
        <CategoriesSection />
        <GallerySection />
        <FeaturedSection />
        <SpecimenGrid />
        <QuoteSection />
        <ArticlesSection />
      </main>
      <Footer />
    </div>
  );
};

export default MicroCosmosPage;
