import { ImageHelper } from '@strikingly/sdk'
import { useEffect, useRef } from 'react'
import strkImgConfig from '@/strk-img-config.json'
import CTASection from '@/components/shared/CTASection'
import {
  CaseStudiesSection,
  FAQSection,
  HomeHero,
  ProblemsAndTrustSection,
  ProcessSection,
  ProductsSection,
  ServicesPreview,
} from '@/components/shared/HomeSections'
import InquiryForm from '@/components/shared/InquiryForm'
import SectionIntro from '@/components/shared/SectionIntro'
import { usePageMeta } from '@/hooks/usePageMeta'

export default function HomePage() {
  const pageRef = useRef(null)

  usePageMeta(
    'China Sourcing Agent | Supplier Verification, QC & Shipping | SSourcing China',
    'SSourcing China helps global buyers verify suppliers, inspect quality, follow production, and coordinate shipping from China.'
  )

  useEffect(() => {
    let cleanup = () => {}

    const frameId = window.requestAnimationFrame(() => {
      cleanup = ImageHelper.loadImages(strkImgConfig, pageRef.current)
    })

    return () => {
      window.cancelAnimationFrame(frameId)
      cleanup()
    }
  }, [])

  return (
    <div ref={pageRef}>
      <HomeHero />
      <ServicesPreview />
      <ProcessSection />
      <ProductsSection />
      <ProblemsAndTrustSection />
      <CaseStudiesSection />
      <FAQSection />
      <section className="bg-white py-16 sm:py-20">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:px-8">
          <div>
            <SectionIntro
              eyebrow="Inquiry form"
              title="Tell us what you need to source or verify"
              description="Share your product, quantity, sourcing stage, and the support you need. We use this information to review your request and respond with the most suitable next step."
            />
          </div>
          <InquiryForm />
        </div>
      </section>
      <CTASection />
    </div>
  )
}
