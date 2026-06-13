import { useEffect, useRef } from 'react'
import { ImageHelper } from '@strikingly/sdk'
import CaseStudiesSection from '../components/sections/CaseStudiesSection'
import ContactCTASection from '../components/sections/ContactCTASection'
import FAQSection from '../components/sections/FAQSection'
import HeroSection from '../components/sections/HeroSection'
import InquiryForm from '../components/sections/InquiryForm'
import ProblemsTrustSection from '../components/sections/ProblemsTrustSection'
import ProcessSection from '../components/sections/ProcessSection'
import ProductsSection from '../components/sections/ProductsSection'
import ServicesSection from '../components/sections/ServicesSection'
import strkImgConfig from '../strk-img-config.json'

export default function Home() {
  const containerRef = useRef(null)

  useEffect(() => ImageHelper.loadImages(strkImgConfig, containerRef.current), [])

  return (
    <main ref={containerRef}>
      <HeroSection />
      <ServicesSection />
      <ProcessSection />
      <ProductsSection />
      <ProblemsTrustSection />
      <CaseStudiesSection />
      <FAQSection />
      <section className="bg-brand-surface px-4 py-20 sm:px-6 lg:px-8" id="quote">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="text-brand-ink">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-brand-blue">Qualified inquiries</p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-brand-navy md:text-4xl">Tell us what you need to source from China.</h2>
            <p className="mt-4 text-base leading-7 text-brand-subtle">The more specific your product requirement is, the more useful our first response can be. Include target quantity, market, quality expectations, and shipment destination if available.</p>
          </div>
          <InquiryForm />
        </div>
      </section>
      <ContactCTASection />
    </main>
  )
}
