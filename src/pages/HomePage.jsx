import { useEffect, useRef } from 'react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import HeroSection from '@/components/home/HeroSection.jsx'
import TrustBar from '@/components/home/TrustBar.jsx'
import UgcReelSection from '@/components/home/UgcReelSection.jsx'
import CategoryTiles from '@/components/home/CategoryTiles.jsx'
import StorySection from '@/components/home/StorySection.jsx'
import TestimonialsSection from '@/components/home/TestimonialsSection.jsx'
import NewsletterSection from '@/components/home/NewsletterSection.jsx'
import JournalStrip from '@/components/home/JournalStrip.jsx'
import ProductGrid from '@/components/store/ProductGrid.jsx'
import SectionHeading from '@/components/store/SectionHeading.jsx'
import { products, trustPoints } from '@/data/storeData.js'

const HomePage = () => {
  const containerRef = useRef(null)

  useEffect(() => {
    let cleanup = () => {}
    const frameId = window.requestAnimationFrame(() => {
      cleanup = ImageHelper.loadImages(strkImgConfig, containerRef.current)
    })

    return () => {
      window.cancelAnimationFrame(frameId)
      cleanup()
    }
  }, [])

  return (
    <main ref={containerRef}>
      <HeroSection />
      <TrustBar items={trustPoints} />

      <section className="page-shell py-20 sm:py-24">
        <SectionHeading
          eyebrow="Bestsellers"
          title="The pieces women return to first"
          description="Five warm-toned favorites designed for gifting, self-purchase, and effortless daily shine."
        />
        <div className="mt-10">
          <ProductGrid products={products} titleId="bestsellers-title" />
        </div>
      </section>

      <UgcReelSection />
      <CategoryTiles />
      <StorySection />
      <TestimonialsSection />
      <NewsletterSection />
      <JournalStrip />
    </main>
  )
}

export default HomePage
