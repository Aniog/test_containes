import React, { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import { ArrowRight, CheckCircle, TrendingUp, Users, Globe } from 'lucide-react'

export default function CaseStudies() {
  const containerRef = useRef(null)

  useEffect(() => {
    if (containerRef.current) {
      return ImageHelper.loadImages(strkImgConfig, containerRef.current)
    }
  }, [])

  return (
    <div ref={containerRef}>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 id="casestudies-hero-title" className="text-5xl font-bold text-gray-900 mb-6">
              Success Stories
            </h1>
            <p id="casestudies-hero-subtitle" className="text-xl text-gray-600 max-w-3xl mx-auto">
              Real examples of how we helped businesses successfully source from China and achieve their goals
            </p>
          </div>
        </div>
      </section>

      {/* Featured Case Studies */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-20">
            {/* Case Study 1 */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="flex items-center mb-4">
                  <span className="bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-sm font-semibold">
                    Electronics
                  </span>
                </div>
                <h2 id="case1-title" className="text-3xl font-bold text-gray-900 mb-4">
                  Electronics Startup Reduces Costs by 30%
                </h2>
                <p className="text-gray-600 mb-2">
                  <strong>Client:</strong> TechStart Inc., USA
                </p>
                <p id="case1-challenge" className="text-gray-600 mb-6">
                  <strong>Challenge:</strong> TechStart was struggling with high product costs from local suppliers, making it difficult to compete in the market and achieve healthy profit margins.
                </p>
                <div className="space-y-4 mb-6">
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Our Solution:</h4>
                    <p id="case1-solution" className="text-gray-600">
                      We identified a reliable Chinese manufacturer with strong R&D capabilities, negotiated competitive pricing, implemented quality control processes, and coordinated shipping to reduce overall costs.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Results:</h4>
                    <ul className="space-y-2">
                      {[
                        "30% reduction in product costs",
                        "Improved profit margins by 25%",
                        "Faster time to market",
                        "Consistent product quality",
                        "Scalable production capacity"
                      ].map((result, index) => (
                        <li key={index} className="flex items-start">
                          <CheckCircle className="w-5 h-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                          <span className="text-gray-700">{result}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                <div className="bg-blue-50 rounded-lg p-4">
                  <p className="text-blue-800 italic">
                    "SSourcing China helped us reduce costs significantly while maintaining quality. Their expertise and support were invaluable."
                  </p>
                  <p className="text-blue-600 font-semibold mt-2">- John Smith, CEO of TechStart Inc.</p>
                </div>
              </div>
              <div>
                <img
                  alt="Electronics Startup Case Study"
                  data-strk-img-id="case1-img"
                  data-strk-img="[case1-solution] [case1-challenge] [case1-title]"
                  data-strk-img-ratio="4x3"
                  data-strk-img-width="800"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  className="w-full rounded-xl shadow-lg"
                />
              </div>
            </div>

            {/* Case Study 2 */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="order-2 lg:order-1">
                <img
                  alt="Furniture Retailer Case Study"
                  data-strk-img-id="case2-img"
                  data-strk-img="Furniture Retailer Quality Control Case Study"
                  data-strk-img-ratio="4x3"
                  data-strk-img-width="800"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  className="w-full rounded-xl shadow-lg"
                />
              </div>
              <div className="order-1 lg:order-2">
                <div className="flex items-center mb-4">
                  <span className="bg-green-100 text-green-600 px-3 py-1 rounded-full text-sm font-semibold">
                    Furniture
                  </span>
                </div>
                <h2 id="case2-title" className="text-3xl font-bold text-gray-900 mb-4">
                  Furniture Retailer Ensures Quality & Grows 40%
                </h2>
                <p className="text-gray-600 mb-2">
                  <strong>Client:</strong> HomeStyle Ltd., UK
                </p>
                <p id="case2-challenge" className="text-gray-600 mb-6">
                  <strong>Challenge:</strong> HomeStyle had previous quality issues with furniture imports, including damaged goods, inconsistent finishes, and customer complaints.
                </p>
                <div className="space-y-4 mb-6">
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Our Solution:</h4>
                    <p id="case2-solution" className="text-gray-600">
                      We implemented a rigorous quality control process, conducted factory audits, established clear quality standards, and provided regular production monitoring and pre-shipment inspections.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Results:</h4>
                    <ul className="space-y-2">
                      {[
                        "Zero quality complaints in 12 months",
                        "40% business growth year-over-year",
                        "Improved customer satisfaction",
                        "Reduced return rates by 80%",
                        "Established long-term supplier relationship"
                      ].map((result, index) => (
                        <li key={index} className="flex items-start">
                          <CheckCircle className="w-5 h-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                          <span className="text-gray-700">{result}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                <div className="bg-blue-50 rounded-lg p-4">
                  <p className="text-blue-800 italic">
                    "The quality control process gave us confidence in our imports. Our customers are happier, and our business is growing."
                  </p>
                  <p className="text-blue-600 font-semibold mt-2">- Sarah Johnson, Founder of HomeStyle Ltd.</p>
                </div>
              </div>
            </div>

            {/* Case Study 3 */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="flex items-center mb-4">
                  <span className="bg-purple-100 text-purple-600 px-3 py-1 rounded-full text-sm font-semibold">
                    Fashion
                  </span>
                </div>
                <h2 id="case3-title" className="text-3xl font-bold text-gray-900 mb-4">
                  Fashion Brand Scales Production 3x
                </h2>
                <p className="text-gray-600 mb-2">
                  <strong>Client:</strong> ModaTrend, Germany
                </p>
                <p id="case3-challenge" className="text-gray-600 mb-6">
                  <strong>Challenge:</strong> ModaTrend was struggling to scale production while maintaining consistent quality across multiple product lines and suppliers.
                </p>
                <div className="space-y-4 mb-6">
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Our Solution:</h4>
                    <p id="case3-solution" className="text-gray-600">
                      We identified multiple reliable suppliers, coordinated production schedules, implemented centralized quality standards, and provided ongoing production monitoring and logistics coordination.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Results:</h4>
                    <ul className="space-y-2">
                      {[
                        "3x production capacity increase",
                        "Consistent quality across suppliers",
                        "Reduced lead times by 20%",
                        "Improved supply chain visibility",
                        "Successful product launches in new markets"
                      ].map((result, index) => (
                        <li key={index} className="flex items-start">
                          <CheckCircle className="w-5 h-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                          <span className="text-gray-700">{result}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                <div className="bg-blue-50 rounded-lg p-4">
                  <p className="text-blue-800 italic">
                    "SSourcing China helped us scale our production efficiently. Their coordination across multiple suppliers was excellent."
                  </p>
                  <p className="text-blue-600 font-semibold mt-2">- Michael Weber, Director of ModaTrend</p>
                </div>
              </div>
              <div>
                <img
                  alt="Fashion Brand Case Study"
                  data-strk-img-id="case3-img"
                  data-strk-img="[case3-solution] [case3-challenge] [case3-title]"
                  data-strk-img-ratio="4x3"
                  data-strk-img-width="800"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  className="w-full rounded-xl shadow-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* More Case Studies */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              More Success Stories
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Toy Company Reduces Lead Time by 50%",
                client: "PlayTime Toys, Australia",
                result: "Faster market response, seasonal product launches"
              },
              {
                title: "Health Supplement Brand Ensures Compliance",
                client: "VitaHealth, Canada",
                result: "FDA-compliant manufacturing, quality certifications"
              },
              {
                title: "Automotive Parts Supplier Improves Margins",
                client: "AutoParts Pro, USA",
                result: "25% cost reduction, improved supplier reliability"
              }
            ].map((study, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-sm">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{study.title}</h3>
                <p className="text-gray-600 mb-2"><strong>Client:</strong> {study.client}</p>
                <p className="text-gray-600"><strong>Result:</strong> {study.result}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            {[
              { number: "500+", label: "Clients Served", icon: <Users className="w-8 h-8 text-blue-600 mx-auto mb-2" /> },
              { number: "30+", label: "Countries Served", icon: <Globe className="w-8 h-8 text-blue-600 mx-auto mb-2" /> },
              { number: "1000+", label: "Projects Completed", icon: <CheckCircle className="w-8 h-8 text-blue-600 mx-auto mb-2" /> },
              { number: "98%", label: "Client Satisfaction", icon: <TrendingUp className="w-8 h-8 text-blue-600 mx-auto mb-2" /> }
            ].map((stat, index) => (
              <div key={index}>
                {stat.icon}
                <div className="text-5xl font-bold text-blue-600 mb-2">{stat.number}</div>
                <div className="text-lg text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Become Our Next Success Story?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            Contact us today and let's discuss how we can help you achieve your sourcing goals.
          </p>
          <Link
            to="/contact"
            className="bg-white text-blue-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-colors inline-flex items-center"
          >
            Get Your Free Consultation
            <ArrowRight className="ml-2" size={20} />
          </Link>
        </div>
      </section>
    </div>
  )
}
