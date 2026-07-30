import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import {
  Search, ShieldCheck, ClipboardCheck, Truck, Factory,
  ChevronRight, Star, Globe, Users, Package, CheckCircle,
  AlertTriangle, TrendingUp, Clock, DollarSign, Plus, Minus
} from 'lucide-react'
import { CTAButton, SecondaryButton, SectionHeader, StatCard } from '@/components/UI'

const services = [
  {
    icon: Search,
    title: 'Supplier Sourcing',
    desc: 'We identify and shortlist verified Chinese manufacturers that match your product specifications, MOQ, and budget requirements.',
    href: '/services',
  },
  {
    icon: Factory,
    title: 'Factory Verification',
    desc: 'On-site factory audits to confirm production capacity, certifications, working conditions, and business legitimacy.',
    href: '/services',
  },
  {
    icon: ClipboardCheck,
    title: 'Quality Inspection',
    desc: 'Pre-shipment, during-production, and container loading inspections to ensure your goods meet agreed specifications.',
    href: '/services',
  },
  {
    icon: Clock,
    title: 'Production Follow-up',
    desc: 'Regular updates and on-site visits during manufacturing to keep your order on schedule and on spec.',
    href: '/services',
  },
  {
    icon: Truck,
    title: 'Shipping Coordination',
    desc: 'We coordinate with freight forwarders, handle export documentation, and track your shipment to destination.',
    href: '/services',
  },
  {
    icon: Package,
    title: 'Private Label & OEM',
    desc: 'Support for custom packaging, branding, and OEM product development with Chinese manufacturers.',
    href: '/services',
  },
]

const steps = [
  { num: '01', title: 'Submit Your Inquiry', desc: 'Tell us what you need — product type, quantity, target price, and any specific requirements.' },
  { num: '02', title: 'Supplier Research', desc: 'We search our network and verified databases to find suitable manufacturers for your product.' },
  { num: '03', title: 'Factory Audit', desc: 'We visit shortlisted factories to verify their capabilities, certifications, and reliability.' },
  { num: '04', title: 'Sample & Negotiation', desc: 'We arrange samples, review quality, and negotiate pricing and terms on your behalf.' },
  { num: '05', title: 'Production & QC', desc: 'We monitor production progress and conduct quality inspections before shipment.' },
  { num: '06', title: 'Shipping & Delivery', desc: 'We coordinate logistics, handle documentation, and ensure your goods arrive safely.' },
]

const problems = [
  { icon: AlertTriangle, title: 'Unreliable Suppliers', desc: 'Difficulty identifying trustworthy manufacturers from thousands of online listings.' },
  { icon: ShieldCheck, title: 'Quality Inconsistency', desc: 'Receiving goods that do not match samples or agreed specifications.' },
  { icon: DollarSign, title: 'Overpaying', desc: 'Paying above-market prices without local knowledge or negotiation leverage.' },
  { icon: Globe, title: 'Language & Culture Barriers', desc: 'Miscommunication leading to production errors and delays.' },
  { icon: Clock, title: 'Production Delays', desc: 'No visibility into factory progress until it is too late to act.' },
  { icon: Truck, title: 'Shipping Complexity', desc: 'Navigating export documentation, customs, and freight options without local support.' },
]

const products = [
  'Electronics & Components', 'Furniture & Home Decor', 'Clothing & Textiles',
  'Machinery & Industrial', 'Toys & Baby Products', 'Health & Beauty',
  'Sports & Outdoor', 'Packaging & Printing', 'Auto Parts', 'Kitchenware',
]

const caseStudies = [
  {
    id: 'cs-1',
    titleId: 'cs-title-1',
    descId: 'cs-desc-1',
    imgId: 'cs-img-1-a3f9b2',
    category: 'Electronics',
    title: 'LED Lighting Supplier for UK Retailer',
    desc: 'Sourced and verified 3 LED manufacturers in Shenzhen. Negotiated 18% cost reduction vs. buyer\'s previous supplier. Pre-shipment inspection passed first time.',
    result: '18% cost saving, on-time delivery',
  },
  {
    id: 'cs-2',
    titleId: 'cs-title-2',
    descId: 'cs-desc-2',
    imgId: 'cs-img-2-b7e1c4',
    category: 'Furniture',
    title: 'Custom Furniture for Australian Importer',
    desc: 'Managed OEM furniture production in Foshan. Conducted 3 production inspections and coordinated FCL shipping to Melbourne.',
    result: 'Zero defects, 2 weeks ahead of schedule',
  },
  {
    id: 'cs-3',
    titleId: 'cs-title-3',
    descId: 'cs-desc-3',
    imgId: 'cs-img-3-d2a8f5',
    category: 'Textiles',
    title: 'Apparel Sourcing for US Brand',
    desc: 'Identified certified garment factories in Guangzhou meeting OEKO-TEX standards. Managed sampling, bulk production, and AQL inspection.',
    result: 'Certified supplier, consistent quality',
  },
]

const faqs = [
  {
    q: 'How much does your sourcing service cost?',
    a: 'Our fees depend on the scope of services required. We offer a free initial consultation and sourcing quote. Service fees are typically a flat project fee or a percentage of order value, agreed upfront with no hidden charges.',
  },
  {
    q: 'How do you verify that a factory is reliable?',
    a: 'We conduct on-site factory audits covering business registration, production capacity, equipment, workforce, quality management systems, and certifications. We also review past buyer references where available.',
  },
  {
    q: 'What is the minimum order value you work with?',
    a: 'We work with buyers across a range of order sizes. Generally, orders above USD 5,000 are most cost-effective for our full-service model. For smaller orders, we offer targeted services such as supplier shortlisting or inspection only.',
  },
  {
    q: 'Can you help with private label or custom products?',
    a: 'Yes. We support OEM and private label projects including custom packaging, branding, and product development. We work with factories experienced in producing to buyer specifications.',
  },
  {
    q: 'Which regions of China do you cover?',
    a: 'We operate across major manufacturing hubs including Guangzhou, Shenzhen, Dongguan, Foshan, Yiwu, Ningbo, Shanghai, and Qingdao, covering most product categories.',
  },
  {
    q: 'How long does the sourcing process take?',
    a: 'Timelines vary by product complexity. Supplier shortlisting typically takes 5–10 business days. Factory audits add 3–5 days. Full project timelines from inquiry to shipment are agreed based on your production schedule.',
  },
]

const trustPoints = [
  { icon: ShieldCheck, title: 'Verified Supplier Network', desc: 'All recommended suppliers are audited in person before being presented to buyers.' },
  { icon: Globe, title: 'Serving 30+ Countries', desc: 'Buyers from the US, UK, EU, Australia, Canada, and Southeast Asia trust our services.' },
  { icon: Users, title: 'Dedicated Account Manager', desc: 'One point of contact throughout your sourcing project, from inquiry to delivery.' },
  { icon: TrendingUp, title: 'Transparent Reporting', desc: 'Detailed inspection reports, factory audit summaries, and production updates at every stage.' },
]

function FAQItem({ q, a }) {
  const [open, setOpen] = useState(false)
  return (
    <div className="border border-bordercolor rounded-xl overflow-hidden">
      <button
        className="w-full flex items-center justify-between px-6 py-5 text-left bg-white hover:bg-lightblue transition-colors"
        onClick={() => setOpen(!open)}
      >
        <span className="font-semibold text-darktext pr-4">{q}</span>
        {open ? <Minus className="w-5 h-5 text-accent flex-shrink-0" /> : <Plus className="w-5 h-5 text-accent flex-shrink-0" />}
      </button>
      {open && (
        <div className="px-6 pb-5 bg-white">
          <p className="text-mutedtext leading-relaxed">{a}</p>
        </div>
      )}
    </div>
  )
}

export default function HomePage() {
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
      <section className="relative bg-primary overflow-hidden pt-20 lg:pt-24">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0"
            data-strk-bg-id="hero-bg-main-7f3a1c"
            data-strk-bg="[hero-subtitle] [hero-title]"
            data-strk-bg-ratio="16x9"
            data-strk-bg-width="1600"
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="inline-block bg-accent/20 text-accent font-semibold text-sm px-4 py-1.5 rounded-full mb-6 uppercase tracking-wide">
                China-Based Sourcing Agent
              </span>
              <h1 id="hero-title" className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
                China Sourcing Agent for Global Buyers
              </h1>
              <p id="hero-subtitle" className="text-blue-200 text-lg md:text-xl leading-relaxed mb-8 max-w-lg">
                We help overseas buyers find reliable Chinese suppliers, verify factories, inspect quality, follow production, and coordinate shipping — all from one trusted partner on the ground.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <CTAButton className="text-base">Get a Free Sourcing Quote</CTAButton>
                <SecondaryButton to="/how-it-works" className="border-white text-white hover:bg-white hover:text-primary text-base">
                  How It Works
                </SecondaryButton>
              </div>
              <div className="mt-10 flex flex-wrap gap-6">
                {[
                  { v: '500+', l: 'Buyers Served' },
                  { v: '30+', l: 'Countries' },
                  { v: '8+', l: 'Years Experience' },
                  { v: '98%', l: 'On-Time Delivery' },
                ].map((s) => (
                  <div key={s.l} className="text-center">
                    <div className="text-3xl font-bold text-accent">{s.v}</div>
                    <div className="text-blue-300 text-xs mt-0.5">{s.l}</div>
                  </div>
                ))}
              </div>
            </div>
            <div className="hidden lg:block">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl aspect-[4/3]">
                <img
                  data-strk-img-id="hero-factory-img-9b2d4e"
                  data-strk-img="[hero-subtitle] [hero-title] China factory manufacturing quality control"
                  data-strk-img-ratio="4x3"
                  data-strk-img-width="800"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  alt="China factory sourcing"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust bar */}
      <section className="bg-white border-b border-bordercolor py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-center justify-center gap-8 text-mutedtext text-sm">
            {['Trusted by buyers in 30+ countries', 'On-site factory audits', 'AQL quality inspections', 'Transparent pricing', 'Dedicated account manager'].map((t) => (
              <div key={t} className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-successgreen flex-shrink-0" />
                <span className="text-darktext font-medium">{t}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="Our Services"
            title="End-to-End China Sourcing Support"
            subtitle="From finding the right supplier to getting goods to your door, we manage every step of the sourcing process."
            center
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((s) => (
              <Link
                key={s.title}
                to={s.href}
                className="group bg-white border border-bordercolor rounded-xl p-6 hover:shadow-lg hover:border-primary/30 transition-all"
              >
                <div className="w-12 h-12 bg-lightblue rounded-xl flex items-center justify-center mb-4 group-hover:bg-primary/10 transition-colors">
                  <s.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-bold text-darktext text-lg mb-2">{s.title}</h3>
                <p className="text-mutedtext text-sm leading-relaxed mb-4">{s.desc}</p>
                <span className="text-accent text-sm font-semibold flex items-center gap-1 group-hover:gap-2 transition-all">
                  Learn more <ChevronRight className="w-4 h-4" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Problems we solve */}
      <section className="py-20 bg-lightblue">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="Problems We Solve"
            title="Common Challenges When Sourcing from China"
            subtitle="Overseas buyers face real risks when sourcing from China without local support. We address each one directly."
            center
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {problems.map((p) => (
              <div key={p.title} className="bg-white rounded-xl p-6 border border-bordercolor">
                <div className="w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center mb-4">
                  <p.icon className="w-5 h-5 text-accent" />
                </div>
                <h3 className="font-bold text-darktext mb-2">{p.title}</h3>
                <p className="text-mutedtext text-sm leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sourcing process */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="Our Process"
            title="How We Source for You"
            subtitle="A structured, transparent process from your first inquiry to final delivery."
            center
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {steps.map((step) => (
              <div key={step.num} className="relative bg-lightblue rounded-xl p-6 border border-bordercolor">
                <div className="text-5xl font-bold text-primary/10 absolute top-4 right-4">{step.num}</div>
                <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center mb-4">
                  <span className="text-white font-bold text-sm">{step.num}</span>
                </div>
                <h3 className="font-bold text-darktext mb-2">{step.title}</h3>
                <p className="text-mutedtext text-sm leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <SecondaryButton to="/how-it-works">See Full Process Details</SecondaryButton>
          </div>
        </div>
      </section>

      {/* Products */}
      <section className="py-20 bg-primary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="inline-block text-accent font-semibold text-sm uppercase tracking-widest mb-3">Product Categories</span>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Products We Source</h2>
            <p className="text-blue-200 text-lg max-w-2xl mx-auto">
              We source across a wide range of product categories from China's major manufacturing regions.
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-3">
            {products.map((p) => (
              <Link
                key={p}
                to="/products"
                className="bg-white/10 hover:bg-white/20 text-white border border-white/20 px-5 py-2.5 rounded-full text-sm font-medium transition-colors"
              >
                {p}
              </Link>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link
              to="/products"
              className="inline-block bg-accent text-white px-8 py-4 rounded-lg font-semibold hover:bg-orange-700 transition-colors"
            >
              View All Product Categories
            </Link>
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="Case Studies"
            title="Real Results for Real Buyers"
            subtitle="Examples of how we have helped overseas buyers source successfully from China."
            center
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {caseStudies.map((cs) => (
              <div key={cs.id} className="bg-white border border-bordercolor rounded-xl overflow-hidden hover:shadow-lg transition-shadow">
                <div className="aspect-[16/9] overflow-hidden">
                  <img
                    data-strk-img-id={cs.imgId}
                    data-strk-img={`[${cs.descId}] [${cs.titleId}] China factory ${cs.category} sourcing`}
                    data-strk-img-ratio="16x9"
                    data-strk-img-width="600"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    alt={cs.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <span className="inline-block bg-lightblue text-primary text-xs font-semibold px-3 py-1 rounded-full mb-3">{cs.category}</span>
                  <h3 id={cs.titleId} className="font-bold text-darktext mb-2">{cs.title}</h3>
                  <p id={cs.descId} className="text-mutedtext text-sm leading-relaxed mb-4">{cs.desc}</p>
                  <div className="flex items-center gap-2 text-successgreen text-sm font-semibold">
                    <CheckCircle className="w-4 h-4" />
                    {cs.result}
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <SecondaryButton to="/case-studies">View All Case Studies</SecondaryButton>
          </div>
        </div>
      </section>

      {/* Trust points */}
      <section className="py-20 bg-lightblue">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="Why Choose Us"
            title="What Makes SSourcing China Different"
            subtitle="We are a professional, on-the-ground team — not a marketplace or directory."
            center
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {trustPoints.map((tp) => (
              <div key={tp.title} className="bg-white rounded-xl p-6 border border-bordercolor text-center">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <tp.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-bold text-darktext mb-2">{tp.title}</h3>
                <p className="text-mutedtext text-sm leading-relaxed">{tp.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="FAQ"
            title="Frequently Asked Questions"
            subtitle="Answers to common questions from buyers considering China sourcing."
            center
          />
          <div className="flex flex-col gap-3">
            {faqs.map((faq) => (
              <FAQItem key={faq.q} q={faq.q} a={faq.a} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="py-20 bg-accent">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Source from China with Confidence?
          </h2>
          <p className="text-orange-100 text-lg mb-8 max-w-2xl mx-auto">
            Tell us what you need and we will provide a free sourcing assessment within 24 hours.
          </p>
          <Link
            to="/contact"
            className="inline-block bg-white text-accent px-10 py-4 rounded-lg font-bold text-lg hover:bg-orange-50 transition-colors"
          >
            Get a Free Sourcing Quote
          </Link>
        </div>
      </section>
    </div>
  )
}
