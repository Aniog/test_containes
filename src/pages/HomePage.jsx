import HomeHero from '@/components/home/HomeHero'
import TrustBar from '@/components/home/TrustBar'
import UgcStrip from '@/components/home/UgcStrip'
import CategoryTiles from '@/components/home/CategoryTiles'
import BrandStory from '@/components/home/BrandStory'
import TestimonialsSection from '@/components/home/TestimonialsSection'
import NewsletterSection from '@/components/home/NewsletterSection'
import ProductCard from '@/components/shared/ProductCard'
import SectionHeader from '@/components/shared/SectionHeader'
import { products } from '@/data/products'
import { useStrkImages } from '@/lib/useStrkImages'

export default function HomePage() {
  const containerRef = useStrkImages([])

  return (
    <div ref={containerRef}>
      <HomeHero />
      <TrustBar />

      <section className="mx-auto max-w-7xl px-5 py-16 md:px-8 md:py-24">
        <div className="flex items-end justify-between gap-6">
          <SectionHeader
            eyebrow="Bestsellers"
            title="Most loved, most gifted"
            description="Five polished bestsellers that capture the Velmora balance of premium presence and easy wearability."
          />
        </div>

        <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-5">
          {products.map((product, index) => (
            <ProductCard key={product.id} product={product} priority={index === 0} />
          ))}
        </div>
      </section>

      <UgcStrip />
      <CategoryTiles />
      <BrandStory />
      <TestimonialsSection />
      <NewsletterSection />
    </div>
  )
}
