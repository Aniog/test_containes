import React, { useEffect, useRef } from "react"
import { ImageHelper } from "@strikingly/sdk"
import strkImgConfig from "@/strk-img-config.json"
import Hero from "@/components/home/Hero"
import TrustBar from "@/components/home/TrustBar"
import Bestsellers from "@/components/home/Bestsellers"
import UGCReel from "@/components/home/UGCReel"
import Categories from "@/components/home/Categories"
import BrandStory from "@/components/home/BrandStory"
import Testimonials from "@/components/home/Testimonials"
import Newsletter from "@/components/home/Newsletter"

export default function Home() {
  const containerRef = useRef(null)

  useEffect(() => {
    if (!containerRef.current) return
    const frameId = window.requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, containerRef.current)
    })
    return () => window.cancelAnimationFrame(frameId)
  }, [])

  return (
    <main ref={containerRef} className="bg-background">
      <Hero />
      <TrustBar />
      <Bestsellers />
      <UGCReel />
      <Categories />
      <BrandStory />
      <Testimonials />
      <Newsletter />
    </main>
  )
}
