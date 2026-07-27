import { useEffect, useRef } from "react"
import { ImageHelper } from "@strikingly/sdk"
import strkImgConfig from "@/strk-img-config.json"
import Hero from "@/components/home/Hero"
import Services from "@/components/home/Services"
import Process from "@/components/home/Process"
import Products from "@/components/home/Products"
import Problems from "@/components/home/Problems"
import Trust from "@/components/home/Trust"
import CaseStudies from "@/components/home/CaseStudies"
import FAQ from "@/components/home/FAQ"
import Inquiry from "@/components/home/Inquiry"

export default function Home() {
  const containerRef = useRef(null)

  useEffect(() => {
    if (!containerRef.current) return
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <div ref={containerRef}>
      <Hero />
      <Services />
      <Process />
      <Products />
      <Problems />
      <Trust />
      <CaseStudies />
      <FAQ />
      <Inquiry />
    </div>
  )
}
