import { useState } from 'react'
import { ArrowRight, CheckCircle2 } from 'lucide-react'
import { createSourcingInquiry, serviceOptions } from '../api/sourcingInquiries.js'

const initialValues = {
  full_name: '',
  email: '',
  company: '',
  country: '',
  phone: '',
  product_category: '',
  product_description: '',
  service_needs: ['supplier_search'],
  annual_volume: '',
  timeline: '',
  shipping_destination: '',
}

const fieldClass = 'mt-2 w-full rounded-xl border border-brand-border bg-white px-4 py-3 text-brand-ink outline-none transition focus:border-brand-blue focus:ring-4 focus:ring-brand-blue/10'
const labelClass = 'text-sm font-semibold text-brand-navy'

const validate = (values) => {
  if (!values.full_name.trim()) return 'Please enter your name.'
  if (!values.email.trim()) return 'Please enter your business email.'
  if (!/^\S+@\S+\.\S+$/.test(values.email)) return 'Please enter a valid email address.'
  if (!values.product_description.trim()) return 'Please describe what you want to source.'
  return null
}

export default function InquiryForm({ compact = false }) {
  const [values, setValues] = useState(initialValues)
  const [status, setStatus] = useState('idle')
  const [message, setMessage] = useState('')

  const updateValue = (event) => {
    const { name, value } = event.target
    setValues((current) => ({ ...current, [name]: value }))
  }

  const toggleService = (value) => {
    setValues((current) => {
      const selected = current.service_needs.includes(value)
        ? current.service_needs.filter((item) => item !== value)
        : [...current.service_needs, value]

      return { ...current, service_needs: selected }
    })
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    const validationError = validate(values)

    if (validationError) {
      setStatus('error')
      setMessage(validationError)
      return
    }

    setStatus('submitting')
    setMessage('')

    try {
      await createSourcingInquiry(values)
      setValues(initialValues)
      setStatus('success')
      setMessage('Thank you. Your sourcing inquiry has been received. We will review your requirements and reply with practical next steps.')
    } catch (error) {
      setStatus('error')
      setMessage(error.message || 'Unable to send your inquiry. Please try again.')
    }
  }

  return (
    <form onSubmit={handleSubmit} className="rounded-3xl border border-brand-border bg-white p-6 text-brand-ink shadow-soft md:p-8" aria-busy={status === 'submitting'}>
      <div className="mb-6">
        <p className="text-sm font-semibold uppercase tracking-widest text-brand-blue">Free sourcing quote</p>
        <h2 className="mt-2 text-2xl font-semibold tracking-tight text-brand-navy md:text-3xl">Tell us what you need to source</h2>
        <p className="mt-3 text-sm leading-6 text-brand-muted">Share product details, target market, quantity, and any supplier or quality concerns. We will respond with a practical sourcing plan.</p>
      </div>

      <div className="grid gap-5 md:grid-cols-2">
        <label className={labelClass}>
          Name *
          <input className={fieldClass} name="full_name" value={values.full_name} onChange={updateValue} placeholder="Your full name" autoComplete="name" />
        </label>
        <label className={labelClass}>
          Business email *
          <input className={fieldClass} name="email" type="email" value={values.email} onChange={updateValue} placeholder="you@company.com" autoComplete="email" />
        </label>
        <label className={labelClass}>
          Company
          <input className={fieldClass} name="company" value={values.company} onChange={updateValue} placeholder="Company name" autoComplete="organization" />
        </label>
        <label className={labelClass}>
          Country / market
          <input className={fieldClass} name="country" value={values.country} onChange={updateValue} placeholder="United States, Germany, UAE..." autoComplete="country-name" />
        </label>
        {!compact && (
          <label className={labelClass}>
            Phone / WhatsApp
            <input className={fieldClass} name="phone" value={values.phone} onChange={updateValue} placeholder="Optional" autoComplete="tel" />
          </label>
        )}
        <label className={labelClass}>
          Product category
          <input className={fieldClass} name="product_category" value={values.product_category} onChange={updateValue} placeholder="Electronics, packaging, hardware..." />
        </label>
      </div>

      <label className={`${labelClass} mt-5 block`}>
        Product requirements *
        <textarea className={`${fieldClass} min-h-32 resize-y`} name="product_description" value={values.product_description} onChange={updateValue} placeholder="Describe the product, material, specifications, target price, certification needs, MOQ, and current sourcing challenge." />
      </label>

      <div className="mt-5">
        <p className={labelClass}>Services needed</p>
        <div className="mt-3 grid gap-3 sm:grid-cols-2">
          {serviceOptions.map((option) => (
            <label key={option.value} className="flex items-center gap-3 rounded-xl border border-brand-border bg-brand-page px-4 py-3 text-sm font-medium text-brand-ink">
              <input type="checkbox" checked={values.service_needs.includes(option.value)} onChange={() => toggleService(option.value)} className="h-4 w-4 rounded border-brand-border text-brand-blue focus:ring-brand-blue" />
              {option.label}
            </label>
          ))}
        </div>
      </div>

      {!compact && (
        <div className="mt-5 grid gap-5 md:grid-cols-3">
          <label className={labelClass}>
            Volume
            <input className={fieldClass} name="annual_volume" value={values.annual_volume} onChange={updateValue} placeholder="e.g. 5,000 pcs / year" />
          </label>
          <label className={labelClass}>
            Timeline
            <input className={fieldClass} name="timeline" value={values.timeline} onChange={updateValue} placeholder="e.g. 6–8 weeks" />
          </label>
          <label className={labelClass}>
            Shipping destination
            <input className={fieldClass} name="shipping_destination" value={values.shipping_destination} onChange={updateValue} placeholder="Port or country" />
          </label>
        </div>
      )}

      <button type="submit" disabled={status === 'submitting'} className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-brand-blue px-6 py-4 text-base font-semibold text-white shadow-soft transition hover:bg-brand-navy disabled:cursor-not-allowed disabled:opacity-70 md:w-auto">
        {status === 'submitting' ? 'Sending inquiry...' : 'Get a Free Sourcing Quote'}
        <ArrowRight className="h-5 w-5" aria-hidden="true" />
      </button>

      {message && (
        <div className={`mt-5 rounded-2xl border px-4 py-3 text-sm leading-6 ${status === 'success' ? 'border-brand-green/30 bg-green-50 text-brand-green' : 'border-red-200 bg-red-50 text-red-700'}`} role={status === 'success' ? 'status' : 'alert'}>
          <div className="flex gap-2">
            {status === 'success' && <CheckCircle2 className="mt-0.5 h-4 w-4 flex-none" aria-hidden="true" />}
            <span>{message}</span>
          </div>
        </div>
      )}
    </form>
  )
}
