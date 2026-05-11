import HeroSection from './components/HeroSection'
import AboutSection from './components/AboutSection'
import EggTypesSection from './components/EggTypesSection'
import NutritionSection from './components/NutritionSection'
import RecipesSection from './components/RecipesSection'
import FunFactsSection from './components/FunFactsSection'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <AboutSection />
      <EggTypesSection />
      <NutritionSection />
      <RecipesSection />
      <FunFactsSection />
      <Footer />
    </div>
  )
}

export default App
