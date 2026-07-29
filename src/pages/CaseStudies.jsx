import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import { ArrowRight, CheckCircle2 } from 'lucide-react'

const caseStudies = [
  {
    id: 'case-1',
    title: 'Custom Furniture for European Retailer',
    category: 'Furniture',
    client: 'Mid-size furniture retailer, Germany',
    challenge: 'The client needed to source custom solid wood dining tables and chairs at competitive prices while maintaining strict EU quality and safety standards.',
    solution: 'We identified 8 potential factories, audited 4, and selected 2 for sampling. After 3 rounds of sample refinement, we placed a trial order of 200 sets with full production monitoring.',
    results: ['35% cost reduction vs. previous European supplier', 'Zero defects on pre-shipment inspection', 'Delivered 2 weeks ahead of schedule', 'Ongoing partnership with quarterly orders'],
    imgId: 'case-study-1-img-a1b2c3',
  },
  {
    id: 'case-2',
    title: 'Consumer Electronics for US Brand',
    category: 'Electronics',
    client: 'D2C electronics brand, United States',
    challenge: 'A growing US brand needed to find a reliable OEM factory for Bluetooth speakers with custom branding, packaging, and FCC certification.',
    solution: 'We sourced 5 factories specializing in audio electronics, conducted factory audits, and managed the entire certification process. Production of 50,000 units was monitored weekly.',
    results: ['3 verified factories shortlisted in 2 weeks', '50,000 units delivered on time', 'FCC and CE certification obtained', 'Defect rate below 0.5%'],
    imgId: 'case-study-2-img-d4e5f6',
  },
  {
    id: 'case-3',
    title: 'Private Label Apparel for Australian Market',
    category: 'Textiles',
    client: 'Activewear startup, Australia',
    challenge: 'A new activewear brand needed a factory capable of producing high-quality yoga pants and sports bras with custom fabrics and sustainable materials.',
    solution: 'We found factories with OEKO-TEX certification and experience in performance fabrics. Managed 5 sample iterations and coordinated production of the first 3,000-piece collection.',
    results: ['Full collection delivered in 8 weeks', 'Sustainable fabric sourcing achieved', 'Cost 40% below local manufacturing quotes', 'Repeat orders placed within 3 months'],
    imgId: 'case-study-3-img-g7h8i9',
  },
  {
    id: 'case-4',
    title: 'Industrial Packaging for UK Distributor',
    category: 'Packaging',
    client: 'Packaging distributor, United Kingdom',
    challenge: 'The client needed a reliable source for custom corrugated boxes and printed packaging at scale, with consistent quality across large monthly orders.',
    solution: 'We audited 6 packaging factories in Guangdong, selected 2 primary suppliers, and set up a quality control protocol for ongoing monthly shipments.',
    results: ['Monthly supply of 100,000+ units established', 'Quality consistency maintained over 12 months', '28% cost savings vs. previous supplier', 'Lead time reduced from 6 weeks to 3 weeks'],
    imgId: 'case-study-4-img-j0k1l2',
  },
]

export default function CaseStudies() {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <div ref={containerRef}>
      <section className="bg-brand-navy py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 id="cases-page-title" className="text-3xl md:text-5xl font-bold text-white tracking-tight mb-4">
            Case Studies
          </h1>
          <p id="cases-page-subtitle" className="text-lg text-slate-300 max-w-2xl">
            Real sourcing projects, real results. See how we've helped businesses around the world source successfully from China.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {caseStudies.map((cs, idx) => {
              const isEven = idx % 2 === 0
              return (
                <div key={cs.id} className="bg-white rounded-xl shadow-sm border border-slate-100 overflow-hidden">
                  <div className={`flex flex-col ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'}`}>
                    <div className="w-full lg:w-2/5 h-64 lg:h-auto">
                      <img
                        data-strk-img-id={cs.imgId}
                        data-strk-img={`[${cs.id}-title] [cases-page-title]`}
                        data-strk-img-ratio="3x2"
                        data-strk-img-width="800"
                        src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                        alt={cs.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="w-full lg:w-3/5 p-6 md:p-10">
                      <span className="text-xs font-medium text-brand-blue bg-blue-50 px-2 py-1 rounded">
                        {cs.category}
                      </span>
                      <h2 id={`${cs.id}-title`} className="text-2xl font-bold text-brand-navy mt-3 mb-2">
                        {cs.title}
                      </h2>
                      <p className="text-sm text-slate-500 mb-4">{cs.client}</p>

                      <div className="space-y-4">
                        <div>
                          <h4 className="text-sm font-semibold text-brand-navy mb-1">Challenge</h4>
                          <p className="text-sm text-slate-600">{cs.challenge}</p>
                        </div>
                        <div>
                          <h4 className="text-sm font-semibold text-brand-navy mb-1">Our Solution</h4>
                          <p className="text-sm text-slate-600">{cs.solution}</p>
                        </div>
                        <div>
                          <h4 className="text-sm font-semibold text-brand-navy mb-2">Results</h4>
                          <ul className="space-y-1.5">
                            {cs.results.map((r) => (
                              <li key={r} className="flex items-start gap-2 text-sm text-slate-700">
                                <CheckCircle2 className="w-4 h-4 text-brand-green mt-0.5 flex-shrink-0" />
                                {r}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20 bg-brand-gray">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-brand-navy mb-4">Want Similar Results?</h2>
          <p className="text-slate-600 mb-8">Tell us about your sourcing project and we'll show you how we can help.</p>
          <Link
            to="/contact"
            className="inline-flex items-center bg-brand-blue text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition no-underline"
          >
            Get a Free Sourcing Quote <ArrowRight className="w-5 h-5 ml-2" />
          </Link>
        </div>
      </section>
    </div>
  )
}
