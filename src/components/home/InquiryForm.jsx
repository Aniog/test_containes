import { useState } from 'react'
import { createSourcingInquiry, serviceLabels } from '@/api/sourcingInquiries'

const initialValues = {
  name: '',
  email: '',
  company: '',
  country: '',
  productCategory: '',
  estimatedQuantity: '',
  serviceNeeded: 'full_sourcing_project',
  message: '',
}

const inputClass = 'mt-2 w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-sm text-slate-950 outline-none transition placeholder:text-slate-500 focus:border-blue-700 focus:ring-4 focus:ring-blue-100'
const labelClass = 'text-sm font-bold text-slate-800'

function validate(values) {
  if (!values.name.trim()) return 'Please enter your name.'
  if (!values.email.trim()) return 'Please enter your business email.'
  if (!/^\S+@\S+\.\S+$/.test(values.email)) return 'Please enter a valid business email.'
  if (!values.productCategory.trim()) return 'Please enter the product category you want to source.'
  if (!values.message.trim() || values.message.trim().length < 10) return 'Please share at least a short description of your sourcing project.'
  return null
}

export default function InquiryForm() {
  const [values, setValues] = useState(initialValues)
  const [status, setStatus] = useState('idle')
  const [error, setError] = useState('')

  const updateValue = (event) => {
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
      await createSourcingInquiry(values)
      setValues(initialValues)
      setStatus('success')
    } catch (err) {
      setError(err.message || 'Unable to send your inquiry. Please try again.')
      setStatus('error')
    }
  }

  return (
    <form id="inquiry" onSubmit={handleSubmit} className="rounded-3xl border border-slate-200 bg-white p-6 text-slate-950 shadow-sm sm:p-8" aria-busy={status === 'submitting'}>
      <div>
        <p className="text-sm font-bold uppercase tracking-[0.2em] text-blue-700">Free quote request</p>
        <h2 className="mt-3 text-2xl font-bold tracking-tight text-slate-950 sm:text-3xl">Tell us what you need to source</h2>
        <p className="mt-3 text-sm leading-6 text-slate-700">Share the basics. We will review your request and suggest a practical next step.</p>
      </div>

      <div className="mt-7 grid gap-5 sm:grid-cols-2">
        <label className={labelClass} htmlFor="name">Name *</label>
        <label className={`${labelClass} hidden sm:block`} htmlFor="email">Business email *</label>
        <input id="name" name="name" value={values.name} onChange={updateValue} className={inputClass} placeholder="Your name" autoComplete="name" />
        <div className="sm:hidden"><label className={labelClass} htmlFor="email">Business email *</label></div>
        <input id="email" name="email" type="email" value={values.email} onChange={updateValue} className={inputClass} placeholder="you@company.com" autoComplete="email" />

        <label className={labelClass} htmlFor="company">Company</label>
        <label className={`${labelClass} hidden sm:block`} htmlFor="country">Country / market</label>
        <input id="company" name="company" value={values.company} onChange={updateValue} className={inputClass} placeholder="Company name" autoComplete="organization" />
        <div className="sm:hidden"><label className={labelClass} htmlFor="country">Country / market</label></div>
        <input id="country" name="country" value={values.country} onChange={updateValue} className={inputClass} placeholder="United States, Germany, UAE..." autoComplete="country-name" />

        <label className={labelClass} htmlFor="productCategory">Product category *</label>
        <label className={`${labelClass} hidden sm:block`} htmlFor="estimatedQuantity">Estimated quantity</label>
        <input id="productCategory" name="productCategory" value={values.productCategory} onChange={updateValue} className={inputClass} placeholder="e.g. kitchenware, packaging, machinery parts" />
        <div className="sm:hidden"><label className={labelClass} htmlFor="estimatedQuantity">Estimated quantity</label></div>
        <input id="estimatedQuantity" name="estimatedQuantity" value={values.estimatedQuantity} onChange={updateValue} className={inputClass} placeholder="e.g. 1,000 pcs or one 20GP container" />
      </div>

      <div className="mt-5">
        <label className={labelClass} htmlFor="serviceNeeded">Service needed *</label>
        <select id="serviceNeeded" name="serviceNeeded" value={values.serviceNeeded} onChange={updateValue} className={inputClass}>
          {Object.entries(serviceLabels).map(([value, label]) => (
            <option key={value} value={value}>{label}</option>
          ))}
        </select>
      </div>

      <div className="mt-5">
        <label className={labelClass} htmlFor="message">Project details *</label>
        <textarea id="message" name="message" value={values.message} onChange={updateValue} rows="5" className={inputClass} placeholder="Product requirements, materials, target market, timeline, current supplier status, or inspection needs." />
      </div>

      <button type="submit" disabled={status === 'submitting'} className="mt-6 w-full rounded-full bg-blue-700 px-6 py-3.5 text-sm font-bold text-white shadow-sm transition hover:bg-blue-800 disabled:cursor-not-allowed disabled:bg-slate-400 sm:w-auto">
        {status === 'submitting' ? 'Sending inquiry...' : 'Get a Free Sourcing Quote'}
      </button>

      {status === 'success' && (
        <p className="mt-4 rounded-xl border border-green-200 bg-green-50 px-4 py-3 text-sm font-semibold text-green-800" role="status">
          Thank you. Your sourcing inquiry has been received. We will review it and follow up with practical next steps.
        </p>
      )}
      {status === 'error' && error && (
        <p className="mt-4 rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm font-semibold text-red-800" role="alert">
          {error}
        </p>
      )}
    </form>
  )
}
