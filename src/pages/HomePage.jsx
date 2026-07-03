import { useEffect } from "react"
import Hero from "@/components/home/Hero"
import TrustBar from "@/components/home/TrustBar"
import Bestsellers from "@/components/home/Bestsellers"
import UGCReels from "@/components/home/UGCReels"
import CategoryTiles from "@/components/home/CategoryTiles"
import BrandStory from "@/components/home/BrandStory"
import Testimonials from "@/components/home/Testimonials"
import Newsletter from "@/components/home/Newsletter"

export default function HomePage() {
  // On the homepage we want the user to land at the top of the hero, not
  // somewhere down the page if they navigated from another route.
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "auto" })
  }, [])

  return (
    <main id="main">
      <Hero />
      <TrustBar />
      <Bestsellers />
      <UGCReels />
      <CategoryTiles />
      <BrandStory />
      <Testimonials />
      <Newsletter />
    </main>
  )
}
