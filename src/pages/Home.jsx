import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Button } from '@/components/ui/button'
import {
  Search,
  ShieldCheck,
  ClipboardCheck,
  Factory,
  Ship,
  Headphones,
  CheckCircle2,
  ArrowRight,
  Star,
  Globe,
  Clock,
  DollarSign,
  Users,
  ChevronDown,
} from 'lucide-react'
import { DataClient } from '@strikingly/sdk'
import { STRK_PROJECT_URL, STRK_PROJECT_ANON_KEY } from '@/config.jsx'

const client = new DataClient(STRK_PROJECT_URL, STRK_PROJECT_ANON_KEY)

const services = [
  {
    icon: Search,
    title: 'Supplier Sourcing',
    description: 'We identify and vet reliable manufacturers in China that match your product requirements, quality standards, and budget.',
  },
  {
    icon: ShieldCheck,
    title: 'Factory Verification',
    description: 'On-site audits to verify factory credentials, capacity, quality systems, and business legitimacy before you commit.',
  },
  {
    icon: ClipboardCheck,
    title: 'Quality Inspection',
    description: 'Pre-production, during-production, and pre-shipment inspections to ensure products meet your specifications.',
  },
  {
    icon: Factory,
    title: 'Production Monitoring',
    description: 'Regular factory visits and progress reports to keep your production on schedule and within budget.',
  },
  {
    icon: Ship,
    title: 'Shipping Coordination',
    description: 'End-to-end logistics support including freight forwarding, customs clearance, and door-to-door delivery.',
  },
  {
    icon: Headphones,
    title: 'Dedicated Support',
    description: 'A single point of contact who understands your business and speaks your language throughout the process.',
  },
]

const problems = [
  {
    title: 'Unreliable Suppliers',
    description: 'Many overseas buyers struggle with suppliers who miss deadlines, cut corners on quality, or disappear after payment.',
    solution: 'We verify every supplier through on-site audits, reference checks, and trial orders before recommending them.',
  },
  {
    title: 'Quality Issues',
    description: 'Receiving products that don\'t match samples or specifications is a common and costly problem.',
    solution: 'Our QC team conducts multiple inspection stages with detailed reports and photographic evidence.',
  },
  {
    title: 'Communication Barriers',
    description: 'Language differences, time zones, and cultural gaps can lead to misunderstandings and delays.',
    solution: 'Your dedicated sourcing agent acts as your local representative, ensuring clear communication at every step.',
  },
  {
    title: 'Hidden Costs & Delays',
    description: 'Unexpected fees, production delays, and shipping problems can erode your margins and damage customer relationships.',
    solution: 'We provide transparent pricing, realistic timelines, and proactive problem-solving to keep your project on track.',
  },
]

const trustPoints = [
  { icon: Globe, stat: '50+', label: 'Countries Served' },
  { icon: Users, stat: '500+', label: 'Verified Suppliers' },
  { icon: CheckCircle2, stat: '2,000+', label: 'Successful Orders' },
  { icon: Clock, stat: '8+', label: 'Years Experience' },
]

const caseStudies = [
  {
    title: 'Electronics Importer from USA',
    category: 'Electronics',
    result: 'Reduced defect rate from 15% to under 2%',
    description: 'Helped a US electronics company source wireless chargers with consistent quality and on-time delivery.',
  },
  {
    title: 'Home Goods Retailer from UK',
    category: 'Home & Garden',
    result: 'Saved 22% on product costs',
    description: 'Identified alternative suppliers and negotiated better terms for a UK home goods retailer.',
  },
  {
    title: 'Auto Parts Distributor from Germany',
    category: 'Auto Parts',
    result: 'Cut lead time by 30%',
    description: 'Streamlined production and shipping processes for a German auto parts distributor.',
  },
]

const faqs = [
  {
    question: 'What is a sourcing agent?',
    answer: 'A sourcing agent is a local representative who helps international buyers find reliable suppliers, negotiate prices, inspect quality, and coordinate shipping from China. We act as your eyes, ears, and hands on the ground.',
  },
  {
    question: 'How do you verify suppliers?',
    answer: 'We conduct comprehensive factory audits including business license verification, facility visits, production capacity assessment, quality system review, and reference checks with existing clients.',
  },
  {
    question: 'What are your fees?',
    answer: 'Our fees are typically based on a percentage of the order value or a fixed project fee, depending on the scope of work. We provide transparent pricing with no hidden costs. Contact us for a customized quote.',
  },
  {
    question: 'Do you handle shipping and customs?',
    answer: 'Yes, we coordinate the entire logistics chain including freight forwarding, customs documentation, and door-to-door delivery. We work with trusted logistics partners to ensure smooth shipping.',
  },
  {
    question: 'What industries do you specialize in?',
    answer: 'We have extensive experience in electronics, textiles and apparel, home and garden products, industrial equipment, auto parts, and general consumer goods. Contact us to discuss your specific product category.',
  },
]

export default function Home() {
  const [openFaq, setOpenFaq] = useState(null)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    country: '',
    product_category: '',
    product_description: '',
    estimated_quantity: '',
    budget_range: '',
    timeline: '',
    message: '',
  })
  const [status, setStatus] = useState('idle')
  const [error, setError] = useState(null)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setError(null)
    setStatus('submitting')

    try {
      const { data, error: insertError } = await client
        .from('Sourcing Inquiries')
        .insert({
          data: {
            ...formData,
            id: crypto.randomUUID(),
            created_at: new Date().toISOString(),
            updated_at: new Date().toISOString(),
          },
        })
        .select()
        .single()

      if (insertError || data?.success === false) {
        const message = data?.errors?.join(', ') || insertError?.message || 'Failed to submit inquiry'
        throw new Error(message)
      }

      setStatus('success')
      setFormData({
        name: '',
        email: '',
        company: '',
        country: '',
        product_category: '',
        product_description: '',
        estimated_quantity: '',
        budget_range: '',
        timeline: '',
        message: '',
      })
    } catch (err) {
      setError(err.message)
      setStatus('error')
    }
  }

  return (
    <div>
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-slate-50 via-white to-blue-50">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-8 items-center">
            <div className="max-w-2xl">
              <div className="inline-flex items-center rounded-full border border-blue-200 bg-blue-50 px-3 py-1 text-sm font-medium text-blue-700 mb-6">
                <ShieldCheck className="mr-1.5 h-4 w-4" />
                Trusted by 500+ global buyers
              </div>
              <h1 className="text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">
                China Sourcing Agent for <span className="text-blue-600">Global Buyers</span>
              </h1>
              <p className="mt-6 text-lg leading-8 text-slate-600">
                We help overseas buyers find reliable suppliers, verify factories, inspect quality, follow production, and coordinate shipping from China. Your trusted partner for hassle-free sourcing.
              </p>
              <div className="mt-10 flex flex-col sm:flex-row gap-4">
                <Button asChild size="lg" className="text-base">
                  <Link to="/contact">Get a Free Sourcing Quote</Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="text-base">
                  <Link to="/how-it-works">
                    See How It Works
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
              <div className="mt-8 flex items-center gap-6 text-sm text-slate-500">
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="h-4 w-4 text-green-600" />
                  No upfront fees
                </div>
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="h-4 w-4 text-green-600" />
                  Free supplier search
                </div>
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="h-4 w-4 text-green-600" />
                  Transparent pricing
                </div>
              </div>
            </div>
            <div className="relative lg:pl-8">
              <div className="relative rounded-2xl bg-white p-2 shadow-2xl ring-1 ring-slate-900/10">
                <div className="aspect-[4/3] overflow-hidden rounded-xl bg-slate-100">
                  <img
                    data-strk-img-id="hero-sourcing-img-8f2a9c"
                    data-strk-img="[hero-subtitle] [hero-title]"
                    data-strk-img-ratio="4x3"
                    data-strk-img-width="800"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    alt="China sourcing agent with factory"
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="absolute -bottom-4 -right-4 rounded-xl bg-white p-4 shadow-lg ring-1 ring-slate-900/10">
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-green-100">
                      <CheckCircle2 className="h-6 w-6 text-green-600" />
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-slate-900">Verified Supplier</p>
                      <p className="text-xs text-slate-500">Factory audit passed</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Points */}
      <section className="border-y border-slate-200 bg-white">
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
            {trustPoints.map((item) => (
              <div key={item.label} className="flex flex-col items-center text-center">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-50 text-blue-600">
                  <item.icon className="h-6 w-6" />
                </div>
                <p className="mt-3 text-3xl font-bold text-slate-900">{item.stat}</p>
                <p className="text-sm text-slate-500">{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
              End-to-End Sourcing Services
            </h2>
            <p className="mt-4 text-lg text-slate-600">
              From finding the right factory to delivering products to your door, we handle every step of the sourcing process.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <div key={service.title} className="group relative rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-shadow hover:shadow-md">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-blue-50 text-blue-600 mb-4">
                  <service.icon className="h-6 w-6" />
                </div>
                <h3 className="text-lg font-semibold text-slate-900">{service.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">{service.description}</p>
                <Link to="/services" className="mt-4 inline-flex items-center text-sm font-medium text-blue-600 hover:text-blue-700">
                  Learn more <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Problems We Solve */}
      <section className="py-20 bg-slate-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
              Common Sourcing Challenges We Solve
            </h2>
            <p className="mt-4 text-lg text-slate-600">
              International sourcing comes with unique challenges. Here's how we help you overcome them.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
            {problems.map((problem) => (
              <div key={problem.title} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
                <h3 className="text-lg font-semibold text-slate-900 mb-2">{problem.title}</h3>
                <p className="text-sm text-slate-600 mb-4">{problem.description}</p>
                <div className="rounded-lg bg-blue-50 p-4">
                  <p className="text-sm font-medium text-blue-900">Our Solution:</p>
                  <p className="mt-1 text-sm text-blue-800">{problem.solution}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies Preview */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
              Success Stories
            </h2>
            <p className="mt-4 text-lg text-slate-600">
              See how we've helped businesses like yours source better, faster, and more reliably from China.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {caseStudies.map((study) => (
              <div key={study.title} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
                <div className="mb-4">
                  <span className="inline-flex items-center rounded-full bg-blue-50 px-2.5 py-0.5 text-xs font-medium text-blue-700">
                    {study.category}
                  </span>
                </div>
                <h3 className="text-lg font-semibold text-slate-900 mb-2">{study.title}</h3>
                <p className="text-sm text-slate-600 mb-4">{study.description}</p>
                <div className="rounded-lg bg-green-50 p-3">
                  <p className="text-sm font-semibold text-green-800">{study.result}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-12 text-center">
            <Button asChild variant="outline" size="lg">
              <Link to="/case-studies">
                View All Case Studies
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-slate-50">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
              Frequently Asked Questions
            </h2>
            <p className="mt-4 text-lg text-slate-600">
              Get answers to common questions about our sourcing services.
            </p>
          </div>
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={faq.question} className="rounded-2xl border border-slate-200 bg-white">
                <button
                  className="flex w-full items-center justify-between p-6 text-left"
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                >
                  <span className="text-base font-semibold text-slate-900">{faq.question}</span>
                  <ChevronDown className={`h-5 w-5 flex-shrink-0 text-slate-500 transition-transform ${openFaq === index ? 'rotate-180' : ''}`} />
                </button>
                {openFaq === index && (
                  <div className="px-6 pb-6">
                    <p className="text-sm leading-relaxed text-slate-600">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Inquiry Form Section */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
            <div>
              <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
                Ready to Start Sourcing?
              </h2>
              <p className="mt-4 text-lg text-slate-600">
                Tell us about your product requirements and we'll provide a customized sourcing plan with verified suppliers within 48 hours.
              </p>
              <div className="mt-8 space-y-6">
                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-blue-100 text-blue-600">
                    <CheckCircle2 className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-slate-900">Free Initial Consultation</h3>
                    <p className="mt-1 text-sm text-slate-600">We discuss your needs and provide expert advice at no cost.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-blue-100 text-blue-600">
                    <CheckCircle2 className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-slate-900">Verified Supplier Shortlist</h3>
                    <p className="mt-1 text-sm text-slate-600">Receive 3-5 pre-vetted suppliers that match your criteria.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-blue-100 text-blue-600">
                    <CheckCircle2 className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-slate-900">No Obligation</h3>
                    <p className="mt-1 text-sm text-slate-600">You're free to work with any supplier, with or without our continued support.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-1">Full Name *</label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="flex h-10 w-full rounded-md border border-slate-300 bg-white px-3 py-2 text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                      placeholder="John Smith"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-1">Email *</label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="flex h-10 w-full rounded-md border border-slate-300 bg-white px-3 py-2 text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                      placeholder="john@company.com"
                    />
                  </div>
                </div>
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <div>
                    <label htmlFor="company" className="block text-sm font-medium text-slate-700 mb-1">Company</label>
                    <input
                      id="company"
                      name="company"
                      type="text"
                      value={formData.company}
                      onChange={handleChange}
                      className="flex h-10 w-full rounded-md border border-slate-300 bg-white px-3 py-2 text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                      placeholder="Your Company"
                    />
                  </div>
                  <div>
                    <label htmlFor="country" className="block text-sm font-medium text-slate-700 mb-1">Country</label>
                    <input
                      id="country"
                      name="country"
                      type="text"
                      value={formData.country}
                      onChange={handleChange}
                      className="flex h-10 w-full rounded-md border border-slate-300 bg-white px-3 py-2 text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                      placeholder="United States"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="product_category" className="block text-sm font-medium text-slate-700 mb-1">Product Category *</label>
                  <input
                    id="product_category"
                    name="product_category"
                    type="text"
                    required
                    value={formData.product_category}
                    onChange={handleChange}
                    className="flex h-10 w-full rounded-md border border-slate-300 bg-white px-3 py-2 text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                    placeholder="e.g., Electronics, Textiles, Home Goods"
                  />
                </div>
                <div>
                  <label htmlFor="product_description" className="block text-sm font-medium text-slate-700 mb-1">Product Description *</label>
                  <textarea
                    id="product_description"
                    name="product_description"
                    required
                    rows={3}
                    value={formData.product_description}
                    onChange={handleChange}
                    className="flex min-h-[60px] w-full rounded-md border border-slate-300 bg-white px-3 py-2 text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                    placeholder="Describe your product requirements, materials, specifications..."
                  />
                </div>
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <div>
                    <label htmlFor="estimated_quantity" className="block text-sm font-medium text-slate-700 mb-1">Estimated Quantity</label>
                    <input
                      id="estimated_quantity"
                      name="estimated_quantity"
                      type="text"
                      value={formData.estimated_quantity}
                      onChange={handleChange}
                      className="flex h-10 w-full rounded-md border border-slate-300 bg-white px-3 py-2 text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                      placeholder="e.g., 1,000 units"
                    />
                  </div>
                  <div>
                    <label htmlFor="budget_range" className="block text-sm font-medium text-slate-700 mb-1">Budget Range</label>
                    <input
                      id="budget_range"
                      name="budget_range"
                      type="text"
                      value={formData.budget_range}
                      onChange={handleChange}
                      className="flex h-10 w-full rounded-md border border-slate-300 bg-white px-3 py-2 text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                      placeholder="e.g., $5-10 per unit"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="timeline" className="block text-sm font-medium text-slate-700 mb-1">Expected Timeline</label>
                  <input
                    id="timeline"
                    name="timeline"
                    type="text"
                    value={formData.timeline}
                    onChange={handleChange}
                    className="flex h-10 w-full rounded-md border border-slate-300 bg-white px-3 py-2 text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                    placeholder="e.g., 3 months"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-1">Additional Message</label>
                  <textarea
                    id="message"
                    name="message"
                    rows={3}
                    value={formData.message}
                    onChange={handleChange}
                    className="flex min-h-[60px] w-full rounded-md border border-slate-300 bg-white px-3 py-2 text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                    placeholder="Any other requirements or questions..."
                  />
                </div>
                {status === 'success' && (
                  <div className="rounded-lg bg-green-50 p-4 text-sm text-green-800">
                    Thank you! Your inquiry has been submitted. We'll get back to you within 48 hours.
                  </div>
                )}
                {status === 'error' && error && (
                  <div className="rounded-lg bg-red-50 p-4 text-sm text-red-800">
                    {error}
                  </div>
                )}
                <Button type="submit" className="w-full" disabled={status === 'submitting'}>
                  {status === 'submitting' ? 'Submitting...' : 'Submit Inquiry'}
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}