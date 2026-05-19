import Navbar from './components/horses/Navbar';
import HeroSection from './components/horses/HeroSection';
import AboutSection from './components/horses/AboutSection';
import BreedsSection from './components/horses/BreedsSection';
import GallerySection from './components/horses/GallerySection';
import Footer from './components/horses/Footer';

function App() {
  return (
    <div className="bg-cream min-h-screen">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <BreedsSection />
      <GallerySection />
      <Footer />
    </div>
  );
}

export default App;
