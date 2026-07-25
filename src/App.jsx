import HeroSection from '@/components/home/HeroSection';
import AnimalCategories from '@/components/home/AnimalCategories';
import FeaturedAnimals from '@/components/home/FeaturedAnimals';
import FunFacts from '@/components/home/FunFacts';
import ConservationSection from '@/components/home/ConservationSection';
import Footer from '@/components/home/Footer';

function App() {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <AnimalCategories />
      <FeaturedAnimals />
      <FunFacts />
      <ConservationSection />
      <Footer />
    </div>
  );
}

export default App;
