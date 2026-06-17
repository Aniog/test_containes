import { useEffect, useRef, useState } from 'react'
import { BrowserRouter, Link, NavLink, Route, Routes, useLocation } from 'react-router-dom'
import {
  ArrowRight,
  BadgeCheck,
  Boxes,
  CheckCircle2,
  ClipboardCheck,
  Clock,
  Factory,
  FileSearch,
  Globe2,
  Mail,
  MapPin,
  Menu,
  MessageSquareText,
  PackageCheck,
  Phone,
  Search,
  ShieldCheck,
  Ship,
  Truck,
  X,
} from 'lucide-react'
import { ImageHelper } from '@strikingly/sdk'
import { submitSourcingInquiry } from './api/sourcingInquiries.js'
import strkImgConfig from './strk-img-config.json'
import './App.css'

const placeholderSrc =
  "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"

const navItems = [
  { label: 'Home', path: '/' },
  { label: 'Services', path: '/services' },
  { label: 'How It Works', path: '/how-it-works' },
  { label: 'Products We Source', path: '/products' },
  { label: 'Case Studies', path: '/case-studies' },
  { label: 'Blog', path: '/blog' },
  { label: 'Contact', path: '/contact' },
]

const services = [
  {
    title: 'Supplier Sourcing',
    text: 'Shortlist factories and trading companies that fit your product, volume, target market, and compliance expectations.',
    icon: Search,
  },
  {
    title: 'Factory Verification',
    text: 'Review business licenses, production scope, export experience, photos, video calls, and on-site verification where needed.',
    icon: Factory,
  },
  {
    title: 'Sample & Quotation Follow-up',
    text: 'Coordinate specifications, samples, packaging details, pricing comparisons, and practical supplier communication.',
    icon: FileSearch,
  },
  {
    title: 'Quality Inspection',
    text: 'Arrange pre-production, during-production, and final random inspections with clear reports before goods leave the factory.',
    icon: ClipboardCheck,
  },
  {
    title: 'Production Follow-up',
    text: 'Track schedules, check milestones, reduce misunderstandings, and keep overseas buyers informed during manufacturing.',
    icon: PackageCheck,
  },
  {
    title: 'Shipping Coordination',
    text: 'Help coordinate cartons, labels, documents, consolidation, and shipment handover with forwarders or your appointed logistics team.',
    icon: Ship,
  },
]

const processSteps = [
  {
    title: 'Share your sourcing brief',
    text: 'Send product details, target price, quantity, destination market, packaging needs, and quality expectations.',
  },
  {
    title: 'Supplier research and screening',
    text: 'We compare supplier capabilities, communication quality, production fit, and practical risk factors.',
  },
  {
    title: 'Samples, pricing, and selection',
    text: 'You receive supplier options, quotation details, and sample coordination support before committing to production.',
  },
  {
    title: 'Production, QC, and shipping support',
    text: 'We follow up with the factory, arrange quality checks, and coordinate shipment preparation until handover.',
  },
]

const productGroups = [
  {
    title: 'Consumer Products',
    text: 'Home goods, kitchenware, gift items, outdoor products, pet products, toys, and lifestyle accessories.',
    titleId: 'product-consumer-title',
    descId: 'product-consumer-desc',
    imgId: 'product-consumer-goods-7f4b21',
  },
  {
    title: 'Industrial & Hardware',
    text: 'Tools, fasteners, metal parts, machinery components, plastic parts, and practical industrial supplies.',
    titleId: 'product-industrial-title',
    descId: 'product-industrial-desc',
    imgId: 'product-industrial-hardware-4a92cd',
  },
  {
    title: 'Packaging & Display',
    text: 'Custom packaging, retail displays, printed boxes, bags, labels, inserts, and brand-ready materials.',
    titleId: 'product-packaging-title',
    descId: 'product-packaging-desc',
    imgId: 'product-packaging-display-31c8ef',
  },
  {
    title: 'Electronics Accessories',
    text: 'Cables, chargers, phone accessories, LED items, small electronic devices, and assembly-based products.',
    titleId: 'product-electronics-title',
    descId: 'product-electronics-desc',
    imgId: 'product-electronics-accessories-5d20aa',
  },
]

const problems = [
  'Unclear supplier background or mismatched production capability',
  'Slow communication across time zones and languages',
  'Confusing quotations with hidden packaging, tooling, or shipping details',
  'Quality issues discovered only after shipment',
  'Production delays without timely updates',
  'Difficulty coordinating inspection, documents, and logistics handover',
]

const trustPoints = [
  { label: 'China-based follow-up', value: 'Local coordination with suppliers, factories, inspectors, and forwarders.' },
  { label: 'Practical verification', value: 'Business details, factory capability, product fit, and communication behavior are checked before you proceed.' },
  { label: 'Buyer-side reporting', value: 'Clear updates, photos, documents, and inspection summaries support informed decisions.' },
  { label: 'Confidential handling', value: 'Supplier discussions and project information are handled as private buyer-side work.' },
]

const caseStudies = [
  {
    title: 'Retail packaging supplier replacement',
    text: 'A European importer needed a more reliable printed packaging supplier. SSourcing China compared factories, reviewed samples, clarified artwork requirements, and helped the buyer move to a supplier with clearer lead times and stronger communication.',
    result: 'Reduced sourcing uncertainty before the first bulk order.',
    titleId: 'case-packaging-title',
    descId: 'case-packaging-desc',
    imgId: 'case-packaging-inspection-c91ef1',
  },
  {
    title: 'Hardware parts production follow-up',
    text: 'An overseas distributor needed ongoing updates for a repeat hardware order. We followed production milestones, checked packaging photos, coordinated final inspection timing, and flagged schedule risks early.',
    result: 'The buyer had clearer visibility before shipment booking.',
    titleId: 'case-hardware-title',
    descId: 'case-hardware-desc',
    imgId: 'case-hardware-factory-18a6bc',
  },
  {
    title: 'Consumer product QC coordination',
    text: 'A brand sourcing home products wanted independent checks before release. SSourcing China arranged inspection requirements, reviewed the QC report, and helped communicate corrective actions with the supplier.',
    result: 'Quality issues were addressed before container loading.',
    titleId: 'case-consumer-qc-title',
    descId: 'case-consumer-qc-desc',
    imgId: 'case-consumer-qc-73ebd4',
  },
]

const faqs = [
  {
    q: 'Do you work with first-time importers?',
    a: 'Yes. We can help clarify the sourcing process, supplier communication, samples, quality checks, and shipment coordination in practical steps.',
  },
  {
    q: 'Can you verify whether a supplier is a real factory?',
    a: 'We can review company records, production scope, supplier materials, video calls, and arrange on-site verification where appropriate.',
  },
  {
    q: 'Do you guarantee the lowest price?',
    a: 'No. Our focus is practical supplier fit, transparency, quality control, and reliable follow-up. Price is compared together with capability and risk.',
  },
  {
    q: 'Can you inspect goods before shipment?',
    a: 'Yes. We can coordinate pre-production, during-production, and final random inspections based on your product and order stage.',
  },
]

const blogPosts = [
  {
    title: 'How to prepare a clear sourcing brief for Chinese suppliers',
    excerpt: 'A practical checklist for specifications, packaging, quantity, target price, and compliance information.',
  },
  {
    title: 'Factory verification: what overseas buyers should check',
    excerpt: 'Key documents, capability signals, and communication patterns that help reduce supplier risk.',
  },
  {
    title: 'When to arrange product inspection during production',
    excerpt: 'How pre-production, during-production, and final checks fit different order risks.',
  },
]

const serviceOptions = [
  { value: 'supplier_sourcing', label: 'Supplier sourcing' },
  { value: 'factory_verification', label: 'Factory verification' },
  { value: 'sample_follow_up', label: 'Sample follow-up' },
  { value: 'quality_inspection', label: 'Quality inspection' },
  { value: 'production_follow_up', label: 'Production follow-up' },
  { value: 'shipping_coordination', label: 'Shipping coordination' },
]

const defaultInquiry = {
  company_name: '',
  contact_name: '',
  email: '',
  country: '',
  product_category: '',
  estimated_quantity: '',
  services_needed: ['supplier_sourcing', 'factory_verification'],
  message: '',
}

function App() {
  return (
    <BrowserRouter>
      <BrowserShell />
    </BrowserRouter>
  )
}

function BrowserShell() {
  const location = useLocation()
  const pageRef = useRef(null)

  useEffect(() => {
    document.title = 'China Sourcing Agent | Supplier Verification, QC & Shipping | SSourcing China'
    let meta = document.querySelector('meta[name="description"]')
    if (!meta) {
      meta = document.createElement('meta')
      meta.setAttribute('name', 'description')
      document.head.appendChild(meta)
    }
    meta.setAttribute(
      'content',
      'SSourcing China helps overseas buyers source suppliers in China, verify factories, inspect quality, follow production, and coordinate shipping.',
    )
  }, [])

  useEffect(() => {
    if (location.hash) {
      const target = document.querySelector(location.hash)
      target?.scrollIntoView({ behavior: 'smooth', block: 'start' })
      return
    }
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [location])

  useEffect(() => {
    if (!pageRef.current || !ImageHelper?.loadImages) return undefined
    return ImageHelper.loadImages(strkImgConfig, pageRef.current)
  }, [location.pathname])

  return (
    <div ref={pageRef} className="min-h-screen bg-brand-cloud text-brand-navy">
      <SiteHeader />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/how-it-works" element={<HowItWorksPage />} />
        <Route path="/products" element={<ProductsPage />} />
        <Route path="/case-studies" element={<CaseStudiesPage />} />
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
      <SiteFooter />
    </div>
  )
}

function SiteHeader() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 border-b border-brand-mist bg-white/95 text-brand-navy shadow-sm backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <Link to="/" className="flex items-center gap-3 text-brand-navy" onClick={() => setOpen(false)}>
          <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-brand-navy text-sm font-bold text-white">SS</span>
          <span>
            <span className="block text-lg font-bold leading-tight">SSourcing China</span>
            <span className="block text-xs font-medium uppercase tracking-wide text-brand-slate">Buyer-side sourcing support</span>
          </span>
        </Link>
        <nav className="hidden items-center gap-6 lg:flex" aria-label="Main navigation">
          {navItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) =>
                `text-sm font-semibold transition ${isActive ? 'text-brand-blue' : 'text-brand-slate hover:text-brand-blue'}`
              }
            >
              {item.label}
            </NavLink>
          ))}
        </nav>
        <div className="hidden items-center gap-3 lg:flex">
          <Link to="/contact#inquiry" className="rounded-full bg-brand-blue px-5 py-3 text-sm font-bold text-white shadow-sm transition hover:bg-brand-navy">
            Get a Free Sourcing Quote
          </Link>
        </div>
        <button
          type="button"
          className="inline-flex items-center justify-center rounded-full border border-brand-mist bg-white p-3 text-brand-navy lg:hidden"
          aria-label="Open navigation menu"
          onClick={() => setOpen((current) => !current)}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>
      {open && (
        <div className="border-t border-brand-mist bg-white px-4 py-4 text-brand-navy lg:hidden">
          <nav className="grid gap-2" aria-label="Mobile navigation">
            {navItems.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  `rounded-xl px-4 py-3 text-sm font-semibold ${isActive ? 'bg-brand-cloud text-brand-blue' : 'text-brand-slate hover:bg-brand-cloud hover:text-brand-blue'}`
                }
              >
                {item.label}
              </NavLink>
            ))}
            <Link
              to="/contact#inquiry"
              onClick={() => setOpen(false)}
              className="mt-2 rounded-full bg-brand-blue px-5 py-3 text-center text-sm font-bold text-white"
            >
              Get a Free Sourcing Quote
            </Link>
          </nav>
        </div>
      )}
    </header>
  )
}

function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-white text-brand-navy">
      <div className="absolute inset-x-0 top-0 h-48 bg-brand-cloud" aria-hidden="true" />
      <div className="relative mx-auto grid max-w-7xl gap-10 px-4 py-16 sm:px-6 lg:grid-cols-2 lg:items-center lg:px-8 lg:py-24">
        <div>
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-brand-mist bg-white px-4 py-2 text-sm font-semibold text-brand-slate shadow-sm">
            <Globe2 className="h-4 w-4 text-brand-blue" />
            China-based support for overseas buyers
          </div>
          <h1 id="hero-title" className="max-w-3xl text-4xl font-bold tracking-tight text-brand-navy sm:text-5xl lg:text-6xl">
            China Sourcing Agent for Global Buyers
          </h1>
          <p id="hero-subtitle" className="mt-6 max-w-2xl text-lg leading-8 text-brand-slate">
            SSourcing China helps overseas buyers find suitable suppliers, verify factories, inspect quality, follow production, and coordinate shipping with clear buyer-side communication.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link to="/contact#inquiry" className="inline-flex items-center justify-center gap-2 rounded-full bg-brand-blue px-6 py-4 text-base font-bold text-white shadow-soft transition hover:bg-brand-navy">
              Get a Free Sourcing Quote
              <ArrowRight className="h-5 w-5" />
            </Link>
            <Link to="/services" className="inline-flex items-center justify-center rounded-full border border-brand-mist bg-white px-6 py-4 text-base font-bold text-brand-navy transition hover:border-brand-blue hover:text-brand-blue">
              View Services
            </Link>
          </div>
          <div className="mt-8 grid gap-4 sm:grid-cols-3">
            {['Supplier screening', 'QC coordination', 'Shipping follow-up'].map((item) => (
              <div key={item} className="flex items-center gap-2 rounded-2xl bg-brand-cloud px-4 py-3 text-sm font-semibold text-brand-navy">
                <CheckCircle2 className="h-5 w-5 flex-none text-brand-blue" />
                {item}
              </div>
            ))}
          </div>
        </div>
        <div className="relative">
          <div
            className="min-h-96 overflow-hidden rounded-3xl border border-brand-mist bg-brand-mist shadow-soft"
            data-strk-bg-id="hero-factory-qc-shipping-2fa91e"
            data-strk-bg="[hero-subtitle] [hero-title]"
            data-strk-bg-ratio="4x3"
            data-strk-bg-width="1200"
            aria-label="Factory sourcing and quality inspection visual"
          >
            <div className="flex min-h-96 items-end bg-brand-navy/30 p-6">
              <div className="rounded-2xl bg-white/95 p-5 text-brand-navy shadow-soft backdrop-blur">
                <p className="text-sm font-bold text-brand-blue">Operational visibility</p>
                <p className="mt-2 text-sm leading-6 text-brand-slate">Supplier checks, production follow-up, QC reporting, and shipment coordination in one sourcing workflow.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function HomePage() {
  return (
    <main>
      <HeroSection />
      <ServicesSection />
      <ProcessSection />
      <ProductsSection />
      <ProblemsSection />
      <TrustSection />
      <CaseStudiesSection />
      <FaqSection />
      <InquiryBand />
    </main>
  )
}

function SectionHeader({ eyebrow, title, text, center = false }) {
  return (
    <div className={center ? 'mx-auto max-w-3xl text-center' : 'max-w-3xl'}>
      <p className="text-sm font-bold uppercase tracking-wide text-brand-blue">{eyebrow}</p>
      <h2 className="mt-3 text-3xl font-bold tracking-tight text-brand-navy sm:text-4xl">{title}</h2>
      {text && <p className="mt-4 text-lg leading-8 text-brand-slate">{text}</p>}
    </div>
  )
}

function ServicesSection() {
  return (
    <section className="bg-brand-cloud py-16 text-brand-navy sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Services"
          title="Practical sourcing support from supplier search to shipment handover"
          text="Use the full sourcing workflow or choose the support you need for a specific order stage."
        />
        <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => {
            const Icon = service.icon
            return (
              <article key={service.title} className="rounded-3xl border border-brand-mist bg-white p-6 text-brand-navy shadow-sm transition hover:-translate-y-1 hover:shadow-soft">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-blue/10 text-brand-blue">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="mt-5 text-xl font-bold text-brand-navy">{service.title}</h3>
                <p className="mt-3 leading-7 text-brand-slate">{service.text}</p>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}

function ProcessSection() {
  return (
    <section className="bg-white py-16 text-brand-navy sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-start">
          <div>
            <SectionHeader
              eyebrow="How it works"
              title="A clear process for reducing supplier and production uncertainty"
              text="Each project starts with a practical brief, then moves through supplier screening, samples, production follow-up, QC, and shipping coordination."
            />
            <Link to="/how-it-works" className="mt-8 inline-flex items-center gap-2 rounded-full border border-brand-mist bg-white px-5 py-3 font-bold text-brand-navy transition hover:border-brand-blue hover:text-brand-blue">
              See the full process <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          <div className="grid gap-4">
            {processSteps.map((step, index) => (
              <article key={step.title} className="flex gap-5 rounded-3xl border border-brand-mist bg-brand-cloud p-6 text-brand-navy">
                <div className="flex h-11 w-11 flex-none items-center justify-center rounded-full bg-brand-navy text-sm font-bold text-white">{index + 1}</div>
                <div>
                  <h3 className="text-lg font-bold text-brand-navy">{step.title}</h3>
                  <p className="mt-2 leading-7 text-brand-slate">{step.text}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

function ProductsSection() {
  return (
    <section className="bg-brand-cloud py-16 text-brand-navy sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Products we source"
          title="Support for common B2B and consumer product categories"
          text="We focus on categories where supplier capability, specifications, packaging, QC, and shipping details matter."
        />
        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {productGroups.map((group) => (
            <article key={group.title} className="overflow-hidden rounded-3xl border border-brand-mist bg-white text-brand-navy shadow-sm">
              <img
                src={placeholderSrc}
                alt={group.title}
                className="h-44 w-full bg-brand-mist object-cover"
                data-strk-img-id={group.imgId}
                data-strk-img={`[${group.descId}] [${group.titleId}]`}
                data-strk-img-ratio="4x3"
                data-strk-img-width="700"
              />
              <div className="p-6">
                <h3 id={group.titleId} className="text-xl font-bold text-brand-navy">{group.title}</h3>
                <p id={group.descId} className="mt-3 leading-7 text-brand-slate">{group.text}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

function ProblemsSection() {
  return (
    <section className="bg-white py-16 text-brand-navy sm:py-20">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-2 lg:items-center lg:px-8">
        <div className="overflow-hidden rounded-3xl border border-brand-mist bg-brand-mist shadow-soft">
          <img
            src={placeholderSrc}
            alt="Quality control inspection in a Chinese factory"
            className="h-full min-h-96 w-full object-cover"
            data-strk-img-id="quality-control-factory-visual-0e5b71"
            data-strk-img="[problems-title] [problems-subtitle]"
            data-strk-img-ratio="4x3"
            data-strk-img-width="1000"
          />
        </div>
        <div>
          <p className="text-sm font-bold uppercase tracking-wide text-brand-blue">Problems we solve</p>
          <h2 id="problems-title" className="mt-3 text-3xl font-bold tracking-tight text-brand-navy sm:text-4xl">Reduce common China sourcing risks before they become expensive</h2>
          <p id="problems-subtitle" className="mt-4 text-lg leading-8 text-brand-slate">The goal is not only to find a supplier. It is to make sure the supplier, product, order details, quality expectations, and shipment plan are clear enough for a confident buying decision.</p>
          <div className="mt-8 grid gap-3">
            {problems.map((problem) => (
              <div key={problem} className="flex gap-3 rounded-2xl bg-brand-cloud p-4 text-brand-navy">
                <ShieldCheck className="mt-1 h-5 w-5 flex-none text-brand-blue" />
                <p className="font-medium leading-7 text-brand-slate">{problem}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

function TrustSection() {
  return (
    <section className="bg-brand-navy py-16 text-white sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-3 lg:items-start">
          <div>
            <p className="text-sm font-bold uppercase tracking-wide text-brand-amber">Trust points</p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-white sm:text-4xl">Built for overseas buyers who need reliable local execution</h2>
            <p className="mt-4 leading-8 text-white/80">SSourcing China works on the buyer side: practical sourcing research, clearer supplier communication, quality visibility, and careful order follow-up.</p>
          </div>
          <div className="grid gap-5 md:grid-cols-2 lg:col-span-2">
            {trustPoints.map((point) => (
              <article key={point.label} className="rounded-3xl border border-white/15 bg-white/10 p-6 text-white">
                <BadgeCheck className="h-7 w-7 text-brand-amber" />
                <h3 className="mt-4 text-xl font-bold text-white">{point.label}</h3>
                <p className="mt-3 leading-7 text-white/80">{point.value}</p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

function CaseStudiesSection() {
  return (
    <section className="bg-white py-16 text-brand-navy sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Case studies"
          title="Representative sourcing situations we support"
          text="These examples show practical project types and how a buyer-side sourcing agent can add visibility."
        />
        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          {caseStudies.map((study) => (
            <article key={study.title} className="overflow-hidden rounded-3xl border border-brand-mist bg-brand-cloud text-brand-navy shadow-sm">
              <img
                src={placeholderSrc}
                alt={study.title}
                className="h-48 w-full bg-brand-mist object-cover"
                data-strk-img-id={study.imgId}
                data-strk-img={`[${study.descId}] [${study.titleId}]`}
                data-strk-img-ratio="4x3"
                data-strk-img-width="800"
              />
              <div className="p-6">
                <h3 id={study.titleId} className="text-xl font-bold text-brand-navy">{study.title}</h3>
                <p id={study.descId} className="mt-3 leading-7 text-brand-slate">{study.text}</p>
                <p className="mt-5 rounded-2xl bg-white p-4 text-sm font-bold leading-6 text-brand-navy">{study.result}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

function FaqSection() {
  return (
    <section className="bg-brand-cloud py-16 text-brand-navy sm:py-20">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="FAQ"
          title="Common questions from overseas buyers"
          text="Straightforward answers before you send your sourcing requirements."
          center
        />
        <div className="mt-10 grid gap-4">
          {faqs.map((faq) => (
            <details key={faq.q} className="group rounded-3xl border border-brand-mist bg-white p-6 text-brand-navy shadow-sm" open={faq.q === faqs[0].q}>
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-lg font-bold text-brand-navy">
                {faq.q}
                <span className="flex h-8 w-8 flex-none items-center justify-center rounded-full bg-brand-cloud text-brand-blue group-open:rotate-45">+</span>
              </summary>
              <p className="mt-4 leading-7 text-brand-slate">{faq.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  )
}

function InquiryBand() {
  return (
    <section className="bg-white py-16 text-brand-navy sm:py-20" id="inquiry">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
        <div>
          <SectionHeader
            eyebrow="Start a project"
            title="Get a Free Sourcing Quote"
            text="Tell us what you want to source in China. We will review your requirements and suggest the next practical sourcing steps."
          />
          <div className="mt-8 grid gap-4">
            <ContactPoint icon={Mail} label="Email" value="Send your inquiry through the form" />
            <ContactPoint icon={Clock} label="Response" value="We review qualified inquiries and reply with practical next steps." />
            <ContactPoint icon={MapPin} label="Base" value="China-based sourcing coordination for overseas buyers" />
          </div>
        </div>
        <InquiryForm />
      </div>
    </section>
  )
}

function ContactPoint({ icon: Icon, label, value }) {
  return (
    <div className="flex gap-4 rounded-3xl border border-brand-mist bg-brand-cloud p-5 text-brand-navy">
      <div className="flex h-11 w-11 flex-none items-center justify-center rounded-2xl bg-white text-brand-blue">
        <Icon className="h-5 w-5" />
      </div>
      <div>
        <p className="font-bold text-brand-navy">{label}</p>
        <p className="mt-1 leading-7 text-brand-slate">{value}</p>
      </div>
    </div>
  )
}

function InquiryForm() {
  const [values, setValues] = useState(defaultInquiry)
  const [status, setStatus] = useState('idle')
  const [error, setError] = useState('')
  const [lastSubmission, setLastSubmission] = useState(null)

  const updateField = (event) => {
    const { name, value } = event.target
    setValues((current) => ({ ...current, [name]: value }))
  }

  const toggleService = (value) => {
    setValues((current) => {
      const exists = current.services_needed.includes(value)
      const servicesNeeded = exists
        ? current.services_needed.filter((item) => item !== value)
        : [...current.services_needed, value]
      return { ...current, services_needed: servicesNeeded }
    })
  }

  const validate = () => {
    if (!values.company_name.trim()) return 'Company name is required.'
    if (!values.contact_name.trim()) return 'Contact name is required.'
    if (!values.email.trim()) return 'Business email is required.'
    if (!/^\S+@\S+\.\S+$/.test(values.email.trim())) return 'Please enter a valid business email.'
    if (!values.country.trim()) return 'Country or region is required.'
    if (!values.product_category.trim()) return 'Product category is required.'
    if (!values.message.trim()) return 'Please describe your sourcing requirements.'
    return ''
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    setError('')
    const validationError = validate()
    if (validationError) {
      setError(validationError)
      setStatus('error')
      return
    }

    setStatus('submitting')
    try {
      const savedInquiry = await submitSourcingInquiry(values)
      setLastSubmission(savedInquiry)
      setValues(defaultInquiry)
      setStatus('success')
    } catch (submitError) {
      setError(submitError.message || 'Unable to submit your inquiry. Please try again.')
      setStatus('error')
    }
  }

  return (
    <form onSubmit={handleSubmit} className="rounded-3xl border border-brand-mist bg-white p-6 text-brand-navy shadow-soft sm:p-8" aria-busy={status === 'submitting'}>
      <div className="grid gap-4 sm:grid-cols-2">
        <Field label="Company name" name="company_name" value={values.company_name} onChange={updateField} required />
        <Field label="Contact name" name="contact_name" value={values.contact_name} onChange={updateField} required />
        <Field label="Business email" name="email" type="email" value={values.email} onChange={updateField} required />
        <Field label="Country / region" name="country" value={values.country} onChange={updateField} required />
        <Field label="Product category" name="product_category" value={values.product_category} onChange={updateField} required />
        <Field label="Estimated quantity" name="estimated_quantity" value={values.estimated_quantity} onChange={updateField} placeholder="e.g. 2,000 pcs or annual volume" />
      </div>
      <fieldset className="mt-5">
        <legend className="text-sm font-bold text-brand-navy">Services needed</legend>
        <div className="mt-3 grid gap-3 sm:grid-cols-2">
          {serviceOptions.map((option) => (
            <label key={option.value} className="flex cursor-pointer items-center gap-3 rounded-2xl border border-brand-mist bg-brand-cloud px-4 py-3 text-sm font-semibold text-brand-slate">
              <input
                type="checkbox"
                checked={values.services_needed.includes(option.value)}
                onChange={() => toggleService(option.value)}
                className="h-4 w-4 accent-brand-blue"
              />
              {option.label}
            </label>
          ))}
        </div>
      </fieldset>
      <label className="mt-5 block">
        <span className="text-sm font-bold text-brand-navy">Sourcing requirements</span>
        <textarea
          name="message"
          value={values.message}
          onChange={updateField}
          rows="5"
          required
          placeholder="Tell us about the product, target market, quality expectations, packaging, timeline, and current supplier situation."
          className="mt-2 w-full rounded-2xl border border-brand-mist bg-white px-4 py-3 text-brand-navy outline-none transition placeholder:text-brand-slate/70 focus:border-brand-blue focus:ring-4 focus:ring-brand-blue/10"
        />
      </label>
      {status === 'success' && (
        <div className="mt-5 rounded-2xl border border-green-200 bg-green-50 p-4 text-sm font-semibold leading-6 text-green-800" role="status">
          Thank you. Your sourcing inquiry has been received. We will review the details and reply with practical next steps.
          {lastSubmission?.id && <span className="block font-medium">Inquiry reference: {lastSubmission.id}</span>}
        </div>
      )}
      {status === 'error' && error && (
        <div className="mt-5 rounded-2xl border border-red-200 bg-red-50 p-4 text-sm font-semibold leading-6 text-red-800" role="alert">
          {error}
        </div>
      )}
      <button
        type="submit"
        disabled={status === 'submitting'}
        className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-brand-blue px-6 py-4 text-base font-bold text-white transition hover:bg-brand-navy disabled:cursor-not-allowed disabled:bg-brand-slate sm:w-auto"
      >
        {status === 'submitting' ? 'Submitting inquiry...' : 'Get a Free Sourcing Quote'}
        <ArrowRight className="h-5 w-5" />
      </button>
    </form>
  )
}

function Field({ label, name, value, onChange, type = 'text', placeholder = '', required = false }) {
  return (
    <label className="block">
      <span className="text-sm font-bold text-brand-navy">{label}</span>
      <input
        name={name}
        type={type}
        value={value}
        onChange={onChange}
        required={required}
        placeholder={placeholder}
        className="mt-2 w-full rounded-2xl border border-brand-mist bg-white px-4 py-3 text-brand-navy outline-none transition placeholder:text-brand-slate/70 focus:border-brand-blue focus:ring-4 focus:ring-brand-blue/10"
      />
    </label>
  )
}

function ServicesPage() {
  return (
    <main>
      <PageHero eyebrow="Services" title="Sourcing services for overseas buyers" text="Choose support for one stage or use SSourcing China as your buyer-side sourcing coordinator across the full China supply chain workflow." />
      <ServicesSection />
      <ProblemsSection />
      <InquiryBand />
    </main>
  )
}

function HowItWorksPage() {
  return (
    <main>
      <PageHero eyebrow="How it works" title="A structured sourcing process from brief to shipment" text="The process is designed to create clarity: supplier fit, quotation details, sample feedback, production visibility, QC reporting, and shipping coordination." />
      <ProcessSection />
      <TrustSection />
      <InquiryBand />
    </main>
  )
}

function ProductsPage() {
  return (
    <main>
      <PageHero eyebrow="Products we source" title="Product categories where sourcing details matter" text="SSourcing China supports overseas buyers with practical supplier research, verification, quotation follow-up, QC, and logistics coordination across common China-made product categories." />
      <ProductsSection />
      <section className="bg-white py-16 text-brand-navy sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {['OEM and private label products', 'Packaging and printed materials', 'Tools and industrial supplies', 'Home, kitchen, and lifestyle products', 'Promotional products and gifts', 'Electronics accessories and LED items'].map((item) => (
              <div key={item} className="flex items-center gap-3 rounded-3xl border border-brand-mist bg-brand-cloud p-5 text-brand-navy">
                <Boxes className="h-6 w-6 flex-none text-brand-blue" />
                <span className="font-bold text-brand-navy">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
      <InquiryBand />
    </main>
  )
}

function CaseStudiesPage() {
  return (
    <main>
      <PageHero eyebrow="Case studies" title="Practical sourcing examples" text="Representative situations showing how buyer-side sourcing support can improve supplier selection, production visibility, and pre-shipment quality control." />
      <CaseStudiesSection />
      <InquiryBand />
    </main>
  )
}

function BlogPage() {
  return (
    <main>
      <PageHero eyebrow="Blog" title="Practical China sourcing insights" text="Clear guidance for overseas buyers preparing supplier searches, factory checks, production follow-up, QC, and shipping coordination." />
      <section className="bg-brand-cloud py-16 text-brand-navy sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-6 lg:grid-cols-3">
            {blogPosts.map((post) => (
              <article key={post.title} className="rounded-3xl border border-brand-mist bg-white p-7 text-brand-navy shadow-sm">
                <MessageSquareText className="h-8 w-8 text-brand-blue" />
                <h2 className="mt-5 text-2xl font-bold leading-tight text-brand-navy">{post.title}</h2>
                <p className="mt-4 leading-7 text-brand-slate">{post.excerpt}</p>
                <Link to="/contact#inquiry" className="mt-6 inline-flex items-center gap-2 font-bold text-brand-blue hover:text-brand-navy">
                  Ask about this topic <ArrowRight className="h-4 w-4" />
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>
      <FaqSection />
    </main>
  )
}

function ContactPage() {
  return (
    <main>
      <PageHero eyebrow="Contact" title="Request a sourcing review" text="Send your product and supplier requirements. SSourcing China will review the details and suggest practical next steps for sourcing, verification, QC, production follow-up, or shipping coordination." />
      <InquiryBand />
    </main>
  )
}

function PageHero({ eyebrow, title, text }) {
  return (
    <section className="bg-white py-14 text-brand-navy sm:py-20">
      <div className="mx-auto max-w-5xl px-4 text-center sm:px-6 lg:px-8">
        <p className="text-sm font-bold uppercase tracking-wide text-brand-blue">{eyebrow}</p>
        <h1 className="mt-4 text-4xl font-bold tracking-tight text-brand-navy sm:text-5xl">{title}</h1>
        <p className="mx-auto mt-5 max-w-3xl text-lg leading-8 text-brand-slate">{text}</p>
      </div>
    </section>
  )
}

function SiteFooter() {
  return (
    <footer className="bg-brand-navy py-12 text-white">
      <div className="mx-auto grid max-w-7xl gap-8 px-4 sm:px-6 lg:grid-cols-4 lg:px-8">
        <div className="lg:col-span-2">
          <div className="flex items-center gap-3">
            <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-white text-sm font-bold text-brand-navy">SS</span>
            <div>
              <p className="text-lg font-bold text-white">SSourcing China</p>
              <p className="text-sm text-white/70">China sourcing agent for global buyers</p>
            </div>
          </div>
          <p className="mt-5 max-w-xl leading-7 text-white/75">Supplier sourcing, factory verification, quality inspection, production follow-up, and shipping coordination for overseas buyers sourcing from China.</p>
        </div>
        <div>
          <p className="font-bold text-white">Pages</p>
          <div className="mt-4 grid gap-2">
            {navItems.slice(1).map((item) => (
              <Link key={item.path} to={item.path} className="text-sm text-white/70 hover:text-white">{item.label}</Link>
            ))}
          </div>
        </div>
        <div>
          <p className="font-bold text-white">Contact</p>
          <div className="mt-4 grid gap-3 text-sm text-white/70">
            <span className="flex items-center gap-2"><Phone className="h-4 w-4" /> Inquiry via website form</span>
            <span className="flex items-center gap-2"><Mail className="h-4 w-4" /> Buyer-side sourcing support</span>
            <span className="flex items-center gap-2"><Truck className="h-4 w-4" /> China supplier and shipping coordination</span>
          </div>
        </div>
      </div>
      <div className="mx-auto mt-10 max-w-7xl border-t border-white/10 px-4 pt-6 text-sm text-white/60 sm:px-6 lg:px-8">
        © 2026 SSourcing China. Practical sourcing support for overseas buyers.
      </div>
    </footer>
  )
}

export default App
