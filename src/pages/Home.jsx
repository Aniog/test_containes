import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import {
  Search, ShieldCheck, ClipboardCheck, Factory, Ship, CheckCircle2,
  ArrowRight, Star, Users, Globe, Package, AlertTriangle, HelpCircle,
  ChevronDown, ChevronUp
} from 'lucide-react'
import { useState } from 'react'
import CTAButton from '@/components/shared/CTAButton'
import SectionHeading from '@/components/shared/SectionHeading'

const services = [
  { icon: Search, title: 'Supplier Sourcing', desc: 'We identify and shortlist verified suppliers that match your product specs, MOQ, and budget.' },
  { icon: ShieldCheck, title: 'Factory Verification', desc: 'On-site audits to confirm legitimacy, production capacity, certifications, and working conditions.' },
  { icon: ClipboardCheck, title: 'Quality Inspection', desc: 'Pre-production, during production, and pre-shipment inspections with detailed photo reports.' },
  { icon: Factory, title: 'Production Follow-up', desc: 'We monitor timelines, sample approvals, and production milestones on your behalf.' },
  { icon: Ship, title: 'Shipping Coordination', desc: 'End-to-end logistics support including freight booking, customs docs, and delivery tracking.' },
]

const processSteps = [
  { step: '01', title: 'Share Your Requirements', desc: 'Tell us what you need — product specs, target price, quantity, and timeline.' },
  { step: '02', title: 'We Source & Verify', desc: 'Our team identifies suppliers, visits factories, and shortlists the best options.' },
  { step: '03', title: 'Sample & Negotiate', desc: 'We arrange samples, negotiate pricing, and finalize terms on your behalf.' },
  { step: '04', title: 'Production & QC', desc: 'We monitor production and conduct quality inspections at every stage.' },
  { step: '05', title: 'Ship & Deliver', desc: 'We coordinate shipping, handle documentation, and track until delivery.' },
]

const products = [
  'Electronics & Components', 'Home & Garden', 'Textiles & Apparel',
  'Industrial Equipment', 'Packaging Materials', 'Auto Parts',
  'Building Materials', 'Consumer Goods', 'Health & Beauty',
]

const problems = [
  { icon: AlertTriangle, title: 'Unreliable Suppliers', desc: 'Tired of suppliers who disappear after payment or deliver substandard goods?' },
  { icon: AlertTriangle, title: 'Quality Issues', desc: 'Receiving products that don\'t match samples or specifications?' },
  { icon: AlertTriangle, title: 'Communication Barriers', desc: 'Struggling with language gaps, time zones, and cultural differences?' },
  { icon: AlertTriangle, title: 'Logistics Complexity', desc: 'Confused by shipping options, customs requirements, and documentation?' },
]

const trustPoints = [
  { icon: Users, value: '500+', label: 'Clients Served' },
  { icon: Globe, value: '30+', label: 'Countries Reached' },
  { icon: Factory, value: '2,000+', label: 'Factories Audited' },
  { icon: Package, value: '10,000+', label: 'Orders Managed' },
]

const caseStudies = [
  { title: 'LED Lighting for European Retailer', category: 'Electronics', result: '40% cost reduction with verified supplier', id: 'case-led' },
  { title: 'Custom Furniture for US Brand', category: 'Home & Garden', result: 'Zero defects across 3 container shipments', id: 'case-furniture' },
  { title: 'Textile Sourcing for Fashion Startup', category: 'Apparel', result: 'From concept to delivery in 45 days', id: 'case-textile' },
]

const faqs = [
  { q: 'What is the minimum order quantity you work with?', a: 'We work with suppliers across all MOQ ranges. Whether you need 100 units or 100,000, we can find the right factory for your volume.' },
  { q: 'How do you verify suppliers?', a: 'We conduct on-site factory audits checking business licenses, production capacity, quality systems, worker conditions, and past export records.' },
  { q: 'What does your service cost?', a: 'Our fees depend on the scope of work. We offer transparent pricing with no hidden charges. Contact us for a free quote tailored to your project.' },
  { q: 'How long does the sourcing process take?', a: 'Typically 2-4 weeks from requirement submission to supplier shortlist. Full production cycles vary by product complexity.' },
  { q: 'Do you handle shipping and customs?', a: 'Yes. We coordinate freight forwarding, prepare export documentation, and track shipments until they reach your warehouse.' },
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
      <section className="relative bg-navy-900 overflow-hidden">
        <div
          className="absolute inset-0 opacity-20"
          data-strk-bg-id="hero-bg-a3f9c1"
          data-strk-bg="[hero-subtitle] [hero-title]"
          data-strk-bg-ratio="16x9"
          data-strk-bg-width="1600"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-navy-900 via-navy-900/95 to-navy-900/70" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32">
          <div className="max-w-3xl">
            <span className="inline-flex px-3 py-1 rounded-full text-sm font-medium bg-accent-500/20 text-accent-400 mb-6">
              Trusted by 500+ Global Buyers
            </span>
            <h1 id="hero-title" className="text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-tight leading-tight">
              China Sourcing Agent for Global Buyers
            </h1>
            <p id="hero-subtitle" className="mt-6 text-lg md:text-xl text-slate-300 leading-relaxed max-w-2xl">
              We help you find reliable Chinese suppliers, verify factories, inspect quality, follow production, and coordinate shipping — so you can buy with confidence.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <CTAButton>Get a Free Sourcing Quote</CTAButton>
              <CTAButton variant="secondary" to="/how-it-works" className="border-white/30 text-white hover:bg-white hover:text-navy-900">
                See How It Works
              </CTAButton>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Bar */}
      <section className="bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {trustPoints.map((point) => (
              <div key={point.label} className="text-center">
                <point.icon className="w-6 h-6 text-accent-500 mx-auto mb-2" />
                <div className="text-2xl md:text-3xl font-bold text-navy-900">{point.value}</div>
                <div className="text-sm text-slate-600 mt-1">{point.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="Our Services"
            title="End-to-End Sourcing Support"
            subtitle="From finding the right supplier to delivering goods at your door, we handle every step of the China sourcing process."
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service) => (
              <div key={service.title} className="bg-white rounded-xl border border-slate-200 p-6 hover:shadow-md transition-shadow">
                <div className="w-12 h-12 bg-accent-500/10 rounded-lg flex items-center justify-center mb-4">
                  <service.icon className="w-6 h-6 text-accent-500" />
                </div>
                <h3 className="text-lg font-semibold text-slate-900 mb-2">{service.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">{service.desc}</p>
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

      {/* Process Section */}
      <section className="py-16 md:py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="How It Works"
            title="Our Sourcing Process"
            subtitle="A clear, structured approach that keeps you informed and in control at every stage."
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
            {processSteps.map((step, idx) => (
              <div key={step.step} className="relative bg-white rounded-xl border border-slate-200 p-6 text-center">
                <div className="text-3xl font-bold text-accent-500/20 mb-2">{step.step}</div>
                <h3 className="text-base font-semibold text-slate-900 mb-2">{step.title}</h3>
                <p className="text-slate-600 text-sm">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Products We Source */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="Product Categories"
            title="Products We Source"
            subtitle="We source across a wide range of industries. If it's made in China, we can find it for you."
          />
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4">
            {products.map((product) => (
              <div key={product} className="flex items-center gap-3 bg-white rounded-lg border border-slate-200 p-4 hover:border-accent-500/30 transition-colors">
                <CheckCircle2 className="w-5 h-5 text-accent-500 shrink-0" />
                <span className="text-slate-800 font-medium text-sm">{product}</span>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <CTAButton variant="secondary" to="/products">
              See Full Product List <ArrowRight className="w-4 h-4 ml-2 inline" />
            </CTAButton>
          </div>
        </div>
      </section>

      {/* Problems We Solve */}
      <section className="py-16 md:py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="Why You Need Us"
            title="Problems We Solve"
            subtitle="Sourcing from China without local support is risky. Here's what we help you avoid."
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {problems.map((problem) => (
              <div key={problem.title} className="flex gap-4 bg-white rounded-xl border border-slate-200 p-6">
                <div className="w-10 h-10 bg-red-50 rounded-lg flex items-center justify-center shrink-0">
                  <problem.icon className="w-5 h-5 text-red-500" />
                </div>
                <div>
                  <h3 className="text-base font-semibold text-slate-900 mb-1">{problem.title}</h3>
                  <p className="text-slate-600 text-sm">{problem.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies Preview */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="Success Stories"
            title="Case Studies"
            subtitle="Real results from real clients. See how we've helped businesses source successfully from China."
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {caseStudies.map((cs) => (
              <div key={cs.id} className="bg-white rounded-xl border border-slate-200 overflow-hidden hover:shadow-md transition-shadow">
                <div className="h-48 bg-slate-100 relative">
                  <img
                    data-strk-img-id={`${cs.id}-img-7b2e`}
                    data-strk-img={`[${cs.id}-title] [${cs.id}-category]`}
                    data-strk-img-ratio="16x9"
                    data-strk-img-width="600"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    alt={cs.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <span id={`${cs.id}-category`} className="text-xs font-medium text-accent-500 uppercase tracking-wide">{cs.category}</span>
                  <h3 id={`${cs.id}-title`} className="text-lg font-semibold text-slate-900 mt-2 mb-2">{cs.title}</h3>
                  <p className="text-slate-600 text-sm flex items-center gap-1">
                    <Star className="w-4 h-4 text-amber-500" />
                    {cs.result}
                  </p>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <CTAButton variant="secondary" to="/case-studies">
              View All Case Studies <ArrowRight className="w-4 h-4 ml-2 inline" />
            </CTAButton>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 md:py-24 bg-slate-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="FAQ"
            title="Frequently Asked Questions"
            subtitle="Quick answers to common questions about our sourcing services."
          />
          <div className="space-y-3">
            {faqs.map((faq, idx) => (
              <div key={idx} className="bg-white rounded-xl border border-slate-200 overflow-hidden">
                <button
                  onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                  className="w-full flex items-center justify-between p-5 text-left hover:bg-slate-50 transition-colors"
                >
                  <span className="text-sm font-medium text-slate-900 pr-4">{faq.q}</span>
                  {openFaq === idx ? (
                    <ChevronUp className="w-5 h-5 text-slate-500 shrink-0" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-slate-500 shrink-0" />
                  )}
                </button>
                {openFaq === idx && (
                  <div className="px-5 pb-5 text-sm text-slate-600 leading-relaxed">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-navy-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight">
            Ready to Source from China with Confidence?
          </h2>
          <p className="mt-4 text-lg text-slate-300 max-w-2xl mx-auto">
            Tell us what you need and get a free, no-obligation sourcing quote within 24 hours.
          </p>
          <div className="mt-8">
            <CTAButton>Get a Free Sourcing Quote</CTAButton>
          </div>
        </div>
      </section>
    </div>
  )
}
