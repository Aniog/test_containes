import { Link } from 'react-router-dom'
import { ArrowRight, TrendingUp, Users, DollarSign, Clock } from 'lucide-react'

const caseStudies = [
  {
    industry: 'Home Furniture',
    title: 'From Unknown Supplier to Reliable Partner',
    client: 'US Furniture Retailer',
    challenge: 'The client was struggling with inconsistent quality and delayed shipments from their existing Chinese supplier.',
    solution: 'We identified and verified 3 new manufacturers, implemented strict QC protocols, and established clear communication channels.',
    results: [
      { icon: TrendingUp, value: '35%', label: 'Quality Improvement' },
      { icon: Clock, value: '98%', label: 'On-Time Delivery' },
      { icon: DollarSign, value: '$120K', label: 'Annual Savings' },
    ],
    quote: '"SSourcing China transformed our supply chain. We finally have the reliability we needed."',
    author: 'David Miller, Procurement Director',
  },
  {
    industry: 'Electronics',
    title: 'Preventing a $200K Quality Disaster',
    client: 'European Electronics Distributor',
    challenge: 'Pre-shipment inspection revealed critical safety defects in 15,000 units about to be shipped.',
    solution: 'We caught the defects during pre-shipment inspection, negotiated with the factory for replacement, and prevented a costly recall.',
    results: [
      { icon: TrendingUp, value: '100%', label: 'Defect-Free' },
      { icon: DollarSign, value: '$200K', label: 'Loss Prevented' },
      { icon: Users, value: '15,000', label: 'Units Saved' },
    ],
    quote: '"Their QC team saved us from a disaster. The inspection paid for itself many times over."',
    author: 'Hans Mueller, CEO',
  },
  {
    industry: 'Textiles',
    title: 'Building a Scalable Apparel Supply Chain',
    client: 'Canadian Fashion Brand',
    challenge: 'The brand needed to scale production while maintaining quality, but lacked local expertise in China.',
    solution: 'We set up a complete production management system with regular factory audits, inline inspections, and consolidated shipping.',
    results: [
      { icon: TrendingUp, value: '200%', label: 'Production Scale' },
      { icon: Clock, value: '40%', label: 'Lead Time Reduction' },
      { icon: DollarSign, value: '25%', label: 'Cost Reduction' },
    ],
    quote: '"They made scaling to China feel manageable. Professional from start to finish."',
    author: 'Jennifer Park, Operations Manager',
  },
]

export function CaseStudies() {
  return (
    <section className="py-20 bg-neutral-50" id="case-studies">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block px-4 py-1 bg-accent-100 text-accent-700 rounded-full text-sm font-medium mb-4">
            Case Studies
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-4">
            Success Stories
          </h2>
          <p className="text-lg text-neutral-600">
            See how we've helped businesses overcome their China sourcing challenges 
            and build reliable supply chains.
          </p>
        </div>

        {/* Case Studies */}
        <div className="space-y-8">
          {caseStudies.map((study, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-sm border border-neutral-200 overflow-hidden"
            >
              <div className="grid lg:grid-cols-3">
                {/* Content */}
                <div className="p-8 lg:col-span-2">
                  <div className="inline-block px-3 py-1 bg-primary-100 text-primary-700 rounded-full text-sm font-medium mb-4">
                    {study.industry}
                  </div>
                  <h3 className="text-2xl font-bold text-neutral-900 mb-2">
                    {study.title}
                  </h3>
                  <p className="text-sm text-neutral-500 mb-4">
                    {study.client}
                  </p>

                  <div className="space-y-4 mb-6">
                    <div>
                      <h4 className="font-semibold text-neutral-700 mb-1">Challenge</h4>
                      <p className="text-neutral-600 text-sm">{study.challenge}</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-neutral-700 mb-1">Our Solution</h4>
                      <p className="text-neutral-600 text-sm">{study.solution}</p>
                    </div>
                  </div>

                  {/* Quote */}
                  <div className="bg-neutral-50 rounded-xl p-4 border-l-4 border-primary-500">
                    <p className="text-neutral-700 italic text-sm mb-2">{study.quote}</p>
                    <p className="text-sm font-medium text-neutral-900">{study.author}</p>
                  </div>
                </div>

                {/* Results */}
                <div className="bg-primary-600 p-8 text-white">
                  <h4 className="font-semibold mb-6">Results Achieved</h4>
                  <div className="space-y-6">
                    {study.results.map((result, idx) => (
                      <div key={idx} className="flex items-center gap-4">
                        <div className="w-12 h-12 bg-primary-500 rounded-lg flex items-center justify-center">
                          <result.icon className="w-6 h-6" />
                        </div>
                        <div>
                          <div className="text-2xl font-bold">{result.value}</div>
                          <div className="text-sm text-primary-200">{result.label}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <Link to="/case-studies" className="inline-flex items-center justify-center px-8 py-4 bg-neutral-900 text-white font-semibold rounded-xl hover:bg-neutral-800 transition-colors">
            View All Case Studies
            <ArrowRight className="ml-2 w-5 h-5" />
          </Link>
        </div>
      </div>
    </section>
  )
}