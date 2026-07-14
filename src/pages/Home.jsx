import { useEffect, useRef } from 'react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import Bestsellers from '@/components/home/Bestsellers.jsx'
import BrandStory from '@/components/home/BrandStory.jsx'
import CategoryTiles from '@/components/home/CategoryTiles.jsx'
import HeroSection from '@/components/home/HeroSection.jsx'
import Newsletter from '@/components/home/Newsletter.jsx'
import Testimonials from '@/components/home/Testimonials.jsx'
import TrustBar from '@/components/home/TrustBar.jsx'
import UgcReel from '@/components/home/UgcReel.jsx'

const Home = () => {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <main ref={containerRef} className="bg-velmora-cream text-velmora-ink">
      <HeroSection />
      <TrustBar />
      <Bestsellers />
      <UgcReel />
      <CategoryTiles />
      <BrandStory />
      <Testimonials />
      <Newsletter />
    </main>
  )
}

export default Home
