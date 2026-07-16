import HeroSection from '@/components/home/HeroSection'
import TrustBar from '@/components/home/TrustBar'
import BestsellersSection from '@/components/home/BestsellersSection'
import UgcReelSection from '@/components/home/UgcReelSection'
import CategoryTilesSection from '@/components/home/CategoryTilesSection'
import BrandStorySection from '@/components/home/BrandStorySection'
import JournalSection from '@/components/home/JournalSection'
import TestimonialsSection from '@/components/home/TestimonialsSection'
import NewsletterSection from '@/components/home/NewsletterSection'
import { useCart } from '@/components/store/CartProvider'
import { categoryTiles, products, testimonials, ugcMoments } from '@/lib/store-data'

export default function Home() {
  const { addItem } = useCart()

  return (
    <main>
      <HeroSection />
      <TrustBar />
      <BestsellersSection products={products} onAddToCart={addItem} />
      <UgcReelSection moments={ugcMoments} />
      <CategoryTilesSection categories={categoryTiles} />
      <BrandStorySection />
      <JournalSection />
      <TestimonialsSection testimonials={testimonials} />
      <NewsletterSection />
    </main>
  )
}
