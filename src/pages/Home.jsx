import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import { Shield, Search, ClipboardCheck, Truck, Factory, CheckCircle, Users, Award, Globe, ArrowRight, ChevronDown, ChevronUp, Package, TrendingUp, AlertTriangle, HelpCircle } from 'lucide-react'
import { useState } from 'react'
import SectionCTA from '@/components/shared/SectionCTA'

const services = [
  { icon: Search, title: 'Supplier Sourcing', desc: 'We identify and shortlist verified suppliers that match your product specs, MOQ, and budget.' },
  { icon: Factory, title: 'Factory Verification', desc: 'On-site factory audits to confirm legitimacy, capacity, certifications, and working conditions.' },
  { icon: ClipboardCheck, title: 'Quality Inspection', desc: 'Pre-production, during-production, and pre-shipment inspections with detailed photo reports.' },
  { icon: TrendingUp, title: 'Production Follow-up', desc: 'We monitor your order timeline, flag delays early, and keep you updated at every stage.' },
  { icon: Truck, title: 'Shipping Coordination', desc: 'End-to-end logistics support: freight booking, customs docs, and delivery tracking.' },
  { icon: Shield, title: 'Contract & Payment Safety', desc: 'We help structure supplier agreements and manage secure payment milestones.' },
]

const processSteps = [
  { step: '01', title: 'Submit Your Requirements', desc: 'Tell us what you need: product specs, target price, quantity, and timeline.' },
  { step: '02', title: 'Supplier Shortlist', desc: 'We research and present 3-5 vetted suppliers with samples and quotes.' },
  { step: '03', title: 'Factory Verification', desc: 'We visit and audit the selected factory to confirm quality and capacity.' },
  { step: '04', title: 'Sample & Negotiation', desc: 'We manage sample production, negotiate pricing, and finalize terms.' },
  { step: '05', title: 'Production & QC', desc: 'We monitor production milestones and conduct quality inspections.' },
  { step: '06', title: 'Shipping & Delivery', desc: 'We coordinate logistics and ensure your goods arrive safely on time.' },
]

const products = [
  'Electronics & Components', 'Home & Garden', 'Textiles & Apparel',
  'Industrial Equipment', 'Packaging Materials', 'Auto Parts',
  'Health & Beauty', 'Toys & Games', 'Building Materials',
  'Furniture', 'Sports & Outdoors', 'Food & Beverage Equipment'
]

const problems = [
  { icon: AlertTriangle, title: 'Unreliable Suppliers', desc: 'Tired of suppliers who disappear after payment or deliver substandard goods? We verify every factory before you commit.' },
  { icon: Globe, title: 'Language & Culture Barriers', desc: 'Miscommunication leads to costly mistakes. Our bilingual team ensures nothing gets lost in translation.' },
  { icon: Package, title: 'Quality Inconsistency', desc: 'First samples look great, but bulk orders disappoint? Our on-site QC catches issues before shipping.' },
  { icon: Truck, title: 'Shipping Complications', desc: 'Customs delays, wrong documentation, damaged goods? We handle logistics end-to-end.' },
]

const trustPoints = [
  { value: '500+', label: 'Suppliers Verified' },
  { value: '12+', label: 'Years Experience' },
  { value: '30+', label: 'Countries Served' },
  { value: '98%', label: 'Client Satisfaction' },
]

const caseStudies = [
  { id: 'electronics', title: 'Consumer Electronics', result: 'Reduced unit cost by 22% while improving quality for a US e-commerce brand.', titleId: 'case-electronics-title', descId: 'case-electronics-desc', imgId: 'case-electronics-img-a7f3b2' },
  { id: 'furniture', title: 'Custom Furniture', result: 'Sourced a reliable manufacturer and managed 3 container shipments for an Australian retailer.', titleId: 'case-furniture-title', descId: 'case-furniture-desc', imgId: 'case-furniture-img-c4d8e1' },
  { id: 'packaging', title: 'Eco Packaging', result: 'Found certified sustainable packaging suppliers for a European brand within 2 weeks.', titleId: 'case-packaging-title', descId: 'case-packaging-desc', imgId: 'case-packaging-img-f9a2b5' },
]

const faqs = [
  { q: 'What is a sourcing agent and why do I need one?', a: 'A sourcing agent acts as your local representative in China. We find suppliers, verify factories, negotiate prices, inspect quality, and coordinate shipping — saving you time, money, and risk.' },
  { q: 'How much does your service cost?', a: 'Our fees depend on the scope of work. Typically we charge a service fee of 5-8% of order value, or a fixed project fee for specific tasks like factory audits or inspections. We provide a clear quote upfront.' },
  { q: 'Can you source any product from China?', a: 'We source across most product categories including electronics, textiles, furniture, industrial equipment, packaging, and consumer goods. If we cannot help, we will tell you honestly.' },
  { q: 'How do you verify suppliers?', a: 'We conduct on-site factory visits, check business licenses, review production capacity, inspect quality systems, and verify export history. We provide a detailed audit report with photos.' },
  { q: 'What is your minimum order requirement?', a: 'We work with orders of all sizes, though most suppliers have their own MOQs. We can help negotiate lower MOQs for first orders or find suppliers suited to smaller quantities.' },
  { q: 'How long does the sourcing process take?', a: 'A typical sourcing project takes 2-4 weeks from requirements to supplier shortlist. The full cycle from sourcing to delivery depends on product complexity and shipping method.' },
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
      <section className="relative bg-brand-light py-20 md:py-32 overflow-hidden">
        <div
          className="absolute inset-0 opacity-10"
          data-strk-bg-id="hero-bg-main-8d4f2a"
          data-strk-bg="[hero-subtitle] [hero-title]"
          data-strk-bg-ratio="16x9"
          data-strk-bg-width="1600"
        />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 id="hero-title" className="text-4xl md:text-5xl lg:text-6xl font-bold text-brand-dark leading-tight mb-6">
              China Sourcing Agent for Global Buyers
            </h1>
            <p id="hero-subtitle" className="text-lg md:text-xl text-brand-gray mb-8 leading-relaxed">
              We help overseas businesses find reliable Chinese suppliers, verify factories, inspect quality, follow production, and coordinate shipping — so you can import with confidence.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center px-8 py-4 bg-brand-orange text-white font-semibold rounded-lg hover:bg-orange-700 transition-colors text-lg"
              >
                Get a Free Sourcing Quote
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <Link
                to="/how-it-works"
                className="inline-flex items-center justify-center px-8 py-4 border-2 border-brand-navy text-brand-navy font-semibold rounded-lg hover:bg-brand-navy hover:text-white transition-colors text-lg"
              >
                How It Works
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Points */}
      <section className="bg-white py-12 border-b border-brand-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {trustPoints.map((point) => (
              <div key={point.label} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-brand-orange mb-1">{point.value}</div>
                <div className="text-sm md:text-base text-brand-gray">{point.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="bg-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 id="services-title" className="text-3xl md:text-4xl font-bold text-brand-dark mb-4">Our Sourcing Services</h2>
            <p id="services-subtitle" className="text-lg text-brand-gray max-w-2xl mx-auto">
              End-to-end support from finding suppliers to delivering goods at your door.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service) => (
              <div key={service.title} className="bg-brand-light rounded-xl p-6 md:p-8 border border-brand-border hover:shadow-md transition-shadow">
                <service.icon className="w-10 h-10 text-brand-orange mb-4" />
                <h3 className="text-lg font-semibold text-brand-dark mb-2">{service.title}</h3>
                <p className="text-brand-gray text-sm leading-relaxed">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sourcing Process */}
      <section className="bg-brand-light py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-brand-dark mb-4">How Our Sourcing Process Works</h2>
            <p className="text-lg text-brand-gray max-w-2xl mx-auto">
              A clear, structured approach to finding and managing your Chinese suppliers.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {processSteps.map((item) => (
              <div key={item.step} className="bg-white rounded-xl p-6 border border-brand-border">
                <div className="text-3xl font-bold text-brand-orange mb-3">{item.step}</div>
                <h3 className="text-lg font-semibold text-brand-dark mb-2">{item.title}</h3>
                <p className="text-brand-gray text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Products We Source */}
      <section className="bg-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-brand-dark mb-4">Products We Source</h2>
            <p className="text-lg text-brand-gray max-w-2xl mx-auto">
              We source across a wide range of product categories from China's manufacturing base.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {products.map((product) => (
              <div key={product} className="flex items-center gap-3 bg-brand-light rounded-lg p-4 border border-brand-border">
                <CheckCircle className="w-5 h-5 text-brand-orange flex-shrink-0" />
                <span className="text-sm font-medium text-brand-dark">{product}</span>
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link to="/products" className="text-brand-orange font-semibold hover:underline inline-flex items-center gap-1">
              View all product categories <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Problems We Solve */}
      <section className="bg-brand-light py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-brand-dark mb-4">Problems We Solve</h2>
            <p className="text-lg text-brand-gray max-w-2xl mx-auto">
              Common challenges that overseas buyers face when sourcing from China — and how we address them.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {problems.map((problem) => (
              <div key={problem.title} className="bg-white rounded-xl p-6 md:p-8 border border-brand-border">
                <problem.icon className="w-10 h-10 text-brand-orange mb-4" />
                <h3 className="text-lg font-semibold text-brand-dark mb-2">{problem.title}</h3>
                <p className="text-brand-gray text-sm leading-relaxed">{problem.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="bg-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-brand-dark mb-4">Case Studies</h2>
            <p className="text-lg text-brand-gray max-w-2xl mx-auto">
              Real results from real sourcing projects we have managed for our clients.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {caseStudies.map((cs) => (
              <div key={cs.id} className="bg-brand-light rounded-xl overflow-hidden border border-brand-border">
                <img
                  alt={cs.title}
                  data-strk-img-id={cs.imgId}
                  data-strk-img={`[${cs.descId}] [${cs.titleId}]`}
                  data-strk-img-ratio="16x9"
                  data-strk-img-width="600"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 9'/%3E"
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 id={cs.titleId} className="text-lg font-semibold text-brand-dark mb-2">{cs.title}</h3>
                  <p id={cs.descId} className="text-brand-gray text-sm leading-relaxed">{cs.result}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link to="/case-studies" className="text-brand-orange font-semibold hover:underline inline-flex items-center gap-1">
              View all case studies <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="bg-brand-light py-16 md:py-24">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-brand-dark mb-4">Frequently Asked Questions</h2>
            <p className="text-lg text-brand-gray">
              Common questions about working with a China sourcing agent.
            </p>
          </div>
          <div className="space-y-3">
            {faqs.map((faq, idx) => (
              <div key={idx} className="bg-white rounded-xl border border-brand-border overflow-hidden">
                <button
                  onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                  className="w-full flex items-center justify-between p-5 text-left bg-transparent border-none cursor-pointer"
                >
                  <span className="text-brand-dark font-medium text-sm md:text-base pr-4">{faq.q}</span>
                  {openFaq === idx ? (
                    <ChevronUp className="w-5 h-5 text-brand-orange flex-shrink-0" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-brand-gray flex-shrink-0" />
                  )}
                </button>
                {openFaq === idx && (
                  <div className="px-5 pb-5">
                    <p className="text-brand-gray text-sm leading-relaxed">{faq.a}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <SectionCTA
        title="Ready to Source from China with Confidence?"
        subtitle="Tell us what you need and get a free, no-obligation sourcing quote within 24 hours."
      />
    </div>
  )
}
