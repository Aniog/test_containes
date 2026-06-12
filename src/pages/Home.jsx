import CaseStudiesSection from '@/components/sections/CaseStudiesSection'
import CtaSection from '@/components/sections/CtaSection'
import FaqSection from '@/components/sections/FaqSection'
import HeroSection from '@/components/sections/HeroSection'
import ProblemTrustSection from '@/components/sections/ProblemTrustSection'
import ProcessSection from '@/components/sections/ProcessSection'
import ProductsSection from '@/components/sections/ProductsSection'
import ServicesGrid from '@/components/sections/ServicesGrid'
import VisualBand from '@/components/sections/VisualBand'
import InquiryForm from '@/components/forms/InquiryForm'

export default function Home() {
  return (
    <main>
      <HeroSection />
      <ServicesGrid />
      <ProcessSection />
      <ProductsSection />
      <ProblemTrustSection />
      <VisualBand />
      <CaseStudiesSection />
      <FaqSection />
      <section className="bg-slate-50 py-16 text-slate-900 md:py-24">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[0.8fr_1.2fr] lg:px-8">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.24em] text-blue-700">Qualified sourcing inquiries</p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-950 md:text-4xl">Tell us what you want to source from China.</h2>
            <p className="mt-4 text-base leading-7 text-slate-700">
              The more details you provide, the more practical our initial review can be. Useful details include product specifications, target quantity, standards, packaging, timeline, and destination port or country.
            </p>
          </div>
          <InquiryForm />
        </div>
      </section>
      <CtaSection />
    </main>
  )
}
