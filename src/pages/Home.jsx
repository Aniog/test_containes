import { useEffect, useRef } from "react"
import { Hero } from "@/components/home/Hero"
import { TrustBar } from "@/components/home/TrustBar"
import { Bestsellers } from "@/components/home/Bestsellers"
import { UGCReel } from "@/components/home/UGCReel"
import { CategoryTiles } from "@/components/home/CategoryTiles"
import { BrandStory } from "@/components/home/BrandStory"
import { Testimonials } from "@/components/home/Testimonials"
import { Newsletter } from "@/components/home/Newsletter"
import { ImageHelper } from "@strikingly/sdk"
import strkImgConfig from "@/strk-img-config.json"

export default function Home() {
  const pageRef = useRef(null)

  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, pageRef.current)
    })
    return () => window.cancelAnimationFrame(frameId)
  }, [])

  return (
    <div ref={pageRef}>
      <Hero />
      <TrustBar />
      <Bestsellers />
      <UGCReel />
      <CategoryTiles />
      <BrandStory />
      <Testimonials />
      <Newsletter />
    </div>
  )
}
