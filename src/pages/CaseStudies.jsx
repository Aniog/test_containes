import React from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, CheckCircle2 } from 'lucide-react'

const cases = [
  {
    title: 'Home goods importer from Australia',
    challenge: 'The buyer struggled with inconsistent quality and rising costs from their existing supplier. Defect rates were around 4% and communication was slow.',
    solution: 'We sourced three alternative factories, audited each on-site, and negotiated better terms. We implemented pre-production and pre-shipment inspections.',
    result: 'Unit cost reduced by 18%, defect rate dropped to 0.6%, and communication improved with a dedicated contact.',
    metrics: [
      { label: 'Cost reduction', value: '18%' },
      { label: 'Defect rate', value: '0.6%' },
      { label: 'Response time', value: '< 4h' },
    ],
  },
  {
    title: 'Electronics brand from the United States',
    challenge: 'The buyer needed a reliable manufacturer for a new product line but had no local contacts and limited knowledge of the Chinese electronics supply chain.',
    solution: 'We identified 12 potential suppliers, narrowed it down to 3, and arranged factory audits. We coordinated sample production and testing.',
    result: 'The buyer selected a factory that met all technical and compliance requirements, and the first production run shipped on schedule.',
    metrics: [
      { label: 'Suppliers reviewed', value: '12' },
      { label: 'Time to first sample', value: '3 weeks' },
      { label: 'On-time delivery', value: '100%' },
    ],
  },
  {
    title: 'Industrial parts buyer from Germany',
    challenge: 'The buyer needed to coordinate a 40ft container shipment of metal components but faced uncertainty about customs documentation and freight options.',
    solution: 'We reviewed the supplier documentation, prepared export paperwork, and coordinated with a freight forwarder experienced in industrial cargo.',
    result: 'The shipment cleared Chinese export and German import customs without delays, arriving within the agreed timeline.',
    metrics: [
      { label: 'Container size', value: '40ft' },
      { label: 'Customs delays', value: '0 days' },
      { label: 'Delivery status', value: 'On time' },
    ],
  },
]

export default function CaseStudies() {
  return (
    <div className="bg-white">
      <section className="bg-slate-900 py-16 text-white sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">Case Studies</h1>
          <p className="mt-4 max-w-2xl text-lg text-slate-300">Real examples of how we helped buyers reduce cost, improve quality, and ship with confidence.</p>
        </div>
      </section>

      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="space-y-10">
            {cases.map((item) => (
              <div key={item.title} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
                <h2 className="text-xl font-semibold text-slate-900">{item.title}</h2>
                <div className="mt-4 grid gap-6 lg:grid-cols-3">
                  <div className="lg:col-span-2 space-y-4">
                    <div>
                      <div className="text-sm font-semibold text-slate-900">Challenge</div>
                      <p className="mt-1 text-sm leading-6 text-slate-600">{item.challenge}</p>
                    </div>
                    <div>
                      <div className="text-sm font-semibold text-slate-900">Solution</div>
                      <p className="mt-1 text-sm leading-6 text-slate-600">{item.solution}</p>
                    </div>
                    <div>
                      <div className="text-sm font-semibold text-slate-900">Result</div>
                      <p className="mt-1 text-sm leading-6 text-slate-600">{item.result}</p>
                    </div>
                  </div>
                  <div className="rounded-xl border border-slate-200 bg-slate-50 p-5">
                    <div className="text-sm font-semibold text-slate-900">Key metrics</div>
                    <div className="mt-4 space-y-3">
                      {item.metrics.map((metric) => (
                        <div key={metric.label} className="flex items-center justify-between">
                          <span className="text-sm text-slate-600">{metric.label}</span>
                          <span className="text-sm font-semibold text-slate-900">{metric.value}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-12 text-center">
            <Link to="/contact">
              <button className="inline-flex items-center justify-center rounded-md bg-slate-900 px-6 py-3 text-sm font-medium text-white shadow-sm transition-colors hover:bg-slate-800">
                Start a similar project <ArrowRight className="ml-2 h-4 w-4" />
              </button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
