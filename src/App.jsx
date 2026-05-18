import HeroSection from './components/sections/HeroSection';
import ExploreSection from './components/sections/ExploreSection';
import GallerySection from './components/sections/GallerySection';
import AboutSection from './components/sections/AboutSection';
import SpecimensSection from './components/sections/SpecimensSection';
import ScienceSection from './components/sections/ScienceSection';
import TeamSection from './components/sections/TeamSection';
import CtaSection from './components/sections/CtaSection';
import FooterSection from './components/sections/FooterSection';

function App() {
  return (
    <div className="bg-black min-h-screen text-white">
      <HeroSection />
      <ExploreSection />
      <GallerySection />
      <AboutSection />
      <SpecimensSection />
      <ScienceSection />
      <TeamSection />
      <CtaSection />
      <FooterSection />
    </div>
  );
}

export default App;
