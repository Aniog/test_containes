import HeroSection from '@/components/home/HeroSection'
import TrustBar from '@/components/home/TrustBar'
import BestsellersSection from '@/components/home/BestsellersSection'
import UgcReelSection from '@/components/home/UgcReelSection'
import CategoryTilesSection from '@/components/home/CategoryTilesSection'
import StorySection from '@/components/home/StorySection'
import TestimonialsSection from '@/components/home/TestimonialsSection'
import NewsletterSection from '@/components/home/NewsletterSection'
import { categories, products, testimonials, ugcMoments } from '@/data/products'

export default function HomePage() {
  return (
    <main>
      <HeroSection />
      <TrustBar />
      <BestsellersSection products={products} />
      <UgcReelSection items={ugcMoments} />
      <CategoryTilesSection categories={categories} />
      <StorySection />
      <TestimonialsSection testimonials={testimonials} />
      <NewsletterSection />
    </main>
  )
}
