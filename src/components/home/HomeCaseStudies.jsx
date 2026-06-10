import { Link } from 'react-router-dom'
import { ArrowRight, Quote } from 'lucide-react'
import SectionHeading from '@/components/SectionHeading.jsx'
import { CASE_STUDIES } from '@/data/content.js'

export default function HomeCaseStudies() {
  return (
    <section className="section-pad bg-brand-mist" id="case-studies">
      <div className="container-page">
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <SectionHeading
            eyebrow="Case studies"
            title="How we have helped overseas buyers"
            description="A small selection of recent projects. We share the challenge, what we did, and the measurable result."
          />
          <Link
            to="/case-studies"
            className="hidden text-sm font-semibold text-brand-accent hover:text-brand-accent-dark md:inline-flex md:items-center md:gap-1.5"
          >
            See all case studies
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {CASE_STUDIES.slice(0, 4).map((cs) => (
            <article
              key={cs.industry + cs.client}
              className="flex flex-col rounded-xl border border-slate-200 bg-white p-6"
            >
              <div className="flex items-center gap-2">
                <span className="rounded-full bg-brand-accent-soft px-2.5 py-1 text-[11px] font-semibold uppercase tracking-wider text-brand-accent">
                  {cs.industry}
                </span>
                <span className="text-xs text-slate-500">{cs.client}</span>
              </div>
              <h3 className="mt-4 text-lg font-semibold text-brand-ink">{cs.product}</h3>

              <div className="mt-4 space-y-3 text-sm">
                <div>
                  <div className="text-xs font-semibold uppercase tracking-wider text-slate-500">Challenge</div>
                  <p className="mt-1 text-slate-600">{cs.challenge}</p>
                </div>
                <div>
                  <div className="text-xs font-semibold uppercase tracking-wider text-slate-500">What we did</div>
                  <ul className="mt-1 space-y-1 text-slate-600">
                    {cs.actions.map((a) => (
                      <li key={a} className="flex gap-2">
                        <span className="text-brand-accent">·</span>
                        <span>{a}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="rounded-md bg-emerald-50 p-3">
                  <div className="flex items-start gap-2">
                    <Quote className="mt-0.5 h-4 w-4 flex-shrink-0 text-emerald-600" />
                    <div>
                      <div className="text-xs font-semibold uppercase tracking-wider text-emerald-700">Outcome</div>
                      <p className="mt-1 text-sm text-emerald-900">{cs.outcome}</p>
                    </div>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
