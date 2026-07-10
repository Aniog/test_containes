import HeroSection from './components/home/HeroSection'
import ExploreSection from './components/home/ExploreSection'
import GallerySection from './components/home/GallerySection'
import ShowcaseSection from './components/home/ShowcaseSection'
import ImageGridSection from './components/home/ImageGridSection'
import FactsSection from './components/home/FactsSection'
import WideImageSection from './components/home/WideImageSection'
import Footer from './components/home/Footer'

function App() {
  return (
    <div className="min-h-screen bg-midnight text-slate-100">
      <HeroSection />
      <ExploreSection />
      <GallerySection />
      <ShowcaseSection />
      <ImageGridSection />
      <FactsSection />
      <WideImageSection />
      <Footer />
    </div>
  )
}

export default App
