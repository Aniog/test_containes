import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import {
  Search, ShieldCheck, ClipboardCheck, Truck, Factory, CheckCircle2,
  Users, Globe, Award, ArrowRight, Package, AlertTriangle, Clock,
  DollarSign, HelpCircle, ChevronDown
} from 'lucide-react'
import { useState } from 'react'

function HeroSection() {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <section ref={containerRef} className="relative bg-brand-navy overflow-hidden">
      <div
        className="absolute inset-0 opacity-20"
        data-strk-bg-id="hero-bg-9f3a2c"
        data-strk-bg="[hero-subtitle] [hero-title]"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1600"
      />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32">
        <div className="max-w-3xl">
          <p className="text-brand-blue font-semibold text-sm uppercase tracking-wider mb-4">
            Trusted China Sourcing Partner
          </p>
          <h1 id="hero-title" className="text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-tight leading-tight mb-6">
            China Sourcing Agent for Global Buyers
          </h1>
          <p id="hero-subtitle" className="text-lg md:text-xl text-slate-300 leading-relaxed mb-8 max-w-2xl">
            We help overseas businesses find reliable Chinese suppliers, verify factories, inspect quality, follow production, and coordinate shipping — so you can buy with confidence.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center bg-brand-blue text-white px-8 py-4 rounded-lg text-base font-semibold hover:bg-blue-700 transition no-underline"
            >
              Get a Free Sourcing Quote
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
            <Link
              to="/how-it-works"
              className="inline-flex items-center justify-center border-2 border-slate-400 text-white px-8 py-4 rounded-lg text-base font-semibold hover:border-white transition no-underline"
            >
              See How It Works
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

function TrustBar() {
  const stats = [
    { value: '500+', label: 'Projects Completed' },
    { value: '200+', label: 'Verified Factories' },
    { value: '30+', label: 'Countries Served' },
    { value: '10+', label: 'Years Experience' },
  ]

  return (
    <section className="bg-white border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {stats.map((stat) => (
            <div key={stat.label}>
              <p className="text-2xl md:text-3xl font-bold text-brand-navy">{stat.value}</p>
              <p className="text-sm text-slate-500 mt-1">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function ServicesSection() {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  const services = [
    {
      id: 'supplier-sourcing',
      icon: Search,
      title: 'Supplier Sourcing',
      desc: 'We identify and shortlist qualified manufacturers based on your product specs, MOQ, and budget requirements.',
      imgId: 'svc-sourcing-4b2e1a',
    },
    {
      id: 'factory-verification',
      icon: ShieldCheck,
      title: 'Factory Verification',
      desc: 'On-site factory audits to verify production capacity, certifications, equipment, and business legitimacy.',
      imgId: 'svc-verify-7c3d2f',
    },
    {
      id: 'quality-inspection',
      icon: ClipboardCheck,
      title: 'Quality Inspection',
      desc: 'Pre-shipment, during-production, and container loading inspections with detailed photo reports.',
      imgId: 'svc-qc-8e4f3a',
    },
    {
      id: 'production-followup',
      icon: Factory,
      title: 'Production Follow-up',
      desc: 'Regular factory visits and progress updates to keep your order on schedule and within spec.',
      imgId: 'svc-production-2a5b6c',
    },
    {
      id: 'shipping-coordination',
      icon: Truck,
      title: 'Shipping & Logistics',
      desc: 'End-to-end freight coordination including customs documentation, consolidation, and door-to-door delivery.',
      imgId: 'svc-shipping-9d7e8f',
    },
    {
      id: 'negotiation',
      icon: DollarSign,
      title: 'Price Negotiation',
      desc: 'Leverage our local market knowledge to negotiate better pricing, payment terms, and MOQ reductions.',
      imgId: 'svc-negotiate-1f2a3b',
    },
  ]

  return (
    <section ref={containerRef} className="py-16 md:py-24 bg-brand-gray">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 id="services-title" className="text-3xl md:text-4xl font-bold text-brand-navy tracking-tight">
            Our Sourcing Services
          </h2>
          <p id="services-subtitle" className="mt-4 text-lg text-slate-600 max-w-2xl mx-auto">
            From finding the right supplier to delivering goods at your door — we cover every step of the China sourcing process.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => {
            const Icon = service.icon
            return (
              <div key={service.id} className="bg-white rounded-xl shadow-sm border border-slate-100 p-6 hover:shadow-md transition">
                <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center mb-4">
                  <Icon className="w-6 h-6 text-brand-blue" />
                </div>
                <h3 id={`svc-${service.id}-title`} className="text-lg font-semibold text-brand-navy mb-2">
                  {service.title}
                </h3>
                <p id={`svc-${service.id}-desc`} className="text-sm text-slate-600 leading-relaxed">
                  {service.desc}
                </p>
              </div>
            )
          })}
        </div>

        <div className="text-center mt-10">
          <Link
            to="/services"
            className="inline-flex items-center text-brand-blue font-semibold hover:underline no-underline"
          >
            View All Services <ArrowRight className="w-4 h-4 ml-1" />
          </Link>
        </div>
      </div>
    </section>
  )
}

function ProcessSection() {
  const steps = [
    { num: '01', title: 'Share Your Requirements', desc: 'Tell us what you need — product specs, target price, quantity, and timeline.' },
    { num: '02', title: 'We Find Suppliers', desc: 'Our team identifies and vets potential factories based on your criteria.' },
    { num: '03', title: 'Verify & Sample', desc: 'We audit shortlisted factories and arrange product samples for your approval.' },
    { num: '04', title: 'Place Order & Monitor', desc: 'Once approved, we place the order and monitor production progress.' },
    { num: '05', title: 'Inspect & Ship', desc: 'Final quality inspection before shipping, then we coordinate logistics to your door.' },
  ]

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-brand-navy tracking-tight">
            How Our Sourcing Process Works
          </h2>
          <p className="mt-4 text-lg text-slate-600 max-w-2xl mx-auto">
            A clear, structured approach to sourcing from China — no guesswork, no surprises.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
          {steps.map((step, idx) => (
            <div key={step.num} className="text-center relative">
              <div className="w-14 h-14 bg-brand-blue text-white rounded-full flex items-center justify-center mx-auto mb-4 text-lg font-bold">
                {step.num}
              </div>
              {idx < steps.length - 1 && (
                <div className="hidden md:block absolute top-7 left-[60%] w-[80%] h-0.5 bg-slate-200" />
              )}
              <h3 className="text-base font-semibold text-brand-navy mb-2">{step.title}</h3>
              <p className="text-sm text-slate-600">{step.desc}</p>
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <Link
            to="/how-it-works"
            className="inline-flex items-center text-brand-blue font-semibold hover:underline no-underline"
          >
            Learn More About Our Process <ArrowRight className="w-4 h-4 ml-1" />
          </Link>
        </div>
      </div>
    </section>
  )
}

function ProductsSection() {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  const categories = [
    { id: 'electronics', title: 'Electronics & Components', imgId: 'prod-elec-3a4b5c' },
    { id: 'textiles', title: 'Textiles & Apparel', imgId: 'prod-text-6d7e8f' },
    { id: 'furniture', title: 'Furniture & Home Goods', imgId: 'prod-furn-9a1b2c' },
    { id: 'machinery', title: 'Machinery & Equipment', imgId: 'prod-mach-4d5e6f' },
    { id: 'packaging', title: 'Packaging & Printing', imgId: 'prod-pack-7g8h9i' },
    { id: 'auto-parts', title: 'Auto Parts & Accessories', imgId: 'prod-auto-1j2k3l' },
  ]

  return (
    <section ref={containerRef} className="py-16 md:py-24 bg-brand-gray">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 id="products-section-title" className="text-3xl md:text-4xl font-bold text-brand-navy tracking-tight">
            Products We Source
          </h2>
          <p id="products-section-subtitle" className="mt-4 text-lg text-slate-600 max-w-2xl mx-auto">
            We source across a wide range of industries. If it's made in China, we can help you find it.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
          {categories.map((cat) => (
            <div key={cat.id} className="relative rounded-xl overflow-hidden group cursor-pointer h-48 md:h-56">
              <img
                data-strk-img-id={cat.imgId}
                data-strk-img={`[prod-${cat.id}-title] [products-section-title]`}
                data-strk-img-ratio="3x2"
                data-strk-img-width="600"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                alt={cat.title}
                className="w-full h-full object-cover group-hover:scale-105 transition duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-4">
                <h3 id={`prod-${cat.id}-title`} className="text-white font-semibold text-sm md:text-base">
                  {cat.title}
                </h3>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <Link
            to="/products"
            className="inline-flex items-center text-brand-blue font-semibold hover:underline no-underline"
          >
            See All Product Categories <ArrowRight className="w-4 h-4 ml-1" />
          </Link>
        </div>
      </div>
    </section>
  )
}

function ProblemsSection() {
  const problems = [
    { icon: AlertTriangle, title: 'Unreliable Suppliers', desc: 'Tired of suppliers who disappear after payment or deliver substandard goods? We vet every factory before you commit.' },
    { icon: ClipboardCheck, title: 'Quality Issues', desc: 'Receiving defective products costs time and money. Our inspections catch problems before goods leave China.' },
    { icon: Clock, title: 'Production Delays', desc: 'Missed deadlines hurt your business. We monitor production schedules and flag delays early.' },
    { icon: Globe, title: 'Communication Barriers', desc: 'Language and timezone gaps cause misunderstandings. We bridge the gap with bilingual project management.' },
  ]

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-brand-navy tracking-tight">
            Problems We Solve
          </h2>
          <p className="mt-4 text-lg text-slate-600 max-w-2xl mx-auto">
            Sourcing from China comes with real risks. Here's how we protect your business.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {problems.map((problem) => {
            const Icon = problem.icon
            return (
              <div key={problem.title} className="flex gap-4 p-6 rounded-xl border border-slate-100 bg-white hover:shadow-sm transition">
                <div className="w-12 h-12 bg-orange-50 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Icon className="w-6 h-6 text-brand-orange" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-brand-navy mb-1">{problem.title}</h3>
                  <p className="text-sm text-slate-600 leading-relaxed">{problem.desc}</p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

function TrustSection() {
  const points = [
    { icon: ShieldCheck, title: 'Verified & Audited Factories', desc: 'Every supplier we recommend has passed our on-site verification process.' },
    { icon: Users, title: 'Dedicated Project Manager', desc: 'One point of contact who speaks your language and understands your market.' },
    { icon: Award, title: 'Transparent Reporting', desc: 'Detailed inspection reports with photos, measurements, and pass/fail criteria.' },
    { icon: CheckCircle2, title: 'No Hidden Fees', desc: 'Clear pricing structure with no surprise charges. You know what you pay for.' },
  ]

  return (
    <section className="py-16 md:py-24 bg-brand-gray">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-brand-navy tracking-tight">
            Why Buyers Trust Us
          </h2>
          <p className="mt-4 text-lg text-slate-600 max-w-2xl mx-auto">
            We earn trust through transparency, consistency, and results.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {points.map((point) => {
            const Icon = point.icon
            return (
              <div key={point.title} className="text-center p-6">
                <div className="w-14 h-14 bg-green-50 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon className="w-7 h-7 text-brand-green" />
                </div>
                <h3 className="text-base font-semibold text-brand-navy mb-2">{point.title}</h3>
                <p className="text-sm text-slate-600">{point.desc}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

function CaseStudiesPreview() {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  const cases = [
    {
      id: 'case-furniture',
      title: 'Custom Furniture for EU Retailer',
      result: 'Reduced unit cost by 35% while maintaining quality standards',
      category: 'Furniture',
      imgId: 'case-furn-5a6b7c',
    },
    {
      id: 'case-electronics',
      title: 'Consumer Electronics for US Brand',
      result: 'Sourced 3 verified factories and delivered 50,000 units on time',
      category: 'Electronics',
      imgId: 'case-elec-8d9e0f',
    },
    {
      id: 'case-textiles',
      title: 'Private Label Apparel for AU Market',
      result: 'Full production management from sampling to delivery in 8 weeks',
      category: 'Textiles',
      imgId: 'case-text-2g3h4i',
    },
  ]

  return (
    <section ref={containerRef} className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 id="cases-section-title" className="text-3xl md:text-4xl font-bold text-brand-navy tracking-tight">
            Case Studies
          </h2>
          <p id="cases-section-subtitle" className="mt-4 text-lg text-slate-600 max-w-2xl mx-auto">
            Real results from real sourcing projects. See how we've helped buyers like you.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {cases.map((c) => (
            <div key={c.id} className="bg-white rounded-xl shadow-sm border border-slate-100 overflow-hidden hover:shadow-md transition">
              <div className="h-48 overflow-hidden">
                <img
                  data-strk-img-id={c.imgId}
                  data-strk-img={`[${c.id}-title] [cases-section-title]`}
                  data-strk-img-ratio="3x2"
                  data-strk-img-width="600"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  alt={c.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <span className="text-xs font-medium text-brand-blue bg-blue-50 px-2 py-1 rounded">
                  {c.category}
                </span>
                <h3 id={`${c.id}-title`} className="text-lg font-semibold text-brand-navy mt-3 mb-2">
                  {c.title}
                </h3>
                <p className="text-sm text-slate-600">{c.result}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <Link
            to="/case-studies"
            className="inline-flex items-center text-brand-blue font-semibold hover:underline no-underline"
          >
            View All Case Studies <ArrowRight className="w-4 h-4 ml-1" />
          </Link>
        </div>
      </div>
    </section>
  )
}

function FAQSection() {
  const [openIndex, setOpenIndex] = useState(null)

  const faqs = [
    { q: 'What is a sourcing agent and why do I need one?', a: 'A sourcing agent acts as your local representative in China. We find suppliers, negotiate prices, verify factories, inspect quality, and coordinate shipping — saving you time, money, and risk compared to doing it yourself remotely.' },
    { q: 'How much does your service cost?', a: 'Our fees depend on the scope of work. Typical sourcing projects range from 3-8% of order value. We provide a clear quote upfront with no hidden charges. Initial consultations are free.' },
    { q: 'What is your minimum order requirement?', a: 'We work with orders of all sizes, though most of our clients place orders above $5,000. For smaller orders, we can help with consolidation services.' },
    { q: 'How long does the sourcing process take?', a: 'A typical sourcing project takes 2-4 weeks from requirement to supplier shortlist. Sampling adds 1-3 weeks. Total timeline from inquiry to delivery is usually 8-12 weeks depending on product complexity.' },
    { q: 'Do you handle customs and import duties?', a: 'We coordinate shipping and prepare all export documentation. For import customs clearance and duties in your country, we can recommend trusted freight forwarders or work with your existing logistics partner.' },
    { q: 'What industries do you specialize in?', a: 'We source across many industries including electronics, textiles, furniture, machinery, packaging, auto parts, and consumer goods. Our team has deep experience in Chinese manufacturing across these sectors.' },
  ]

  return (
    <section className="py-16 md:py-24 bg-brand-gray">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-brand-navy tracking-tight">
            Frequently Asked Questions
          </h2>
          <p className="mt-4 text-lg text-slate-600">
            Common questions from buyers considering a China sourcing agent.
          </p>
        </div>

        <div className="space-y-3">
          {faqs.map((faq, idx) => (
            <div key={idx} className="bg-white rounded-lg border border-slate-100">
              <button
                onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                className="w-full flex items-center justify-between p-5 text-left bg-transparent border-none cursor-pointer"
              >
                <span className="text-base font-medium text-brand-navy pr-4">{faq.q}</span>
                <ChevronDown className={`w-5 h-5 text-slate-400 flex-shrink-0 transition-transform ${openIndex === idx ? 'rotate-180' : ''}`} />
              </button>
              {openIndex === idx && (
                <div className="px-5 pb-5">
                  <p className="text-sm text-slate-600 leading-relaxed">{faq.a}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function CTASection() {
  return (
    <section className="py-16 md:py-24 bg-brand-navy">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight mb-4">
          Ready to Source from China with Confidence?
        </h2>
        <p className="text-lg text-slate-300 mb-8 max-w-2xl mx-auto">
          Tell us what you're looking for and get a free, no-obligation sourcing quote within 24 hours.
        </p>
        <Link
          to="/contact"
          className="inline-flex items-center bg-brand-blue text-white px-8 py-4 rounded-lg text-base font-semibold hover:bg-blue-700 transition no-underline"
        >
          Get a Free Sourcing Quote
          <ArrowRight className="w-5 h-5 ml-2" />
        </Link>
      </div>
    </section>
  )
}

export default function Home() {
  return (
    <>
      <HeroSection />
      <TrustBar />
      <ServicesSection />
      <ProcessSection />
      <ProductsSection />
      <ProblemsSection />
      <TrustSection />
      <CaseStudiesPreview />
      <FAQSection />
      <CTASection />
    </>
  )
}
