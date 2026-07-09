import './App.css'
import HeroSection from './components/home/HeroSection'
import GallerySection from './components/home/GallerySection'
import CategoriesSection from './components/home/CategoriesSection'
import FeaturedSection from './components/home/FeaturedSection'
import FooterSection from './components/home/FooterSection'

function App() {
  return (
    <main className="app">
      <HeroSection />
      <GallerySection />
      <FeaturedSection />
      <CategoriesSection />
      <FooterSection />
    </main>
  )
}

export default App
