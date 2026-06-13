import { ArrowRight, CheckCircle2 } from 'lucide-react'
import { Link } from 'react-router-dom'
import CTASection from '@/components/site/CTASection'
import CaseStudyGrid from '@/components/site/CaseStudyGrid'
import FaqList from '@/components/site/FaqList'
import InquiryForm from '@/components/site/InquiryForm'
import ProblemGrid from '@/components/site/ProblemGrid'
import ProcessTimeline from '@/components/site/ProcessTimeline'
import ProductGrid from '@/components/site/ProductGrid'
import ServiceGrid from '@/components/site/ServiceGrid'
import StatStrip from '@/components/site/StatStrip'
import TrustPanel from '@/components/site/TrustPanel'
import SectionHeader from '@/components/shared/SectionHeader'
import {
  caseStudies,
  faqs,
  problemsWeSolve,
  processSteps,
  productCategories,
  services,
  stats,
  trustPoints,
} from '@/data/siteContent'

const Home = () => {
  return (
    <div>
      <section className="bg-white">
        <div className="mx-auto grid max-w-7xl gap-12 px-4 py-16 sm:px-6 lg:grid-cols-[1.05fr_0.95fr] lg:px-8 lg:py-24">
          <div className="max-w-2xl">
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-sky-700">
              China-based sourcing support
            </p>
            <h1
              id="home-hero-title"
              className="text-4xl font-bold tracking-tight text-slate-900 md:text-6xl"
            >
              China Sourcing Agent for Global Buyers
            </h1>
            <p
              id="home-hero-description"
              className="mt-6 text-lg leading-8 text-slate-600"
            >
              SSourcing China helps overseas buyers find suitable suppliers,
              verify factories, inspect quality, follow production, and
              coordinate shipping with practical support on the ground in China.
            </p>
            <span id="home-hero-image-prompt" className="sr-only">
              professional factory quality inspection of export consumer goods in
              China for overseas buyers
            </span>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                to="/contact#inquiry-form"
                className="inline-flex items-center gap-2 rounded-full bg-sky-700 px-6 py-3 text-sm font-semibold text-white transition hover:bg-sky-800"
              >
                Get a Free Sourcing Quote
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                to="/how-it-works"
                className="inline-flex items-center rounded-full border border-slate-300 bg-white px-6 py-3 text-sm font-semibold text-slate-900 transition hover:bg-slate-50"
              >
                See How It Works
              </Link>
            </div>
            <div className="mt-10 grid gap-4 sm:grid-cols-2">
              {[
                'Practical sourcing support for overseas buyers',
                'Factory verification before stronger commitment',
                'Inspection and production follow-up support',
                'Shipping coordination with clearer visibility',
              ].map((point) => (
                <div key={point} className="flex items-start gap-3">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 text-amber-500" />
                  <p className="text-sm leading-6 text-slate-700">{point}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-6">
            <div className="rounded-3xl border border-slate-200 bg-slate-100 p-3 shadow-sm">
              <img
                alt="SSourcing China helps buyers manage supplier checks and quality control"
                className="h-full min-h-[320px] w-full rounded-[1.25rem] object-cover"
                data-strk-img-id="home-hero-visual-6f2c8a"
                data-strk-img="[home-hero-image-prompt]"
                data-strk-img-ratio="4x3"
                data-strk-img-width="1200"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              />
            </div>
            <div className="rounded-3xl border border-slate-200 bg-slate-950 p-6 text-white shadow-sm">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-sky-300">
                Buyer priorities
              </p>
              <div className="mt-5 grid gap-4 sm:grid-cols-2">
                {[
                  ['Supplier fit', 'Check if the factory really matches your product and order stage.'],
                  ['Quality control', 'Arrange inspection before shipment and get clearer reporting.'],
                  ['Production visibility', 'Reduce silence and surprises after PO placement.'],
                  ['Shipment readiness', 'Coordinate packing, timing, and factory handoff.'],
                ].map(([title, copy]) => (
                  <div key={title} className="rounded-2xl bg-slate-900 px-4 py-4">
                    <p className="text-sm font-semibold text-white">{title}</p>
                    <p className="mt-2 text-sm leading-6 text-slate-300">{copy}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="pb-16 md:pb-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <StatStrip items={stats} />
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="Services"
            title="Local support for supplier search, control points, and follow-up"
            description="We support buyers who need clearer supplier selection, more reliable factory-side communication, and better control between inquiry and shipment."
          />
          <div className="mt-12">
            <ServiceGrid services={services} />
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="Sourcing process"
            title="A clear process from brief to shipment readiness"
            description="We keep the workflow practical so buyers know what happens first, what gets checked, and where decisions should be made."
          />
          <div className="mt-12">
            <ProcessTimeline steps={processSteps} />
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="Products we source"
            title="Support across practical product categories"
            description="We work with buyers across consumer goods, packaging, custom merchandise, and selected light industrial categories where supplier evaluation and follow-up matter."
          />
          <div className="mt-12">
            <ProductGrid items={productCategories} />
          </div>
        </div>
      </section>

      <section className="bg-slate-950 py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="Problems we solve"
            title="Common sourcing issues before they become expensive"
            description="Overseas buyers often need better visibility and better local follow-up, not just another quotation."
            align="center"
            theme="dark"
          />
          <div className="mt-12">
            <ProblemGrid items={problemsWeSolve} />
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <TrustPanel
            title="Trust points that matter to international buyers"
            description="SSourcing China is designed for buyers who need practical, China-based coordination and clearer control over sourcing, quality, and shipment preparation."
            points={trustPoints}
            titleId="home-trust-title"
            descriptionId="home-trust-description"
            imageId="home-trust-visual-c3a91d"
            imagePrompt="quality control inspector checking packaged export products and carton labels before shipment in China"
            imagePromptId="home-trust-image-prompt"
            imageQuery="[home-trust-image-prompt]"
          />
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="Case studies"
            title="Examples of practical sourcing support"
            description="A few examples of how structured supplier review, production follow-up, and inspection support can improve decision-making and execution."
          />
          <div className="mt-12">
            <CaseStudyGrid items={caseStudies} />
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="FAQ"
            title="Questions buyers often ask before starting"
            description="We keep the conversation practical and scoped around the support you actually need."
          />
          <div className="mt-12">
            <FaqList items={faqs} />
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="Inquiry form"
            title="Start your sourcing inquiry"
            description="Send your product brief and service needs. We will review the inquiry and reply with practical next steps."
          />
          <div className="mt-12">
            <InquiryForm sourcePage="home-page" />
          </div>
        </div>
      </section>

      <CTASection
        dark
        title="Need a sourcing partner in China with practical follow-up?"
        description="Tell us the product, quantity, market, and sourcing challenge. We will review whether we are a good fit and what support makes sense."
      />
    </div>
  )
}

export default Home
