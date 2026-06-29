import BestsellersSection from '@/components/home/BestsellersSection'
import BrandStorySection from '@/components/home/BrandStorySection'
import CategoryTiles from '@/components/home/CategoryTiles'
import HomeHero from '@/components/home/HomeHero'
import NewsletterSection from '@/components/home/NewsletterSection'
import ReelStrip from '@/components/home/ReelStrip'
import TestimonialsSection from '@/components/home/TestimonialsSection'
import TrustBar from '@/components/home/TrustBar'
import { products, reelMoments, testimonials } from '@/data/products'

const HomePage = () => {
  return (
    <main>
      <HomeHero />
      <TrustBar />
      <BestsellersSection products={products} />
      <ReelStrip moments={reelMoments} />
      <CategoryTiles />
      <BrandStorySection />
      <TestimonialsSection testimonials={testimonials} />
      <NewsletterSection />
    </main>
  )
}

export default HomePage
