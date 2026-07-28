import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import {
  Search,
  ShieldCheck,
  ClipboardCheck,
  Ship,
  Factory,
  CheckCircle,
  ArrowRight,
  Star,
  TrendingUp,
  Users,
  Globe,
  Award,
  Clock,
  ChevronRight,
  Package,
} from 'lucide-react'
import CTABanner from '@/components/CTABanner'

const services = [
  {
    id: 'supplier-sourcing',
    icon: Search,
    title: 'Supplier Sourcing',
    desc: 'We identify and shortlist qualified Chinese manufacturers that match your product specifications, budget, and quality standards.',
    imgId: 'service-img-supplier-sourcing-8a1b2c',
  },
  {
    id: 'factory-verification',
    icon: Factory,
    title: 'Factory Verification',
    desc: 'On-site factory audits to verify licenses, production capacity, certifications, and working conditions before you commit.',
    imgId: 'service-img-factory-verification-3d4e5f',
  },
  {
    id: 'quality-control',
    icon: ClipboardCheck,
    title: 'Quality Control',
    desc: 'Pre-shipment inspections, in-process quality checks, and lab testing to ensure your products meet specifications.',
    imgId: 'service-img-quality-control-6g7h8i',
  },
  {
    id: 'shipping-logistics',
    icon: Ship,
    title: 'Shipping & Logistics',
    desc: 'End-to-end freight coordination including sea, air, and rail shipping with customs clearance and door-to-door delivery.',
    imgId: 'service-img-shipping-logistics-9j0k1l',
  },
]

const processSteps = [
  {
    step: '01',
    title: 'Tell Us Your Needs',
    desc: 'Share your product specifications, target price, order quantity, and quality requirements with our team.',
  },
  {
    step: '02',
    title: 'Supplier Matching',
    desc: 'We search our vetted network of 5,000+ factories and present the top 3-5 qualified candidates.',
  },
  {
    step: '03',
    title: 'Factory Audit & Samples',
    desc: 'We conduct on-site factory audits and arrange samples for your evaluation and approval.',
  },
  {
    step: '04',
    title: 'Negotiation & Contract',
    desc: 'We negotiate pricing, payment terms, and delivery schedules with your chosen supplier.',
  },
  {
    step: '05',
    title: 'Production & QC',
    desc: 'We monitor production progress and perform quality inspections at key stages.',
  },
  {
    step: '06',
    title: 'Shipping & Delivery',
    desc: 'We coordinate international freight, customs clearance, and delivery to your destination.',
  },
]

const productCategories = [
  {
    id: 'electronics',
    title: 'Electronics & Components',
    desc: 'Consumer electronics, PCBs, semiconductors, connectors, cables, and IoT devices.',
    icon: '🔌',
    titleId: 'product-cat-electronics-title',
    descId: 'product-cat-electronics-desc',
    imgId: 'prod-img-electronics-a1b2c3',
  },
  {
    id: 'industrial-parts',
    title: 'Industrial Parts & Machinery',
    desc: 'CNC machined parts, molds, castings, bearings, motors, pumps, and automation equipment.',
    icon: '⚙️',
    titleId: 'product-cat-industrial-title',
    descId: 'product-cat-industrial-desc',
    imgId: 'prod-img-industrial-d4e5f6',
  },
  {
    id: 'consumer-goods',
    title: 'Consumer Goods',
    desc: 'Home appliances, kitchenware, furniture, toys, sporting goods, and personal care products.',
    icon: '🛋️',
    titleId: 'product-cat-consumer-title',
    descId: 'product-cat-consumer-desc',
    imgId: 'prod-img-consumer-g7h8i9',
  },
  {
    id: 'textiles',
    title: 'Textiles & Apparel',
    desc: 'Garments, fabrics, home textiles, bags, footwear, and fashion accessories.',
    icon: '👕',
    titleId: 'product-cat-textiles-title',
    descId: 'product-cat-textiles-desc',
    imgId: 'prod-img-textiles-j0k1l2',
  },
  {
    id: 'packaging',
    title: 'Packaging & Printing',
    desc: 'Custom packaging, labels, cartons, flexible packaging, and promotional print materials.',
    icon: '📦',
    titleId: 'product-cat-packaging-title',
    descId: 'product-cat-packaging-desc',
    imgId: 'prod-img-packaging-m3n4o5',
  },
  {
    id: 'auto-parts',
    title: 'Auto Parts & Accessories',
    desc: 'Aftermarket auto parts, EV components, replacement parts, and vehicle accessories.',
    icon: '🚗',
    titleId: 'product-cat-auto-title',
    descId: 'product-cat-auto-desc',
    imgId: 'prod-img-auto-p6q7r8',
  },
]

const problems = [
  {
    icon: ShieldCheck,
    title: 'Unknown Supplier Reliability',
    desc: 'We verify every supplier through on-site audits. No more guessing whether a factory is legitimate.',
  },
  {
    icon: ClipboardCheck,
    title: 'Inconsistent Product Quality',
    desc: 'Our QC team inspects your products against AQL standards before they leave the factory.',
  },
  {
    icon: TrendingUp,
    title: 'Hidden Costs & Overpricing',
    desc: 'We negotiate factory-direct pricing with transparent cost breakdowns — no middleman markups.',
  },
  {
    icon: Clock,
    title: 'Production Delays',
    desc: 'We track production daily and alert you to any issues before they become problems.',
  },
  {
    icon: Ship,
    title: 'Complex Logistics',
    desc: 'We handle all shipping documentation, customs clearance, and freight coordination.',
  },
  {
    icon: Globe,
    title: 'Language & Cultural Barriers',
    desc: 'Our bilingual team bridges the communication gap between you and Chinese manufacturers.',
  },
]

const trustPoints = [
  { icon: Award, value: '12+', label: 'Years Experience' },
  { icon: Users, value: '500+', label: 'Clients Worldwide' },
  { icon: Factory, value: '5,000+', label: 'Vetted Factories' },
  { icon: Package, value: '15,000+', label: 'Shipments Managed' },
]

const caseStudiesPreview = [
  {
    id: 'case-1',
    title: 'German Auto Parts Importer Saves 30% on Sourcing Costs',
    desc: 'How a mid-sized German auto parts distributor transitioned from European suppliers to direct Chinese sourcing with verified quality.',
    result: '30% cost reduction, 99.2% quality pass rate',
    titleId: 'case-preview-1-title',
    descId: 'case-preview-1-desc',
    imgId: 'case-img-1-s9t0u1',
  },
  {
    id: 'case-2',
    title: 'US E-Commerce Brand Scales from 1 to 15 Products',
    desc: 'A US-based Amazon seller partnered with us to find reliable factories for 15 new product lines across electronics and home goods.',
    result: '15 new SKUs launched in 8 months',
    titleId: 'case-preview-2-title',
    descId: 'case-preview-2-desc',
    imgId: 'case-img-2-v2w3x4',
  },
  {
    id: 'case-3',
    title: 'Australian Retail Chain Streamlines Packaging Supply Chain',
    desc: 'Consolidating packaging procurement for 200+ retail stores through a single-vetted Chinese supply chain.',
    result: '22% annual savings on packaging',
    titleId: 'case-preview-3-title',
    descId: 'case-preview-3-desc',
    imgId: 'case-img-3-y5z6a7',
  },
]

const faqs = [
  {
    q: 'What is the minimum order quantity (MOQ) you can handle?',
    a: 'We work with orders of all sizes. While many Chinese factories prefer larger quantities, we can help you negotiate flexible MOQs, especially for first-time trial orders. Typical initial orders range from 500 to 2,000 units depending on the product.',
  },
  {
    q: 'How do you charge for your sourcing services?',
    a: 'We offer flexible pricing models: a fixed project fee, a percentage-based commission (typically 3-8% depending on order value and complexity), or a retainer for ongoing sourcing needs. Contact us for a tailored proposal.',
  },
  {
    q: 'How do you ensure product quality?',
    a: 'We follow ISO 2859-1 (AQL) sampling standards for all inspections. Our QC engineers conduct in-process inspections during production, pre-shipment inspections before loading, and can arrange third-party lab testing for certifications (CE, FDA, RoHS, etc.).',
  },
  {
    q: 'Which cities and regions do you cover?',
    a: 'Our team is based in Shenzhen with coverage across major manufacturing hubs including Guangzhou, Dongguan, Yiwu, Ningbo, Shanghai, and Qingdao. We can serve factories anywhere in mainland China.',
  },
  {
    q: 'Can you help with product design and development?',
    a: 'Yes. We can connect you with industrial designers, engineers, and prototyping services in China. From concept to tooling to mass production, we support the full product development cycle.',
  },
  {
    q: 'How long does the sourcing process take?',
    a: 'A typical sourcing project takes 4-8 weeks from initial inquiry to first shipment, depending on product complexity. Simple off-the-shelf products can be sourced faster, while custom OEM products requiring tooling may take 8-12 weeks.',
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
      <section className="relative bg-gradient-to-br from-navy-950 via-navy-900 to-navy-800 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div
            className="w-full h-full"
            data-strk-bg-id="hero-bg-7f3a2d"
            data-strk-bg="[hero-subtitle] China Sourcing Agent for Global Buyers"
            data-strk-bg-ratio="16x9"
            data-strk-bg-width="1600"
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 sm:py-32 lg:py-40">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-brand-500/15 border border-brand-400/20 rounded-full text-brand-300 text-sm font-medium mb-6">
              <Star className="w-4 h-4 fill-current" />
              <span>Trusted by 500+ Buyers Worldwide</span>
            </div>
            <h1 id="hero-title" className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-tight mb-6">
              China Sourcing Agent
              <br />
              <span className="text-brand-400">for Global Buyers</span>
            </h1>
            <p id="hero-subtitle" className="text-lg sm:text-xl text-gray-300 max-w-2xl mb-10 leading-relaxed">
              Find reliable Chinese suppliers, verify factories, inspect production quality,
              and coordinate shipping — all through one trusted partner with 12+ years of experience.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-brand-600 text-white font-semibold rounded-lg hover:bg-brand-700 transition-colors shadow-lg shadow-brand-600/25 text-base"
              >
                Get a Free Sourcing Quote
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                to="/how-it-works"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white/10 text-white font-semibold rounded-lg hover:bg-white/15 transition-colors backdrop-blur text-base"
              >
                How It Works
              </Link>
            </div>
          </div>

          {/* Trust badges */}
          <div className="mt-16 grid grid-cols-2 sm:grid-cols-4 gap-6 max-w-3xl">
            {trustPoints.map((point) => (
              <div key={point.label} className="text-center">
                <div className="text-2xl sm:text-3xl font-bold text-white mb-1">{point.value}</div>
                <div className="text-sm text-gray-400">{point.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 sm:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <p className="text-brand-600 font-semibold text-sm tracking-wide uppercase mb-3">Our Services</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-navy-950 mb-4">
              End-to-End China Sourcing Solutions
            </h2>
            <p className="text-gray-600 text-lg">
              From supplier discovery to final delivery, we cover every step of the sourcing journey.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service) => (
              <div
                key={service.id}
                className="group bg-white rounded-xl border border-gray-100 hover:border-brand-200 hover:shadow-lg transition-all p-6 flex flex-col"
              >
                <div className="w-12 h-12 rounded-lg bg-brand-50 flex items-center justify-center mb-5 group-hover:bg-brand-100 transition-colors">
                  <service.icon className="w-6 h-6 text-brand-600" />
                </div>
                <h3 id={`service-${service.id}-title`} className="text-lg font-semibold text-navy-950 mb-2">
                  {service.title}
                </h3>
                <p id={`service-${service.id}-desc`} className="text-gray-600 text-sm leading-relaxed flex-1">
                  {service.desc}
                </p>
                <div className="mt-4 overflow-hidden rounded-lg">
                  <img
                    alt={service.title}
                    data-strk-img-id={service.imgId}
                    data-strk-img={`[service-${service.id}-desc] [service-${service.id}-title] China sourcing service`}
                    data-strk-img-ratio="3x2"
                    data-strk-img-width="400"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    className="w-full h-40 object-cover rounded-lg group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              to="/services"
              className="inline-flex items-center gap-2 text-brand-600 font-semibold hover:text-brand-700 transition-colors"
            >
              View All Services <ChevronRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 sm:py-28 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <p className="text-brand-600 font-semibold text-sm tracking-wide uppercase mb-3">How It Works</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-navy-950 mb-4">
              Your Sourcing Journey in 6 Clear Steps
            </h2>
            <p className="text-gray-600 text-lg">
              A proven, transparent process that takes you from inquiry to delivery.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {processSteps.map((step, index) => (
              <div key={step.step} className="relative bg-white rounded-xl p-6 border border-gray-100 hover:shadow-md transition-shadow">
                <div className="text-brand-600 font-bold text-4xl mb-4 opacity-30">{step.step}</div>
                <h3 className="text-lg font-semibold text-navy-950 mb-2">{step.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{step.desc}</p>
                {index < processSteps.length - 1 && (
                  <div className="hidden lg:block absolute -right-4 top-1/2 -translate-y-1/2 z-10">
                    <ArrowRight className="w-6 h-6 text-brand-300" />
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              to="/how-it-works"
              className="inline-flex items-center gap-2 text-brand-600 font-semibold hover:text-brand-700 transition-colors"
            >
              Learn More About Our Process <ChevronRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Products We Source */}
      <section className="py-20 sm:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <p className="text-brand-600 font-semibold text-sm tracking-wide uppercase mb-3">Products We Source</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-navy-950 mb-4">
              What Can We Source for You?
            </h2>
            <p className="text-gray-600 text-lg">
              From electronics to industrial equipment, we have experience across dozens of product categories.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {productCategories.map((cat) => (
              <div
                key={cat.id}
                className="group bg-gray-50 rounded-xl p-6 border border-gray-100 hover:border-brand-200 hover:shadow-md transition-all"
              >
                <div className="text-3xl mb-4">{cat.icon}</div>
                <h3 id={cat.titleId} className="text-lg font-semibold text-navy-950 mb-2">
                  {cat.title}
                </h3>
                <p id={cat.descId} className="text-gray-600 text-sm leading-relaxed mb-4">
                  {cat.desc}
                </p>
                <div className="overflow-hidden rounded-lg">
                  <img
                    alt={cat.title}
                    data-strk-img-id={cat.imgId}
                    data-strk-img={`[${cat.descId}] [${cat.titleId}] products made in China`}
                    data-strk-img-ratio="3x2"
                    data-strk-img-width="400"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    className="w-full h-36 object-cover rounded-lg group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              to="/products"
              className="inline-flex items-center gap-2 text-brand-600 font-semibold hover:text-brand-700 transition-colors"
            >
              View All Product Categories <ChevronRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Problems We Solve */}
      <section className="py-20 sm:py-28 bg-navy-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <p className="text-brand-400 font-semibold text-sm tracking-wide uppercase mb-3">Problems We Solve</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              We Eliminate the Risks of Sourcing from China
            </h2>
            <p className="text-gray-400 text-lg">
              Every sourcing challenge has a solution. Here is how we address the most common concerns.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {problems.map((problem) => (
              <div key={problem.title} className="flex gap-4">
                <div className="w-10 h-10 rounded-lg bg-brand-500/15 flex items-center justify-center shrink-0">
                  <problem.icon className="w-5 h-5 text-brand-400" />
                </div>
                <div>
                  <h3 className="text-white font-semibold mb-2">{problem.title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">{problem.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies Preview */}
      <section className="py-20 sm:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-16">
            <div className="max-w-2xl">
              <p className="text-brand-600 font-semibold text-sm tracking-wide uppercase mb-3">Case Studies</p>
              <h2 className="text-3xl sm:text-4xl font-bold text-navy-950 mb-4">
                Real Results for Real Clients
              </h2>
              <p className="text-gray-600 text-lg">
                See how we have helped businesses like yours source smarter from China.
              </p>
            </div>
            <Link
              to="/case-studies"
              className="inline-flex items-center gap-2 text-brand-600 font-semibold hover:text-brand-700 transition-colors shrink-0"
            >
              View All Case Studies <ChevronRight className="w-5 h-5" />
            </Link>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {caseStudiesPreview.map((cs) => (
              <Link
                key={cs.id}
                to="/case-studies"
                className="group bg-white rounded-xl border border-gray-100 hover:border-brand-200 hover:shadow-lg transition-all overflow-hidden"
              >
                <div className="overflow-hidden">
                  <img
                    alt={cs.title}
                    data-strk-img-id={cs.imgId}
                    data-strk-img={`[${cs.descId}] [${cs.titleId}] China sourcing case study`}
                    data-strk-img-ratio="16x9"
                    data-strk-img-width="600"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <h3 id={cs.titleId} className="font-semibold text-navy-950 mb-2 group-hover:text-brand-600 transition-colors line-clamp-2">
                    {cs.title}
                  </h3>
                  <p id={cs.descId} className="text-gray-600 text-sm leading-relaxed mb-3 line-clamp-3">
                    {cs.desc}
                  </p>
                  <div className="flex items-center gap-2 text-brand-600 text-sm font-medium">
                    <CheckCircle className="w-4 h-4" />
                    <span>{cs.result}</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 sm:py-28 bg-gray-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-brand-600 font-semibold text-sm tracking-wide uppercase mb-3">FAQ</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-navy-950 mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-gray-600 text-lg">
              Quick answers to the most common questions about working with us.
            </p>
          </div>

          <div className="space-y-3">
            {faqs.map((faq, i) => (
              <div key={i} className="bg-white rounded-xl border border-gray-100 overflow-hidden">
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full flex items-center justify-between px-6 py-4 text-left hover:bg-gray-50 transition-colors"
                >
                  <span className="font-semibold text-navy-950 pr-4">{faq.q}</span>
                  <ChevronRight
                    className={`w-5 h-5 text-gray-400 shrink-0 transition-transform ${
                      openFaq === i ? 'rotate-90' : ''
                    }`}
                  />
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

      {/* Inquiry Form Section */}
      <section id="inquiry" className="py-20 sm:py-28 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-brand-600 font-semibold text-sm tracking-wide uppercase mb-3">Start Sourcing</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-navy-950 mb-4">
              Get a Free Sourcing Quote
            </h2>
            <p className="text-gray-600 text-lg">
              Tell us what you are looking for and we will get back to you within 24 hours.
            </p>
          </div>

          <form className="bg-gray-50 rounded-2xl p-8 sm:p-10 border border-gray-100" onSubmit={(e) => e.preventDefault()}>
            <div className="grid sm:grid-cols-2 gap-5">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-navy-950 mb-1.5">
                  Full Name *
                </label>
                <input
                  id="name"
                  type="text"
                  required
                  className="w-full px-4 py-2.5 rounded-lg border border-gray-200 bg-white text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent text-sm"
                  placeholder="John Smith"
                />
              </div>
              <div>
                <label htmlFor="company" className="block text-sm font-medium text-navy-950 mb-1.5">
                  Company Name *
                </label>
                <input
                  id="company"
                  type="text"
                  required
                  className="w-full px-4 py-2.5 rounded-lg border border-gray-200 bg-white text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent text-sm"
                  placeholder="Your Company Ltd."
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-navy-950 mb-1.5">
                  Business Email *
                </label>
                <input
                  id="email"
                  type="email"
                  required
                  className="w-full px-4 py-2.5 rounded-lg border border-gray-200 bg-white text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent text-sm"
                  placeholder="john@company.com"
                />
              </div>
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-navy-950 mb-1.5">
                  Phone Number
                </label>
                <input
                  id="phone"
                  type="tel"
                  className="w-full px-4 py-2.5 rounded-lg border border-gray-200 bg-white text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent text-sm"
                  placeholder="+1 555 123 4567"
                />
              </div>
              <div className="sm:col-span-2">
                <label htmlFor="product" className="block text-sm font-medium text-navy-950 mb-1.5">
                  Product Description *
                </label>
                <textarea
                  id="product"
                  rows={4}
                  required
                  className="w-full px-4 py-2.5 rounded-lg border border-gray-200 bg-white text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent text-sm resize-none"
                  placeholder="Please describe the product you want to source, including specifications, target quantity, and any special requirements..."
                />
              </div>
              <div>
                <label htmlFor="quantity" className="block text-sm font-medium text-navy-950 mb-1.5">
                  Target Order Quantity
                </label>
                <input
                  id="quantity"
                  type="text"
                  className="w-full px-4 py-2.5 rounded-lg border border-gray-200 bg-white text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent text-sm"
                  placeholder="e.g., 1,000 units"
                />
              </div>
              <div>
                <label htmlFor="budget" className="block text-sm font-medium text-navy-950 mb-1.5">
                  Target Price per Unit (USD)
                </label>
                <input
                  id="budget"
                  type="text"
                  className="w-full px-4 py-2.5 rounded-lg border border-gray-200 bg-white text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent text-sm"
                  placeholder="e.g., $5 - $10"
                />
              </div>
            </div>

            <div className="mt-6">
              <button
                type="submit"
                className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-brand-600 text-white font-semibold rounded-lg hover:bg-brand-700 transition-colors shadow-sm text-base"
              >
                Submit Inquiry
                <ArrowRight className="w-5 h-5" />
              </button>
              <p className="text-xs text-gray-500 text-center mt-3">
                We respect your privacy. Your information will never be shared with third parties.
              </p>
            </div>
          </form>
        </div>
      </section>

      <CTABanner />
    </div>
  )
}
