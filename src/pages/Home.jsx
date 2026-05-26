import React from 'react'
import HeroSection from '../components/home/HeroSection'
import CategoryGrid from '../components/home/CategoryGrid'
import FeaturedProducts from '../components/home/FeaturedProducts'
import TrustBanner from '../components/home/TrustBanner'
import TeamBanner from '../components/home/TeamBanner'

export default function Home() {
  return (
    <div className="bg-[#0A0E1A]">
      <HeroSection />
      <TrustBanner />
      <CategoryGrid />
      <FeaturedProducts />
      <TeamBanner />
    </div>
  )
}
