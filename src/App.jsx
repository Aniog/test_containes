import HeroSection from './components/HeroSection'
import FeaturedAnimals from './components/FeaturedAnimals'
import AnimalKingdoms from './components/AnimalKingdoms'
import FunFacts from './components/FunFacts'
import SiteFooter from './components/SiteFooter'

function App() {
  return (
    <div className="min-h-screen bg-[#fafaf8]">
      <HeroSection />
      <FeaturedAnimals />
      <AnimalKingdoms />
      <FunFacts />
      <SiteFooter />
    </div>
  )
}

export default App
