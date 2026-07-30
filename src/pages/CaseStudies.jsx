import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import { ArrowRight, TrendingDown, Clock, ShieldCheck, Star } from 'lucide-react'

const cases = [
  {
    id: 'uk-furniture',
    client: 'UK Furniture Retailer',
    country: '🇬🇧 United Kingdom',
    product: 'Solid Wood Dining Sets',
    category: 'Furniture & Home Decor',
    challenge: 'The client had been sourcing from a trading company and was paying inflated prices with inconsistent quality. They needed a direct factory relationship and better QC.',
    solution: 'We identified 4 direct manufacturers in Guangdong, conducted factory audits, and negotiated directly on their behalf. We implemented a pre-shipment inspection protocol for every order.',
    result: 'Reduced unit cost by 22%, eliminated quality rejections, and established a reliable long-term supplier relationship.',
    metrics: [
      { label: 'Cost Reduction', value: '22%' },
      { label: 'Defect Rate', value: '0%' },
      { label: 'Lead Time', value: '35 days' },
    ],
    titleId: 'cs-uk-furniture-title',
    descId: 'cs-uk-furniture-desc',
    imgId: 'cs-uk-furniture-img-a1b2c3',
  },
  {
    id: 'us-electronics',
    client: 'US Consumer Electronics Brand',
    country: '🇺🇸 United States',
    product: 'Wireless Earbuds (OEM)',
    category: 'Electronics & Components',
    challenge: 'A startup needed to launch a branded wireless earbud product with CE and FCC certifications within 90 days. They had no China contacts and no sourcing experience.',
    solution: 'We sourced 3 qualified OEM manufacturers, managed the sampling process, coordinated certification testing, and oversaw production and quality inspection.',
    result: 'Launched on schedule in 90 days with full CE/FCC certification, zero customs issues, and a competitive unit cost.',
    metrics: [
      { label: 'Time to Launch', value: '90 days' },
      { label: 'Certifications', value: 'CE + FCC' },
      { label: 'Customs Issues', value: 'Zero' },
    ],
    titleId: 'cs-us-electronics-title',
    descId: 'cs-us-electronics-desc',
    imgId: 'cs-us-electronics-img-d4e5f6',
  },
  {
    id: 'au-apparel',
    client: 'Australian Activewear Brand',
    country: '🇦🇺 Australia',
    product: 'Activewear Collection (ODM)',
    category: 'Clothing & Textiles',
    challenge: 'The brand needed to source a 12-piece activewear collection with custom fabrics and branding for a seasonal launch. Previous suppliers had missed deadlines and delivered inconsistent sizing.',
    solution: 'We sourced 3 compliant factories in Fujian, managed 2 rounds of sampling, conducted in-line inspections, and coordinated sea freight to meet the launch window.',
    result: 'Delivered on time for the seasonal launch with consistent sizing and quality across all 12 SKUs.',
    metrics: [
      { label: 'SKUs Delivered', value: '12' },
      { label: 'On-Time Delivery', value: '100%' },
      { label: 'Sampling Rounds', value: '2' },
    ],
    titleId: 'cs-au-apparel-title',
    descId: 'cs-au-apparel-desc',
    imgId: 'cs-au-apparel-img-g7h8i9',
  },
  {
    id: 'de-machinery',
    client: 'German Industrial Distributor',
    country: '🇩🇪 Germany',
    product: 'Power Tools (OEM)',
    category: 'Machinery & Industrial',
    challenge: 'The distributor needed to source a range of power tools meeting CE and GS standards for the European market. They required factory audits and ongoing production monitoring.',
    solution: 'We audited 5 factories in Zhejiang, selected 2 that met CE/GS requirements, and set up a production monitoring program with quarterly factory visits.',
    result: 'Established a compliant supply chain with 2 verified factories, reducing sourcing risk and improving product consistency.',
    metrics: [
      { label: 'Factories Audited', value: '5' },
      { label: 'Compliance', value: 'CE + GS' },
      { label: 'Ongoing Monitoring', value: 'Quarterly' },
    ],
    titleId: 'cs-de-machinery-title',
    descId: 'cs-de-machinery-desc',
    imgId: 'cs-de-machinery-img-j1k2l3',
  },
  {
    id: 'ca-toys',
    client: 'Canadian Toy Importer',
    country: '🇨🇦 Canada',
    product: 'Wooden Educational Toys',
    category: 'Toys & Baby Products',
    challenge: 'The importer needed ASTM F963 and EN71 certified wooden toys for the North American and European markets. Previous suppliers had failed safety testing.',
    solution: 'We sourced certified toy manufacturers in Zhejiang, verified their testing documentation, and conducted pre-shipment inspections focused on safety compliance.',
    result: 'All products passed ASTM and EN71 testing on first submission, with zero safety recalls in 2 years of trading.',
    metrics: [
      { label: 'Safety Certifications', value: 'ASTM + EN71' },
      { label: 'Test Pass Rate', value: '100%' },
      { label: 'Safety Recalls', value: 'Zero' },
    ],
    titleId: 'cs-ca-toys-title',
    descId: 'cs-ca-toys-desc',
    imgId: 'cs-ca-toys-img-m4n5o6',
  },
  {
    id: 'fr-beauty',
    client: 'French Beauty Brand',
    country: '🇫🇷 France',
    product: 'Skincare Packaging',
    category: 'Packaging & Printing',
    challenge: 'The brand needed custom glass and plastic packaging for a new skincare line with specific color matching and branding requirements.',
    solution: 'We sourced packaging manufacturers in Guangdong, managed 3 rounds of sampling for color and finish approval, and coordinated consolidated shipping.',
    result: 'Delivered packaging that matched brand specifications exactly, on time for the product launch.',
    metrics: [
      { label: 'Sampling Rounds', value: '3' },
      { label: 'Color Match', value: '100%' },
      { label: 'On-Time Delivery', value: 'Yes' },
    ],
    titleId: 'cs-fr-beauty-title',
    descId: 'cs-fr-beauty-desc',
    imgId: 'cs-fr-beauty-img-p7q8r9',
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
      {/* Header */}
      <section className="bg-[#0F2A4A] py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <span className="text-[#C8102E] text-sm font-semibold uppercase tracking-wider">Client Results</span>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mt-2 mb-4">
              Case Studies
            </h1>
            <p className="text-slate-300 text-lg leading-relaxed">
              Real projects, real results. Here's how we've helped global buyers source successfully from China.
            </p>
          </div>
        </div>
      </section>

      {/* Cases */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col gap-14">
            {cases.map((cs, i) => {
              const isEven = i % 2 === 0
              return (
                <div key={cs.id} className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
                  <div className={!isEven ? 'lg:order-2' : ''}>
                    <div className="flex items-center gap-3 mb-4">
                      <span className="text-xs font-medium bg-slate-100 text-slate-600 px-3 py-1 rounded-full">{cs.category}</span>
                      <span className="text-sm text-slate-500">{cs.country}</span>
                    </div>
                    <h2 id={cs.titleId} className="text-2xl md:text-3xl font-bold text-[#0F2A4A] mb-1">{cs.product}</h2>
                    <p className="text-[#C8102E] font-medium text-sm mb-5">{cs.client}</p>

                    <div className="flex flex-col gap-4 mb-6">
                      <div>
                        <h3 className="text-[#0F2A4A] font-semibold text-sm uppercase tracking-wider mb-1">Challenge</h3>
                        <p className="text-slate-600 text-sm leading-relaxed">{cs.challenge}</p>
                      </div>
                      <div>
                        <h3 className="text-[#0F2A4A] font-semibold text-sm uppercase tracking-wider mb-1">Our Solution</h3>
                        <p className="text-slate-600 text-sm leading-relaxed">{cs.solution}</p>
                      </div>
                      <div>
                        <h3 className="text-[#0F2A4A] font-semibold text-sm uppercase tracking-wider mb-1">Result</h3>
                        <p id={cs.descId} className="text-slate-600 text-sm leading-relaxed">{cs.result}</p>
                      </div>
                    </div>

                    <div className="flex gap-4">
                      {cs.metrics.map((m) => (
                        <div key={m.label} className="bg-slate-50 border border-slate-200 rounded-lg p-3 text-center flex-1">
                          <div className="text-xl font-bold text-[#0F2A4A]">{m.value}</div>
                          <div className="text-xs text-slate-500 mt-0.5">{m.label}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className={`rounded-xl overflow-hidden bg-slate-100 aspect-video ${!isEven ? 'lg:order-1' : ''}`}>
                    <img
                      alt={cs.product}
                      data-strk-img-id={cs.imgId}
                      data-strk-img={`[${cs.descId}] [${cs.titleId}]`}
                      data-strk-img-ratio="16x9"
                      data-strk-img-width="700"
                      src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-slate-50 border-t border-slate-200">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-[#0F2A4A] mb-4">Ready to Be Our Next Success Story?</h2>
          <p className="text-slate-600 mb-8">
            Tell us about your sourcing project. We'll put together a tailored plan and a free quote within 24 hours.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 bg-[#C8102E] text-white px-7 py-3.5 rounded-md font-semibold hover:bg-[#A80D26] transition-colors"
          >
            Get a Free Sourcing Quote <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </div>
  )
}
