import SectionHeader from '@/components/common/SectionHeader'
import VisualImage from '@/components/common/VisualImage'
import { caseStudies } from '@/data/siteContent'

export default function CaseStudiesSection({ showHeader = true }) {
  return (
    <section className="bg-white py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {showHeader && (
          <SectionHeader
            eyebrow="Case studies"
            title="Examples of practical sourcing support"
            description="These examples show how a local sourcing agent can help with supplier comparison, production details, quality checks, and export coordination."
            align="center"
            id="case-section-title"
          />
        )}
        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {caseStudies.map((item) => (
            <article key={item.id} className="overflow-hidden rounded-3xl border border-brand-line bg-white text-slate-900 shadow-sm">
              <div className="h-56 bg-brand-sky">
                <VisualImage
                  alt={item.title}
                  imgId={item.imageId}
                  query={`[${item.descId}] [${item.titleId}] [case-section-title]`}
                  ratio="4x3"
                  width="800"
                />
              </div>
              <div className="p-6">
                <p className="inline-flex rounded-full bg-brand-sky px-3 py-1 text-xs font-semibold text-brand-blue">{item.metric}</p>
                <h3 id={item.titleId} className="mt-4 text-xl font-semibold leading-7 text-brand-navy">{item.title}</h3>
                <p id={item.descId} className="mt-3 text-sm leading-6 text-slate-600"><span className="font-semibold text-slate-800">Challenge:</span> {item.challenge}</p>
                <p className="mt-3 text-sm leading-6 text-slate-600"><span className="font-semibold text-slate-800">Support:</span> {item.outcome}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
