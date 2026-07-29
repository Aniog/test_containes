import { useEffect, useRef } from 'react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import { SectionHeading, CTAButton } from '@/components/shared/SectionHeading'

const caseStudies = [
  {
    id: 'electronics-eu',
    title: 'LED Lighting for European Distributor',
    category: 'Electronics',
    client: 'EU-based lighting distributor',
    challenge: 'Client needed a reliable LED panel manufacturer with CE certification and competitive pricing for a 10,000-unit initial order.',
    solution: 'We identified 8 potential suppliers, audited 4 factories, and arranged samples from 3 finalists. After quality testing, we selected a Shenzhen-based manufacturer with ISO 9001 and CE certifications.',
    result: '40% cost reduction vs. previous supplier. Zero defects on first shipment. Ongoing relationship for quarterly reorders.',
    stats: { savings: '40%', defects: '0%', timeline: '45 days' },
    titleId: 'cs-led-title',
    descId: 'cs-led-desc',
    imgId: 'cs-led-img-c4d5e6',
  },
  {
    id: 'furniture-us',
    title: 'Custom Office Furniture for US Brand',
    category: 'Home & Garden',
    client: 'US office furniture brand',
    challenge: 'Client needed custom-designed standing desks with specific materials and finishes. Previous supplier had quality inconsistencies and missed deadlines.',
    solution: 'We sourced 5 furniture manufacturers in Foshan, conducted factory audits, and managed the entire sample development process. Weekly production follow-ups ensured timeline adherence.',
    result: 'On-time delivery of 2,000 units. Quality pass rate of 99.2%. Client expanded to 3 additional product lines with the same factory.',
    stats: { savings: '25%', defects: '0.8%', timeline: '60 days' },
    titleId: 'cs-furniture-title',
    descId: 'cs-furniture-desc',
    imgId: 'cs-furniture-img-f7g8h9',
  },
  {
    id: 'textiles-au',
    title: 'Workwear Sourcing for Australian Importer',
    category: 'Textiles',
    client: 'Australian workwear importer',
    challenge: 'Client experienced quality issues with their existing supplier — inconsistent stitching, wrong fabric weights, and late deliveries affecting their retail commitments.',
    solution: 'We audited the existing supplier, identified root causes, and sourced 2 alternative factories. Implemented a strict QC protocol with in-line inspections and pre-shipment checks.',
    result: 'Quality pass rate improved from 82% to 99%. Delivery reliability improved to 100% on-time. Annual savings of $45,000.',
    stats: { savings: '$45K/yr', defects: '1%', timeline: '30 days' },
    titleId: 'cs-textiles-title',
    descId: 'cs-textiles-desc',
    imgId: 'cs-textiles-img-i1j2k3',
  },
  {
    id: 'packaging-ca',
    title: 'Eco Packaging for Canadian E-commerce',
    category: 'Packaging',
    client: 'Canadian e-commerce brand',
    challenge: 'Client needed sustainable, custom-printed packaging at scale. Required FSC certification and specific material compositions for their eco-friendly brand positioning.',
    solution: 'We identified packaging manufacturers with FSC certification in Dongguan. Managed material testing, print proofing, and structural engineering for optimal shipping protection.',
    result: 'Achieved 30% cost reduction vs. domestic suppliers. Full FSC compliance. Packaging redesign reduced shipping damage by 60%.',
    stats: { savings: '30%', defects: '0.5%', timeline: '35 days' },
    titleId: 'cs-packaging-title',
    descId: 'cs-packaging-desc',
    imgId: 'cs-packaging-img-l4m5n6',
  },
  {
    id: 'auto-de',
    title: 'Auto Parts for German Aftermarket',
    category: 'Auto Parts',
    client: 'German automotive aftermarket company',
    challenge: 'Client needed precision-machined brake components meeting strict DIN standards. Required IATF 16949 certified supplier with consistent batch quality.',
    solution: 'We sourced IATF-certified manufacturers in Ningbo, arranged CMM measurement reports, and implemented batch-level traceability. Conducted 100% dimensional inspection on first 3 shipments.',
    result: 'All batches passed incoming inspection. 35% cost advantage over European suppliers. Established long-term supply agreement.',
    stats: { savings: '35%', defects: '0%', timeline: '90 days' },
    titleId: 'cs-auto-title',
    descId: 'cs-auto-desc',
    imgId: 'cs-auto-img-o7p8q9',
  },
]

const CaseStudies = () => {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <div ref={containerRef}>
      {/* Hero */}
      <section className="bg-primary py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl md:text-5xl font-bold text-white mb-4">Case Studies</h1>
          <p className="text-lg text-white/80 max-w-2xl mx-auto">
            Real sourcing projects with measurable results. See how we have helped buyers worldwide.
          </p>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {caseStudies.map((cs, idx) => (
              <div key={cs.id} className="bg-neutral-50 rounded-xl border border-neutral-200 overflow-hidden">
                <div className="grid grid-cols-1 lg:grid-cols-2">
                  <div className={`aspect-video lg:aspect-auto ${idx % 2 === 1 ? 'lg:order-2' : ''}`}>
                    <img
                      data-strk-img-id={cs.imgId}
                      data-strk-img={`[${cs.descId}] [${cs.titleId}]`}
                      data-strk-img-ratio="3x2"
                      data-strk-img-width="800"
                      src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                      alt={cs.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className={`p-6 md:p-8 ${idx % 2 === 1 ? 'lg:order-1' : ''}`}>
                    <span className="text-xs font-semibold text-primary uppercase tracking-wide">{cs.category}</span>
                    <h2 id={cs.titleId} className="text-xl md:text-2xl font-bold text-neutral-900 mt-2 mb-1">{cs.title}</h2>
                    <p className="text-sm text-neutral-500 mb-4">{cs.client}</p>

                    <div className="space-y-3 mb-6">
                      <div>
                        <h4 className="text-sm font-semibold text-neutral-900">Challenge</h4>
                        <p id={cs.descId} className="text-sm text-neutral-600">{cs.challenge}</p>
                      </div>
                      <div>
                        <h4 className="text-sm font-semibold text-neutral-900">Solution</h4>
                        <p className="text-sm text-neutral-600">{cs.solution}</p>
                      </div>
                      <div>
                        <h4 className="text-sm font-semibold text-neutral-900">Result</h4>
                        <p className="text-sm text-neutral-600">{cs.result}</p>
                      </div>
                    </div>

                    <div className="grid grid-cols-3 gap-3">
                      <div className="bg-white rounded-lg p-3 text-center border border-neutral-200">
                        <div className="text-lg font-bold text-primary">{cs.stats.savings}</div>
                        <div className="text-xs text-neutral-500">Cost Savings</div>
                      </div>
                      <div className="bg-white rounded-lg p-3 text-center border border-neutral-200">
                        <div className="text-lg font-bold text-primary">{cs.stats.defects}</div>
                        <div className="text-xs text-neutral-500">Defect Rate</div>
                      </div>
                      <div className="bg-white rounded-lg p-3 text-center border border-neutral-200">
                        <div className="text-lg font-bold text-primary">{cs.stats.timeline}</div>
                        <div className="text-xs text-neutral-500">Lead Time</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-20 bg-neutral-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-neutral-900 mb-4">Want Similar Results?</h2>
          <p className="text-neutral-600 mb-8 max-w-xl mx-auto">
            Every sourcing project is unique. Tell us about yours and we will show you how we can help.
          </p>
          <CTAButton />
        </div>
      </section>
    </div>
  )
}

export default CaseStudies
