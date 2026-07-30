import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import {
  Search, ShieldCheck, ClipboardCheck, Truck, Factory, Star,
  CheckCircle, ArrowRight, Globe, Users, Package, TrendingUp,
  AlertTriangle, Clock, DollarSign, ChevronDown
} from 'lucide-react'
import CTAButton from '../components/CTAButton.jsx'
import SectionHeader from '../components/SectionHeader.jsx'

const services = [
  {
    icon: Search,
    title: 'Supplier Sourcing',
    desc: 'We identify and shortlist verified manufacturers that match your product specs, quality standards, and budget.',
  },
  {
    icon: Factory,
    title: 'Factory Verification',
    desc: 'On-site factory audits to confirm production capacity, certifications, and working conditions before you commit.',
  },
  {
    icon: ClipboardCheck,
    title: 'Quality Inspection',
    desc: 'Pre-shipment and in-line inspections by trained QC staff to catch defects before goods leave the factory.',
  },
  {
    icon: Clock,
    title: 'Production Follow-up',
    desc: 'Regular updates and milestone tracking to keep your order on schedule and resolve issues early.',
  },
  {
    icon: Truck,
    title: 'Shipping Coordination',
    desc: 'We coordinate with freight forwarders, handle documentation, and ensure smooth customs clearance.',
  },
  {
    icon: Package,
    title: 'Sample Procurement',
    desc: 'We source and ship product samples so you can evaluate quality before placing a full order.',
  },
]

const problems = [
  { icon: AlertTriangle, title: 'Unreliable Suppliers', desc: 'Factories that overpromise and underdeliver on quality or lead times.' },
  { icon: DollarSign, title: 'Hidden Costs', desc: 'Unexpected charges, poor packaging, or substandard materials eating into margins.' },
  { icon: Globe, title: 'Language Barriers', desc: 'Miscommunication leading to wrong specs, delays, or costly rework.' },
  { icon: ShieldCheck, title: 'Quality Failures', desc: 'Receiving goods that don\'t match samples or fail your market\'s standards.' },
]

const trustPoints = [
  { value: '500+', label: 'Sourcing Projects Completed' },
  { value: '12+', label: 'Years in China Sourcing' },
  { value: '30+', label: 'Product Categories Covered' },
  { value: '98%', label: 'Client Satisfaction Rate' },
]

const steps = [
  { num: '01', title: 'Submit Your Inquiry', desc: 'Tell us what you need — product specs, quantity, target price, and timeline.' },
  { num: '02', title: 'Supplier Matching', desc: 'We identify and vet 3–5 qualified suppliers from our network and new searches.' },
  { num: '03', title: 'Samples & Negotiation', desc: 'We arrange samples, negotiate pricing, and review contracts on your behalf.' },
  { num: '04', title: 'Production & QC', desc: 'We monitor production progress and conduct quality inspections at key stages.' },
  { num: '05', title: 'Shipping & Delivery', desc: 'We coordinate logistics, handle documentation, and track your shipment to destination.' },
]

const faqs = [
  {
    q: 'How do you charge for your services?',
    a: 'We offer flexible fee structures: a flat project fee, a percentage of order value, or a monthly retainer for ongoing sourcing. We discuss the best model for your needs during the initial consultation.',
  },
  {
    q: 'What is the minimum order value you work with?',
    a: 'We typically work with orders starting from USD 5,000. For smaller orders, we can discuss sample procurement or consolidated shipping options.',
  },
  {
    q: 'How do you verify that a factory is legitimate?',
    a: 'We conduct on-site factory audits covering business licenses, production capacity, equipment, workforce, and quality management systems. We also check third-party certifications where applicable.',
  },
  {
    q: 'Can you handle multiple product categories in one order?',
    a: 'Yes. We manage multi-category sourcing projects and can coordinate different suppliers for a consolidated shipment.',
  },
  {
    q: 'How long does the sourcing process take?',
    a: 'A typical sourcing project from inquiry to first shipment takes 4–10 weeks depending on product complexity, sample rounds, and production lead time.',
  },
  {
    q: 'Do you work with buyers from any country?',
    a: 'Yes. We work with buyers from the US, Europe, Australia, the Middle East, Southeast Asia, and other regions. All communication is in English.',
  },
]

const caseStudies = [
  {
    id: 'furniture-uk',
    titleId: 'cs-furniture-uk-title',
    descId: 'cs-furniture-uk-desc',
    imgId: 'cs-img-furniture-uk-a1b2c3',
    category: 'Furniture',
    title: 'UK Retailer Cuts Sourcing Costs by 22%',
    desc: 'A UK home goods retailer needed a reliable furniture supplier in Foshan. We audited 8 factories, negotiated pricing, and managed 3 production runs.',
    result: '22% cost reduction, zero quality rejections',
  },
  {
    id: 'electronics-us',
    titleId: 'cs-electronics-us-title',
    descId: 'cs-electronics-us-desc',
    imgId: 'cs-img-electronics-us-d4e5f6',
    category: 'Electronics',
    title: 'US Brand Launches Private Label Electronics',
    desc: 'An American startup needed a certified electronics manufacturer for a new product line. We handled supplier vetting, sample coordination, and CE/FCC compliance.',
    result: 'Product launched on time, fully certified',
  },
  {
    id: 'textiles-au',
    titleId: 'cs-textiles-au-title',
    descId: 'cs-textiles-au-desc',
    imgId: 'cs-img-textiles-au-g7h8i9',
    category: 'Textiles',
    title: 'Australian Brand Scales Apparel Production',
    desc: 'A growing Australian fashion brand needed to scale from 500 to 5,000 units per style. We found a compliant factory in Guangzhou and managed QC across 6 SKUs.',
    result: 'On-time delivery, consistent quality across all SKUs',
  },
]

export default function HomePage() {
  const containerRef = useRef(null)

  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, containerRef.current)
    })
    return () => window.cancelAnimationFrame(frameId)
  }, [])

  return (
    <div ref={containerRef}>
      {/* Hero */}
      <section className="relative bg-brand-blue overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0"
            data-strk-bg-id="hero-bg-main-x1y2z3"
            data-strk-bg="[hero-subtitle] [hero-title]"
            data-strk-bg-ratio="16x9"
            data-strk-bg-width="1600"
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28 lg:py-32">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="inline-block bg-brand-red text-white text-xs font-semibold uppercase tracking-widest px-3 py-1 rounded-full mb-6">
                China-Based Sourcing Agent
              </span>
              <h1 id="hero-title" className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
                China Sourcing Agent for Global Buyers
              </h1>
              <p id="hero-subtitle" className="text-lg md:text-xl text-blue-200 leading-relaxed mb-8 max-w-lg">
                We help overseas buyers find reliable Chinese suppliers, verify factories, inspect quality, and coordinate shipping — so you can import with confidence.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <CTAButton to="/contact" variant="primary">
                  Get a Free Sourcing Quote
                </CTAButton>
                <CTAButton to="/how-it-works" variant="white-outline">
                  See How It Works
                </CTAButton>
              </div>
              <div className="mt-10 flex flex-wrap gap-6">
                {trustPoints.map((tp) => (
                  <div key={tp.label}>
                    <div className="text-2xl font-bold text-white">{tp.value}</div>
                    <div className="text-blue-300 text-sm">{tp.label}</div>
                  </div>
                ))}
              </div>
            </div>
            <div className="hidden lg:block">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl aspect-[4/3]">
                <img
                  data-strk-img-id="hero-factory-img-p9q8r7"
                  data-strk-img="[hero-subtitle] [hero-title] China factory manufacturing quality control"
                  data-strk-img-ratio="4x3"
                  data-strk-img-width="800"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  alt="China factory floor"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Bar */}
      <section className="bg-white border-b border-gray-200 py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-center justify-center gap-8 text-sm text-gray-500">
            <span className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-green-500" /> Verified Supplier Network</span>
            <span className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-green-500" /> On-Site Factory Audits</span>
            <span className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-green-500" /> English-Speaking Team</span>
            <span className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-green-500" /> End-to-End Order Management</span>
            <span className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-green-500" /> Buyers in 40+ Countries Served</span>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="bg-brand-bg py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            badge="Our Services"
            title="Everything You Need to Source from China"
            subtitle="From finding the right supplier to getting goods delivered, we manage the entire process on your behalf."
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((s) => (
              <div key={s.title} className="bg-white rounded-xl border border-gray-200 p-6 hover:shadow-md transition-shadow">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <s.icon className="w-6 h-6 text-brand-blue" />
                </div>
                <h3 className="font-bold text-brand-dark text-lg mb-2">{s.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <CTAButton to="/services" variant="secondary">View All Services</CTAButton>
          </div>
        </div>
      </section>

      {/* Problems We Solve */}
      <section className="bg-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="inline-block bg-red-100 text-brand-red text-xs font-semibold uppercase tracking-widest px-3 py-1 rounded-full mb-4">
                Problems We Solve
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-brand-dark leading-tight mb-6">
                Importing from China Doesn't Have to Be Risky
              </h2>
              <p className="text-gray-500 text-lg leading-relaxed mb-8">
                Many buyers face the same challenges when sourcing from China. Our team is on the ground to prevent these problems before they cost you time and money.
              </p>
              <div className="space-y-4">
                {problems.map((p) => (
                  <div key={p.title} className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-red-50 rounded-lg flex items-center justify-center flex-shrink-0">
                      <p.icon className="w-5 h-5 text-brand-red" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-brand-dark mb-1">{p.title}</h4>
                      <p className="text-gray-500 text-sm">{p.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="rounded-2xl overflow-hidden shadow-lg aspect-[4/3]">
              <img
                data-strk-img-id="problems-qc-img-s1t2u3"
                data-strk-img="China quality control inspection factory audit supplier verification"
                data-strk-img-ratio="4x3"
                data-strk-img-width="700"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                alt="Quality control inspection"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Sourcing Process */}
      <section className="bg-brand-blue py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            badge="Our Process"
            title="How We Work With You"
            subtitle="A clear, structured process from your first inquiry to final delivery."
            light
          />
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {steps.map((step, i) => (
              <div key={step.num} className="relative">
                <div className="bg-blue-800 rounded-xl p-6 h-full">
                  <div className="text-brand-red font-bold text-3xl mb-3">{step.num}</div>
                  <h3 className="font-bold text-white mb-2 text-base">{step.title}</h3>
                  <p className="text-blue-300 text-sm leading-relaxed">{step.desc}</p>
                </div>
                {i < steps.length - 1 && (
                  <div className="hidden lg:flex absolute top-1/2 -right-3 transform -translate-y-1/2 z-10">
                    <ArrowRight className="w-5 h-5 text-blue-500" />
                  </div>
                )}
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <CTAButton to="/how-it-works" variant="white">See Full Process Details</CTAButton>
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="bg-brand-bg py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            badge="Case Studies"
            title="Real Results for Real Buyers"
            subtitle="See how we've helped businesses like yours source successfully from China."
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {caseStudies.map((cs) => (
              <div key={cs.id} className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-shadow">
                <div className="aspect-[16/9] overflow-hidden">
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
                <div className="p-6">
                  <span className="inline-block bg-blue-100 text-brand-blue text-xs font-semibold px-2 py-1 rounded mb-3">{cs.category}</span>
                  <h3 id={cs.titleId} className="font-bold text-brand-dark text-lg mb-2">{cs.title}</h3>
                  <p id={cs.descId} className="text-gray-500 text-sm leading-relaxed mb-4">{cs.desc}</p>
                  <div className="flex items-center gap-2 text-green-600 text-sm font-medium">
                    <CheckCircle className="w-4 h-4" />
                    {cs.result}
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <CTAButton to="/case-studies" variant="secondary">View All Case Studies</CTAButton>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-white py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            badge="FAQ"
            title="Frequently Asked Questions"
            subtitle="Answers to the most common questions from buyers new to China sourcing."
          />
          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <details key={i} className="group bg-brand-bg rounded-xl border border-gray-200 overflow-hidden">
                <summary className="flex items-center justify-between p-6 cursor-pointer font-semibold text-brand-dark hover:text-brand-blue list-none">
                  {faq.q}
                  <ChevronDown className="w-5 h-5 text-gray-400 group-open:rotate-180 transition-transform flex-shrink-0 ml-4" />
                </summary>
                <div className="px-6 pb-6 text-gray-500 text-sm leading-relaxed border-t border-gray-200 pt-4">
                  {faq.a}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="bg-brand-red py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Source from China with Confidence?
          </h2>
          <p className="text-red-100 text-lg mb-8 max-w-xl mx-auto">
            Tell us what you need and we'll get back to you within 24 hours with a tailored sourcing plan.
          </p>
          <CTAButton to="/contact" variant="white">
            Get a Free Sourcing Quote
          </CTAButton>
        </div>
      </section>
    </div>
  )
}
