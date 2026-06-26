import { Link } from 'react-router-dom'
import { ArrowRight, Star, Download } from 'lucide-react'

const caseStudies = [
  {
    title: 'Electronics Components for German Automotive Tier 1',
    client: 'German Automotive Supplier',
    industry: 'Automotive Electronics',
    challenge: 'The client needed to find a reliable Chinese manufacturer for precision electronic components used in automotive applications. Previous sourcing attempts resulted in inconsistent quality and delivery delays.',
    solution: 'We identified three qualified manufacturers, conducted comprehensive factory audits, and selected a supplier with ISO/TS 16949 certification. We implemented a rigorous QC protocol with in-process and pre-shipment inspections.',
    result: '40% cost reduction compared to European suppliers. 99.7% on-time delivery rate over 18 months. Zero quality incidents reported.',
  },
  {
    title: 'Full Supply Chain Setup for US Kitchenware Brand',
    client: 'US Kitchenware Brand',
    industry: 'Home & Lifestyle',
    challenge: 'A fast-growing kitchenware brand needed to establish a complete supply chain in China for stainless steel cookware sets across multiple SKUs.',
    solution: 'We sourced raw materials, identified and audited three manufacturing partners, negotiated pricing, set up QC processes, and established consolidated shipping to a US warehouse.',
    result: 'Launched 12 SKUs within 10 weeks. 35% lower unit cost than previous sourcing arrangement. Scalable to 50+ SKUs within first year.',
  },
  {
    title: 'Industrial Pump Components for UK Distributor',
    client: 'UK Industrial Distributor',
    industry: 'Industrial Equipment',
    challenge: 'The client needed to diversify supply away from a single European source for critical pump components. Required strict adherence to material specifications and dimensional tolerances.',
    solution: 'We conducted a market search across Chinese industrial hubs, audited four precision machining facilities, and managed a rigorous sample approval process including third-party material testing.',
    result: 'Successfully qualified two alternative suppliers. 28% cost savings. Reduced lead time from 16 weeks to 8 weeks. Backup supply secured.',
  },
  {
    title: 'Medical PPE Sourcing During Global Supply Crunch',
    client: 'Healthcare Distributor, Southeast Asia',
    industry: 'Medical & Safety',
    challenge: 'The client urgently needed reliable supply of medical-grade PPE during a period of global supply chain disruption and widespread quality concerns.',
    solution: 'We leveraged our existing supplier relationships, conducted emergency audits of certified manufacturers, verified CE and FDA documentation, and set up daily QC inspections.',
    result: 'Delivered 500,000+ units of certified PPE within 6 weeks. All shipments passed destination country regulatory inspection. Established long-term supply agreement.',
  },
]

export default function CaseStudies() {
  return (
    <div>
      {/* Header */}
      <section className="bg-gradient-to-br from-primary-900 via-primary-800 to-primary-950 py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">Case Studies</h1>
            <p className="text-lg text-gray-300 leading-relaxed">
              Real projects, real results. See how we have helped global buyers source successfully from China.
            </p>
          </div>
        </div>
      </section>

      {/* Case Studies List */}
      <section className="py-16 lg:py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10 lg:space-y-14">
          {caseStudies.map((cs, i) => (
            <div key={i} className="bg-white rounded-xl border border-border p-6 lg:p-8 hover:shadow-lg transition-shadow">
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="text-xs font-medium bg-accent-50 text-accent-700 px-3 py-1 rounded-full">{cs.industry}</span>
              </div>
              <h2 className="text-xl lg:text-2xl font-bold text-primary-900 mb-1">{cs.title}</h2>
              <p className="text-sm text-gray-500 mb-6">Client: {cs.client}</p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div>
                  <h3 className="text-sm font-semibold text-primary-800 mb-2 uppercase tracking-wider">Challenge</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{cs.challenge}</p>
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-primary-800 mb-2 uppercase tracking-wider">Solution</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{cs.solution}</p>
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-primary-800 mb-2 uppercase tracking-wider">Result</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{cs.result}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-primary-50 py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-primary-900 mb-4">Ready to Start Your Project?</h2>
          <p className="text-lg text-gray-600 mb-8">Contact us today and we will help you achieve similar results.</p>
          <Link to="/contact" className="inline-flex items-center gap-2 bg-accent-500 text-white px-8 py-3.5 rounded-lg font-semibold text-base hover:bg-accent-600 transition-colors">
            Get a Free Sourcing Quote <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  )
}