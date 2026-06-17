import React, { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import {
  Search, ShieldCheck, ClipboardCheck, Truck, ArrowRight, CheckCircle2,
  Factory, Package, Ship, ChevronDown, ChevronUp, Star, Users, Globe,
  BarChart3, Clock, FileCheck, Boxes, Cog, Zap
} from 'lucide-react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'

/* ─── Hero ─── */
function HeroSection() {
  return (
    <section className="relative bg-navy overflow-hidden">
      <div
        className="absolute inset-0"
        data-strk-bg-id="hero-bg-a1b2c3"
        data-strk-bg="[hero-subtitle] [hero-title]"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1600"
      />
      <div className="absolute inset-0 bg-navy/85" />
      <div className="relative max-w-7xl mx-auto px-6 py-24 md:py-32 lg:py-40">
        <div className="max-w-3xl">
          <p className="text-teal-light font-semibold text-sm tracking-wide uppercase mb-4">Trusted China Sourcing Partner</p>
          <h1 id="hero-title" className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
            China Sourcing Agent for Global Buyers
          </h1>
          <p id="hero-subtitle" className="text-lg md:text-xl text-slate-300 leading-relaxed mb-10 max-w-2xl">
            We help you find reliable suppliers, verify factories, inspect quality, follow production, and coordinate shipping — so you can import from China with confidence.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center gap-2 bg-teal hover:bg-teal-dark text-white px-8 py-4 rounded-md text-base font-semibold transition-colors"
            >
              Get a Free Sourcing Quote <ArrowRight className="w-5 h-5" />
            </Link>
            <Link
              to="/how-it-works"
              className="inline-flex items-center justify-center gap-2 border-2 border-white/30 hover:border-white/60 text-white px-8 py-4 rounded-md text-base font-semibold transition-colors"
            >
              See How It Works
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

/* ─── Services ─── */
const services = [
  { icon: Search, title: 'Supplier Sourcing', desc: 'We identify and shortlist qualified suppliers from our verified network based on your product requirements, target price, and quality standards.' },
  { icon: ShieldCheck, title: 'Factory Verification', desc: 'On-site factory audits covering business licenses, production capacity, quality systems, and working conditions before you place any order.' },
  { icon: ClipboardCheck, title: 'Quality Inspection', desc: 'Pre-production, during-production, and pre-shipment inspections following international AQL standards to catch issues early.' },
  { icon: Clock, title: 'Production Follow-up', desc: 'We monitor your production schedule, track milestones, and report progress so your orders stay on time.' },
  { icon: Truck, title: 'Shipping Coordination', desc: 'Consolidation, freight booking, customs documentation, and door-to-door logistics for sea, air, or rail shipments.' },
  { icon: FileCheck, title: 'Compliance & Documentation', desc: 'Product certification guidance, lab testing coordination, and full documentation support for smooth customs clearance.' },
]

function ServicesSection() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <p className="text-teal font-semibold text-sm tracking-wide uppercase mb-2">Our Services</p>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">End-to-End China Sourcing Support</h2>
          <p className="text-slate-600 text-lg">From finding suppliers to delivering goods, we handle every step of your China sourcing process.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((s, i) => (
            <div key={i} className="group p-6 rounded-lg border border-slate-200 hover:border-teal/30 hover:shadow-lg transition-all duration-300 bg-white">
              <div className="w-12 h-12 bg-teal/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-teal/20 transition-colors">
                <s.icon className="w-6 h-6 text-teal" />
              </div>
              <h3 className="text-xl font-bold text-slate-800 mb-2">{s.title}</h3>
              <p className="text-slate-600 leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
        <div className="text-center mt-10">
          <Link to="/services" className="inline-flex items-center gap-1 text-teal hover:text-teal-dark font-semibold transition-colors">
            Learn More About Our Services <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  )
}

/* ─── Sourcing Process ─── */
const steps = [
  { num: '01', title: 'Tell Us What You Need', desc: 'Share your product specifications, target price, quantity, and quality requirements.' },
  { num: '02', title: 'We Find & Verify Suppliers', desc: 'We search our network, shortlist candidates, and conduct factory audits on your behalf.' },
  { num: '03', title: 'Sample & Quote Approval', desc: 'You review supplier quotes and product samples before committing to an order.' },
  { num: '04', title: 'Production & Quality Control', desc: 'We follow production progress and conduct inspections at key milestones.' },
  { num: '05', title: 'Shipping & Delivery', desc: 'We coordinate logistics, documentation, and delivery to your destination.' },
]

function ProcessSection() {
  return (
    <section className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <p className="text-teal font-semibold text-sm tracking-wide uppercase mb-2">How It Works</p>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">A Straightforward Sourcing Process</h2>
          <p className="text-slate-600 text-lg">Five clear steps from inquiry to delivery. You stay informed at every stage.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
          {steps.map((step, i) => (
            <div key={i} className="relative text-center">
              {i < steps.length - 1 && (
                <div className="hidden md:block absolute top-8 left-[60%] w-[80%] h-0.5 bg-teal/20" />
              )}
              <div className="relative z-10 w-16 h-16 bg-teal text-white rounded-full flex items-center justify-center mx-auto mb-4 text-lg font-bold">
                {step.num}
              </div>
              <h3 className="text-lg font-bold text-slate-800 mb-2">{step.title}</h3>
              <p className="text-slate-600 text-sm leading-relaxed">{step.desc}</p>
            </div>
          ))}
        </div>
        <div className="text-center mt-10">
          <Link to="/how-it-works" className="inline-flex items-center gap-1 text-teal hover:text-teal-dark font-semibold transition-colors">
            See Detailed Process <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  )
}

/* ─── Products We Source ─── */
const productCategories = [
  { icon: Boxes, title: 'Consumer Electronics', desc: 'Audio devices, smart home products, accessories, and gadgets' },
  { icon: Package, title: 'Home & Garden', desc: 'Furniture, kitchenware, decor, lighting, and outdoor products' },
  { icon: Cog, title: 'Industrial & Hardware', desc: 'Machinery parts, tools, fasteners, and building materials' },
  { icon: Zap, title: 'Electrical Components', desc: 'PCBs, connectors, cables, switches, and power supplies' },
  { icon: Factory, title: 'Textiles & Apparel', desc: 'Clothing, fabrics, bags, shoes, and fashion accessories' },
  { icon: BarChart3, title: 'Auto Parts & Accessories', desc: 'Interior, exterior, and performance parts for vehicles' },
]

function ProductsSection() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <p className="text-teal font-semibold text-sm tracking-wide uppercase mb-2">Product Categories</p>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">Products We Source</h2>
          <p className="text-slate-600 text-lg">We work across a wide range of product categories. If you need it made in China, we can help source it.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {productCategories.map((cat, i) => (
            <div key={i} className="flex gap-4 p-6 rounded-lg border border-slate-200 hover:border-teal/30 hover:shadow-lg transition-all duration-300">
              <div className="w-12 h-12 bg-teal/10 rounded-lg flex items-center justify-center shrink-0">
                <cat.icon className="w-6 h-6 text-teal" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-slate-800 mb-1">{cat.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">{cat.desc}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-10">
          <Link to="/products" className="inline-flex items-center gap-1 text-teal hover:text-teal-dark font-semibold transition-colors">
            View All Categories <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  )
}

/* ─── Problems We Solve ─── */
const problems = [
  { title: 'Unreliable Suppliers', desc: 'We verify every factory through on-site audits so you avoid scams and low-quality producers.' },
  { title: 'Quality Issues', desc: 'Our inspection team checks your goods at every production stage using AQL standards.' },
  { title: 'Communication Barriers', desc: 'Our bilingual team bridges the language and cultural gap between you and Chinese suppliers.' },
  { title: 'Shipping Delays', desc: 'We coordinate logistics and documentation to keep your shipments on schedule.' },
  { title: 'Hidden Costs', desc: 'Transparent pricing with no surprises. We help you understand the full landed cost upfront.' },
  { title: 'Compliance Risks', desc: 'We guide you through product certifications, lab testing, and regulatory requirements.' },
]

function ProblemsSection() {
  return (
    <section className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <p className="text-teal font-semibold text-sm tracking-wide uppercase mb-2">Common Challenges</p>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">Problems We Solve</h2>
            <p className="text-slate-600 text-lg mb-8">
              Importing from China comes with real risks. We help you avoid costly mistakes and protect your business.
            </p>
            <div className="space-y-5">
              {problems.map((p, i) => (
                <div key={i} className="flex gap-3">
                  <CheckCircle2 className="w-5 h-5 text-teal shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-semibold text-slate-800">{p.title}</h4>
                    <p className="text-slate-600 text-sm">{p.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="relative">
            <img
              alt="Factory quality inspection in China"
              data-strk-img-id="problems-img-d4e5f6"
              data-strk-img="[problems-section-desc] [problems-section-title]"
              data-strk-img-ratio="4x3"
              data-strk-img-width="600"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              className="rounded-lg shadow-lg w-full"
            />
            <p id="problems-section-title" className="hidden">Quality inspection at Chinese factory</p>
            <p id="problems-section-desc" className="hidden">Solving sourcing problems for global buyers</p>
          </div>
        </div>
      </div>
    </section>
  )
}

/* ─── Trust Points ─── */
const trustStats = [
  { value: '500+', label: 'Verified Suppliers' },
  { value: '12+', label: 'Years in Business' },
  { value: '30+', label: 'Countries Served' },
  { value: '98%', label: 'Client Satisfaction' },
]

const trustPoints = [
  'On-site factory audits with detailed reports',
  'AQL-standard quality inspections',
  'Bilingual project managers assigned to every order',
  'Transparent pricing with no hidden fees',
  'Real-time production updates and photo reports',
  'Full compliance and certification support',
]

function TrustSection() {
  return (
    <section className="py-20 bg-navy text-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <p className="text-teal-light font-semibold text-sm tracking-wide uppercase mb-2">Why Choose Us</p>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">A Partner You Can Trust</h2>
          <p className="text-slate-300 text-lg">We bring local expertise and professional processes to every sourcing project.</p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-14">
          {trustStats.map((stat, i) => (
            <div key={i} className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-teal-light mb-2">{stat.value}</div>
              <div className="text-slate-300 text-sm">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Trust Points */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-3xl mx-auto">
          {trustPoints.map((point, i) => (
            <div key={i} className="flex items-center gap-3">
              <CheckCircle2 className="w-5 h-5 text-teal-light shrink-0" />
              <span className="text-slate-200">{point}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ─── Case Studies ─── */
const caseStudies = [
  {
    title: 'Consumer Electronics Sourcing for EU Retailer',
    category: 'Consumer Electronics',
    desc: 'Helped a European retailer source Bluetooth speakers from verified factories, reducing defect rates from 8% to under 1%.',
    imgId: 'case-electronics-g7h8i9',
  },
  {
    title: 'Home Furniture Project for US Brand',
    category: 'Home & Garden',
    desc: 'Managed end-to-end sourcing and QC for a US furniture brand, delivering 3 container loads on schedule with zero quality claims.',
    imgId: 'case-furniture-j1k2l3',
  },
  {
    title: 'Auto Parts Consolidation for Middle East Importer',
    category: 'Auto Parts',
    desc: 'Consolidated shipments from 6 different suppliers into one container, saving 35% on logistics costs for a Middle East buyer.',
    imgId: 'case-auto-m4n5o6',
  },
]

function CaseStudiesSection() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <p className="text-teal font-semibold text-sm tracking-wide uppercase mb-2">Case Studies</p>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">Real Results for Real Clients</h2>
          <p className="text-slate-600 text-lg">See how we have helped businesses source from China more effectively.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {caseStudies.map((cs, i) => (
            <div key={i} className="group rounded-lg border border-slate-200 overflow-hidden hover:shadow-lg transition-all duration-300">
              <div className="relative h-48 overflow-hidden">
                <img
                  alt={cs.title}
                  data-strk-img-id={cs.imgId}
                  data-strk-img={`[case-${i}-desc] [case-${i}-title]`}
                  data-strk-img-ratio="16x9"
                  data-strk-img-width="600"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <p id={`case-${i}-title`} className="hidden">{cs.title}</p>
                <p id={`case-${i}-desc`} className="hidden">{cs.desc}</p>
              </div>
              <div className="p-6">
                <span className="text-teal text-xs font-semibold uppercase tracking-wide">{cs.category}</span>
                <h3 className="text-lg font-bold text-slate-800 mt-1 mb-2">{cs.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">{cs.desc}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-10">
          <Link to="/case-studies" className="inline-flex items-center gap-1 text-teal hover:text-teal-dark font-semibold transition-colors">
            View All Case Studies <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  )
}

/* ─── FAQ ─── */
const faqs = [
  { q: 'How do you find suppliers for my product?', a: 'We search our database of verified suppliers, attend trade shows, and leverage our local network in China. We shortlist 3-5 candidates that match your requirements and present detailed profiles for your review.' },
  { q: 'What does a factory audit include?', a: 'Our on-site audits cover business license verification, production capacity assessment, quality management systems, working conditions, and environmental compliance. You receive a detailed report with photos.' },
  { q: 'How much does your sourcing service cost?', a: 'Our fees depend on the project scope and services required. We offer transparent pricing with no hidden charges. Contact us for a free quote tailored to your needs.' },
  { q: 'Do you handle shipping and customs?', a: 'Yes. We coordinate freight booking (sea, air, rail), prepare shipping documents, and work with customs brokers to ensure smooth clearance at your destination port.' },
  { q: 'What is the minimum order quantity (MOQ)?', a: 'MOQ varies by product and supplier. We negotiate with factories to find MOQs that work for your business size. We also help consolidate orders from multiple suppliers when needed.' },
  { q: 'How long does the sourcing process take?', a: 'Typical supplier sourcing takes 1-2 weeks. Including sampling, order placement, production, and shipping, the full process usually takes 6-12 weeks depending on product complexity.' },
]

function FAQSection() {
  const [openIndex, setOpenIndex] = useState(null)
  return (
    <section className="py-20 bg-slate-50">
      <div className="max-w-3xl mx-auto px-6">
        <div className="text-center mb-14">
          <p className="text-teal font-semibold text-sm tracking-wide uppercase mb-2">FAQ</p>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">Frequently Asked Questions</h2>
        </div>
        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <div key={i} className="bg-white rounded-lg border border-slate-200 overflow-hidden">
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full flex items-center justify-between px-6 py-4 text-left hover:bg-slate-50 transition-colors"
              >
                <span className="font-semibold text-slate-800 pr-4">{faq.q}</span>
                {openIndex === i ? (
                  <ChevronUp className="w-5 h-5 text-teal shrink-0" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-slate-400 shrink-0" />
                )}
              </button>
              {openIndex === i && (
                <div className="px-6 pb-4 text-slate-600 leading-relaxed">
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

/* ─── Inquiry CTA ─── */
function InquirySection() {
  return (
    <section className="py-20 bg-teal">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Ready to Start Sourcing from China?</h2>
        <p className="text-teal-light text-lg mb-8 max-w-2xl mx-auto">
          Tell us about your product requirements and get a free sourcing quote. Our team will respond within 24 hours.
        </p>
        <Link
          to="/contact"
          className="inline-flex items-center gap-2 bg-white text-teal-dark hover:bg-slate-50 px-8 py-4 rounded-md text-base font-semibold transition-colors"
        >
          Get a Free Sourcing Quote <ArrowRight className="w-5 h-5" />
        </Link>
      </div>
    </section>
  )
}

/* ─── Home Page ─── */
export default function Home() {
  return (
    <>
      <HeroSection />
      <ServicesSection />
      <ProcessSection />
      <ProductsSection />
      <ProblemsSection />
      <TrustSection />
      <CaseStudiesSection />
      <FAQSection />
      <InquirySection />
    </>
  )
}
