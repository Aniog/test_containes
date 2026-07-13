import { Link } from 'react-router-dom'
import { Button } from '@/components/ui/button'
import { ArrowRight } from 'lucide-react'

const cases = [
  {
    title: 'Home organization line for a US retailer',
    result: 'Identified 3 verified suppliers, reduced unit cost by 18%, and managed final inspection and sea shipment within 6 weeks.',
    tags: ['Home & Kitchen', 'Inspection', 'Shipping'],
  },
  {
    title: 'LED lighting components for an EU importer',
    result: 'Performed factory audits, coordinated sample approval, and arranged air freight with customs documentation support.',
    tags: ['Electronics', 'Factory Audit', 'Air Freight'],
  },
  {
    title: 'Promotional packaging for a Canadian brand',
    result: 'Shortlisted print suppliers, validated material certifications, and supervised container loading for a 40ft shipment.',
    tags: ['Packaging', 'Certification', 'Shipping'],
  },
  {
    title: 'Garden tools for an Australian distributor',
    result: 'Sourced new suppliers after previous vendor quality issues, implemented in-line inspections, and restored on-time delivery.',
    tags: ['Garden & Outdoor', 'Quality Control', 'Supplier Change'],
  },
]

export default function CaseStudies() {
  return (
    <div>
      <section className="border-b border-slate-200 bg-slate-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
          <h1 className="text-3xl font-semibold text-slate-900">Case Studies</h1>
          <p className="mt-3 max-w-2xl text-slate-600">
            Real examples of how we helped buyers reduce risk, improve quality, and move goods from China to their markets.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {cases.map((item) => (
            <div key={item.title} className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
              <h3 className="text-base font-semibold text-slate-900">{item.title}</h3>
              <p className="mt-3 text-sm text-slate-600">{item.result}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {item.tags.map((tag) => (
                  <span key={tag} className="inline-flex items-center rounded-full border border-slate-200 bg-slate-50 px-2.5 py-0.5 text-xs text-slate-700">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="border-t border-slate-200 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
          <h2 className="text-2xl font-semibold text-slate-900">Ready for a similar result?</h2>
          <p className="mt-2 text-slate-600">Tell us your product and goals. We will propose a practical sourcing plan with clear milestones.</p>
          <div className="mt-6">
            <Button asChild>
              <Link to="/contact">Get a Free Sourcing Quote <ArrowRight className="ml-2 h-4 w-4" /></Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
