import { useState, useRef, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, CheckCircle, Factory, Shield, Truck, FileCheck, Search, Package, BarChart3, Users, Globe, ChevronDown, Send } from 'lucide-react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'

const Home = () => {
  const containerRef = useRef(null)
  const [expandedFaq, setExpandedFaq] = useState(null)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    product: '',
    message: ''
  })

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
    alert('Thank you for your inquiry! We will contact you within 24 hours.')
    setFormData({ name: '', email: '', company: '', product: '', message: '' })
  }

  const services = [
    {
      icon: <Search className="w-8 h-8" />,
      title: 'Supplier Verification',
      description: 'We verify factory licenses, production capacity, and business legitimacy to ensure you work with reliable suppliers.',
      imgId: 'service-verification-001',
      imgDesc: 'Factory audit and supplier verification process'
    },
    {
      icon: <Package className="w-8 h-8" />,
      title: 'Sample Sourcing',
      description: 'We help you source product samples quickly and cost-effectively before placing bulk orders.',
      imgId: 'service-sampling-002',
      imgDesc: 'Product sample collection and evaluation'
    },
    {
      icon: <FileCheck className="w-8 h-8" />,
      title: 'Quality Inspection',
      description: 'Pre-shipment inspections and during-production quality checks to ensure your products meet specifications.',
      imgId: 'service-inspection-003',
      imgDesc: 'Quality control inspection at factory'
    },
    {
      icon: <Factory className="w-8 h-8" />,
      title: 'Production Monitoring',
      description: 'We monitor your production process, track progress, and ensure timelines are met.',
      imgId: 'service-monitoring-004',
      imgDesc: 'Production line monitoring and tracking'
    },
    {
      icon: <Truck className="w-8 h-8" />,
      title: 'Shipping Coordination',
      description: 'We coordinate with freight forwarders, handle customs documentation, and optimize logistics costs.',
      imgId: 'service-shipping-005',
      imgDesc: 'Container loading and shipping logistics'
    },
    {
      icon: <BarChart3 className="w-8 h-8" />,
      title: 'Price Negotiation',
      description: 'Leverage our local presence and expertise to negotiate better prices with suppliers.',
      imgId: 'service-negotiation-006',
      imgDesc: 'Business meeting and price negotiation'
    }
  ]

  const processSteps = [
    {
      step: '01',
      title: 'Understand Your Needs',
      description: 'Share your product requirements, target price, and quality standards with us.',
      imgId: 'process-understand-101',
      imgDesc: 'Meeting to discuss product requirements'
    },
    {
      step: '02',
      title: 'Supplier Matching',
      description: 'We identify and verify suitable suppliers based on your specific requirements.',
      imgId: 'process-matching-102',
      imgDesc: 'Finding and evaluating potential suppliers'
    },
    {
      step: '03',
      title: 'Quotation & Sampling',
      description: 'Receive competitive quotes and evaluate product samples before decision.',
      imgId: 'process-sampling-103',
      imgDesc: 'Product sampling and quotation review'
    },
    {
      step: '04',
      title: 'Quality Control',
      description: 'We conduct inspections during production and before shipment.',
      imgId: 'process-qc-104',
      imgDesc: 'Quality inspection during production'
    },
    {
      step: '05',
      title: 'Shipping & Delivery',
      description: 'We coordinate logistics and ensure your products reach you safely.',
      imgId: 'process-shipping-105',
      imgDesc: 'Container shipping and delivery process'
    }
  ]

  const productCategories = [
    { name: 'Electronics & Gadgets', count: '200+ Suppliers', imgId: 'product-electronics-201', imgDesc: 'Consumer electronics and gadgets' },
    { name: 'Home & Garden', count: '150+ Suppliers', imgId: 'product-home-202', imgDesc: 'Home decoration and garden products' },
    { name: 'Fashion & Accessories', count: '180+ Suppliers', imgId: 'product-fashion-203', imgDesc: 'Clothing fashion and accessories' },
    { name: 'Industrial Equipment', count: '120+ Suppliers', imgId: 'product-industrial-204', imgDesc: 'Industrial machinery and equipment' },
    { name: 'Automotive Parts', count: '100+ Suppliers', imgId: 'product-auto-205', imgDesc: 'Auto parts and accessories' },
    { name: 'Packaging & Printing', count: '90+ Suppliers', imgId: 'product-packaging-206', imgDesc: 'Packaging materials and printing services' }
  ]

  const problems = [
    {
      icon: <Shield className="w-12 h-12 text-red-500" />,
      problem: 'Unverified Suppliers',
      solution: 'We conduct on-site factory audits and verify business licenses before introduction.'
    },
    {
      icon: <Package className="w-12 h-12 text-orange-500" />,
      problem: 'Quality Issues',
      solution: 'Multi-stage quality inspections ensure products meet your specifications.'
    },
    {
      icon: <Truck className="w-12 h-12 text-yellow-500" />,
      problem: 'Shipping Delays',
      solution: 'We coordinate with reliable freight forwarders and track shipments proactively.'
    },
    {
      icon: <Users className="w-12 h-12 text-green-500" />,
      problem: 'Communication Barriers',
      solution: 'Our bilingual team bridges the gap between you and Chinese suppliers.'
    }
  ]

  const trustPoints = [
    { number: '500+', label: 'Clients Served', imgId: 'trust-clients-301', imgDesc: 'Happy clients worldwide' },
    { number: '2000+', label: 'Suppliers Verified', imgId: 'trust-suppliers-302', imgDesc: 'Verified supplier network' },
    { number: '98%', label: 'Client Satisfaction', imgId: 'trust-satisfaction-303', imgDesc: 'Client satisfaction rate' },
    { number: '10+', label: 'Years Experience', imgId: 'trust-experience-304', imgDesc: 'Years of sourcing experience' }
  ]

  const caseStudies = [
    {
      title: 'US Retailer Reduces Sourcing Costs by 30%',
      client: 'Fashion Retailer, USA',
      challenge: 'High product costs and inconsistent quality from existing suppliers.',
      solution: 'Identified 3 alternative factories, negotiated better prices, implemented QC process.',
      result: '30% cost reduction, 0 defective shipments in 12 months.',
      imgId: 'case-fashion-401',
      imgDesc: 'Fashion retail success story'
    },
    {
      title: 'German Company Streamlines Production',
      client: 'Industrial Equipment, Germany',
      challenge: 'Delayed deliveries and communication issues with Chinese factory.',
      solution: 'On-site production monitoring, weekly progress reports, logistics optimization.',
      result: 'On-time delivery improved to 95%, lead time reduced by 3 weeks.',
      imgId: 'case-industrial-402',
      imgDesc: 'Industrial equipment sourcing success'
    },
    {
      title: 'Australian Startup Scales Quickly',
      client: 'Electronics Startup, Australia',
      challenge: 'Needed reliable supplier for new product launch with tight timeline.',
      solution: 'Fast supplier matching, expedited sampling, pre-shipment inspection.',
      result: 'Product launched on time, 5000 units delivered with zero defects.',
      imgId: 'case-electronics-403',
      imgDesc: 'Electronics startup success story'
    }
  ]

  const faqs = [
    {
      question: 'How does SSourcing China charge for services?',
      answer: 'We offer transparent pricing with no hidden fees. Our service fee is typically 3-8% of order value, depending on project complexity. We also offer fixed-fee packages for specific services like factory audits or inspections.'
    },
    {
      question: 'What is the minimum order quantity (MOQ) you can negotiate?',
      answer: 'We work with suppliers who accept MOQs as low as 100-500 units for many product categories. Our strong relationships with factories allow us to negotiate flexible MOQs for growing businesses.'
    },
    {
      question: 'How long does the sourcing process take?',
      answer: 'Typical timeline: Supplier matching (3-5 days), Sampling (7-14 days), Production (15-45 days depending on quantity), Shipping (7-30 days depending on method). We provide detailed timelines for each project.'
    },
    {
      question: 'Do you handle customs clearance and import documentation?',
      answer: 'Yes, we coordinate with freight forwarders who handle customs clearance. We ensure all necessary documentation (commercial invoice, packing list, bill of lading, certificate of origin) is prepared correctly.'
    },
    {
      question: 'What if products don\'t meet quality standards?',
      answer: 'We conduct pre-shipment inspections and only approve shipment when products pass quality checks. If issues are found, we work with the factory to rectify them before shipping. Our service includes quality guarantee support.'
    },
    {
      question: 'Can you help with product customization and OEM?',
      answer: 'Absolutely. We have extensive experience with OEM and ODM projects. We can help with design modifications, packaging customization, private labeling, and new product development.'
    }
  ]

  return (
    <div ref={containerRef}>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 text-white py-20 md:py-32">
        <div className="absolute inset-0 overflow-hidden">
          <div
            className="absolute inset-0 opacity-20"
            data-strk-bg-id="hero-bg-001"
            data-strk-bg="[hero-subtitle] [hero-title]"
            data-strk-bg-ratio="16x9"
            data-strk-bg-width="1920"
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 id="hero-title" className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              China Sourcing Agent for Global Buyers
            </h1>
            <p id="hero-subtitle" className="text-xl md:text-2xl mb-8 text-blue-100">
              We help overseas buyers find reliable suppliers, verify factories, inspect quality, and coordinate shipping from China.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                to="/contact"
                className="bg-white text-blue-900 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-50 transition-colors inline-flex items-center justify-center"
              >
                Get a Free Sourcing Quote
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <Link
                to="/how-it-works"
                className="bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-700 transition-colors inline-flex items-center justify-center"
              >
                How It Works
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 id="services-title" className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Services
            </h2>
            <p id="services-subtitle" className="text-lg text-gray-600 max-w-2xl mx-auto">
              Comprehensive sourcing solutions to help you buy with confidence from China
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-gray-50 rounded-xl p-6 hover:shadow-lg transition-shadow">
                <div className="mb-4 text-blue-600">
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-600 mb-4">
                  {service.description}
                </p>
                <img
                  data-strk-img-id={service.imgId}
                  data-strk-img={`[services-subtitle] [services-title]`}
                  data-strk-img-ratio="4x3"
                  data-strk-img-width="600"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  alt={service.imgDesc}
                  className="w-full h-48 object-cover rounded-lg"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sourcing Process */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 id="process-title" className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              How We Work
            </h2>
            <p id="process-subtitle" className="text-lg text-gray-600 max-w-2xl mx-auto">
              A proven 5-step process to ensure successful sourcing
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
            {processSteps.map((step, index) => (
              <div key={index} className="text-center">
                <div className="relative mb-6">
                  <div className="w-20 h-20 bg-blue-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto">
                    {step.step}
                  </div>
                  {index < processSteps.length - 1 && (
                    <div className="hidden md:block absolute top-10 left-1/2 w-full h-0.5 bg-blue-200" />
                  )}
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {step.title}
                </h3>
                <p className="text-gray-600 text-sm mb-4">
                  {step.description}
                </p>
                <img
                  data-strk-img-id={step.imgId}
                  data-strk-img={`[process-subtitle] [process-title]`}
                  data-strk-img-ratio="1x1"
                  data-strk-img-width="400"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  alt={step.imgDesc}
                  className="w-full h-32 object-cover rounded-lg"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Products We Source */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 id="products-title" className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Products We Source
            </h2>
            <p id="products-subtitle" className="text-lg text-gray-600 max-w-2xl mx-auto">
              Extensive experience across diverse product categories
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {productCategories.map((category, index) => (
              <div key={index} className="border border-gray-200 rounded-xl overflow-hidden hover:shadow-lg transition-shadow">
                <img
                  data-strk-img-id={category.imgId}
                  data-strk-img={`[products-subtitle] [products-title]`}
                  data-strk-img-ratio="16x9"
                  data-strk-img-width="800"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  alt={category.imgDesc}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {category.name}
                  </h3>
                  <p className="text-gray-600">
                    {category.count}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Problems We Solve */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 id="problems-title" className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Problems We Solve
            </h2>
            <p id="problems-subtitle" className="text-lg text-gray-600 max-w-2xl mx-auto">
              Common sourcing challenges and how we address them
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {problems.map((item, index) => (
              <div key={index} className="bg-white rounded-xl p-8 shadow-sm">
                <div className="mb-4">
                  {item.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {item.problem}
                </h3>
                <p className="text-gray-600">
                  {item.solution}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust Points */}
      <section className="py-16 md:py-24 bg-blue-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 id="trust-title" className="text-3xl md:text-4xl font-bold mb-4">
              Why Choose SSourcing China
            </h2>
            <p id="trust-subtitle" className="text-lg text-blue-100 max-w-2xl mx-auto">
              Proven track record of successful sourcing projects
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {trustPoints.map((point, index) => (
              <div key={index} className="text-center">
                <img
                  data-strk-img-id={point.imgId}
                  data-strk-img={`[trust-subtitle] [trust-title]`}
                  data-strk-img-ratio="1x1"
                  data-strk-img-width="300"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  alt={point.imgDesc}
                  className="w-20 h-20 object-cover rounded-full mx-auto mb-4"
                />
                <div className="text-4xl md:text-5xl font-bold mb-2">
                  {point.number}
                </div>
                <div className="text-blue-100">
                  {point.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 id="cases-title" className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Success Stories
            </h2>
            <p id="cases-subtitle" className="text-lg text-gray-600 max-w-2xl mx-auto">
              Real results for our clients across industries
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {caseStudies.map((study, index) => (
              <div key={index} className="bg-gray-50 rounded-xl overflow-hidden hover:shadow-lg transition-shadow">
                <img
                  data-strk-img-id={study.imgId}
                  data-strk-img={`[cases-subtitle] [cases-title]`}
                  data-strk-img-ratio="16x9"
                  data-strk-img-width="800"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  alt={study.imgDesc}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {study.title}
                  </h3>
                  <p className="text-sm text-blue-600 font-medium mb-3">
                    {study.client}
                  </p>
                  <div className="space-y-3">
                    <div>
                      <span className="font-semibold text-gray-700">Challenge: </span>
                      <span className="text-gray-600 text-sm">{study.challenge}</span>
                    </div>
                    <div>
                      <span className="font-semibold text-gray-700">Solution: </span>
                      <span className="text-gray-600 text-sm">{study.solution}</span>
                    </div>
                    <div>
                      <span className="font-semibold text-gray-700">Result: </span>
                      <span className="text-gray-600 text-sm">{study.result}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 id="faq-title" className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Frequently Asked Questions
            </h2>
            <p id="faq-subtitle" className="text-lg text-gray-600">
              Common questions about our sourcing services
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-white rounded-lg shadow-sm">
                <button
                  className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-50 transition-colors"
                  onClick={() => setExpandedFaq(expandedFaq === index ? null : index)}
                >
                  <span className="font-semibold text-gray-900">{faq.question}</span>
                  <ChevronDown
                    className={`w-5 h-5 text-gray-500 transition-transform ${
                      expandedFaq === index ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                {expandedFaq === index && (
                  <div className="px-6 pb-4">
                    <p className="text-gray-600">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Inquiry Form */}
      <section className="py-16 md:py-24 bg-blue-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 id="inquiry-title" className="text-3xl md:text-4xl font-bold mb-4">
              Get Your Free Sourcing Quote
            </h2>
            <p id="inquiry-subtitle" className="text-lg text-blue-100">
              Tell us about your sourcing needs and we'll respond within 24 hours
            </p>
          </div>

          <form onSubmit={handleSubmit} className="bg-white rounded-xl p-8 text-gray-900">
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
                  value={formData.name}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
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
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="john@company.com"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">
                  Company Name
                </label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  value={formData.company}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Your Company Ltd."
                />
              </div>
              <div>
                <label htmlFor="product" className="block text-sm font-medium text-gray-700 mb-2">
                  Product You Want to Source *
                </label>
                <input
                  type="text"
                  id="product"
                  name="product"
                  required
                  value={formData.product}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="e.g., Wireless Earphones"
                />
              </div>
            </div>

            <div className="mb-6">
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                Additional Details
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                value={formData.message}
                onChange={handleInputChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="Tell us about quantity, target price, quality requirements, timeline..."
              />
            </div>

            <button
              type="submit"
              className="w-full bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-700 transition-colors inline-flex items-center justify-center"
            >
              <Send className="mr-2 w-5 h-5" />
              Submit Inquiry
            </button>
          </form>
        </div>
      </section>
    </div>
  )
}

export default Home
