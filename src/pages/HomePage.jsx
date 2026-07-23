import { useEffect, useRef } from 'react'
import Bestsellers from '@/components/home/Bestsellers'
import CategoryTiles from '@/components/home/CategoryTiles'
import HeroSection from '@/components/home/HeroSection'
import Newsletter from '@/components/home/Newsletter'
import StorySection from '@/components/home/StorySection'
import Testimonials from '@/components/home/Testimonials'
import TrustBar from '@/components/home/TrustBar'
import UgcReels from '@/components/home/UgcReels'
import { categories, products, testimonials, ugcItems } from '@/data/products'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'

export default function HomePage({ onAddToCart }) {
  const pageRef = useRef(null)

  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, pageRef.current)
    })
    return () => window.cancelAnimationFrame(frameId)
  }, [])

  return (
    <main ref={pageRef} className="bg-velmora-porcelain text-velmora-ink">
      <HeroSection />
      <TrustBar />
      <Bestsellers products={products} onAddToCart={onAddToCart} />
      <UgcReels items={ugcItems} />
      <CategoryTiles categories={categories} />
      <StorySection />
      <Testimonials testimonials={testimonials} />
      <section id="journal" className="hairline bg-velmora-porcelain py-14 text-center text-velmora-ink">
        <div className="velmora-container">
          <p className="eyebrow">Journal</p>
          <h2 className="mt-3 font-serif text-4xl font-semibold text-velmora-ink">Care notes, gifting edits, and quiet luxury styling.</h2>
        </div>
      </section>
      <Newsletter />
    </main>
  )
}
