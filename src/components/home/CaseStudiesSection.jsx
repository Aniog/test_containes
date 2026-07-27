import { Link } from 'react-router-dom'
import { ArrowRight, Building2 } from 'lucide-react'
import SectionHeader from '@/components/SectionHeader'
import { caseStudies } from '@/data/siteData'

export default function CaseStudiesSection() {
  return (
    <section className="py-16 md:py-24 bg-slate-50">
      <div className="section-container">
        <SectionHeader
          label="Case Studies"
          title="Real results for international buyers"
          subtitle="Examples of how we have helped clients source smarter from China."
        />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {caseStudies.map((study) => (
            <article
              key={study.id}
              className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden hover:shadow-md transition"
            >
              <div className="h-44 bg-slate-200 relative">
                <img
                  data-strk-img-id={`case-study-${study.id}-9c2e1a`}
                  data-strk-img={`[case-study-title-${study.id}] [case-study-industry-${study.id}]`}
                  data-strk-img-ratio="16x9"
                  data-strk-img-width="600"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  alt={study.client}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 left-4 inline-flex items-center gap-1.5 bg-white/90 backdrop-blur rounded-full px-3 py-1 text-xs font-semibold text-slate-800">
                  <Building2 className="w-3.5 h-3.5" />
                  <span id={`case-study-industry-${study.id}`}>{study.industry}</span>
                </div>
              </div>
              <div className="p-6">
                <h3 id={`case-study-title-${study.id}`} className="text-lg font-bold text-slate-900 mb-2">{study.client}</h3>
                <p className="text-slate-600 text-sm leading-relaxed mb-4">{study.summary}</p>
                <div className="text-sm font-semibold text-brand">{study.result}</div>
              </div>
            </article>
          ))}
        </div>
        <div className="mt-10 text-center">
          <Link to="/case-studies" className="inline-flex items-center gap-2 text-brand font-semibold hover:text-brand-dark transition-colors">
            View all case studies
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  )
}
