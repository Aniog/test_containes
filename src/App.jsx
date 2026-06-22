import './App.css'
import HeroSection from './components/home/HeroSection'
import AboutSection from './components/home/AboutSection'
import GallerySection from './components/home/GallerySection'
import OrganismsSection from './components/home/OrganismsSection'
import TechniquesSection from './components/home/TechniquesSection'
import ShowcaseSection from './components/home/ShowcaseSection'
import FullWidthSection from './components/home/FullWidthSection'
import StatsSection from './components/home/StatsSection'
import Footer from './components/home/Footer'

function App() {
  return (
    <div className="min-h-screen bg-slate-950">
      <HeroSection />
      <AboutSection />
      <StatsSection />
      <GallerySection />
      <FullWidthSection />
      <OrganismsSection />
      <TechniquesSection />
      <ShowcaseSection />
      <Footer />
    </div>
  )
}

export default App
