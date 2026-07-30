import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import {
  Search, ShieldCheck, ClipboardCheck, Truck, Factory, ArrowRight,
  CheckCircle, Star, Globe, Users, Award, ChevronDown, MessageSquare
} from 'lucide-react'

const services = [
  {
    icon: Search,
    title: 'Supplier Sourcing',
    desc: 'We identify and shortlist verified manufacturers that match your product specs, MOQ, and budget.',
    titleId: 'svc-sourcing-title',
    descId: 'svc-sourcing-desc',
    imgId: 'svc-sourcing-img-a1b2c3',
  },
  {
    icon: Factory,
    title: 'Factory Verification',
    desc: 'On-site audits covering production capacity, certifications, workforce, and compliance standards.',
    titleId: 'svc-factory-title',
    descId: 'svc-factory-desc',
    imgId: 'svc-factory-img-d4e5f6',
  },
  {
    icon: ClipboardCheck,
    title: 'Quality Inspection',
    desc: 'Pre-shipment and in-line inspections using AQL standards to catch defects before goods leave China.',
    titleId: 'svc-qc-title',
    descId: 'svc-qc-desc',
    imgId: 'svc-qc-img-g7h8i9',
  },
  {
    icon: ShieldCheck,
    title: 'Production Follow-up',
    desc: 'We monitor your order at every production stage and report progress so you stay in control.',
    titleId: 'svc-prod-title',
    descId: 'svc-prod-desc',
    imgId: 'svc-prod-img-j1k2l3',
  },
  {
    icon: Truck,
    title: 'Shipping Coordination',
    desc: 'We coordinate with freight forwarders, handle export documentation, and track your shipment.',
    titleId: 'svc-ship-title',
    descId: 'svc-ship-desc',
    imgId: 'svc-ship-img-m4n5o6',
  },
  {
    icon: Globe,
    title: 'Sample Procurement',
    desc: 'We source and ship product samples from multiple suppliers so you can evaluate before committing.',
    titleId: 'svc-sample-title',
    descId: 'svc-sample-desc',
    imgId: 'svc-sample-img-p7q8r9',
  },
]

const processSteps = [
  { step: '01', title: 'Submit Your Inquiry', desc: 'Tell us what you need — product type, specs, quantity, and target price.' },
  { step: '02', title: 'Supplier Research', desc: 'We search our vetted network and identify 3–5 qualified manufacturers.' },
  { step: '03', title: 'Factory Audit', desc: 'We visit shortlisted factories and verify their capabilities and compliance.' },
  { step: '04', title: 'Sampling & Approval', desc: 'Samples are sourced, inspected, and shipped to you for approval.' },
  { step: '05', title: 'Production & QC', desc: 'We monitor production and conduct quality inspections at key milestones.' },
  { step: '06', title: 'Shipping & Delivery', desc: 'We coordinate logistics, handle documentation, and track your shipment.' },
]

const problems = [
  { title: 'Unreliable Suppliers', desc: 'You\'ve been burned by suppliers who overpromise and underdeliver. We verify factories before you commit.' },
  { title: 'Quality Surprises', desc: 'Goods arrive damaged or off-spec. Our pre-shipment inspections catch issues before they leave China.' },
  { title: 'Communication Barriers', desc: 'Language and time zone gaps slow everything down. We act as your local representative on the ground.' },
  { title: 'Shipping Delays', desc: 'Missed deadlines cost money. We coordinate logistics and keep your supply chain on schedule.' },
  { title: 'No Local Presence', desc: 'You can\'t visit factories yourself. We are your eyes and ears in China, every step of the way.' },
  { title: 'Fraud & Scams', desc: 'Fake factories and advance payment fraud are real risks. Our verification process protects your investment.' },
]

const trustPoints = [
  { value: '500+', label: 'Sourcing Projects Completed' },
  { value: '12+', label: 'Years in China Sourcing' },
  { value: '30+', label: 'Countries Served' },
  { value: '98%', label: 'Client Satisfaction Rate' },
]

const faqs = [
  {
    q: 'How much does your sourcing service cost?',
    a: 'Our fees depend on the scope of work. We offer a free initial consultation and quote. Typical fees range from a flat project fee to a percentage of order value, depending on services required.',
  },
  {
    q: 'How long does it take to find a supplier?',
    a: 'For standard products, we typically present qualified supplier options within 5–10 business days. Complex or highly customized products may take 2–3 weeks.',
  },
  {
    q: 'Do you work with small businesses and startups?',
    a: 'Yes. We work with businesses of all sizes, from startups placing their first order to established importers managing multiple product lines.',
  },
  {
    q: 'What industries do you cover?',
    a: 'We source across a wide range of categories including electronics, furniture, clothing, machinery, toys, health products, and more. See our Products page for the full list.',
  },
  {
    q: 'Can you handle the full process from sourcing to delivery?',
    a: 'Yes. We offer end-to-end sourcing management — from finding suppliers and auditing factories to quality inspection and shipping coordination.',
  },
  {
    q: 'How do I get started?',
    a: 'Simply fill out our inquiry form with your product requirements. We\'ll review your request and respond within 24 hours with a tailored plan.',
  },
]

const caseStudies = [
  {
    id: 'cs-furniture',
    client: 'UK Furniture Retailer',
    product: 'Solid Wood Dining Sets',
    result: 'Reduced unit cost by 22% and eliminated quality rejections after switching to our verified supplier.',
    titleId: 'cs-furniture-title',
    descId: 'cs-furniture-desc',
    imgId: 'cs-furniture-img-s1t2u3',
  },
  {
    id: 'cs-electronics',
    client: 'US Electronics Brand',
    product: 'Wireless Earbuds',
    result: 'Launched a new SKU in 90 days with full CE/FCC certification support and zero customs issues.',
    titleId: 'cs-electronics-title',
    descId: 'cs-electronics-desc',
    imgId: 'cs-electronics-img-v4w5x6',
  },
  {
    id: 'cs-apparel',
    client: 'Australian Apparel Brand',
    product: 'Activewear Collection',
    result: 'Sourced 3 compliant factories, managed sampling rounds, and delivered on time for a seasonal launch.',
    titleId: 'cs-apparel-title',
    descId: 'cs-apparel-desc',
    imgId: 'cs-apparel-img-y7z8a9',
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
      <section className="relative bg-navy overflow-hidden">
        <div
          className="absolute inset-0 opacity-20"
          data-strk-bg-id="hero-bg-main-b1c2d3"
          data-strk-bg="[hero-subtitle] [hero-title]"
          data-strk-bg-ratio="16x9"
          data-strk-bg-width="1600"
        />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28 lg:py-32">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-white/10 text-white/80 text-xs font-medium px-3 py-1.5 rounded-full mb-6 border border-white/20">
              <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
              China-Based Sourcing Agent — Shenzhen & Yiwu
            </div>
            <h1 id="hero-title" className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
              China Sourcing Agent<br />
              <span className="text-red-china">for Global Buyers</span>
            </h1>
            <p id="hero-subtitle" className="text-lg md:text-xl text-slate-300 leading-relaxed mb-8 max-w-2xl">
              We help overseas businesses find reliable Chinese suppliers, verify factories, inspect quality, and coordinate shipping — so you can import with confidence.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 bg-red-china text-white px-7 py-3.5 rounded-md font-semibold text-base hover:bg-red-china-600 transition-colors"
              >
                Get a Free Sourcing Quote
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                to="/how-it-works"
                className="inline-flex items-center justify-center gap-2 border-2 border-white/30 text-white px-7 py-3.5 rounded-md font-semibold text-base hover:bg-white/10 transition-colors"
              >
                How It Works
              </Link>
            </div>
            <div className="flex flex-wrap gap-6 mt-10">
              {trustPoints.map((tp) => (
                <div key={tp.label} className="text-center">
                  <div className="text-2xl font-bold text-white">{tp.value}</div>
                  <div className="text-xs text-slate-400 mt-0.5">{tp.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-red-china text-sm font-semibold uppercase tracking-wider">What We Do</span>
            <h2 className="text-3xl md:text-4xl font-bold text-navy mt-2 mb-4">End-to-End Sourcing Services</h2>
            <p className="text-slate-600 max-w-2xl mx-auto">
              From finding the right factory to getting goods to your door, we manage every step of the China sourcing process.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((svc) => {
              const Icon = svc.icon
              return (
                <div key={svc.title} className="bg-white border border-slate-200 rounded-xl p-6 hover:shadow-md hover:border-red-china/30 transition-all group">
                  <div className="w-11 h-11 bg-red-china/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-red-china/20 transition-colors">
                    <Icon className="w-5 h-5 text-red-china" />
                  </div>
                  <h3 id={svc.titleId} className="text-navy font-semibold text-lg mb-2">{svc.title}</h3>
                  <p id={svc.descId} className="text-slate-600 text-sm leading-relaxed">{svc.desc}</p>
                </div>
              )
            })}
          </div>
          <div className="text-center mt-10">
            <Link to="/services" className="inline-flex items-center gap-2 text-red-china font-semibold hover:underline">
              View All Services <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Problems We Solve */}
      <section className="py-16 md:py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-red-china text-sm font-semibold uppercase tracking-wider">Why Buyers Choose Us</span>
            <h2 className="text-3xl md:text-4xl font-bold text-navy mt-2 mb-4">Problems We Solve</h2>
            <p className="text-slate-600 max-w-2xl mx-auto">
              Sourcing from China comes with real risks. Here's how we help you avoid the most common pitfalls.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {problems.map((p) => (
              <div key={p.title} className="bg-white rounded-xl p-6 border border-slate-200">
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                  <div>
                    <h3 className="text-navy font-semibold mb-1">{p.title}</h3>
                    <p className="text-slate-600 text-sm leading-relaxed">{p.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sourcing Process */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-red-china text-sm font-semibold uppercase tracking-wider">Our Process</span>
            <h2 className="text-3xl md:text-4xl font-bold text-navy mt-2 mb-4">How We Work</h2>
            <p className="text-slate-600 max-w-2xl mx-auto">
              A structured, transparent process from your first inquiry to final delivery.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {processSteps.map((step) => (
              <div key={step.step} className="relative">
                <div className="bg-slate-50 rounded-xl p-6 border border-slate-200 h-full">
                  <div className="text-4xl font-bold text-red-china/20 mb-3">{step.step}</div>
                  <h3 className="text-navy font-semibold text-lg mb-2">{step.title}</h3>
                  <p className="text-slate-600 text-sm leading-relaxed">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link to="/how-it-works" className="inline-flex items-center gap-2 bg-navy text-white px-6 py-3 rounded-md font-semibold hover:bg-navy-600 transition-colors">
              See Full Process <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-16 md:py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-red-china text-sm font-semibold uppercase tracking-wider">Client Results</span>
            <h2 className="text-3xl md:text-4xl font-bold text-navy mt-2 mb-4">Case Studies</h2>
            <p className="text-slate-600 max-w-2xl mx-auto">
              Real results from real clients. Here's how we've helped global buyers source successfully from China.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {caseStudies.map((cs) => (
              <div key={cs.id} className="bg-white rounded-xl overflow-hidden border border-slate-200 hover:shadow-md transition-shadow">
                <div className="aspect-video overflow-hidden bg-slate-100">
                  <img
                    alt={cs.product}
                    data-strk-img-id={cs.imgId}
                    data-strk-img={`[${cs.descId}] [${cs.titleId}]`}
                    data-strk-img-ratio="16x9"
                    data-strk-img-width="600"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <span className="text-xs font-medium text-red-china bg-red-china/10 px-2 py-1 rounded-full">{cs.client}</span>
                  <h3 id={cs.titleId} className="text-navy font-semibold text-lg mt-3 mb-2">{cs.product}</h3>
                  <p id={cs.descId} className="text-slate-600 text-sm leading-relaxed">{cs.result}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link to="/case-studies" className="inline-flex items-center gap-2 text-red-china font-semibold hover:underline">
              View All Case Studies <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Trust Banner */}
      <section className="py-14 bg-navy">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {trustPoints.map((tp) => (
              <div key={tp.label}>
                <div className="text-3xl md:text-4xl font-bold text-white mb-1">{tp.value}</div>
                <div className="text-slate-400 text-sm">{tp.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-red-china text-sm font-semibold uppercase tracking-wider">FAQ</span>
            <h2 className="text-3xl md:text-4xl font-bold text-navy mt-2 mb-4">Frequently Asked Questions</h2>
          </div>
          <div className="flex flex-col gap-4">
            {faqs.map((faq, i) => (
              <details key={i} className="group bg-slate-50 border border-slate-200 rounded-xl">
                <summary className="flex items-center justify-between p-5 cursor-pointer list-none">
                  <span className="text-navy font-semibold text-sm md:text-base pr-4">{faq.q}</span>
                  <ChevronDown className="w-5 h-5 text-slate-400 flex-shrink-0 group-open:rotate-180 transition-transform" />
                </summary>
                <div className="px-5 pb-5">
                  <p className="text-slate-600 text-sm leading-relaxed">{faq.a}</p>
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="py-16 md:py-20 bg-red-china">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <MessageSquare className="w-10 h-10 text-white/60 mx-auto mb-4" />
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Source from China?
          </h2>
          <p className="text-white/80 text-lg mb-8 max-w-xl mx-auto">
            Tell us what you need. We'll respond within 24 hours with a tailored sourcing plan and a free quote.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 bg-white text-red-china px-8 py-4 rounded-md font-bold text-base hover:bg-slate-100 transition-colors"
          >
            Get a Free Sourcing Quote
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  )
}
