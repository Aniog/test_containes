import { CheckCircle2, Loader2 } from 'lucide-react'
import { useMemo, useState } from 'react'
import { createSourcingInquiry } from '../../api/inquiries'
import { serviceOptions } from '../../data/siteContent'

const initialValues = {
  name: '',
  email: '',
  company: '',
  country: '',
  phone: '',
  product_category: '',
  product_description: '',
  order_quantity: '',
  target_price: '',
  services_needed: ['supplier_search'],
  timeline: '',
  shipping_destination: '',
  message: '',
}

const emailPattern = /^\S+@\S+\.\S+$/

export default function InquiryForm({ compact = false }) {
  const [values, setValues] = useState(initialValues)
  const [status, setStatus] = useState('idle')
  const [error, setError] = useState('')
  const [submittedInquiry, setSubmittedInquiry] = useState(null)

  const isSubmitting = status === 'submitting'
  const selectedLabel = useMemo(
    () => serviceOptions.find((option) => option.value === values.services_needed[0])?.label || 'Supplier search',
    [values.services_needed],
  )

  const updateField = (event) => {
    const { name, value } = event.target
    setValues((current) => ({ ...current, [name]: value }))
  }

  const updateService = (event) => {
    setValues((current) => ({ ...current, services_needed: [event.target.value] }))
  }

  const validate = () => {
    if (!values.name.trim()) return 'Please enter your name.'
    if (!emailPattern.test(values.email.trim())) return 'Please enter a valid business email.'
    if (!values.product_description.trim()) return 'Please describe the product you want to source.'
    if (!values.services_needed.length) return 'Please select the service you need.'
    return ''
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    setError('')
    setSubmittedInquiry(null)

    const validationMessage = validate()
    if (validationMessage) {
      setError(validationMessage)
      setStatus('error')
      return
    }

    setStatus('submitting')
    const normalizedValues = Object.fromEntries(
      Object.entries(values).map(([key, value]) => [key, typeof value === 'string' ? value.trim() : value]),
    )

    try {
      const inquiry = await createSourcingInquiry(normalizedValues)
      setSubmittedInquiry(inquiry)
      setValues(initialValues)
      setStatus('success')
    } catch (submitError) {
      setError(submitError.message || 'Your inquiry could not be submitted. Please try again.')
      setStatus('error')
    }
  }

  return (
    <form
      aria-busy={isSubmitting}
      className="rounded-3xl border border-slate-200 bg-white p-6 text-brand-ink shadow-xl shadow-slate-200/60 md:p-8"
      onSubmit={handleSubmit}
    >
      <div className="mb-6">
        <p className="text-sm font-semibold uppercase tracking-[0.18em] text-brand-blue">Inquiry form</p>
        <h2 className="mt-2 text-2xl font-bold text-brand-navy">Get a Free Sourcing Quote</h2>
        <p className="mt-2 text-sm leading-6 text-brand-subtle">
          Tell us what you need. We will review your sourcing request and respond with practical next steps.
        </p>
      </div>

      <div className={`grid gap-4 ${compact ? '' : 'md:grid-cols-2'}`}>
        <label className="grid gap-2 text-sm font-semibold text-brand-navy">
          Name *
          <input className="rounded-xl border border-slate-200 bg-white px-4 py-3 text-brand-ink outline-none transition focus:border-brand-blue" name="name" onChange={updateField} placeholder="Your name" value={values.name} />
        </label>
        <label className="grid gap-2 text-sm font-semibold text-brand-navy">
          Business email *
          <input className="rounded-xl border border-slate-200 bg-white px-4 py-3 text-brand-ink outline-none transition focus:border-brand-blue" name="email" onChange={updateField} placeholder="you@company.com" type="email" value={values.email} />
        </label>
        <label className="grid gap-2 text-sm font-semibold text-brand-navy">
          Company
          <input className="rounded-xl border border-slate-200 bg-white px-4 py-3 text-brand-ink outline-none transition focus:border-brand-blue" name="company" onChange={updateField} placeholder="Company name" value={values.company} />
        </label>
        <label className="grid gap-2 text-sm font-semibold text-brand-navy">
          Country / market
          <input className="rounded-xl border border-slate-200 bg-white px-4 py-3 text-brand-ink outline-none transition focus:border-brand-blue" name="country" onChange={updateField} placeholder="United States, Germany, UAE..." value={values.country} />
        </label>
        <label className="grid gap-2 text-sm font-semibold text-brand-navy">
          Phone / WhatsApp
          <input className="rounded-xl border border-slate-200 bg-white px-4 py-3 text-brand-ink outline-none transition focus:border-brand-blue" name="phone" onChange={updateField} placeholder="Optional contact number" value={values.phone} />
        </label>
        <label className="grid gap-2 text-sm font-semibold text-brand-navy">
          Service needed
          <select className="rounded-xl border border-slate-200 bg-white px-4 py-3 text-brand-ink outline-none transition focus:border-brand-blue" name="services_needed" onChange={updateService} value={values.services_needed[0]}>
            {serviceOptions.map((option) => (
              <option key={option.value} value={option.value}>{option.label}</option>
            ))}
          </select>
        </label>
        <label className="grid gap-2 text-sm font-semibold text-brand-navy">
          Product category
          <input className="rounded-xl border border-slate-200 bg-white px-4 py-3 text-brand-ink outline-none transition focus:border-brand-blue" name="product_category" onChange={updateField} placeholder="Home goods, electronics, tools..." value={values.product_category} />
        </label>
        <label className="grid gap-2 text-sm font-semibold text-brand-navy">
          Estimated quantity
          <input className="rounded-xl border border-slate-200 bg-white px-4 py-3 text-brand-ink outline-none transition focus:border-brand-blue" name="order_quantity" onChange={updateField} placeholder="e.g. 2,000 units" value={values.order_quantity} />
        </label>
        <label className="grid gap-2 text-sm font-semibold text-brand-navy">
          Target price / budget
          <input className="rounded-xl border border-slate-200 bg-white px-4 py-3 text-brand-ink outline-none transition focus:border-brand-blue" name="target_price" onChange={updateField} placeholder="Optional" value={values.target_price} />
        </label>
        <label className="grid gap-2 text-sm font-semibold text-brand-navy">
          Timeline
          <input className="rounded-xl border border-slate-200 bg-white px-4 py-3 text-brand-ink outline-none transition focus:border-brand-blue" name="timeline" onChange={updateField} placeholder="Sample, production, or shipment date" value={values.timeline} />
        </label>
        <label className="grid gap-2 text-sm font-semibold text-brand-navy md:col-span-2">
          Shipping destination
          <input className="rounded-xl border border-slate-200 bg-white px-4 py-3 text-brand-ink outline-none transition focus:border-brand-blue" name="shipping_destination" onChange={updateField} placeholder="Destination country, port, or warehouse" value={values.shipping_destination} />
        </label>
        <label className="grid gap-2 text-sm font-semibold text-brand-navy md:col-span-2">
          Product details *
          <textarea className="min-h-32 rounded-xl border border-slate-200 bg-white px-4 py-3 text-brand-ink outline-none transition focus:border-brand-blue" name="product_description" onChange={updateField} placeholder="Share product links, photos, materials, dimensions, packaging, certifications, or supplier issues." value={values.product_description} />
        </label>
        <label className="grid gap-2 text-sm font-semibold text-brand-navy md:col-span-2">
          Additional notes
          <textarea className="min-h-24 rounded-xl border border-slate-200 bg-white px-4 py-3 text-brand-ink outline-none transition focus:border-brand-blue" name="message" onChange={updateField} placeholder="Anything else we should know?" value={values.message} />
        </label>
      </div>

      <button className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-brand-blue px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-brand-blue/20 transition hover:bg-brand-navy disabled:cursor-not-allowed disabled:opacity-70" disabled={isSubmitting} type="submit">
        {isSubmitting && <Loader2 className="h-4 w-4 animate-spin" />}
        {isSubmitting ? 'Submitting inquiry...' : 'Get a Free Sourcing Quote'}
      </button>

      <p className="mt-3 text-xs leading-5 text-brand-subtle">
        Selected service: <span className="font-semibold text-brand-navy">{selectedLabel}</span>. Your details are used only to review and respond to your sourcing request.
      </p>

      {status === 'success' && (
        <div className="mt-5 flex gap-3 rounded-2xl border border-emerald-200 bg-emerald-50 p-4 text-emerald-900" role="status">
          <CheckCircle2 className="mt-0.5 h-5 w-5 flex-none" />
          <div>
            <p className="font-semibold">Inquiry received.</p>
            <p className="mt-1 text-sm leading-6">Thank you. We will review your request and follow up with practical next steps.</p>
            {submittedInquiry?.id && <p className="mt-1 text-xs">Reference ID: {submittedInquiry.id}</p>}
          </div>
        </div>
      )}

      {status === 'error' && error && (
        <div className="mt-5 rounded-2xl border border-red-200 bg-red-50 p-4 text-sm font-medium text-red-900" role="alert">
          {error}
        </div>
      )}
    </form>
  )
}
