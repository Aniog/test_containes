import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import SectionHeading from '@/components/ui/SectionHeading'
import { caseStudies } from '@/data/site'

export default function HomeCaseStudies() {
  const featured = caseStudies.slice(0, 3)
  return (
    <section className="bg-brand-slate">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <SectionHeading
            eyebrow="Case Studies"
            title="Real sourcing projects, real outcomes"
            description="A look at how we have helped buyers recover, consolidate, and scale their China sourcing."
          />
          <Link
            to="/case-studies"
            className="inline-flex shrink-0 items-center gap-2 text-sm font-semibold text-brand-blue hover:text-brand-blue-600"
          >
            Read all case studies
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {featured.map((cs) => (
            <article
              key={cs.id}
              className="group flex flex-col overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm transition-all hover:shadow-md"
            >
              <div className="relative aspect-[16/9] overflow-hidden bg-slate-100">
                <img
                  alt={cs.title}
                  data-strk-img-id={cs.imgId}
                  data-strk-img={`[${cs.descId}] [${cs.titleId}]`}
                  data-strk-img-ratio="16x9"
                  data-strk-img-width="800"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <span className="absolute left-4 top-4 rounded-full bg-white/95 px-3 py-1 text-xs font-semibold text-brand-navy">
                  {cs.industry}
                </span>
              </div>
              <div className="flex flex-1 flex-col p-6">
                <h3 id={cs.titleId} className="text-lg font-bold text-brand-ink">
                  {cs.title}
                </h3>
                <p id={cs.descId} className="mt-2 flex-1 text-sm leading-relaxed text-brand-muted">
                  {cs.summary}
                </p>
                <div className="mt-5 flex flex-wrap gap-4 border-t border-slate-100 pt-4">
                  {cs.metrics.map((m) => (
                    <div key={m.label}>
                      <p className="text-lg font-bold text-brand-blue">
                        {m.value}
                      </p>
                      <p className="text-[11px] uppercase tracking-wide text-brand-muted">
                        {m.label}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
