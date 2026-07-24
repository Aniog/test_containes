import BestsellersSection from '../components/home/BestsellersSection'
import CategoryTiles from '../components/home/CategoryTiles'
import HeroSection from '../components/home/HeroSection'
import JournalPreview from '../components/home/JournalPreview'
import NewsletterSection from '../components/home/NewsletterSection'
import StorySection from '../components/home/StorySection'
import TestimonialsSection from '../components/home/TestimonialsSection'
import TrustBar from '../components/home/TrustBar'
import UgcStrip from '../components/home/UgcStrip'
import {
  categoryTiles,
  journalEntries,
  products,
  testimonials,
  ugcMoments,
} from '../data/store'
import useStrkImages from '../lib/useStrkImages'

const Home = () => {
  const containerRef = useStrkImages([])

  return (
    <div ref={containerRef} className="bg-stone-950 text-stone-50">
      <HeroSection />
      <TrustBar />
      <BestsellersSection products={products} />
      <UgcStrip moments={ugcMoments} />
      <CategoryTiles categories={categoryTiles} />
      <StorySection />
      <TestimonialsSection testimonials={testimonials} />
      <JournalPreview entries={journalEntries} />
      <NewsletterSection />
    </div>
  )
}

export default Home
