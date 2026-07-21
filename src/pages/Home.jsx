import { useEffect } from "react"
import Hero from "@/components/home/Hero"
import AnnouncementBar from "@/components/AnnouncementBar"
import Bestsellers from "@/components/home/Bestsellers"
import ReelsRow from "@/components/home/ReelsRow"
import CategoryTiles from "@/components/home/CategoryTiles"
import BrandStory from "@/components/home/BrandStory"
import Testimonials from "@/components/home/Testimonials"
import Newsletter from "@/components/home/Newsletter"
import Nav from "@/components/Nav"

export default function Home() {
  useEffect(() => {
    window.scrollTo({ top: 0 })
  }, [])

  return (
    <>
      {/* Transparent nav over hero */}
      <Nav forceSolid={false} />
      <main>
        <Hero />
        <AnnouncementBar />
        <Bestsellers />
        <ReelsRow />
        <CategoryTiles />
        <BrandStory />
        <Testimonials />
        <Newsletter />
      </main>
    </>
  )
}
