import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import {
  Search, ShieldCheck, ClipboardCheck, Truck, Factory,
  CheckCircle, ArrowRight, Star, Globe, Users, Package,
  ChevronDown, AlertTriangle, TrendingUp, Clock, Award
} from 'lucide-react'

const services = [
  {
    icon: Search,
    title: 'Supplier Sourcing',
    desc: 'We identify and shortlist verified Chinese manufacturers that match your product specs, MOQ, and budget requirements.',
    titleId: 'svc-sourcing-title',
    descId: 'svc-sourcing-desc',
  },
  {
    icon: Factory,
    title: 'Factory Verification',
    desc: 'On-site factory audits covering production capacity, certifications, workforce, and compliance with international standards.',
    titleId: 'svc-factory-title',
    descId: 'svc-factory-desc',
  },
  {
    icon: ClipboardCheck,
    title: 'Quality Inspection',
    desc: 'Pre-shipment and in-line inspections by trained QC inspectors to catch defects before goods leave the factory.',
    titleId: 'svc-qc-title',
    descId: 'svc-qc-desc',
  },
  {
    icon: Clock,
    title: 'Production Follow-up',
    desc: 'Regular production updates, milestone tracking, and direct communication with factories to keep your order on schedule.',
    titleId: 'svc-prod-title',
    descId: 'svc-prod-desc',
  },
  {
    icon: Truck,
    title: 'Shipping Coordination',
    desc: 'We coordinate with freight forwarders, handle export documentation, and ensure your goods are shipped correctly.',
    titleId: 'svc-ship-title',
    descId: 'svc-ship-desc',
  },
  {
    icon: Package,
    title: 'Sample Procurement',
    desc: 'We source and consolidate product samples from multiple suppliers so you can evaluate quality before placing bulk orders.',
    titleId: 'svc-sample-title',
    descId: 'svc-sample-desc',
  },
]

const steps = [
  { num: '01', title: 'Submit Your Inquiry', desc: 'Tell us what you need — product specs, quantity, target price, and timeline.' },
  { num: '02', title: 'Supplier Research', desc: 'Our team identifies and vets 3–5 qualified suppliers from our verified network.' },
  { num: '03', title: 'Quotation & Samples', desc: 'We collect competitive quotes and arrange samples for your review.' },
  { num: '04', title: 'Factory Audit', desc: 'We conduct on-site or virtual factory audits before you commit to an order.' },
  { num: '05', title: 'Production & QC', desc: 'We monitor production progress and perform quality inspections at key stages.' },
  { num: '06', title: 'Shipping & Delivery', desc: 'We coordinate logistics, prepare export documents, and track your shipment.' },
]

const problems = [
  { icon: AlertTriangle, title: 'Unreliable Suppliers', desc: 'Factories that miss deadlines, change specs, or disappear after payment.' },
  { icon: ShieldCheck, title: 'Quality Failures', desc: 'Receiving goods that don\'t match samples or fail your market\'s standards.' },
  { icon: Globe, title: 'Language Barriers', desc: 'Miscommunication with Chinese factories leading to costly mistakes.' },
  { icon: TrendingUp, title: 'Overpaying for Products', desc: 'Paying above-market prices without local market knowledge to negotiate.' },
]

const trustPoints = [
  { value: '500+', label: 'Buyers Served', icon: Users },
  { value: '12+', label: 'Years in China', icon: Award },
  { value: '30+', label: 'Product Categories', icon: Package },
  { value: '98%', label: 'On-Time Delivery', icon: CheckCircle },
]

const caseStudies = [
  {
    id: 'cs-furniture',
    category: 'Furniture',
    title: 'US Retailer Saves 22% on Furniture Sourcing',
    desc: 'A mid-size US home goods retailer needed to diversify their supplier base. We identified 4 verified factories, negotiated pricing, and managed QC across 3 production runs.',
    result: '22% cost reduction, 0 defect shipments',
    imgId: 'cs-furniture-img-a1b2c3',
    titleId: 'cs-furniture-title',
    descId: 'cs-furniture-desc',
  },
  {
    id: 'cs-electronics',
    category: 'Electronics',
    title: 'Australian Brand Launches Private Label Electronics',
    desc: 'We sourced OEM manufacturers for a new consumer electronics line, coordinated certifications, and managed 6 months of production follow-up.',
    result: 'On-time launch, CE & RoHS certified',
    imgId: 'cs-electronics-img-d4e5f6',
    titleId: 'cs-electronics-title',
    descId: 'cs-electronics-desc',
  },
  {
    id: 'cs-textiles',
    category: 'Textiles',
    title: 'European Fashion Brand Scales Production',
    desc: 'A growing European apparel brand needed to scale from 500 to 5,000 units per SKU. We found compliant factories and implemented inline QC protocols.',
    result: 'Defect rate reduced from 8% to 1.2%',
    imgId: 'cs-textiles-img-g7h8i9',
    titleId: 'cs-textiles-title',
    descId: 'cs-textiles-desc',
  },
]

const faqs = [
  {
    q: 'How much does your sourcing service cost?',
    a: 'Our fees depend on the scope of services required. We offer a free initial consultation and sourcing quote. Typical fees range from a flat project fee to a percentage of order value, depending on complexity.',
  },
  {
    q: 'How long does it take to find a supplier?',
    a: 'For standard products, we typically present qualified supplier options within 5–10 business days. Complex or highly customized products may take 2–3 weeks.',
  },
  {
    q: 'Do you work with small businesses and startups?',
    a: 'Yes. We work with buyers at all stages — from first-time importers to established brands scaling their supply chain. We adapt our services to your order size and budget.',
  },
  {
    q: 'Can you handle both sourcing and quality inspection?',
    a: 'Absolutely. Most of our clients use us for end-to-end support: sourcing, factory audit, production monitoring, QC inspection, and shipping coordination.',
  },
  {
    q: 'What product categories do you cover?',
    a: 'We cover a wide range including electronics, furniture, textiles, machinery, toys, health & beauty, sports goods, packaging, and more. See our Products page for the full list.',
  },
]

export default function Home() {
  const containerRef = useRef(null)

  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, containerRef.current)
    })
    return () => window.cancelAnimationFrame(frameId)
  }, [])

  return (
    <div ref={containerRef}>
      {/* Hero */}
      <section className="relative bg-brand-900 pt-24 pb-20 md:pt-32 md:pb-28 overflow-hidden">
        <div
          className="absolute inset-0 opacity-20"
          data-strk-bg-id="hero-bg-main-7f3a2b"
          data-strk-bg="[hero-subtitle] [hero-title]"
          data-strk-bg-ratio="16x9"
          data-strk-bg-width="1600"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-brand-900/90 to-brand-800/70" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-brand-800 border border-brand-700 rounded-full px-4 py-1.5 mb-6">
              <Globe className="w-4 h-4 text-accent-400" />
              <span className="text-brand-200 text-sm font-medium">China-Based Sourcing Agent</span>
            </div>
            <h1 id="hero-title" className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
              China Sourcing Agent<br />
              <span className="text-accent-400">for Global Buyers</span>
            </h1>
            <p id="hero-subtitle" className="text-lg md:text-xl text-brand-200 leading-relaxed mb-8 max-w-2xl">
              We help importers and brands find reliable Chinese suppliers, verify factories, inspect quality, and coordinate shipping — reducing risk and saving time at every step.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 bg-accent-500 hover:bg-accent-400 text-white font-semibold px-8 py-4 rounded-lg text-base transition-colors"
              >
                Get a Free Sourcing Quote
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                to="/how-it-works"
                className="inline-flex items-center justify-center gap-2 border-2 border-white/40 text-white hover:bg-white/10 font-semibold px-8 py-4 rounded-lg text-base transition-colors"
              >
                How It Works
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Bar */}
      <section className="bg-white border-b border-neutral-200 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
            {trustPoints.map(({ value, label, icon: Icon }) => (
              <div key={label} className="flex flex-col items-center text-center">
                <Icon className="w-6 h-6 text-brand-600 mb-2" />
                <span className="text-2xl md:text-3xl font-bold text-brand-900">{value}</span>
                <span className="text-sm text-neutral-500 mt-0.5">{label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-16 md:py-24 bg-neutral-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-xs font-semibold uppercase tracking-widest text-accent-500 mb-3 block">What We Do</span>
            <h2 className="text-3xl md:text-4xl font-bold text-brand-900 mb-4">End-to-End Sourcing Services</h2>
            <p className="text-neutral-600 max-w-2xl mx-auto text-lg">
              From finding the right supplier to getting goods to your door — we manage the entire process on the ground in China.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map(({ icon: Icon, title, desc, titleId, descId }) => (
              <div key={title} className="bg-white rounded-xl border border-neutral-200 p-6 hover:shadow-md transition-shadow">
                <div className="w-12 h-12 bg-brand-50 rounded-xl flex items-center justify-center mb-4">
                  <Icon className="w-6 h-6 text-brand-700" />
                </div>
                <h3 id={titleId} className="text-lg font-semibold text-brand-900 mb-2">{title}</h3>
                <p id={descId} className="text-neutral-600 text-sm leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link to="/services" className="inline-flex items-center gap-2 text-brand-600 hover:text-brand-700 font-semibold">
              View All Services <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Problems We Solve */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-xs font-semibold uppercase tracking-widest text-accent-500 mb-3 block">Why Buyers Work With Us</span>
              <h2 className="text-3xl md:text-4xl font-bold text-brand-900 mb-6">Common Sourcing Problems We Solve</h2>
              <p className="text-neutral-600 text-lg leading-relaxed mb-8">
                Sourcing from China without local expertise exposes you to real risks. Our team is on the ground to protect your interests.
              </p>
              <div className="flex flex-col gap-5">
                {problems.map(({ icon: Icon, title, desc }) => (
                  <div key={title} className="flex gap-4">
                    <div className="w-10 h-10 bg-red-50 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Icon className="w-5 h-5 text-red-500" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-brand-900 mb-1">{title}</h4>
                      <p className="text-neutral-600 text-sm leading-relaxed">{desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative rounded-2xl overflow-hidden aspect-[4/3]">
              <img
                data-strk-img-id="problems-img-k1l2m3"
                data-strk-img="[hero-subtitle] [hero-title] China factory quality control inspection"
                data-strk-img-ratio="4x3"
                data-strk-img-width="700"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                alt="Quality control inspection in China factory"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 md:py-24 bg-brand-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-xs font-semibold uppercase tracking-widest text-accent-400 mb-3 block">Our Process</span>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">How We Work</h2>
            <p className="text-brand-200 max-w-2xl mx-auto text-lg">
              A structured, transparent process from your first inquiry to final delivery.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {steps.map((step) => (
              <div key={step.num} className="bg-brand-800/60 border border-brand-700 rounded-xl p-6">
                <span className="text-4xl font-bold text-brand-600 block mb-3">{step.num}</span>
                <h3 className="text-lg font-semibold text-white mb-2">{step.title}</h3>
                <p className="text-brand-300 text-sm leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link
              to="/how-it-works"
              className="inline-flex items-center gap-2 border-2 border-white/40 text-white hover:bg-white/10 font-semibold px-8 py-3 rounded-lg transition-colors"
            >
              See Full Process <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-16 md:py-24 bg-neutral-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-xs font-semibold uppercase tracking-widest text-accent-500 mb-3 block">Results</span>
            <h2 className="text-3xl md:text-4xl font-bold text-brand-900 mb-4">Case Studies</h2>
            <p className="text-neutral-600 max-w-2xl mx-auto text-lg">
              Real outcomes from buyers who trusted us to manage their China sourcing.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {caseStudies.map((cs) => (
              <div key={cs.id} className="bg-white rounded-xl border border-neutral-200 overflow-hidden hover:shadow-md transition-shadow">
                <div className="aspect-[16/9] overflow-hidden">
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
                  <span className="text-xs font-semibold uppercase tracking-wide text-accent-500 mb-2 block">{cs.category}</span>
                  <h3 id={cs.titleId} className="font-semibold text-brand-900 mb-2 text-base leading-snug">{cs.title}</h3>
                  <p id={cs.descId} className="text-neutral-600 text-sm leading-relaxed mb-4">{cs.desc}</p>
                  <div className="flex items-center gap-2 bg-green-50 rounded-lg px-3 py-2">
                    <CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0" />
                    <span className="text-green-700 text-xs font-medium">{cs.result}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link to="/case-studies" className="inline-flex items-center gap-2 text-brand-600 hover:text-brand-700 font-semibold">
              View All Case Studies <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-xs font-semibold uppercase tracking-widest text-accent-500 mb-3 block">FAQ</span>
            <h2 className="text-3xl md:text-4xl font-bold text-brand-900 mb-4">Frequently Asked Questions</h2>
          </div>
          <div className="flex flex-col gap-4">
            {faqs.map((faq, i) => (
              <details key={i} className="group bg-neutral-50 border border-neutral-200 rounded-xl">
                <summary className="flex items-center justify-between gap-4 px-6 py-4 cursor-pointer list-none font-semibold text-brand-900">
                  {faq.q}
                  <ChevronDown className="w-5 h-5 text-neutral-400 flex-shrink-0 group-open:rotate-180 transition-transform" />
                </summary>
                <div className="px-6 pb-5 text-neutral-600 text-sm leading-relaxed border-t border-neutral-200 pt-4">
                  {faq.a}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="py-16 md:py-20 bg-accent-500">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Source from China with Confidence?
          </h2>
          <p className="text-amber-100 text-lg mb-8 max-w-2xl mx-auto">
            Tell us what you need and we'll send you a free sourcing plan within 24 hours.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 bg-white text-accent-600 hover:bg-amber-50 font-bold px-10 py-4 rounded-lg text-base transition-colors"
          >
            Get a Free Sourcing Quote
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  )
}
