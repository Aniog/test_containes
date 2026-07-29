import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import {
  Search, Shield, CheckCircle, Truck, Package, ClipboardCheck,
  Factory, Users, Clock, AlertTriangle, DollarSign, Globe,
  ChevronDown, ChevronUp, ArrowRight, Star, FileText, MessageSquare
} from 'lucide-react'

const services = [
  {
    icon: Search,
    title: 'Product Sourcing',
    description: 'We find reliable manufacturers matching your product requirements, quality standards, and budget.',
  },
  {
    icon: Shield,
    title: 'Supplier Verification',
    description: 'On-site factory audits to verify business licenses, production capacity, and quality management systems.',
  },
  {
    icon: ClipboardCheck,
    title: 'Quality Inspection',
    description: 'Pre-shipment, during-production, and container loading inspections to ensure product quality.',
  },
  {
    icon: Factory,
    title: 'Production Monitoring',
    description: 'Regular factory visits and progress reports to keep your production on schedule.',
  },
  {
    icon: Package,
    title: 'Sample Management',
    description: 'We collect, evaluate, and ship product samples so you can verify quality before placing orders.',
  },
  {
    icon: Truck,
    title: 'Shipping Coordination',
    description: 'We handle logistics, customs documentation, and coordinate with freight forwarders for smooth delivery.',
  },
]

const processSteps = [
  {
    step: '01',
    title: 'Submit Your Requirements',
    description: 'Tell us what product you need, your specifications, target price, and order quantity.',
  },
  {
    step: '02',
    title: 'Supplier Search & Screening',
    description: 'We identify and evaluate potential suppliers based on your requirements and our verification criteria.',
  },
  {
    step: '03',
    title: 'Quotation & Comparison',
    description: 'Receive detailed quotations from verified suppliers with clear pricing breakdowns and lead times.',
  },
  {
    step: '04',
    title: 'Sample Evaluation',
    description: 'We arrange samples for your review before you commit to a production order.',
  },
  {
    step: '05',
    title: 'Production & Quality Control',
    description: 'We monitor production progress and conduct inspections to ensure quality standards are met.',
  },
  {
    step: '06',
    title: 'Shipping & Delivery',
    description: 'We coordinate shipping, handle documentation, and ensure your goods arrive on time.',
  },
]

const productCategories = [
  { name: 'Electronics & Components', icon: 'electronics' },
  { name: 'Home & Garden Products', icon: 'home' },
  { name: 'Apparel & Textiles', icon: 'apparel' },
  { name: 'Industrial Machinery', icon: 'machinery' },
  { name: 'Automotive Parts', icon: 'automotive' },
  { name: 'Packaging Materials', icon: 'packaging' },
  { name: 'Building Materials', icon: 'building' },
  { name: 'Consumer Goods', icon: 'consumer' },
]

const problems = [
  {
    icon: AlertTriangle,
    title: 'Unreliable Suppliers',
    description: 'We verify every supplier before you engage, reducing the risk of fraud and poor quality.',
  },
  {
    icon: DollarSign,
    title: 'Hidden Costs',
    description: 'Transparent pricing with no hidden fees. You know exactly what you are paying for.',
  },
  {
    icon: Clock,
    title: 'Communication Barriers',
    description: 'Our bilingual team bridges the language gap and ensures clear communication with factories.',
  },
  {
    icon: Globe,
    title: 'Distance & Time Zones',
    description: 'We are your local presence in China, handling issues in real-time during business hours.',
  },
]

const trustPoints = [
  { number: '500+', label: 'Verified Suppliers' },
  { number: '1,200+', label: 'Orders Completed' },
  { number: '30+', label: 'Countries Served' },
  { number: '8+', label: 'Years Experience' },
]

const caseStudies = [
  {
    title: 'Electronics Manufacturer Saves 22% on Component Costs',
    industry: 'Electronics',
    challenge: 'A US-based electronics company needed reliable PCB manufacturers with competitive pricing.',
    solution: 'We identified 3 verified suppliers in Shenzhen, negotiated pricing, and managed quality control throughout production.',
    result: '22% cost reduction, 99.2% quality pass rate, and consistent on-time delivery.',
  },
  {
    title: 'Retailer Avoids $150K Loss Through Pre-Shipment Inspection',
    industry: 'Consumer Goods',
    challenge: 'A European retailer ordered 50,000 units of promotional items and needed quality assurance before shipping.',
    solution: 'Our inspection team found critical defects in 30% of the production batch before container loading.',
    result: 'Supplier reworked defective units at their cost, saving the client an estimated $150,000.',
  },
  {
    title: 'Startup Launches Private Label Product Line from China',
    industry: 'Home & Garden',
    challenge: 'A UK startup wanted to launch a private label home products line but had no experience sourcing from China.',
    solution: 'We handled everything from supplier identification to sample approval, production monitoring, and shipping.',
    result: 'Successfully launched 12 SKUs within 4 months with zero quality complaints.',
  },
]

const faqs = [
  {
    question: 'How do you verify suppliers?',
    answer: 'We conduct on-site factory audits that include verifying business licenses, checking production facilities, reviewing quality management systems, and assessing production capacity. We also check references and past performance records.',
  },
  {
    question: 'What are your fees?',
    answer: 'Our fees depend on the scope of services required. We offer transparent pricing with no hidden costs. Contact us for a free quote tailored to your specific needs.',
  },
  {
    question: 'How long does the sourcing process take?',
    answer: 'Initial supplier identification and quotation typically takes 5-10 business days. Sample evaluation adds 1-2 weeks. Full production timelines depend on the product and order quantity.',
  },
  {
    question: 'Do you handle shipping and customs?',
    answer: 'Yes, we coordinate with reliable freight forwarders and handle export documentation. We can arrange FOB, CIF, or DDP shipping terms based on your preference.',
  },
  {
    question: 'What if there is a quality issue?',
    answer: 'We conduct inspections at multiple stages. If issues are found, we work with the supplier to resolve them before shipment. Our goal is to catch problems early, not after goods arrive at your warehouse.',
  },
  {
    question: 'Can you source any product from China?',
    answer: 'We source a wide range of products including electronics, home goods, apparel, industrial equipment, and more. If you have a specific product in mind, contact us and we will let you know if we can help.',
  },
]

export default function HomePage() {
  const [openFaq, setOpenFaq] = useState(null)

  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23ffffff%22%20fill-opacity%3D%220.4%22%3E%3Cpath%20d%3D%22M36%2034v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6%2034v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6%204V0H4v4H0v2h4v4h2V6h4V4H6z%22%2F%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E')] opacity-20" />
        </div>
        <div className="container-custom section-padding relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full text-sm mb-6">
              <Globe className="w-4 h-4" />
              Trusted by buyers in 30+ countries
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              China Sourcing Agent<br />
              <span className="text-blue-400">for Global Buyers</span>
            </h1>
            <p className="text-lg md:text-xl text-slate-300 mb-8 max-w-2xl mx-auto leading-relaxed">
              We help overseas buyers find reliable suppliers, verify factories, inspect quality, follow production, and coordinate shipping from China.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link to="/contact" className="btn-primary bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 text-lg">
                Get a Free Sourcing Quote
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
              <Link to="/how-it-works" className="btn-secondary border-white/30 text-white hover:bg-white/10 px-8 py-4 text-lg">
                See How It Works
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Points */}
      <section className="bg-white border-b border-slate-200">
        <div className="container-custom py-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {trustPoints.map((point, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-primary mb-1">{point.number}</div>
                <div className="text-sm text-slate-600">{point.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="section-padding bg-slate-50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="section-title">Our Sourcing Services</h2>
            <p className="section-subtitle">
              End-to-end sourcing support from supplier identification to final delivery.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-sm border border-slate-200 hover:shadow-md transition-shadow">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <service.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-slate-900 mb-2">{service.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">{service.description}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link to="/services" className="btn-secondary">
              View All Services
              <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="section-title">How Our Sourcing Process Works</h2>
            <p className="section-subtitle">
              A clear, step-by-step process designed to minimize risk and maximize efficiency.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {processSteps.map((step, index) => (
              <div key={index} className="relative">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center font-bold text-sm">
                    {step.step}
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-slate-900 mb-2">{step.title}</h3>
                    <p className="text-slate-600 text-sm leading-relaxed">{step.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link to="/how-it-works" className="btn-secondary">
              Learn More About Our Process
              <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
          </div>
        </div>
      </section>

      {/* Products We Source */}
      <section className="section-padding bg-slate-50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="section-title">Products We Source</h2>
            <p className="section-subtitle">
              We source a wide range of products across multiple industries from verified Chinese manufacturers.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {productCategories.map((category, index) => (
              <div key={index} className="bg-white rounded-lg p-4 text-center border border-slate-200 hover:border-primary/30 hover:shadow-sm transition-all">
                <h3 className="text-sm font-medium text-slate-700">{category.name}</h3>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link to="/products" className="btn-secondary">
              See All Product Categories
              <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
          </div>
        </div>
      </section>

      {/* Problems We Solve */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="section-title">Problems We Solve for Buyers</h2>
            <p className="section-subtitle">
              Sourcing from China comes with challenges. We address the most common ones.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {problems.map((problem, index) => (
              <div key={index} className="flex items-start gap-4 p-6 bg-slate-50 rounded-lg border border-slate-200">
                <div className="flex-shrink-0 w-10 h-10 bg-red-100 rounded-lg flex items-center justify-center">
                  <problem.icon className="w-5 h-5 text-red-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-slate-900 mb-1">{problem.title}</h3>
                  <p className="text-sm text-slate-600 leading-relaxed">{problem.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section-padding bg-slate-900 text-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="section-title text-white">Why Buyers Work With Us</h2>
            <p className="section-subtitle text-slate-400">
              We focus on transparency, reliability, and results.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-blue-400" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Verified Suppliers Only</h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                Every supplier we recommend has been through our verification process. We check licenses, facilities, and track records.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="w-8 h-8 text-blue-400" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Transparent Pricing</h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                Clear fee structure with no hidden costs. You always know what you are paying for and why.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-blue-400" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Dedicated Support</h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                A dedicated sourcing agent manages your project from start to finish, with regular updates and clear communication.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="section-padding bg-slate-50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="section-title">Case Studies</h2>
            <p className="section-subtitle">
              Real examples of how we have helped buyers source from China successfully.
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {caseStudies.map((study, index) => (
              <div key={index} className="bg-white rounded-xl p-6 border border-slate-200 hover:shadow-md transition-shadow">
                <div className="inline-block bg-blue-100 text-primary text-xs font-medium px-2.5 py-1 rounded-full mb-4">
                  {study.industry}
                </div>
                <h3 className="text-lg font-semibold text-slate-900 mb-3">{study.title}</h3>
                <div className="space-y-3 text-sm">
                  <div>
                    <span className="font-medium text-slate-700">Challenge: </span>
                    <span className="text-slate-600">{study.challenge}</span>
                  </div>
                  <div>
                    <span className="font-medium text-slate-700">Solution: </span>
                    <span className="text-slate-600">{study.solution}</span>
                  </div>
                  <div className="bg-green-50 border border-green-200 rounded-lg p-3">
                    <span className="font-medium text-green-700">Result: </span>
                    <span className="text-green-700">{study.result}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link to="/case-studies" className="btn-secondary">
              View All Case Studies
              <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section-padding bg-white">
        <div className="container-custom max-w-3xl">
          <div className="text-center mb-12">
            <h2 className="section-title">Frequently Asked Questions</h2>
            <p className="section-subtitle">
              Answers to common questions about our sourcing services.
            </p>
          </div>
          <div className="space-y-3">
            {faqs.map((faq, index) => (
              <div key={index} className="border border-slate-200 rounded-lg overflow-hidden">
                <button
                  className="w-full flex items-center justify-between p-4 text-left hover:bg-slate-50 transition-colors"
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                >
                  <span className="font-medium text-slate-900 pr-4">{faq.question}</span>
                  {openFaq === index ? (
                    <ChevronUp className="w-5 h-5 text-slate-500 flex-shrink-0" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-slate-500 flex-shrink-0" />
                  )}
                </button>
                {openFaq === index && (
                  <div className="px-4 pb-4 text-sm text-slate-600 leading-relaxed">
                    {faq.answer}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-r from-blue-600 to-blue-700 text-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Source from China?</h2>
            <p className="text-lg text-blue-100 mb-8">
              Tell us what you need and we will get back to you with a free sourcing plan within 24 hours.
            </p>
            <Link to="/contact" className="inline-flex items-center justify-center px-8 py-4 bg-white text-blue-600 font-semibold rounded-lg hover:bg-blue-50 transition-colors text-lg">
              Get a Free Sourcing Quote
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
