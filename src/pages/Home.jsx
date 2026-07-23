import ProductGrid from '../components/store/ProductGrid.jsx'
import CategoryTiles from '../components/home/CategoryTiles.jsx'
import HomeHero from '../components/home/HomeHero.jsx'
import JournalSection from '../components/home/JournalSection.jsx'
import NewsletterSection from '../components/home/NewsletterSection.jsx'
import StorySection from '../components/home/StorySection.jsx'
import TestimonialsSection from '../components/home/TestimonialsSection.jsx'
import TrustBar from '../components/home/TrustBar.jsx'
import UgcStrip from '../components/home/UgcStrip.jsx'
import SectionHeading from '../components/shared/SectionHeading.jsx'
import { products } from '../data/store.js'
import useLoadStrkImages from '../lib/useLoadStrkImages.js'

const Home = () => {
  const containerRef = useLoadStrkImages([])

  return (
    <div ref={containerRef}>
      <HomeHero />
      <TrustBar />

      <section className="px-6 py-16 md:px-8 md:py-24">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="Bestsellers"
            title="The Velmora edit"
            description="Five signatures loved for their warm shine, gift-worthy packaging, and quietly polished finish."
          />
          <div className="mt-10">
            <ProductGrid products={products} className="md:grid-cols-2 xl:grid-cols-5" />
          </div>
        </div>
      </section>

      <UgcStrip />
      <CategoryTiles />
      <StorySection />
      <TestimonialsSection />
      <NewsletterSection />
      <JournalSection />
    </div>
  )
}

export default Home
