import { useEffect, useMemo, useRef, useState } from 'react'
import { Link, Outlet, Route, Routes, useLocation, useNavigate } from 'react-router-dom'
import {
  ArrowRight,
  BadgeCheck,
  Boxes,
  CheckCircle2,
  ChevronRight,
  CircleHelp,
  ClipboardCheck,
  Factory,
  FileSearch,
  Mail,
  MapPin,
  Menu,
  PackageCheck,
  SearchCheck,
  ShieldCheck,
  ShipWheel,
  X,
} from 'lucide-react'
import { DataClient, ImageHelper } from '@strikingly/sdk'
import { STRK_PROJECT_ANON_KEY, STRK_PROJECT_URL } from '@/config'
import strkImgConfig from '@/strk-img-config.json'
import './App.css'

const client = new DataClient(STRK_PROJECT_URL, STRK_PROJECT_ANON_KEY)

const navItems = [
  { label: 'Home', to: '/' },
  { label: 'Services', to: '/services' },
  { label: 'How It Works', to: '/how-it-works' },
  { label: 'Products We Source', to: '/products-we-source' },
  { label: 'Case Studies', to: '/case-studies' },
  { label: 'Blog', to: '/blog' },
  { label: 'Contact', to: '/contact' },
]

const serviceOptions = [
  { value: 'supplier_sourcing', label: 'Supplier sourcing' },
  { value: 'supplier_verification', label: 'Supplier verification' },
  { value: 'factory_audit', label: 'Factory audit' },
  { value: 'quality_inspection', label: 'Quality inspection' },
  { value: 'production_follow_up', label: 'Production follow-up' },
  { value: 'shipping_coordination', label: 'Shipping coordination' },
]

const pageMeta = {
  '/': {
    title: 'China Sourcing Agent | Supplier Verification, QC & Shipping | SSourcing China',
    description:
      'SSourcing China helps global buyers find reliable suppliers, verify factories, inspect quality, follow production, and coordinate shipping from China.',
  },
  '/services': {
    title: 'China Sourcing Services | Supplier Search, Verification, QC & Shipping | SSourcing China',
    description:
      'Explore sourcing services from supplier search and factory verification to quality inspection, production follow-up, and shipping coordination.',
  },
  '/how-it-works': {
    title: 'How Our China Sourcing Process Works | SSourcing China',
    description:
      'See how SSourcing China moves sourcing projects from inquiry to supplier assessment, production control, inspection, and shipment readiness.',
  },
  '/products-we-source': {
    title: 'Products We Source from China | SSourcing China',
    description:
      'Discover the product categories SSourcing China supports for overseas buyers sourcing from China.',
  },
  '/case-studies': {
    title: 'China Sourcing Case Studies | SSourcing China',
    description:
      'Read practical case study examples showing supplier verification, inspection, production follow-up, and sourcing support for global buyers.',
  },
  '/blog': {
    title: 'China Sourcing Blog | SSourcing China',
    description:
      'Practical sourcing articles for overseas buyers working with suppliers in China.',
  },
  '/contact': {
    title: 'Contact SSourcing China | Get a Free Sourcing Quote',
    description:
      'Contact SSourcing China to discuss supplier sourcing, factory verification, quality inspection, production follow-up, and shipping coordination.',
  },
}

const homeServices = [
  {
    title: 'Supplier sourcing',
    description:
      'We turn your product brief into a focused shortlist of suppliers that match your category, target volume, and business needs.',
    icon: FileSearch,
  },
  {
    title: 'Factory verification',
    description:
      'We help confirm whether the supplier is real, operational, and aligned with the factory profile presented to you.',
    icon: Factory,
  },
  {
    title: 'Quality inspection',
    description:
      'We arrange inspection before shipment so quality issues can be addressed before cargo leaves China.',
    icon: ClipboardCheck,
  },
  {
    title: 'Shipping coordination',
    description:
      'We help align packing, readiness, and shipment handover communication with your buying plan.',
    icon: ShipWheel,
  },
]

const processSteps = [
  'Share your product requirements, target quantity, and delivery expectations.',
  'We identify, compare, and verify suitable suppliers in China.',
  'We support sampling, communication, and production follow-up.',
  'We inspect quality and coordinate the final shipment readiness steps.',
]

const productCategories = [
  'Consumer products and accessories',
  'Packaging and printed materials',
  'Home and kitchen products',
  'Promotional items and branded merchandise',
  'Hardware, tools, and industrial components',
  'Custom OEM and private label products',
]

const problemsWeSolve = [
  'You have many supplier quotes but cannot tell which factory is actually reliable.',
  'You need local verification before paying a new supplier or confirming production.',
  'You worry that sample quality may not match mass production quality later.',
  'You need faster, clearer follow-up from China during production and shipment preparation.',
]

const trustPoints = [
  'China-based follow-up with local factory communication',
  'Clear, practical updates instead of vague promises',
  'Structured support across sourcing, QC, and shipping readiness',
  'Focused help for overseas buyers who need stronger supplier control',
]

const caseStudies = [
  {
    sector: 'Consumer products',
    title: 'New supplier screening for a growing importer',
    challenge:
      'The buyer needed a backup supplier in China but could not assess factory credibility from online listings alone.',
    result:
      'We shortlisted suppliers, verified core details, and helped the buyer compare capability and communication before sampling.',
  },
  {
    sector: 'Private label packaging',
    title: 'Inspection support before shipment',
    challenge:
      'A packaging buyer wanted a final quality checkpoint after previous issues with inconsistent print quality.',
    result:
      'We coordinated inspection, flagged defects before shipment, and helped the buyer address the issues before cargo handover.',
  },
  {
    sector: 'Industrial sourcing',
    title: 'Production follow-up for repeat orders',
    challenge:
      'The buyer needed better visibility into production progress and shipment readiness across repeat purchase cycles.',
    result:
      'We maintained local follow-up with the factory and kept the buyer updated on timing, quality readiness, and shipment coordination.',
  },
]

const faqs = [
  {
    question: 'Do you work with small and medium-sized buyers?',
    answer:
      'Yes. We work with importers, distributors, brand owners, and growing buyers who need clearer sourcing support in China.',
  },
  {
    question: 'Can you verify an existing supplier I already found?',
    answer:
      'Yes. We can verify and assess suppliers you found yourself before you place deposits or confirm production.',
  },
  {
    question: 'Do you provide quality inspection before shipment?',
    answer:
      'Yes. Inspection support is one of our core services and can be arranged as part of the production workflow.',
  },
]

const servicesPageItems = [
  {
    title: 'Supplier sourcing',
    description:
      'We search for suppliers that match your product category, quantity, quality expectations, and business model.',
    icon: SearchCheck,
  },
  {
    title: 'Supplier verification',
    description:
      'We verify supplier identity and operating details so buyers can assess risk earlier.',
    icon: ShieldCheck,
  },
  {
    title: 'Factory audit coordination',
    description:
      'When buyers need a closer look, we support factory checks focused on capability, process, and organization.',
    icon: Factory,
  },
  {
    title: 'Quality inspection',
    description:
      'We coordinate inspections before shipment to help buyers catch issues before goods leave China.',
    icon: ClipboardCheck,
  },
  {
    title: 'Production follow-up',
    description:
      'We follow production progress and help buyers get faster clarity when schedules or status are unclear.',
    icon: PackageCheck,
  },
  {
    title: 'Shipping coordination',
    description:
      'We help coordinate the final handover steps around packing, readiness, and shipment arrangements.',
    icon: ShipWheel,
  },
]

const blogPosts = [
  {
    category: 'Supplier verification',
    title: 'What to check before paying a new supplier in China',
    excerpt:
      'A practical outline of supplier checks buyers often need before deposits, samples, or production commitments.',
  },
  {
    category: 'Quality control',
    title: 'Why pre-shipment inspection matters for import buyers',
    excerpt:
      'Inspection can help buyers catch avoidable defects, quantity issues, and packing problems before cargo leaves China.',
  },
  {
    category: 'Production follow-up',
    title: 'How overseas buyers can get clearer factory updates',
    excerpt:
      'Simple ways to improve communication, timing visibility, and escalation when production progress is not clear from overseas.',
  },
]

function ensureMetaDescription(content) {
  let descriptionTag = document.querySelector('meta[name="description"]')

  if (!descriptionTag) {
    descriptionTag = document.createElement('meta')
    descriptionTag.setAttribute('name', 'description')
    document.head.appendChild(descriptionTag)
  }

  descriptionTag.setAttribute('content', content)
}

function isActiveRoute(pathname, href) {
  if (href === '/') {
    return pathname === '/'
  }

  return pathname.startsWith(href)
}

function SectionHeading({ eyebrow, title, description, center = false }) {
  return (
    <div className={center ? 'mx-auto max-w-3xl text-center' : 'max-w-3xl'}>
      <p className="text-xs font-semibold uppercase tracking-[0.24em] text-slate-500">{eyebrow}</p>
      <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-900 md:text-4xl">{title}</h2>
      {description ? <p className="mt-4 text-base leading-7 text-slate-600">{description}</p> : null}
    </div>
  )
}

function PageIntro({ eyebrow, title, description }) {
  return (
    <section className="border-b border-slate-200 bg-white">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
        <p className="text-xs font-semibold uppercase tracking-[0.24em] text-slate-500">{eyebrow}</p>
        <h1 className="mt-4 max-w-4xl text-4xl font-semibold tracking-tight text-slate-900 md:text-5xl">
          {title}
        </h1>
        <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-600">{description}</p>
      </div>
    </section>
  )
}

function StatCard({ value, label }) {
  return (
    <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
      <div className="text-2xl font-semibold tracking-tight text-slate-900 md:text-3xl">{value}</div>
      <p className="mt-2 text-sm leading-6 text-slate-600">{label}</p>
    </div>
  )
}

function FeatureCard({ title, description, icon: Icon }) {
  return (
    <article className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm md:p-8">
      <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-amber-100 text-amber-800">
        <Icon className="h-6 w-6" />
      </div>
      <h3 className="mt-5 text-xl font-semibold text-slate-900">{title}</h3>
      <p className="mt-3 text-sm leading-7 text-slate-600">{description}</p>
    </article>
  )
}

function CaseStudyCard({ sector, title, challenge, result }) {
  return (
    <article className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm md:p-8">
      <p className="text-xs font-semibold uppercase tracking-[0.24em] text-slate-500">{sector}</p>
      <h3 className="mt-3 text-2xl font-semibold tracking-tight text-slate-900">{title}</h3>
      <p className="mt-4 text-sm leading-7 text-slate-600">
        <span className="font-semibold text-slate-900">Challenge:</span> {challenge}
      </p>
      <p className="mt-3 text-sm leading-7 text-slate-600">
        <span className="font-semibold text-slate-900">Result:</span> {result}
      </p>
    </article>
  )
}

function BlogCard({ category, title, excerpt }) {
  return (
    <article className="flex h-full flex-col rounded-3xl border border-slate-200 bg-white p-6 shadow-sm md:p-8">
      <p className="text-xs font-semibold uppercase tracking-[0.24em] text-slate-500">{category}</p>
      <h3 className="mt-3 text-2xl font-semibold tracking-tight text-slate-900">{title}</h3>
      <p className="mt-4 flex-1 text-sm leading-7 text-slate-600">{excerpt}</p>
      <div className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-slate-900">
        Read article preview
        <ChevronRight className="h-4 w-4" />
      </div>
    </article>
  )
}

function SiteHeader() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const { pathname } = useLocation()

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/80 bg-white/95 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-6 px-4 py-4 sm:px-6 lg:px-8">
        <Link to="/" className="flex items-center gap-3" onClick={() => setMobileOpen(false)}>
          <div className="flex h-11 w-11 items-center justify-center rounded-full bg-slate-900 text-sm font-semibold text-white">
            SC
          </div>
          <div>
            <div className="text-base font-semibold text-slate-900">SSourcing China</div>
            <div className="text-xs uppercase tracking-[0.2em] text-slate-500">China sourcing partner</div>
          </div>
        </Link>

        <nav className="hidden items-center gap-6 lg:flex">
          {navItems.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className={`text-sm font-medium transition-colors ${
                isActiveRoute(pathname, item.to) ? 'text-slate-900' : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden lg:block">
          <Link
            to="/contact#inquiry-form"
            className="inline-flex items-center rounded-full bg-slate-900 px-5 py-3 text-sm font-semibold text-white transition hover:bg-slate-800"
          >
            Get a Free Sourcing Quote
          </Link>
        </div>

        <button
          type="button"
          className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-slate-200 text-slate-700 lg:hidden"
          onClick={() => setMobileOpen((open) => !open)}
          aria-expanded={mobileOpen}
          aria-label="Toggle navigation"
        >
          {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {mobileOpen ? (
        <div className="border-t border-slate-200 bg-white lg:hidden">
          <nav className="mx-auto flex max-w-7xl flex-col gap-1 px-4 py-4 sm:px-6">
            {navItems.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                onClick={() => setMobileOpen(false)}
                className={`rounded-2xl px-4 py-3 text-sm font-medium transition-colors ${
                  isActiveRoute(pathname, item.to)
                    ? 'bg-slate-100 text-slate-900'
                    : 'text-slate-600 hover:bg-slate-50 hover:text-slate-900'
                }`}
              >
                {item.label}
              </Link>
            ))}
            <Link
              to="/contact#inquiry-form"
              onClick={() => setMobileOpen(false)}
              className="mt-3 inline-flex items-center justify-center rounded-full bg-slate-900 px-5 py-3 text-sm font-semibold text-white"
            >
              Get a Free Sourcing Quote
            </Link>
          </nav>
        </div>
      ) : null}
    </header>
  )
}

function SiteFooter() {
  return (
    <footer className="border-t border-slate-200 bg-white">
      <div className="mx-auto grid max-w-7xl gap-12 px-4 py-14 sm:px-6 lg:grid-cols-[1.4fr_1fr_1fr] lg:px-8">
        <div className="space-y-4">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-slate-500">SSourcing China</p>
            <h2 className="mt-3 text-2xl font-semibold tracking-tight text-slate-900">
              Practical sourcing support for global buyers working with China.
            </h2>
          </div>
          <p className="max-w-xl text-sm leading-7 text-slate-600">
            We help importers, wholesalers, distributors, and brand owners move from supplier search to shipped order
            with clearer communication, stronger factory checks, and better quality control.
          </p>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">Quick links</h3>
          <div className="mt-4 grid gap-3 text-sm text-slate-600">
            {navItems.map((item) => (
              <Link key={item.to} to={item.to} className="transition hover:text-slate-900">
                {item.label}
              </Link>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">Contact</h3>
          <div className="mt-4 space-y-4 text-sm text-slate-600">
            <div className="flex items-start gap-3">
              <Mail className="mt-0.5 h-4 w-4 text-slate-900" />
              <a href="mailto:hello@ssourcingchina.com" className="transition hover:text-slate-900">
                hello@ssourcingchina.com
              </a>
            </div>
            <div className="flex items-start gap-3">
              <MapPin className="mt-0.5 h-4 w-4 text-slate-900" />
              <div>Shenzhen • Ningbo • Guangzhou</div>
            </div>
            <p>We typically reply within 1 business day.</p>
          </div>
        </div>
      </div>
    </footer>
  )
}

function InquiryForm({ buttonLabel = 'Get a Free Sourcing Quote' }) {
  const initialValues = useMemo(
    () => ({
      name: '',
      company: '',
      email: '',
      phone: '',
      product_name: '',
      estimated_order_quantity: '',
      target_market: '',
      services_needed: [],
      message: '',
    }),
    [],
  )

  const [values, setValues] = useState(initialValues)
  const [status, setStatus] = useState('idle')
  const [feedback, setFeedback] = useState('')

  const selectedServices = serviceOptions
    .filter((option) => values.services_needed.includes(option.value))
    .map((option) => option.label)

  const handleChange = (event) => {
    const { name, value } = event.target
    setValues((current) => ({ ...current, [name]: value }))
  }

  const toggleService = (serviceValue) => {
    setValues((current) => {
      const exists = current.services_needed.includes(serviceValue)
      return {
        ...current,
        services_needed: exists
          ? current.services_needed.filter((item) => item !== serviceValue)
          : [...current.services_needed, serviceValue],
      }
    })
  }

  const validate = () => {
    if (!values.name.trim()) return 'Please enter your name.'
    if (!values.company.trim()) return 'Please enter your company name.'
    if (!values.email.trim()) return 'Please enter your business email.'
    if (!/^\S+@\S+\.\S+$/.test(values.email)) return 'Please provide a valid email address.'
    if (!values.product_name.trim()) return 'Please describe the product you want to source.'
    if (!values.message.trim()) return 'Please add project details so we can review your request.'
    if (values.message.trim().length < 10) return 'Please add a little more detail to your inquiry.'
    return ''
  }

  const handleSubmit = async (event) => {
    event.preventDefault()

    const validationMessage = validate()
    if (validationMessage) {
      setStatus('error')
      setFeedback(validationMessage)
      return
    }

    setStatus('submitting')
    setFeedback('')

    const payload = {
      name: values.name.trim(),
      company: values.company.trim(),
      email: values.email.trim(),
      phone: values.phone.trim(),
      product_name: values.product_name.trim(),
      estimated_order_quantity: values.estimated_order_quantity.trim(),
      target_market: values.target_market.trim(),
      services_needed: values.services_needed,
      message: values.message.trim(),
    }

    const { data: response, error } = await client.from('SourcingInquiry').insert({ data: payload }).select().single()

    if (error || response?.success === false) {
      const message = Array.isArray(response?.errors) && response.errors.length > 0
        ? response.errors.join(', ')
        : error?.message || 'Unable to send your inquiry right now.'

      setStatus('error')
      setFeedback(message)
      return
    }

    setStatus('success')
    setFeedback('Thank you. Your sourcing inquiry has been received. We will review it and reply shortly.')
    setValues(initialValues)
  }

  return (
    <section className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm md:p-8 lg:p-10">
      <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
        <div className="space-y-6">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-slate-500">Inquiry form</p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-900 md:text-4xl">
              Tell us what you need to source
            </h2>
            <p className="mt-4 max-w-xl text-base leading-7 text-slate-600">
              Share your product details, target quantity, and the support you need. We will review your request and
              reply with the next steps.
            </p>
          </div>

          <div className="rounded-3xl bg-slate-950 p-6 text-white">
            <p className="text-sm font-semibold text-slate-100">What to include</p>
            <ul className="mt-4 space-y-3 text-sm leading-6 text-slate-300">
              <li>Product name, material, specifications, or reference details</li>
              <li>Estimated order quantity or annual purchase volume</li>
              <li>Target market, compliance needs, and delivery expectations</li>
              <li>Whether you need sourcing, verification, inspection, or shipping support</li>
            </ul>
            <div className="mt-6 rounded-2xl border border-white/10 bg-white/5 p-4 text-sm text-slate-200">
              Selected services: {selectedServices.length > 0 ? selectedServices.join(', ') : 'None yet'}
            </div>
          </div>
        </div>

        <form className="space-y-5" onSubmit={handleSubmit} aria-busy={status === 'submitting'}>
          <div className="grid gap-5 md:grid-cols-2">
            <label className="grid gap-2 text-sm font-medium text-slate-700">
              Name
              <input
                name="name"
                value={values.name}
                onChange={handleChange}
                className="rounded-2xl border border-slate-300 bg-white px-4 py-3 text-slate-900 outline-none transition focus:border-slate-900"
                placeholder="Your full name"
              />
            </label>
            <label className="grid gap-2 text-sm font-medium text-slate-700">
              Company
              <input
                name="company"
                value={values.company}
                onChange={handleChange}
                className="rounded-2xl border border-slate-300 bg-white px-4 py-3 text-slate-900 outline-none transition focus:border-slate-900"
                placeholder="Company name"
              />
            </label>
            <label className="grid gap-2 text-sm font-medium text-slate-700">
              Business email
              <input
                name="email"
                type="email"
                value={values.email}
                onChange={handleChange}
                className="rounded-2xl border border-slate-300 bg-white px-4 py-3 text-slate-900 outline-none transition focus:border-slate-900"
                placeholder="you@company.com"
              />
            </label>
            <label className="grid gap-2 text-sm font-medium text-slate-700">
              Phone / WhatsApp
              <input
                name="phone"
                value={values.phone}
                onChange={handleChange}
                className="rounded-2xl border border-slate-300 bg-white px-4 py-3 text-slate-900 outline-none transition focus:border-slate-900"
                placeholder="Optional"
              />
            </label>
            <label className="grid gap-2 text-sm font-medium text-slate-700">
              Product to source
              <input
                name="product_name"
                value={values.product_name}
                onChange={handleChange}
                className="rounded-2xl border border-slate-300 bg-white px-4 py-3 text-slate-900 outline-none transition focus:border-slate-900"
                placeholder="Product name or category"
              />
            </label>
            <label className="grid gap-2 text-sm font-medium text-slate-700">
              Estimated order quantity
              <input
                name="estimated_order_quantity"
                value={values.estimated_order_quantity}
                onChange={handleChange}
                className="rounded-2xl border border-slate-300 bg-white px-4 py-3 text-slate-900 outline-none transition focus:border-slate-900"
                placeholder="Example: 5,000 units"
              />
            </label>
          </div>

          <label className="grid gap-2 text-sm font-medium text-slate-700">
            Target market
            <input
              name="target_market"
              value={values.target_market}
              onChange={handleChange}
              className="rounded-2xl border border-slate-300 bg-white px-4 py-3 text-slate-900 outline-none transition focus:border-slate-900"
              placeholder="Example: USA, UK, EU"
            />
          </label>

          <fieldset className="grid gap-3 rounded-3xl border border-slate-200 bg-slate-50 p-5">
            <legend className="px-2 text-sm font-medium text-slate-700">Services needed</legend>
            <div className="grid gap-3 md:grid-cols-2">
              {serviceOptions.map((option) => {
                const checked = values.services_needed.includes(option.value)
                return (
                  <label
                    key={option.value}
                    className={`flex items-center gap-3 rounded-2xl border px-4 py-3 text-sm transition ${
                      checked
                        ? 'border-slate-900 bg-white text-slate-900'
                        : 'border-slate-200 bg-white text-slate-600'
                    }`}
                  >
                    <input
                      type="checkbox"
                      checked={checked}
                      onChange={() => toggleService(option.value)}
                      className="h-4 w-4 rounded border-slate-300"
                    />
                    <span>{option.label}</span>
                  </label>
                )
              })}
            </div>
          </fieldset>

          <label className="grid gap-2 text-sm font-medium text-slate-700">
            Project details
            <textarea
              name="message"
              rows="6"
              value={values.message}
              onChange={handleChange}
              className="rounded-3xl border border-slate-300 bg-white px-4 py-3 text-slate-900 outline-none transition focus:border-slate-900"
              placeholder="Tell us about your product, quality expectations, target price, delivery timeline, or current sourcing challenges."
            />
          </label>

          {feedback ? (
            <div
              className={`rounded-2xl border px-4 py-3 text-sm leading-6 ${
                status === 'success'
                  ? 'border-emerald-200 bg-emerald-50 text-emerald-800'
                  : 'border-rose-200 bg-rose-50 text-rose-800'
              }`}
              role={status === 'success' ? 'status' : 'alert'}
            >
              {status === 'success' ? <CheckCircle2 className="mb-2 h-4 w-4" /> : null}
              {feedback}
            </div>
          ) : null}

          <button
            type="submit"
            disabled={status === 'submitting'}
            className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-slate-900 px-6 py-4 text-sm font-semibold text-white transition hover:bg-slate-800 disabled:cursor-not-allowed disabled:bg-slate-500"
          >
            {status === 'submitting' ? 'Sending inquiry...' : buttonLabel}
            <ArrowRight className="h-4 w-4" />
          </button>
        </form>
      </div>
    </section>
  )
}

function HomePage() {
  return (
    <div>
      <section className="overflow-hidden border-b border-slate-200 bg-white">
        <div className="mx-auto grid max-w-7xl gap-12 px-4 py-16 sm:px-6 lg:grid-cols-[1.05fr_0.95fr] lg:px-8 lg:py-24">
          <div className="max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-slate-500">China-based sourcing support</p>
            <h1 id="home-hero-title" className="mt-4 text-4xl font-semibold tracking-tight text-slate-900 md:text-6xl">
              China Sourcing Agent for Global Buyers
            </h1>
            <p id="home-hero-desc" className="mt-6 text-lg leading-8 text-slate-600">
              SSourcing China helps overseas buyers find reliable suppliers, verify factories, inspect quality, follow
              production, and coordinate shipping with practical support on the ground in China.
            </p>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <Link
                to="/contact#inquiry-form"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-slate-900 px-6 py-4 text-sm font-semibold text-white transition hover:bg-slate-800"
              >
                Get a Free Sourcing Quote
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                to="/how-it-works"
                className="inline-flex items-center justify-center rounded-full border border-slate-300 bg-white px-6 py-4 text-sm font-semibold text-slate-900 transition hover:border-slate-900"
              >
                See how it works
              </Link>
            </div>
            <div className="mt-10 grid gap-4 sm:grid-cols-3">
              <StatCard value="Supplier checks" label="Verify who you are working with before deposits and production." />
              <StatCard value="QC control" label="Inspect goods before shipment instead of finding defects after arrival." />
              <StatCard value="Shipping support" label="Coordinate the final steps from approved goods to shipment readiness." />
            </div>
          </div>

          <article className="overflow-hidden rounded-[2rem] border border-slate-200 bg-slate-950 p-5 text-white shadow-sm">
            <img
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              alt="Factory inspection in China"
              className="h-72 w-full rounded-[1.5rem] object-cover"
              data-strk-img-id="home-hero-inspection-7b3fa1"
              data-strk-img="[home-hero-desc] [home-hero-title]"
              data-strk-img-ratio="4x3"
              data-strk-img-width="900"
            />
            <div className="mt-5 grid gap-4 sm:grid-cols-2">
              <div className="rounded-3xl border border-white/10 bg-white/5 p-4">
                <div className="text-sm font-semibold text-white">Factory checks</div>
                <p className="mt-2 text-sm leading-6 text-slate-300">Confirm who you are dealing with before deposits and production.</p>
              </div>
              <div className="rounded-3xl border border-white/10 bg-white/5 p-4">
                <div className="text-sm font-semibold text-white">On-the-ground updates</div>
                <p className="mt-2 text-sm leading-6 text-slate-300">Stay informed on sampling, production, inspection, and shipping readiness.</p>
              </div>
            </div>
          </article>
        </div>
      </section>

      <section className="bg-slate-50 py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Services"
            title="What SSourcing China helps buyers do"
            description="From first supplier search to shipment readiness, we focus on the practical checkpoints that buyers need when working with China suppliers."
          />
          <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {homeServices.map((service) => (
              <FeatureCard key={service.title} {...service} />
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-16 md:py-24">
        <div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-[0.95fr_1.05fr] lg:px-8">
          <div>
            <SectionHeading
              eyebrow="How it works"
              title="A sourcing process designed to reduce surprises"
              description="We keep the workflow clear so you know what happens from inquiry to supplier assessment, production control, and shipping coordination."
            />
            <Link to="/how-it-works" className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-slate-900">
              View the full sourcing process
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          <div className="grid gap-4">
            {processSteps.map((step, index) => (
              <div key={step} className="flex gap-4 rounded-3xl border border-slate-200 bg-slate-50 p-6">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-slate-900 text-sm font-semibold text-white">
                  {index + 1}
                </div>
                <p className="pt-2 text-base leading-7 text-slate-700">{step}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-slate-50 py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Products we source"
            title="Product categories we regularly support"
            description="We work across a wide range of categories where buyers need supplier identification, verification, quality control, and factory follow-up."
          />
          <div className="mt-12 grid gap-6 lg:grid-cols-[1fr_1fr]">
            <div className="grid gap-4 sm:grid-cols-2">
              {productCategories.map((category) => (
                <div key={category} className="flex items-start gap-3 rounded-3xl border border-slate-200 bg-white p-5 text-sm text-slate-700 shadow-sm">
                  <Boxes className="mt-0.5 h-5 w-5 text-amber-700" />
                  <span>{category}</span>
                </div>
              ))}
            </div>
            <div className="grid gap-5 sm:grid-cols-2">
              <article className="rounded-[2rem] border border-slate-200 bg-white p-5 shadow-sm">
                <h3 id="home-visual-qc-title" className="text-lg font-semibold text-slate-900">Quality inspection</h3>
                <p id="home-visual-qc-desc" className="mt-2 text-sm leading-6 text-slate-600">
                  Inspection support before shipment to catch issues while goods are still in China.
                </p>
                <img
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  alt="Quality inspection in a factory"
                  className="mt-5 h-56 w-full rounded-[1.5rem] object-cover"
                  data-strk-img-id="home-qc-visual-a1d93e"
                  data-strk-img="[home-visual-qc-desc] [home-visual-qc-title]"
                  data-strk-img-ratio="4x3"
                  data-strk-img-width="700"
                />
              </article>
              <article className="rounded-[2rem] border border-slate-200 bg-white p-5 shadow-sm">
                <h3 id="home-visual-ship-title" className="text-lg font-semibold text-slate-900">Shipping coordination</h3>
                <p id="home-visual-ship-desc" className="mt-2 text-sm leading-6 text-slate-600">
                  Packing, handover, and export preparation with practical shipment coordination support.
                </p>
                <img
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  alt="Container shipping coordination"
                  className="mt-5 h-56 w-full rounded-[1.5rem] object-cover"
                  data-strk-img-id="home-ship-visual-c82a0f"
                  data-strk-img="[home-visual-ship-desc] [home-visual-ship-title]"
                  data-strk-img-ratio="4x3"
                  data-strk-img-width="700"
                />
              </article>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-16 md:py-24">
        <div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
          <div>
            <SectionHeading
              eyebrow="Problems we solve"
              title="Common sourcing concerns that buyers ask us to help with"
              description="Our role is to give buyers more confidence and clarity when the supplier base is unfamiliar or production is hard to monitor from overseas."
            />
            <div className="mt-8 grid gap-4">
              {problemsWeSolve.map((problem) => (
                <div key={problem} className="rounded-3xl border border-slate-200 bg-slate-50 p-6 text-base leading-7 text-slate-700">
                  {problem}
                </div>
              ))}
            </div>
          </div>
          <div>
            <SectionHeading
              eyebrow="Trust points"
              title="Why overseas buyers work with SSourcing China"
              description="We focus on practical communication, real supplier checks, and better control over quality and delivery steps."
            />
            <div className="mt-8 grid gap-4">
              {trustPoints.map((point) => (
                <div key={point} className="flex gap-4 rounded-3xl border border-slate-200 bg-slate-50 p-6">
                  <BadgeCheck className="mt-0.5 h-5 w-5 text-emerald-700" />
                  <p className="text-base leading-7 text-slate-700">{point}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-slate-950 py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Case studies"
            title="Examples of sourcing support in action"
            description="A few practical examples of how structured sourcing support can reduce buyer risk and improve project clarity."
          />
          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {caseStudies.map((study) => (
              <CaseStudyCard key={study.title} {...study} />
            ))}
          </div>
        </div>
      </section>

      <section className="bg-slate-50 py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="FAQ"
            title="Frequently asked questions"
            description="Short answers to common questions from overseas buyers considering sourcing support in China."
            center
          />
          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {faqs.map((faq) => (
              <article key={faq.question} className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm md:p-8">
                <div className="flex items-start gap-3">
                  <CircleHelp className="mt-1 h-5 w-5 text-slate-900" />
                  <div>
                    <h3 className="text-lg font-semibold text-slate-900">{faq.question}</h3>
                    <p className="mt-3 text-sm leading-7 text-slate-600">{faq.answer}</p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-16 md:py-24" id="inquiry-form">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <InquiryForm />
        </div>
      </section>
    </div>
  )
}

function ServicesPage() {
  return (
    <div>
      <PageIntro
        eyebrow="Services"
        title="Sourcing support services for buyers working with China"
        description="Our service scope covers the main checkpoints buyers need when sourcing from China: supplier search, verification, factory assessment, inspection, production follow-up, and shipping coordination."
      />

      <section className="bg-slate-50 py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Core services"
            title="Support across the full sourcing workflow"
            description="Buyers can use one service or combine several, depending on how much sourcing groundwork has already been done."
          />
          <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {servicesPageItems.map((service) => (
              <FeatureCard key={service.title} {...service} />
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

function HowItWorksPage() {
  const steps = [
    {
      title: '1. Requirement review',
      description:
        'We review your product brief, specifications, target quantity, market requirements, and sourcing priorities before recommending next steps.',
    },
    {
      title: '2. Supplier search and verification',
      description:
        'We identify suitable suppliers, compare options, and verify the core supplier details that matter before sampling or deposit decisions.',
    },
    {
      title: '3. Sampling and commercial alignment',
      description:
        'We support sample coordination and feedback loops so the project is clearer before mass production begins.',
    },
    {
      title: '4. Production follow-up',
      description:
        'We follow production progress and keep communication moving when buyers need better visibility into timing or manufacturing status.',
    },
    {
      title: '5. Quality inspection',
      description:
        'We arrange inspection before shipment to help detect issues earlier and avoid preventable surprises after the goods leave China.',
    },
    {
      title: '6. Shipping coordination',
      description:
        'We support the final coordination around packing, readiness, and shipment handover so the buyer has a clearer finish to the order cycle.',
    },
  ]

  return (
    <div>
      <PageIntro
        eyebrow="How it works"
        title="A practical sourcing process for overseas buyers"
        description="We structure the sourcing workflow so each stage is clearer: supplier identification, verification, sampling, production follow-up, inspection, and shipment coordination."
      />

      <section className="bg-slate-50 py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Process overview"
            title="From inquiry to shipped order"
            description="The exact scope changes by project, but the general workflow below shows how we support buyers across a typical sourcing engagement."
          />
          <div className="mt-12 grid gap-6 lg:grid-cols-2">
            {steps.map((step, index) => (
              <article key={step.title} className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm md:p-8">
                <div className="flex items-center gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-slate-900 text-sm font-semibold text-white">
                    {index + 1}
                  </div>
                  <h2 className="text-2xl font-semibold tracking-tight text-slate-900">{step.title}</h2>
                </div>
                <p className="mt-5 text-base leading-7 text-slate-600">{step.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

function ProductsPage() {
  const groups = [
    {
      title: 'Consumer goods and retail products',
      items: ['Accessories and daily-use products', 'Home and kitchen items', 'Seasonal or promotional merchandise'],
    },
    {
      title: 'Packaging and printed materials',
      items: ['Custom boxes and inserts', 'Labels, manuals, and paper components', 'Branded packaging for private label projects'],
    },
    {
      title: 'Industrial and hardware items',
      items: ['Basic hardware and tool-related products', 'Components for repeat import programs', 'Factory-made parts requiring closer supplier screening'],
    },
    {
      title: 'Custom OEM and private label projects',
      items: ['Buyer-developed products', 'Products requiring specification matching', 'Projects needing more production follow-up and QC checkpoints'],
    },
  ]

  return (
    <div>
      <PageIntro
        eyebrow="Products we source"
        title="Product categories we help buyers source from China"
        description="We support a broad range of manufactured products and product categories, especially where overseas buyers need better supplier selection, clearer communication, and stronger quality oversight."
      />

      <section className="bg-slate-50 py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Category overview"
            title="Examples of product categories we support"
            description="The categories below are examples rather than an exhaustive list. If your product requires sourcing support in China, we can review it and advise on fit."
          />
          <div className="mt-12 grid gap-6 lg:grid-cols-2">
            {groups.map((group) => (
              <article key={group.title} className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm md:p-8">
                <h2 className="text-2xl font-semibold tracking-tight text-slate-900">{group.title}</h2>
                <ul className="mt-5 space-y-3 text-sm leading-7 text-slate-600">
                  {group.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

function CaseStudiesPage() {
  return (
    <div>
      <PageIntro
        eyebrow="Case studies"
        title="Examples of sourcing support for overseas buyers"
        description="These case study summaries show the type of buyer situations we support. They focus on practical sourcing problems rather than exaggerated success claims."
      />

      <section className="bg-slate-50 py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Selected cases"
            title="Sourcing, verification, QC, and follow-up examples"
            description="Each project is different, but the cases below reflect common buyer needs when working with suppliers in China."
          />
          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {caseStudies.map((study) => (
              <CaseStudyCard key={study.title} {...study} />
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

function BlogPage() {
  return (
    <div>
      <PageIntro
        eyebrow="Blog"
        title="Practical sourcing articles for buyers working with China"
        description="Our blog section is built around practical buyer questions: supplier verification, quality control, production follow-up, and shipping preparation."
      />

      <section className="bg-slate-50 py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Latest topics"
            title="Useful reading for sourcing and import teams"
            description="Preview topics that help buyers understand common sourcing risks and how to manage them more effectively."
          />
          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {blogPosts.map((post) => (
              <BlogCard key={post.title} {...post} />
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

function ContactPage() {
  return (
    <div>
      <PageIntro
        eyebrow="Contact"
        title="Send your sourcing requirements"
        description="If you are looking for supplier search, verification, quality inspection, production follow-up, or shipping coordination in China, send us your requirements and we will review your inquiry."
      />

      <section className="bg-slate-50 py-16 md:py-24">
        <div className="mx-auto grid max-w-7xl gap-8 px-4 sm:px-6 lg:grid-cols-[0.34fr_0.66fr] lg:px-8">
          <aside className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm md:p-8">
            <h2 className="text-2xl font-semibold tracking-tight text-slate-900">Contact details</h2>
            <div className="mt-6 space-y-5 text-sm leading-7 text-slate-600">
              <div className="flex items-start gap-3">
                <Mail className="mt-1 h-5 w-5 text-slate-900" />
                <div>
                  <div className="font-medium text-slate-900">Email</div>
                  <a href="mailto:hello@ssourcingchina.com" className="transition hover:text-slate-900">
                    hello@ssourcingchina.com
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <MapPin className="mt-1 h-5 w-5 text-slate-900" />
                <div>
                  <div className="font-medium text-slate-900">China offices</div>
                  <div>Shenzhen • Ningbo • Guangzhou</div>
                </div>
              </div>
              <p>We typically reply within 1 business day.</p>
            </div>
          </aside>

          <div id="inquiry-form">
            <InquiryForm buttonLabel="Submit inquiry" />
          </div>
        </div>
      </section>
    </div>
  )
}

function Layout() {
  const appRef = useRef(null)
  const { pathname } = useLocation()
  const navigate = useNavigate()

  useEffect(() => {
    const currentMeta = pageMeta[pathname] || pageMeta['/']
    document.title = currentMeta.title
    ensureMetaDescription(currentMeta.description)
    window.scrollTo(0, 0)
  }, [pathname])

  useEffect(() => {
    window.__STRIKINGLY_PREVIEW_NAVIGATE__ = (path, options = {}) => navigate(path, options)
    return () => {
      delete window.__STRIKINGLY_PREVIEW_NAVIGATE__
    }
  }, [navigate])

  useEffect(() => {
    let disconnect = () => {}
    const frameId = window.requestAnimationFrame(() => {
      disconnect = ImageHelper.loadImages(strkImgConfig, appRef.current)
    })

    return () => {
      window.cancelAnimationFrame(frameId)
      disconnect()
    }
  }, [pathname])

  return (
    <div ref={appRef} className="min-h-screen bg-slate-50 text-slate-900">
      <SiteHeader />
      <main>
        <Outlet />
      </main>
      <SiteFooter />
    </div>
  )
}

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/how-it-works" element={<HowItWorksPage />} />
        <Route path="/products-we-source" element={<ProductsPage />} />
        <Route path="/case-studies" element={<CaseStudiesPage />} />
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Route>
    </Routes>
  )
}

export default App
