import React, { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import { ArrowRight, CheckCircle, FileSearch, Factory, Shield, Truck, Package, Clipboard, Users } from 'lucide-react'

export default function HowItWorks() {
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
            <h1 id="how-hero-title" className="text-5xl font-bold text-gray-900 mb-6">
              How Our Sourcing Process Works
            </h1>
            <p id="how-hero-subtitle" className="text-xl text-gray-600 max-w-3xl mx-auto">
              A systematic, transparent approach to help you source from China successfully
            </p>
          </div>
        </div>
      </section>

      {/* Detailed Process Steps */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-20">
            {/* Step 1 */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="flex items-center mb-6">
                  <div className="bg-blue-600 text-white w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold">
                    1
                  </div>
                  <div className="ml-4">
                    <h2 id="step1-title" className="text-3xl font-bold text-gray-900">
                      Initial Consultation & Requirements Analysis
                    </h2>
                  </div>
                </div>
                <p id="step1-desc" className="text-lg text-gray-600 mb-6">
                  We start by understanding your business, product requirements, quality standards, target price, and timeline. This helps us tailor our sourcing strategy to your specific needs.
                </p>
                <div className="bg-gray-50 rounded-xl p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">What we discuss:</h3>
                  <ul className="space-y-3">
                    {[
                      "Product specifications and technical requirements",
                      "Quality standards and certifications needed",
                      "Target price and budget constraints",
                      "Estimated order quantity and frequency",
                      "Timeline and delivery requirements",
                      "Previous sourcing experience (if any)"
                    ].map((item, index) => (
                      <li key={index} className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div>
                <img
                  alt="Initial Consultation Requirements Analysis"
                  data-strk-img-id="step1-img"
                  data-strk-img="[step1-desc] [step1-title]"
                  data-strk-img-ratio="4x3"
                  data-strk-img-width="800"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  className="w-full rounded-xl shadow-lg"
                />
              </div>
            </div>

            {/* Step 2 */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="order-2 lg:order-1">
                <img
                  alt="Supplier Identification Research"
                  data-strk-img-id="step2-img"
                  data-strk-img="Supplier Identification Research"
                  data-strk-img-ratio="4x3"
                  data-strk-img-width="800"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  className="w-full rounded-xl shadow-lg"
                />
              </div>
              <div className="order-1 lg:order-2">
                <div className="flex items-center mb-6">
                  <div className="bg-blue-600 text-white w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold">
                    2
                  </div>
                  <div className="ml-4">
                    <h2 id="step2-title" className="text-3xl font-bold text-gray-900">
                      Supplier Identification & Shortlisting
                    </h2>
                  </div>
                </div>
                <p id="step2-desc" className="text-lg text-gray-600 mb-6">
                  We leverage our extensive network and database to identify potential suppliers that match your requirements. We then shortlist the most suitable candidates based on capability, capacity, and compatibility.
                </p>
                <div className="bg-gray-50 rounded-xl p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Our approach:</h3>
                  <ul className="space-y-3">
                    {[
                      "Search our verified supplier database",
                      "Network referrals and recommendations",
                      "Online platform research (Alibaba, Made-in-China, etc.)",
                      "Trade show contacts and industry connections",
                      "Initial capability and capacity assessment",
                      "Preliminary quote requests"
                    ].map((item, index) => (
                      <li key={index} className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {/* Step 3 */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="flex items-center mb-6">
                  <div className="bg-blue-600 text-white w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold">
                    3
                  </div>
                  <div className="ml-4">
                    <h2 id="step3-title" className="text-3xl font-bold text-gray-900">
                      Supplier Verification & Factory Audit
                    </h2>
                  </div>
                </div>
                <p id="step3-desc" className="text-lg text-gray-600 mb-6">
                  Before you commit to any supplier, we conduct thorough verification to ensure they are legitimate, capable, and reliable. This includes factory audits, license checks, and capability assessments.
                </p>
                <div className="bg-gray-50 rounded-xl p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Verification includes:</h3>
                  <ul className="space-y-3">
                    {[
                      "Business license and certification verification",
                      "On-site factory audit (when necessary)",
                      "Production equipment and capacity assessment",
                      "Quality management system evaluation",
                      "Past client references and performance review",
                      "Financial stability assessment"
                    ].map((item, index) => (
                      <li key={index} className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div>
                <img
                  alt="Supplier Verification Factory Audit"
                  data-strk-img-id="step3-img"
                  data-strk-img="[step3-desc] [step3-title]"
                  data-strk-img-ratio="4x3"
                  data-strk-img-width="800"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  className="w-full rounded-xl shadow-lg"
                />
              </div>
            </div>

            {/* Step 4 */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="order-2 lg:order-1">
                <img
                  alt="Sampling Quotation Evaluation"
                  data-strk-img-id="step4-img"
                  data-strk-img="Sampling Quotation Evaluation"
                  data-strk-img-ratio="4x3"
                  data-strk-img-width="800"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  className="w-full rounded-xl shadow-lg"
                />
              </div>
              <div className="order-1 lg:order-2">
                <div className="flex items-center mb-6">
                  <div className="bg-blue-600 text-white w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold">
                    4
                  </div>
                  <div className="ml-4">
                    <h2 id="step4-title" className="text-3xl font-bold text-gray-900">
                      Sampling & Quotation Evaluation
                    </h2>
                  </div>
                </div>
                <p id="step4-desc" className="text-lg text-gray-600 mb-6">
                  We help you get product samples from shortlisted suppliers and evaluate their quotations. This allows you to assess quality, compare offers, and make informed decisions.
                </p>
                <div className="bg-gray-50 rounded-xl p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">What we do:</h3>
                  <ul className="space-y-3">
                    {[
                      "Coordinate sample production and delivery",
                      "Evaluate sample quality against specifications",
                      "Analyze and compare supplier quotations",
                      "Negotiate better terms and pricing",
                      "Assess total cost (product, tooling, shipping)",
                      "Provide recommendation based on evaluation"
                    ].map((item, index) => (
                      <li key={index} className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {/* Step 5 */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="flex items-center mb-6">
                  <div className="bg-blue-600 text-white w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold">
                    5
                  </div>
                  <div className="ml-4">
                    <h2 id="step5-title" className="text-3xl font-bold text-gray-900">
                      Production Monitoring & Quality Control
                    </h2>
                  </div>
                </div>
                <p id="step5-desc" className="text-lg text-gray-600 mb-6">
                  Once you place an order, we monitor production progress and conduct quality inspections at different stages to ensure your products meet specifications and quality standards.
                </p>
                <div className="bg-gray-50 rounded-xl p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Monitoring includes:</h3>
                  <ul className="space-y-3">
                    {[
                      "Regular production progress updates",
                      "Pre-production inspection (materials, components)",
                      "During production inspection (process monitoring)",
                      "Pre-shipment inspection (final product quality)",
                      "Photo and video documentation",
                      "Immediate issue identification and resolution"
                    ].map((item, index) => (
                      <li key={index} className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div>
                <img
                  alt="Production Monitoring Quality Control"
                  data-strk-img-id="step5-img"
                  data-strk-img="[step5-desc] [step5-title]"
                  data-strk-img-ratio="4x3"
                  data-strk-img-width="800"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  className="w-full rounded-xl shadow-lg"
                />
              </div>
            </div>

            {/* Step 6 */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="order-2 lg:order-1">
                <img
                  alt="Shipping Logistics Coordination"
                  data-strk-img-id="step6-img"
                  data-strk-img="Shipping Logistics Coordination"
                  data-strk-img-ratio="4x3"
                  data-strk-img-width="800"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  className="w-full rounded-xl shadow-lg"
                />
              </div>
              <div className="order-1 lg:order-2">
                <div className="flex items-center mb-6">
                  <div className="bg-blue-600 text-white w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold">
                    6
                  </div>
                  <div className="ml-4">
                    <h2 id="step6-title" className="text-3xl font-bold text-gray-900">
                      Shipping & Logistics Coordination
                    </h2>
                  </div>
                </div>
                <p id="step6-desc" className="text-lg text-gray-600 mb-6">
                  We coordinate with reliable freight forwarders, handle all documentation, and ensure your goods are shipped safely and arrive on time at your designated location.
                </p>
                <div className="bg-gray-50 rounded-xl p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Shipping services:</h3>
                  <ul className="space-y-3">
                    {[
                      "Freight forwarder selection and coordination",
                      "Shipping method optimization (air, sea, rail, express)",
                      "Customs documentation preparation",
                      "Insurance arrangement",
                      "Container loading supervision",
                      "Real-time shipment tracking and updates"
                    ].map((item, index) => (
                      <li key={index} className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {/* Step 7 */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="flex items-center mb-6">
                  <div className="bg-blue-600 text-white w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold">
                    7
                  </div>
                  <div className="ml-4">
                    <h2 id="step7-title" className="text-3xl font-bold text-gray-900">
                      After-Sales Support & Continuous Improvement
                    </h2>
                  </div>
                </div>
                <p id="step7-desc" className="text-lg text-gray-600 mb-6">
                  Our service doesn't end with delivery. We provide ongoing support, help resolve any issues, and continuously improve the sourcing process for your future orders.
                </p>
                <div className="bg-gray-50 rounded-xl p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Ongoing support:</h3>
                  <ul className="space-y-3">
                    {[
                      "Issue resolution and claims handling",
                      "Supplier performance feedback",
                      "Reorder coordination and optimization",
                      "Product improvement suggestions",
                      "Market trend updates and insights",
                      "Long-term partnership development"
                    ].map((item, index) => (
                      <li key={index} className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div>
                <img
                  alt="After Sales Support"
                  data-strk-img-id="step7-img"
                  data-strk-img="[step7-desc] [step7-title]"
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

      {/* Timeline Overview */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Typical Project Timeline
            </h2>
            <p className="text-xl text-gray-600">
              What to expect at each stage of the sourcing process
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            {[
              { phase: "Consultation & Requirements", duration: "1-3 days", description: "Understanding your needs and defining project scope" },
              { phase: "Supplier Identification", duration: "3-7 days", description: "Research and shortlisting potential suppliers" },
              { phase: "Verification & Sampling", duration: "7-14 days", description: "Factory audits, sample production, and evaluation" },
              { phase: "Negotiation & Order", duration: "3-7 days", description: "Price negotiation, contract signing, and deposit" },
              { phase: "Production & QC", duration: "15-45 days", description: "Depending on product complexity and order quantity" },
              { phase: "Shipping & Delivery", duration: "7-45 days", description: "Depending on shipping method and destination" }
            ].map((item, index) => (
              <div key={index} className="flex items-start mb-8 last:mb-0">
                <div className="bg-blue-600 text-white w-12 h-12 rounded-full flex items-center justify-center font-bold flex-shrink-0">
                  {index + 1}
                </div>
                <div className="ml-6">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-xl font-semibold text-gray-900">{item.phase}</h3>
                    <span className="text-sm font-semibold text-blue-600 bg-blue-50 px-3 py-1 rounded-full">
                      {item.duration}
                    </span>
                  </div>
                  <p className="text-gray-600">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Start Your Sourcing Project?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            Contact us today for a free consultation. We'll guide you through each step of the process.
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
