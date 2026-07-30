import React from 'react'
import { XCircle, CheckCircle } from 'lucide-react'

const problems = [
  'Hard to find trustworthy suppliers online',
  'Language barriers and slow communication',
  'Unclear factory capabilities and certifications',
  'Quality issues discovered too late',
  'Missed production deadlines',
  'Confusing shipping paperwork and logistics',
]

const solutions = [
  'Local team visits and audits factories in person',
  'Bilingual sourcing managers handle negotiations',
  'Detailed verification reports before you commit',
  'Inspections at pre-production, inline, and pre-shipment stages',
  'Weekly milestone tracking and proactive issue escalation',
  'Export docs, freight coordination, and delivery tracking',
]

export default function ProblemsSection() {
  return (
    <section className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto">
          <span className="section-label">Problems We Solve</span>
          <h2 className="text-3xl sm:text-4xl font-bold mt-3">Sourcing from China Should Not Be a Gamble</h2>
          <p className="text-lg text-slate-600 mt-4">
            We address the common risks international buyers face when purchasing from Chinese suppliers.
          </p>
        </div>

        <div className="mt-14 grid lg:grid-cols-2 gap-8 lg:gap-12">
          <div className="card p-8">
            <h3 className="text-xl font-semibold mb-6">Common Sourcing Challenges</h3>
            <ul className="space-y-4">
              {problems.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <XCircle className="w-6 h-6 text-red-500 shrink-0 mt-0.5" />
                  <span className="text-slate-700">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="card p-8 bg-slate-900 border-slate-800">
            <h3 className="text-xl font-semibold text-white mb-6">How SSourcing China Helps</h3>
            <ul className="space-y-4">
              {solutions.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-brand-400 shrink-0 mt-0.5" />
                  <span className="text-slate-300">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
