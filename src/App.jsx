import { useEffect, useRef } from 'react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from './strk-img-config.json'
import TopBar from './components/TopBar'
import Breadcrumb from './components/Breadcrumb'
import Hero from './components/Hero'
import FeaturedGenerators from './components/FeaturedGenerators'
import BrowseByCategory from './components/BrowseByCategory'
import AllGenerators from './components/AllGenerators'
import HowItWorks from './components/HowItWorks'
import WhyStrikingly from './components/WhyStrikingly'
import FAQ from './components/FAQ'
import ClosingCTA from './components/ClosingCTA'
import Footer from './components/Footer'

function App() {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <div ref={containerRef} className="min-h-screen bg-white">
      <TopBar />
      <main>
        <Breadcrumb />
        <Hero />
        <FeaturedGenerators />
        <BrowseByCategory />
        <AllGenerators />
        <HowItWorks />
        <WhyStrikingly />
        <FAQ />
        <ClosingCTA />
      </main>
      <Footer />
    </div>
  )
}

export default App
