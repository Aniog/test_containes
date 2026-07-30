import { useEffect, useRef } from 'react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import { TrendingUp, CheckCircle } from 'lucide-react'
import CTAButton from '@/components/shared/CTAButton'
import SectionHeader from '@/components/shared/SectionHeader'

const cases = [
  {
    id: 'uk-furniture',
    category: 'Furniture',
    country: 'United Kingdom',
    title: 'UK Home Goods Retailer Cuts Sourcing Costs by 28%',
    challenge: 'A UK-based home goods retailer was sourcing sofas through a trading company and experiencing inconsistent quality and high margins. They needed a direct factory relationship with reliable quality control.',
    solution: 'We audited 12 sofa manufacturers in Foshan, shortlisted 3, and arranged factory visits and samples. After sample approval, we placed the first order and conducted pre-shipment inspections on all 3 production runs.',
    results: ['28% reduction in unit cost vs. previous trading company', 'Zero defect rate across 3 shipments (1,200 units total)', 'Delivery time reduced from 90 to 65 days', 'Ongoing relationship with 2 verified factories'],
    imgId: 'cs-full-furniture-a1b2',
    titleId: 'cs-full-furniture-title',
    descId: 'cs-full-furniture-desc',
  },
  {
    id: 'us-electronics',
    category: 'Electronics',
    country: 'United States',
    title: 'US Brand Launches Private Label Earbuds in 14 Weeks',
    challenge: 'An American consumer electronics startup needed to develop OEM wireless earbuds with custom branding and FCC/CE certification. They had no prior experience sourcing from China.',
    solution: 'We identified 4 qualified earbud manufacturers, managed tooling for custom housing, coordinated FCC and CE testing, and oversaw packaging design and production. We provided weekly production updates throughout.',
    results: ['Product launched in 14 weeks from inquiry to delivery', 'FCC and CE certification obtained on first submission', 'Custom packaging and branding delivered on spec', 'Unit cost 35% below initial US supplier quotes'],
    imgId: 'cs-full-electronics-c3d4',
    titleId: 'cs-full-electronics-title',
    descId: 'cs-full-electronics-desc',
  },
  {
    id: 'au-apparel',
    category: 'Apparel',
    country: 'Australia',
    title: 'Australian Fashion Brand Scales from 500 to 5,000 Units',
    challenge: 'A growing Australian activewear brand needed to scale production significantly while maintaining consistent quality across multiple styles. Their existing factory could not handle the volume.',
    solution: 'We sourced and audited 6 activewear factories in Guangzhou, selected 2 based on capacity and quality standards, and managed the transition of production. We implemented an in-line inspection process for each style.',
    results: ['10x production scale achieved within 2 seasons', 'Consistent quality across 8 styles and 2 factories', 'Lead time maintained at 45 days despite higher volume', 'Cost per unit reduced by 18% through volume negotiation'],
    imgId: 'cs-full-apparel-e5f6',
    titleId: 'cs-full-apparel-title',
    descId: 'cs-full-apparel-desc',
  },
  {
    id: 'de-machinery',
    category: 'Industrial',
    country: 'Germany',
    title: 'German Distributor Sources Custom Industrial Components',
    challenge: 'A German industrial distributor needed custom-machined components to specific tolerances. Previous attempts to source from China had resulted in parts that failed quality checks.',
    solution: 'We identified CNC machining factories with ISO 9001 certification and experience with European tolerance standards. We managed sample production, dimensional inspection, and material certification.',
    results: ['First batch passed all dimensional checks', 'ISO 9001 certified factory with full material traceability', 'Cost 42% below European manufacturing equivalent', 'Ongoing supply agreement established'],
    imgId: 'cs-full-machinery-g7h8',
    titleId: 'cs-full-machinery-title',
    descId: 'cs-full-machinery-desc',
  },
  {
    id: 'ca-toys',
    category: 'Toys',
    country: 'Canada',
    title: 'Canadian Toy Brand Achieves EN71 Certification',
    challenge: 'A Canadian toy company wanted to source wooden educational toys from China but was concerned about safety standards and EN71 compliance for the European market.',
    solution: 'We sourced factories with existing EN71 experience, managed sample testing at an accredited lab, and oversaw production to ensure materials and finishes met safety requirements.',
    results: ['EN71 certification achieved on first test submission', 'ASTM F963 compliance for North American market', 'Zero recalls or safety issues across 3 product lines', 'Retail-ready packaging produced to spec'],
    imgId: 'cs-full-toys-i9j0',
    titleId: 'cs-full-toys-title',
    descId: 'cs-full-toys-desc',
  },
  {
    id: 'fr-packaging',
    category: 'Packaging',
    country: 'France',
    title: 'French Cosmetics Brand Develops Custom Packaging Line',
    challenge: 'A French cosmetics brand needed premium custom packaging — rigid boxes, tissue paper, and branded inserts — for a new product launch. They needed consistent quality and fast turnaround.',
    solution: 'We sourced specialist packaging factories in Dongguan, managed structural and print samples, and coordinated production of 5 packaging components across 2 factories.',
    results: ['All 5 packaging components delivered on schedule', 'Pantone color matching achieved within tolerance', 'Cost 30% below French packaging supplier quotes', 'Reorder process established for ongoing supply'],
    imgId: 'cs-full-packaging-k1l2',
    titleId: 'cs-full-packaging-title',
    descId: 'cs-full-packaging-desc',
  },
]

export default function CaseStudies() {
  const containerRef = useRef(null)

  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, containerRef.current)
    })
    return () => window.cancelAnimationFrame(frameId)
  }, [])

  return (
    <div ref={containerRef}>
      {/* Hero */}
      <section className="bg-brand-900 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <span className="inline-block bg-accent-500 text-white text-xs font-semibold uppercase tracking-widest px-3 py-1 rounded-full mb-4">
              Case Studies
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Real Results for Real Buyers
            </h1>
            <p className="text-lg text-neutral-300 leading-relaxed mb-6">
              See how we've helped businesses across industries source successfully from China.
            </p>
            <CTAButton to="/contact" size="lg" showArrow>
              Start Your Sourcing Project
            </CTAButton>
          </div>
        </div>
      </section>

      {/* Cases */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col gap-16">
            {cases.map(({ id, category, country, title, challenge, solution, results, imgId, titleId, descId }, i) => (
              <div key={id} className="bg-white rounded-2xl border border-neutral-200 overflow-hidden shadow-sm">
                <div className={`grid grid-cols-1 lg:grid-cols-2`}>
                  <div className={`h-64 lg:h-auto bg-neutral-100 ${i % 2 === 1 ? 'lg:order-2' : ''}`}>
                    <img
                      data-strk-img-id={imgId}
                      data-strk-img={`[${descId}] [${titleId}]`}
                      data-strk-img-ratio="4x3"
                      data-strk-img-width="700"
                      src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                      alt={title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className={`p-8 lg:p-10 ${i % 2 === 1 ? 'lg:order-1' : ''}`}>
                    <div className="flex items-center gap-2 mb-4">
                      <span className="text-xs font-semibold uppercase tracking-wide text-brand-600 bg-brand-50 px-2 py-1 rounded">{category}</span>
                      <span className="text-xs text-neutral-500">{country}</span>
                    </div>
                    <h2 id={titleId} className="text-xl md:text-2xl font-bold text-neutral-900 mb-5">{title}</h2>

                    <div className="mb-4">
                      <p className="text-xs font-semibold text-neutral-500 uppercase tracking-wide mb-1">Challenge</p>
                      <p id={descId} className="text-sm text-neutral-700 leading-relaxed">{challenge}</p>
                    </div>
                    <div className="mb-5">
                      <p className="text-xs font-semibold text-neutral-500 uppercase tracking-wide mb-1">Our Approach</p>
                      <p className="text-sm text-neutral-700 leading-relaxed">{solution}</p>
                    </div>
                    <div className="bg-neutral-50 rounded-xl p-4">
                      <p className="text-xs font-semibold text-neutral-500 uppercase tracking-wide mb-3 flex items-center gap-1">
                        <TrendingUp className="w-3.5 h-3.5 text-accent-500" /> Results
                      </p>
                      <ul className="flex flex-col gap-2">
                        {results.map((r) => (
                          <li key={r} className="flex items-start gap-2">
                            <CheckCircle className="w-4 h-4 text-brand-600 flex-shrink-0 mt-0.5" />
                            <span className="text-sm text-neutral-700">{r}</span>
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

      {/* CTA */}
      <section className="py-16 bg-brand-700">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Ready to Write Your Own Success Story?</h2>
          <p className="text-brand-200 mb-8">Tell us what you need to source and we'll put together a plan for you.</p>
          <CTAButton to="/contact" variant="white" size="lg" showArrow>
            Get a Free Sourcing Quote
          </CTAButton>
        </div>
      </section>
    </div>
  )
}
