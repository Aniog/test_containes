import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import {
  Search, ShieldCheck, ClipboardCheck, Truck, Factory, CheckCircle2,
  Globe, Users, Award, ArrowRight, HelpCircle, ChevronDown
} from 'lucide-react'
import { useState } from 'react'

const services = [
  { id: 'supplier-sourcing', icon: Search, title: 'Supplier Sourcing', desc: 'We identify and shortlist qualified manufacturers matching your product specs, MOQ, and budget requirements.' },
  { id: 'factory-verification', icon: ShieldCheck, title: 'Factory Verification', desc: 'On-site factory audits to verify production capacity, certifications, equipment, and business legitimacy.' },
  { id: 'quality-inspection', icon: ClipboardCheck, title: 'Quality Inspection', desc: 'Pre-shipment, during-production, and container loading inspections following AQL standards.' },
  { id: 'production-followup', icon: Factory, title: 'Production Follow-up', desc: 'Regular factory visits and progress reports to keep your order on schedule and within spec.' },
  { id: 'shipping-coordination', icon: Truck, title: 'Shipping & Logistics', desc: 'End-to-end freight coordination including customs documentation, consolidation, and door-to-door delivery.' },
  { id: 'sample-management', icon: CheckCircle2, title: 'Sample Management', desc: 'We handle sample requests, evaluation, and approval to ensure product quality before mass production.' },
]

const processSteps = [
  { step: '01', title: 'Share Your Requirements', desc: 'Tell us what you need — product specs, target price, quantity, and timeline.' },
  { step: '02', title: 'We Source & Shortlist', desc: 'Our team identifies 3-5 qualified suppliers and presents detailed comparison reports.' },
  { step: '03', title: 'Verify & Negotiate', desc: 'We audit factories, negotiate pricing, and finalize terms on your behalf.' },
  { step: '04', title: 'Manage Production & QC', desc: 'We monitor production milestones and conduct quality inspections at key stages.' },
  { step: '05', title: 'Ship to Your Door', desc: 'We coordinate logistics, handle documentation, and ensure on-time delivery.' },
]

const products = [
  'Electronics & Components', 'Home & Garden', 'Textiles & Apparel',
  'Industrial Equipment', 'Auto Parts', 'Packaging Materials',
  'Consumer Goods', 'Building Materials', 'Health & Beauty',
]

const problems = [
  { title: 'Unreliable Suppliers', desc: 'Tired of suppliers who disappear after payment or deliver substandard goods? We verify every factory before you commit.' },
  { title: 'Quality Issues', desc: 'Receiving defective products costs time and money. Our QC inspections catch problems before shipment.' },
  { title: 'Communication Barriers', desc: 'Language and timezone gaps cause costly misunderstandings. We bridge the gap with bilingual project managers.' },
  { title: 'Logistics Complexity', desc: 'Navigating Chinese customs, freight options, and documentation is overwhelming. We handle it all.' },
]

const trustPoints = [
  { icon: Globe, value: '30+', label: 'Countries Served' },
  { icon: Factory, value: '500+', label: 'Factories Audited' },
  { icon: Users, value: '200+', label: 'Active Clients' },
  { icon: Award, value: '12+', label: 'Years Experience' },
]

const faqs = [
  { q: 'What is a sourcing agent and why do I need one?', a: 'A sourcing agent acts as your local representative in China. We find suppliers, verify factories, negotiate prices, inspect quality, and coordinate shipping — saving you time, money, and risk compared to doing it yourself remotely.' },
  { q: 'How much does your service cost?', a: 'Our fees depend on the scope of work. Typically we charge a service fee of 5-8% of the order value, or a fixed project fee for specific services like factory audits or inspections. We provide a detailed quote after understanding your needs.' },
  { q: 'What is your minimum order requirement?', a: 'We work with orders of all sizes, though most of our clients place orders above $5,000. For smaller orders, we can help with consolidation services to meet factory MOQs.' },
  { q: 'How do you verify suppliers?', a: 'We conduct on-site factory audits checking business licenses, production capacity, quality systems, worker conditions, and past export records. We provide a detailed audit report with photos and recommendations.' },
  { q: 'How long does the sourcing process take?', a: 'Typically 2-4 weeks from requirement submission to supplier shortlist. The full cycle from sourcing to delivery depends on product complexity and shipping method, usually 6-12 weeks total.' },
]

export default function HomePage() {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <div ref={containerRef}>
      {/* Hero Section */}
      <section className="relative bg-[#0f2a4a] overflow-hidden">
        <div
          className="absolute inset-0 opacity-20"
          data-strk-bg-id="hero-bg-7f3a2c"
          data-strk-bg="[hero-subtitle] [hero-title]"
          data-strk-bg-ratio="16x9"
          data-strk-bg-width="1600"
        />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32">
          <div className="max-w-3xl">
            <p className="text-[#e86a2e] font-semibold text-sm uppercase tracking-wider mb-4">Trusted Sourcing Partner Since 2014</p>
            <h1 id="hero-title" className="text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-tight leading-tight">
              China Sourcing Agent for Global Buyers
            </h1>
            <p id="hero-subtitle" className="mt-6 text-lg md:text-xl text-neutral-200 leading-relaxed max-w-2xl">
              We help overseas businesses find reliable Chinese suppliers, verify factories, inspect quality, and coordinate shipping — so you can import with confidence.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center bg-[#e86a2e] hover:bg-[#d05a20] text-white font-semibold px-7 py-3.5 rounded-lg transition-colors text-base"
              >
                Get a Free Sourcing Quote
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <Link
                to="/how-it-works"
                className="inline-flex items-center justify-center border-2 border-white/30 text-white hover:bg-white/10 font-semibold px-7 py-3.5 rounded-lg transition-colors text-base"
              >
                See How It Works
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Bar */}
      <section className="bg-white border-b border-neutral-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {trustPoints.map((point) => (
              <div key={point.label} className="text-center">
                <point.icon className="w-8 h-8 text-[#e86a2e] mx-auto mb-2" />
                <p className="text-2xl md:text-3xl font-bold text-[#0f2a4a]">{point.value}</p>
                <p className="text-sm text-neutral-500 mt-1">{point.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="bg-neutral-50 py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <p className="text-[#e86a2e] font-semibold text-sm uppercase tracking-wider mb-2">What We Do</p>
            <h2 id="services-title" className="text-3xl md:text-4xl font-bold text-[#0f2a4a] tracking-tight">
              End-to-End Sourcing Services
            </h2>
            <p id="services-subtitle" className="mt-4 text-neutral-700 leading-relaxed">
              From finding the right supplier to delivering goods at your warehouse, we manage every step of the China sourcing process.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service) => (
              <div key={service.id} className="bg-white rounded-xl border border-neutral-200 p-6 hover:shadow-md transition-shadow">
                <service.icon className="w-10 h-10 text-[#e86a2e] mb-4" />
                <h3 className="text-lg font-semibold text-[#0f2a4a] mb-2">{service.title}</h3>
                <p className="text-sm text-neutral-700 leading-relaxed">{service.desc}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link to="/services" className="inline-flex items-center text-[#e86a2e] hover:text-[#d05a20] font-semibold transition-colors">
              View All Services <ArrowRight className="ml-1 w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="bg-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <p className="text-[#e86a2e] font-semibold text-sm uppercase tracking-wider mb-2">Our Process</p>
            <h2 id="process-title" className="text-3xl md:text-4xl font-bold text-[#0f2a4a] tracking-tight">
              How We Work With You
            </h2>
            <p className="mt-4 text-neutral-700 leading-relaxed">
              A clear, structured process that keeps you informed and in control at every stage.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
            {processSteps.map((step, idx) => (
              <div key={step.step} className="text-center md:text-left">
                <span className="inline-block text-3xl font-bold text-[#e86a2e] mb-2">{step.step}</span>
                <h3 className="text-base font-semibold text-[#0f2a4a] mb-2">{step.title}</h3>
                <p className="text-sm text-neutral-700 leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Products We Source */}
      <section className="bg-neutral-50 py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-[#e86a2e] font-semibold text-sm uppercase tracking-wider mb-2">Product Categories</p>
              <h2 id="products-title" className="text-3xl md:text-4xl font-bold text-[#0f2a4a] tracking-tight">
                Products We Source
              </h2>
              <p id="products-subtitle" className="mt-4 text-neutral-700 leading-relaxed">
                We source across a wide range of industries. If it's made in China, we can find the right supplier for you.
              </p>
              <div className="mt-6 flex flex-wrap gap-2">
                {products.map((product) => (
                  <span key={product} className="bg-white border border-neutral-200 text-neutral-700 text-sm font-medium px-4 py-2 rounded-full">
                    {product}
                  </span>
                ))}
              </div>
              <Link to="/products" className="inline-flex items-center mt-6 text-[#e86a2e] hover:text-[#d05a20] font-semibold transition-colors">
                See Full Product List <ArrowRight className="ml-1 w-4 h-4" />
              </Link>
            </div>
            <div className="relative">
              <img
                data-strk-img-id="products-factory-img-4b2e1a"
                data-strk-img="[products-subtitle] [products-title]"
                data-strk-img-ratio="4x3"
                data-strk-img-width="600"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                alt="Chinese factory production line"
                className="rounded-xl shadow-lg w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Problems We Solve */}
      <section className="bg-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <p className="text-[#e86a2e] font-semibold text-sm uppercase tracking-wider mb-2">Why Work With Us</p>
            <h2 id="problems-title" className="text-3xl md:text-4xl font-bold text-[#0f2a4a] tracking-tight">
              Problems We Solve for Importers
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {problems.map((problem) => (
              <div key={problem.title} className="bg-neutral-50 rounded-xl border border-neutral-200 p-6">
                <h3 className="text-lg font-semibold text-[#0f2a4a] mb-2">{problem.title}</h3>
                <p className="text-sm text-neutral-700 leading-relaxed">{problem.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies Preview */}
      <section className="bg-neutral-50 py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <p className="text-[#e86a2e] font-semibold text-sm uppercase tracking-wider mb-2">Results</p>
            <h2 id="cases-title" className="text-3xl md:text-4xl font-bold text-[#0f2a4a] tracking-tight">
              Client Success Stories
            </h2>
            <p id="cases-subtitle" className="mt-4 text-neutral-700 leading-relaxed">
              Real results from real sourcing projects we've managed for clients worldwide.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { id: 'case-electronics', title: 'Electronics Retailer, USA', result: 'Reduced unit cost by 22% while improving product quality through verified supplier switch.', imgId: 'case-elec-img-9c4d2f' },
              { id: 'case-furniture', title: 'Furniture Brand, Germany', result: 'Established reliable supply chain for custom furniture with 98% on-time delivery rate.', imgId: 'case-furn-img-3a7b1e' },
              { id: 'case-apparel', title: 'Apparel Company, Australia', result: 'Sourced 15 new fabric suppliers and reduced lead time from 8 weeks to 5 weeks.', imgId: 'case-aprl-img-6d8f4c' },
            ].map((caseItem) => (
              <div key={caseItem.id} className="bg-white rounded-xl border border-neutral-200 overflow-hidden hover:shadow-md transition-shadow">
                <img
                  data-strk-img-id={caseItem.imgId}
                  data-strk-img={`[${caseItem.id}-title] [cases-title]`}
                  data-strk-img-ratio="16x9"
                  data-strk-img-width="400"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  alt={caseItem.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 id={`${caseItem.id}-title`} className="text-base font-semibold text-[#0f2a4a] mb-2">{caseItem.title}</h3>
                  <p className="text-sm text-neutral-700 leading-relaxed">{caseItem.result}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link to="/case-studies" className="inline-flex items-center text-[#e86a2e] hover:text-[#d05a20] font-semibold transition-colors">
              View All Case Studies <ArrowRight className="ml-1 w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <FAQSection faqs={faqs} />

      {/* CTA Section */}
      <section className="bg-[#0f2a4a] py-16 md:py-24">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight">
            Ready to Source from China with Confidence?
          </h2>
          <p className="mt-4 text-lg text-neutral-200 leading-relaxed">
            Tell us what you're looking for and get a free, no-obligation sourcing quote within 24 hours.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center justify-center mt-8 bg-[#e86a2e] hover:bg-[#d05a20] text-white font-semibold px-8 py-4 rounded-lg transition-colors text-lg"
          >
            Get a Free Sourcing Quote
            <ArrowRight className="ml-2 w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  )
}

function FAQSection({ faqs }) {
  const [openIndex, setOpenIndex] = useState(null)

  return (
    <section className="bg-white py-16 md:py-24">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <p className="text-[#e86a2e] font-semibold text-sm uppercase tracking-wider mb-2">FAQ</p>
          <h2 className="text-3xl md:text-4xl font-bold text-[#0f2a4a] tracking-tight">
            Frequently Asked Questions
          </h2>
        </div>
        <div className="space-y-3">
          {faqs.map((faq, idx) => (
            <div key={idx} className="border border-neutral-200 rounded-lg overflow-hidden">
              <button
                onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                className="w-full flex items-center justify-between px-5 py-4 text-left bg-white hover:bg-neutral-50 transition-colors border-none"
              >
                <span className="text-sm font-semibold text-[#0f2a4a] pr-4">{faq.q}</span>
                <ChevronDown className={`w-5 h-5 text-neutral-500 shrink-0 transition-transform ${openIndex === idx ? 'rotate-180' : ''}`} />
              </button>
              {openIndex === idx && (
                <div className="px-5 pb-4">
                  <p className="text-sm text-neutral-700 leading-relaxed">{faq.a}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
