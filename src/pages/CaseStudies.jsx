import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import { ArrowRight, TrendingDown, ShieldCheck, Clock, Award } from 'lucide-react'

const caseStudies = [
  {
    client: 'US Retail Chain',
    industry: 'Kitchenware & Home Goods',
    challenge: 'Needed to source 120 SKUs from multiple factories while maintaining consistent quality and reducing landed costs by 20%.',
    approach: 'Audited 12 factories, consolidated orders across 8 verified suppliers, implemented weekly QC inspections, and negotiated freight contracts.',
    results: [
      { metric: '23%', label: 'Cost reduction on landed costs', icon: TrendingDown },
      { metric: '8', label: 'Verified suppliers onboarded', icon: ShieldCheck },
      { metric: '0', label: 'Major quality incidents', icon: Award },
    ],
    timeline: '4 months from inquiry to first shipment',
  },
  {
    client: 'German EV Distributor',
    industry: 'Electric Vehicle Charging',
    challenge: 'Needed a certified manufacturer for EV charging cables that could pass CE and TUV certifications on the first attempt.',
    approach: 'Researched 30+ manufacturers, conducted on-site audits of top 5 candidates, verified certification authenticity, and managed the sample approval process.',
    results: [
      { metric: '3 weeks', label: 'To find certified manufacturer', icon: Clock },
      { metric: '100%', label: 'First-attempt certification pass', icon: ShieldCheck },
      { metric: '15%', label: 'Below market average pricing', icon: TrendingDown },
    ],
    timeline: '6 weeks from inquiry to production start',
  },
  {
    client: 'Australian Outdoor Brand',
    industry: 'Outdoor Furniture',
    challenge: 'Defect rate of 12% on previous shipments from a direct supplier. Needed to improve quality without increasing costs.',
    approach: 'Replaced the supplier with a verified factory, implemented AQL-based inspections at every production stage, and introduced packaging improvements to reduce transit damage.',
    results: [
      { metric: '12% → 2%', label: 'Defect rate reduction', icon: TrendingDown },
      { metric: '3x', label: 'Inspection coverage increase', icon: ShieldCheck },
      { metric: '95%', label: 'Customer satisfaction score', icon: Award },
    ],
    timeline: '3 months to full implementation',
  },
]

export default function CaseStudies() {
  return (
    <>
      <Helmet>
        <title>Case Studies | China Sourcing Results | SSourcing China</title>
        <meta name="description" content="Real case studies from global buyers who saved costs, improved quality, and streamlined logistics with our China sourcing services." />
      </Helmet>

      {/* Hero */}
      <section className="w-full bg-navy-900 text-white py-16 lg:py-24">
        <div className="mx-auto max-w-4xl px-4 text-center">
          <h1 className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">Case Studies</h1>
          <p className="mt-4 text-lg text-slate-300 max-w-2xl mx-auto">
            Real results for real clients across different industries and order sizes.
          </p>
        </div>
      </section>

      {/* Cases */}
      <section className="w-full bg-white py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 lg:px-6">
          <div className="space-y-16">
            {caseStudies.map((cs) => (
              <div key={cs.client} className="rounded-xl border border-slate-200 bg-white p-6 lg:p-10 shadow-sm">
                <div className="mb-6">
                  <span className="inline-block rounded-full bg-blue-50 px-3 py-1 text-xs font-medium text-blue-700 mb-2">
                    {cs.industry}
                  </span>
                  <h2 className="text-2xl font-bold text-slate-900">{cs.client}</h2>
                </div>

                <div className="grid gap-6 lg:grid-cols-3 mb-8">
                  <div className="lg:col-span-2 space-y-6">
                    <div>
                      <h3 className="text-sm font-semibold text-slate-900 mb-2">The Challenge</h3>
                      <p className="text-sm text-slate-600 leading-relaxed">{cs.challenge}</p>
                    </div>
                    <div>
                      <h3 className="text-sm font-semibold text-slate-900 mb-2">Our Approach</h3>
                      <p className="text-sm text-slate-600 leading-relaxed">{cs.approach}</p>
                    </div>
                    <div>
                      <h3 className="text-sm font-semibold text-slate-900 mb-2">Timeline</h3>
                      <p className="text-sm text-slate-600">{cs.timeline}</p>
                    </div>
                  </div>
                  <div className="space-y-4">
                    {cs.results.map((result) => {
                      const Icon = result.icon
                      return (
                        <div key={result.label} className="rounded-lg bg-slate-50 p-4">
                          <div className="flex items-center gap-2 mb-1">
                            <Icon className="h-4 w-4 text-blue-600" />
                            <span className="text-2xl font-bold text-blue-600">{result.metric}</span>
                          </div>
                          <span className="text-xs text-slate-500">{result.label}</span>
                        </div>
                      )
                    })}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="w-full bg-slate-50 py-16">
        <div className="mx-auto max-w-3xl px-4 text-center">
          <h2 className="text-2xl font-bold text-slate-900 mb-4">Ready to become our next success story?</h2>
          <p className="text-slate-600 mb-6">Get a free consultation and we will show you how we can help with your specific product and goals.</p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors"
          >
            Get a Free Sourcing Quote
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </>
  )
}
