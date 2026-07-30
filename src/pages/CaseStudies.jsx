import { useEffect, useRef } from 'react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import CTAButton from '@/components/CTAButton'
import SectionHeader from '@/components/SectionHeader'

const cases = [
  {
    id: 'cs-led',
    titleId: 'cs-led-title',
    descId: 'cs-led-desc',
    imgId: 'cs-full-1-b1c2d3',
    category: 'Electronics',
    country: 'United States',
    title: 'US Retailer Reduces LED Lighting Costs by 22%',
    challenge: 'A US-based lighting distributor was sourcing LED products through a trading company and paying above-market prices. They needed to connect directly with a verified manufacturer to reduce costs without compromising quality.',
    solution: 'We identified 4 qualified LED manufacturers in Guangdong, conducted factory audits at 3 of them, and negotiated direct pricing. We also managed pre-shipment inspections for the first two orders.',
    result: '22% cost reduction vs. previous supplier. Zero defect rate on first two shipments. Direct factory relationship established.',
    metrics: [
      { label: 'Cost Reduction', value: '22%' },
      { label: 'Defect Rate', value: '0%' },
      { label: 'Time to First Order', value: '6 weeks' },
    ],
  },
  {
    id: 'cs-furniture',
    titleId: 'cs-furniture-title',
    descId: 'cs-furniture-desc',
    imgId: 'cs-full-2-e4f5g6',
    category: 'Furniture',
    country: 'Germany',
    title: 'German Brand Launches Private Label Furniture Range',
    challenge: 'A German home goods brand wanted to launch a private label furniture range in China but had no existing supplier relationships and limited knowledge of the Chinese manufacturing landscape.',
    solution: 'We managed the full OEM process: factory selection in Foshan, product design coordination, 3 rounds of sampling, branded packaging development, and production oversight for the initial run of 4 SKUs.',
    result: 'All 4 SKUs delivered on schedule. Product quality matched approved samples. Brand launched successfully in European retail.',
    metrics: [
      { label: 'SKUs Launched', value: '4' },
      { label: 'On-Time Delivery', value: '100%' },
      { label: 'Project Duration', value: '5 months' },
    ],
  },
  {
    id: 'cs-apparel',
    titleId: 'cs-apparel-title',
    descId: 'cs-apparel-desc',
    imgId: 'cs-full-3-h7i8j9',
    category: 'Apparel',
    country: 'Australia',
    title: 'Australian Fashion Brand Scales Production 10x',
    challenge: 'An Australian fashion brand was producing 500 units per style with a small factory that could not scale. They needed a larger, compliant manufacturer to support growth to 5,000 units per style.',
    solution: 'We sourced and audited 3 apparel factories in Guangzhou, managed 2 sampling rounds, negotiated pricing for the new volume, and coordinated sea freight for the first large order.',
    result: 'Production scaled from 500 to 5,000 units per style. Delivery on schedule. 15% unit cost reduction at new volume.',
    metrics: [
      { label: 'Volume Increase', value: '10x' },
      { label: 'Cost Reduction', value: '15%' },
      { label: 'Delivery Performance', value: 'On time' },
    ],
  },
  {
    id: 'cs-toys',
    titleId: 'cs-toys-title',
    descId: 'cs-toys-desc',
    imgId: 'cs-full-4-k0l1m2',
    category: 'Toys',
    country: 'United Kingdom',
    title: 'UK Toy Brand Achieves EN71 Compliance for New Range',
    challenge: 'A UK toy brand needed to source a new range of educational toys that met EN71 safety standards. Previous attempts with unverified suppliers had resulted in compliance failures.',
    solution: 'We sourced certified toy manufacturers in Shantou, verified their EN71 testing processes, managed sample testing at an accredited lab, and oversaw production to ensure compliance was maintained.',
    result: 'Full EN71 compliance achieved. Products successfully listed with major UK retailers. No compliance issues on first production run.',
    metrics: [
      { label: 'Compliance Rate', value: '100%' },
      { label: 'Retail Listings', value: '3 major chains' },
      { label: 'Defect Rate', value: '<0.5%' },
    ],
  },
  {
    id: 'cs-packaging',
    titleId: 'cs-packaging-title',
    descId: 'cs-packaging-desc',
    imgId: 'cs-full-5-n3o4p5',
    category: 'Packaging',
    country: 'Canada',
    title: 'Canadian E-Commerce Brand Sources Custom Packaging',
    challenge: 'A Canadian e-commerce brand needed custom branded packaging for 8 product lines at a cost that worked for their margins. Local packaging was too expensive and previous China attempts had quality issues.',
    solution: 'We sourced 3 packaging manufacturers in Guangzhou, managed design file coordination, obtained samples for all 8 product lines, and negotiated pricing for a combined order.',
    result: '40% cost reduction vs. local packaging. All 8 product lines packaged consistently. Reorder process established.',
    metrics: [
      { label: 'Cost Reduction', value: '40%' },
      { label: 'Product Lines', value: '8' },
      { label: 'Sample Approval', value: '2 rounds' },
    ],
  },
  {
    id: 'cs-machinery',
    titleId: 'cs-machinery-title',
    descId: 'cs-machinery-desc',
    imgId: 'cs-full-6-q6r7s8',
    category: 'Machinery',
    country: 'Brazil',
    title: 'Brazilian Distributor Sources Industrial Equipment',
    challenge: 'A Brazilian industrial distributor needed to source 3 types of industrial pumps from China. They had concerns about product quality, certifications, and reliable delivery to Brazil.',
    solution: 'We identified certified pump manufacturers in Wenzhou, conducted factory audits, verified CE and ISO certifications, managed pre-shipment testing, and coordinated sea freight to Brazil.',
    result: 'All 3 pump models delivered with full certification documentation. On-time delivery. Distributor placed repeat order within 4 months.',
    metrics: [
      { label: 'Product Types', value: '3' },
      { label: 'Certifications', value: 'CE + ISO' },
      { label: 'Repeat Order', value: 'Within 4 months' },
    ],
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
      <section className="bg-brand-900 text-white py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="inline-block bg-accent-500/20 text-accent-400 text-xs font-semibold uppercase tracking-widest px-3 py-1 rounded-full mb-5">
              Case Studies
            </span>
            <h1 className="text-4xl md:text-5xl font-bold mb-5">
              Real Results for Real Buyers
            </h1>
            <p className="text-neutral-300 text-lg leading-relaxed max-w-2xl">
              Practical examples of how we've helped businesses across industries source smarter, reduce costs, and manage risk when buying from China.
            </p>
          </div>
        </div>
      </section>

      {/* Cases */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {cases.map((cs, i) => {
              const isEven = i % 2 === 1
              return (
                <div key={cs.id} className="bg-white border border-neutral-200 rounded-2xl overflow-hidden shadow-sm">
                  <div className={`grid grid-cols-1 lg:grid-cols-2`}>
                    <div className={`aspect-video lg:aspect-auto overflow-hidden bg-neutral-100 ${isEven ? 'lg:order-2' : ''}`}>
                      <img
                        data-strk-img-id={cs.imgId}
                        data-strk-img={`[${cs.descId}] [${cs.titleId}]`}
                        data-strk-img-ratio="4x3"
                        data-strk-img-width="700"
                        src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                        alt={cs.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className={`p-8 md:p-10 ${isEven ? 'lg:order-1' : ''}`}>
                      <div className="flex flex-wrap gap-2 mb-4">
                        <span className="bg-brand-50 text-brand-700 text-xs font-semibold px-2 py-1 rounded">{cs.category}</span>
                        <span className="bg-neutral-100 text-neutral-600 text-xs font-semibold px-2 py-1 rounded">{cs.country}</span>
                      </div>
                      <h2 id={cs.titleId} className="text-xl md:text-2xl font-bold text-neutral-800 mb-4">{cs.title}</h2>

                      <div className="space-y-4 mb-6">
                        <div>
                          <p className="text-xs font-semibold text-neutral-400 uppercase tracking-wider mb-1">Challenge</p>
                          <p id={cs.descId} className="text-neutral-600 text-sm leading-relaxed">{cs.challenge}</p>
                        </div>
                        <div>
                          <p className="text-xs font-semibold text-neutral-400 uppercase tracking-wider mb-1">Our Approach</p>
                          <p className="text-neutral-600 text-sm leading-relaxed">{cs.solution}</p>
                        </div>
                        <div>
                          <p className="text-xs font-semibold text-neutral-400 uppercase tracking-wider mb-1">Result</p>
                          <p className="text-neutral-700 text-sm leading-relaxed font-medium">{cs.result}</p>
                        </div>
                      </div>

                      <div className="grid grid-cols-3 gap-3">
                        {cs.metrics.map((m) => (
                          <div key={m.label} className="bg-neutral-50 rounded-lg p-3 text-center">
                            <p className="text-lg font-bold text-brand-700">{m.value}</p>
                            <p className="text-xs text-neutral-500 mt-0.5">{m.label}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-brand-700 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Want Results Like These?</h2>
          <p className="text-neutral-200 text-lg mb-8">
            Tell us about your sourcing project and we'll put together a plan tailored to your needs.
          </p>
          <CTAButton to="/contact" size="lg" showArrow>
            Get a Free Sourcing Quote
          </CTAButton>
        </div>
      </section>
    </div>
  )
}
