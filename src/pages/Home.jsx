import * as React from "react"
import { Hero } from "@/components/home/Hero"
import { About } from "@/components/home/About"
import { ProductsShowcase } from "@/components/home/ProductsShowcase"
import { Capabilities } from "@/components/home/Capabilities"
import { Industries } from "@/components/home/Industries"
import { Process } from "@/components/home/Process"
import { Stats } from "@/components/home/Stats"
import { Testimonials } from "@/components/home/Testimonials"
import { CTA } from "@/components/home/CTA"
import { Contact } from "@/components/home/Contact"

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <ProductsShowcase />
      <Capabilities />
      <Industries />
      <Process />
      <Stats />
      <Testimonials />
      <CTA />
      <Contact />
    </main>
  )
}
