import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import { ArrowRight, CheckCircle, TrendingUp, Clock, ShieldCheck } from 'lucide-react'

const cases = [
  {
    id: 'us-furniture',
    category: 'Furniture & Home Decor',
    client: 'US Home Goods Retailer',
    title: 'US Retailer Reduces Furniture Sourcing Costs by 22%',
    challenge: 'A mid-size US home goods retailer was sourcing furniture from a single supplier in China with no quality oversight. They experienced inconsistent quality, missed deadlines, and had no visibility into production.',
    solution: 'We identified and audited 4 alternative furniture manufacturers in Foshan, negotiated pricing, implemented a pre-shipment inspection protocol, and provided weekly production updates across 3 production runs.',
    results: [
      '22% reduction in unit cost through competitive sourcing',
      'Zero defect shipments across all 3 production runs',
      'Average lead time reduced from 90 to 65 days',
      'Supplier diversification across 2 verified factories',
    ],
    services: ['Supplier Sourcing', 'Factory Verification', 'Quality Inspection', 'Production Follow-up'],
    imgId: 'cs-us-furniture-img-a1b2c3',
    titleId: 'cs-us-furniture-title',
    descId: 'cs-us-furniture-desc',
  },
  {
    id: 'au-electronics',
    category: 'Electronics',
    client: 'Australian Consumer Electronics Brand',
    title: 'Australian Brand Launches Certified Private Label Electronics Line',
    challenge: 'An Australian startup wanted to launch a private label smart home product line but had no experience with Chinese OEM manufacturing, product certification, or import compliance.',
    solution: 'We sourced and audited OEM manufacturers in Shenzhen, coordinated CE and RoHS certification testing, managed 6 months of production follow-up, and arranged sea freight to Australia.',
    results: [
      'Successful on-time product launch',
      'CE and RoHS certification achieved',
      'Product cost 35% below initial budget estimate',
      'Ongoing supplier relationship established',
    ],
    services: ['Supplier Sourcing', 'Factory Verification', 'Quality Inspection', 'Shipping Coordination'],
    imgId: 'cs-au-electronics-img-d4e5f6',
    titleId: 'cs-au-electronics-title',
    descId: 'cs-au-electronics-desc',
  },
  {
    id: 'eu-textiles',
    category: 'Clothing & Textiles',
    title: 'European Fashion Brand Scales Production and Cuts Defect Rate',
    client: 'European Apparel Brand',
    challenge: 'A growing European fashion brand needed to scale from 500 to 5,000 units per SKU while maintaining quality. Their existing factory was struggling with capacity and their defect rate had reached 8%.',
    solution: 'We identified two additional compliant garment factories in Guangzhou, implemented inline QC protocols, and established a structured production monitoring process with weekly photo reports.',
    results: [
      'Defect rate reduced from 8% to 1.2%',
      'Production capacity scaled to 5,000 units per SKU',
      'Two new verified factories added to supply chain',
      'Consistent on-time delivery across 4 seasons',
    ],
    services: ['Supplier Sourcing', 'Factory Verification', 'Quality Inspection', 'Production Follow-up'],
    imgId: 'cs-eu-textiles-img-g7h8i9',
    titleId: 'cs-eu-textiles-title',
    descId: 'cs-eu-textiles-desc',
  },
  {
    id: 'uk-toys',
    category: 'Toys & Baby Products',
    client: 'UK Toy Distributor',
    title: 'UK Toy Distributor Achieves EN71 Compliance Across Full Product Range',
    challenge: 'A UK toy distributor was importing toys from China without proper safety testing. After a compliance audit, they needed to ensure their entire product range met EN71 European toy safety standards.',
    solution: 'We audited their existing suppliers, identified non-compliant factories, sourced replacement manufacturers with EN71 experience, and coordinated third-party safety testing for all products.',
    results: [
      'Full EN71 compliance achieved across 28 SKUs',
      'Non-compliant suppliers replaced with 3 verified alternatives',
      'Third-party safety testing coordinated and passed',
      'Zero compliance issues in subsequent customs inspections',
    ],
    services: ['Factory Verification', 'Quality Inspection', 'Supplier Sourcing'],
    imgId: 'cs-uk-toys-img-j1k2l3',
    titleId: 'cs-uk-toys-title',
    descId: 'cs-uk-toys-desc',
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
      <section className="bg-brand-900 pt-24 pb-16 md:pt-32 md:pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="text-xs font-semibold uppercase tracking-widest text-accent-400 mb-3 block">Results</span>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-5">
              Case Studies
            </h1>
            <p className="text-brand-200 text-lg leading-relaxed">
              Real outcomes from global buyers who trusted SSourcing China to manage their supply chain. Each case reflects a specific challenge, our approach, and measurable results.
            </p>
          </div>
        </div>
      </section>

      {/* Cases */}
      <section className="py-16 md:py-24 bg-neutral-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col gap-16">
            {cases.map((cs, i) => (
              <div key={cs.id} className="bg-white rounded-2xl border border-neutral-200 overflow-hidden">
                <div className="grid lg:grid-cols-2">
                  <div className={`aspect-[4/3] lg:aspect-auto overflow-hidden ${i % 2 === 1 ? 'lg:order-2' : ''}`}>
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
                  <div className={`p-8 md:p-10 ${i % 2 === 1 ? 'lg:order-1' : ''}`}>
                    <div className="flex items-center gap-2 mb-4">
                      <span className="text-xs font-semibold uppercase tracking-wide text-accent-500 bg-amber-50 px-2.5 py-1 rounded-full">{cs.category}</span>
                      <span className="text-xs text-neutral-500">{cs.client}</span>
                    </div>
                    <h2 id={cs.titleId} className="text-xl md:text-2xl font-bold text-brand-900 mb-4 leading-snug">{cs.title}</h2>

                    <div className="mb-4">
                      <h3 className="text-xs font-semibold uppercase tracking-wide text-neutral-500 mb-2">Challenge</h3>
                      <p id={cs.descId} className="text-neutral-600 text-sm leading-relaxed">{cs.challenge}</p>
                    </div>

                    <div className="mb-4">
                      <h3 className="text-xs font-semibold uppercase tracking-wide text-neutral-500 mb-2">Our Approach</h3>
                      <p className="text-neutral-600 text-sm leading-relaxed">{cs.solution}</p>
                    </div>

                    <div className="mb-5">
                      <h3 className="text-xs font-semibold uppercase tracking-wide text-neutral-500 mb-3">Results</h3>
                      <ul className="flex flex-col gap-2">
                        {cs.results.map((r) => (
                          <li key={r} className="flex items-start gap-2 text-sm text-neutral-700">
                            <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                            {r}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="flex flex-wrap gap-2">
                      {cs.services.map((s) => (
                        <span key={s} className="text-xs bg-brand-50 text-brand-700 px-2.5 py-1 rounded-full border border-brand-100 font-medium">
                          {s}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-accent-500">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Ready to Achieve Similar Results?</h2>
          <p className="text-amber-100 text-lg mb-8">
            Tell us about your sourcing challenge and we'll put together a plan.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 bg-white text-accent-600 hover:bg-amber-50 font-bold px-10 py-4 rounded-lg transition-colors"
          >
            Get a Free Sourcing Quote <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  )
}
