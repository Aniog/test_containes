import { useState, useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { 
  CheckCircle, 
  Shield, 
  Factory, 
  Truck, 
  Search, 
  ClipboardCheck, 
  Package, 
  ArrowRight,
  ChevronDown,
  ChevronUp,
  Star,
  Users,
  TrendingUp,
  Globe
} from 'lucide-react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '../strk-img-config.json'

// FAQ Component
function FAQItem({ question, answer, isOpen, onToggle }) {
  return (
    <div className="border-b border-gray-200">
      <button
        className="w-full py-5 flex justify-between items-center text-left"
        onClick={onToggle}
      >
        <span className="text-lg font-medium text-gray-900">{question}</span>
        {isOpen ? (
          <ChevronUp className="w-5 h-5 text-gray-500" />
        ) : (
          <ChevronDown className="w-5 h-5 text-gray-500" />
        )}
      </button>
      {isOpen && (
        <div className="pb-5 text-gray-600 leading-relaxed">
          {answer}
        </div>
      )}
    </div>
  )
}

// Trust Stats Component
function TrustStats() {
  const stats = [
    { icon: Users, value: '500+', label: 'Clients Served' },
    { icon: Factory, value: '1,200+', label: 'Factories Verified' },
    { icon: ClipboardCheck, value: '3,500+', label: 'Inspections Done' },
    { icon: TrendingUp, value: '98%', label: 'Client Satisfaction' },
  ]

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="w-14 h-14 bg-blue-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                <stat.icon className="w-7 h-7 text-blue-900" />
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-1">{stat.value}</div>
              <div className="text-sm text-gray-600">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// Services Overview Component
function ServicesOverview() {
  const services = [
    {
      icon: Search,
      title: 'Supplier Verification',
      description: 'We verify factory existence, business license, production capacity, and certifications to ensure you work with legitimate suppliers.',
      link: '/services#verification',
    },
    {
      icon: ClipboardCheck,
      title: 'Quality Inspection',
      description: 'Our QC engineers perform pre-shipment inspections, during-production checks, and container loading supervision.',
      link: '/services#inspection',
    },
    {
      icon: Factory,
      title: 'Production Follow-up',
      description: 'Regular factory visits to monitor progress, address issues, and ensure production timeline adherence.',
      link: '/services#production',
    },
    {
      icon: Truck,
      title: 'Shipping Coordination',
      description: 'We handle freight forwarding, customs clearance documentation, and logistics coordination from factory to your door.',
      link: '/services#shipping',
    },
  ]

  return (
    <section className="py-20 bg-white" id="services">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Our Sourcing Services
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Comprehensive solutions to help you source from China with confidence
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="group p-8 bg-white border border-gray-200 rounded-2xl hover:border-blue-300 hover:shadow-lg transition-all"
            >
              <div className="w-14 h-14 bg-blue-50 rounded-xl flex items-center justify-center mb-5 group-hover:bg-blue-100 transition-colors">
                <service.icon className="w-7 h-7 text-blue-900" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                {service.title}
              </h3>
              <p className="text-gray-600 mb-4 leading-relaxed">
                {service.description}
              </p>
              <Link
                to={service.link}
                className="inline-flex items-center text-blue-900 font-medium hover:text-blue-700"
              >
                Learn more <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// Problems We Solve Component
function ProblemsWeSolve() {
  const problems = [
    {
      title: 'Language Barriers',
      description: 'We bridge communication gaps between you and Chinese suppliers, ensuring clear understanding of specifications and requirements.',
    },
    {
      title: 'Quality Risks',
      description: 'Our quality inspections prevent defective products from reaching your market, saving you from costly returns and reputation damage.',
    },
    {
      title: 'Supplier Scams',
      description: 'Thorough factory verification protects you from fraudulent suppliers who take payments and disappear.',
    },
    {
      title: 'Logistics Complexities',
      description: 'We navigate shipping documentation, customs regulations, and freight coordination so you don\'t have to.',
    },
  ]

  return (
    <section className="py-20 bg-gray-50" id="problems">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Problems We Solve
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Common challenges when sourcing from China—and how we help you overcome them
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {problems.map((problem, index) => (
            <div 
              key={index} 
              className="flex p-6 bg-white rounded-xl border border-gray-200"
            >
              <div className="flex-shrink-0 w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mr-4">
                <Shield className="w-6 h-6 text-red-600" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {problem.title}
                </h3>
                <p className="text-gray-600">
                  {problem.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// Process Steps Component
function ProcessSteps() {
  const steps = [
    {
      number: '01',
      title: 'Submit Your Request',
      description: 'Tell us what product you need, quantity, target price, and any specific requirements.',
    },
    {
      number: '02',
      title: 'We Find Suppliers',
      description: 'We research and vet Chinese manufacturers, presenting you with 3-5 qualified options.',
    },
    {
      number: '03',
      title: 'Factory Verification',
      description: 'We visit factories, verify licenses, check production capacity, and assess reliability.',
    },
    {
      number: '04',
      title: 'Sample & Negotiation',
      description: 'We request samples, negotiate prices and terms, and help you make informed decisions.',
    },
    {
      number: '05',
      title: 'Production Monitoring',
      description: 'Regular factory visits ensure production stays on schedule and meets quality standards.',
    },
    {
      number: '06',
      title: 'Quality Inspection',
      description: 'Pre-shipment inspection verifies your products meet specifications before loading.',
    },
    {
      number: '07',
      title: 'Shipping & Delivery',
      description: 'We coordinate freight forwarding and customs clearance to your destination.',
    },
  ]

  return (
    <section className="py-20 bg-white" id="process">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Our Sourcing Process
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            A systematic approach to ensure successful sourcing from China
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {steps.map((step, index) => (
            <div 
              key={index} 
              className="relative p-6 bg-white border border-gray-200 rounded-xl hover:border-blue-300 hover:shadow-md transition-all"
            >
              <div className="text-5xl font-bold text-blue-100 mb-4">{step.number}</div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                {step.title}
              </h3>
              <p className="text-gray-600 text-sm">
                {step.description}
              </p>
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <Link
            to="/how-it-works"
            className="inline-flex items-center px-6 py-3 bg-blue-900 text-white font-semibold rounded-lg hover:bg-blue-800 transition-colors"
          >
            See Full Process <ArrowRight className="w-4 h-4 ml-2" />
          </Link>
        </div>
      </div>
    </section>
  )
}

// Products We Source Component
function ProductsWeSource() {
  const products = [
    { name: 'Electronics', image: 'electronics manufacturing' },
    { name: 'Textiles & Apparel', image: 'textile factory' },
    { name: 'Furniture', image: 'furniture manufacturing' },
    { name: 'Machinery', image: 'industrial machinery' },
    { name: 'Packaging', image: 'packaging materials' },
    { name: 'Home & Garden', image: 'home products' },
  ]

  return (
    <section className="py-20 bg-gray-50" id="products">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Products We Source
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            We have expertise across a wide range of product categories
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
          {products.map((product, index) => (
            <div 
              key={index} 
              className="group relative overflow-hidden rounded-xl aspect-square bg-gray-200"
            >
              <img
                data-strk-img-id={`product-${index}-img`}
                data-strk-img={`[product-${index}-title] ${product.image}`}
                data-strk-img-ratio="1x1"
                data-strk-img-width="400"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                alt={product.name}
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-4">
                <h3 
                  id={`product-${index}-title`}
                  className="text-white font-semibold text-lg"
                >
                  {product.name}
                </h3>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <Link
            to="/products"
            className="inline-flex items-center text-blue-900 font-medium hover:text-blue-700"
          >
            View All Products <ArrowRight className="w-4 h-4 ml-2" />
          </Link>
        </div>
      </div>
    </section>
  )
}

// Case Studies Preview Component
function CaseStudiesPreview() {
  const cases = [
    {
      company: 'TechStart Inc.',
      industry: 'Electronics',
      result: '40% cost reduction',
      description: 'Sourced smart home devices from verified manufacturer with full QC support.',
    },
    {
      company: 'FashionLine',
      industry: 'Apparel',
      result: '3 new suppliers',
      description: 'Found reliable textile suppliers and established long-term partnerships.',
    },
    {
      company: 'HomeGoods Co.',
      industry: 'Home & Garden',
      result: 'On-time delivery',
      description: 'Coordinated complex multi-item order with seamless shipping coordination.',
    },
  ]

  return (
    <section className="py-20 bg-white" id="case-studies">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Success Stories
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Real results from our clients who trusted us with their China sourcing
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {cases.map((caseStudy, index) => (
            <div 
              key={index} 
              className="p-6 bg-gray-50 rounded-xl border border-gray-200"
            >
              <div className="text-sm text-blue-900 font-medium mb-2">
                {caseStudy.industry}
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {caseStudy.company}
              </h3>
              <p className="text-gray-600 mb-4 text-sm">
                {caseStudy.description}
              </p>
              <div className="flex items-center">
                <Star className="w-5 h-5 text-yellow-400 fill-current mr-2" />
                <span className="text-lg font-bold text-green-600">{caseStudy.result}</span>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <Link
            to="/case-studies"
            className="inline-flex items-center px-6 py-3 border-2 border-blue-900 text-blue-900 font-semibold rounded-lg hover:bg-blue-900 hover:text-white transition-colors"
          >
            View All Case Studies <ArrowRight className="w-4 h-4 ml-2" />
          </Link>
        </div>
      </div>
    </section>
  )
}

// FAQ Section Component
function FAQSection() {
  const [openIndex, setOpenIndex] = useState(null)

  const faqs = [
    {
      question: 'How much do your sourcing services cost?',
      answer: 'Our pricing varies based on the scope of services required. We offer flexible fee structures including project-based pricing and retainer options. Contact us for a free consultation and quote tailored to your specific needs.',
    },
    {
      question: 'How long does the sourcing process take?',
      answer: 'The timeline depends on product complexity and availability of suppliers. Typically, supplier identification takes 1-2 weeks, verification 1 week, sample evaluation 2-4 weeks, and production 4-12 weeks. We\'ll provide a detailed timeline during our initial consultation.',
    },
    {
      question: 'Do you only work with large orders?',
      answer: 'We work with businesses of all sizes, from startups to large enterprises. While we have experience with high-volume orders, we also assist clients with smaller quantities, especially for product development and testing purposes.',
    },
    {
      question: 'What areas of China do you cover?',
      answer: 'We operate across all major manufacturing regions in China, including Guangdong, Zhejiang, Jiangsu, Shandong, and Fujian. Our team is based in Shenzhen and can easily travel to factory locations throughout the country.',
    },
    {
      question: 'How do you ensure product quality?',
      answer: 'We implement a multi-stage quality control process including pre-production material checks, during-production inspections, pre-shipment inspections, and container loading supervision. All inspections follow AQL standards and include detailed photo and video reports.',
    },
  ]

  return (
    <section className="py-20 bg-gray-50" id="faq">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-gray-600">
            Common questions about our China sourcing services
          </p>
        </div>

        <div className="bg-white rounded-2xl border border-gray-200 p-6">
          {faqs.map((faq, index) => (
            <FAQItem
              key={index}
              question={faq.question}
              answer={faq.answer}
              isOpen={openIndex === index}
              onToggle={() => setOpenIndex(openIndex === index ? null : index)}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

// CTA Section Component
function CTASection() {
  return (
    <section className="py-20 bg-blue-900">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
          Ready to Source from China?
        </h2>
        <p className="text-lg text-blue-100 mb-8 max-w-2xl mx-auto">
          Get started with a free sourcing consultation. Tell us about your product requirements 
          and we\'ll help you find the right suppliers.
        </p>
        <Link
          to="/contact"
          className="inline-flex items-center px-8 py-4 bg-white text-blue-900 text-lg font-semibold rounded-lg hover:bg-gray-100 transition-colors"
        >
          Get a Free Quote <ArrowRight className="w-5 h-5 ml-2" />
        </Link>
      </div>
    </section>
  )
}

// Main Home Page Component
export default function Home() {
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
      <section className="relative bg-gradient-to-br from-blue-50 via-white to-gray-50 py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center px-4 py-2 bg-blue-100 rounded-full text-blue-900 text-sm font-medium mb-6">
                <Globe className="w-4 h-4 mr-2" />
                Based in Shenzhen, China
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6">
                China Sourcing Agent for Global Buyers
              </h1>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                We help overseas businesses find reliable suppliers, verify factories, 
                inspect quality, and coordinate shipping. Your trusted partner for 
                seamless China sourcing.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/contact"
                  className="inline-flex justify-center items-center px-6 py-3 bg-blue-900 text-white font-semibold rounded-lg hover:bg-blue-800 transition-colors"
                >
                  Get a Free Quote
                </Link>
                <Link
                  to="/how-it-works"
                  className="inline-flex justify-center items-center px-6 py-3 border-2 border-gray-300 text-gray-700 font-semibold rounded-lg hover:border-gray-400 transition-colors"
                >
                  How It Works
                </Link>
              </div>
              
              {/* Trust indicators */}
              <div className="mt-10 flex items-center gap-6 text-sm text-gray-500">
                <div className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
                  <span>Verified Suppliers</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
                  <span>Quality Inspected</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
                  <span>On-Time Delivery</span>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <div className="aspect-square rounded-2xl overflow-hidden bg-gray-200">
                <img
                  data-strk-img-id="hero-img-001"
                  data-strk-img="[hero-title] [hero-subtitle]"
                  data-strk-img-ratio="1x1"
                  data-strk-img-width="800"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  alt="China factory manufacturing"
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Floating card */}
              <div className="absolute -bottom-6 -left-6 bg-white rounded-xl shadow-lg p-4 max-w-xs">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                    <CheckCircle className="w-5 h-5 text-green-600" />
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">500+</div>
                    <div className="text-sm text-gray-500">Clients Worldwide</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <TrustStats />
      <ServicesOverview />
      <ProblemsWeSolve />
      <ProcessSteps />
      <ProductsWeSource />
      <CaseStudiesPreview />
      <FAQSection />
      <CTASection />
    </div>
  )
}