import { useState } from 'react'
import { CheckCircle2, Loader2 } from 'lucide-react'
import { submitSourcingInquiry } from '../api/sourcingInquiries.js'

const initialValues = {
  name: '',
  email: '',
  company: '',
  country: '',
  phone: '',
  service_needed: 'supplier_sourcing',
  product_category: '',
  estimated_quantity: '',
  timeline: '',
  message: '',
}

const serviceOptions = [
  ['supplier_sourcing', 'Supplier sourcing'],
  ['factory_verification', 'Factory verification'],
  ['quality_inspection', 'Quality inspection'],
  ['production_follow_up', 'Production follow-up'],
  ['shipping_coordination', 'Shipping coordination'],
  ['multiple_services', 'Multiple services'],
]

const validateInquiry = (values) => {
  if (!values.name.trim()) return 'Please enter your name.'
  if (!values.email.trim()) return 'Please enter your business email.'
  if (!/^\S+@\S+\.\S+$/.test(values.email.trim())) return 'Please enter a valid email address.'
  if (!values.product_category.trim()) return 'Please describe the product you want to source.'
  if (!values.message.trim()) return 'Please share a few sourcing details.'
  return ''
}

const fieldClass =
  'mt-2 w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-sm text-slate-950 outline-none transition placeholder:text-slate-400 focus:border-blue-600 focus:ring-4 focus:ring-blue-100'
const labelClass = 'text-sm font-semibold text-slate-800'

const InquiryForm = ({ compact = false }) => {
  const [values, setValues] = useState(initialValues)
  const [status, setStatus] = useState('idle')
  const [message, setMessage] = useState('')

  const handleChange = (event) => {
    const { name, value } = event.target
    setValues((current) => ({ ...current, [name]: value }))
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    const validationMessage = validateInquiry(values)

    if (validationMessage) {
      setStatus('error')
      setMessage(validationMessage)
      return
    }

    setStatus('submitting')
    setMessage('')

    submitSourcingInquiry(values)
      .then(() => {
        setValues(initialValues)
        setStatus('success')
        setMessage('Thank you. Your sourcing inquiry has been received and will be reviewed by the SSourcing China team.')
      })
      .catch((error) => {
        setStatus('error')
        setMessage(error.message || 'Unable to submit the inquiry. Please try again.')
      })
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-3xl border border-slate-200 bg-white p-6 text-slate-950 shadow-xl shadow-slate-200/70 md:p-8"
      aria-busy={status === 'submitting'}
    >
      <div className="mb-6">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-700">Free sourcing quote</p>
        <h2 className="mt-2 text-2xl font-bold tracking-tight text-slate-950 md:text-3xl">Tell us what you need to source</h2>
        <p className="mt-3 text-sm leading-6 text-slate-600">
          Share your product, quantity, timeline, and support needed. We will review the request and suggest practical next steps.
        </p>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        <label className={labelClass}>
          Name *
          <input className={fieldClass} name="name" value={values.name} onChange={handleChange} placeholder="Your full name" autoComplete="name" />
        </label>
        <label className={labelClass}>
          Business email *
          <input className={fieldClass} name="email" type="email" value={values.email} onChange={handleChange} placeholder="you@company.com" autoComplete="email" />
        </label>
        <label className={labelClass}>
          Company
          <input className={fieldClass} name="company" value={values.company} onChange={handleChange} placeholder="Company name" autoComplete="organization" />
        </label>
        <label className={labelClass}>
          Country / market
          <input className={fieldClass} name="country" value={values.country} onChange={handleChange} placeholder="United States, Germany, UAE..." autoComplete="country-name" />
        </label>
        <label className={labelClass}>
          Phone / WhatsApp
          <input className={fieldClass} name="phone" value={values.phone} onChange={handleChange} placeholder="Optional contact number" autoComplete="tel" />
        </label>
        <label className={labelClass}>
          Service needed *
          <select className={fieldClass} name="service_needed" value={values.service_needed} onChange={handleChange}>
            {serviceOptions.map(([value, label]) => (
              <option key={value} value={value}>{label}</option>
            ))}
          </select>
        </label>
        <label className={labelClass}>
          Product category *
          <input className={fieldClass} name="product_category" value={values.product_category} onChange={handleChange} placeholder="Product, material, or category" />
        </label>
        <label className={labelClass}>
          Estimated quantity
          <input className={fieldClass} name="estimated_quantity" value={values.estimated_quantity} onChange={handleChange} placeholder="Target order volume or MOQ" />
        </label>
        {!compact && (
          <label className={`${labelClass} md:col-span-2`}>
            Timeline
            <input className={fieldClass} name="timeline" value={values.timeline} onChange={handleChange} placeholder="Sample needed in 2 weeks, shipment in 60 days..." />
          </label>
        )}
        <label className={`${labelClass} md:col-span-2`}>
          Sourcing details *
          <textarea
            className={`${fieldClass} min-h-32 resize-y`}
            name="message"
            value={values.message}
            onChange={handleChange}
            placeholder="Tell us specifications, target price, quality requirements, packaging needs, supplier concerns, or shipping destination."
          />
        </label>
      </div>

      <button
        type="submit"
        disabled={status === 'submitting'}
        className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-blue-700 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-blue-700/20 transition hover:bg-blue-800 disabled:cursor-not-allowed disabled:bg-slate-400 md:w-auto"
      >
        {status === 'submitting' ? <Loader2 className="h-4 w-4 animate-spin" /> : <CheckCircle2 className="h-4 w-4" />}
        {status === 'submitting' ? 'Submitting inquiry...' : 'Get a Free Sourcing Quote'}
      </button>

      {message && (
        <p
          className={`mt-4 rounded-xl px-4 py-3 text-sm font-medium ${
            status === 'success' ? 'bg-emerald-50 text-emerald-800' : 'bg-amber-50 text-amber-900'
          }`}
          role={status === 'error' ? 'alert' : 'status'}
        >
          {message}
        </p>
      )}
    </form>
  )
}

export default InquiryForm
