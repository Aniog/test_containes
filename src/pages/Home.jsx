import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import {
  Search, ShieldCheck, ClipboardCheck, Factory, Ship, CheckCircle2,
  ArrowRight, Star, Users, Package, Globe, TrendingUp, AlertTriangle,
  HelpCircle, ChevronDown
} from 'lucide-react'
import { useState } from 'react'

const HeroSection = () => {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <section ref={containerRef} className="relative bg-slate-50 overflow-hidden">
      <div
        className="absolute inset-0 opacity-10"
        data-strk-bg-id="hero-bg-9f3a2c"
        data-strk-bg="[hero-subtitle] [hero-title]"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1600"
      />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28 lg:py-36">
        <div className="max-w-3xl">
          <p className="text-sky font-semibold text-sm uppercase tracking-wide mb-4">
            Trusted China Sourcing Partner
          </p>
          <h1 id="hero-title" className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-800 leading-tight">
            China Sourcing Agent for Global Buyers
          </h1>
          <p id="hero-subtitle" className="mt-6 text-lg md:text-xl text-slate-600 leading-relaxed max-w-2xl">
            We help overseas businesses find reliable Chinese suppliers, verify factories, inspect quality, follow production, and coordinate shipping — so you can buy with confidence.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center bg-sky text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-sky-light transition-colors"
            >
              Get a Free Sourcing Quote
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
            <Link
              to="/how-it-works"
              className="inline-flex items-center justify-center border-2 border-sky text-sky px-8 py-4 rounded-lg font-semibold text-lg hover:bg-sky hover:text-white transition-colors"
            >
              How It Works
            </Link>
          </div>
          <div className="mt-10 flex flex-wrap gap-6 text-sm text-slate-500">
            <span className="flex items-center gap-1.5"><CheckCircle2 className="w-4 h-4 text-green-500" /> 500+ Verified Suppliers</span>
            <span className="flex items-center gap-1.5"><CheckCircle2 className="w-4 h-4 text-green-500" /> 10+ Years Experience</span>
            <span className="flex items-center gap-1.5"><CheckCircle2 className="w-4 h-4 text-green-500" /> 30+ Countries Served</span>
          </div>
        </div>
      </div>
    </section>
  )
}

const services = [
  { icon: Search, title: 'Supplier Sourcing', desc: 'We identify and shortlist qualified manufacturers matching your product specs, MOQ, and budget requirements.' },
  { icon: Factory, title: 'Factory Verification', desc: 'On-site factory audits to verify production capacity, certifications, equipment, and business legitimacy.' },
  { icon: ClipboardCheck, title: 'Quality Inspection', desc: 'Pre-shipment, during-production, and container loading inspections following AQL standards.' },
  { icon: TrendingUp, title: 'Production Follow-up', desc: 'Regular progress updates, timeline tracking, and issue resolution throughout the manufacturing process.' },
  { icon: Ship, title: 'Shipping Coordination', desc: 'End-to-end logistics management including freight booking, customs documentation, and delivery tracking.' },
  { icon: ShieldCheck, title: 'Contract & Payment Protection', desc: 'Assistance with supplier contracts, payment terms negotiation, and trade assurance guidance.' },
]

const ServicesSection = () => {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-800">Our Sourcing Services</h2>
          <p className="mt-4 text-slate-600 text-lg">
            From finding the right supplier to delivering goods at your door — we manage every step of the China sourcing process.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {services.map((service, idx) => (
            <div key={idx} className="bg-white rounded-xl border border-slate-100 p-6 md:p-8 hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center mb-4">
                <service.icon className="w-6 h-6 text-sky" />
              </div>
              <h3 className="text-xl font-semibold text-slate-800 mb-2">{service.title}</h3>
              <p className="text-slate-600 text-sm leading-relaxed">{service.desc}</p>
            </div>
          ))}
        </div>
        <div className="text-center mt-10">
          <Link to="/services" className="inline-flex items-center text-sky font-semibold hover:text-sky-light transition-colors">
            View All Services <ArrowRight className="ml-1 w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  )
}

const steps = [
  { num: '01', title: 'Share Your Requirements', desc: 'Tell us what you need — product specs, target price, quantity, and timeline.' },
  { num: '02', title: 'Supplier Matching', desc: 'We research and shortlist 3-5 verified suppliers that match your criteria.' },
  { num: '03', title: 'Samples & Negotiation', desc: 'We arrange samples, negotiate pricing, and finalize terms on your behalf.' },
  { num: '04', title: 'Production & QC', desc: 'We monitor production progress and conduct quality inspections at key stages.' },
  { num: '05', title: 'Shipping & Delivery', desc: 'We coordinate logistics and ensure your goods arrive safely and on time.' },
]

const ProcessSection = () => {
  return (
    <section className="py-16 md:py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-800">How Our Sourcing Process Works</h2>
          <p className="mt-4 text-slate-600 text-lg">
            A clear, structured approach that takes the guesswork out of buying from China.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
          {steps.map((step, idx) => (
            <div key={idx} className="text-center md:text-left">
              <div className="text-3xl font-bold text-sky mb-3">{step.num}</div>
              <h3 className="text-lg font-semibold text-slate-800 mb-2">{step.title}</h3>
              <p className="text-sm text-slate-600 leading-relaxed">{step.desc}</p>
            </div>
          ))}
        </div>
        <div className="text-center mt-10">
          <Link to="/how-it-works" className="inline-flex items-center text-sky font-semibold hover:text-sky-light transition-colors">
            Learn More About Our Process <ArrowRight className="ml-1 w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  )
}

const productCategories = [
  'Electronics & Components', 'Home & Garden', 'Apparel & Textiles',
  'Industrial Equipment', 'Auto Parts & Accessories', 'Health & Beauty',
  'Packaging & Printing', 'Building Materials', 'Toys & Sports',
  'Furniture & Decor', 'Food & Beverage Equipment', 'LED & Lighting'
]

const ProductsSection = () => {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-800">Products We Source</h2>
          <p className="mt-4 text-slate-600 text-lg">
            We source across 50+ product categories. Here are some of the most common industries we serve.
          </p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {productCategories.map((cat, idx) => (
            <div key={idx} className="flex items-center gap-3 bg-slate-50 rounded-lg p-4 border border-slate-100">
              <Package className="w-5 h-5 text-sky flex-shrink-0" />
              <span className="text-sm font-medium text-slate-700">{cat}</span>
            </div>
          ))}
        </div>
        <div className="text-center mt-10">
          <Link to="/products" className="inline-flex items-center text-sky font-semibold hover:text-sky-light transition-colors">
            See Full Product List <ArrowRight className="ml-1 w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  )
}

const problems = [
  { icon: AlertTriangle, title: 'Unreliable Suppliers', desc: 'Tired of suppliers who disappear after payment or deliver substandard goods? We verify every factory before you commit.' },
  { icon: AlertTriangle, title: 'Quality Issues', desc: 'Receiving defective products costs time and money. Our QC inspections catch problems before shipping.' },
  { icon: AlertTriangle, title: 'Communication Barriers', desc: 'Language and timezone gaps cause misunderstandings. We bridge the communication gap with bilingual project managers.' },
  { icon: AlertTriangle, title: 'Logistics Complexity', desc: 'Navigating Chinese shipping, customs, and documentation is complex. We handle it end-to-end.' },
]

const ProblemsSection = () => {
  return (
    <section className="py-16 md:py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-800">Problems We Solve</h2>
          <p className="mt-4 text-slate-600 text-lg">
            Sourcing from China comes with real challenges. Here's how we address the most common pain points.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {problems.map((problem, idx) => (
            <div key={idx} className="bg-white rounded-xl border border-slate-100 p-6 md:p-8">
              <div className="w-10 h-10 bg-amber-50 rounded-lg flex items-center justify-center mb-4">
                <problem.icon className="w-5 h-5 text-gold" />
              </div>
              <h3 className="text-lg font-semibold text-slate-800 mb-2">{problem.title}</h3>
              <p className="text-slate-600 text-sm leading-relaxed">{problem.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

const trustPoints = [
  { icon: Users, value: '1,200+', label: 'Projects Completed' },
  { icon: Globe, value: '30+', label: 'Countries Served' },
  { icon: Factory, value: '500+', label: 'Verified Suppliers' },
  { icon: Star, value: '10+', label: 'Years Experience' },
]

const TrustSection = () => {
  return (
    <section className="py-16 md:py-24 bg-navy">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white">Why Buyers Trust SSourcing China</h2>
          <p className="mt-4 text-slate-300 text-lg max-w-2xl mx-auto">
            We've built our reputation on transparency, reliability, and results.
          </p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {trustPoints.map((point, idx) => (
            <div key={idx} className="text-center">
              <point.icon className="w-8 h-8 text-sky mx-auto mb-3" />
              <div className="text-3xl md:text-4xl font-bold text-white">{point.value}</div>
              <div className="text-sm text-slate-300 mt-1">{point.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

const caseStudies = [
  {
    id: 'electronics-us',
    title: 'Electronics Retailer — USA',
    category: 'Consumer Electronics',
    result: 'Reduced unit cost by 22% while improving quality consistency across 3 product lines.',
  },
  {
    id: 'furniture-eu',
    title: 'Furniture Brand — Europe',
    category: 'Home & Garden',
    result: 'Successfully sourced custom furniture from 2 verified factories with zero defect shipments over 8 months.',
  },
  {
    id: 'apparel-au',
    title: 'Apparel Company — Australia',
    category: 'Textiles & Apparel',
    result: 'Established a reliable supply chain for seasonal collections with 98% on-time delivery rate.',
  },
]

const CaseStudiesSection = () => {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-800">Case Studies</h2>
          <p className="mt-4 text-slate-600 text-lg">
            Real results from real sourcing projects. See how we've helped businesses like yours.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {caseStudies.map((cs) => (
            <div key={cs.id} className="bg-white rounded-xl border border-slate-100 p-6 md:p-8 hover:shadow-md transition-shadow">
              <span className="text-xs font-medium text-sky bg-blue-50 px-2.5 py-1 rounded-full">{cs.category}</span>
              <h3 className="text-lg font-semibold text-slate-800 mt-4 mb-3">{cs.title}</h3>
              <p className="text-slate-600 text-sm leading-relaxed">{cs.result}</p>
            </div>
          ))}
        </div>
        <div className="text-center mt-10">
          <Link to="/case-studies" className="inline-flex items-center text-sky font-semibold hover:text-sky-light transition-colors">
            View All Case Studies <ArrowRight className="ml-1 w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  )
}

const faqs = [
  { q: 'What is the minimum order quantity (MOQ)?', a: 'MOQ varies by product and supplier. We work with factories that accommodate both small trial orders (100-500 units) and large-volume production runs.' },
  { q: 'How do you verify suppliers?', a: 'We conduct on-site factory audits checking business licenses, production capacity, quality systems, worker conditions, and past export records.' },
  { q: 'What are your service fees?', a: 'Our fees depend on the scope of services required. We offer transparent pricing with no hidden costs. Contact us for a detailed quote based on your project.' },
  { q: 'How long does the sourcing process take?', a: 'Typically 2-4 weeks for supplier identification and verification, plus production lead time which varies by product (usually 30-60 days).' },
  { q: 'Do you handle shipping and customs?', a: 'Yes. We coordinate freight forwarding, customs documentation, and can arrange delivery to your warehouse via sea, air, or rail freight.' },
]

const FAQSection = () => {
  const [openIdx, setOpenIdx] = useState(null)

  return (
    <section className="py-16 md:py-24 bg-slate-50">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-800">Frequently Asked Questions</h2>
          <p className="mt-4 text-slate-600 text-lg">
            Common questions from buyers considering a China sourcing agent.
          </p>
        </div>
        <div className="space-y-3">
          {faqs.map((faq, idx) => (
            <div key={idx} className="bg-white rounded-lg border border-slate-100 overflow-hidden">
              <button
                onClick={() => setOpenIdx(openIdx === idx ? null : idx)}
                className="w-full flex items-center justify-between p-5 text-left bg-transparent border-none cursor-pointer"
              >
                <span className="text-sm font-medium text-slate-800 pr-4">{faq.q}</span>
                <ChevronDown className={`w-5 h-5 text-slate-400 flex-shrink-0 transition-transform ${openIdx === idx ? 'rotate-180' : ''}`} />
              </button>
              {openIdx === idx && (
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

const CTASection = () => {
  return (
    <section className="py-16 md:py-24 bg-sky">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white">Ready to Source from China?</h2>
        <p className="mt-4 text-blue-100 text-lg max-w-2xl mx-auto">
          Tell us what you're looking for and get a free sourcing plan within 24 hours. No commitment required.
        </p>
        <div className="mt-8">
          <Link
            to="/contact"
            className="inline-flex items-center bg-white text-sky px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-50 transition-colors"
          >
            Get a Free Sourcing Quote
            <ArrowRight className="ml-2 w-5 h-5" />
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
