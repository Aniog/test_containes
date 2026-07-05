import { Link } from 'react-router-dom'
import BrandStory from '@/components/home/BrandStory'
import CategoryTiles from '@/components/home/CategoryTiles'
import HeroSection from '@/components/home/HeroSection'
import JournalSection from '@/components/home/JournalSection'
import NewsletterSection from '@/components/home/NewsletterSection'
import TestimonialsSection from '@/components/home/TestimonialsSection'
import TrustBar from '@/components/home/TrustBar'
import UGCStrip from '@/components/home/UGCStrip'
import ProductCard from '@/components/ui/ProductCard'
import SectionHeading from '@/components/ui/SectionHeading'
import { products } from '@/data/store'

function HomePage() {
  return (
    <>
      <HeroSection />
      <TrustBar />

      <section className="bg-ivory py-16 md:py-24">
        <div className="section-shell">
          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <SectionHeading
              eyebrow="Bestsellers"
              title="The pieces our customers reach for first"
              description="A curated edit of warm gold staples, luminous gifting picks, and sculptural everyday favorites."
            />
            <Link
              to="/shop"
              className="nav-pill self-start md:self-auto"
            >
              View all pieces
            </Link>
          </div>

          <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-5">
            {products.map((product) => (
              <ProductCard key={product.id} product={product} instanceKey="home" />
            ))}
          </div>
        </div>
      </section>

      <UGCStrip />
      <CategoryTiles />
      <BrandStory />
      <TestimonialsSection />
      <NewsletterSection />
      <JournalSection />
    </>
  )
}

export default HomePage
