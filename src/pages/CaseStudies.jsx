import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import { ArrowRight, CheckCircle, TrendingUp } from 'lucide-react'

const caseStudies = [
  {
    id: 'case-1',
    title: 'Electronics Retailer Reduces Costs by 22%',
    client: 'Mid-size electronics retailer, USA',
    challenge: 'The client was paying premium prices through a trading company and had no visibility into actual factory costs or production quality.',
    solution: 'We identified 4 direct manufacturers, conducted factory audits, negotiated pricing, and set up a quality inspection process.',
    results: ['22% reduction in unit cost', 'Direct factory relationship established', 'Zero quality issues in first 3 shipments', 'Lead time reduced from 60 to 42 days'],
    category: 'Electronics',
    titleId: 'cs-1-title',
    descId: 'cs-1-desc',
    imgId: 'cs-1-img-a1b2c3',
  },
  {
    id: 'case-2',
    title: 'Furniture Brand Achieves Zero-Defect Delivery',
    client: 'Premium furniture brand, Germany',
    challenge: 'Previous supplier delivered goods with visible defects and inconsistent finishes. The client needed a reliable partner with strict QC.',
    solution: 'We sourced 3 alternative factories, conducted detailed audits focusing on finishing quality, and implemented a 3-stage inspection process.',
    results: ['Zero defects on first shipment', 'Consistent finish quality across batches', 'Factory passed SA8000 social audit', 'Long-term supply agreement signed'],
    category: 'Furniture',
    titleId: 'cs-2-title',
    descId: 'cs-2-desc',
    imgId: 'cs-2-img-d4e5f6',
  },
  {
    id: 'case-3',
    title: 'Apparel Startup: Concept to Delivery in 45 Days',
    client: 'Fashion startup, Australia',
    challenge: 'First-time importer with no supplier contacts, tight budget, and an aggressive launch timeline of under 60 days.',
    solution: 'We fast-tracked supplier matching, managed sample development in parallel with multiple factories, and coordinated air freight for the launch batch.',
    results: ['45-day turnaround from inquiry to delivery', 'MOQ negotiated down from 1000 to 300 units', 'Product quality matched approved samples', 'Successful product launch on schedule'],
    category: 'Textiles',
    titleId: 'cs-3-title',
    descId: 'cs-3-desc',
    imgId: 'cs-3-img-g7h8i9',
  },
  {
    id: 'case-4',
    title: 'Auto Parts Supplier Verified for OEM Quality',
    client: 'Automotive distributor, UK',
    challenge: 'Needed to find a China-based manufacturer capable of producing precision auto parts meeting ISO/TS 16949 standards.',
    solution: 'We conducted technical audits of 6 factories, verified certifications, arranged test samples for lab testing, and managed trial production.',
    results: ['ISO/TS 16949 certified supplier identified', 'Parts passed independent lab testing', '15% cost saving vs. previous European supplier', 'Ongoing monthly orders established'],
    category: 'Machinery',
    titleId: 'cs-4-title',
    descId: 'cs-4-desc',
    imgId: 'cs-4-img-j1k2l3',
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
          <div className="max-w-3xl">
            <h1 className="text-3xl md:text-5xl font-bold text-white tracking-tight">
              Case Studies
            </h1>
            <p className="mt-4 text-lg text-slate-300 leading-relaxed">
              Real sourcing projects, real results. See how we've helped international buyers source successfully from China.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {caseStudies.map((cs, index) => (
              <div key={cs.id} className="bg-white rounded-xl border border-brand-border overflow-hidden hover:shadow-lg transition-shadow">
                <div className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'}`}>
                  <div className="w-full lg:w-2/5">
                    <img
                      alt={cs.title}
                      data-strk-img-id={cs.imgId}
                      data-strk-img={`[${cs.descId}] [${cs.titleId}]`}
                      data-strk-img-ratio="4x3"
                      data-strk-img-width="600"
                      src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 4 3'/%3E"
                      className="w-full h-full min-h-[240px] object-cover"
                    />
                  </div>
                  <div className="w-full lg:w-3/5 p-6 md:p-8 lg:p-10">
                    <span className="text-xs font-medium text-brand-blue bg-blue-50 px-2.5 py-1 rounded">{cs.category}</span>
                    <h2 id={cs.titleId} className="mt-3 text-xl md:text-2xl font-bold text-brand-navy">{cs.title}</h2>
                    <p className="mt-1 text-sm text-slate-500">{cs.client}</p>

                    <div className="mt-5 space-y-3">
                      <div>
                        <h4 className="text-sm font-semibold text-brand-navy">Challenge</h4>
                        <p id={cs.descId} className="text-sm text-slate-600 mt-1">{cs.challenge}</p>
                      </div>
                      <div>
                        <h4 className="text-sm font-semibold text-brand-navy">Our Solution</h4>
                        <p className="text-sm text-slate-600 mt-1">{cs.solution}</p>
                      </div>
                    </div>

                    <div className="mt-5">
                      <h4 className="text-sm font-semibold text-brand-navy mb-2">Results</h4>
                      <ul className="space-y-1.5">
                        {cs.results.map((result, i) => (
                          <li key={i} className="flex items-center gap-2 text-sm text-slate-700">
                            <TrendingUp className="w-4 h-4 text-green-500 flex-shrink-0" />
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

      <section className="py-16 md:py-20 bg-brand-blue">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight">
            Want Similar Results for Your Business?
          </h2>
          <p className="mt-4 text-lg text-blue-100">
            Every sourcing project is unique. Let us create a tailored plan for yours.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center mt-8 bg-white text-brand-blue px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-50 transition-colors"
          >
            Get a Free Sourcing Quote <ArrowRight className="ml-2 w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  )
}
