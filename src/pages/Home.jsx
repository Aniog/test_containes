import { useEffect, useRef } from "react"
import { ImageHelper } from "@strikingly/sdk"
import strkImgConfig from "@/strk-img-config.json"
import Hero from "@/components/home/Hero"
import TrustBar from "@/components/home/TrustBar"
import Bestsellers from "@/components/home/Bestsellers"
import UGCReel from "@/components/home/UGCReel"
import CategoryTiles from "@/components/home/CategoryTiles"
import BrandStory from "@/components/home/BrandStory"
import Testimonials from "@/components/home/Testimonials"
import Newsletter from "@/components/home/Newsletter"

export default function Home() {
  const rootRef = useRef(null)

  useEffect(() => {
    if (!rootRef.current) return undefined
    const id = window.requestAnimationFrame(() => {
      try {
        ImageHelper.loadImages(strkImgConfig, rootRef.current)
      } catch (err) {
        console.warn("ImageHelper.loadImages failed on Home", err)
      }
    })
    return () => window.cancelAnimationFrame(id)
  }, [])

  return (
    <div ref={rootRef}>
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
