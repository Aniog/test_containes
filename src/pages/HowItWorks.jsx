import React from 'react'
import SectionHeading from '@/components/sections/SectionHeading'
import CTASection from '@/components/sections/CTASection'
import { processSteps } from '@/data'

export default function HowItWorks() {
  return (
    <main>
      <section className="bg-slate-50 px-4 py-20 text-slate-900 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionHeading eyebrow="How it works" title="A structured sourcing workflow from request to shipment" description="The process is designed for clear decisions. You stay informed with supplier comparisons, verification notes, quality updates, and logistics coordination." />
          <div className="mt-10 grid gap-8 lg:grid-cols-[1fr_0.85fr] lg:items-start">
            <div className="grid gap-5">
              {processSteps.map(([number, title, text]) => (
                <article key={number} className="rounded-3xl border border-slate-200 bg-white p-6 text-slate-900 shadow-sm">
                  <div className="flex items-start gap-5">
                    <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-slate-950 text-sm font-bold text-white">{number}</span>
                    <div>
                      <h2 className="text-xl font-bold text-slate-950">{title}</h2>
                      <p className="mt-2 text-sm leading-6 text-slate-700">{text}</p>
                    </div>
                  </div>
                </article>
              ))}
            </div>
            <aside className="sticky top-28 overflow-hidden rounded-3xl border border-slate-200 bg-white text-slate-900 shadow-sm">
              <img alt="Production follow-up meeting in China factory" className="h-72 w-full object-cover" data-strk-img-id="process-side-production-e36a21" data-strk-img="[process-side-title]" data-strk-img-ratio="4x3" data-strk-img-width="800" src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E" />
              <div className="p-6">
                <h2 id="process-side-title" className="text-xl font-bold text-slate-950">Local follow-up creates better visibility</h2>
                <p className="mt-3 text-sm leading-6 text-slate-700">Factories move quickly. Local checking, prompt clarification, and production milestone tracking help buyers respond earlier when specifications or timing need attention.</p>
              </div>
            </aside>
          </div>
        </div>
      </section>
      <CTASection />
    </main>
  )
}
