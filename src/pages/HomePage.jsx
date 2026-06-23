import { useRef } from 'react'
import BestsellersGrid from '@/components/home/BestsellersGrid'
import BrandStory from '@/components/home/BrandStory'
import CategoryTiles from '@/components/home/CategoryTiles'
import HomeHero from '@/components/home/HomeHero'
import JournalHighlights from '@/components/home/JournalHighlights'
import NewsletterBanner from '@/components/home/NewsletterBanner'
import Testimonials from '@/components/home/Testimonials'
import TrustBar from '@/components/home/TrustBar'
import UgcReel from '@/components/home/UgcReel'
import { productCatalog } from '@/data/products'
import { useStrkImages } from '@/hooks/useStrkImages'

function HomePage() {
  const pageRef = useRef(null)

  useStrkImages(pageRef)

  return (
    <main className="overflow-hidden" ref={pageRef}>
      <HomeHero />
      <TrustBar />
      <BestsellersGrid products={productCatalog} />
      <UgcReel />
      <CategoryTiles />
      <BrandStory />
      <Testimonials />
      <JournalHighlights />
      <NewsletterBanner />
    </main>
  )
}

export default HomePage
