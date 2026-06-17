import React, { useRef, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import { ArrowRight, CheckCircle2, TrendingUp, ShieldCheck, Clock, DollarSign } from 'lucide-react'

const caseStudies = [
  {
    title: 'Electronics Sourcing for EU Distributor',
    client: 'German LED Lighting Distributor',
    tag: 'Electronics',
    challenge: 'A German distributor needed a reliable supplier for custom LED lighting products with CE certification. Previous suppliers had inconsistent quality and failed to meet EU compliance standards, resulting in costly returns and lost contracts.',
    approach: [
      'Searched our verified supplier network for CE-certified LED manufacturers',
      'Conducted on-site factory audits at 4 potential suppliers',
      'Arranged product samples and independent lab testing for CE compliance',
      'Negotiated pricing and payment terms with the selected factory',
    ],
    results: [
      'Identified 3 certified factories within 10 business days',
      'Secured 22% cost reduction compared to previous supplier',
      'First shipment delivered in 8 weeks from order placement',
      'Zero compliance issues in subsequent 6 shipments',
    ],
    imgId: 'cs-electronics-d1e2f3',
    titleId: 'cs-electronics-title',
    descId: 'cs-electronics-desc',
  },
  {
    title: 'Textile Quality Control for US Brand',
    client: 'US Apparel Brand',
    tag: 'Textiles',
    challenge: 'A US apparel brand experienced inconsistent quality across multiple Chinese suppliers. Defect rates averaged 12%, causing delays and customer complaints. They needed a systematic quality control solution without adding headcount.',
    approach: [
      'Analyzed defect patterns across existing suppliers',
      'Developed product-specific AQL inspection protocols',
      'Assigned dedicated QC inspectors at each supplier facility',
      'Implemented pre-production material approval process',
    ],
    results: [
      'Reduced defect rate from 12% to under 2% within 3 orders',
      'Eliminated customer complaints related to quality',
      'Saved an estimated $85,000 annually in returns and rework',
      'Established ongoing QC partnership for all new orders',
    ],
    imgId: 'cs-textiles-g4h5i6',
    titleId: 'cs-textiles-title',
    descId: 'cs-textiles-desc',
  },
  {
    title: 'Machinery Sourcing for Middle East Buyer',
    client: 'UAE Industrial Equipment Buyer',
    tag: 'Machinery',
    challenge: 'A UAE buyer needed CNC machinery with specific technical specifications and reliable after-sales support. Previous attempts to source directly resulted in mismatched specifications and no warranty coverage.',
    approach: [
      'Identified qualified CNC manufacturers with export experience to the Middle East',
      'Verified technical capabilities and after-sales service infrastructure',
      'Negotiated comprehensive warranty and spare parts agreements',
      'Coordinated door-to-door shipping with customs clearance',
    ],
    results: [
      'Found 2 qualified manufacturers within 2 weeks',
      'Negotiated 3-year warranty with guaranteed spare parts supply',
      'Coordinated complete door-to-door shipping in 6 weeks',
      'Client placed 3 additional orders within 12 months',
    ],
    imgId: 'cs-machinery-j7k8l9',
    titleId: 'cs-machinery-title',
    descId: 'cs-machinery-desc',
  },
  {
    title: 'Multi-Category Sourcing for Australian Retailer',
    client: 'Australian Home & Garden Retailer',
    tag: 'Home & Garden',
    challenge: 'An Australian retailer wanted to source multiple product categories (furniture, garden tools, kitchenware) from different suppliers and consolidate shipments to reduce logistics costs.',
    approach: [
      'Sourced suppliers across 3 product categories from different manufacturing regions',
      'Conducted factory verification at each supplier',
      'Arranged cargo consolidation at our warehouse in Guangzhou',
      'Managed quality inspections for all product lines',
    ],
    results: [
      'Sourced 3 product categories from 5 verified suppliers',
      'Reduced shipping costs by 35% through consolidation',
      'Maintained consistent quality across all product lines',
      'Established ongoing sourcing partnership for seasonal collections',
    ],
    imgId: 'cs-retail-m1n2o3',
    titleId: 'cs-retail-title',
    descId: 'cs-retail-desc',
  },
]

export default function CaseStudies() {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <div ref={containerRef}>
      {/* Hero */}
      <section className="bg-neutral-900 py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-accent-400 font-semibold text-sm uppercase tracking-wider mb-3">
              Case Studies
            </p>
            <h1 className="text-4xl md:text-5xl font-bold text-white tracking-tight mb-6">
              Real Results for Real Buyers
            </h1>
            <p className="text-lg text-neutral-300 leading-relaxed">
              See how we've helped businesses across industries source successfully from China.
              Each case study shows the challenge, our approach, and measurable results.
            </p>
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16 md:space-y-24">
          {caseStudies.map((cs, idx) => (
            <div key={cs.title} className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16">
              <div className={idx % 2 === 1 ? 'lg:order-2' : ''}>
                <div className="aspect-[4/3] bg-neutral-100 rounded-xl overflow-hidden">
                  <img
                    alt={cs.title}
                    data-strk-img-id={cs.imgId}
                    data-strk-img={`[${cs.descId}] [${cs.titleId}]`}
                    data-strk-img-ratio="4x3"
                    data-strk-img-width="800"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <div className={idx % 2 === 1 ? 'lg:order-1' : ''}>
                <span className="inline-block bg-primary-50 text-primary-500 text-xs font-semibold px-3 py-1 rounded-full mb-3">
                  {cs.tag}
                </span>
                <h2 id={cs.titleId} className="text-2xl md:text-3xl font-bold text-neutral-900 mb-2">
                  {cs.title}
                </h2>
                <p id={cs.descId} className="text-sm text-neutral-500 mb-4">{cs.client}</p>

                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-neutral-500 uppercase tracking-wider mb-2">
                    Challenge
                  </h4>
                  <p className="text-neutral-700 leading-relaxed">{cs.challenge}</p>
                </div>

                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-neutral-500 uppercase tracking-wider mb-3">
                    Our Approach
                  </h4>
                  <ul className="space-y-2">
                    {cs.approach.map((a) => (
                      <li key={a} className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-primary-500 shrink-0 mt-1" />
                        <span className="text-neutral-700 text-sm">{a}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="text-sm font-semibold text-accent-500 uppercase tracking-wider mb-3">
                    Results
                  </h4>
                  <ul className="space-y-2">
                    {cs.results.map((r) => (
                      <li key={r} className="flex items-start gap-2">
                        <TrendingUp className="w-4 h-4 text-accent-500 shrink-0 mt-1" />
                        <span className="text-neutral-800 text-sm font-medium">{r}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-24 bg-neutral-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 tracking-tight mb-4">
            Want Results Like These?
          </h2>
          <p className="text-neutral-600 text-lg mb-8">
            Tell us about your sourcing challenge and we'll show you how we can help.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center bg-accent-500 hover:bg-accent-600 text-white font-semibold px-8 py-4 rounded-lg transition-colors"
          >
            Get a Free Sourcing Quote
            <ArrowRight className="w-5 h-5 ml-2" />
          </Link>
        </div>
      </section>
    </div>
  )
}
