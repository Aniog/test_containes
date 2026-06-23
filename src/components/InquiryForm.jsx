import { useState } from 'react'
import { Send } from 'lucide-react'
import { submitSourcingInquiry } from '../api/sourcingInquiries.js'

const initialValues = {
  name: '',
  email: '',
  company: '',
  country: '',
  productCategory: '',
  serviceNeeded: 'complete_sourcing_project',
  quantity: '',
  message: '',
}

const serviceOptions = [
  { value: 'supplier_sourcing', label: 'Supplier sourcing' },
  { value: 'factory_verification', label: 'Factory verification' },
  { value: 'quality_inspection', label: 'Quality inspection' },
  { value: 'production_follow_up', label: 'Production follow-up' },
  { value: 'shipping_coordination', label: 'Shipping coordination' },
  { value: 'complete_sourcing_project', label: 'Complete sourcing project' },
]

const inputClass = 'mt-2 w-full rounded-xl border border-brand-border bg-white px-4 py-3 text-brand-ink placeholder:text-slate-400 shadow-sm outline-none transition focus:border-brand-blue focus:ring-4 focus:ring-blue-100'
const labelClass = 'text-sm font-semibold text-brand-ink'

const validate = (values) => {
  if (!values.name.trim()) return 'Please enter your name.'
  if (!values.email.trim()) return 'Please enter your business email.'
  if (!/^\S+@\S+\.\S+$/.test(values.email)) return 'Please enter a valid email address.'
  if (!values.productCategory.trim()) return 'Please tell us what product you want to source.'
  if (!values.message.trim()) return 'Please add a short project description.'
  return null
}

export default function InquiryForm({ compact = false }) {
  const [values, setValues] = useState(initialValues)
  const [status, setStatus] = useState('idle')
  const [error, setError] = useState('')

  const handleChange = (event) => {
    const { name, value } = event.target
    setValues((current) => ({ ...current, [name]: value }))
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    setError('')

    const validationError = validate(values)
    if (validationError) {
      setError(validationError)
      setStatus('error')
      return
    }

    setStatus('submitting')
    try {
      await submitSourcingInquiry(values)
      setValues(initialValues)
      setStatus('success')
    } catch (submissionError) {
      setError(submissionError.message || 'Unable to submit your inquiry. Please try again.')
      setStatus('error')
    }
  }

  return (
    <form onSubmit={handleSubmit} className="rounded-3xl border border-brand-border bg-white p-6 text-brand-ink shadow-xl shadow-slate-200/70 md:p-8" aria-busy={status === 'submitting'}>
      <div className="mb-6">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-blue">Sourcing inquiry</p>
        <h2 className="mt-2 text-2xl font-bold text-brand-ink md:text-3xl">Get a Free Sourcing Quote</h2>
        <p className="mt-3 text-sm leading-6 text-brand-muted">
          Share your product, quantity, and sourcing needs. We will review the brief and reply with practical next steps.
        </p>
      </div>

      <div className={`grid gap-4 ${compact ? '' : 'md:grid-cols-2'}`}>
        <label className={labelClass} htmlFor="name">
          Name *
          <input id="name" name="name" value={values.name} onChange={handleChange} className={inputClass} placeholder="Your name" autoComplete="name" />
        </label>
        <label className={labelClass} htmlFor="email">
          Business email *
          <input id="email" name="email" type="email" value={values.email} onChange={handleChange} className={inputClass} placeholder="you@company.com" autoComplete="email" />
        </label>
        <label className={labelClass} htmlFor="company">
          Company
          <input id="company" name="company" value={values.company} onChange={handleChange} className={inputClass} placeholder="Company name" autoComplete="organization" />
        </label>
        <label className={labelClass} htmlFor="country">
          Country / market
          <input id="country" name="country" value={values.country} onChange={handleChange} className={inputClass} placeholder="United States, Germany, Australia..." autoComplete="country-name" />
        </label>
        <label className={labelClass} htmlFor="productCategory">
          Product category *
          <input id="productCategory" name="productCategory" value={values.productCategory} onChange={handleChange} className={inputClass} placeholder="e.g. hardware, packaging, electronics" />
        </label>
        <label className={labelClass} htmlFor="quantity">
          Estimated quantity
          <input id="quantity" name="quantity" value={values.quantity} onChange={handleChange} className={inputClass} placeholder="MOQ, trial order, annual volume" />
        </label>
        <label className={`${labelClass} ${compact ? '' : 'md:col-span-2'}`} htmlFor="serviceNeeded">
          Service needed
          <select id="serviceNeeded" name="serviceNeeded" value={values.serviceNeeded} onChange={handleChange} className={inputClass}>
            {serviceOptions.map((option) => (
              <option key={option.value} value={option.value}>{option.label}</option>
            ))}
          </select>
        </label>
        <label className={`${labelClass} ${compact ? '' : 'md:col-span-2'}`} htmlFor="message">
          Project details *
          <textarea id="message" name="message" rows="5" value={values.message} onChange={handleChange} className={inputClass} placeholder="Tell us your product requirements, target price, timeline, standards, or supplier problems." />
        </label>
      </div>

      {status === 'success' && (
        <p className="mt-5 rounded-2xl border border-emerald-200 bg-emerald-50 px-4 py-3 text-sm font-medium text-emerald-800" role="status">
          Thank you. Your sourcing inquiry has been received, and we will review the details soon.
        </p>
      )}
      {status === 'error' && error && (
        <p className="mt-5 rounded-2xl border border-red-200 bg-red-50 px-4 py-3 text-sm font-medium text-red-800" role="alert">
          {error}
        </p>
      )}

      <button type="submit" disabled={status === 'submitting'} className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-brand-blue px-6 py-4 text-base font-bold text-white shadow-lg shadow-blue-900/15 transition hover:bg-blue-700 disabled:cursor-not-allowed disabled:bg-slate-400 md:w-auto">
        {status === 'submitting' ? 'Submitting...' : 'Get a Free Sourcing Quote'}
        <Send className="h-4 w-4" aria-hidden="true" />
      </button>
    </form>
  )
}
