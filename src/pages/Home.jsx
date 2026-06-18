import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import {
  Search, ShieldCheck, ClipboardCheck, Truck, Factory,
  CheckCircle, ArrowRight, Star, Globe, Users, Award, ChevronDown
} from 'lucide-react'

const services = [
  {
    icon: Search,
    title: 'Supplier Sourcing',
    desc: 'We identify and shortlist verified manufacturers that match your product specs, MOQ, and budget.',
    id: 'svc-sourcing',
  },
  {
    icon: Factory,
    title: 'Factory Verification',
    desc: 'On-site audits confirm production capacity, certifications, and working conditions before you commit.',
    id: 'svc-factory',
  },
  {
    icon: ClipboardCheck,
    title: 'Quality Inspection',
    desc: 'Pre-shipment and in-line inspections catch defects early, protecting your brand and reducing returns.',
    id: 'svc-qc',
  },
  {
    icon: ShieldCheck,
    title: 'Production Follow-up',
    desc: 'We monitor your order from sample approval through final production, keeping you informed at every stage.',
    id: 'svc-production',
  },
  {
    icon: Truck,
    title: 'Shipping & Logistics',
    desc: 'We coordinate sea, air, and express freight, handle customs documentation, and track your shipment.',
    id: 'svc-shipping',
  },
  {
    icon: Globe,
    title: 'Trade Compliance',
    desc: 'Guidance on import regulations, labeling requirements, and product certifications for your target market.',
    id: 'svc-compliance',
  },
]

const steps = [
  { num: '01', title: 'Submit Your Inquiry', desc: 'Tell us what you need — product type, specs, quantity, and target price.' },
  { num: '02', title: 'Supplier Research', desc: 'We search our vetted network and identify 3–5 qualified manufacturers.' },
  { num: '03', title: 'Factory Audit', desc: 'We visit shortlisted factories and verify their capabilities in person.' },
  { num: '04', title: 'Sample & Negotiation', desc: 'We arrange samples and negotiate pricing, MOQ, and lead times on your behalf.' },
  { num: '05', title: 'Production Monitoring', desc: 'We follow up during production and conduct quality inspections before shipment.' },
  { num: '06', title: 'Shipping & Delivery', desc: 'We coordinate freight, handle documentation, and ensure your goods arrive on time.' },
]

const problems = [
  { title: 'Unreliable Suppliers', desc: 'Factories that look good online but fail to deliver. We verify before you pay.' },
  { title: 'Quality Failures', desc: 'Goods that don\'t match samples. Our inspectors catch issues before shipment.' },
  { title: 'Communication Barriers', desc: 'Language gaps and time zones slow everything down. We bridge that gap daily.' },
  { title: 'Shipping Delays', desc: 'Missed deadlines and customs issues. We manage logistics end-to-end.' },
  { title: 'Hidden Costs', desc: 'Unexpected fees and price changes. We negotiate transparent terms upfront.' },
  { title: 'No Local Presence', desc: 'You can\'t visit factories yourself. Our team is on the ground in China.' },
]

const trustStats = [
  { value: '12+', label: 'Years in China Sourcing' },
  { value: '500+', label: 'Global Clients Served' },
  { value: '40+', label: 'Countries Reached' },
  { value: '98%', label: 'Client Satisfaction Rate' },
]

const caseStudies = [
  {
    id: 'cs-furniture',
    titleId: 'cs-furniture-title',
    descId: 'cs-furniture-desc',
    imgId: 'cs-furniture-img-a1b2c3',
    title: 'Furniture Importer — UK',
    desc: 'Solid wood furniture manufacturer audit and QC for a UK retailer. Reduced defect rate from 12% to under 1%.',
    tag: 'Quality Inspection',
  },
  {
    id: 'cs-electronics',
    titleId: 'cs-electronics-title',
    descId: 'cs-electronics-desc',
    imgId: 'cs-electronics-img-d4e5f6',
    title: 'Electronics Brand — USA',
    desc: 'Full sourcing and compliance support for a consumer electronics startup entering the US market.',
    tag: 'Full Sourcing',
  },
  {
    id: 'cs-apparel',
    titleId: 'cs-apparel-title',
    descId: 'cs-apparel-desc',
    imgId: 'cs-apparel-img-g7h8i9',
    title: 'Apparel Brand — Australia',
    desc: 'Factory verification and production follow-up for a private label clothing brand scaling to 10,000 units/month.',
    tag: 'Factory Audit',
  },
]

const faqs = [
  {
    q: 'How do you charge for your services?',
    a: 'We offer flexible fee structures: a flat project fee for sourcing assignments, or a percentage of order value for ongoing clients. We provide a clear quote before any work begins.',
  },
  {
    q: 'Do you work with small businesses and startups?',
    a: 'Yes. We work with buyers at all stages, from first-time importers to established brands. Our team adapts to your order size and budget.',
  },
  {
    q: 'How long does the sourcing process take?',
    a: 'A standard sourcing project takes 2–4 weeks from inquiry to shortlisted suppliers. Factory audits and sample rounds add 1–3 weeks depending on complexity.',
  },
  {
    q: 'Which product categories do you cover?',
    a: 'We source across electronics, furniture, apparel, home goods, industrial parts, packaging, and more. If it\'s made in China, we can source it.',
  },
  {
    q: 'Can you handle shipping to any country?',
    a: 'Yes. We coordinate sea freight, air freight, and express courier to all major markets including the US, EU, UK, Australia, and the Middle East.',
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
      <section className="relative text-white overflow-hidden" style={{background: 'linear-gradient(135deg, #0f3060 0%, #1a4f8a 50%, #0f3060 100%)'}}>
        <div className="absolute inset-0 opacity-10" style={{backgroundImage: 'radial-gradient(circle at 70% 50%, #2563eb 0%, transparent 60%)'}} />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-blue-800 text-blue-200 text-sm font-medium px-3 py-1.5 rounded-full mb-6">
              <Globe className="w-4 h-4" />
              <span>Trusted by buyers in 40+ countries</span>
            </div>
            <h1 id="hero-title" className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight mb-6">
              China Sourcing Agent<br />
              <span className="text-orange-400">for Global Buyers</span>
            </h1>
            <p id="hero-subtitle" className="text-lg md:text-xl text-blue-100 leading-relaxed mb-8 max-w-2xl">
              We find reliable Chinese manufacturers, verify factories, inspect quality, and coordinate shipping —
              so you can import with confidence and focus on growing your business.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 bg-orange-500 hover:bg-orange-600 text-white font-semibold px-8 py-4 rounded-lg text-lg transition-colors"
              >
                Get a Free Sourcing Quote
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                to="/how-it-works"
                className="inline-flex items-center justify-center gap-2 border-2 border-white/50 text-white hover:bg-white/10 font-semibold px-8 py-4 rounded-lg text-lg transition-colors"
              >
                How It Works
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Stats */}
      <section className="bg-orange-500 text-white py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {trustStats.map((stat) => (
              <div key={stat.label}>
                <div className="text-3xl md:text-4xl font-extrabold">{stat.value}</div>
                <div className="text-orange-100 text-sm mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="text-orange-500 font-semibold text-sm uppercase tracking-wider">What We Do</span>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mt-2 mb-4">
              End-to-End China Sourcing Services
            </h2>
            <p className="text-slate-600 max-w-2xl mx-auto">
              From finding the right factory to delivering goods to your door, we manage every step of the supply chain.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((svc) => {
              const Icon = svc.icon
              return (
                <div
                  key={svc.id}
                  className="bg-white border border-slate-200 rounded-xl p-6 hover:shadow-md hover:border-blue-200 transition-all group"
                >
                  <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center mb-4 group-hover:bg-blue-100 transition-colors">
                    <Icon className="w-6 h-6 text-blue-700" />
                  </div>
                  <h3 id={svc.id} className="text-lg font-semibold text-slate-900 mb-2">{svc.title}</h3>
                  <p className="text-slate-600 text-sm leading-relaxed">{svc.desc}</p>
                </div>
              )
            })}
          </div>
          <div className="text-center mt-10">
            <Link
              to="/services"
              className="inline-flex items-center gap-2 text-blue-700 font-semibold hover:text-blue-900 transition-colors"
            >
              View all services <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="text-orange-500 font-semibold text-sm uppercase tracking-wider">Our Process</span>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mt-2 mb-4">
              How We Source for You
            </h2>
            <p className="text-slate-600 max-w-2xl mx-auto">
              A structured, transparent process from your first inquiry to goods delivered at your warehouse.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {steps.map((step) => (
              <div key={step.num} className="bg-white rounded-xl p-6 border border-slate-200 relative">
                <div className="text-5xl font-extrabold text-blue-50 absolute top-4 right-6 select-none">
                  {step.num}
                </div>
                <div className="relative">
                  <div className="text-blue-700 font-bold text-sm mb-2">{step.num}</div>
                  <h3 className="text-lg font-semibold text-slate-900 mb-2">{step.title}</h3>
                  <p className="text-slate-600 text-sm leading-relaxed">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link
              to="/how-it-works"
              className="inline-flex items-center gap-2 bg-blue-800 hover:bg-blue-900 text-white font-semibold px-6 py-3 rounded-lg transition-colors"
            >
              See the full process <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Problems We Solve */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-orange-500 font-semibold text-sm uppercase tracking-wider">Why Use a Sourcing Agent</span>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mt-2 mb-4">
                Problems We Solve for Importers
              </h2>
              <p className="text-slate-600 mb-8">
                Sourcing from China without local support exposes you to real risks. Our team eliminates the most common pain points importers face.
              </p>
              <div className="space-y-4">
                {problems.map((p) => (
                  <div key={p.title} className="flex gap-3">
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <div>
                      <span className="font-semibold text-slate-900">{p.title}: </span>
                      <span className="text-slate-600 text-sm">{p.desc}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative rounded-2xl overflow-hidden aspect-[4/3]">
              <img
                id="problems-img"
                alt="Quality control inspection in Chinese factory"
                className="w-full h-full object-cover"
                data-strk-img-id="problems-factory-img-j1k2l3"
                data-strk-img="quality control inspection Chinese factory manufacturing"
                data-strk-img-ratio="4x3"
                data-strk-img-width="800"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="text-orange-500 font-semibold text-sm uppercase tracking-wider">Client Results</span>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mt-2 mb-4">
              Case Studies
            </h2>
            <p className="text-slate-600 max-w-2xl mx-auto">
              Real projects, real outcomes. See how we've helped global buyers source successfully from China.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {caseStudies.map((cs) => (
              <div key={cs.id} className="bg-white rounded-xl overflow-hidden border border-slate-200 hover:shadow-md transition-shadow">
                <div className="aspect-[3x2] overflow-hidden">
                  <img
                    alt={cs.title}
                    className="w-full h-48 object-cover"
                    data-strk-img-id={cs.imgId}
                    data-strk-img={`[${cs.descId}] [${cs.titleId}]`}
                    data-strk-img-ratio="3x2"
                    data-strk-img-width="600"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  />
                </div>
                <div className="p-6">
                  <span className="inline-block bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded-full mb-3">
                    {cs.tag}
                  </span>
                  <h3 id={cs.titleId} className="text-lg font-semibold text-slate-900 mb-2">{cs.title}</h3>
                  <p id={cs.descId} className="text-slate-600 text-sm leading-relaxed">{cs.desc}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link
              to="/case-studies"
              className="inline-flex items-center gap-2 text-blue-700 font-semibold hover:text-blue-900 transition-colors"
            >
              View all case studies <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="text-orange-500 font-semibold text-sm uppercase tracking-wider">FAQ</span>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mt-2 mb-4">
              Frequently Asked Questions
            </h2>
          </div>
          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <details key={i} className="group bg-slate-50 border border-slate-200 rounded-xl">
                <summary className="flex items-center justify-between p-5 cursor-pointer font-semibold text-slate-900 list-none">
                  {faq.q}
                  <ChevronDown className="w-5 h-5 text-slate-500 group-open:rotate-180 transition-transform flex-shrink-0 ml-4" />
                </summary>
                <div className="px-5 pb-5 text-slate-600 text-sm leading-relaxed border-t border-slate-200 pt-4">
                  {faq.a}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="py-20 bg-blue-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Source from China with Confidence?
          </h2>
          <p className="text-blue-200 text-lg mb-8 max-w-2xl mx-auto">
            Tell us what you need and we'll send you a free sourcing plan within 24 hours.
            No commitment required.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white font-semibold px-10 py-4 rounded-lg text-lg transition-colors"
          >
            Get a Free Sourcing Quote
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  )
}
