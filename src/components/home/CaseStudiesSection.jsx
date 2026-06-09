import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'

const caseStudies = [
  {
    title: 'Electronics Sourcing for EU Distributor',
    client: 'European Electronics Distributor',
    challenge: 'Needed to find reliable PCB and LED suppliers with CE compliance for the EU market.',
    result: 'Identified 3 verified factories, reduced defect rate from 8% to 1.2%, and cut lead time by 15 days.',
    category: 'Electronics',
    imgId: 'case-electronics-v1w2x3',
    titleId: 'case-elec-title',
    descId: 'case-elec-desc',
  },
  {
    title: 'Home Furniture Sourcing for US Retailer',
    client: 'US Home Goods Retailer',
    challenge: 'Struggled with inconsistent quality and delayed shipments from previous suppliers.',
    result: 'Replaced underperforming suppliers, implemented QC checkpoints, achieved 99% on-time delivery.',
    category: 'Home & Garden',
    imgId: 'case-furniture-y4z5a6',
    titleId: 'case-furn-title',
    descId: 'case-furn-desc',
  },
  {
    title: 'Apparel Production for Australian Brand',
    client: 'Australian Fashion Brand',
    challenge: 'Needed small MOQ production runs with strict fabric quality and color matching.',
    result: 'Found flexible factories willing to accept lower MOQs, maintained color consistency across 12 SKUs.',
    category: 'Apparel',
    imgId: 'case-apparel-b7c8d9',
    titleId: 'case-apparel-title',
    descId: 'case-apparel-desc',
  },
]

export default function CaseStudiesSection() {
  const containerRef = useRef(null)

  return (
    <section ref={containerRef} className="py-16 md:py-24 bg-white" id="case-studies">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16">
          <span className="inline-block text-accent font-semibold text-sm tracking-wider uppercase mb-3">Case Studies</span>
          <h2 className="text-3xl md:text-4xl font-bold text-primary-dark tracking-tight mb-4">
            Real Results for Real Buyers
          </h2>
          <p className="text-steel text-lg max-w-2xl mx-auto">
            See how we have helped businesses across different industries source better from China.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {caseStudies.map((study) => (
            <div key={study.title} className="group bg-white border border-gray-100 rounded-xl overflow-hidden hover:shadow-lg transition-all duration-300">
              <div className="relative h-48 overflow-hidden bg-gray-100">
                <img
                  alt={study.title}
                  data-strk-img-id={study.imgId}
                  data-strk-img={`[${study.descId}] [${study.titleId}]`}
                  data-strk-img-ratio="3x2"
                  data-strk-img-width="600"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <span className="absolute top-3 left-3 bg-primary/90 text-white text-xs font-semibold px-3 py-1 rounded-full">
                  {study.category}
                </span>
              </div>
              <div className="p-5 md:p-6">
                <h3 id={study.titleId} className="text-lg font-bold text-primary-dark mb-1">{study.title}</h3>
                <p id={study.descId} className="text-slate-custom text-sm mb-3">{study.client}</p>
                <div className="mb-3">
                  <span className="text-xs font-semibold text-steel uppercase tracking-wider">Challenge</span>
                  <p className="text-steel text-sm mt-1">{study.challenge}</p>
                </div>
                <div>
                  <span className="text-xs font-semibold text-accent uppercase tracking-wider">Result</span>
                  <p className="text-primary-dark text-sm font-medium mt-1">{study.result}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <Link
            to="/case-studies"
            className="inline-flex items-center gap-2 text-accent font-semibold hover:gap-3 transition-all"
          >
            View All Case Studies <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  )
}
