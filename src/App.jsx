import Navbar from './components/sections/Navbar';
import HeroSection from './components/sections/HeroSection';
import DishesSection from './components/sections/DishesSection';
import RegionsSection from './components/sections/RegionsSection';
import IngredientsSection from './components/sections/IngredientsSection';
import FooterSection from './components/sections/FooterSection';

function App() {
  return (
    <div className="min-h-screen bg-[#FDF6EC]" style={{ fontFamily: "'Inter', sans-serif" }}>
      <Navbar />
      <HeroSection />
      <DishesSection />
      <div id="regions">
        <RegionsSection />
      </div>
      <div id="ingredients">
        <IngredientsSection />
      </div>
      <FooterSection />
    </div>
  );
}

export default App;
