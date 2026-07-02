import React from "react"
import { HeroSection } from "@/components/home/hero-section"
import { TrustBar } from "@/components/home/trust-bar"
import { BestsellersSection } from "@/components/home/bestsellers-section"
import { UgcReels } from "@/components/home/ugc-reels"
import { CategoryTiles } from "@/components/home/category-tiles"
import { BrandStory } from "@/components/home/brand-story"
import { Testimonials } from "@/components/home/testimonials"
import { Newsletter } from "@/components/home/newsletter"

export const HomePage = () => {
  return (
    <main>
      <HeroSection />
      <TrustBar />
      <BestsellersSection />
      <UgcReels />
      <CategoryTiles />
      <BrandStory />
      <Testimonials />
      <Newsletter />
    </main>
  )
}
