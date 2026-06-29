import React from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, ShieldCheck, Search, ClipboardCheck, Ship, Factory, CheckCircle2, Star, Users, Globe } from 'lucide-react'
import { useState } from 'react'
import { createInquiry } from '@/api/inquiries'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'

const services = [
  {
    title: 'Supplier Sourcing',
    description: 'We identify and vet reliable manufacturers in China that match your product requirements, budget, and quality standards.',
    icon: Search,
  },
  {
    title: 'Factory Verification',
    description: 'On-site audits to confirm factory legitimacy, capacity, certifications, and business registration before you commit.',
    icon: Factory,
  },
  {
    title: 'Quality Inspection',
    description: 'Pre-production, during-production, and pre-shipment inspections to catch defects early and reduce returns.',
    icon: ClipboardCheck,
  },
  {
    title: 'Shipping Coordination',
    description: 'End-to-end logistics support including freight forwarding, customs documentation, and door-to-door delivery.',
    icon: Ship,
  },
]

const processSteps = [
  { step: '01', title: 'Share Your Requirements', description: 'Tell us what you need: product specs, target price, order volume, and timeline.' },
  { step: '02', title: 'We Source & Verify', description: 'We find matching suppliers, verify factories, and negotiate terms on your behalf.' },
  { step: '03', title: 'Inspect & Approve', description: 'We conduct inspections and share reports so you can approve production with confidence.' },
  { step: '04', title: 'Ship & Deliver', description: 'We coordinate shipping, handle documentation, and track your order until it arrives.' },
]

const trustPoints = [
  { stat: '500+', label: 'Verified suppliers in our network' },
  { stat: '98%', label: 'On-time delivery rate' },
  { stat: '24h', label: 'Average response time' },
  { stat: '50+', label: 'Countries served' },
]

const problems = [
  'Unreliable suppliers with inconsistent quality',
  'Language and time-zone barriers',
  'Hidden costs and unclear pricing',
  'Difficulty verifying factory legitimacy',
  'Quality issues discovered only after shipment',
  'Complex shipping and customs procedures',
]

const faqs = [
  {
    question: 'What products can you help me source?',
    answer: 'We source a wide range of consumer goods, electronics, home products, industrial components, and more. If you have a specific product in mind, share the details and we will confirm feasibility.',
  },
  {
    question: 'How do you verify suppliers?',
    answer: 'We conduct on-site factory audits, review business licenses, check production capacity, and assess quality management systems. We also collect references and perform sample evaluations.',
  },
  {
    question: 'What are your inspection services?',
    answer: 'We offer pre-production inspections, during-production inspections, and pre-shipment inspections. Each inspection follows standardized checklists and includes a detailed report with photos.',
  },
  {
    question: 'How much does your service cost?',
    answer: 'Our fees depend on the scope of work. We offer transparent pricing based on services required. Contact us for a free quote tailored to your project.',
  },
  {
    question: 'Do you handle shipping and customs?',
    answer: 'Yes. We coordinate freight forwarding, prepare shipping documents, and work with customs brokers to clear goods through Chinese export and your country import procedures.',
  },
]

export default function Home() {
  const [form, setForm] = useState({ name: '', email: '', company: '', country: '', productCategory: '', message: '' })
  const [status, setStatus] = useState('idle')
  const [error, setError] = useState(null)

  const onChange = (e) => {
    const { name, value } = e.target
    setForm((prev) => ({ ...prev, [name]: value }))
  }

  const onSubmit = async (e) => {
    e.preventDefault()
    setError(null)
    if (!form.name.trim() || !form.email.trim() || !form.message.trim()) {
      setError('Please fill in all required fields.')
      setStatus('error')
      return
    }
    setStatus('submitting')
    try {
      await createInquiry(form)
      setStatus('success')
      setForm({ name: '', email: '', company: '', country: '', productCategory: '', message: '' })
    } catch (err) {
      setError(err.message || 'Submission failed. Please try again.')
      setStatus('error')
    }
  }

  return (
    <div>
      {/* Hero */}
      <section className="relative overflow-hidden bg-slate-900 text-white">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900" />
        <div className="relative mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium text-slate-200">
              <Globe className="h-3.5 w-3.5" />
              China Sourcing Agent for Global Buyers
            </div>
            <h1 className="mt-6 text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
              China Sourcing Agent for Global Buyers
            </h1>
            <p className="mt-6 text-lg leading-8 text-slate-300">
              We help overseas buyers find reliable suppliers, verify factories, inspect quality, follow production, and coordinate shipping. One trusted partner from inquiry to delivery.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link to="/contact">
                <Button size="lg" className="bg-white text-slate-900 hover:bg-slate-100">
                  Get a Free Sourcing Quote
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
              <Link to="/how-it-works">
                <Button size="lg" variant="outline" className="border-white/20 text-white hover:bg-white/10">
                  See How It Works
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Points */}
      <section className="border-b border-slate-200 bg-white">
        <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
            {trustPoints.map((item) => (
              <div key={item.stat} className="text-center">
                <div className="text-3xl font-bold text-slate-900">{item.stat}</div>
                <div className="mt-1 text-sm text-slate-600">{item.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <h2 className="text-3xl font-bold tracking-tight text-slate-900">End-to-end sourcing support</h2>
            <p className="mt-3 text-lg text-slate-600">From finding the right factory to getting your goods delivered, we manage the full sourcing cycle.</p>
          </div>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {services.map((service) => (
              <div key={service.title} className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm transition-shadow hover:shadow-md">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-slate-100 text-slate-900">
                  <service.icon className="h-5 w-5" />
                </div>
                <h3 className="mt-4 text-base font-semibold text-slate-900">{service.title}</h3>
                <p className="mt-2 text-sm leading-6 text-slate-600">{service.description}</p>
              </div>
            ))}
          </div>
          <div className="mt-8 text-center">
            <Link to="/services">
              <Button variant="outline">View all services <ArrowRight className="ml-2 h-4 w-4" /></Button>
            </Link>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="bg-slate-50 py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <h2 className="text-3xl font-bold tracking-tight text-slate-900">A clear, low-risk sourcing process</h2>
            <p className="mt-3 text-lg text-slate-600">We keep you informed at every stage so there are no surprises.</p>
          </div>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {processSteps.map((item) => (
              <div key={item.step} className="relative rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
                <div className="text-xs font-semibold text-slate-500">{item.step}</div>
                <h3 className="mt-2 text-base font-semibold text-slate-900">{item.title}</h3>
                <p className="mt-2 text-sm leading-6 text-slate-600">{item.description}</p>
              </div>
            ))}
          </div>
          <div className="mt-8 text-center">
            <Link to="/how-it-works">
              <Button variant="outline">Learn more about our process <ArrowRight className="ml-2 h-4 w-4" /></Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Problems We Solve */}
      <section className="bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
            <div>
              <h2 className="text-3xl font-bold tracking-tight text-slate-900">Common sourcing challenges we solve</h2>
              <p className="mt-3 text-lg text-slate-600">Overseas buyers often face risks and friction when sourcing from China. We remove those barriers.</p>
              <ul className="mt-8 space-y-4">
                {problems.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-emerald-600" />
                    <span className="text-sm leading-6 text-slate-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-2xl border border-slate-200 bg-slate-50 p-8 shadow-sm">
              <div className="flex items-center gap-3">
                <ShieldCheck className="h-6 w-6 text-slate-900" />
                <h3 className="text-lg font-semibold text-slate-900">Why buyers choose us</h3>
              </div>
              <ul className="mt-6 space-y-4">
                <li className="flex items-start gap-3">
                  <Users className="mt-0.5 h-5 w-5 shrink-0 text-slate-700" />
                  <div>
                    <div className="text-sm font-semibold text-slate-900">Dedicated sourcing specialist</div>
                    <div className="text-sm text-slate-600">A single point of contact who knows your project.</div>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <Star className="mt-0.5 h-5 w-5 shrink-0 text-slate-700" />
                  <div>
                    <div className="text-sm font-semibold text-slate-900">Transparent reporting</div>
                    <div className="text-sm text-slate-600">Photos, videos, and written updates at every milestone.</div>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <Globe className="mt-0.5 h-5 w-5 shrink-0 text-slate-700" />
                  <div>
                    <div className="text-sm font-semibold text-slate-900">Global logistics support</div>
                    <div className="text-sm text-slate-600">We handle shipping so you can focus on your business.</div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Case Studies Preview */}
      <section className="bg-slate-50 py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <h2 className="text-3xl font-bold tracking-tight text-slate-900">Recent sourcing results</h2>
            <p className="mt-3 text-lg text-slate-600">Real examples of how we helped buyers reduce cost, improve quality, and ship on time.</p>
          </div>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[
              { title: 'Home goods importer', result: 'Reduced unit cost by 18% while improving defect rate from 4.2% to 0.6%' },
              { title: 'Electronics brand', result: 'Verified 3 factories and selected the best-fit supplier within 2 weeks' },
              { title: 'Industrial parts buyer', result: 'Coordinated 40ft container shipment with zero customs delays' },
            ].map((item) => (
              <div key={item.title} className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
                <h3 className="text-base font-semibold text-slate-900">{item.title}</h3>
                <p className="mt-2 text-sm leading-6 text-slate-600">{item.result}</p>
                <Link to="/case-studies" className="mt-4 inline-flex items-center text-sm font-medium text-slate-900 hover:text-slate-700">
                  Read case study <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </div>
            ))}
          </div>
          <div className="mt-8 text-center">
            <Link to="/case-studies">
              <Button variant="outline">View all case studies <ArrowRight className="ml-2 h-4 w-4" /></Button>
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold tracking-tight text-slate-900">Frequently asked questions</h2>
          <p className="mt-3 text-lg text-slate-600">Quick answers to common questions about our sourcing services.</p>
          <div className="mt-8 space-y-4">
            {faqs.map((item) => (
              <details key={item.question} className="group rounded-xl border border-slate-200 bg-white p-5">
                <summary className="flex cursor-pointer items-center justify-between text-sm font-semibold text-slate-900">
                  {item.question}
                  <ArrowRight className="h-4 w-4 transition-transform group-open:rotate-90" />
                </summary>
                <p className="mt-3 text-sm leading-6 text-slate-600">{item.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Inquiry Form */}
      <section className="bg-slate-50 py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-2 lg:items-start">
            <div>
              <h2 className="text-3xl font-bold tracking-tight text-slate-900">Get a Free Sourcing Quote</h2>
              <p className="mt-3 text-lg text-slate-600">Tell us what you need. We will reply within one business day with a clear plan and pricing.</p>
              <div className="mt-8 space-y-4">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-emerald-600" />
                  <div>
                    <div className="text-sm font-semibold text-slate-900">No obligation</div>
                    <div className="text-sm text-slate-600">Free initial consultation and quote.</div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-emerald-600" />
                  <div>
                    <div className="text-sm font-semibold text-slate-900">Confidential</div>
                    <div className="text-sm text-slate-600">Your product details and contact info stay private.</div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-emerald-600" />
                  <div>
                    <div className="text-sm font-semibold text-slate-900">Fast response</div>
                    <div className="text-sm text-slate-600">We typically reply within 24 hours.</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <form onSubmit={onSubmit} className="space-y-4">
                <div className="grid gap-4 sm:grid-cols-2">
                  <div>
                    <label htmlFor="name" className="mb-1 block text-sm font-medium text-slate-900">Full name *</label>
                    <Input id="name" name="name" value={form.name} onChange={onChange} required placeholder="Your name" />
                  </div>
                  <div>
                    <label htmlFor="email" className="mb-1 block text-sm font-medium text-slate-900">Email *</label>
                    <Input id="email" name="email" type="email" value={form.email} onChange={onChange} required placeholder="you@company.com" />
                  </div>
                </div>
                <div className="grid gap-4 sm:grid-cols-2">
                  <div>
                    <label htmlFor="company" className="mb-1 block text-sm font-medium text-slate-900">Company</label>
                    <Input id="company" name="company" value={form.company} onChange={onChange} placeholder="Company name" />
                  </div>
                  <div>
                    <label htmlFor="country" className="mb-1 block text-sm font-medium text-slate-900">Country</label>
                    <Input id="country" name="country" value={form.country} onChange={onChange} placeholder="Your country" />
                  </div>
                </div>
                <div>
                  <label htmlFor="productCategory" className="mb-1 block text-sm font-medium text-slate-900">Product category</label>
                  <Input id="productCategory" name="productCategory" value={form.productCategory} onChange={onChange} placeholder="e.g. home goods, electronics" />
                </div>
                <div>
                  <label htmlFor="message" className="mb-1 block text-sm font-medium text-slate-900">Project details *</label>
                  <Textarea id="message" name="message" value={form.message} onChange={onChange} required rows={5} placeholder="Describe what you want to source, target price, order volume, and timeline." />
                </div>
                {status === 'success' && (
                  <div className="rounded-md bg-emerald-50 px-3 py-2 text-sm text-emerald-800">
                    Thank you. Your inquiry has been submitted. We will get back to you within 24 hours.
                  </div>
                )}
                {status === 'error' && error && (
                  <div className="rounded-md bg-red-50 px-3 py-2 text-sm text-red-800">{error}</div>
                )}
                <Button type="submit" disabled={status === 'submitting'} className="w-full">
                  {status === 'submitting' ? 'Submitting…' : 'Submit Inquiry'}
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
