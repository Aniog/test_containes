import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import {
  Search, ShieldCheck, ClipboardCheck, Factory, Ship, Users,
  CheckCircle, ArrowRight, Star, Globe, Clock, Award, ChevronDown, ChevronUp
} from 'lucide-react'
import { useState } from 'react'

const services = [
  { id: 'supplier-sourcing', icon: Search, title: 'Supplier Sourcing', desc: 'We identify and shortlist qualified manufacturers matching your product specs, MOQ, and budget.' },
  { id: 'factory-verification', icon: ShieldCheck, title: 'Factory Verification', desc: 'On-site audits to verify production capacity, certifications, and business legitimacy.' },
  { id: 'quality-inspection', icon: ClipboardCheck, title: 'Quality Inspection', desc: 'Pre-shipment, during production, and container loading inspections with detailed reports.' },
  { id: 'production-followup', icon: Factory, title: 'Production Follow-up', desc: 'Regular factory visits and progress updates to keep your order on schedule.' },
  { id: 'shipping-coordination', icon: Ship, title: 'Shipping Coordination', desc: 'End-to-end logistics support from factory to your warehouse, including customs documentation.' },
  { id: 'negotiation-support', icon: Users, title: 'Negotiation Support', desc: 'Price negotiation, contract review, and payment term optimization on your behalf.' },
]

const processSteps = [
  { step: '01', title: 'Share Your Requirements', desc: 'Tell us what you need — product specs, target price, quantity, and timeline.' },
  { step: '02', title: 'We Source & Shortlist', desc: 'Our team identifies 3–5 qualified suppliers and presents detailed comparisons.' },
  { step: '03', title: 'Factory Verification', desc: 'We visit and audit the top candidates to confirm quality and reliability.' },
  { step: '04', title: 'Sample & Negotiation', desc: 'We arrange samples, negotiate pricing, and finalize terms on your behalf.' },
  { step: '05', title: 'Production & QC', desc: 'We monitor production milestones and conduct inspections before shipment.' },
  { step: '06', title: 'Shipping & Delivery', desc: 'We coordinate logistics and documentation until goods reach your door.' },
]

const products = [
  'Electronics & Components', 'Textiles & Apparel', 'Home & Garden',
  'Auto Parts & Accessories', 'Machinery & Equipment', 'Packaging & Printing',
  'Building Materials', 'Health & Beauty', 'Toys & Sports',
]

const problems = [
  { title: 'Unreliable Suppliers', desc: 'We pre-screen and audit every factory so you only work with verified manufacturers.' },
  { title: 'Quality Issues', desc: 'Our QC inspectors catch defects before shipment, saving you costly returns and disputes.' },
  { title: 'Communication Barriers', desc: 'We bridge language and cultural gaps with bilingual project managers on the ground.' },
  { title: 'Shipping Delays', desc: 'We track production timelines and coordinate logistics to keep deliveries on schedule.' },
]

const trustPoints = [
  { icon: Globe, value: '500+', label: 'Clients Worldwide' },
  { icon: Factory, value: '2,000+', label: 'Factories Audited' },
  { icon: Clock, value: '10+', label: 'Years Experience' },
  { icon: Award, value: '98%', label: 'Client Satisfaction' },
]

const caseStudies = [
  { id: 'electronics-us', title: 'Electronics Retailer, USA', result: 'Reduced unit cost by 22% while improving quality consistency across 3 product lines.', category: 'Electronics' },
  { id: 'furniture-eu', title: 'Furniture Brand, Germany', result: 'Found a certified manufacturer and delivered first container in 45 days from initial inquiry.', category: 'Home & Garden' },
  { id: 'apparel-au', title: 'Apparel Startup, Australia', result: 'Sourced sustainable fabric suppliers and managed production of 10,000 units with zero defects.', category: 'Textiles' },
]

const faqs = [
  { q: 'What is a sourcing agent and why do I need one?', a: 'A sourcing agent acts as your local representative in China. We find suppliers, verify factories, negotiate prices, inspect quality, and coordinate shipping — saving you time, money, and risk.' },
  { q: 'How much does your service cost?', a: 'Our fees depend on the scope of work. Most projects use a service fee of 3–8% of order value, or a fixed project fee. We provide a transparent quote before starting.' },
  { q: 'Can you source any product from China?', a: 'We source across most manufacturing categories including electronics, textiles, home goods, machinery, and more. If we cannot help, we will tell you upfront.' },
  { q: 'How do you verify suppliers?', a: 'We conduct on-site factory audits checking business licenses, production capacity, quality systems, worker conditions, and past export records.' },
  { q: 'What if there is a quality problem?', a: 'Our pre-shipment inspections catch issues before goods leave China. If problems arise, we work directly with the factory to resolve them at no extra cost to you.' },
]

export default function HomePage() {
  const containerRef = useRef(null)
  const [openFaq, setOpenFaq] = useState(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <div ref={containerRef}>
      {/* Hero Section */}
      <section className="relative bg-brand-navy overflow-hidden">
        <div
          className="absolute inset-0 opacity-20"
          data-strk-bg-id="hero-bg-7f3a2c"
          data-strk-bg="[hero-subtitle] [hero-title]"
          data-strk-bg-ratio="16x9"
          data-strk-bg-width="1600"
        />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32">
          <div className="max-w-3xl">
            <span className="inline-block bg-blue-500/20 text-blue-300 text-sm font-medium px-4 py-1.5 rounded-full mb-6">
              Trusted by 500+ Global Buyers
            </span>
            <h1 id="hero-title" className="text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-tight leading-tight">
              China Sourcing Agent for Global Buyers
            </h1>
            <p id="hero-subtitle" className="mt-6 text-lg md:text-xl text-gray-300 leading-relaxed max-w-2xl">
              We help overseas buyers find reliable Chinese suppliers, verify factories, inspect quality, follow production, and coordinate shipping — so you can import with confidence.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center bg-brand-blue text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-700 transition"
              >
                Get a Free Sourcing Quote
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <Link
                to="/how-it-works"
                className="inline-flex items-center justify-center border-2 border-gray-400 text-gray-200 px-8 py-4 rounded-lg font-semibold text-lg hover:border-white hover:text-white transition"
              >
                See How It Works
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Points */}
      <section className="bg-brand-white border-b border-brand-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {trustPoints.map((point) => (
              <div key={point.label} className="text-center">
                <point.icon className="w-8 h-8 text-brand-blue mx-auto mb-2" />
                <p className="text-3xl font-bold text-brand-dark">{point.value}</p>
                <p className="text-sm text-brand-gray mt-1">{point.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 md:py-24 bg-brand-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 id="services-title" className="text-3xl md:text-4xl font-bold text-brand-dark tracking-tight">
              End-to-End Sourcing Services
            </h2>
            <p id="services-subtitle" className="mt-4 text-brand-gray text-lg">
              From finding the right supplier to delivering goods at your door — we handle every step of the China sourcing process.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service) => (
              <div key={service.id} className="bg-brand-white rounded-xl border border-brand-border p-6 hover:shadow-md transition">
                <service.icon className="w-10 h-10 text-brand-blue mb-4" />
                <h3 className="text-lg font-semibold text-brand-dark mb-2">{service.title}</h3>
                <p className="text-brand-gray text-sm leading-relaxed">{service.desc}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link to="/services" className="inline-flex items-center text-brand-blue font-semibold hover:underline">
              View All Services <ArrowRight className="ml-1 w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 md:py-24 bg-brand-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 id="process-title" className="text-3xl md:text-4xl font-bold text-brand-dark tracking-tight">
              Our Sourcing Process
            </h2>
            <p id="process-subtitle" className="mt-4 text-brand-gray text-lg">
              A proven 6-step process that takes you from product idea to delivered goods.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {processSteps.map((step) => (
              <div key={step.step} className="relative bg-brand-light rounded-xl border border-brand-border p-6">
                <span className="text-4xl font-bold text-brand-blue/20">{step.step}</span>
                <h3 className="text-lg font-semibold text-brand-dark mt-2 mb-2">{step.title}</h3>
                <p className="text-brand-gray text-sm leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Products We Source */}
      <section className="py-16 md:py-24 bg-brand-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 id="products-title" className="text-3xl md:text-4xl font-bold text-brand-dark tracking-tight">
              Products We Source
            </h2>
            <p id="products-subtitle" className="mt-4 text-brand-gray text-lg">
              We source across a wide range of manufacturing categories from China.
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-3">
            {products.map((product) => (
              <span key={product} className="bg-brand-white border border-brand-border text-brand-dark px-5 py-2.5 rounded-full text-sm font-medium">
                {product}
              </span>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link to="/products" className="inline-flex items-center text-brand-blue font-semibold hover:underline">
              See Full Product List <ArrowRight className="ml-1 w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Problems We Solve */}
      <section className="py-16 md:py-24 bg-brand-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-brand-dark tracking-tight">
              Problems We Solve
            </h2>
            <p className="mt-4 text-brand-gray text-lg">
              Importing from China comes with challenges. Here is how we address them.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {problems.map((problem) => (
              <div key={problem.title} className="flex gap-4 bg-brand-light rounded-xl border border-brand-border p-6">
                <CheckCircle className="w-6 h-6 text-brand-green shrink-0 mt-0.5" />
                <div>
                  <h3 className="text-lg font-semibold text-brand-dark mb-1">{problem.title}</h3>
                  <p className="text-brand-gray text-sm leading-relaxed">{problem.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-16 md:py-24 bg-brand-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 id="cases-title" className="text-3xl md:text-4xl font-bold text-brand-dark tracking-tight">
              Client Success Stories
            </h2>
            <p id="cases-subtitle" className="mt-4 text-brand-gray text-lg">
              Real results from real sourcing projects we have managed.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {caseStudies.map((cs) => (
              <div key={cs.id} className="bg-brand-white rounded-xl border border-brand-border p-6">
                <span className="inline-block bg-blue-50 text-brand-blue text-xs font-medium px-3 py-1 rounded-full mb-4">
                  {cs.category}
                </span>
                <h3 className="text-lg font-semibold text-brand-dark mb-2">{cs.title}</h3>
                <p className="text-brand-gray text-sm leading-relaxed">{cs.result}</p>
                <div className="flex mt-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                  ))}
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link to="/case-studies" className="inline-flex items-center text-brand-blue font-semibold hover:underline">
              View All Case Studies <ArrowRight className="ml-1 w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 md:py-24 bg-brand-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-brand-dark tracking-tight">
              Frequently Asked Questions
            </h2>
          </div>
          <div className="space-y-3">
            {faqs.map((faq, idx) => (
              <div key={idx} className="border border-brand-border rounded-xl overflow-hidden">
                <button
                  className="w-full flex items-center justify-between p-5 text-left bg-brand-white hover:bg-brand-light transition border-none cursor-pointer"
                  onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                >
                  <span className="font-semibold text-brand-dark text-sm md:text-base pr-4">{faq.q}</span>
                  {openFaq === idx ? (
                    <ChevronUp className="w-5 h-5 text-brand-gray shrink-0" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-brand-gray shrink-0" />
                  )}
                </button>
                {openFaq === idx && (
                  <div className="px-5 pb-5 text-brand-gray text-sm leading-relaxed">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-brand-blue">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight">
            Ready to Source from China with Confidence?
          </h2>
          <p className="mt-4 text-blue-100 text-lg max-w-2xl mx-auto">
            Tell us what you need and get a free, no-obligation sourcing quote within 24 hours.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center mt-8 bg-white text-brand-blue px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition"
          >
            Get a Free Sourcing Quote
            <ArrowRight className="ml-2 w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  )
}
