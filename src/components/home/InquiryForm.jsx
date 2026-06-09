import React, { useState } from 'react'
import { Send, CheckCircle, AlertCircle, Loader2 } from 'lucide-react'
import { DataClient } from '@strikingly/sdk'
import { STRK_PROJECT_URL, STRK_PROJECT_ANON_KEY } from '../../config.jsx'

const client = new DataClient(STRK_PROJECT_URL, STRK_PROJECT_ANON_KEY)

const serviceOptions = [
  { value: 'supplier_search', label: 'Supplier Search' },
  { value: 'factory_audit', label: 'Factory Audit' },
  { value: 'quality_inspection', label: 'Quality Inspection' },
  { value: 'production_follow_up', label: 'Production Follow-Up' },
  { value: 'shipping_coordination', label: 'Shipping Coordination' },
  { value: 'sample_management', label: 'Sample Management' },
]

const initialValues = {
  name: '',
  email: '',
  company: '',
  phone: '',
  product_description: '',
  quantity: '',
  budget_range: '',
  target_market: '',
  services_needed: [],
  message: '',
}

export default function InquiryForm() {
  const [values, setValues] = useState(initialValues)
  const [status, setStatus] = useState('idle')
  const [error, setError] = useState(null)
  const [success, setSuccess] = useState(false)

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target
    if (type === 'checkbox') {
      setValues((prev) => ({
        ...prev,
        services_needed: checked
          ? [...prev.services_needed, value]
          : prev.services_needed.filter((s) => s !== value),
      }))
    } else {
      setValues((prev) => ({ ...prev, [name]: value }))
    }
  }

  const validate = () => {
    if (!values.name.trim()) return 'Please enter your name'
    if (!values.email.trim()) return 'Please enter your email'
    if (!/^\S+@\S+\.\S+$/.test(values.email)) return 'Please enter a valid email address'
    if (!values.product_description.trim()) return 'Please describe the product you want to source'
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
        .from('Sourcing Inquiries')
        .insert({
          data: {
            name: values.name,
            email: values.email,
            company: values.company || null,
            phone: values.phone || null,
            product_description: values.product_description,
            quantity: values.quantity || null,
            budget_range: values.budget_range || null,
            target_market: values.target_market || null,
            services_needed: values.services_needed.length > 0 ? values.services_needed : null,
            message: values.message || null,
          },
        })

      if (submitError) {
        throw new Error(submitError.message || 'Failed to submit inquiry')
      }

      setSuccess(true)
      setValues(initialValues)
      setStatus('success')
    } catch (err) {
      console.error('Inquiry submission error:', err)
      setError(err.message || 'Something went wrong. Please try again or email us directly.')
      setStatus('error')
    }
  }

  if (success) {
    return (
      <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-8 text-center">
        <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-4">
          <CheckCircle className="w-8 h-8 text-green-600" />
        </div>
        <h3 className="text-2xl font-bold text-brand-navy mb-2">Thank You!</h3>
        <p className="text-gray-600 mb-4">
          Your inquiry has been received. Our team will review your requirements and get back to you within 48 hours with a tailored sourcing proposal.
        </p>
        <button
          onClick={() => setSuccess(false)}
          className="text-brand-navy font-medium hover:text-brand-navy-light transition-colors underline"
        >
          Submit Another Inquiry
        </button>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="bg-white rounded-xl border border-gray-100 shadow-sm p-6 md:p-8">
      <h3 className="text-2xl font-bold text-brand-navy mb-1">Submit Your Sourcing Inquiry</h3>
      <p className="text-gray-500 text-sm mb-6">
        Fill out the form below and we will respond with a free sourcing plan within 48 hours.
      </p>

      {error && (
        <div className="flex items-start gap-2 bg-red-50 text-red-700 text-sm p-4 rounded-lg mb-6">
          <AlertCircle className="w-5 h-5 shrink-0 mt-0.5" />
          <p>{error}</p>
        </div>
      )}

      <div className="grid sm:grid-cols-2 gap-4 mb-4">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
            Full Name <span className="text-brand-red">*</span>
          </label>
          <input
            id="name"
            name="name"
            type="text"
            value={values.name}
            onChange={handleChange}
            required
            placeholder="John Smith"
            className="w-full px-4 py-2.5 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-navy/20 focus:border-brand-navy text-sm"
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
            Email <span className="text-brand-red">*</span>
          </label>
          <input
            id="email"
            name="email"
            type="email"
            value={values.email}
            onChange={handleChange}
            required
            placeholder="john@company.com"
            className="w-full px-4 py-2.5 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-navy/20 focus:border-brand-navy text-sm"
          />
        </div>
      </div>

      <div className="grid sm:grid-cols-2 gap-4 mb-4">
        <div>
          <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-1">
            Company Name
          </label>
          <input
            id="company"
            name="company"
            type="text"
            value={values.company}
            onChange={handleChange}
            placeholder="Your Company Ltd."
            className="w-full px-4 py-2.5 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-navy/20 focus:border-brand-navy text-sm"
          />
        </div>
        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
            Phone Number
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            value={values.phone}
            onChange={handleChange}
            placeholder="+1 234 567 8900"
            className="w-full px-4 py-2.5 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-navy/20 focus:border-brand-navy text-sm"
          />
        </div>
      </div>

      <div className="mb-4">
        <label htmlFor="product_description" className="block text-sm font-medium text-gray-700 mb-1">
          Product to Source <span className="text-brand-red">*</span>
        </label>
        <textarea
          id="product_description"
          name="product_description"
          value={values.product_description}
          onChange={handleChange}
          required
          rows={3}
          placeholder="Describe the product you want to source, including specifications, materials, features, and any certifications needed."
          className="w-full px-4 py-2.5 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-navy/20 focus:border-brand-navy text-sm"
        />
      </div>

      <div className="grid sm:grid-cols-2 gap-4 mb-4">
        <div>
          <label htmlFor="quantity" className="block text-sm font-medium text-gray-700 mb-1">
            Estimated Quantity
          </label>
          <input
            id="quantity"
            name="quantity"
            type="text"
            value={values.quantity}
            onChange={handleChange}
            placeholder="e.g. 1,000 units / month"
            className="w-full px-4 py-2.5 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-navy/20 focus:border-brand-navy text-sm"
          />
        </div>
        <div>
          <label htmlFor="budget_range" className="block text-sm font-medium text-gray-700 mb-1">
            Target Budget
          </label>
          <input
            id="budget_range"
            name="budget_range"
            type="text"
            value={values.budget_range}
            onChange={handleChange}
            placeholder="e.g. $5-8 per unit"
            className="w-full px-4 py-2.5 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-navy/20 focus:border-brand-navy text-sm"
          />
        </div>
      </div>

      <div className="mb-4">
        <label htmlFor="target_market" className="block text-sm font-medium text-gray-700 mb-1">
          Target Market / Destination
        </label>
        <input
          id="target_market"
          name="target_market"
          type="text"
          value={values.target_market}
          onChange={handleChange}
          placeholder="e.g. USA, EU, Australia"
          className="w-full px-4 py-2.5 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-navy/20 focus:border-brand-navy text-sm"
        />
      </div>

      <div className="mb-4">
        <span className="block text-sm font-medium text-gray-700 mb-2">
          Services Needed
        </span>
        <div className="grid sm:grid-cols-2 gap-2">
          {serviceOptions.map((service) => (
            <label key={service.value} className="flex items-center gap-2 text-sm text-gray-600 cursor-pointer">
              <input
                type="checkbox"
                value={service.value}
                checked={values.services_needed.includes(service.value)}
                onChange={handleChange}
                className="rounded border-gray-300 text-brand-navy focus:ring-brand-navy"
              />
              {service.label}
            </label>
          ))}
        </div>
      </div>

      <div className="mb-6">
        <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
          Additional Details
        </label>
        <textarea
          id="message"
          name="message"
          value={values.message}
          onChange={handleChange}
          rows={3}
          placeholder="Any other requirements, questions, or special instructions..."
          className="w-full px-4 py-2.5 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-navy/20 focus:border-brand-navy text-sm"
        />
      </div>

      <button
        type="submit"
        disabled={status === 'submitting'}
        className="w-full bg-brand-red hover:bg-brand-red-hover text-white font-bold py-3 px-6 rounded-lg transition-colors text-base flex items-center justify-center gap-2 disabled:opacity-70"
      >
        {status === 'submitting' ? (
          <>
            <Loader2 className="w-5 h-5 animate-spin" />
            Submitting...
          </>
        ) : (
          <>
            <Send className="w-5 h-5" />
            Send Inquiry
          </>
        )}
      </button>

      <p className="text-xs text-gray-400 mt-3 text-center">
        Your information will be kept confidential. We typically respond within 48 hours.
      </p>
    </form>
  )
}