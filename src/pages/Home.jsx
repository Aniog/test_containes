import Hero from '@/components/home/Hero.jsx'
import {
  ServicesSection, ProcessSection, ProductsSection, ProblemsSection, TrustSection, CaseStudiesSection,
} from '@/components/home/HomeSections.jsx'
import SectionHeader from '@/components/SectionHeader.jsx'
import Faq from '@/components/Faq.jsx'
import InquirySection from '@/components/InquirySection.jsx'

export default function Home() {
  return (
    <>
      <Hero />
      <ServicesSection />
      <ProcessSection />
      <ProductsSection />
      <ProblemsSection />
      <TrustSection />
      <CaseStudiesSection />
      <section className="bg-white py-16 md:py-24">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="FAQ"
            title="Common questions from overseas buyers"
            subtitle="Straight answers about fees, timelines, verification, and how we work."
          />
          <div className="mt-12">
            <Faq />
          </div>
        </div>
      </section>
      <InquirySection />
    </>
  )
}
