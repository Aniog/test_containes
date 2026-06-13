import { useState } from 'react'
import { Link } from 'react-router-dom'
import { DataClient } from '@strikingly/sdk'
import { STRK_PROJECT_URL, STRK_PROJECT_ANON_KEY } from '@/config.jsx'
import { ArrowRight, CheckCircle, AlertCircle, Phone, Mail, MapPin, Clock } from 'lucide-react'

const client = new DataClient(STRK_PROJECT_URL, STRK_PROJECT_ANON_KEY)

const productCategories = [
  'Electronics',
  'Machinery & Industrial',
  'Textiles & Apparel',
  'Consumer Goods',
  'Home & Garden',
  'Packaging & Printing',
  'Automotive Parts',
  'Other',
]

const budgetRanges = [
  'Under $10,000',
  '$10,000 - $50,000',
  '$50,000 - $200,000',
  '$200,000 - $500,000',
  'Over $500,000',
  'Not sure yet',
]

const serviceOptions = [
  'Supplier Sourcing',
  'Factory Verification',
  'Quality Control',
  'Production Monitoring',
  'Shipping Coordination',
  'Custom Manufacturing',
]

const getErrorMessage = (response, error) => {
  if (Array.isArray(response?.errors) && response.errors.length > 0) {
    return response.errors.join(', ')
  }
  return error?.message || 'Request failed. Please try again.'
}

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    country: '',
    product_category: '',
    estimated_quantity: '',
    budget_range: '',
    services_needed: [],
    message: '',
  })
  const [status, setStatus] = useState('idle')
  const [error, setError] = useState(null)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
    setError(null)
  }

  const handleServiceToggle = (service) => {
    setFormData((prev) => {
      const current = prev.services_needed
      const updated = current.includes(service)
        ? current.filter((s) => s !== service)
        : [...current, service]
      return { ...prev, services_needed: updated }
    })
    setError(null)
  }

  const validate = () => {
    if (!formData.name.trim()) return 'Name is required'
    if (!formData.email.trim()) return 'Email is required'
    if (!/^\S+@\S+\.\S+$/.test(formData.email)) return 'Please enter a valid email'
    if (!formData.message.trim()) return 'Message is required'
    return null
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setError(null)

    const err = validate()
    if (err) {
      setError(err)
      return
    }

    setStatus('submitting')

    try {
      // Create inquiry record
      const { data: response, error: createError } = await client
        .from('SourcingInquiry')
        .insert({
          data: {
            name: formData.name,
            email: formData.email,
            company: formData.company,
            phone: formData.phone,
            country: formData.country,
            product_category: formData.product_category,
            estimated_quantity: formData.estimated_quantity,
            budget_range: formData.budget_range,
            services_needed: formData.services_needed,
            message: formData.message,
            status: 'new',
          },
        })
        .select()
        .single()

      if (createError || response?.success === false) {
        throw new Error(getErrorMessage(response, createError))
      }

      setStatus('success')
      setFormData({
        name: '',
        email: '',
        company: '',
        phone: '',
        country: '',
        product_category: '',
        estimated_quantity: '',
        budget_range: '',
        services_needed: [],
        message: '',
      })
    } catch (err) {
      setError(err.message || 'Something went wrong. Please try again.')
      setStatus('error')
    }
  }

  return (
    <div>
      {/* Hero */}
      <section className="relative py-20 md:py-28 bg-[#1A365D]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-block px-3 py-1 bg-[#C27A3E]/20 text-[#F5EDE3] text-xs font-medium tracking-wider uppercase rounded-full mb-4">
            Get in Touch
          </span>
          <h1 className="text-3xl md:text-5xl font-bold text-white mb-4">Get a Free Sourcing Quote</h1>
          <p className="text-slate-300 text-lg max-w-2xl mx-auto">
            Tell us what you need. We will respond within 24 hours with supplier recommendations and a service proposal.
          </p>
        </div>
      </section>

      <section className="py-20 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Contact Info */}
            <div className="lg:col-span-1">
              <h2 className="text-2xl font-bold text-[#1A365D] mb-6">Contact Information</h2>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-[#F5EDE3] rounded-lg flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5 text-[#C27A3E]" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-[#1A365D] text-sm mb-1">Office Address</h4>
                    <p className="text-[#64748B] text-sm leading-relaxed">
                      Room 1205, Block A<br />
                      Huaqiang North Road<br />
                      Futian District, Shenzhen<br />
                      China 518031
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-[#F5EDE3] rounded-lg flex items-center justify-center shrink-0">
                    <Phone className="w-5 h-5 text-[#C27A3E]" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-[#1A365D] text-sm mb-1">Phone</h4>
                    <p className="text-[#64748B] text-sm">+86-755-XXXX-XXXX</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-[#F5EDE3] rounded-lg flex items-center justify-center shrink-0">
                    <Mail className="w-5 h-5 text-[#C27A3E]" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-[#1A365D] text-sm mb-1">Email</h4>
                    <p className="text-[#64748B] text-sm">hello@ssourcingchina.com</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-[#F5EDE3] rounded-lg flex items-center justify-center shrink-0">
                    <Clock className="w-5 h-5 text-[#C27A3E]" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-[#1A365D] text-sm mb-1">Response Time</h4>
                    <p className="text-[#64748B] text-sm">We respond to all inquiries within 24 business hours.</p>
                  </div>
                </div>
              </div>

              <div className="mt-10 p-5 bg-[#F8F9FA] rounded-lg border border-slate-200">
                <h4 className="font-semibold text-[#1A365D] text-sm mb-2">What to Expect</h4>
                <ul className="space-y-2 text-[#64748B] text-sm">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                    Free consultation with a sourcing specialist
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                    Supplier shortlist within 5-7 business days
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                    Transparent pricing with no hidden fees
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                    No obligation, cancel anytime
                  </li>
                </ul>
              </div>
            </div>

            {/* Inquiry Form */}
            <div className="lg:col-span-2">
              <div className="bg-white border border-slate-200 rounded-xl p-6 md:p-8 shadow-sm">
                {status === 'success' ? (
                  <div className="text-center py-10">
                    <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <CheckCircle className="w-8 h-8 text-emerald-600" />
                    </div>
                    <h3 className="text-2xl font-bold text-[#1A365D] mb-3">Thank You!</h3>
                    <p className="text-[#64748B] mb-6">
                      Your inquiry has been received. A sourcing specialist will contact you within 24 hours with supplier recommendations.
                    </p>
                    <button
                      onClick={() => setStatus('idle')}
                      className="inline-flex items-center gap-2 px-6 py-3 bg-[#1A365D] text-white text-sm font-semibold rounded-md hover:bg-[#0F2240] transition-colors"
                    >
                      Submit Another Inquiry
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium text-[#1A365D] mb-1.5">
                          Full Name <span className="text-red-500">*</span>
                        </label>
                        <input
                          id="name"
                          name="name"
                          type="text"
                          value={formData.name}
                          onChange={handleChange}
                          placeholder="John Smith"
                          className="w-full px-4 py-2.5 border border-slate-300 rounded-md text-sm text-[#1E293B] placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#C27A3E]/50 focus:border-[#C27A3E] transition-colors"
                        />
                      </div>
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-[#1A365D] mb-1.5">
                          Email <span className="text-red-500">*</span>
                        </label>
                        <input
                          id="email"
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="john@company.com"
                          className="w-full px-4 py-2.5 border border-slate-300 rounded-md text-sm text-[#1E293B] placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#C27A3E]/50 focus:border-[#C27A3E] transition-colors"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                      <div>
                        <label htmlFor="company" className="block text-sm font-medium text-[#1A365D] mb-1.5">
                          Company
                        </label>
                        <input
                          id="company"
                          name="company"
                          type="text"
                          value={formData.company}
                          onChange={handleChange}
                          placeholder="Your Company Name"
                          className="w-full px-4 py-2.5 border border-slate-300 rounded-md text-sm text-[#1E293B] placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#C27A3E]/50 focus:border-[#C27A3E] transition-colors"
                        />
                      </div>
                      <div>
                        <label htmlFor="phone" className="block text-sm font-medium text-[#1A365D] mb-1.5">
                          Phone
                        </label>
                        <input
                          id="phone"
                          name="phone"
                          type="tel"
                          value={formData.phone}
                          onChange={handleChange}
                          placeholder="+1 (555) 000-0000"
                          className="w-full px-4 py-2.5 border border-slate-300 rounded-md text-sm text-[#1E293B] placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#C27A3E]/50 focus:border-[#C27A3E] transition-colors"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                      <div>
                        <label htmlFor="country" className="block text-sm font-medium text-[#1A365D] mb-1.5">
                          Country
                        </label>
                        <input
                          id="country"
                          name="country"
                          type="text"
                          value={formData.country}
                          onChange={handleChange}
                          placeholder="United States"
                          className="w-full px-4 py-2.5 border border-slate-300 rounded-md text-sm text-[#1E293B] placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#C27A3E]/50 focus:border-[#C27A3E] transition-colors"
                        />
                      </div>
                      <div>
                        <label htmlFor="product_category" className="block text-sm font-medium text-[#1A365D] mb-1.5">
                          Product Category
                        </label>
                        <select
                          id="product_category"
                          name="product_category"
                          value={formData.product_category}
                          onChange={handleChange}
                          className="w-full px-4 py-2.5 border border-slate-300 rounded-md text-sm text-[#1E293B] bg-white focus:outline-none focus:ring-2 focus:ring-[#C27A3E]/50 focus:border-[#C27A3E] transition-colors"
                        >
                          <option value="">Select a category</option>
                          {productCategories.map((cat) => (
                            <option key={cat} value={cat}>{cat}</option>
                          ))}
                        </select>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                      <div>
                        <label htmlFor="estimated_quantity" className="block text-sm font-medium text-[#1A365D] mb-1.5">
                          Estimated Quantity
                        </label>
                        <input
                          id="estimated_quantity"
                          name="estimated_quantity"
                          type="text"
                          value={formData.estimated_quantity}
                          onChange={handleChange}
                          placeholder="e.g., 5,000 units"
                          className="w-full px-4 py-2.5 border border-slate-300 rounded-md text-sm text-[#1E293B] placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#C27A3E]/50 focus:border-[#C27A3E] transition-colors"
                        />
                      </div>
                      <div>
                        <label htmlFor="budget_range" className="block text-sm font-medium text-[#1A365D] mb-1.5">
                          Budget Range
                        </label>
                        <select
                          id="budget_range"
                          name="budget_range"
                          value={formData.budget_range}
                          onChange={handleChange}
                          className="w-full px-4 py-2.5 border border-slate-300 rounded-md text-sm text-[#1E293B] bg-white focus:outline-none focus:ring-2 focus:ring-[#C27A3E]/50 focus:border-[#C27A3E] transition-colors"
                        >
                          <option value="">Select budget range</option>
                          {budgetRanges.map((range) => (
                            <option key={range} value={range}>{range}</option>
                          ))}
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-[#1A365D] mb-2">
                        Services You Need
                      </label>
                      <div className="flex flex-wrap gap-2">
                        {serviceOptions.map((service) => (
                          <button
                            key={service}
                            type="button"
                            onClick={() => handleServiceToggle(service)}
                            className={`px-4 py-2 text-sm rounded-full border transition-all ${
                              formData.services_needed.includes(service)
                                ? 'bg-[#C27A3E] text-white border-[#C27A3E]'
                                : 'bg-white text-[#64748B] border-slate-300 hover:border-[#C27A3E]'
                            }`}
                          >
                            {service}
                          </button>
                        ))}
                      </div>
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-[#1A365D] mb-1.5">
                        Your Sourcing Requirements <span className="text-red-500">*</span>
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        rows={5}
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Describe the products you are looking for, quality requirements, target pricing, timeline, and any other details..."
                        className="w-full px-4 py-2.5 border border-slate-300 rounded-md text-sm text-[#1E293B] placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#C27A3E]/50 focus:border-[#C27A3E] transition-colors resize-none"
                      />
                    </div>

                    {error && (
                      <div className="flex items-start gap-2 p-3 bg-red-50 border border-red-200 rounded-md">
                        <AlertCircle className="w-4 h-4 text-red-500 shrink-0 mt-0.5" />
                        <p className="text-red-700 text-sm">{error}</p>
                      </div>
                    )}

                    <button
                      type="submit"
                      disabled={status === 'submitting'}
                      className="w-full inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#C27A3E] text-white text-sm font-semibold rounded-md hover:bg-[#A8642E] transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
                    >
                      {status === 'submitting' ? (
                        'Submitting...'
                      ) : (
                        <>
                          Get My Free Sourcing Quote
                          <ArrowRight className="w-4 h-4" />
                        </>
                      )}
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
