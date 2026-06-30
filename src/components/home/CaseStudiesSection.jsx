import { Link } from 'react-router-dom'
import { ArrowRight, Star } from 'lucide-react'

const studies = [
  {
    company: 'EuroTech GmbH',
    industry: 'Industrial Equipment',
    summary: 'Helped a German machinery distributor find a certified manufacturer for hydraulic components, reducing their landed cost by 35%.',
    result: '35% cost reduction, 12 months of defect-free deliveries',
  },
  {
    company: 'Pacific Home Goods',
    industry: 'Home & Lifestyle',
    summary: 'Sourced bamboo kitchenware from three vetted factories in Fujian for an Australian importer. Managed sampling, QC, and consolidated shipping.',
    result: '3 new product lines launched, 40+ SKUs approved',
  },
  {
    company: 'Nova Electronics',
    industry: 'Consumer Electronics',
    summary: 'Verified five potential suppliers for custom PCB assemblies. Conducted factory audits and arranged pilot production runs for a US startup.',
    result: 'Supplier selected within 2 weeks, pilot run passed QC',
  },
]

export default function CaseStudiesSection() {
  return (
    <section className="py-16 md:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16">
          <span className="text-sm font-semibold text-brand-600 uppercase tracking-wider">Case Studies</span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-3 mb-4">
            Results We Have Delivered
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Real examples of how we have helped businesses source successfully from China.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {studies.map((study) => (
            <div
              key={study.company}
              className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-md transition-shadow"
            >
              <div className="flex items-center gap-2 mb-3">
                <span className="text-xs font-medium text-brand-600 bg-brand-50 rounded-full px-3 py-1">
                  {study.industry}
                </span>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">{study.company}</h3>
              <p className="text-gray-600 text-sm leading-relaxed mb-4">{study.summary}</p>
              <div className="border-t border-gray-100 pt-4 mt-auto">
                <div className="flex items-start gap-2">
                  <Star className="w-4 h-4 text-brand-600 flex-shrink-0 mt-0.5" />
                  <span className="text-sm font-medium text-gray-900">{study.result}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <Link
            to="/case-studies"
            className="inline-flex items-center gap-2 text-brand-600 hover:text-brand-700 font-medium"
          >
            View All Case Studies <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  )
}