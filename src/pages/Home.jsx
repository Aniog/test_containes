import { Link } from 'react-router-dom'
import { ArrowRight, CheckCircle, Shield, Factory, Truck, Search, FileCheck, Users, TrendingUp, ChevronDown, ChevronUp } from 'lucide-react'
import { useState } from 'react'

const services = [
  {
    icon: Search,
    title: 'Supplier Sourcing',
    description: 'Find verified manufacturers matching your exact requirements, quality standards, and budget.',
  },
  {
    icon: Shield,
    title: 'Factory Verification',
    description: 'On-site audits to confirm factory existence, production capacity, certifications, and compliance.',
  },
  {
    icon: FileCheck,
    title: 'Quality Inspection',
    description: 'Pre-shipment inspections ensuring products meet specifications and quality standards.',
  },
  {
    icon: Factory,
    title: 'Production Follow-up',
    description: 'Regular updates and on-site monitoring during manufacturing to prevent delays and quality issues.',
  },
  {
    icon: Truck,
    title: 'Shipping & Logistics',
    description: 'End-to-end logistics coordination from factory to your doorstep, including customs clearance.',
  },
  {
    icon: Users,
    title: 'Sample Management',
    description: 'Sourcing and evaluating product samples to ensure they meet your expectations.',
  },
]

const processSteps = [
  {
    number: '01',
    title: 'Submit Your Request',
    description: 'Tell us what you need - product specifications, quantity, target price, and timeline.',
  },
  {
    number: '02',
    title: 'We Find Suppliers',
    description: 'Our team researches and identifies verified manufacturers matching your criteria.',
  },
  {
    number: '03',
    title: 'Factory Verification',
    description: 'We conduct on-site audits to confirm factory legitimacy and capabilities.',
  },
  {
    number: '04',
    title: 'Sample Evaluation',
    description: 'You review samples and provide feedback before mass production begins.',
  },
  {
    number: '05',
    title: 'Production & QC',
    description: 'We monitor production and perform quality inspections before shipment.',
  },
  {
    number: '06',
    title: 'Shipping & Delivery',
    description: 'We coordinate logistics and ensure smooth customs clearance.',
  },
]

const trustPoints = [
  { number: '500+', label: 'Clients Served' },
  { number: '8+', label: 'Years Experience' },
  { number: '2000+', label: 'Factories Verified' },
  { number: '98%', label: 'Client Satisfaction' },
]

const products = [
  'Electronics & Gadgets',
  'Home & Garden',
  'Textiles & Apparel',
  'Packaging',
  'Machinery & Parts',
  'Automotive Parts',
  'Health & Beauty',
  'Sports & Outdoors',
]

const problems = [
  {
    title: 'Language Barriers',
    description: 'Communication gaps leading to misunderstandings, delays, and quality issues.',
    solution: 'Our bilingual team bridges the communication gap, ensuring clear specifications and expectations.',
  },
  {
    title: 'Supplier Scams',
    description: 'Fake factories, payment fraud, and misrepresentation of production capabilities.',
    solution: 'We verify every supplier in person, checking business licenses, factory premises, and capacity.',
  },
  {
    title: 'Quality Issues',
    description: 'Products arriving different from samples or not meeting agreed specifications.',
    solution: 'Our QC team performs rigorous inspections at multiple production stages.',
  },
  {
    title: 'Shipping Complexities',
    description: 'Complicated customs procedures, documentation errors, and logistics delays.',
    solution: 'We handle all logistics, ensuring proper documentation and smooth customs clearance.',
  },
]

const caseStudies = [
  {
    client: 'European Retail Chain',
    category: 'Home Goods',
    challenge: 'Needed 50,000+ home textile products from China with strict quality requirements.',
    result: 'Sourced 3 verified factories, conducted weekly QC visits, delivered on time with 99.2% quality pass rate.',
    image: 'home-textile-factory',
  },
  {
    client: 'US Tech Startup',
    category: 'Electronics',
    challenge: 'First-time sourcing from China, concerned about IP theft and quality control.',
    result: 'Full factory verification, NDA protection, and comprehensive QC protocol resulted in successful product launch.',
    image: 'electronics-factory',
  },
  {
    client: 'Australian Distributor',
    category: 'Packaging',
    challenge: 'Needed custom packaging with tight timeline for holiday season.',
    result: 'Identified specialized factory, managed production timeline, coordinated air freight for on-time delivery.',
    image: 'packaging-factory',
  },
]

const faqs = [
  {
    question: 'How do you verify factories?',
    answer: 'Our team conducts on-site visits to verify factory existence, check business licenses, assess production capacity, evaluate worker conditions, and confirm relevant certifications (ISO, CE, etc.). We provide detailed reports with photos and videos.',
  },
  {
    question: 'What are your fees?',
    answer: 'Our fee structure depends on the services you need. We offer transparent pricing with no hidden costs. Contact us for a customized quote based on your specific requirements.',
  },
  {
    question: 'How long does the sourcing process take?',
    answer: 'Timeline varies based on product complexity and availability. Typically, initial supplier shortlist takes 1-2 weeks, factory verification 1 week, sample evaluation 2-4 weeks, and production 4-12 weeks depending on order size.',
  },
  {
    question: 'Do you only work with large orders?',
    answer: 'We work with businesses of all sizes, from startups to large enterprises. Minimum order quantities vary by product category and factory.',
  },
  {
    question: 'How do you ensure product quality?',
    answer: 'We implement a multi-stage quality control process: pre-production inspection of raw materials, in-process inspections during manufacturing, and pre-shipment inspections before delivery. We can also arrange third-party testing if needed.',
  },
  {
    question: 'Can you help with shipping and customs?',
    answer: 'Yes, we provide end-to-end logistics support including freight forwarding, customs documentation, and coordination with your preferred shipping method (air, sea, or land).',
  },
]

export default function Home() {
  const [openFaq, setOpenFaq] = useState(null)

  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-blue-900 text-white overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23ffffff%22%20fill-opacity%3D%220.03%22%3E%3Cpath%20d%3D%22M36%2034v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6%2034v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6%204V0H4v4H0v2h4v4h2V6h4V4H6z%22%2F%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E')] opacity-50"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              China Sourcing Agent for Global Buyers
            </h1>
            <p className="text-lg md:text-xl text-gray-300 mb-8">
              We help overseas businesses find reliable suppliers, verify factories, 
              inspect quality, and coordinate seamless shipping from China.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-colors"
              >
                Get a Free Sourcing Quote
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <Link
                to="/how-it-works"
                className="inline-flex items-center justify-center px-8 py-4 border border-white/30 hover:bg-white/10 text-white font-semibold rounded-lg transition-colors"
              >
                See How It Works
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Stats */}
      <section className="bg-gray-50 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {trustPoints.map((point, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-blue-900 mb-2">{point.number}</div>
                <div className="text-gray-600 text-sm">{point.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Sourcing Services
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Comprehensive solutions to ensure your China sourcing is smooth, safe, and successful.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="p-6 border border-gray-200 rounded-xl hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <service.icon className="w-6 h-6 text-blue-900" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              to="/services"
              className="inline-flex items-center text-blue-900 font-medium hover:underline"
            >
              View All Services
              <ArrowRight className="ml-2 w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Problems We Solve */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Problems We Solve
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Common challenges when sourcing from China, and how we help you overcome them.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {problems.map((problem, index) => (
              <div key={index} className="bg-white p-8 rounded-xl border border-gray-200">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{problem.title}</h3>
                <p className="text-gray-600 mb-4">{problem.description}</p>
                <div className="pt-4 border-t border-gray-100">
                  <div className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <span className="font-medium text-gray-900">Solution: </span>
                      <span className="text-gray-600">{problem.solution}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sourcing Process */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Sourcing Process
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              A transparent, step-by-step approach to ensure your sourcing success.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {processSteps.map((step, index) => (
              <div key={index} className="relative">
                <div className="bg-white p-6 rounded-xl border border-gray-200 h-full">
                  <div className="text-5xl font-bold text-blue-100 mb-4">{step.number}</div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{step.title}</h3>
                  <p className="text-gray-600">{step.description}</p>
                </div>
                {index < processSteps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2 z-10">
                    <ArrowRight className="w-6 h-6 text-blue-300" />
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              to="/how-it-works"
              className="inline-flex items-center text-blue-900 font-medium hover:underline"
            >
              Learn More About Our Process
              <ArrowRight className="ml-2 w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Products We Source */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Products We Source
            </h2>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto">
              We have expertise across a wide range of product categories.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {products.map((product, index) => (
              <div
                key={index}
                className="p-4 bg-gray-800 rounded-lg text-center hover:bg-gray-700 transition-colors"
              >
                <span className="font-medium">{product}</span>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              to="/products"
              className="inline-flex items-center text-blue-400 font-medium hover:underline"
            >
              View All Product Categories
              <ArrowRight className="ml-2 w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Case Studies Preview */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Success Stories
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Real results from our clients who trusted us with their China sourcing.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {caseStudies.map((study, index) => (
              <div key={index} className="bg-white border border-gray-200 rounded-xl overflow-hidden hover:shadow-lg transition-shadow">
                <div className="h-48 bg-gradient-to-br from-blue-100 to-blue-200 flex items-center justify-center">
                  <Factory className="w-16 h-16 text-blue-900" />
                </div>
                <div className="p-6">
                  <div className="text-sm text-blue-600 font-medium mb-2">{study.category}</div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{study.client}</h3>
                  <p className="text-gray-600 text-sm mb-4">
                    <span className="font-medium">Challenge:</span> {study.challenge}
                  </p>
                  <p className="text-gray-600 text-sm">
                    <span className="font-medium text-green-600">Result:</span> {study.result}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              to="/case-studies"
              className="inline-flex items-center text-blue-900 font-medium hover:underline"
            >
              View All Case Studies
              <ArrowRight className="ml-2 w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Why Choose SSourcing China?
              </h2>
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                    <CheckCircle className="w-5 h-5 text-green-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Verified Suppliers Only</h3>
                    <p className="text-gray-600 text-sm">Every supplier undergoes rigorous verification before we recommend them.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                    <CheckCircle className="w-5 h-5 text-green-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Transparent Pricing</h3>
                    <p className="text-gray-600 text-sm">No hidden fees. You know exactly what you're paying for.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                    <CheckCircle className="w-5 h-5 text-green-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Quality Assurance</h3>
                    <p className="text-gray-600 text-sm">Professional QC inspections at every stage of production.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                    <CheckCircle className="w-5 h-5 text-green-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">End-to-End Support</h3>
                    <p className="text-gray-600 text-sm">From supplier finding to delivery, we're with you every step.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-br from-blue-900 to-blue-800 rounded-2xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-6">Ready to Start Sourcing?</h3>
              <p className="text-blue-100 mb-8">
                Get a free consultation and quote for your sourcing needs. 
                We'll help you find the right suppliers in China.
              </p>
              <Link
                to="/contact"
                className="inline-flex items-center justify-center w-full px-6 py-4 bg-white text-blue-900 font-semibold rounded-lg hover:bg-blue-50 transition-colors"
              >
                Get a Free Sourcing Quote
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-gray-600">
              Common questions about our China sourcing services.
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="border border-gray-200 rounded-lg">
                <button
                  className="w-full px-6 py-4 text-left flex items-center justify-between"
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                >
                  <span className="font-medium text-gray-900">{faq.question}</span>
                  {openFaq === index ? (
                    <ChevronUp className="w-5 h-5 text-gray-500" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-gray-500" />
                  )}
                </button>
                {openFaq === index && (
                  <div className="px-6 pb-4 text-gray-600">
                    {faq.answer}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Start Your China Sourcing Journey Today
          </h2>
          <p className="text-lg text-blue-100 mb-8">
            Join hundreds of businesses who trust us to source quality products from China.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center px-8 py-4 bg-white text-blue-900 font-semibold rounded-lg hover:bg-blue-50 transition-colors"
          >
            Get a Free Sourcing Quote
            <ArrowRight className="ml-2 w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  )
}