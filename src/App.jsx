import HeroSection from './components/microcosm/HeroSection'
import IntroSection from './components/microcosm/IntroSection'
import GallerySection from './components/microcosm/GallerySection'
import FeaturedSections from './components/microcosm/FeaturedSections'
import WondersSection from './components/microcosm/WondersSection'
import QuoteSection from './components/microcosm/QuoteSection'
import Footer from './components/microcosm/Footer'
import './App.css'

function App() {
  return (
    <div className="bg-deep min-h-screen">
      <HeroSection />
      <IntroSection />
      <GallerySection />
      <FeaturedSections />
      <WondersSection />
      <QuoteSection />
      <Footer />
    </div>
  )
}

export default App
