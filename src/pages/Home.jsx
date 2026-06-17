import React, { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import {
  Search, ShieldCheck, ClipboardCheck, Truck, ArrowRight,
  CheckCircle2, AlertTriangle, Clock, DollarSign, Globe,
  ChevronDown, ChevronUp, Star, Users, Package, BarChart3
} from 'lucide-react'

const services = [
  {
    icon: Search,
    title: 'Supplier Sourcing',
    desc: 'We identify and shortlist qualified suppliers from our verified network across China, matching your product specifications and quality requirements.',
  },
  {
    icon: ShieldCheck,
    title: 'Factory Verification',
    desc: 'On-site factory audits to verify business licenses, production capacity, quality management systems, and compliance with international standards.',
  },
  {
    icon: ClipboardCheck,
    title: 'Quality Inspection',
    desc: 'Pre-production, during-production, and pre-shipment inspections following AQL standards to ensure your products meet specifications.',
  },
  {
    icon: Clock,
    title: 'Production Follow-up',
    desc: 'Regular monitoring of production progress, milestone tracking, and proactive communication to keep your orders on schedule.',
  },
  {
    icon: Truck,
    title: 'Shipping Coordination',
    desc: 'End-to-end logistics management including freight booking, customs documentation, and door-to-door delivery coordination.',
  },
  {
    icon: BarChart3,
    title: 'Cost Optimization',
    desc: 'Price negotiation, cost breakdown analysis, and supply chain optimization to help you achieve competitive pricing without compromising quality.',
  },
]

const processSteps = [
  { step: '01', title: 'Submit Your Request', desc: 'Tell us about your product requirements, target price, and quality standards.' },
  { step: '02', title: 'Supplier Matching', desc: 'We search our network and identify 3-5 qualified suppliers that match your needs.' },
  { step: '03', title: 'Factory Verification', desc: 'We conduct on-site audits and verify credentials before you commit.' },
  { step: '04', title: 'Sample & Negotiation', desc: 'We arrange samples, negotiate pricing, and finalize terms on your behalf.' },
  { step: '05', title: 'Production & QC', desc: 'We monitor production and conduct quality inspections at key milestones.' },
  { step: '06', title: 'Shipping & Delivery', desc: 'We coordinate logistics, documentation, and delivery to your door.' },
]

const productCategories = [
  { name: 'Electronics & Components', desc: 'Consumer electronics, PCBs, sensors, and electronic components' },
  { name: 'Textiles & Apparel', desc: 'Fabrics, garments, home textiles, and accessories' },
  { name: 'Machinery & Equipment', desc: 'Industrial machinery, CNC equipment, and automation systems' },
  { name: 'Home & Garden', desc: 'Furniture, kitchenware, garden tools, and home decor' },
  { name: 'Auto Parts', desc: 'OEM parts, aftermarket components, and accessories' },
  { name: 'Packaging & Printing', desc: 'Custom packaging, labels, and printing solutions' },
  { name: 'Building Materials', desc: 'Tiles, fixtures, hardware, and construction materials' },
  { name: 'Health & Beauty', desc: 'Cosmetics, personal care, and wellness products' },
]

const problems = [
  {
    icon: AlertTriangle,
    title: 'Unreliable Suppliers',
    desc: 'Finding trustworthy factories among thousands of options is risky. We verify every supplier through on-site audits and background checks.',
  },
  {
    icon: ClipboardCheck,
    title: 'Quality Inconsistency',
    desc: 'Products not matching samples or specifications. Our AQL-based inspections catch issues before shipment.',
  },
  {
    icon: Clock,
    title: 'Production Delays',
    desc: 'Missed deadlines disrupt your supply chain. We monitor production daily and address issues proactively.',
  },
  {
    icon: DollarSign,
    title: 'Hidden Costs',
    desc: 'Unexpected fees, rework costs, and logistics surprises. We provide transparent pricing and full cost breakdowns.',
  },
]

const trustPoints = [
  { value: '10+', label: 'Years in China Sourcing' },
  { value: '2,000+', label: 'Verified Suppliers' },
  { value: '500+', label: 'Clients Served' },
  { value: '98%', label: 'Client Satisfaction Rate' },
]

const caseStudies = [
  {
    client: 'European Home Goods Brand',
    challenge: 'Needed to find reliable furniture suppliers for a new product line with strict EU compliance requirements.',
    result: 'Identified 3 certified factories, reduced defect rate from 12% to 1.5%, and cut lead times by 25%.',
    category: 'Home & Garden',
  },
  {
    client: 'US Electronics Distributor',
    challenge: 'Struggling with quality inconsistency across multiple component suppliers in Shenzhen.',
    result: 'Consolidated to 2 verified suppliers, implemented AQL inspections, achieved 99.2% pass rate on deliveries.',
    category: 'Electronics',
  },
  {
    client: 'Australian Auto Parts Retailer',
    challenge: 'Needed to source OEM-quality auto parts with competitive pricing and reliable shipping schedules.',
    result: 'Negotiated 18% cost reduction while maintaining quality, established monthly shipping schedule with 100% on-time delivery.',
    category: 'Auto Parts',
  },
]

const faqs = [
  {
    q: 'What types of products can you source?',
    a: 'We source a wide range of products across industries including electronics, textiles, machinery, home goods, auto parts, packaging, building materials, and health & beauty products. If it\'s made in China, we can help you source it.',
  },
  {
    q: 'How do you verify suppliers?',
    a: 'We conduct on-site factory audits that include verifying business licenses, checking production capacity, reviewing quality management systems (ISO certifications), inspecting working conditions, and assessing financial stability. We also check references from existing clients.',
  },
  {
    q: 'What are your fees?',
    a: 'Our fee structure depends on the scope of services required. We offer flexible pricing models including project-based fees and commission structures. Contact us for a free initial consultation and quote tailored to your needs.',
  },
  {
    q: 'How long does the sourcing process take?',
    a: 'Typical supplier identification takes 5-10 business days. Factory verification adds another 3-7 days. The full process from initial request to sample approval usually takes 3-6 weeks, depending on product complexity.',
  },
  {
    q: 'Do you handle shipping and customs?',
    a: 'Yes, we coordinate end-to-end logistics including freight booking (sea, air, rail), customs documentation, import/export compliance, and door-to-door delivery. We work with reliable freight forwarders to ensure smooth shipping.',
  },
  {
    q: 'What if the quality doesn\'t meet my standards?',
    a: 'Our pre-shipment inspections catch quality issues before products leave the factory. If issues are found, we work with the supplier to resolve them. In cases where resolution isn\'t possible, we help you find alternative suppliers.',
  },
]

function FAQItem({ q, a }) {
  const [open, setOpen] = useState(false)
  return (
    <div className="border border-slate-200 rounded-lg">
      <button
        className="w-full flex items-center justify-between px-6 py-4 text-left"
        onClick={() => setOpen(!open)}
      >
        <span className="font-medium text-slate-900 pr-4">{q}</span>
        {open ? <ChevronUp className="w-5 h-5 text-slate-400 shrink-0" /> : <ChevronDown className="w-5 h-5 text-slate-400 shrink-0" />}
      </button>
      {open && (
        <div className="px-6 pb-4 text-slate-600 leading-relaxed">
          {a}
        </div>
      )}
    </div>
  )
}

export default function Home() {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <div ref={containerRef}>
      {/* Hero Section */}
      <section className="relative bg-navy overflow-hidden">
        <div
          className="absolute inset-0"
          data-strk-bg-id="hero-bg-a1b2c3"
          data-strk-bg="[hero-subtitle] [hero-title]"
          data-strk-bg-ratio="16x9"
          data-strk-bg-width="1600"
        />
        <div className="absolute inset-0 bg-navy/85" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
          <div className="max-w-3xl">
            <h1 id="hero-title" className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight mb-6">
              China Sourcing Agent for Global Buyers
            </h1>
            <p id="hero-subtitle" className="text-lg sm:text-xl text-slate-300 leading-relaxed mb-8">
              We help you find reliable suppliers, verify factories, inspect quality, follow production, and coordinate shipping — so you can source from China with confidence.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 bg-ocean text-white px-8 py-3.5 rounded-lg text-base font-semibold hover:bg-blue-700 transition-colors"
              >
                Get a Free Sourcing Quote
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                to="/how-it-works"
                className="inline-flex items-center justify-center gap-2 border-2 border-white/30 text-white px-8 py-3.5 rounded-lg text-base font-semibold hover:bg-white/10 transition-colors"
              >
                See How It Works
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Bar */}
      <section className="bg-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {trustPoints.map((point) => (
              <div key={point.label} className="text-center">
                <div className="text-3xl lg:text-4xl font-bold text-navy mb-1">{point.value}</div>
                <div className="text-sm text-slate-500">{point.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="bg-slate-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-3xl lg:text-4xl font-bold text-navy mb-4">Our Sourcing Services</h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              End-to-end sourcing support from supplier discovery to delivery at your door.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service) => (
              <div key={service.title} className="bg-white rounded-xl p-6 border border-slate-100 hover:shadow-md transition-shadow">
                <div className="w-12 h-12 bg-navy-50 rounded-lg flex items-center justify-center mb-4">
                  <service.icon className="w-6 h-6 text-ocean" />
                </div>
                <h3 className="text-lg font-semibold text-navy mb-2">{service.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">{service.desc}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link
              to="/services"
              className="inline-flex items-center gap-2 text-ocean font-semibold hover:text-blue-700 transition-colors"
            >
              Learn More About Our Services
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-3xl lg:text-4xl font-bold text-navy mb-4">How It Works</h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              A clear, structured process that takes you from initial inquiry to delivered goods.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {processSteps.map((step) => (
              <div key={step.step} className="flex gap-4">
                <div className="shrink-0 w-12 h-12 bg-ocean rounded-full flex items-center justify-center text-white font-bold text-sm">
                  {step.step}
                </div>
                <div>
                  <h3 className="font-semibold text-navy mb-1">{step.title}</h3>
                  <p className="text-sm text-slate-600 leading-relaxed">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link
              to="/how-it-works"
              className="inline-flex items-center gap-2 text-ocean font-semibold hover:text-blue-700 transition-colors"
            >
              See Full Process Details
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Products We Source Section */}
      <section className="bg-slate-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-3xl lg:text-4xl font-bold text-navy mb-4">Products We Source</h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              We source across a wide range of industries. Here are some of the most common categories.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {productCategories.map((cat) => (
              <div key={cat.name} className="bg-white rounded-xl p-5 border border-slate-100 hover:shadow-md transition-shadow">
                <h3 className="font-semibold text-navy mb-1">{cat.name}</h3>
                <p className="text-sm text-slate-500">{cat.desc}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link
              to="/products"
              className="inline-flex items-center gap-2 text-ocean font-semibold hover:text-blue-700 transition-colors"
            >
              View All Product Categories
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Problems We Solve Section */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-3xl lg:text-4xl font-bold text-navy mb-4">Problems We Solve</h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Sourcing from China doesn't have to be risky. We address the most common challenges buyers face.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {problems.map((problem) => (
              <div key={problem.title} className="flex gap-4 p-6 bg-slate-50 rounded-xl">
                <div className="shrink-0 w-12 h-12 bg-amber/10 rounded-lg flex items-center justify-center">
                  <problem.icon className="w-6 h-6 text-amber" />
                </div>
                <div>
                  <h3 className="font-semibold text-navy mb-1">{problem.title}</h3>
                  <p className="text-sm text-slate-600 leading-relaxed">{problem.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies Section */}
      <section className="bg-navy py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">Client Success Stories</h2>
            <p className="text-lg text-slate-300 max-w-2xl mx-auto">
              Real results from real clients. See how we've helped businesses source better from China.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {caseStudies.map((cs) => (
              <div key={cs.client} className="bg-white/5 backdrop-blur rounded-xl p-6 border border-white/10">
                <span className="inline-block bg-ocean/20 text-ocean text-xs font-semibold px-3 py-1 rounded-full mb-4">
                  {cs.category}
                </span>
                <h3 className="font-semibold text-white mb-2">{cs.client}</h3>
                <p className="text-sm text-slate-400 mb-3"><strong className="text-slate-300">Challenge:</strong> {cs.challenge}</p>
                <p className="text-sm text-slate-400"><strong className="text-green-400">Result:</strong> {cs.result}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link
              to="/case-studies"
              className="inline-flex items-center gap-2 text-ocean font-semibold hover:text-blue-400 transition-colors"
            >
              Read More Case Studies
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="bg-white py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-3xl lg:text-4xl font-bold text-navy mb-4">Frequently Asked Questions</h2>
            <p className="text-lg text-slate-600">
              Common questions about our sourcing services.
            </p>
          </div>
          <div className="space-y-3">
            {faqs.map((faq) => (
              <FAQItem key={faq.q} q={faq.q} a={faq.a} />
            ))}
          </div>
        </div>
      </section>

      {/* Inquiry CTA Section */}
      <section className="bg-slate-50 py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-navy mb-4">Ready to Source from China?</h2>
          <p className="text-lg text-slate-600 mb-8 max-w-2xl mx-auto">
            Tell us about your product requirements and get a free sourcing quote. No commitment, no hidden fees.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center justify-center gap-2 bg-ocean text-white px-8 py-3.5 rounded-lg text-base font-semibold hover:bg-blue-700 transition-colors"
          >
            Get a Free Sourcing Quote
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  )
}
