import { useEffect, useRef } from 'react'
import { ImageHelper } from '@strikingly/sdk'
import HomeHero from '@/components/home/HomeHero'
import TrustBar from '@/components/home/TrustBar'
import Bestsellers from '@/components/home/Bestsellers'
import UgcReels from '@/components/home/UgcReels'
import CategoryTiles from '@/components/home/CategoryTiles'
import BrandStory from '@/components/home/BrandStory'
import Testimonials from '@/components/home/Testimonials'
import Newsletter from '@/components/home/Newsletter'
import strkImgConfig from '@/strk-img-config.json'

export default function Home() {
  const pageRef = useRef(null)

  useEffect(() => {
    let cleanup
    const frameId = window.requestAnimationFrame(() => {
      cleanup = ImageHelper.loadImages(strkImgConfig, pageRef.current)
    })

    return () => {
      window.cancelAnimationFrame(frameId)
      if (typeof cleanup === 'function') cleanup()
    }
  }, [])

  return (
    <main ref={pageRef} className="bg-velmora-ivory text-velmora-ink">
      <HomeHero />
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
