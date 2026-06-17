import React, { useState } from 'react'
import { DataClient } from '@strikingly/sdk'
import { STRK_PROJECT_URL, STRK_PROJECT_ANON_KEY } from '../config.jsx'
import {
  Mail, Phone, MapPin, Clock, CheckCircle2, AlertCircle, Send,
  MessageSquare, Globe
} from 'lucide-react'

const client = new DataClient(STRK_PROJECT_URL, STRK_PROJECT_ANON_KEY)

const serviceOptions = [
  { value: 'supplier_sourcing', label: 'Supplier Sourcing' },
  { value: 'factory_verification', label: 'Factory Verification' },
  { value: 'quality_inspection', label: 'Quality Inspection' },
  { value: 'production_followup', label: 'Production Follow-up' },
  { value: 'shipping_coordination', label: 'Shipping Coordination' },
  { value: 'price_negotiation', label: 'Price Negotiation' },
]

const initialForm = {
  name: '',
  email: '',
  company: '',
  phone: '',
  country: '',
  product: '',
  quantity: '',
  services: [],
  message: '',
}

export default function Contact() {
  const [form, setForm] = useState(initialForm)
  const [status, setStatus] = useState('idle') // idle | submitting | success | error
  const [errorMsg, setErrorMsg] = useState('')

  const handleChange = (e) => {
    const { name, value } = e.target
    setForm((prev) => ({ ...prev, [name]: value }))
  }

  const handleServiceToggle = (value) => {
    setForm((prev) => ({
      ...prev,
      services: prev.services.includes(value)
        ? prev.services.filter((s) => s !== value)
        : [...prev.services, value],
    }))
  }

  const validate = () => {
    if (!form.name.trim()) return 'Name is required'
    if (!form.email.trim()) return 'Email is required'
    if (!/^\S+@\S+\.\S+$/.test(form.email)) return 'Please enter a valid email'
    if (!form.message.trim()) return 'Message is required'
    return null
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setErrorMsg('')

    const err = validate()
    if (err) {
      setErrorMsg(err)
      return
    }

    setStatus('submitting')

    try {
      // Insert inquiry
      const { data: response, error: insertError } = await client
        .from('SourcingInquiry')
        .insert({
          data: {
            name: form.name,
            email: form.email,
            company: form.company,
            phone: form.phone,
            country: form.country,
            product: form.product,
            quantity: form.quantity,
            services: form.services,
            message: form.message,
            status: 'new',
          },
        })
        .select()
        .single()

      if (insertError) throw insertError
      if (response?.success === false) {
        const msgs = Array.isArray(response.errors) ? response.errors.join(', ') : 'Submission failed'
        throw new Error(msgs)
      }

      setStatus('success')
      setForm(initialForm)
    } catch (err) {
      console.error('Form submission error:', err)
      setErrorMsg(err.message || 'Something went wrong. Please try again.')
      setStatus('error')
    }
  }

  return (
    <div>
      {/* Hero */}
      <section className="bg-neutral-900 py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-accent-400 font-semibold text-sm uppercase tracking-wider mb-3">
              Contact Us
            </p>
            <h1 className="text-4xl md:text-5xl font-bold text-white tracking-tight mb-6">
              Get a Free Sourcing Quote
            </h1>
            <p className="text-lg text-neutral-300 leading-relaxed">
              Tell us about your sourcing needs and our team will respond within 24 hours
              with a tailored plan. No commitment required.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form + Info */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Form */}
            <div className="lg:col-span-2">
              {status === 'success' ? (
                <div className="bg-green-50 border border-green-200 rounded-xl p-8 text-center">
                  <CheckCircle2 className="w-12 h-12 text-green-500 mx-auto mb-4" />
                  <h3 className="text-2xl font-bold text-neutral-900 mb-2">
                    Thank You!
                  </h3>
                  <p className="text-neutral-600 mb-6">
                    Your inquiry has been submitted successfully. Our team will review your
                    requirements and get back to you within 24 hours.
                  </p>
                  <button
                    onClick={() => setStatus('idle')}
                    className="text-primary-500 hover:text-primary-600 font-semibold"
                  >
                    Submit Another Inquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-neutral-700 mb-1.5">
                        Name <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={form.name}
                        onChange={handleChange}
                        className="w-full border border-neutral-300 rounded-lg px-4 py-3 text-neutral-900 focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none transition"
                        placeholder="Your full name"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-neutral-700 mb-1.5">
                        Email <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={form.email}
                        onChange={handleChange}
                        className="w-full border border-neutral-300 rounded-lg px-4 py-3 text-neutral-900 focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none transition"
                        placeholder="you@company.com"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-neutral-700 mb-1.5">
                        Company
                      </label>
                      <input
                        type="text"
                        name="company"
                        value={form.company}
                        onChange={handleChange}
                        className="w-full border border-neutral-300 rounded-lg px-4 py-3 text-neutral-900 focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none transition"
                        placeholder="Your company name"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-neutral-700 mb-1.5">
                        Phone
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={form.phone}
                        onChange={handleChange}
                        className="w-full border border-neutral-300 rounded-lg px-4 py-3 text-neutral-900 focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none transition"
                        placeholder="+1 234 567 8900"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-neutral-700 mb-1.5">
                        Country
                      </label>
                      <input
                        type="text"
                        name="country"
                        value={form.country}
                        onChange={handleChange}
                        className="w-full border border-neutral-300 rounded-lg px-4 py-3 text-neutral-900 focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none transition"
                        placeholder="Your country"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-neutral-700 mb-1.5">
                        Estimated Quantity
                      </label>
                      <input
                        type="text"
                        name="quantity"
                        value={form.quantity}
                        onChange={handleChange}
                        className="w-full border border-neutral-300 rounded-lg px-4 py-3 text-neutral-900 focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none transition"
                        placeholder="e.g. 1,000 units"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-neutral-700 mb-1.5">
                      Product You Want to Source
                    </label>
                    <input
                      type="text"
                      name="product"
                      value={form.product}
                      onChange={handleChange}
                      className="w-full border border-neutral-300 rounded-lg px-4 py-3 text-neutral-900 focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none transition"
                      placeholder="e.g. LED lighting, textiles, CNC machinery"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-neutral-700 mb-3">
                      Services You Need
                    </label>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {serviceOptions.map((opt) => (
                        <label
                          key={opt.value}
                          className={`flex items-center gap-3 px-4 py-3 border rounded-lg cursor-pointer transition-colors ${
                            form.services.includes(opt.value)
                              ? 'border-primary-500 bg-primary-50 text-primary-700'
                              : 'border-neutral-200 hover:border-neutral-300 text-neutral-700'
                          }`}
                        >
                          <input
                            type="checkbox"
                            checked={form.services.includes(opt.value)}
                            onChange={() => handleServiceToggle(opt.value)}
                            className="sr-only"
                          />
                          <div
                            className={`w-4 h-4 rounded border flex items-center justify-center ${
                              form.services.includes(opt.value)
                                ? 'bg-primary-500 border-primary-500'
                                : 'border-neutral-300'
                            }`}
                          >
                            {form.services.includes(opt.value) && (
                              <CheckCircle2 className="w-3 h-3 text-white" />
                            )}
                          </div>
                          <span className="text-sm font-medium">{opt.label}</span>
                        </label>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-neutral-700 mb-1.5">
                      Message <span className="text-red-500">*</span>
                    </label>
                    <textarea
                      name="message"
                      value={form.message}
                      onChange={handleChange}
                      rows={5}
                      className="w-full border border-neutral-300 rounded-lg px-4 py-3 text-neutral-900 focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none transition resize-none"
                      placeholder="Tell us about your sourcing needs, product requirements, timeline, and any other details..."
                    />
                  </div>

                  {errorMsg && (
                    <div className="flex items-center gap-2 text-red-600 bg-red-50 border border-red-200 rounded-lg px-4 py-3">
                      <AlertCircle className="w-5 h-5 shrink-0" />
                      <span className="text-sm">{errorMsg}</span>
                    </div>
                  )}

                  <button
                    type="submit"
                    disabled={status === 'submitting'}
                    className="w-full sm:w-auto bg-accent-500 hover:bg-accent-600 disabled:bg-accent-300 text-white font-semibold px-8 py-4 rounded-lg transition-colors flex items-center justify-center gap-2"
                  >
                    {status === 'submitting' ? (
                      <>
                        <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        Submitting...
                      </>
                    ) : (
                      <>
                        <Send className="w-5 h-5" />
                        Get Your Free Quote
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>

            {/* Contact Info Sidebar */}
            <div className="space-y-6">
              <div className="bg-neutral-50 border border-neutral-200 rounded-xl p-6">
                <h3 className="text-lg font-semibold text-neutral-900 mb-4">Contact Information</h3>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <Mail className="w-5 h-5 text-primary-500 shrink-0 mt-0.5" />
                    <div>
                      <p className="text-sm font-medium text-neutral-900">Email</p>
                      <a href="mailto:info@ssourcingchina.com" className="text-sm text-neutral-600 hover:text-primary-500">
                        info@ssourcingchina.com
                      </a>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <Phone className="w-5 h-5 text-primary-500 shrink-0 mt-0.5" />
                    <div>
                      <p className="text-sm font-medium text-neutral-900">Phone</p>
                      <a href="tel:+8613800000000" className="text-sm text-neutral-600 hover:text-primary-500">
                        +86 138 0000 0000
                      </a>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-primary-500 shrink-0 mt-0.5" />
                    <div>
                      <p className="text-sm font-medium text-neutral-900">Office</p>
                      <p className="text-sm text-neutral-600">Guangzhou, Guangdong, China</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <Clock className="w-5 h-5 text-primary-500 shrink-0 mt-0.5" />
                    <div>
                      <p className="text-sm font-medium text-neutral-900">Business Hours</p>
                      <p className="text-sm text-neutral-600">Mon-Fri: 9:00 - 18:00 (CST)</p>
                    </div>
                  </li>
                </ul>
              </div>

              <div className="bg-primary-50 border border-primary-100 rounded-xl p-6">
                <h3 className="text-lg font-semibold text-neutral-900 mb-3">What Happens Next?</h3>
                <ol className="space-y-3">
                  {[
                    'We review your inquiry within 24 hours',
                    'Our team contacts you to clarify requirements',
                    'You receive a tailored sourcing plan and quote',
                    'We begin sourcing once you approve',
                  ].map((step, idx) => (
                    <li key={step} className="flex items-start gap-3">
                      <div className="w-6 h-6 bg-primary-500 rounded-full flex items-center justify-center shrink-0">
                        <span className="text-white text-xs font-bold">{idx + 1}</span>
                      </div>
                      <span className="text-sm text-neutral-700">{step}</span>
                    </li>
                  ))}
                </ol>
              </div>

              <div className="bg-neutral-50 border border-neutral-200 rounded-xl p-6">
                <h3 className="text-lg font-semibold text-neutral-900 mb-3">Why Choose Us?</h3>
                <ul className="space-y-2.5">
                  {[
                    '12+ years of China sourcing experience',
                    '500+ verified suppliers in our network',
                    'On-the-ground team in Guangzhou',
                    'Transparent pricing, no hidden fees',
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-accent-500 shrink-0 mt-0.5" />
                      <span className="text-sm text-neutral-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
