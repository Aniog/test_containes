import HomeHero from '@/components/home/HomeHero'
import ServicesSection from '@/components/sections/ServicesSection'
import ProcessSection from '@/components/sections/ProcessSection'
import ProductsSection from '@/components/sections/ProductsSection'
import ProblemsSection from '@/components/sections/ProblemsSection'
import TrustSection from '@/components/sections/TrustSection'
import CaseStudiesSection from '@/components/sections/CaseStudiesSection'
import FAQ from '@/components/sections/FAQ'
import CTASection from '@/components/sections/CTASection'
import InquiryForm from '@/components/sections/InquiryForm'
import { Section, SectionHeader } from '@/components/ui/Section'

export default function Home() {
  return (
    <>
      <HomeHero />
      <ServicesSection />
      <ProcessSection />
      <ProductsSection />
      <ProblemsSection />
      <TrustSection />
      <CaseStudiesSection limit={3} />
      <FAQ />

      <Section id="inquiry" className="bg-slate-50">
        <div className="grid items-start gap-10 lg:grid-cols-2">
          <SectionHeader
            align="left"
            eyebrow="Free Sourcing Quote"
            title="Tell us what you want to source"
            description="Share your product, target price, and quantity. A project manager will reply within one business day with a free, no-obligation quote."
          />
          <InquiryForm />
        </div>
      </Section>

      <CTASection />
    </>
  )
}
