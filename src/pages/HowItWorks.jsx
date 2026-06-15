import React from 'react'
import { Link } from 'react-router-dom'
import { Search, ClipboardCheck, Factory, Shield, Truck, CheckCircle, ArrowRight } from 'lucide-react'

const HowItWorks = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-blue-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">How It Works</h1>
          <p className="text-xl text-blue-100">
            Our proven 6-step process for successful China sourcing
          </p>
        </div>
      </section>

      {/* Process Steps */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {/* Step 1 */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="text-6xl font-bold text-blue-100 mb-4">01</div>
                <h2 className="text-3xl font-bold text-gray-900 mb-4">Initial Consultation</h2>
                <p className="text-lg text-gray-600 mb-6">
                  We start by understanding your business needs, product specifications, target price, quality standards, and expected timeline. This helps us tailor our approach to your specific requirements.
                </p>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <span>Understand product requirements</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <span>Define quality standards</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <span>Set target price and timeline</span>
                  </li>
                </ul>
              </div>
              <div className="bg-blue-50 rounded-2xl h-80 flex items-center justify-center">
                <Search className="w-32 h-32 text-blue-200" />
              </div>
            </div>

            {/* Step 2 */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="bg-blue-50 rounded-2xl h-80 flex items-center justify-center order-2 lg:order-1">
                <Factory className="w-32 h-32 text-blue-200" />
              </div>
              <div className="order-1 lg:order-2">
                <div className="text-6xl font-bold text-blue-100 mb-4">02</div>
                <h2 className="text-3xl font-bold text-gray-900 mb-4">Supplier Identification</h2>
                <p className="text-lg text-gray-600 mb-6">
                  Leveraging our extensive network and industry knowledge, we identify potential suppliers that match your requirements. We conduct initial screening to shortlist the most suitable candidates.
                </p>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <span>Search our supplier database</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <span>Initial capability assessment</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <span>Shortlist qualified suppliers</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Step 3 */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="text-6xl font-bold text-blue-100 mb-4">03</div>
                <h2 className="text-3xl font-bold text-gray-900 mb-4">Factory Audit & Verification</h2>
                <p className="text-lg text-gray-600 mb-6">
                  Our team conducts on-site factory audits to verify legitimacy, production capacity, quality management systems, and compliance with international standards.
                </p>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <span>On-site factory inspection</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <span>Production capacity verification</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <span>Quality system assessment</span>
                  </li>
                </ul>
              </div>
              <div className="bg-blue-50 rounded-2xl h-80 flex items-center justify-center">
                <ClipboardCheck className="w-32 h-32 text-blue-200" />
              </div>
            </div>

            {/* Step 4 */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="bg-blue-50 rounded-2xl h-80 flex items-center justify-center order-2 lg:order-1">
                <Shield className="w-32 h-32 text-blue-200" />
              </div>
              <div className="order-1 lg:order-2">
                <div className="text-6xl font-bold text-blue-100 mb-4">04</div>
                <h2 className="text-3xl font-bold text-gray-900 mb-4">Sample Evaluation & Negotiation</h2>
                <p className="text-lg text-gray-600 mb-6">
                  We coordinate sample production, evaluate quality, and negotiate favorable terms including price, payment terms, and delivery schedules.
                </p>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <span>Coordinate sample production</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <span>Quality evaluation</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <span>Price and term negotiation</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Step 5 */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="text-6xl font-bold text-blue-100 mb-4">05</div>
                <h2 className="text-3xl font-bold text-gray-900 mb-4">Production & Quality Control</h2>
                <p className="text-lg text-gray-600 mb-6">
                  Throughout production, we monitor progress, conduct quality inspections, and provide regular updates to ensure your order meets specifications and timeline.
                </p>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <span>Regular production monitoring</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <span>Quality inspections at every stage</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <span>Progress updates and reports</span>
                  </li>
                </ul>
              </div>
              <div className="bg-blue-50 rounded-2xl h-80 flex items-center justify-center">
                <Factory className="w-32 h-32 text-blue-200" />
              </div>
            </div>

            {/* Step 6 */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="bg-blue-50 rounded-2xl h-80 flex items-center justify-center order-2 lg:order-1">
                <Truck className="w-32 h-32 text-blue-200" />
              </div>
              <div className="order-1 lg:order-2">
                <div className="text-6xl font-bold text-blue-100 mb-4">06</div>
                <h2 className="text-3xl font-bold text-gray-900 mb-4">Shipping & Delivery</h2>
                <p className="text-lg text-gray-600 mb-6">
                  We coordinate shipping, handle customs clearance, and ensure your products are delivered safely to your warehouse or specified location.
                </p>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <span>Freight coordination</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <span>Customs clearance assistance</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <span>Final delivery to your door</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Start Your Sourcing Project?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Contact us today to discuss your requirements and get a free quote
          </p>
          <Link
            to="/contact"
            className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors inline-flex items-center gap-2"
          >
            Get a Free Quote
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  )
}

export default HowItWorks
