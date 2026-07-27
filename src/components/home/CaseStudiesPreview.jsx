import React from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'

const caseStudies = [
  {
    id: 'us-electronics',
    title: 'US Electronics Retailer — Supplier Switch Saves 30%',
    desc: 'A US electronics retailer was overpaying through a trading company. We identified a direct factory, verified capacity, and negotiated better terms — saving 30% on unit costs while improving quality.',
    tag: 'Electronics',
    titleId: 'cs-us-electronics-title',
    descId: 'cs-us-electronics-desc',
  },
  {
    id: 'eu-home-garden',
    title: 'EU Home & Garden Brand — From Sample to 50K Units',
    desc: 'A European home & garden brand needed custom-designed outdoor furniture. We managed the entire process from sample development through production follow-up to shipping 50,000 units on schedule.',
    tag: 'Home & Garden',
    titleId: 'cs-eu-home-garden-title',
    descId: 'cs-eu-home-garden-desc',
  },
  {
    id: 'au-textiles',
    title: 'AU Textiles Buyer — Quality Issue Resolved Before Shipment',
    desc: 'An Australian textiles buyer faced a quality deviation during production. Our mid-production inspection caught the issue early, and we worked with the factory to correct it before shipment — avoiding a costly return.',
    tag: 'Textiles',
    titleId: 'cs-au-textiles-title',
    descId: 'cs-au-textiles-desc',
  },
]

export default function CaseStudiesPreview() {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 id="cs-section-title" className="text-2xl md:text-3xl font-bold text-primary mb-4">
            Case Studies
          </h2>
          <p id="cs-section-subtitle" className="text-neutral-mid max-w-2xl mx-auto">
            Real examples of how we have helped global buyers source better, save money, and avoid costly mistakes.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {caseStudies.map((cs) => (
            <div
              key={cs.id}
              className="bg-white border border-neutral-light rounded-lg p-6 md:p-8 shadow-md hover:shadow-lg transition-shadow"
            >
              <span className="inline-block bg-accent/10 text-accent text-xs font-semibold px-3 py-1 rounded-full mb-4">
                {cs.tag}
              </span>
              <h3 id={cs.titleId} className="text-lg font-semibold text-primary mb-3">
                {cs.title}
              </h3>
              <p id={cs.descId} className="text-neutral-mid text-sm leading-relaxed mb-4">
                {cs.desc}
              </p>
              <Link
                to="/case-studies"
                className="inline-flex items-center gap-1 text-accent text-sm font-semibold no-underline hover:text-accent-light transition-colors"
              >
                Read Full Story <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <Link
            to="/case-studies"
            className="inline-flex items-center gap-2 bg-primary text-white px-6 py-3 rounded-md font-semibold no-underline hover:bg-primary-light transition-colors"
          >
            View All Case Studies
          </Link>
        </div>
      </div>
    </section>
  )
}
