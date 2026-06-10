import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import { ArrowRight, CheckCircle } from 'lucide-react'

const caseStudies = [
  {
    id: 'led-lighting-us',
    title: 'LED Panel Lights for US Retailer',
    category: 'Electronics',
    client: 'Mid-size lighting distributor, California',
    challenge: 'Previous supplier had inconsistent color temperature and frequent DOA (dead on arrival) units. Client needed a reliable manufacturer with UL certification.',
    solution: 'Identified 4 LED manufacturers in Shenzhen, conducted factory audits, managed sample testing, and supervised 3 production runs with pre-shipment inspection.',
    results: ['32% cost reduction vs previous supplier', 'Zero DOA units across 15,000 pieces', 'UL and DLC certified products', 'Consistent 4000K color temperature'],
  },
  {
    id: 'office-furniture-eu',
    title: 'Office Furniture for EU Distributor',
    category: 'Furniture',
    client: 'Office furniture wholesaler, Germany',
    challenge: 'Needed FSC-certified office desks and chairs meeting EU safety standards. Previous agent failed to verify certifications properly.',
    solution: 'Found FSC-certified factory in Foshan with EN 527 compliance. Managed material sourcing, production monitoring, and container loading inspection for 40ft containers.',
    results: ['2,000 units delivered on schedule', 'Valid FSC and EN 527 certifications', 'Passed German TÜV inspection', '18% savings on landed cost'],
  },
  {
    id: 'workwear-australia',
    title: 'Custom Workwear for Australian Brand',
    category: 'Textiles',
    client: 'Workwear brand, Melbourne',
    challenge: 'Long lead times (60+ days) and inconsistent sizing from current supplier. Needed a factory that could handle custom fabrics and embroidery.',
    solution: 'Sourced specialized workwear factory in Dongguan with in-house fabric treatment. Managed fabric development, size grading, and bulk production with weekly updates.',
    results: ['Lead time reduced from 60 to 35 days', 'Consistent sizing across all batches', 'Custom FR-treated fabric developed', 'Ongoing reorder management'],
  },
  {
    id: 'pet-products-uk',
    title: 'Pet Products for UK E-commerce Brand',
    category: 'Consumer Goods',
    client: 'Online pet supplies brand, London',
    challenge: 'Launching a new product line of pet beds and accessories. No existing supplier relationships in China. Needed products that meet UK safety standards.',
    solution: 'Sourced 3 factories in Nantong (pet bed specialist region). Coordinated material testing for REACH compliance, managed sampling, and arranged consolidated shipment.',
    results: ['5 SKUs launched within 8 weeks', 'REACH and UKCA compliant', 'Consolidated 3 suppliers into 1 shipment', '40% margin improvement vs UK manufacturing'],
  },
  {
    id: 'auto-parts-canada',
    title: 'CNC Auto Parts for Canadian Manufacturer',
    category: 'Machinery',
    client: 'Automotive parts manufacturer, Ontario',
    challenge: 'Needed precision CNC-machined aluminum components with tight tolerances (±0.02mm). Previous Chinese supplier had high rejection rates.',
    solution: 'Identified ISO 9001 certified CNC shops in Ningbo. Conducted capability audits, managed first article inspection, and implemented ongoing quality monitoring.',
    results: ['Rejection rate dropped from 8% to 0.5%', 'ISO 9001:2015 certified supplier', 'Consistent ±0.02mm tolerance achieved', 'Monthly production of 10,000 units'],
  },
  {
    id: 'cosmetics-middle-east',
    title: 'Private Label Cosmetics for Middle East',
    category: 'Beauty',
    client: 'Beauty brand, Dubai',
    challenge: 'Launching private label skincare line for GCC market. Needed GMP-certified manufacturer with halal certification and Arabic packaging capability.',
    solution: 'Found GMP and ISO 22716 certified cosmetics factory in Guangzhou with halal certification. Managed formula development, stability testing, and packaging design.',
    results: ['12 SKU product line developed', 'Halal and GMP certified', 'Arabic + English packaging', 'First order delivered in 10 weeks'],
  },
]

export default function CaseStudies() {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <div ref={containerRef}>
      <section className="bg-primary py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 id="casestudies-page-title" className="text-3xl md:text-5xl font-bold text-white tracking-tight mb-4">
              Case Studies
            </h1>
            <p id="casestudies-page-subtitle" className="text-white/70 text-lg leading-relaxed">
              Real sourcing projects we've completed for buyers around the world. See how we solve common China sourcing challenges.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-12">
            {caseStudies.map((cs) => (
              <div key={cs.id} className="rounded-xl border border-neutral-200 overflow-hidden hover:shadow-md transition-shadow">
                <div className="grid grid-cols-1 lg:grid-cols-5">
                  <div className="lg:col-span-2">
                    <div className="aspect-[4/3] lg:h-full relative">
                      <img
                        data-strk-img-id={`cs-page-${cs.id}-img-p1q2`}
                        data-strk-img={`[cs-page-${cs.id}-title] [casestudies-page-title]`}
                        data-strk-img-ratio="4x3"
                        data-strk-img-width="600"
                        src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                        alt={cs.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                  <div className="lg:col-span-3 p-6 md:p-8">
                    <div className="flex items-center gap-3 mb-3">
                      <span className="text-xs font-medium text-accent bg-accent/10 px-2.5 py-1 rounded-full">{cs.category}</span>
                      <span className="text-xs text-neutral-500">{cs.client}</span>
                    </div>
                    <h2 id={`cs-page-${cs.id}-title`} className="text-xl md:text-2xl font-bold text-neutral-800 mb-4">{cs.title}</h2>

                    <div className="space-y-3 mb-5">
                      <div>
                        <span className="text-xs font-semibold text-neutral-500 uppercase tracking-wider">Challenge</span>
                        <p className="text-neutral-600 text-sm mt-1">{cs.challenge}</p>
                      </div>
                      <div>
                        <span className="text-xs font-semibold text-neutral-500 uppercase tracking-wider">Our Solution</span>
                        <p className="text-neutral-600 text-sm mt-1">{cs.solution}</p>
                      </div>
                    </div>

                    <div className="bg-green-50 rounded-lg p-4">
                      <span className="text-xs font-semibold text-green-800 uppercase tracking-wider">Results</span>
                      <ul className="mt-2 space-y-1.5">
                        {cs.results.map((result, idx) => (
                          <li key={idx} className="flex items-center gap-2 text-sm text-green-800">
                            <CheckCircle className="w-4 h-4 text-green-600 shrink-0" />
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

      <section className="py-16 md:py-20 bg-primary">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Want Similar Results?</h2>
          <p className="text-white/70 text-lg mb-8">Tell us about your sourcing project and we'll show you how we can help.</p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 bg-accent hover:bg-accent-hover text-white font-semibold px-8 py-4 rounded-lg transition-colors"
          >
            Get a Free Sourcing Quote <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  )
}
