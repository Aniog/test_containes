import React from 'react'
import HeroSection from '../components/home/HeroSection'
import TrustBar from '../components/home/TrustBar'
import BestsellersGrid from '../components/home/BestsellersGrid'
import UGCReelRow from '../components/home/UGCReelRow'
import CategoryTiles from '../components/home/CategoryTiles'
import BrandStory from '../components/home/BrandStory'
import TestimonialsSection from '../components/home/TestimonialsSection'
import NewsletterSection from '../components/home/NewsletterSection'

export default function HomePage() {
  return (
    <main>
      <HeroSection />
      <TrustBar />
      <BestsellersGrid />
      <UGCReelRow />
      <CategoryTiles />
      <BrandStory />
      <TestimonialsSection />
      <NewsletterSection />
    </main>
  )
}
