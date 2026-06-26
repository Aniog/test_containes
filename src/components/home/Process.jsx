import React from 'react'
import { Section, SectionHeader } from '../Section'

const steps = [
  {
    number: '01',
    title: 'Send your inquiry',
    description:
      'Share your product details, target quantity, price range, and any reference images or samples.',
  },
  {
    number: '02',
    title: 'Supplier shortlist',
    description:
      'We screen suppliers in our network plus external sources, then return a shortlist with quotations.',
  },
  {
    number: '03',
    title: 'Samples & negotiation',
    description:
      'We manage sample requests, review the samples on the ground, and negotiate price, MOQ and terms.',
  },
  {
    number: '04',
    title: 'Production & QC',
    description:
      'We follow production weekly and run inspections (DPI / PSI) to control quality before shipping.',
  },
  {
    number: '05',
    title: 'Shipping & delivery',
    description:
      'We arrange consolidation, customs, and shipping by sea, air, or express to your warehouse or FBA.',
  },
]

export default function Process() {
  return (
    <Section id="process" className="bg-white">
      <SectionHeader
        eyebrow="Our Process"
        title="A clear sourcing process from inquiry to delivery"
        description="No black boxes. You stay informed at every step with weekly updates, supplier reports, and inspection results."
      />

      <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-5">
        {steps.map((s, idx) => (
          <div
            key={s.number}
            className="relative rounded-xl bg-white border border-slate-200 p-6 shadow-sm"
          >
            <div className="text-xs font-semibold uppercase tracking-widest text-blue-700">Step {s.number}</div>
            <h3 className="mt-3 text-lg font-semibold text-slate-900">{s.title}</h3>
            <p className="mt-2 text-sm text-slate-600 leading-relaxed">{s.description}</p>
            {idx < steps.length - 1 && (
              <div className="hidden lg:block absolute top-1/2 -right-3 h-px w-6 bg-slate-300" />
            )}
          </div>
        ))}
      </div>
    </Section>
  )
}
