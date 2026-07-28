import React, { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import { ArrowRight, CheckCircle2, TrendingDown, ShieldCheck, DollarSign } from 'lucide-react'

const caseStudies = [
  {
    title: 'US Retailer Cuts Defect Rate by 85%',
    client: 'US Home Goods Retailer',
    industry: 'Home & Garden',
    challenge: 'A US-based home goods retailer was experiencing a 12% defect rate on ceramic products sourced from China, leading to high return rates and customer complaints.',
    solution: 'We conducted a full supplier audit, identified the root causes of quality issues, and transitioned the client to a verified supplier with a robust quality management system. We implemented pre-shipment inspections with strict AQL standards.',
    results: ['Defect rate reduced from 12% to under 2%', 'Return rate dropped by 90%', 'Customer satisfaction scores improved significantly', 'Annual savings of $120K in return processing costs'],
    tag: 'Quality Improvement',
    imgId: 'cs-quality-a1b2c3',
    titleId: 'cs-quality-title',
    descId: 'cs-quality-desc',
  },
  {
    title: 'EU Brand Saves 30% on Sourcing Costs',
    client: 'European Fashion Brand',
    industry: 'Apparel & Textiles',
    challenge: 'A European fashion brand was working with multiple intermediaries, resulting in inflated costs and inconsistent quality across their product lines.',
    solution: 'We consolidated their supplier base through direct factory relationships, negotiated volume-based pricing, and implemented a quality control program that eliminated the need for middlemen.',
    results: ['30% reduction in per-unit sourcing costs', 'Consistent quality across all product lines', 'Lead time reduced by 2 weeks', 'Direct factory relationships established'],
    tag: 'Cost Reduction',
    imgId: 'cs-cost-d4e5f6',
    titleId: 'cs-cost-title',
    descId: 'cs-cost-desc',
  },
  {
    title: 'AU Importer Avoids $50K Shipment Loss',
    client: 'Australian Importer',
    industry: 'Electronics',
    challenge: 'An Australian electronics importer had a shipment of 5,000 units ready to ship, but our pre-shipment inspection discovered a critical specification error that would have made the products non-compliant with Australian safety standards.',
    solution: 'We identified the issue during PSI, documented it with detailed photos and reports, and negotiated with the factory for immediate rework at their cost before shipment.',
    results: ['Avoided $50K in potential losses', 'Prevented regulatory compliance issues', 'Factory covered rework costs', 'Established ongoing inspection protocol'],
    tag: 'Risk Prevention',
    imgId: 'cs-risk-g7h8i9',
    titleId: 'cs-risk-title',
    descId: 'cs-risk-desc',
  },
  {
    title: 'UK Startup Launches First Product Line',
    client: 'UK E-commerce Startup',
    industry: 'Consumer Products',
    challenge: 'A UK startup needed to source their first product line but had no experience with China sourcing, no supplier contacts, and limited budget for mistakes.',
    solution: 'We guided them through the entire process from supplier search to delivery, provided sample evaluation, managed production follow-up, and coordinated their first shipment via sea freight.',
    results: ['Successfully launched first product line', 'First order delivered on time and on budget', 'Established reliable supplier relationship', 'Now sourcing 5 additional product categories'],
    tag: 'New Importer',
    imgId: 'cs-startup-j1k2l3',
    titleId: 'cs-startup-title',
    descId: 'cs-startup-desc',
  },
]

const CaseStudies = () => {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <>
      {/* Hero */}
      <section className="bg-navy py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-blue-300 font-semibold text-sm uppercase tracking-wider mb-3">Case Studies</p>
          <h1 className="text-3xl md:text-5xl font-extrabold text-white mb-4">
            Real Results for Real Buyers
          </h1>
          <p className="text-slate-300 text-lg max-w-2xl mx-auto">
            See how we've helped businesses across industries source smarter, reduce costs, and avoid costly mistakes.
          </p>
        </div>
      </section>

      {/* Case Studies */}
      <section ref={containerRef} className="py-16 md:py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          {caseStudies.map((cs, idx) => (
            <article key={cs.imgId} className="bg-white rounded-xl border border-slate-100 overflow-hidden hover:shadow-md transition-shadow">
              <div className="aspect-[16/9] bg-slate-100 overflow-hidden">
                <img
                  alt={cs.title}
                  data-strk-img-id={cs.imgId}
                  data-strk-img={`[${cs.descId}] [${cs.titleId}]`}
                  data-strk-img-ratio="16x9"
                  data-strk-img-width="1000"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6 md:p-8">
                <div className="flex flex-wrap items-center gap-3 mb-4">
                  <span className="bg-blue-50 text-accent-blue text-xs font-medium px-2.5 py-1 rounded-full">{cs.tag}</span>
                  <span className="text-slate-400 text-xs">{cs.industry}</span>
                </div>
                <h2 id={cs.titleId} className="text-xl md:text-2xl font-bold text-navy mb-2">{cs.title}</h2>
                <p id={cs.descId} className="text-slate-400 text-sm mb-6">Client: {cs.client}</p>

                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-navy text-sm mb-1">Challenge</h4>
                    <p className="text-slate-500 text-sm leading-relaxed">{cs.challenge}</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-navy text-sm mb-1">Solution</h4>
                    <p className="text-slate-500 text-sm leading-relaxed">{cs.solution}</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-navy text-sm mb-2">Results</h4>
                    <ul className="space-y-2">
                      {cs.results.map((r) => (
                        <li key={r} className="flex items-start gap-2">
                          <CheckCircle2 className="w-4 h-4 text-green-500 shrink-0 mt-0.5" />
                          <span className="text-slate-600 text-sm">{r}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-20 bg-slate-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-navy mb-4">
            Want Results Like These?
          </h2>
          <p className="text-slate-500 mb-8">
            Tell us about your sourcing challenges and we'll show you how we can help.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 bg-accent-blue text-white px-8 py-4 rounded-lg font-semibold hover:bg-navy transition-colors"
          >
            Get a Free Sourcing Quote <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </>
  )
}

export default CaseStudies
