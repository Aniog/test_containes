import Hero from "@/components/home/Hero"
import {
  Bestsellers,
  BrandStory,
  CategoryTiles,
  Newsletter,
  ReelsRow,
  Testimonials,
  TrustBar,
} from "@/components/home/HomeSections"

export default function Home() {
  return (
    <>
      <Hero />
      <TrustBar />
      <Bestsellers />
      <ReelsRow />
      <CategoryTiles />
      <BrandStory />
      <Testimonials />
      <Newsletter />
    </>
  )
}
