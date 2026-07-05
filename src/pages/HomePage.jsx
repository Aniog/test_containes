import CategoryTiles from '../components/home/CategoryTiles.jsx'
import HeroSection from '../components/home/HeroSection.jsx'
import NewsletterSection from '../components/home/NewsletterSection.jsx'
import StorySection from '../components/home/StorySection.jsx'
import TestimonialsSection from '../components/home/TestimonialsSection.jsx'
import TrustBar from '../components/home/TrustBar.jsx'
import UgcReelSection from '../components/home/UgcReelSection.jsx'
import ProductGrid from '../components/shared/ProductGrid.jsx'
import SectionHeading from '../components/shared/SectionHeading.jsx'
import { products } from '../lib/store-data.js'

function HomePage() {
  return (
    <>
      <HeroSection />
      <TrustBar />

      <section className="page-shell py-16 sm:py-20">
        <SectionHeading
          eyebrow="Bestsellers"
          title="Most wanted right now"
          description="Five pieces customers return for — balanced between polished classics, gift-ready finds, and easy self-purchase favorites."
        />
        <div className="mt-10">
          <ProductGrid products={products.slice(0, 5)} />
        </div>
      </section>

      <UgcReelSection />
      <CategoryTiles />
      <StorySection />
      <TestimonialsSection />
      <NewsletterSection />
    </>
  )
}

export default HomePage
