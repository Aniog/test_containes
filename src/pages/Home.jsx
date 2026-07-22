import React from "react"
import HomeHero from "@/components/home/HomeHero"
import TrustBar from "@/components/home/TrustBar"
import Bestsellers from "@/components/home/Bestsellers"
import UgcReels from "@/components/home/UgcReels"
import CategoryTiles from "@/components/home/CategoryTiles"
import BrandStory from "@/components/home/BrandStory"
import Testimonials from "@/components/home/Testimonials"
import Newsletter from "@/components/home/Newsletter"

const Home = () => {
  return (
    <div>
      <HomeHero />
      <TrustBar />
      <Bestsellers />
      <UgcReels />
      <CategoryTiles />
      <BrandStory />
      <Testimonials />
      <Newsletter />
    </div>
  )
}

export default Home
