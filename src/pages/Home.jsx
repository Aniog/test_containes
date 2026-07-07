import { useEffect, useRef } from "react"
import { ImageHelper } from "@strikingly/sdk"
import strkImgConfig from "@/strk-img-config.json"
import HeroSection from "@/components/home/HeroSection"
import TrustBar from "@/components/home/TrustBar"
import BestsellersSection from "@/components/home/BestsellersSection"
import UgcReelSection from "@/components/home/UgcReelSection"
import CategoryTiles from "@/components/home/CategoryTiles"
import BrandStorySection from "@/components/home/BrandStorySection"
import TestimonialsSection from "@/components/home/TestimonialsSection"
import NewsletterSection from "@/components/home/NewsletterSection"

export default function Home() {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <div ref={containerRef}>
      <HeroSection />
      <TrustBar />
      <BestsellersSection />
      <UgcReelSection />
      <CategoryTiles />
      <BrandStorySection />
      <TestimonialsSection />
      <NewsletterSection />
    </div>
  )
}
