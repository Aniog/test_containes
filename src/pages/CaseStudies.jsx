import React from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, CheckCircle2, TrendingDown, TrendingUp, Clock, ShieldCheck } from 'lucide-react'

const caseStudies = [
  {
    client: 'European Home Goods Brand',
    location: 'Netherlands',
    category: 'Home & Garden',
    challenge: 'A European home goods brand needed to find reliable furniture suppliers for a new product line with strict EU compliance requirements. Previous suppliers had inconsistent quality and missed delivery deadlines.',
    approach: [
      'Conducted supplier search across Guangdong and Zhejiang furniture hubs',
      'Performed on-site factory audits for 8 potential suppliers',
      'Shortlisted 3 factories with EU compliance certifications',
      'Implemented AQL-based quality inspection at each production stage',
      'Set up weekly production monitoring and milestone tracking',
    ],
    results: [
      { label: 'Defect Rate', before: '12%', after: '1.5%', improvement: '87% reduction' },
      { label: 'Lead Time', before: '60 days', after: '45 days', improvement: '25% faster' },
      { label: 'On-time Delivery', before: '65%', after: '95%', improvement: '30% improvement' },
    ],
    testimonial: 'SSourcing China transformed our supply chain. We went from constant quality issues to reliable, on-time deliveries.',
  },
  {
    client: 'US Electronics Distributor',
    location: 'California, USA',
    category: 'Electronics',
    challenge: 'A US electronics distributor was struggling with quality inconsistency across multiple component suppliers in Shenzhen. Defect rates were high and communication gaps led to production errors.',
    approach: [
      'Mapped existing supplier base and identified quality bottlenecks',
      'Conducted comprehensive factory audits and capability assessments',
      'Consolidated from 6 suppliers to 2 verified, high-capacity factories',
      'Implemented incoming material inspection and in-line QC checks',
      'Established clear communication protocols with factory management',
    ],
    results: [
      { label: 'Pass Rate', before: '85%', after: '99.2%', improvement: '14% improvement' },
      { label: 'Supplier Count', before: '6 suppliers', after: '2 suppliers', improvement: '67% consolidation' },
      { label: 'Rework Cost', before: '$45K/yr', after: '$5K/yr', improvement: '89% savings' },
    ],
    testimonial: 'The supplier consolidation alone saved us significant management overhead. Quality is now consistently excellent.',
  },
  {
    client: 'Australian Auto Parts Retailer',
    location: 'Sydney, Australia',
    category: 'Auto Parts',
    challenge: 'An Australian auto parts retailer needed to source OEM-quality parts with competitive pricing and reliable shipping schedules. Previous sourcing efforts resulted in substandard parts and unpredictable delivery times.',
    approach: [
      'Identified specialized auto parts manufacturers with OEM experience',
      'Verified ISO/TS 16949 certifications and production capabilities',
      'Negotiated volume-based pricing with transparent cost breakdowns',
      'Implemented pre-shipment inspection with dimensional and material testing',
      'Established monthly shipping schedule with consolidated freight',
    ],
    results: [
      { label: 'Unit Cost', before: 'Baseline', after: '-18%', improvement: '18% reduction' },
      { label: 'On-time Delivery', before: '70%', after: '100%', improvement: '30% improvement' },
      { label: 'Quality Returns', before: '8%', after: '0.5%', improvement: '94% reduction' },
    ],
    testimonial: 'We finally have a sourcing partner we can trust. The cost savings and reliability improvements have been remarkable.',
  },
  {
    client: 'UK Fashion Brand',
    location: 'London, UK',
    category: 'Textiles & Apparel',
    challenge: 'A UK fashion brand needed to scale production while maintaining ethical manufacturing standards and consistent fabric quality across seasonal collections.',
    approach: [
      'Searched for BSCI and SEDEX certified garment factories',
      'Conducted social compliance audits alongside capability assessments',
      'Implemented fabric testing protocols before production starts',
      'Set up during-production inspections at key garment stages',
      'Coordinated consolidated shipments aligned with seasonal timelines',
    ],
    results: [
      { label: 'Production Capacity', before: '5K units/mo', after: '20K units/mo', improvement: '4x increase' },
      { label: 'Defect Rate', before: '9%', after: '2%', improvement: '78% reduction' },
      { label: 'Compliance Score', before: 'Partial', after: 'Full BSCI', improvement: 'Full certification' },
    ],
    testimonial: 'Scaling our production while maintaining ethical standards seemed impossible until we partnered with SSourcing China.',
  },
]

export default function CaseStudies() {
  return (
    <div>
      {/* Hero */}
      <section className="bg-navy py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-3xl lg:text-4xl font-bold text-white mb-4">Case Studies</h1>
            <p className="text-lg text-slate-300 leading-relaxed">
              Real results from real clients. See how we've helped businesses across industries source better from China.
            </p>
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          {caseStudies.map((cs) => (
            <div key={cs.client} className="bg-white rounded-2xl border border-slate-100 overflow-hidden">
              <div className="p-8 lg:p-10">
                <div className="flex flex-wrap items-center gap-3 mb-4">
                  <span className="bg-ocean/10 text-ocean text-xs font-semibold px-3 py-1 rounded-full">
                    {cs.category}
                  </span>
                  <span className="text-sm text-slate-400">{cs.location}</span>
                </div>
                <h2 className="text-2xl font-bold text-navy mb-4">{cs.client}</h2>

                <div className="mb-8">
                  <h3 className="font-semibold text-slate-900 mb-2">Challenge</h3>
                  <p className="text-slate-600 leading-relaxed">{cs.challenge}</p>
                </div>

                <div className="mb-8">
                  <h3 className="font-semibold text-slate-900 mb-3">Our Approach</h3>
                  <ul className="space-y-2">
                    {cs.approach.map((step) => (
                      <li key={step} className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-green-500 shrink-0 mt-0.5" />
                        <span className="text-slate-600 text-sm">{step}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mb-8">
                  <h3 className="font-semibold text-slate-900 mb-4">Results</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    {cs.results.map((result) => (
                      <div key={result.label} className="bg-slate-50 rounded-xl p-4 text-center">
                        <div className="text-sm text-slate-500 mb-1">{result.label}</div>
                        <div className="flex items-center justify-center gap-2 mb-1">
                          <span className="text-sm text-slate-400 line-through">{result.before}</span>
                          <ArrowRight className="w-4 h-4 text-slate-400" />
                          <span className="text-lg font-bold text-navy">{result.after}</span>
                        </div>
                        <div className="text-xs text-green-600 font-medium">{result.improvement}</div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="bg-navy-50 rounded-xl p-6 border border-navy-100">
                  <p className="text-slate-700 italic leading-relaxed">"{cs.testimonial}"</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-slate-50 py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-navy mb-4">Want Results Like These?</h2>
          <p className="text-lg text-slate-600 mb-8">
            Tell us about your sourcing challenges and we'll show you how we can help.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center justify-center gap-2 bg-ocean text-white px-8 py-3.5 rounded-lg text-base font-semibold hover:bg-blue-700 transition-colors"
          >
            Get a Free Sourcing Quote
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  )
}
