import HomeHero from '@/components/home/HomeHero'
import TrustBar from '@/components/home/TrustBar'
import BestsellerGrid from '@/components/home/BestsellerGrid'
import ReelRow from '@/components/home/ReelRow'
import CategoryTiles from '@/components/home/CategoryTiles'
import BrandStory from '@/components/home/BrandStory'
import Testimonials from '@/components/home/Testimonials'
import NewsletterSection from '@/components/home/NewsletterSection'
import {
  heroStory,
  trustHighlights,
  products,
  reelMoments,
  categoryTiles,
  testimonials,
} from '@/data/products'

export default function HomePage() {
  return (
    <>
      <HomeHero hero={heroStory} />
      <TrustBar items={trustHighlights} />
      <BestsellerGrid products={products} />
      <ReelRow items={reelMoments} />
      <CategoryTiles items={categoryTiles} />
      <BrandStory />
      <Testimonials items={testimonials} />
      <NewsletterSection />
    </>
  )
}
