import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, BarChart3, Globe, Building2, ExternalLink, CheckCircle } from 'lucide-react'

const caseStudies = [
  {
    id: 1,
    company: 'EuroTech GmbH',
    industry: 'Consumer Electronics',
    country: 'Germany',
    size: 'Medium Enterprise',
    challenge: 'EuroTech needed a reliable supplier for Bluetooth speakers with specific audio quality requirements. Their previous supplier had inconsistent quality and missed delivery deadlines.',
    approach: 'We identified 5 potential suppliers from our database, conducted comprehensive factory audits on the top 3, and managed a rigorous sample evaluation process including audio testing against their specifications.',
    result: 'Selected supplier passed all quality checks. We negotiated a 15% cost reduction from initial quotes. Production was completed on schedule with zero defects confirmed through independent pre-shipment inspection.',
    savings: '35% cost reduction vs previous European supplier',
    since: '2 years',
    highlights: ['Zero defect first order', 'On-time delivery achieved', 'Ongoing QC program established'],
  },
  {
    id: 2,
    company: 'BuildRight Hardware',
    industry: 'Industrial Equipment',
    country: 'United States',
    size: 'Large Distributor',
    challenge: 'BuildRight was expanding their safety equipment line and needed certified Chinese manufacturers who could meet OSHA-equivalent standards and handle volume production.',
    approach: 'We conducted a market-wide search focusing on ISO 9001 and CE-certified factories. Our team performed on-site audits of 8 factories, evaluating production capacity, quality systems, and export experience.',
    result: 'Sourced 5 certified factories, negotiated annual contracts with 3 primary suppliers. Established ongoing quality inspection program with monthly audits. All products passed US customs certification.',
    savings: '42% cost reduction with improved quality',
    since: '3 years',
    highlights: ['5 certified factories sourced', 'Annual contract secured', 'Full compliance achieved'],
  },
  {
    id: 3,
    company: 'Moda Fashion Ltd',
    industry: 'Apparel & Fashion',
    country: 'United Kingdom',
    size: 'Startup',
    challenge: 'A sustainable fashion startup needed ethical garment manufacturers with full supply chain transparency for their launch collection of 30 SKUs.',
    approach: 'We identified suppliers with BSCI, SA8000, or equivalent social compliance certifications. Our team visited factories to verify working conditions and interviewed management on sustainability practices.',
    result: 'Sourced 4 certified ethical manufacturers. Managed sample development across all 30 SKUs in 6 weeks. Production of 25,000 units delivered on schedule for the launch date.',
    savings: '28% cost reduction with full traceability',
    since: '1 year',
    highlights: ['30 SKUs sampled in 6 weeks', 'Full supply chain map', 'Launch delivered on schedule'],
  },
  {
    id: 4,
    company: 'Pacific Auto Parts',
    industry: 'Automotive',
    country: 'Australia',
    size: 'Medium Enterprise',
    challenge: 'An Australian auto parts distributor needed to source alternators and starter motors that met strict Australian Design Rules (ADR) standards.',
    approach: 'We focused on IATF 16949-certified auto parts manufacturers, conducted detailed technical capability assessments, and coordinated testing of samples against ADR compliance criteria.',
    result: 'Three suppliers qualified. Initial order of 5,000 units delivered defect-free. Established RMA process for warranty handling. Ongoing quarterly inspections implemented.',
    savings: '30% cost reduction vs OEM pricing',
    since: '18 months',
    highlights: ['ADR compliance achieved', 'Defect-free delivery', 'Warranty process established'],
  },
  {
    id: 5,
    company: 'GreenLife Packaging',
    industry: 'Packaging',
    country: 'Canada',
    size: 'Small Business',
    challenge: 'A Canadian eco-friendly packaging company needed biodegradable packaging manufacturers capable of custom printing and small MOQs.',
    approach: 'We searched for suppliers specializing in biodegradable materials (PLA, kraft, recycled paper). Negotiated lower MOQs (1,000 units vs typical 5,000) and managed custom artwork coordination.',
    result: 'Found 2 suitable suppliers who accepted small-batch orders. Packaging quality exceeded client expectations. Shipping costs optimized through consolidation.',
    savings: '40% cost savings vs domestic production',
    since: '1 year',
    highlights: ['Low MOQ negotiated', 'Custom printing achieved', 'Eco-certification verified'],
  },
  {
    id: 6,
    company: 'MediSupply Global',
    industry: 'Medical Supplies',
    country: 'UAE',
    size: 'Large Enterprise',
    challenge: 'A UAE-based medical distributor needed ISO 13485-certified suppliers for disposable medical products with urgent delivery timeline.',
    approach: 'We prioritized speed without compromising quality. Leveraged existing relationships with ISO 13485 manufacturers. Streamlined documentation process for expedited production.',
    result: 'Suppliers confirmed within 5 days. First batch of 100,000 units shipped in under 4 weeks. Full documentation package for Dubai Health Authority compliance.',
    savings: '25% cost reduction vs existing suppliers',
    since: '6 months',
    highlights: ['5-day supplier identification', '4-week delivery', 'Regulatory compliance met'],
  },
]

const industries = [...new Set(caseStudies.map((cs) => cs.industry))]

export default function CaseStudiesPage() {
  const [filter, setFilter] = useState('All')

  const filtered = filter === 'All' ? caseStudies : caseStudies.filter((cs) => cs.industry === filter)

  return (
    <div>
      {/* Header */}
      <section className="bg-brand-navy text-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4">Case Studies</h1>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Real results for real clients across industries. See how we help businesses source from China with confidence.
          </p>
        </div>
      </section>

      {/* Filter */}
      <section className="py-8 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-3 justify-center">
            <button
              onClick={() => setFilter('All')}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                filter === 'All'
                  ? 'bg-brand-navy text-white'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              All Industries
            </button>
            {industries.map((ind) => (
              <button
                key={ind}
                onClick={() => setFilter(ind)}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                  filter === ind
                    ? 'bg-brand-navy text-white'
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                {ind}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies Grid */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filtered.map((cs) => (
              <article key={cs.id} className="bg-white rounded-xl border border-gray-100 shadow-sm overflow-hidden hover:shadow-md transition-shadow">
                <div className="p-6 md:p-8">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-xs font-semibold text-brand-red bg-red-50 px-2.5 py-1 rounded">{cs.industry}</span>
                    <span className="text-xs text-gray-400">{cs.country}</span>
                  </div>
                  <h2 className="text-xl font-bold text-brand-navy mb-1">{cs.company}</h2>
                  <p className="text-xs text-gray-400 mb-4">{cs.size} &middot; Partner {cs.since}</p>

                  <div className="space-y-3 mb-5">
                    <div>
                      <h3 className="text-sm font-bold text-gray-700 mb-1">The Challenge</h3>
                      <p className="text-sm text-gray-600">{cs.challenge}</p>
                    </div>
                    <div>
                      <h3 className="text-sm font-bold text-gray-700 mb-1">Our Approach</h3>
                      <p className="text-sm text-gray-600">{cs.approach}</p>
                    </div>
                    <div>
                      <h3 className="text-sm font-bold text-gray-700 mb-1">The Result</h3>
                      <p className="text-sm text-gray-600">{cs.result}</p>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {cs.highlights.map((h) => (
                      <span key={h} className="inline-flex items-center gap-1 text-xs font-medium text-green-700 bg-green-50 px-2.5 py-1 rounded-full">
                        <CheckCircle className="w-3 h-3" />
                        {h}
                      </span>
                    ))}
                  </div>

                  <div className="inline-flex items-center gap-1 bg-green-50 text-green-700 text-xs font-semibold px-3 py-1.5 rounded-full">
                    <BarChart3 className="w-3.5 h-3.5" />
                    {cs.savings}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-24 bg-brand-navy text-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Be Our Next Success Story?
          </h2>
          <p className="text-lg text-gray-300 mb-8 max-w-xl mx-auto">
            Contact us to discuss your sourcing needs. We will provide a free, no-obligation feasibility assessment.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 bg-brand-red hover:bg-brand-red-hover text-white font-bold px-8 py-4 rounded-lg transition-colors text-lg"
          >
            Start Your Project <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  )
}