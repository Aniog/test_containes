import { useEffect, useRef } from 'react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import { TrendingUp, Globe, CheckCircle } from 'lucide-react'
import CTAButton from '@/components/CTAButton'

const cases = [
  {
    id: 'us-furniture',
    titleId: 'case-us-furniture-title',
    descId: 'case-us-furniture-desc',
    imgId: 'case-img-us-furniture-a1b2c3',
    client: 'US Furniture Importer',
    country: 'United States',
    category: 'Furniture & Home Decor',
    challenge: 'A mid-sized US furniture retailer was sourcing from a single supplier in Guangdong. Quality was inconsistent and lead times were unpredictable. They needed to diversify their supplier base and improve QC.',
    solution: 'We audited 6 factories in Guangdong and Fujian, shortlisted 3 that met their quality and capacity requirements, and implemented a pre-shipment inspection protocol for all orders.',
    results: ['Reduced sourcing cost by 22%', 'Cut average lead time by 3 weeks', 'Zero quality rejections in 12 months', 'Diversified to 3 verified suppliers'],
    desc: 'Solid wood furniture factory audit and quality inspection for US furniture retailer in Guangdong China',
  },
  {
    id: 'de-electronics',
    titleId: 'case-de-electronics-title',
    descId: 'case-de-electronics-desc',
    imgId: 'case-img-de-electronics-d4e5f6',
    client: 'German Electronics Brand',
    country: 'Germany',
    category: 'Electronics & Components',
    challenge: 'A German consumer electronics brand needed CE-certified manufacturers for a new product line. Previous attempts to source independently resulted in non-compliant products and wasted samples.',
    solution: 'We identified 5 Shenzhen-based manufacturers with CE certification experience, conducted factory audits, and managed the sample approval process through 3 rounds of revisions.',
    results: ['Found 3 compliant CE-certified factories in 2 weeks', 'Reduced sample approval time by 40%', 'First production run passed CE testing', 'Ongoing QC partnership established'],
    desc: 'CE certified electronics manufacturer sourcing and factory audit in Shenzhen China for German brand',
  },
  {
    id: 'fr-fashion',
    titleId: 'case-fr-fashion-title',
    descId: 'case-fr-fashion-desc',
    imgId: 'case-img-fr-fashion-g7h8i9',
    client: 'French Fashion Brand',
    country: 'France',
    category: 'Clothing & Textiles',
    challenge: 'A French fashion startup wanted to launch a private label clothing line but had no experience sourcing from China. They needed end-to-end support from factory selection to first delivery.',
    solution: 'We managed the full process: factory sourcing in Guangzhou, OEM contract negotiation, packaging design coordination, production follow-up, and pre-shipment inspection.',
    results: ['Launched private label line in 60 days', 'Worked with 2 OEM factories', 'On-time delivery for first collection', 'Packaging matched brand specifications exactly'],
    desc: 'Private label clothing OEM factory sourcing and production management in Guangzhou China for French fashion brand',
  },
  {
    id: 'au-sports',
    titleId: 'case-au-sports-title',
    descId: 'case-au-sports-desc',
    imgId: 'case-img-au-sports-j1k2l3',
    client: 'Australian Sports Equipment Distributor',
    country: 'Australia',
    category: 'Sports & Outdoor',
    challenge: 'An Australian distributor was importing fitness equipment but facing high defect rates and shipping delays. They needed a local partner to manage quality and logistics.',
    solution: 'We implemented during-production and pre-shipment inspections, renegotiated shipping terms with the supplier, and set up a monthly production monitoring schedule.',
    results: ['Defect rate reduced from 8% to under 1%', 'Shipping delays eliminated over 6 months', 'Saved 15% on logistics costs', 'Monthly reporting dashboard introduced'],
    desc: 'Fitness equipment quality inspection and shipping coordination for Australian sports distributor importing from China',
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
      <section className="bg-blue-950 text-white py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-blue-300 font-semibold text-sm uppercase tracking-wider mb-3">Client Results</p>
            <h1 className="text-4xl md:text-5xl font-bold mb-5">Case Studies</h1>
            <p className="text-neutral-300 text-lg leading-relaxed mb-8">
              Real outcomes from global buyers who trusted SSourcing China to manage their sourcing, quality control, and logistics.
            </p>
            <CTAButton size="lg" showArrow>Start Your Sourcing Project</CTAButton>
          </div>
        </div>
      </section>

      {/* Cases */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
          {cases.map((cs, i) => {
            const isEven = i % 2 === 0
            return (
              <div key={cs.id} className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
                <div className={isEven ? '' : 'lg:order-2'}>
                  <img
                    alt={cs.client}
                    data-strk-img-id={cs.imgId}
                    data-strk-img={`[${cs.descId}] [${cs.titleId}]`}
                    data-strk-img-ratio="4x3"
                    data-strk-img-width="700"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    className="w-full rounded-2xl shadow-md object-cover aspect-[4/3]"
                  />
                </div>
                <div className={isEven ? '' : 'lg:order-1'}>
                  <div className="flex items-center gap-2 mb-4">
                    <span className="text-xs font-medium text-blue-800 bg-blue-50 px-2.5 py-1 rounded-full border border-blue-100">{cs.category}</span>
                    <span className="text-xs text-neutral-500 flex items-center gap-1">
                      <Globe className="w-3 h-3" /> {cs.country}
                    </span>
                  </div>
                  <h2 id={cs.titleId} className="text-2xl md:text-3xl font-bold text-neutral-800 mb-4">{cs.client}</h2>
                  <p id={cs.descId} className="sr-only">{cs.desc}</p>

                  <div className="space-y-4 mb-6">
                    <div>
                      <h3 className="text-sm font-semibold text-neutral-500 uppercase tracking-wider mb-2">Challenge</h3>
                      <p className="text-neutral-700 text-sm leading-relaxed">{cs.challenge}</p>
                    </div>
                    <div>
                      <h3 className="text-sm font-semibold text-neutral-500 uppercase tracking-wider mb-2">Our Approach</h3>
                      <p className="text-neutral-700 text-sm leading-relaxed">{cs.solution}</p>
                    </div>
                  </div>

                  <div className="bg-blue-50 rounded-xl p-5 border border-blue-100">
                    <div className="flex items-center gap-2 mb-3">
                      <TrendingUp className="w-4 h-4 text-blue-700" />
                      <h3 className="text-sm font-semibold text-blue-800 uppercase tracking-wider">Results</h3>
                    </div>
                    <ul className="space-y-2">
                      {cs.results.map((r) => (
                        <li key={r} className="flex items-start gap-2 text-neutral-700 text-sm">
                          <CheckCircle className="w-4 h-4 text-blue-500 flex-shrink-0 mt-0.5" />
                          {r}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-blue-800 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Achieve Similar Results?</h2>
          <p className="text-blue-200 text-lg mb-8">
            Tell us about your sourcing challenge and we will put together a plan tailored to your needs.
          </p>
          <CTAButton size="lg" showArrow>Get a Free Sourcing Quote</CTAButton>
        </div>
      </section>
    </div>
  )
}
