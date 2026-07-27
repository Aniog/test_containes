import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import SectionHeader from '@/components/shared/SectionHeader.jsx'
import { caseStudies } from '@/data/siteData.js'

export default function CaseStudiesSection({ limit }) {
  const items = limit ? caseStudies.slice(0, limit) : caseStudies

  return (
    <section className="bg-sourcing-soft py-16 text-sourcing-ink md:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <SectionHeader
            eyebrow="Case studies"
            title="Examples of practical China-side support"
            description="These examples show the type of sourcing, verification, inspection, and production follow-up support overseas buyers request."
          />
          {limit && (
            <Link to="/case-studies" className="inline-flex items-center gap-2 text-sm font-bold text-sourcing-blue hover:text-sourcing-navy">
              See more cases <ArrowRight className="h-4 w-4" />
            </Link>
          )}
        </div>
        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          {items.map((study) => (
            <article key={study.title} className="rounded-2xl border border-sourcing-line bg-white p-6 text-sourcing-ink shadow-sm">
              <p className="inline-flex rounded-full bg-sourcing-sky px-3 py-1 text-xs font-bold uppercase tracking-wide text-sourcing-blue">{study.industry}</p>
              <h3 className="mt-5 text-xl font-bold text-sourcing-navy">{study.title}</h3>
              <div className="mt-5 space-y-4 text-sm leading-7 text-sourcing-muted">
                <p><span className="font-bold text-sourcing-ink">Challenge:</span> {study.challenge}</p>
                <p><span className="font-bold text-sourcing-ink">Support:</span> {study.result}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
