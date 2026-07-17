import HeroSection from '../components/home/HeroSection'
import TrustBar from '../components/home/TrustBar'
import BestsellersSection from '../components/home/BestsellersSection'
import UgcRow from '../components/home/UgcRow'
import CategoryTiles from '../components/home/CategoryTiles'
import BrandStory from '../components/home/BrandStory'
import TestimonialsSection from '../components/home/TestimonialsSection'
import JournalPreview from '../components/home/JournalPreview'
import NewsletterSection from '../components/home/NewsletterSection'

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <TrustBar />
      <BestsellersSection />
      <UgcRow />
      <CategoryTiles />
      <BrandStory />
      <TestimonialsSection />
      <JournalPreview />
      <NewsletterSection />
    </>
  )
}
