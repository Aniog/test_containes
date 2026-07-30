import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import {
  Search, ShieldCheck, ClipboardCheck, Truck, Factory, Star,
  CheckCircle, ArrowRight, Globe, Users, Package, TrendingUp,
  ChevronDown, MessageSquare, Award, Clock
} from 'lucide-react'
import CTAButton from '@/components/shared/CTAButton'
import SectionHeader from '@/components/shared/SectionHeader'

const services = [
  {
    icon: Search,
    title: 'Supplier Sourcing',
    desc: 'We identify and shortlist verified Chinese manufacturers that match your product specs, quality standards, and budget.',
    imgId: 'svc-sourcing-a1b2c3',
    titleId: 'svc-sourcing-title',
    descId: 'svc-sourcing-desc',
  },
  {
    icon: Factory,
    title: 'Factory Verification',
    desc: 'On-site audits confirm factory capacity, certifications, working conditions, and production capabilities before you commit.',
    imgId: 'svc-factory-d4e5f6',
    titleId: 'svc-factory-title',
    descId: 'svc-factory-desc',
  },
  {
    icon: ClipboardCheck,
    title: 'Quality Inspection',
    desc: 'Pre-shipment and in-line inspections catch defects early. Detailed reports with photos delivered within 24 hours.',
    imgId: 'svc-qc-g7h8i9',
    titleId: 'svc-qc-title',
    descId: 'svc-qc-desc',
  },
  {
    icon: TrendingUp,
    title: 'Production Follow-up',
    desc: 'We monitor your order from raw materials to finished goods, keeping you updated at every production milestone.',
    imgId: 'svc-prod-j1k2l3',
    titleId: 'svc-prod-title',
    descId: 'svc-prod-desc',
  },
  {
    icon: Truck,
    title: 'Shipping Coordination',
    desc: 'We handle freight booking, customs documentation, and delivery tracking so your goods arrive on time.',
    imgId: 'svc-ship-m4n5o6',
    titleId: 'svc-ship-title',
    descId: 'svc-ship-desc',
  },
  {
    icon: Package,
    title: 'Private Label / OEM',
    desc: 'From product design to branded packaging, we coordinate OEM and private label production with trusted factories.',
    imgId: 'svc-oem-p7q8r9',
    titleId: 'svc-oem-title',
    descId: 'svc-oem-desc',
  },
]

const steps = [
  { num: '01', title: 'Submit Your Inquiry', desc: 'Tell us what you need — product type, quantity, target price, and any specific requirements.' },
  { num: '02', title: 'Sourcing & Shortlisting', desc: 'We research the market, contact suppliers, and present you with 3–5 verified options within 5 business days.' },
  { num: '03', title: 'Factory Audit & Samples', desc: 'We visit shortlisted factories, verify credentials, and arrange product samples for your approval.' },
  { num: '04', title: 'Order & Production', desc: 'Once you confirm, we place the order, monitor production, and send regular progress updates.' },
  { num: '05', title: 'Inspection & Shipping', desc: 'Pre-shipment inspection is conducted. We coordinate freight and send you tracking details.' },
]

const problems = [
  { title: 'Unreliable Suppliers', desc: 'Factories that disappear after payment or deliver substandard goods are a real risk. We vet every supplier before recommending them.' },
  { title: 'Quality Failures', desc: 'Receiving defective products after months of waiting is costly. Our inspection process catches issues before goods leave China.' },
  { title: 'Communication Barriers', desc: 'Language and time zone differences slow everything down. We act as your local representative, available on the ground.' },
  { title: 'Shipping Delays', desc: 'Missed deadlines hurt your business. We track production timelines and coordinate logistics to keep your supply chain on schedule.' },
  { title: 'Hidden Costs', desc: 'Unexpected fees erode margins. We provide transparent cost breakdowns including factory price, inspection, freight, and duties.' },
  { title: 'Minimum Order Quantities', desc: 'Many factories have high MOQs. We negotiate on your behalf and can consolidate orders to reduce your initial investment.' },
]

const trustPoints = [
  { icon: Globe, value: '40+', label: 'Countries Served' },
  { icon: Factory, value: '500+', label: 'Factories Audited' },
  { icon: Package, value: '1,200+', label: 'Orders Managed' },
  { icon: Star, value: '98%', label: 'Client Satisfaction' },
]

const caseStudies = [
  {
    id: 'cs-furniture',
    category: 'Furniture',
    title: 'UK Retailer Cuts Sourcing Costs by 28%',
    desc: 'A UK home goods retailer needed a reliable sofa manufacturer. We audited 12 factories, negotiated pricing, and managed 3 production runs.',
    result: '28% cost reduction, zero defects on 3 shipments',
    imgId: 'cs-furniture-s1t2u3',
    titleId: 'cs-furniture-title',
    descId: 'cs-furniture-desc',
  },
  {
    id: 'cs-electronics',
    category: 'Electronics',
    title: 'US Brand Launches Private Label Earbuds',
    desc: 'An American startup needed OEM earbuds with custom branding. We sourced the factory, managed tooling, and coordinated FCC certification.',
    result: 'Product launched in 14 weeks, on budget',
    imgId: 'cs-electronics-v4w5x6',
    titleId: 'cs-electronics-title',
    descId: 'cs-electronics-desc',
  },
  {
    id: 'cs-apparel',
    category: 'Apparel',
    title: 'Australian Brand Scales Clothing Production',
    desc: 'A growing Australian fashion brand needed to scale from 500 to 5,000 units per style. We found a factory with the right capacity and quality standards.',
    result: '10x production scale, consistent quality across 8 styles',
    imgId: 'cs-apparel-y7z8a9',
    titleId: 'cs-apparel-title',
    descId: 'cs-apparel-desc',
  },
]

const faqs = [
  { q: 'How much does your sourcing service cost?', a: 'We charge a service fee based on the scope of work — typically a flat project fee or a percentage of the order value. We provide a clear quote before starting. There are no hidden charges.' },
  { q: 'How long does it take to find a supplier?', a: 'For standard products, we typically present shortlisted suppliers within 5–7 business days. Complex or custom products may take 10–14 days.' },
  { q: 'Do you work with small orders?', a: 'Yes. We work with buyers at various stages, from first-time importers to established brands. We can advise on realistic MOQs and help negotiate with factories.' },
  { q: 'Can you inspect goods before shipment?', a: 'Yes. Pre-shipment inspection is one of our core services. We check product quality, quantity, packaging, and labeling against your specifications.' },
  { q: 'Which industries do you cover?', a: 'We source across most product categories including electronics, furniture, apparel, machinery, toys, health products, and more. Contact us to discuss your specific needs.' },
  { q: 'How do I pay the factory?', a: 'You pay the factory directly. We help you structure payment terms (e.g., 30% deposit, 70% before shipment) and advise on secure payment methods.' },
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
      <section className="relative bg-brand-900 overflow-hidden">
        <div
          className="absolute inset-0 opacity-20"
          data-strk-bg-id="hero-bg-main-3f4g5h"
          data-strk-bg="[hero-subtitle] [hero-title]"
          data-strk-bg-ratio="16x9"
          data-strk-bg-width="1600"
        />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
          <div className="max-w-3xl">
            <span className="inline-block bg-accent-500 text-white text-xs font-semibold uppercase tracking-widest px-3 py-1 rounded-full mb-6">
              China Sourcing Agent
            </span>
            <h1 id="hero-title" className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
              China Sourcing Agent<br />for Global Buyers
            </h1>
            <p id="hero-subtitle" className="text-lg md:text-xl text-neutral-300 leading-relaxed mb-8 max-w-2xl">
              We help importers and brands find reliable Chinese suppliers, verify factories, inspect quality, and coordinate shipping — so you can focus on growing your business.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <CTAButton to="/contact" size="lg" showArrow>
                Get a Free Sourcing Quote
              </CTAButton>
              <CTAButton to="/how-it-works" variant="white" size="lg">
                See How It Works
              </CTAButton>
            </div>
            <div className="mt-10 flex flex-wrap gap-6">
              {['No upfront commitment', 'Response within 24 hours', 'On-the-ground in China'].map((item) => (
                <div key={item} className="flex items-center gap-2 text-neutral-300 text-sm">
                  <CheckCircle className="w-4 h-4 text-accent-400 flex-shrink-0" />
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Trust bar */}
      <section className="bg-white border-b border-neutral-200 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {trustPoints.map(({ icon: Icon, value, label }) => (
              <div key={label} className="flex flex-col items-center gap-1">
                <Icon className="w-6 h-6 text-brand-600 mb-1" />
                <span className="text-2xl font-bold text-neutral-900">{value}</span>
                <span className="text-sm text-neutral-500">{label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-20 bg-neutral-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="Our Services"
            title="Everything You Need to Source from China"
            subtitle="From finding the right factory to delivering goods to your door, we manage the entire sourcing process on your behalf."
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map(({ icon: Icon, title, desc, imgId, titleId, descId }) => (
              <div key={title} className="bg-white rounded-xl border border-neutral-200 overflow-hidden hover:shadow-md transition-shadow group">
                <div className="h-44 overflow-hidden bg-neutral-100">
                  <img
                    data-strk-img-id={imgId}
                    data-strk-img={`[${descId}] [${titleId}]`}
                    data-strk-img-ratio="16x9"
                    data-strk-img-width="600"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    alt={title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <div className="w-10 h-10 bg-brand-50 rounded-lg flex items-center justify-center mb-3">
                    <Icon className="w-5 h-5 text-brand-700" />
                  </div>
                  <h3 id={titleId} className="text-lg font-semibold text-neutral-900 mb-2">{title}</h3>
                  <p id={descId} className="text-sm text-neutral-600 leading-relaxed">{desc}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <CTAButton to="/services" variant="secondary" showArrow>
              View All Services
            </CTAButton>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="Our Process"
            title="How We Source for You"
            subtitle="A clear, structured process that keeps you informed and in control at every stage."
          />
          <div className="relative">
            <div className="hidden md:block absolute top-8 left-0 right-0 h-0.5 bg-neutral-200 mx-16" />
            <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
              {steps.map((step, i) => (
                <div key={step.num} className="relative flex flex-col items-center text-center">
                  <div className="w-16 h-16 rounded-full bg-brand-700 text-white flex items-center justify-center font-bold text-lg mb-4 relative z-10 flex-shrink-0">
                    {step.num}
                  </div>
                  <h4 className="font-semibold text-neutral-900 mb-2 text-sm">{step.title}</h4>
                  <p className="text-xs text-neutral-500 leading-relaxed">{step.desc}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="text-center mt-12">
            <CTAButton to="/how-it-works" variant="secondary" showArrow>
              Learn More About Our Process
            </CTAButton>
          </div>
        </div>
      </section>

      {/* Problems We Solve */}
      <section className="py-20 bg-brand-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="Why Work With Us"
            title="Common Sourcing Problems We Solve"
            subtitle="Importing from China comes with real risks. Here's how we protect your business."
            light
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {problems.map(({ title, desc }) => (
              <div key={title} className="bg-white/10 border border-white/20 rounded-xl p-6 hover:bg-white/15 transition-colors">
                <div className="w-8 h-8 bg-accent-500 rounded-lg flex items-center justify-center mb-3">
                  <CheckCircle className="w-4 h-4 text-white" />
                </div>
                <h3 className="font-semibold text-white mb-2">{title}</h3>
                <p className="text-sm text-neutral-300 leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-20 bg-neutral-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="Case Studies"
            title="Real Results for Real Buyers"
            subtitle="See how we've helped businesses like yours source successfully from China."
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {caseStudies.map(({ id, category, title, desc, result, imgId, titleId, descId }) => (
              <div key={id} className="bg-white rounded-xl border border-neutral-200 overflow-hidden hover:shadow-md transition-shadow">
                <div className="h-48 overflow-hidden bg-neutral-100">
                  <img
                    data-strk-img-id={imgId}
                    data-strk-img={`[${descId}] [${titleId}]`}
                    data-strk-img-ratio="3x2"
                    data-strk-img-width="600"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    alt={title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <span className="text-xs font-semibold uppercase tracking-wide text-brand-600 bg-brand-50 px-2 py-1 rounded">{category}</span>
                  <h3 id={titleId} className="font-semibold text-neutral-900 mt-3 mb-2">{title}</h3>
                  <p id={descId} className="text-sm text-neutral-600 leading-relaxed mb-4">{desc}</p>
                  <div className="flex items-start gap-2 bg-neutral-50 rounded-lg p-3">
                    <TrendingUp className="w-4 h-4 text-accent-500 flex-shrink-0 mt-0.5" />
                    <span className="text-xs font-medium text-neutral-700">{result}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <CTAButton to="/case-studies" variant="secondary" showArrow>
              View All Case Studies
            </CTAButton>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="FAQ"
            title="Frequently Asked Questions"
            subtitle="Answers to the most common questions from buyers new to sourcing from China."
          />
          <div className="flex flex-col gap-4">
            {faqs.map(({ q, a }) => (
              <details key={q} className="group border border-neutral-200 rounded-xl overflow-hidden">
                <summary className="flex items-center justify-between p-5 cursor-pointer list-none hover:bg-neutral-50 transition-colors">
                  <span className="font-semibold text-neutral-900 pr-4">{q}</span>
                  <ChevronDown className="w-5 h-5 text-neutral-400 flex-shrink-0 group-open:rotate-180 transition-transform" />
                </summary>
                <div className="px-5 pb-5 text-neutral-600 text-sm leading-relaxed border-t border-neutral-100 pt-4">
                  {a}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="py-20 bg-brand-700">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Source from China?
          </h2>
          <p className="text-lg text-brand-200 mb-8 leading-relaxed">
            Tell us what you need. We'll respond within 24 hours with a tailored sourcing plan — no obligation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <CTAButton to="/contact" variant="white" size="lg" showArrow>
              Get a Free Sourcing Quote
            </CTAButton>
            <CTAButton to="/services" variant="secondary" size="lg" className="border-white text-white hover:bg-white/10">
              Explore Our Services
            </CTAButton>
          </div>
        </div>
      </section>
    </div>
  )
}
