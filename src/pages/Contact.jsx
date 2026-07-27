import React, { useState } from 'react'
import { DataClient } from '@strikingly/sdk'
import { STRK_PROJECT_URL, STRK_PROJECT_ANON_KEY } from '@/config.jsx'
import { Mail, Phone, MapPin, Clock, CheckCircle2, ArrowRight } from 'lucide-react'

const client = new DataClient(STRK_PROJECT_URL, STRK_PROJECT_ANON_KEY)

const serviceOptions = [
  { value: 'supplier_search', label: 'Supplier Search & Matching' },
  { value: 'factory_verification', label: 'Factory Verification & Audit' },
  { value: 'quality_inspection', label: 'Quality Inspection (QC)' },
  { value: 'production_follow_up', label: 'Production Follow-Up' },
  { value: 'shipping_coordination', label: 'Shipping & Logistics Coordination' },
  { value: 'full_service', label: 'Full-Service Sourcing' },
]

const getErrorMessage = (response, error) => {
  if (Array.isArray(response?.errors) && response.errors.length > 0) {
    return response.errors.join(', ')
  }
  return error?.message || 'Submission failed. Please try again.'
}

export default function Contact() {
  const [values, setValues] = useState({
    name: '',
    email: '',
    company: '',
    country: '',
    product_category: '',
    product_description: '',
    order_volume: '',
    target_price: '',
    timeline: '',
    services_needed: [],
    message: '',
  })
  const [status, setStatus] = useState('idle')
  const [error, setError] = useState(null)

  const onChange = (e) => {
    const { name, value } = e.target
    setValues((v) => ({ ...v, [name]: value }))
  }

  const onServiceChange = (e) => {
    const { value, checked } = e.target
    setValues((v) => ({
      ...v,
      services_needed: checked
        ? [...v.services_needed, value]
        : v.services_needed.filter((s) => s !== value),
    }))
  }

  const validate = (v) => {
    if (!v.name.trim()) return 'Name is required'
    if (!v.email.trim()) return 'Email is required'
    if (!/^\S+@\S+\.\S+$/.test(v.email)) return 'Please enter a valid email'
    if (!v.product_description.trim()) return 'Product description is required'
    return null
  }

  const onSubmit = async (e) => {
    e.preventDefault()
    setError(null)
    const err = validate(values)
    if (err) { setError(err); return }

    setStatus('submitting')

    try {
      const { data: response, error: createError } = await client
        .from('SourcingInquiry')
        .insert({
          data: {
            name: values.name,
            email: values.email,
            company: values.company,
            country: values.country,
            product_category: values.product_category,
            product_description: values.product_description,
            order_volume: values.order_volume,
            target_price: values.target_price,
            timeline: values.timeline,
            services_needed: values.services_needed,
            message: values.message,
          },
        })
        .select()
        .single()

      if (createError || response?.success === false) {
        setError(getErrorMessage(response, createError))
        setStatus('error')
        return
      }

      setStatus('success')
      setValues({
        name: '',
        email: '',
        company: '',
        country: '',
        product_category: '',
        product_description: '',
        order_volume: '',
        target_price: '',
        timeline: '',
        services_needed: [],
        message: '',
      })
    } catch (err) {
      console.error(err)
      setError(err.message || 'Submission failed')
      setStatus('error')
    }
  }

  return (
    <div>
      <section className="bg-navy py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl md:text-4xl font-extrabold text-white mb-4">Contact Us</h1>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Tell us about your sourcing needs and we will respond within 24 hours with a free quote and sourcing plan.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <h2 className="text-2xl font-bold mb-6">Get a Free Sourcing Quote</h2>

              {status === 'success' ? (
                <div className="bg-green-50 border border-green-200 rounded-lg p-8 text-center">
                  <CheckCircle2 className="w-12 h-12 text-green-600 mx-auto mb-4" />
                  <h3 className="text-xl font-bold text-green-800 mb-2">Inquiry Submitted Successfully</h3>
                  <p className="text-green-700">
                    Thank you for your inquiry. Our team will review your requirements and respond within 24 hours with a sourcing plan and quote.
                  </p>
                </div>
              ) : (
                <form onSubmit={onSubmit} className="space-y-6" aria-busy={status === 'submitting'}>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-semibold mb-2">Name *</label>
                      <input
                        id="name"
                        name="name"
                        type="text"
                        value={values.name}
                        onChange={onChange}
                        required
                        placeholder="Your full name"
                        className="w-full border border-gray-300 rounded-lg px-4 py-3 text-sm focus:ring-2 focus:ring-navy-light focus:border-navy-light outline-none"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-semibold mb-2">Email *</label>
                      <input
                        id="email"
                        name="email"
                        type="email"
                        value={values.email}
                        onChange={onChange}
                        required
                        placeholder="you@company.com"
                        className="w-full border border-gray-300 rounded-lg px-4 py-3 text-sm focus:ring-2 focus:ring-navy-light focus:border-navy-light outline-none"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="company" className="block text-sm font-semibold mb-2">Company</label>
                      <input
                        id="company"
                        name="company"
                        type="text"
                        value={values.company}
                        onChange={onChange}
                        placeholder="Your company name"
                        className="w-full border border-gray-300 rounded-lg px-4 py-3 text-sm focus:ring-2 focus:ring-navy-light focus:border-navy-light outline-none"
                      />
                    </div>
                    <div>
                      <label htmlFor="country" className="block text-sm font-semibold mb-2">Country</label>
                      <input
                        id="country"
                        name="country"
                        type="text"
                        value={values.country}
                        onChange={onChange}
                        placeholder="Your country"
                        className="w-full border border-gray-300 rounded-lg px-4 py-3 text-sm focus:ring-2 focus:ring-navy-light focus:border-navy-light outline-none"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="product_category" className="block text-sm font-semibold mb-2">Product Category</label>
                    <input
                      id="product_category"
                      name="product_category"
                      type="text"
                      value={values.product_category}
                      onChange={onChange}
                      placeholder="e.g. Electronics, Home & Garden, Textiles"
                      className="w-full border border-gray-300 rounded-lg px-4 py-3 text-sm focus:ring-2 focus:ring-navy-light focus:border-navy-light outline-none"
                    />
                  </div>

                  <div>
                    <label htmlFor="product_description" className="block text-sm font-semibold mb-2">Product Description *</label>
                    <textarea
                      id="product_description"
                      name="product_description"
                      rows={4}
                      value={values.product_description}
                      onChange={onChange}
                      required
                      placeholder="Describe the product you want to source — specifications, materials, features, target quality level"
                      className="w-full border border-gray-300 rounded-lg px-4 py-3 text-sm focus:ring-2 focus:ring-navy-light focus:border-navy-light outline-none"
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div>
                      <label htmlFor="order_volume" className="block text-sm font-semibold mb-2">Order Volume</label>
                      <input
                        id="order_volume"
                        name="order_volume"
                        type="text"
                        value={values.order_volume}
                        onChange={onChange}
                        placeholder="e.g. 1,000 units"
                        className="w-full border border-gray-300 rounded-lg px-4 py-3 text-sm focus:ring-2 focus:ring-navy-light focus:border-navy-light outline-none"
                      />
                    </div>
                    <div>
                      <label htmlFor="target_price" className="block text-sm font-semibold mb-2">Target Price</label>
                      <input
                        id="target_price"
                        name="target_price"
                        type="text"
                        value={values.target_price}
                        onChange={onChange}
                        placeholder="e.g. $5-10 per unit"
                        className="w-full border border-gray-300 rounded-lg px-4 py-3 text-sm focus:ring-2 focus:ring-navy-light focus:border-navy-light outline-none"
                      />
                    </div>
                    <div>
                      <label htmlFor="timeline" className="block text-sm font-semibold mb-2">Timeline</label>
                      <input
                        id="timeline"
                        name="timeline"
                        type="text"
                        value={values.timeline}
                        onChange={onChange}
                        placeholder="e.g. 3 months"
                        className="w-full border border-gray-300 rounded-lg px-4 py-3 text-sm focus:ring-2 focus:ring-navy-light focus:border-navy-light outline-none"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold mb-3">Services Needed</label>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      {serviceOptions.map((opt) => (
                        <label key={opt.value} className="flex items-center gap-2 text-sm cursor-pointer">
                          <input
                            type="checkbox"
                            value={opt.value}
                            checked={values.services_needed.includes(opt.value)}
                            onChange={onServiceChange}
                            className="w-4 h-4 rounded border-gray-300 text-navy focus:ring-navy-light"
                          />
                          <span className="text-slate-muted">{opt.label}</span>
                        </label>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-semibold mb-2">Additional Message</label>
                    <textarea
                      id="message"
                      name="message"
                      rows={3}
                      value={values.message}
                      onChange={onChange}
                      placeholder="Any additional questions, concerns, or requirements"
                      className="w-full border border-gray-300 rounded-lg px-4 py-3 text-sm focus:ring-2 focus:ring-navy-light focus:border-navy-light outline-none"
                    />
                  </div>

                  {error && (
                    <div className="bg-red-50 border border-red-200 rounded-lg p-4 text-red-700 text-sm" role="alert">
                      {error}
                    </div>
                  )}

                  <button
                    type="submit"
                    disabled={status === 'submitting'}
                    className="w-full bg-navy text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-navy-light transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {status === 'submitting' ? 'Submitting...' : 'Submit Your Sourcing Inquiry'}
                  </button>
                </form>
              )}
            </div>

            <div className="lg:col-span-1">
              <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 md:p-8 space-y-6">
                <h3 className="font-bold text-lg">Contact Information</h3>

                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <Mail className="w-5 h-5 text-gold mt-0.5" />
                    <div>
                      <div className="font-semibold text-sm">Email</div>
                      <div className="text-slate-muted text-sm">info@ssourcingchina.com</div>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Phone className="w-5 h-5 text-gold mt-0.5" />
                    <div>
                      <div className="font-semibold text-sm">Phone</div>
                      <div className="text-slate-muted text-sm">+86 138 0000 0000</div>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-gold mt-0.5" />
                    <div>
                      <div className="font-semibold text-sm">Location</div>
                      <div className="text-slate-muted text-sm">Guangzhou, Guangdong, China</div>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Clock className="w-5 h-5 text-gold mt-0.5" />
                    <div>
                      <div className="font-semibold text-sm">Response Time</div>
                      <div className="text-slate-muted text-sm">Within 24 hours</div>
                    </div>
                  </div>
                </div>

                <div className="border-t border-gray-200 pt-6">
                  <h4 className="font-semibold text-sm mb-3">What happens next?</h4>
                  <ul className="space-y-2 text-slate-muted text-sm">
                    <li className="flex items-start gap-2">
                      <span className="text-navy font-bold">1.</span>
                      We review your requirements
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-navy font-bold">2.</span>
                      We propose a sourcing plan
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-navy font-bold">3.</span>
                      We provide a free quote
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-navy font-bold">4.</span>
                      You decide — no commitment required
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
