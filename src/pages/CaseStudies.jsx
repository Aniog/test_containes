import { Link } from 'react-router-dom'
import { TrendingUp, Users, DollarSign, Clock, CheckCircle, ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/Button'

const caseStudies = [
  {
    id: 'furniture-retailer',
    industry: 'Home Furniture',
    title: 'From Unknown Supplier to Reliable Partner',
    client: 'US Furniture Retailer',
    location: 'United States',
    challenge: 'The client was struggling with inconsistent quality and delayed shipments from their existing Chinese supplier. Multiple batches arrived with defects, and communication was challenging due to language barriers.',
    solution: 'We identified and verified 3 new manufacturers, implemented strict QC protocols, and established clear communication channels. We also negotiated better payment terms and pricing.',
    results: [
      { icon: TrendingUp, value: '35%', label: 'Quality Improvement' },
      { icon: Clock, value: '98%', label: 'On-Time Delivery' },
      { icon: DollarSign, value: '$120K', label: 'Annual Savings' },
    ],
    quote: 'SSourcing China transformed our supply chain. We finally have the reliability we needed to grow our business.',
    author: 'David Miller',
    role: 'Procurement Director',
  },
  {
    id: 'electronics-distributor',
    industry: 'Electronics',
    title: 'Preventing a $200K Quality Disaster',
    client: 'European Electronics Distributor',
    location: 'Germany',
    challenge: 'Pre-shipment inspection revealed critical safety defects in 15,000 units about to be shipped to their warehouse. The defects would have resulted in a costly product recall.',
    solution: 'We caught the defects during pre-shipment inspection, negotiated with the factory for replacement units, and implemented stricter incoming quality control procedures for future orders.',
    results: [
      { icon: CheckCircle, value: '100%', label: 'Defect-Free' },
      { icon: DollarSign, value: '$200K', label: 'Loss Prevented' },
      { icon: Users, value: '15,000', label: 'Units Saved' },
    ],
    quote: 'Their QC team saved us from a disaster. The inspection paid for itself many times over.',
    author: 'Hans Mueller',
    role: 'CEO',
  },
  {
    id: 'fashion-brand',
    industry: 'Textiles',
    title: 'Building a Scalable Apparel Supply Chain',
    client: 'Canadian Fashion Brand',
    location: 'Canada',
    challenge: 'The brand needed to scale production while maintaining quality, but lacked local expertise in China. They were working with middlemen who took significant margins.',
    solution: 'We set up a complete production management system with regular factory audits, inline inspections, and consolidated shipping. We also connected them directly with manufacturers.',
    results: [
      { icon: TrendingUp, value: '200%', label: 'Production Scale' },
      { icon: Clock, value: '40%', label: 'Lead Time Reduction' },
      { icon: DollarSign, value: '25%', label: 'Cost Reduction' },
    ],
    quote: 'They made scaling to China feel manageable. Professional from start to finish.',
    author: 'Jennifer Park',
    role: 'Operations Manager',
  },
  {
    id: 'hardware-wholesaler',
    industry: 'Hardware & Tools',
    title: 'Streamlining a Complex Hardware Supply Chain',
    client: 'Australian Hardware Wholesaler',
    location: 'Australia',
    challenge: 'The client sourced 50+ different hardware products from various suppliers across China. Managing quality and logistics was becoming overwhelming.',
    solution: 'We consolidated their sourcing under one management system, established a dedicated QC program, and set up consolidated shipping to reduce costs.',
    results: [
      { icon: Clock, value: '70%', label: 'Time Saved' },
      { icon: DollarSign, value: '30%', label: 'Shipping Cost Reduction' },
      { icon: CheckCircle, value: '100%', label: 'Quality Compliance' },
    ],
    quote: 'They took a complex mess and turned it into a smooth operation. Our logistics costs dropped significantly.',
    author: 'Robert Chen',
    role: 'Supply Chain Manager',
  },
]

export function CaseStudies() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-neutral-50 via-white to-primary-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-neutral-900 mb-6">
            Case Studies
          </h1>
          <p className="text-xl text-neutral-600 max-w-3xl mx-auto mb-8">
            See how we've helped businesses overcome their China sourcing challenges 
            and build reliable supply chains.
          </p>
          <Link to="/contact">
            <Button size="lg">
              Start Your Project
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </Link>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-20 bg-neutral-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-12">
            {caseStudies.map((study) => (
              <div
                key={study.id}
                className="bg-white rounded-2xl shadow-sm border border-neutral-200 overflow-hidden"
              >
                <div className="grid lg:grid-cols-3">
                  {/* Main Content */}
                  <div className="p-8 lg:col-span-2">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="inline-block px-3 py-1 bg-primary-100 text-primary-700 rounded-full text-sm font-medium">
                        {study.industry}
                      </div>
                      <div className="text-sm text-neutral-500">
                        {study.location}
                      </div>
                    </div>

                    <h2 className="text-2xl font-bold text-neutral-900 mb-2">
                      {study.title}
                    </h2>
                    <p className="text-sm text-neutral-500 mb-6">
                      {study.client}
                    </p>

                    <div className="space-y-6">
                      <div>
                        <h3 className="font-semibold text-neutral-800 mb-2 flex items-center gap-2">
                          <span className="w-2 h-2 bg-red-400 rounded-full"></span>
                          The Challenge
                        </h3>
                        <p className="text-neutral-600">{study.challenge}</p>
                      </div>

                      <div>
                        <h3 className="font-semibold text-neutral-800 mb-2 flex items-center gap-2">
                          <span className="w-2 h-2 bg-accent-400 rounded-full"></span>
                          Our Solution
                        </h3>
                        <p className="text-neutral-600">{study.solution}</p>
                      </div>
                    </div>

                    {/* Quote */}
                    <div className="mt-8 bg-neutral-50 rounded-xl p-6 border-l-4 border-primary-500">
                      <p className="text-neutral-700 italic mb-4">"{study.quote}"</p>
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-primary-100 rounded-full flex items-center justify-center">
                          <span className="text-primary-600 font-semibold">
                            {study.author.charAt(0)}
                          </span>
                        </div>
                        <div>
                          <div className="font-semibold text-neutral-900">{study.author}</div>
                          <div className="text-sm text-neutral-500">{study.role}, {study.client}</div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Results Sidebar */}
                  <div className="bg-primary-600 p-8 text-white">
                    <h3 className="font-semibold mb-6 text-lg">Results Achieved</h3>
                    <div className="space-y-8">
                      {study.results.map((result, idx) => (
                        <div key={idx} className="flex items-center gap-4">
                          <div className="w-14 h-14 bg-primary-500 rounded-xl flex items-center justify-center">
                            <result.icon className="w-7 h-7" />
                          </div>
                          <div>
                            <div className="text-3xl font-bold">{result.value}</div>
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
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-neutral-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Write Your Success Story?
          </h2>
          <p className="text-xl text-neutral-300 mb-8">
            Let us help you overcome your China sourcing challenges and build a reliable supply chain.
          </p>
          <Link to="/contact">
            <Button size="lg">
              Get Started
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </Link>
        </div>
      </section>
    </>
  )
}