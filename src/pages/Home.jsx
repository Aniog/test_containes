import React, { useState, useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { Search, ShieldCheck, ClipboardCheck, Clock, Ship, ArrowRight, CheckCircle2, AlertTriangle, Users, Globe, Award, Building2, ChevronDown } from 'lucide-react'
import { CTASection, SectionHeader } from '../components/shared/CTASection'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '../strk-img-config.json'

const services = [
  { icon: Search, title: 'Supplier Sourcing', desc: 'We identify and shortlist qualified suppliers matching your product specifications, quality standards, and budget requirements.' },
  { icon: ShieldCheck, title: 'Factory Verification', desc: 'On-site factory audits to verify business licenses, production capacity, quality systems, and real manufacturing capabilities.' },
  { icon: ClipboardCheck, title: 'Quality Inspection', desc: 'Pre-production, during-production, and pre-shipment inspections based on international AQL standards.' },
  { icon: Clock, title: 'Production Follow-up', desc: 'Regular monitoring of production progress, milestone tracking, and proactive issue resolution to keep your orders on schedule.' },
  { icon: Ship, title: 'Shipping Coordination', desc: 'End-to-end logistics management including freight booking, customs documentation, and delivery tracking to your door.' },
]

const processSteps = [
  { step: '01', title: 'Tell Us What You Need', desc: 'Share your product requirements, specifications, target price, and order quantity.' },
  { step: '02', title: 'We Find & Verify Suppliers', desc: 'Our team searches, evaluates, and shortlists qualified factories that match your criteria.' },
  { step: '03', title: 'Sample & Confirm', desc: 'We arrange samples, coordinate revisions, and help you finalize the right supplier.' },
  { step: '04', title: 'Production & QC', desc: 'We monitor production, conduct inspections, and ensure quality meets your standards.' },
  { step: '05', title: 'Ship & Deliver', desc: 'We handle logistics, documentation, and coordinate delivery to your warehouse.' },
]

const productCategories = [
  { name: 'Electronics & Components', imgId: 'prod-electronics-a1b2c3', titleId: 'prod-electronics-title', descId: 'prod-electronics-desc' },
  { name: 'Home & Garden Products', imgId: 'prod-home-d4e5f6', titleId: 'prod-home-title', descId: 'prod-home-desc' },
  { name: 'Apparel & Textiles', imgId: 'prod-apparel-g7h8i9', titleId: 'prod-apparel-title', descId: 'prod-apparel-desc' },
  { name: 'Industrial & Hardware', imgId: 'prod-industrial-j1k2l3', titleId: 'prod-industrial-title', descId: 'prod-industrial-desc' },
  { name: 'Auto Parts & Accessories', imgId: 'prod-auto-m4n5o6', titleId: 'prod-auto-title', descId: 'prod-auto-desc' },
  { name: 'Packaging & Printing', imgId: 'prod-packaging-p7q8r9', titleId: 'prod-packaging-title', descId: 'prod-packaging-desc' },
]

const problems = [
  { icon: AlertTriangle, title: 'Unreliable Suppliers', desc: 'Factories that overpromise and underdeliver, or turn out to be trading companies instead of real manufacturers.' },
  { icon: AlertTriangle, title: 'Quality Inconsistency', desc: 'Samples look great but mass production quality drops, leading to customer complaints and returns.' },
  { icon: AlertTriangle, title: 'Communication Barriers', desc: 'Language gaps, time zone differences, and cultural misunderstandings that cause costly mistakes.' },
  { icon: AlertTriangle, title: 'Production Delays', desc: 'Missed deadlines, lack of transparency, and no one on the ground to push things forward.' },
  { icon: AlertTriangle, title: 'Shipping Complications', desc: 'Confusing logistics, unexpected customs issues, and hidden costs that erode your margins.' },
]

const trustPoints = [
  { icon: Users, value: '500+', label: 'Clients Served' },
  { icon: Building2, value: '2,000+', label: 'Factories Verified' },
  { icon: Globe, value: '30+', label: 'Countries Served' },
  { icon: Award, value: '10+', label: 'Years of Experience' },
]

const caseStudies = [
  {
    title: 'US Electronics Brand Cuts Defect Rate by 85%',
    category: 'Electronics',
    summary: 'A US-based consumer electronics company was struggling with a 12% defect rate from their Chinese supplier. Our team identified the root causes, found a better factory, and implemented strict QC protocols.',
    result: 'Defect rate dropped to 1.8% within 3 months.',
  },
  {
    title: 'European Retailer Saves 22% on Home Goods',
    category: 'Home & Garden',
    summary: 'A European home goods retailer was overpaying through a trading company. We connected them directly with factories and negotiated better terms while maintaining quality.',
    result: '22% cost reduction with no quality compromise.',
  },
  {
    title: 'Australian Importer Avoids $50K Loss',
    category: 'Apparel',
    summary: 'During a pre-shipment inspection, our QC team found major deviations from approved samples. We halted shipment and worked with the factory to correct the issues before delivery.',
    result: 'Client avoided a potential $50K loss from defective goods.',
  },
]

const faqs = [
  {
    q: 'What types of products can you source?',
    a: 'We source a wide range of products including electronics, home goods, apparel, industrial parts, auto components, packaging, and more. If it is made in China, we can help you find a reliable supplier.',
  },
  {
    q: 'How do you verify suppliers?',
    a: 'We conduct on-site factory audits covering business license verification, production capacity assessment, quality management systems, worker conditions, and actual manufacturing capabilities. We also check references from existing clients.',
  },
  {
    q: 'What are your fees?',
    a: 'Our fee structure depends on the scope of work. We offer free initial consultations and transparent pricing for sourcing, verification, and inspection services. Contact us for a detailed quote based on your needs.',
  },
  {
    q: 'How long does the sourcing process take?',
    a: 'Typically, supplier identification and shortlisting takes 5-10 business days. Sample development adds 2-4 weeks depending on product complexity. The full process from initial inquiry to shipment varies by product and order size.',
  },
  {
    q: 'Do you handle shipping and customs?',
    a: 'Yes. We coordinate freight booking, prepare shipping documentation, handle customs declarations on the China side, and work with your forwarder or recommend one for destination customs and delivery.',
  },
  {
    q: 'Can I visit the factory myself?',
    a: 'Absolutely. We can arrange and accompany you on factory visits. Many clients find value in visiting shortlisted factories before placing large orders. We handle all logistics for the visit.',
  },
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
      <section className="relative bg-navy-dark overflow-hidden">
        <div
          data-strk-bg-id="hero-bg-f7a2b3"
          data-strk-bg="[hero-subtitle] [hero-title]"
          data-strk-bg-ratio="16x9"
          data-strk-bg-width="1600"
          className="absolute inset-0 opacity-20"
        />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
          <div className="max-w-3xl">
            <h1 id="hero-title" className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              China Sourcing Agent for Global Buyers
            </h1>
            <p id="hero-subtitle" className="text-xl text-gray-300 mb-8 leading-relaxed">
              Find reliable suppliers. Verify factories. Inspect quality. Follow production. Coordinate shipping. We handle the entire sourcing process so you can import with confidence.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 bg-sky-brand text-white px-8 py-4 rounded-md text-lg font-semibold hover:bg-sky-brand-hover transition-colors"
              >
                Get a Free Sourcing Quote
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                to="/how-it-works"
                className="inline-flex items-center justify-center gap-2 border-2 border-white/30 text-white px-8 py-4 rounded-md text-lg font-semibold hover:bg-white/10 transition-colors"
              >
                See How It Works
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Points */}
      <section className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {trustPoints.map((point, i) => (
              <div key={i} className="text-center">
                <point.icon className="w-8 h-8 text-sky-brand mx-auto mb-3" />
                <div className="text-3xl font-bold text-navy mb-1">{point.value}</div>
                <div className="text-sm text-gray-600">{point.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            title="Our Sourcing Services"
            subtitle="End-to-end support from supplier discovery to delivery at your door."
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, i) => (
              <div key={i} className="bg-white rounded-lg border border-gray-200 p-6 hover:shadow-md transition-shadow">
                <service.icon className="w-10 h-10 text-sky-brand mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{service.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{service.desc}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link to="/services" className="inline-flex items-center gap-2 text-sky-brand font-semibold hover:gap-3 transition-all">
              Learn More About Our Services <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            title="How It Works"
            subtitle="A clear, structured process from your first inquiry to final delivery."
          />
          <div className="max-w-4xl mx-auto">
            {processSteps.map((step, i) => (
              <div key={i} className="flex gap-6 mb-8 last:mb-0">
                <div className="flex-shrink-0 w-14 h-14 bg-navy rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-lg">{step.step}</span>
                </div>
                <div className="pt-2">
                  <h3 className="text-xl font-semibold text-gray-900 mb-1">{step.title}</h3>
                  <p className="text-gray-600">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link to="/how-it-works" className="inline-flex items-center gap-2 text-sky-brand font-semibold hover:gap-3 transition-all">
              See Detailed Process <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Products We Source */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            title="Products We Source"
            subtitle="We work across a wide range of product categories. If it is made in China, we can help you source it."
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {productCategories.map((cat, i) => (
              <div key={i} className="bg-white rounded-lg border border-gray-200 overflow-hidden hover:shadow-md transition-shadow">
                <img
                  alt={cat.name}
                  data-strk-img-id={cat.imgId}
                  data-strk-img={`[${cat.descId}] [${cat.titleId}]`}
                  data-strk-img-ratio="4x3"
                  data-strk-img-width="600"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  className="w-full h-48 object-cover bg-gray-100"
                />
                <div className="p-5">
                  <h3 id={cat.titleId} className="text-lg font-semibold text-gray-900 mb-1">{cat.name}</h3>
                  <p id={cat.descId} className="text-sm text-gray-600">Reliable suppliers for {cat.name.toLowerCase()} from verified Chinese factories.</p>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link to="/products" className="inline-flex items-center gap-2 text-sky-brand font-semibold hover:gap-3 transition-all">
              View All Categories <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Problems We Solve */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            title="Problems We Solve"
            subtitle="Common challenges that overseas buyers face when sourcing from China — and how we address them."
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {problems.map((problem, i) => (
              <div key={i} className="bg-red-50 rounded-lg border border-red-100 p-6">
                <problem.icon className="w-8 h-8 text-red-500 mb-3" />
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{problem.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{problem.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            title="Case Studies"
            subtitle="Real results from real clients. See how we have helped businesses source better from China."
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {caseStudies.map((cs, i) => (
              <div key={i} className="bg-white rounded-lg border border-gray-200 p-6 hover:shadow-md transition-shadow">
                <span className="inline-block bg-blue-50 text-sky-brand text-xs font-semibold px-3 py-1 rounded-full mb-4">
                  {cs.category}
                </span>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">{cs.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-4">{cs.summary}</p>
                <div className="flex items-start gap-2 bg-green-50 rounded-md p-3">
                  <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span className="text-sm font-medium text-green-800">{cs.result}</span>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link to="/case-studies" className="inline-flex items-center gap-2 text-sky-brand font-semibold hover:gap-3 transition-all">
              Read More Case Studies <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-white py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader title="Frequently Asked Questions" />
          <div className="space-y-3">
            {faqs.map((faq, i) => (
              <div key={i} className="border border-gray-200 rounded-lg">
                <button
                  className="w-full flex items-center justify-between px-6 py-4 text-left"
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                >
                  <span className="font-medium text-gray-900 pr-4">{faq.q}</span>
                  <ChevronDown className={`w-5 h-5 text-gray-400 flex-shrink-0 transition-transform ${openFaq === i ? 'rotate-180' : ''}`} />
                </button>
                {openFaq === i && (
                  <div className="px-6 pb-4">
                    <p className="text-gray-600 text-sm leading-relaxed">{faq.a}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <CTASection />
    </div>
  )
}
