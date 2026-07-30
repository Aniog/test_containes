import { useState } from 'react'
import { Link } from 'react-router-dom'
import { DataClient } from '@strikingly/sdk'
import { STRK_PROJECT_URL, STRK_PROJECT_ANON_KEY } from '../config.jsx'
import {
  Mail, Phone, MapPin, Clock, CheckCircle, ArrowRight,
  MessageSquare, Globe, Shield
} from 'lucide-react'

const client = new DataClient(STRK_PROJECT_URL, STRK_PROJECT_ANON_KEY)

const SERVICES = [
  'Supplier Sourcing',
  'Factory Verification',
  'Quality Inspection',
  'Production Follow-up',
  'Shipping Coordination',
  'Private Label / OEM',
  'Sample Procurement',
]

const CATEGORIES = [
  'Electronics & Components',
  'Furniture & Home Decor',
  'Clothing & Textiles',
  'Machinery & Industrial',
  'Toys & Baby Products',
  'Health & Beauty',
  'Sports & Outdoor',
  'Packaging & Printing',
  'Auto Parts',
  'Other',
]

const initialForm = {
  name: '',
  email: '',
  company: '',
  country: '',
  phone: '',
  product_category: '',
  product_description: '',
  estimated_quantity: '',
  target_price: '',
  services_needed: [],
  message: '',
}

function getErrorMessage(response, error) {
  if (Array.isArray(response?.errors) && response.errors.length > 0) {
    return response.errors.join(', ')
  }
  return error?.message || 'Submission failed. Please try again.'
}

export default function Contact() {
  const [form, setForm] = useState(initialForm)
  const [status, setStatus] = useState('idle') // idle | submitting | success | error
  const [errorMsg, setErrorMsg] = useState('')

  const handleChange = (e) => {
    const { name, value } = e.target
    setForm((prev) => ({ ...prev, [name]: value }))
  }

  const toggleService = (service) => {
    setForm((prev) => ({
      ...prev,
      services_needed: prev.services_needed.includes(service)
        ? prev.services_needed.filter((s) => s !== service)
        : [...prev.services_needed, service],
    }))
  }

  const validate = () => {
    if (!form.name.trim()) return 'Please enter your name.'
    if (!form.email.trim() || !/^\S+@\S+\.\S+$/.test(form.email)) return 'Please enter a valid email address.'
    if (!form.product_description.trim()) return 'Please describe the product you need to source.'
    return null
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setErrorMsg('')
    const validationError = validate()
    if (validationError) {
      setErrorMsg(validationError)
      return
    }

    setStatus('submitting')

    const payload = {
      name: form.name.trim(),
      email: form.email.trim(),
      product_description: form.product_description.trim(),
    }
    if (form.company.trim()) payload.company = form.company.trim()
    if (form.country.trim()) payload.country = form.country.trim()
    if (form.phone.trim()) payload.phone = form.phone.trim()
    if (form.product_category) payload.product_category = form.product_category
    if (form.estimated_quantity.trim()) payload.estimated_quantity = form.estimated_quantity.trim()
    if (form.target_price.trim()) payload.target_price = form.target_price.trim()
    if (form.services_needed.length > 0) payload.services_needed = form.services_needed
    if (form.message.trim()) payload.message = form.message.trim()
    payload.status = 'new'

    const { data: response, error } = await client
      .from('Sourcing Inquiries')
      .insert({ data: payload })
      .select()
      .single()

    if (error || response?.success === false) {
      setErrorMsg(getErrorMessage(response, error))
      setStatus('error')
      return
    }

    setStatus('success')
    setForm(initialForm)
  }

  return (
    <div>
      {/* Header */}
      <section className="bg-primary py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <span className="text-red-300 font-semibold text-sm uppercase tracking-wider">Get in Touch</span>
            <h1 className="text-4xl md:text-5xl font-bold text-white mt-2 mb-4">
              Get a Free Sourcing Quote
            </h1>
            <p className="text-blue-200 text-lg leading-relaxed">
              Tell us what you need and we'll send you a free sourcing plan within 24 hours. No commitment required.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">

            {/* Sidebar */}
            <div className="lg:col-span-1 space-y-8">
              {/* Contact Info */}
              <div>
                <h2 className="text-xl font-bold text-textdark mb-5">Contact Information</h2>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <div className="w-9 h-9 bg-lightblue rounded-lg flex items-center justify-center shrink-0">
                      <MapPin className="w-4 h-4 text-primary" />
                    </div>
                    <div>
                      <p className="font-semibold text-textdark text-sm">Office</p>
                      <p className="text-muted text-sm">Guangzhou, Guangdong, China</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-9 h-9 bg-lightblue rounded-lg flex items-center justify-center shrink-0">
                      <Mail className="w-4 h-4 text-primary" />
                    </div>
                    <div>
                      <p className="font-semibold text-textdark text-sm">Email</p>
                      <a href="mailto:info@ssourcing.cn" className="text-primary text-sm hover:text-accent transition-colors">
                        info@ssourcing.cn
                      </a>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-9 h-9 bg-lightblue rounded-lg flex items-center justify-center shrink-0">
                      <Phone className="w-4 h-4 text-primary" />
                    </div>
                    <div>
                      <p className="font-semibold text-textdark text-sm">Phone / WhatsApp</p>
                      <a href="tel:+8613800000000" className="text-primary text-sm hover:text-accent transition-colors">
                        +86 138 0000 0000
                      </a>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-9 h-9 bg-lightblue rounded-lg flex items-center justify-center shrink-0">
                      <Clock className="w-4 h-4 text-primary" />
                    </div>
                    <div>
                      <p className="font-semibold text-textdark text-sm">Response Time</p>
                      <p className="text-muted text-sm">Within 24 hours (business days)</p>
                    </div>
                  </li>
                </ul>
              </div>

              {/* Trust Points */}
              <div className="bg-lightblue rounded-2xl p-6">
                <h3 className="font-bold text-textdark mb-4">Why Work With Us</h3>
                <ul className="space-y-3">
                  {[
                    { icon: Globe, text: 'Buyers in 40+ countries served' },
                    { icon: Shield, text: 'On-site factory verification' },
                    { icon: CheckCircle, text: 'No payment until you approve samples' },
                    { icon: MessageSquare, text: 'Bilingual team, fast communication' },
                  ].map(({ icon: Icon, text }) => (
                    <li key={text} className="flex items-center gap-3">
                      <Icon className="w-4 h-4 text-primary shrink-0" />
                      <span className="text-textdark text-sm">{text}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Other pages */}
              <div>
                <h3 className="font-bold text-textdark mb-3 text-sm">Explore More</h3>
                <div className="space-y-2">
                  {[
                    { label: 'Our Services', href: '/services' },
                    { label: 'How It Works', href: '/how-it-works' },
                    { label: 'Case Studies', href: '/case-studies' },
                  ].map(({ label, href }) => (
                    <Link
                      key={href}
                      to={href}
                      className="flex items-center justify-between px-4 py-3 bg-white border border-border rounded-lg text-sm font-medium text-textdark hover:border-primary hover:text-primary transition-colors group"
                    >
                      {label}
                      <ArrowRight className="w-4 h-4 text-muted group-hover:text-primary transition-colors" />
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            {/* Form */}
            <div className="lg:col-span-2">
              {status === 'success' ? (
                <div className="bg-green-50 border border-green-200 rounded-2xl p-10 text-center">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-5">
                    <CheckCircle className="w-8 h-8 text-green-600" />
                  </div>
                  <h2 className="text-2xl font-bold text-textdark mb-3">Inquiry Received!</h2>
                  <p className="text-muted text-lg mb-6">
                    Thank you for your sourcing request. Our team will review your requirements and get back to you within 24 hours with a free sourcing plan.
                  </p>
                  <button
                    onClick={() => setStatus('idle')}
                    className="inline-flex items-center gap-2 bg-primary text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-900 transition-colors"
                  >
                    Submit Another Inquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6" noValidate>
                  <div>
                    <h2 className="text-2xl font-bold text-textdark mb-1">Sourcing Inquiry Form</h2>
                    <p className="text-muted text-sm">Fields marked with * are required.</p>
                  </div>

                  {/* Contact Details */}
                  <div className="bg-lightblue rounded-2xl p-6 space-y-4">
                    <h3 className="font-semibold text-textdark text-sm uppercase tracking-wider">Your Details</h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium text-textdark mb-1">
                          Full Name *
                        </label>
                        <input
                          id="name"
                          name="name"
                          type="text"
                          value={form.name}
                          onChange={handleChange}
                          placeholder="Your full name"
                          className="w-full px-4 py-2.5 rounded-lg border border-border bg-white text-textdark text-sm focus:outline-none focus:ring-2 focus:ring-primary"
                          required
                        />
                      </div>
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-textdark mb-1">
                          Business Email *
                        </label>
                        <input
                          id="email"
                          name="email"
                          type="email"
                          value={form.email}
                          onChange={handleChange}
                          placeholder="you@company.com"
                          className="w-full px-4 py-2.5 rounded-lg border border-border bg-white text-textdark text-sm focus:outline-none focus:ring-2 focus:ring-primary"
                          required
                        />
                      </div>
                      <div>
                        <label htmlFor="company" className="block text-sm font-medium text-textdark mb-1">
                          Company Name
                        </label>
                        <input
                          id="company"
                          name="company"
                          type="text"
                          value={form.company}
                          onChange={handleChange}
                          placeholder="Your company"
                          className="w-full px-4 py-2.5 rounded-lg border border-border bg-white text-textdark text-sm focus:outline-none focus:ring-2 focus:ring-primary"
                        />
                      </div>
                      <div>
                        <label htmlFor="country" className="block text-sm font-medium text-textdark mb-1">
                          Country
                        </label>
                        <input
                          id="country"
                          name="country"
                          type="text"
                          value={form.country}
                          onChange={handleChange}
                          placeholder="e.g. United States"
                          className="w-full px-4 py-2.5 rounded-lg border border-border bg-white text-textdark text-sm focus:outline-none focus:ring-2 focus:ring-primary"
                        />
                      </div>
                      <div className="sm:col-span-2">
                        <label htmlFor="phone" className="block text-sm font-medium text-textdark mb-1">
                          Phone / WhatsApp
                        </label>
                        <input
                          id="phone"
                          name="phone"
                          type="tel"
                          value={form.phone}
                          onChange={handleChange}
                          placeholder="+1 555 000 0000"
                          className="w-full px-4 py-2.5 rounded-lg border border-border bg-white text-textdark text-sm focus:outline-none focus:ring-2 focus:ring-primary"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Product Details */}
                  <div className="bg-lightblue rounded-2xl p-6 space-y-4">
                    <h3 className="font-semibold text-textdark text-sm uppercase tracking-wider">Product Requirements</h3>
                    <div>
                      <label htmlFor="product_category" className="block text-sm font-medium text-textdark mb-1">
                        Product Category
                      </label>
                      <select
                        id="product_category"
                        name="product_category"
                        value={form.product_category}
                        onChange={handleChange}
                        className="w-full px-4 py-2.5 rounded-lg border border-border bg-white text-textdark text-sm focus:outline-none focus:ring-2 focus:ring-primary"
                      >
                        <option value="">Select a category</option>
                        {CATEGORIES.map((cat) => (
                          <option key={cat} value={cat}>{cat}</option>
                        ))}
                      </select>
                    </div>
                    <div>
                      <label htmlFor="product_description" className="block text-sm font-medium text-textdark mb-1">
                        Product Description *
                      </label>
                      <textarea
                        id="product_description"
                        name="product_description"
                        value={form.product_description}
                        onChange={handleChange}
                        rows={4}
                        placeholder="Describe the product you need to source — include specifications, materials, dimensions, certifications, or any other relevant details."
                        className="w-full px-4 py-2.5 rounded-lg border border-border bg-white text-textdark text-sm focus:outline-none focus:ring-2 focus:ring-primary resize-none"
                        required
                      />
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="estimated_quantity" className="block text-sm font-medium text-textdark mb-1">
                          Estimated Quantity
                        </label>
                        <input
                          id="estimated_quantity"
                          name="estimated_quantity"
                          type="text"
                          value={form.estimated_quantity}
                          onChange={handleChange}
                          placeholder="e.g. 500 units / month"
                          className="w-full px-4 py-2.5 rounded-lg border border-border bg-white text-textdark text-sm focus:outline-none focus:ring-2 focus:ring-primary"
                        />
                      </div>
                      <div>
                        <label htmlFor="target_price" className="block text-sm font-medium text-textdark mb-1">
                          Target Unit Price
                        </label>
                        <input
                          id="target_price"
                          name="target_price"
                          type="text"
                          value={form.target_price}
                          onChange={handleChange}
                          placeholder="e.g. USD 5–8 per unit"
                          className="w-full px-4 py-2.5 rounded-lg border border-border bg-white text-textdark text-sm focus:outline-none focus:ring-2 focus:ring-primary"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Services Needed */}
                  <div className="bg-lightblue rounded-2xl p-6">
                    <h3 className="font-semibold text-textdark text-sm uppercase tracking-wider mb-4">Services Needed</h3>
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                      {SERVICES.map((service) => {
                        const selected = form.services_needed.includes(service)
                        return (
                          <button
                            key={service}
                            type="button"
                            onClick={() => toggleService(service)}
                            className={`px-3 py-2 rounded-lg text-xs font-medium text-left transition-colors border ${
                              selected
                                ? 'bg-primary text-white border-primary'
                                : 'bg-white text-textdark border-border hover:border-primary hover:text-primary'
                            }`}
                          >
                            {service}
                          </button>
                        )
                      })}
                    </div>
                  </div>

                  {/* Additional Notes */}
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-textdark mb-1">
                      Additional Notes
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={form.message}
                      onChange={handleChange}
                      rows={3}
                      placeholder="Any other information that would help us understand your requirements."
                      className="w-full px-4 py-2.5 rounded-lg border border-border bg-white text-textdark text-sm focus:outline-none focus:ring-2 focus:ring-primary resize-none"
                    />
                  </div>

                  {/* Error */}
                  {(status === 'error' || errorMsg) && (
                    <div className="bg-red-50 border border-red-200 rounded-lg px-4 py-3">
                      <p className="text-accent text-sm font-medium">{errorMsg}</p>
                    </div>
                  )}

                  {/* Submit */}
                  <button
                    type="submit"
                    disabled={status === 'submitting'}
                    className="w-full bg-accent text-white py-4 rounded-xl font-bold text-base hover:bg-red-700 transition-colors disabled:opacity-60 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                  >
                    {status === 'submitting' ? (
                      <>
                        <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        Sending Inquiry…
                      </>
                    ) : (
                      <>
                        Get a Free Sourcing Quote
                        <ArrowRight className="w-5 h-5" />
                      </>
                    )}
                  </button>
                  <p className="text-muted text-xs text-center">
                    We respond within 24 hours on business days. Your information is kept confidential.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
