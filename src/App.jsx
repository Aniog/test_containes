import './App.css';
import HeroSection from './components/animal/HeroSection';
import HabitatsSection from './components/animal/HabitatsSection';
import FeaturedAnimal from './components/animal/FeaturedAnimal';
import GallerySection from './components/animal/GallerySection';
import FactsSection from './components/animal/FactsSection';
import ConservationSection from './components/animal/ConservationSection';
import Footer from './components/animal/Footer';

export default function App() {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <HabitatsSection />
      <FeaturedAnimal />
      <GallerySection />
      <FactsSection />
      <ConservationSection />
      <Footer />
    </div>
  );
}
