import { useState } from 'react'
import { CheckCircle, Loader2 } from 'lucide-react'
import { createSourcingInquiry } from '../../api/inquiries'

const initialValues = {
  name: '',
  email: '',
  company: '',
  country: '',
  phone: '',
  service_needed: 'end_to_end_sourcing',
  product_description: '',
  estimated_quantity: '',
  budget_range: '',
  timeline: 'one_to_three_months',
  shipping_destination: '',
  message: '',
}

const serviceOptions = [
  ['supplier_sourcing', 'Supplier sourcing'],
  ['factory_verification', 'Factory verification'],
  ['quality_inspection', 'Quality inspection'],
  ['production_follow_up', 'Production follow-up'],
  ['shipping_coordination', 'Shipping coordination'],
  ['end_to_end_sourcing', 'End-to-end sourcing support'],
]

const timelineOptions = [
  ['as_soon_as_possible', 'As soon as possible'],
  ['within_30_days', 'Within 30 days'],
  ['one_to_three_months', '1–3 months'],
  ['three_plus_months', '3+ months'],
  ['research_stage', 'Research stage'],
]

function validate(values) {
  if (!values.name.trim()) return 'Please enter your name.'
  if (!values.email.trim()) return 'Please enter your business email.'
  if (!/^\S+@\S+\.\S+$/.test(values.email)) return 'Please enter a valid email address.'
  if (!values.country.trim()) return 'Please enter your country or market.'
  if (!values.product_description.trim()) return 'Please describe the product you want to source.'
  return null
}

export default function InquiryForm({ compact = false, sourcePage = 'contact' }) {
  const [values, setValues] = useState(initialValues)
  const [status, setStatus] = useState('idle')
  const [message, setMessage] = useState('')

  const onChange = (event) => {
    const { name, value } = event.target
    setValues((current) => ({ ...current, [name]: value }))
  }

  const onSubmit = async (event) => {
    event.preventDefault()
    const validationMessage = validate(values)
    if (validationMessage) {
      setStatus('error')
      setMessage(validationMessage)
      return
    }

    setStatus('submitting')
    setMessage('')

    const payload = {
      ...values,
      name: values.name.trim(),
      email: values.email.trim(),
      company: values.company.trim(),
      country: values.country.trim(),
      phone: values.phone.trim(),
      product_description: values.product_description.trim(),
      estimated_quantity: values.estimated_quantity.trim(),
      budget_range: values.budget_range.trim(),
      shipping_destination: values.shipping_destination.trim(),
      message: values.message.trim(),
      source_page: sourcePage,
      status: 'new',
      created_at: new Date().toISOString(),
    }

    try {
      await createSourcingInquiry(payload)
      setValues(initialValues)
      setStatus('success')
      setMessage('Thank you. Your sourcing inquiry has been received and will be reviewed for a practical next step.')
    } catch (error) {
      console.error('Sourcing inquiry submission failed:', error)
      setStatus('error')
      setMessage(error.message || 'Unable to submit your inquiry. Please try again.')
    }
  }

  const inputClass = 'mt-2 w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-sm text-slate-900 placeholder:text-slate-400 focus:border-sky-700 focus:outline-none focus:ring-4 focus:ring-sky-700/20'
  const labelClass = 'text-sm font-bold text-slate-900'

  return (
    <form onSubmit={onSubmit} className="rounded-3xl border border-slate-200 bg-white p-6 text-slate-900 shadow-xl md:p-8" aria-busy={status === 'submitting'}>
      <div>
        <p className="text-sm font-bold uppercase tracking-wide text-sky-700">Start with a sourcing brief</p>
        <h2 className="mt-2 text-2xl font-bold tracking-tight text-slate-900 md:text-3xl">Get a Free Sourcing Quote</h2>
        <p className="mt-3 text-sm leading-6 text-slate-600">
          Share product details, quantity, timeline, and destination. SSourcing China will review the project and respond with practical next steps.
        </p>
      </div>

      <div className={`mt-6 grid gap-5 ${compact ? '' : 'md:grid-cols-2'}`}>
        <label className={labelClass} htmlFor="name">Name *<input id="name" name="name" value={values.name} onChange={onChange} className={inputClass} placeholder="Your name" /></label>
        <label className={labelClass} htmlFor="email">Business email *<input id="email" name="email" type="email" value={values.email} onChange={onChange} className={inputClass} placeholder="you@company.com" /></label>
        <label className={labelClass} htmlFor="company">Company<input id="company" name="company" value={values.company} onChange={onChange} className={inputClass} placeholder="Company name" /></label>
        <label className={labelClass} htmlFor="country">Country / market *<input id="country" name="country" value={values.country} onChange={onChange} className={inputClass} placeholder="United States, Germany, UAE..." /></label>
        <label className={labelClass} htmlFor="phone">Phone / WhatsApp<input id="phone" name="phone" value={values.phone} onChange={onChange} className={inputClass} placeholder="Optional" /></label>
        <label className={labelClass} htmlFor="service_needed">Service needed<select id="service_needed" name="service_needed" value={values.service_needed} onChange={onChange} className={inputClass}>{serviceOptions.map(([value, label]) => <option key={value} value={value}>{label}</option>)}</select></label>
        <label className={`${labelClass} ${compact ? '' : 'md:col-span-2'}`} htmlFor="product_description">Product description *<textarea id="product_description" name="product_description" rows="4" value={values.product_description} onChange={onChange} className={inputClass} placeholder="Product type, materials, size, reference links, standards, packaging, or customization details" /></label>
        <label className={labelClass} htmlFor="estimated_quantity">Estimated quantity<input id="estimated_quantity" name="estimated_quantity" value={values.estimated_quantity} onChange={onChange} className={inputClass} placeholder="Example: 2,000 pcs per order" /></label>
        <label className={labelClass} htmlFor="budget_range">Target budget / price range<input id="budget_range" name="budget_range" value={values.budget_range} onChange={onChange} className={inputClass} placeholder="Optional" /></label>
        <label className={labelClass} htmlFor="timeline">Timeline<select id="timeline" name="timeline" value={values.timeline} onChange={onChange} className={inputClass}>{timelineOptions.map(([value, label]) => <option key={value} value={value}>{label}</option>)}</select></label>
        <label className={labelClass} htmlFor="shipping_destination">Shipping destination<input id="shipping_destination" name="shipping_destination" value={values.shipping_destination} onChange={onChange} className={inputClass} placeholder="Port, country, warehouse, or Amazon FBA" /></label>
        <label className={`${labelClass} ${compact ? '' : 'md:col-span-2'}`} htmlFor="message">Additional notes<textarea id="message" name="message" rows="3" value={values.message} onChange={onChange} className={inputClass} placeholder="Any supplier concerns, required documents, inspection needs, or shipping preferences" /></label>
      </div>

      <button type="submit" disabled={status === 'submitting'} className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-amber-500 px-6 py-3 text-sm font-bold text-slate-900 shadow-xl transition hover:bg-amber-600 disabled:cursor-not-allowed disabled:opacity-70">
        {status === 'submitting' && <Loader2 className="h-4 w-4 animate-spin" />}
        {status === 'submitting' ? 'Submitting inquiry...' : 'Get a Free Sourcing Quote'}
      </button>

      {message && (
        <p className={`mt-4 flex items-start gap-2 rounded-2xl px-4 py-3 text-sm leading-6 ${status === 'success' ? 'bg-emerald-50 text-emerald-800' : 'bg-amber-50 text-amber-900'}`} role={status === 'success' ? 'status' : 'alert'}>
          {status === 'success' && <CheckCircle className="mt-0.5 h-4 w-4 flex-none" />}
          {message}
        </p>
      )}
    </form>
  )
}
