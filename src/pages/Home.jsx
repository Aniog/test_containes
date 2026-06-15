import React, { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import { Factory, Shield, Truck, CheckCircle, ArrowRight, Star, Users, Globe } from 'lucide-react'

export default function Home() {
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
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 id="hero-title" className="text-5xl font-bold text-gray-900 mb-6">
                China Sourcing Agent for Global Buyers
              </h1>
              <p id="hero-subtitle" className="text-xl text-gray-600 mb-8">
                We help overseas buyers find reliable suppliers, verify factories, inspect quality, follow production, and coordinate shipping from China.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/contact"
                  className="bg-blue-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-700 transition-colors inline-flex items-center justify-center"
                >
                  Get a Free Sourcing Quote
                  <ArrowRight className="ml-2" size={20} />
                </Link>
                <Link
                  to="/how-it-works"
                  className="bg-white text-blue-600 px-8 py-4 rounded-lg text-lg font-semibold border-2 border-blue-600 hover:bg-blue-50 transition-colors inline-flex items-center justify-center"
                >
                  Learn How It Works
                </Link>
              </div>
            </div>
            <div className="relative">
              <div
                className="rounded-2xl shadow-2xl overflow-hidden"
                data-strk-bg-id="hero-bg-001"
                data-strk-bg="[hero-subtitle] [hero-title]"
                data-strk-bg-ratio="16x9"
                data-strk-bg-width="1200"
                style={{ minHeight: '400px', backgroundSize: 'cover', backgroundPosition: 'center' }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 id="services-title" className="text-4xl font-bold text-gray-900 mb-4">
              Our Sourcing Services
            </h2>
            <p id="services-subtitle" className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive sourcing solutions to help you buy from China with confidence
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <Factory className="w-12 h-12 text-blue-600" />,
                title: "Supplier Verification",
                description: "We verify suppliers through factory audits, background checks, and capability assessments to ensure you work with legitimate manufacturers.",
                imgId: "service-verification",
                imgQuery: "factory audit manufacturing verification"
              },
              {
                icon: <Shield className="w-12 h-12 text-blue-600" />,
                title: "Quality Control",
                description: "Pre-production, during production, and pre-shipment inspections to ensure your products meet specifications and quality standards.",
                imgId: "service-qc",
                imgQuery: "quality control inspection manufacturing"
              },
              {
                icon: <Truck className="w-12 h-12 text-blue-600" />,
                title: "Shipping Coordination",
                description: "We coordinate with freight forwarders, handle customs documentation, and ensure smooth delivery from factory to your warehouse.",
                imgId: "service-shipping",
                imgQuery: "shipping logistics container cargo"
              },
              {
                icon: <CheckCircle className="w-12 h-12 text-blue-600" />,
                title: "Production Monitoring",
                description: "Regular updates and on-site visits during production to ensure timelines are met and quality is maintained.",
                imgId: "service-production",
                imgQuery: "production line manufacturing monitoring"
              },
              {
                icon: <Users className="w-12 h-12 text-blue-600" />,
                title: "Negotiation Support",
                description: "Leverage our experience and local presence to negotiate better prices, terms, and payment conditions with suppliers.",
                imgId: "service-negotiation",
                imgQuery: "business negotiation meeting"
              },
              {
                icon: <Globe className="w-12 h-12 text-blue-600" />,
                title: "Sourcing Consultation",
                description: "Expert advice on product feasibility, material selection, manufacturing processes, and market trends in China.",
                imgId: "service-consultation",
                imgQuery: "business consultation meeting"
              }
            ].map((service, index) => (
              <div key={index} className="bg-gray-50 rounded-xl p-8 hover:shadow-lg transition-shadow">
                <div className="mb-6">{service.icon}</div>
                <h3 id={`service-title-${index}`} className="text-2xl font-semibold text-gray-900 mb-4">
                  {service.title}
                </h3>
                <p id={`service-desc-${index}`} className="text-gray-600 mb-6">
                  {service.description}
                </p>
                <img
                  alt={service.title}
                  data-strk-img-id={service.imgId}
                  data-strk-img={`[service-desc-${index}] [service-title-${index}] [services-subtitle] [services-title]`}
                  data-strk-img-ratio="4x3"
                  data-strk-img-width="600"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  className="w-full h-48 object-cover rounded-lg"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sourcing Process Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 id="process-title" className="text-4xl font-bold text-gray-900 mb-4">
              Our Sourcing Process
            </h2>
            <p id="process-subtitle" className="text-xl text-gray-600 max-w-3xl mx-auto">
              A systematic approach to ensure successful sourcing from China
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                step: "01",
                title: "Requirements Analysis",
                description: "We discuss your product specifications, quality requirements, target price, and timeline."
              },
              {
                step: "02",
                title: "Supplier Identification",
                description: "We search our database and network to find suitable suppliers matching your requirements."
              },
              {
                step: "03",
                title: "Verification & Sampling",
                description: "We verify suppliers, arrange factory audits, and help you get product samples for evaluation."
              },
              {
                step: "04",
                title: "Production & QC",
                description: "We monitor production, conduct quality inspections, and coordinate shipping and customs."
              }
            ].map((phase, index) => (
              <div key={index} className="bg-white rounded-xl p-8 relative">
                <div className="text-6xl font-bold text-blue-100 mb-4">{phase.step}</div>
                <h3 id={`process-title-${index}`} className="text-xl font-semibold text-gray-900 mb-3">
                  {phase.title}
                </h3>
                <p id={`process-desc-${index}`} className="text-gray-600">
                  {phase.description}
                </p>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              to="/how-it-works"
              className="bg-blue-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-700 transition-colors inline-flex items-center"
            >
              View Detailed Process
              <ArrowRight className="ml-2" size={20} />
            </Link>
          </div>
        </div>
      </section>

      {/* Products We Source Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 id="products-title" className="text-4xl font-bold text-gray-900 mb-4">
              Products We Source
            </h2>
            <p id="products-subtitle" className="text-xl text-gray-600 max-w-3xl mx-auto">
              We have experience sourcing a wide range of products across various industries
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                category: "Electronics & Technology",
                items: ["Consumer Electronics", "Smart Home Devices", "Computer Accessories", "Mobile Accessories"]
              },
              {
                category: "Home & Garden",
                items: ["Furniture", "Home Decor", "Kitchen Appliances", "Garden Tools"]
              },
              {
                category: "Fashion & Textiles",
                items: ["Apparel", "Footwear", "Bags & Luggage", "Textiles & Fabrics"]
              },
              {
                category: "Industrial & Commercial",
                items: ["Machinery Parts", "Industrial Equipment", "Packaging Materials", "Office Supplies"]
              },
              {
                category: "Health & Beauty",
                items: ["Cosmetics", "Personal Care", "Health Supplements", "Medical Devices"]
              },
              {
                category: "Toys & Gifts",
                items: ["Toys & Games", "Promotional Gifts", "Stationery", "Pet Products"]
              }
            ].map((product, index) => (
              <div key={index} className="bg-gray-50 rounded-xl p-8">
                <h3 id={`product-title-${index}`} className="text-xl font-semibold text-gray-900 mb-4">
                  {product.category}
                </h3>
                <ul className="space-y-2">
                  {product.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-center text-gray-600">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-2 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Problems We Solve Section */}
      <section className="py-20 bg-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 id="problems-title" className="text-4xl font-bold text-gray-900 mb-4">
              Problems We Solve
            </h2>
            <p id="problems-subtitle" className="text-xl text-gray-600 max-w-3xl mx-auto">
              Common challenges faced by overseas buyers and how we help
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                problem: "Unreliable Suppliers",
                solution: "We verify suppliers through factory audits, check business licenses, and assess production capabilities before you place orders."
              },
              {
                problem: "Quality Issues",
                solution: "Our quality control team conducts pre-production, during production, and pre-shipment inspections to ensure your products meet specifications."
              },
              {
                problem: "Communication Barriers",
                solution: "Our bilingual team bridges the language and cultural gap, ensuring clear communication between you and suppliers."
              },
              {
                problem: "Production Delays",
                solution: "We monitor production progress, provide regular updates, and intervene when timelines are at risk."
              },
              {
                problem: "Shipping Complexities",
                solution: "We coordinate with freight forwarders, handle documentation, and ensure smooth customs clearance and delivery."
              },
              {
                problem: "Price Uncertainty",
                solution: "We leverage our network and negotiation experience to help you get competitive prices from verified suppliers."
              }
            ].map((item, index) => (
              <div key={index} className="bg-white rounded-xl p-8 shadow-sm">
                <h3 id={`problem-title-${index}`} className="text-xl font-semibold text-gray-900 mb-3">
                  {item.problem}
                </h3>
                <p id={`problem-solution-${index}`} className="text-gray-600">
                  {item.solution}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust Points Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 id="trust-title" className="text-4xl font-bold text-gray-900 mb-4">
              Why Choose SSourcing China
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                number: "500+",
                label: "Clients Served",
                description: "From startups to Fortune 500 companies across 30+ countries"
              },
              {
                number: "10+",
                label: "Years Experience",
                description: "Deep understanding of Chinese manufacturing and supply chain"
              },
              {
                number: "1000+",
                label: "Suppliers Verified",
                description: "In our network across various industries and product categories"
              },
              {
                number: "98%",
                label: "Client Satisfaction",
                description: "Based on post-project surveys and repeat client rate"
              }
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-5xl font-bold text-blue-600 mb-2">{stat.number}</div>
                <div className="text-xl font-semibold text-gray-900 mb-2">{stat.label}</div>
                <p className="text-gray-600">{stat.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 id="casestudies-title" className="text-4xl font-bold text-gray-900 mb-4">
              Success Stories
            </h2>
            <p id="casestudies-subtitle" className="text-xl text-gray-600 max-w-3xl mx-auto">
              Real examples of how we helped clients succeed in sourcing from China
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Electronics Startup Reduces Costs by 30%",
                client: "TechStart Inc., USA",
                challenge: "High product costs from local suppliers",
                solution: "Identified reliable Chinese manufacturer, negotiated better terms",
                result: "30% cost reduction, improved profit margins"
              },
              {
                title: "Furniture Retailer Ensures Quality",
                client: "HomeStyle Ltd., UK",
                challenge: "Previous quality issues with furniture imports",
                solution: "Implemented rigorous QC process, factory audits",
                result: "Zero quality complaints in 12 months, 40% growth"
              },
              {
                title: "Fashion Brand Scales Production",
                client: "ModaTrend, Germany",
                challenge: "Difficulty scaling production while maintaining quality",
                solution: "Identified multiple suppliers, coordinated production",
                result: "3x production capacity, consistent quality"
              }
            ].map((study, index) => (
              <div key={index} className="bg-white rounded-xl p-8 shadow-sm">
                <h3 id={`casestudy-title-${index}`} className="text-xl font-semibold text-gray-900 mb-4">
                  {study.title}
                </h3>
                <div className="mb-4">
                  <span className="text-sm font-semibold text-blue-600">Client: </span>
                  <span className="text-sm text-gray-600">{study.client}</span>
                </div>
                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-gray-900 mb-2">Challenge:</h4>
                  <p className="text-sm text-gray-600">{study.challenge}</p>
                </div>
                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-gray-900 mb-2">Solution:</h4>
                  <p className="text-sm text-gray-600">{study.solution}</p>
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-gray-900 mb-2">Result:</h4>
                  <p className="text-sm text-gray-600">{study.result}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              to="/case-studies"
              className="bg-blue-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-700 transition-colors inline-flex items-center"
            >
              View All Case Studies
              <ArrowRight className="ml-2" size={20} />
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 id="faq-title" className="text-4xl font-bold text-gray-900 mb-4">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="max-w-3xl mx-auto space-y-8">
            {[
              {
                question: "How does your sourcing service work?",
                answer: "We start by understanding your requirements, then identify and verify suitable suppliers, help with negotiations, arrange samples, monitor production, conduct quality inspections, and coordinate shipping."
              },
              {
                question: "What are your fees?",
                answer: "Our fees are typically based on a percentage of the total order value or a fixed service fee, depending on the project scope. We provide transparent pricing with no hidden costs."
              },
              {
                question: "How do you verify suppliers?",
                answer: "We conduct factory audits, check business licenses, assess production capabilities, review past performance, and may arrange third-party verification when necessary."
              },
              {
                question: "Can you help with small orders?",
                answer: "Yes, we work with clients of all sizes. However, minimum order quantities depend on the product and supplier. We help you find suppliers that match your order size."
              },
              {
                question: "How do you handle quality control?",
                answer: "We offer pre-production, during production, and pre-shipment inspections. Our QC team checks against your specifications and international quality standards."
              },
              {
                question: "What about shipping and customs?",
                answer: "We coordinate with reliable freight forwarders, handle documentation, and provide guidance on customs clearance. We can arrange door-to-door delivery to your warehouse."
              }
            ].map((faq, index) => (
              <div key={index} className="bg-gray-50 rounded-xl p-8">
                <h3 id={`faq-question-${index}`} className="text-xl font-semibold text-gray-900 mb-4">
                  {faq.question}
                </h3>
                <p id={`faq-answer-${index}`} className="text-gray-600">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Inquiry Form Section */}
      <section className="py-20 bg-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-4">
              Get Your Free Sourcing Quote
            </h2>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Tell us about your sourcing needs and we'll provide a detailed proposal within 24 hours
            </p>
          </div>

          <div className="max-w-2xl mx-auto">
            <form className="bg-white rounded-xl p-8 shadow-2xl">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    placeholder="John Smith"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    placeholder="john@company.com"
                  />
                </div>
              </div>

              <div className="mb-6">
                <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">
                  Company Name
                </label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Your Company Ltd."
                />
              </div>

              <div className="mb-6">
                <label htmlFor="product" className="block text-sm font-medium text-gray-700 mb-2">
                  Product You Want to Source *
                </label>
                <input
                  type="text"
                  id="product"
                  name="product"
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  placeholder="e.g., Wireless earphones, Furniture, Textiles"
                />
              </div>

              <div className="mb-6">
                <label htmlFor="details" className="block text-sm font-medium text-gray-700 mb-2">
                  Project Details
                </label>
                <textarea
                  id="details"
                  name="details"
                  rows={4}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Tell us about your product specifications, quantity, target price, timeline, and any other relevant details..."
                />
              </div>

              <button
                type="submit"
                className="w-full bg-blue-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-700 transition-colors"
              >
                Get My Free Quote
              </button>

              <p className="text-sm text-gray-500 text-center mt-4">
                We respect your privacy. Your information will never be shared with third parties.
              </p>
            </form>
          </div>
        </div>
      </section>
    </div>
  )
}
