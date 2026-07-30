import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import {
  Search, ShieldCheck, ClipboardCheck, Truck, Factory, Star,
  ArrowRight, CheckCircle, Globe, Users, Package, TrendingUp,
  ChevronDown, Award, Clock, MessageSquare
} from 'lucide-react'
import CTAButton from '@/components/CTAButton'

const services = [
  {
    icon: Search,
    title: 'Supplier Sourcing',
    desc: 'We identify and shortlist verified Chinese manufacturers that match your product specs, MOQ, and budget requirements.',
    href: '/services',
  },
  {
    icon: Factory,
    title: 'Factory Verification',
    desc: 'On-site factory audits covering production capacity, certifications, workforce, and compliance standards.',
    href: '/services',
  },
  {
    icon: ClipboardCheck,
    title: 'Quality Inspection',
    desc: 'Pre-shipment, during-production, and container loading inspections with detailed photo and video reports.',
    href: '/services',
  },
  {
    icon: Clock,
    title: 'Production Follow-up',
    desc: 'Regular updates on your order status, timeline adherence, and early alerts on any production issues.',
    href: '/services',
  },
  {
    icon: Truck,
    title: 'Shipping Coordination',
    desc: 'We coordinate with freight forwarders, handle export documentation, and track your shipment to destination.',
    href: '/services',
  },
  {
    icon: Award,
    title: 'Private Label / OEM',
    desc: 'Support for custom branding, packaging design, and OEM production with Chinese manufacturers.',
    href: '/services',
  },
]

const steps = [
  { num: '01', title: 'Submit Your Inquiry', desc: 'Tell us what you need — product specs, quantity, target price, and timeline.' },
  { num: '02', title: 'Supplier Matching', desc: 'We identify and vet 3–5 qualified suppliers from our verified network.' },
  { num: '03', title: 'Quotation & Samples', desc: 'You receive competitive quotes and can request product samples before committing.' },
  { num: '04', title: 'Order & Production', desc: 'We place the order, follow production progress, and keep you updated.' },
  { num: '05', title: 'Inspection & QC', desc: 'Our inspectors verify quality on-site before goods leave the factory.' },
  { num: '06', title: 'Shipping & Delivery', desc: 'We coordinate logistics and ensure your goods arrive on time and in full.' },
]

const problems = [
  { title: 'Unreliable suppliers', desc: 'We pre-screen and audit factories so you only work with verified, capable manufacturers.' },
  { title: 'Quality issues on arrival', desc: 'Our inspection team catches defects before shipment — not after you receive the goods.' },
  { title: 'Communication barriers', desc: 'We bridge the language and cultural gap, acting as your local representative in China.' },
  { title: 'Delayed shipments', desc: 'We monitor production timelines and coordinate logistics to keep your supply chain on schedule.' },
  { title: 'Overpaying for products', desc: 'Our local market knowledge and supplier relationships help you negotiate competitive prices.' },
  { title: 'Lack of visibility', desc: 'You receive regular updates, photos, and reports at every stage of your order.' },
]

const trustPoints = [
  { value: '500+', label: 'Verified Suppliers', icon: Factory },
  { value: '12+', label: 'Years in China Sourcing', icon: Award },
  { value: '40+', label: 'Countries Served', icon: Globe },
  { value: '98%', label: 'Client Satisfaction Rate', icon: Star },
]

const caseStudies = [
  {
    id: 'cs-furniture',
    titleId: 'cs-furniture-title',
    descId: 'cs-furniture-desc',
    imgId: 'cs-img-furniture-a1b2c3',
    title: 'Furniture Importer — USA',
    category: 'Furniture & Home Decor',
    result: 'Reduced sourcing cost by 22% and cut lead time by 3 weeks.',
    desc: 'Solid wood furniture factory audit and quality inspection for US importer',
  },
  {
    id: 'cs-electronics',
    titleId: 'cs-electronics-title',
    descId: 'cs-electronics-desc',
    imgId: 'cs-img-electronics-d4e5f6',
    title: 'Electronics Brand — Germany',
    category: 'Electronics & Components',
    result: 'Found 3 compliant CE-certified factories within 2 weeks.',
    desc: 'Electronic components supplier verification and CE certification audit in Shenzhen',
  },
  {
    id: 'cs-textiles',
    titleId: 'cs-textiles-title',
    descId: 'cs-textiles-desc',
    imgId: 'cs-img-textiles-g7h8i9',
    title: 'Fashion Brand — France',
    category: 'Clothing & Textiles',
    result: 'Launched private label line with 2 OEM factories in 60 days.',
    desc: 'Private label clothing OEM factory sourcing and production follow-up in Guangzhou',
  },
]

const faqs = [
  {
    q: 'How much does your sourcing service cost?',
    a: 'Our fees depend on the scope of work. We offer a free initial consultation and sourcing quote. Service fees are typically a percentage of the order value or a fixed project fee — we will outline this clearly before you commit.',
  },
  {
    q: 'Do you work with small businesses and startups?',
    a: 'Yes. We work with buyers of all sizes, from startups placing their first order to established importers managing multiple product lines. We tailor our service to your volume and budget.',
  },
  {
    q: 'How do you verify factories?',
    a: 'Our team conducts on-site factory audits covering production capacity, equipment, workforce, quality management systems, certifications, and compliance. We provide a written audit report with photos.',
  },
  {
    q: 'What products can you source?',
    a: 'We source a wide range of products including electronics, furniture, clothing, machinery, toys, health products, sports goods, packaging, and more. If it is manufactured in China, we can likely help.',
  },
  {
    q: 'How long does the sourcing process take?',
    a: 'Supplier identification typically takes 5–10 business days. Factory audits take 1–3 days per factory. The full process from inquiry to first shipment varies by product complexity, but we aim to move efficiently at every stage.',
  },
  {
    q: 'Can you handle shipping and customs documentation?',
    a: 'Yes. We coordinate with freight forwarders, prepare export documentation, and track shipments. We work with both sea freight and air freight depending on your timeline and budget.',
  },
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
      <section className="relative bg-blue-950 text-white overflow-hidden">
        <div
          className="absolute inset-0 opacity-20"
          data-strk-bg-id="hero-bg-main-7f3a2b"
          data-strk-bg="[hero-subtitle] [hero-title]"
          data-strk-bg-ratio="16x9"
          data-strk-bg-width="1600"
        />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-36">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-blue-900 text-blue-300 text-sm font-medium px-3 py-1.5 rounded-full mb-6">
              <Globe className="w-3.5 h-3.5" />
              <span>Trusted by buyers in 40+ countries</span>
            </div>
            <h1 id="hero-title" className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              China Sourcing Agent<br />
              <span className="text-blue-300">for Global Buyers</span>
            </h1>
            <p id="hero-subtitle" className="text-lg md:text-xl text-neutral-300 leading-relaxed mb-8 max-w-2xl">
              We help overseas businesses find reliable Chinese suppliers, verify factories, inspect quality, follow production, and coordinate shipping — so you can import with confidence.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <CTAButton size="lg" showArrow>Get a Free Sourcing Quote</CTAButton>
              <CTAButton to="/how-it-works" variant="ghost" size="lg">See How It Works</CTAButton>
            </div>
            <div className="mt-10 flex flex-wrap gap-6 text-sm text-neutral-400">
              {['No upfront commitment', 'On-site factory audits', 'English-speaking team', 'Transparent reporting'].map((item) => (
                <div key={item} className="flex items-center gap-1.5">
                  <CheckCircle className="w-4 h-4 text-blue-400" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Trust bar */}
      <section className="bg-blue-900 text-white py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {trustPoints.map(({ value, label, icon: Icon }) => (
              <div key={label}>
                <div className="text-3xl font-bold text-white mb-1">{value}</div>
                <div className="text-blue-300 text-sm font-medium">{label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="text-blue-700 font-semibold text-sm uppercase tracking-wider mb-3">What We Do</p>
            <h2 className="text-3xl md:text-4xl font-bold text-neutral-800 mb-4">End-to-End Sourcing Services</h2>
            <p className="text-neutral-600 text-lg max-w-2xl mx-auto">
              From finding the right supplier to delivering goods to your door, we manage every step of the China sourcing process.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map(({ icon: Icon, title, desc, href }) => (
              <Link
                key={title}
                to={href}
                className="group bg-white rounded-xl border border-neutral-200 p-6 hover:shadow-md hover:border-blue-200 transition-all"
              >
                <div className="w-11 h-11 bg-blue-50 rounded-lg flex items-center justify-center mb-4 group-hover:bg-blue-100 transition-colors">
                  <Icon className="w-5 h-5 text-blue-700" />
                </div>
                <h3 className="text-neutral-800 font-semibold text-lg mb-2">{title}</h3>
                <p className="text-neutral-600 text-sm leading-relaxed">{desc}</p>
                <div className="mt-4 flex items-center gap-1 text-blue-700 text-sm font-medium">
                  Learn more <ArrowRight className="w-3.5 h-3.5" />
                </div>
              </Link>
            ))}
          </div>
          <div className="text-center mt-10">
            <CTAButton to="/services" variant="secondary" showArrow>View All Services</CTAButton>
          </div>
        </div>
      </section>

      {/* Problems We Solve */}
      <section className="py-20 md:py-28 bg-neutral-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="text-blue-700 font-semibold text-sm uppercase tracking-wider mb-3">Common Challenges</p>
            <h2 className="text-3xl md:text-4xl font-bold text-neutral-800 mb-4">Problems We Help You Avoid</h2>
            <p className="text-neutral-600 text-lg max-w-2xl mx-auto">
              Importing from China comes with real risks. Here is how we help you navigate them.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {problems.map(({ title, desc }) => (
              <div key={title} className="bg-white rounded-xl border border-neutral-200 p-6">
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-blue-500 flex-shrink-0 mt-0.5" />
                  <div>
                    <h3 className="text-neutral-800 font-semibold mb-1">{title}</h3>
                    <p className="text-neutral-600 text-sm leading-relaxed">{desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sourcing Process */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="text-blue-700 font-semibold text-sm uppercase tracking-wider mb-3">Our Process</p>
            <h2 className="text-3xl md:text-4xl font-bold text-neutral-800 mb-4">How We Work With You</h2>
            <p className="text-neutral-600 text-lg max-w-2xl mx-auto">
              A structured, transparent process from your first inquiry to final delivery.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {steps.map(({ num, title, desc }) => (
              <div key={num} className="relative bg-neutral-50 rounded-xl p-6 border border-neutral-200">
                <div className="text-4xl font-bold text-blue-100 mb-3">{num}</div>
                <h3 className="text-neutral-800 font-semibold text-lg mb-2">{title}</h3>
                <p className="text-neutral-600 text-sm leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <CTAButton to="/how-it-works" variant="secondary" showArrow>Full Process Details</CTAButton>
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-20 md:py-28 bg-blue-950 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="text-blue-300 font-semibold text-sm uppercase tracking-wider mb-3">Client Results</p>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Case Studies</h2>
            <p className="text-neutral-300 text-lg max-w-2xl mx-auto">
              Real outcomes from buyers who trusted us to manage their China sourcing.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {caseStudies.map((cs) => (
              <div key={cs.id} className="bg-blue-900 rounded-xl overflow-hidden border border-blue-800">
                <img
                  alt={cs.title}
                  data-strk-img-id={cs.imgId}
                  data-strk-img={`[${cs.descId}] [${cs.titleId}]`}
                  data-strk-img-ratio="16x9"
                  data-strk-img-width="600"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  className="w-full h-44 object-cover"
                />
                <div className="p-6">
                  <span className="text-xs font-medium text-blue-300 bg-blue-800 px-2 py-1 rounded-full">{cs.category}</span>
                  <h3 id={cs.titleId} className="text-white font-semibold text-lg mt-3 mb-2">{cs.title}</h3>
                  <p id={cs.descId} className="text-neutral-400 text-sm mb-3">{cs.desc}</p>
                  <div className="flex items-start gap-2 bg-blue-950 rounded-lg p-3">
                    <TrendingUp className="w-4 h-4 text-amber-500 flex-shrink-0 mt-0.5" />
                    <p className="text-amber-500 text-sm font-medium">{cs.result}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <CTAButton to="/case-studies" variant="ghost" showArrow>View All Case Studies</CTAButton>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="text-blue-700 font-semibold text-sm uppercase tracking-wider mb-3">FAQ</p>
            <h2 className="text-3xl md:text-4xl font-bold text-neutral-800 mb-4">Frequently Asked Questions</h2>
          </div>
          <div className="space-y-4">
            {faqs.map(({ q, a }) => (
              <details key={q} className="group bg-neutral-50 rounded-xl border border-neutral-200 overflow-hidden">
                <summary className="flex items-center justify-between p-5 cursor-pointer list-none">
                  <span className="font-semibold text-neutral-800 pr-4">{q}</span>
                  <ChevronDown className="w-5 h-5 text-neutral-500 flex-shrink-0 group-open:rotate-180 transition-transform" />
                </summary>
                <div className="px-5 pb-5 text-neutral-600 text-sm leading-relaxed border-t border-neutral-200 pt-4">
                  {a}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="py-20 bg-blue-800 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Source from China?</h2>
          <p className="text-blue-200 text-lg mb-8 max-w-2xl mx-auto">
            Tell us what you need and we will get back to you within one business day with a tailored sourcing plan.
          </p>
          <CTAButton size="lg" showArrow>Get a Free Sourcing Quote</CTAButton>
        </div>
      </section>
    </div>
  )
}
