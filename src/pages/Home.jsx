import HeroSection from '@/components/home/HeroSection'
import VisualProofSection from '@/components/home/VisualProofSection'
import InquiryForm from '@/components/contact/InquiryForm'
import MetricStrip from '@/components/site/MetricStrip'
import ServiceGrid from '@/components/site/ServiceGrid'
import ProcessSection from '@/components/site/ProcessSection'
import ProductGrid from '@/components/site/ProductGrid'
import ProblemSolutionSection from '@/components/site/ProblemSolutionSection'
import CaseStudySection from '@/components/site/CaseStudySection'
import FaqSection from '@/components/site/FaqSection'
import BlogSection from '@/components/site/BlogSection'
import CtaBanner from '@/components/site/CtaBanner'
import {
  blogPosts,
  caseStudies,
  faqItems,
  problemsWeSolve,
  processSteps,
  productCategories,
  services,
  stats,
  trustPoints,
} from '@/content/siteContent'
import { usePageMeta } from '@/lib/usePageMeta'

export default function Home() {
  usePageMeta('China Sourcing Agent | Supplier Verification. QC & Shipping | SSourcing China')

  return (
    <main>
      <HeroSection />
      <MetricStrip items={stats} />
      <ServiceGrid items={services} />
      <ProcessSection steps={processSteps} />
      <VisualProofSection />
      <ProductGrid items={productCategories.slice(0, 6)} />
      <ProblemSolutionSection items={problemsWeSolve} trustPoints={trustPoints} />
      <CaseStudySection items={caseStudies} limit={3} />
      <BlogSection posts={blogPosts} limit={4} />
      <FaqSection items={faqItems} />
      <section className="bg-slate-50 py-16 md:py-24">
        <div className="mx-auto grid max-w-7xl gap-8 px-4 sm:px-6 lg:grid-cols-[0.9fr,1.1fr] lg:px-8">
          <div className="space-y-5 rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm md:p-8">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-700">
              Inquiry form
            </p>
            <h2 className="text-3xl font-semibold tracking-tight text-slate-950">
              Start with a qualified sourcing inquiry
            </h2>
            <p className="text-base leading-7 text-slate-600">
              If you already have product details, a target quantity, or a supplier problem you want checked, include it in the form. Clearer details help us assess the best next step.
            </p>
            <div className="rounded-3xl bg-slate-50 p-5">
              <p className="text-sm font-semibold text-slate-950">Best inquiries usually include:</p>
              <ul className="mt-3 space-y-3 text-sm leading-6 text-slate-600">
                <li>Product type and key specifications</li>
                <li>Quantity or buying stage</li>
                <li>Target market or destination country</li>
                <li>Support needed: supplier search, verification, QC, or shipping coordination</li>
              </ul>
            </div>
          </div>
          <InquiryForm sourcePage="home" />
        </div>
      </section>
      <CtaBanner />
    </main>
  )
}
