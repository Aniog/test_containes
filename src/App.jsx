import HeroSection from './components/animal/HeroSection';
import FeaturedAnimals from './components/animal/FeaturedAnimals';
import FunFacts from './components/animal/FunFacts';
import AnimalHabitats from './components/animal/AnimalHabitats';
import Footer from './components/animal/Footer';

function App() {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <FeaturedAnimals />
      <FunFacts />
      <AnimalHabitats />
      <Footer />
    </div>
  );
}

export default App;
