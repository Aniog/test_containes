import { products } from '@/data/products'
import SectionHeading from '@/components/storefront/SectionHeading'
import ProductCard from '@/components/storefront/ProductCard'
import HomeHero from '@/components/home/HomeHero'
import TrustBar from '@/components/home/TrustBar'
import UgcStrip from '@/components/home/UgcStrip'
import CategoryTiles from '@/components/home/CategoryTiles'
import StorySection from '@/components/home/StorySection'
import TestimonialsSection from '@/components/home/TestimonialsSection'
import JournalSection from '@/components/home/JournalSection'
import NewsletterSection from '@/components/home/NewsletterSection'

const HomePage = () => {
  return (
    <div>
      <HomeHero />
      <TrustBar />

      <section className="section-shell py-16 sm:py-20">
        <SectionHeading
          eyebrow="Bestsellers"
          title="The pieces our customers return for"
          copy="Five refined favorites for gifting, stacking, and the quiet confidence of everyday gold."
        />
        <div className="mt-10 grid gap-5 sm:grid-cols-2 xl:grid-cols-5">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} scope="home" />
          ))}
        </div>
      </section>

      <UgcStrip />
      <CategoryTiles />
      <StorySection />
      <TestimonialsSection />
      <JournalSection />
      <NewsletterSection />
    </div>
  )
}

export default HomePage
