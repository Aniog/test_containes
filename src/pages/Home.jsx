import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import {
  Search, ShieldCheck, ClipboardCheck, Factory, Ship, Package,
  CheckCircle, Users, Globe, Award, ArrowRight, ChevronDown,
  AlertTriangle, Clock, DollarSign, MessageSquare
} from 'lucide-react'
import { SectionHeading, CTAButton } from '@/components/shared/SectionHeading'

const services = [
  { id: 'supplier-sourcing', icon: Search, title: 'Supplier Sourcing', desc: 'We identify and shortlist qualified manufacturers matching your product specs, MOQ, and budget requirements.' },
  { id: 'factory-verification', icon: ShieldCheck, title: 'Factory Verification', desc: 'On-site factory audits covering production capacity, certifications, quality systems, and business legitimacy.' },
  { id: 'quality-inspection', icon: ClipboardCheck, title: 'Quality Inspection', desc: 'Pre-production, during production, and pre-shipment inspections with detailed photo reports.' },
  { id: 'production-followup', icon: Factory, title: 'Production Follow-up', desc: 'Regular factory visits and progress updates to keep your order on schedule and within spec.' },
  { id: 'shipping-coordination', icon: Ship, title: 'Shipping & Logistics', desc: 'Full export coordination including freight booking, customs documentation, and delivery tracking.' },
  { id: 'product-development', icon: Package, title: 'Product Development', desc: 'Sample management, design refinement, and prototyping support from concept to mass production.' },
]

const processSteps = [
  { step: '01', title: 'Share Your Requirements', desc: 'Tell us what you need — product specs, target price, quantity, and timeline.' },
  { step: '02', title: 'We Source & Verify', desc: 'Our team identifies suppliers, visits factories, and shortlists the best matches.' },
  { step: '03', title: 'Sample & Negotiate', desc: 'We arrange samples, negotiate pricing, and finalize terms on your behalf.' },
  { step: '04', title: 'Production & QC', desc: 'We monitor production, conduct inspections, and ensure quality standards are met.' },
  { step: '05', title: 'Ship & Deliver', desc: 'We coordinate logistics and documentation for smooth delivery to your door.' },
]

const products = [
  'Electronics & Components', 'Home & Garden', 'Textiles & Apparel',
  'Industrial Equipment', 'Packaging Materials', 'Auto Parts',
  'Building Materials', 'Consumer Goods', 'Medical Supplies',
]

const problems = [
  { icon: AlertTriangle, title: 'Unreliable Suppliers', desc: 'Avoid scams and low-quality factories with our verified supplier network.' },
  { icon: Clock, title: 'Delayed Shipments', desc: 'Our production follow-up keeps your orders on track and on time.' },
  { icon: DollarSign, title: 'Hidden Costs', desc: 'Transparent pricing with no surprise fees — we negotiate the best terms.' },
  { icon: MessageSquare, title: 'Communication Gaps', desc: 'Bilingual team bridges language and cultural barriers with your suppliers.' },
]

const trustPoints = [
  { value: '500+', label: 'Verified Factories' },
  { value: '12+', label: 'Years Experience' },
  { value: '30+', label: 'Countries Served' },
  { value: '98%', label: 'Client Satisfaction' },
]

const caseStudies = [
  { id: 'electronics-eu', title: 'Electronics for EU Retailer', category: 'Electronics', result: '40% cost reduction with verified supplier', titleId: 'case-electronics-title', descId: 'case-electronics-desc', imgId: 'case-electronics-img-a7b3c1' },
  { id: 'furniture-us', title: 'Custom Furniture for US Brand', category: 'Home & Garden', result: 'On-time delivery for 2,000-unit order', titleId: 'case-furniture-title', descId: 'case-furniture-desc', imgId: 'case-furniture-img-d4e5f6' },
  { id: 'textiles-au', title: 'Textile Sourcing for AU Importer', category: 'Textiles', result: 'Quality pass rate improved from 82% to 99%', titleId: 'case-textiles-title', descId: 'case-textiles-desc', imgId: 'case-textiles-img-g7h8i9' },
]

const faqs = [
  { q: 'What is a sourcing agent and why do I need one?', a: 'A sourcing agent acts as your local representative in China, handling supplier identification, factory verification, quality control, and logistics. This saves you time, reduces risk, and ensures you get the best value.' },
  { q: 'How much does your service cost?', a: 'Our fees depend on the scope of work. We offer transparent pricing with no hidden charges. Contact us for a free quote tailored to your specific requirements.' },
  { q: 'What is your minimum order quantity?', a: 'MOQ depends on the product and supplier. We work with factories that accommodate both small trial orders and large-volume production runs.' },
  { q: 'How do you verify suppliers?', a: 'We conduct on-site factory audits covering business licenses, production capacity, quality management systems, certifications, and past export records.' },
  { q: 'Can you handle shipping to my country?', a: 'Yes. We coordinate full export logistics including freight forwarding, customs documentation, and door-to-door delivery worldwide.' },
]

const Home = () => {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <div ref={containerRef}>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary-dark via-primary to-primary-dark overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div
            data-strk-bg-id="hero-bg-main-x9k2m4"
            data-strk-bg="[hero-subtitle] [hero-title]"
            data-strk-bg-ratio="16x9"
            data-strk-bg-width="1600"
            className="w-full h-full"
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32">
          <div className="max-w-3xl">
            <h1 id="hero-title" className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              China Sourcing Agent for Global Buyers
            </h1>
            <p id="hero-subtitle" className="text-lg md:text-xl text-white/80 mb-8 leading-relaxed max-w-2xl">
              We help you find reliable Chinese suppliers, verify factories, inspect quality, and ship products — so you can buy with confidence.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center px-7 py-3.5 bg-secondary hover:bg-secondary-dark text-white font-semibold rounded-lg transition-colors no-underline text-base"
              >
                Get a Free Sourcing Quote
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
              <Link
                to="/how-it-works"
                className="inline-flex items-center justify-center px-7 py-3.5 border-2 border-white/30 text-white hover:bg-white/10 font-medium rounded-lg transition-colors no-underline text-base"
              >
                See How It Works
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Bar */}
      <section className="bg-white border-b border-neutral-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {trustPoints.map((point) => (
              <div key={point.label}>
                <div className="text-3xl md:text-4xl font-bold text-primary">{point.value}</div>
                <div className="text-sm text-neutral-500 mt-1">{point.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 md:py-24 bg-neutral-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="Our Sourcing Services"
            subtitle="End-to-end support from supplier identification to delivery at your warehouse."
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service) => (
              <div key={service.id} className="bg-white rounded-xl border border-neutral-200 p-6 hover:shadow-md transition-shadow">
                <service.icon className="w-10 h-10 text-primary mb-4" />
                <h3 className="text-lg font-semibold text-neutral-900 mb-2">{service.title}</h3>
                <p className="text-sm text-neutral-600 leading-relaxed">{service.desc}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <CTAButton to="/services" variant="outline">View All Services</CTAButton>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="How Our Sourcing Process Works"
            subtitle="A clear, step-by-step approach to sourcing products from China."
          />
          <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
            {processSteps.map((step, idx) => (
              <div key={step.step} className="text-center relative">
                <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <span className="text-lg font-bold text-primary">{step.step}</span>
                </div>
                <h4 className="text-sm font-semibold text-neutral-900 mb-2">{step.title}</h4>
                <p className="text-xs text-neutral-500 leading-relaxed">{step.desc}</p>
                {idx < processSteps.length - 1 && (
                  <div className="hidden md:block absolute top-7 left-[60%] w-[80%] h-px bg-neutral-200" />
                )}
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <CTAButton to="/how-it-works" variant="outline">Learn More</CTAButton>
          </div>
        </div>
      </section>

      {/* Products We Source */}
      <section className="py-16 md:py-24 bg-neutral-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="Products We Source"
            subtitle="From electronics to industrial equipment — we cover a wide range of product categories."
          />
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {products.map((product) => (
              <div key={product} className="bg-white rounded-lg border border-neutral-200 p-4 text-center hover:border-primary/30 transition-colors">
                <span className="text-sm font-medium text-neutral-700">{product}</span>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <CTAButton to="/products" variant="outline">See Full Product List</CTAButton>
          </div>
        </div>
      </section>

      {/* Problems We Solve */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="Problems We Solve"
            subtitle="Common challenges faced by overseas buyers — and how we address them."
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {problems.map((problem) => (
              <div key={problem.title} className="flex gap-4 p-6 bg-neutral-50 rounded-xl border border-neutral-200">
                <problem.icon className="w-8 h-8 text-secondary flex-shrink-0 mt-1" />
                <div>
                  <h4 className="text-base font-semibold text-neutral-900 mb-1">{problem.title}</h4>
                  <p className="text-sm text-neutral-600 leading-relaxed">{problem.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-16 md:py-24 bg-neutral-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="Case Studies"
            subtitle="Real results from real sourcing projects."
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {caseStudies.map((cs) => (
              <div key={cs.id} className="bg-white rounded-xl border border-neutral-200 overflow-hidden hover:shadow-md transition-shadow">
                <div className="aspect-video bg-neutral-100 relative">
                  <img
                    data-strk-img-id={cs.imgId}
                    data-strk-img={`[${cs.descId}] [${cs.titleId}]`}
                    data-strk-img-ratio="16x9"
                    data-strk-img-width="600"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    alt={cs.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-5">
                  <span className="text-xs font-medium text-primary uppercase tracking-wide">{cs.category}</span>
                  <h3 id={cs.titleId} className="text-base font-semibold text-neutral-900 mt-1 mb-2">{cs.title}</h3>
                  <p id={cs.descId} className="text-sm text-neutral-500">{cs.result}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <CTAButton to="/case-studies" variant="outline">View All Case Studies</CTAButton>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading title="Frequently Asked Questions" />
          <div className="space-y-4">
            {faqs.map((faq, idx) => (
              <details key={idx} className="group border border-neutral-200 rounded-lg">
                <summary className="flex items-center justify-between cursor-pointer p-5 text-neutral-900 font-medium text-sm">
                  {faq.q}
                  <ChevronDown className="w-5 h-5 text-neutral-400 group-open:rotate-180 transition-transform" />
                </summary>
                <div className="px-5 pb-5 text-sm text-neutral-600 leading-relaxed">
                  {faq.a}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-primary">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Source from China?
          </h2>
          <p className="text-lg text-white/80 mb-8 max-w-2xl mx-auto">
            Tell us what you need and get a free, no-obligation sourcing quote within 24 hours.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center justify-center px-8 py-4 bg-secondary hover:bg-secondary-dark text-white font-semibold rounded-lg transition-colors no-underline text-lg"
          >
            Get a Free Sourcing Quote
            <ArrowRight className="w-5 h-5 ml-2" />
          </Link>
        </div>
      </section>
    </div>
  )
}

export default Home
