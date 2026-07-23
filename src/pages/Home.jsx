import { useEffect, useRef } from 'react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '../strk-img-config.json'
import Hero from '../components/home/Hero.jsx'
import TrustBar from '../components/home/TrustBar.jsx'
import Bestsellers from '../components/home/Bestsellers.jsx'
import UgcReels from '../components/home/UgcReels.jsx'
import CategoryTiles from '../components/home/CategoryTiles.jsx'
import StorySection from '../components/home/StorySection.jsx'
import Testimonials from '../components/home/Testimonials.jsx'
import Newsletter from '../components/home/Newsletter.jsx'

export default function Home({ products, onAdd }) {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <main ref={containerRef} className="bg-velmora-cream text-velmora-ink">
      <Hero />
      <TrustBar />
      <Bestsellers products={products} onAdd={onAdd} />
      <UgcReels />
      <CategoryTiles />
      <StorySection />
      <Testimonials />
      <Newsletter />
      <section id="journal" className="sr-only" aria-label="Journal anchor">Velmora journal</section>
    </main>
  )
}
