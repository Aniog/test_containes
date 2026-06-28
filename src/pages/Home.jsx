import React, { useRef, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, CheckCircle, Factory, ClipboardCheck, Truck, Search, Shield, Users, TrendingDown, FileText, Package, Globe } from 'lucide-react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'

const Home = () => {
  const containerRef = useRef(null)

  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, containerRef.current)
    })
    return () => window.cancelAnimationFrame(frameId)
  }, [])

  return (
    <div ref={containerRef}>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 id="hero-headline" className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                China Sourcing Agent for Global Buyers
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                We help overseas buyers find reliable suppliers, verify factories, 
                inspect quality, follow production, and coordinate shipping from China.
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
                  className="border-2 border-blue-600 text-blue-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-50 transition-colors text-center"
                >
                  Learn How It Works
                </Link>
              </div>
            </div>
            <div
              className="rounded-2xl bg-gray-200 min-h-[400px]"
              data-strk-bg-id="hero-bg-7f3a2b"
              data-strk-bg="[hero-headline]"
              data-strk-bg-ratio="4x3"
              data-strk-bg-width="800"
            />
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 id="services-title" className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Sourcing Services
            </h2>
            <p id="services-subtitle" className="text-xl text-gray-600 max-w-3xl mx-auto">
              End-to-end sourcing solutions to help you buy from China with confidence
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <Search className="w-8 h-8 text-blue-600" />,
                title: 'Supplier Sourcing',
                description: 'We identify and evaluate reliable suppliers matching your requirements and quality standards.',
                imgId: 'service-sourcing-9a1b2c',
              },
              {
                icon: <ClipboardCheck className="w-8 h-8 text-blue-600" />,
                title: 'Supplier Verification',
                description: 'Thorough factory audits and supplier verification to ensure legitimacy and capability.',
                imgId: 'service-verification-8c3d4e',
              },
              {
                icon: <Shield className="w-8 h-8 text-blue-600" />,
                title: 'Quality Inspection',
                description: 'Pre-production, during production, and pre-shipment inspections to ensure quality.',
                imgId: 'service-inspection-5f6g7h',
              },
              {
                icon: <Factory className="w-8 h-8 text-blue-600" />,
                title: 'Production Monitoring',
                description: 'Regular updates and monitoring throughout the production process.',
                imgId: 'service-production-1i2j3k',
              },
              {
                icon: <Truck className="w-8 h-8 text-blue-600" />,
                title: 'Shipping Coordination',
                description: 'Coordinate with freight forwarders and manage logistics for smooth delivery.',
                imgId: 'service-shipping-4l5m6n',
              },
              {
                icon: <FileText className="w-8 h-8 text-blue-600" />,
                title: 'Negotiation & Contracts',
                description: 'Leverage our expertise to negotiate better terms and secure favorable contracts.',
                imgId: 'service-negotiation-7o8p9q',
              },
            ].map((service, index) => (
              <div key={index} className="bg-gray-50 rounded-xl p-8 hover:shadow-lg transition-shadow">
                <div className="mb-4">{service.icon}</div>
                <h3 id={`service-title-${index}`} className="text-xl font-semibold text-gray-900 mb-3">
                  {service.title}
                </h3>
                <p id={`service-desc-${index}`} className="text-gray-600 mb-4">
                  {service.description}
                </p>
                <img
                  alt={service.title}
                  data-strk-img-id={service.imgId}
                  data-strk-img={`[service-desc-${index}] [service-title-${index}] [services-title]`}
                  data-strk-img-ratio="4x3"
                  data-strk-img-width="600"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  className="w-full rounded-lg"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sourcing Process */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 id="process-title" className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Sourcing Process
            </h2>
            <p id="process-subtitle" className="text-xl text-gray-600">
              A systematic approach to ensure successful sourcing from China
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                step: '01',
                title: 'Requirements Analysis',
                description: 'Understand your needs, specifications, target price, and quality requirements.',
              },
              {
                step: '02',
                title: 'Supplier Identification',
                description: 'Research and identify potential suppliers matching your criteria.',
              },
              {
                step: '03',
                title: 'Verification & Sampling',
                description: 'Verify suppliers and coordinate sample production for evaluation.',
              },
              {
                step: '04',
                title: 'Production & QC',
                description: 'Monitor production, conduct inspections, and coordinate shipping.',
              },
            ].map((phase, index) => (
              <div key={index} className="bg-white rounded-xl p-8 relative">
                <div className="text-5xl font-bold text-blue-100 mb-4">{phase.step}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{phase.title}</h3>
                <p className="text-gray-600">{phase.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Products We Source */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 id="products-title" className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Products We Source
            </h2>
            <p id="products-subtitle" className="text-xl text-gray-600">
              We have experience sourcing a wide range of products from China
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { name: 'Electronics & Gadgets', icon: <Package className="w-6 h-6" />, imgId: 'product-electronics-a1b2c3' },
              { name: 'Home & Garden', icon: <Package className="w-6 h-6" />, imgId: 'product-home-d4e5f6' },
              { name: 'Fashion & Accessories', icon: <Package className="w-6 h-6" />, imgId: 'product-fashion-g7h8i9' },
              { name: 'Industrial Equipment', icon: <Package className="w-6 h-6" />, imgId: 'product-industrial-j1k2l3' },
              { name: 'Toys & Gifts', icon: <Package className="w-6 h-6" />, imgId: 'product-toys-m4n5o6' },
              { name: 'Automotive Parts', icon: <Package className="w-6 h-6" />, imgId: 'product-auto-p7q8r9' },
            ].map((product, index) => (
              <div key={index} className="border border-gray-200 rounded-xl p-6 hover:border-blue-600 hover:shadow-lg transition-all">
                <div className="flex items-center mb-4">
                  <div className="text-blue-600 mr-3">{product.icon}</div>
                  <h3 className="text-lg font-semibold text-gray-900">{product.name}</h3>
                </div>
                <img
                  alt={product.name}
                  data-strk-img-id={product.imgId}
                  data-strk-img={`${product.name} sourcing from China`}
                  data-strk-img-ratio="4x3"
                  data-strk-img-width="400"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  className="w-full rounded-lg"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Problems We Solve */}
      <section className="py-20 bg-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 id="problems-title" className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Problems We Solve
            </h2>
            <p id="problems-subtitle" className="text-xl text-gray-600">
              Common challenges faced by buyers sourcing from China
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                problem: 'Unreliable Suppliers',
                solution: 'We verify suppliers through factory audits, background checks, and capability assessments.',
              },
              {
                problem: 'Quality Issues',
                solution: 'Our rigorous inspection process ensures products meet your quality standards.',
              },
              {
                problem: 'Communication Barriers',
                solution: 'We bridge the language and cultural gap, ensuring clear communication.',
              },
              {
                problem: 'Production Delays',
                solution: 'We monitor production progress and proactively address potential delays.',
              },
              {
                problem: 'Hidden Costs',
                solution: 'Transparent pricing with no hidden fees. We negotiate the best possible terms.',
              },
              {
                problem: 'Logistics Complexity',
                solution: 'We coordinate with reliable freight forwarders and handle all shipping documentation.',
              },
            ].map((item, index) => (
              <div key={index} className="bg-white rounded-xl p-8">
                <div className="flex items-start mb-4">
                  <div className="bg-red-100 rounded-full p-2 mr-4">
                    <span className="text-red-600 font-bold">!</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">{item.problem}</h3>
                    <p className="text-gray-600">{item.solution}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust Points */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 id="trust-title" className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose SSourcing China
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: <Users className="w-12 h-12 text-blue-600" />,
                number: '500+',
                label: 'Satisfied Clients',
              },
              {
                icon: <Globe className="w-12 h-12 text-blue-600" />,
                number: '50+',
                label: 'Countries Served',
              },
              {
                icon: <CheckCircle className="w-12 h-12 text-blue-600" />,
                number: '10,000+',
                label: 'Inspections Conducted',
              },
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="flex justify-center mb-4">{stat.icon}</div>
                <div className="text-5xl font-bold text-gray-900 mb-2">{stat.number}</div>
                <div className="text-xl text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies Preview */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 id="casestudies-title" className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Success Stories
            </h2>
            <p id="casestudies-subtitle" className="text-xl text-gray-600">
              See how we've helped businesses like yours succeed
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: 'Electronics Retailer Reduces Costs by 30%',
                description: 'How we helped a US retailer find reliable suppliers and reduce sourcing costs.',
                imgId: 'case-study-1-x1y2z3',
              },
              {
                title: 'European Brand Ensures Quality Standards',
                description: 'Quality inspection process that helped maintain consistent product quality.',
                imgId: 'case-study-2-a4b5c6',
              },
              {
                title: 'Australian Importer Streamlines Logistics',
                description: 'Shipping coordination that reduced delivery time by 2 weeks.',
                imgId: 'case-study-3-d7e8f9',
              },
            ].map((study, index) => (
              <div key={index} className="bg-white rounded-xl overflow-hidden hover:shadow-lg transition-shadow">
                <img
                  alt={study.title}
                  data-strk-img-id={study.imgId}
                  data-strk-img={`[casestudies-subtitle] ${study.title}`}
                  data-strk-img-ratio="16x9"
                  data-strk-img-width="600"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{study.title}</h3>
                  <p className="text-gray-600 mb-4">{study.description}</p>
                  <Link
                    to="/case-studies"
                    className="text-blue-600 font-medium hover:text-blue-700"
                  >
                    Read More →
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 id="faq-title" className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="space-y-6">
            {[
              {
                question: 'How does your sourcing service work?',
                answer: 'We start by understanding your requirements, then identify and verify suppliers, coordinate samples, monitor production, conduct quality inspections, and coordinate shipping.',
              },
              {
                question: 'What are your service fees?',
                answer: 'Our fees are transparent and competitive. We typically charge a service fee based on the order value or a fixed fee depending on the scope of work. Contact us for a customized quote.',
              },
              {
                question: 'How do you ensure supplier reliability?',
                answer: 'We conduct thorough factory audits, verify business licenses, check export history, and assess production capacity before recommending any supplier.',
              },
              {
                question: 'Can you help with small order quantities?',
                answer: 'Yes, we work with suppliers who accept small MOQs. However, larger orders typically result in better pricing.',
              },
              {
                question: 'How do you handle quality control?',
                answer: 'We offer pre-production, during production, and pre-shipment inspections. Our QC team follows strict checklists based on your requirements.',
              },
            ].map((faq, index) => (
              <details key={index} className="bg-gray-50 rounded-xl p-6">
                <summary className="text-lg font-semibold text-gray-900 cursor-pointer">
                  {faq.question}
                </summary>
                <p className="mt-4 text-gray-600">{faq.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Start Sourcing from China?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Get a free sourcing quote today. No obligations, no hidden costs.
          </p>
          <Link
            to="/contact"
            className="bg-white text-blue-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-50 transition-colors inline-flex items-center"
          >
            Get a Free Sourcing Quote
            <ArrowRight className="ml-2" size={20} />
          </Link>
        </div>
      </section>
    </div>
  )
}

export default Home
