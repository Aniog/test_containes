import './App.css'
import NavBar from './components/NavBar'
import HeroSection from './components/HeroSection'
import FeaturedAnimals from './components/FeaturedAnimals'
import AnimalHabitats from './components/AnimalHabitats'
import FunFacts from './components/FunFacts'
import ConservationSection from './components/ConservationSection'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen">
      <NavBar />
      <HeroSection />
      <FeaturedAnimals />
      <AnimalHabitats />
      <FunFacts />
      <ConservationSection />
      <Footer />
    </div>
  )
}

export default App
