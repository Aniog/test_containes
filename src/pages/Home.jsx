import React, { useEffect, useRef } from "react"
import { ImageHelper } from "@strikingly/sdk"
import HeroSection from "@/components/home/HeroSection"
import TrustBar from "@/components/home/TrustBar"
import BestsellersSection from "@/components/home/BestsellersSection"
import UgcReelSection from "@/components/home/UgcReelSection"
import CategoryTiles from "@/components/home/CategoryTiles"
import BrandStory from "@/components/home/BrandStory"
import Testimonials from "@/components/home/Testimonials"
import Newsletter from "@/components/home/Newsletter"
import strkImgConfig from "@/strk-img-config.json"

export default function Home({ onAddToCart }) {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <main ref={containerRef}>
      <HeroSection />
      <TrustBar />
      <BestsellersSection onAddToCart={onAddToCart} />
      <UgcReelSection />
      <CategoryTiles />
      <BrandStory />
      <Testimonials />
      <Newsletter />
    </main>
  )
}
