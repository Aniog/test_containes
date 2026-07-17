import HeroSection from '@/components/home/HeroSection'
import TrustBar from '@/components/home/TrustBar'
import ReelStrip from '@/components/home/ReelStrip'
import CategoryTiles from '@/components/home/CategoryTiles'
import BrandStory from '@/components/home/BrandStory'
import Testimonials from '@/components/home/Testimonials'
import NewsletterSection from '@/components/home/NewsletterSection'
import SectionHeading from '@/components/common/SectionHeading'
import ProductGrid from '@/components/store/ProductGrid'
import { products } from '@/data/products'
import { useImageLoader } from '@/hooks/useImageLoader'

const HomePage = () => {
  const containerRef = useImageLoader([])

  return (
    <div ref={containerRef} className="bg-velmora-ivory">
      <HeroSection />
      <TrustBar />

      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <SectionHeading
            eyebrow="Bestsellers"
            title="Our most-loved pieces, curated with quiet confidence"
            description="Five signature designs that balance polish, giftability, and everyday wearability."
          />
          <div className="mt-10">
            <ProductGrid products={products.slice(0, 5)} />
          </div>
        </div>
      </section>

      <ReelStrip />
      <CategoryTiles />
      <BrandStory />
      <Testimonials />
      <NewsletterSection />
    </div>
  )
}

export default HomePage
