import React from "react"
import HomeHero from "@/components/home/HomeHero"
import TrustBar from "@/components/home/TrustBar"
import Bestsellers from "@/components/home/Bestsellers"
import ReelsRow from "@/components/home/ReelsRow"
import CategoryTiles from "@/components/home/CategoryTiles"
import BrandStory from "@/components/home/BrandStory"
import Testimonials from "@/components/home/Testimonials"
import Newsletter from "@/components/home/Newsletter"
import { reels } from "@/data/products"
import { useStrkImages } from "@/hooks/useStrkImages"
import { useScrollReveal } from "@/hooks/useScrollReveal"

export default function Home() {
  const containerRef = useStrkImages([])
  useScrollReveal()

  return (
    <div ref={containerRef}>
      <HomeHero />
      <TrustBar />
      <Bestsellers />
      <ReelsRow reels={reels} />
      <CategoryTiles />
      <BrandStory />
      <Testimonials />
      <Newsletter />
    </div>
  )
}
