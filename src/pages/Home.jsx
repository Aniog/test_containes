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
  const ref = useRef(null)

  useEffect(() => {
    const target = ref.current
    if (!target) return undefined
    const frameId = window.requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, target)
    })
    return () => {
      window.cancelAnimationFrame(frameId)
      ImageHelper.disconnect(target)
    }
  }, [])

  return (
    <div ref={ref} className="page-fade">
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
