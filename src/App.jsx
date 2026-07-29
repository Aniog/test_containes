import { useEffect, useRef, useState } from 'react'
import {
  ArrowRight,
  BadgeCheck,
  Building2,
  CheckCircle2,
  ClipboardCheck,
  Factory,
  FileSearch,
  Globe2,
  Mail,
  MapPin,
  Menu,
  Search,
  ShieldCheck,
  Ship,
  Truck,
  X,
} from 'lucide-react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from './strk-img-config.json'
import { submitSourcingInquiry } from './api/inquiries.js'
import './App.css'

const navigation = [
  { label: 'Home', href: '#home' },
  { label: 'Services', href: '#services' },
  { label: 'How It Works', href: '#process' },
  { label: 'Products We Source', href: '#products' },
  { label: 'Case Studies', href: '#case-studies' },
  { label: 'Blog', href: '#blog' },
  { label: 'Contact', href: '#contact' },
]

const services = [
  {
    title: 'Supplier Search',
    text: 'Shortlist China suppliers that match your product, quantity, compliance, and communication needs.',
    icon: Search,
  },
  {
    title: 'Factory Verification',
    text: 'Check business licenses, factory capacity, export experience, and practical production capability.',
    icon: ShieldCheck,
  },
  {
    title: 'Quality Inspection',
    text: 'Arrange pre-shipment checks, product sampling, defect reporting, and corrective action follow-up.',
    icon: ClipboardCheck,
  },
  {
    title: 'Production Follow-up',
    text: 'Track samples, packaging, production milestones, and supplier communication from order to shipment.',
    icon: Factory,
  },
  {
    title: 'Shipping Coordination',
    text: 'Coordinate export documents, freight forwarders, loading details, and practical delivery updates.',
    icon: Ship,
  },
  {
    title: 'Negotiation Support',
    text: 'Support price comparison, MOQ discussion, payment terms, and risk-aware supplier selection.',
    icon: BadgeCheck,
  },
]

const processSteps = [
  ['01', 'Brief & product requirements', 'We review your product, target market, quantity, budget, standards, and shipment expectations.'],
  ['02', 'Supplier research & screening', 'We identify suitable factories, compare capabilities, and remove weak or mismatched suppliers early.'],
  ['03', 'Quotation & sample coordination', 'We collect clear quotations, manage sample requests, and help compare pricing, lead times, and quality.'],
  ['04', 'Factory checks & order follow-up', 'We verify key supplier details, follow production, report progress, and keep issues visible.'],
  ['05', 'Inspection & shipping support', 'We coordinate quality inspection, documentation, logistics handover, and shipment updates.'],
]

const productCategories = [
  {
    id: 'consumer-goods',
    title: 'Consumer Goods',
    text: 'Homeware, gifts, lifestyle products, accessories, and private-label retail items.',
    imgId: 'products-consumer-goods-a4f31b',
  },
  {
    id: 'electronics',
    title: 'Electronics & Components',
    text: 'Small electronics, cables, chargers, smart devices, and supporting components.',
    imgId: 'products-electronics-c8d72a',
  },
  {
    id: 'packaging',
    title: 'Packaging & Print',
    text: 'Boxes, labels, bags, cartons, inserts, and branded packaging for export orders.',
    imgId: 'products-packaging-e3b55d',
  },
  {
    id: 'industrial',
    title: 'Industrial & Hardware',
    text: 'Metal parts, tools, fittings, machinery accessories, and custom production projects.',
    imgId: 'products-industrial-f1a68c',
  },
]

const problems = [
  'Unclear supplier capability or trading-company risk',
  'Poor communication and slow quotation follow-up',
  'Quality issues discovered too late before shipment',
  'Confusing MOQ, sample, payment, and packaging terms',
  'Production delays without reliable status updates',
  'Difficulty coordinating inspection, documents, and freight',
]

const trustPoints = [
  { value: 'China-based', label: 'Local supplier communication and factory follow-up' },
  { value: 'B2B focused', label: 'Practical support for importers, brands, and wholesalers' },
  { value: 'Transparent', label: 'Clear reports, photos, risks, and next-step recommendations' },
  { value: 'End-to-end', label: 'From supplier search through production and shipping handover' },
]

const caseStudies = [
  {
    title: 'Private-label kitchen product launch',
    region: 'EU importer',
    result: 'Supplier shortlist, sample comparison, packaging review, and pre-shipment inspection coordination.',
  },
  {
    title: 'Industrial component supplier replacement',
    region: 'North American distributor',
    result: 'Factory capability screening, quotation comparison, and production follow-up for a repeat-order item.',
  },
  {
    title: 'Seasonal retail packaging order',
    region: 'Australian retail brand',
    result: 'Print supplier checks, color sample coordination, production updates, and export carton verification.',
  },
]

const blogPosts = [
  {
    title: 'How to verify a China supplier before placing an order',
    text: 'A practical checklist covering licenses, factory capability, samples, references, and inspection timing.',
  },
  {
    title: 'What buyers should prepare before asking for a sourcing quote',
    text: 'Product specs, target quantity, standards, packaging details, and shipment expectations help avoid vague quotes.',
  },
  {
    title: 'Quality inspection points for first-time China orders',
    text: 'How to plan inspection criteria, defect limits, photo reports, and corrective follow-up before shipping.',
  },
]

const faqs = [
  ['Do you work with small trial orders?', 'Yes. We can help assess whether a supplier is suitable for a trial order and explain MOQ or setup cost limitations clearly.'],
  ['Can you verify if a supplier is a factory?', 'We can check business registration, factory information, product capability, photos, and arrange on-site verification when needed.'],
  ['Do you replace a freight forwarder?', 'We coordinate shipping details and communication, but we can also work with your preferred freight forwarder.'],
  ['What information is needed for a quote?', 'Please share product details, target quantity, quality expectations, packaging needs, destination country, and timeline.'],
]

const serviceOptions = [
  ['supplier_search', 'Supplier search'],
  ['factory_verification', 'Factory verification'],
  ['price_negotiation', 'Price negotiation'],
  ['quality_inspection', 'Quality inspection'],
  ['production_follow_up', 'Production follow-up'],
  ['shipping_coordination', 'Shipping coordination'],
]

const initialForm = {
  name: '',
  email: '',
  company: '',
  country: '',
  product_category: '',
  product_details: '',
  target_quantity: '',
  services_needed: [],
  budget_range: '',
  timeline: '',
  preferred_contact: 'email',
  message: '',
  consent: false,
}

function Header() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 border-b border-brand-line bg-white/95 text-brand-navy shadow-sm backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <a href="#home" className="flex items-center gap-3 text-brand-navy" aria-label="SSourcing China home">
          <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand-navy text-white">
            <Globe2 className="h-6 w-6" aria-hidden="true" />
          </span>
          <span>
            <span className="block text-lg font-bold tracking-tight">SSourcing China</span>
            <span className="block text-xs font-medium text-brand-slate">Sourcing agent for global buyers</span>
          </span>
        </a>

        <nav className="hidden items-center gap-6 lg:flex" aria-label="Primary navigation">
          {navigation.map((item) => (
            <a key={item.href} href={item.href} className="text-sm font-semibold text-brand-slate transition hover:text-brand-blue">
              {item.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <a href="#contact" className="rounded-full bg-brand-blue px-5 py-3 text-sm font-bold text-white shadow-b2b-card transition hover:bg-brand-navy">
            Get a Free Sourcing Quote
          </a>
        </div>

        <button
          type="button"
          className="inline-flex items-center justify-center rounded-lg border border-brand-line bg-white p-2 text-brand-navy lg:hidden"
          onClick={() => setOpen((value) => !value)}
          aria-label="Toggle navigation menu"
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {open && (
        <nav className="border-t border-brand-line bg-white px-4 py-4 text-brand-navy lg:hidden" aria-label="Mobile navigation">
          <div className="mx-auto grid max-w-7xl gap-3">
            {navigation.map((item) => (
              <a key={item.href} href={item.href} onClick={() => setOpen(false)} className="rounded-lg px-3 py-2 text-sm font-semibold text-brand-slate hover:bg-brand-sky hover:text-brand-blue">
                {item.label}
              </a>
            ))}
            <a href="#contact" onClick={() => setOpen(false)} className="rounded-lg bg-brand-blue px-4 py-3 text-center text-sm font-bold text-white">
              Get a Free Sourcing Quote
            </a>
          </div>
        </nav>
      )}
    </header>
  )
}

function Hero() {
  return (
    <section id="home" className="relative overflow-hidden bg-brand-navy text-white">
      <div
        className="absolute inset-0 opacity-20"
        data-strk-bg-id="hero-factory-logistics-bg-42d9a1"
        data-strk-bg="[hero-visual-context] [hero-subtitle] [hero-title]"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1600"
        aria-hidden="true"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-brand-navy via-brand-navy/95 to-brand-navy/75" aria-hidden="true" />
      <div className="relative mx-auto grid max-w-7xl gap-12 px-4 py-20 sm:px-6 lg:grid-cols-[1.08fr_0.92fr] lg:px-8 lg:py-28">
        <div className="flex flex-col justify-center">
          <p className="mb-5 inline-flex w-fit items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-semibold text-brand-sky">
            <Building2 className="h-4 w-4" aria-hidden="true" /> China-based sourcing support
          </p>
          <h1 id="hero-title" className="max-w-4xl text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
            China Sourcing Agent for Global Buyers
          </h1>
          <p id="hero-subtitle" className="mt-6 max-w-2xl text-lg leading-8 text-brand-sky sm:text-xl">
            SSourcing China helps overseas buyers find reliable suppliers, verify factories, inspect quality, follow production, and coordinate shipping with clear local support.
          </p>
          <p id="hero-visual-context" className="sr-only">Quality control inspector checking export products in a modern factory warehouse for China sourcing buyers</p>
          <div className="mt-9 flex flex-col gap-4 sm:flex-row">
            <a href="#contact" className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-6 py-4 text-base font-bold text-brand-navy transition hover:bg-brand-sky">
              Get a Free Sourcing Quote <ArrowRight className="h-5 w-5" aria-hidden="true" />
            </a>
            <a href="#process" className="inline-flex items-center justify-center rounded-full border border-white/30 px-6 py-4 text-base font-bold text-white transition hover:bg-white/10">
              See How It Works
            </a>
          </div>
          <div className="mt-10 grid gap-4 sm:grid-cols-3">
            {['Supplier checks', 'QC inspection', 'Shipping coordination'].map((item) => (
              <div key={item} className="rounded-2xl border border-white/15 bg-white/10 p-4 text-sm font-semibold text-white backdrop-blur">
                <CheckCircle2 className="mb-2 h-5 w-5 text-brand-sky" aria-hidden="true" /> {item}
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-3xl border border-white/15 bg-white p-4 text-brand-navy shadow-b2b-card">
          <img
            alt="Quality control inspection in a Chinese factory"
            className="h-72 w-full rounded-2xl object-cover sm:h-96"
            data-strk-img-id="hero-qc-factory-image-7b31dc"
            data-strk-img="[hero-visual-context] [hero-subtitle] [hero-title]"
            data-strk-img-ratio="4x3"
            data-strk-img-width="900"
          />
          <div className="grid gap-4 p-5 sm:grid-cols-2">
            <div>
              <p className="text-sm font-semibold text-brand-slate">Typical support</p>
              <p className="mt-1 text-2xl font-bold text-brand-navy">Search → Verify → Inspect → Ship</p>
            </div>
            <div className="rounded-2xl bg-brand-sky p-4 text-sm font-semibold leading-6 text-brand-navy">
              Practical sourcing support for importers, Amazon sellers, distributors, and private-label brands.
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function SectionIntro({ eyebrow, title, text }) {
  return (
    <div className="mx-auto mb-12 max-w-3xl text-center">
      <p className="text-sm font-bold uppercase tracking-[0.22em] text-brand-blue">{eyebrow}</p>
      <h2 className="mt-3 text-3xl font-bold tracking-tight text-brand-navy sm:text-4xl">{title}</h2>
      <p className="mt-4 text-base leading-7 text-brand-slate sm:text-lg">{text}</p>
    </div>
  )
}

function Services() {
  return (
    <section id="services" className="bg-white px-4 py-20 text-brand-navy sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionIntro
          eyebrow="Services"
          title="Sourcing support from supplier search to shipment"
          text="Use SSourcing China when you need local eyes, practical communication, and a structured process before committing to suppliers or shipments."
        />
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => {
            const Icon = service.icon
            return (
              <article key={service.title} className="rounded-3xl border border-brand-line bg-white p-7 shadow-b2b-card transition hover:-translate-y-1 hover:border-brand-blue/40">
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-sky text-brand-blue">
                  <Icon className="h-6 w-6" aria-hidden="true" />
                </div>
                <h3 className="text-xl font-bold text-brand-navy">{service.title}</h3>
                <p className="mt-3 leading-7 text-brand-slate">{service.text}</p>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}

function Process() {
  return (
    <section id="process" className="bg-brand-mist px-4 py-20 text-brand-navy sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionIntro
          eyebrow="How It Works"
          title="A practical sourcing process with clear decision points"
          text="We keep the process understandable, so you can compare suppliers, manage risk, and decide when to move forward."
        />
        <div className="grid gap-8 lg:grid-cols-[0.86fr_1.14fr]">
          <div className="rounded-3xl border border-brand-line bg-white p-4 shadow-b2b-card">
            <img
              alt="Production follow up and supplier meeting in China"
              className="h-full min-h-96 w-full rounded-2xl object-cover"
              data-strk-img-id="process-production-followup-image-18c9ef"
              data-strk-img="[process-title] [process-copy]"
              data-strk-img-ratio="3x4"
              data-strk-img-width="700"
            />
            <h3 id="process-title" className="sr-only">Production follow-up and factory communication</h3>
            <p id="process-copy" className="sr-only">Buyer sourcing process supplier research factory verification quality inspection shipping coordination</p>
          </div>
          <div className="grid gap-4">
            {processSteps.map(([number, title, text]) => (
              <article key={number} className="grid gap-4 rounded-3xl border border-brand-line bg-white p-6 shadow-sm sm:grid-cols-[76px_1fr]">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-brand-navy text-lg font-bold text-white">{number}</div>
                <div>
                  <h3 className="text-xl font-bold text-brand-navy">{title}</h3>
                  <p className="mt-2 leading-7 text-brand-slate">{text}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

function Products() {
  return (
    <section id="products" className="bg-white px-4 py-20 text-brand-navy sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionIntro
          eyebrow="Products We Source"
          title="Support for common export categories and custom projects"
          text="We focus on practical supplier matching. If your product requires specific compliance or technical standards, share those details in the inquiry."
        />
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {productCategories.map((product) => {
            const titleId = `product-${product.id}-title`
            const textId = `product-${product.id}-text`
            return (
              <article key={product.id} className="overflow-hidden rounded-3xl border border-brand-line bg-white shadow-b2b-card">
                <img
                  alt={`${product.title} sourcing in China`}
                  className="h-48 w-full object-cover"
                  data-strk-img-id={product.imgId}
                  data-strk-img={`[${textId}] [${titleId}] [products-heading]`}
                  data-strk-img-ratio="4x3"
                  data-strk-img-width="600"
                />
                <div className="p-6">
                  <h3 id={titleId} className="text-xl font-bold text-brand-navy">{product.title}</h3>
                  <p id={textId} className="mt-3 leading-7 text-brand-slate">{product.text}</p>
                </div>
              </article>
            )
          })}
        </div>
        <h3 id="products-heading" className="sr-only">Products sourced from reliable China suppliers</h3>
      </div>
    </section>
  )
}

function ProblemsAndTrust() {
  return (
    <section className="bg-brand-navy px-4 py-20 text-white sm:px-6 lg:px-8">
      <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-2">
        <div>
          <p className="text-sm font-bold uppercase tracking-[0.22em] text-brand-sky">Problems We Solve</p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-white sm:text-4xl">Reduce sourcing uncertainty before it becomes expensive</h2>
          <div className="mt-8 grid gap-4">
            {problems.map((problem) => (
              <div key={problem} className="flex gap-3 rounded-2xl border border-white/15 bg-white/10 p-4 text-brand-sky">
                <CheckCircle2 className="mt-0.5 h-5 w-5 flex-none text-white" aria-hidden="true" />
                <p className="font-medium leading-6 text-brand-sky">{problem}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="rounded-3xl bg-white p-8 text-brand-navy shadow-b2b-card">
          <p className="text-sm font-bold uppercase tracking-[0.22em] text-brand-blue">Trust Points</p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-brand-navy">Built for clear B2B sourcing decisions</h2>
          <div className="mt-8 grid gap-5 sm:grid-cols-2">
            {trustPoints.map((point) => (
              <div key={point.value} className="rounded-2xl border border-brand-line bg-brand-mist p-5 text-brand-navy">
                <p className="text-2xl font-bold text-brand-blue">{point.value}</p>
                <p className="mt-2 text-sm leading-6 text-brand-slate">{point.label}</p>
              </div>
            ))}
          </div>
          <div className="mt-8 rounded-2xl bg-brand-sky p-5 text-brand-navy">
            <p id="trust-visual-title" className="font-semibold">You receive practical updates, supplier comparisons, inspection notes, and clear next steps instead of vague assurances.</p>
          </div>
          <img
            alt="Container loading and shipping coordination for export orders"
            className="mt-6 h-56 w-full rounded-2xl object-cover"
            data-strk-img-id="shipping-coordination-export-image-93be12"
            data-strk-img="[trust-visual-title] [trust-visual-copy]"
            data-strk-img-ratio="16x9"
            data-strk-img-width="900"
          />
          <p id="trust-visual-copy" className="sr-only">Shipping coordination export documents freight forwarder loading containers China sourcing orders</p>
        </div>
      </div>
    </section>
  )
}

function CaseStudies() {
  return (
    <section id="case-studies" className="bg-brand-mist px-4 py-20 text-brand-navy sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionIntro
          eyebrow="Case Studies"
          title="Typical sourcing projects we support"
          text="Examples below show realistic B2B sourcing work. Scope and results depend on product complexity, supplier availability, and buyer requirements."
        />
        <div className="grid gap-6 lg:grid-cols-3">
          {caseStudies.map((item) => (
            <article key={item.title} className="rounded-3xl border border-brand-line bg-white p-7 shadow-b2b-card">
              <p className="mb-4 inline-flex rounded-full bg-brand-sky px-3 py-1 text-sm font-bold text-brand-blue">{item.region}</p>
              <h3 className="text-xl font-bold text-brand-navy">{item.title}</h3>
              <p className="mt-4 leading-7 text-brand-slate">{item.result}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

function Blog() {
  return (
    <section id="blog" className="bg-white px-4 py-20 text-brand-navy sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionIntro
          eyebrow="Blog"
          title="Practical sourcing guides for overseas buyers"
          text="Educational topics designed to help buyers prepare better inquiries and make more informed supplier decisions."
        />
        <div className="grid gap-6 md:grid-cols-3">
          {blogPosts.map((post) => (
            <article key={post.title} className="rounded-3xl border border-brand-line bg-brand-mist p-7 text-brand-navy">
              <FileSearch className="mb-5 h-8 w-8 text-brand-blue" aria-hidden="true" />
              <h3 className="text-xl font-bold text-brand-navy">{post.title}</h3>
              <p className="mt-4 leading-7 text-brand-slate">{post.text}</p>
              <a href="#contact" className="mt-6 inline-flex items-center gap-2 font-bold text-brand-blue hover:text-brand-navy">
                Ask about your project <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

function Faq() {
  return (
    <section className="bg-brand-mist px-4 py-20 text-brand-navy sm:px-6 lg:px-8">
      <div className="mx-auto max-w-4xl">
        <SectionIntro
          eyebrow="FAQ"
          title="Common questions from overseas buyers"
          text="If you are unsure whether your project is a fit, send the basic product details and we will respond with practical next steps."
        />
        <div className="grid gap-4">
          {faqs.map(([question, answer]) => (
            <details key={question} className="group rounded-2xl border border-brand-line bg-white p-6 text-brand-navy shadow-sm" open={question === faqs[0][0]}>
              <summary className="cursor-pointer list-none text-lg font-bold text-brand-navy marker:hidden">
                {question}
              </summary>
              <p className="mt-4 leading-7 text-brand-slate">{answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  )
}

function InquiryForm() {
  const [values, setValues] = useState(initialForm)
  const [status, setStatus] = useState('idle')
  const [error, setError] = useState('')

  const updateValue = (event) => {
    const { name, value, type, checked } = event.target
    setValues((current) => ({ ...current, [name]: type === 'checkbox' && name === 'consent' ? checked : value }))
  }

  const toggleService = (service) => {
    setValues((current) => ({
      ...current,
      services_needed: current.services_needed.includes(service)
        ? current.services_needed.filter((item) => item !== service)
        : [...current.services_needed, service],
    }))
  }

  const validate = () => {
    if (!values.name.trim()) return 'Please enter your name.'
    if (!/^\S+@\S+\.\S+$/.test(values.email.trim())) return 'Please enter a valid business email.'
    if (!values.product_category.trim()) return 'Please tell us what product you want to source.'
    if (!values.product_details.trim()) return 'Please add product details so we can understand the inquiry.'
    if (!values.consent) return 'Please confirm that SSourcing China may contact you about this inquiry.'
    return ''
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    const validationMessage = validate()
    setError(validationMessage)
    if (validationMessage) return

    setStatus('submitting')
    await submitSourcingInquiry(values, 'SSourcing China homepage inquiry form')
    setValues(initialForm)
    setStatus('success')
  }

  return (
    <form onSubmit={handleSubmit} className="rounded-3xl border border-brand-line bg-white p-6 text-brand-navy shadow-b2b-card sm:p-8" aria-busy={status === 'submitting'}>
      <div className="grid gap-5 sm:grid-cols-2">
        <label className="grid gap-2 text-sm font-bold text-brand-navy">
          Name *
          <input name="name" value={values.name} onChange={updateValue} className="rounded-xl border border-brand-line bg-white px-4 py-3 text-brand-navy outline-none ring-brand-blue/20 placeholder:text-brand-slate focus:border-brand-blue focus:ring-4" placeholder="Your name" />
        </label>
        <label className="grid gap-2 text-sm font-bold text-brand-navy">
          Business email *
          <input name="email" type="email" value={values.email} onChange={updateValue} className="rounded-xl border border-brand-line bg-white px-4 py-3 text-brand-navy outline-none ring-brand-blue/20 placeholder:text-brand-slate focus:border-brand-blue focus:ring-4" placeholder="you@company.com" />
        </label>
        <label className="grid gap-2 text-sm font-bold text-brand-navy">
          Company
          <input name="company" value={values.company} onChange={updateValue} className="rounded-xl border border-brand-line bg-white px-4 py-3 text-brand-navy outline-none ring-brand-blue/20 placeholder:text-brand-slate focus:border-brand-blue focus:ring-4" placeholder="Company name" />
        </label>
        <label className="grid gap-2 text-sm font-bold text-brand-navy">
          Country / market
          <input name="country" value={values.country} onChange={updateValue} className="rounded-xl border border-brand-line bg-white px-4 py-3 text-brand-navy outline-none ring-brand-blue/20 placeholder:text-brand-slate focus:border-brand-blue focus:ring-4" placeholder="United States, Germany, UAE..." />
        </label>
        <label className="grid gap-2 text-sm font-bold text-brand-navy sm:col-span-2">
          Product category *
          <input name="product_category" value={values.product_category} onChange={updateValue} className="rounded-xl border border-brand-line bg-white px-4 py-3 text-brand-navy outline-none ring-brand-blue/20 placeholder:text-brand-slate focus:border-brand-blue focus:ring-4" placeholder="E.g. kitchenware, packaging, electronics, metal parts" />
        </label>
        <label className="grid gap-2 text-sm font-bold text-brand-navy sm:col-span-2">
          Product details *
          <textarea name="product_details" rows="5" value={values.product_details} onChange={updateValue} className="rounded-xl border border-brand-line bg-white px-4 py-3 text-brand-navy outline-none ring-brand-blue/20 placeholder:text-brand-slate focus:border-brand-blue focus:ring-4" placeholder="Share specifications, material, target quality, packaging, standards, sample needs, or reference product links." />
        </label>
        <label className="grid gap-2 text-sm font-bold text-brand-navy">
          Target quantity
          <input name="target_quantity" value={values.target_quantity} onChange={updateValue} className="rounded-xl border border-brand-line bg-white px-4 py-3 text-brand-navy outline-none ring-brand-blue/20 placeholder:text-brand-slate focus:border-brand-blue focus:ring-4" placeholder="Trial order, MOQ, annual volume" />
        </label>
        <label className="grid gap-2 text-sm font-bold text-brand-navy">
          Timeline
          <input name="timeline" value={values.timeline} onChange={updateValue} className="rounded-xl border border-brand-line bg-white px-4 py-3 text-brand-navy outline-none ring-brand-blue/20 placeholder:text-brand-slate focus:border-brand-blue focus:ring-4" placeholder="Sample date or shipment target" />
        </label>
      </div>

      <fieldset className="mt-6 rounded-2xl border border-brand-line bg-brand-mist p-5 text-brand-navy">
        <legend className="px-2 text-sm font-bold text-brand-navy">Services needed</legend>
        <div className="mt-3 grid gap-3 sm:grid-cols-2">
          {serviceOptions.map(([value, label]) => (
            <label key={value} className="flex items-center gap-3 rounded-xl bg-white p-3 text-sm font-semibold text-brand-slate">
              <input type="checkbox" checked={values.services_needed.includes(value)} onChange={() => toggleService(value)} className="h-4 w-4 accent-brand-blue" />
              {label}
            </label>
          ))}
        </div>
      </fieldset>

      <div className="mt-5 grid gap-5 sm:grid-cols-2">
        <label className="grid gap-2 text-sm font-bold text-brand-navy">
          Budget range
          <input name="budget_range" value={values.budget_range} onChange={updateValue} className="rounded-xl border border-brand-line bg-white px-4 py-3 text-brand-navy outline-none ring-brand-blue/20 placeholder:text-brand-slate focus:border-brand-blue focus:ring-4" placeholder="Optional target price or budget" />
        </label>
        <label className="grid gap-2 text-sm font-bold text-brand-navy">
          Preferred contact
          <select name="preferred_contact" value={values.preferred_contact} onChange={updateValue} className="rounded-xl border border-brand-line bg-white px-4 py-3 text-brand-navy outline-none ring-brand-blue/20 focus:border-brand-blue focus:ring-4">
            <option value="email">Email</option>
            <option value="whatsapp">WhatsApp</option>
            <option value="wechat">WeChat</option>
            <option value="phone">Phone</option>
          </select>
        </label>
      </div>

      <label className="mt-5 grid gap-2 text-sm font-bold text-brand-navy">
        Additional message
        <textarea name="message" rows="3" value={values.message} onChange={updateValue} className="rounded-xl border border-brand-line bg-white px-4 py-3 text-brand-navy outline-none ring-brand-blue/20 placeholder:text-brand-slate focus:border-brand-blue focus:ring-4" placeholder="Anything else we should know?" />
      </label>

      <label className="mt-5 flex items-start gap-3 text-sm leading-6 text-brand-slate">
        <input type="checkbox" name="consent" checked={values.consent} onChange={updateValue} className="mt-1 h-4 w-4 accent-brand-blue" />
        I agree that SSourcing China may contact me about this sourcing inquiry.
      </label>

      {error && <p role="alert" className="mt-4 rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm font-semibold text-red-700">{error}</p>}
      {status === 'success' && <p role="status" className="mt-4 rounded-xl border border-green-200 bg-green-50 px-4 py-3 text-sm font-semibold text-green-700">Thank you. Your sourcing inquiry was submitted. We will review the details and respond with practical next steps.</p>}

      <button type="submit" disabled={status === 'submitting'} className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-brand-blue px-6 py-4 text-base font-bold text-white transition hover:bg-brand-navy disabled:cursor-not-allowed disabled:bg-brand-slate sm:w-auto">
        {status === 'submitting' ? 'Submitting...' : 'Get a Free Sourcing Quote'} <ArrowRight className="h-5 w-5" aria-hidden="true" />
      </button>
    </form>
  )
}

function Contact() {
  return (
    <section id="contact" className="bg-white px-4 py-20 text-brand-navy sm:px-6 lg:px-8">
      <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.78fr_1.22fr]">
        <div>
          <p className="text-sm font-bold uppercase tracking-[0.22em] text-brand-blue">Contact</p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-brand-navy sm:text-4xl">Tell us what you want to source from China</h2>
          <p className="mt-5 leading-8 text-brand-slate">
            Share enough detail for a practical first response. We will review the product, quantity, timeline, and services needed before suggesting next steps.
          </p>
          <div className="mt-8 grid gap-4">
            <div className="flex gap-4 rounded-2xl bg-brand-mist p-5 text-brand-navy">
              <Mail className="h-6 w-6 flex-none text-brand-blue" aria-hidden="true" />
              <div><p className="font-bold">Response focus</p><p className="text-brand-slate">Product fit, sourcing approach, and information still needed.</p></div>
            </div>
            <div className="flex gap-4 rounded-2xl bg-brand-mist p-5 text-brand-navy">
              <MapPin className="h-6 w-6 flex-none text-brand-blue" aria-hidden="true" />
              <div><p className="font-bold">China-based support</p><p className="text-brand-slate">Supplier communication, factory checks, QC, and shipping coordination.</p></div>
            </div>
            <div className="flex gap-4 rounded-2xl bg-brand-mist p-5 text-brand-navy">
              <Truck className="h-6 w-6 flex-none text-brand-blue" aria-hidden="true" />
              <div><p className="font-bold">Best for</p><p className="text-brand-slate">Importers, wholesalers, distributors, Amazon sellers, and private-label brands.</p></div>
            </div>
          </div>
        </div>
        <InquiryForm />
      </div>
    </section>
  )
}

function FinalCta() {
  return (
    <section className="bg-brand-blue px-4 py-14 text-white sm:px-6 lg:px-8">
      <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-6 lg:flex-row lg:items-center">
        <div>
          <h2 className="text-3xl font-bold tracking-tight text-white">Ready to compare China suppliers with more clarity?</h2>
          <p className="mt-3 max-w-2xl leading-7 text-brand-sky">Send your product details and we will help you understand the sourcing path, likely information needed, and next steps.</p>
        </div>
        <a href="#contact" className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-6 py-4 font-bold text-brand-blue transition hover:bg-brand-sky">
          Get a Free Sourcing Quote <ArrowRight className="h-5 w-5" aria-hidden="true" />
        </a>
      </div>
    </section>
  )
}

function Footer() {
  return (
    <footer className="bg-brand-navy px-4 py-10 text-brand-sky sm:px-6 lg:px-8">
      <div className="mx-auto flex max-w-7xl flex-col justify-between gap-6 border-t border-white/10 pt-8 md:flex-row">
        <div>
          <p className="text-lg font-bold text-white">SSourcing China</p>
          <p className="mt-2 max-w-xl text-sm leading-6 text-brand-sky">China sourcing agent helping overseas buyers find suppliers, verify factories, inspect quality, follow production, and coordinate shipping.</p>
        </div>
        <div className="flex flex-wrap gap-4 text-sm font-semibold">
          {navigation.map((item) => <a key={item.href} href={item.href} className="text-brand-sky hover:text-white">{item.label}</a>)}
        </div>
      </div>
    </footer>
  )
}

function App() {
  const pageRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, pageRef.current)
  }, [])

  return (
    <div ref={pageRef} className="min-h-screen bg-white text-brand-navy">
      <Header />
      <main>
        <Hero />
        <Services />
        <Process />
        <Products />
        <ProblemsAndTrust />
        <CaseStudies />
        <Blog />
        <Faq />
        <Contact />
        <FinalCta />
      </main>
      <Footer />
    </div>
  )
}

export default App
