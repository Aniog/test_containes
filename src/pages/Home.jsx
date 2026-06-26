import { useState, useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import {
  ArrowRight,
  Shield,
  Search,
  ClipboardCheck,
  Truck,
  Factory,
  Eye,
  Users,
  Award,
  TrendingUp,
  Clock,
  Globe,
  Star,
  ChevronRight,
  CheckCircle,
  XCircle,
  AlertTriangle,
  Phone,
  Mail,
  MapPin,
  Send,
} from 'lucide-react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'

const servicesData = [
  {
    id: 'supplier-sourcing',
    icon: Search,
    title: 'Supplier Sourcing & Vetting',
    desc: 'We identify and pre-qualify manufacturers that match your product specifications, volume requirements, and quality standards. No more guessing who to trust.',
    imgId: 'service-sourcing-a1b2c3',
  },
  {
    id: 'factory-audit',
    icon: Factory,
    title: 'Factory Audit & Verification',
    desc: 'On-site factory audits including production capacity assessment, certifications verification, and financial health checks before you commit to any supplier.',
    imgId: 'service-audit-d4e5f6',
  },
  {
    id: 'quality-control',
    icon: ClipboardCheck,
    title: 'Quality Control Inspections',
    desc: 'AQL-based inspections at every stage — from initial samples through final random inspection before shipment. Detailed reports with photos and data.',
    imgId: 'service-qc-g7h8i9',
  },
  {
    id: 'production-monitoring',
    icon: Eye,
    title: 'Production Monitoring',
    desc: 'Regular factory visits during production to track progress, identify issues early, and ensure your order stays on schedule and meets specifications.',
    imgId: 'service-monitor-j0k1l2',
  },
  {
    id: 'shipping-logistics',
    icon: Truck,
    title: 'Shipping & Logistics',
    desc: 'Complete shipment coordination including freight forwarding, customs documentation, and consolidated shipping to reduce your landed costs.',
    imgId: 'service-shipping-m3n4o5',
  },
  {
    id: 'product-development',
    icon: TrendingUp,
    title: 'Product Development Support',
    desc: 'From design refinement to prototyping, packaging design, and compliance testing — we support your product journey from concept to delivery.',
    imgId: 'service-dev-p6q7r8',
  },
]

const problemsData = [
  {
    icon: XCircle,
    title: 'Unverified Suppliers',
    desc: 'Thousands of "manufacturers" online are actually trading companies with no factory — adding middlemen costs and quality risks.',
  },
  {
    icon: AlertTriangle,
    title: 'Quality Inconsistency',
    desc: 'Without on-site QC, you receive products that don\'t match your approved samples, leading to returns and reputation damage.',
  },
  {
    icon: Clock,
    title: 'Production Delays',
    desc: 'Factories over-promise and under-deliver. Without local follow-up, delays compound and you miss your market windows.',
  },
  {
    icon: Globe,
    title: 'Communication Barriers',
    desc: 'Language gaps and cultural differences lead to misunderstandings on specs, materials, and timelines — costing time and money.',
  },
]

const trustPoints = [
  { number: '13+', label: 'Years in China Sourcing' },
  { number: '500+', label: 'Verified Suppliers' },
  { number: '2,000+', label: 'QC Inspections Completed' },
  { number: '60+', label: 'Countries Served' },
]

const caseStudiesPreview = [
  {
    id: 'case-1',
    title: 'Electronics Manufacturer Saves 23% on Unit Cost',
    subtitle: 'Consumer Electronics | USA Buyer',
    desc: 'A US-based electronics brand needed a reliable PCB assembly partner. We audited 12 factories, negotiated pricing, and implemented QC protocols that reduced defect rates to under 0.5%.',
    imgId: 'case-electronics-s1t2u3',
  },
  {
    id: 'case-2',
    title: 'Furniture Brand Scales from 1 to 15 Container/Month',
    subtitle: 'Home Furniture | UK Buyer',
    desc: 'A fast-growing furniture brand needed production capacity to scale. We identified two qualified factories, managed parallel production, and coordinated consolidated shipping.',
    imgId: 'case-furniture-v4w5x6',
  },
  {
    id: 'case-3',
    title: 'Apparel Startup Launches First Collection On-Time',
    subtitle: 'Fashion Apparel | Australian Buyer',
    desc: 'A first-time apparel entrepreneur needed end-to-end support. We sourced fabrics, vetted garment factories, supervised sampling, and ensured on-time delivery for the launch.',
    imgId: 'case-apparel-y7z8a9',
  },
]

const faqItems = [
  {
    q: 'What products can SSourcing China help me source?',
    a: 'We source across 20+ product categories including electronics, apparel, furniture, hardware, plastics, packaging, machinery, automotive parts, home goods, and more. If it\'s manufactured in China, we can help you find the right supplier.',
  },
  {
    q: 'How do you ensure supplier reliability?',
    a: 'Every supplier undergoes our 5-step verification: business license check, factory site audit, production capacity assessment, certification verification, and financial health review. We also maintain ongoing performance monitoring.',
  },
  {
    q: 'What are your fees?',
    a: 'Our pricing is transparent and project-based. We typically charge either a fixed project fee or a percentage of order value (3-8%), depending on project complexity and volume. Contact us for a detailed quote tailored to your needs.',
  },
  {
    q: 'How long does the sourcing process take?',
    a: 'Initial supplier identification usually takes 1-2 weeks. Factory audits and sampling add another 2-4 weeks. Full production timelines depend on your product and order volume. A typical project runs 6-12 weeks from start to shipment.',
  },
  {
    q: 'Do you handle shipping and customs?',
    a: 'Yes. We coordinate the entire logistics chain — from factory to your doorstep. This includes freight forwarding (sea/air), customs documentation, and consolidated shipping options to minimize your costs.',
  },
  {
    q: 'Can I visit the factories myself?',
    a: 'Absolutely. We encourage clients to visit. We arrange factory tours, provide translators, and prepare detailed briefing documents so your visit is productive and informative.',
  },
]

export default function Home() {
  const containerRef = useRef(null)
  const [openFaq, setOpenFaq] = useState(null)
  const [formValues, setFormValues] = useState({
    name: '',
    email: '',
    phone: '',
    product: '',
    message: '',
  })
  const [formStatus, setFormStatus] = useState('idle')
  const [formError, setFormError] = useState(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  const handleFormChange = (e) => {
    const { name, value } = e.target
    setFormValues((v) => ({ ...v, [name]: value }))
  }

  const handleFormSubmit = (e) => {
    e.preventDefault()
    setFormError(null)
    if (!formValues.name.trim()) {
      setFormError('Please enter your name.')
      return
    }
    if (!formValues.email.trim() || !/^\S+@\S+\.\S+$/.test(formValues.email)) {
      setFormError('Please enter a valid email address.')
      return
    }
    if (!formValues.product.trim()) {
      setFormError('Please describe the product you want to source.')
      return
    }
    setFormStatus('submitting')
    // Simulate submission — in production, connect to backend
    setTimeout(() => {
      setFormStatus('success')
      setFormValues({ name: '', email: '', phone: '', product: '', message: '' })
    }, 1500)
  }

  return (
    <div ref={containerRef}>
      {/* ======== HERO ======== */}
      <section className="relative bg-navy overflow-hidden">
        <div className="absolute inset-0 opacity-25">
          <img
            alt="China factory quality inspection"
            data-strk-img-id="hero-bg-a1b2c3d4"
            data-strk-img="[hero-headline]"
            data-strk-img-ratio="16x9"
            data-strk-img-width="1600"
            src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-navy/90 to-navy/70" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32 lg:py-40">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 rounded-full px-4 py-1.5 text-white/90 text-sm mb-6">
              <Star size={14} className="text-accent-gold fill-accent-gold" />
              Trusted by 500+ global buyers since 2012
            </div>
            <h1
              id="hero-headline"
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6"
            >
              China Sourcing Agent{' '}
              <span className="text-accent-gold">for Global Buyers</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-300 leading-relaxed mb-8 max-w-2xl">
              We find, verify, and manage reliable Chinese suppliers so you get
              quality products at competitive prices — without the risk, hassle,
              or communication barriers.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 bg-accent-red hover:bg-red-700 text-white font-semibold rounded-lg px-8 py-4 text-base transition-colors shadow-lg shadow-red-700/25"
              >
                Get a Free Sourcing Quote <ArrowRight size={18} />
              </Link>
              <Link
                to="/how-it-works"
                className="inline-flex items-center justify-center gap-2 border-2 border-white/30 hover:border-white/60 text-white font-semibold rounded-lg px-8 py-4 text-base transition-colors"
              >
                How It Works <ChevronRight size={18} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ======== TRUST BAR ======== */}
      <section className="bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {trustPoints.map((tp) => (
              <div key={tp.label}>
                <div className="text-3xl md:text-4xl font-bold text-navy mb-1">
                  {tp.number}
                </div>
                <div className="text-sm text-gray-500">{tp.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ======== PROBLEMS WE SOLVE ======== */}
      <section className="bg-gray-50 py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="text-accent-red font-semibold text-sm tracking-wide uppercase mb-2">
              The Challenge
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Sourcing from China Doesn&apos;t Have to Be Risky
            </h2>
            <p className="text-gray-500 max-w-2xl mx-auto text-lg">
              Without local expertise, these are the problems that cost buyers
              time, money, and reputation.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {problemsData.map((p) => (
              <div
                key={p.title}
                className="bg-white rounded-xl p-6 border border-gray-100 shadow-sm"
              >
                <p.icon className="w-8 h-8 text-accent-red mb-4" />
                <h3 className="font-semibold text-gray-900 mb-2">{p.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">
                  {p.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ======== SERVICES OVERVIEW ======== */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="text-accent-red font-semibold text-sm tracking-wide uppercase mb-2">
              Our Services
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              End-to-End Sourcing Solutions
            </h2>
            <p className="text-gray-500 max-w-2xl mx-auto text-lg">
              From supplier discovery to final delivery — we manage every step
              so you can focus on growing your business.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {servicesData.map((s) => (
              <div
                key={s.id}
                className="group bg-gray-50 hover:bg-white rounded-xl p-6 md:p-8 border border-gray-100 hover:border-gray-200 hover:shadow-md transition-all"
              >
                <div className="w-12 h-12 bg-navy/10 rounded-lg flex items-center justify-center mb-5">
                  <s.icon className="w-6 h-6 text-navy" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2 text-lg">
                  {s.title}
                </h3>
                <p className="text-sm text-gray-500 leading-relaxed mb-4">
                  {s.desc}
                </p>
                <Link
                  to="/services"
                  className="inline-flex items-center gap-1 text-accent-red font-medium text-sm hover:underline"
                >
                  Learn more <ChevronRight size={14} />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ======== HOW IT WORKS — QUICK ======== */}
      <section className="bg-navy py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="text-accent-gold font-semibold text-sm tracking-wide uppercase mb-2">
              The Process
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              How We Work With You
            </h2>
            <p className="text-gray-300 max-w-2xl mx-auto text-lg">
              A proven 4-step framework that has delivered results for hundreds
              of global buyers.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                step: '01',
                title: 'Define Requirements',
                desc: 'Share your product specs, target price, volume, and quality expectations. We build a detailed sourcing brief.',
              },
              {
                step: '02',
                title: 'Find & Verify Suppliers',
                desc: 'We search our network, audit factories on-site, verify certifications, and shortlist the best matches.',
              },
              {
                step: '03',
                title: 'Sample & Negotiate',
                desc: 'We manage sampling, negotiate pricing and terms, and ensure the contract protects your interests.',
              },
              {
                step: '04',
                title: 'Produce & Deliver',
                desc: 'We monitor production, conduct QC inspections, and coordinate shipping to your destination.',
              },
            ].map((item) => (
              <div key={item.step} className="text-center">
                <div className="w-14 h-14 rounded-full bg-accent-gold/20 border-2 border-accent-gold flex items-center justify-center mx-auto mb-4">
                  <span className="text-accent-gold font-bold text-lg">
                    {item.step}
                  </span>
                </div>
                <h3 className="text-white font-semibold text-lg mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link
              to="/how-it-works"
              className="inline-flex items-center gap-2 text-accent-gold hover:text-white font-medium transition-colors"
            >
              View detailed process <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* ======== PRODUCTS WE SOURCE ======== */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="text-accent-red font-semibold text-sm tracking-wide uppercase mb-2">
              Industries
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Products We Source
            </h2>
            <p className="text-gray-500 max-w-2xl mx-auto text-lg">
              Deep expertise across 20+ product categories — from consumer
              electronics to industrial machinery.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {[
              { icon: '🔌', label: 'Electronics & PCBs' },
              { icon: '👕', label: 'Apparel & Textiles' },
              { icon: '🪑', label: 'Furniture & Home' },
              { icon: '🔧', label: 'Hardware & Tools' },
              { icon: '📦', label: 'Packaging & Print' },
              { icon: '🚗', label: 'Automotive Parts' },
              { icon: '💡', label: 'Lighting & LED' },
              { icon: '🧸', label: 'Toys & Gifts' },
              { icon: '🏗️', label: 'Building Materials' },
              { icon: '⚙️', label: 'Industrial Machinery' },
            ].map((cat) => (
              <Link
                key={cat.label}
                to="/products"
                className="flex flex-col items-center gap-3 p-5 rounded-xl border border-gray-100 hover:border-navy/20 hover:shadow-md transition-all bg-gray-50 hover:bg-white"
              >
                <span className="text-2xl">{cat.icon}</span>
                <span className="text-sm font-medium text-gray-700 text-center">
                  {cat.label}
                </span>
              </Link>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link
              to="/products"
              className="inline-flex items-center gap-2 text-accent-red font-medium hover:underline"
            >
              View all product categories <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* ======== TRUST POINTS ======== */}
      <section className="bg-gray-50 py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="text-accent-red font-semibold text-sm tracking-wide uppercase mb-2">
              Why SSourcing China
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              What Sets Us Apart
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: Shield,
                title: 'Verified Supplier Network',
                desc: 'Every supplier in our network has passed a rigorous 5-step audit including factory site visit, business license verification, and production capacity assessment.',
              },
              {
                icon: MapPin,
                title: 'On-the-Ground Team in China',
                desc: 'Our bilingual sourcing specialists and QC inspectors are based in major manufacturing hubs including Shenzhen, Guangzhou, Yiwu, and Ningbo.',
              },
              {
                icon: Users,
                title: 'Dedicated Project Manager',
                desc: 'You get a single point of contact who speaks your language and manages your entire project — from sourcing brief to final delivery.',
              },
              {
                icon: ClipboardCheck,
                title: 'AQL-Based QC Standards',
                desc: 'We follow internationally recognized AQL (Acceptable Quality Level) sampling standards with detailed photographic inspection reports.',
              },
              {
                icon: Award,
                title: 'Transparent Pricing',
                desc: 'No hidden fees. Our pricing model is clearly defined upfront — either a fixed project fee or a transparent percentage of order value.',
              },
              {
                icon: Globe,
                title: 'Global Logistics Expertise',
                desc: 'We coordinate sea freight, air freight, and express shipping worldwide with competitive rates through our logistics partners.',
              },
            ].map((tp) => (
              <div
                key={tp.title}
                className="bg-white rounded-xl p-6 md:p-8 border border-gray-100 shadow-sm"
              >
                <div className="w-12 h-12 bg-accent-gold/10 rounded-lg flex items-center justify-center mb-4">
                  <tp.icon className="w-6 h-6 text-accent-gold" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">
                  {tp.title}
                </h3>
                <p className="text-sm text-gray-500 leading-relaxed">
                  {tp.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ======== CASE STUDIES PREVIEW ======== */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="text-accent-red font-semibold text-sm tracking-wide uppercase mb-2">
              Success Stories
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Real Results for Real Buyers
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {caseStudiesPreview.map((cs) => (
              <div
                key={cs.id}
                className="rounded-xl border border-gray-100 overflow-hidden shadow-sm hover:shadow-md transition-all"
              >
                <div className="aspect-[3/2] bg-gray-100 overflow-hidden">
                  <img
                    alt={cs.title}
                    data-strk-img-id={cs.imgId}
                    data-strk-img={`[case-${cs.id}-desc] [case-${cs.id}-title]`}
                    data-strk-img-ratio="3x2"
                    data-strk-img-width="600"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <p className="text-xs text-accent-red font-semibold mb-2">
                    {cs.subtitle}
                  </p>
                  <h3
                    id={`case-${cs.id}-title`}
                    className="font-semibold text-gray-900 mb-2"
                  >
                    {cs.title}
                  </h3>
                  <p
                    id={`case-${cs.id}-desc`}
                    className="text-sm text-gray-500 leading-relaxed"
                  >
                    {cs.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link
              to="/case-studies"
              className="inline-flex items-center gap-2 text-accent-red font-medium hover:underline"
            >
              View all case studies <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* ======== FAQ ======== */}
      <section className="bg-gray-50 py-16 md:py-24">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="text-accent-red font-semibold text-sm tracking-wide uppercase mb-2">
              FAQ
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Frequently Asked Questions
            </h2>
          </div>
          <div className="space-y-3">
            {faqItems.map((faq, i) => (
              <div
                key={i}
                className="bg-white rounded-xl border border-gray-100 overflow-hidden"
              >
                <button
                  className="w-full flex items-center justify-between p-5 text-left font-medium text-gray-900 hover:bg-gray-50 transition-colors"
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                >
                  <span>{faq.q}</span>
                  <ChevronRight
                    size={18}
                    className={`text-gray-400 transition-transform flex-shrink-0 ${
                      openFaq === i ? 'rotate-90' : ''
                    }`}
                  />
                </button>
                {openFaq === i && (
                  <div className="px-5 pb-5 text-gray-500 text-sm leading-relaxed border-t border-gray-50 pt-4">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ======== INQUIRY FORM ======== */}
      <section id="inquiry-form" className="py-16 md:py-24 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <p className="text-accent-red font-semibold text-sm tracking-wide uppercase mb-2">
              Start Your Project
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Get a Free Sourcing Quote
            </h2>
            <p className="text-gray-500 text-lg">
              Tell us about your product and we&apos;ll get back to you within 24
              hours with a detailed proposal.
            </p>
          </div>

          <form
            onSubmit={handleFormSubmit}
            className="bg-gray-50 rounded-2xl p-6 md:p-10 border border-gray-100"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-5">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700 mb-1.5"
                >
                  Full Name *
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  value={formValues.name}
                  onChange={handleFormChange}
                  required
                  placeholder="John Smith"
                  className="w-full rounded-lg border border-gray-300 bg-white px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-navy/20 focus:border-navy transition-colors"
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700 mb-1.5"
                >
                  Email Address *
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  value={formValues.email}
                  onChange={handleFormChange}
                  required
                  placeholder="john@company.com"
                  className="w-full rounded-lg border border-gray-300 bg-white px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-navy/20 focus:border-navy transition-colors"
                />
              </div>
            </div>
            <div className="mb-5">
              <label
                htmlFor="phone"
                className="block text-sm font-medium text-gray-700 mb-1.5"
              >
                Phone / WhatsApp
              </label>
              <input
                id="phone"
                name="phone"
                type="text"
                value={formValues.phone}
                onChange={handleFormChange}
                placeholder="+1 (555) 000-0000"
                className="w-full rounded-lg border border-gray-300 bg-white px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-navy/20 focus:border-navy transition-colors"
              />
            </div>
            <div className="mb-5">
              <label
                htmlFor="product"
                className="block text-sm font-medium text-gray-700 mb-1.5"
              >
                Product You Want to Source *
              </label>
              <input
                id="product"
                name="product"
                type="text"
                value={formValues.product}
                onChange={handleFormChange}
                required
                placeholder="e.g., Bluetooth speakers, wooden furniture, cotton t-shirts"
                className="w-full rounded-lg border border-gray-300 bg-white px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-navy/20 focus:border-navy transition-colors"
              />
            </div>
            <div className="mb-6">
              <label
                htmlFor="message"
                className="block text-sm font-medium text-gray-700 mb-1.5"
              >
                Additional Details
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                value={formValues.message}
                onChange={handleFormChange}
                placeholder="Target price, order quantity, quality requirements, timeline, etc."
                className="w-full rounded-lg border border-gray-300 bg-white px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-navy/20 focus:border-navy transition-colors resize-y"
              />
            </div>

            {formError && (
              <p className="text-accent-red text-sm mb-4">{formError}</p>
            )}

            {formStatus === 'success' ? (
              <div className="bg-green-50 border border-green-200 rounded-lg p-4 flex items-center gap-3">
                <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                <p className="text-green-800 text-sm">
                  Thank you! We&apos;ve received your inquiry and will get back to
                  you within 24 hours.
                </p>
              </div>
            ) : (
              <button
                type="submit"
                disabled={formStatus === 'submitting'}
                className="w-full inline-flex items-center justify-center gap-2 bg-accent-red hover:bg-red-700 text-white font-semibold rounded-lg px-8 py-3.5 text-base transition-colors shadow-lg shadow-red-700/20 disabled:opacity-60"
              >
                {formStatus === 'submitting' ? (
                  'Sending...'
                ) : (
                  <>
                    Send Inquiry <Send size={16} />
                  </>
                )}
              </button>
            )}
          </form>
        </div>
      </section>

      {/* ======== CTA BANNER ======== */}
      <section className="bg-navy py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row items-center justify-between gap-6">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">
              Ready to find your ideal supplier in China?
            </h2>
            <p className="text-gray-300 text-lg">
              Let&apos;s discuss your sourcing needs — no obligation, no pressure.
            </p>
          </div>
          <div className="flex items-center gap-4 flex-shrink-0">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 bg-accent-red hover:bg-red-700 text-white font-semibold rounded-lg px-8 py-3.5 transition-colors shadow-lg"
            >
              Get a Free Quote <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
