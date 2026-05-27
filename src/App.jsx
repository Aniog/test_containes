import NavBar from './components/NavBar';
import HeroSection from './components/HeroSection';
import ExploreSection from './components/ExploreSection';
import GallerySection from './components/GallerySection';
import OrganismsSection from './components/OrganismsSection';
import ScienceSection from './components/ScienceSection';
import AboutSection from './components/AboutSection';
import Footer from './components/Footer';

function App() {
  return (
    <div className="bg-[#050a0f] min-h-screen">
      <NavBar />
      <HeroSection />
      <ExploreSection />
      <GallerySection />
      <OrganismsSection />
      <ScienceSection />
      <AboutSection />
      <Footer />
    </div>
  );
}

export default App;
