import { useState, useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { 
  Factory, Search, Shield, ClipboardCheck, Truck, 
  CheckCircle, ArrowRight, Star, Clock, Users, 
  ChevronDown, ChevronUp
} from 'lucide-react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '../strk-img-config.json'

const Home = () => {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  const services = [
    {
      icon: Search,
      title: 'Supplier Verification',
      description: 'We verify supplier credentials, business licenses, and production capacity to ensure legitimacy.'
    },
    {
      icon: Factory,
      title: 'Factory Inspection',
      description: 'On-site visits to assess factory facilities, equipment, worker conditions, and production capabilities.'
    },
    {
      icon: ClipboardCheck,
      title: 'Quality Control',
      description: 'Pre-shipment inspections following AQL standards. We check product quality, specifications, and packaging.'
    },
    {
      icon: Truck,
      title: 'Shipping & Logistics',
      description: 'We coordinate freight forwarding, customs clearance, and door-to-door delivery worldwide.'
    }
  ]

  const processSteps = [
    { number: 1, title: 'Submit Request', description: 'Tell us what you need - product specs, quantity, target price' },
    { number: 2, title: 'Supplier Matching', description: 'We identify and verify 3-5 qualified suppliers within 5-7 days' },
    { number: 3, title: 'Factory Visit', description: 'Our team visits shortlisted factories to assess capabilities' },
    { number: 4, title: 'Quality Control', description: 'We inspect products during production and before shipment' },
    { number: 5, title: 'Shipping', description: 'We handle logistics from factory to your designated warehouse' }
  ]

  const products = [
    'Electronics & Gadgets', 'Home & Garden', 'Textiles & Apparel',
    'Machinery & Parts', 'Packaging Materials', 'Automotive Parts',
    'Health & Beauty', 'Sports & Outdoors', 'Toys & Gifts'
  ]

  const problems = [
    {
      title: 'Language Barriers',
      description: 'Communicate effectively in English and Mandarin. We bridge the gap between you and suppliers.'
    },
    {
      title: 'Quality Issues',
      description: 'Prevent defective products with our professional QC inspections at every production stage.'
    },
    {
      title: 'Scam Prevention',
      description: 'Verify supplier legitimacy before any payment. We identify red flags and protect your interests.'
    },
    {
      title: 'Shipping Complexities',
      description: 'Navigate international logistics smoothly. We handle documentation, customs, and delivery.'
    }
  ]

  const trustPoints = [
    { icon: Clock, value: '10+', label: 'Years Experience' },
    { icon: Users, value: '500+', label: 'Clients Served' },
    { icon: CheckCircle, value: '2000+', label: 'Inspections Done' },
    { icon: Star, value: '98%', label: 'Client Satisfaction' }
  ]

  const caseStudies = [
    {
      category: 'Electronics',
      title: 'Smart Home Device Sourcing for European Retailer',
      description: 'Sourced and verified 3 factories for smart home controllers. Conducted 5 factory audits and 3 pre-shipment inspections.',
      result: '40% cost reduction, zero quality issues in first shipment'
    },
    {
      category: 'Textiles',
      title: 'Private Label Apparel for US Brand',
      description: 'End-to-end sourcing for cotton t-shirts. Managed supplier selection, quality control, and sea freight to Los Angeles.',
      result: 'Delivered 50,000 units on time, 15% under budget'
    },
    {
      category: 'Machinery',
      title: 'Industrial Equipment for Middle East Distributor',
      description: 'Sourced CNC machine suppliers. Performed factory audits, negotiated pricing, and coordinated modular shipping.',
      result: 'Secured 3-year supplier contract, 25% savings'
    }
  ]

  const faqs = [
    {
      question: 'How long does the sourcing process take?',
      answer: 'Typically 2-4 weeks for initial supplier matching. Full cycle depends on product complexity and quantity. We provide timeline estimates after understanding your requirements.'
    },
    {
      question: 'What are your service fees?',
      answer: 'Our fee structure is transparent. We charge a sourcing fee based on project scope and may receive a small commission from verified suppliers. We disclose all costs upfront with no hidden fees.'
    },
    {
      question: 'Do you only work with large orders?',
      answer: 'We work with businesses of all sizes. Minimum order quantities vary by product category. Contact us to discuss your specific requirements.'
    },
    {
      question: 'Can you handle shipping to my country?',
      answer: 'Yes, we coordinate global shipping. We work with major freight forwarders and can arrange air, sea, or multimodal shipping to virtually any destination.'
    },
    {
      question: 'How do you ensure product quality?',
      answer: 'We conduct quality inspections at critical stages: during production (DUPONT), pre-shipment (PSI), and container loading supervision. Reports include detailed photos and measurements.'
    }
  ]

  const [openFaq, setOpenFaq] = useState(null)

  return (
    <div ref={containerRef}>
      {/* Hero Section */}
      <section className="relative bg-[#0F172A] pt-24 pb-16 md:pt-32 md:pb-24 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}></div>
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
              China Sourcing Agent for Global Buyers
            </h1>
            <p className="text-lg md:text-xl text-gray-300 mb-8">
              We help you find reliable suppliers, verify factories, inspect quality, and coordinate shipping. Turnkey sourcing solutions for businesses of all sizes.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center px-8 py-4 bg-[#E67E22] text-white font-semibold rounded-lg hover:bg-[#D35400] transition-colors"
              >
                Get a Free Sourcing Quote
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <Link
                to="/how-it-works"
                className="inline-flex items-center justify-center px-8 py-4 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-[#0F172A] transition-colors"
              >
                Learn How It Works
              </Link>
            </div>
          </div>
          
          {/* Trust Badges */}
          <div className="mt-12 pt-8 border-t border-gray-700 flex flex-wrap gap-8">
            {trustPoints.map((point, index) => (
              <div key={index} className="flex items-center gap-3">
                <point.icon className="w-6 h-6 text-[#E67E22]" />
                <div>
                  <div className="text-2xl font-bold text-white">{point.value}</div>
                  <div className="text-sm text-gray-400">{point.label}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 md:py-24 bg-[#F8FAFC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#1E293B] mb-4">
              Our Sourcing Services
            </h2>
            <p className="text-lg text-[#64748B] max-w-2xl mx-auto">
              Comprehensive end-to-end sourcing solutions to help you source products from China with confidence.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow border border-gray-100">
                <div className="w-12 h-12 bg-[#1E3A5F] rounded-lg flex items-center justify-center mb-4">
                  <service.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-[#1E293B] mb-2">{service.title}</h3>
                <p className="text-[#64748B]">{service.description}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-10">
            <Link to="/services" className="inline-flex items-center text-[#E67E22] font-medium hover:underline">
              View All Services <ArrowRight className="ml-2 w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#1E293B] mb-4">
              Our Sourcing Process
            </h2>
            <p className="text-lg text-[#64748B] max-w-2xl mx-auto">
              A proven 5-step process that ensures quality, transparency, and reliability at every stage.
            </p>
          </div>

          <div className="relative">
            {/* Connecting Line */}
            <div className="hidden lg:block absolute top-12 left-0 right-0 h-0.5 bg-[#E2E8F0]"></div>
            
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
              {processSteps.map((step, index) => (
                <div key={index} className="relative">
                  <div className="lg:text-center">
                    <div className="w-12 h-12 bg-[#1E3A5F] text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto lg:mb-4 relative z-10">
                      {step.number}
                    </div>
                    <h3 className="text-lg font-semibold text-[#1E293B] mt-4 lg:mt-0">{step.title}</h3>
                    <p className="text-[#64748B] mt-2 text-sm">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="text-center mt-12">
            <Link to="/how-it-works" className="inline-flex items-center text-[#E67E22] font-medium hover:underline">
              Learn More About Our Process <ArrowRight className="ml-2 w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Products We Source */}
      <section className="py-16 md:py-24 bg-[#F8FAFC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#1E293B] mb-4">
              Products We Source
            </h2>
            <p className="text-lg text-[#64748B] max-w-2xl mx-auto">
              We have expertise across a wide range of product categories from verified Chinese manufacturers.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {products.map((product, index) => (
              <div key={index} className="bg-white p-4 rounded-lg border border-gray-200 hover:border-[#E67E22] transition-colors">
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-[#27AE60]" />
                  <span className="font-medium text-[#1E293B]">{product}</span>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-10">
            <Link to="/products" className="inline-flex items-center text-[#E67E22] font-medium hover:underline">
              View All Categories <ArrowRight className="ml-2 w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Problems We Solve */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#1E293B] mb-4">
              Problems We Solve
            </h2>
            <p className="text-lg text-[#64748B] max-w-2xl mx-auto">
              Common challenges when sourcing from China, and how we help you overcome them.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {problems.map((problem, index) => (
              <div key={index} className="bg-[#F8FAFC] p-6 rounded-lg border border-gray-200">
                <Shield className="w-10 h-10 text-[#E67E22] mb-4" />
                <h3 className="text-lg font-semibold text-[#1E293B] mb-2">{problem.title}</h3>
                <p className="text-[#64748B] text-sm">{problem.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-16 md:py-24 bg-[#F8FAFC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#1E293B] mb-4">
              Case Studies
            </h2>
            <p className="text-lg text-[#64748B] max-w-2xl mx-auto">
              Real success stories from our clients around the world.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {caseStudies.map((study, index) => (
              <div key={index} className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                <div className="h-48 bg-[#1E3A5F] flex items-center justify-center">
                  <Factory className="w-16 h-16 text-white opacity-50" />
                </div>
                <div className="p-6">
                  <span className="inline-block px-3 py-1 bg-[#E67E22] text-white text-xs font-medium rounded-full mb-3">
                    {study.category}
                  </span>
                  <h3 className="text-lg font-semibold text-[#1E293B] mb-2">{study.title}</h3>
                  <p className="text-[#64748B] text-sm mb-3">{study.description}</p>
                  <div className="pt-3 border-t border-gray-100">
                    <p className="text-[#27AE60] font-medium text-sm">{study.result}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-10">
            <Link to="/case-studies" className="inline-flex items-center text-[#E67E22] font-medium hover:underline">
              View All Case Studies <ArrowRight className="ml-2 w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#1E293B] mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-[#64748B]">
              Common questions about our sourcing services.
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="border border-gray-200 rounded-lg overflow-hidden">
                <button
                  className="w-full px-6 py-4 text-left flex items-center justify-between bg-white hover:bg-[#F8FAFC] transition-colors"
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                >
                  <span className="font-medium text-[#1E293B]">{faq.question}</span>
                  {openFaq === index ? (
                    <ChevronUp className="w-5 h-5 text-[#64748B]" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-[#64748B]" />
                  )}
                </button>
                {openFaq === index && (
                  <div className="px-6 pb-4 text-[#64748B]">
                    {faq.answer}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section with Form */}
      <section className="py-16 md:py-24 bg-[#1E3A5F]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Ready to Start Sourcing?
              </h2>
              <p className="text-lg text-gray-300 mb-6">
                Get a free sourcing quote within 24 hours. Tell us what you need, and we'll handle the rest.
              </p>
              <ul className="space-y-3">
                <li className="flex items-center gap-3 text-gray-300">
                  <CheckCircle className="w-5 h-5 text-[#27AE60]" />
                  <span>Free initial consultation</span>
                </li>
                <li className="flex items-center gap-3 text-gray-300">
                  <CheckCircle className="w-5 h-5 text-[#27AE60]" />
                  <span>No obligation quote</span>
                </li>
                <li className="flex items-center gap-3 text-gray-300">
                  <CheckCircle className="w-5 h-5 text-[#27AE60]" />
                  <span>Verified supplier network</span>
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-lg p-8">
              <h3 className="text-xl font-semibold text-[#1E293B] mb-6">Get Your Free Quote</h3>
              <form className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-[#1E293B] mb-1">Full Name</label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#E67E22] focus:border-transparent"
                    placeholder="John Smith"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-[#1E293B] mb-1">Email Address</label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#E67E22] focus:border-transparent"
                    placeholder="john@company.com"
                  />
                </div>
                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-[#1E293B] mb-1">Company Name</label>
                  <input
                    type="text"
                    id="company"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#E67E22] focus:border-transparent"
                    placeholder="Your Company Ltd"
                  />
                </div>
                <div>
                  <label htmlFor="product" className="block text-sm font-medium text-[#1E293B] mb-1">Product Interested In</label>
                  <input
                    type="text"
                    id="product"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#E67E22] focus:border-transparent"
                    placeholder="e.g., Electronics, Textiles..."
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-[#1E293B] mb-1">Message</label>
                  <textarea
                    id="message"
                    rows={4}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#E67E22] focus:border-transparent"
                    placeholder="Tell us about your sourcing requirements..."
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full py-3 bg-[#E67E22] text-white font-semibold rounded-md hover:bg-[#D35400] transition-colors"
                >
                  Get Free Quote
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home