import Navbar from './components/Navbar';
import HeroSection from './components/home/HeroSection';
import AboutSection from './components/home/AboutSection';
import GallerySection from './components/home/GallerySection';
import CategoriesSection from './components/home/CategoriesSection';
import CreaturesSection from './components/home/CreaturesSection';
import FactsSection from './components/home/FactsSection';
import Footer from './components/home/Footer';

function App() {
  return (
    <div className="min-h-screen bg-[#050d1a]">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <GallerySection />
      <CategoriesSection />
      <CreaturesSection />
      <FactsSection />
      <Footer />
    </div>
  );
}

export default App;
