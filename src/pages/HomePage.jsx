import BestsellersSection from '@/components/home/BestsellersSection'
import CategoryTiles from '@/components/home/CategoryTiles'
import HomeHero from '@/components/home/HomeHero'
import JournalSection from '@/components/home/JournalSection'
import NewsletterSection from '@/components/home/NewsletterSection'
import StorySection from '@/components/home/StorySection'
import TestimonialsSection from '@/components/home/TestimonialsSection'
import TrustBar from '@/components/home/TrustBar'
import UgcStrip from '@/components/home/UgcStrip'
import {
  categories,
  collectionStats,
  journalEntries,
  products,
  testimonials,
  trustPoints,
  ugcMoments,
} from '@/data/products'
import { useStrkImages } from '@/hooks/useStrkImages'

function HomePage() {
  const containerRef = useStrkImages([])

  return (
    <div ref={containerRef} className="bg-ivory text-velvet">
      <HomeHero />
      <TrustBar items={trustPoints} />
      <BestsellersSection products={products} />
      <UgcStrip moments={ugcMoments} />
      <CategoryTiles categories={categories} />
      <StorySection stats={collectionStats} />
      <TestimonialsSection testimonials={testimonials} />
      <JournalSection entries={journalEntries} />
      <NewsletterSection />
    </div>
  )
}

export default HomePage
