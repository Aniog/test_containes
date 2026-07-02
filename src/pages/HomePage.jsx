import BrandStory from '@/components/home/BrandStory'
import CategoryTiles from '@/components/home/CategoryTiles'
import HomeHero from '@/components/home/HomeHero'
import JournalSection from '@/components/home/JournalSection'
import NewsletterSection from '@/components/home/NewsletterSection'
import Testimonials from '@/components/home/Testimonials'
import TrustBar from '@/components/home/TrustBar'
import UgcStrip from '@/components/home/UgcStrip'
import ImageLoaderSection from '@/components/shared/ImageLoaderSection'
import ProductCard from '@/components/shared/ProductCard'
import SectionHeader from '@/components/shared/SectionHeader'
import {
  categoryHighlights,
  journalEntries,
  products,
  testimonials,
  trustPoints,
  ugcMoments,
} from '@/data/products'
import { useCart } from '@/context/CartContext'

const HomePage = () => {
  const { addToCart } = useCart()
  const featuredProducts = products.slice(0, 5)

  return (
    <>
      <ImageLoaderSection dependency={featuredProducts.length}>
        <HomeHero />
      </ImageLoaderSection>
      <TrustBar items={trustPoints} />

      <main>
        <section className="section-shell">
          <SectionHeader
            eyebrow="Bestsellers"
            title="A refined edit of the pieces everyone reaches for first"
            description="Discover five of our most-loved signatures, all designed to feel premium, wearable, and beautifully giftable."
            linkLabel="Shop all jewelry"
            linkTo="/shop"
          />

          <ImageLoaderSection className="mt-10 grid gap-6 sm:grid-cols-2 xl:grid-cols-5" dependency={featuredProducts.length}>
            {featuredProducts.map((product, index) => (
              <ProductCard
                key={product.id}
                product={product}
                context="home-featured"
                sectionId="home-bestsellers-title"
                priority={index < 2}
                onQuickAdd={(entry) => addToCart(entry, entry.variantOptions[0], 1)}
              />
            ))}
          </ImageLoaderSection>

          <h2 id="home-bestsellers-title" className="sr-only">
            Velmora bestselling jewelry
          </h2>
        </section>

        <UgcStrip items={ugcMoments} />
        <CategoryTiles categories={categoryHighlights} />
        <BrandStory />
        <Testimonials items={testimonials} />
        <JournalSection entries={journalEntries} />
        <NewsletterSection />
      </main>
    </>
  )
}

export default HomePage
