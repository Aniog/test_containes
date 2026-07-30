import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import { CheckCircle, TrendingUp, Clock, DollarSign } from 'lucide-react'
import { CTAButton, SectionHeader } from '@/components/UI'

const cases = [
  {
    id: 'led-uk',
    titleId: 'cs-title-led-uk',
    descId: 'cs-desc-led-uk',
    imgId: 'cs-img-led-uk-4a8b2c',
    category: 'Electronics',
    country: 'United Kingdom',
    title: 'LED Lighting Supplier for UK Retailer',
    challenge: 'A UK-based lighting retailer needed to replace their existing Chinese supplier after quality issues with LED panels. They required a manufacturer with CE certification and consistent quality at a competitive price.',
    solution: 'We identified and audited 4 LED manufacturers in Shenzhen. Two passed our factory audit. We arranged samples from both, reviewed them against the buyer\'s specifications, and negotiated pricing. The selected supplier offered 18% lower unit cost than the buyer\'s previous supplier.',
    outcome: 'First bulk order of 5,000 units shipped on time. Pre-shipment inspection passed with zero critical defects. Buyer has since placed 3 repeat orders.',
    metrics: [
      { icon: DollarSign, label: '18% cost reduction vs. previous supplier' },
      { icon: CheckCircle, label: 'Zero critical defects on first shipment' },
      { icon: TrendingUp, label: '3 repeat orders placed within 12 months' },
    ],
  },
  {
    id: 'furniture-au',
    titleId: 'cs-title-furniture-au',
    descId: 'cs-desc-furniture-au',
    imgId: 'cs-img-furniture-au-7d3e1f',
    category: 'Furniture',
    country: 'Australia',
    title: 'Custom Office Furniture for Australian Importer',
    challenge: 'An Australian furniture importer needed a reliable OEM manufacturer in Foshan for a new range of custom office chairs. They had no existing China contacts and needed full project management from design to delivery.',
    solution: 'We sourced 3 Foshan furniture factories with OEM capability. After factory audits, we selected one and managed the entire process: sample development, bulk production monitoring with 3 on-site visits, pre-shipment inspection, and FCL shipping coordination to Melbourne.',
    outcome: 'Production completed 2 weeks ahead of schedule. Inspection passed first time. Goods arrived in Melbourne with no damage claims.',
    metrics: [
      { icon: Clock, label: '2 weeks ahead of production schedule' },
      { icon: CheckCircle, label: 'Inspection passed first time' },
      { icon: TrendingUp, label: 'Ongoing OEM partnership established' },
    ],
  },
  {
    id: 'apparel-us',
    titleId: 'cs-title-apparel-us',
    descId: 'cs-desc-apparel-us',
    imgId: 'cs-img-apparel-us-2b6c9d',
    category: 'Clothing & Textiles',
    country: 'United States',
    title: 'Certified Apparel Sourcing for US Brand',
    challenge: 'A US activewear brand needed OEKO-TEX certified garment factories in China for a new product line. Previous sourcing attempts had resulted in certification issues and inconsistent quality.',
    solution: 'We identified certified garment factories in Guangzhou meeting OEKO-TEX Standard 100 requirements. We managed the sampling process across 2 factories, conducted AQL inspections on bulk production, and coordinated air freight for the initial launch order.',
    outcome: 'Certified supplier confirmed. Bulk production quality consistent with approved samples. Launch order delivered on time for seasonal deadline.',
    metrics: [
      { icon: CheckCircle, label: 'OEKO-TEX certified supplier secured' },
      { icon: TrendingUp, label: 'Consistent quality across bulk production' },
      { icon: Clock, label: 'On-time delivery for seasonal launch' },
    ],
  },
  {
    id: 'toys-de',
    titleId: 'cs-title-toys-de',
    descId: 'cs-desc-toys-de',
    imgId: 'cs-img-toys-de-9e4f7a',
    category: 'Toys',
    country: 'Germany',
    title: 'EN71-Certified Toy Sourcing for German Distributor',
    challenge: 'A German toy distributor needed to source wooden educational toys meeting EN71 safety standards. They required factory audit documentation for their compliance records.',
    solution: 'We sourced and audited 3 wooden toy manufacturers in Guangdong. We verified EN71 test reports, conducted factory audits, and managed sample procurement. Full audit documentation was provided for the buyer\'s compliance files.',
    outcome: 'Two qualified suppliers identified. Compliance documentation complete. First order placed and delivered within agreed timeline.',
    metrics: [
      { icon: CheckCircle, label: 'EN71 compliance verified' },
      { icon: TrendingUp, label: 'Full audit documentation provided' },
      { icon: Clock, label: 'Delivered within agreed timeline' },
    ],
  },
  {
    id: 'packaging-ca',
    titleId: 'cs-title-packaging-ca',
    descId: 'cs-desc-packaging-ca',
    imgId: 'cs-img-packaging-ca-5c2d8e',
    category: 'Packaging',
    country: 'Canada',
    title: 'Custom Packaging for Canadian E-Commerce Brand',
    challenge: 'A Canadian e-commerce brand needed custom printed packaging boxes for their product range. They required specific Pantone color matching and FSC-certified materials.',
    solution: 'We sourced packaging manufacturers in Shenzhen with FSC certification and Pantone color matching capability. We managed the design approval process, print proofing, and bulk production inspection before shipment.',
    outcome: 'Color matching approved on first proof. Bulk production consistent with approved samples. Packaging delivered on schedule.',
    metrics: [
      { icon: CheckCircle, label: 'FSC-certified materials confirmed' },
      { icon: TrendingUp, label: 'Pantone color approved on first proof' },
      { icon: Clock, label: 'On-schedule delivery' },
    ],
  },
  {
    id: 'machinery-sg',
    titleId: 'cs-title-machinery-sg',
    descId: 'cs-desc-machinery-sg',
    imgId: 'cs-img-machinery-sg-1f7a3b',
    category: 'Machinery',
    country: 'Singapore',
    title: 'Industrial Pump Sourcing for Singapore Distributor',
    challenge: 'A Singapore industrial distributor needed to source centrifugal pumps meeting ISO 9001 quality standards. They required technical documentation and factory test reports.',
    solution: 'We identified ISO 9001 certified pump manufacturers in Wenzhou. Factory audits confirmed production capability and quality systems. We managed technical documentation review and factory acceptance testing.',
    outcome: 'Qualified supplier identified with full technical documentation. Factory acceptance test passed. Equipment shipped and installed successfully.',
    metrics: [
      { icon: CheckCircle, label: 'ISO 9001 certified supplier' },
      { icon: TrendingUp, label: 'Full technical documentation provided' },
      { icon: Clock, label: 'Factory acceptance test passed' },
    ],
  },
]

export default function CaseStudiesPage() {
  const containerRef = useRef(null)

  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, containerRef.current)
    })
    return () => window.cancelAnimationFrame(frameId)
  }, [])

  return (
    <div ref={containerRef} className="pt-16 lg:pt-20">
      {/* Hero */}
      <section className="bg-primary py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-block text-accent font-semibold text-sm uppercase tracking-widest mb-4">Case Studies</span>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Real Results for Real Buyers</h1>
          <p className="text-blue-200 text-lg max-w-2xl mx-auto mb-8">
            Examples of how we have helped overseas buyers source successfully from China across different product categories and countries.
          </p>
          <CTAButton>Start Your Sourcing Project</CTAButton>
        </div>
      </section>

      {/* Cases */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col gap-16">
            {cases.map((cs, i) => (
              <div key={cs.id} className="bg-white border border-bordercolor rounded-2xl overflow-hidden shadow-sm">
                <div className={`grid grid-cols-1 lg:grid-cols-2`}>
                  <div className={`aspect-[4/3] lg:aspect-auto overflow-hidden ${i % 2 === 1 ? 'lg:order-2' : ''}`}>
                    <img
                      data-strk-img-id={cs.imgId}
                      data-strk-img={`[${cs.descId}] [${cs.titleId}] China factory ${cs.category}`}
                      data-strk-img-ratio="4x3"
                      data-strk-img-width="700"
                      src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                      alt={cs.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className={`p-8 lg:p-10 ${i % 2 === 1 ? 'lg:order-1' : ''}`}>
                    <div className="flex items-center gap-3 mb-4">
                      <span className="bg-lightblue text-primary text-xs font-semibold px-3 py-1 rounded-full">{cs.category}</span>
                      <span className="text-mutedtext text-xs">{cs.country}</span>
                    </div>
                    <h2 id={cs.titleId} className="text-2xl font-bold text-darktext mb-4">{cs.title}</h2>

                    <div className="mb-4">
                      <h4 className="text-xs font-bold text-primary uppercase tracking-wide mb-1">Challenge</h4>
                      <p id={cs.descId} className="text-mutedtext text-sm leading-relaxed">{cs.challenge}</p>
                    </div>
                    <div className="mb-4">
                      <h4 className="text-xs font-bold text-primary uppercase tracking-wide mb-1">Our Approach</h4>
                      <p className="text-mutedtext text-sm leading-relaxed">{cs.solution}</p>
                    </div>
                    <div className="mb-6">
                      <h4 className="text-xs font-bold text-primary uppercase tracking-wide mb-1">Outcome</h4>
                      <p className="text-mutedtext text-sm leading-relaxed">{cs.outcome}</p>
                    </div>

                    <div className="flex flex-col gap-2">
                      {cs.metrics.map((m) => (
                        <div key={m.label} className="flex items-center gap-2 text-sm text-successgreen font-medium">
                          <m.icon className="w-4 h-4 flex-shrink-0" />
                          {m.label}
                        </div>
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
      <section className="py-20 bg-lightblue">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-darktext mb-4">Ready to Add Your Success Story?</h2>
          <p className="text-mutedtext text-lg mb-8">Tell us about your sourcing project and we will show you how we can help.</p>
          <CTAButton>Get a Free Sourcing Quote</CTAButton>
        </div>
      </section>
    </div>
  )
}
