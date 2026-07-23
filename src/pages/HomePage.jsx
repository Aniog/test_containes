import { useRef } from 'react'
import CategoryTiles from '@/components/home/CategoryTiles'
import HomeHero from '@/components/home/HomeHero'
import JournalPreview from '@/components/home/JournalPreview'
import NewsletterSection from '@/components/home/NewsletterSection'
import StorySection from '@/components/home/StorySection'
import TestimonialsSection from '@/components/home/TestimonialsSection'
import TrustBar from '@/components/home/TrustBar'
import UGCReel from '@/components/home/UGCReel'
import ProductGrid from '@/components/store/ProductGrid'
import { products } from '@/data/storeData'
import { useImageLoader } from '@/hooks/useImageLoader'

function HomePage() {
  const containerRef = useRef(null)
  useImageLoader(containerRef, [])

  return (
    <div ref={containerRef} className="bg-porcelain">
      <HomeHero />
      <TrustBar />

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 md:py-24 lg:px-8">
        <div className="mb-10 flex items-end justify-between gap-4">
          <div className="space-y-3">
            <p className="text-xs uppercase tracking-luxe text-champagne">Bestsellers</p>
            <h2 id="bestsellers-title" className="text-4xl sm:text-5xl">
              The pieces our clients wear on repeat
            </h2>
            <p id="bestsellers-subtitle" className="max-w-2xl text-sm leading-7 text-ink/70 sm:text-base">
              Sculptural earrings, luminous necklaces, and stackable huggies designed for gifting moments and everyday polish.
            </p>
          </div>
          <a
            href="/shop"
            className="hidden border-b border-champagne pb-1 text-sm uppercase tracking-[0.22em] text-ink transition hover:text-champagne md:inline-flex"
          >
            Shop all
          </a>
        </div>

        <ProductGrid
          products={products}
          sectionId="bestsellers"
          titleId="bestsellers-title"
          descriptionId="bestsellers-subtitle"
        />
      </section>

      <UGCReel />
      <CategoryTiles />
      <StorySection />
      <TestimonialsSection />
      <JournalPreview />
      <NewsletterSection />
    </div>
  )
}

export default HomePage
