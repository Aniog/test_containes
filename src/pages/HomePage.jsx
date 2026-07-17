import ProductCard from '../components/storefront/ProductCard'
import CategoryTiles from '../components/storefront/CategoryTiles'
import HeroSection from '../components/storefront/HeroSection'
import JournalPreview from '../components/storefront/JournalPreview'
import NewsletterSection from '../components/storefront/NewsletterSection'
import ReelsRow from '../components/storefront/ReelsRow'
import StorySection from '../components/storefront/StorySection'
import TestimonialsSection from '../components/storefront/TestimonialsSection'
import TrustBar from '../components/storefront/TrustBar'
import { products } from '../data/products'

function HomePage() {
  return (
    <>
      <HeroSection />
      <TrustBar />

      <section id="bestsellers" className="px-4 py-20 sm:px-6 lg:px-10">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-xs uppercase tracking-luxe text-gold">Bestsellers</p>
              <h2 className="mt-4 font-serif text-4xl text-umber sm:text-5xl">
                The pieces our customers keep reaching for.
              </h2>
            </div>
            <p className="max-w-md text-sm leading-7 text-taupe">
              A refined edit of everyday ear cuffs, layering necklaces, and giftable icons priced for repeat wear.
            </p>
          </div>
          <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      <ReelsRow />
      <CategoryTiles />
      <StorySection />
      <TestimonialsSection />
      <NewsletterSection />
      <JournalPreview />
    </>
  )
}

export default HomePage
