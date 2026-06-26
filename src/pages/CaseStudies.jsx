import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, TrendingDown, Clock, ThumbsUp } from 'lucide-react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'

const cases = [
  {
    id: 'led-lighting-de',
    title: 'LED Panel Lighting for European Distributor',
    client: 'Mid-size lighting distributor, Germany',
    problem: 'The client needed reliable manufacturers for CE-certified LED panel lights. They received inconsistent samples and pricing from suppliers found on B2B platforms. Some suppliers were actually trading companies, not real factories.',
    solution: 'We audited 8 LED lighting factories in Shenzhen, Zhongshan, and Ningbo. Verified certifications, tested samples in-house, and negotiated direct factory pricing. Established a supply chain with 3 specialized factories.',
    results: [
      'Unit cost reduced by 22% compared to previous supplier',
      '3 stable factory relationships established',
      'CE certification confirmed for all products',
      'Consistent quality across all shipments',
    ],
    imgId: 'case-led-lighting-bg-e9f0a1',
  },
  {
    id: 'furniture-us',
    title: 'Custom Furniture for US Retail Chain',
    client: 'Regional furniture retailer, United States',
    problem: 'The client had an existing supplier but faced chronic production delays (40% late shipments) and inconsistent quality. Communication was poor — they only discovered issues when containers arrived in the US.',
    solution: 'We sourced and audited 5 furniture factories in Foshan and Dongguan. Selected 2 replacement suppliers. Implemented weekly QC inspections during production with photo reports sent to the client.',
    results: [
      'On-time delivery improved from 60% to 97%',
      'Defect rate reduced from 8% to under 1%',
      'Transparent production tracking with weekly reports',
      '30% capacity increase for seasonal demand spikes',
    ],
    imgId: 'case-furniture-bg-f2g3b4',
  },
  {
    id: 'textile-au',
    title: 'Performance Textiles for Australian Brand',
    client: 'Activewear brand, Australia',
    problem: 'The brand needed a factory capable of producing custom moisture-wicking fabric blends. Their minimum order quantity (MOQ) was relatively small, and larger textile mills were unwilling to work with them.',
    solution: 'We identified 3 mid-size textile mills in Shaoxing (Zhejiang) specializing in performance fabrics. Negotiated a trial order with reduced MOQ. Managed the entire sampling and color-matching process.',
    results: [
      '15% lower MOQ negotiated for first production run',
      'Fabric quality exceeded client specifications',
      'Color matching accuracy of 98% on first submission',
      'Established long-term production schedule',
    ],
    imgId: 'case-textile-bg-h4i5c6',
  },
  {
    id: 'electronics-uk',
    title: 'Smart Home Devices for UK Brand',
    client: 'Consumer electronics brand, United Kingdom',
    problem: 'The client had a complex smart home product requiring CE, RoHS, and UKCA compliance. Their previous factory delivered products with inconsistent firmware and poor soldering quality.',
    solution: 'We sourced EMS (Electronics Manufacturing Services) factories in Shenzhen with ISO 9001 and ISO 14001 certifications. Coordinated with a third-party testing lab for compliance verification.',
    results: [
      'CE, RoHS, and UKCA certifications achieved',
      'Soldering defect rate below 0.5% (IPC-A-610 Class 2)',
      'Firmware flashing process standardized across production',
      '40% faster time-to-market for new product iterations',
    ],
    imgId: 'case-electronics-bg-d7e8f9',
  },
  {
    id: 'packaging-ca',
    title: 'Custom Packaging for Canadian Food Brand',
    client: 'Organic food company, Canada',
    problem: 'The brand needed food-grade custom packaging with specific barrier properties. They were overwhelmed by packaging options and unsure which Chinese suppliers could meet FDA and CFIA requirements.',
    solution: 'We identified 4 FDA-compliant packaging manufacturers in Dongguan and Shanghai. Coordinated sample testing for barrier properties and food safety. Negotiated competitive pricing for annual volumes.',
    results: [
      'FDA and CFIA compliance confirmed for all packaging',
      '20% cost savings vs. domestic packaging suppliers',
      'Consistent quality across all production batches',
      'Efficient reorder process established',
    ],
    imgId: 'case-packaging-bg-g0h1i2',
  },
  {
    id: 'hardware-nz',
    title: 'Construction Hardware for New Zealand Importer',
    client: 'Building supplies importer, New Zealand',
    problem: 'The client\'s existing supplier was inconsistent with material grades (some products used sub-standard steel). They needed a reliable source for construction fasteners and brackets that met AS/NZS standards.',
    solution: 'We audited 6 hardware factories in Yongnian (Hebei) — China\'s fastener manufacturing hub. Implemented material testing protocol with a third-party lab for every production batch.',
    results: [
      '100% material grade compliance across all shipments',
      'AS/NZS standards met for all products',
      '15% overall cost reduction vs. previous supplier',
      'Quarterly factory re-audits to maintain standards',
    ],
    imgId: 'case-hardware-bg-j3k4l5',
  },
]

export default function CaseStudies() {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <div ref={containerRef}>
      <section className="bg-navy py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-sm font-semibold text-accent uppercase tracking-wider mb-4">Case Studies</p>
          <h1 className="text-3xl md:text-5xl font-extrabold text-white mb-4">
            Real Results for Real Buyers
          </h1>
          <p className="text-lg text-gray-300 max-w-2xl">
            Explore how we have helped businesses across industries and continents
            source successfully from China.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {cases.map((c) => (
              <article key={c.id} className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start">
                <div>
                  <div
                    data-strk-bg-id={c.imgId}
                    data-strk-bg={`[case-page-title-${c.id}] china factory case study`}
                    data-strk-bg-ratio="4x3"
                    data-strk-bg-width="800"
                    className="rounded-2xl shadow-lg overflow-hidden"
                    style={{ paddingTop: '75%', backgroundSize: 'cover', backgroundPosition: 'center' }}
                  />
                </div>
                <div>
                  <h2 id={`case-page-title-${c.id}`} className="text-2xl font-bold text-navy mb-3">{c.title}</h2>
                  <p className="text-sm text-accent font-medium mb-6">{c.client}</p>

                  <div className="space-y-5">
                    <div>
                      <h3 className="text-sm font-semibold text-red-500 uppercase tracking-wider mb-2 flex items-center gap-2">
                        <TrendingDown className="w-4 h-4" /> Challenge
                      </h3>
                      <p className="text-gray-600 text-sm leading-relaxed">{c.problem}</p>
                    </div>

                    <div>
                      <h3 className="text-sm font-semibold text-navy uppercase tracking-wider mb-2 flex items-center gap-2">
                        <ThumbsUp className="w-4 h-4" /> Our Approach
                      </h3>
                      <p className="text-gray-600 text-sm leading-relaxed">{c.solution}</p>
                    </div>

                    <div>
                      <h3 className="text-sm font-semibold text-success uppercase tracking-wider mb-2 flex items-center gap-2">
                        <Clock className="w-4 h-4" /> Results
                      </h3>
                      <ul className="space-y-2">
                        {c.results.map((r) => (
                          <li key={r} className="flex items-start gap-2 text-sm text-gray-700">
                            <span className="w-1.5 h-1.5 bg-success rounded-full shrink-0 mt-1.5" />
                            {r}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20 bg-navy">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Ready to become our next case study?</h2>
          <p className="text-gray-300 mb-8">Contact us today to discuss your sourcing needs and let us help you achieve similar results.</p>
          <Link to="/contact" className="inline-flex items-center gap-2 px-8 py-3.5 bg-accent text-white font-semibold rounded-lg hover:bg-accent-hover transition-colors shadow-md">
            Get a Free Quote
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  )
}