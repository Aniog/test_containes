import HeroSection from '@/components/storefront/HeroSection.jsx'
import TrustBar from '@/components/storefront/TrustBar.jsx'
import BestsellersSection from '@/components/storefront/BestsellersSection.jsx'
import UgcStrip from '@/components/storefront/UgcStrip.jsx'
import CategoryTiles from '@/components/storefront/CategoryTiles.jsx'
import StorySection from '@/components/storefront/StorySection.jsx'
import Testimonials from '@/components/storefront/Testimonials.jsx'
import NewsletterBlock from '@/components/storefront/NewsletterBlock.jsx'
import JournalSection from '@/components/storefront/JournalSection.jsx'
import { useStrkImages } from '@/hooks/useStrkImages.js'

const HomePage = () => {
  const containerRef = useStrkImages([])

  return (
    <main ref={containerRef} className="bg-ivory pt-0">
      <HeroSection />
      <TrustBar />
      <BestsellersSection />
      <UgcStrip />
      <CategoryTiles />
      <StorySection />
      <Testimonials />
      <JournalSection />
      <NewsletterBlock />
    </main>
  )
}

export default HomePage
