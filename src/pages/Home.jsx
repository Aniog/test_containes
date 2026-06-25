import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import {
  Search, ShieldCheck, ClipboardCheck, Factory, Ship, Users,
  CheckCircle, ArrowRight, Star, Globe, Clock, TrendingUp,
  ChevronDown, ChevronUp, Package, Headphones
} from 'lucide-react'
import { useState } from 'react'

const services = [
  { id: 'supplier-sourcing', icon: Search, title: 'Supplier Sourcing', desc: 'We identify and shortlist qualified manufacturers matching your product specs, MOQ, and budget.' },
  { id: 'factory-verification', icon: ShieldCheck, title: 'Factory Verification', desc: 'On-site factory audits to verify production capacity, certifications, and business legitimacy.' },
  { id: 'quality-inspection', icon: ClipboardCheck, title: 'Quality Inspection', desc: 'Pre-shipment, during production, and container loading inspections with detailed reports.' },
  { id: 'production-followup', icon: Factory, title: 'Production Follow-up', desc: 'Regular factory visits and progress updates to keep your order on schedule.' },
  { id: 'shipping-coordination', icon: Ship, title: 'Shipping & Logistics', desc: 'End-to-end freight coordination including customs documentation and delivery tracking.' },
  { id: 'negotiation', icon: Users, title: 'Price Negotiation', desc: 'Leverage our local expertise to negotiate better pricing, payment terms, and MOQs.' },
]

const processSteps = [
  { step: '01', title: 'Share Your Requirements', desc: 'Tell us what you need — product specs, target price, quantity, and timeline.' },
  { step: '02', title: 'We Source & Shortlist', desc: 'Our team identifies 3-5 qualified suppliers and presents detailed comparisons.' },
  { step: '03', title: 'Factory Verification', desc: 'We visit and audit the selected factories to confirm capabilities and legitimacy.' },
  { step: '04', title: 'Sample & Negotiation', desc: 'We manage sample orders, negotiate pricing, and finalize terms on your behalf.' },
  { step: '05', title: 'Production & QC', desc: 'We monitor production milestones and conduct quality inspections before shipment.' },
  { step: '06', title: 'Shipping & Delivery', desc: 'We coordinate logistics and documentation until goods arrive at your warehouse.' },
]

const productCategories = [
  'Electronics & Components', 'Home & Garden', 'Apparel & Textiles',
  'Industrial Equipment', 'Auto Parts & Accessories', 'Health & Beauty',
  'Packaging Materials', 'Building Materials'
]

const problems = [
  { icon: ShieldCheck, title: 'Unreliable Suppliers', desc: 'We verify every factory before you place an order, eliminating scam risks.' },
  { icon: ClipboardCheck, title: 'Quality Issues', desc: 'Our inspectors catch defects before shipment, saving you costly returns.' },
  { icon: Globe, title: 'Communication Barriers', desc: 'We bridge language and cultural gaps with bilingual project managers.' },
  { icon: Clock, title: 'Delayed Shipments', desc: 'We track production timelines and push factories to meet deadlines.' },
]

const trustPoints = [
  { value: '500+', label: 'Suppliers Verified' },
  { value: '12+', label: 'Years Experience' },
  { value: '35+', label: 'Countries Served' },
  { value: '98%', label: 'Client Satisfaction' },
]

const caseStudies = [
  { id: 'case-electronics', title: 'Electronics Retailer, USA', result: 'Reduced unit cost by 22% while improving quality consistency across 3 product lines.', industry: 'Consumer Electronics' },
  { id: 'case-furniture', title: 'Furniture Brand, Germany', result: 'Found 2 certified factories and delivered first container in 45 days from initial inquiry.', industry: 'Home Furniture' },
  { id: 'case-apparel', title: 'Fashion Label, Australia', result: 'Managed production of 15,000 units with zero defects reported at destination.', industry: 'Apparel & Textiles' },
]

const faqs = [
  { q: 'What is a sourcing agent and why do I need one?', a: 'A sourcing agent acts as your local representative in China. We find suppliers, verify factories, negotiate prices, inspect quality, and coordinate shipping — saving you time, money, and risk compared to doing it alone remotely.' },
  { q: 'How much does your service cost?', a: 'Our fees depend on the scope of work. Typically we charge a service fee of 5-8% of the order value, or a fixed project fee for specific tasks like factory audits or inspections. We provide a clear quote before starting.' },
  { q: 'What is your minimum order requirement?', a: 'We work with orders of all sizes, though most factories have their own MOQs (typically $3,000-$5,000 minimum). We can help you find suppliers willing to work with smaller initial orders.' },
  { q: 'How long does the sourcing process take?', a: 'From initial inquiry to supplier shortlist typically takes 5-10 business days. The full process from sourcing to delivery usually takes 30-90 days depending on product complexity and shipping method.' },
  { q: 'Do you handle customs and import documentation?', a: 'Yes, we coordinate all export documentation from the China side including commercial invoices, packing lists, certificates of origin, and any required compliance certificates.' },
]

export default function Home() {
  const containerRef = useRef(null)
  const [openFaq, setOpenFaq] = useState(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <div ref={containerRef}>
      {/* Hero Section */}
      <section className="relative bg-primary overflow-hidden">
        <div
          className="absolute inset-0 opacity-20"
          data-strk-bg-id="hero-bg-9f3a2c"
          data-strk-bg="[hero-subtitle] [hero-title]"
          data-strk-bg-ratio="16x9"
          data-strk-bg-width="1600"
        />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32">
          <div className="max-w-3xl">
            <p className="text-accent font-semibold text-sm uppercase tracking-wide mb-4">Trusted by buyers in 35+ countries</p>
            <h1 id="hero-title" className="text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-tight leading-tight mb-6">
              China Sourcing Agent for Global Buyers
            </h1>
            <p id="hero-subtitle" className="text-lg md:text-xl text-white/80 leading-relaxed mb-8 max-w-2xl">
              We help you find reliable Chinese suppliers, verify factories, inspect quality, follow production, and coordinate shipping — so you can buy with confidence.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 bg-accent hover:bg-accent-hover text-white font-semibold px-8 py-4 rounded-lg text-base no-underline transition-colors"
              >
                Get a Free Sourcing Quote
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                to="/how-it-works"
                className="inline-flex items-center justify-center gap-2 border-2 border-white/30 text-white hover:bg-white/10 font-semibold px-8 py-4 rounded-lg text-base no-underline transition-colors"
              >
                See How It Works
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Points */}
      <section className="bg-white border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {trustPoints.map((point) => (
              <div key={point.label} className="text-center">
                <p className="text-3xl md:text-4xl font-bold text-primary mb-1">{point.value}</p>
                <p className="text-text-secondary text-sm">{point.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="bg-bg-alt py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-accent font-semibold text-sm uppercase tracking-wide mb-2">What We Do</p>
            <h2 id="services-title" className="text-3xl md:text-4xl font-bold text-text-primary tracking-tight mb-4">End-to-End Sourcing Services</h2>
            <p id="services-subtitle" className="text-text-secondary max-w-2xl mx-auto">From finding the right supplier to delivering goods at your door — we handle every step of the China sourcing process.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service) => (
              <div key={service.id} className="bg-white rounded-xl p-6 border border-border hover:shadow-md transition-shadow">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <service.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-text-primary mb-2">{service.title}</h3>
                <p className="text-text-secondary text-sm leading-relaxed">{service.desc}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link to="/services" className="inline-flex items-center gap-2 text-accent font-semibold hover:text-accent-hover no-underline">
              View All Services <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="bg-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-accent font-semibold text-sm uppercase tracking-wide mb-2">Our Process</p>
            <h2 className="text-3xl md:text-4xl font-bold text-text-primary tracking-tight mb-4">How We Work</h2>
            <p className="text-text-secondary max-w-2xl mx-auto">A clear, structured process from your first inquiry to final delivery.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {processSteps.map((step) => (
              <div key={step.step} className="relative p-6 rounded-xl border border-border hover:border-primary/30 transition-colors">
                <span className="text-4xl font-bold text-primary/15 absolute top-4 right-4">{step.step}</span>
                <div className="relative">
                  <h3 className="text-lg font-semibold text-text-primary mb-2">{step.title}</h3>
                  <p className="text-text-secondary text-sm leading-relaxed">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link to="/how-it-works" className="inline-flex items-center gap-2 text-accent font-semibold hover:text-accent-hover no-underline">
              Learn More About Our Process <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Products We Source */}
      <section className="bg-bg-alt py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-accent font-semibold text-sm uppercase tracking-wide mb-2">Product Categories</p>
              <h2 id="products-title" className="text-3xl md:text-4xl font-bold text-text-primary tracking-tight mb-4">Products We Source</h2>
              <p id="products-desc" className="text-text-secondary mb-6">We source across a wide range of industries. If it's made in China, we can find the right supplier for you.</p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
                {productCategories.map((cat) => (
                  <div key={cat} className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-success flex-shrink-0" />
                    <span className="text-text-primary text-sm">{cat}</span>
                  </div>
                ))}
              </div>
              <Link to="/products" className="inline-flex items-center gap-2 text-accent font-semibold hover:text-accent-hover no-underline">
                See Full Product List <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
            <div className="rounded-xl overflow-hidden">
              <img
                data-strk-img-id="products-img-7b4e1d"
                data-strk-img="[products-desc] [products-title]"
                data-strk-img-ratio="4x3"
                data-strk-img-width="800"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                alt="Products sourced from China factories"
                className="w-full h-auto rounded-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Problems We Solve */}
      <section className="bg-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-accent font-semibold text-sm uppercase tracking-wide mb-2">Why Work With Us</p>
            <h2 className="text-3xl md:text-4xl font-bold text-text-primary tracking-tight mb-4">Problems We Solve</h2>
            <p className="text-text-secondary max-w-2xl mx-auto">Sourcing from China comes with real challenges. Here's how we eliminate them for you.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {problems.map((problem) => (
              <div key={problem.title} className="flex gap-4 p-6 rounded-xl border border-border">
                <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <problem.icon className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-text-primary mb-1">{problem.title}</h3>
                  <p className="text-text-secondary text-sm leading-relaxed">{problem.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="bg-bg-alt py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-accent font-semibold text-sm uppercase tracking-wide mb-2">Success Stories</p>
            <h2 id="cases-title" className="text-3xl md:text-4xl font-bold text-text-primary tracking-tight mb-4">Case Studies</h2>
            <p className="text-text-secondary max-w-2xl mx-auto">Real results from real clients. See how we've helped businesses source successfully from China.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {caseStudies.map((cs) => (
              <div key={cs.id} className="bg-white rounded-xl p-6 border border-border">
                <span className="inline-block bg-primary/10 text-primary text-xs font-medium px-3 py-1 rounded-full mb-4">{cs.industry}</span>
                <h3 className="text-lg font-semibold text-text-primary mb-3">{cs.title}</h3>
                <p className="text-text-secondary text-sm leading-relaxed mb-4">{cs.result}</p>
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-accent fill-accent" />
                  ))}
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link to="/case-studies" className="inline-flex items-center gap-2 text-accent font-semibold hover:text-accent-hover no-underline">
              View All Case Studies <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-white py-16 md:py-24">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-accent font-semibold text-sm uppercase tracking-wide mb-2">Common Questions</p>
            <h2 className="text-3xl md:text-4xl font-bold text-text-primary tracking-tight mb-4">Frequently Asked Questions</h2>
          </div>
          <div className="space-y-3">
            {faqs.map((faq, index) => (
              <div key={index} className="border border-border rounded-lg overflow-hidden">
                <button
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  className="w-full flex items-center justify-between p-5 text-left bg-white hover:bg-bg-alt transition-colors border-none cursor-pointer"
                >
                  <span className="text-text-primary font-medium text-sm pr-4">{faq.q}</span>
                  {openFaq === index ? (
                    <ChevronUp className="w-5 h-5 text-text-muted flex-shrink-0" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-text-muted flex-shrink-0" />
                  )}
                </button>
                {openFaq === index && (
                  <div className="px-5 pb-5">
                    <p className="text-text-secondary text-sm leading-relaxed">{faq.a}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary py-16 md:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight mb-4">Ready to Source from China?</h2>
          <p className="text-white/80 text-lg mb-8 max-w-2xl mx-auto">Tell us what you're looking for and get a free, no-obligation sourcing quote within 24 hours.</p>
          <Link
            to="/contact"
            className="inline-flex items-center justify-center gap-2 bg-accent hover:bg-accent-hover text-white font-semibold px-8 py-4 rounded-lg text-base no-underline transition-colors"
          >
            Get a Free Sourcing Quote
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  )
}
