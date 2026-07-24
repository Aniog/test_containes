import { useEffect, useRef } from 'react'
import { ImageHelper } from '@strikingly/sdk'
import HeroSection from '@/components/home/HeroSection'
import TrustBar from '@/components/home/TrustBar'
import Bestsellers from '@/components/home/Bestsellers'
import UgcReels from '@/components/home/UgcReels'
import CategoryTiles from '@/components/home/CategoryTiles'
import BrandStory from '@/components/home/BrandStory'
import Testimonials from '@/components/home/Testimonials'
import Newsletter from '@/components/home/Newsletter'
import strkImgConfig from '@/strk-img-config.json'

function Home() {
  const pageRef = useRef(null)

  useEffect(() => {
    let cleanupImages
    const frameId = window.requestAnimationFrame(() => {
      cleanupImages = ImageHelper.loadImages(strkImgConfig, pageRef.current)
    })

    return () => {
      window.cancelAnimationFrame(frameId)
      if (typeof cleanupImages === 'function') cleanupImages()
    }
  }, [])

  return (
    <main ref={pageRef}>
      <HeroSection />
      <TrustBar />
      <Bestsellers />
      <UgcReels />
      <CategoryTiles />
      <BrandStory />
      <Testimonials />
      <Newsletter />
    </main>
  )
}

export default Home
