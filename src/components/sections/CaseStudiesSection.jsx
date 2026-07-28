import { ArrowUpRight } from 'lucide-react'
import { caseStudies } from '@/data/siteData'
import SectionHeader from '@/components/shared/SectionHeader'

const CaseStudiesSection = () => (
  <section className="bg-white py-16 text-brand-navy md:py-20">
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <SectionHeader
        eyebrow="Case studies"
        title="Examples of practical sourcing support"
        description="These examples show how structured supplier screening, clear specifications, production tracking, and QC planning can support B2B buyers."
      />
      <div className="mt-10 grid gap-6 lg:grid-cols-3">
        {caseStudies.map((study, index) => (
          <article key={study.title} className="rounded-3xl border border-brand-line bg-white p-6 text-brand-navy shadow-soft">
            <div className="flex items-start justify-between gap-4">
              <span className="rounded-full bg-brand-blue/10 px-3 py-1 text-xs font-bold uppercase tracking-wide text-brand-blue">
                {study.market}
              </span>
              <ArrowUpRight className="h-5 w-5 text-brand-slate" />
            </div>
            <h3 id={`case-study-${index + 1}-title`} className="mt-5 text-xl font-bold text-brand-navy">{study.title}</h3>
            <p className="mt-4 text-sm font-semibold text-brand-navy">Challenge</p>
            <p id={`case-study-${index + 1}-challenge`} className="mt-2 text-sm leading-6 text-brand-slate">{study.challenge}</p>
            <p className="mt-4 text-sm font-semibold text-brand-navy">Support provided</p>
            <p className="mt-2 text-sm leading-6 text-brand-slate">{study.result}</p>
          </article>
        ))}
      </div>
    </div>
  </section>
)

export default CaseStudiesSection
