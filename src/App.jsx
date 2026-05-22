import Navbar from './components/microcosmos/Navbar';
import HeroSection from './components/microcosmos/HeroSection';
import AboutSection from './components/microcosmos/AboutSection';
import CategoriesSection from './components/microcosmos/CategoriesSection';
import FeaturedSection from './components/microcosmos/FeaturedSection';
import GallerySection from './components/microcosmos/GallerySection';
import HabitatsSection from './components/microcosmos/HabitatsSection';
import TechniquesSection from './components/microcosmos/TechniquesSection';
import CtaSection from './components/microcosmos/CtaSection';
import Footer from './components/microcosmos/Footer';

function App() {
  return (
    <div className="min-h-screen bg-[#050d1a] text-[#e8f4f8]">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <CategoriesSection />
      <FeaturedSection />
      <GallerySection />
      <HabitatsSection />
      <TechniquesSection />
      <CtaSection />
      <Footer />
    </div>
  );
}

export default App;
