import { Link } from 'react-router-dom'
import { ArrowRight, CircleCheckBig } from 'lucide-react'

import SectionHeading from '@/components/site/SectionHeading'
import ServiceGrid from '@/components/site/ServiceGrid'
import ProcessTimeline from '@/components/site/ProcessTimeline'
import ProductGrid from '@/components/site/ProductGrid'
import ProblemList from '@/components/site/ProblemList'
import TrustGrid from '@/components/site/TrustGrid'
import CaseStudyList from '@/components/site/CaseStudyList'
import FaqList from '@/components/site/FaqList'
import StatList from '@/components/site/StatList'
import InquiryForm from '@/components/site/InquiryForm'
import HeroVisual from '@/components/site/HeroVisual'
import {
  caseStudies,
  companyDetails,
  faqs,
  metrics,
  problemsWeSolve,
  processSteps,
  productCategories,
  services,
  trustPoints,
} from '@/content/siteContent'

const Home = () => {
  return (
    <div>
      <section className="overflow-hidden border-b border-brand-line bg-brand-surface py-14 md:py-20">
        <div className="container-shell grid gap-10 lg:grid-cols-[1.08fr_0.92fr] lg:items-center">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-brand-teal">
              China-based sourcing support
            </p>
            <h1 id="hero-title" className="mt-5 text-4xl font-semibold tracking-tight text-brand-ink md:text-6xl">
              China Sourcing Agent for Global Buyers
            </h1>
            <p id="hero-subtitle" className="mt-6 text-lg leading-8 text-brand-slate md:text-xl">
              SSourcing China helps overseas buyers find suitable suppliers, verify factories, inspect quality, follow production, and coordinate shipping with practical local execution.
            </p>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center rounded-full bg-brand-blue px-6 py-3 text-sm font-semibold text-white transition hover:bg-brand-blue-strong"
              >
                {companyDetails.cta}
              </Link>
              <Link
                to="/services"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-brand-line bg-white px-6 py-3 text-sm font-semibold text-brand-ink transition hover:border-brand-blue"
              >
                Explore services
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
            <div className="mt-8 grid gap-3 text-sm text-brand-slate sm:grid-cols-2">
              {[
                'Supplier search based on product, MOQ, and buyer requirements',
                'Factory verification and quality control support on the ground in China',
                'Production follow-up and shipment coordination for export orders',
                'Clear communication for importers, brands, and distributors',
              ].map((item) => (
                <div key={item} className="flex items-start gap-3 rounded-2xl bg-white px-4 py-3 shadow-card">
                  <CircleCheckBig className="mt-0.5 h-5 w-5 flex-none text-brand-teal" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          <HeroVisual />
        </div>
      </section>

      <section className="py-16 md:py-20">
        <div className="container-shell">
          <StatList items={metrics} />
        </div>
      </section>

      <section className="bg-brand-surface py-16 md:py-20">
        <div className="container-shell space-y-10">
          <SectionHeading
            eyebrow="Services"
            title="Practical sourcing support from search to shipment"
            description="Use SSourcing China for targeted supplier sourcing work or for ongoing order execution support across multiple steps."
          />
          <ServiceGrid items={services} />
        </div>
      </section>

      <section className="py-16 md:py-20">
        <div className="container-shell space-y-10">
          <SectionHeading
            eyebrow="How it works"
            title="A clear sourcing process for overseas buyers"
            description="We keep the workflow structured so supplier decisions, sample approvals, production follow-up, and shipment readiness are easier to manage remotely."
          />
          <ProcessTimeline steps={processSteps} />
        </div>
      </section>

      <section className="bg-brand-surface py-16 md:py-20">
        <div className="container-shell grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <div>
            <SectionHeading
              eyebrow="Products we source"
              title="Support across a wide range of export-oriented product categories"
              description="We work on practical sourcing projects for standard products, custom branded goods, packaging, and selected OEM / ODM programs."
            />
          </div>
          <ProductGrid items={productCategories} />
        </div>
      </section>

      <section className="py-16 md:py-20">
        <div className="container-shell grid gap-10 lg:grid-cols-[0.92fr_1.08fr] lg:items-start">
          <div>
            <SectionHeading
              eyebrow="Problems we solve"
              title="Reduce avoidable sourcing risk before it affects your order"
              description="Many buyers do not need more supplier emails. They need better visibility into supplier fit, production progress, quality status, and shipment readiness."
            />
          </div>
          <ProblemList items={problemsWeSolve} />
        </div>
      </section>

      <section className="bg-brand-surface py-16 md:py-20">
        <div className="container-shell space-y-10">
          <SectionHeading
            eyebrow="Why buyers work with us"
            title="Built for practical sourcing execution, not generic consulting"
            description="We focus on concrete actions that help buyers evaluate suppliers, control quality, and keep projects moving."
          />
          <TrustGrid items={trustPoints} />
        </div>
      </section>

      <section className="py-16 md:py-20">
        <div className="container-shell space-y-10">
          <SectionHeading
            eyebrow="Case studies"
            title="Examples of sourcing support across different buyer needs"
            description="These examples show how SSourcing China supports supplier selection, quality control, production follow-up, and shipment preparation."
          />
          <CaseStudyList items={caseStudies} />
        </div>
      </section>

      <section className="bg-brand-surface py-16 md:py-20">
        <div className="container-shell grid gap-10 lg:grid-cols-[0.88fr_1.12fr] lg:items-start">
          <div>
            <SectionHeading
              eyebrow="FAQ"
              title="Common questions from importers and sourcing teams"
              description="If you are evaluating sourcing support in China, these are some of the questions buyers usually ask before getting started."
            />
          </div>
          <FaqList items={faqs} />
        </div>
      </section>

      <section id="inquiry-form" className="py-16 md:py-20">
        <div className="container-shell">
          <InquiryForm />
        </div>
      </section>
    </div>
  )
}

export default Home
