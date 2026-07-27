import React from 'react'
import SectionHeading from '@/components/sections/SectionHeading'
import CTASection from '@/components/sections/CTASection'
import { caseStudies } from '@/data'

export default function CaseStudies() {
  return (
    <main>
      <section className="bg-slate-50 px-4 py-20 text-slate-900 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionHeading eyebrow="Case studies" title="Representative sourcing scenarios" description="These examples show common sourcing needs: verifying suppliers, keeping production on schedule, and checking quality before shipment." />
          <div className="mt-10 grid gap-8">
            {caseStudies.map((study, index) => (
              <article key={study.title} className="grid overflow-hidden rounded-3xl border border-slate-200 bg-white text-slate-900 shadow-sm lg:grid-cols-[0.85fr_1.15fr]">
                <img alt={study.title} className="h-72 w-full object-cover lg:h-full" data-strk-img-id={`case-study-image-${index}-d2a${index}`} data-strk-img={`[case-study-${index}-summary] [case-study-${index}-title]`} data-strk-img-ratio="4x3" data-strk-img-width="800" src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E" />
                <div className="p-7 lg:p-9">
                  <span className="rounded-full bg-blue-50 px-3 py-1 text-xs font-bold text-blue-800">{study.industry}</span>
                  <h2 id={`case-study-${index}-title`} className="mt-5 text-2xl font-bold text-slate-950">{study.title}</h2>
                  <p id={`case-study-${index}-summary`} className="mt-4 text-base leading-7 text-slate-700">{study.summary}</p>
                  <div className="mt-6 rounded-2xl bg-slate-50 p-5 text-slate-900">
                    <h3 className="font-bold text-slate-950">Support provided</h3>
                    <p className="mt-2 text-sm leading-6 text-slate-700">{study.outcome}</p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
      <CTASection />
    </main>
  )
}
