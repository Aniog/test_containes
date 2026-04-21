import React from 'react'
import HeroSection from '../components/home/HeroSection.jsx'
import CategorySection from '../components/home/CategorySection.jsx'
import FeaturedBooks from '../components/home/FeaturedBooks.jsx'
import BestsellerSection from '../components/home/BestsellerSection.jsx'
import FeaturesSection from '../components/home/FeaturesSection.jsx'

export default function Home() {
  return (
    <div>
      <HeroSection />
      <CategorySection />
      <FeaturedBooks />
      <BestsellerSection />
      <FeaturesSection />
    </div>
  )
}
