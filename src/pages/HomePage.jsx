import React, { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import {
  Search,
  Shield,
  ClipboardCheck,
  Truck,
  TrendingUp,
  AlertTriangle,
  Clock,
  Users,
  CheckCircle,
  ArrowRight,
  Star,
  MessageSquare,
  FileText,
  Globe,
  Award,
  ChevronDown,
  ChevronUp,
} from 'lucide-react'

/* ===================== HERO ===================== */
function HeroSection() {
  return (
    <section className="relative bg-slate-900 text-white overflow-hidden">
      <div
        className="absolute inset-0 opacity-20"
        data-strk-bg-id="hero-bg-a1b2c3"
        data-strk-bg="[hero-title] [hero-subtitle]"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1600"
      />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32 lg:py-40">
        <div className="max-w-3xl">
          <h1 id="hero-title" className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight tracking-tight">
            China Sourcing Agent for Global Buyers
          </h1>
          <p id="hero-subtitle" className="mt-6 text-lg md:text-xl text-slate-300 leading-relaxed max-w-2xl">
            We help overseas buyers find reliable suppliers, verify factories, inspect quality,
            follow production, and coordinate shipping from China.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center px-6 py-3.5 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors text-base"
            >
              Get a Free Sourcing Quote
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
            <Link
              to="/how-it-works"
              className="inline-flex items-center justify-center px-6 py-3.5 border border-slate-500 text-white font-semibold rounded-lg hover:bg-white/10 transition-colors text-base"
            >
              See How It Works
            </Link>
          </div>
          <div className="mt-10 flex flex-wrap gap-6 text-sm text-slate-400">
            <div className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-green-400" />
              <span>Verified Suppliers</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-green-400" />
              <span>Quality Inspections</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-green-400" />
              <span>End-to-End Support</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

/* ===================== SERVICES ===================== */
const services = [
  {
    icon: Search,
    title: 'Supplier Sourcing',
    desc: 'We identify and evaluate reliable manufacturers that match your product requirements, budget, and quality standards.',
  },
  {
    icon: Shield,
    title: 'Factory Verification',
    desc: 'On-site audits to confirm business licenses, production capacity, quality systems, and working conditions.',
  },
  {
    icon: ClipboardCheck,
    title: 'Quality Inspection',
    desc: 'Pre-production, during-production, and pre-shipment inspections to ensure products meet your specifications.',
  },
  {
    icon: TrendingUp,
    title: 'Production Follow-up',
    desc: 'Regular progress updates and timeline monitoring to keep your orders on track and avoid delays.',
  },
  {
    icon: Truck,
    title: 'Shipping Coordination',
    desc: 'We handle freight forwarding, customs documentation, and logistics to get your goods delivered safely.',
  },
]

function ServicesSection() {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12 md:mb-16">
          <h2 className="text-2xl md:text-3xl font-bold text-slate-900">Our Sourcing Services</h2>
          <p className="mt-4 text-slate-600">
            End-to-end sourcing support from supplier discovery to final delivery.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {services.map((s, i) => (
            <div
              key={s.title}
              className="p-6 rounded-xl border border-slate-200 bg-white hover:shadow-md transition-shadow"
            >
              <div className="w-12 h-12 rounded-lg bg-blue-50 flex items-center justify-center mb-4">
                <s.icon className="w-6 h-6 text-blue-700" />
              </div>
              <h3 className="text-lg font-semibold text-slate-900">{s.title}</h3>
              <p className="mt-2 text-slate-600 text-sm leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
        <div className="mt-10 text-center">
          <Link
            to="/services"
            className="inline-flex items-center text-blue-700 font-semibold hover:text-blue-800"
          >
            View all services <ArrowRight className="ml-2 w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  )
}

/* ===================== HOW IT WORKS ===================== */
const steps = [
  { num: '01', title: 'Submit Your Request', desc: 'Tell us what you need: product details, quantity, target price, and timeline.' },
  { num: '02', title: 'Supplier Matching', desc: 'We research and shortlist verified manufacturers that fit your requirements.' },
  { num: '03', title: 'Sample & Quotation', desc: 'Receive samples and detailed quotations for your review and approval.' },
  { num: '04', title: 'Production & QC', desc: 'We monitor production and conduct quality inspections at key stages.' },
  { num: '05', title: 'Shipping & Delivery', desc: 'Goods are packed, documented, and shipped to your destination.' },
]

function HowItWorksSection() {
  return (
    <section className="py-16 md:py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12 md:mb-16">
          <h2 className="text-2xl md:text-3xl font-bold text-slate-900">How It Works</h2>
          <p className="mt-4 text-slate-600">
            A clear, step-by-step process from inquiry to delivery.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {steps.map((step) => (
            <div key={step.num} className="relative">
              <div className="text-4xl font-extrabold text-blue-100 mb-2">{step.num}</div>
              <h3 className="text-base font-semibold text-slate-900">{step.title}</h3>
              <p className="mt-2 text-sm text-slate-600 leading-relaxed">{step.desc}</p>
            </div>
          ))}
        </div>
        <div className="mt-10 text-center">
          <Link
            to="/how-it-works"
            className="inline-flex items-center text-blue-700 font-semibold hover:text-blue-800"
          >
            Learn more about our process <ArrowRight className="ml-2 w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  )
}

/* ===================== PRODUCTS WE SOURCE ===================== */
const productCategories = [
  { title: 'Electronics & Components', desc: 'Consumer electronics, PCBs, cables, sensors' },
  { title: 'Machinery & Equipment', desc: 'Industrial machines, tools, automation parts' },
  { title: 'Textiles & Apparel', desc: 'Fabrics, garments, accessories, uniforms' },
  { title: 'Home & Garden', desc: 'Furniture, decor, kitchenware, outdoor products' },
  { title: 'Auto Parts & Accessories', desc: 'OEM parts, aftermarket accessories, tools' },
  { title: 'Packaging & Printing', desc: 'Custom boxes, labels, bags, promotional materials' },
]

function ProductsSection() {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12 md:mb-16">
          <h2 className="text-2xl md:text-3xl font-bold text-slate-900">Products We Source</h2>
          <p className="mt-4 text-slate-600">
            We source a wide range of products from verified Chinese manufacturers.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {productCategories.map((cat, i) => (
            <div
              key={cat.title}
              className="group p-6 rounded-xl border border-slate-200 bg-white hover:shadow-md transition-shadow"
            >
              <div
                className="w-full h-40 rounded-lg mb-4 bg-slate-100 overflow-hidden"
                data-strk-bg-id={`product-bg-${i}-d4e5f6`}
                data-strk-bg={`[product-cat-${i}]`}
                data-strk-bg-ratio="4x3"
                data-strk-bg-width="600"
              />
              <h3 id={`product-cat-${i}`} className="text-lg font-semibold text-slate-900">{cat.title}</h3>
              <p className="mt-1 text-sm text-slate-600">{cat.desc}</p>
            </div>
          ))}
        </div>
        <div className="mt-10 text-center">
          <Link
            to="/products"
            className="inline-flex items-center text-blue-700 font-semibold hover:text-blue-800"
          >
            See all product categories <ArrowRight className="ml-2 w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  )
}

/* ===================== PROBLEMS WE SOLVE ===================== */
const problems = [
  {
    icon: AlertTriangle,
    title: 'Unreliable Suppliers',
    desc: 'We verify every supplier before you commit, reducing the risk of fraud and poor quality.',
  },
  {
    icon: Clock,
    title: 'Communication Barriers',
    desc: 'Our bilingual team bridges the language gap and ensures clear, accurate communication.',
  },
  {
    icon: FileText,
    title: 'Complex Logistics',
    desc: 'We handle customs, documentation, and freight so you can focus on your business.',
  },
  {
    icon: Users,
    title: 'No Local Presence',
    desc: 'We act as your eyes and ears on the ground in China, visiting factories and monitoring production.',
  },
]

function ProblemsSection() {
  return (
    <section className="py-16 md:py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900">Problems We Solve</h2>
            <p className="mt-4 text-slate-600 leading-relaxed">
              Sourcing from China can be challenging. We remove the common obstacles so you can
              source with confidence.
            </p>
            <div className="mt-8 space-y-6">
              {problems.map((p) => (
                <div key={p.title} className="flex gap-4">
                  <div className="w-10 h-10 rounded-lg bg-blue-50 flex items-center justify-center flex-shrink-0">
                    <p.icon className="w-5 h-5 text-blue-700" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-900">{p.title}</h3>
                    <p className="mt-1 text-sm text-slate-600">{p.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div
            className="rounded-xl overflow-hidden bg-slate-200 aspect-[4/3]"
            data-strk-bg-id="problems-bg-g7h8i9"
            data-strk-bg="[problems-title]"
            data-strk-bg-ratio="4x3"
            data-strk-bg-width="800"
          />
        </div>
      </div>
    </section>
  )
}

/* ===================== TRUST POINTS ===================== */
const trustPoints = [
  { icon: Globe, stat: '30+', label: 'Countries Served' },
  { icon: CheckCircle, stat: '500+', label: 'Verified Suppliers' },
  { icon: ClipboardCheck, stat: '2,000+', label: 'Inspections Completed' },
  { icon: Star, stat: '98%', label: 'Client Satisfaction' },
]

function TrustSection() {
  return (
    <section className="py-16 md:py-20 bg-blue-700 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h2 className="text-2xl md:text-3xl font-bold">Why Buyers Trust Us</h2>
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {trustPoints.map((tp) => (
            <div key={tp.label} className="text-center">
              <tp.icon className="w-8 h-8 mx-auto mb-3 text-blue-200" />
              <div className="text-3xl md:text-4xl font-extrabold">{tp.stat}</div>
              <div className="mt-1 text-sm text-blue-200">{tp.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ===================== CASE STUDIES ===================== */
const caseStudies = [
  {
    title: 'Electronics Manufacturer Saves 18% on Component Costs',
    industry: 'Electronics',
    desc: 'A US-based electronics company needed reliable PCB suppliers. We identified three verified factories, negotiated pricing, and managed quality control throughout production.',
    result: '18% cost reduction, zero defect rate on first shipment',
  },
  {
    title: 'Retailer Avoids $50K Loss Through Factory Audit',
    industry: 'Home & Garden',
    desc: 'A European retailer was about to place a large order. Our factory audit revealed the supplier did not have the claimed production capacity, saving the client from a costly mistake.',
    result: 'Identified capacity mismatch, redirected to verified supplier',
  },
  {
    title: 'Auto Parts Importer Streamlines Shipping Process',
    industry: 'Auto Parts',
    desc: 'An Australian auto parts importer struggled with customs delays. We coordinated freight forwarding, prepared all documentation, and reduced delivery time by 5 days.',
    result: '5-day faster delivery, simplified customs clearance',
  },
]

function CaseStudiesSection() {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12 md:mb-16">
          <h2 className="text-2xl md:text-3xl font-bold text-slate-900">Case Studies</h2>
          <p className="mt-4 text-slate-600">
            Real examples of how we help buyers source from China successfully.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {caseStudies.map((cs, i) => (
            <div
              key={cs.title}
              className="rounded-xl border border-slate-200 bg-white overflow-hidden hover:shadow-md transition-shadow"
            >
              <div
                className="w-full h-48 bg-slate-100"
                data-strk-bg-id={`case-bg-${i}-j1k2l3`}
                data-strk-bg={`[case-title-${i}] [case-industry-${i}]`}
                data-strk-bg-ratio="4x3"
                data-strk-bg-width="600"
              />
              <div className="p-6">
                <span className="inline-block px-2.5 py-1 text-xs font-medium bg-blue-50 text-blue-700 rounded-full">
                  {cs.industry}
                </span>
                <h3 id={`case-title-${i}`} className="mt-3 text-lg font-semibold text-slate-900">
                  {cs.title}
                </h3>
                <p id={`case-industry-${i}`} className="mt-2 text-sm text-slate-600 leading-relaxed">
                  {cs.desc}
                </p>
                <div className="mt-4 pt-4 border-t border-slate-100">
                  <p className="text-sm font-medium text-slate-900">Result: {cs.result}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-10 text-center">
          <Link
            to="/case-studies"
            className="inline-flex items-center text-blue-700 font-semibold hover:text-blue-800"
          >
            View all case studies <ArrowRight className="ml-2 w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  )
}

/* ===================== FAQ ===================== */
const faqs = [
  {
    q: 'How do I start a sourcing request?',
    a: 'Simply fill out our contact form with your product details, quantity, and requirements. Our team will review your request and respond within 24 hours.',
  },
  {
    q: 'What are your service fees?',
    a: 'Our fees depend on the scope of services you need. We offer transparent pricing and provide a detailed quote before any work begins. There are no hidden charges.',
  },
  {
    q: 'How do you verify suppliers?',
    a: 'We conduct on-site factory audits, check business licenses, verify production capacity, review quality management systems, and assess working conditions.',
  },
  {
    q: 'Can you handle small orders?',
    a: 'Yes, we work with buyers of all sizes. While some factories have minimum order quantities, we can help you find suppliers that accommodate your order volume.',
  },
  {
    q: 'Do you ship worldwide?',
    a: 'Yes, we coordinate shipping to most countries worldwide. We work with trusted freight forwarders and handle all necessary export documentation.',
  },
  {
    q: 'What if there is a quality issue?',
    a: 'Our quality inspections are designed to catch issues before shipment. If problems are found, we work with the supplier to resolve them before goods leave the factory.',
  },
]

function FAQItem({ faq, open, onToggle }) {
  return (
    <div className="border-b border-slate-200">
      <button
        className="w-full flex items-center justify-between py-4 text-left"
        onClick={onToggle}
        aria-expanded={open}
      >
        <span className="font-medium text-slate-900 pr-4">{faq.q}</span>
        {open ? (
          <ChevronUp className="w-5 h-5 text-slate-400 flex-shrink-0" />
        ) : (
          <ChevronDown className="w-5 h-5 text-slate-400 flex-shrink-0" />
        )}
      </button>
      {open && (
        <div className="pb-4 text-sm text-slate-600 leading-relaxed">{faq.a}</div>
      )}
    </div>
  )
}

function FAQSection() {
  const [openIndex, setOpenIndex] = React.useState(0)

  return (
    <section className="py-16 md:py-24 bg-slate-50">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h2 className="text-2xl md:text-3xl font-bold text-slate-900">Frequently Asked Questions</h2>
        </div>
        <div>
          {faqs.map((faq, i) => (
            <FAQItem
              key={faq.q}
              faq={faq}
              open={openIndex === i}
              onToggle={() => setOpenIndex(openIndex === i ? -1 : i)}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

/* ===================== CTA SECTION ===================== */
function CTASection() {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-2xl md:text-3xl font-bold text-slate-900">Ready to Source from China?</h2>
        <p className="mt-4 text-slate-600 max-w-2xl mx-auto">
          Tell us what you need and we will find the right suppliers, verify quality, and handle
          logistics. Get started with a free sourcing quote today.
        </p>
        <div className="mt-8">
          <Link
            to="/contact"
            className="inline-flex items-center px-8 py-4 bg-blue-700 text-white font-semibold rounded-lg hover:bg-blue-800 transition-colors text-lg"
          >
            Get a Free Sourcing Quote
            <ArrowRight className="ml-2 w-5 h-5" />
          </Link>
        </div>
      </div>
    </section>
  )
}

/* ===================== HOME PAGE ===================== */
export default function HomePage() {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <div ref={containerRef}>
      <HeroSection />
      <ServicesSection />
      <HowItWorksSection />
      <ProductsSection />
      <ProblemsSection />
      <TrustSection />
      <CaseStudiesSection />
      <FAQSection />
      <CTASection />
    </div>
  )
}
