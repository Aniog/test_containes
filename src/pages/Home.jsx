import React, { useRef, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import {
  Search, ShieldCheck, ClipboardCheck, Truck, PackageCheck, ArrowRight,
  CheckCircle2, AlertTriangle, Globe, Factory, Ship, Users, Clock,
  ChevronDown, ChevronUp, Star, BarChart3, FileCheck, Handshake
} from 'lucide-react'

const services = [
  {
    icon: Search,
    title: 'Supplier Sourcing',
    desc: 'We identify and shortlist qualified suppliers from our verified network based on your product requirements, target price, and quality standards.',
  },
  {
    icon: ShieldCheck,
    title: 'Factory Verification',
    desc: 'On-site factory audits covering business licenses, production capacity, quality systems, and compliance certifications before you commit.',
  },
  {
    icon: ClipboardCheck,
    title: 'Quality Inspection',
    desc: 'Pre-production, during-production, and pre-shipment inspections following AQL standards to catch issues before they ship.',
  },
  {
    icon: PackageCheck,
    title: 'Production Follow-up',
    desc: 'We monitor production schedules, track milestones, and report progress so your orders stay on track and on time.',
  },
  {
    icon: Truck,
    title: 'Shipping Coordination',
    desc: 'Consolidation, freight booking, customs documentation, and door-to-door logistics for sea, air, and rail shipments.',
  },
  {
    icon: Handshake,
    title: 'Price Negotiation',
    desc: 'Leverage local market knowledge and supplier relationships to negotiate competitive pricing and favorable payment terms.',
  },
]

const processSteps = [
  { step: 1, title: 'Submit Your Request', desc: 'Tell us what you need to source — product specs, quantity, target price, and timeline.' },
  { step: 2, title: 'Supplier Matching', desc: 'We search our database and network to find 3-5 qualified suppliers that match your criteria.' },
  { step: 3, title: 'Factory Verification', desc: 'We audit the shortlisted factories and send you a detailed verification report with photos.' },
  { step: 4, title: 'Sample & Quote', desc: 'We arrange samples and collect quotations so you can evaluate quality and pricing side by side.' },
  { step: 5, title: 'Order & Production', desc: 'Once you approve, we place the order, monitor production, and conduct quality inspections.' },
  { step: 6, title: 'Shipping & Delivery', desc: 'We coordinate shipping, handle customs documentation, and track delivery to your door.' },
]

const productCategories = [
  { name: 'Electronics & Components', imgId: 'prod-electronics-a1b2c3', titleId: 'prod-electronics-title', descId: 'prod-electronics-desc', desc: 'Consumer electronics, PCBs, LED lighting, and electronic components' },
  { name: 'Textiles & Apparel', imgId: 'prod-textiles-d4e5f6', titleId: 'prod-textiles-title', descId: 'prod-textiles-desc', desc: 'Garments, fabrics, home textiles, and fashion accessories' },
  { name: 'Machinery & Equipment', imgId: 'prod-machinery-g7h8i9', titleId: 'prod-machinery-title', descId: 'prod-machinery-desc', desc: 'Industrial machinery, CNC equipment, and automation systems' },
  { name: 'Home & Garden', imgId: 'prod-home-j1k2l3', titleId: 'prod-home-title', descId: 'prod-home-desc', desc: 'Furniture, kitchenware, garden tools, and home decor' },
  { name: 'Auto Parts & Accessories', imgId: 'prod-auto-m4n5o6', titleId: 'prod-auto-title', descId: 'prod-auto-desc', desc: 'OEM parts, aftermarket components, and vehicle accessories' },
  { name: 'Packaging & Printing', imgId: 'prod-pack-p7q8r9', titleId: 'prod-pack-title', descId: 'prod-pack-desc', desc: 'Custom packaging, labels, and commercial printing' },
]

const problems = [
  { icon: AlertTriangle, title: 'Unreliable Suppliers', desc: 'Factories that overpromise and underdeliver, or disappear after taking deposits.' },
  { icon: ShieldCheck, title: 'Quality Inconsistency', desc: 'Samples look great but mass production quality drops significantly.' },
  { icon: Clock, title: 'Production Delays', desc: 'Missed deadlines with no transparency or communication about the real status.' },
  { icon: Globe, title: 'Language & Culture Gap', desc: 'Miscommunication leading to wrong specifications, materials, or finishes.' },
  { icon: FileCheck, title: 'Compliance Risks', desc: 'Products that fail to meet safety standards, certifications, or import regulations.' },
  { icon: Truck, title: 'Shipping Complications', desc: 'Unexpected costs, customs issues, and logistics headaches you didn\'t plan for.' },
]

const trustPoints = [
  { value: '500+', label: 'Verified Suppliers' },
  { value: '12+', label: 'Years in China Sourcing' },
  { value: '30+', label: 'Countries Served' },
  { value: '98%', label: 'Client Satisfaction Rate' },
]

const caseStudies = [
  {
    title: 'Electronics Sourcing for EU Distributor',
    challenge: 'A German distributor needed a reliable supplier for custom LED lighting with CE certification.',
    result: 'Identified 3 certified factories, secured 22% cost reduction, and delivered first shipment in 8 weeks.',
    tag: 'Electronics',
  },
  {
    title: 'Textile Quality Control for US Brand',
    challenge: 'A US apparel brand experienced inconsistent quality across multiple Chinese suppliers.',
    result: 'Implemented AQL inspection protocol, reduced defect rate from 12% to under 2% within 3 orders.',
    tag: 'Textiles',
  },
  {
    title: 'Machinery Sourcing for Middle East Buyer',
    challenge: 'A UAE buyer needed CNC machinery with specific technical specs and after-sales support.',
    result: 'Found 2 qualified manufacturers, negotiated warranty terms, and coordinated door-to-door shipping.',
    tag: 'Machinery',
  },
]

const faqs = [
  {
    q: 'What types of products can you source?',
    a: 'We source a wide range of products including electronics, textiles, machinery, home goods, auto parts, packaging, and more. If it\'s made in China, we can help you find a reliable supplier.',
  },
  {
    q: 'How do you verify suppliers?',
    a: 'We conduct on-site factory audits covering business registration, production capacity, quality management systems, certifications, and worker conditions. We also check references from existing clients.',
  },
  {
    q: 'What are your fees?',
    a: 'Our fees depend on the scope of work. We offer flexible pricing models including commission-based, project-based, and retainer options. Contact us for a free initial consultation and quote.',
  },
  {
    q: 'How long does the sourcing process take?',
    a: 'Typically 1-2 weeks for supplier matching and verification, 2-4 weeks for samples, and production timelines vary by product. We provide a detailed timeline at the start of each project.',
  },
  {
    q: 'Do you handle shipping and customs?',
    a: 'Yes. We coordinate freight booking, consolidation, customs documentation, and door-to-door delivery for sea, air, and rail shipments to most global destinations.',
  },
  {
    q: 'What if I already have a supplier but need quality control?',
    a: 'We offer standalone quality inspection services. We can inspect at any production stage — pre-production, during production, or pre-shipment — and send you a detailed report with photos.',
  },
]

function FAQItem({ q, a }) {
  const [open, setOpen] = useState(false)
  return (
    <div className="border border-neutral-200 rounded-lg">
      <button
        className="w-full flex items-center justify-between px-6 py-4 text-left"
        onClick={() => setOpen(!open)}
      >
        <span className="font-medium text-neutral-800 pr-4">{q}</span>
        {open ? (
          <ChevronUp className="w-5 h-5 text-neutral-400 shrink-0" />
        ) : (
          <ChevronDown className="w-5 h-5 text-neutral-400 shrink-0" />
        )}
      </button>
      {open && (
        <div className="px-6 pb-4 text-neutral-600 leading-relaxed">{a}</div>
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
      {/* Hero */}
      <section className="relative bg-neutral-900 overflow-hidden">
        <div
          className="absolute inset-0"
          data-strk-bg-id="hero-bg-7a8b9c"
          data-strk-bg="[hero-subtitle] [hero-title]"
          data-strk-bg-ratio="16x9"
          data-strk-bg-width="1600"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-neutral-900/95 via-neutral-900/85 to-neutral-900/70" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28 lg:py-36">
          <div className="max-w-3xl">
            <p className="text-accent-400 font-semibold text-sm md:text-base uppercase tracking-wider mb-4">
              Trusted China Sourcing Partner
            </p>
            <h1
              id="hero-title"
              className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight tracking-tight mb-6"
            >
              China Sourcing Agent for Global Buyers
            </h1>
            <p
              id="hero-subtitle"
              className="text-lg md:text-xl text-neutral-300 leading-relaxed mb-8 max-w-2xl"
            >
              We help you find reliable suppliers, verify factories, inspect quality,
              follow production, and coordinate shipping — so you can import from
              China with confidence.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center bg-accent-500 hover:bg-accent-600 text-white font-semibold text-base px-8 py-4 rounded-lg transition-colors"
              >
                Get a Free Sourcing Quote
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
              <Link
                to="/how-it-works"
                className="inline-flex items-center justify-center border-2 border-white/30 hover:border-white/60 text-white font-medium text-base px-8 py-4 rounded-lg transition-colors"
              >
                See How It Works
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Bar */}
      <section className="bg-primary-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
            {trustPoints.map((item) => (
              <div key={item.label} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-white mb-1">{item.value}</div>
                <div className="text-sm text-primary-100 font-medium">{item.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 md:mb-16">
            <p className="text-accent-500 font-semibold text-sm uppercase tracking-wider mb-2">
              Our Services
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 tracking-tight mb-4">
              End-to-End China Sourcing Support
            </h2>
            <p className="text-neutral-600 max-w-2xl mx-auto text-lg">
              From finding suppliers to delivering goods, we handle every step of your China sourcing journey.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {services.map((s) => (
              <div
                key={s.title}
                className="bg-white border border-neutral-200 rounded-xl p-6 md:p-8 hover:shadow-lg hover:border-primary-100 transition-all group"
              >
                <div className="w-12 h-12 bg-primary-50 rounded-lg flex items-center justify-center mb-5 group-hover:bg-primary-100 transition-colors">
                  <s.icon className="w-6 h-6 text-primary-500" />
                </div>
                <h3 className="text-xl font-semibold text-neutral-900 mb-3">{s.title}</h3>
                <p className="text-neutral-600 leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link
              to="/services"
              className="inline-flex items-center text-primary-500 hover:text-primary-600 font-semibold transition-colors"
            >
              Learn More About Our Services
              <ArrowRight className="w-4 h-4 ml-1" />
            </Link>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 md:py-24 bg-neutral-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 md:mb-16">
            <p className="text-accent-500 font-semibold text-sm uppercase tracking-wider mb-2">
              How It Works
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 tracking-tight mb-4">
              Your Sourcing Process, Simplified
            </h2>
            <p className="text-neutral-600 max-w-2xl mx-auto text-lg">
              A clear, step-by-step process that keeps you informed and in control at every stage.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {processSteps.map((s) => (
              <div key={s.step} className="relative bg-white rounded-xl border border-neutral-200 p-6 md:p-8">
                <div className="w-10 h-10 bg-primary-500 rounded-full flex items-center justify-center mb-4">
                  <span className="text-white font-bold text-sm">{s.step}</span>
                </div>
                <h3 className="text-lg font-semibold text-neutral-900 mb-2">{s.title}</h3>
                <p className="text-neutral-600 leading-relaxed text-sm">{s.desc}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link
              to="/how-it-works"
              className="inline-flex items-center text-primary-500 hover:text-primary-600 font-semibold transition-colors"
            >
              View Full Process Details
              <ArrowRight className="w-4 h-4 ml-1" />
            </Link>
          </div>
        </div>
      </section>

      {/* Products We Source */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 md:mb-16">
            <p className="text-accent-500 font-semibold text-sm uppercase tracking-wider mb-2">
              Product Categories
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 tracking-tight mb-4">
              Products We Source
            </h2>
            <p className="text-neutral-600 max-w-2xl mx-auto text-lg">
              We source across a wide range of industries. If it's made in China, we can find the right supplier for you.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {productCategories.map((cat) => (
              <div
                key={cat.name}
                className="group bg-white border border-neutral-200 rounded-xl overflow-hidden hover:shadow-lg transition-all"
              >
                <div className="aspect-[4/3] bg-neutral-100 overflow-hidden">
                  <img
                    alt={cat.name}
                    data-strk-img-id={cat.imgId}
                    data-strk-img={`[${cat.descId}] [${cat.titleId}]`}
                    data-strk-img-ratio="4x3"
                    data-strk-img-width="600"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-5">
                  <h3 id={cat.titleId} className="text-lg font-semibold text-neutral-900 mb-1">
                    {cat.name}
                  </h3>
                  <p id={cat.descId} className="text-sm text-neutral-600">{cat.desc}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link
              to="/products"
              className="inline-flex items-center text-primary-500 hover:text-primary-600 font-semibold transition-colors"
            >
              View All Categories
              <ArrowRight className="w-4 h-4 ml-1" />
            </Link>
          </div>
        </div>
      </section>

      {/* Problems We Solve */}
      <section className="py-16 md:py-24 bg-neutral-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 md:mb-16">
            <p className="text-accent-400 font-semibold text-sm uppercase tracking-wider mb-2">
              Common Challenges
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight mb-4">
              Problems We Solve
            </h2>
            <p className="text-neutral-400 max-w-2xl mx-auto text-lg">
              Importing from China comes with real risks. Here's how we help you avoid the most common pitfalls.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {problems.map((p) => (
              <div
                key={p.title}
                className="bg-neutral-800 border border-neutral-700 rounded-xl p-6 md:p-8"
              >
                <div className="w-10 h-10 bg-accent-500/20 rounded-lg flex items-center justify-center mb-4">
                  <p.icon className="w-5 h-5 text-accent-400" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">{p.title}</h3>
                <p className="text-neutral-400 leading-relaxed text-sm">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 md:mb-16">
            <p className="text-accent-500 font-semibold text-sm uppercase tracking-wider mb-2">
              Case Studies
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 tracking-tight mb-4">
              Real Results for Real Buyers
            </h2>
            <p className="text-neutral-600 max-w-2xl mx-auto text-lg">
              See how we've helped businesses like yours source successfully from China.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {caseStudies.map((cs) => (
              <div
                key={cs.title}
                className="bg-white border border-neutral-200 rounded-xl p-6 md:p-8 hover:shadow-lg transition-all"
              >
                <span className="inline-block bg-primary-50 text-primary-500 text-xs font-semibold px-3 py-1 rounded-full mb-4">
                  {cs.tag}
                </span>
                <h3 className="text-lg font-semibold text-neutral-900 mb-3">{cs.title}</h3>
                <div className="mb-3">
                  <p className="text-sm font-medium text-neutral-500 mb-1">Challenge</p>
                  <p className="text-neutral-600 text-sm leading-relaxed">{cs.challenge}</p>
                </div>
                <div>
                  <p className="text-sm font-medium text-accent-500 mb-1">Result</p>
                  <p className="text-neutral-700 text-sm leading-relaxed font-medium">{cs.result}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link
              to="/case-studies"
              className="inline-flex items-center text-primary-500 hover:text-primary-600 font-semibold transition-colors"
            >
              Read More Case Studies
              <ArrowRight className="w-4 h-4 ml-1" />
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 md:py-24 bg-neutral-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-accent-500 font-semibold text-sm uppercase tracking-wider mb-2">FAQ</p>
            <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 tracking-tight mb-4">
              Frequently Asked Questions
            </h2>
          </div>
          <div className="space-y-3">
            {faqs.map((faq) => (
              <FAQItem key={faq.q} q={faq.q} a={faq.a} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA / Inquiry Form */}
      <section className="py-16 md:py-24 bg-primary-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight mb-4">
                Ready to Start Sourcing from China?
              </h2>
              <p className="text-primary-100 text-lg leading-relaxed mb-6">
                Tell us about your product requirements and get a free sourcing quote.
                Our team will respond within 24 hours with a tailored plan.
              </p>
              <ul className="space-y-3">
                {[
                  'Free initial consultation',
                  'No commitment required',
                  'Response within 24 hours',
                  'Tailored sourcing plan',
                ].map((item) => (
                  <li key={item} className="flex items-center gap-2 text-primary-100">
                    <CheckCircle2 className="w-5 h-5 text-accent-400 shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-white rounded-xl p-6 md:p-8 shadow-xl">
              <h3 className="text-xl font-bold text-neutral-900 mb-6">Get a Free Sourcing Quote</h3>
              <form
                onSubmit={(e) => {
                  e.preventDefault()
                  window.location.href = '/contact'
                }}
                className="space-y-4"
              >
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-neutral-700 mb-1">Name</label>
                    <input
                      type="text"
                      className="w-full border border-neutral-300 rounded-lg px-4 py-2.5 text-neutral-900 focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none transition"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-neutral-700 mb-1">Email</label>
                    <input
                      type="email"
                      className="w-full border border-neutral-300 rounded-lg px-4 py-2.5 text-neutral-900 focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none transition"
                      placeholder="you@company.com"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-neutral-700 mb-1">Product You Want to Source</label>
                  <input
                    type="text"
                    className="w-full border border-neutral-300 rounded-lg px-4 py-2.5 text-neutral-900 focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none transition"
                    placeholder="e.g. LED lighting, textiles, machinery"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-neutral-700 mb-1">Message</label>
                  <textarea
                    rows={3}
                    className="w-full border border-neutral-300 rounded-lg px-4 py-2.5 text-neutral-900 focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none transition resize-none"
                    placeholder="Tell us about your sourcing needs..."
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-accent-500 hover:bg-accent-600 text-white font-semibold py-3 rounded-lg transition-colors"
                >
                  Get Your Free Quote
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
