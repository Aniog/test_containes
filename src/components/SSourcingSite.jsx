import { useEffect, useRef, useState } from 'react'
import { Link, NavLink, Route, Routes, useLocation } from 'react-router-dom'
import {
  ArrowRight,
  CheckCircle2,
  ClipboardCheck,
  Factory,
  FileSearch,
  Globe2,
  Mail,
  Menu,
  PackageCheck,
  Phone,
  SearchCheck,
  ShieldCheck,
  Ship,
  X,
} from 'lucide-react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '../strk-img-config.json'
import { createSourcingInquiry } from '../api/inquiries'
import {
  blogPosts,
  caseStudies,
  faqs,
  navLinks,
  problems,
  processSteps,
  productCategories,
  serviceOptions,
  services,
  trustPoints,
} from '../data/siteContent'

const serviceIcons = [SearchCheck, ShieldCheck, ClipboardCheck, Factory, Ship, FileSearch]

function SectionHeading({ eyebrow, title, description, align = 'left', tone = 'light' }) {
  const isDark = tone === 'dark'

  return (
    <div className={align === 'center' ? 'mx-auto max-w-3xl text-center' : 'max-w-3xl'}>
      <p className={`text-sm font-semibold uppercase tracking-[0.18em] ${isDark ? 'text-blue-100' : 'text-blue-700'}`}>{eyebrow}</p>
      <h2 className={`mt-3 text-3xl font-semibold tracking-tight md:text-4xl ${isDark ? 'text-white' : 'text-slate-950'}`}>{title}</h2>
      {description && <p className={`mt-4 text-base leading-7 md:text-lg ${isDark ? 'text-slate-200' : 'text-slate-700'}`}>{description}</p>}
    </div>
  )
}

function PrimaryButton({ children, to = '/contact', className = '' }) {
  return (
    <Link
      to={to}
      className={`inline-flex items-center justify-center gap-2 rounded-full bg-blue-700 px-6 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-100 ${className}`}
    >
      {children}
      <ArrowRight className="h-4 w-4" />
    </Link>
  )
}

function SecondaryButton({ children, to, className = '' }) {
  return (
    <Link
      to={to}
      className={`inline-flex items-center justify-center rounded-full border border-slate-300 bg-white px-6 py-3 text-sm font-semibold text-slate-950 transition hover:border-blue-700 hover:text-blue-700 focus:outline-none focus:ring-4 focus:ring-blue-100 ${className}`}
    >
      {children}
    </Link>
  )
}

function Header() {
  const [open, setOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    setOpen(false)
  }, [location.pathname])

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/95 text-slate-950 shadow-sm backdrop-blur">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8" aria-label="Main navigation">
        <Link to="/" className="flex items-center gap-3" aria-label="SSourcing China home">
          <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-slate-900 text-sm font-bold text-white">SS</span>
          <span>
            <span className="block text-base font-semibold tracking-tight">SSourcing China</span>
            <span className="block text-xs font-medium text-slate-600">Sourcing Agent for Global Buyers</span>
          </span>
        </Link>

        <div className="hidden items-center gap-1 lg:flex">
          {navLinks.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) =>
                `rounded-full px-3 py-2 text-sm font-medium transition ${
                  isActive ? 'bg-blue-50 text-blue-700' : 'text-slate-700 hover:bg-slate-100 hover:text-slate-950'
                }`
              }
            >
              {item.label}
            </NavLink>
          ))}
        </div>

        <div className="hidden items-center gap-3 lg:flex">
          <a href="mailto:inquiry@ssourcingchina.com" className="text-sm font-medium text-slate-700 hover:text-blue-700">
            inquiry@ssourcingchina.com
          </a>
          <PrimaryButton to="/contact" className="px-5 py-2.5">Get a Free Sourcing Quote</PrimaryButton>
        </div>

        <button
          type="button"
          className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-slate-300 bg-white text-slate-950 lg:hidden"
          onClick={() => setOpen((value) => !value)}
          aria-expanded={open}
          aria-label="Toggle navigation"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>

      {open && (
        <div className="border-t border-slate-200 bg-white px-4 py-4 text-slate-950 shadow-sm lg:hidden">
          <div className="mx-auto grid max-w-7xl gap-2">
            {navLinks.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                className={({ isActive }) =>
                  `rounded-xl px-4 py-3 text-sm font-medium ${isActive ? 'bg-blue-50 text-blue-700' : 'text-slate-700'}`
                }
              >
                {item.label}
              </NavLink>
            ))}
            <PrimaryButton to="/contact" className="mt-2 w-full">Get a Free Sourcing Quote</PrimaryButton>
          </div>
        </div>
      )}
    </header>
  )
}

function Hero() {
  return (
    <section className="relative overflow-hidden bg-slate-950 text-white">
      <div className="absolute inset-0 opacity-25" data-strk-bg-id="hero-bg-factory-qc-91b2a7" data-strk-bg="[hero-image-context] [hero-subtitle] [hero-title]" data-strk-bg-ratio="16x9" data-strk-bg-width="1600" />
      <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/95 to-slate-900/70" />
      <div className="relative mx-auto grid max-w-7xl gap-12 px-4 py-20 sm:px-6 md:py-28 lg:grid-cols-[1.05fr_0.95fr] lg:px-8">
        <div className="flex flex-col justify-center">
          <p className="inline-flex w-fit rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-semibold text-blue-100">
            China-based sourcing support for overseas buyers
          </p>
          <h1 id="hero-title" className="mt-6 text-4xl font-semibold tracking-tight text-white md:text-6xl">
            China Sourcing Agent for Global Buyers
          </h1>
          <p id="hero-subtitle" className="mt-6 max-w-2xl text-lg leading-8 text-slate-200">
            SSourcing China helps importers, brands, distributors, and e-commerce sellers find reliable suppliers, verify factories, inspect quality, follow production, and coordinate shipping.
          </p>
          <p id="hero-image-context" className="hidden" aria-hidden="true">
            Quality inspector checking manufactured products in a China factory production line with export cartons and shipping coordination.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <PrimaryButton to="/contact">Get a Free Sourcing Quote</PrimaryButton>
            <SecondaryButton to="/how-it-works" className="border-white/25 bg-white/10 text-white hover:border-white hover:text-white">See How It Works</SecondaryButton>
          </div>
          <div className="mt-10 grid gap-4 text-sm text-slate-200 sm:grid-cols-3">
            {['Supplier screening', 'Factory verification', 'QC and shipment'].map((item) => (
              <div key={item} className="flex items-center gap-2">
                <CheckCircle2 className="h-5 w-5 text-amber-500" />
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="rounded-3xl border border-white/15 bg-white/10 p-3 shadow-2xl backdrop-blur" aria-label="Quality inspector checking products in a China factory">
          <div
            className="h-full min-h-[360px] w-full rounded-2xl bg-slate-800 bg-cover bg-center"
            data-strk-bg-id="hero-qc-inspection-3fa8c1"
            data-strk-bg="[hero-image-context] [hero-subtitle] [hero-title]"
            data-strk-bg-ratio="4x3"
            data-strk-bg-width="1000"
          />
        </div>
      </div>
    </section>
  )
}

function ServicesSection({ compact = false }) {
  return (
    <section className="bg-white py-16 text-slate-950 md:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Services"
          title="Practical sourcing support from supplier search to shipment"
          description="Choose a single service or ask us to manage the full sourcing workflow. We keep the process clear, documented, and focused on your buying criteria."
          align={compact ? 'left' : 'center'}
        />
        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => {
            const Icon = serviceIcons[index]
            return (
              <article key={service.title} className="rounded-2xl border border-slate-200 bg-white p-6 text-slate-950 shadow-sm transition hover:-translate-y-1 hover:shadow-soft">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 text-blue-700">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="mt-5 text-xl font-semibold text-slate-950">{service.title}</h3>
                <p className="mt-3 leading-7 text-slate-700">{service.description}</p>
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
    <section className="bg-slate-50 py-16 text-slate-950 md:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
          <div>
            <SectionHeading
              eyebrow="Sourcing process"
              title="A structured workflow that keeps overseas buying visible"
              description="Every project is different, but qualified sourcing work should always make supplier selection, production status, quality risk, and shipment handover easier to understand."
            />
            <PrimaryButton to="/how-it-works" className="mt-8">View the full process</PrimaryButton>
          </div>
          <div className="grid gap-4">
            {processSteps.map(([number, title, description]) => (
              <article key={number} className="grid gap-4 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:grid-cols-[72px_1fr]">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-slate-900 text-sm font-bold text-white">{number}</div>
                <div>
                  <h3 className="text-lg font-semibold text-slate-950">{title}</h3>
                  <p className="mt-2 leading-7 text-slate-700">{description}</p>
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
    <section className="bg-white py-16 text-slate-950 md:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
          <div className="h-[420px] overflow-hidden rounded-3xl border border-slate-200 bg-slate-100 bg-cover bg-center shadow-soft" aria-label="Factory warehouse with export cartons ready for shipping" data-strk-bg-id="products-warehouse-export-cartons-b7f2d9" data-strk-bg="[products-desc] [products-title]" data-strk-bg-ratio="4x3" data-strk-bg-width="900" />
          <div>
            <SectionHeading
              eyebrow="Products we source"
              title="From consumer goods to industrial components"
              description="We support categories where supplier capability, specifications, packaging, and production follow-up matter. If your item is outside this list, send the brief and we will review fit honestly."
            />
            <p id="products-title" className="hidden" aria-hidden="true">Products sourced from China factories and suppliers</p>
            <p id="products-desc" className="hidden" aria-hidden="true">Consumer goods industrial components packaging warehouse export cartons supplier sourcing</p>
            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              {productCategories.map((category) => (
                <div key={category} className="flex items-start gap-3 rounded-xl border border-slate-200 bg-slate-50 p-4 text-slate-950">
                  <PackageCheck className="mt-0.5 h-5 w-5 shrink-0 text-blue-700" />
                  <span className="font-medium text-slate-800">{category}</span>
                </div>
              ))}
            </div>
            <PrimaryButton to="/products" className="mt-8">Explore product categories</PrimaryButton>
          </div>
        </div>
      </div>
    </section>
  )
}

function ProblemsSection() {
  return (
    <section className="bg-slate-950 py-16 text-white md:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <SectionHeading
            eyebrow="Problems we solve"
            title="Reduce avoidable sourcing risk before it becomes expensive"
            description="We help buyers bring local visibility into supplier selection, quality expectations, production progress, and shipping coordination."
            tone="dark"
          />
          <div className="grid gap-4">
            {problems.map((problem) => (
              <div key={problem} className="flex gap-3 rounded-2xl border border-white/15 bg-white/10 p-5 text-white">
                <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-amber-500" />
                <p className="leading-7 text-slate-100">{problem}</p>
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
    <section className="bg-slate-50 py-16 text-slate-950 md:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Trust points"
          title="Clear communication, realistic checks, and buyer-focused reporting"
          description="SSourcing China is designed for overseas buyers who need dependable local coordination without inflated promises."
          align="center"
        />
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {trustPoints.map((point) => (
            <article key={point.metric} className="rounded-2xl border border-slate-200 bg-white p-6 text-center text-slate-950 shadow-sm">
              <h3 className="text-2xl font-semibold text-slate-900">{point.metric}</h3>
              <p className="mt-3 leading-7 text-slate-700">{point.label}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

function CaseStudiesSection({ showIntro = true }) {
  return (
    <section className="bg-white py-16 text-slate-950 md:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {showIntro && (
          <SectionHeading
            eyebrow="Case studies"
            title="Examples of practical sourcing support"
            description="These scenarios show the kind of structured support overseas buyers often need when sourcing from China."
            align="center"
          />
        )}
        <div className={showIntro ? 'mt-12 grid gap-6 lg:grid-cols-3' : 'grid gap-6 lg:grid-cols-3'}>
          {caseStudies.map((study) => (
            <article key={study.title} className="rounded-2xl border border-slate-200 bg-white p-6 text-slate-950 shadow-sm">
              <span className="rounded-full bg-amber-100 px-3 py-1 text-xs font-semibold uppercase tracking-[0.16em] text-slate-900">{study.category}</span>
              <h3 className="mt-5 text-xl font-semibold text-slate-950">{study.title}</h3>
              <p className="mt-4 text-sm font-semibold text-blue-800">Challenge</p>
              <p className="mt-2 leading-7 text-slate-700">{study.challenge}</p>
              <p className="mt-4 text-sm font-semibold text-blue-800">Support provided</p>
              <p className="mt-2 leading-7 text-slate-700">{study.result}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

function FaqSection() {
  return (
    <section className="bg-slate-50 py-16 text-slate-950 md:py-24">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="FAQ"
          title="Questions overseas buyers often ask"
          description="If your project has unusual specifications, compliance needs, or logistics requirements, include them in the inquiry form."
          align="center"
        />
        <div className="mt-10 divide-y divide-slate-200 rounded-2xl border border-slate-200 bg-white text-slate-950 shadow-sm">
          {faqs.map(([question, answer]) => (
            <details key={question} className="group p-6 open:bg-white">
              <summary className="cursor-pointer list-none text-lg font-semibold text-slate-950">
                <span className="flex items-center justify-between gap-4">
                  {question}
                  <span className="text-blue-700 group-open:rotate-45">+</span>
                </span>
              </summary>
              <p className="mt-4 leading-7 text-slate-700">{answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  )
}

const initialForm = {
  name: '',
  company: '',
  email: '',
  country: '',
  productCategory: '',
  quantity: '',
  servicesNeeded: ['supplier_search'],
  message: '',
}

function InquiryForm({ compact = false }) {
  const [values, setValues] = useState(initialForm)
  const [status, setStatus] = useState('idle')
  const [feedback, setFeedback] = useState('')

  const onChange = (event) => {
    const { name, value } = event.target
    setValues((current) => ({ ...current, [name]: value }))
  }

  const toggleService = (value) => {
    setValues((current) => {
      const exists = current.servicesNeeded.includes(value)
      const servicesNeeded = exists
        ? current.servicesNeeded.filter((item) => item !== value)
        : [...current.servicesNeeded, value]
      return { ...current, servicesNeeded }
    })
  }

  const validate = () => {
    if (!values.name.trim()) return 'Please enter your name.'
    if (!/^\S+@\S+\.\S+$/.test(values.email.trim())) return 'Please enter a valid business email.'
    if (!values.productCategory.trim()) return 'Please describe the product you want to source.'
    if (!values.message.trim()) return 'Please add a few project details.'
    return ''
  }

  const onSubmit = async (event) => {
    event.preventDefault()
    setFeedback('')
    const validationMessage = validate()

    if (validationMessage) {
      setStatus('error')
      setFeedback(validationMessage)
      return
    }

    setStatus('submitting')
    console.log('Submitting sourcing inquiry', { productCategory: values.productCategory, servicesNeeded: values.servicesNeeded })

    try {
      await createSourcingInquiry(values)
      setStatus('success')
      setFeedback('Thank you. Your sourcing inquiry has been received and we will review your brief shortly.')
      setValues(initialForm)
    } catch (error) {
      console.error('Sourcing inquiry submission failed', error)
      setStatus('error')
      setFeedback(error.message || 'Unable to submit the inquiry. Please try again.')
    }
  }

  return (
    <form onSubmit={onSubmit} className="rounded-3xl border border-slate-200 bg-white p-6 text-slate-950 shadow-soft md:p-8" aria-busy={status === 'submitting'}>
      <div className="grid gap-5 sm:grid-cols-2">
        <label className="grid gap-2 text-sm font-semibold text-slate-950">
          Name *
          <input className="rounded-xl border border-slate-300 bg-white px-4 py-3 text-slate-900 outline-none transition placeholder:text-slate-500 focus:border-blue-700 focus:ring-4 focus:ring-blue-100" name="name" value={values.name} onChange={onChange} placeholder="Your name" />
        </label>
        <label className="grid gap-2 text-sm font-semibold text-slate-950">
          Business email *
          <input className="rounded-xl border border-slate-300 bg-white px-4 py-3 text-slate-900 outline-none transition placeholder:text-slate-500 focus:border-blue-700 focus:ring-4 focus:ring-blue-100" name="email" type="email" value={values.email} onChange={onChange} placeholder="you@company.com" />
        </label>
        <label className="grid gap-2 text-sm font-semibold text-slate-950">
          Company
          <input className="rounded-xl border border-slate-300 bg-white px-4 py-3 text-slate-900 outline-none transition placeholder:text-slate-500 focus:border-blue-700 focus:ring-4 focus:ring-blue-100" name="company" value={values.company} onChange={onChange} placeholder="Company name" />
        </label>
        <label className="grid gap-2 text-sm font-semibold text-slate-950">
          Country / region
          <input className="rounded-xl border border-slate-300 bg-white px-4 py-3 text-slate-900 outline-none transition placeholder:text-slate-500 focus:border-blue-700 focus:ring-4 focus:ring-blue-100" name="country" value={values.country} onChange={onChange} placeholder="United States, Germany, UAE..." />
        </label>
        <label className="grid gap-2 text-sm font-semibold text-slate-950">
          Product category *
          <input className="rounded-xl border border-slate-300 bg-white px-4 py-3 text-slate-900 outline-none transition placeholder:text-slate-500 focus:border-blue-700 focus:ring-4 focus:ring-blue-100" name="productCategory" value={values.productCategory} onChange={onChange} placeholder="e.g. kitchen storage containers" />
        </label>
        <label className="grid gap-2 text-sm font-semibold text-slate-950">
          Estimated quantity
          <input className="rounded-xl border border-slate-300 bg-white px-4 py-3 text-slate-900 outline-none transition placeholder:text-slate-500 focus:border-blue-700 focus:ring-4 focus:ring-blue-100" name="quantity" value={values.quantity} onChange={onChange} placeholder="e.g. 5,000 units" />
        </label>
      </div>

      {!compact && (
        <fieldset className="mt-6">
          <legend className="text-sm font-semibold text-slate-950">Services needed</legend>
          <div className="mt-3 grid gap-3 sm:grid-cols-2">
            {serviceOptions.map((option) => (
              <label key={option.value} className="flex cursor-pointer items-center gap-3 rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm font-medium text-slate-800">
                <input
                  type="checkbox"
                  className="h-4 w-4 accent-blue-700"
                  checked={values.servicesNeeded.includes(option.value)}
                  onChange={() => toggleService(option.value)}
                />
                {option.label}
              </label>
            ))}
          </div>
        </fieldset>
      )}

      <label className="mt-6 grid gap-2 text-sm font-semibold text-slate-950">
        Project details *
        <textarea
          className="min-h-36 rounded-xl border border-slate-300 bg-white px-4 py-3 text-slate-900 outline-none transition placeholder:text-slate-500 focus:border-blue-700 focus:ring-4 focus:ring-blue-100"
          name="message"
          value={values.message}
          onChange={onChange}
          placeholder="Tell us the product, target price, quality requirements, destination market, deadline, and any supplier concerns."
        />
      </label>

      <button
        type="submit"
        disabled={status === 'submitting'}
        className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-blue-700 px-6 py-3 text-sm font-semibold text-white transition hover:bg-blue-800 disabled:cursor-not-allowed disabled:bg-slate-400 sm:w-auto"
      >
        {status === 'submitting' ? 'Submitting inquiry...' : 'Get a Free Sourcing Quote'}
        <ArrowRight className="h-4 w-4" />
      </button>

      {feedback && (
        <p className={`mt-4 rounded-xl px-4 py-3 text-sm font-medium ${status === 'success' ? 'bg-emerald-50 text-emerald-800' : 'bg-red-50 text-red-800'}`} role={status === 'success' ? 'status' : 'alert'}>
          {feedback}
        </p>
      )}
    </form>
  )
}

function InquirySection() {
  return (
    <section className="bg-white py-16 text-slate-950 md:py-24">
      <div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-[0.82fr_1.18fr] lg:px-8">
        <div>
          <SectionHeading
            eyebrow="Inquiry form"
            title="Send your sourcing brief for a practical review"
            description="Use the form to share your product, quantity, target market, quality expectations, and the support you need. We will review the information and respond with the next steps."
          />
          <div className="mt-8 space-y-4 text-slate-700">
            <p className="flex gap-3"><Mail className="mt-1 h-5 w-5 text-blue-700" /> inquiry@ssourcingchina.com</p>
            <p className="flex gap-3"><Globe2 className="mt-1 h-5 w-5 text-blue-700" /> Supporting overseas buyers sourcing from China</p>
            <p className="flex gap-3"><Phone className="mt-1 h-5 w-5 text-blue-700" /> Response based on project details and service fit</p>
          </div>
        </div>
        <InquiryForm />
      </div>
    </section>
  )
}

function CtaBand() {
  return (
    <section className="bg-slate-900 py-14 text-white">
      <div className="mx-auto flex max-w-7xl flex-col gap-6 px-4 sm:px-6 md:flex-row md:items-center md:justify-between lg:px-8">
        <div>
          <h2 className="text-2xl font-semibold tracking-tight text-white md:text-3xl">Ready to review a China sourcing project?</h2>
          <p className="mt-3 max-w-2xl leading-7 text-slate-200">Send the product brief and the support you need. We will help identify a practical next step.</p>
        </div>
        <PrimaryButton to="/contact" className="shrink-0 bg-white text-slate-900 hover:bg-blue-50">Get a Free Sourcing Quote</PrimaryButton>
      </div>
    </section>
  )
}

function Footer() {
  return (
    <footer className="bg-slate-950 text-white">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-12 sm:px-6 md:grid-cols-[1fr_1.2fr] lg:px-8">
        <div>
          <Link to="/" className="flex items-center gap-3">
            <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-white text-sm font-bold text-slate-900">SS</span>
            <span>
              <span className="block font-semibold">SSourcing China</span>
              <span className="block text-sm text-slate-300">China Sourcing Agent for Global Buyers</span>
            </span>
          </Link>
          <p className="mt-5 max-w-md leading-7 text-slate-300">Supplier search, factory verification, quality inspection, production follow-up, and shipping coordination for overseas buyers sourcing from China.</p>
        </div>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          <div>
            <h3 className="font-semibold text-white">Pages</h3>
            <div className="mt-4 grid gap-2">
              {navLinks.slice(1).map((item) => (
                <Link key={item.path} to={item.path} className="text-sm text-slate-300 hover:text-white">{item.label}</Link>
              ))}
            </div>
          </div>
          <div>
            <h3 className="font-semibold text-white">Core services</h3>
            <div className="mt-4 grid gap-2 text-sm text-slate-300">
              <span>Supplier search</span>
              <span>Factory verification</span>
              <span>Quality inspection</span>
              <span>Shipping coordination</span>
            </div>
          </div>
          <div>
            <h3 className="font-semibold text-white">Contact</h3>
            <div className="mt-4 grid gap-2 text-sm text-slate-300">
              <span>inquiry@ssourcingchina.com</span>
              <span>China-based sourcing support</span>
            </div>
          </div>
        </div>
      </div>
      <div className="border-t border-white/10 py-5 text-center text-sm text-slate-400">© 2026 SSourcing China. Practical sourcing support for overseas buyers.</div>
    </footer>
  )
}

function PageHero({ eyebrow, title, description, imageId = 'page-hero-b2b-sourcing-2bd6ea' }) {
  return (
    <section className="bg-slate-950 py-16 text-white md:py-24">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[1fr_0.85fr] lg:items-center lg:px-8">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-blue-100">{eyebrow}</p>
          <h1 id={`${imageId}-title`} className="mt-4 text-4xl font-semibold tracking-tight text-white md:text-5xl">{title}</h1>
          <p id={`${imageId}-desc`} className="mt-5 max-w-3xl text-lg leading-8 text-slate-200">{description}</p>
        </div>
        <div
          className="h-72 w-full rounded-3xl border border-white/15 bg-slate-800 bg-cover bg-center shadow-2xl"
          aria-label={title}
          data-strk-bg-id={imageId}
          data-strk-bg={`[${imageId}-desc] [${imageId}-title]`}
          data-strk-bg-ratio="4x3"
          data-strk-bg-width="800"
        />
      </div>
    </section>
  )
}

function HomePage() {
  return (
    <>
      <Hero />
      <ServicesSection />
      <ProcessSection />
      <ProductsSection />
      <ProblemsSection />
      <TrustSection />
      <CaseStudiesSection />
      <FaqSection />
      <InquirySection />
    </>
  )
}

function ServicesPage() {
  return (
    <>
      <PageHero eyebrow="Services" title="China sourcing services built for overseas buyers" description="Use SSourcing China for supplier discovery, factory checks, quality inspection, production follow-up, and shipment coordination when local visibility matters." imageId="services-hero-factory-meeting-8d4c92" />
      <ServicesSection compact />
      <ProblemsSection />
      <CtaBand />
    </>
  )
}

function HowItWorksPage() {
  return (
    <>
      <PageHero eyebrow="How it works" title="A clear sourcing process from brief to shipment" description="We keep the workflow practical: define the requirement, compare suppliers, verify where needed, follow production, inspect quality, and coordinate shipment handover." imageId="process-hero-production-follow-up-f0a51c" />
      <ProcessSection />
      <TrustSection />
      <CtaBand />
    </>
  )
}

function ProductsPage() {
  return (
    <>
      <PageHero eyebrow="Products we source" title="Product categories sourced through China supply chains" description="We focus on categories where supplier fit, quality expectations, packaging, and lead time require careful communication and follow-up." imageId="products-hero-china-warehouse-6e21ac" />
      <ProductsSection />
      <section className="bg-slate-50 py-16 text-slate-950 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading eyebrow="Category fit" title="What makes a project suitable" description="A good sourcing brief usually includes product photos, target specifications, expected quantity, destination market, and acceptable quality standard." align="center" />
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {['Clear specifications', 'Realistic order volume', 'Quality requirements defined'].map((item) => (
              <div key={item} className="rounded-2xl border border-slate-200 bg-white p-6 text-center shadow-sm">
                <CheckCircle2 className="mx-auto h-8 w-8 text-blue-700" />
                <h3 className="mt-4 text-lg font-semibold text-slate-950">{item}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>
      <CtaBand />
    </>
  )
}

function CaseStudiesPage() {
  return (
    <>
      <PageHero eyebrow="Case studies" title="Sourcing scenarios where structured support helps" description="Every project depends on product type, supplier capability, and buyer requirements. These examples show practical sourcing coordination in common B2B situations." imageId="case-studies-hero-qc-report-4ad319" />
      <CaseStudiesSection showIntro={false} />
      <CtaBand />
    </>
  )
}

function BlogPage() {
  return (
    <>
      <PageHero eyebrow="Blog" title="Practical notes for sourcing from China" description="Clear, buyer-focused articles on supplier comparison, factory verification, quality checks, production follow-up, and shipping coordination." imageId="blog-hero-sourcing-documents-d3bb57" />
      <section className="bg-white py-16 text-slate-950 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-6 lg:grid-cols-3">
            {blogPosts.map((post) => (
              <article key={post.title} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
                <p className="text-sm font-semibold text-blue-700">{post.date}</p>
                <h2 className="mt-3 text-xl font-semibold text-slate-950">{post.title}</h2>
                <p className="mt-4 leading-7 text-slate-700">{post.excerpt}</p>
                <span className="mt-5 inline-flex text-sm font-semibold text-blue-700">Read article</span>
              </article>
            ))}
          </div>
        </div>
      </section>
      <CtaBand />
    </>
  )
}

function ContactPage() {
  return (
    <>
      <PageHero eyebrow="Contact" title="Get a Free Sourcing Quote" description="Send your sourcing requirements and tell us what support you need. We will review the project details and respond with a practical next step." imageId="contact-hero-business-sourcing-call-7c1ef4" />
      <InquirySection />
    </>
  )
}

function ScrollAndImageManager({ children }) {
  const containerRef = useRef(null)
  const location = useLocation()

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [location.pathname])

  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, containerRef.current)
    })
    return () => window.cancelAnimationFrame(frameId)
  }, [location.pathname])

  return <div ref={containerRef}>{children}</div>
}

export default function SSourcingSite() {
  return (
    <ScrollAndImageManager>
      <div className="min-h-screen bg-slate-50 text-slate-950">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/how-it-works" element={<HowItWorksPage />} />
            <Route path="/products" element={<ProductsPage />} />
            <Route path="/case-studies" element={<CaseStudiesPage />} />
            <Route path="/blog" element={<BlogPage />} />
            <Route path="/contact" element={<ContactPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </ScrollAndImageManager>
  )
}
