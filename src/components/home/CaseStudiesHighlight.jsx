import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'

const caseStudies = [
  {
    id: 'electronics',
    title: 'Consumer Electronics — German Importer',
    desc: 'Sourced Bluetooth speakers from 3 vetted factories, reduced unit cost by 22%, and achieved 99.2% on-time delivery rate over 12 months.',
    result: '22% cost reduction',
  },
  {
    id: 'furniture',
    title: 'Furniture — US Retail Chain',
    desc: 'Audited 8 factories in Foshan, negotiated payment terms, and managed QC for 14 container shipments with zero critical defects.',
    result: 'Zero critical defects',
  },
  {
    id: 'packaging',
    title: 'Custom Packaging — UK Brand',
    desc: 'Found a specialized supplier for eco-friendly packaging, managed mold development, and delivered within 45 days on first order.',
    result: '45-day turnaround',
  },
]

export default function CaseStudiesHighlight() {
  return (
    <section className="py-20 md:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 id="cases-title" className="text-3xl md:text-4xl font-bold text-brand-navy tracking-tight mb-4">
            Client Success Stories
          </h2>
          <p id="cases-subtitle" className="text-lg text-brand-gray-600 max-w-2xl mx-auto">
            Real results from buyers who source with confidence through our team.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {caseStudies.map((cs) => (
            <article
              key={cs.id}
              className="group bg-white border border-brand-gray-200 rounded-xl overflow-hidden hover:shadow-lg transition-all duration-300"
            >
              <div
                data-strk-bg-id={`case-${cs.id}-bg-d0e1f2`}
                data-strk-bg={`[case-${cs.id}-desc] [case-${cs.id}-title]`}
                data-strk-bg-ratio="16x9"
                data-strk-bg-width="600"
              >
                <div className="h-48 bg-brand-gray-100" />
              </div>
              <div className="p-6">
                <h3 id={`case-${cs.id}-title`} className="text-base font-semibold text-brand-navy mb-2">
                  {cs.title}
                </h3>
                <p id={`case-${cs.id}-desc`} className="text-sm text-brand-gray-600 leading-relaxed mb-4">
                  {cs.desc}
                </p>
                <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-green-700 bg-green-50 rounded-full px-3 py-1">
                  {cs.result}
                </span>
              </div>
            </article>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            to="/case-studies"
            className="inline-flex items-center gap-2 px-6 py-3 bg-brand-blue text-white font-semibold rounded-lg hover:bg-brand-lightblue transition-colors"
          >
            View All Case Studies
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  )
}
