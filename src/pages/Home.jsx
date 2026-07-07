import * as React from "react"
import Hero from "@/components/home/Hero"
import TrustBar from "@/components/home/TrustBar"
import Bestsellers from "@/components/home/Bestsellers"
import ReelStrip from "@/components/home/ReelStrip"
import CategoryTiles from "@/components/home/CategoryTiles"
import BrandStory from "@/components/home/BrandStory"
import Testimonials from "@/components/home/Testimonials"
import Newsletter from "@/components/home/Newsletter"
import { useImageLoader } from "@/hooks/useImageLoader"

export default function Home() {
  const containerRef = useImageLoader()

  return (
    <div ref={containerRef}>
      <Hero />
      <TrustBar />
      <Bestsellers />
      <ReelStrip />
      <CategoryTiles />
      <BrandStory />
      <Testimonials />
      <Newsletter />
    </div>
  )
}
