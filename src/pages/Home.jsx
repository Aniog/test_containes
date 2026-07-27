import { useEffect, useRef } from "react"
import { ImageHelper } from "@strikingly/sdk"
import strkImgConfig from "@/strk-img-config.json"
import HomeHero from "@/components/home/HomeHero"
import HomeStats from "@/components/home/HomeStats"
import HomeServices from "@/components/home/HomeServices"
import HomeProcess from "@/components/home/HomeProcess"
import HomeProducts from "@/components/home/HomeProducts"
import HomeProblems from "@/components/home/HomeProblems"
import HomeTrust from "@/components/home/HomeTrust"
import HomeCaseStudies from "@/components/home/HomeCaseStudies"
import HomeFaq from "@/components/home/HomeFaq"
import CtaBanner from "@/components/common/CtaBanner"

export default function Home() {
  const containerRef = useRef(null)

  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, containerRef.current)
    })
    return () => window.cancelAnimationFrame(frameId)
  }, [])

  return (
    <div ref={containerRef}>
      <HomeHero />
      <HomeStats />
      <HomeServices />
      <HomeProcess />
      <HomeProducts />
      <HomeProblems />
      <HomeTrust />
      <HomeCaseStudies />
      <HomeFaq />
      <CtaBanner />
    </div>
  )
}
