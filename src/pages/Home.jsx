import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import {
  Search, ShieldCheck, ClipboardCheck, Truck, Factory, Star,
  ArrowRight, CheckCircle, Users, Package, Globe, ChevronRight
} from 'lucide-react'

const services = [
  {
    icon: Search,
    title: 'Supplier Sourcing',
    desc: 'We identify and shortlist verified manufacturers that match your product specs, quality standards, and budget.',
    titleId: 'svc-sourcing-title',
    descId: 'svc-sourcing-desc',
    imgId: 'svc-sourcing-img-a1b2c3',
  },
  {
    icon: Factory,
    title: 'Factory Verification',
    desc: 'On-site audits confirm factory capacity, certifications, working conditions, and production capabilities.',
    titleId: 'svc-factory-title',
    descId: 'svc-factory-desc',
    imgId: 'svc-factory-img-d4e5f6',
  },
  {
    icon: ClipboardCheck,
    title: 'Quality Inspection',
    desc: 'Pre-shipment and in-line inspections ensure your goods meet specifications before they leave China.',
    titleId: 'svc-qc-title',
    descId: 'svc-qc-desc',
    imgId: 'svc-qc-img-g7h8i9',
  },
  {
    icon: ShieldCheck,
    title: 'Production Follow-up',
    desc: 'We monitor production milestones, communicate with factories, and flag issues before they become problems.',
    titleId: 'svc-prod-title',
    descId: 'svc-prod-desc',
    imgId: 'svc-prod-img-j1k2l3',
  },
  {
    icon: Truck,
    title: 'Shipping Coordination',
    desc: 'We coordinate with freight forwarders, handle documentation, and ensure on-time delivery to your destination.',
    titleId: 'svc-ship-title',
    descId: 'svc-ship-desc',
    imgId: 'svc-ship-img-m4n5o6',
  },
  {
    icon: Package,
    title: 'Sample Procurement',
    desc: 'We source and ship product samples from multiple suppliers so you can evaluate quality before committing.',
    titleId: 'svc-sample-title',
    descId: 'svc-sample-desc',
    imgId: 'svc-sample-img-p7q8r9',
  },
]

const steps = [
  { num: '01', title: 'Submit Your Inquiry', desc: 'Tell us what you need — product type, quantity, target price, and any specific requirements.' },
  { num: '02', title: 'Supplier Research', desc: 'We search our network and verified databases to find 3–5 qualified manufacturers.' },
  { num: '03', title: 'Factory Audit', desc: 'We visit shortlisted factories to verify capacity, certifications, and working conditions.' },
  { num: '04', title: 'Sample & Approval', desc: 'Samples are sourced and shipped to you for review and approval before production begins.' },
  { num: '05', title: 'Production Monitoring', desc: 'We follow up with the factory throughout production to ensure timelines and quality are maintained.' },
  { num: '06', title: 'QC & Shipment', desc: 'Pre-shipment inspection is conducted. Once approved, we coordinate shipping to your door.' },
]

const problems = [
  { title: 'Unreliable Suppliers', desc: 'We pre-screen and audit every factory before recommending them to you.' },
  { title: 'Quality Failures', desc: 'Our QC inspectors check goods before shipment — not after they arrive.' },
  { title: 'Communication Barriers', desc: 'We speak Chinese and English, bridging the gap between you and your factory.' },
  { title: 'Shipping Delays', desc: 'We coordinate logistics and documentation to keep your supply chain on schedule.' },
  { title: 'Hidden Costs', desc: 'Transparent pricing with no hidden fees. You know exactly what you pay for.' },
  { title: 'Scam Risk', desc: 'We verify business licenses, export records, and factory existence before any engagement.' },
]

const trustStats = [
  { value: '500+', label: 'Buyers Served', icon: Users },
  { value: '12+', label: 'Years in China', icon: Globe },
  { value: '98%', label: 'Client Satisfaction', icon: Star },
  { value: '30+', label: 'Product Categories', icon: Package },
]

const caseStudies = [
  {
    id: 'cs-furniture',
    category: 'Furniture',
    title: 'US Retailer Saves 22% on Furniture Sourcing',
    result: 'Identified 4 verified factories, negotiated pricing, and delivered 3 containers on time.',
    country: 'United States',
    titleId: 'cs-furniture-title',
    descId: 'cs-furniture-desc',
    imgId: 'cs-furniture-img-s1t2u3',
  },
  {
    id: 'cs-electronics',
    category: 'Electronics',
    title: 'Australian Brand Launches Private Label Electronics',
    result: 'Full sourcing, factory audit, and QC for a new product line — from concept to delivery in 90 days.',
    country: 'Australia',
    titleId: 'cs-electronics-title',
    descId: 'cs-electronics-desc',
    imgId: 'cs-electronics-img-v4w5x6',
  },
  {
    id: 'cs-textiles',
    category: 'Textiles',
    title: 'European Fashion Brand Scales Production',
    result: 'Sourced 2 compliant garment factories with BSCI certification and managed 5 production runs.',
    country: 'Germany',
    titleId: 'cs-textiles-title',
    descId: 'cs-textiles-desc',
    imgId: 'cs-textiles-img-y7z8a9',
  },
]

const faqs = [
  {
    q: 'How much does your sourcing service cost?',
    a: 'We offer a free initial consultation and sourcing quote. Our fees depend on the scope of services required — typically a flat project fee or a small percentage of order value. We are transparent about all costs upfront.',
  },
  {
    q: 'How long does it take to find a supplier?',
    a: 'Initial supplier shortlisting typically takes 5–10 business days. Factory audits and sample procurement add 2–4 weeks depending on location and product complexity.',
  },
  {
    q: 'Do you work with small businesses and startups?',
    a: 'Yes. We work with buyers of all sizes, from startups placing their first order to established brands scaling production. We tailor our services to your needs and budget.',
  },
  {
    q: 'What product categories do you cover?',
    a: 'We source across 30+ categories including electronics, furniture, clothing, machinery, toys, health products, and more. If it is manufactured in China, we can likely source it.',
  },
  {
    q: 'Can you handle shipping and customs documentation?',
    a: 'Yes. We coordinate with licensed freight forwarders and can assist with commercial invoices, packing lists, certificates of origin, and other export documentation.',
  },
]

export default function Home() {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <div ref={containerRef}>
      {/* Hero */}
      <section className="relative bg-navy overflow-hidden">
        <div
          className="absolute inset-0 opacity-20"
          data-strk-bg-id="hero-bg-main-b1c2d3"
          data-strk-bg="[hero-subtitle] [hero-title]"
          data-strk-bg-ratio="16x9"
          data-strk-bg-width="1600"
        />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-36">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-navy-light text-blue-200 text-sm font-medium px-4 py-1.5 rounded-full mb-6">
              <Globe className="w-4 h-4" />
              <span>Trusted by 500+ global buyers</span>
            </div>
            <h1 id="hero-title" className="text-4xl md:text-6xl font-bold text-white leading-tight mb-6">
              China Sourcing Agent<br />
              <span className="text-brand-gold">for Global Buyers</span>
            </h1>
            <p id="hero-subtitle" className="text-xl text-blue-100 leading-relaxed mb-8 max-w-2xl">
              We help overseas buyers find reliable Chinese suppliers, verify factories, inspect quality, and coordinate shipping — so you can import with confidence.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 bg-brand-red hover:bg-brand-red-dark text-white font-semibold px-8 py-4 rounded-lg text-lg transition-colors"
              >
                Get a Free Sourcing Quote
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                to="/how-it-works"
                className="inline-flex items-center justify-center gap-2 border-2 border-white text-white hover:bg-white hover:text-navy font-semibold px-8 py-4 rounded-lg text-lg transition-colors"
              >
                How It Works
              </Link>
            </div>
            <div className="flex flex-wrap gap-6 mt-10">
              {['No upfront fees', 'English-speaking team', 'On-site factory audits', 'Pre-shipment QC'].map((item) => (
                <div key={item} className="flex items-center gap-2 text-blue-200 text-sm">
                  <CheckCircle className="w-4 h-4 text-brand-gold flex-shrink-0" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Trust Stats */}
      <section className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {trustStats.map(({ value, label, icon: Icon }) => (
              <div key={label} className="text-center">
                <div className="flex justify-center mb-2">
                  <Icon className="w-6 h-6 text-brand-red" />
                </div>
                <div className="text-3xl font-bold text-navy">{value}</div>
                <div className="text-sm text-gray-500 mt-1">{label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="bg-site-bg py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="text-sm font-semibold text-brand-red uppercase tracking-widest mb-2">What We Do</p>
            <h2 className="text-3xl md:text-4xl font-bold text-navy mb-4">End-to-End Sourcing Services</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              From finding the right factory to delivering goods to your warehouse — we manage every step of the China sourcing process.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map(({ icon: Icon, title, desc, titleId, descId }) => (
              <div key={title} className="bg-white rounded-xl border border-gray-200 p-6 hover:shadow-md transition-shadow">
                <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center mb-4">
                  <Icon className="w-6 h-6 text-navy" />
                </div>
                <h3 id={titleId} className="text-lg font-semibold text-navy mb-2">{title}</h3>
                <p id={descId} className="text-gray-600 text-sm leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link to="/services" className="inline-flex items-center gap-2 text-navy font-semibold hover:text-brand-red transition-colors">
              View All Services <ChevronRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="text-sm font-semibold text-brand-red uppercase tracking-widest mb-2">Our Process</p>
            <h2 className="text-3xl md:text-4xl font-bold text-navy mb-4">How We Source for You</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              A structured, transparent process from your first inquiry to final delivery.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {steps.map((step) => (
              <div key={step.num} className="relative p-6 rounded-xl border border-gray-200 bg-site-bg">
                <div className="text-4xl font-bold text-gray-100 absolute top-4 right-4 select-none">{step.num}</div>
                <div className="text-sm font-bold text-brand-red mb-2">{step.num}</div>
                <h3 className="text-lg font-semibold text-navy mb-2">{step.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link to="/how-it-works" className="inline-flex items-center gap-2 text-navy font-semibold hover:text-brand-red transition-colors">
              See Full Process <ChevronRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Problems We Solve */}
      <section className="bg-navy py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="text-sm font-semibold text-brand-gold uppercase tracking-widest mb-2">Why Use a Sourcing Agent</p>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Problems We Solve for Buyers</h2>
            <p className="text-lg text-blue-200 max-w-2xl mx-auto">
              Importing from China without local support is risky. Here's how we protect your business.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {problems.map((p) => (
              <div key={p.title} className="bg-navy-light rounded-xl p-6">
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-brand-gold flex-shrink-0 mt-0.5" />
                  <div>
                    <h3 className="text-white font-semibold mb-1">{p.title}</h3>
                    <p className="text-blue-200 text-sm leading-relaxed">{p.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="bg-site-bg py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="text-sm font-semibold text-brand-red uppercase tracking-widest mb-2">Client Results</p>
            <h2 className="text-3xl md:text-4xl font-bold text-navy mb-4">Case Studies</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Real results from real buyers who trusted us with their China sourcing.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {caseStudies.map((cs) => (
              <div key={cs.id} className="bg-white rounded-xl border border-gray-200 overflow-hidden hover:shadow-md transition-shadow">
                <div className="aspect-video overflow-hidden bg-gray-100">
                  <img
                    data-strk-img-id={cs.imgId}
                    data-strk-img={`[${cs.descId}] [${cs.titleId}]`}
                    data-strk-img-ratio="16x9"
                    data-strk-img-width="600"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    alt={cs.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <span className="inline-block bg-blue-50 text-navy text-xs font-semibold px-3 py-1 rounded-full mb-3">{cs.category}</span>
                  <h3 id={cs.titleId} className="text-navy font-semibold text-base mb-2">{cs.title}</h3>
                  <p id={cs.descId} className="text-gray-600 text-sm leading-relaxed mb-3">{cs.result}</p>
                  <div className="flex items-center gap-1 text-xs text-gray-400">
                    <Globe className="w-3 h-3" />
                    <span>{cs.country}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link to="/case-studies" className="inline-flex items-center gap-2 text-navy font-semibold hover:text-brand-red transition-colors">
              View All Case Studies <ChevronRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-white py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="text-sm font-semibold text-brand-red uppercase tracking-widest mb-2">FAQ</p>
            <h2 className="text-3xl md:text-4xl font-bold text-navy mb-4">Frequently Asked Questions</h2>
          </div>
          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <div key={i} className="border border-gray-200 rounded-xl p-6">
                <h3 className="text-navy font-semibold mb-2">{faq.q}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="bg-brand-red py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Source from China?
          </h2>
          <p className="text-red-100 text-lg mb-8 max-w-xl mx-auto">
            Submit your sourcing inquiry today. Our team will respond within 24 hours with a tailored plan.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 bg-white text-brand-red hover:bg-gray-100 font-bold px-8 py-4 rounded-lg text-lg transition-colors"
          >
            Get a Free Sourcing Quote
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  )
}
