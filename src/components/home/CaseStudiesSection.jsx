import React from 'react'
import { Link } from 'react-router-dom'

const caseStudies = [
  {
    title: 'US Electronics Retailer Reduces Defect Rate by 85%',
    client: 'Mid-size consumer electronics retailer, USA',
    challenge: 'The client was receiving shipments with a 12% defect rate from an unverified supplier, causing returns and customer complaints.',
    result: 'After our factory verification and AQL inspection program, the defect rate dropped to under 2%. The client saved $120K in annual rework costs.',
    category: 'Electronics',
    imgId: 'case-electronics-v4w5x6',
    titleId: 'case-electronics-title',
    descId: 'case-electronics-desc',
  },
  {
    title: 'European Fashion Brand Launches First China Production',
    client: 'Startup fashion brand, Germany',
    challenge: 'A new brand needed to source fabrics and manufacture garments in China but had no supplier contacts or local knowledge.',
    result: 'We sourced 3 vetted fabric suppliers and 2 garment factories, managed sampling, and delivered the first 5,000-unit order on schedule.',
    category: 'Textiles',
    imgId: 'case-textiles-y7z8a9',
    titleId: 'case-textiles-title',
    descId: 'case-textiles-desc',
  },
  {
    title: 'Australian Hardware Distributor Cuts Lead Time by 40%',
    client: 'Hardware tools distributor, Australia',
    challenge: 'Long lead times and inconsistent quality from existing suppliers were causing stock shortages and lost sales.',
    result: 'We identified alternative suppliers with better capacity, implemented production tracking, and reduced average lead time from 90 to 54 days.',
    category: 'Hardware',
    imgId: 'case-hardware-b1c2d3',
    titleId: 'case-hardware-title',
    descId: 'case-hardware-desc',
  },
]

export default function CaseStudiesSection() {
  return (
    <section className="bg-slate-50 py-16 md:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 id="case-studies-title" className="text-2xl md:text-3xl font-bold text-slate-900 mb-4">
            Case Studies
          </h2>
          <p id="case-studies-subtitle" className="text-slate-600 max-w-2xl mx-auto">
            Real results from real clients. See how we have helped international buyers solve sourcing challenges.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {caseStudies.map((study) => (
            <div key={study.title} className="bg-white rounded-xl border border-slate-200 overflow-hidden group hover:shadow-md transition-all">
              <div className="h-48 overflow-hidden">
                <img
                  alt={study.title}
                  data-strk-img-id={study.imgId}
                  data-strk-img={`[${study.descId}] [${study.titleId}] [case-studies-subtitle] [case-studies-title]`}
                  data-strk-img-ratio="3x2"
                  data-strk-img-width="600"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-5">
                <span className="inline-block bg-primary-100 text-primary-700 text-xs font-semibold px-2 py-1 rounded mb-3">
                  {study.category}
                </span>
                <h3 id={study.titleId} className="text-base font-semibold text-slate-900 mb-2">{study.title}</h3>
                <p id={study.descId} className="text-slate-600 text-sm leading-relaxed mb-3">{study.challenge}</p>
                <p className="text-primary-600 text-sm font-medium leading-relaxed">
                  <span className="font-semibold">Result: </span>{study.result}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-8">
          <Link
            to="/case-studies"
            className="inline-flex items-center gap-2 text-primary-500 font-medium hover:text-primary-600 no-underline transition-colors"
          >
            Read more case studies
            <span>&rarr;</span>
          </Link>
        </div>
      </div>
    </section>
  )
}
