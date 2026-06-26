import { useState } from 'react'
import { DataClient } from '@strikingly/sdk'
import { STRK_PROJECT_URL, STRK_PROJECT_ANON_KEY } from '../config.jsx'
import { Mail, Phone, MapPin, Clock, Send, CheckCircle, AlertCircle } from 'lucide-react'

const client = new DataClient(STRK_PROJECT_URL, STRK_PROJECT_ANON_KEY)

const productCategories = [
  'Electronics', 'Home & Garden', 'Apparel & Textiles', 'Machinery & Equipment',
  'Auto Parts', 'Packaging & Printing', 'Building Materials', 'Health & Beauty',
  'Sports & Outdoors', 'Other'
]

const serviceOptions = [
  'Supplier Sourcing', 'Factory Verification', 'Quality Inspection',
  'Production Follow-up', 'Shipping Coordination', 'Full Service'
]

const timelineOptions = [
  'Urgent (within 2 weeks)', 'Standard (2-4 weeks)', 'Flexible (1-2 months)', 'Just exploring'
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
  timeline: '',
  services_needed: [],
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

  const handleServiceToggle = (service) => {
    setForm((prev) => ({
      ...prev,
      services_needed: prev.services_needed.includes(service)
        ? prev.services_needed.filter((s) => s !== service)
        : [...prev.services_needed, service],
    }))
  }

  const validate = () => {
    if (!form.name.trim()) return 'Name is required'
    if (!form.email.trim()) return 'Email is required'
    if (!/^\S+@\S+\.\S+$/.test(form.email)) return 'Please enter a valid email'
    if (!form.product_description.trim()) return 'Please describe the product you want to source'
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
            target_price: form.target_price,
            timeline: form.timeline,
            services_needed: form.services_needed,
            message: form.message,
          },
        })
        .select()
        .single()

      if (submitError) throw submitError
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
      <section className="bg-navy py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-amber font-semibold text-sm uppercase tracking-wider mb-2">Contact Us</p>
            <h1 className="text-4xl md:text-5xl font-extrabold text-white tracking-tight mb-6">
              Get a Free Sourcing Quote
            </h1>
            <p className="text-slate-300 text-lg leading-relaxed">
              Tell us about your sourcing needs. We'll respond within 24 hours with supplier recommendations and a tailored plan.
            </p>
          </div>
        </div>
      </section>

      {/* Form + Contact Info */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 lg:gap-16">
            {/* Form */}
            <div className="lg:col-span-2">
              {status === 'success' ? (
                <div className="bg-green-50 border border-green-200 rounded-xl p-8 text-center">
                  <CheckCircle className="w-12 h-12 text-green-600 mx-auto mb-4" />
                  <h3 className="text-xl font-bold text-green-900 mb-2">Inquiry Submitted Successfully</h3>
                  <p className="text-green-700 mb-6">
                    Thank you for your inquiry. Our team will review your requirements and respond within 24 hours.
                  </p>
                  <button
                    onClick={() => setStatus('idle')}
                    className="bg-navy hover:bg-navy-dark text-white px-6 py-2.5 rounded-lg font-semibold transition-colors"
                  >
                    Submit Another Inquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-semibold text-slate-900 mb-1.5">
                        Full Name <span className="text-red-500">*</span>
                      </label>
                      <input
                        id="name"
                        name="name"
                        type="text"
                        value={form.name}
                        onChange={handleChange}
                        required
                        placeholder="Your full name"
                        className="w-full px-4 py-2.5 border border-slate-300 rounded-lg text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-navy/20 focus:border-navy transition-colors"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-semibold text-slate-900 mb-1.5">
                        Email <span className="text-red-500">*</span>
                      </label>
                      <input
                        id="email"
                        name="email"
                        type="email"
                        value={form.email}
                        onChange={handleChange}
                        required
                        placeholder="you@company.com"
                        className="w-full px-4 py-2.5 border border-slate-300 rounded-lg text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-navy/20 focus:border-navy transition-colors"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="company" className="block text-sm font-semibold text-slate-900 mb-1.5">
                        Company Name
                      </label>
                      <input
                        id="company"
                        name="company"
                        type="text"
                        value={form.company}
                        onChange={handleChange}
                        placeholder="Your company"
                        className="w-full px-4 py-2.5 border border-slate-300 rounded-lg text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-navy/20 focus:border-navy transition-colors"
                      />
                    </div>
                    <div>
                      <label htmlFor="country" className="block text-sm font-semibold text-slate-900 mb-1.5">
                        Country
                      </label>
                      <input
                        id="country"
                        name="country"
                        type="text"
                        value={form.country}
                        onChange={handleChange}
                        placeholder="Your country"
                        className="w-full px-4 py-2.5 border border-slate-300 rounded-lg text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-navy/20 focus:border-navy transition-colors"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="phone" className="block text-sm font-semibold text-slate-900 mb-1.5">
                        Phone Number
                      </label>
                      <input
                        id="phone"
                        name="phone"
                        type="tel"
                        value={form.phone}
                        onChange={handleChange}
                        placeholder="+1 234 567 8900"
                        className="w-full px-4 py-2.5 border border-slate-300 rounded-lg text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-navy/20 focus:border-navy transition-colors"
                      />
                    </div>
                    <div>
                      <label htmlFor="product_category" className="block text-sm font-semibold text-slate-900 mb-1.5">
                        Product Category
                      </label>
                      <select
                        id="product_category"
                        name="product_category"
                        value={form.product_category}
                        onChange={handleChange}
                        className="w-full px-4 py-2.5 border border-slate-300 rounded-lg text-slate-900 focus:outline-none focus:ring-2 focus:ring-navy/20 focus:border-navy transition-colors"
                      >
                        <option value="">Select a category</option>
                        {productCategories.map((cat) => (
                          <option key={cat} value={cat}>{cat}</option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div>
                    <label htmlFor="product_description" className="block text-sm font-semibold text-slate-900 mb-1.5">
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
                      className="w-full px-4 py-2.5 border border-slate-300 rounded-lg text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-navy/20 focus:border-navy transition-colors resize-y"
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="estimated_quantity" className="block text-sm font-semibold text-slate-900 mb-1.5">
                        Estimated Quantity
                      </label>
                      <input
                        id="estimated_quantity"
                        name="estimated_quantity"
                        type="text"
                        value={form.estimated_quantity}
                        onChange={handleChange}
                        placeholder="e.g., 1,000 units"
                        className="w-full px-4 py-2.5 border border-slate-300 rounded-lg text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-navy/20 focus:border-navy transition-colors"
                      />
                    </div>
                    <div>
                      <label htmlFor="target_price" className="block text-sm font-semibold text-slate-900 mb-1.5">
                        Target Price Per Unit
                      </label>
                      <input
                        id="target_price"
                        name="target_price"
                        type="text"
                        value={form.target_price}
                        onChange={handleChange}
                        placeholder="e.g., $5-10 USD"
                        className="w-full px-4 py-2.5 border border-slate-300 rounded-lg text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-navy/20 focus:border-navy transition-colors"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="timeline" className="block text-sm font-semibold text-slate-900 mb-1.5">
                      Timeline
                    </label>
                    <select
                      id="timeline"
                      name="timeline"
                      value={form.timeline}
                      onChange={handleChange}
                      className="w-full px-4 py-2.5 border border-slate-300 rounded-lg text-slate-900 focus:outline-none focus:ring-2 focus:ring-navy/20 focus:border-navy transition-colors"
                    >
                      <option value="">Select timeline</option>
                      {timelineOptions.map((opt) => (
                        <option key={opt} value={opt}>{opt}</option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-slate-900 mb-3">
                      Services Needed
                    </label>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                      {serviceOptions.map((service) => (
                        <label
                          key={service}
                          className={`flex items-center gap-2 px-3 py-2 border rounded-lg cursor-pointer transition-colors text-sm ${
                            form.services_needed.includes(service)
                              ? 'border-navy bg-navy/5 text-navy font-medium'
                              : 'border-slate-200 text-slate-600 hover:border-slate-300'
                          }`}
                        >
                          <input
                            type="checkbox"
                            checked={form.services_needed.includes(service)}
                            onChange={() => handleServiceToggle(service)}
                            className="sr-only"
                          />
                          {form.services_needed.includes(service) && <CheckCircle className="w-4 h-4" />}
                          {service}
                        </label>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-semibold text-slate-900 mb-1.5">
                      Additional Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={form.message}
                      onChange={handleChange}
                      rows={3}
                      placeholder="Any additional requirements or questions..."
                      className="w-full px-4 py-2.5 border border-slate-300 rounded-lg text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-navy/20 focus:border-navy transition-colors resize-y"
                    />
                  </div>

                  {errorMsg && (
                    <div className="flex items-center gap-2 text-red-600 text-sm">
                      <AlertCircle className="w-4 h-4 shrink-0" />
                      {errorMsg}
                    </div>
                  )}

                  <button
                    type="submit"
                    disabled={status === 'submitting'}
                    className="inline-flex items-center gap-2 bg-amber hover:bg-amber-dark text-white px-8 py-3.5 rounded-lg text-base font-semibold transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
                  >
                    {status === 'submitting' ? (
                      <>
                        <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        Submitting...
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        Submit Inquiry
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>

            {/* Contact Info Sidebar */}
            <div className="space-y-6">
              <div className="bg-slate-50 border border-slate-200 rounded-xl p-6">
                <h3 className="text-lg font-bold text-slate-900 mb-4">Contact Information</h3>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <Mail className="w-5 h-5 text-navy shrink-0 mt-0.5" />
                    <div>
                      <p className="text-sm font-medium text-slate-900">Email</p>
                      <p className="text-sm text-slate-600">info@ssourcingchina.com</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <Phone className="w-5 h-5 text-navy shrink-0 mt-0.5" />
                    <div>
                      <p className="text-sm font-medium text-slate-900">Phone</p>
                      <p className="text-sm text-slate-600">+86 755 8888 8888</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-navy shrink-0 mt-0.5" />
                    <div>
                      <p className="text-sm font-medium text-slate-900">Office</p>
                      <p className="text-sm text-slate-600">Shenzhen, Guangdong, China</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <Clock className="w-5 h-5 text-navy shrink-0 mt-0.5" />
                    <div>
                      <p className="text-sm font-medium text-slate-900">Business Hours</p>
                      <p className="text-sm text-slate-600">Mon-Fri: 9:00 - 18:00 (CST)</p>
                    </div>
                  </li>
                </ul>
              </div>

              <div className="bg-navy rounded-xl p-6">
                <h3 className="text-lg font-bold text-white mb-3">What Happens Next?</h3>
                <ul className="space-y-3">
                  {[
                    'We review your requirements within 24 hours',
                    'You receive supplier recommendations with profiles',
                    'We schedule a call to discuss your project',
                    'We begin sourcing based on your approval',
                  ].map((step, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <span className="w-6 h-6 bg-amber/20 rounded-full flex items-center justify-center shrink-0">
                        <span className="text-amber text-xs font-bold">{idx + 1}</span>
                      </span>
                      <span className="text-slate-300 text-sm">{step}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-slate-50 border border-slate-200 rounded-xl p-6">
                <h3 className="text-lg font-bold text-slate-900 mb-3">Our Locations</h3>
                <div className="space-y-3">
                  {[
                    { city: 'Shenzhen', desc: 'Headquarters - Electronics & Tech' },
                    { city: 'Guangzhou', desc: 'Apparel, Home & General Merchandise' },
                    { city: 'Yiwu', desc: 'Small Commodities & Daily Goods' },
                  ].map((loc) => (
                    <div key={loc.city}>
                      <p className="text-sm font-semibold text-slate-900">{loc.city}</p>
                      <p className="text-xs text-slate-500">{loc.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
