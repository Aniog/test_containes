import { useEffect, useRef } from "react"
import { ImageHelper } from "@strikingly/sdk"
import strkImgConfig from "@/strk-img-config.json"
import Hero from "@/components/sections/Hero"
import ServicesSection from "@/components/sections/ServicesSection"
import ProcessSection from "@/components/sections/ProcessSection"
import ProductsSection from "@/components/sections/ProductsSection"
import ProblemsSection from "@/components/sections/ProblemsSection"
import TrustSection from "@/components/sections/TrustSection"
import CaseStudiesSection from "@/components/sections/CaseStudiesSection"
import FaqSection from "@/components/sections/FaqSection"
import CtaBanner from "@/components/layout/CtaBanner"
import InquiryForm from "@/components/sections/InquiryForm"
import SectionHeader from "@/components/sections/SectionHeader"

export default function Home() {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <div ref={containerRef}>
      <Hero />
      <ServicesSection />
      <ProcessSection />
      <ProductsSection />
      <ProblemsSection />
      <TrustSection />
      <CaseStudiesSection />

      <section className="bg-slate-50 py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
            <div>
              <SectionHeader
                align="left"
                eyebrow="Get started"
                title="Request your free sourcing quote"
                description="Share your product requirements and we will come back with a short plan, supplier options, and next steps — usually within one business day."
              />
              <ul className="mt-8 space-y-4">
                {[
                  "No obligation, no cost to get an initial plan",
                  "Clear pricing with no hidden margins",
                  "A bilingual project manager as your single point of contact",
                  "Independent QC that works for you, not the factory",
                ].map((p) => (
                  <li key={p} className="flex items-start gap-3 text-slate-700">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-[#f59e0b]" />
                    <span className="text-sm leading-relaxed">{p}</span>
                  </li>
                ))}
              </ul>
            </div>
            <InquiryForm source="home" />
          </div>
        </div>
      </section>

      <FaqSection />
      <CtaBanner />
    </div>
  )
}
