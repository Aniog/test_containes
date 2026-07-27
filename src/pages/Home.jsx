import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import {
  Search, ShieldCheck, ClipboardCheck, Factory, Ship, CheckCircle,
  ArrowRight, Globe, Users, Award, TrendingUp, Package, Cpu,
  Shirt, Sofa, Wrench, Lightbulb, HelpCircle, ChevronDown
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
        data-strk-bg-id="hero-bg-7f3a2c"
        data-strk-bg="[hero-subtitle] [hero-title]"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1600"
      />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32">
        <div className="max-w-3xl">
          <h1 id="hero-title" className="text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-tight leading-tight">
            China Sourcing Agent for Global Buyers
          </h1>
          <p id="hero-subtitle" className="mt-6 text-lg md:text-xl text-slate-300 leading-relaxed max-w-2xl">
            We help overseas businesses find reliable Chinese suppliers, verify factories, inspect quality, follow production, and coordinate shipping — so you can import with confidence.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center bg-brand-blue text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-700 transition-colors"
            >
              Get a Free Sourcing Quote
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
            <Link
              to="/how-it-works"
              className="inline-flex items-center justify-center border-2 border-white text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white hover:text-brand-navy transition-colors"
            >
              See How It Works
            </Link>
          </div>
          <div className="mt-12 flex flex-wrap gap-8 text-sm text-slate-300">
            <div className="flex items-center gap-2">
              <CheckCircle className="w-5 h-5 text-green-400" />
              <span>500+ Verified Suppliers</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="w-5 h-5 text-green-400" />
              <span>10+ Years Experience</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="w-5 h-5 text-green-400" />
              <span>30+ Countries Served</span>
            </div>
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
      description: 'We identify and shortlist qualified manufacturers matching your product specs, MOQ, and budget requirements.',
    },
    {
      icon: ShieldCheck,
      title: 'Factory Verification',
      description: 'On-site factory audits to verify production capacity, certifications, equipment, and business legitimacy.',
    },
    {
      icon: ClipboardCheck,
      title: 'Quality Inspection',
      description: 'Pre-shipment, during-production, and container loading inspections following AQL standards.',
    },
    {
      icon: Factory,
      title: 'Production Follow-up',
      description: 'Regular factory visits and progress reports to keep your order on schedule and within spec.',
    },
    {
      icon: Ship,
      title: 'Shipping Coordination',
      description: 'End-to-end logistics support including freight booking, customs documentation, and delivery tracking.',
    },
    {
      icon: Globe,
      title: 'Negotiation Support',
      description: 'Leverage our local expertise to negotiate better pricing, payment terms, and contract conditions.',
    },
  ]

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-brand-navy tracking-tight">
            Our Sourcing Services
          </h2>
          <p className="mt-4 text-lg text-slate-600">
            Comprehensive support at every stage of your China sourcing journey — from finding suppliers to delivering goods at your door.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-xl border border-brand-border p-6 md:p-8 hover:shadow-lg transition-shadow group"
            >
              <div className="w-12 h-12 rounded-lg bg-blue-50 flex items-center justify-center mb-5 group-hover:bg-brand-blue transition-colors">
                <service.icon className="w-6 h-6 text-brand-blue group-hover:text-white transition-colors" />
              </div>
              <h3 className="text-xl font-semibold text-brand-navy mb-3">{service.title}</h3>
              <p className="text-slate-600 leading-relaxed">{service.description}</p>
            </div>
          ))}
        </div>
        <div className="text-center mt-10">
          <Link
            to="/services"
            className="inline-flex items-center text-brand-blue font-semibold hover:underline"
          >
            View All Services <ArrowRight className="ml-1 w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  )
}

function ProcessSection() {
  const steps = [
    { number: '01', title: 'Share Your Requirements', description: 'Tell us what you need — product specs, target price, quantity, and timeline.' },
    { number: '02', title: 'Supplier Matching', description: 'We research and shortlist 3–5 verified suppliers that match your criteria.' },
    { number: '03', title: 'Samples & Negotiation', description: 'We arrange samples, negotiate pricing, and finalize terms on your behalf.' },
    { number: '04', title: 'Production & QC', description: 'We monitor production progress and conduct quality inspections at key stages.' },
    { number: '05', title: 'Shipping & Delivery', description: 'We coordinate logistics and documentation for smooth delivery to your warehouse.' },
  ]

  return (
    <section className="py-16 md:py-24 bg-brand-gray">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-brand-navy tracking-tight">
            How Our Sourcing Process Works
          </h2>
          <p className="mt-4 text-lg text-slate-600">
            A clear, structured approach that takes the guesswork out of importing from China.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
          {steps.map((step, index) => (
            <div key={index} className="text-center md:text-left">
              <div className="text-4xl font-bold text-brand-blue opacity-30 mb-2">{step.number}</div>
              <h3 className="text-lg font-semibold text-brand-navy mb-2">{step.title}</h3>
              <p className="text-sm text-slate-600 leading-relaxed">{step.description}</p>
            </div>
          ))}
        </div>
        <div className="text-center mt-10">
          <Link
            to="/how-it-works"
            className="inline-flex items-center bg-brand-blue text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
          >
            Learn More About Our Process <ArrowRight className="ml-2 w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  )
}

function ProductsSection() {
  const containerRef = useRef(null)
  const categories = [
    { id: 'electronics', icon: Cpu, title: 'Electronics & Components', titleId: 'prod-electronics-title', imgId: 'prod-electronics-img-4a2b1c' },
    { id: 'textiles', icon: Shirt, title: 'Textiles & Apparel', titleId: 'prod-textiles-title', imgId: 'prod-textiles-img-5b3c2d' },
    { id: 'furniture', icon: Sofa, title: 'Furniture & Home Goods', titleId: 'prod-furniture-title', imgId: 'prod-furniture-img-6c4d3e' },
    { id: 'machinery', icon: Wrench, title: 'Machinery & Parts', titleId: 'prod-machinery-title', imgId: 'prod-machinery-img-7d5e4f' },
    { id: 'packaging', icon: Package, title: 'Packaging & Printing', titleId: 'prod-packaging-title', imgId: 'prod-packaging-img-8e6f5g' },
    { id: 'lighting', icon: Lightbulb, title: 'Lighting & Electrical', titleId: 'prod-lighting-title', imgId: 'prod-lighting-img-9f7g6h' },
  ]

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <section ref={containerRef} className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-brand-navy tracking-tight">
            Products We Source
          </h2>
          <p className="mt-4 text-lg text-slate-600">
            From consumer electronics to industrial machinery — we source across all major product categories from China's manufacturing hubs.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((cat) => (
            <div key={cat.id} className="relative rounded-xl overflow-hidden group cursor-pointer">
              <img
                alt={cat.title}
                data-strk-img-id={cat.imgId}
                data-strk-img={`[${cat.titleId}]`}
                data-strk-img-ratio="4x3"
                data-strk-img-width="600"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 4 3'/%3E"
                className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-navy/80 to-transparent flex items-end p-5">
                <div className="flex items-center gap-3">
                  <cat.icon className="w-5 h-5 text-white" />
                  <h3 id={cat.titleId} className="text-white font-semibold">{cat.title}</h3>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-10">
          <Link
            to="/products"
            className="inline-flex items-center text-brand-blue font-semibold hover:underline"
          >
            See All Product Categories <ArrowRight className="ml-1 w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  )
}

function ProblemsSection() {
  const problems = [
    { title: 'Unreliable Suppliers', description: 'We pre-screen and audit every factory so you only work with verified, legitimate manufacturers.' },
    { title: 'Quality Issues', description: 'Our inspectors check your goods at multiple production stages using international QC standards.' },
    { title: 'Communication Barriers', description: 'We bridge the language and cultural gap, ensuring your requirements are clearly understood.' },
    { title: 'Shipping Delays', description: 'We coordinate logistics proactively and keep you informed at every milestone.' },
    { title: 'Hidden Costs', description: 'Transparent pricing with no surprises — we clarify all costs upfront before you commit.' },
    { title: 'Intellectual Property Risk', description: 'We help you protect your designs with NDA agreements and supplier vetting.' },
  ]

  return (
    <section className="py-16 md:py-24 bg-brand-gray">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-brand-navy tracking-tight">
            Problems We Solve
          </h2>
          <p className="mt-4 text-lg text-slate-600">
            Importing from China comes with real challenges. Here's how we address the most common pain points.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {problems.map((problem, index) => (
            <div key={index} className="bg-white rounded-xl border border-brand-border p-6 hover:shadow-md transition-shadow">
              <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center mb-4">
                <CheckCircle className="w-5 h-5 text-green-600" />
              </div>
              <h3 className="text-lg font-semibold text-brand-navy mb-2">{problem.title}</h3>
              <p className="text-slate-600 text-sm leading-relaxed">{problem.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function TrustSection() {
  const stats = [
    { icon: Users, value: '1,200+', label: 'Clients Served' },
    { icon: Factory, value: '500+', label: 'Verified Factories' },
    { icon: Globe, value: '30+', label: 'Countries' },
    { icon: Award, value: '10+', label: 'Years Experience' },
  ]

  return (
    <section className="py-16 md:py-24 bg-brand-navy">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight">
            Why Buyers Trust Us
          </h2>
          <p className="mt-4 text-lg text-slate-300">
            Numbers that reflect our commitment to reliable, transparent sourcing services.
          </p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <stat.icon className="w-8 h-8 text-brand-blue mx-auto mb-3" />
              <div className="text-3xl md:text-4xl font-bold text-white">{stat.value}</div>
              <div className="mt-1 text-sm text-slate-300">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function CaseStudiesSection() {
  const containerRef = useRef(null)
  const cases = [
    {
      id: 'case-electronics',
      title: 'Electronics Retailer — USA',
      result: 'Reduced unit cost by 22% with verified supplier',
      category: 'Electronics',
      titleId: 'case-electronics-title',
      descId: 'case-electronics-desc',
      imgId: 'case-electronics-img-a1b2c3',
    },
    {
      id: 'case-furniture',
      title: 'Furniture Brand — Germany',
      result: 'Passed all QC checks, zero defects on first shipment',
      category: 'Furniture',
      titleId: 'case-furniture-title',
      descId: 'case-furniture-desc',
      imgId: 'case-furniture-img-d4e5f6',
    },
    {
      id: 'case-apparel',
      title: 'Apparel Startup — Australia',
      result: 'From concept to delivery in 45 days',
      category: 'Textiles',
      titleId: 'case-apparel-title',
      descId: 'case-apparel-desc',
      imgId: 'case-apparel-img-g7h8i9',
    },
  ]

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <section ref={containerRef} className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-brand-navy tracking-tight">
            Client Success Stories
          </h2>
          <p className="mt-4 text-lg text-slate-600">
            Real results from real sourcing projects we've managed for international buyers.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {cases.map((item) => (
            <div key={item.id} className="bg-white rounded-xl border border-brand-border overflow-hidden hover:shadow-lg transition-shadow">
              <img
                alt={item.title}
                data-strk-img-id={item.imgId}
                data-strk-img={`[${item.descId}] [${item.titleId}]`}
                data-strk-img-ratio="16x9"
                data-strk-img-width="600"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 9'/%3E"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <span className="text-xs font-medium text-brand-blue bg-blue-50 px-2 py-1 rounded">{item.category}</span>
                <h3 id={item.titleId} className="mt-3 text-lg font-semibold text-brand-navy">{item.title}</h3>
                <p id={item.descId} className="mt-2 text-slate-600 text-sm">{item.result}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-10">
          <Link
            to="/case-studies"
            className="inline-flex items-center text-brand-blue font-semibold hover:underline"
          >
            View All Case Studies <ArrowRight className="ml-1 w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  )
}

function FAQSection() {
  const [openIndex, setOpenIndex] = useState(null)
  const faqs = [
    { question: 'What is a sourcing agent and why do I need one?', answer: 'A sourcing agent acts as your local representative in China. We find suppliers, verify their legitimacy, negotiate prices, inspect quality, and coordinate shipping — saving you time, money, and risk compared to doing it yourself remotely.' },
    { question: 'How much does your service cost?', answer: 'Our fees depend on the scope of work. Typically we charge a service fee of 5–8% of the order value, or a fixed project fee for specific tasks like factory audits or inspections. We provide a clear quote before any work begins.' },
    { question: 'How do you verify suppliers?', answer: 'We conduct on-site factory visits checking business licenses, production capacity, equipment condition, worker conditions, export experience, and existing certifications. We provide a detailed audit report with photos.' },
    { question: 'What is your minimum order requirement?', answer: 'We work with orders of all sizes, though most suppliers have their own MOQ (Minimum Order Quantity). We can help you find suppliers willing to work with smaller quantities for initial orders.' },
    { question: 'How long does the sourcing process take?', answer: 'Typically 2–4 weeks from requirement submission to supplier shortlist. Sample production adds 1–3 weeks. Total timeline from inquiry to first shipment is usually 6–12 weeks depending on product complexity.' },
    { question: 'Do you handle shipping and customs?', answer: 'Yes. We coordinate with freight forwarders for ocean, air, or rail shipping. We prepare all export documentation and can assist with customs clearance requirements for your destination country.' },
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
          {faqs.map((faq, index) => (
            <div key={index} className="bg-white rounded-lg border border-brand-border overflow-hidden">
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full flex items-center justify-between p-5 text-left bg-transparent border-none cursor-pointer"
              >
                <span className="font-medium text-brand-navy pr-4">{faq.question}</span>
                <ChevronDown className={`w-5 h-5 text-slate-400 flex-shrink-0 transition-transform ${openIndex === index ? 'rotate-180' : ''}`} />
              </button>
              {openIndex === index && (
                <div className="px-5 pb-5 text-slate-600 text-sm leading-relaxed">
                  {faq.answer}
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
    <section className="py-16 md:py-24 bg-brand-blue">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight">
          Ready to Source from China with Confidence?
        </h2>
        <p className="mt-4 text-lg text-blue-100 max-w-2xl mx-auto">
          Tell us what you're looking for and get a free, no-obligation sourcing proposal within 24 hours.
        </p>
        <div className="mt-8">
          <Link
            to="/contact"
            className="inline-flex items-center bg-white text-brand-blue px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-50 transition-colors"
          >
            Get a Free Sourcing Quote
            <ArrowRight className="ml-2 w-5 h-5" />
          </Link>
        </div>
      </div>
    </section>
  )
}

export default function Home() {
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
