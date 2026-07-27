import SectionHeader from '@/components/SectionHeader'
import CtaBanner from '@/components/CtaBanner'
import { caseStudies } from '@/data/siteData'
import { Building2, TrendingUp, MapPin } from 'lucide-react'

export default function CaseStudies() {
  return (
    <>
      <section className="bg-slate-900 py-16 md:py-24">
        <div className="section-container text-center">
          <h1 className="text-3xl md:text-5xl font-extrabold text-white tracking-tight">Case Studies</h1>
          <p className="mt-4 text-lg md:text-xl text-slate-300 max-w-3xl mx-auto">
            Real examples of how SSourcing China has helped international buyers source more reliably from China.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-white">
        <div className="section-container">
          <SectionHeader
            title="Client sourcing results"
            subtitle="Outcomes from projects across electronics, consumer goods, and industrial parts."
          />
          <div className="space-y-10">
            {caseStudies.map((study, index) => (
              <article key={study.id} className={`grid grid-cols-1 lg:grid-cols-2 gap-8 items-center bg-slate-50 rounded-2xl border border-slate-200 overflow-hidden ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
                <div className="h-64 lg:h-full bg-slate-200">
                  <img
                    data-strk-img-id={`case-detail-${study.id}-7d1e3a`}
                    data-strk-img={`[case-detail-title-${study.id}] [case-detail-industry-${study.id}]`}
                    data-strk-img-ratio="16x9"
                    data-strk-img-width="800"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    alt={study.client}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6 md:p-10">
                  <div className="flex flex-wrap gap-3 mb-4">
                    <span className="inline-flex items-center gap-1.5 bg-brand-light text-brand px-3 py-1 rounded-full text-sm font-semibold">
                      <Building2 className="w-3.5 h-3.5" />
                      <span id={`case-detail-industry-${study.id}`}>{study.industry}</span>
                    </span>
                    <span className="inline-flex items-center gap-1.5 bg-green-50 text-green-700 px-3 py-1 rounded-full text-sm font-semibold">
                      <TrendingUp className="w-3.5 h-3.5" />
                      Verified result
                    </span>
                  </div>
                  <h2 id={`case-detail-title-${study.id}`} className="text-2xl md:text-3xl font-bold text-slate-900 mb-4">{study.client}</h2>
                  <p className="text-slate-600 leading-relaxed mb-6">{study.summary}</p>
                  <div className="bg-white border border-slate-200 rounded-xl p-5">
                    <div className="text-sm text-slate-500 mb-1">Key result</div>
                    <div className="text-lg font-bold text-brand">{study.result}</div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-slate-50">
        <div className="section-container text-center">
          <div className="inline-flex items-center gap-2 text-slate-600 mb-4">
            <MapPin className="w-5 h-5 text-brand" />
            <span className="font-medium">Serving buyers across North America, Europe, Australia, and beyond</span>
          </div>
          <h2 className="section-title mb-4">Want results like these?</h2>
          <p className="text-slate-600 max-w-2xl mx-auto">
            Every project starts with understanding your product, budget, and timeline. Share your requirements and we will propose a plan.
          </p>
        </div>
      </section>

      <CtaBanner
        title="Start your case study"
        subtitle="Tell us about your sourcing goals and let us build a solution together."
      />
    </>
  )
}
