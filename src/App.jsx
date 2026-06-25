import { useEffect, useMemo, useRef, useState } from 'react'
import { BrowserRouter, Link, NavLink, Route, Routes, useLocation } from 'react-router-dom'
import { ImageHelper } from '@strikingly/sdk'
import {
  ArrowRight,
  BadgeCheck,
  Boxes,
  CheckCircle2,
  ChevronDown,
  ClipboardCheck,
  Factory,
  FileSearch,
  Globe2,
  Mail,
  MapPin,
  Menu,
  PackageCheck,
  Phone,
  SearchCheck,
  ShieldCheck,
  Ship,
  Truck,
  X,
} from 'lucide-react'
import strkImgConfig from './strk-img-config.json'
import { createSourcingInquiry, serviceOptions, timelineOptions } from './api/sourcingInquiries.js'
import './App.css'

const placeholder = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1 1"/%3E'

const navigation = [
  { name: 'Home', href: '/' },
  { name: 'Services', href: '/services' },
  { name: 'How It Works', href: '/how-it-works' },
  { name: 'Products We Source', href: '/products-we-source' },
  { name: 'Case Studies', href: '/case-studies' },
  { name: 'Blog', href: '/blog' },
  { name: 'Contact', href: '/contact' },
]

const services = [
  { icon: SearchCheck, title: 'Supplier Search', text: 'Identify potential manufacturers and trading partners based on your product requirements, target market, order volume, and quality expectations.' },
  { icon: ShieldCheck, title: 'Supplier Verification', text: 'Review company records, business scope, capabilities, certificates, and factory information before you commit time or money.' },
  { icon: Factory, title: 'Factory Audit', text: 'On-site checks help confirm production capacity, equipment, management practices, and whether a factory is suitable for your order.' },
  { icon: ClipboardCheck, title: 'Quality Inspection', text: 'Pre-production, during-production, and pre-shipment inspection support helps reduce defects and document product quality clearly.' },
  { icon: PackageCheck, title: 'Production Follow-Up', text: 'Track samples, packaging, production milestones, and supplier communication so overseas buyers stay informed.' },
  { icon: Ship, title: 'Shipping Coordination', text: 'Coordinate packing details, export documents, freight forwarders, and shipment handover from factory to destination.' },
]

const processSteps = [
  { step: '01', title: 'Share your sourcing brief', text: 'Tell us the product, specifications, target price, order quantity, market, compliance needs, and current supplier situation.' },
  { step: '02', title: 'Supplier search and screening', text: 'We research matching suppliers, screen business information, compare capabilities, and shortlist practical options.' },
  { step: '03', title: 'Samples, negotiation and checks', text: 'We follow sample preparation, clarify specifications, compare quotations, and verify key supplier details before ordering.' },
  { step: '04', title: 'Production and inspection', text: 'We monitor production progress, arrange quality checks, report issues, and help suppliers correct problems before shipment.' },
  { step: '05', title: 'Shipping coordination', text: 'We coordinate packing, documents, freight handover, and shipping updates so your order can move with fewer surprises.' },
]

const productCategories = ['Consumer electronics accessories', 'Home and kitchen products', 'Tools and hardware', 'Packaging and printed materials', 'Promotional products', 'Textiles and bags', 'Industrial parts and components', 'Outdoor and sports products', 'Beauty and personal care packaging']
const problems = ['Unclear supplier background or business scope', 'Difficult communication across time zones and languages', 'Inconsistent samples, specifications, or packaging details', 'Quality issues discovered too late before shipment', 'Production delays without transparent status updates', 'Shipping documents and handover coordination gaps']
const trustPoints = [
  { title: 'China-based coordination', text: 'Local factory visits, supplier communication, and production follow-up when remote management is difficult.' },
  { title: 'Practical supplier screening', text: 'Business checks, capability review, quotation comparison, and risk notes before selection.' },
  { title: 'Clear reporting', text: 'Photos, inspection notes, supplier updates, and action points written for overseas decision makers.' },
  { title: 'End-to-end support', text: 'From supplier search and samples to inspection and shipping coordination.' },
]
const cases = [
  { id: 'electronics-accessories', title: 'Electronics accessories supplier screening', industry: 'Consumer electronics', result: 'Shortlisted factories with clearer compliance and packaging capability.', text: 'An overseas buyer needed a more reliable source for cable accessories. We compared suppliers, checked business records, reviewed sample details, and helped clarify packaging requirements before trial ordering.', metric: '6 suppliers screened' },
  { id: 'homeware-qc', title: 'Homeware pre-shipment quality inspection', industry: 'Home and kitchen', result: 'Defects were documented before final payment and shipment release.', text: 'A buyer was concerned about surface finish and carton labeling. We arranged inspection, photographed defects, summarized findings, and supported supplier rework follow-up.', metric: '3 inspection checkpoints' },
  { id: 'hardware-production', title: 'Hardware production follow-up', industry: 'Tools and hardware', result: 'Production status became clearer across sampling, mass production, and packing.', text: 'The buyer needed better visibility during a repeat order. We tracked milestones, requested progress evidence, and coordinated shipping handover with the forwarder.', metric: 'Weekly status updates' },
]
const faqs = [
  { question: 'Do you work with small and medium-sized buyers?', answer: 'Yes. We work with overseas buyers who need practical sourcing support, whether they are validating a new product, replacing a supplier, or managing repeat production.' },
  { question: 'Can you guarantee the lowest price?', answer: 'No sourcing agent should make that promise. We focus on finding suitable suppliers, comparing quotations, verifying key information, and reducing avoidable sourcing and quality risks.' },
  { question: 'Can you inspect products before shipment?', answer: 'Yes. We can help arrange pre-shipment inspections and provide clear reporting with photos, defect notes, quantity checks, packaging checks, and recommended next steps.' },
  { question: 'Which China regions do you cover?', answer: 'We can coordinate with suppliers across major manufacturing regions in China, depending on the product category, factory location, and inspection requirements.' },
  { question: 'What information should I send for a quote?', answer: 'Please share product details, specifications, photos or reference links, target market, expected quantity, timeline, and which services you need.' },
]
const blogPosts = [
  { title: 'How to verify a Chinese supplier before placing an order', excerpt: 'A practical checklist covering business scope, factory information, samples, certificates, payment terms, and communication signals.', tag: 'Supplier Verification' },
  { title: 'What overseas buyers should check before pre-shipment inspection', excerpt: 'Clarify specifications, inspection standards, packaging requirements, defect definitions, and shipment release conditions before inspection day.', tag: 'Quality Control' },
  { title: 'How production follow-up reduces sourcing surprises', excerpt: 'Simple milestone tracking can reveal sample delays, material shortages, labeling issues, and packing risks before they become urgent.', tag: 'Production' },
]

function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => { window.scrollTo({ top: 0, behavior: 'smooth' }) }, [pathname])
  return null
}

function AppShell() {
  const containerRef = useRef(null)
  const location = useLocation()
  useEffect(() => {
    let cleanupImages = () => {}
    const frameId = window.requestAnimationFrame(() => {
      cleanupImages = ImageHelper.loadImages(strkImgConfig, containerRef.current) || cleanupImages
    })

    return () => {
      window.cancelAnimationFrame(frameId)
      cleanupImages()
    }
  }, [location.pathname])

  return (
    <div ref={containerRef} className="min-h-screen bg-slate-50 text-slate-950">
      <ScrollToTop />
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/how-it-works" element={<HowItWorksPage />} />
        <Route path="/products-we-source" element={<ProductsPage />} />
        <Route path="/case-studies" element={<CaseStudiesPage />} />
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
      <Footer />
    </div>
  )
}

function App() {
  return <BrowserRouter><AppShell /></BrowserRouter>
}

function Header() {
  const [open, setOpen] = useState(false)
  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/95 text-slate-950 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <Link to="/" className="flex shrink-0 items-center gap-3 text-slate-950" onClick={() => setOpen(false)}>
          <span className="flex h-10 w-10 items-center justify-center rounded-2xl bg-blue-700 text-sm font-bold text-white">SS</span>
          <span className="whitespace-nowrap leading-tight"><span className="block text-base font-semibold tracking-tight">SSourcing China</span><span className="block text-xs font-medium text-slate-500">China sourcing agent</span></span>
        </Link>
        <nav className="hidden items-center gap-1 xl:flex" aria-label="Main navigation">
          {navigation.map((item) => <NavLink key={item.href} to={item.href} className={({ isActive }) => `whitespace-nowrap rounded-full px-3 py-2 text-sm font-medium transition ${isActive ? 'bg-blue-50 text-blue-700' : 'text-slate-700 hover:bg-slate-100 hover:text-slate-950'}`}>{item.name}</NavLink>)}
        </nav>
        <div className="hidden shrink-0 items-center gap-3 xl:flex">
          <a href="mailto:quotes@ssourcingchina.com" className="hidden text-sm font-medium text-slate-600 hover:text-blue-700 2xl:inline">quotes@ssourcingchina.com</a>
          <Link className="whitespace-nowrap rounded-full bg-blue-700 px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:bg-blue-800" to="/contact">Get a Free Sourcing Quote</Link>
        </div>
        <button type="button" className="inline-flex items-center justify-center rounded-full border border-slate-300 bg-white p-2 text-slate-900 xl:hidden" aria-label="Open menu" onClick={() => setOpen((value) => !value)}>{open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}</button>
      </div>
      {open && <div className="border-t border-slate-200 bg-white px-4 pb-5 pt-2 text-slate-950 xl:hidden"><nav className="mx-auto grid max-w-7xl gap-1" aria-label="Mobile navigation">{navigation.map((item) => <NavLink key={item.href} to={item.href} onClick={() => setOpen(false)} className={({ isActive }) => `rounded-2xl px-4 py-3 text-sm font-semibold ${isActive ? 'bg-blue-50 text-blue-700' : 'text-slate-700 hover:bg-slate-100'}`}>{item.name}</NavLink>)}<Link onClick={() => setOpen(false)} className="mt-2 rounded-full bg-blue-700 px-5 py-3 text-center text-sm font-semibold text-white" to="/contact">Get a Free Sourcing Quote</Link></nav></div>}
    </header>
  )
}

function Footer() {
  return (
    <footer className="bg-slate-950 text-white">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 sm:px-6 md:grid-cols-[1.2fr_2fr] lg:px-8">
        <div><div className="flex items-center gap-3"><span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-blue-600 text-sm font-bold text-white">SS</span><div><p className="font-semibold">SSourcing China</p><p className="text-sm text-slate-400">Practical sourcing support in China</p></div></div><p className="mt-5 max-w-md text-sm leading-6 text-slate-300">A China-based sourcing agent helping overseas buyers find suppliers, verify factories, inspect quality, follow production, and coordinate shipping.</p></div>
        <div className="grid gap-8 sm:grid-cols-3"><div><p className="font-semibold text-white">Pages</p><div className="mt-4 grid gap-2 text-sm text-slate-300">{navigation.slice(1, 6).map((item) => <Link key={item.href} to={item.href} className="hover:text-white">{item.name}</Link>)}</div></div><div><p className="font-semibold text-white">Services</p><div className="mt-4 grid gap-2 text-sm text-slate-300"><span>Supplier verification</span><span>Factory audit</span><span>Quality inspection</span><span>Production follow-up</span></div></div><div><p className="font-semibold text-white">Contact</p><div className="mt-4 grid gap-3 text-sm text-slate-300"><span className="flex items-center gap-2"><Mail className="h-4 w-4" /> quotes@ssourcingchina.com</span><span className="flex items-center gap-2"><MapPin className="h-4 w-4" /> China sourcing desk</span><Link to="/contact" className="font-semibold text-amber-300 hover:text-amber-200">Request a sourcing quote</Link></div></div></div>
      </div>
      <div className="border-t border-white/10 px-4 py-5 text-center text-xs text-slate-400">© 2026 SSourcing China. Built for overseas buyers sourcing from China.</div>
    </footer>
  )
}

function SectionHeading({ eyebrow, title, text, align = 'left' }) {
  return <div className={`${align === 'center' ? 'mx-auto text-center' : ''} max-w-3xl`}><p className="text-xs font-semibold uppercase tracking-[0.2em] text-blue-700">{eyebrow}</p><h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-950 md:text-5xl">{title}</h2>{text && <p className="mt-5 text-base leading-7 text-slate-600 md:text-lg">{text}</p>}</div>
}

function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-white text-slate-950">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(37,99,235,0.12),transparent_34%),linear-gradient(135deg,rgba(248,250,252,1),rgba(239,246,255,1))]" />
      <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-4 py-16 sm:px-6 md:py-24 lg:grid-cols-[1.05fr_0.95fr] lg:px-8">
        <div><p id="hero-eyebrow" className="inline-flex rounded-full border border-blue-200 bg-blue-50 px-4 py-2 text-sm font-semibold text-blue-700">China-based sourcing support for overseas buyers</p><h1 id="hero-title" className="mt-6 max-w-4xl text-4xl font-semibold tracking-tight text-slate-950 md:text-6xl">China Sourcing Agent for Global Buyers</h1><p id="hero-subtitle" className="mt-6 max-w-2xl text-lg leading-8 text-slate-700">SSourcing China helps you find reliable suppliers, verify factories, inspect quality, follow production, and coordinate shipping with practical on-the-ground support in China.</p><div className="mt-8 flex flex-col gap-3 sm:flex-row"><Link to="/contact" className="inline-flex items-center justify-center rounded-full bg-blue-700 px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-blue-700/20 transition hover:bg-blue-800">Get a Free Sourcing Quote <ArrowRight className="ml-2 h-4 w-4" /></Link><Link to="/how-it-works" className="inline-flex items-center justify-center rounded-full border border-slate-300 bg-white px-6 py-3.5 text-sm font-semibold text-slate-900 transition hover:bg-slate-50">See how sourcing works</Link></div><div className="mt-10 grid gap-4 sm:grid-cols-3">{['Supplier verification', 'QC inspection', 'Shipping coordination'].map((item) => <div key={item} className="rounded-2xl border border-slate-200 bg-white/80 p-4 text-sm font-semibold text-slate-800 shadow-sm"><CheckCircle2 className="mb-2 h-5 w-5 text-blue-700" />{item}</div>)}</div></div>
        <div className="relative"><div className="absolute -right-6 -top-6 h-40 w-40 rounded-full bg-amber-300/40 blur-3xl" /><div className="relative overflow-hidden rounded-[2rem] border border-white bg-slate-900 shadow-2xl shadow-slate-900/20"><img alt="Quality control team checking goods in a China factory" className="h-[440px] w-full object-cover opacity-90" data-strk-img-id="hero-factory-qc-7a41c2" data-strk-img="[hero-subtitle] [hero-title] [hero-eyebrow]" data-strk-img-ratio="4x3" data-strk-img-width="900" src={placeholder} /><div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-slate-950 via-slate-950/80 to-transparent p-6 text-white"><div className="grid gap-3 sm:grid-cols-3">{[['01', 'Search'], ['02', 'Verify'], ['03', 'Inspect']].map(([number, label]) => <div key={label} className="rounded-2xl bg-white/10 p-3 backdrop-blur"><p className="text-xs text-amber-200">{number}</p><p className="text-sm font-semibold text-white">{label}</p></div>)}</div></div></div></div>
      </div>
    </section>
  )
}

function ServicesGrid({ compact = false }) {
  return <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">{services.map((service) => { const Icon = service.icon; return <article key={service.title} className="rounded-3xl border border-slate-200 bg-white p-6 text-slate-950 shadow-sm transition hover:-translate-y-1 hover:shadow-md"><div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-50 text-blue-700"><Icon className="h-6 w-6" /></div><h3 className="mt-5 text-xl font-semibold text-slate-950">{service.title}</h3><p className={`mt-3 ${compact ? 'text-sm' : 'text-base'} leading-7 text-slate-600`}>{service.text}</p></article> })}</div>
}

function ServicesSection() {
  return <section className="bg-slate-50 py-16 md:py-24"><div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"><div className="mb-12 flex flex-col justify-between gap-6 lg:flex-row lg:items-end"><SectionHeading eyebrow="Services" title="Sourcing support from supplier search to shipment handover" text="Choose specific support or ask us to manage the full sourcing workflow for your China purchasing project." /><Link to="/services" className="inline-flex items-center font-semibold text-blue-700 hover:text-blue-800">View all services <ArrowRight className="ml-2 h-4 w-4" /></Link></div><ServicesGrid /></div></section>
}

function ProcessSection() {
  return <section className="bg-white py-16 text-slate-950 md:py-24"><div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"><SectionHeading eyebrow="Sourcing process" title="A clear workflow for overseas buyers" text="We keep the process practical: understand requirements, compare suppliers, check risks, follow production, and coordinate shipping steps." align="center" /><div className="mt-12 grid gap-5 lg:grid-cols-5">{processSteps.map((item) => <article key={item.step} className="rounded-3xl border border-slate-200 bg-slate-50 p-6 text-slate-950"><p className="text-sm font-semibold text-blue-700">{item.step}</p><h3 className="mt-4 text-lg font-semibold text-slate-950">{item.title}</h3><p className="mt-3 text-sm leading-6 text-slate-600">{item.text}</p></article>)}</div></div></section>
}

function ProductsSection() {
  return <section className="bg-slate-950 py-16 text-white md:py-24"><div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:px-8"><div><p id="products-eyebrow" className="text-xs font-semibold uppercase tracking-[0.2em] text-amber-300">Products we source</p><h2 id="products-title" className="mt-3 text-3xl font-semibold tracking-tight text-white md:text-5xl">Manufactured products across common China sourcing categories</h2><p id="products-text" className="mt-5 text-lg leading-8 text-slate-300">We focus on practical supplier matching and verification. If your product requires special certifications, packaging, materials, or inspections, include those details in your inquiry.</p><div className="mt-8 overflow-hidden rounded-3xl border border-white/10 bg-white/5"><img alt="China warehouse with packed export cartons ready for shipping" className="h-72 w-full object-cover" data-strk-img-id="products-warehouse-shipping-3bd92f" data-strk-img="[products-text] [products-title] [products-eyebrow]" data-strk-img-ratio="16x9" data-strk-img-width="900" src={placeholder} /></div></div><div className="grid gap-4 sm:grid-cols-2">{productCategories.map((category) => <div key={category} className="flex items-start gap-3 rounded-2xl border border-white/10 bg-white/5 p-5 text-white"><Boxes className="mt-0.5 h-5 w-5 shrink-0 text-amber-300" /><span className="font-medium text-slate-100">{category}</span></div>)}</div></div></section>
}

function ProblemsSection() {
  return <section className="bg-white py-16 text-slate-950 md:py-24"><div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-[1fr_1fr] lg:px-8"><div><SectionHeading eyebrow="Problems we solve" title="Reduce uncertainty before it becomes expensive" text="China sourcing often becomes difficult when supplier information, product details, production progress, or shipping coordination are unclear." /><div className="mt-8 grid gap-3">{problems.map((problem) => <div key={problem} className="flex items-start gap-3 rounded-2xl bg-slate-50 p-4 text-slate-800"><CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-blue-700" /><span className="font-medium">{problem}</span></div>)}</div></div><div className="rounded-[2rem] border border-slate-200 bg-slate-50 p-4 shadow-sm"><img alt="Sourcing manager reviewing inspection checklist with factory staff" className="h-full min-h-[420px] w-full rounded-[1.5rem] object-cover" data-strk-img-id="problems-factory-checklist-d29fc0" data-strk-img="[problems-title-ref] [problems-desc-ref]" data-strk-img-ratio="3x4" data-strk-img-width="800" src={placeholder} /><h3 id="problems-title-ref" className="sr-only">Factory quality checklist and sourcing communication</h3><p id="problems-desc-ref" className="sr-only">Supplier verification, product inspection, production tracking, and shipping coordination for overseas buyers sourcing from China</p></div></div></section>
}

function TrustSection() {
  return <section className="bg-slate-50 py-16 text-slate-950 md:py-24"><div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"><SectionHeading eyebrow="Trust points" title="Practical reporting and local execution" text="Our role is to improve visibility, coordination, and decision quality during China sourcing projects." align="center" /><div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-4">{trustPoints.map((point) => <article key={point.title} className="rounded-3xl border border-slate-200 bg-white p-6 text-slate-950 shadow-sm"><BadgeCheck className="h-7 w-7 text-blue-700" /><h3 className="mt-5 text-lg font-semibold text-slate-950">{point.title}</h3><p className="mt-3 text-sm leading-6 text-slate-600">{point.text}</p></article>)}</div></div></section>
}

function CaseStudiesSection({ showAll = false }) {
  const visibleCases = showAll ? cases : cases.slice(0, 3)
  return <section className="bg-white py-16 text-slate-950 md:py-24"><div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"><div className="mb-12 flex flex-col justify-between gap-6 lg:flex-row lg:items-end"><SectionHeading eyebrow="Case studies" title="Examples of practical sourcing support" text="These examples show the type of operational work overseas buyers commonly need when sourcing from China." />{!showAll && <Link to="/case-studies" className="font-semibold text-blue-700 hover:text-blue-800">Read case studies</Link>}</div><div className="grid gap-6 lg:grid-cols-3">{visibleCases.map((item) => <article key={item.id} className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm"><img alt={`${item.title} sourcing case study`} className="h-52 w-full object-cover" data-strk-img-id={`case-${item.id}-img-8f1b2c`} data-strk-img={`[case-${item.id}-text] [case-${item.id}-title]`} data-strk-img-ratio="3x2" data-strk-img-width="700" src={placeholder} /><div className="p-6 text-slate-950"><p className="text-sm font-semibold text-blue-700">{item.industry}</p><h3 id={`case-${item.id}-title`} className="mt-3 text-xl font-semibold text-slate-950">{item.title}</h3><p id={`case-${item.id}-text`} className="mt-3 text-sm leading-6 text-slate-600">{item.text}</p><div className="mt-5 rounded-2xl bg-amber-50 p-4 text-sm font-semibold text-amber-800">{item.metric} · {item.result}</div></div></article>)}</div></div></section>
}

function FAQSection() {
  const [openIndex, setOpenIndex] = useState(0)
  return <section className="bg-slate-50 py-16 text-slate-950 md:py-24"><div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8"><SectionHeading eyebrow="FAQ" title="Common questions from overseas buyers" text="If your project needs special certifications, strict tolerances, or complex logistics, include those details when requesting a quote." align="center" /><div className="mt-10 grid gap-4">{faqs.map((faq, index) => <div key={faq.question} className="rounded-3xl border border-slate-200 bg-white text-slate-950 shadow-sm"><button type="button" className="flex w-full items-center justify-between gap-4 rounded-3xl bg-white px-6 py-5 text-left text-slate-950" onClick={() => setOpenIndex((current) => (current === index ? -1 : index))}><span className="font-semibold text-slate-950">{faq.question}</span><ChevronDown className={`h-5 w-5 shrink-0 text-blue-700 transition ${openIndex === index ? 'rotate-180' : ''}`} /></button>{openIndex === index && <p className="px-6 pb-6 text-sm leading-7 text-slate-600">{faq.answer}</p>}</div>)}</div></div></section>
}

function InquiryForm({ sourcePage = 'contact' }) {
  const initialValues = useMemo(() => ({ name: '', email: '', company: '', country: '', productCategory: '', productDescription: '', estimatedOrderQuantity: '', targetMarket: '', servicesNeeded: ['supplier_search'], timeline: 'within_1_month', message: '', sourcePage }), [sourcePage])
  const [values, setValues] = useState(initialValues)
  const [status, setStatus] = useState('idle')
  const [error, setError] = useState('')
  const updateValue = (field, value) => setValues((current) => ({ ...current, [field]: value }))
  const toggleService = (service) => setValues((current) => { const exists = current.servicesNeeded.includes(service); const servicesNeeded = exists ? current.servicesNeeded.filter((item) => item !== service) : [...current.servicesNeeded, service]; return { ...current, servicesNeeded } })
  const validate = () => { if (!values.name.trim()) return 'Please enter your name.'; if (!/^\S+@\S+\.\S+$/.test(values.email.trim())) return 'Please enter a valid business email.'; if (!values.productDescription.trim()) return 'Please describe the product you want to source.'; if (values.servicesNeeded.length === 0) return 'Please select at least one service.'; return '' }
  const handleSubmit = async (event) => { event.preventDefault(); const validationError = validate(); if (validationError) { setError(validationError); setStatus('error'); return } setStatus('submitting'); setError(''); try { await createSourcingInquiry(values); setStatus('success'); setValues(initialValues) } catch (err) { setError(err.message || 'Unable to submit your inquiry. Please try again.'); setStatus('error') } }
  return (
    <form onSubmit={handleSubmit} className="rounded-[2rem] border border-slate-200 bg-white p-5 text-slate-950 shadow-xl shadow-slate-200/60 sm:p-8" aria-busy={status === 'submitting'}>
      <div><p className="text-sm font-semibold text-blue-700">Get a Free Sourcing Quote</p><h2 className="mt-2 text-2xl font-semibold tracking-tight text-slate-950">Tell us what you want to source</h2><p className="mt-3 text-sm leading-6 text-slate-600">Share product details and the type of China sourcing support you need. We will review your inquiry and respond with practical next steps.</p></div>
      <div className="mt-8 grid gap-5 md:grid-cols-2"><FormField label="Name" required><input className="form-input" value={values.name} onChange={(event) => updateValue('name', event.target.value)} placeholder="Your full name" /></FormField><FormField label="Business email" required><input className="form-input" type="email" value={values.email} onChange={(event) => updateValue('email', event.target.value)} placeholder="name@company.com" /></FormField><FormField label="Company"><input className="form-input" value={values.company} onChange={(event) => updateValue('company', event.target.value)} placeholder="Company name" /></FormField><FormField label="Country / region"><input className="form-input" value={values.country} onChange={(event) => updateValue('country', event.target.value)} placeholder="United States, Germany, UAE..." /></FormField><FormField label="Product category"><input className="form-input" value={values.productCategory} onChange={(event) => updateValue('productCategory', event.target.value)} placeholder="Homeware, electronics, packaging..." /></FormField><FormField label="Estimated order quantity"><input className="form-input" value={values.estimatedOrderQuantity} onChange={(event) => updateValue('estimatedOrderQuantity', event.target.value)} placeholder="500 pcs, 1 container, annual volume..." /></FormField></div>
      <div className="mt-5 grid gap-5 md:grid-cols-2"><FormField label="Target market"><input className="form-input" value={values.targetMarket} onChange={(event) => updateValue('targetMarket', event.target.value)} placeholder="EU, North America, Australia..." /></FormField><FormField label="Timeline" required><select className="form-input" value={values.timeline} onChange={(event) => updateValue('timeline', event.target.value)}>{timelineOptions.map((option) => <option key={option.value} value={option.value}>{option.label}</option>)}</select></FormField></div>
      <FormField label="Product description" required className="mt-5"><textarea className="form-input min-h-32 resize-y" value={values.productDescription} onChange={(event) => updateValue('productDescription', event.target.value)} placeholder="Describe specifications, materials, quality expectations, reference links, certifications, packaging, or current supplier problems." /></FormField>
      <div className="mt-5"><p className="text-sm font-semibold text-slate-900">Services needed <span className="text-blue-700">*</span></p><div className="mt-3 grid gap-3 sm:grid-cols-2">{serviceOptions.map((option) => <label key={option.value} className="flex cursor-pointer items-center gap-3 rounded-2xl border border-slate-200 bg-slate-50 p-3 text-sm font-medium text-slate-800"><input type="checkbox" className="h-4 w-4 rounded border-slate-300 text-blue-700" checked={values.servicesNeeded.includes(option.value)} onChange={() => toggleService(option.value)} />{option.label}</label>)}</div></div>
      <FormField label="Additional message" className="mt-5"><textarea className="form-input min-h-24 resize-y" value={values.message} onChange={(event) => updateValue('message', event.target.value)} placeholder="Anything else we should know before reviewing your sourcing request?" /></FormField>
      {status === 'success' && <div className="mt-6 rounded-2xl border border-emerald-200 bg-emerald-50 p-4 text-sm font-medium text-emerald-800" role="status">Thank you. Your sourcing inquiry has been received. We will review your details and follow up with next steps.</div>}
      {status === 'error' && error && <div className="mt-6 rounded-2xl border border-red-200 bg-red-50 p-4 text-sm font-medium text-red-800" role="alert">{error}</div>}
      <button type="submit" disabled={status === 'submitting'} className="mt-7 inline-flex w-full items-center justify-center rounded-full bg-blue-700 px-6 py-4 text-sm font-semibold text-white shadow-lg shadow-blue-700/20 transition hover:bg-blue-800 disabled:cursor-not-allowed disabled:bg-blue-400 sm:w-auto">{status === 'submitting' ? 'Submitting inquiry...' : 'Get a Free Sourcing Quote'}<ArrowRight className="ml-2 h-4 w-4" /></button>
    </form>
  )
}

function FormField({ label, required = false, children, className = '' }) {
  return <label className={`block ${className}`}><span className="mb-2 block text-sm font-semibold text-slate-900">{label} {required && <span className="text-blue-700">*</span>}</span>{children}</label>
}

function CTASection() {
  return <section className="bg-blue-700 py-16 text-white md:py-20"><div className="mx-auto grid max-w-7xl items-center gap-8 px-4 sm:px-6 lg:grid-cols-[1fr_auto] lg:px-8"><div><p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-100">Ready to compare suppliers?</p><h2 className="mt-3 text-3xl font-semibold tracking-tight text-white md:text-5xl">Send your product brief for a practical sourcing review.</h2><p className="mt-4 max-w-3xl text-base leading-7 text-blue-100">We will help you understand the next steps for supplier search, verification, quality control, production follow-up, and shipping coordination.</p></div><Link to="/contact" className="inline-flex items-center justify-center rounded-full bg-white px-7 py-4 text-sm font-semibold text-blue-700 shadow-lg transition hover:bg-blue-50">Get a Free Sourcing Quote <ArrowRight className="ml-2 h-4 w-4" /></Link></div></section>
}

function HomePage() {
  return <main><HeroSection /><ServicesSection /><ProcessSection /><ProductsSection /><ProblemsSection /><TrustSection /><CaseStudiesSection /><FAQSection /><section className="bg-white py-16 md:py-24"><div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8"><InquiryForm sourcePage="home" /></div></section></main>
}

function PageHero({ eyebrow, title, text, imageId, imageAlt }) {
  const titleId = `${imageId}-title`; const textId = `${imageId}-text`
  return <section className="bg-white py-16 text-slate-950 md:py-24"><div className="mx-auto grid max-w-7xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-[0.95fr_1.05fr] lg:px-8"><div><p className="text-xs font-semibold uppercase tracking-[0.2em] text-blue-700">{eyebrow}</p><h1 id={titleId} className="mt-4 text-4xl font-semibold tracking-tight text-slate-950 md:text-6xl">{title}</h1><p id={textId} className="mt-6 text-lg leading-8 text-slate-700">{text}</p><Link to="/contact" className="mt-8 inline-flex items-center rounded-full bg-blue-700 px-6 py-3.5 text-sm font-semibold text-white hover:bg-blue-800">Get a Free Sourcing Quote <ArrowRight className="ml-2 h-4 w-4" /></Link></div><div className="overflow-hidden rounded-[2rem] border border-slate-200 bg-slate-100 shadow-xl shadow-slate-200/70"><img alt={imageAlt} className="h-[420px] w-full object-cover" data-strk-img-id={imageId} data-strk-img={`[${textId}] [${titleId}]`} data-strk-img-ratio="4x3" data-strk-img-width="900" src={placeholder} /></div></div></section>
}

function ServicesPage() { return <main><PageHero eyebrow="Services" title="China sourcing services for overseas buyers" text="Use SSourcing China for targeted supplier search, supplier verification, factory audits, quality inspection, production tracking, and shipping coordination." imageId="services-page-factory-team-61df0a" imageAlt="Factory team reviewing sourcing documents and quality checklist" /><section className="bg-slate-50 py-16 md:py-24"><div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"><ServicesGrid /></div></section><ProblemsSection /><CTASection /></main> }
function HowItWorksPage() { return <main><PageHero eyebrow="How it works" title="A structured sourcing process from brief to shipment" text="We make sourcing easier to manage by breaking the work into clear steps: requirements, supplier screening, samples, production follow-up, inspection, and shipping handover." imageId="how-page-production-line-a94d3e" imageAlt="China factory production line with quality control staff" /><ProcessSection /><section className="bg-slate-50 py-16 text-slate-950 md:py-24"><div className="mx-auto grid max-w-7xl gap-6 px-4 sm:px-6 md:grid-cols-3 lg:px-8">{[{ icon: FileSearch, title: 'Requirements clarity', text: 'Clear product details reduce mismatched quotations and unsuitable suppliers.' }, { icon: Factory, title: 'Supplier fit', text: 'Capability checks help decide whether a factory is realistic for your project.' }, { icon: Truck, title: 'Execution follow-up', text: 'Production and shipping updates help reduce last-minute surprises.' }].map((item) => { const Icon = item.icon; return <article key={item.title} className="rounded-3xl bg-white p-7 text-slate-950 shadow-sm"><Icon className="h-8 w-8 text-blue-700" /><h2 className="mt-5 text-xl font-semibold text-slate-950">{item.title}</h2><p className="mt-3 text-sm leading-6 text-slate-600">{item.text}</p></article> })}</div></section><CTASection /></main> }
function ProductsPage() { return <main><PageHero eyebrow="Products we source" title="Supplier search for practical manufactured products" text="We help overseas buyers source products from China across consumer, commercial, packaging, hardware, textile, and industrial categories." imageId="products-page-export-goods-b24afe" imageAlt="Export products and cartons in a China warehouse" /><ProductsSection /><section className="bg-white py-16 text-slate-950 md:py-24"><div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"><SectionHeading eyebrow="Category fit" title="What makes a sourcing brief useful" text="The better the brief, the more accurate the supplier search and quotation comparison can be." align="center" /><div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-4">{['Product photos or reference links', 'Materials and dimensions', 'Target order quantity', 'Required certifications or market rules'].map((item) => <div key={item} className="rounded-3xl border border-slate-200 bg-slate-50 p-6 text-center font-semibold text-slate-800">{item}</div>)}</div></div></section><CTASection /></main> }
function CaseStudiesPage() { return <main><PageHero eyebrow="Case studies" title="Practical examples of China sourcing support" text="Explore typical situations where overseas buyers need supplier verification, quality inspection, production follow-up, and shipping coordination." imageId="cases-page-qc-report-c19db8" imageAlt="Quality inspection report and product samples in a factory" /><CaseStudiesSection showAll /><CTASection /></main> }
function BlogPage() { return <main><PageHero eyebrow="Blog" title="Practical guides for sourcing from China" text="Read clear, operational advice about supplier verification, quality control, production management, and shipment coordination." imageId="blog-page-sourcing-desk-e61c9a" imageAlt="Sourcing manager reviewing supplier documents and product samples" /><section className="bg-slate-50 py-16 text-slate-950 md:py-24"><div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"><div className="grid gap-6 lg:grid-cols-3">{blogPosts.map((post) => <article key={post.title} className="rounded-3xl border border-slate-200 bg-white p-7 text-slate-950 shadow-sm"><p className="text-sm font-semibold text-blue-700">{post.tag}</p><h2 className="mt-4 text-2xl font-semibold tracking-tight text-slate-950">{post.title}</h2><p className="mt-4 text-sm leading-7 text-slate-600">{post.excerpt}</p><Link to="/contact" className="mt-6 inline-flex items-center text-sm font-semibold text-blue-700 hover:text-blue-800">Ask about this topic <ArrowRight className="ml-2 h-4 w-4" /></Link></article>)}</div></div></section><FAQSection /></main> }
function ContactPage() { return <main><section className="bg-slate-50 py-16 text-slate-950 md:py-24"><div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-[0.75fr_1.25fr] lg:px-8"><div><p className="text-xs font-semibold uppercase tracking-[0.2em] text-blue-700">Contact</p><h1 className="mt-4 text-4xl font-semibold tracking-tight text-slate-950 md:text-6xl">Get a Free Sourcing Quote</h1><p className="mt-6 text-lg leading-8 text-slate-700">Send your product brief and let us know whether you need supplier search, verification, QC inspection, production follow-up, or shipping coordination.</p><div className="mt-8 grid gap-4"><div className="flex items-center gap-3 rounded-2xl bg-white p-4 text-slate-800 shadow-sm"><Mail className="h-5 w-5 text-blue-700" /><span className="font-medium">quotes@ssourcingchina.com</span></div><div className="flex items-center gap-3 rounded-2xl bg-white p-4 text-slate-800 shadow-sm"><Phone className="h-5 w-5 text-blue-700" /><span className="font-medium">Reply after inquiry review</span></div><div className="flex items-center gap-3 rounded-2xl bg-white p-4 text-slate-800 shadow-sm"><Globe2 className="h-5 w-5 text-blue-700" /><span className="font-medium">Serving overseas buyers sourcing from China</span></div></div></div><InquiryForm sourcePage="contact" /></div></section></main> }

export default App
