import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { ImageHelper } from '@strikingly/sdk'
import loadStrkImgConfig from '../strk-img-config.js'
import { TrendingUp, CheckCircle } from 'lucide-react'

const caseStudies = [
  {
    title: 'European Retail Chain Expands Product Line',
    industry: 'Home & Kitchen',
    result: '42% cost reduction',
    description: 'A mid-sized European home goods retailer wanted to expand their product line with 15 new SKUs. They needed reliable suppliers who could meet EU quality standards and deliver consistent quality across all products.',
    outcome: [
      'Sourced and vetted 8 factories across Guangdong and Zhejiang',
      'Selected 3 factories after on-site audits',
      'Negotiated pricing 42% below their previous European suppliers',
      'Pre-shipment inspections ensured 100% compliance with EU standards',
      'First shipment delivered in 65 days from project start',
    ],
    metrics: [
      { label: 'Cost Reduction', value: '42%' },
      { label: 'New SKUs', value: '15' },
      { label: 'Delivery Time', value: '65 days' },
    ],
  },
  {
    title: 'US Startup Launches Consumer Electronics Brand',
    industry: 'Consumer Electronics',
    result: '3-month lead time',
    description: 'A US-based startup needed to bring a new consumer electronics product from concept to first production run. They required a factory with CE/FCC certification capabilities and strict quality control.',
    outcome: [
      'Identified 5 factories with relevant certifications',
      'Completed factory audits and capability assessments',
      'Coordinated prototype development and testing',
      'Monitored production and conducted QC inspections',
      'Product launched on schedule with full certification compliance',
    ],
    metrics: [
      { label: 'Concept to Delivery', value: '90 days' },
      { label: 'Factory Audits', value: '5' },
      { label: 'Certifications', value: 'CE, FCC' },
    ],
  },
  {
    title: 'Australian Distributor Optimizes Supply Chain',
    industry: 'Industrial Parts',
    result: '35% savings',
    description: 'An Australian industrial distributor was working with 8 different Chinese suppliers across multiple product categories. They wanted to consolidate suppliers and reduce total costs while improving quality consistency.',
    outcome: [
      'Analyzed existing supply chain and identified inefficiencies',
      'Consolidated from 8 suppliers to 3 high-performing factories',
      'Negotiated volume discounts across consolidated orders',
      'Implemented standardized QC procedures across all suppliers',
      'Reduced total landed costs by 35% while improving quality metrics',
    ],
    metrics: [
      { label: 'Suppliers Consolidated', value: '8 to 3' },
      { label: 'Cost Savings', value: '35%' },
      { label: 'Quality Improvement', value: '28%' },
    ],
  },
  {
    title: 'UK Fashion Brand Sources Ethical Apparel',
    industry: 'Apparel & Textiles',
    result: '100% audit compliance',
    description: 'A UK fashion brand needed to source apparel from factories with strong social compliance records and environmental certifications. They required full transparency across the supply chain.',
    outcome: [
      'Screened 20+ factories for social compliance',
      'Conducted in-depth audits of 6 shortlisted factories',
      'Verified environmental certifications and waste management',
      'Established transparent supply chain documentation',
      'All selected factories passed independent third-party audits',
    ],
    metrics: [
      { label: 'Factories Screened', value: '20+' },
      { label: 'Audit Pass Rate', value: '100%' },
      { label: 'Compliance Standard', value: 'BSCI' },
    ],
  },
  {
    title: 'Canadian Company Sources Medical Equipment',
    industry: 'Medical & Healthcare',
    result: 'ISO 13485 certified',
    description: 'A Canadian medical device company needed to source production of non-critical medical equipment components. Stringent regulatory requirements demanded factories with medical device certifications.',
    outcome: [
      'Pre-screened factories for ISO 13485 certification',
      'Audited 4 factories for quality management systems',
      'Verified sterilization and clean room capabilities',
      'Coordinated sample approvals with regulatory documentation',
      'Established ongoing quality monitoring program',
    ],
    metrics: [
      { label: 'Certified Suppliers', value: '3' },
      { label: 'Audit Duration', value: '2 weeks' },
      { label: 'Regulatory Compliance', value: 'ISO 13485' },
    ],
  },
  {
    title: 'German Distributor Sources Industrial Machinery',
    industry: 'Industrial Machinery',
    result: '40% lower unit cost',
    description: 'A German distributor of industrial machinery parts needed to source precision components at competitive prices while maintaining DIN standard compliance.',
    outcome: [
      'Identified specialized machining factories in Shandong',
      'Verified CNC capabilities and precision measurement equipment',
      'Negotiated pricing with raw material cost transparency',
      'Implemented quality checks at each production stage',
      'Established scheduled delivery with 95% on-time performance',
    ],
    metrics: [
      { label: 'Unit Cost Reduction', value: '40%' },
      { label: 'On-Time Delivery', value: '95%' },
      { label: 'Standard Compliance', value: 'DIN' },
    ],
  },
]

export default function CaseStudies() {
  const containerRef = useRef(null)

  useEffect(() => {
    let cancelled = false
    loadStrkImgConfig().then((cfg) => {
      if (!cancelled && containerRef.current) {
        return ImageHelper.loadImages(cfg, containerRef.current)
      }
    })
    return () => { cancelled = true }
  }, [])

  return (
    <div ref={containerRef}>
      {/* Page Header */}
      <section className="bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
          <div className="max-w-3xl">
            <h1 className="text-3xl md:text-4xl font-bold text-slate-900 tracking-tight">Case Studies</h1>
            <p className="mt-4 text-lg text-slate-600">
              Real projects, real results. See how we have helped businesses source successfully from China.
            </p>
          </div>
        </div>
      </section>

      {/* Case Studies Grid */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {caseStudies.map((cs, i) => (
              <div key={i} className="border border-slate-200 rounded-lg overflow-hidden hover:shadow-md transition-shadow">
                <div
                  data-strk-bg-id={`cs-img-${i}`}
                  data-strk-bg={`[cs-title-${i}] [cs-industry-${i}] [cs-header]`}
                  data-strk-bg-ratio="16x9"
                  data-strk-bg-width="800"
                  className="bg-slate-200 h-48 bg-cover bg-center"
                  
                />
                <div className="p-6">
                  <div className="inline-block bg-brand-50 text-brand-700 text-xs font-semibold px-2.5 py-1 rounded mb-3">
                    {cs.industry}
                  </div>
                  <h2 id={`cs-title-${i}`} className="text-lg font-bold text-slate-900 mb-2">{cs.title}</h2>
                  <p className="text-sm text-slate-600 mb-4 leading-relaxed">{cs.description}</p>
                  <ul className="space-y-2 mb-5">
                    {cs.outcome.map((item, j) => (
                      <li key={j} className="flex items-start gap-2 text-sm text-slate-700">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                  <div className="border-t border-slate-200 pt-4 grid grid-cols-3 gap-3 text-center">
                    {cs.metrics.map((m, j) => (
                      <div key={j}>
                        <div className="text-brand-600 font-bold text-sm">{m.value}</div>
                        <div className="text-xs text-slate-500">{m.label}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-slate-50">
        <div className="container-custom">
          <div className="text-center max-w-2xl mx-auto">
            <h2 id="cs-header" className="text-3xl font-bold text-slate-900 tracking-tight">Start Your Success Story</h2>
            <p className="mt-4 text-lg text-slate-600">
              Let us help you achieve similar results. Contact us to discuss your sourcing needs.
            </p>
            <div className="mt-8">
              <Link
                to="/contact"
                className="bg-red-600 text-white px-8 py-3.5 rounded-md text-base font-semibold hover:bg-red-700 transition-colors inline-block"
              >
                Get a Free Sourcing Quote
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}