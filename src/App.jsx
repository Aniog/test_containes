import NavBar from './components/NavBar'
import HeroSection from './components/HeroSection'
import CategoriesSection from './components/CategoriesSection'
import GallerySection from './components/GallerySection'
import SpotlightSection from './components/SpotlightSection'
import HabitatsSection from './components/HabitatsSection'
import FactsSection from './components/FactsSection'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-[#1a2e1a]">
      <NavBar />
      <HeroSection />
      <CategoriesSection />
      <GallerySection />
      <section id="spotlight">
        <SpotlightSection />
      </section>
      <section id="habitats">
        <HabitatsSection />
      </section>
      <section id="facts">
        <FactsSection />
      </section>
      <Footer />
    </div>
  )
}

export default App
