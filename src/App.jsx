import NavBar from './components/animal/NavBar';
import HeroSection from './components/animal/HeroSection';
import FeaturedAnimals from './components/animal/FeaturedAnimals';
import HabitatsSection from './components/animal/HabitatsSection';
import FunFacts from './components/animal/FunFacts';
import ConservationSection from './components/animal/ConservationSection';
import Footer from './components/animal/Footer';

function App() {
  return (
    <div className="min-h-screen bg-stone-50">
      <NavBar />
      <HeroSection />
      <FeaturedAnimals />
      <HabitatsSection />
      <FunFacts />
      <ConservationSection />
      <Footer />
    </div>
  );
}

export default App;
