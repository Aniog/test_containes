import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import {
  Shield, Search, ClipboardCheck, Factory, Truck, Users,
  CheckCircle, ArrowRight, Star, MessageSquare, HelpCircle,
  Package, Lightbulb, Globe, Award
} from 'lucide-react'

const services = [
  { icon: Search, title: 'Supplier Sourcing', desc: 'We identify and shortlist qualified manufacturers matching your product specs, MOQ, and budget.' },
  { icon: Factory, title: 'Factory Verification', desc: 'On-site audits to verify production capacity, certifications, and business legitimacy.' },
  { icon: ClipboardCheck, title: 'Quality Inspection', desc: 'Pre-shipment, during-production, and container loading inspections with detailed reports.' },
  { icon: Package, title: 'Production Follow-up', desc: 'Regular factory visits and progress updates to keep your order on schedule.' },
  { icon: Truck, title: 'Shipping Coordination', desc: 'End-to-end logistics support from factory door to your warehouse.' },
  { icon: Shield, title: 'Contract & Payment Safety', desc: 'We help structure supplier agreements and manage secure payment milestones.' },
]

const processSteps = [
  { step: '01', title: 'Submit Your Requirements', desc: 'Tell us what you need — product specs, target price, quantity, and timeline.' },
  { step: '02', title: 'Supplier Shortlist', desc: 'We research and present 3–5 vetted suppliers with samples and quotes.' },
  { step: '03', title: 'Factory Verification', desc: 'We visit and audit your chosen factory to confirm capabilities.' },
  { step: '04', title: 'Production & QC', desc: 'We monitor production milestones and conduct quality inspections.' },
  { step: '05', title: 'Shipping & Delivery', desc: 'We coordinate logistics and documentation until goods reach you.' },
]

const products = [
  'Electronics & Components', 'Home & Garden', 'Textiles & Apparel',
  'Industrial Equipment', 'Packaging Materials', 'Auto Parts',
  'Building Materials', 'Consumer Goods', 'Health & Beauty',
]

const problems = [
  { icon: Shield, title: 'Unreliable Suppliers', desc: 'We verify every factory before you commit, reducing fraud risk.' },
  { icon: ClipboardCheck, title: 'Quality Issues', desc: 'Our inspectors catch defects before shipment, saving costly returns.' },
  { icon: MessageSquare, title: 'Communication Barriers', desc: 'Bilingual team bridges language and cultural gaps with suppliers.' },
  { icon: Truck, title: 'Shipping Delays', desc: 'Proactive logistics management keeps your timeline on track.' },
]

const trustPoints = [
  { value: '10+', label: 'Years in China Sourcing' },
  { value: '500+', label: 'Verified Factories' },
  { value: '2,000+', label: 'Orders Managed' },
  { value: '35+', label: 'Countries Served' },
]

const caseStudies = [
  {
    id: 'electronics-eu',
    title: 'Electronics Retailer — EU',
    category: 'Electronics',
    result: 'Reduced unit cost by 22% while improving quality consistency.',
    titleId: 'case-electronics-eu-title',
    descId: 'case-electronics-eu-desc',
    imgId: 'case-electronics-eu-img-a3f1',
  },
  {
    id: 'furniture-us',
    title: 'Furniture Brand — USA',
    category: 'Home & Garden',
    result: 'Found a certified factory and delivered first container in 8 weeks.',
    titleId: 'case-furniture-us-title',
    descId: 'case-furniture-us-desc',
    imgId: 'case-furniture-us-img-b7e2',
  },
  {
    id: 'apparel-au',
    title: 'Apparel Startup — Australia',
    category: 'Textiles',
    result: 'Managed 3 production runs with zero quality claims from end customers.',
    titleId: 'case-apparel-au-title',
    descId: 'case-apparel-au-desc',
    imgId: 'case-apparel-au-img-c9d4',
  },
]

const faqs = [
  { q: 'What is a sourcing agent?', a: 'A sourcing agent acts as your local representative in China — finding suppliers, negotiating prices, inspecting quality, and coordinating shipments on your behalf.' },
  { q: 'How much does your service cost?', a: 'Our fees depend on the scope of work. Typically we charge a service fee or commission on order value. Contact us for a custom quote.' },
  { q: 'Do you handle small orders?', a: 'Yes. We work with orders from $5,000 and up. For smaller quantities, we can help consolidate with other buyers.' },
  { q: 'How do you verify factories?', a: 'We conduct on-site visits checking business licenses, production lines, worker conditions, certifications, and past export records.' },
  { q: 'Can you source any product?', a: 'We specialize in manufactured goods across most categories. If we cannot help, we will tell you upfront.' },
]

export default function Home() {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <div ref={containerRef}>
      {/* Hero Section */}
      <section className="relative bg-navy overflow-hidden">
        <div
          className="absolute inset-0 opacity-20"
          data-strk-bg-id="hero-bg-main-7a2b"
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
              We help you find reliable Chinese suppliers, verify factories, inspect quality, and ship products — so you can buy from China with confidence.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center bg-accent hover:bg-accent-hover text-white font-semibold px-7 py-3.5 rounded-lg text-base no-underline transition-colors"
              >
                Get a Free Sourcing Quote
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <Link
                to="/how-it-works"
                className="inline-flex items-center justify-center border-2 border-white/30 text-white hover:bg-white/10 font-semibold px-7 py-3.5 rounded-lg text-base no-underline transition-colors"
              >
                See How It Works
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Bar */}
      <section className="bg-surface border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {trustPoints.map((point) => (
              <div key={point.label}>
                <div className="text-3xl md:text-4xl font-bold text-navy">{point.value}</div>
                <div className="text-sm text-slate-600 mt-1">{point.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 tracking-tight">
              End-to-End Sourcing Services
            </h2>
            <p className="mt-4 text-slate-600 text-lg">
              From finding the right supplier to delivering goods at your door — we cover every step.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service) => (
              <div key={service.title} className="bg-white border border-slate-200 rounded-xl p-6 hover:shadow-md transition-shadow">
                <service.icon className="w-10 h-10 text-accent mb-4" />
                <h3 className="text-lg font-semibold text-slate-900 mb-2">{service.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">{service.desc}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link to="/services" className="inline-flex items-center text-navy font-semibold hover:text-navy-light no-underline transition-colors">
              View All Services <ArrowRight className="ml-1 w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Sourcing Process */}
      <section className="py-16 md:py-24 bg-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 tracking-tight">
              How Our Sourcing Process Works
            </h2>
            <p className="mt-4 text-slate-600 text-lg">
              A clear, structured approach from your first inquiry to final delivery.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
            {processSteps.map((item, idx) => (
              <div key={item.step} className="relative text-center md:text-left">
                <div className="text-4xl font-bold text-accent/20 mb-2">{item.step}</div>
                <h3 className="text-base font-semibold text-slate-900 mb-2">{item.title}</h3>
                <p className="text-sm text-slate-600 leading-relaxed">{item.desc}</p>
                {idx < processSteps.length - 1 && (
                  <div className="hidden md:block absolute top-6 right-0 translate-x-1/2">
                    <ArrowRight className="w-4 h-4 text-slate-300" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Products We Source */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 tracking-tight">
              Products We Source
            </h2>
            <p className="mt-4 text-slate-600 text-lg">
              We source manufactured goods across a wide range of industries.
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-3">
            {products.map((product) => (
              <span key={product} className="bg-surface border border-slate-200 text-slate-700 px-5 py-2.5 rounded-full text-sm font-medium">
                {product}
              </span>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link to="/products" className="inline-flex items-center text-navy font-semibold hover:text-navy-light no-underline transition-colors">
              See Full Product List <ArrowRight className="ml-1 w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Problems We Solve */}
      <section className="py-16 md:py-24 bg-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 tracking-tight">
              Problems We Solve
            </h2>
            <p className="mt-4 text-slate-600 text-lg">
              Common challenges overseas buyers face — and how we address them.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {problems.map((problem) => (
              <div key={problem.title} className="flex gap-4 bg-white border border-slate-200 rounded-xl p-6">
                <problem.icon className="w-8 h-8 text-navy flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-lg font-semibold text-slate-900 mb-1">{problem.title}</h3>
                  <p className="text-slate-600 text-sm leading-relaxed">{problem.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 tracking-tight">
              Client Success Stories
            </h2>
            <p className="mt-4 text-slate-600 text-lg">
              Real results from real sourcing projects we have managed.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {caseStudies.map((cs) => (
              <div key={cs.id} className="bg-white border border-slate-200 rounded-xl overflow-hidden hover:shadow-md transition-shadow">
                <img
                  alt={cs.title}
                  data-strk-img-id={cs.imgId}
                  data-strk-img={`[${cs.descId}] [${cs.titleId}]`}
                  data-strk-img-ratio="16x9"
                  data-strk-img-width="600"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 9'/%3E"
                  className="w-full aspect-video object-cover bg-slate-100"
                />
                <div className="p-6">
                  <span className="text-xs font-medium text-accent uppercase tracking-wide">{cs.category}</span>
                  <h3 id={cs.titleId} className="text-lg font-semibold text-slate-900 mt-2 mb-2">{cs.title}</h3>
                  <p id={cs.descId} className="text-slate-600 text-sm leading-relaxed">{cs.result}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link to="/case-studies" className="inline-flex items-center text-navy font-semibold hover:text-navy-light no-underline transition-colors">
              View All Case Studies <ArrowRight className="ml-1 w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 md:py-24 bg-surface">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 tracking-tight">
              Frequently Asked Questions
            </h2>
          </div>
          <div className="space-y-4">
            {faqs.map((faq, idx) => (
              <details key={idx} className="bg-white border border-slate-200 rounded-xl p-5 group">
                <summary className="flex items-center justify-between cursor-pointer list-none text-slate-900 font-medium">
                  {faq.q}
                  <HelpCircle className="w-5 h-5 text-slate-400 flex-shrink-0 ml-4" />
                </summary>
                <p className="mt-3 text-slate-600 text-sm leading-relaxed">{faq.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-navy">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight">
            Ready to Source from China?
          </h2>
          <p className="mt-4 text-slate-300 text-lg">
            Tell us what you need. We will respond within 24 hours with a sourcing plan tailored to your requirements.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center justify-center mt-8 bg-accent hover:bg-accent-hover text-white font-semibold px-8 py-4 rounded-lg text-lg no-underline transition-colors"
          >
            Get a Free Sourcing Quote
            <ArrowRight className="ml-2 w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  )
}
