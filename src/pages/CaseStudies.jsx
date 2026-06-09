import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, CheckCircle } from 'lucide-react'
import CTASection from '@/components/shared/CTASection'

const caseStudies = [
  {
    title: 'Electronics Sourcing for EU Distributor',
    client: 'European Electronics Distributor',
    location: 'Germany',
    category: 'Electronics',
    challenge: 'A mid-size EU electronics distributor needed reliable PCB and LED suppliers with CE compliance for the European market. Previous suppliers had inconsistent quality and lacked proper documentation for EU import requirements.',
    approach: 'We identified and verified 5 factories in Shenzhen and Dongguan, conducted on-site audits, and arranged sample testing for CE compliance. We negotiated favorable terms and implemented a multi-stage QC process.',
    results: [
      'Identified 3 verified factories meeting CE compliance',
      'Reduced defect rate from 8% to 1.2%',
      'Cut lead time by 15 days through production optimization',
      'Established ongoing QC process for repeat orders',
    ],
    imgId: 'cs-electronics-u7v8w9',
    titleId: 'cs-electronics-title',
    descId: 'cs-electronics-desc',
  },
  {
    title: 'Home Furniture Sourcing for US Retailer',
    client: 'US Home Goods Retailer',
    location: 'United States',
    category: 'Home & Garden',
    challenge: 'A US home goods retailer was struggling with inconsistent quality and delayed shipments from their existing Chinese suppliers, leading to stockouts and customer complaints.',
    approach: 'We audited existing suppliers, identified underperformers, and sourced replacement factories. We implemented pre-shipment inspections and production milestone tracking to ensure on-time delivery.',
    results: [
      'Replaced 2 underperforming suppliers with verified alternatives',
      'Implemented QC checkpoints at 3 production stages',
      'Achieved 99% on-time delivery rate',
      'Reduced customer complaints by 70%',
    ],
    imgId: 'cs-furniture-x1y2z3',
    titleId: 'cs-furniture-title',
    descId: 'cs-furniture-desc',
  },
  {
    title: 'Apparel Production for Australian Brand',
    client: 'Australian Fashion Brand',
    location: 'Australia',
    category: 'Apparel',
    challenge: 'An Australian fashion brand needed small MOQ production runs with strict fabric quality and color matching across multiple SKUs. Most factories required MOQs far above their needs.',
    approach: 'We found flexible factories in Guangdong willing to accept lower MOQs for multi-SKU orders. We arranged fabric testing, color matching, and pre-production samples for approval before bulk production.',
    results: [
      'Found factories accepting 50% lower MOQs',
      'Maintained color consistency across 12 SKUs',
      'Zero quality rejections on first bulk order',
      'Established long-term supplier relationship',
    ],
    imgId: 'cs-apparel-a4b5c6',
    titleId: 'cs-apparel-title',
    descId: 'cs-apparel-desc',
  },
  {
    title: 'Industrial Parts Sourcing for Middle East Trader',
    client: 'Middle East Trading Company',
    location: 'UAE',
    category: 'Industrial',
    challenge: 'A UAE-based trading company needed to source industrial valves and pumps with specific international certifications. They had difficulty verifying supplier capabilities remotely.',
    approach: 'We conducted factory audits in Zhejiang and Jiangsu, verified ISO and API certifications, arranged sample testing, and coordinated consolidated shipments to Dubai.',
    results: [
      'Verified 4 factories with valid ISO/API certifications',
      'Arranged third-party certification testing',
      'Consolidated shipments from 3 suppliers, saving 25% on freight',
      'Delivered first order on schedule with zero defects',
    ],
    imgId: 'cs-industrial-d7e8f9',
    titleId: 'cs-industrial-title',
    descId: 'cs-industrial-desc',
  },
]

export default function CaseStudiesPage() {
  const containerRef = useRef(null)

  return (
    <>
      <section className="bg-primary py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="inline-block text-accent font-semibold text-sm tracking-wider uppercase mb-3">Case Studies</span>
          <h1 className="text-4xl md:text-5xl font-bold text-white tracking-tight mb-4">
            Real Results for Real Buyers
          </h1>
          <p className="text-white/80 text-lg max-w-2xl">
            See how we have helped businesses across different industries and regions source better from China.
          </p>
        </div>
      </section>

      <section ref={containerRef} className="py-16 md:py-24 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {caseStudies.map((study, index) => (
              <div key={study.title} className="bg-white border border-gray-100 rounded-2xl overflow-hidden">
                <div className="relative h-56 md:h-72 overflow-hidden bg-gray-100">
                  <img
                    alt={study.title}
                    data-strk-img-id={study.imgId}
                    data-strk-img={`[${study.descId}] [${study.titleId}]`}
                    data-strk-img-ratio="16x9"
                    data-strk-img-width="1200"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    className="w-full h-full object-cover"
                  />
                  <span className="absolute top-4 left-4 bg-primary/90 text-white text-xs font-semibold px-3 py-1.5 rounded-full">
                    {study.category}
                  </span>
                </div>
                <div className="p-6 md:p-8">
                  <h2 id={study.titleId} className="text-2xl font-bold text-primary-dark mb-1">{study.title}</h2>
                  <p id={study.descId} className="text-slate-custom text-sm mb-6">{study.client} | {study.location}</p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div>
                      <h4 className="text-xs font-semibold text-steel uppercase tracking-wider mb-2">Challenge</h4>
                      <p className="text-steel text-sm leading-relaxed">{study.challenge}</p>
                    </div>
                    <div>
                      <h4 className="text-xs font-semibold text-steel uppercase tracking-wider mb-2">Our Approach</h4>
                      <p className="text-steel text-sm leading-relaxed">{study.approach}</p>
                    </div>
                    <div>
                      <h4 className="text-xs font-semibold text-accent uppercase tracking-wider mb-2">Results</h4>
                      <ul className="space-y-2">
                        {study.results.map((result) => (
                          <li key={result} className="flex items-start gap-2">
                            <CheckCircle className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" />
                            <span className="text-primary-dark text-sm font-medium">{result}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  )
}
