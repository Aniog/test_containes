import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import {
  Search, ShieldCheck, ClipboardCheck, Truck, Factory, Package,
  CheckCircle, Star, ArrowRight, ChevronDown, Globe, Users, Award, TrendingUp
} from 'lucide-react'
import CTAButton from '@/components/CTAButton'
import SectionHeader from '@/components/SectionHeader'

const services = [
  {
    icon: Search,
    title: 'Supplier Sourcing',
    desc: 'We identify and shortlist verified Chinese manufacturers that match your product specs, quality standards, and budget.',
    href: '/services',
  },
  {
    icon: Factory,
    title: 'Factory Verification',
    desc: 'On-site factory audits to confirm production capacity, certifications, working conditions, and compliance.',
    href: '/services',
  },
  {
    icon: ClipboardCheck,
    title: 'Quality Inspection',
    desc: 'Pre-shipment, during-production, and container loading inspections to catch defects before goods leave China.',
    href: '/services',
  },
  {
    icon: ShieldCheck,
    title: 'Production Follow-up',
    desc: 'We monitor your order from raw material to finished goods, keeping you informed at every production milestone.',
    href: '/services',
  },
  {
    icon: Truck,
    title: 'Shipping Coordination',
    desc: 'We coordinate with freight forwarders, handle export documentation, and track your shipment to destination.',
    href: '/services',
  },
  {
    icon: Package,
    title: 'Private Label / OEM',
    desc: 'From product design to branded packaging, we manage the full OEM process with vetted Chinese factories.',
    href: '/services',
  },
]

const process = [
  { step: '01', title: 'Submit Your Inquiry', desc: 'Tell us what you need — product type, quantity, target price, and quality requirements.' },
  { step: '02', title: 'Supplier Research', desc: 'We search our network and verified databases to find 3–5 qualified suppliers for your product.' },
  { step: '03', title: 'Factory Audit', desc: 'We visit shortlisted factories in person to verify capabilities, certifications, and reliability.' },
  { step: '04', title: 'Sample & Negotiation', desc: 'We obtain samples, review quality, and negotiate pricing and terms on your behalf.' },
  { step: '05', title: 'Production Monitoring', desc: 'We follow up during production and conduct quality inspections at key milestones.' },
  { step: '06', title: 'Shipping & Delivery', desc: 'We coordinate export, customs documentation, and freight to your destination port or warehouse.' },
]

const problems = [
  { title: 'Unreliable Suppliers', desc: 'Factories that look good online but fail to deliver. We verify before you commit.' },
  { title: 'Quality Surprises', desc: 'Goods that don\'t match samples. Our inspections catch issues before shipment.' },
  { title: 'Communication Barriers', desc: 'Language gaps and time zones causing delays. We bridge the gap on the ground.' },
  { title: 'Shipping Confusion', desc: 'Unclear freight costs and customs delays. We coordinate the full logistics chain.' },
  { title: 'Scam Risk', desc: 'Advance payments to fraudulent suppliers. We protect your money with verified partners.' },
  { title: 'No Local Presence', desc: 'Buying blind from overseas. We are your eyes and ears in China.' },
]

const trustPoints = [
  { icon: Globe, value: '40+', label: 'Countries Served' },
  { icon: Factory, value: '500+', label: 'Factories Audited' },
  { icon: Package, value: '1,200+', label: 'Orders Managed' },
  { icon: Award, value: '98%', label: 'Client Satisfaction' },
]

const caseStudies = [
  {
    id: 'cs-1',
    titleId: 'cs-1-title',
    descId: 'cs-1-desc',
    imgId: 'cs-img-1-a3f9b2',
    category: 'Electronics',
    title: 'US Retailer Saves 22% on LED Lighting Costs',
    desc: 'A US-based lighting distributor needed to reduce procurement costs without sacrificing quality. We sourced 3 verified LED factories, negotiated pricing, and managed QC.',
    result: '22% cost reduction, zero defect rate on first shipment',
  },
  {
    id: 'cs-2',
    titleId: 'cs-2-title',
    descId: 'cs-2-desc',
    imgId: 'cs-img-2-b7c4d1',
    category: 'Furniture',
    title: 'European Brand Launches Private Label Furniture Line',
    desc: 'A European home goods brand wanted to launch a private label furniture range. We managed factory selection, OEM design, sampling, and production oversight.',
    result: 'On-time delivery, 4 SKUs launched within 5 months',
  },
  {
    id: 'cs-3',
    titleId: 'cs-3-title',
    descId: 'cs-3-desc',
    imgId: 'cs-img-3-e2a8f5',
    category: 'Apparel',
    title: 'Australian Brand Scales Apparel Production',
    desc: 'An Australian fashion brand needed to scale from 500 to 5,000 units per style. We identified a compliant factory, managed sampling rounds, and coordinated sea freight.',
    result: 'Production scaled 10x, delivery on schedule',
  },
]

const faqs = [
  { q: 'How much does your sourcing service cost?', a: 'We offer a free initial consultation and sourcing quote. Our fees depend on the scope of services — supplier sourcing, inspection, and shipping coordination are priced separately. Contact us for a tailored quote.' },
  { q: 'Do you work with small businesses and startups?', a: 'Yes. We work with buyers of all sizes, from startups placing their first order to established importers managing multiple SKUs. We adapt our service to your order volume and budget.' },
  { q: 'How do you verify that a factory is reliable?', a: 'We conduct on-site factory audits covering production capacity, equipment, certifications (ISO, CE, etc.), worker conditions, and past export records. We only recommend factories we have personally visited.' },
  { q: 'What product categories do you cover?', a: 'We source across a wide range of categories including electronics, furniture, apparel, machinery, toys, health products, and more. See our Products We Source page for the full list.' },
  { q: 'How long does the sourcing process take?', a: 'A typical sourcing project takes 2–4 weeks from inquiry to supplier shortlist. Production timelines vary by product. We provide a clear timeline estimate at the start of each project.' },
  { q: 'Can you handle shipping and customs?', a: 'Yes. We coordinate with licensed freight forwarders for sea and air freight, handle export documentation, and track shipments to your destination port or warehouse.' },
]

export default function Home() {
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
      <section className="relative bg-brand-900 text-white overflow-hidden">
        <div
          className="absolute inset-0 opacity-20"
          data-strk-bg-id="hero-bg-main-7f3a1c"
          data-strk-bg="[hero-subtitle] [hero-title]"
          data-strk-bg-ratio="16x9"
          data-strk-bg-width="1600"
        />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-36">
          <div className="max-w-3xl">
            <span className="inline-block bg-accent-500/20 text-accent-400 text-xs font-semibold uppercase tracking-widest px-3 py-1 rounded-full mb-6">
              China-Based Sourcing Agent
            </span>
            <h1 id="hero-title" className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              China Sourcing Agent<br />
              <span className="text-accent-400">for Global Buyers</span>
            </h1>
            <p id="hero-subtitle" className="text-lg md:text-xl text-neutral-300 mb-8 leading-relaxed max-w-2xl">
              We help overseas buyers find reliable Chinese suppliers, verify factories, inspect quality, follow production, and coordinate shipping — all from one trusted partner on the ground.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <CTAButton to="/contact" size="lg" showArrow>
                Get a Free Sourcing Quote
              </CTAButton>
              <CTAButton to="/how-it-works" variant="outline" size="lg">
                See How It Works
              </CTAButton>
            </div>
            <div className="mt-10 flex flex-wrap gap-6">
              {['Verified Factories', 'On-Site Inspections', 'End-to-End Service', 'No Hidden Fees'].map((tag) => (
                <div key={tag} className="flex items-center gap-2 text-sm text-neutral-300">
                  <CheckCircle className="w-4 h-4 text-accent-400 flex-shrink-0" />
                  {tag}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Trust Stats */}
      <section className="bg-brand-700 text-white py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {trustPoints.map(({ icon: Icon, value, label }) => (
              <div key={label} className="flex flex-col items-center gap-1">
                <Icon className="w-6 h-6 text-accent-400 mb-1" />
                <span className="text-3xl font-bold text-white">{value}</span>
                <span className="text-sm text-neutral-200">{label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="Our Services"
            title="Everything You Need to Source from China"
            subtitle="From finding the right supplier to delivering goods to your door — we manage the full sourcing process so you don't have to."
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map(({ icon: Icon, title, desc, href }) => (
              <Link
                key={title}
                to={href}
                className="group bg-white border border-neutral-200 rounded-xl p-6 hover:shadow-md hover:border-brand-200 transition-all"
              >
                <div className="w-12 h-12 bg-brand-50 rounded-lg flex items-center justify-center mb-4 group-hover:bg-brand-100 transition-colors">
                  <Icon className="w-6 h-6 text-brand-700" />
                </div>
                <h3 className="text-lg font-semibold text-neutral-800 mb-2">{title}</h3>
                <p className="text-neutral-600 text-sm leading-relaxed">{desc}</p>
                <span className="inline-flex items-center gap-1 text-brand-700 text-sm font-medium mt-4 group-hover:gap-2 transition-all">
                  Learn more <ArrowRight className="w-3.5 h-3.5" />
                </span>
              </Link>
            ))}
          </div>
          <div className="text-center mt-10">
            <CTAButton to="/services" variant="outline-dark" showArrow>
              View All Services
            </CTAButton>
          </div>
        </div>
      </section>

      {/* Sourcing Process */}
      <section className="py-20 md:py-28 bg-neutral-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="Sourcing Process"
            title="How We Work With You"
            subtitle="A clear, step-by-step process designed to reduce risk and deliver results."
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {process.map(({ step, title, desc }) => (
              <div key={step} className="bg-white rounded-xl p-6 border border-neutral-200 relative">
                <span className="text-5xl font-bold text-brand-50 absolute top-4 right-5 select-none">{step}</span>
                <div className="w-10 h-10 bg-brand-700 rounded-lg flex items-center justify-center mb-4">
                  <span className="text-white font-bold text-sm">{step}</span>
                </div>
                <h3 className="text-lg font-semibold text-neutral-800 mb-2">{title}</h3>
                <p className="text-neutral-600 text-sm leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <CTAButton to="/how-it-works" variant="primary" showArrow>
              Full Process Details
            </CTAButton>
          </div>
        </div>
      </section>

      {/* Problems We Solve */}
      <section className="py-20 md:py-28 bg-brand-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="Problems We Solve"
            title="Common Challenges When Sourcing from China"
            subtitle="Importing from China comes with real risks. We help you avoid the most common and costly mistakes."
            light
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {problems.map(({ title, desc }) => (
              <div key={title} className="bg-brand-800/60 border border-brand-700 rounded-xl p-6">
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-accent-400 flex-shrink-0 mt-0.5" />
                  <div>
                    <h3 className="text-white font-semibold mb-1">{title}</h3>
                    <p className="text-neutral-300 text-sm leading-relaxed">{desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="Case Studies"
            title="Real Results for Real Buyers"
            subtitle="See how we've helped businesses across industries source smarter from China."
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {caseStudies.map((cs) => (
              <div key={cs.id} className="bg-white border border-neutral-200 rounded-xl overflow-hidden hover:shadow-md transition-shadow">
                <div className="aspect-video overflow-hidden bg-neutral-100">
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
                  <span className="inline-block bg-brand-50 text-brand-700 text-xs font-semibold px-2 py-1 rounded mb-3">
                    {cs.category}
                  </span>
                  <h3 id={cs.titleId} className="text-neutral-800 font-semibold mb-2 leading-snug">{cs.title}</h3>
                  <p id={cs.descId} className="text-neutral-600 text-sm leading-relaxed mb-4">{cs.desc}</p>
                  <div className="bg-neutral-50 rounded-lg px-4 py-3">
                    <p className="text-xs font-semibold text-neutral-500 uppercase tracking-wide mb-1">Result</p>
                    <p className="text-sm text-brand-700 font-medium">{cs.result}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <CTAButton to="/case-studies" variant="outline-dark" showArrow>
              View All Case Studies
            </CTAButton>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 md:py-28 bg-neutral-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="FAQ"
            title="Frequently Asked Questions"
            subtitle="Answers to the most common questions from buyers considering China sourcing."
          />
          <div className="space-y-4">
            {faqs.map(({ q, a }) => (
              <details key={q} className="bg-white border border-neutral-200 rounded-xl group">
                <summary className="flex items-center justify-between px-6 py-4 cursor-pointer list-none">
                  <span className="font-semibold text-neutral-800 pr-4">{q}</span>
                  <ChevronDown className="w-5 h-5 text-neutral-400 flex-shrink-0 group-open:rotate-180 transition-transform" />
                </summary>
                <div className="px-6 pb-5">
                  <p className="text-neutral-600 text-sm leading-relaxed">{a}</p>
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="py-20 bg-brand-700 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Source from China with Confidence?</h2>
          <p className="text-neutral-200 text-lg mb-8 max-w-2xl mx-auto">
            Tell us what you need. We'll respond within 24 hours with a tailored sourcing plan and free quote.
          </p>
          <CTAButton to="/contact" size="lg" showArrow>
            Get a Free Sourcing Quote
          </CTAButton>
        </div>
      </section>
    </div>
  )
}
