import { useEffect, useMemo, useRef, useState } from 'react'
import { BrowserRouter, Link, NavLink, Route, Routes, useLocation, useNavigate } from 'react-router-dom'
import { ArrowRight, Boxes, CheckCircle2, ClipboardCheck, Factory, FileSearch, Mail, MapPin, Menu, Phone, SearchCheck, ShieldCheck, Ship, X } from 'lucide-react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from './strk-img-config.json'
import { createSourcingInquiry } from './api/inquiries.js'
import './App.css'

const placeholder = 'data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 1 1%22/%3E'

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
  { icon: SearchCheck, title: 'Supplier search & shortlisting', text: 'Identify suitable China suppliers, compare capabilities, and prepare a practical shortlist for your review.' },
  { icon: ShieldCheck, title: 'Factory verification', text: 'Check business credentials, production facilities, export experience, and basic operational risks before you commit.' },
  { icon: ClipboardCheck, title: 'Quality inspection', text: 'Coordinate pre-shipment, during-production, and loading inspections based on agreed specifications and samples.' },
  { icon: Factory, title: 'Production follow-up', text: 'Track milestones, samples, packaging, labeling, and delivery schedules to keep your order moving.' },
  { icon: Ship, title: 'Shipping coordination', text: 'Support cartons, documents, forwarder handoff, consolidation, and shipment status coordination.' },
  { icon: FileSearch, title: 'Quotation comparison', text: 'Compare price, MOQ, lead time, payment terms, tooling, and hidden cost factors in a buyer-friendly format.' },
]

const processSteps = [
  ['01', 'Send your requirements', 'Share product details, target market, volume, standards, packaging needs, and shipment destination.'],
  ['02', 'Supplier research', 'We screen factories and trading companies, then prepare a qualified sourcing shortlist.'],
  ['03', 'Sampling & negotiation', 'We coordinate samples, clarify specifications, and support practical commercial discussion.'],
  ['04', 'Order follow-up', 'We monitor production, packaging, labeling, and schedule updates with the supplier.'],
  ['05', 'QC & shipping handoff', 'We coordinate inspection, reports, loading checks, export documents, and freight handoff.'],
]

const productCategories = [
  'Consumer electronics accessories',
  'Home and kitchen products',
  'Packaging and printed products',
  'Promotional gifts and merchandise',
  'Industrial components and hardware',
  'Pet products and outdoor goods',
  'Beauty, wellness, and personal care',
  'Furniture, fixtures, and store displays',
]

const problems = [
  'Unclear supplier background or limited export experience',
  'Specifications lost in translation during quotation or sampling',
  'Price comparisons that ignore tooling, packaging, or freight impact',
  'Production delays discovered too late',
  'Quality issues found only after goods arrive overseas',
  'Fragmented communication between factory, buyer, and forwarder',
]

const trustPoints = [
  { value: 'China-based', label: 'Local supplier communication and factory visits' },
  { value: 'B2B focused', label: 'Built for importers, brands, wholesalers, and distributors' },
  { value: 'Process led', label: 'Clear milestones from RFQ to shipment coordination' },
  { value: 'Practical reports', label: 'Factory checks, photos, QC notes, and next actions' },
]

const caseStudies = [
  { title: 'Packaging supplier qualification for a European retailer', challenge: 'The buyer needed FSC-capable packaging suppliers with stable export documentation and strict color control.', result: 'We shortlisted factories, coordinated samples, clarified print tolerances, and supported the first shipment handoff.' },
  { title: 'Pre-shipment QC for homeware order consolidation', challenge: 'Multiple SKUs from two suppliers had to meet packaging, labeling, and carton mark requirements before loading.', result: 'Inspection findings helped correct labeling issues before shipment and reduced avoidable receiving problems.' },
  { title: 'Factory verification for industrial component sourcing', challenge: 'An overseas buyer wanted to confirm production capability before placing a trial order with a new supplier.', result: 'We checked licenses, workshop conditions, sample capability, and communication reliability for buyer review.' },
]

const faqs = [
  ['Do you work with small and mid-sized buyers?', 'Yes. We support importers, wholesalers, ecommerce brands, and distributors that need a clearer sourcing process in China.'],
  ['Can you find factories instead of trading companies?', 'When factory-direct sourcing is practical, we prioritize manufacturers and verify their production capabilities before recommending them.'],
  ['Do you inspect every order?', 'Inspection scope depends on the product, order value, and risk level. We recommend a suitable QC plan before production or shipment.'],
  ['Can you handle shipping?', 'We coordinate shipping information, carton data, documents, consolidation, and forwarder handoff. Freight services can be arranged with your forwarder or a partner.'],
  ['What details should I send for a quote?', 'Please share product photos, specifications, quantity, target price if available, packaging needs, destination country, and expected timeline.'],
]

const serviceOptions = [
  ['supplier_search', 'Supplier search'],
  ['factory_verification', 'Factory verification'],
  ['qc_inspection', 'QC inspection'],
  ['production_follow_up', 'Production follow-up'],
  ['shipping_coordination', 'Shipping coordination'],
]

const blogPosts = [
  ['How to evaluate a new China supplier before ordering', 'A practical checklist for checking licenses, export experience, production fit, samples, and communication quality.'],
  ['When should you schedule quality inspection?', 'Understand pre-production, during-production, pre-shipment, and loading checks, and when each one makes sense.'],
  ['What importers often miss when comparing quotations', 'MOQ, tooling, packaging, certification, inland freight, and payment terms can change the real landed cost.'],
]

function PreviewNavigateBridge() {
  const navigate = useNavigate()
  useEffect(() => {
    window.__STRIKINGLY_PREVIEW_NAVIGATE__ = navigate
    return () => delete window.__STRIKINGLY_PREVIEW_NAVIGATE__
  }, [navigate])
  return null
}

function ScrollAndTitle() {
  const location = useLocation()
  const titles = useMemo(() => ({
    '/': 'China Sourcing Agent | Supplier Verification, QC & Shipping | SSourcing China',
    '/services': 'Services | SSourcing China',
    '/how-it-works': 'How It Works | SSourcing China',
    '/products': 'Products We Source | SSourcing China',
    '/case-studies': 'Case Studies | SSourcing China',
    '/blog': 'Blog | SSourcing China',
    '/contact': 'Contact | SSourcing China',
  }), [])

  useEffect(() => {
    document.title = titles[location.pathname] || titles['/']
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [location.pathname, titles])
  return null
}

function ImageLoader({ children }) {
  const containerRef = useRef(null)
  const { pathname } = useLocation()
  useEffect(() => {
    let cleanup = () => {}
    const frameId = window.requestAnimationFrame(() => {
      cleanup = ImageHelper.loadImages(strkImgConfig, containerRef.current)
    })
    return () => {
      window.cancelAnimationFrame(frameId)
      cleanup()
    }
  }, [pathname])
  return <div ref={containerRef}>{children}</div>
}

function Header() {
  const [open, setOpen] = useState(false)
  const close = () => setOpen(false)
  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/95 text-slate-950 shadow-sm backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <Link to="/" onClick={close} className="flex items-center gap-3 text-slate-950">
          <span className="flex h-10 w-10 items-center justify-center rounded-2xl bg-blue-700 text-sm font-bold text-white">SS</span>
          <span><span className="block text-lg font-semibold tracking-tight">SSourcing China</span><span className="block text-xs font-medium text-slate-500">Sourcing · QC · Shipping</span></span>
        </Link>
        <nav className="hidden items-center gap-1 lg:flex" aria-label="Main navigation">
          {navItems.map((item) => (
            <NavLink key={item.path} to={item.path} className={({ isActive }) => `rounded-full px-3 py-2 text-sm font-semibold transition ${isActive ? 'bg-blue-50 text-blue-700' : 'text-slate-700 hover:bg-slate-100 hover:text-slate-950'}`}>{item.label}</NavLink>
          ))}
        </nav>
        <Link to="/contact" className="hidden rounded-full bg-blue-700 px-5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-blue-800 lg:inline-flex">Get a Free Sourcing Quote</Link>
        <button type="button" aria-label="Toggle navigation" onClick={() => setOpen((value) => !value)} className="inline-flex rounded-full border border-slate-200 bg-white p-2 text-slate-900 lg:hidden">
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>
      {open && <nav className="border-t border-slate-200 bg-white px-4 py-4 lg:hidden" aria-label="Mobile navigation"><div className="mx-auto grid max-w-7xl gap-2">{navItems.map((item) => <NavLink key={item.path} to={item.path} onClick={close} className="rounded-2xl px-4 py-3 font-semibold text-slate-800 hover:bg-slate-100">{item.label}</NavLink>)}</div></nav>}
    </header>
  )
}

function Footer() {
  return (
    <footer className="bg-slate-950 text-white">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-12 sm:px-6 md:grid-cols-[1.2fr_0.8fr_0.8fr] lg:px-8">
        <div><h2 className="text-2xl font-semibold">SSourcing China</h2><p className="mt-4 max-w-md text-slate-300">A China-based sourcing agent helping overseas buyers verify suppliers, manage production details, inspect quality, and coordinate shipping handoff.</p></div>
        <div><h3 className="font-semibold text-white">Pages</h3><div className="mt-4 grid gap-2 text-sm text-slate-300">{navItems.slice(1).map((item) => <Link key={item.path} to={item.path} className="hover:text-white">{item.label}</Link>)}</div></div>
        <div><h3 className="font-semibold text-white">Start a project</h3><p className="mt-4 text-sm text-slate-300">Send specifications, quantity, target market, and your timeline. We will review and respond with next steps.</p><Link to="/contact" className="mt-5 inline-flex items-center gap-2 rounded-full bg-blue-600 px-5 py-3 text-sm font-semibold text-white hover:bg-blue-500">Get a Free Sourcing Quote <ArrowRight className="h-4 w-4" /></Link></div>
      </div>
    </footer>
  )
}

function SectionIntro({ eyebrow, title, text, centered = false, inverse = false }) {
  const eyebrowClass = inverse ? 'text-blue-300' : 'text-blue-700'
  const titleClass = inverse ? 'text-white' : 'text-slate-950'
  const textClass = inverse ? 'text-slate-300' : 'text-slate-600'

  return <div className={centered ? 'mx-auto max-w-3xl text-center' : 'max-w-3xl'}><p className={`text-xs font-semibold uppercase tracking-[0.18em] ${eyebrowClass}`}>{eyebrow}</p><h2 className={`mt-3 text-3xl font-semibold tracking-tight md:text-4xl ${titleClass}`}>{title}</h2>{text && <p className={`mt-4 text-base leading-7 md:text-lg ${textClass}`}>{text}</p>}</div>
}

function Hero() {
  return (
    <section className="bg-white text-slate-950">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 py-16 sm:px-6 md:py-24 lg:grid-cols-[1.05fr_0.95fr] lg:px-8">
        <div>
          <p id="hero-eyebrow" className="text-xs font-semibold uppercase tracking-[0.18em] text-blue-700">China-based sourcing support for overseas buyers</p>
          <h1 id="hero-title" className="mt-5 text-4xl font-semibold tracking-tight text-slate-950 md:text-6xl">China Sourcing Agent for Global Buyers</h1>
          <p id="hero-subtitle" className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">Find reliable suppliers, verify factories, inspect quality, follow production, and coordinate shipping with a practical sourcing partner on the ground in China.</p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row"><Link to="/contact" className="inline-flex items-center justify-center gap-2 rounded-full bg-blue-700 px-6 py-3 font-semibold text-white shadow-sm hover:bg-blue-800">Get a Free Sourcing Quote <ArrowRight className="h-5 w-5" /></Link><Link to="/how-it-works" className="inline-flex items-center justify-center rounded-full border border-slate-300 bg-white px-6 py-3 font-semibold text-slate-900 hover:bg-slate-50">See how it works</Link></div>
          <dl className="mt-10 grid gap-4 sm:grid-cols-3">{trustPoints.slice(0, 3).map((point) => <div key={point.value} className="rounded-3xl border border-slate-200 bg-slate-50 p-5 text-slate-950"><dt className="font-semibold text-blue-700">{point.value}</dt><dd className="mt-2 text-sm leading-6 text-slate-600">{point.label}</dd></div>)}</dl>
        </div>
        <div className="relative overflow-hidden rounded-[2rem] border border-slate-200 bg-slate-100 shadow-xl">
          <img alt="Factory quality inspection in China" className="h-[420px] w-full object-cover" data-strk-img-id="hero-factory-qc-1a2b3c" data-strk-img="[hero-subtitle] [hero-title] [hero-eyebrow]" data-strk-img-ratio="4x3" data-strk-img-width="900" src={placeholder} />
          <div className="absolute inset-x-5 bottom-5 rounded-3xl bg-white/95 p-5 text-slate-950 shadow-lg backdrop-blur"><p className="text-sm font-semibold text-slate-900">From RFQ to shipment handoff</p><div className="mt-3 grid grid-cols-3 gap-3 text-center text-xs font-semibold"><span className="rounded-2xl bg-blue-50 px-2 py-2 text-blue-700">Supplier</span><span className="rounded-2xl bg-emerald-50 px-2 py-2 text-emerald-700">QC</span><span className="rounded-2xl bg-slate-100 px-2 py-2 text-slate-700">Shipping</span></div></div>
        </div>
      </div>
    </section>
  )
}

function ServicesSection() {
  return <section className="bg-slate-50 py-16 text-slate-950 md:py-24"><div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"><SectionIntro eyebrow="Services" title="Practical sourcing support across the China supply chain" text="Choose the full sourcing process or specific support where your team needs local help." /><div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">{services.map((service) => { const Icon = service.icon; return <article key={service.title} className="rounded-3xl border border-slate-200 bg-white p-6 text-slate-950 shadow-sm"><div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-50 text-blue-700"><Icon className="h-6 w-6" /></div><h3 className="mt-5 text-xl font-semibold text-slate-950">{service.title}</h3><p className="mt-3 leading-7 text-slate-600">{service.text}</p></article> })}</div></div></section>
}

function ProcessSection() {
  return <section className="bg-white py-16 text-slate-950 md:py-24"><div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-[0.8fr_1.2fr] lg:px-8"><div><SectionIntro eyebrow="How it works" title="A clear process for sourcing with fewer surprises" text="We keep each step documented, with decisions and next actions visible to the buyer." /><Link to="/contact" className="mt-8 inline-flex items-center gap-2 rounded-full bg-blue-700 px-6 py-3 font-semibold text-white hover:bg-blue-800">Start an inquiry <ArrowRight className="h-5 w-5" /></Link></div><div className="grid gap-4">{processSteps.map(([number, title, text]) => <div key={number} className="grid gap-4 rounded-3xl border border-slate-200 bg-slate-50 p-5 text-slate-950 md:grid-cols-[4rem_1fr]"><div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-slate-950 text-sm font-bold text-white">{number}</div><div><h3 className="text-lg font-semibold text-slate-950">{title}</h3><p className="mt-2 leading-7 text-slate-600">{text}</p></div></div>)}</div></div></section>
}

function ProductsSection() {
  return <section className="bg-slate-950 py-16 text-white md:py-24"><div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"><SectionIntro centered inverse eyebrow="Products we source" title="Broad sourcing coverage for B2B buyers" text="We focus on categories where clear specifications, supplier verification, and quality control can make a measurable difference." /><div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-4">{productCategories.map((category) => <div key={category} className="rounded-3xl border border-white/10 bg-white/5 p-5 text-white"><Boxes className="h-6 w-6 text-blue-300" /><h3 className="mt-4 font-semibold text-white">{category}</h3></div>)}</div><div className="mt-12 overflow-hidden rounded-[2rem] border border-white/10 bg-slate-900"><img alt="Warehouse products ready for export shipping" className="h-72 w-full object-cover opacity-90" data-strk-img-id="products-warehouse-export-4d5e6f" data-strk-img="[products-photo-caption] [products-heading]" data-strk-img-ratio="16x9" data-strk-img-width="1200" src={placeholder} /><p id="products-photo-caption" className="p-6 text-sm font-medium text-slate-300">Product sourcing often includes sample checks, packaging review, carton marks, and export-ready documentation.</p><span id="products-heading" className="sr-only">Products we source from China for global buyers</span></div></div></section>
}

function ProblemsSection() {
  return <section className="bg-white py-16 text-slate-950 md:py-24"><div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:px-8"><div><SectionIntro eyebrow="Problems we solve" title="Reduce sourcing friction before it becomes expensive" text="Our role is to make supplier information, production status, quality findings, and shipment readiness clearer for your team." /><div className="mt-8 rounded-3xl bg-amber-50 p-6 text-amber-950"><h3 className="font-semibold text-amber-950">Not a magic shortcut</h3><p className="mt-2 leading-7 text-amber-800">Good sourcing still needs clear specifications, realistic timelines, and informed decisions. We help you manage those steps with local execution.</p></div></div><div className="grid gap-3">{problems.map((problem) => <div key={problem} className="flex gap-3 rounded-3xl border border-slate-200 bg-slate-50 p-5 text-slate-950"><CheckCircle2 className="mt-1 h-5 w-5 flex-none text-emerald-600" /><p className="leading-7 text-slate-700">{problem}</p></div>)}</div></div></section>
}

function TrustSection() {
  return <section className="bg-slate-50 py-16 text-slate-950 md:py-24"><div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"><SectionIntro centered eyebrow="Trust points" title="Built for overseas buyers who need practical China-side support" text="We focus on transparency, documented checks, and operational follow-through instead of inflated promises." /><div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-4">{trustPoints.map((point) => <div key={point.value} className="rounded-3xl border border-slate-200 bg-white p-6 text-center text-slate-950 shadow-sm"><p className="text-2xl font-semibold text-blue-700">{point.value}</p><p className="mt-3 text-sm leading-6 text-slate-600">{point.label}</p></div>)}</div></div></section>
}

function CaseStudiesSection() {
  return <section className="bg-white py-16 text-slate-950 md:py-24"><div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"><SectionIntro eyebrow="Case studies" title="Typical sourcing scenarios we support" text="Examples are representative of practical B2B sourcing work, from supplier checks to QC and shipment coordination." /><div className="mt-10 grid gap-5 lg:grid-cols-3">{caseStudies.map((study, index) => <article key={study.title} className="overflow-hidden rounded-3xl border border-slate-200 bg-white text-slate-950 shadow-sm"><img alt={study.title} className="h-48 w-full object-cover" data-strk-img-id={`case-study-${index + 1}-factory-shipping-qc`} data-strk-img={`[case-title-${index}] [case-challenge-${index}]`} data-strk-img-ratio="4x3" data-strk-img-width="700" src={placeholder} /><div className="p-6"><h3 id={`case-title-${index}`} className="text-xl font-semibold text-slate-950">{study.title}</h3><p id={`case-challenge-${index}`} className="mt-4 text-sm font-semibold uppercase tracking-wide text-slate-500">Challenge</p><p className="mt-2 leading-7 text-slate-600">{study.challenge}</p><p className="mt-4 text-sm font-semibold uppercase tracking-wide text-emerald-700">Outcome</p><p className="mt-2 leading-7 text-slate-600">{study.result}</p></div></article>)}</div></div></section>
}

function FaqSection() {
  return <section className="bg-slate-50 py-16 text-slate-950 md:py-24"><div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8"><SectionIntro centered eyebrow="FAQ" title="Questions overseas buyers often ask" /><div className="mt-10 grid gap-4">{faqs.map(([question, answer], index) => <details key={question} className="rounded-3xl border border-slate-200 bg-white p-6 text-slate-950 shadow-sm" open={index === 0}><summary className="cursor-pointer list-none text-lg font-semibold text-slate-950">{question}</summary><p className="mt-4 leading-7 text-slate-600">{answer}</p></details>)}</div></div></section>
}

function CtaBand() {
  return <section className="bg-white py-16 text-slate-950"><div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"><div className="grid items-center gap-8 rounded-[2rem] bg-blue-700 p-8 text-white md:grid-cols-[1fr_auto] md:p-10"><div><h2 className="text-3xl font-semibold tracking-tight text-white">Ready to review a sourcing project?</h2><p className="mt-3 max-w-2xl leading-7 text-blue-100">Send your product details and buying goals. We will respond with practical next steps for supplier search, verification, QC, or shipping coordination.</p></div><Link to="/contact" className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-6 py-3 font-semibold text-blue-700 hover:bg-blue-50">Get a Free Sourcing Quote <ArrowRight className="h-5 w-5" /></Link></div></div></section>
}

function Field({ label, name, value, onChange, type = 'text', placeholder = '', required = false }) {
  return <label className="grid gap-2 text-sm font-semibold text-slate-800">{label}<input name={name} type={type} value={value} onChange={onChange} placeholder={placeholder} required={required} className="rounded-2xl border border-slate-300 bg-white px-4 py-3 text-slate-950 outline-none focus:border-blue-600 focus:ring-4 focus:ring-blue-100" /></label>
}

function InquiryForm() {
  const initialValues = { name: '', email: '', company: '', country: '', product_category: '', product_details: '', estimated_quantity: '', target_price: '', timeline: 'planning_stage', notes: '' }
  const [values, setValues] = useState(initialValues)
  const [neededServices, setNeededServices] = useState(['supplier_search'])
  const [status, setStatus] = useState('idle')
  const [message, setMessage] = useState('')

  const updateValue = (event) => setValues((current) => ({ ...current, [event.target.name]: event.target.value }))
  const toggleService = (key) => setNeededServices((current) => current.includes(key) ? current.filter((item) => item !== key) : [...current, key])
  const validate = () => {
    if (!values.name.trim()) return 'Please enter your name.'
    if (!/^\S+@\S+\.\S+$/.test(values.email.trim())) return 'Please enter a valid email address.'
    if (!values.country.trim()) return 'Please enter your country.'
    if (!values.product_details.trim()) return 'Please describe the product you want to source.'
    if (neededServices.length === 0) return 'Please select at least one service.'
    return ''
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    const validationMessage = validate()
    if (validationMessage) {
      setStatus('error')
      setMessage(validationMessage)
      return
    }
    setStatus('submitting')
    setMessage('')
    try {
      await createSourcingInquiry({ ...values, name: values.name.trim(), email: values.email.trim(), country: values.country.trim(), product_details: values.product_details.trim(), needed_services: neededServices, created_at: new Date().toISOString() })
      setStatus('success')
      setMessage('Thank you. Your sourcing inquiry has been received. We will review your details and respond with practical next steps.')
      setValues(initialValues)
      setNeededServices(['supplier_search'])
    } catch (error) {
      setStatus('error')
      setMessage(error.message || 'We could not send your inquiry. Please try again.')
    }
  }

  return (
    <form onSubmit={handleSubmit} className="rounded-[2rem] border border-slate-200 bg-white p-6 text-slate-950 shadow-sm md:p-8" aria-busy={status === 'submitting'}>
      <div className="grid gap-5 md:grid-cols-2"><Field label="Name" name="name" value={values.name} onChange={updateValue} required /><Field label="Email" name="email" type="email" value={values.email} onChange={updateValue} required /><Field label="Company" name="company" value={values.company} onChange={updateValue} /><Field label="Country" name="country" value={values.country} onChange={updateValue} required /><Field label="Product category" name="product_category" value={values.product_category} onChange={updateValue} placeholder="e.g. packaging, electronics" /><Field label="Estimated quantity" name="estimated_quantity" value={values.estimated_quantity} onChange={updateValue} placeholder="e.g. 5,000 pcs" /><Field label="Target price or budget" name="target_price" value={values.target_price} onChange={updateValue} placeholder="Optional" /><label className="grid gap-2 text-sm font-semibold text-slate-800">Timeline<select name="timeline" value={values.timeline} onChange={updateValue} className="rounded-2xl border border-slate-300 bg-white px-4 py-3 text-slate-950 outline-none focus:border-blue-600 focus:ring-4 focus:ring-blue-100"><option value="asap">ASAP</option><option value="within_30_days">Within 30 days</option><option value="one_to_three_months">1–3 months</option><option value="planning_stage">Planning stage</option></select></label></div>
      <div className="mt-5"><p className="text-sm font-semibold text-slate-800">Services needed</p><div className="mt-3 grid gap-3 sm:grid-cols-2">{serviceOptions.map(([key, label]) => <label key={key} className="flex items-center gap-3 rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm font-semibold text-slate-800"><input type="checkbox" checked={neededServices.includes(key)} onChange={() => toggleService(key)} className="h-4 w-4 accent-blue-700" />{label}</label>)}</div></div>
      <label className="mt-5 grid gap-2 text-sm font-semibold text-slate-800">Product details and specifications<textarea name="product_details" value={values.product_details} onChange={updateValue} required rows="5" placeholder="Share materials, size, packaging, compliance needs, target market, sample photos, or existing supplier issues." className="rounded-2xl border border-slate-300 bg-white px-4 py-3 text-slate-950 outline-none focus:border-blue-600 focus:ring-4 focus:ring-blue-100" /></label>
      <label className="mt-5 grid gap-2 text-sm font-semibold text-slate-800">Additional notes<textarea name="notes" value={values.notes} onChange={updateValue} rows="3" placeholder="Any deadlines, quality concerns, factory requirements, or shipping notes." className="rounded-2xl border border-slate-300 bg-white px-4 py-3 text-slate-950 outline-none focus:border-blue-600 focus:ring-4 focus:ring-blue-100" /></label>
      <button type="submit" disabled={status === 'submitting'} className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-blue-700 px-6 py-3 font-semibold text-white shadow-sm hover:bg-blue-800 disabled:cursor-not-allowed disabled:bg-slate-400 md:w-auto">{status === 'submitting' ? 'Sending inquiry…' : 'Get a Free Sourcing Quote'}</button>
      {message && <p role={status === 'error' ? 'alert' : 'status'} className={`mt-4 rounded-2xl p-4 text-sm font-semibold ${status === 'error' ? 'bg-red-50 text-red-700' : 'bg-emerald-50 text-emerald-700'}`}>{message}</p>}
    </form>
  )
}

function ContactSection() {
  return <section className="bg-slate-50 py-16 text-slate-950 md:py-24"><div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[0.8fr_1.2fr] lg:px-8"><div><SectionIntro eyebrow="Inquiry form" title="Get a Free Sourcing Quote" text="Tell us what you need to source, verify, inspect, or ship. The more specific your requirements, the more useful our first response can be." /><div className="mt-8 grid gap-4 text-slate-700"><div className="flex gap-3"><Mail className="h-5 w-5 text-blue-700" /><span>Response focused on next steps, not generic promises</span></div><div className="flex gap-3"><MapPin className="h-5 w-5 text-blue-700" /><span>China-based supplier and factory coordination</span></div><div className="flex gap-3"><Phone className="h-5 w-5 text-blue-700" /><span>Clear communication for overseas buying teams</span></div></div></div><InquiryForm /></div></section>
}

function PageHero({ eyebrow, title, text, imageId, imageQuery }) {
  return <section className="bg-white text-slate-950"><div className="mx-auto grid max-w-7xl items-center gap-10 px-4 py-16 sm:px-6 md:py-20 lg:grid-cols-2 lg:px-8"><div><p className="text-xs font-semibold uppercase tracking-[0.18em] text-blue-700">{eyebrow}</p><h1 id="page-heading" className="mt-4 text-4xl font-semibold tracking-tight text-slate-950 md:text-5xl">{title}</h1><p id="page-intro" className="mt-5 text-lg leading-8 text-slate-600">{text}</p></div><img alt={title} className="h-80 w-full rounded-[2rem] border border-slate-200 object-cover shadow-lg" data-strk-img-id={imageId} data-strk-img={imageQuery} data-strk-img-ratio="16x9" data-strk-img-width="1000" src={placeholder} /></div></section>
}

function HomePage() { return <><Hero /><ServicesSection /><ProcessSection /><ProductsSection /><ProblemsSection /><TrustSection /><CaseStudiesSection /><FaqSection /><ContactSection /></> }
function ServicesPage() { return <><PageHero eyebrow="Services" title="Sourcing services for overseas buying teams" text="Use SSourcing China for supplier search, factory verification, QC inspection, production follow-up, and shipping coordination." imageId="services-page-factory-team-7g8h9i" imageQuery="[page-heading] [page-intro]" /><ServicesSection /><ProblemsSection /><CtaBand /></> }
function HowItWorksPage() { return <><PageHero eyebrow="How it works" title="From requirement review to shipment handoff" text="A documented sourcing workflow helps overseas buyers make decisions with clearer supplier, production, quality, and logistics information." imageId="process-page-qc-checklist-2j3k4l" imageQuery="[page-heading] [page-intro]" /><ProcessSection /><FaqSection /><CtaBand /></> }
function ProductsPage() { return <><PageHero eyebrow="Products we source" title="Product categories supported by SSourcing China" text="We support practical B2B sourcing across consumer, packaging, industrial, promotional, and lifestyle product categories." imageId="products-page-export-goods-5m6n7o" imageQuery="[page-heading] [page-intro]" /><ProductsSection /><CtaBand /></> }
function CaseStudiesPage() { return <><PageHero eyebrow="Case studies" title="Realistic sourcing situations and practical outcomes" text="Review common scenarios where China-side supplier checks, QC, and coordination support help overseas teams make better sourcing decisions." imageId="case-page-inspection-report-8p9q0r" imageQuery="[page-heading] [page-intro]" /><CaseStudiesSection /><CtaBand /></> }
function BlogPage() { return <><PageHero eyebrow="Blog" title="Practical guides for sourcing from China" text="Clear advice for importers and B2B buyers managing suppliers, samples, quality control, and shipment readiness." imageId="blog-page-sourcing-documents-1s2t3u" imageQuery="[page-heading] [page-intro]" /><section className="bg-slate-50 py-16 text-slate-950 md:py-24"><div className="mx-auto grid max-w-7xl gap-6 px-4 sm:px-6 lg:grid-cols-3 lg:px-8">{blogPosts.map(([title, excerpt]) => <article key={title} className="rounded-3xl border border-slate-200 bg-white p-6 text-slate-950 shadow-sm"><p className="text-xs font-semibold uppercase tracking-[0.18em] text-blue-700">Sourcing guide</p><h2 className="mt-4 text-2xl font-semibold tracking-tight text-slate-950">{title}</h2><p className="mt-4 leading-7 text-slate-600">{excerpt}</p><Link to="/contact" className="mt-6 inline-flex items-center gap-2 font-semibold text-blue-700 hover:text-blue-800">Ask about this topic <ArrowRight className="h-4 w-4" /></Link></article>)}</div></section><CtaBand /></> }
function ContactPage() { return <><PageHero eyebrow="Contact" title="Send your sourcing requirements" text="Share product details, quantities, target country, and support needed. We will review your inquiry and suggest practical next steps." imageId="contact-page-shipping-office-4v5w6x" imageQuery="[page-heading] [page-intro]" /><ContactSection /></> }

function AppShell() {
  return <><PreviewNavigateBridge /><ScrollAndTitle /><Header /><ImageLoader><main><Routes><Route path="/" element={<HomePage />} /><Route path="/services" element={<ServicesPage />} /><Route path="/how-it-works" element={<HowItWorksPage />} /><Route path="/products" element={<ProductsPage />} /><Route path="/case-studies" element={<CaseStudiesPage />} /><Route path="/blog" element={<BlogPage />} /><Route path="/contact" element={<ContactPage />} /><Route path="*" element={<HomePage />} /></Routes></main></ImageLoader><Footer /></>
}

export default function App() {
  return <BrowserRouter><AppShell /></BrowserRouter>
}
