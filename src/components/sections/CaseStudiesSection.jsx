import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import { caseStudies } from '@/data/siteData'
import SectionIntro from './SectionIntro'

export default function CaseStudiesSection({ limit }) {
  const visibleCases = limit ? caseStudies.slice(0, limit) : caseStudies

  return (
    <section className="bg-brand-ice py-16 text-brand-navy md:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <SectionIntro
            eyebrow="Case studies"
            title="Examples of practical sourcing support"
            description="Representative project situations showing how structured sourcing, supplier verification, production follow-up, and inspection coordination help buyers make clearer decisions."
          />
          {limit && (
            <Link to="/case-studies" className="inline-flex items-center gap-2 text-sm font-bold text-brand-blue hover:text-brand-navy">
              View case studies <ArrowRight className="h-4 w-4" />
            </Link>
          )}
        </div>

        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          {visibleCases.map((study) => (
            <article key={study.id} className="overflow-hidden rounded-2xl border border-brand-line bg-white text-brand-navy shadow-sm">
              <img
                alt={study.title}
                className="h-56 w-full object-cover"
                data-strk-img-id={study.imgId}
                data-strk-img={`[${study.descId}] [${study.titleId}] [case-section-title]`}
                data-strk-img-ratio="4x3"
                data-strk-img-width="800"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              />
              <div className="p-6">
                <h3 id={study.titleId} className="text-xl font-bold tracking-tight">{study.title}</h3>
                <p id={study.descId} className="mt-3 text-sm leading-7 text-brand-slate">{study.summary}</p>
                <div className="mt-5 rounded-xl bg-brand-mist p-4">
                  <p className="text-xs font-bold uppercase tracking-[0.16em] text-brand-cyan">Result</p>
                  <p className="mt-2 text-sm leading-6 text-brand-slate">{study.result}</p>
                </div>
              </div>
            </article>
          ))}
        </div>
        <p id="case-section-title" className="sr-only">China sourcing case studies for factory verification quality inspection and shipping coordination</p>
      </div>
    </section>
  )
}
