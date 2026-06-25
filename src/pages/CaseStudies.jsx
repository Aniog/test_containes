import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import { ArrowRight, TrendingDown, Clock, ShieldCheck, Star } from 'lucide-react'

const caseStudies = [
  {
    id: 'electronics-usa',
    title: 'Consumer Electronics Brand',
    location: 'United States',
    industry: 'Electronics',
    challenge: 'A mid-size electronics brand was experiencing inconsistent quality across their product line and paying above-market prices due to reliance on a single trading company.',
    solution: 'We conducted a full supplier audit, identified 3 direct factory alternatives, negotiated better pricing, and implemented a QC protocol with inspections at each production stage.',
    results: [
      { icon: TrendingDown, text: '22% reduction in unit cost' },
      { icon: ShieldCheck, text: 'Defect rate dropped from 8% to under 1%' },
      { icon: Clock, text: 'Lead time reduced by 2 weeks' },
    ],
    imgId: 'case-electronics-img-v1w2x3',
    titleId: 'case-electronics-title',
    descId: 'case-electronics-desc',
  },
  {
    id: 'furniture-uk',
    title: 'Custom Furniture Retailer',
    location: 'United Kingdom',
    industry: 'Home & Furniture',
    challenge: 'A growing furniture retailer needed to establish a reliable supply chain for custom-designed pieces but had no experience working directly with Chinese factories.',
    solution: 'We sourced and verified 5 furniture manufacturers, managed the sampling process for 12 SKUs, set up production monitoring, and coordinated container shipping to the UK.',
    results: [
      { icon: Clock, text: 'Lead time cut from 12 to 6 weeks' },
      { icon: TrendingDown, text: '35% cost savings vs. previous supplier' },
      { icon: ShieldCheck, text: 'Zero quality claims in first 6 months' },
    ],
    imgId: 'case-furniture-img-y4z5a6',
    titleId: 'case-furniture-title',
    descId: 'case-furniture-desc',
  },
  {
    id: 'apparel-australia',
    title: 'Sustainable Fashion Label',
    location: 'Australia',
    industry: 'Apparel & Textiles',
    challenge: 'A fashion startup needed to find suppliers offering sustainable fabrics (organic cotton, recycled polyester) with GOTS and GRS certifications for their first production run.',
    solution: 'We identified certified fabric mills, verified their sustainability credentials on-site, managed sampling of 8 fabric types, and oversaw a 10,000-unit first production order.',
    results: [
      { icon: ShieldCheck, text: 'All suppliers GOTS/GRS certified' },
      { icon: Star, text: '10,000 units delivered on spec' },
      { icon: TrendingDown, text: '18% below initial budget estimate' },
    ],
    imgId: 'case-apparel-img-b7c8d9',
    titleId: 'case-apparel-title',
    descId: 'case-apparel-desc',
  },
  {
    id: 'industrial-germany',
    title: 'Industrial Parts Distributor',
    location: 'Germany',
    industry: 'Industrial & Hardware',
    challenge: 'A German distributor needed to diversify their supply base for precision CNC parts but was concerned about quality consistency and IP protection when working with new Chinese factories.',
    solution: 'We conducted technical factory audits focused on CNC capabilities, arranged NDA agreements, managed trial orders with dimensional inspection reports, and set up ongoing QC protocols.',
    results: [
      { icon: ShieldCheck, text: 'IP protection agreements in place' },
      { icon: Star, text: '99.7% dimensional accuracy achieved' },
      { icon: Clock, text: 'Reliable 4-week production cycles' },
    ],
    imgId: 'case-industrial-img-e1f2g3',
    titleId: 'case-industrial-title',
    descId: 'case-industrial-desc',
  },
]

export default function CaseStudiesPage() {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <div ref={containerRef}>
      {/* Hero */}
      <section className="bg-slate-900 py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-blue-400 font-semibold text-sm uppercase tracking-wider mb-3">Case Studies</p>
            <h1 className="text-4xl md:text-5xl font-bold text-white tracking-tight mb-6">
              Client Success Stories
            </h1>
            <p className="text-lg text-slate-300 leading-relaxed">
              Real results from real projects. See how we have helped businesses across industries source from China more effectively.
            </p>
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="bg-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-20">
            {caseStudies.map((study, index) => (
              <div key={study.id} className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-start ${index % 2 === 1 ? '' : ''}`}>
                <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                  <div className="flex items-center gap-3 mb-4">
                    <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-3 py-1 rounded-full">{study.industry}</span>
                    <span className="text-slate-500 text-sm">{study.location}</span>
                  </div>
                  <h2 id={study.titleId} className="text-2xl md:text-3xl font-bold text-slate-900 tracking-tight mb-4">{study.title}</h2>
                  <div className="space-y-4 mb-6">
                    <div>
                      <h3 className="text-sm font-semibold text-slate-900 uppercase tracking-wider mb-1">Challenge</h3>
                      <p id={study.descId} className="text-slate-600 text-sm leading-relaxed">{study.challenge}</p>
                    </div>
                    <div>
                      <h3 className="text-sm font-semibold text-slate-900 uppercase tracking-wider mb-1">Solution</h3>
                      <p className="text-slate-600 text-sm leading-relaxed">{study.solution}</p>
                    </div>
                  </div>
                  <div className="bg-slate-50 rounded-lg p-4">
                    <h3 className="text-sm font-semibold text-slate-900 uppercase tracking-wider mb-3">Results</h3>
                    <ul className="space-y-2">
                      {study.results.map((result) => (
                        <li key={result.text} className="flex items-center gap-3">
                          <result.icon className="w-5 h-5 text-blue-800 shrink-0" />
                          <span className="text-slate-700 text-sm font-medium">{result.text}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                <div className={index % 2 === 1 ? 'lg:order-1' : ''}>
                  <img
                    alt={study.title}
                    data-strk-img-id={study.imgId}
                    data-strk-img={`[${study.descId}] [${study.titleId}]`}
                    data-strk-img-ratio="4x3"
                    data-strk-img-width="600"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    className="w-full rounded-xl shadow-lg"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-blue-800 py-16 md:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight mb-4">Want Similar Results?</h2>
          <p className="text-blue-200 text-lg mb-8">Let us help you build a reliable, cost-effective supply chain in China.</p>
          <Link
            to="/contact"
            className="inline-flex items-center bg-orange-500 hover:bg-orange-600 text-white font-semibold px-8 py-4 rounded-lg text-base no-underline transition-colors"
          >
            Get a Free Sourcing Quote
            <ArrowRight className="w-5 h-5 ml-2" />
          </Link>
        </div>
      </section>
    </div>
  )
}
