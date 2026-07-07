import HomeHero from '@/components/home/HomeHero'
import TrustBar from '@/components/home/TrustBar'
import UGCStrip from '@/components/home/UGCStrip'
import CategoryTiles from '@/components/home/CategoryTiles'
import BrandStorySection from '@/components/home/BrandStorySection'
import TestimonialsSection from '@/components/home/TestimonialsSection'
import NewsletterSection from '@/components/home/NewsletterSection'
import JournalSection from '@/components/home/JournalSection'
import ProductGrid from '@/components/product/ProductGrid'
import SectionHeading from '@/components/shared/SectionHeading'
import {
  categoryTiles,
  journalPosts,
  products,
  testimonials,
  ugcEntries,
} from '@/data/products'

export default function HomePage() {
  return (
    <div className="bg-porcelain">
      <HomeHero />
      <TrustBar />

      <section className="section-shell bg-porcelain">
        <div className="container-shell space-y-10">
          <SectionHeading
            eyebrow="Bestsellers"
            title="Jewelry That Sells Out Quietly"
            description="A refined edit of Velmora favorites, chosen for everyday wear, easy gifting, and soft statement-making."
          />
          <ProductGrid products={products.slice(0, 5)} columns="five" />
        </div>
      </section>

      <UGCStrip entries={ugcEntries} />
      <CategoryTiles categories={categoryTiles} />
      <BrandStorySection />
      <TestimonialsSection testimonials={testimonials} />
      <JournalSection posts={journalPosts} />
      <NewsletterSection />
    </div>
  )
}
