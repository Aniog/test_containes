import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import {
  Search, ShieldCheck, ClipboardCheck, Truck, Factory,
  CheckCircle, ArrowRight, Star, Globe, Users, Award,
  ChevronRight, Package, Zap, TrendingUp, MessageSquare
} from 'lucide-react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'

const services = [
  {
    icon: Search,
    title: 'Supplier Sourcing',
    desc: 'We identify and shortlist verified suppliers that match your product specs, MOQ, and budget — saving you weeks of research.',
    titleId: 'svc-sourcing-title',
    descId: 'svc-sourcing-desc',
    imgId: 'svc-sourcing-img-a1b2c3',
  },
  {
    icon: Factory,
    title: 'Factory Verification',
    desc: 'On-site audits confirm that factories are legitimate, capable, and compliant before you place any order.',
    titleId: 'svc-factory-title',
    descId: 'svc-factory-desc',
    imgId: 'svc-factory-img-d4e5f6',
  },
  {
    icon: ClipboardCheck,
    title: 'Quality Inspection',
    desc: 'Pre-shipment and in-line inspections catch defects early, so you receive goods that meet your standards.',
    titleId: 'svc-qc-title',
    descId: 'svc-qc-desc',
    imgId: 'svc-qc-img-g7h8i9',
  },
  {
    icon: ShieldCheck,
    title: 'Production Follow-up',
    desc: 'We monitor your order from raw materials to finished goods, keeping you informed at every stage.',
    titleId: 'svc-prod-title',
    descId: 'svc-prod-desc',
    imgId: 'svc-prod-img-j1k2l3',
  },
  {
    icon: Truck,
    title: 'Shipping Coordination',
    desc: 'We handle freight booking, customs documentation, and delivery coordination to your destination port.',
    titleId: 'svc-ship-title',
    descId: 'svc-ship-desc',
    imgId: 'svc-ship-img-m4n5o6',
  },
  {
    icon: Package,
    title: 'Private Label & OEM',
    desc: 'From product design to branded packaging, we coordinate OEM and private label production with trusted factories.',
    titleId: 'svc-oem-title',
    descId: 'svc-oem-desc',
    imgId: 'svc-oem-img-p7q8r9',
  },
]

const stats = [
  { value: '12+', label: 'Years in China Sourcing' },
  { value: '40+', label: 'Countries Served' },
  { value: '3,200+', label: 'Inspections Completed' },
  { value: '98%', label: 'Client Retention Rate' },
]

const problems = [
  { icon: ShieldCheck, text: 'Worried about scam suppliers or fake factories?' },
  { icon: ClipboardCheck, text: 'Received goods that failed quality checks?' },
  { icon: Globe, text: 'Struggling with language and communication barriers?' },
  { icon: Truck, text: 'Confused by shipping terms, customs, and logistics?' },
  { icon: TrendingUp, text: 'Paying too much because you lack local market knowledge?' },
  { icon: Users, text: 'No one on the ground to represent your interests?' },
]

const trustPoints = [
  { icon: Award, title: 'China-Based Team', desc: 'Our team is physically present in Guangzhou, Yiwu, and Shenzhen — the heart of Chinese manufacturing.' },
  { icon: ShieldCheck, title: 'Independent & Unbiased', desc: 'We work for you, not the factory. Our fees are transparent and we have no supplier commissions.' },
  { icon: Globe, title: 'Multilingual Support', desc: 'English, Chinese, and French-speaking agents ensure nothing is lost in translation.' },
  { icon: Star, title: 'Proven Track Record', desc: 'Over 12 years helping importers from the US, EU, Australia, and the Middle East source successfully.' },
]

const caseStudies = [
  {
    id: 'cs-furniture',
    country: '🇺🇸 USA',
    category: 'Furniture',
    title: 'US Retailer Cuts Sourcing Costs by 22%',
    desc: 'A mid-size US furniture retailer was overpaying their existing supplier. We identified 3 alternative factories, conducted audits, and negotiated a 22% cost reduction without compromising quality.',
    titleId: 'cs-furniture-title',
    descId: 'cs-furniture-desc',
    imgId: 'cs-furniture-img-s1t2u3',
  },
  {
    id: 'cs-electronics',
    country: '🇬🇧 UK',
    category: 'Electronics',
    title: 'UK Brand Launches Private Label Electronics',
    desc: 'We sourced a certified electronics manufacturer, managed OEM development, and coordinated CE certification — delivering the first batch in 14 weeks.',
    titleId: 'cs-electronics-title',
    descId: 'cs-electronics-desc',
    imgId: 'cs-electronics-img-v4w5x6',
  },
  {
    id: 'cs-apparel',
    country: '🇦🇺 Australia',
    category: 'Apparel',
    title: 'Australian Fashion Brand Scales Production',
    desc: 'After a failed factory relationship, we audited 6 garment factories and found a reliable partner. Pre-shipment inspections ensured consistent quality across 3 seasonal orders.',
    titleId: 'cs-apparel-title',
    descId: 'cs-apparel-desc',
    imgId: 'cs-apparel-img-y7z8a9',
  },
]

const faqs = [
  {
    q: 'How do you charge for your services?',
    a: 'We offer both project-based fees and monthly retainer options depending on your sourcing volume. All fees are disclosed upfront — we do not take commissions from suppliers.',
  },
  {
    q: 'Can you source any product from China?',
    a: 'We specialize in consumer goods, electronics, furniture, apparel, hardware, and industrial products. If you have a specific product in mind, contact us and we will confirm whether we can help.',
  },
  {
    q: 'How long does the sourcing process take?',
    a: 'A standard sourcing project (supplier identification + audit + sample) typically takes 3–6 weeks. Timelines vary based on product complexity and factory availability.',
  },
  {
    q: 'Do you work with small businesses and startups?',
    a: 'Yes. We work with buyers at all stages, from first-time importers to established brands. We will advise you honestly if a project is not yet viable at your current volume.',
  },
  {
    q: 'What happens if the goods fail inspection?',
    a: 'We document all defects with photos and reports, then work with the factory to arrange rework or replacement before shipment. You do not pay for goods that do not meet your specifications.',
  },
]

export default function Home() {
  const containerRef = useRef(null)

  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
      if (containerRef.current) {
        ImageHelper.loadImages(strkImgConfig, containerRef.current)
      }
    })
    return () => window.cancelAnimationFrame(frameId)
  }, [])

  return (
    <div ref={containerRef}>
      {/* Hero */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden bg-navy-900">
        <div
          className="absolute inset-0 opacity-30"
          data-strk-bg-id="hero-bg-main-b1c2d3"
          data-strk-bg="[hero-bg-ctx] [hero-subtitle] [hero-title]"
          data-strk-bg-ratio="16x9"
          data-strk-bg-width="1600"
        />
        <span id="hero-bg-ctx" className="sr-only">industrial factory workers manufacturing production facility</span>
        <div className="absolute inset-0 bg-gradient-to-r from-navy-900/90 via-navy-900/70 to-transparent" />
        <div className="container-xl relative z-10 py-24">
          <div className="max-w-2xl">
            <span className="inline-block bg-brand-red text-white text-xs font-semibold px-3 py-1 rounded-full uppercase tracking-wider mb-6">
              China-Based Sourcing Agent
            </span>
            <h1 id="hero-title" className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight mb-6">
              China Sourcing Agent for Global Buyers
            </h1>
            <p id="hero-subtitle" className="text-lg md:text-xl text-gray-300 leading-relaxed mb-8 max-w-xl">
              We find reliable suppliers, verify factories, inspect quality, and coordinate shipping — so you can import from China with confidence.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/contact" className="btn-accent text-center">
                Get a Free Sourcing Quote
              </Link>
              <Link to="/how-it-works" className="btn-outline border-white text-white hover:bg-white hover:text-navy-800 text-center">
                How It Works
              </Link>
            </div>
            <div className="flex flex-wrap gap-6 mt-10">
              {stats.map((s) => (
                <div key={s.label} className="text-center">
                  <div className="text-2xl font-extrabold text-white">{s.value}</div>
                  <div className="text-xs text-gray-400 mt-0.5">{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-20 bg-white">
        <div className="container-xl">
          <div className="text-center mb-14">
            <span className="section-badge mb-3">Our Services</span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-3 mb-4">
              End-to-End Sourcing Support
            </h2>
            <p className="text-gray-500 text-lg max-w-2xl mx-auto">
              From finding the right supplier to delivering goods to your warehouse, we manage every step of the China sourcing process.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((svc) => {
              const Icon = svc.icon
              return (
                <div key={svc.title} className="card group">
                  <div className="w-12 h-12 bg-navy-800/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-navy-800 transition-colors duration-200">
                    <Icon className="w-6 h-6 text-navy-800 group-hover:text-white transition-colors duration-200" />
                  </div>
                  <h3 id={svc.titleId} className="text-lg font-semibold text-gray-900 mb-2">{svc.title}</h3>
                  <p id={svc.descId} className="text-gray-500 text-sm leading-relaxed">{svc.desc}</p>
                </div>
              )
            })}
          </div>
          <div className="text-center mt-10">
            <Link to="/services" className="btn-outline">
              View All Services <ArrowRight className="inline w-4 h-4 ml-1" />
            </Link>
          </div>
        </div>
      </section>

      {/* Problems We Solve */}
      <section className="py-20 bg-gray-50">
        <div className="container-xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="section-badge mb-3">Why Buyers Choose Us</span>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-3 mb-4">
                Sourcing from China Is Complex. We Make It Simple.
              </h2>
              <p className="text-gray-500 text-lg mb-8">
                Most importers face the same challenges. Our team is on the ground in China to solve them for you.
              </p>
              <div className="flex flex-col gap-4">
                {problems.map((p) => {
                  const Icon = p.icon
                  return (
                    <div key={p.text} className="flex items-start gap-3">
                      <div className="w-8 h-8 bg-brand-red/10 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                        <Icon className="w-4 h-4 text-brand-red" />
                      </div>
                      <p className="text-gray-700 font-medium">{p.text}</p>
                    </div>
                  )
                })}
              </div>
              <div className="mt-8">
                <Link to="/contact" className="btn-primary">
                  Talk to a Sourcing Expert
                </Link>
              </div>
            </div>
            <div className="relative rounded-2xl overflow-hidden aspect-[4/3] shadow-xl">
              <img
                alt="China factory floor with quality control"
                className="w-full h-full object-cover"
                data-strk-img-id="problems-factory-img-e1f2g3"
                data-strk-img="[problems-section-title] factory quality control inspection China"
                data-strk-img-ratio="4x3"
                data-strk-img-width="800"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              />
              <span id="problems-section-title" className="sr-only">China factory quality control inspection</span>
            </div>
          </div>
        </div>
      </section>

      {/* Sourcing Process */}
      <section className="py-20 bg-white">
        <div className="container-xl">
          <div className="text-center mb-14">
            <span className="section-badge mb-3">Our Process</span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-3 mb-4">
              How We Source for You
            </h2>
            <p className="text-gray-500 text-lg max-w-xl mx-auto">
              A structured, transparent process from your first inquiry to goods arriving at your door.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { step: '01', title: 'Submit Your Requirements', desc: 'Tell us what you need — product specs, target price, quantity, and timeline.' },
              { step: '02', title: 'Supplier Research & Audit', desc: 'We identify candidates, verify credentials, and conduct factory audits on your behalf.' },
              { step: '03', title: 'Sample & Negotiation', desc: 'We request samples, review quality, and negotiate pricing and terms with shortlisted suppliers.' },
              { step: '04', title: 'Production & Delivery', desc: 'We monitor production, conduct pre-shipment inspection, and coordinate freight to your destination.' },
            ].map((step) => (
              <div key={step.step} className="relative">
                <div className="text-5xl font-extrabold text-navy-800/10 mb-3">{step.step}</div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{step.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link to="/how-it-works" className="btn-outline">
              See Full Process <ArrowRight className="inline w-4 h-4 ml-1" />
            </Link>
          </div>
        </div>
      </section>

      {/* Trust Points */}
      <section className="py-20 bg-navy-900">
        <div className="container-xl">
          <div className="text-center mb-14">
            <span className="inline-block bg-white/10 text-white text-sm font-semibold px-3 py-1 rounded-full uppercase tracking-wide mb-3">
              Why SSourcing China
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-white mt-3 mb-4">
              Your Interests Come First
            </h2>
            <p className="text-gray-400 text-lg max-w-xl mx-auto">
              We are an independent agent. We work for you — not for the factories.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {trustPoints.map((tp) => {
              const Icon = tp.icon
              return (
                <div key={tp.title} className="bg-white/5 border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-colors">
                  <Icon className="w-8 h-8 text-brand-red mb-4" />
                  <h3 className="text-white font-semibold text-lg mb-2">{tp.title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">{tp.desc}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-20 bg-white">
        <div className="container-xl">
          <div className="text-center mb-14">
            <span className="section-badge mb-3">Case Studies</span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-3 mb-4">
              Real Results for Real Buyers
            </h2>
            <p className="text-gray-500 text-lg max-w-xl mx-auto">
              A selection of sourcing projects we have completed for clients across different industries.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {caseStudies.map((cs) => (
              <div key={cs.id} className="card overflow-hidden p-0 group">
                <div className="aspect-[16/9] overflow-hidden">
                  <img
                    alt={cs.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    data-strk-img-id={cs.imgId}
                    data-strk-img={`[${cs.descId}] [${cs.titleId}]`}
                    data-strk-img-ratio="16x9"
                    data-strk-img-width="600"
                    src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAAC0lEQVQI12NgAAIABQAABjE+ibYAAAAASUVORK5CYII="
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-xs font-semibold text-brand-red bg-brand-red/10 px-2 py-0.5 rounded-full">{cs.category}</span>
                    <span className="text-xs text-gray-400">{cs.country}</span>
                  </div>
                  <h3 id={cs.titleId} className="font-semibold text-gray-900 mb-2">{cs.title}</h3>
                  <p id={cs.descId} className="text-gray-500 text-sm leading-relaxed">{cs.desc}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link to="/case-studies" className="btn-outline">
              View All Case Studies <ArrowRight className="inline w-4 h-4 ml-1" />
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-gray-50">
        <div className="container-xl">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-14">
              <span className="section-badge mb-3">FAQ</span>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-3 mb-4">
                Frequently Asked Questions
              </h2>
            </div>
            <div className="flex flex-col gap-4">
              {faqs.map((faq, i) => (
                <div key={i} className="card">
                  <h3 className="font-semibold text-gray-900 mb-2 flex items-start gap-2">
                    <MessageSquare className="w-5 h-5 text-navy-800 flex-shrink-0 mt-0.5" />
                    {faq.q}
                  </h3>
                  <p className="text-gray-500 text-sm leading-relaxed pl-7">{faq.a}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="py-20 bg-brand-red">
        <div className="container-xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Source from China?
          </h2>
          <p className="text-red-100 text-lg mb-8 max-w-xl mx-auto">
            Tell us what you need and we will send you a free sourcing plan within 24 hours.
          </p>
          <Link
            to="/contact"
            className="inline-block bg-white text-brand-red hover:bg-gray-100 font-bold px-10 py-4 rounded-lg text-lg transition-colors duration-200"
          >
            Get a Free Sourcing Quote
          </Link>
        </div>
      </section>
    </div>
  )
}
