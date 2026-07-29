import { useEffect, useRef } from 'react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import { CheckCircle } from 'lucide-react'
import PageHero from '@/components/shared/PageHero'
import SectionCTA from '@/components/shared/SectionCTA'

const caseStudies = [
  {
    id: 'electronics-brand',
    title: 'Consumer Electronics for US E-commerce Brand',
    client: 'US-based Amazon seller',
    challenge: 'The client was paying too much for Bluetooth speakers from their existing supplier and experiencing a 15% defect rate on incoming shipments.',
    solution: 'We sourced 4 alternative factories, conducted on-site audits, negotiated pricing, and implemented pre-shipment inspections with AQL 2.5 standards.',
    results: ['22% reduction in unit cost', 'Defect rate dropped from 15% to under 2%', 'Consistent delivery within agreed timelines', 'Long-term supplier relationship established'],
    titleId: 'cs-electronics-title',
    descId: 'cs-electronics-desc',
    imgId: 'cs-electronics-img-h3j5k7',
  },
  {
    id: 'furniture-retailer',
    title: 'Custom Furniture for Australian Retailer',
    client: 'Australian furniture retailer',
    challenge: 'The client needed a reliable manufacturer for custom-designed wooden furniture but had no contacts in China and was concerned about quality consistency across large orders.',
    solution: 'We identified 6 potential manufacturers in Foshan, visited 4 factories, managed sample production through 3 revisions, and supervised loading of 3 containers.',
    results: ['Found manufacturer meeting exact design specs', '3 full container shipments delivered on time', 'Zero damage claims on arrival', 'Ongoing quarterly orders established'],
    titleId: 'cs-furniture-title',
    descId: 'cs-furniture-desc',
    imgId: 'cs-furniture-img-l8m0n2',
  },
  {
    id: 'eco-packaging',
    title: 'Sustainable Packaging for European Brand',
    client: 'European cosmetics brand',
    challenge: 'The client needed FSC-certified, biodegradable packaging that met EU sustainability standards, but could not find certified suppliers through online platforms.',
    solution: 'We leveraged our network to identify certified sustainable packaging manufacturers, verified their certifications on-site, and coordinated sample production within 2 weeks.',
    results: ['Found 3 FSC-certified suppliers within 10 days', 'Packaging met all EU sustainability requirements', '18% cost saving vs. European suppliers', 'Scalable supply for growing product line'],
    titleId: 'cs-packaging-title',
    descId: 'cs-packaging-desc',
    imgId: 'cs-packaging-img-o4p6q8',
  },
  {
    id: 'industrial-parts',
    title: 'Industrial Components for German Manufacturer',
    client: 'German industrial equipment manufacturer',
    challenge: 'The client needed precision CNC-machined parts with tight tolerances (±0.02mm) but their previous Chinese supplier could not maintain consistency across batches.',
    solution: 'We audited 8 CNC machining factories, tested sample batches from 3 finalists, implemented batch-level inspection protocols, and set up a quality agreement with penalty clauses.',
    results: ['100% of parts within tolerance specifications', 'Batch rejection rate reduced to 0.3%', '30% cost reduction vs. domestic sourcing', 'Monthly supply agreement with guaranteed capacity'],
    titleId: 'cs-industrial-title',
    descId: 'cs-industrial-desc',
    imgId: 'cs-industrial-img-r1s3t5',
  },
]

export default function CaseStudies() {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <div ref={containerRef}>
      <PageHero
        title="Case Studies"
        subtitle="Real sourcing projects we have managed for clients around the world. These examples illustrate our process and the results we deliver."
      />

      <section className="bg-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {caseStudies.map((cs, idx) => (
              <div key={cs.id} className="bg-brand-light rounded-2xl overflow-hidden border border-brand-border">
                <div className={`flex flex-col ${idx % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'}`}>
                  <div className="w-full lg:w-2/5">
                    <img
                      alt={cs.title}
                      data-strk-img-id={cs.imgId}
                      data-strk-img={`[${cs.descId}] [${cs.titleId}]`}
                      data-strk-img-ratio="4x3"
                      data-strk-img-width="600"
                      src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 4 3'/%3E"
                      className="w-full h-full min-h-[250px] object-cover"
                    />
                  </div>
                  <div className="w-full lg:w-3/5 p-6 md:p-10">
                    <div className="text-sm font-medium text-brand-orange mb-2">{cs.client}</div>
                    <h2 id={cs.titleId} className="text-xl md:text-2xl font-bold text-brand-dark mb-4">{cs.title}</h2>
                    
                    <div className="mb-4">
                      <h4 className="text-sm font-semibold text-brand-dark mb-1">Challenge</h4>
                      <p id={cs.descId} className="text-brand-gray text-sm leading-relaxed">{cs.challenge}</p>
                    </div>

                    <div className="mb-4">
                      <h4 className="text-sm font-semibold text-brand-dark mb-1">Our Solution</h4>
                      <p className="text-brand-gray text-sm leading-relaxed">{cs.solution}</p>
                    </div>

                    <div>
                      <h4 className="text-sm font-semibold text-brand-dark mb-2">Results</h4>
                      <ul className="space-y-1.5">
                        {cs.results.map((result) => (
                          <li key={result} className="flex items-center gap-2 text-sm text-brand-dark">
                            <CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0" />
                            {result}
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

      <SectionCTA
        title="Want Similar Results for Your Business?"
        subtitle="Every sourcing project is unique. Tell us about yours and we will show you how we can help."
      />
    </div>
  )
}
