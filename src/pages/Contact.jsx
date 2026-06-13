import React, { useState } from 'react'
import { DataClient } from '@strikingly/sdk'
import { STRK_PROJECT_URL, STRK_PROJECT_ANON_KEY } from '@/config.jsx'
import { Mail, Phone, MapPin, Clock, Send, CheckCircle, AlertCircle } from 'lucide-react'

const client = new DataClient(STRK_PROJECT_URL, STRK_PROJECT_ANON_KEY)

const initialForm = {
  name: '',
  email: '',
  company: '',
  phone: '',
  product: '',
  quantity: '',
  budget: '',
  message: '',
}

export default function Contact() {
  const [form, setForm] = useState(initialForm)
  const [status, setStatus] = useState('idle')
  const [error, setError] = useState(null)

  const onChange = (e) => {
    const { name, value } = e.target
    setForm((prev) => ({ ...prev, [name]: value }))
  }

  const validate = () => {
    if (!form.name.trim()) return 'Name is required'
    if (!form.email.trim()) return 'Email is required'
    if (!/^\S+@\S+\.\S+$/.test(form.email)) return 'Please provide a valid email address'
    if (!form.message.trim()) return 'Please describe your sourcing needs'
    return null
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setError(null)
    const validationError = validate()
    if (validationError) {
      setError(validationError)
      return
    }

    setStatus('submitting')

    try {
      const { error: submitError } = await client
        .from('SourcingInquiries')
        .insert({
          data: {
            name: form.name,
            email: form.email,
            company: form.company || null,
            phone: form.phone || null,
            product_of_interest: form.product || null,
            estimated_quantity: form.quantity || null,
            budget_range: form.budget || null,
            message: form.message,
            status: 'new',
          },
        })

      if (submitError) throw submitError

      setStatus('success')
      setForm(initialForm)
    } catch (err) {
      console.error('Form submission error:', err)
      setError(err.message || 'Failed to submit your inquiry. Please try again or email us directly.')
      setStatus('error')
    }
  }

  return (
    <div>
      {/* Hero */}
      <section className="bg-neutral-900 py-16 md:py-20">
        <div className="container-section">
          <div className="max-w-3xl">
            <p className="text-brand-400 font-semibold text-sm mb-4 uppercase tracking-wide">Contact Us</p>
            <h1 className="text-4xl md:text-5xl font-extrabold text-white leading-tight mb-6">
              Get a Free Sourcing Quote
            </h1>
            <p className="text-lg text-gray-300 leading-relaxed max-w-2xl">
              Tell us about your product sourcing needs and we will respond within 24 hours with a custom plan and quote.
            </p>
          </div>
        </div>
      </section>

      {/* Form + Info */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container-section">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Form */}
            <div className="lg:col-span-2">
              {status === 'success' ? (
                <div className="p-8 bg-green-50 rounded-xl border border-green-200 text-center">
                  <CheckCircle className="w-12 h-12 text-green-500 mx-auto mb-4" />
                  <h2 className="text-2xl font-bold text-neutral-900 mb-2">Thank You!</h2>
                  <p className="text-neutral-600">
                    Your inquiry has been submitted successfully. Our team will review your requirements and get back to you within 24 hours.
                  </p>
                  <button
                    onClick={() => setStatus('idle')}
                    className="btn-primary mt-6"
                  >
                    Submit Another Inquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-neutral-900 mb-1.5">
                        Full Name <span className="text-red-500">*</span>
                      </label>
                      <input
                        id="name"
                        name="name"
                        type="text"
                        required
                        value={form.name}
                        onChange={onChange}
                        className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-brand-500 focus:ring-2 focus:ring-brand-50 outline-none transition-colors text-neutral-900"
                        placeholder="Your full name"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-neutral-900 mb-1.5">
                        Email Address <span className="text-red-500">*</span>
                      </label>
                      <input
                        id="email"
                        name="email"
                        type="email"
                        required
                        value={form.email}
                        onChange={onChange}
                        className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-brand-500 focus:ring-2 focus:ring-brand-50 outline-none transition-colors text-neutral-900"
                        placeholder="you@company.com"
                      />
                    </div>
                    <div>
                      <label htmlFor="company" className="block text-sm font-medium text-neutral-900 mb-1.5">
                        Company Name
                      </label>
                      <input
                        id="company"
                        name="company"
                        type="text"
                        value={form.company}
                        onChange={onChange}
                        className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-brand-500 focus:ring-2 focus:ring-brand-50 outline-none transition-colors text-neutral-900"
                        placeholder="Your company"
                      />
                    </div>
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-neutral-900 mb-1.5">
                        Phone Number
                      </label>
                      <input
                        id="phone"
                        name="phone"
                        type="tel"
                        value={form.phone}
                        onChange={onChange}
                        className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-brand-500 focus:ring-2 focus:ring-brand-50 outline-none transition-colors text-neutral-900"
                        placeholder="+1 234 567 8900"
                      />
                    </div>
                    <div>
                      <label htmlFor="product" className="block text-sm font-medium text-neutral-900 mb-1.5">
                        Product of Interest
                      </label>
                      <input
                        id="product"
                        name="product"
                        type="text"
                        value={form.product}
                        onChange={onChange}
                        className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-brand-500 focus:ring-2 focus:ring-brand-50 outline-none transition-colors text-neutral-900"
                        placeholder="e.g., Bluetooth speakers"
                      />
                    </div>
                    <div>
                      <label htmlFor="quantity" className="block text-sm font-medium text-neutral-900 mb-1.5">
                        Estimated Quantity
                      </label>
                      <input
                        id="quantity"
                        name="quantity"
                        type="text"
                        value={form.quantity}
                        onChange={onChange}
                        className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-brand-500 focus:ring-2 focus:ring-brand-50 outline-none transition-colors text-neutral-900"
                        placeholder="e.g., 1,000 units"
                      />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="budget" className="block text-sm font-medium text-neutral-900 mb-1.5">
                      Target Budget Range
                    </label>
                    <input
                      id="budget"
                      name="budget"
                      type="text"
                      value={form.budget}
                      onChange={onChange}
                      className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-brand-500 focus:ring-2 focus:ring-brand-50 outline-none transition-colors text-neutral-900"
                      placeholder="e.g., $5,000 - $10,000"
                    />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-neutral-900 mb-1.5">
                      Your Sourcing Requirements <span className="text-red-500">*</span>
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={6}
                      required
                      value={form.message}
                      onChange={onChange}
                      className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-brand-500 focus:ring-2 focus:ring-brand-50 outline-none transition-colors text-neutral-900"
                      placeholder="Describe your product, specifications, quality requirements, target market, timeline, and any other relevant details..."
                    />
                  </div>

                  {error && (
                    <div className="flex items-start gap-3 p-4 bg-red-50 rounded-lg border border-red-200">
                      <AlertCircle className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
                      <p className="text-sm text-red-700">{error}</p>
                    </div>
                  )}

                  <button
                    type="submit"
                    disabled={status === 'submitting'}
                    className="btn-primary text-lg px-8 py-4 w-full md:w-auto disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {status === 'submitting' ? (
                      <span className="flex items-center gap-2">
                        <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24" fill="none">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                        </svg>
                        Submitting...
                      </span>
                    ) : (
                      <span className="flex items-center gap-2">
                        <Send className="w-5 h-5" />
                        Submit Inquiry
                      </span>
                    )}
                  </button>
                </form>
              )}
            </div>

            {/* Contact Info */}
            <div className="space-y-8">
              <div className="p-6 bg-gray-50 rounded-xl">
                <h3 className="font-bold text-neutral-900 mb-4">Contact Information</h3>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <Mail className="w-5 h-5 text-brand-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="text-sm font-medium text-neutral-900">Email</p>
                      <a href="mailto:info@ssourcingchina.com" className="text-sm text-brand-600 hover:text-brand-700">
                        info@ssourcingchina.com
                      </a>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <Phone className="w-5 h-5 text-brand-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="text-sm font-medium text-neutral-900">Phone</p>
                      <a href="tel:+861234567890" className="text-sm text-brand-600 hover:text-brand-700">
                        +86 123 4567 890
                      </a>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-brand-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="text-sm font-medium text-neutral-900">Office</p>
                      <p className="text-sm text-neutral-600">
                        Guangzhou, Guangdong Province<br />China
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <Clock className="w-5 h-5 text-brand-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="text-sm font-medium text-neutral-900">Business Hours</p>
                      <p className="text-sm text-neutral-600">
                        Monday - Friday: 9:00 AM - 6:00 PM (CST)<br />
                        Saturday: 9:00 AM - 1:00 PM (CST)
                      </p>
                    </div>
                  </li>
                </ul>
              </div>

              <div className="p-6 bg-brand-600 rounded-xl text-white">
                <h3 className="font-bold mb-2">What Happens Next?</h3>
                <ol className="space-y-3 text-sm text-brand-100">
                  <li className="flex items-start gap-2">
                    <span className="flex-shrink-0 w-5 h-5 bg-white/20 rounded-full flex items-center justify-center text-xs font-bold text-white">1</span>
                    We review your inquiry within 24 hours
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="flex-shrink-0 w-5 h-5 bg-white/20 rounded-full flex items-center justify-center text-xs font-bold text-white">2</span>
                    We prepare a custom sourcing plan
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="flex-shrink-0 w-5 h-5 bg-white/20 rounded-full flex items-center justify-center text-xs font-bold text-white">3</span>
                    Free consultation call to discuss details
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="flex-shrink-0 w-5 h-5 bg-white/20 rounded-full flex items-center justify-center text-xs font-bold text-white">4</span>
                    You receive a transparent quote with no obligation
                  </li>
                </ol>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}