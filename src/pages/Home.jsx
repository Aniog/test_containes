import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import {
  Search,
  ShieldCheck,
  ClipboardCheck,
  Factory,
  Ship,
  Wrench,
  ArrowRight,
  CheckCircle2,
  HelpCircle,
  ChevronDown,
  ChevronUp,
  Building2,
  Boxes,
  Users,
  Globe,
  Award,
  Clock,
} from 'lucide-react'
import { useState } from 'react'

function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-navy text-white">
      <div
        className="absolute inset-0 opacity-20"
        data-strk-bg-id="hero-bg-home-01"
        data-strk-bg="[hero-subtitle] [hero-title]"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1600"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-navy via-navy/95 to-navy/80" />
      <div className="container relative z-10 py-20 md:py-28 lg:py-36">
        <div className="max-w-3xl">
          <h1
            id="hero-title"
            className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight tracking-tight mb-6"
          >
            China Sourcing Agent for Global Buyers
          </h1>
          <p
            id="hero-subtitle"
            className="text-lg md:text-xl text-white/80 mb-8 leading-relaxed max-w-2xl"
          >
            We help overseas buyers find reliable suppliers, verify factories, inspect quality, follow production, and coordinate shipping from China.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center rounded-md bg-teal px-6 py-3 text-base font-semibold text-white hover:bg-teal-dark transition-colors"
            >
              Get a Free Sourcing Quote
              <ArrowRight className="ml-2 w-4 h-4" />
            </Link>
            <Link
              to="/how-it-works"
              className="inline-flex items-center justify-center rounded-md border border-white/30 px-6 py-3 text-base font-semibold text-white hover:bg-white/10 transition-colors"
            >
              Learn How It Works
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

function ServicesSection() {
  const services = [
    {
      icon: Search,
      title: 'Supplier Sourcing',
      desc: 'We identify and shortlist qualified manufacturers matched to your product specifications, MOQ, and budget.',
    },
    {
      icon: ShieldCheck,
      title: 'Factory Verification',
      desc: 'On-site audits to verify factory credentials, production capacity, certifications, and business legitimacy.',
    },
    {
      icon: ClipboardCheck,
      title: 'Quality Inspection',
      desc: 'Pre-shipment, during-production, and container-loading inspections to catch defects before they leave China.',
    },
    {
      icon: Factory,
      title: 'Production Monitoring',
      desc: 'Weekly progress reports, timeline tracking, and issue resolution to keep your order on schedule.',
    },
    {
      icon: Ship,
      title: 'Shipping Coordination',
      desc: 'We handle freight forwarding, customs documentation, and logistics to deliver goods to your door.',
    },
    {
      icon: Wrench,
      title: 'Custom Development',
      desc: 'From prototype to mass production, we manage tooling, sampling, and OEM/ODM project execution.',
    },
  ]

  return (
    <section className="py-16 md:py-24 bg-surface">
      <div className="container">
        <div className="text-center max-w-2xl mx-auto mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-navy mb-4">Our Services</h2>
          <p className="text-text-muted leading-relaxed">
            End-to-end sourcing support for businesses importing from China. From first contact to final delivery.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {services.map((s) => (
            <div
              key={s.title}
              className="bg-white rounded-xl p-6 md:p-8 border border-border hover:shadow-lg transition-shadow"
            >
              <div className="w-12 h-12 rounded-lg bg-teal/10 flex items-center justify-center mb-5">
                <s.icon className="w-6 h-6 text-teal" />
              </div>
              <h3 className="text-lg font-bold text-navy mb-2">{s.title}</h3>
              <p className="text-sm text-text-muted leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
        <div className="text-center mt-10">
          <Link
            to="/services"
            className="inline-flex items-center text-teal font-semibold hover:text-teal-dark transition-colors"
          >
            View All Services <ArrowRight className="ml-1.5 w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  )
}

function ProcessSection() {
  const steps = [
    { num: '01', title: 'Tell Us What You Need', desc: 'Share product specs, target price, and volume. We review your requirements within 24 hours.' },
    { num: '02', title: 'We Source & Verify', desc: 'Our team identifies 3-5 qualified suppliers and conducts on-site or remote factory verification.' },
    { num: '03', title: 'Samples & Negotiation', desc: 'We coordinate samples, compare quotations, and negotiate pricing and terms on your behalf.' },
    { num: '04', title: 'Order & Production', desc: 'Place the PO. We monitor production, perform QC inspections, and manage changes.' },
    { num: '05', title: 'Shipping & Delivery', desc: 'We arrange freight, handle export documentation, and track shipment until it reaches you.' },
  ]

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container">
        <div className="text-center max-w-2xl mx-auto mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-navy mb-4">How It Works</h2>
          <p className="text-text-muted leading-relaxed">
            A clear, five-step process designed to reduce risk and save you time.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-5 gap-6 md:gap-4">
          {steps.map((step, i) => (
            <div key={step.num} className="relative text-center md:text-left">
              <div className="text-4xl font-extrabold text-teal/20 mb-3">{step.num}</div>
              <h3 className="text-base font-bold text-navy mb-2">{step.title}</h3>
              <p className="text-sm text-text-muted leading-relaxed">{step.desc}</p>
              {i < steps.length - 1 && (
                <div className="hidden md:block absolute top-6 -right-2 w-4 h-px bg-border" />
              )}
            </div>
          ))}
        </div>
        <div className="text-center mt-10">
          <Link
            to="/how-it-works"
            className="inline-flex items-center text-teal font-semibold hover:text-teal-dark transition-colors"
          >
            See Full Process <ArrowRight className="ml-1.5 w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  )
}

function ProductsSection() {
  const products = [
    { name: 'Electronics & Components', desc: 'Consumer electronics, PCBs, cables, chargers, and accessories.', imgId: 'product-electronics-a1b2', titleId: 'product-title-electronics', descId: 'product-desc-electronics' },
    { name: 'Machinery & Industrial', desc: 'Manufacturing equipment, tools, spare parts, and hardware.', imgId: 'product-machinery-c3d4', titleId: 'product-title-machinery', descId: 'product-desc-machinery' },
    { name: 'Home & Furniture', desc: 'Furniture, kitchenware, lighting, decor, and household goods.', imgId: 'product-home-e5f6', titleId: 'product-title-home', descId: 'product-desc-home' },
    { name: 'Apparel & Textiles', desc: 'Clothing, bags, fabrics, and fashion accessories.', imgId: 'product-apparel-g7h8', titleId: 'product-title-apparel', descId: 'product-desc-apparel' },
    { name: 'Packaging & Printing', desc: 'Custom boxes, labels, bags, and promotional materials.', imgId: 'product-packaging-i9j0', titleId: 'product-title-packaging', descId: 'product-desc-packaging' },
    { name: 'Automotive Parts', desc: 'Aftermarket auto parts, accessories, and EV components.', imgId: 'product-automotive-k1l2', titleId: 'product-title-automotive', descId: 'product-desc-automotive' },
  ]

  return (
    <section className="py-16 md:py-24 bg-surface">
      <div className="container">
        <div className="text-center max-w-2xl mx-auto mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-navy mb-4">Products We Source</h2>
          <p className="text-text-muted leading-relaxed">
            We source across a wide range of categories. If it is made in China, we can help you find the right factory.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((p) => (
            <div key={p.name} className="group bg-white rounded-xl overflow-hidden border border-border hover:shadow-lg transition-all">
              <div className="aspect-[4/3] bg-surface-alt relative overflow-hidden">
                <img
                  data-strk-img-id={p.imgId}
                  data-strk-img={`[${p.descId}] [${p.titleId}]`}
                  data-strk-img-ratio="4x3"
                  data-strk-img-width="600"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  alt={p.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-5">
                <h3 id={p.titleId} className="text-base font-bold text-navy mb-1">{p.name}</h3>
                <p id={p.descId} className="text-sm text-text-muted leading-relaxed">{p.desc}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-10">
          <Link
            to="/products"
            className="inline-flex items-center text-teal font-semibold hover:text-teal-dark transition-colors"
          >
            Browse All Categories <ArrowRight className="ml-1.5 w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  )
}

function ProblemsSection() {
  const problems = [
    'Language barriers and slow communication',
    'Difficulty verifying if a factory is real and capable',
    'Inconsistent product quality and surprise defects',
    'Hidden costs and unclear pricing structures',
    'Production delays with no visibility',
    'Shipping paperwork and customs confusion',
  ]

  const solutions = [
    'Bilingual project managers based in China',
    'On-site audits, license checks, and reference calls',
    'AQL-based inspections at every critical stage',
    'Transparent quotes with no hidden fees',
    'Weekly updates and milestone tracking',
    'End-to-end freight and documentation handling',
  ]

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container">
        <div className="text-center max-w-2xl mx-auto mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-navy mb-4">Problems We Solve</h2>
          <p className="text-text-muted leading-relaxed">
            Buying from China can be risky. We remove the guesswork so you can focus on growing your business.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          <div className="bg-red-50 rounded-xl p-6 md:p-8 border border-red-100">
            <h3 className="text-lg font-bold text-red-700 mb-5 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-red-500" />
              Common Sourcing Problems
            </h3>
            <ul className="space-y-3.5">
              {problems.map((p) => (
                <li key={p} className="flex items-start gap-3 text-sm text-red-800">
                  <span className="mt-0.5 text-red-400">×</span>
                  {p}
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-teal-50 rounded-xl p-6 md:p-8 border border-teal-100">
            <h3 className="text-lg font-bold text-teal-dark mb-5 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-teal" />
              How We Fix Them
            </h3>
            <ul className="space-y-3.5">
              {solutions.map((s) => (
                <li key={s} className="flex items-start gap-3 text-sm text-teal-900">
                  <CheckCircle2 className="w-4 h-4 mt-0.5 text-teal shrink-0" />
                  {s}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

function TrustSection() {
  const stats = [
    { icon: Building2, value: '500+', label: 'Factories Audited' },
    { icon: Boxes, value: '2,000+', label: 'Orders Managed' },
    { icon: Users, value: '35+', label: 'Team Members' },
    { icon: Globe, value: '40+', label: 'Countries Served' },
    { icon: Award, value: '12', label: 'Years Experience' },
    { icon: Clock, value: '24h', label: 'Response Time' },
  ]

  return (
    <section className="py-16 md:py-24 bg-navy text-white">
      <div className="container">
        <div className="text-center max-w-2xl mx-auto mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Buyers Trust Us</h2>
          <p className="text-white/70 leading-relaxed">
            Built on transparency, accountability, and deep local knowledge of the Chinese manufacturing landscape.
          </p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 md:gap-8">
          {stats.map((s) => (
            <div key={s.label} className="text-center">
              <div className="w-12 h-12 rounded-lg bg-white/10 flex items-center justify-center mx-auto mb-3">
                <s.icon className="w-6 h-6 text-teal" />
              </div>
              <div className="text-2xl md:text-3xl font-extrabold text-white mb-1">{s.value}</div>
              <div className="text-xs text-white/60">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function CaseStudiesPreview() {
  const cases = [
    {
      client: 'European Kitchenware Brand',
      result: 'Reduced defect rate from 8% to under 1% within 3 months.',
      tags: ['Quality Control', 'Supplier Switch'],
    },
    {
      client: 'US Electronics Startup',
      result: 'Sourced 4 qualified PCB manufacturers and cut BOM costs by 18%.',
      tags: ['Electronics', 'Cost Reduction'],
    },
    {
      client: 'Australian Furniture Retailer',
      result: 'Delivered a 40-ft container order 2 weeks ahead of schedule.',
      tags: ['Furniture', 'On-Time Delivery'],
    },
  ]

  return (
    <section className="py-16 md:py-24 bg-surface">
      <div className="container">
        <div className="text-center max-w-2xl mx-auto mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-navy mb-4">Case Studies</h2>
          <p className="text-text-muted leading-relaxed">
            Real results for real clients. See how we have helped businesses like yours.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {cases.map((c) => (
            <div key={c.client} className="bg-white rounded-xl p-6 md:p-8 border border-border hover:shadow-lg transition-shadow">
              <div className="flex flex-wrap gap-2 mb-4">
                {c.tags.map((t) => (
                  <span key={t} className="text-xs font-medium px-2.5 py-1 rounded-full bg-teal/10 text-teal-dark">
                    {t}
                  </span>
                ))}
              </div>
              <h3 className="text-base font-bold text-navy mb-3">{c.client}</h3>
              <p className="text-sm text-text-muted leading-relaxed">{c.result}</p>
            </div>
          ))}
        </div>
        <div className="text-center mt-10">
          <Link
            to="/case-studies"
            className="inline-flex items-center text-teal font-semibold hover:text-teal-dark transition-colors"
          >
            Read All Case Studies <ArrowRight className="ml-1.5 w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  )
}

function FAQSection() {
  const faqs = [
    {
      q: 'How much do your sourcing services cost?',
      a: 'We typically charge a transparent commission based on order value, or a fixed project fee for verification and inspection services. We provide a clear quote after understanding your requirements.',
    },
    {
      q: 'How long does it take to find a supplier?',
      a: 'For standard products, we usually present 3-5 qualified suppliers within 5-7 business days. Custom or specialized products may take 10-14 days.',
    },
    {
      q: 'Do you guarantee product quality?',
      a: 'We conduct inspections at pre-agreed AQL standards and provide detailed reports with photos. While we cannot guarantee zero defects, our process significantly reduces risk.',
    },
    {
      q: 'Can you help with shipping and customs?',
      a: 'Yes. We coordinate freight forwarding, prepare export documentation, and can arrange delivery to your warehouse or Amazon FBA facility.',
    },
    {
      q: 'Do I need to visit China myself?',
      a: 'No. Our local team handles everything on the ground. Many of our clients have never visited China and operate entirely remotely.',
    },
    {
      q: 'What is your minimum order quantity?',
      a: 'We work with MOQs as low as 500 units for many product categories. We can also help negotiate lower MOQs with suppliers.',
    },
  ]

  const [openIndex, setOpenIndex] = useState(null)

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container">
        <div className="text-center max-w-2xl mx-auto mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-navy mb-4">Frequently Asked Questions</h2>
          <p className="text-text-muted leading-relaxed">
            Answers to the most common questions we receive from new clients.
          </p>
        </div>
        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, i) => (
            <div key={i} className="border border-border rounded-xl overflow-hidden">
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full flex items-center justify-between p-5 md:p-6 text-left hover:bg-surface transition-colors"
              >
                <span className="font-semibold text-navy text-sm md:text-base pr-4">{faq.q}</span>
                {openIndex === i ? (
                  <ChevronUp className="w-5 h-5 text-teal shrink-0" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-text-muted shrink-0" />
                )}
              </button>
              {openIndex === i && (
                <div className="px-5 md:px-6 pb-5 md:pb-6 text-sm text-text-muted leading-relaxed">
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

function InquiryCTA() {
  return (
    <section className="py-16 md:py-24 bg-teal text-white">
      <div className="container text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Source from China?</h2>
        <p className="text-white/90 max-w-2xl mx-auto mb-8 leading-relaxed">
          Tell us what you are looking for and we will send you a free sourcing plan with supplier recommendations within 24 hours.
        </p>
        <Link
          to="/contact"
          className="inline-flex items-center justify-center rounded-md bg-white px-8 py-3.5 text-base font-bold text-teal hover:bg-white/90 transition-colors"
        >
          Get a Free Sourcing Quote
          <ArrowRight className="ml-2 w-5 h-5" />
        </Link>
      </div>
    </section>
  )
}

export default function Home() {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <div ref={containerRef}>
      <HeroSection />
      <ServicesSection />
      <ProcessSection />
      <ProductsSection />
      <ProblemsSection />
      <TrustSection />
      <CaseStudiesPreview />
      <FAQSection />
      <InquiryCTA />
    </div>
  )
}
