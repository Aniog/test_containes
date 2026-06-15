import React from 'react'
import { Link } from 'react-router-dom'
import { Factory, TrendingUp, Shield, ArrowRight } from 'lucide-react'

const CaseStudies = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-blue-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Case Studies</h1>
          <p className="text-xl text-blue-100">
            Real success stories from our clients
          </p>
        </div>
      </section>

      {/* Featured Case Study */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-blue-50 rounded-2xl p-8 md:p-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="inline-block bg-blue-600 text-white px-4 py-2 rounded-full text-sm font-medium mb-6">
                  Featured Case Study
                </div>
                <h2 className="text-3xl font-bold text-gray-900 mb-4">
                  Electronics Retailer Reduces Sourcing Costs by 30%
                </h2>
                <p className="text-lg text-gray-600 mb-6">
                  A US-based electronics retailer was struggling with high sourcing costs and inconsistent quality. We helped them identify reliable suppliers, negotiate better prices, and implement quality control processes.
                </p>
                <div className="space-y-4 mb-8">
                  <div className="flex items-start gap-3">
                    <Shield className="w-5 h-5 text-green-500 flex-shrink-0 mt-1" />
                    <div>
                      <div className="font-semibold text-gray-900">Challenge</div>
                      <div className="text-gray-600">High costs, inconsistent quality, communication barriers</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Factory className="w-5 h-5 text-blue-600 flex-shrink-0 mt-1" />
                    <div>
                      <div className="font-semibold text-gray-900">Solution</div>
                      <div className="text-gray-600">Supplier verification, price negotiation, QC inspections</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <TrendingUp className="w-5 h-5 text-blue-600 flex-shrink-0 mt-1" />
                    <div>
                      <div className="font-semibold text-gray-900">Result</div>
                      <div className="text-gray-600">30% cost reduction, 98% quality pass rate</div>
                    </div>
                  </div>
                </div>
                <div className="grid grid-cols-3 gap-4">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-blue-600">30%</div>
                    <div className="text-sm text-gray-600">Cost Reduction</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-blue-600">98%</div>
                    <div className="text-sm text-gray-600">Quality Pass Rate</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-blue-600">6mo</div>
                    <div className="text-sm text-gray-600">Project Duration</div>
                  </div>
                </div>
              </div>
              <div className="bg-white rounded-xl p-8 shadow-sm">
                <div className="text-lg font-semibold text-gray-900 mb-4">Client Testimonial</div>
                <p className="text-gray-600 italic mb-6">
                  "SSourcing China transformed our sourcing process. They found us reliable suppliers, reduced our costs significantly, and ensured consistent quality. Their team is professional, responsive, and truly cares about our success."
                </p>
                <div className="font-semibold text-gray-900">John Smith</div>
                <div className="text-gray-600">CEO, TechGadgets Inc.</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* More Case Studies */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
            More Success Stories
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: 'Furniture Company Ensures Quality Standards',
                client: 'European Furniture Importer',
                challenge: 'Quality issues with existing suppliers',
                solution: 'Implemented comprehensive QC process with regular inspections',
                result: 'Zero defective shipments in 12 months',
                image: 'furniture-case',
              },
              {
                title: 'Fashion Brand Finds Reliable Supplier',
                client: 'Growing Fashion Brand',
                challenge: 'Unreliable suppliers causing delays',
                solution: 'Identified and verified long-term supplier partner',
                result: 'On-time delivery rate improved to 95%',
                image: 'fashion-case',
              },
              {
                title: 'Auto Parts Distributor Expands Product Line',
                client: 'Automotive Parts Distributor',
                challenge: 'Needed to source new product categories',
                solution: 'Identified suppliers for 50+ new products',
                result: 'Product line expanded by 40% in 6 months',
                image: 'automotive-case',
              },
              {
                title: 'Medical Device Company Achieves Certification',
                client: 'Medical Device Manufacturer',
                challenge: 'Needed CE-certified suppliers',
                solution: 'Verified suppliers with proper certifications',
                result: 'All products passed CE certification',
                image: 'medical-case',
              },
              {
                title: 'Toy Company Ensures Safety Compliance',
                client: 'Toy Manufacturer',
                challenge: 'Meeting international safety standards',
                solution: 'Implemented safety testing and compliance checks',
                result: '100% compliance with safety regulations',
                image: 'toys-case',
              },
              {
                title: 'Home Goods Retailer Optimizes Logistics',
                client: 'Home Goods Retailer',
                challenge: 'High shipping costs and delays',
                solution: 'Optimized shipping routes and consolidated cargo',
                result: 'Shipping costs reduced by 25%',
                image: 'homegoods-case',
              },
            ].map((caseStudy, index) => (
              <div key={index} className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow">
                <div className="h-48 bg-blue-100 flex items-center justify-center">
                  <Factory className="w-16 h-16 text-blue-300" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{caseStudy.title}</h3>
                  <p className="text-sm text-gray-500 mb-4">{caseStudy.client}</p>
                  <div className="space-y-3 mb-6">
                    <div>
                      <div className="text-sm font-medium text-gray-700">Challenge:</div>
                      <div className="text-sm text-gray-600">{caseStudy.challenge}</div>
                    </div>
                    <div>
                      <div className="text-sm font-medium text-gray-700">Solution:</div>
                      <div className="text-sm text-gray-600">{caseStudy.solution}</div>
                    </div>
                    <div>
                      <div className="text-sm font-medium text-gray-700">Result:</div>
                      <div className="text-sm text-green-600 font-medium">{caseStudy.result}</div>
                    </div>
                  </div>
                  <Link
                    to="/contact"
                    className="text-blue-600 font-medium inline-flex items-center gap-2 hover:gap-3 transition-all"
                  >
                    Discuss Similar Project <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Write Your Success Story?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Contact us today to discuss how we can help you achieve your sourcing goals
          </p>
          <Link
            to="/contact"
            className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors inline-flex items-center gap-2"
          >
            Get Started Today
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  )
}

export default CaseStudies
