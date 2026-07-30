import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Mail, Phone, MapPin, Clock, CheckCircle, Send, AlertCircle } from 'lucide-react'
import { DataClient } from '@strikingly/sdk'
import { STRK_PROJECT_URL, STRK_PROJECT_ANON_KEY } from '../config.jsx'

const client = new DataClient(STRK_PROJECT_URL, STRK_PROJECT_ANON_KEY)

const productCategories = [
  'Electronics & Components',
  'Furniture & Home Decor',
  'Textiles & Apparel',
  'Hardware & Tools',
  'Packaging & Printing',
  'Toys & Sporting Goods',
  'Beauty & Personal Care',
  'Industrial & Machinery',
  'Food & Agriculture',
  'Other',
]

const services = [
  'Supplier Sourcing',
  'Factory Verification',
  'Quality Inspection',
  'Production Follow-up',
  'Shipping Coordination',
  'Full Sourcing Package',
]

const initialForm = {
  name: '',
  company: '',
  email: '',
  phone: '',
  country: '',
  productCategory: '',
  service: '',
  productDesc: '',
  targetPrice: '',
  quantity: '',
  message: '',
}

export default function Contact() {
  const [form, setForm] = useState(initialForm)
  const [submitted, setSubmitted] = useState(false)
  const [submitting, setSubmitting] = useState(false)
  const [error, setError] = useState(null)

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setError(null)
    setSubmitting(true)

    const { data: response, error: insertError } = await client
      .from('Sourcing Inquiries')
      .insert({
        data: {
          name: form.name,
          company: form.company || undefined,
          email: form.email,
          phone: form.phone || undefined,
          country: form.country,
          product_category: form.productCategory,
          service: form.service,
          product_description: form.productDesc,
          target_price: form.targetPrice || undefined,
          quantity: form.quantity || undefined,
          message: form.message || undefined,
          status: 'new',
        },
      })
      .select()
      .single()

    setSubmitting(false)

    if (insertError || response?.success === false) {
      const msg =
        Array.isArray(response?.errors) && response.errors.length > 0
          ? response.errors.join(', ')
          : insertError?.message || 'Submission failed. Please try again.'
      console.error('Inquiry submission error:', msg)
      setError(msg)
      return
    }

    console.log('Inquiry submitted successfully:', response?.data)
    setSubmitted(true)
  }

  return (
    <div>
      {/* Header */}
      <section className="bg-brand-navy py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <span className="text-brand-accent font-semibold text-sm uppercase tracking-wider">Get in Touch</span>
            <h1 className="font-display text-4xl md:text-5xl font-bold text-white mt-2 mb-4">
              Get a Free Sourcing Quote
            </h1>
            <p className="text-gray-300 text-lg leading-relaxed">
              Tell us what you need and we'll respond within 24 hours with a tailored sourcing plan and transparent pricing.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            {/* Sidebar */}
            <div className="lg:col-span-1 space-y-6">
              <div>
                <h2 className="font-display text-xl font-bold text-brand-navy mb-4">Contact Information</h2>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="w-9 h-9 bg-brand-light rounded-lg flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-4 h-4 text-brand-blue" />
                    </div>
                    <div>
                      <div className="font-semibold text-brand-navy text-sm">Office</div>
                      <div className="text-brand-muted text-sm">Guangzhou, Guangdong, China</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-9 h-9 bg-brand-light rounded-lg flex items-center justify-center flex-shrink-0">
                      <Mail className="w-4 h-4 text-brand-blue" />
                    </div>
                    <div>
                      <div className="font-semibold text-brand-navy text-sm">Email</div>
                      <a href="mailto:info@ssourcing.cn" className="text-brand-blue text-sm hover:text-brand-sky transition-colors">
                        info@ssourcing.cn
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-9 h-9 bg-brand-light rounded-lg flex items-center justify-center flex-shrink-0">
                      <Phone className="w-4 h-4 text-brand-blue" />
                    </div>
                    <div>
                      <div className="font-semibold text-brand-navy text-sm">Phone / WeChat</div>
                      <div className="text-brand-muted text-sm">+86 20 XXXX XXXX</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-9 h-9 bg-brand-light rounded-lg flex items-center justify-center flex-shrink-0">
                      <Clock className="w-4 h-4 text-brand-blue" />
                    </div>
                    <div>
                      <div className="font-semibold text-brand-navy text-sm">Response Time</div>
                      <div className="text-brand-muted text-sm">Within 24 hours (business days)</div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-brand-light rounded-xl p-5 border border-brand-border">
                <h3 className="font-display font-semibold text-brand-navy mb-3">What Happens Next?</h3>
                <ul className="space-y-2.5">
                  {[
                    'We review your inquiry within 24 hours',
                    'We send you a tailored sourcing plan',
                    'We provide transparent pricing upfront',
                    'You decide whether to proceed — no obligation',
                  ].map((step, i) => (
                    <li key={i} className="flex items-start gap-2.5">
                      <div className="w-5 h-5 bg-brand-blue rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                        <span className="text-white text-xs font-bold">{i + 1}</span>
                      </div>
                      <span className="text-gray-700 text-sm">{step}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-brand-navy rounded-xl p-5">
                <h3 className="font-display font-semibold text-white mb-2">Free Initial Consultation</h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  Your first consultation is completely free. We'll assess your sourcing needs and tell you honestly whether we can help.
                </p>
              </div>
            </div>

            {/* Form */}
            <div className="lg:col-span-2">
              {submitted ? (
                <div className="bg-green-50 border border-green-200 rounded-2xl p-10 text-center">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <CheckCircle className="w-8 h-8 text-green-600" />
                  </div>
                  <h2 className="font-display text-2xl font-bold text-green-800 mb-3">Inquiry Received</h2>
                  <p className="text-green-700 text-lg mb-2">Thank you for contacting SSourcing China.</p>
                  <p className="text-green-600 mb-6">We'll review your inquiry and respond within 24 business hours with a tailored sourcing plan.</p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="text-brand-blue font-semibold hover:text-brand-sky transition-colors text-sm"
                  >
                    Submit another inquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="bg-white rounded-2xl border border-brand-border p-8 space-y-5">
                  <h2 className="font-display text-xl font-bold text-brand-navy mb-2">Sourcing Inquiry Form</h2>
                  <p className="text-brand-muted text-sm mb-4">Fields marked * are required.</p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-sm font-semibold text-brand-navy mb-1.5">Full Name *</label>
                      <input
                        type="text"
                        name="name"
                        required
                        value={form.name}
                        onChange={handleChange}
                        placeholder="John Smith"
                        className="w-full px-4 py-2.5 rounded-lg border border-brand-border text-brand-navy placeholder-brand-muted focus:outline-none focus:ring-2 focus:ring-brand-blue text-sm"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-brand-navy mb-1.5">Company Name</label>
                      <input
                        type="text"
                        name="company"
                        value={form.company}
                        onChange={handleChange}
                        placeholder="Your Company Ltd"
                        className="w-full px-4 py-2.5 rounded-lg border border-brand-border text-brand-navy placeholder-brand-muted focus:outline-none focus:ring-2 focus:ring-brand-blue text-sm"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-brand-navy mb-1.5">Email Address *</label>
                      <input
                        type="email"
                        name="email"
                        required
                        value={form.email}
                        onChange={handleChange}
                        placeholder="john@company.com"
                        className="w-full px-4 py-2.5 rounded-lg border border-brand-border text-brand-navy placeholder-brand-muted focus:outline-none focus:ring-2 focus:ring-brand-blue text-sm"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-brand-navy mb-1.5">Country *</label>
                      <input
                        type="text"
                        name="country"
                        required
                        value={form.country}
                        onChange={handleChange}
                        placeholder="United States"
                        className="w-full px-4 py-2.5 rounded-lg border border-brand-border text-brand-navy placeholder-brand-muted focus:outline-none focus:ring-2 focus:ring-brand-blue text-sm"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-brand-navy mb-1.5">Product Category *</label>
                      <select
                        name="productCategory"
                        required
                        value={form.productCategory}
                        onChange={handleChange}
                        className="w-full px-4 py-2.5 rounded-lg border border-brand-border text-brand-navy focus:outline-none focus:ring-2 focus:ring-brand-blue text-sm bg-white"
                      >
                        <option value="">Select a category</option>
                        {productCategories.map((c) => (
                          <option key={c} value={c}>{c}</option>
                        ))}
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-brand-navy mb-1.5">Service Needed *</label>
                      <select
                        name="service"
                        required
                        value={form.service}
                        onChange={handleChange}
                        className="w-full px-4 py-2.5 rounded-lg border border-brand-border text-brand-navy focus:outline-none focus:ring-2 focus:ring-brand-blue text-sm bg-white"
                      >
                        <option value="">Select a service</option>
                        {services.map((s) => (
                          <option key={s} value={s}>{s}</option>
                        ))}
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-brand-navy mb-1.5">Target Unit Price (USD)</label>
                      <input
                        type="text"
                        name="targetPrice"
                        value={form.targetPrice}
                        onChange={handleChange}
                        placeholder="e.g. $5–$10 per unit"
                        className="w-full px-4 py-2.5 rounded-lg border border-brand-border text-brand-navy placeholder-brand-muted focus:outline-none focus:ring-2 focus:ring-brand-blue text-sm"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-brand-navy mb-1.5">Order Quantity</label>
                      <input
                        type="text"
                        name="quantity"
                        value={form.quantity}
                        onChange={handleChange}
                        placeholder="e.g. 500 units"
                        className="w-full px-4 py-2.5 rounded-lg border border-brand-border text-brand-navy placeholder-brand-muted focus:outline-none focus:ring-2 focus:ring-brand-blue text-sm"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-brand-navy mb-1.5">Product Description *</label>
                    <textarea
                      name="productDesc"
                      required
                      value={form.productDesc}
                      onChange={handleChange}
                      rows={3}
                      placeholder="Describe your product: materials, dimensions, specifications, certifications required, etc."
                      className="w-full px-4 py-2.5 rounded-lg border border-brand-border text-brand-navy placeholder-brand-muted focus:outline-none focus:ring-2 focus:ring-brand-blue text-sm resize-none"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-brand-navy mb-1.5">Additional Notes</label>
                    <textarea
                      name="message"
                      value={form.message}
                      onChange={handleChange}
                      rows={3}
                      placeholder="Any other details, questions, or context that would help us understand your needs."
                      className="w-full px-4 py-2.5 rounded-lg border border-brand-border text-brand-navy placeholder-brand-muted focus:outline-none focus:ring-2 focus:ring-brand-blue text-sm resize-none"
                    />
                  </div>

                  <div className="pt-2">
                    <button
                      type="submit"
                      disabled={submitting}
                      className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-brand-accent hover:bg-amber-500 disabled:opacity-60 disabled:cursor-not-allowed text-white font-semibold px-8 py-3.5 rounded-lg transition-colors text-base"
                    >
                      <Send className="w-4 h-4" />
                      {submitting ? 'Submitting…' : 'Submit Sourcing Inquiry'}
                    </button>
                    {error && (
                      <div className="mt-3 flex items-start gap-2 text-red-600 text-sm">
                        <AlertCircle className="w-4 h-4 flex-shrink-0 mt-0.5" />
                        <span>{error}</span>
                      </div>
                    )}
                    <p className="text-brand-muted text-xs mt-3">
                      By submitting this form, you agree to be contacted by SSourcing China regarding your inquiry. We do not share your information with third parties.
                    </p>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
