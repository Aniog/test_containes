import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import {
  Search, ShieldCheck, ClipboardCheck, Factory, Ship, CheckCircle2,
  ArrowRight, Users, Award, Globe, TrendingUp, Package, Cpu, Shirt,
  Home as HomeIcon, Wrench, Lightbulb, HelpCircle, ChevronDown, ChevronUp
} from 'lucide-react'
import { useState } from 'react'
import CTAButton from '../components/shared/CTAButton'
import SectionHeading from '../components/shared/SectionHeading'

export default function Home() {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <div ref={containerRef}>
      <HeroSection />
      <TrustBar />
      <ServicesSection />
      <ProcessSection />
      <ProductsSection />
      <ProblemsSection />
      <CaseStudiesPreview />
      <FAQSection />
      <CTASection />
    </div>
  )
}

function HeroSection() {
  return (
    <section className="relative bg-[#0f2a4a] overflow-hidden">
      <div
        className="absolute inset-0 opacity-20"
        data-strk-bg-id="hero-bg-main-a7f3c2"
        data-strk-bg="[hero-subtitle] [hero-title]"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1600"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-[#0f2a4a] via-[#0f2a4a]/95 to-[#0f2a4a]/70" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32">
        <div className="max-w-2xl">
          <p className="text-[#e86c2b] font-semibold text-sm uppercase tracking-wider mb-4">
            Trusted Sourcing Partner Since 2015
          </p>
          <h1 id="hero-title" className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
            China Sourcing Agent for Global Buyers
          </h1>
          <p id="hero-subtitle" className="text-lg md:text-xl text-slate-300 mb-8 leading-relaxed">
            We help overseas businesses find reliable Chinese suppliers, verify factories, inspect quality, follow production, and coordinate shipping — so you can buy with confidence.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <CTAButton>Get a Free Sourcing Quote</CTAButton>
            <CTAButton variant="white" to="/how-it-works">See How It Works</CTAButton>
          </div>
        </div>
      </div>
    </section>
  )
}

function TrustBar() {
  const stats = [
    { icon: Users, value: '500+', label: 'Clients Served' },
    { icon: Factory, value: '2,000+', label: 'Factories Verified' },
    { icon: Package, value: '10,000+', label: 'Orders Managed' },
    { icon: Globe, value: '35+', label: 'Countries Reached' },
  ]

  return (
    <section className="bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <stat.icon className="w-6 h-6 text-[#e86c2b] mx-auto mb-2" />
              <p className="text-2xl md:text-3xl font-bold text-[#0f2a4a]">{stat.value}</p>
              <p className="text-sm text-slate-600 mt-1">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function ServicesSection() {
  const services = [
    { icon: Search, title: 'Supplier Sourcing', desc: 'We identify and shortlist qualified manufacturers matching your product specs, MOQ, and budget requirements.' },
    { icon: ShieldCheck, title: 'Factory Verification', desc: 'On-site audits covering business licenses, production capacity, quality systems, and worker conditions.' },
    { icon: ClipboardCheck, title: 'Quality Inspection', desc: 'Pre-production, during-production, and pre-shipment inspections with detailed photo reports.' },
    { icon: Factory, title: 'Production Follow-up', desc: 'Regular factory visits and progress updates to keep your order on schedule and within spec.' },
    { icon: Ship, title: 'Shipping Coordination', desc: 'End-to-end logistics support including freight booking, customs documentation, and delivery tracking.' },
    { icon: TrendingUp, title: 'Price Negotiation', desc: 'Leverage our local market knowledge to secure competitive pricing and favorable payment terms.' },
  ]

  return (
    <section className="bg-slate-50 py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="Our Sourcing Services"
          subtitle="End-to-end support from supplier identification to delivery at your warehouse."
        />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => (
            <div key={service.title} className="bg-white rounded-xl p-6 border border-slate-200 hover:shadow-md transition-shadow">
              <service.icon className="w-10 h-10 text-[#1e4d7b] mb-4" />
              <h3 className="text-lg font-semibold text-slate-900 mb-2">{service.title}</h3>
              <p className="text-sm text-slate-600 leading-relaxed">{service.desc}</p>
            </div>
          ))}
        </div>
        <div className="text-center mt-10">
          <CTAButton variant="secondary" to="/services">
            View All Services <ArrowRight className="w-4 h-4 ml-2 inline" />
          </CTAButton>
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
    { num: '04', title: 'Production & QC', desc: 'We monitor production and conduct inspections at key milestones.' },
    { num: '05', title: 'Ship & Deliver', desc: 'We coordinate logistics and ensure your goods arrive safely and on time.' },
  ]

  return (
    <section className="bg-white py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="How Our Sourcing Process Works"
          subtitle="A transparent, step-by-step approach that keeps you in control."
        />
        <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
          {steps.map((step, i) => (
            <div key={step.num} className="text-center relative">
              <div className="w-14 h-14 bg-[#0f2a4a] text-white rounded-full flex items-center justify-center mx-auto mb-4 text-lg font-bold">
                {step.num}
              </div>
              {i < steps.length - 1 && (
                <div className="hidden md:block absolute top-7 left-[60%] w-[80%] h-0.5 bg-slate-200" />
              )}
              <h3 className="text-sm font-semibold text-slate-900 mb-2">{step.title}</h3>
              <p className="text-xs text-slate-600 leading-relaxed">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function ProductsSection() {
  const categories = [
    { icon: Cpu, name: 'Electronics & Components' },
    { icon: Shirt, name: 'Apparel & Textiles' },
    { icon: HomeIcon, name: 'Home & Garden' },
    { icon: Wrench, name: 'Industrial & Hardware' },
    { icon: Package, name: 'Packaging & Printing' },
    { icon: Lightbulb, name: 'Lighting & Electrical' },
  ]

  return (
    <section className="bg-slate-50 py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="Products We Source"
          subtitle="From electronics to textiles, we cover a wide range of product categories."
        />
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {categories.map((cat) => (
            <div key={cat.name} className="bg-white rounded-xl p-5 border border-slate-200 text-center hover:border-[#1e4d7b] transition-colors">
              <cat.icon className="w-8 h-8 text-[#1e4d7b] mx-auto mb-3" />
              <p className="text-xs font-medium text-slate-800">{cat.name}</p>
            </div>
          ))}
        </div>
        <div className="text-center mt-10">
          <CTAButton variant="secondary" to="/products">
            See All Categories <ArrowRight className="w-4 h-4 ml-2 inline" />
          </CTAButton>
        </div>
      </div>
    </section>
  )
}

function ProblemsSection() {
  const problems = [
    { title: 'Unreliable Suppliers', solution: 'We verify every factory on-site before recommending them to you.' },
    { title: 'Quality Issues', solution: 'Multi-stage inspections catch defects before goods leave the factory.' },
    { title: 'Communication Barriers', solution: 'Our bilingual team bridges language and cultural gaps seamlessly.' },
    { title: 'Shipping Delays', solution: 'Proactive logistics management keeps your timeline on track.' },
    { title: 'Hidden Costs', solution: 'Transparent pricing with no surprise fees — you know costs upfront.' },
    { title: 'Scam Risk', solution: 'Background checks and verified business licenses protect your investment.' },
  ]

  return (
    <section className="bg-white py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="Problems We Solve"
          subtitle="Common sourcing challenges that cost businesses time and money."
        />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {problems.map((item) => (
            <div key={item.title} className="bg-slate-50 rounded-xl p-6 border border-slate-200">
              <h3 className="text-base font-semibold text-slate-900 mb-2 flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
                {item.title}
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed pl-7">{item.solution}</p>
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
      id: 'electronics-us',
      title: 'Electronics Retailer, USA',
      result: 'Reduced unit cost by 22% while improving product quality.',
      category: 'Electronics',
    },
    {
      id: 'furniture-eu',
      title: 'Furniture Brand, Germany',
      result: 'Found 3 verified factories and shipped first container in 45 days.',
      category: 'Home & Garden',
    },
    {
      id: 'apparel-au',
      title: 'Apparel Startup, Australia',
      result: 'Launched private-label clothing line with zero defect rate on first order.',
      category: 'Apparel',
    },
  ]

  return (
    <section className="bg-[#0f2a4a] py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="Client Success Stories"
          subtitle="Real results from real sourcing projects."
          light
        />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {cases.map((c) => (
            <div key={c.id} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <span className="text-xs font-medium text-[#e86c2b] uppercase tracking-wider">{c.category}</span>
              <h3 className="text-lg font-semibold text-white mt-2 mb-3">{c.title}</h3>
              <p className="text-sm text-slate-300 leading-relaxed">{c.result}</p>
            </div>
          ))}
        </div>
        <div className="text-center mt-10">
          <CTAButton variant="white" to="/case-studies">
            View All Case Studies <ArrowRight className="w-4 h-4 ml-2 inline" />
          </CTAButton>
        </div>
      </div>
    </section>
  )
}

function FAQSection() {
  const faqs = [
    { q: 'What is the minimum order quantity (MOQ)?', a: 'MOQ varies by product and factory. We work with suppliers offering MOQs from as low as 100 units for many product categories.' },
    { q: 'How long does the sourcing process take?', a: 'Typically 2–4 weeks from initial brief to verified supplier shortlist. Sample production adds another 1–2 weeks depending on complexity.' },
    { q: 'Do you charge for the initial consultation?', a: 'No. Your first consultation and sourcing quote are completely free. We only charge once you decide to proceed with a project.' },
    { q: 'Which regions in China do you cover?', a: 'We cover all major manufacturing hubs including Guangdong, Zhejiang, Jiangsu, Fujian, and Shandong provinces.' },
    { q: 'Can you handle small orders?', a: 'Yes. While some factories have higher MOQs, we have a network of suppliers who accommodate smaller orders, especially for first-time buyers.' },
  ]

  const [openIndex, setOpenIndex] = useState(null)

  return (
    <section className="bg-slate-50 py-16 md:py-24">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading title="Frequently Asked Questions" />
        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <div key={i} className="bg-white rounded-lg border border-slate-200 overflow-hidden">
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full flex items-center justify-between px-5 py-4 text-left hover:bg-slate-50 transition-colors"
              >
                <span className="text-sm font-medium text-slate-900 pr-4">{faq.q}</span>
                {openIndex === i ? (
                  <ChevronUp className="w-4 h-4 text-slate-500 shrink-0" />
                ) : (
                  <ChevronDown className="w-4 h-4 text-slate-500 shrink-0" />
                )}
              </button>
              {openIndex === i && (
                <div className="px-5 pb-4">
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
    <section className="bg-white py-16 md:py-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
          Ready to Source from China with Confidence?
        </h2>
        <p className="text-lg text-slate-600 mb-8 max-w-2xl mx-auto">
          Tell us what you need and get a free, no-obligation sourcing plan within 48 hours.
        </p>
        <CTAButton>Get a Free Sourcing Quote</CTAButton>
      </div>
    </section>
  )
}
