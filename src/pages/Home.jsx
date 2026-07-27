import { HomeHero } from "@/components/home/HomeHero"
import { HomeServices } from "@/components/home/HomeServices"
import { HomeProcess } from "@/components/home/HomeProcess"
import { HomeProducts } from "@/components/home/HomeProducts"
import { HomeProblems } from "@/components/home/HomeProblems"
import { HomeTrust } from "@/components/home/HomeTrust"
import { HomeCaseStudies } from "@/components/home/HomeCaseStudies"
import { FaqSection } from "@/components/shared/FaqSection"
import { HomeInquiry } from "@/components/home/HomeInquiry"
import { CtaSection } from "@/components/shared/CtaSection"

export default function Home() {
  return (
    <>
      <HomeHero />
      <HomeServices />
      <HomeProcess />
      <HomeProducts />
      <HomeProblems />
      <HomeTrust />
      <HomeCaseStudies />
      <FaqSection />
      <HomeInquiry />
      <CtaSection />
    </>
  )
}
