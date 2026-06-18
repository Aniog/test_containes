import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import { ArrowRight, TrendingDown, Clock, CheckCircle } from 'lucide-react'

const cases = [
  {
    id: 'case-uk-furniture',
    titleId: 'case-uk-furniture-title',
    descId: 'case-uk-furniture-desc',
    imgId: 'case-uk-furniture-img-a1b2c3',
    client: 'UK Furniture Retailer',
    country: '🇬🇧 United Kingdom',
    tag: 'Quality Inspection',
    title: 'Reducing Defect Rates for a UK Furniture Importer',
    challenge: 'A UK-based furniture retailer was experiencing a 12% defect rate on solid wood dining sets sourced from Guangdong. Customer returns were increasing and the supplier was unresponsive to complaints.',
    solution: 'We conducted a factory audit, identified process gaps in the finishing stage, and implemented a pre-shipment inspection protocol using AQL 2.5 sampling. We also negotiated a quality guarantee clause into the supply contract.',
    result: 'Defect rate dropped from 12% to under 1% within two shipments. The client saved an estimated £40,000 in return logistics and replacement costs in the first year.',
    metrics: [
      { label: 'Defect Rate Reduction', value: '12% → <1%' },
      { label: 'Annual Savings', value: '~£40,000' },
      { label: 'Inspection Turnaround', value: '2 days' },
    ],
  },
  {
    id: 'case-us-electronics',
    titleId: 'case-us-electronics-title',
    descId: 'case-us-electronics-desc',
    imgId: 'case-us-electronics-img-d4e5f6',
    client: 'US Consumer Electronics Startup',
    country: '🇺🇸 United States',
    tag: 'Full Sourcing',
    title: 'Full Sourcing & Compliance for a US Electronics Brand',
    challenge: 'A US startup needed to source a custom Bluetooth speaker with FCC certification for Amazon launch. They had no China contacts and a 90-day deadline.',
    solution: 'We sourced 4 qualified manufacturers, arranged samples, coordinated FCC testing through a certified lab, and managed production monitoring. We also handled sea freight to the Amazon FBA warehouse.',
    result: 'Product launched on Amazon within 85 days. First batch of 2,000 units sold out in 6 weeks. The client has since placed 3 repeat orders.',
    metrics: [
      { label: 'Time to Launch', value: '85 days' },
      { label: 'First Batch', value: '2,000 units' },
      { label: 'Repeat Orders', value: '3 orders' },
    ],
  },
  {
    id: 'case-au-apparel',
    titleId: 'case-au-apparel-title',
    descId: 'case-au-apparel-desc',
    imgId: 'case-au-apparel-img-g7h8i9',
    client: 'Australian Apparel Brand',
    country: '🇦🇺 Australia',
    tag: 'Factory Audit',
    title: 'Scaling a Private Label Clothing Brand in Australia',
    challenge: 'An Australian activewear brand was scaling from 1,000 to 10,000 units per month but their existing supplier couldn\'t meet demand. They needed a new, larger factory without compromising quality.',
    solution: 'We audited 6 factories in Guangzhou and Dongguan, shortlisted 2 that met capacity and quality requirements, and managed the transition including sample approval and first production run.',
    result: 'Successful transition to a new factory with zero quality issues on the first 10,000-unit run. Lead time reduced from 45 to 28 days.',
    metrics: [
      { label: 'Scale Achieved', value: '10,000 units/mo' },
      { label: 'Lead Time', value: '45 → 28 days' },
      { label: 'Quality Issues', value: '0 on first run' },
    ],
  },
  {
    id: 'case-de-homegoods',
    titleId: 'case-de-homegoods-title',
    descId: 'case-de-homegoods-desc',
    imgId: 'case-de-homegoods-img-j1k2l3',
    client: 'German Home Goods Distributor',
    country: '🇩🇪 Germany',
    tag: 'Shipping & Logistics',
    title: 'Streamlining Logistics for a German Home Goods Importer',
    challenge: 'A German distributor was managing 8 different suppliers across 3 provinces, resulting in fragmented shipments, high freight costs, and customs delays.',
    solution: 'We consolidated all supplier relationships under our management, coordinated consolidated sea freight shipments from a single Guangzhou warehouse, and handled all export documentation.',
    result: 'Freight costs reduced by 22% through consolidation. Customs clearance time cut from 5 days to 2 days. The client now manages all China sourcing through a single point of contact.',
    metrics: [
      { label: 'Freight Cost Reduction', value: '22%' },
      { label: 'Customs Clearance', value: '5 → 2 days' },
      { label: 'Suppliers Managed', value: '8 suppliers' },
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
      <section className="bg-blue-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="text-orange-400 font-semibold text-sm uppercase tracking-wider">Client Results</span>
            <h1 className="text-4xl md:text-5xl font-extrabold mt-2 mb-4">
              Case Studies
            </h1>
            <p className="text-blue-200 text-lg leading-relaxed">
              Real projects, real outcomes. See how we've helped global buyers source successfully from China across different industries and challenges.
            </p>
          </div>
        </div>
      </section>

      {/* Cases */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-20">
            {cases.map((cs, i) => {
              const isEven = i % 2 === 0
              return (
                <div key={cs.id} className="border border-slate-200 rounded-2xl overflow-hidden">
                  <div className={`grid lg:grid-cols-2`}>
                    <div className={isEven ? '' : 'lg:order-2'}>
                      <img
                        alt={cs.title}
                        className="w-full h-64 lg:h-full object-cover"
                        data-strk-img-id={cs.imgId}
                        data-strk-img={`[${cs.descId}] [${cs.titleId}]`}
                        data-strk-img-ratio="4x3"
                        data-strk-img-width="700"
                        src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                      />
                    </div>
                    <div className={`p-8 lg:p-10 ${isEven ? '' : 'lg:order-1'}`}>
                      <div className="flex items-center gap-3 mb-4">
                        <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-1 rounded-full">
                          {cs.tag}
                        </span>
                        <span className="text-slate-500 text-sm">{cs.country}</span>
                      </div>
                      <h2 id={cs.titleId} className="text-xl md:text-2xl font-bold text-slate-900 mb-2">
                        {cs.title}
                      </h2>
                      <p className="text-slate-500 text-sm font-medium mb-6">{cs.client}</p>

                      <div className="space-y-4 mb-6">
                        <div>
                          <h3 className="text-sm font-semibold text-slate-500 uppercase tracking-wider mb-1">Challenge</h3>
                          <p id={cs.descId} className="text-slate-700 text-sm leading-relaxed">{cs.challenge}</p>
                        </div>
                        <div>
                          <h3 className="text-sm font-semibold text-slate-500 uppercase tracking-wider mb-1">Our Solution</h3>
                          <p className="text-slate-700 text-sm leading-relaxed">{cs.solution}</p>
                        </div>
                        <div>
                          <h3 className="text-sm font-semibold text-slate-500 uppercase tracking-wider mb-1">Result</h3>
                          <p className="text-slate-700 text-sm leading-relaxed">{cs.result}</p>
                        </div>
                      </div>

                      <div className="grid grid-cols-3 gap-3">
                        {cs.metrics.map((m) => (
                          <div key={m.label} className="bg-slate-50 rounded-lg p-3 text-center">
                            <div className="text-blue-700 font-bold text-sm">{m.value}</div>
                            <div className="text-slate-500 text-xs mt-0.5">{m.label}</div>
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
      <section className="py-16 bg-blue-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Write Your Own Success Story?</h2>
          <p className="text-blue-200 mb-8">
            Tell us about your sourcing challenge and we'll show you how we can help.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white font-semibold px-8 py-4 rounded-lg transition-colors"
          >
            Get a Free Sourcing Quote <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  )
}
