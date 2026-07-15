import BrandStory from '@/components/home/BrandStory.jsx'
import BestsellersSection from '@/components/home/BestsellersSection.jsx'
import CategoryTiles from '@/components/home/CategoryTiles.jsx'
import HomeHero from '@/components/home/HomeHero.jsx'
import NewsletterSection from '@/components/home/NewsletterSection.jsx'
import TestimonialsSection from '@/components/home/TestimonialsSection.jsx'
import TrustBar from '@/components/home/TrustBar.jsx'
import UgcStrip from '@/components/home/UgcStrip.jsx'
import { categories, products, testimonials, trustItems, ugcMoments } from '@/data/products.js'
import { useStrkImages } from '@/hooks/useStrkImages.js'

export default function Home() {
  const containerRef = useStrkImages([])

  return (
    <div ref={containerRef}>
      <HomeHero />
      <TrustBar items={trustItems} />
      <BestsellersSection products={products} />
      <UgcStrip items={ugcMoments} />
      <CategoryTiles categories={categories} />
      <BrandStory />
      <TestimonialsSection testimonials={testimonials} />
      <NewsletterSection />
    </div>
  )
}
