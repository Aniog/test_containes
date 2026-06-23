import './App.css';
import HeroSection from './components/HeroSection';
import IntroSection from './components/IntroSection';
import GalleryGrid from './components/GalleryGrid';
import SpecimenCards from './components/SpecimenCards';
import ExploreSection from './components/ExploreSection';
import FactsSection from './components/FactsSection';
import Footer from './components/Footer';

function App() {
  return (
    <div className="bg-cosmos-dark text-cosmos-text font-sans">
      <HeroSection />
      <IntroSection />
      <GalleryGrid />
      <SpecimenCards />
      <ExploreSection />
      <FactsSection />
      <Footer />
    </div>
  );
}

export default App;

