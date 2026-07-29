import { CheckCircle2, Loader2 } from 'lucide-react'
import { useMemo, useState } from 'react'
import { createSourcingInquiry } from '../api/sourcingInquiries.js'
import { serviceOptions } from '../data/siteData.js'

const initialValues = {
  company_name: '',
  contact_name: '',
  email: '',
  phone: '',
  country: '',
  product_category: '',
  product_description: '',
  order_quantity: '',
  services_needed: ['supplier_sourcing'],
  budget_range: '',
  timeline: '',
  shipping_destination: '',
  message: '',
}

const inputClass = 'mt-2 w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-800 placeholder:text-slate-600/70 outline-none transition focus:border-blue-700 focus:ring-4 focus:ring-blue-700/10'
const labelClass = 'text-sm font-semibold text-slate-900'

const validate = (values) => {
  if (!values.company_name.trim()) return 'Please enter your company name.'
  if (!values.contact_name.trim()) return 'Please enter your contact name.'
  if (!values.email.trim()) return 'Please enter your business email.'
  if (!/^\S+@\S+\.\S+$/.test(values.email.trim())) return 'Please enter a valid email address.'
  if (!values.product_description.trim()) return 'Please describe the product you want to source.'
  if (!values.services_needed.length) return 'Please select at least one service.'
  return null
}

const InquiryForm = ({ compact = false }) => {
  const [values, setValues] = useState(initialValues)
  const [status, setStatus] = useState('idle')
  const [error, setError] = useState('')
  const [submitted, setSubmitted] = useState(null)
  const isSubmitting = status === 'submitting'
  const selectedServices = useMemo(() => new Set(values.services_needed), [values.services_needed])

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
    setError('')
    setSubmitted(null)

    const validationMessage = validate(values)
    if (validationMessage) {
      setError(validationMessage)
      setStatus('error')
      return
    }

    setStatus('submitting')

    const cleanPayload = {
      ...values,
      company_name: values.company_name.trim(),
      contact_name: values.contact_name.trim(),
      email: values.email.trim(),
      phone: values.phone.trim(),
      country: values.country.trim(),
      product_category: values.product_category.trim(),
      product_description: values.product_description.trim(),
      order_quantity: values.order_quantity.trim(),
      budget_range: values.budget_range.trim(),
      timeline: values.timeline.trim(),
      shipping_destination: values.shipping_destination.trim(),
      message: values.message.trim(),
      status: 'new',
      submitted_at: new Date().toISOString(),
    }

    try {
      const createdInquiry = await createSourcingInquiry(cleanPayload)
      setSubmitted(createdInquiry)
      setValues(initialValues)
      setStatus('success')
    } catch (submissionError) {
      setError(submissionError.message || 'Unable to submit the inquiry. Please try again.')
      setStatus('error')
    }
  }

  return (
    <form onSubmit={handleSubmit} className="rounded-[2rem] border border-slate-200 bg-white p-6 text-slate-800 shadow-soft sm:p-8" aria-busy={isSubmitting}>
      <div>
        <p className="text-sm font-semibold uppercase tracking-[0.18em] text-amber-600">Inquiry form</p>
        <h2 className="mt-3 text-2xl font-bold text-slate-900 sm:text-3xl">Get a Free Sourcing Quote</h2>
        <p className="mt-3 text-sm leading-6 text-slate-600">Share practical details. We will review the request and suggest the most relevant sourcing next steps.</p>
      </div>

      <div className="mt-7 grid gap-5 md:grid-cols-2">
        <label className={labelClass}>Company name *<input className={inputClass} name="company_name" value={values.company_name} onChange={updateValue} placeholder="Your company" autoComplete="organization" /></label>
        <label className={labelClass}>Contact name *<input className={inputClass} name="contact_name" value={values.contact_name} onChange={updateValue} placeholder="Your name" autoComplete="name" /></label>
        <label className={labelClass}>Business email *<input className={inputClass} type="email" name="email" value={values.email} onChange={updateValue} placeholder="name@company.com" autoComplete="email" /></label>
        <label className={labelClass}>Phone or WhatsApp<input className={inputClass} name="phone" value={values.phone} onChange={updateValue} placeholder="Include country code" autoComplete="tel" /></label>
        <label className={labelClass}>Country / market<input className={inputClass} name="country" value={values.country} onChange={updateValue} placeholder="United States, Germany, UAE..." /></label>
        <label className={labelClass}>Product category<input className={inputClass} name="product_category" value={values.product_category} onChange={updateValue} placeholder="Homeware, electronics accessories..." /></label>
      </div>

      <label className={`${labelClass} mt-5 block`}>Product description and requirements *<textarea className={`${inputClass} min-h-32 resize-y`} name="product_description" value={values.product_description} onChange={updateValue} placeholder="Product details, materials, dimensions, standards, sample references, or supplier links." /></label>

      {!compact && (
        <div className="mt-5 grid gap-5 md:grid-cols-2">
          <label className={labelClass}>Estimated quantity<input className={inputClass} name="order_quantity" value={values.order_quantity} onChange={updateValue} placeholder="500 pcs, 1 container, annual demand..." /></label>
          <label className={labelClass}>Budget or target price<input className={inputClass} name="budget_range" value={values.budget_range} onChange={updateValue} placeholder="Target unit price or project budget" /></label>
          <label className={labelClass}>Timeline<input className={inputClass} name="timeline" value={values.timeline} onChange={updateValue} placeholder="Sample date, launch date, delivery window" /></label>
          <label className={labelClass}>Shipping destination<input className={inputClass} name="shipping_destination" value={values.shipping_destination} onChange={updateValue} placeholder="Port, warehouse, Amazon FBA, country" /></label>
        </div>
      )}

      <fieldset className="mt-6">
        <legend className={labelClass}>Services needed *</legend>
        <div className="mt-3 grid gap-3 sm:grid-cols-2">
          {serviceOptions.map((option) => (
            <label key={option.value} className="flex cursor-pointer items-center gap-3 rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm font-medium text-slate-800 transition hover:border-blue-700">
              <input type="checkbox" checked={selectedServices.has(option.value)} onChange={() => toggleService(option.value)} className="h-4 w-4 rounded border-slate-200 text-blue-700 focus:ring-blue-700" />
              {option.label}
            </label>
          ))}
        </div>
      </fieldset>

      {!compact && (
        <label className={`${labelClass} mt-5 block`}>Additional notes<textarea className={`${inputClass} min-h-24 resize-y`} name="message" value={values.message} onChange={updateValue} placeholder="Any preferred supplier region, certificate needs, packaging requirements, or previous sourcing challenges." /></label>
      )}

      {error && <p className="mt-5 rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm font-medium text-red-700" role="alert">{error}</p>}
      {status === 'success' && (
        <p className="mt-5 flex items-start gap-3 rounded-xl border border-green-200 bg-green-50 px-4 py-3 text-sm font-medium text-green-800" role="status">
          <CheckCircle2 className="mt-0.5 h-5 w-5 flex-none" aria-hidden="true" />
          Thanks. Your sourcing inquiry has been submitted. We will review the details and follow up with practical next steps.
          {submitted?.id ? <span className="sr-only">Inquiry received.</span> : null}
        </p>
      )}

      <button type="submit" disabled={isSubmitting} className="mt-7 inline-flex w-full items-center justify-center gap-2 rounded-full bg-blue-700 px-6 py-4 text-sm font-semibold text-white transition hover:bg-slate-900 disabled:cursor-not-allowed disabled:opacity-70 sm:w-auto">
        {isSubmitting && <Loader2 className="h-4 w-4 animate-spin" aria-hidden="true" />}
        {isSubmitting ? 'Submitting inquiry...' : 'Get a Free Sourcing Quote'}
      </button>
    </form>
  )
}

export default InquiryForm
