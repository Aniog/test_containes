import HomeHero from "@/components/home/HomeHero"
import HomeUSP from "@/components/home/HomeUSP"
import HomeFeatured from "@/components/home/HomeFeatured"
import HomeProcess from "@/components/home/HomeProcess"
import HomeTestimonial from "@/components/home/HomeTestimonial"
import HomeCTA from "@/components/home/HomeCTA"
import { useEffect, useRef } from "react"
import { ImageHelper } from "@strikingly/sdk"
import strkImgConfig from "@/strk-img-config.json"

const Home = () => {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <div ref={containerRef}>
      <HomeHero />
      <HomeUSP />
      <HomeFeatured />
      <HomeProcess />
      <HomeTestimonial />
      <HomeCTA />
    </div>
  )
}

export default Home
