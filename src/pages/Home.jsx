import React from "react"
import Hero from "@/components/sections/Hero"
import TrustBar from "@/components/sections/TrustBar"
import ServicesOverview from "@/components/sections/ServicesOverview"
import Process from "@/components/sections/Process"
import ProductsGrid from "@/components/sections/ProductsGrid"
import ProblemsSolved from "@/components/sections/ProblemsSolved"
import TrustPoints from "@/components/sections/TrustPoints"
import CaseStudiesPreview from "@/components/sections/CaseStudiesPreview"
import FAQ from "@/components/sections/FAQ"
import InquiryCTA from "@/components/sections/InquiryCTA"

const Home = () => {
  return (
    <>
      <Hero />
      <TrustBar />
      <ServicesOverview />
      <Process />
      <ProductsGrid />
      <ProblemsSolved />
      <TrustPoints />
      <CaseStudiesPreview />
      <FAQ limit={6} />
      <InquiryCTA />
    </>
  )
}

export default Home
