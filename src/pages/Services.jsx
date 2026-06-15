import React, { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import { Factory, Shield, Truck, CheckCircle, Users, Globe, ArrowRight, FileCheck, Search, Package } from 'lucide-react'

export default function Services() {
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
            <h1 id="services-hero-title" className="text-5xl font-bold text-gray-900 mb-6">
              Our Sourcing Services
            </h1>
            <p id="services-hero-subtitle" className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive solutions to help you source from China with confidence and peace of mind
            </p>
          </div>
        </div>
      </section>

      {/* Main Services */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-20">
            {/* Service 1: Supplier Verification */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="flex items-center mb-6">
                  <div className="bg-blue-100 p-4 rounded-xl">
                    <Search className="w-12 h-12 text-blue-600" />
                  </div>
                </div>
                <h2 id="service-verification-title" className="text-3xl font-bold text-gray-900 mb-6">
                  Supplier Verification & Factory Audit
                </h2>
                <p id="service-verification-desc" className="text-lg text-gray-600 mb-6">
                  We conduct comprehensive supplier verification to ensure you work with legitimate, capable manufacturers. Our process includes:
                </p>
                <ul className="space-y-4 mb-8">
                  {[
                    "Business license verification",
                    "Factory on-site audits",
                    "Production capacity assessment",
                    "Quality management system evaluation",
                    "Past performance review",
                    "Financial stability check"
                  ].map((item, index) => (
                    <li key={index} className="flex items-start">
                      <CheckCircle className="w-6 h-6 text-green-500 mr-3 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
                <Link
                  to="/contact"
                  className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors inline-flex items-center"
                >
                  Get Supplier Verification
                  <ArrowRight className="ml-2" size={20} />
                </Link>
              </div>
              <div>
                <img
                  alt="Supplier Verification Factory Audit"
                  data-strk-img-id="service-verification-img"
                  data-strk-img="[service-verification-desc] [service-verification-title]"
                  data-strk-img-ratio="4x3"
                  data-strk-img-width="800"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  className="w-full rounded-xl shadow-lg"
                />
              </div>
            </div>

            {/* Service 2: Quality Control */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="order-2 lg:order-1">
                <img
                  alt="Quality Control Inspection"
                  data-strk-img-id="service-qc-img"
                  data-strk-img="Quality Control Inspection"
                  data-strk-img-ratio="4x3"
                  data-strk-img-width="800"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  className="w-full rounded-xl shadow-lg"
                />
              </div>
              <div className="order-1 lg:order-2">
                <div className="flex items-center mb-6">
                  <div className="bg-blue-100 p-4 rounded-xl">
                    <Shield className="w-12 h-12 text-blue-600" />
                  </div>
                </div>
                <h2 id="service-qc-title" className="text-3xl font-bold text-gray-900 mb-6">
                  Quality Control & Inspection
                </h2>
                <p id="service-qc-desc" className="text-lg text-gray-600 mb-6">
                  Our multi-stage quality control process ensures your products meet specifications and quality standards:
                </p>
                <ul className="space-y-4 mb-8">
                  {[
                    "Pre-production inspection (raw materials, components)",
                    "During production inspection (process monitoring)",
                    "Pre-shipment inspection (final product quality)",
                    "Container loading supervision",
                    "Laboratory testing coordination",
                    "Quality documentation review"
                  ].map((item, index) => (
                    <li key={index} className="flex items-start">
                      <CheckCircle className="w-6 h-6 text-green-500 mr-3 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
                <Link
                  to="/contact"
                  className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors inline-flex items-center"
                >
                  Schedule Quality Inspection
                  <ArrowRight className="ml-2" size={20} />
                </Link>
              </div>
            </div>

            {/* Service 3: Production Monitoring */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="flex items-center mb-6">
                  <div className="bg-blue-100 p-4 rounded-xl">
                    <Factory className="w-12 h-12 text-blue-600" />
                  </div>
                </div>
                <h2 id="service-production-title" className="text-3xl font-bold text-gray-900 mb-6">
                  Production Monitoring
                </h2>
                <p id="service-production-desc" className="text-lg text-gray-600 mb-6">
                  We provide regular updates and on-site monitoring to ensure your production stays on track:
                </p>
                <ul className="space-y-4 mb-8">
                  {[
                    "Regular production progress reports",
                    "On-site visits and updates",
                    "Timeline monitoring and alerts",
                    "Production bottleneck identification",
                    "Quality checkpoint verification",
                    "Photo and video documentation"
                  ].map((item, index) => (
                    <li key={index} className="flex items-start">
                      <CheckCircle className="w-6 h-6 text-green-500 mr-3 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
                <Link
                  to="/contact"
                  className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors inline-flex items-center"
                >
                  Monitor Your Production
                  <ArrowRight className="ml-2" size={20} />
                </Link>
              </div>
              <div>
                <img
                  alt="Production Monitoring"
                  data-strk-img-id="service-production-img"
                  data-strk-img="[service-production-desc] [service-production-title]"
                  data-strk-img-ratio="4x3"
                  data-strk-img-width="800"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  className="w-full rounded-xl shadow-lg"
                />
              </div>
            </div>

            {/* Service 4: Shipping Coordination */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="order-2 lg:order-1">
                <img
                  alt="Shipping Coordination Logistics"
                  data-strk-img-id="service-shipping-img"
                  data-strk-img="Shipping Coordination Logistics"
                  data-strk-img-ratio="4x3"
                  data-strk-img-width="800"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  className="w-full rounded-xl shadow-lg"
                />
              </div>
              <div className="order-1 lg:order-2">
                <div className="flex items-center mb-6">
                  <div className="bg-blue-100 p-4 rounded-xl">
                    <Truck className="w-12 h-12 text-blue-600" />
                  </div>
                </div>
                <h2 id="service-shipping-title" className="text-3xl font-bold text-gray-900 mb-6">
                  Shipping & Logistics Coordination
                </h2>
                <p id="service-shipping-desc" className="text-lg text-gray-600 mb-6">
                  We handle the complexities of international shipping to ensure your goods arrive safely and on time:
                </p>
                <ul className="space-y-4 mb-8">
                  {[
                    "Freight forwarder coordination",
                    "Shipping method optimization (air, sea, rail)",
                    "Customs documentation preparation",
                    "Insurance arrangement",
                    "Door-to-door delivery coordination",
                    "Real-time shipment tracking"
                  ].map((item, index) => (
                    <li key={index} className="flex items-start">
                      <CheckCircle className="w-6 h-6 text-green-500 mr-3 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
                <Link
                  to="/contact"
                  className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors inline-flex items-center"
                >
                  Coordinate Your Shipping
                  <ArrowRight className="ml-2" size={20} />
                </Link>
              </div>
            </div>

            {/* Service 5: Negotiation Support */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="flex items-center mb-6">
                  <div className="bg-blue-100 p-4 rounded-xl">
                    <Users className="w-12 h-12 text-blue-600" />
                  </div>
                </div>
                <h2 id="service-negotiation-title" className="text-3xl font-bold text-gray-900 mb-6">
                  Negotiation & Price Optimization
                </h2>
                <p id="service-negotiation-desc" className="text-lg text-gray-600 mb-6">
                  Leverage our experience and local presence to get the best possible terms:
                </p>
                <ul className="space-y-4 mb-8">
                  {[
                    "Price negotiation with suppliers",
                    "Payment terms optimization",
                    "Minimum order quantity (MOQ) negotiation",
                    "Lead time negotiation",
                    "Contract terms review",
                    "Cost breakdown analysis"
                  ].map((item, index) => (
                    <li key={index} className="flex items-start">
                      <CheckCircle className="w-6 h-6 text-green-500 mr-3 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
                <Link
                  to="/contact"
                  className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors inline-flex items-center"
                >
                  Get Negotiation Support
                  <ArrowRight className="ml-2" size={20} />
                </Link>
              </div>
              <div>
                <img
                  alt="Negotiation Support"
                  data-strk-img-id="service-negotiation-img"
                  data-strk-img="[service-negotiation-desc] [service-negotiation-title]"
                  data-strk-img-ratio="4x3"
                  data-strk-img-width="800"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  className="w-full rounded-xl shadow-lg"
                />
              </div>
            </div>

            {/* Service 6: Sourcing Consultation */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="order-2 lg:order-1">
                <img
                  alt="Sourcing Consultation"
                  data-strk-img-id="service-consultation-img"
                  data-strk-img="Sourcing Consultation"
                  data-strk-img-ratio="4x3"
                  data-strk-img-width="800"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  className="w-full rounded-xl shadow-lg"
                />
              </div>
              <div className="order-1 lg:order-2">
                <div className="flex items-center mb-6">
                  <div className="bg-blue-100 p-4 rounded-xl">
                    <Globe className="w-12 h-12 text-blue-600" />
                  </div>
                </div>
                <h2 id="service-consultation-title" className="text-3xl font-bold text-gray-900 mb-6">
                  Sourcing Consultation & Strategy
                </h2>
                <p id="service-consultation-desc" className="text-lg text-gray-600 mb-6">
                  Get expert advice on your China sourcing strategy and product development:
                </p>
                <ul className="space-y-4 mb-8">
                  {[
                    "Product feasibility assessment",
                    "Material and component sourcing",
                    "Manufacturing process consultation",
                    "Market trend analysis",
                    "Competitor product analysis",
                    "Supply chain optimization"
                  ].map((item, index) => (
                    <li key={index} className="flex items-start">
                      <CheckCircle className="w-6 h-6 text-green-500 mr-3 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
                <Link
                  to="/contact"
                  className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors inline-flex items-center"
                >
                  Get Expert Consultation
                  <ArrowRight className="ml-2" size={20} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Start Sourcing from China?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            Contact us today for a free consultation and discover how we can help you source with confidence.
          </p>
          <Link
            to="/contact"
            className="bg-white text-blue-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-colors inline-flex items-center"
          >
            Get Your Free Quote
            <ArrowRight className="ml-2" size={20} />
          </Link>
        </div>
      </section>
    </div>
  )
}
