import { useEffect, useRef } from 'react'
import { ImageHelper } from '@strikingly/sdk'
import Bestsellers from '@/components/home/Bestsellers'
import CategoryTiles from '@/components/home/CategoryTiles'
import Hero from '@/components/home/Hero'
import JournalPreview from '@/components/home/JournalPreview'
import Newsletter from '@/components/home/Newsletter'
import StorySection from '@/components/home/StorySection'
import Testimonials from '@/components/home/Testimonials'
import TrustBar from '@/components/home/TrustBar'
import UgcReels from '@/components/home/UgcReels'
import strkImgConfig from '@/strk-img-config.json'

const Home = ({ onAddToCart }) => {
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
    <main ref={pageRef} className="bg-velmora-cream text-velmora-ink">
      <Hero />
      <TrustBar />
      <Bestsellers onAdd={onAddToCart} />
      <UgcReels />
      <CategoryTiles />
      <StorySection />
      <Testimonials />
      <JournalPreview />
      <Newsletter />
    </main>
  )
}

export default Home
