import { Link } from 'react-router-dom'
import { ArrowRight, ExternalLink } from 'lucide-react'

const caseStudies = [
  {
    company: 'EuroHome GmbH',
    industry: 'Home & Kitchenware',
    title: 'Sourcing Stainless Steel Cookware from Guangdong',
    result: '40% cost reduction vs. European suppliers with consistent quality across 12 SKUs.',
    tags: ['Supplier Sourcing', 'Factory Audit', 'Quality Control'],
  },
  {
    company: 'TechParts Inc.',
    industry: 'Electronics',
    title: 'PCB Assembly Sourcing in Shenzhen',
    result: 'Production scaled from prototype to 10,000 units/month within 90 days.',
    tags: ['Supplier Matching', 'Production Monitoring', 'Logistics'],
  },
  {
    company: 'BuildRight Construction',
    industry: 'Building Materials',
    title: 'Tile & Sanitary Ware from Foshan',
    result: 'Verified 8 factories, selected 2 partners, saved 35% on material costs.',
    tags: ['Factory Verification', 'Quality Inspection'],
  },
]

export default function CaseStudiesSection() {
  return (
    <section className="py-20 md:py-28 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            Case Studies
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Real results from real partnerships. Here is how we have helped buyers source successfully.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {caseStudies.map((cs) => (
            <div key={cs.company} className="bg-white rounded-xl border border-slate-200 p-6 flex flex-col">
              <div className="mb-4">
                <span className="text-xs font-semibold text-brand-600 uppercase tracking-wider">{cs.industry}</span>
                <h3 className="text-lg font-semibold text-slate-900 mt-1 mb-3">{cs.title}</h3>
                <p className="text-sm text-slate-600 mb-4">{cs.result}</p>
              </div>
              <div className="flex flex-wrap gap-2 mb-4">
                {cs.tags.map((tag) => (
                  <span key={tag} className="text-xs bg-slate-100 text-slate-600 px-2.5 py-1 rounded-full">
                    {tag}
                  </span>
                ))}
              </div>
              <div className="mt-auto">
                <span className="text-sm font-medium text-brand-700 inline-flex items-center gap-1">
                  Read case study <ExternalLink className="w-3 h-3" />
                </span>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <Link
            to="/case-studies"
            className="text-brand-700 hover:text-brand-800 font-semibold inline-flex items-center gap-2 transition-colors"
          >
            View All Case Studies <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  )
}