import './App.css'
import Navbar from './components/layout/Navbar'
import HeroSection from './components/home/HeroSection'
import AboutSection from './components/home/AboutSection'
import CategoriesSection from './components/home/CategoriesSection'
import GallerySection from './components/home/GallerySection'
import SpecimensSection from './components/home/SpecimensSection'
import Footer from './components/home/Footer'

function App() {
  return (
    <div className="bg-[#050a14] min-h-screen">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <CategoriesSection />
      <GallerySection />
      <SpecimensSection />
      <Footer />
    </div>
  )
}

export default App
