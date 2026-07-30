import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import {
  Search, ShieldCheck, ClipboardCheck, Truck, Factory,
  Star, CheckCircle, ArrowRight, Globe, Users, Award, TrendingUp,
  ChevronDown, MessageSquare, Package, Zap
} from 'lucide-react'

const services = [
  {
    icon: Search,
    title: 'Supplier Sourcing',
    desc: 'We identify and shortlist verified manufacturers that match your product specs, MOQ, and budget — saving you weeks of research.',
    titleId: 'svc-sourcing-title',
    descId: 'svc-sourcing-desc',
    imgId: 'svc-sourcing-img-a1b2c3',
  },
  {
    icon: Factory,
    title: 'Factory Verification',
    desc: 'On-site audits confirm that factories are legitimate, capable, and compliant before you commit to any order.',
    titleId: 'svc-factory-title',
    descId: 'svc-factory-desc',
    imgId: 'svc-factory-img-d4e5f6',
  },
  {
    icon: ClipboardCheck,
    title: 'Quality Inspection',
    desc: 'Pre-shipment and in-line inspections catch defects early, protecting your brand and reducing costly returns.',
    titleId: 'svc-qc-title',
    descId: 'svc-qc-desc',
    imgId: 'svc-qc-img-g7h8i9',
  },
  {
    icon: ShieldCheck,
    title: 'Production Follow-up',
    desc: 'We monitor your order through every production stage, keeping you informed and on schedule.',
    titleId: 'svc-prod-title',
    descId: 'svc-prod-desc',
    imgId: 'svc-prod-img-j1k2l3',
  },
  {
    icon: Truck,
    title: 'Shipping Coordination',
    desc: 'From freight booking to customs documentation, we coordinate door-to-door logistics for a smooth delivery.',
    titleId: 'svc-ship-title',
    descId: 'svc-ship-desc',
    imgId: 'svc-ship-img-m4n5o6',
  },
  {
    icon: Package,
    title: 'Private Label & OEM',
    desc: 'We help you develop custom-branded products with Chinese manufacturers, from design to finished goods.',
    titleId: 'svc-oem-title',
    descId: 'svc-oem-desc',
    imgId: 'svc-oem-img-p7q8r9',
  },
]

const problems = [
  { problem: 'Scammed by fake suppliers', solution: 'We verify every factory on-site before you pay a cent.' },
  { problem: 'Poor product quality on arrival', solution: 'Our QC inspectors check goods before they leave China.' },
  { problem: 'No visibility into production', solution: 'Regular updates and photos keep you in control.' },
  { problem: 'Shipping delays and customs issues', solution: 'We coordinate freight and handle documentation end-to-end.' },
  { problem: 'Language and communication barriers', solution: 'Our bilingual team bridges the gap between you and suppliers.' },
  { problem: 'Overpaying due to lack of market knowledge', solution: 'We negotiate fair prices using local market expertise.' },
]

const trustPoints = [
  { icon: Globe, value: '40+', label: 'Countries Served' },
  { icon: Users, value: '500+', label: 'Clients Worldwide' },
  { icon: Award, value: '8+', label: 'Years in China Sourcing' },
  { icon: TrendingUp, value: '98%', label: 'Client Satisfaction Rate' },
]

const caseStudies = [
  {
    id: 'cs-furniture',
    category: 'Furniture',
    title: 'UK Retailer Cuts Sourcing Costs by 28%',
    result: 'Identified 3 verified furniture factories in Foshan, negotiated pricing, and managed QC for a 500-unit order.',
    titleId: 'cs-furniture-title',
    descId: 'cs-furniture-desc',
    imgId: 'cs-furniture-img-s1t2u3',
  },
  {
    id: 'cs-electronics',
    category: 'Electronics',
    title: 'US Brand Launches Private Label Earbuds',
    result: 'Sourced OEM manufacturer, coordinated 3 sample rounds, and delivered 2,000 units with full QC sign-off.',
    titleId: 'cs-electronics-title',
    descId: 'cs-electronics-desc',
    imgId: 'cs-electronics-img-v4w5x6',
  },
  {
    id: 'cs-apparel',
    category: 'Apparel',
    title: 'Australian Brand Scales Clothing Line',
    result: 'Verified 5 garment factories, managed production follow-up, and coordinated sea freight for 3 consecutive seasons.',
    titleId: 'cs-apparel-title',
    descId: 'cs-apparel-desc',
    imgId: 'cs-apparel-img-y7z8a9',
  },
]

const faqs = [
  {
    q: 'How much does your sourcing service cost?',
    a: 'Our fees depend on the scope of work. We offer a free initial consultation and quote. Most clients find our fees are offset by the savings we negotiate on their behalf.',
  },
  {
    q: 'Do you work with small businesses and startups?',
    a: 'Yes. We work with buyers of all sizes, from first-time importers to established brands. We tailor our services to your order volume and budget.',
  },
  {
    q: 'How long does it take to find a supplier?',
    a: 'Typically 5–10 business days to shortlist qualified suppliers, depending on product complexity. Factory audits and sampling add additional time.',
  },
  {
    q: 'Which product categories do you cover?',
    a: 'We source across most consumer and industrial categories including electronics, furniture, apparel, toys, machinery, and more. See our Products page for details.',
  },
  {
    q: 'Can you handle shipping to my country?',
    a: 'Yes. We coordinate sea freight, air freight, and express courier to most destinations worldwide, including customs documentation support.',
  },
]

function FAQItem({ q, a }) {
  const [open, setOpen] = useState(false)
  return (
    <div className="border border-border rounded-xl overflow-hidden">
      <button
        className="w-full flex items-center justify-between px-6 py-4 text-left bg-white hover:bg-lightblue transition-colors"
        onClick={() => setOpen(!open)}
      >
        <span className="font-semibold text-textdark text-sm md:text-base">{q}</span>
        <ChevronDown className={`w-5 h-5 text-muted shrink-0 transition-transform ${open ? 'rotate-180' : ''}`} />
      </button>
      {open && (
        <div className="px-6 py-4 bg-lightblue border-t border-border">
          <p className="text-muted text-sm md:text-base leading-relaxed">{a}</p>
        </div>
      )}
    </div>
  )
}

function useToggle(initial) {
  return useState(initial)
}

export default function Home() {
  const containerRef = useRef(null)

  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
      if (containerRef.current) {
        ImageHelper.loadImages(strkImgConfig, containerRef.current)
      }
    })
    return () => window.cancelAnimationFrame(frameId)
  }, [])

  return (
    <div ref={containerRef}>
      {/* Hero */}
      <section className="relative bg-primary overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0"
            data-strk-bg-id="hero-bg-main-3f4g5h"
            data-strk-bg="[hero-subtitle] [hero-title]"
            data-strk-bg-ratio="16x9"
            data-strk-bg-width="1600"
          />
          <div className="absolute inset-0 bg-primary/80" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-white/10 text-blue-200 px-4 py-1.5 rounded-full text-sm font-medium mb-6">
              <Globe className="w-4 h-4" />
              <span>Trusted by buyers in 40+ countries</span>
            </div>
            <h1 id="hero-title" className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
              China Sourcing Agent<br />
              <span className="text-red-300">for Global Buyers</span>
            </h1>
            <p id="hero-subtitle" className="text-lg md:text-xl text-blue-100 leading-relaxed mb-8 max-w-2xl">
              We help overseas businesses find reliable Chinese suppliers, verify factories, inspect quality, and coordinate shipping — so you can import with confidence.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 bg-accent text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-red-700 transition-colors"
              >
                Get a Free Sourcing Quote
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                to="/how-it-works"
                className="inline-flex items-center justify-center gap-2 border-2 border-white/30 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-white/10 transition-colors"
              >
                How It Works
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Bar */}
      <section className="bg-white border-b border-border py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
            {trustPoints.map(({ icon: Icon, value, label }) => (
              <div key={label} className="flex flex-col items-center text-center">
                <Icon className="w-7 h-7 text-primary mb-2" />
                <span className="text-2xl md:text-3xl font-bold text-primary">{value}</span>
                <span className="text-muted text-sm mt-1">{label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-16 md:py-24 bg-lightblue">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-accent font-semibold text-sm uppercase tracking-wider">What We Do</span>
            <h2 className="text-3xl md:text-4xl font-bold text-textdark mt-2 mb-4">
              End-to-End China Sourcing Services
            </h2>
            <p className="text-muted text-lg max-w-2xl mx-auto">
              From finding the right supplier to delivering goods to your door, we manage every step of the sourcing process.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map(({ icon: Icon, title, desc, titleId, descId, imgId }) => (
              <div key={title} className="bg-white rounded-xl p-6 shadow-sm border border-border hover:shadow-md transition-shadow">
                <div className="w-12 h-12 bg-lightblue rounded-xl flex items-center justify-center mb-4">
                  <Icon className="w-6 h-6 text-primary" />
                </div>
                <h3 id={titleId} className="font-bold text-textdark text-lg mb-2">{title}</h3>
                <p id={descId} className="text-muted text-sm leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link
              to="/services"
              className="inline-flex items-center gap-2 text-primary font-semibold hover:text-accent transition-colors"
            >
              View All Services <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Sourcing Process */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-accent font-semibold text-sm uppercase tracking-wider">Our Process</span>
            <h2 className="text-3xl md:text-4xl font-bold text-textdark mt-2 mb-4">
              How We Source for You
            </h2>
            <p className="text-muted text-lg max-w-2xl mx-auto">
              A structured, transparent process that keeps you informed at every stage.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { step: '01', title: 'Submit Your Requirements', desc: 'Tell us what you need — product specs, quantity, target price, and timeline.' },
              { step: '02', title: 'Supplier Research & Shortlist', desc: 'We identify and vet qualified manufacturers, then present you with a curated shortlist.' },
              { step: '03', title: 'Sampling & Verification', desc: 'We arrange samples and conduct factory audits to confirm quality and capability.' },
              { step: '04', title: 'Order & Delivery Management', desc: 'We oversee production, inspect finished goods, and coordinate shipping to your door.' },
            ].map(({ step, title, desc }) => (
              <div key={step} className="relative">
                <div className="text-5xl font-bold text-lightblue mb-4 select-none">{step}</div>
                <h3 className="font-bold text-textdark text-lg mb-2">{title}</h3>
                <p className="text-muted text-sm leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link
              to="/how-it-works"
              className="inline-flex items-center gap-2 bg-primary text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-900 transition-colors"
            >
              See Full Process <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Problems We Solve */}
      <section className="py-16 md:py-24 bg-primary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-red-300 font-semibold text-sm uppercase tracking-wider">Common Challenges</span>
            <h2 className="text-3xl md:text-4xl font-bold text-white mt-2 mb-4">
              Problems We Solve for Importers
            </h2>
            <p className="text-blue-200 text-lg max-w-2xl mx-auto">
              Importing from China comes with real risks. Here's how we protect your business.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {problems.map(({ problem, solution }) => (
              <div key={problem} className="bg-white/10 rounded-xl p-6 border border-white/10">
                <div className="flex items-start gap-3 mb-3">
                  <div className="w-5 h-5 rounded-full bg-accent flex items-center justify-center shrink-0 mt-0.5">
                    <span className="text-white text-xs font-bold">✕</span>
                  </div>
                  <p className="text-white font-semibold text-sm">{problem}</p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-400 shrink-0 mt-0.5" />
                  <p className="text-blue-100 text-sm leading-relaxed">{solution}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-accent font-semibold text-sm uppercase tracking-wider">Client Results</span>
            <h2 className="text-3xl md:text-4xl font-bold text-textdark mt-2 mb-4">
              Case Studies
            </h2>
            <p className="text-muted text-lg max-w-2xl mx-auto">
              Real outcomes from real clients who trusted us with their China sourcing.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {caseStudies.map(({ id, category, title, result, titleId, descId, imgId }) => (
              <div key={id} className="bg-white rounded-xl overflow-hidden shadow-sm border border-border hover:shadow-md transition-shadow">
                <div className="aspect-video bg-lightblue overflow-hidden">
                  <img
                    data-strk-img-id={imgId}
                    data-strk-img={`[${descId}] [${titleId}]`}
                    data-strk-img-ratio="16x9"
                    data-strk-img-width="600"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    alt={title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <span className="inline-block bg-lightblue text-primary text-xs font-semibold px-3 py-1 rounded-full mb-3">
                    {category}
                  </span>
                  <h3 id={titleId} className="font-bold text-textdark text-lg mb-2">{title}</h3>
                  <p id={descId} className="text-muted text-sm leading-relaxed">{result}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link
              to="/case-studies"
              className="inline-flex items-center gap-2 text-primary font-semibold hover:text-accent transition-colors"
            >
              View All Case Studies <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 md:py-24 bg-lightblue">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-accent font-semibold text-sm uppercase tracking-wider">FAQ</span>
            <h2 className="text-3xl md:text-4xl font-bold text-textdark mt-2 mb-4">
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

      {/* CTA Banner */}
      <section className="py-16 md:py-20 bg-accent">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Source from China with Confidence?
          </h2>
          <p className="text-red-100 text-lg mb-8 max-w-2xl mx-auto">
            Tell us what you need and we'll send you a free sourcing plan within 24 hours.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 bg-white text-accent px-8 py-4 rounded-xl font-bold text-lg hover:bg-red-50 transition-colors"
          >
            Get a Free Sourcing Quote
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  )
}
