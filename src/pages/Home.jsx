import React, { useRef, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { CheckCircle2, ShieldCheck, Factory, Ship, ClipboardCheck, Search, ArrowRight, Phone, Mail, Globe, Star, Users, Package, FileCheck } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'

const services = [
  {
    icon: Search,
    title: 'Supplier Sourcing',
    description: 'We identify and vet reliable manufacturers in China that match your product requirements, budget, and quality standards.',
  },
  {
    icon: ShieldCheck,
    title: 'Factory Verification',
    description: 'On-site audits to verify factory credentials, capacity, compliance, and business legitimacy before you commit.',
  },
  {
    icon: ClipboardCheck,
    title: 'Quality Inspection',
    description: 'Pre-production, during-production, and pre-shipment inspections to ensure products meet your specifications.',
  },
  {
    icon: Ship,
    title: 'Shipping Coordination',
    description: 'End-to-end logistics support including consolidation, customs documentation, and freight forwarding.',
  },
]

const problems = [
  {
    title: 'Unreliable suppliers',
    description: 'Difficulty finding trustworthy manufacturers that deliver on quality and timeline.',
  },
  {
    title: 'Quality risks',
    description: 'Hidden defects, material substitutions, and inconsistent production standards.',
  },
  {
    title: 'Communication barriers',
    description: 'Language gaps, time zone differences, and cultural misunderstandings slowing deals.',
  },
  {
    title: 'Shipping complexity',
    description: 'Navigating customs, tariffs, and logistics without local expertise.',
  },
]

const trustPoints = [
  { icon: Users, label: '500+ Buyers Served', description: 'From startups to enterprise brands' },
  { icon: Factory, label: '2,000+ Verified Factories', description: 'Across all major manufacturing sectors' },
  { icon: FileCheck, label: '10,000+ Inspections', description: 'Consistent quality assurance records' },
  { icon: Globe, label: '40+ Countries', description: 'Global reach with local expertise' },
]

const caseStudies = [
  {
    title: 'Home Goods Importer',
    result: 'Reduced defect rate from 18% to 2%',
    category: 'Quality Control',
  },
  {
    title: 'Electronics Brand',
    result: 'Cut sourcing time by 35%',
    category: 'Supplier Sourcing',
  },
  {
    title: 'Fashion Retailer',
    result: 'Saved $120K in first year',
    category: 'Cost Optimization',
  },
]

const faqs = [
  {
    question: 'What industries do you source?',
    answer: 'We source across electronics, home goods, textiles, machinery, automotive parts, and more. If it is manufactured in China, we can likely help.',
  },
  {
    question: 'How long does the sourcing process take?',
    answer: 'Initial supplier matching typically takes 5-10 business days. Full verification and first-order coordination usually takes 2-4 weeks depending on product complexity.',
  },
  {
    question: 'Do you handle small orders?',
    answer: 'Yes. We work with orders of all sizes, from sample quantities to full container loads. Our minimum engagement is a single product category.',
  },
  {
    question: 'How do you ensure quality?',
    answer: 'We use a three-stage inspection process: pre-production material checks, inline production monitoring, and final pre-shipment inspection with detailed reports.',
  },
  {
    question: 'What are your fees?',
    answer: 'We charge a success-based sourcing fee plus inspection and logistics costs. Details are provided in your free quote. No hidden charges.',
  },
]

export default function Home() {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <div ref={containerRef} className="flex flex-col">
      {/* Hero */}
      <section className="relative overflow-hidden bg-slate-50">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
          <div className="grid gap-10 lg:grid-cols-2 lg:gap-16 items-center">
            <div>
              <div className="inline-flex items-center rounded-full border border-slate-200 bg-white px-3 py-1 text-xs font-medium text-slate-700">
                <Globe className="mr-2 h-3.5 w-3.5" />
                China-based sourcing for global buyers
              </div>
              <h1 id="home-hero-title" className="mt-6 text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">
                China Sourcing Agent for Global Buyers
              </h1>
              <p id="home-hero-subtitle" className="mt-6 text-lg leading-8 text-slate-600">
                We help overseas buyers find reliable suppliers, verify factories, inspect quality, follow production, and coordinate shipping — so you can source with confidence.
              </p>
              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <Button asChild size="lg" className="w-full sm:w-auto">
                  <Link to="/contact">Get a Free Sourcing Quote</Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="w-full sm:w-auto">
                  <Link to="/how-it-works">See How It Works</Link>
                </Button>
              </div>
              <div className="mt-8 flex items-center gap-6 text-sm text-slate-600">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-green-600" />
                  <span>No minimum order</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-green-600" />
                  <span>Transparent pricing</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-green-600" />
                  <span>English-speaking team</span>
                </div>
              </div>
            </div>
            <div className="relative">
              <img
                data-strk-img-id="home-hero-img-8f2a9c"
                data-strk-img="[home-hero-subtitle] [home-hero-title]"
                data-strk-img-ratio="4x3"
                data-strk-img-width="800"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                alt="China factory and quality control"
                className="rounded-2xl shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Trust Points */}
      <section className="border-y border-slate-200 bg-white">
        <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {trustPoints.map((item) => (
              <div key={item.label} className="flex items-start gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-slate-100 text-slate-900">
                  <item.icon className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-slate-900">{item.label}</p>
                  <p className="mt-1 text-sm text-slate-600">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="bg-white py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <h2 id="services-section-title" className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
              End-to-end sourcing services
            </h2>
            <p id="services-section-subtitle" className="mt-4 text-lg text-slate-600">
              From finding the right factory to delivering goods to your door, we manage the full sourcing cycle.
            </p>
          </div>
          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {services.map((service) => (
              <div key={service.title} className="group rounded-xl border border-slate-200 bg-white p-6 shadow-sm transition-shadow hover:shadow-md">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-slate-100 text-slate-900">
                  <service.icon className="h-5 w-5" />
                </div>
                <h3 id={`service-${service.title.toLowerCase().replace(/ /g, '-')}-title`} className="mt-4 text-base font-semibold text-slate-900">
                  {service.title}
                </h3>
                <p id={`service-${service.title.toLowerCase().replace(/ /g, '-')}-desc`} className="mt-2 text-sm leading-6 text-slate-600">
                  {service.description}
                </p>
                <Link to="/services" className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-slate-900 hover:text-slate-700">
                  Learn more <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Problems We Solve */}
      <section className="bg-slate-50 py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-2 lg:gap-16 items-center">
            <div>
              <h2 id="problems-section-title" className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
                Common sourcing challenges we solve
              </h2>
              <p id="problems-section-subtitle" className="mt-4 text-lg text-slate-600">
                Many buyers face the same obstacles when sourcing from China. We remove the uncertainty.
              </p>
              <div className="mt-8 space-y-6">
                {problems.map((problem) => (
                  <div key={problem.title} className="flex gap-4">
                    <div className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-red-100 text-red-600">
                      <span className="text-xs font-bold">!</span>
                    </div>
                    <div>
                      <h3 className="text-base font-semibold text-slate-900">{problem.title}</h3>
                      <p className="mt-1 text-sm text-slate-600">{problem.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <img
                data-strk-img-id="problems-visual-8f2a9c"
                data-strk-img="[problems-section-subtitle] [problems-section-title]"
                data-strk-img-ratio="4x3"
                data-strk-img-width="800"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                alt="Sourcing challenges"
                className="rounded-2xl shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Case Studies Preview */}
      <section className="bg-white py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <h2 id="case-studies-section-title" className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
              Real results from real buyers
            </h2>
            <p id="case-studies-section-subtitle" className="mt-4 text-lg text-slate-600">
              See how we have helped companies reduce costs, improve quality, and streamline their China supply chain.
            </p>
          </div>
          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {caseStudies.map((cs) => (
              <article key={cs.title} className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
                <span className="inline-flex rounded-full bg-slate-100 px-2.5 py-0.5 text-xs font-medium text-slate-700">
                  {cs.category}
                </span>
                <h3 id={`case-${cs.title.toLowerCase().replace(/ /g, '-')}-title`} className="mt-3 text-base font-semibold text-slate-900">
                  {cs.title}
                </h3>
                <p id={`case-${cs.title.toLowerCase().replace(/ /g, '-')}-result`} className="mt-2 text-sm text-slate-600">
                  {cs.result}
                </p>
                <Link to="/case-studies" className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-slate-900 hover:text-slate-700">
                  Read case study <ArrowRight className="h-4 w-4" />
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-slate-50 py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
            <div>
              <h2 id="faq-section-title" className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
                Frequently asked questions
              </h2>
              <p id="faq-section-subtitle" className="mt-4 text-lg text-slate-600">
                Quick answers to common questions about working with a China sourcing agent.
              </p>
              <div className="mt-8">
                <Button asChild size="lg">
                  <Link to="/contact">Still have questions? Contact us</Link>
                </Button>
              </div>
            </div>
            <div className="space-y-6">
              {faqs.map((faq) => (
                <div key={faq.question} className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
                  <h3 id={`faq-${faq.question.toLowerCase().replace(/[^a-z0-9]+/g, '-')}-q`} className="text-base font-semibold text-slate-900">
                    {faq.question}
                  </h3>
                  <p id={`faq-${faq.question.toLowerCase().replace(/[^a-z0-9]+/g, '-')}-a`} className="mt-2 text-sm leading-6 text-slate-600">
                    {faq.answer}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Inquiry Form */}
      <section className="bg-white py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
            <div>
              <h2 id="inquiry-section-title" className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
                Get a free sourcing quote
              </h2>
              <p id="inquiry-section-subtitle" className="mt-4 text-lg text-slate-600">
                Tell us what you need. We will respond within 1 business day with a tailored sourcing plan and transparent pricing.
              </p>
              <div className="mt-8 space-y-4 text-sm text-slate-600">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 text-green-600" />
                  <span>Free initial consultation with no obligation</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 text-green-600" />
                  <span>Clear fee structure with no hidden charges</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 text-green-600" />
                  <span>Dedicated sourcing specialist for your project</span>
                </div>
              </div>
            </div>
            <InquiryForm />
          </div>
        </div>
      </section>
    </div>
  )
}

function InquiryForm() {
  const [status, setStatus] = React.useState('idle')
  const [error, setError] = React.useState(null)
  const [values, setValues] = React.useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    product: '',
    quantity: '',
    message: '',
  })

  const onChange = (e) => {
    const { name, value } = e.target
    setValues((v) => ({ ...v, [name]: value }))
  }

  const validate = (v) => {
    if (!v.name.trim()) return 'Name is required'
    if (!v.email.trim()) return 'Email is required'
    if (!/^\S+@\S+\.\S+$/.test(v.email)) return 'Provide a valid email'
    if (!v.product.trim()) return 'Product category is required'
    return null
  }

  const onSubmit = async (e) => {
    e.preventDefault()
    setError(null)
    const err = validate(values)
    if (err) {
      setError(err)
      return
    }

    setStatus('submitting')

    try {
      // Simulate submission for demo purposes
      await new Promise((resolve) => setTimeout(resolve, 1200))
      setStatus('success')
      setValues({ name: '', company: '', email: '', phone: '', product: '', quantity: '', message: '' })
    } catch (err) {
      console.error(err)
      setError(err.message || 'Submission failed')
      setStatus('error')
    }
  }

  return (
    <form onSubmit={onSubmit} className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
      <div className="grid gap-4 sm:grid-cols-2">
        <div className="space-y-1.5">
          <label htmlFor="name" className="text-sm font-medium text-slate-900">Full name *</label>
          <Input id="name" name="name" value={values.name} onChange={onChange} required placeholder="Your name" />
        </div>
        <div className="space-y-1.5">
          <label htmlFor="company" className="text-sm font-medium text-slate-900">Company</label>
          <Input id="company" name="company" value={values.company} onChange={onChange} placeholder="Company name" />
        </div>
        <div className="space-y-1.5">
          <label htmlFor="email" className="text-sm font-medium text-slate-900">Email *</label>
          <Input id="email" name="email" type="email" value={values.email} onChange={onChange} required placeholder="you@company.com" />
        </div>
        <div className="space-y-1.5">
          <label htmlFor="phone" className="text-sm font-medium text-slate-900">Phone / WhatsApp</label>
          <Input id="phone" name="phone" value={values.phone} onChange={onChange} placeholder="+1 234 567 890" />
        </div>
        <div className="space-y-1.5">
          <label htmlFor="product" className="text-sm font-medium text-slate-900">Product category *</label>
          <Input id="product" name="product" value={values.product} onChange={onChange} required placeholder="e.g. electronics, home goods" />
        </div>
        <div className="space-y-1.5">
          <label htmlFor="quantity" className="text-sm font-medium text-slate-900">Estimated quantity</label>
          <Input id="quantity" name="quantity" value={values.quantity} onChange={onChange} placeholder="e.g. 5,000 units" />
        </div>
      </div>
      <div className="mt-4 space-y-1.5">
        <label htmlFor="message" className="text-sm font-medium text-slate-900">Project details</label>
        <Textarea id="message" name="message" value={values.message} onChange={onChange} rows={4} placeholder="Tell us about your sourcing needs, target price, timeline, and any specific requirements." />
      </div>
      <Button type="submit" className="mt-6 w-full" disabled={status === 'submitting'}>
        {status === 'submitting' ? 'Submitting…' : 'Submit Inquiry'}
      </Button>
      {status === 'success' && (
        <p className="mt-3 text-sm text-green-700">Thanks! We will get back to you within 1 business day.</p>
      )}
      {status === 'error' && !!error && (
        <p className="mt-3 text-sm text-red-600">{error}</p>
      )}
    </form>
  )
}
