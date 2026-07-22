import { useEffect, useRef } from 'react'
import { ImageHelper } from '@strikingly/sdk'
import Bestsellers from '@/components/home/Bestsellers.jsx'
import BrandStory from '@/components/home/BrandStory.jsx'
import CategoryTiles from '@/components/home/CategoryTiles.jsx'
import HeroSection from '@/components/home/HeroSection.jsx'
import Newsletter from '@/components/home/Newsletter.jsx'
import Testimonials from '@/components/home/Testimonials.jsx'
import TrustBar from '@/components/home/TrustBar.jsx'
import UgcReels from '@/components/home/UgcReels.jsx'
import strkImgConfig from '@/strk-img-config.json'

export default function Home() {
  const containerRef = useRef(null)

  useEffect(() => {
    let cleanupImages
    const frameId = window.requestAnimationFrame(() => {
      cleanupImages = ImageHelper.loadImages(strkImgConfig, containerRef.current)
    })

    return () => {
      window.cancelAnimationFrame(frameId)
      if (typeof cleanupImages === 'function') {
        cleanupImages()
      }
    }
  }, [])

  return (
    <main ref={containerRef}>
      <HeroSection />
      <TrustBar />
      <Bestsellers />
      <UgcReels />
      <CategoryTiles />
      <BrandStory />
      <Testimonials />
      <Newsletter />
      <section id="journal" className="sr-only">Velmora Journal</section>
    </main>
  )
}
