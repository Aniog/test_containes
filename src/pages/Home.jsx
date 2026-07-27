import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import { useStrkImages } from '@/lib/useStrkImages'
import HeroSection from '@/components/sections/HeroSection'
import ServicesSection from '@/components/sections/ServicesSection'
import ProcessSection from '@/components/sections/ProcessSection'
import ProductsSection from '@/components/sections/ProductsSection'
import ProblemsSection from '@/components/sections/ProblemsSection'
import TrustSection from '@/components/sections/TrustSection'
import CaseStudiesSection from '@/components/sections/CaseStudiesSection'
import FaqSection from '@/components/sections/FaqSection'
import InquiryForm from '@/components/forms/InquiryForm'

export default function Home() {
  const containerRef = useStrkImages()

  return (
    <main ref={containerRef}>
      <HeroSection />
      <ServicesSection />
      <ProcessSection />
      <ProductsSection />
      <ProblemsSection />
      <TrustSection />
      <CaseStudiesSection limit={3} />
      <FaqSection />
      <section className="bg-brand-mist py-16 text-brand-navy md:py-24">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:px-8">
          <div className="flex flex-col justify-center">
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-brand-cyan">Start with a clear brief</p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight md:text-4xl">Ready to review your China sourcing options?</h2>
            <p className="mt-4 text-lg leading-8 text-brand-slate">
              Send product details, target quantity, destination market, and quality expectations. We will help you understand the best next step for supplier search, verification, QC, or shipment coordination.
            </p>
            <Link to="/contact" className="mt-7 inline-flex w-fit items-center gap-2 rounded-full bg-brand-blue px-6 py-4 text-sm font-bold text-white transition hover:bg-brand-navy">
              Contact SSourcing China <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          <InquiryForm compact />
        </div>
      </section>
    </main>
  )
}
