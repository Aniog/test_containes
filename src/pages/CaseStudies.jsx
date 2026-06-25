import React from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, TrendingUp, Shield, Eye, Clock, DollarSign, CheckCircle, BarChart3 } from 'lucide-react'
import SectionHeader from '@/components/SectionHeader'

const caseStudies = [
  {
    id: 'us-retailer-electronics',
    title: 'US Retailer Reduced Defect Rate by 94%',
    client: 'US-based Consumer Electronics Retailer',
    industry: 'Consumer Electronics',
    challenge: 'A US retailer sourcing Bluetooth speakers from Guangdong was experiencing a 12% defect rate, leading to costly returns, customer complaints, and inventory write-offs.',
    solution: 'We conducted a full supplier audit, identified quality control gaps, implemented a three-stage inspection process (pre-production, in-line, and pre-shipment), and introduced clear quality standards documentation.',
    results: [
      'Defect rate reduced from 12% to 0.7%',
      'Customer return rate dropped 89%',
      'Annual savings of $240,000 in returns and replacements',
      'Supplier relationship stabilized with clear QC metrics',
    ],
    timeline: '6 months',
    icon: Shield,
    tags: ['Electronics', 'Quality Control', 'Supplier Audit'],
  },
  {
    id: 'eu-brand-home',
    title: 'EU Brand Launched Product Line in 8 Weeks',
    client: 'European Home & Kitchen Brand',
    industry: 'Home & Garden',
    challenge: 'A European brand needed to launch a new kitchenware product line quickly for the holiday season but lacked Chinese supplier relationships and local manufacturing knowledge.',
    solution: 'We identified 3 qualified manufacturers within 5 days, managed sampling across all three, negotiated pricing 18% below initial quotes, and coordinated expedited production with ocean freight booking.',
    results: [
      'Product line launched in 8 weeks (target: 10 weeks)',
      'Unit costs 18% below initial supplier quotes',
      '100% of products passed CE certification on first submission',
      'Full holiday season inventory delivered on schedule',
    ],
    timeline: '8 weeks',
    icon: Clock,
    tags: ['Home & Kitchen', 'Speed to Market', 'Cost Savings'],
  },
  {
    id: 'australian-industrial',
    title: 'Australian Importer Saved 23% on Annual Costs',
    client: 'Australian Industrial Tools Distributor',
    industry: 'Industrial Tools',
    challenge: 'An Australian importer of hand tools was working with 8 different suppliers, leading to inconsistent quality, complex logistics, and high overhead costs.',
    solution: 'We conducted a full supply chain audit, consolidated suppliers from 8 to 3, renegotiated pricing through volume leverage, and optimized packaging to reduce shipping costs by 15%.',
    results: [
      '$180,000 annual savings in sourcing costs',
      'Supplier count reduced from 8 to 3',
      'Shipping costs reduced 15% through packaging optimization',
      'Lead times shortened by 2 weeks on average',
    ],
    timeline: '4 months',
    icon: DollarSign,
    tags: ['Industrial', 'Cost Optimization', 'Supply Chain'],
  },
  {
    id: 'canadian-promo',
    title: 'Canadian Company Sourced 50,000 Promotional Items',
    client: 'Canadian Marketing Agency',
    industry: 'Promotional Products',
    challenge: 'A Canadian agency needed 50,000 custom-branded drinkware items for a major client event, with strict quality requirements and a non-negotiable 6-week deadline.',
    solution: 'We sourced from 2 factories simultaneously to mitigate risk, conducted daily production monitoring, and arranged air freight for the first batch to ensure on-time delivery.',
    results: [
      '50,000 units delivered in 5.5 weeks',
      'Zero quality defects in final inspection',
      'Unit cost 22% below competitor quotes',
      'Client won repeat contract worth $500K',
    ],
    timeline: '5.5 weeks',
    icon: TrendingUp,
    tags: ['Promotional', 'Bulk Order', 'Tight Deadline'],
  },
  {
    id: 'uk-fashion',
    title: 'UK Fashion Brand Built Sustainable Supply Chain',
    client: 'UK Sustainable Fashion Brand',
    industry: 'Apparel & Textiles',
    challenge: 'A UK sustainable fashion brand needed to verify that their Chinese suppliers met ethical manufacturing and environmental standards, which previous audits had failed to confirm.',
    solution: 'We conducted comprehensive social compliance audits, verified environmental certifications, introduced traceability documentation, and helped transition to organic material suppliers.',
    results: [
      'Full supply chain transparency achieved',
      'All suppliers verified for social compliance',
      'Organic certification obtained for 3 product lines',
      'Brand successfully entered premium retail channels',
    ],
    timeline: '3 months',
    icon: Eye,
    tags: ['Apparel', 'Sustainability', 'Compliance'],
  },
  {
    id: 'middle-east-construction',
    title: 'Middle East Developer Sourced $2M in Building Materials',
    client: 'Middle East Construction Developer',
    industry: 'Building Materials',
    challenge: 'A large-scale construction developer needed to source $2 million in building materials (tiles, hardware, fixtures) from multiple Chinese suppliers with consistent quality.',
    solution: 'We managed a multi-supplier sourcing project, established unified quality standards, coordinated container shipments across 3 factories, and provided on-site loading supervision.',
    results: [
      '$2M project delivered within 5% of budget',
      '23 containers shipped over 3 months',
      'Quality consistency maintained across all suppliers',
      'Project completed 1 week ahead of schedule',
    ],
    timeline: '3 months',
    icon: BarChart3,
    tags: ['Building Materials', 'Large Scale', 'Multi-Supplier'],
  },
]

const CaseStudies = () => {
  return (
    <div>
      {/* Hero */}
      <section className="bg-gradient-to-br from-navy-900 to-navy-700 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-block px-3 py-1 bg-white/10 text-white text-xs font-semibold uppercase tracking-wider rounded-full mb-4">
            Case Studies
          </span>
          <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-6">Real Results for Real Businesses</h1>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            See how we have helped companies across industries solve sourcing challenges, reduce costs, and improve quality.
          </p>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-12">
            {caseStudies.map((study) => (
              <div key={study.id} className="bg-white rounded-2xl border border-gray-200 overflow-hidden hover:shadow-lg transition-shadow">
                <div className="p-8 lg:p-10">
                  <div className="flex items-start gap-4 mb-6">
                    <div className="w-12 h-12 bg-navy-100 rounded-xl flex items-center justify-center shrink-0">
                      <study.icon className="w-6 h-6 text-navy-600" />
                    </div>
                    <div>
                      <div className="flex flex-wrap items-center gap-2 mb-2">
                        <span className="text-xs font-medium text-navy-500 uppercase tracking-wider">{study.industry}</span>
                        <span className="text-xs text-gray-400">&bull;</span>
                        <span className="text-xs text-gray-500">{study.timeline}</span>
                      </div>
                      <h2 className="text-2xl font-bold text-navy-900">{study.title}</h2>
                      <p className="text-sm text-gray-500 mt-1">{study.client}</p>
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-8">
                    <div>
                      <h3 className="text-sm font-semibold text-accent-500 uppercase tracking-wider mb-2">Challenge</h3>
                      <p className="text-sm text-gray-600 leading-relaxed mb-5">{study.challenge}</p>

                      <h3 className="text-sm font-semibold text-navy-600 uppercase tracking-wider mb-2">Solution</h3>
                      <p className="text-sm text-gray-600 leading-relaxed">{study.solution}</p>
                    </div>

                    <div>
                      <h3 className="text-sm font-semibold text-green-600 uppercase tracking-wider mb-3">Results</h3>
                      <ul className="space-y-2.5 mb-5">
                        {study.results.map((r, i) => (
                          <li key={i} className="flex items-start gap-2.5">
                            <CheckCircle className="w-4 h-4 text-green-500 shrink-0 mt-0.5" />
                            <span className="text-sm text-gray-700">{r}</span>
                          </li>
                        ))}
                      </ul>
                      <div className="flex flex-wrap gap-2">
                        {study.tags.map((tag) => (
                          <span key={tag} className="px-2.5 py-1 bg-navy-50 text-navy-600 text-xs font-medium rounded-md">{tag}</span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-navy-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Want Similar Results?</h2>
          <p className="text-gray-400 mb-8">Share your sourcing challenge and we will show you how we can help.</p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 px-8 py-3.5 bg-accent-500 hover:bg-accent-600 text-white font-semibold rounded-lg transition-colors"
          >
            Start Your Project <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  )
}

export default CaseStudies
