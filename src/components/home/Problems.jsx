import React from 'react'
import { Section, SectionHeader } from '../Section'
import { AlertTriangle, CheckCircle2 } from 'lucide-react'

const items = [
  {
    problem: 'Unverified suppliers and trading companies pretending to be factories',
    solution: 'We visit factories in person, verify business licenses, capacity, and confirm direct manufacturing.',
  },
  {
    problem: 'Inconsistent product quality between samples and bulk production',
    solution: 'Pre-production, in-line and pre-shipment inspections with detailed photo/video reports.',
  },
  {
    problem: 'Communication gaps, missed deadlines and unclear lead times',
    solution: 'Weekly production reports in English with timeline updates and proactive risk alerts.',
  },
  {
    problem: 'Hidden fees and unfavorable shipping or payment terms',
    solution: 'Transparent quotes, negotiated terms, and direct introductions to vetted freight partners.',
  },
  {
    problem: 'Difficulty managing multiple suppliers and small orders',
    solution: 'Consolidation at our warehouse, repacking, labeling and one shipment to your destination.',
  },
  {
    problem: 'Language, time-zone and cultural barriers slowing things down',
    solution: 'English-speaking project managers in China handle daily supplier communication on your behalf.',
  },
]

export default function Problems() {
  return (
    <Section id="problems" className="bg-white">
      <SectionHeader
        eyebrow="Problems We Solve"
        title="Sourcing in China can be hard. We make it predictable."
        description="Most buyers experience the same recurring issues when sourcing from China. Here is how we address them."
      />

      <div className="mt-12 grid gap-6 md:grid-cols-2">
        {items.map((item, idx) => (
          <div key={idx} className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
            <div className="flex items-start gap-3">
              <div className="inline-flex h-9 w-9 items-center justify-center rounded-md bg-rose-50 text-rose-600 shrink-0">
                <AlertTriangle className="h-5 w-5" />
              </div>
              <div>
                <p className="text-xs font-semibold uppercase tracking-widest text-rose-700">The Problem</p>
                <p className="mt-1 text-sm text-slate-800">{item.problem}</p>
              </div>
            </div>
            <div className="mt-5 flex items-start gap-3 pt-5 border-t border-slate-100">
              <div className="inline-flex h-9 w-9 items-center justify-center rounded-md bg-emerald-50 text-emerald-700 shrink-0">
                <CheckCircle2 className="h-5 w-5" />
              </div>
              <div>
                <p className="text-xs font-semibold uppercase tracking-widest text-emerald-700">How We Solve It</p>
                <p className="mt-1 text-sm text-slate-700 leading-relaxed">{item.solution}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </Section>
  )
}
