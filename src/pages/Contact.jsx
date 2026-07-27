import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Mail, Phone, MapPin, Send, CheckCircle, AlertCircle } from 'lucide-react'
import { DataClient } from '@strikingly/sdk'
import { STRK_PROJECT_URL, STRK_PROJECT_ANON_KEY } from '@/config.jsx'

const client = new DataClient(STRK_PROJECT_URL, STRK_PROJECT_ANON_KEY)

export default function Contact() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    company: '',
    country: '',
    product_category: '',
    estimated_volume: '',
    message: '',
  })
  const [status, setStatus] = useState('idle')
  const [error, setError] = useState(null)

  const onChange = (e) => {
    const { name, value } = e.target
    setForm((f) => ({ ...f, [name]: value }))
  }

  const validate = () => {
    if (!form.name.trim()) return 'Name is required'
    if (!form.email.trim()) return 'Email is required'
    if (!/^\S+@\S+\.\S+$/.test(form.email)) return 'Please enter a valid email'
    if (!form.message.trim()) return 'Please describe your sourcing needs'
    return null
  }

  const onSubmit = async (e) => {
    e.preventDefault()
    setError(null)
    const err = validate()
    if (err) {
      setError(err)
      return
    }

    setStatus('submitting')

    const { data: response, error: createError } = await client
      .from('SourcingInquiry')
      .insert({
        data: {
          name: form.name,
          email: form.email,
          company: form.company,
          country: form.country,
          product_category: form.product_category,
          estimated_volume: form.estimated_volume,
          message: form.message,
        },
      })
      .select()
      .single()

    if (createError || response?.success === false) {
      const msg = Array.isArray(response?.errors)
        ? response.errors.join(', ')
        : createError?.message || 'Submission failed. Please try again.'
      setError(msg)
      setStatus('error')
      return
    }

    setStatus('success')
    setForm({
      name: '',
      email: '',
      company: '',
      country: '',
      product_category: '',
      estimated_volume: '',
      message: '',
    })
  }

  return (
    <div>
      {/* Hero */}
      <section className="bg-primary">
        <div className="container-main py-16 md:py-24">
          <div className="mx-auto max-w-2xl text-center">
            <span className="text-sm font-semibold uppercase tracking-wider text-slate-300">Contact</span>
            <h1 className="mt-3 text-4xl font-extrabold text-white md:text-5xl">
              Get a Free Sourcing Quote
            </h1>
            <p className="mt-4 text-lg text-slate-200">
              Tell us what you need. We will review your requirements and get back to you within 24 hours with a clear plan and quote.
            </p>
          </div>
        </div>
      </section>

      {/* Contact form + info */}
      <section className="section-padding bg-white">
        <div className="container-main">
          <div className="grid gap-12 lg:grid-cols-5">
            {/* Form */}
            <div className="lg:col-span-3">
              <div className="rounded-xl border border-slate-100 bg-surface p-6 md:p-8">
                <h2 className="text-xl font-bold">Send Us Your Inquiry</h2>
                <p className="mt-1 text-sm text-slate-500">
                  The more detail you provide, the better we can help you.
                </p>

                {status === 'success' ? (
                  <div className="mt-6 flex flex-col items-center rounded-lg bg-emerald-50 py-10 text-center">
                    <CheckCircle className="h-10 w-10 text-emerald-500" />
                    <h3 className="mt-3 text-lg font-semibold text-emerald-800">Inquiry Received</h3>
                    <p className="mt-1 max-w-sm text-sm text-emerald-700">
                      Thank you for reaching out. Our team will review your requirements and contact you within 24 hours.
                    </p>
                    <button
                      onClick={() => setStatus('idle')}
                      className="btn-primary mt-4"
                    >
                      Send Another Inquiry
                    </button>
                  </div>
                ) : (
                  <form onSubmit={onSubmit} className="mt-6 flex flex-col gap-4" noValidate>
                    <div className="grid gap-4 sm:grid-cols-2">
                      <div>
                        <label htmlFor="name" className="mb-1 block text-sm font-medium text-slate-700">
                          Full Name <span className="text-accent">*</span>
                        </label>
                        <input
                          id="name"
                          name="name"
                          type="text"
                          value={form.name}
                          onChange={onChange}
                          placeholder="John Smith"
                          className="w-full rounded-md border border-slate-300 bg-white px-3 py-2.5 text-sm text-slate-800 placeholder:text-slate-400 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                        />
                      </div>
                      <div>
                        <label htmlFor="email" className="mb-1 block text-sm font-medium text-slate-700">
                          Email <span className="text-accent">*</span>
                        </label>
                        <input
                          id="email"
                          name="email"
                          type="email"
                          value={form.email}
                          onChange={onChange}
                          placeholder="john@company.com"
                          className="w-full rounded-md border border-slate-300 bg-white px-3 py-2.5 text-sm text-slate-800 placeholder:text-slate-400 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                        />
                      </div>
                    </div>

                    <div className="grid gap-4 sm:grid-cols-2">
                      <div>
                        <label htmlFor="company" className="mb-1 block text-sm font-medium text-slate-700">
                          Company Name
                        </label>
                        <input
                          id="company"
                          name="company"
                          type="text"
                          value={form.company}
                          onChange={onChange}
                          placeholder="Your Company Ltd."
                          className="w-full rounded-md border border-slate-300 bg-white px-3 py-2.5 text-sm text-slate-800 placeholder:text-slate-400 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                        />
                      </div>
                      <div>
                        <label htmlFor="country" className="mb-1 block text-sm font-medium text-slate-700">
                          Country
                        </label>
                        <input
                          id="country"
                          name="country"
                          type="text"
                          value={form.country}
                          onChange={onChange}
                          placeholder="United States"
                          className="w-full rounded-md border border-slate-300 bg-white px-3 py-2.5 text-sm text-slate-800 placeholder:text-slate-400 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                        />
                      </div>
                    </div>

                    <div className="grid gap-4 sm:grid-cols-2">
                      <div>
                        <label htmlFor="product_category" className="mb-1 block text-sm font-medium text-slate-700">
                          Product Category
                        </label>
                        <input
                          id="product_category"
                          name="product_category"
                          type="text"
                          value={form.product_category}
                          onChange={onChange}
                          placeholder="e.g. Electronics, Home Goods"
                          className="w-full rounded-md border border-slate-300 bg-white px-3 py-2.5 text-sm text-slate-800 placeholder:text-slate-400 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                        />
                      </div>
                      <div>
                        <label htmlFor="estimated_volume" className="mb-1 block text-sm font-medium text-slate-700">
                          Estimated Volume
                        </label>
                        <input
                          id="estimated_volume"
                          name="estimated_volume"
                          type="text"
                          value={form.estimated_volume}
                          onChange={onChange}
                          placeholder="e.g. 5,000 units/year"
                          className="w-full rounded-md border border-slate-300 bg-white px-3 py-2.5 text-sm text-slate-800 placeholder:text-slate-400 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="message" className="mb-1 block text-sm font-medium text-slate-700">
                        Sourcing Requirements <span className="text-accent">*</span>
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        rows={5}
                        value={form.message}
                        onChange={onChange}
                        placeholder="Describe the product you want to source, target price, timeline, certifications needed, and any other details..."
                        className="w-full rounded-md border border-slate-300 bg-white px-3 py-2.5 text-sm text-slate-800 placeholder:text-slate-400 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                      />
                    </div>

                    {error && (
                      <div className="flex items-center gap-2 rounded-md bg-red-50 px-3 py-2.5 text-sm text-red-700">
                        <AlertCircle className="h-4 w-4 shrink-0" />
                        {error}
                      </div>
                    )}

                    <button
                      type="submit"
                      disabled={status === 'submitting'}
                      className="btn-primary mt-2 gap-2"
                    >
                      <Send className="h-4 w-4" />
                      {status === 'submitting' ? 'Sending...' : 'Submit Inquiry'}
                    </button>
                  </form>
                )}
              </div>
            </div>

            {/* Contact info */}
            <div className="lg:col-span-2">
              <div className="flex flex-col gap-6">
                <div className="rounded-xl border border-slate-100 bg-surface p-6">
                  <h3 className="text-lg font-semibold">Contact Information</h3>
                  <div className="mt-4 flex flex-col gap-4 text-sm">
                    <a href="mailto:hello@ssourcingchina.com" className="flex items-start gap-3 text-slate-600 hover:text-primary">
                      <Mail className="mt-0.5 h-5 w-5 shrink-0 text-slate-400" />
                      <span>
                        <span className="block font-medium text-slate-800">Email</span>
                        hello@ssourcingchina.com
                      </span>
                    </a>
                    <a href="tel:+8675588888888" className="flex items-start gap-3 text-slate-600 hover:text-primary">
                      <Phone className="mt-0.5 h-5 w-5 shrink-0 text-slate-400" />
                      <span>
                        <span className="block font-medium text-slate-800">Phone</span>
                        +86 755 8888 8888
                      </span>
                    </a>
                    <div className="flex items-start gap-3 text-slate-600">
                      <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-slate-400" />
                      <span>
                        <span className="block font-medium text-slate-800">Office</span>
                        Room 1205, Block A, Shennan Boulevard, Futian District, Shenzhen, China
                      </span>
                    </div>
                  </div>
                </div>

                <div className="rounded-xl border border-slate-100 bg-surface p-6">
                  <h3 className="text-lg font-semibold">Response Time</h3>
                  <p className="mt-2 text-sm text-slate-500">
                    We aim to respond to all inquiries within 24 hours during business days. For urgent requests, please call us directly.
                  </p>
                </div>

                <div className="rounded-xl border border-slate-100 bg-primary p-6 text-white">
                  <h3 className="text-lg font-semibold">Prefer to Talk?</h3>
                  <p className="mt-2 text-sm text-slate-200">
                    Schedule a free 20-minute consultation call with one of our sourcing specialists.
                  </p>
                  <a
                    href="mailto:hello@ssourcingchina.com?subject=Schedule%20a%20Consultation%20Call"
                    className="mt-4 inline-flex items-center gap-2 rounded-md bg-white px-5 py-2.5 text-sm font-semibold text-primary transition-colors hover:bg-slate-100"
                  >
                    Book a Call
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
