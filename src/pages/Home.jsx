import { Hero } from "@/components/home/Hero"
import { TrustBar } from "@/components/home/TrustBar"
import { Bestsellers } from "@/components/home/Bestsellers"
import { UGCReel } from "@/components/home/UGCReel"
import { CategoriesGrid } from "@/components/home/CategoriesGrid"
import { StorySplit } from "@/components/home/StorySplit"
import { Testimonials } from "@/components/home/Testimonials"
import { Newsletter } from "@/components/home/Newsletter"

export function Home() {
  return (
    <>
      <Hero />
      <TrustBar />
      <Bestsellers />
      <UGCReel />
      <CategoriesGrid />
      <StorySplit />
      <Testimonials />
      <Newsletter />
    </>
  )
}
