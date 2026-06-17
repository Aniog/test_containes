import React, { useState } from 'react'
import { DataClient } from '@strikingly/sdk'
import { STRK_PROJECT_URL, STRK_PROJECT_ANON_KEY } from '../config.jsx'
import { Mail, Phone, MapPin, Clock, CheckCircle2, AlertCircle, Loader2 } from 'lucide-react'

const client = new DataClient(STRK_PROJECT_URL, STRK_PROJECT_ANON_KEY)

const productCategories = [
  'Electronics & Components',
  'Textiles & Apparel',
  'Machinery & Equipment',
  'Home & Garden',
  'Auto Parts',
  'Packaging & Printing',
  'Building Materials',
  'Health & Beauty',
  'Other',
]

const serviceOptions = [
  'Supplier Sourcing',
  'Factory Verification',
  'Quality Inspection',
  'Production Follow-up',
  'Shipping Coordination',
  'Cost Optimization',
]

const getErrorMessage = (response, error) => {
  if (Array.isArray(response?.errors) && response.errors.length > 0) {
    return response.errors.join(', ')
  }
  return error?.message || 'Submission failed. Please try again.'
}

export default function Contact() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    company: '',
    country: '',
    phone: '',
    product_category: '',
    product_description: '',
    estimated_quantity: '',
    services_needed: [],
    message: '',
  })
  const [status, setStatus] = useState('idle') // idle | submitting | success | error
  const [error, setError] = useState(null)

  const handleChange = (e) => {
    const { name, value } = e.target
    setForm((prev) => ({ ...prev, [name]: value }))
  }

  const handleServiceToggle = (service) => {
    setForm((prev) => ({
      ...prev,
      services_needed: prev.services_needed.includes(service)
        ? prev.services_needed.filter((s) => s !== service)
        : [...prev.services_needed, service],
    }))
  }

  const validate = () => {
    if (!form.name.trim()) return 'Name is required.'
    if (!form.email.trim()) return 'Email is required.'
    if (!/^\S+@\S+\.\S+$/.test(form.email)) return 'Please enter a valid email address.'
    if (!form.product_description.trim()) return 'Please describe the product you want to source.'
    return null
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setError(null)

    const validationError = validate()
    if (validationError) {
      setError(validationError)
      setStatus('error')
      return
    }

    setStatus('submitting')

    try {
      // Submit inquiry
      const { data: response, error: submitError } = await client
        .from('SourcingInquiry')
        .insert({
          data: {
            name: form.name,
            email: form.email,
            company: form.company,
            country: form.country,
            phone: form.phone,
            product_category: form.product_category,
            product_description: form.product_description,
            estimated_quantity: form.estimated_quantity,
            services_needed: form.services_needed,
            message: form.message,
          },
        })
        .select()
        .single()

      if (submitError || response?.success === false) {
        setError(getErrorMessage(response, submitError))
        setStatus('error')
        return
      }

      setStatus('success')
      setForm({
        name: '',
        email: '',
        company: '',
        country: '',
        phone: '',
        product_category: '',
        product_description: '',
        estimated_quantity: '',
        services_needed: [],
        message: '',
      })
    } catch (err) {
      console.error('Form submission error:', err)
      setError(err.message || 'Something went wrong. Please try again.')
      setStatus('error')
    }
  }

  return (
    <div>
      {/* Hero */}
      <section className="bg-navy py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-3xl lg:text-4xl font-bold text-white mb-4">Contact Us</h1>
            <p className="text-lg text-slate-300 leading-relaxed">
              Tell us about your sourcing needs and get a free quote. We typically respond within 24 hours.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form + Info */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Form */}
            <div className="lg:col-span-2">
              {status === 'success' ? (
                <div className="bg-green-50 border border-green-200 rounded-xl p-8 text-center">
                  <CheckCircle2 className="w-12 h-12 text-green-500 mx-auto mb-4" />
                  <h2 className="text-2xl font-bold text-navy mb-2">Thank You!</h2>
                  <p className="text-slate-600 mb-6">
                    Your sourcing inquiry has been submitted successfully. Our team will review your requirements and get back to you within 24 hours.
                  </p>
                  <button
                    onClick={() => setStatus('idle')}
                    className="text-ocean font-semibold hover:text-blue-700 transition-colors"
                  >
                    Submit Another Inquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-1.5">
                        Full Name <span className="text-red-500">*</span>
                      </label>
                      <input
                        id="name"
                        name="name"
                        type="text"
                        value={form.name}
                        onChange={handleChange}
                        required
                        placeholder="John Smith"
                        className="w-full px-4 py-2.5 border border-slate-300 rounded-lg text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-ocean focus:border-transparent"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-1.5">
                        Email Address <span className="text-red-500">*</span>
                      </label>
                      <input
                        id="email"
                        name="email"
                        type="email"
                        value={form.email}
                        onChange={handleChange}
                        required
                        placeholder="john@company.com"
                        className="w-full px-4 py-2.5 border border-slate-300 rounded-lg text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-ocean focus:border-transparent"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="company" className="block text-sm font-medium text-slate-700 mb-1.5">
                        Company Name
                      </label>
                      <input
                        id="company"
                        name="company"
                        type="text"
                        value={form.company}
                        onChange={handleChange}
                        placeholder="Your Company Ltd."
                        className="w-full px-4 py-2.5 border border-slate-300 rounded-lg text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-ocean focus:border-transparent"
                      />
                    </div>
                    <div>
                      <label htmlFor="country" className="block text-sm font-medium text-slate-700 mb-1.5">
                        Country
                      </label>
                      <input
                        id="country"
                        name="country"
                        type="text"
                        value={form.country}
                        onChange={handleChange}
                        placeholder="United States"
                        className="w-full px-4 py-2.5 border border-slate-300 rounded-lg text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-ocean focus:border-transparent"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-slate-700 mb-1.5">
                        Phone Number
                      </label>
                      <input
                        id="phone"
                        name="phone"
                        type="tel"
                        value={form.phone}
                        onChange={handleChange}
                        placeholder="+1 234 567 8900"
                        className="w-full px-4 py-2.5 border border-slate-300 rounded-lg text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-ocean focus:border-transparent"
                      />
                    </div>
                    <div>
                      <label htmlFor="product_category" className="block text-sm font-medium text-slate-700 mb-1.5">
                        Product Category
                      </label>
                      <select
                        id="product_category"
                        name="product_category"
                        value={form.product_category}
                        onChange={handleChange}
                        className="w-full px-4 py-2.5 border border-slate-300 rounded-lg text-slate-900 focus:outline-none focus:ring-2 focus:ring-ocean focus:border-transparent"
                      >
                        <option value="">Select a category</option>
                        {productCategories.map((cat) => (
                          <option key={cat} value={cat}>{cat}</option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div>
                    <label htmlFor="product_description" className="block text-sm font-medium text-slate-700 mb-1.5">
                      Product Description <span className="text-red-500">*</span>
                    </label>
                    <textarea
                      id="product_description"
                      name="product_description"
                      value={form.product_description}
                      onChange={handleChange}
                      required
                      rows={4}
                      placeholder="Describe the product you want to source, including specifications, materials, and any special requirements."
                      className="w-full px-4 py-2.5 border border-slate-300 rounded-lg text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-ocean focus:border-transparent resize-vertical"
                    />
                  </div>

                  <div>
                    <label htmlFor="estimated_quantity" className="block text-sm font-medium text-slate-700 mb-1.5">
                      Estimated Order Quantity
                    </label>
                    <input
                      id="estimated_quantity"
                      name="estimated_quantity"
                      type="text"
                      value={form.estimated_quantity}
                      onChange={handleChange}
                      placeholder="e.g., 1,000 units, 5 containers/month"
                      className="w-full px-4 py-2.5 border border-slate-300 rounded-lg text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-ocean focus:border-transparent"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-3">
                      Services Needed
                    </label>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {serviceOptions.map((service) => (
                        <label key={service} className="flex items-center gap-2 cursor-pointer">
                          <input
                            type="checkbox"
                            checked={form.services_needed.includes(service)}
                            onChange={() => handleServiceToggle(service)}
                            className="w-4 h-4 text-ocean border-slate-300 rounded focus:ring-ocean"
                          />
                          <span className="text-sm text-slate-700">{service}</span>
                        </label>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-1.5">
                      Additional Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={form.message}
                      onChange={handleChange}
                      rows={3}
                      placeholder="Any additional requirements, questions, or information you'd like to share."
                      className="w-full px-4 py-2.5 border border-slate-300 rounded-lg text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-ocean focus:border-transparent resize-vertical"
                    />
                  </div>

                  {status === 'error' && error && (
                    <div className="flex items-center gap-2 text-red-600 bg-red-50 border border-red-200 rounded-lg px-4 py-3">
                      <AlertCircle className="w-5 h-5 shrink-0" />
                      <span className="text-sm">{error}</span>
                    </div>
                  )}

                  <button
                    type="submit"
                    disabled={status === 'submitting'}
                    className="inline-flex items-center justify-center gap-2 bg-ocean text-white px-8 py-3.5 rounded-lg text-base font-semibold hover:bg-blue-700 transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
                  >
                    {status === 'submitting' ? (
                      <>
                        <Loader2 className="w-5 h-5 animate-spin" />
                        Submitting...
                      </>
                    ) : (
                      'Get a Free Sourcing Quote'
                    )}
                  </button>
                </form>
              )}
            </div>

            {/* Contact Info Sidebar */}
            <div className="space-y-6">
              <div className="bg-slate-50 rounded-xl p-6 border border-slate-100">
                <h3 className="font-semibold text-navy mb-4">Get in Touch</h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <Mail className="w-5 h-5 text-ocean shrink-0 mt-0.5" />
                    <div>
                      <div className="text-sm font-medium text-slate-900">Email</div>
                      <div className="text-sm text-slate-600">info@ssourcingchina.com</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Phone className="w-5 h-5 text-ocean shrink-0 mt-0.5" />
                    <div>
                      <div className="text-sm font-medium text-slate-900">Phone</div>
                      <div className="text-sm text-slate-600">+86 755 8888 0000</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-ocean shrink-0 mt-0.5" />
                    <div>
                      <div className="text-sm font-medium text-slate-900">Office</div>
                      <div className="text-sm text-slate-600">Shenzhen, Guangdong, China</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Clock className="w-5 h-5 text-ocean shrink-0 mt-0.5" />
                    <div>
                      <div className="text-sm font-medium text-slate-900">Business Hours</div>
                      <div className="text-sm text-slate-600">Mon-Fri: 9:00 - 18:00 (CST)</div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-navy-50 rounded-xl p-6 border border-navy-100">
                <h3 className="font-semibold text-navy mb-3">What Happens Next?</h3>
                <ol className="space-y-3 text-sm text-slate-700">
                  <li className="flex items-start gap-3">
                    <span className="w-6 h-6 bg-ocean text-white rounded-full flex items-center justify-center text-xs font-bold shrink-0">1</span>
                    <span>We review your inquiry within 24 hours</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-6 h-6 bg-ocean text-white rounded-full flex items-center justify-center text-xs font-bold shrink-0">2</span>
                    <span>A sourcing specialist contacts you to discuss details</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-6 h-6 bg-ocean text-white rounded-full flex items-center justify-center text-xs font-bold shrink-0">3</span>
                    <span>We provide a free quote with proposed approach</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-6 h-6 bg-ocean text-white rounded-full flex items-center justify-center text-xs font-bold shrink-0">4</span>
                    <span>You decide — no obligation, no hidden fees</span>
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
