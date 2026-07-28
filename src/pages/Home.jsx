import React, { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import {
  Search, ShieldCheck, ClipboardCheck, Truck, ArrowRight, CheckCircle2,
  ChevronDown, Factory, Users, Globe, Award, Clock, Headphones,
  AlertTriangle, Ban, Eye, FileCheck, Ship, Package
} from 'lucide-react'

/* ─── Hero ─── */
const Hero = () => {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <section ref={containerRef} className="relative bg-navy overflow-hidden">
      <div
        className="absolute inset-0"
        data-strk-bg-id="hero-bg-a1b2c3"
        data-strk-bg="[hero-subtitle] [hero-title]"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1600"
      />
      <div className="absolute inset-0 bg-navy/85" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28 lg:py-36">
        <div className="max-w-3xl">
          <p className="text-blue-300 font-medium text-sm uppercase tracking-wider mb-4">
            Trusted China Sourcing Partner
          </p>
          <h1 id="hero-title" className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight mb-6">
            China Sourcing Agent for Global Buyers
          </h1>
          <p id="hero-subtitle" className="text-lg md:text-xl text-slate-300 leading-relaxed mb-8 max-w-2xl">
            We help you find reliable suppliers, verify factories, inspect quality, follow production, and coordinate shipping — so you can import from China with confidence.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center gap-2 bg-accent-blue text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-700 transition-colors"
            >
              Get a Free Sourcing Quote
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Link
              to="/how-it-works"
              className="inline-flex items-center justify-center gap-2 border-2 border-white/30 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white/10 transition-colors"
            >
              How It Works
            </Link>
          </div>
          <div className="flex flex-wrap gap-6 mt-10 text-sm text-slate-300">
            <span className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-green-400" /> 500+ Verified Suppliers</span>
            <span className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-green-400" /> 15+ Years Experience</span>
            <span className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-green-400" /> 40+ Countries Served</span>
          </div>
        </div>
      </div>
    </section>
  )
}

/* ─── Services ─── */
const services = [
  {
    icon: Search,
    title: 'Supplier Sourcing',
    desc: 'We identify and shortlist suppliers matching your product specs, MOQ, and budget from our vetted network across China.',
  },
  {
    icon: ShieldCheck,
    title: 'Factory Verification',
    desc: 'On-site factory audits to verify business licenses, production capacity, quality systems, and real operating conditions.',
  },
  {
    icon: ClipboardCheck,
    title: 'Quality Inspection',
    desc: 'Pre-production, during-production, and pre-shipment inspections based on your AQL standards and product requirements.',
  },
  {
    icon: Clock,
    title: 'Production Follow-up',
    desc: 'We monitor production schedules, track milestones, and keep you informed to avoid delays and surprises.',
  },
  {
    icon: Truck,
    title: 'Shipping Coordination',
    desc: 'Consolidation, freight booking, customs documentation, and door-to-door delivery coordination for sea and air shipments.',
  },
  {
    icon: Headphones,
    title: 'Ongoing Support',
    desc: 'Dedicated account manager, dispute resolution assistance, and continuous communication throughout the sourcing process.',
  },
]

const Services = () => (
  <section className="py-16 md:py-24 bg-white">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-12 md:mb-16">
        <p className="text-accent-blue font-semibold text-sm uppercase tracking-wider mb-2">Our Services</p>
        <h2 className="text-3xl md:text-4xl font-bold text-navy mb-4">End-to-End China Sourcing Services</h2>
        <p className="text-slate-500 text-lg max-w-2xl mx-auto">
          From finding suppliers to delivering goods, we handle every step so you can focus on growing your business.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
        {services.map((s) => (
          <div key={s.title} className="bg-slate-50 rounded-lg p-6 md:p-8 hover:shadow-md transition-shadow border border-slate-100">
            <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center mb-4">
              <s.icon className="w-6 h-6 text-accent-blue" />
            </div>
            <h3 className="text-lg font-semibold text-navy mb-2">{s.title}</h3>
            <p className="text-slate-500 text-sm leading-relaxed">{s.desc}</p>
          </div>
        ))}
      </div>
      <div className="text-center mt-10">
        <Link to="/services" className="inline-flex items-center gap-2 text-accent-blue font-semibold hover:gap-3 transition-all">
          View All Services <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </div>
  </section>
)

/* ─── Sourcing Process ─── */
const steps = [
  { num: '01', title: 'Tell Us What You Need', desc: 'Share your product requirements, specifications, target price, and quantity.' },
  { num: '02', title: 'Supplier Search & Verification', desc: 'We search our network, shortlist suppliers, and verify factories on your behalf.' },
  { num: '03', title: 'Sample & Quotation', desc: 'Get product samples and competitive quotations for your review and approval.' },
  { num: '04', title: 'Order & Production', desc: 'Place your order. We follow up on production, track progress, and report updates.' },
  { num: '05', title: 'Quality Inspection', desc: 'Pre-shipment inspection to ensure products meet your quality standards before shipping.' },
  { num: '06', title: 'Shipping & Delivery', desc: 'We coordinate freight, customs, and delivery to your door — sea or air.' },
]

const SourcingProcess = () => (
  <section className="py-16 md:py-24 bg-slate-50">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-12 md:mb-16">
        <p className="text-accent-blue font-semibold text-sm uppercase tracking-wider mb-2">How It Works</p>
        <h2 className="text-3xl md:text-4xl font-bold text-navy mb-4">Our Sourcing Process</h2>
        <p className="text-slate-500 text-lg max-w-2xl mx-auto">
          A clear, structured process that takes you from inquiry to delivery.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
        {steps.map((step) => (
          <div key={step.num} className="bg-white rounded-lg p-6 md:p-8 border border-slate-100 hover:shadow-md transition-shadow">
            <span className="text-4xl font-extrabold text-blue-100">{step.num}</span>
            <h3 className="text-lg font-semibold text-navy mt-3 mb-2">{step.title}</h3>
            <p className="text-slate-500 text-sm leading-relaxed">{step.desc}</p>
          </div>
        ))}
      </div>
      <div className="text-center mt-10">
        <Link to="/how-it-works" className="inline-flex items-center gap-2 text-accent-blue font-semibold hover:gap-3 transition-all">
          Learn More About Our Process <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </div>
  </section>
)

/* ─── Products We Source ─── */
const productCategories = [
  { name: 'Electronics & Components', imgId: 'prod-elec-d4e5f6', titleId: 'prod-elec-title', descId: 'prod-elec-desc', desc: 'Consumer electronics, PCBs, sensors, and electronic components.' },
  { name: 'Home & Garden', imgId: 'prod-home-g7h8i9', titleId: 'prod-home-title', descId: 'prod-home-desc', desc: 'Furniture, kitchenware, home decor, and garden tools.' },
  { name: 'Apparel & Textiles', imgId: 'prod-apparel-j1k2l3', titleId: 'prod-apparel-title', descId: 'prod-apparel-desc', desc: 'Clothing, fabrics, sportswear, and fashion accessories.' },
  { name: 'Machinery & Parts', imgId: 'prod-mach-m4n5o6', titleId: 'prod-mach-title', descId: 'prod-mach-desc', desc: 'Industrial machinery, auto parts, and equipment components.' },
  { name: 'Packaging & Printing', imgId: 'prod-pack-p7q8r9', titleId: 'prod-pack-title', descId: 'prod-pack-desc', desc: 'Custom packaging, labels, and printing solutions.' },
  { name: 'Health & Beauty', imgId: 'prod-health-s1t2u3', titleId: 'prod-health-title', descId: 'prod-health-desc', desc: 'Cosmetics, personal care, and wellness products.' },
]

const ProductsWeSource = () => {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <section ref={containerRef} className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16">
          <p className="text-accent-blue font-semibold text-sm uppercase tracking-wider mb-2">Product Categories</p>
          <h2 className="text-3xl md:text-4xl font-bold text-navy mb-4">Products We Source</h2>
          <p className="text-slate-500 text-lg max-w-2xl mx-auto">
            We source across a wide range of industries. If you don't see your category, ask us — we likely have experience with it.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {productCategories.map((cat) => (
            <div key={cat.imgId} className="group bg-white rounded-lg overflow-hidden border border-slate-100 hover:shadow-md transition-shadow">
              <div className="aspect-[4/3] bg-slate-100 overflow-hidden">
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
                <h3 id={cat.titleId} className="font-semibold text-navy mb-1">{cat.name}</h3>
                <p id={cat.descId} className="text-slate-500 text-sm">{cat.desc}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-10">
          <Link to="/products" className="inline-flex items-center gap-2 text-accent-blue font-semibold hover:gap-3 transition-all">
            View All Categories <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  )
}

/* ─── Problems We Solve ─── */
const problems = [
  { icon: Ban, title: 'Unreliable Suppliers', desc: 'We verify every supplier through on-site audits and background checks before you commit.' },
  { icon: AlertTriangle, title: 'Quality Issues', desc: 'Our inspection team checks products at every stage to catch defects before shipment.' },
  { icon: Eye, title: 'Lack of Transparency', desc: 'You get real-time updates, photos, and reports throughout production and shipping.' },
  { icon: FileCheck, title: 'Complex Documentation', desc: 'We handle customs paperwork, compliance documents, and certificates for smooth clearance.' },
  { icon: Ship, title: 'Shipping Delays', desc: 'We coordinate logistics proactively and flag potential delays before they become problems.' },
  { icon: Package, title: 'Communication Barriers', desc: 'Our bilingual team bridges the language and cultural gap between you and suppliers.' },
]

const ProblemsWeSolve = () => (
  <section className="py-16 md:py-24 bg-slate-50">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-12 md:mb-16">
        <p className="text-accent-blue font-semibold text-sm uppercase tracking-wider mb-2">Common Challenges</p>
        <h2 className="text-3xl md:text-4xl font-bold text-navy mb-4">Problems We Solve</h2>
        <p className="text-slate-500 text-lg max-w-2xl mx-auto">
          Importing from China comes with risks. Here's how we help you avoid the most common pitfalls.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
        {problems.map((p) => (
          <div key={p.title} className="bg-white rounded-lg p-6 md:p-8 border border-slate-100 hover:shadow-md transition-shadow">
            <div className="w-12 h-12 bg-red-50 rounded-lg flex items-center justify-center mb-4">
              <p.icon className="w-6 h-6 text-red-500" />
            </div>
            <h3 className="text-lg font-semibold text-navy mb-2">{p.title}</h3>
            <p className="text-slate-500 text-sm leading-relaxed">{p.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
)

/* ─── Trust Points ─── */
const trustPoints = [
  { icon: Factory, value: '500+', label: 'Verified Suppliers' },
  { icon: Users, value: '800+', label: 'Clients Worldwide' },
  { icon: Globe, value: '40+', label: 'Countries Served' },
  { icon: Award, value: '15+', label: 'Years Experience' },
]

const TrustPoints = () => (
  <section className="py-16 md:py-24 bg-navy">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Why Buyers Trust Us</h2>
        <p className="text-slate-300 text-lg max-w-2xl mx-auto">
          Proven track record with buyers across industries and continents.
        </p>
      </div>
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
        {trustPoints.map((tp) => (
          <div key={tp.label} className="text-center">
            <div className="w-14 h-14 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <tp.icon className="w-7 h-7 text-blue-300" />
            </div>
            <div className="text-3xl md:text-4xl font-extrabold text-white mb-1">{tp.value}</div>
            <div className="text-slate-300 text-sm">{tp.label}</div>
          </div>
        ))}
      </div>
    </div>
  </section>
)

/* ─── Case Studies Preview ─── */
const caseStudies = [
  {
    title: 'US Retailer Cuts Defect Rate by 85%',
    desc: 'A US home goods retailer reduced defect rates from 12% to under 2% after switching to our verified suppliers and inspection process.',
    tag: 'Quality Improvement',
    imgId: 'case-quality-v1w2x3',
    titleId: 'case-quality-title',
    descId: 'case-quality-desc',
  },
  {
    title: 'EU Brand Saves 30% on Sourcing Costs',
    desc: 'A European fashion brand consolidated orders through our supplier network, achieving significant cost savings without compromising quality.',
    tag: 'Cost Reduction',
    imgId: 'case-cost-y4z5a6',
    titleId: 'case-cost-title',
    descId: 'case-cost-desc',
  },
  {
    title: 'AU Importer Avoids $50K Shipment Loss',
    desc: 'Our pre-shipment inspection caught a critical specification error, preventing a costly return and rework cycle for an Australian buyer.',
    tag: 'Risk Prevention',
    imgId: 'case-risk-b7c8d9',
    titleId: 'case-risk-title',
    descId: 'case-risk-desc',
  },
]

const CaseStudiesPreview = () => {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <section ref={containerRef} className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16">
          <p className="text-accent-blue font-semibold text-sm uppercase tracking-wider mb-2">Case Studies</p>
          <h2 className="text-3xl md:text-4xl font-bold text-navy mb-4">Real Results for Real Buyers</h2>
          <p className="text-slate-500 text-lg max-w-2xl mx-auto">
            See how we've helped businesses like yours source smarter from China.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {caseStudies.map((cs) => (
            <div key={cs.imgId} className="bg-white rounded-lg overflow-hidden border border-slate-100 hover:shadow-md transition-shadow">
              <div className="aspect-[16/10] bg-slate-100 overflow-hidden">
                <img
                  alt={cs.title}
                  data-strk-img-id={cs.imgId}
                  data-strk-img={`[${cs.descId}] [${cs.titleId}]`}
                  data-strk-img-ratio="16x9"
                  data-strk-img-width="700"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-5">
                <span className="inline-block bg-blue-50 text-accent-blue text-xs font-medium px-2.5 py-1 rounded-full mb-3">
                  {cs.tag}
                </span>
                <h3 id={cs.titleId} className="font-semibold text-navy mb-2">{cs.title}</h3>
                <p id={cs.descId} className="text-slate-500 text-sm leading-relaxed">{cs.desc}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-10">
          <Link to="/case-studies" className="inline-flex items-center gap-2 text-accent-blue font-semibold hover:gap-3 transition-all">
            View All Case Studies <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  )
}

/* ─── FAQ ─── */
const faqs = [
  {
    q: 'How do you find and verify suppliers?',
    a: 'We search our database of 500+ pre-vetted suppliers, cross-reference with trade directories, and conduct on-site factory audits including business license verification, production capacity assessment, and quality system review.',
  },
  {
    q: 'What does your quality inspection cover?',
    a: 'Our inspections follow AQL standards and cover product appearance, dimensions, functionality, packaging, and labeling. We offer pre-production, during-production, and pre-shipment inspections tailored to your requirements.',
  },
  {
    q: 'How much does your sourcing service cost?',
    a: 'Our basic sourcing service starts with a free consultation. Service fees depend on product complexity, order volume, and scope of work. We provide transparent quotations before any commitment.',
  },
  {
    q: 'Can you help with small orders or samples?',
    a: 'Yes. We can help you source samples from multiple suppliers for comparison. For small orders, we consolidate shipments to keep logistics costs reasonable.',
  },
  {
    q: 'What happens if there is a quality problem?',
    a: 'If issues are found during inspection, we document them with photos and reports, negotiate with the supplier for rework or replacement, and keep you informed throughout the resolution process.',
  },
  {
    q: 'Do you handle customs and import documentation?',
    a: 'Yes. We coordinate with freight forwarders to prepare all necessary export and import documents, including commercial invoices, packing lists, certificates of origin, and compliance certifications.',
  },
]

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null)

  return (
    <section className="py-16 md:py-24 bg-slate-50">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <p className="text-accent-blue font-semibold text-sm uppercase tracking-wider mb-2">FAQ</p>
          <h2 className="text-3xl md:text-4xl font-bold text-navy mb-4">Frequently Asked Questions</h2>
        </div>
        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <div key={i} className="bg-white rounded-lg border border-slate-100 overflow-hidden">
              <button
                className="w-full flex items-center justify-between px-6 py-4 text-left"
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
              >
                <span className="font-medium text-navy pr-4">{faq.q}</span>
                <ChevronDown className={`w-5 h-5 text-slate-400 shrink-0 transition-transform ${openIndex === i ? 'rotate-180' : ''}`} />
              </button>
              {openIndex === i && (
                <div className="px-6 pb-4 text-slate-500 text-sm leading-relaxed">
                  {faq.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ─── Inquiry Form (CTA) ─── */
const InquiryForm = () => (
  <section className="py-16 md:py-24 bg-white">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="bg-navy rounded-2xl p-8 md:p-12 lg:p-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to Start Sourcing from China?
            </h2>
            <p className="text-slate-300 text-lg leading-relaxed mb-6">
              Tell us about your product requirements and we'll provide a free sourcing assessment within 24 hours.
            </p>
            <ul className="space-y-3">
              {['No upfront fees for initial consultation', 'Response within 24 hours', 'Dedicated account manager assigned'].map((item) => (
                <li key={item} className="flex items-center gap-3 text-slate-300">
                  <CheckCircle2 className="w-5 h-5 text-green-400 shrink-0" />
                  <span className="text-sm">{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-white rounded-xl p-6 md:p-8">
            <h3 className="text-xl font-semibold text-navy mb-6">Get a Free Sourcing Quote</h3>
            <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">Full Name *</label>
                  <input type="text" className="w-full border border-slate-200 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-accent-blue focus:border-transparent" placeholder="John Smith" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">Company Name</label>
                  <input type="text" className="w-full border border-slate-200 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-accent-blue focus:border-transparent" placeholder="Your Company" />
                </div>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">Email *</label>
                  <input type="email" className="w-full border border-slate-200 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-accent-blue focus:border-transparent" placeholder="john@company.com" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">Phone</label>
                  <input type="tel" className="w-full border border-slate-200 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-accent-blue focus:border-transparent" placeholder="+1 234 567 8900" />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">Product You Want to Source *</label>
                <input type="text" className="w-full border border-slate-200 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-accent-blue focus:border-transparent" placeholder="e.g. Stainless steel water bottles" />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">Details / Requirements</label>
                <textarea rows={3} className="w-full border border-slate-200 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-accent-blue focus:border-transparent resize-none" placeholder="Quantity, specs, target price, timeline..." />
              </div>
              <button
                type="submit"
                className="w-full bg-accent-blue text-white py-3 rounded-lg font-semibold hover:bg-navy transition-colors"
              >
                Submit Your Inquiry
              </button>
              <p className="text-xs text-slate-400 text-center">
                We'll respond within 24 hours. Your information is kept confidential.
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  </section>
)

/* ─── Home Page ─── */
const Home = () => {
  return (
    <>
      <Hero />
      <Services />
      <SourcingProcess />
      <ProductsWeSource />
      <ProblemsWeSolve />
      <TrustPoints />
      <CaseStudiesPreview />
      <FAQ />
      <InquiryForm />
    </>
  )
}

export default Home
