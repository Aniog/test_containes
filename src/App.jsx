import Navbar from './components/cucumber/Navbar';
import Hero from './components/cucumber/Hero';
import Nutrition from './components/cucumber/Nutrition';
import Varieties from './components/cucumber/Varieties';
import Recipes from './components/cucumber/Recipes';
import Growing from './components/cucumber/Growing';
import FunFacts from './components/cucumber/FunFacts';
import Footer from './components/cucumber/Footer';

function App() {
  return (
    <div className="font-sans bg-cucumber-cream">
      <Navbar />
      <Hero />
      <Nutrition />
      <Varieties />
      <Recipes />
      <Growing />
      <FunFacts />
      <Footer />
    </div>
  );
}

export default App;
