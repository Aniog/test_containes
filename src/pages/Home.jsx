import { useState, useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { Shield, CheckCircle, Truck, Search, FileCheck, Package, BarChart3, Globe, ArrowRight, Star, Clock, Users, Factory, ClipboardCheck, Ship, ChevronDown } from 'lucide-react'

const services = [
  {
    icon: Search,
    title: 'Supplier Sourcing',
    description: 'We identify and vet reliable suppliers across China that match your product specifications, budget, and quality requirements.',
  },
  {
    icon: Factory,
    title: 'Factory Verification',
    description: 'On-site factory audits to verify capabilities, certifications, working conditions, and production capacity before you commit.',
  },
  {
    icon: ClipboardCheck,
    title: 'Quality Inspection',
    description: 'Pre-shipment inspections, during-production checks, and detailed QC reports to ensure products meet your standards.',
  },
  {
    icon: Package,
    title: 'Production Monitoring',
    description: 'Real-time production tracking, progress updates, and proactive issue resolution throughout the manufacturing cycle.',
  },
  {
    icon: Ship,
    title: 'Shipping & Logistics',
    description: 'End-to-end freight coordination, customs documentation, consolidation, and door-to-door delivery management.',
  },
  {
    icon: BarChart3,
    title: 'Market Intelligence',
    description: 'Competitive pricing analysis, material cost trends, and supplier benchmarking to help you make informed decisions.',
  },
]

const processSteps = [
  { step: '01', title: 'Submit Your Requirements', description: 'Tell us about your product, quantity, quality standards, target price, and any specific certifications needed.' },
  { step: '02', title: 'Supplier Matching', description: 'We search our verified network of 5,000+ suppliers to find the best matches for your specific requirements.' },
  { step: '03', title: 'Factory Audit & Verification', description: 'We conduct on-site audits, verify credentials, assess capabilities, and provide a detailed report with our recommendation.' },
  { step: '04', title: 'Sample Development & Approval', description: 'We coordinate sample production, arrange shipping to you, and manage revisions until samples are approved.' },
  { step: '05', title: 'Production & QC Oversight', description: 'We monitor production milestones, conduct in-process and final inspections, and provide regular quality reports.' },
  { step: '06', title: 'Shipping & Delivery', description: 'We handle freight booking, documentation, customs clearance, and ensure safe delivery to your destination.' },
]

const productCategories = [
  { title: 'Electronics & Components', items: 'Consumer electronics, PCBs, sensors, displays, wiring harnesses' },
  { title: 'Industrial Equipment', items: 'Machinery parts, tools, automation components, hydraulic systems' },
  { title: 'Packaging & Printing', items: 'Cartons, labels, flexible packaging, corrugated boxes, displays' },
  { title: 'Home & Lifestyle', items: 'Furniture, kitchenware, textiles, lighting, decor items' },
  { title: 'Auto Parts & Accessories', items: 'Interior/exterior parts, EV components, aftermarket accessories' },
  { title: 'Medical & Safety', items: 'PPE, medical devices, lab equipment, safety gear, packaging' },
]

const problemsSolved = [
  { icon: Search, title: 'Finding Reliable Suppliers', description: 'The market is flooded with traders and middlemen. We identify genuine manufacturers who can deliver on quality and volume.' },
  { icon: Shield, title: 'Quality Control Risks', description: 'Inconsistent product quality and defective shipments. Our inspection protocols catch issues before they reach you.' },
  { icon: Clock, title: 'Communication & Time Zones', description: 'Language barriers and delayed responses slow everything down. We bridge the gap with fluent English communication.' },
  { icon: Truck, title: 'Logistics Complexity', description: 'Freight booking, customs documents, and shipping regulations are confusing. We manage the entire logistics chain.' },
]

const trustPoints = [
  { icon: Users, title: '10+ Years Experience', description: 'Deep-rooted relationships with verified manufacturers across 20+ provinces in China.' },
  { icon: Star, title: '5,000+ Vetted Suppliers', description: 'Every supplier in our network goes through rigorous verification before onboarding.' },
  { icon: Globe, title: 'Served 200+ Global Clients', description: 'From startups to Fortune 500 companies across North America, Europe, and Southeast Asia.' },
  { icon: CheckCircle, title: '100% Inspection Before Shipment', description: 'We never let products leave the factory without a thorough quality check.' },
]

const testimonials = [
  {
    quote: 'SSourcing China helped us find a reliable manufacturer for our electronic components. Their factory audit revealed issues with two potential suppliers that would have cost us dearly.',
    author: 'Thomas Mueller',
    role: 'Procurement Manager, Germany',
  },
  {
    quote: 'We were struggling with inconsistent quality from our existing supplier. SSourcing stepped in, audited three alternatives, and production quality improved dramatically.',
    author: 'Sarah Chen',
    role: 'Operations Director, Singapore',
  },
  {
    quote: 'The shipping coordination alone has saved us weeks of headache. They handle everything from container booking to customs clearance.',
    author: 'James Rodriguez',
    role: 'Supply Chain Lead, USA',
  },
]

const faqs = [
  { q: 'What makes SSourcing China different from other sourcing agents?', a: 'We combine on-the-ground presence in Shenzhen with rigorous verification protocols. Every supplier is physically audited before joining our network, and we provide transparent reporting at every stage.' },
  { q: 'How do you verify suppliers?', a: 'Our verification includes business license validation, factory site audits, capability assessment, quality system review, and client reference checks where available. You get a detailed report with photos and our honest assessment.' },
  { q: 'What are your fees?', a: 'Our fee structure is transparent and project-based. We typically charge a percentage of the order value or a fixed project fee depending on scope. Contact us for a customized quote.' },
  { q: 'Do you work with small order quantities?', a: 'Yes. We work with businesses of all sizes. While minimum order quantities depend on the product category and manufacturer, we help find suppliers who match your volume requirements.' },
  { q: 'How long does the sourcing process take?', a: 'A typical sourcing cycle takes 4-8 weeks from requirement gathering to sample approval. Production time depends on the product complexity. We provide timeline estimates upfront.' },
  { q: 'What industries do you specialize in?', a: 'We cover a wide range including electronics, industrial equipment, packaging, home goods, auto parts, and medical supplies. Our network spans 20+ manufacturing sectors.' },
]

export default function Home() {
  const [activeFaq, setActiveFaq] = useState(null)
  const containerRef = useRef(null)

  return (
    <div ref={containerRef}>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary-900 via-primary-800 to-primary-950 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-72 h-72 bg-accent-500 rounded-full blur-3xl" />
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-primary-400 rounded-full blur-3xl" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm text-white/80 text-sm px-4 py-1.5 rounded-full mb-6">
              <Shield className="w-4 h-4 text-accent-400" />
              China-Based Sourcing Agency
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
              China Sourcing Agent for Global Buyers
            </h1>
            <p className="text-lg sm:text-xl text-gray-300 leading-relaxed mb-8 max-w-2xl">
              We help overseas buyers find reliable suppliers, verify factories, inspect quality, monitor production, and coordinate shipping — so you can source from China with confidence.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 bg-accent-500 text-white px-8 py-3.5 rounded-lg font-semibold text-base hover:bg-accent-600 transition-colors"
              >
                Get a Free Sourcing Quote
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                to="/how-it-works"
                className="inline-flex items-center justify-center gap-2 bg-white/10 backdrop-blur-sm text-white border border-white/20 px-8 py-3.5 rounded-lg font-medium text-base hover:bg-white/20 transition-colors"
              >
                See How It Works
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Bar */}
      <section className="bg-primary-50 border-y border-primary-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { icon: Users, label: '10+ Years Experience' },
              { icon: Factory, label: '5,000+ Vetted Suppliers' },
              { icon: Globe, label: '200+ Global Clients' },
              { icon: CheckCircle, label: '100% QC Before Shipment' },
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-3 justify-center md:justify-start">
                <item.icon className="w-5 h-5 text-primary-600 flex-shrink-0" />
                <span className="text-sm font-medium text-primary-800">{item.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Problems We Solve */}
      <section className="py-16 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12 lg:mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-primary-900 mb-4">
              Problems We Solve
            </h2>
            <p className="text-lg text-gray-600">
              Sourcing from China comes with real challenges. Here is how we help you avoid costly mistakes.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            {problemsSolved.map((problem, i) => (
              <div key={i} className="flex gap-4 p-6 rounded-xl bg-primary-50 border border-primary-100">
                <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <problem.icon className="w-6 h-6 text-primary-700" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-primary-900 mb-2">{problem.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{problem.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 lg:py-20 bg-primary-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12 lg:mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-primary-900 mb-4">
              Our Services
            </h2>
            <p className="text-lg text-gray-600">
              End-to-end sourcing support from supplier discovery to final delivery.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {services.map((service, i) => (
              <div key={i} className="bg-white rounded-xl p-6 border border-border hover:border-primary-200 hover:shadow-lg transition-all">
                <div className="w-12 h-12 bg-accent-50 rounded-lg flex items-center justify-center mb-4">
                  <service.icon className="w-6 h-6 text-accent-600" />
                </div>
                <h3 className="text-lg font-semibold text-primary-900 mb-2">{service.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{service.description}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link to="/services" className="inline-flex items-center gap-2 text-primary-700 font-medium hover:text-primary-900 transition-colors">
              View All Services <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Sourcing Process */}
      <section className="py-16 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12 lg:mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-primary-900 mb-4">
              How It Works
            </h2>
            <p className="text-lg text-gray-600">
              A structured, transparent process from start to finish.
            </p>
          </div>
          <div className="space-y-8 lg:space-y-12">
            {processSteps.map((step, i) => (
              <div key={i} className="flex flex-col sm:flex-row gap-4 sm:gap-6 items-start">
                <div className="flex items-center gap-3 sm:w-48 flex-shrink-0">
                  <div className="w-10 h-10 bg-accent-500 text-white rounded-full flex items-center justify-center font-bold text-sm">
                    {step.step}
                  </div>
                  <div className="h-0.5 flex-1 bg-accent-200 hidden sm:block" />
                </div>
                <div className="flex-1 pb-4 sm:pb-0">
                  <h3 className="text-lg font-semibold text-primary-900 mb-1">{step.title}</h3>
                  <p className="text-gray-600 text-sm">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link to="/how-it-works" className="inline-flex items-center gap-2 text-primary-700 font-medium hover:text-primary-900 transition-colors">
              Learn More <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Products We Source */}
      <section className="py-16 lg:py-20 bg-primary-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12 lg:mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-primary-900 mb-4">
              Products We Source
            </h2>
            <p className="text-lg text-gray-600">
              Extensive supplier network across major manufacturing categories.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {productCategories.map((cat, i) => (
              <div key={i} className="bg-white rounded-xl p-6 border border-border hover:border-primary-200 hover:shadow-md transition-all">
                <h3 className="font-semibold text-primary-900 mb-2">{cat.title}</h3>
                <p className="text-gray-500 text-sm">{cat.items}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link to="/products" className="inline-flex items-center gap-2 text-primary-700 font-medium hover:text-primary-900 transition-colors">
              View All Categories <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Trust Points */}
      <section className="py-16 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12 lg:mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-primary-900 mb-4">
              Why Work With Us
            </h2>
            <p className="text-lg text-gray-600">
              Trust built through years of delivering quality results for global buyers.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {trustPoints.map((point, i) => (
              <div key={i} className="text-center">
                <div className="w-16 h-16 bg-accent-50 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <point.icon className="w-8 h-8 text-accent-600" />
                </div>
                <h3 className="text-lg font-semibold text-primary-900 mb-2">{point.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{point.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies / Testimonials */}
      <section className="py-16 lg:py-20 bg-primary-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12 lg:mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-primary-900 mb-4">
              What Our Clients Say
            </h2>
            <p className="text-lg text-gray-600">
              Real feedback from buyers we have helped.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            {testimonials.map((t, i) => (
              <div key={i} className="bg-white rounded-xl p-6 border border-border">
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, j) => (
                    <Star key={j} className="w-4 h-4 fill-accent-400 text-accent-400" />
                  ))}
                </div>
                <p className="text-gray-600 text-sm leading-relaxed mb-6 italic">"{t.quote}"</p>
                <div>
                  <p className="font-semibold text-primary-900 text-sm">{t.author}</p>
                  <p className="text-gray-500 text-xs">{t.role}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link to="/case-studies" className="inline-flex items-center gap-2 text-primary-700 font-medium hover:text-primary-900 transition-colors">
              View Case Studies <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 lg:py-20 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-primary-900 mb-4">
              Frequently Asked Questions
            </h2>
          </div>
          <div className="space-y-3">
            {faqs.map((faq, i) => (
              <div key={i} className="border border-border rounded-xl overflow-hidden">
                <button
                  className="w-full flex items-center justify-between p-5 text-left hover:bg-primary-50 transition-colors"
                  onClick={() => setActiveFaq(activeFaq === i ? null : i)}
                >
                  <span className="font-medium text-primary-900 text-sm sm:text-base pr-4">{faq.q}</span>
                  <ChevronDown className={`w-5 h-5 text-gray-400 flex-shrink-0 transition-transform ${activeFaq === i ? 'rotate-180' : ''}`} />
                </button>
                {activeFaq === i && (
                  <div className="px-5 pb-5 text-gray-600 text-sm leading-relaxed border-t border-border pt-4">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 lg:py-20 bg-gradient-to-br from-primary-900 to-primary-950">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Ready to Start Sourcing?
          </h2>
          <p className="text-lg text-gray-300 mb-8 max-w-xl mx-auto">
            Tell us what you need and we will send you a free, no-obligation sourcing plan with timeline and pricing.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 bg-accent-500 text-white px-8 py-3.5 rounded-lg font-semibold text-base hover:bg-accent-600 transition-colors"
          >
            Get a Free Sourcing Quote
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  )
}