import React from 'react'
import { Link } from 'react-router-dom'
import { Search, ClipboardCheck, Shield, Truck, Factory, FileCheck, ArrowRight } from 'lucide-react'

const Services = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-blue-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Services</h1>
          <p className="text-xl text-blue-100">
            Comprehensive sourcing solutions tailored to your business needs
          </p>
        </div>
      </section>

      {/* Main Services */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Supplier Sourcing */}
            <div className="bg-gray-50 rounded-xl p-8">
              <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
                <Search className="w-8 h-8 text-blue-600" />
              </div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Supplier Sourcing</h2>
              <p className="text-gray-600 mb-6">
                We identify and evaluate suppliers that match your specific requirements, ensuring they have the capacity, quality standards, and reliability you need.
              </p>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start gap-2">
                  <ArrowRight className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                  <span>Supplier identification and screening</span>
                </li>
                <li className="flex items-start gap-2">
                  <ArrowRight className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                  <span>Price comparison and negotiation</span>
                </li>
                <li className="flex items-start gap-2">
                  <ArrowRight className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                  <span>Sample coordination and evaluation</span>
                </li>
                <li className="flex items-start gap-2">
                  <ArrowRight className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                  <span>Supplier background checks</span>
                </li>
              </ul>
            </div>

            {/* Factory Audit & Verification */}
            <div className="bg-gray-50 rounded-xl p-8">
              <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
                <ClipboardCheck className="w-8 h-8 text-blue-600" />
              </div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Factory Audit & Verification</h2>
              <p className="text-gray-600 mb-6">
                Our on-site audits verify factory legitimacy, production capacity, quality management systems, and compliance with international standards.
              </p>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start gap-2">
                  <ArrowRight className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                  <span>On-site factory inspections</span>
                </li>
                <li className="flex items-start gap-2">
                  <ArrowRight className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                  <span>Production capacity assessment</span>
                </li>
                <li className="flex items-start gap-2">
                  <ArrowRight className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                  <span>Quality management system review</span>
                </li>
                <li className="flex items-start gap-2">
                  <ArrowRight className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                  <span>Compliance and certification verification</span>
                </li>
              </ul>
            </div>

            {/* Quality Control & Inspection */}
            <div className="bg-gray-50 rounded-xl p-8">
              <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
                <Shield className="w-8 h-8 text-blue-600" />
              </div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Quality Control & Inspection</h2>
              <p className="text-gray-600 mb-6">
                Comprehensive quality inspections at every stage of production to ensure your products meet specifications and quality standards.
              </p>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start gap-2">
                  <ArrowRight className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                  <span>Pre-production inspections</span>
                </li>
                <li className="flex items-start gap-2">
                  <ArrowRight className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                  <span>During production inspections</span>
                </li>
                <li className="flex items-start gap-2">
                  <ArrowRight className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                  <span>Pre-shipment inspections</span>
                </li>
                <li className="flex items-start gap-2">
                  <ArrowRight className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                  <span>Detailed inspection reports with photos</span>
                </li>
              </ul>
            </div>

            {/* Production Monitoring */}
            <div className="bg-gray-50 rounded-xl p-8">
              <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
                <Factory className="w-8 h-8 text-blue-600" />
              </div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Production Monitoring</h2>
              <p className="text-gray-600 mb-6">
                Regular monitoring and updates throughout the production process to ensure timelines are met and quality is maintained.
              </p>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start gap-2">
                  <ArrowRight className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                  <span>Regular production status updates</span>
                </li>
                <li className="flex items-start gap-2">
                  <ArrowRight className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                  <span>Timeline tracking and management</span>
                </li>
                <li className="flex items-start gap-2">
                  <ArrowRight className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                  <span>Progress photo documentation</span>
                </li>
                <li className="flex items-start gap-2">
                  <ArrowRight className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                  <span>Proactive issue identification</span>
                </li>
              </ul>
            </div>

            {/* Shipping & Logistics */}
            <div className="bg-gray-50 rounded-xl p-8">
              <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
                <Truck className="w-8 h-8 text-blue-600" />
              </div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Shipping & Logistics</h2>
              <p className="text-gray-600 mb-6">
                End-to-end logistics coordination from factory to your warehouse, including customs clearance and documentation.
              </p>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start gap-2">
                  <ArrowRight className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                  <span>Freight forwarding coordination</span>
                </li>
                <li className="flex items-start gap-2">
                  <ArrowRight className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                  <span>Customs clearance assistance</span>
                </li>
                <li className="flex items-start gap-2">
                  <ArrowRight className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                  <span>Shipping documentation preparation</span>
                </li>
                <li className="flex items-start gap-2">
                  <ArrowRight className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                  <span>Cargo insurance arrangement</span>
                </li>
              </ul>
            </div>

            {/* Contract Negotiation */}
            <div className="bg-gray-50 rounded-xl p-8">
              <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
                <FileCheck className="w-8 h-8 text-blue-600" />
              </div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Contract Negotiation</h2>
              <p className="text-gray-600 mb-6">
                Professional negotiation and contract review to protect your interests and ensure favorable terms.
              </p>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start gap-2">
                  <ArrowRight className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                  <span>Price and payment term negotiation</span>
                </li>
                <li className="flex items-start gap-2">
                  <ArrowRight className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                  <span>Contract review and drafting</span>
                </li>
                <li className="flex items-start gap-2">
                  <ArrowRight className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                  <span>Risk mitigation strategies</span>
                </li>
                <li className="flex items-start gap-2">
                  <ArrowRight className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                  <span>Legal compliance review</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Need Help with Your Sourcing Project?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Contact us today for a free consultation and quote
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

export default Services
