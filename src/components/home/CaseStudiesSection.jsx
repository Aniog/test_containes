import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'

const cases = [
  {
    client: 'European Electronics Distributor',
    industry: 'Electronics',
    challenge: 'Needed reliable PCB suppliers with ISO certification for a new product line.',
    result: 'Sourced 3 qualified suppliers, reduced procurement costs by 22%, and established long-term partnerships.',
    imgId: 'case-electronics-9a8b7c',
    titleId: 'case-electronics-title',
    descId: 'case-electronics-desc',
  },
  {
    client: 'US Retail Brand',
    industry: 'Textiles & Apparel',
    challenge: 'Quality issues with previous supplier; needed consistent production for seasonal orders.',
    result: 'Implemented QC protocols, defect rate dropped to under 1.5%, on-time delivery improved to 97%.',
    imgId: 'case-textiles-1d2e3f',
    titleId: 'case-textiles-title',
    descId: 'case-textiles-desc',
  },
  {
    client: 'Australian Industrial Company',
    industry: 'Machinery',
    challenge: 'Complex custom hydraulic components with tight tolerances and strict material requirements.',
    result: 'Found specialized manufacturer, completed 3 prototyping rounds, delivered 10,000 units on schedule.',
    imgId: 'case-machinery-4g5h6i',
    titleId: 'case-machinery-title',
    descId: 'case-machinery-desc',
  },
]

export default function CaseStudiesSection() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-bold text-navy mb-4">
            Client Success Stories
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Real results from real sourcing projects. See how we have helped businesses like yours.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {cases.map((c) => (
            <div
              key={c.client}
              className="bg-[#f8f9fa] rounded-lg overflow-hidden border border-gray-100 hover:shadow-lg transition-shadow"
            >
              <div className="h-48 overflow-hidden">
                <img
                  alt={c.client}
                  data-strk-img-id={c.imgId}
                  data-strk-img={`[${c.descId}] [${c.titleId}]`}
                  data-strk-img-ratio="3x2"
                  data-strk-img-width="500"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <span className="inline-block text-xs font-medium text-accent bg-accent/10 px-2.5 py-1 rounded mb-3">
                  {c.industry}
                </span>
                <h3 id={c.titleId} className="text-lg font-semibold text-navy mb-2">
                  {c.client}
                </h3>
                <p id={c.descId} className="text-sm text-gray-600 mb-3">
                  <span className="font-medium text-gray-700">Challenge:</span> {c.challenge}
                </p>
                <p className="text-sm text-emerald-700 bg-emerald-50 p-3 rounded-md">
                  <span className="font-medium">Result:</span> {c.result}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <Link
            to="/case-studies"
            className="inline-flex items-center gap-2 text-accent font-medium hover:text-accent-700 transition-colors"
          >
            View All Case Studies
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  )
}
