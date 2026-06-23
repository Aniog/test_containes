import { useState } from 'react'
import { CheckCircle2, Loader2 } from 'lucide-react'
import { createSourcingInquiry } from '../api/inquiries.js'

const serviceOptions = [
  { value: 'supplier_sourcing', label: 'Supplier sourcing' },
  { value: 'factory_verification', label: 'Factory verification' },
  { value: 'quality_inspection', label: 'Quality inspection' },
  { value: 'production_follow_up', label: 'Production follow-up' },
  { value: 'shipping_coordination', label: 'Shipping coordination' },
]

const initialValues = {
  name: '',
  company: '',
  email: '',
  phone: '',
  country: '',
  product_category: '',
  product_description: '',
  target_quantity: '',
  budget_range: '',
  timeline: 'one_to_three_months',
  services_needed: ['supplier_sourcing'],
  message: '',
}

const inputClass = 'w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-sm text-slate-950 placeholder:text-slate-400 shadow-sm transition focus:border-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-100'
const labelClass = 'text-sm font-semibold text-slate-900'

const validate = (values) => {
  if (!values.name.trim()) return 'Please enter your name.'
  if (!values.email.trim()) return 'Please enter your business email.'
  if (!/^\S+@\S+\.\S+$/.test(values.email)) return 'Please enter a valid email address.'
  if (!values.product_description.trim()) return 'Please describe the product you want to source.'
  if (values.services_needed.length === 0) return 'Please choose at least one service.'
  return null
}

export default function InquiryForm({ source = 'homepage' }) {
  const [values, setValues] = useState(initialValues)
  const [status, setStatus] = useState('idle')
  const [message, setMessage] = useState('')

  const updateValue = (event) => {
    const { name, value } = event.target
    setValues((current) => ({ ...current, [name]: value }))
  }

  const toggleService = (value) => {
    setValues((current) => {
      const exists = current.services_needed.includes(value)
      return {
        ...current,
        services_needed: exists
          ? current.services_needed.filter((item) => item !== value)
          : [...current.services_needed, value],
      }
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

    const payload = {
      ...values,
      name: values.name.trim(),
      company: values.company.trim(),
      email: values.email.trim(),
      phone: values.phone.trim(),
      country: values.country.trim(),
      product_category: values.product_category.trim(),
      product_description: values.product_description.trim(),
      target_quantity: values.target_quantity.trim(),
      budget_range: values.budget_range.trim(),
      message: values.message.trim(),
      page_source: source,
      created_at: new Date().toISOString(),
    }

    try {
      await createSourcingInquiry(payload)
      setValues(initialValues)
      setStatus('success')
      setMessage('Thank you. Your sourcing inquiry has been received. We will review your requirements and follow up with practical next steps.')
    } catch (error) {
      setStatus('error')
      setMessage(error.message || 'Unable to submit your inquiry. Please try again.')
    }
  }

  const isSubmitting = status === 'submitting'

  return (
    <form onSubmit={handleSubmit} className="rounded-3xl border border-slate-200 bg-white p-6 text-slate-950 shadow-xl shadow-slate-200/70 md:p-8" aria-busy={isSubmitting}>
      <div className="mb-6">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-700">Free sourcing quote</p>
        <h2 className="mt-2 text-2xl font-bold tracking-tight text-slate-950 md:text-3xl">Tell us what you need to source</h2>
        <p className="mt-3 text-sm leading-6 text-slate-600">Share the product, quantity, timeline, and support needed. A clear brief helps us respond with useful supplier and risk guidance.</p>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        <label className="grid gap-2">
          <span className={labelClass}>Name *</span>
          <input className={inputClass} name="name" value={values.name} onChange={updateValue} placeholder="Your name" autoComplete="name" />
        </label>
        <label className="grid gap-2">
          <span className={labelClass}>Business email *</span>
          <input className={inputClass} name="email" type="email" value={values.email} onChange={updateValue} placeholder="you@company.com" autoComplete="email" />
        </label>
        <label className="grid gap-2">
          <span className={labelClass}>Company</span>
          <input className={inputClass} name="company" value={values.company} onChange={updateValue} placeholder="Company name" autoComplete="organization" />
        </label>
        <label className="grid gap-2">
          <span className={labelClass}>Phone / WhatsApp</span>
          <input className={inputClass} name="phone" value={values.phone} onChange={updateValue} placeholder="Optional" autoComplete="tel" />
        </label>
        <label className="grid gap-2">
          <span className={labelClass}>Country</span>
          <input className={inputClass} name="country" value={values.country} onChange={updateValue} placeholder="Destination market" autoComplete="country-name" />
        </label>
        <label className="grid gap-2">
          <span className={labelClass}>Product category</span>
          <input className={inputClass} name="product_category" value={values.product_category} onChange={updateValue} placeholder="e.g. packaging, hardware, electronics" />
        </label>
        <label className="grid gap-2 md:col-span-2">
          <span className={labelClass}>Product details *</span>
          <textarea className={`${inputClass} min-h-32 resize-y`} name="product_description" value={values.product_description} onChange={updateValue} placeholder="Describe the product, materials, specifications, standards, reference item, or current supplier issue." />
        </label>
        <label className="grid gap-2">
          <span className={labelClass}>Estimated quantity</span>
          <input className={inputClass} name="target_quantity" value={values.target_quantity} onChange={updateValue} placeholder="e.g. 3,000 pcs or annual volume" />
        </label>
        <label className="grid gap-2">
          <span className={labelClass}>Target budget</span>
          <input className={inputClass} name="budget_range" value={values.budget_range} onChange={updateValue} placeholder="Optional price range" />
        </label>
        <label className="grid gap-2 md:col-span-2">
          <span className={labelClass}>Timeline *</span>
          <select className={inputClass} name="timeline" value={values.timeline} onChange={updateValue}>
            <option value="as_soon_as_possible">As soon as possible</option>
            <option value="within_30_days">Within 30 days</option>
            <option value="one_to_three_months">1–3 months</option>
            <option value="planning_stage">Planning stage</option>
          </select>
        </label>
      </div>

      <fieldset className="mt-5">
        <legend className={labelClass}>Services needed *</legend>
        <div className="mt-3 grid gap-3 sm:grid-cols-2">
          {serviceOptions.map((option) => (
            <label key={option.value} className="flex items-center gap-3 rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm font-medium text-slate-800">
              <input
                type="checkbox"
                checked={values.services_needed.includes(option.value)}
                onChange={() => toggleService(option.value)}
                className="h-4 w-4 rounded border-slate-300 text-blue-700 focus:ring-blue-700"
              />
              {option.label}
            </label>
          ))}
        </div>
      </fieldset>

      <label className="mt-5 grid gap-2">
        <span className={labelClass}>Additional message</span>
        <textarea className={`${inputClass} min-h-24 resize-y`} name="message" value={values.message} onChange={updateValue} placeholder="Tell us about current challenges, inspection needs, shipping terms, or supplier requirements." />
      </label>

      {message && (
        <div className={`mt-5 rounded-2xl border px-4 py-3 text-sm leading-6 ${status === 'success' ? 'border-emerald-100 bg-emerald-50 text-emerald-900' : 'border-red-100 bg-red-50 text-red-800'}`} role={status === 'success' ? 'status' : 'alert'}>
          {status === 'success' && <CheckCircle2 className="mr-2 inline h-4 w-4" />}
          {message}
        </div>
      )}

      <button type="submit" disabled={isSubmitting} className="mt-6 inline-flex w-full items-center justify-center rounded-full bg-blue-700 px-6 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-blue-800 disabled:cursor-not-allowed disabled:bg-slate-400 md:w-auto">
        {isSubmitting && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
        {isSubmitting ? 'Submitting inquiry...' : 'Get a Free Sourcing Quote'}
      </button>
      <p className="mt-4 text-xs leading-5 text-slate-500">We use your details only to respond to your sourcing request.</p>
    </form>
  )
}
