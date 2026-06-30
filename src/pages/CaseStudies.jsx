import React, { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, TrendingDown, Clock, Package, BarChart3 } from 'lucide-react'

const caseStudies = [
  {
    id: 'uk-retail-chain',
    title: 'UK Retail Chain Expands Product Line',
    category: 'Home & Garden',
    client: 'Mid-size UK home goods retailer',
    result: '40% cost reduction, 300+ SKUs launched',
    icon: TrendingDown,
    metrics: ['12 new suppliers onboarded', '35% faster time-to-market', '50+ containers shipped'],
    description: 'A UK-based home goods retailer needed to expand their product line while reducing costs. We identified and audited 12 furniture and home decor factories across Guangdong province. Through competitive bidding and quality benchmarking, we helped them reduce product costs by 40% and launch 300+ new SKUs within 8 months.',
    highlights: [
      'Comprehensive factory audit of 20+ potential suppliers',
      'Consolidated LCL shipping reduced logistics costs by 25%',
      'Ongoing QC inspections maintained defect rate below 2%',
    ],
  },
  {
    id: 'us-fashion-label',
    title: 'US Fashion Label Scales Production',
    category: 'Apparel & Accessories',
    client: 'Independent US fashion brand',
    result: '60% faster sampling, 3x production capacity',
    icon: Clock,
    metrics: ['3 partner factories', '2-week sampling cycle', '50,000 units/month'],
    description: 'An independent US fashion label was struggling with slow sampling cycles and unreliable quality from their existing supplier. We identified and audited 3 garment factories in Guangzhou that matched their quality standards. We streamlined the sampling process from 6 weeks to 2 weeks and scaled their production capacity 3x within 4 months.',
    highlights: [
      'Reorganized supplier quality scoring system',
      'Implemented real-time production tracking',
      'Reduced defect rate from 8% to 1.5%',
    ],
  },
  {
    id: 'german-electronics',
    title: 'German Electronics Distributor',
    category: 'Consumer Electronics',
    client: 'European electronics distributor',
    result: '25% cost savings, zero quality issues',
    icon: BarChart3,
    metrics: ['5 verified suppliers', '100+ product variants', 'Zero defect shipments'],
    description: 'A German electronics distributor needed reliable suppliers for smart home devices. We conducted thorough factory audits in Shenzhen, verifying certifications and testing capabilities. Through careful supplier selection and rigorous QC protocols, we achieved zero quality issues across 100+ product variants while reducing landed costs by 25%.',
    highlights: [
      'Full ETL and CE certification verification',
      'Pre-shipment inspections on 100% of orders',
      'Consolidated shipping from Shenzhen to Hamburg',
    ],
  },
  {
    id: 'australian-sports',
    title: 'Australian Sportswear Brand',
    category: 'Apparel',
    client: 'Australian sportswear startup',
    result: 'MOQ reduced by 70%, launched in 5 months',
    icon: Package,
    metrics: ['3 flexible factories', 'Low MOQ negotiated', 'National launch achieved'],
    description: 'An Australian sportswear startup needed low minimum order quantities (MOQs) to test their market. We identified smaller, flexible factories in Fujian province willing to accept lower MOQs. We negotiated 70% lower MOQs than standard industry requirements and managed the full production process from sample to first delivery.',
    highlights: [
      'Identified factories with flexible production lines',
      'Negotiated tiered pricing for scale-up',
      'Managed customs clearance for Australian import',
    ],
  },
  {
    id: 'canadian-cosmetics',
    title: 'Canadian Cosmetics Company',
    category: 'Health & Beauty',
    client: 'Natural cosmetics brand',
    result: 'Compliant supply chain, 30% cost improvement',
    icon: TrendingDown,
    metrics: ['GMP-certified factories', 'FDA-compliant packaging', '15 new formulations'],
    description: 'A Canadian natural cosmetics company needed GMP-certified suppliers for their product line. We audited 8 potential factories in Guangzhou and Shanghai, verifying GMP certifications and quality management systems. We helped establish an FDA-compliant supply chain with 30% better pricing than their previous North American suppliers.',
    highlights: [
      'Verified GMP and ISO 22716 certifications',
      'Arranged third-party formulation testing',
      'Managed compliant labeling and packaging',
    ],
  },
]

export default function CaseStudies() {
  const containerRef = useRef(null)

  useEffect(() => {
    const frameId = requestAnimationFrame(() => {})
    return () => cancelAnimationFrame(frameId)
  }, [])

  return (
    <div ref={containerRef}>
      {/* Page Header */}
      <section className="bg-navy-900 py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl lg:text-5xl font-bold text-white mb-6">
              Case Studies
            </h1>
            <p className="text-lg lg:text-xl text-slate-300 leading-relaxed">
              Real results from real partnerships. See how we have helped businesses 
              across industries optimize their China sourcing.
            </p>
          </div>
        </div>
      </section>

      {/* Case Studies List */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12 lg:space-y-16">
          {caseStudies.map((cs, index) => {
            const Icon = cs.icon
            return (
              <div
                key={cs.id}
                className="bg-white rounded-xl border border-gray-100 shadow-sm overflow-hidden"
              >
                <div className="p-6 lg:p-8">
                  <div className="flex flex-col lg:flex-row lg:items-start gap-6 lg:gap-10">
                    {/* Icon */}
                    <div className="flex-shrink-0 w-16 h-16 bg-navy-50 rounded-xl flex items-center justify-center">
                      <Icon className="w-8 h-8 text-navy-700" />
                    </div>

                    {/* Content */}
                    <div className="flex-1">
                      <div className="flex flex-wrap items-center gap-3 mb-2">
                        <span className="text-xs font-semibold text-amber-600 bg-amber-50 px-3 py-1 rounded-full">
                          {cs.category}
                        </span>
                        <span className="text-xs text-slate-400">{cs.client}</span>
                      </div>

                      <h2 className="text-2xl lg:text-3xl font-bold text-navy-900 mb-2">{cs.title}</h2>
                      <p className="text-sm text-green-700 font-semibold bg-green-50 inline-block px-3 py-1 rounded-full mb-4">
                        {cs.result}
                      </p>

                      <p className="text-slate-600 text-sm leading-relaxed mb-6">
                        {cs.description}
                      </p>

                      {/* Metrics */}
                      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
                        {cs.metrics.map((metric) => (
                          <div key={metric} className="bg-navy-50 rounded-lg px-4 py-2.5 text-sm text-navy-700 font-medium">
                            {metric}
                          </div>
                        ))}
                      </div>

                      {/* Highlights */}
                      <h4 className="text-sm font-semibold text-navy-900 mb-3">Key Highlights</h4>
                      <ul className="space-y-2">
                        {cs.highlights.map((h) => (
                          <li key={h} className="flex items-start gap-2 text-sm text-slate-600">
                            <span className="w-1.5 h-1.5 bg-amber-500 rounded-full flex-shrink-0 mt-2" />
                            {h}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-navy-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-navy-900 mb-4">
            Let&apos;s Create Your Success Story
          </h2>
          <p className="text-lg text-slate-600 mb-8">
            Contact us today to discuss your sourcing needs. We will provide a free 
            assessment and show you how we can deliver results for your business.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 bg-amber-500 hover:bg-amber-600 text-white font-semibold px-8 py-3.5 rounded-lg text-lg transition-colors"
          >
            Start Your Sourcing Journey
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  )
}