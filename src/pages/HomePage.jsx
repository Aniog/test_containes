import React, { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import {
  Search,
  ShieldCheck,
  ClipboardCheck,
  Factory,
  Ship,
  ArrowRight,
  CheckCircle2,
  AlertTriangle,
  TrendingUp,
  Users,
  Globe,
  Star,
  ChevronDown,
  ChevronUp,
  MessageSquare,
  Phone,
  Mail,
  MapPin,
} from 'lucide-react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'

const services = [
  {
    icon: Search,
    title: 'Supplier Sourcing',
    description: 'We identify and evaluate reliable manufacturers across China based on your product specifications, quality requirements, and budget.',
  },
  {
    icon: ShieldCheck,
    title: 'Factory Verification',
    description: 'On-site audits to verify business licenses, production capacity, quality management systems, and social compliance.',
  },
  {
    icon: ClipboardCheck,
    title: 'Quality Inspection',
    description: 'Pre-production, during-production, and pre-shipment inspections to ensure products meet your standards before they leave the factory.',
  },
  {
    icon: Factory,
    title: 'Production Monitoring',
    description: 'Regular factory visits and progress reports to keep you informed and catch issues before they become costly delays.',
  },
  {
    icon: Ship,
    title: 'Shipping Coordination',
    description: 'End-to-end logistics support including freight forwarding, customs documentation, and delivery tracking to your destination.',
  },
]

const processSteps = [
  { step: 1, title: 'Submit Your Request', description: 'Tell us what you need — product details, quantities, target price, and timeline.' },
  { step: 2, title: 'Supplier Matching', description: 'We identify and vet potential suppliers, then present you with qualified options.' },
  { step: 3, title: 'Sample Evaluation', description: 'We coordinate sample production and shipping so you can evaluate quality firsthand.' },
  { step: 4, title: 'Production & QC', description: 'Once approved, we monitor production and conduct inspections at key stages.' },
  { step: 5, title: 'Shipping & Delivery', description: 'We handle logistics, documentation, and tracking until goods reach your door.' },
]

const productCategories = [
  'Electronics & Components',
  'Textiles & Apparel',
  'Home & Garden Products',
  'Machinery & Industrial Parts',
  'Packaging & Printing',
  'Toys & Gifts',
  'Automotive Parts',
  'Health & Beauty Products',
]

const problemsSolved = [
  {
    icon: AlertTriangle,
    title: 'Unreliable Suppliers',
    description: 'We verify every supplier before you commit, reducing the risk of fraud and poor quality.',
  },
  {
    icon: TrendingUp,
    title: 'Hidden Costs',
    description: 'Transparent pricing with no surprise fees. You know exactly what you are paying for.',
  },
  {
    icon: Users,
    title: 'Language & Culture Barriers',
    description: 'Our bilingual team handles all communication, ensuring nothing gets lost in translation.',
  },
  {
    icon: Globe,
    title: 'Complex Logistics',
    description: 'We manage the entire supply chain so you can focus on growing your business.',
  },
]

const trustPoints = [
  { number: '500+', label: 'Suppliers Verified' },
  { number: '1,200+', label: 'Orders Managed' },
  { number: '30+', label: 'Countries Served' },
  { number: '98%', label: 'Client Satisfaction' },
]

const caseStudies = [
  {
    title: 'Electronics Manufacturer for US Retailer',
    industry: 'Electronics',
    challenge: 'A US retailer needed a reliable manufacturer for consumer electronics with strict quality standards.',
    solution: 'We identified three qualified factories in Shenzhen, conducted on-site audits, and managed the entire production process.',
    result: 'Delivered 50,000 units on time with a defect rate below 0.5%.',
  },
  {
    title: 'Apparel Sourcing for European Brand',
    industry: 'Textiles',
    challenge: 'A European fashion brand wanted to diversify its supply chain with a cost-effective Chinese manufacturer.',
    solution: 'We sourced factories in Guangzhou, verified compliance with EU standards, and coordinated sample approvals.',
    result: 'Reduced production costs by 25% while maintaining quality standards.',
  },
  {
    title: 'Industrial Parts for Australian Distributor',
    industry: 'Industrial',
    challenge: 'An Australian company needed custom-machined parts with tight tolerances and consistent quality.',
    solution: 'We found a specialized CNC manufacturer, implemented a rigorous QC protocol, and managed logistics.',
    result: 'Established a long-term partnership with zero quality complaints over 18 months.',
  },
]

const faqs = [
  {
    question: 'How do you find and verify suppliers?',
    answer: 'We use a combination of database searches, industry networks, and on-site visits. Every supplier goes through a verification process that includes checking business licenses, production capacity, quality certifications, and references from previous clients.',
  },
  {
    question: 'What are your fees?',
    answer: 'Our fees depend on the scope and complexity of your sourcing project. We offer transparent pricing — typically a percentage of the order value or a fixed project fee. Contact us for a free quote tailored to your needs.',
  },
  {
    question: 'Do you handle shipping and customs?',
    answer: 'Yes. We coordinate the entire logistics process, including freight forwarding, customs documentation, and delivery to your specified destination. We work with trusted freight partners to ensure reliable and cost-effective shipping.',
  },
  {
    question: 'Can I visit the factory myself?',
    answer: 'Absolutely. We encourage factory visits and can arrange everything — from scheduling meetings with factory management to providing translation services and transportation.',
  },
  {
    question: 'What if the product quality does not meet my standards?',
    answer: 'Quality issues are addressed through our inspection process. If products do not meet agreed specifications, we work with the supplier to resolve the issue before shipment. Our pre-shipment inspection is designed to catch problems before goods leave the factory.',
  },
  {
    question: 'How long does the sourcing process take?',
    answer: 'Timelines vary depending on product complexity and order size. Typically, supplier identification takes 1-2 weeks, sample evaluation 2-4 weeks, and production 4-8 weeks. We provide a detailed timeline at the start of every project.',
  },
]

export default function HomePage() {
  const containerRef = useRef(null)
  const [openFaq, setOpenFaq] = useState(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <div ref={containerRef}>
      {/* Hero Section */}
      <section className="relative bg-slate-900 text-white overflow-hidden">
        <div
          className="absolute inset-0 opacity-20"
          data-strk-bg-id="hero-bg-a1b2c3"
          data-strk-bg="[hero-title] [hero-subtitle]"
          data-strk-bg-ratio="16x9"
          data-strk-bg-width="1600"
        />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-36">
          <div className="max-w-3xl">
            <h1 id="hero-title" className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              China Sourcing Agent for Global Buyers
            </h1>
            <p id="hero-subtitle" className="text-lg sm:text-xl text-slate-300 mb-8 leading-relaxed">
              Find reliable suppliers, verify factories, inspect quality, and manage shipping — all from one trusted partner based in China.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center px-8 py-4 bg-blue-600 text-white text-base font-semibold rounded-lg hover:bg-blue-700 transition-colors"
              >
                Get a Free Sourcing Quote
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <Link
                to="/how-it-works"
                className="inline-flex items-center justify-center px-8 py-4 border border-slate-500 text-white text-base font-semibold rounded-lg hover:bg-slate-800 transition-colors"
              >
                See How It Works
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Points */}
      <section className="bg-blue-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 lg:py-14">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            {trustPoints.map((point, i) => (
              <div key={i}>
                <div className="text-3xl lg:text-4xl font-bold mb-1">{point.number}</div>
                <div className="text-sm text-blue-200">{point.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 lg:mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">Our Sourcing Services</h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              End-to-end sourcing support tailored to your business needs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {services.map((service, i) => (
              <div
                key={i}
                className="p-6 lg:p-8 rounded-xl border border-slate-200 hover:border-blue-300 hover:shadow-lg transition-all"
              >
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-5">
                  <service.icon className="w-6 h-6 text-blue-700" />
                </div>
                <h3 className="text-xl font-semibold text-slate-900 mb-3">{service.title}</h3>
                <p className="text-slate-600 leading-relaxed">{service.description}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-10">
            <Link
              to="/services"
              className="inline-flex items-center text-blue-700 font-semibold hover:text-blue-800 transition-colors"
            >
              View All Services
              <ArrowRight className="ml-2 w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 lg:py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 lg:mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">How It Works</h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              A simple, transparent process from inquiry to delivery.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-6 lg:gap-8">
            {processSteps.map((step, i) => (
              <div key={i} className="text-center">
                <div className="w-14 h-14 bg-blue-700 text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                  {step.step}
                </div>
                <h3 className="text-lg font-semibold text-slate-900 mb-2">{step.title}</h3>
                <p className="text-sm text-slate-600 leading-relaxed">{step.description}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-10">
            <Link
              to="/how-it-works"
              className="inline-flex items-center text-blue-700 font-semibold hover:text-blue-800 transition-colors"
            >
              Learn More About Our Process
              <ArrowRight className="ml-2 w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Products We Source */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 lg:mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">Products We Source</h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              We source across a wide range of industries and product categories.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 lg:gap-6">
            {productCategories.map((cat, i) => (
              <div
                key={i}
                className="p-5 lg:p-6 rounded-xl border border-slate-200 text-center hover:border-blue-300 hover:shadow-md transition-all"
              >
                <p className="text-sm lg:text-base font-medium text-slate-800">{cat}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-10">
            <Link
              to="/products"
              className="inline-flex items-center text-blue-700 font-semibold hover:text-blue-800 transition-colors"
            >
              See All Product Categories
              <ArrowRight className="ml-2 w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Problems We Solve */}
      <section className="py-16 lg:py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 lg:mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">Problems We Solve</h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Sourcing from China can be challenging. We remove the obstacles so you can focus on your business.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            {problemsSolved.map((problem, i) => (
              <div
                key={i}
                className="flex gap-5 p-6 lg:p-8 rounded-xl bg-white border border-slate-200"
              >
                <div className="flex-shrink-0 w-12 h-12 bg-amber-100 rounded-lg flex items-center justify-center">
                  <problem.icon className="w-6 h-6 text-amber-700" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-slate-900 mb-2">{problem.title}</h3>
                  <p className="text-slate-600 leading-relaxed">{problem.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 lg:mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">Case Studies</h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Real results from real sourcing projects.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">
            {caseStudies.map((cs, i) => (
              <div
                key={i}
                className="p-6 lg:p-8 rounded-xl border border-slate-200 hover:shadow-lg transition-all"
              >
                <span className="inline-block px-3 py-1 bg-blue-100 text-blue-700 text-xs font-semibold rounded-full mb-4">
                  {cs.industry}
                </span>
                <h3 className="text-lg font-semibold text-slate-900 mb-4">{cs.title}</h3>
                <div className="space-y-3 text-sm">
                  <p className="text-slate-600">
                    <span className="font-medium text-slate-800">Challenge: </span>
                    {cs.challenge}
                  </p>
                  <p className="text-slate-600">
                    <span className="font-medium text-slate-800">Solution: </span>
                    {cs.solution}
                  </p>
                  <p className="text-slate-600">
                    <span className="font-medium text-slate-800">Result: </span>
                    {cs.result}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-10">
            <Link
              to="/case-studies"
              className="inline-flex items-center text-blue-700 font-semibold hover:text-blue-800 transition-colors"
            >
              View All Case Studies
              <ArrowRight className="ml-2 w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 lg:py-24 bg-slate-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">Frequently Asked Questions</h2>
          </div>

          <div className="space-y-3">
            {faqs.map((faq, i) => (
              <div
                key={i}
                className="bg-white rounded-xl border border-slate-200 overflow-hidden"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full flex items-center justify-between p-5 lg:p-6 text-left"
                >
                  <span className="text-base font-semibold text-slate-900 pr-4">{faq.question}</span>
                  {openFaq === i ? (
                    <ChevronUp className="w-5 h-5 text-slate-500 flex-shrink-0" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-slate-500 flex-shrink-0" />
                  )}
                </button>
                {openFaq === i && (
                  <div className="px-5 lg:px-6 pb-5 lg:pb-6">
                    <p className="text-slate-600 leading-relaxed">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA / Inquiry Form */}
      <section className="py-16 lg:py-24 bg-blue-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold mb-4">Ready to Source from China?</h2>
              <p className="text-lg text-blue-100 mb-8 leading-relaxed">
                Tell us about your sourcing needs and we will get back to you within 24 hours with a free, no-obligation quote.
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-blue-200" />
                  <span>Free consultation and quote</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-blue-200" />
                  <span>No commitment required</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-blue-200" />
                  <span>Response within 24 hours</span>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-6 lg:p-8 text-slate-800">
              <h3 className="text-xl font-semibold mb-6">Get a Free Sourcing Quote</h3>
              <form className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-1">Full Name</label>
                    <input
                      id="name"
                      type="text"
                      className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition"
                      placeholder="John Smith"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-1">Email</label>
                    <input
                      id="email"
                      type="email"
                      className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition"
                      placeholder="john@company.com"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-slate-700 mb-1">Company</label>
                  <input
                    id="company"
                    type="text"
                    className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition"
                    placeholder="Your company name"
                  />
                </div>
                <div>
                  <label htmlFor="product" className="block text-sm font-medium text-slate-700 mb-1">Product Description</label>
                  <textarea
                    id="product"
                    rows={4}
                    className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition resize-none"
                    placeholder="Describe the product you want to source, including quantity, specifications, and target price..."
                  />
                </div>
                <button
                  type="submit"
                  className="w-full px-6 py-3 bg-blue-700 text-white font-semibold rounded-lg hover:bg-blue-800 transition-colors"
                >
                  Submit Inquiry
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
