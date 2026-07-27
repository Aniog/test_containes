import { Link } from 'react-router-dom'
import { ArrowRight, Quote } from 'lucide-react'
import SectionHeading from '@/components/shared/SectionHeading'
import { CASE_STUDIES } from '@/data/site'

export default function CaseStudiesSection() {
  return (
    <section className="bg-white py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Case Studies"
          title="Real projects, measurable outcomes"
          description="A selection of recent sourcing, QC, and logistics projects — with the numbers that mattered to the client."
        />

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {CASE_STUDIES.map((cs) => (
            <article
              key={cs.id}
              className="flex flex-col rounded-xl border border-slate-200 bg-white p-6 shadow-sm transition-shadow hover:shadow-md"
            >
              <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider">
                <span className="rounded-full bg-primary-50 px-3 py-1 text-primary-700">{cs.industry}</span>
                <span className="text-slate-500">{cs.region}</span>
              </div>
              <h3 className="mt-4 text-lg font-semibold leading-snug text-slate-900">{cs.title}</h3>
              <p className="mt-2 flex-1 text-sm leading-relaxed text-slate-600">{cs.summary}</p>

              <div className="mt-5 grid grid-cols-3 gap-2 border-t border-slate-100 pt-5">
                {cs.results.map((r) => (
                  <div key={r.label}>
                    <p className="text-lg font-bold text-primary-700">{r.metric}</p>
                    <p className="mt-0.5 text-xs leading-snug text-slate-500">{r.label}</p>
                  </div>
                ))}
              </div>

              <div className="mt-5 rounded-lg bg-slate-50 p-4">
                <Quote className="h-4 w-4 text-accent-500" />
                <p className="mt-2 text-sm italic leading-relaxed text-slate-600">"{cs.quote}"</p>
                <p className="mt-2 text-xs font-medium text-slate-500">— {cs.quoteAuthor}</p>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-10 text-center">
          <Link
            to="/case-studies"
            className="inline-flex items-center gap-2 font-semibold text-primary-600 transition-colors hover:text-primary-700"
          >
            Read all case studies <ArrowRight className="h-5 w-5" />
          </Link>
        </div>
      </div>
    </section>
  )
}
