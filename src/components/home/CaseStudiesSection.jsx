import SectionHeader from '@/components/site/SectionHeader.jsx'
import StockImage from '@/components/site/StockImage.jsx'
import CTAButton from '@/components/site/CTAButton.jsx'
import { caseStudies } from '@/content.js'

const CaseStudiesSection = () => (
  <section className="bg-brand-mist py-16 md:py-24">
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
        <SectionHeader align="left" eyebrow="Case studies" title="Practical examples of sourcing support" description="Representative project scenarios showing how buyers use local verification, QC, and follow-up support." />
        <CTAButton to="/case-studies" variant="secondary">View Case Studies</CTAButton>
      </div>
      <div className="mt-12 grid gap-6 md:grid-cols-3">
        {caseStudies.map((study, index) => (
          <article key={study.title} className="overflow-hidden rounded-2xl border border-brand-border bg-white shadow-sm">
            <StockImage imgId={study.imageId} query={`[case-result-${index}] [case-title-${index}]`} ratio="4x3" width="700" alt={study.title} className="h-56 w-full object-cover" />
            <div className="p-6">
              <p className="mb-3 inline-flex rounded-full bg-brand-mist px-3 py-1 text-xs font-semibold text-brand-blue">{study.tag}</p>
              <h3 id={`case-title-${index}`} className="text-lg font-semibold text-brand-navy">{study.title}</h3>
              <p id={`case-result-${index}`} className="mt-3 text-sm leading-7 text-brand-muted">{study.result}</p>
            </div>
          </article>
        ))}
      </div>
    </div>
  </section>
)

export default CaseStudiesSection
