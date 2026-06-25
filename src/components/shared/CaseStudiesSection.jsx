import { caseStudies } from '../../data/siteContent'
import SectionHeader from './SectionHeader'
import StockImage from './StockImage'

const CaseStudiesSection = ({ compact = false }) => (
  <section className="bg-slate-50 py-16 text-slate-950 md:py-24">
    <div className="mx-auto max-w-7xl px-6 lg:px-8">
      <SectionHeader
        eyebrow="Case studies"
        title="Practical sourcing support in real buying situations"
        description="Examples of common buyer challenges where better supplier screening, QC preparation, and coordination helped improve visibility."
      />
      <div className="mt-10 grid gap-6 lg:grid-cols-3">
        {caseStudies.map((study) => (
          <article className="overflow-hidden rounded-2xl border border-slate-200 bg-white text-slate-950 shadow-sm" key={study.id}>
            <StockImage
              alt={study.title}
              className="h-52 w-full object-cover"
              id={study.imgId}
              query={`[${study.descId}] [${study.titleId}]`}
              ratio="4x3"
              width="700"
            />
            <div className="p-6">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-blue-700">{study.industry}</p>
              <h3 className="mt-3 text-xl font-semibold tracking-tight text-slate-950" id={study.titleId}>{study.title}</h3>
              <p className="mt-3 text-sm leading-6 text-slate-600" id={study.descId}>{study.challenge}</p>
              {!compact && (
                <div className="mt-5 space-y-4 border-t border-slate-100 pt-5 text-sm leading-6 text-slate-700">
                  <p><span className="font-semibold text-slate-950">Support:</span> {study.solution}</p>
                  <p><span className="font-semibold text-slate-950">Result:</span> {study.outcome}</p>
                </div>
              )}
            </div>
          </article>
        ))}
      </div>
    </div>
  </section>
)

export default CaseStudiesSection
