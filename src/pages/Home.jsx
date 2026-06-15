import React, { useRef, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Factory, Search, ClipboardCheck, Ship, Shield, Truck, CheckCircle, ArrowRight, Phone } from 'lucide-react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'

const Home = () => {
  const heroRef = useRef(null)
  const servicesRef = useRef(null)
  const processRef = useRef(null)
  const productsRef = useRef(null)
  const casesRef = useRef(null)
  const faqRef = useRef(null)

  useEffect(() => {
    const refs = [heroRef, servicesRef, processRef, productsRef, casesRef, faqRef]
    refs.forEach(ref => {
      if (ref.current) {
        ImageHelper.loadImages(strkImgConfig, ref.current)
      }
    })
  }, [])

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 text-white py-20" ref={heroRef}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 id="hero-headline" className="text-4xl md:text-5xl font-bold mb-6">
                China Sourcing Agent for Global Buyers
              </h1>
              <p id="hero-subtitle" className="text-xl mb-8 text-blue-100">
                We help overseas buyers find reliable suppliers, verify factories, inspect quality, follow production, and coordinate shipping from China.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/contact"
                  className="bg-white text-blue-900 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors inline-flex items-center justify-center gap-2"
                >
                  Get a Free Sourcing Quote
                  <ArrowRight className="w-5 h-5" />
                </Link>
                <Link
                  to="/services"
                  className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-900 transition-colors inline-flex items-center justify-center"
                >
                  Learn More
                </Link>
              </div>
            </div>
            <div className="relative">
              <div
                className="rounded-2xl h-96 bg-blue-600"
                data-strk-bg-id="hero-bg-8f3a2b"
                data-strk-bg="[hero-subtitle] [hero-headline]"
                data-strk-bg-ratio="4x3"
                data-strk-bg-width="1200"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-white" ref={servicesRef}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 id="services-title" className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Sourcing Services
            </h2>
            <p id="services-subtitle" className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive sourcing solutions to help you buy with confidence from China
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <Search className="w-10 h-10 text-blue-600" />,
                title: 'Supplier Sourcing',
                desc: 'Find reliable suppliers matching your requirements, budget, and quality standards.',
                imgId: 'service-sourcing-9c4d2e',
              },
              {
                icon: <ClipboardCheck className="w-10 h-10 text-blue-600" />,
                title: 'Factory Audit & Verification',
                desc: 'On-site factory audits to verify legitimacy, capacity, and compliance.',
                imgId: 'service-audit-5f3a8c',
              },
              {
                icon: <Shield className="w-10 h-10 text-blue-600" />,
                title: 'Quality Control & Inspection',
                desc: 'Pre-production, during production, and pre-shipment inspections.',
                imgId: 'service-qc-7b1e4f',
              },
              {
                icon: <Truck className="w-10 h-10 text-blue-600" />,
                title: 'Production Monitoring',
                desc: 'Regular updates and monitoring throughout the production process.',
                imgId: 'service-monitoring-3d6c9a',
              },
              {
                icon: <Ship className="w-10 h-10 text-blue-600" />,
                title: 'Shipping & Logistics',
                desc: 'Coordinate shipping, customs clearance, and delivery to your door.',
                imgId: 'service-shipping-2e8b5d',
              },
              {
                icon: <Factory className="w-10 h-10 text-blue-600" />,
                title: 'Negotiation & Contracts',
                desc: 'Price negotiation and contract review to protect your interests.',
                imgId: 'service-negotiation-1a9f7c',
              },
            ].map((service, index) => (
              <div key={index} className="bg-gray-50 rounded-xl p-6 hover:shadow-lg transition-shadow">
                <div className="mb-4">{service.icon}</div>
                <h3 id={`service-title-${index}`} className="text-xl font-semibold text-gray-900 mb-2">
                  {service.title}
                </h3>
                <p id={`service-desc-${index}`} className="text-gray-600 mb-4">
                  {service.desc}
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

      {/* Sourcing Process */}
      <section className="py-20 bg-gray-50" ref={processRef}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 id="process-title" className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Sourcing Process
            </h2>
            <p id="process-subtitle" className="text-xl text-gray-600 max-w-3xl mx-auto">
              A systematic approach to ensure successful sourcing from China
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                step: '01',
                title: 'Requirements Analysis',
                desc: 'Understand your product specifications, quality standards, target price, and quantity.',
                imgId: 'process-requirements-a5b3c9',
              },
              {
                step: '02',
                title: 'Supplier Identification',
                desc: 'Research and identify potential suppliers through our extensive network.',
                imgId: 'process-supplier-d7e4f2',
              },
              {
                step: '03',
                title: 'Verification & Sampling',
                desc: 'Conduct factory audits and evaluate product samples for quality assessment.',
                imgId: 'process-verification-b8c6d3',
              },
              {
                step: '04',
                title: 'Production & QC',
                desc: 'Monitor production and conduct quality inspections at every stage.',
                imgId: 'process-production-e9f5a7',
              },
            ].map((item, index) => (
              <div key={index} className="bg-white rounded-xl p-6 relative">
                <div className="text-6xl font-bold text-blue-100 mb-4">{item.step}</div>
                <h3 id={`process-title-${index}`} className="text-xl font-semibold text-gray-900 mb-2">
                  {item.title}
                </h3>
                <p id={`process-desc-${index}`} className="text-gray-600 mb-4">
                  {item.desc}
                </p>
                <img
                  alt={item.title}
                  data-strk-img-id={item.imgId}
                  data-strk-img={`[process-desc-${index}] [process-title-${index}] [process-subtitle] [process-title]`}
                  data-strk-img-ratio="4x3"
                  data-strk-img-width="500"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  className="w-full h-40 object-cover rounded-lg"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Products We Source */}
      <section className="py-20 bg-white" ref={productsRef}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 id="products-title" className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Products We Source
            </h2>
            <p id="products-subtitle" className="text-xl text-gray-600 max-w-3xl mx-auto">
              We have experience sourcing a wide range of products across various industries
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { name: 'Electronics & Gadgets', imgId: 'product-electronics-c4d8e2' },
              { name: 'Home & Garden', imgId: 'product-home-f7a3b9' },
              { name: 'Fashion & Accessories', imgId: 'product-fashion-a2e6d4' },
              { name: 'Machinery & Equipment', imgId: 'product-machinery-d9c5b8' },
              { name: 'Automotive Parts', imgId: 'product-automotive-e3f7c1' },
              { name: 'Medical Devices', imgId: 'product-medical-b6d9f4' },
              { name: 'Toys & Gifts', imgId: 'product-toys-f8c3e7' },
              { name: 'Furniture & Decor', imgId: 'product-furniture-a9d5c2' },
              { name: 'Packaging & Printing', imgId: 'product-packaging-d4e8b6' },
            ].map((product, index) => (
              <div key={index} className="relative h-48 rounded-xl overflow-hidden group cursor-pointer">
                <img
                  alt={product.name}
                  data-strk-img-id={product.imgId}
                  data-strk-img={`${product.name} [products-subtitle] [products-title]`}
                  data-strk-img-ratio="4x3"
                  data-strk-img-width="600"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-6">
                  <h3 className="text-white text-xl font-semibold">{product.name}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Problems We Solve */}
      <section className="py-20 bg-blue-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Problems We Solve
            </h2>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Common challenges faced by overseas buyers and how we address them
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                problem: 'Unreliable Suppliers',
                solution: 'We verify factory legitimacy, production capacity, and business licenses before you place orders.',
              },
              {
                problem: 'Quality Issues',
                solution: 'Our professional QC team conducts thorough inspections at every production stage.',
              },
              {
                problem: 'Communication Barriers',
                solution: 'We bridge the language and cultural gap, ensuring clear communication with suppliers.',
              },
              {
                problem: 'Shipping Complexities',
                solution: 'We handle logistics, customs clearance, and coordinate delivery to your warehouse.',
              },
            ].map((item, index) => (
              <div key={index} className="bg-blue-800 rounded-xl p-6">
                <div className="flex items-start gap-4">
                  <CheckCircle className="w-6 h-6 text-green-400 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-xl font-semibold mb-2">{item.problem}</h3>
                    <p className="text-blue-100">{item.solution}</p>
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
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose SSourcing China
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { number: '500+', label: 'Clients Served' },
              { number: '10+', label: 'Years Experience' },
              { number: '1000+', label: 'Projects Completed' },
              { number: '98%', label: 'Client Satisfaction' },
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-5xl font-bold text-blue-600 mb-2">{stat.number}</div>
                <div className="text-gray-600 text-lg">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies Preview */}
      <section className="py-20 bg-gray-50" ref={casesRef}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 id="cases-title" className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Success Stories
            </h2>
            <p id="cases-subtitle" className="text-xl text-gray-600 max-w-3xl mx-auto">
              See how we've helped businesses like yours succeed in sourcing from China
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: 'Electronics Retailer Saves 30%',
                desc: 'Helped a US-based electronics retailer reduce sourcing costs while maintaining quality standards.',
                imgId: 'case-electronics-5c8d3f',
              },
              {
                title: 'Furniture Company Ensures Quality',
                desc: 'Implemented comprehensive QC process for a European furniture importer.',
                imgId: 'case-furniture-7e2a9b',
              },
              {
                title: 'Fashion Brand Finds Reliable Supplier',
                desc: 'Identified and verified a long-term supplier for a growing fashion brand.',
                imgId: 'case-fashion-4f6c8d',
              },
            ].map((caseStudy, index) => (
              <div key={index} className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow">
                <img
                  alt={caseStudy.title}
                  data-strk-img-id={caseStudy.imgId}
                  data-strk-img={`[case-desc-${index}] [case-title-${index}] [cases-subtitle] [cases-title]`}
                  data-strk-img-ratio="16x9"
                  data-strk-img-width="800"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 id={`case-title-${index}`} className="text-xl font-semibold text-gray-900 mb-2">
                    {caseStudy.title}
                  </h3>
                  <p id={`case-desc-${index}`} className="text-gray-600 mb-4">
                    {caseStudy.desc}
                  </p>
                  <Link to="/case-studies" className="text-blue-600 font-medium inline-flex items-center gap-2 hover:gap-3 transition-all">
                    Read More <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white" ref={faqRef}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 id="faq-title" className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="space-y-6">
            {[
              {
                q: 'How do you verify suppliers?',
                a: 'We conduct on-site factory audits, check business licenses, verify production capacity, and assess quality management systems.',
              },
              {
                q: 'What is your service fee structure?',
                a: 'We offer transparent pricing based on your project scope. Contact us for a customized quote with no hidden fees.',
              },
              {
                q: 'How do you handle quality control?',
                a: 'We provide pre-production, during production, and pre-shipment inspections with detailed reports and photos.',
              },
              {
                q: 'Can you help with shipping?',
                a: 'Yes, we coordinate with reliable logistics partners to handle shipping, customs clearance, and delivery.',
              },
              {
                q: 'What industries do you serve?',
                a: 'We serve a wide range of industries including electronics, home goods, fashion, machinery, automotive, and more.',
              },
            ].map((faq, index) => (
              <details key={index} className="bg-gray-50 rounded-lg p-6">
                <summary className="text-lg font-semibold text-gray-900 cursor-pointer">
                  {faq.q}
                </summary>
                <p className="mt-4 text-gray-600">{faq.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Inquiry Form CTA */}
      <section className="py-20 bg-blue-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Start Sourcing from China?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Get a free sourcing quote today. No obligations, no hidden fees.
          </p>
          <Link
            to="/contact"
            className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors inline-flex items-center gap-2"
          >
            <Phone className="w-5 h-5" />
            Get a Free Sourcing Quote
          </Link>
        </div>
      </section>
    </div>
  )
}

export default Home
