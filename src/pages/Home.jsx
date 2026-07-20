import { useEffect, useRef } from 'react'
import { ImageHelper } from '@strikingly/sdk'
import HeroSection from '@/components/home/HeroSection.jsx'
import TrustBar from '@/components/home/TrustBar.jsx'
import BestsellersSection from '@/components/home/BestsellersSection.jsx'
import UgcReelSection from '@/components/home/UgcReelSection.jsx'
import CategoryTiles from '@/components/home/CategoryTiles.jsx'
import BrandStory from '@/components/home/BrandStory.jsx'
import Testimonials from '@/components/home/Testimonials.jsx'
import Newsletter from '@/components/home/Newsletter.jsx'
import { categories, products, ugcMoments } from '@/data/products.js'
import strkImgConfig from '@/strk-img-config.json'

export default function Home() {
  const pageRef = useRef(null)

  useEffect(() => {
    let cleanup = () => {}
    const frameId = window.requestAnimationFrame(() => {
      cleanup = ImageHelper.loadImages(strkImgConfig, pageRef.current)
    })

    return () => {
      window.cancelAnimationFrame(frameId)
      cleanup()
    }
  }, [])

  return (
    <main ref={pageRef} className="bg-velmora-ivory text-velmora-espresso">
      <HeroSection />
      <TrustBar />
      <BestsellersSection products={products} />
      <UgcReelSection moments={ugcMoments} />
      <CategoryTiles categories={categories} />
      <BrandStory />
      <Testimonials />
      <Newsletter />
    </main>
  )
}
