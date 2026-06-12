import { ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import { caseStudies } from '@/data/siteData'
import SectionHeading from './SectionHeading'

export default function CaseStudiesSection({ showLink = true }) {
  return (
    <section className="bg-slate-50 py-16 text-slate-900 md:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <SectionHeading
            eyebrow="Case studies"
            title="Examples of practical sourcing support"
            text="These scenarios show how a structured sourcing agent can help buyers compare suppliers, control quality, and coordinate production details."
          />
          {showLink && (
            <Link to="/case-studies" className="inline-flex items-center gap-2 text-sm font-bold text-blue-700 hover:text-blue-800">
              View all cases <ArrowRight className="h-4 w-4" />
            </Link>
          )}
        </div>
        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          {caseStudies.map((study) => (
            <article key={study.title} className="rounded-2xl border border-slate-200 bg-white p-6 text-slate-900 shadow-sm">
              <span className="inline-flex rounded-full bg-blue-50 px-3 py-1 text-xs font-bold text-blue-700">{study.industry}</span>
              <h3 className="mt-5 text-xl font-bold text-slate-950">{study.title}</h3>
              <p className="mt-4 text-sm font-bold text-slate-700">Challenge</p>
              <p className="mt-1 text-sm leading-6 text-slate-600">{study.challenge}</p>
              <p className="mt-4 text-sm font-bold text-slate-700">Support provided</p>
              <p className="mt-1 text-sm leading-6 text-slate-600">{study.result}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
