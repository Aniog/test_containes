import React from 'react'
import { Link } from 'react-router-dom'
import { Button } from '@/components/ui/button'
import { ArrowRight, CheckCircle2 } from 'lucide-react'

const cases = [
  {
    title: 'Electronics Importer from Germany',
    challenge: 'The client needed a reliable supplier for wireless chargers with consistent quality and competitive pricing.',
    solution: 'We identified 3 verified factories, arranged samples, conducted pre-shipment inspections, and coordinated sea freight.',
    result: 'Reduced defect rate from 8% to under 1%, cut unit cost by 12%, and established a long-term supplier relationship.',
    metrics: [
      { label: 'Defect rate', value: '<1%' },
      { label: 'Cost reduction', value: '12%' },
      { label: 'Lead time', value: '35 days' },
    ],
  },
  {
    title: 'Home Goods Retailer from the UK',
    challenge: 'The client struggled with inconsistent quality from previous suppliers and needed better QC control.',
    solution: 'We implemented a full inspection process including during-production checks and container loading supervision.',
    result: 'Customer complaints dropped significantly, and the client expanded their product range with confidence.',
    metrics: [
      { label: 'Customer complaints', value: '-60%' },
      { label: 'Product range', value: '+40%' },
      { label: 'Reorder rate', value: '85%' },
    ],
  },
  {
    title: 'Industrial Parts Buyer from the US',
    challenge: 'The client required custom metal components with tight tolerances and needed a factory audit before placing a large order.',
    solution: 'We performed a detailed factory audit, verified certifications, and set up a quality control plan with measurement reports.',
    result: 'First shipment passed all quality checks, and the client placed a repeat order within 3 months.',
    metrics: [
      { label: 'First-pass quality', value: '100%' },
      { label: 'Repeat order', value: '3 months' },
      { label: 'On-time delivery', value: '98%' },
    ],
  },
]

const CaseStudies = () => {
  return (
    <div className="bg-white">
      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-3xl md:text-4xl font-bold text-slate-900">Case Studies</h1>
            <p className="mt-4 text-slate-600 max-w-2xl mx-auto">Real examples of how we helped overseas buyers source better, safer, and faster from China.</p>
          </div>
          <div className="mt-12 space-y-8">
            {cases.map((caseItem) => (
              <div key={caseItem.title} className="rounded-2xl border border-slate-200 bg-white p-6 md:p-8 shadow-sm">
                <h2 className="text-xl font-semibold text-slate-900">{caseItem.title}</h2>
                <div className="mt-4 grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div>
                    <h3 className="text-sm font-semibold text-slate-900">Challenge</h3>
                    <p className="mt-2 text-sm text-slate-600">{caseItem.challenge}</p>
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-slate-900">Solution</h3>
                    <p className="mt-2 text-sm text-slate-600">{caseItem.solution}</p>
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-slate-900">Result</h3>
                    <p className="mt-2 text-sm text-slate-600">{caseItem.result}</p>
                  </div>
                </div>
                <div className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-4">
                  {caseItem.metrics.map((metric) => (
                    <div key={metric.label} className="rounded-lg border border-slate-200 bg-slate-50 p-4">
                      <div className="text-lg font-bold text-slate-900">{metric.value}</div>
                      <div className="text-xs text-slate-600">{metric.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
          <div className="mt-12 text-center">
            <Button asChild size="lg">
              <Link to="/contact">Start Your Success Story <ArrowRight className="ml-2 h-4 w-4" /></Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}

export default CaseStudies
