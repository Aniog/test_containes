import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import { Shield, Search, ClipboardCheck, Truck, Factory, CheckCircle, Users, Globe, Award, ArrowRight, ChevronDown } from 'lucide-react'

const HeroSection = () => {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <section ref={containerRef} className="relative bg-navy overflow-hidden">
      <div
        className="absolute inset-0 opacity-20"
        data-strk-bg-id="hero-bg-a7f3c1"
        data-strk-bg="[hero-subtitle] [hero-title]"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1600"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-navy via-navy/95 to-navy/70" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32">
        <div className="max-w-2xl">
          <p className="text-accent font-semibold text-sm uppercase tracking-wider mb-4">Trusted by 500+ Global Buyers</p>
          <h1 id="hero-title" className="text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-tight leading-tight mb-6">
            China Sourcing Agent for Global Buyers
          </h1>
          <p id="hero-subtitle" className="text-lg md:text-xl text-white/80 leading-relaxed mb-8">
            We help you find reliable Chinese suppliers, verify factories, inspect quality, follow production, and coordinate shipping — so you can buy with confidence.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center px-7 py-3.5 bg-accent text-white font-semibold rounded-lg hover:bg-accent-hover transition-colors no-underline text-base"
            >
              Get a Free Sourcing Quote
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
            <Link
              to="/how-it-works"
              className="inline-flex items-center justify-center px-7 py-3.5 bg-white/10 text-white font-semibold rounded-lg hover:bg-white/20 transition-colors no-underline text-base border border-white/20"
            >
              See How It Works
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

const services = [
  { icon: Search, title: 'Supplier Sourcing', desc: 'We identify and shortlist qualified manufacturers matching your product specs, MOQ, and budget.' },
  { icon: Factory, title: 'Factory Verification', desc: 'On-site audits to verify production capacity, certifications, and business legitimacy.' },
  { icon: ClipboardCheck, title: 'Quality Inspection', desc: 'Pre-shipment, during production, and container loading inspections with detailed reports.' },
  { icon: Shield, title: 'Production Follow-up', desc: 'Regular factory visits and progress updates to keep your order on schedule.' },
  { icon: Truck, title: 'Shipping Coordination', desc: 'End-to-end logistics support from factory to your warehouse, including customs documentation.' },
  { icon: Users, title: 'Negotiation Support', desc: 'Leverage our local expertise to negotiate better prices, payment terms, and lead times.' },
]

const ServicesSection = () => {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <p className="text-accent font-semibold text-sm uppercase tracking-wider mb-3">What We Do</p>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 tracking-tight mb-4">
            End-to-End Sourcing Services
          </h2>
          <p className="text-slate-600 text-lg">
            From finding the right supplier to delivering goods at your door — we handle every step of the China sourcing process.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, idx) => (
            <div key={idx} className="p-6 md:p-8 bg-white rounded-xl border border-slate-200 hover:shadow-lg transition-shadow group">
              <div className="w-12 h-12 bg-navy/5 rounded-lg flex items-center justify-center mb-5 group-hover:bg-navy/10 transition-colors">
                <service.icon className="w-6 h-6 text-navy" />
              </div>
              <h3 className="text-lg font-semibold text-slate-900 mb-2">{service.title}</h3>
              <p className="text-slate-600 text-sm leading-relaxed m-0">{service.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

const steps = [
  { num: '01', title: 'Share Your Requirements', desc: 'Tell us what you need — product specs, target price, quantity, and timeline.' },
  { num: '02', title: 'We Find Suppliers', desc: 'Our team identifies and vets potential factories based on your criteria.' },
  { num: '03', title: 'Verify & Sample', desc: 'We audit shortlisted factories and arrange product samples for your approval.' },
  { num: '04', title: 'Production & QC', desc: 'We monitor production progress and conduct quality inspections at key stages.' },
  { num: '05', title: 'Ship & Deliver', desc: 'We coordinate logistics and documentation to deliver goods to your warehouse.' },
]

const ProcessSection = () => {
  return (
    <section className="py-16 md:py-24 bg-surface">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <p className="text-accent font-semibold text-sm uppercase tracking-wider mb-3">Our Process</p>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 tracking-tight mb-4">
            How We Work With You
          </h2>
          <p className="text-slate-600 text-lg">
            A clear, structured process that keeps you informed and in control at every stage.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
          {steps.map((step, idx) => (
            <div key={idx} className="text-center md:text-left">
              <div className="text-3xl font-bold text-accent/30 mb-2">{step.num}</div>
              <h3 className="text-base font-semibold text-slate-900 mb-2">{step.title}</h3>
              <p className="text-slate-600 text-sm leading-relaxed m-0">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

const categories = [
  'Electronics & Components', 'Home & Garden', 'Apparel & Textiles',
  'Industrial Equipment', 'Auto Parts & Accessories', 'Health & Beauty',
  'Packaging & Printing', 'Building Materials', 'Toys & Games',
  'Sports & Outdoors', 'Furniture', 'Food & Beverage Equipment',
]

const ProductsSection = () => {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <p className="text-accent font-semibold text-sm uppercase tracking-wider mb-3">Product Categories</p>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 tracking-tight mb-4">
            Products We Source
          </h2>
          <p className="text-slate-600 text-lg">
            We source across all major product categories from China's manufacturing hubs.
          </p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {categories.map((cat, idx) => (
            <div key={idx} className="flex items-center gap-3 p-4 bg-surface rounded-lg border border-slate-100">
              <CheckCircle className="w-5 h-5 text-green-600 shrink-0" />
              <span className="text-sm font-medium text-slate-800">{cat}</span>
            </div>
          ))}
        </div>
        <div className="text-center mt-8">
          <Link to="/products" className="text-navy font-semibold text-sm hover:text-navy-light no-underline inline-flex items-center gap-1">
            View all product categories <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  )
}

const problems = [
  { title: 'Unreliable Suppliers', desc: 'Tired of suppliers who disappear after payment or deliver substandard goods? We verify every factory before you commit.' },
  { title: 'Quality Issues', desc: 'Receiving defective products costs time and money. Our inspectors catch problems before shipment.' },
  { title: 'Communication Barriers', desc: 'Language and timezone gaps cause costly misunderstandings. We bridge the gap with bilingual project management.' },
  { title: 'Shipping Complexity', desc: 'Navigating international logistics, customs, and documentation is overwhelming. We handle it all.' },
]

const ProblemsSection = () => {
  return (
    <section className="py-16 md:py-24 bg-surface">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <p className="text-accent font-semibold text-sm uppercase tracking-wider mb-3">Why You Need Us</p>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 tracking-tight mb-4">
            Problems We Solve
          </h2>
          <p className="text-slate-600 text-lg">
            Sourcing from China without local support is risky. Here's how we protect your business.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {problems.map((problem, idx) => (
            <div key={idx} className="p-6 md:p-8 bg-white rounded-xl border border-slate-200">
              <h3 className="text-lg font-semibold text-slate-900 mb-3">{problem.title}</h3>
              <p className="text-slate-600 text-sm leading-relaxed m-0">{problem.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

const trustPoints = [
  { icon: Globe, value: '30+', label: 'Countries Served' },
  { icon: Factory, value: '2,000+', label: 'Factories Audited' },
  { icon: Users, value: '500+', label: 'Active Clients' },
  { icon: Award, value: '10+', label: 'Years Experience' },
]

const TrustSection = () => {
  return (
    <section className="py-16 md:py-24 bg-navy">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight mb-4">
            Trusted by Buyers Worldwide
          </h2>
          <p className="text-white/70 text-lg">
            Numbers that reflect our commitment to reliable sourcing.
          </p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {trustPoints.map((point, idx) => (
            <div key={idx} className="text-center">
              <point.icon className="w-8 h-8 text-accent mx-auto mb-3" />
              <div className="text-3xl md:text-4xl font-bold text-white mb-1">{point.value}</div>
              <div className="text-white/60 text-sm">{point.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

const caseStudies = [
  { title: 'LED Lighting for European Retailer', category: 'Electronics', result: '40% cost reduction with consistent quality across 12 shipments.' },
  { title: 'Custom Furniture for US Brand', category: 'Furniture', result: 'Found 3 qualified factories in 2 weeks. First order delivered on time.' },
  { title: 'Textile Sourcing for Australian Importer', category: 'Textiles', result: 'Resolved quality issues from previous supplier. Zero defects in 6 months.' },
]

const CaseStudiesSection = () => {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <p className="text-accent font-semibold text-sm uppercase tracking-wider mb-3">Success Stories</p>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 tracking-tight mb-4">
            Case Studies
          </h2>
          <p className="text-slate-600 text-lg">
            Real results from real sourcing projects we've managed for our clients.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {caseStudies.map((cs, idx) => (
            <div key={idx} className="p-6 md:p-8 bg-surface rounded-xl border border-slate-200">
              <span className="inline-block px-3 py-1 bg-navy/5 text-navy text-xs font-medium rounded-full mb-4">{cs.category}</span>
              <h3 className="text-lg font-semibold text-slate-900 mb-3">{cs.title}</h3>
              <p className="text-slate-600 text-sm leading-relaxed m-0">{cs.result}</p>
            </div>
          ))}
        </div>
        <div className="text-center mt-8">
          <Link to="/case-studies" className="text-navy font-semibold text-sm hover:text-navy-light no-underline inline-flex items-center gap-1">
            View all case studies <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  )
}

const faqs = [
  { q: "What is the minimum order quantity (MOQ)?", a: "MOQ varies by product and factory. We work with suppliers who accommodate both small trial orders and large bulk orders. We'll find options that match your volume needs." },
  { q: "How do you verify suppliers?", a: "We conduct on-site factory audits checking business licenses, production capacity, quality systems, worker conditions, and past export records. You receive a detailed audit report." },
  { q: "What does your service cost?", a: "Our fees depend on the scope of work. We offer transparent pricing with no hidden charges. Contact us for a free quote tailored to your project." },
  { q: "How long does the sourcing process take?", a: "Typically 2-4 weeks to identify and verify suppliers, plus sample time. Rush projects can be expedited. We provide a timeline estimate upfront." },
  { q: "Do you handle shipping and customs?", a: "Yes. We coordinate with freight forwarders, handle export documentation, and can arrange door-to-door delivery to most countries." },
]

const FAQSection = () => {
  return (
    <section className="py-16 md:py-24 bg-surface">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <p className="text-accent font-semibold text-sm uppercase tracking-wider mb-3">FAQ</p>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 tracking-tight mb-4">
            Frequently Asked Questions
          </h2>
        </div>
        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, idx) => (
            <details key={idx} className="group bg-white rounded-xl border border-slate-200 overflow-hidden">
              <summary className="flex items-center justify-between p-5 cursor-pointer list-none">
                <span className="font-medium text-slate-900 text-sm md:text-base pr-4">{faq.q}</span>
                <ChevronDown className="w-5 h-5 text-slate-400 shrink-0 group-open:rotate-180 transition-transform" />
              </summary>
              <div className="px-5 pb-5">
                <p className="text-slate-600 text-sm leading-relaxed m-0">{faq.a}</p>
              </div>
            </details>
          ))}
        </div>
      </div>
    </section>
  )
}

const CTASection = () => {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-navy rounded-2xl p-8 md:p-14 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight mb-4">
            Ready to Source from China?
          </h2>
          <p className="text-white/70 text-lg mb-8 max-w-2xl mx-auto">
            Tell us what you're looking for. We'll provide a free sourcing plan with supplier recommendations, pricing estimates, and timeline.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center px-8 py-4 bg-accent text-white font-semibold rounded-lg hover:bg-accent-hover transition-colors no-underline text-lg"
          >
            Get a Free Sourcing Quote
            <ArrowRight className="w-5 h-5 ml-2" />
          </Link>
        </div>
      </div>
    </section>
  )
}

const Home = () => {
  return (
    <>
      <HeroSection />
      <ServicesSection />
      <ProcessSection />
      <ProductsSection />
      <ProblemsSection />
      <TrustSection />
      <CaseStudiesSection />
      <FAQSection />
      <CTASection />
    </>
  )
}

export default Home
