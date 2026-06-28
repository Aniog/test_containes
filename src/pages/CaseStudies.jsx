import { Link } from 'react-router-dom'
import { ArrowRight, CheckCircle, TrendingDown, Package, Truck, ChevronRight } from 'lucide-react'

const CaseStudies = () => {
  const cases = [
    {
      id: 1,
      title: 'Electronics Retailer Reduces Sourcing Costs by 30%',
      client: 'US-based Electronics Retailer',
      industry: 'Electronics',
      challenge: 'High sourcing costs and inconsistent quality from existing suppliers',
      solution: 'Conducted supplier audit, identified 3 verified alternatives, negotiated better terms',
      results: ['30% cost reduction', 'Consistent quality', 'Reliable delivery'],
      icon: <TrendingDown className="h-8 w-8 text-green-600" />
    },
    {
      id: 2,
      title: 'Home Goods Brand Ensures Quality Compliance',
      client: 'European Home Goods Brand',
      industry: 'Home & Garden',
      challenge: 'Quality issues with previous orders, needed strict compliance with EU standards',
      solution: 'Implemented pre-production and pre-shipment inspections, factory audit, quality system setup',
      results: ['Zero quality complaints', 'EU compliance achieved', 'On-time delivery'],
      icon: <CheckCircle className="h-8 w-8 text-green-600" />
    },
    {
      id: 3,
      title: 'Fashion Accessories Importer Streamlines Shipping',
      client: 'Australian Fashion Accessories Importer',
      industry: 'Fashion & Textiles',
      challenge: 'Complex shipping logistics, high freight costs, frequent delays',
      solution: 'Consolidated shipments, optimized shipping routes, coordinated with reliable freight forwarders',
      results: ['40% lower shipping costs', 'Faster delivery times', 'Simplified logistics'],
      icon: <Truck className="h-8 w-8 text-green-600" />
    }
  ]

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-900 to-blue-700 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold mb-4">Case Studies</h1>
          <p className="text-xl text-blue-100">Real success stories from our clients</p>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-12">
            {cases.map((caseStudy, index) => (
              <div key={caseStudy.id} className="bg-gray-50 rounded-lg p-8 hover:shadow-lg transition-shadow">
                <div className="flex items-start gap-6 mb-6">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center">
                      {caseStudy.icon}
                    </div>
                  </div>
                  <div className="flex-grow">
                    <h3 className="text-2xl font-semibold mb-2">{caseStudy.title}</h3>
                    <div className="flex flex-wrap gap-4 text-sm text-gray-600 mb-4">
                      <span><strong>Client:</strong> {caseStudy.client}</span>
                      <span><strong>Industry:</strong> {caseStudy.industry}</span>
                    </div>
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Challenge</h4>
                    <p className="text-gray-600">{caseStudy.challenge}</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Our Solution</h4>
                    <p className="text-gray-600">{caseStudy.solution}</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Results</h4>
                    <ul className="space-y-1">
                      {caseStudy.results.map((result, idx) => (
                        <li key={idx} className="flex items-center gap-2">
                          <CheckCircle className="h-4 w-4 text-green-600" />
                          <span className="text-gray-700">{result}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-blue-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Want Similar Results?</h2>
          <p className="text-xl mb-8 text-blue-100">Contact us today and let's discuss your sourcing needs</p>
          <Link
            to="/contact"
            className="bg-white text-blue-700 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors inline-flex items-center gap-2"
          >
            Get Started
            <ArrowRight className="h-5 w-5" />
          </Link>
        </div>
      </section>
    </div>
  )
}

export default CaseStudies
