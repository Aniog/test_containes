import Navbar from './components/home/Navbar';
import HeroSection from './components/home/HeroSection';
import AboutSection from './components/home/AboutSection';
import OrganismsSection from './components/home/OrganismsSection';
import GallerySection from './components/home/GallerySection';
import CategoriesSection from './components/home/CategoriesSection';
import FactsSection from './components/home/FactsSection';
import FooterSection from './components/home/FooterSection';

function App() {
  return (
    <div className="bg-[#050d1a] min-h-screen">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <div id="organisms">
        <OrganismsSection />
      </div>
      <GallerySection />
      <div id="categories">
        <CategoriesSection />
      </div>
      <div id="facts">
        <FactsSection />
      </div>
      <FooterSection />
    </div>
  );
}

export default App;
