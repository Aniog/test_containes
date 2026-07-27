import { useState } from 'react'
import { CheckCircle2, Send } from 'lucide-react'
import { createSourcingInquiry } from '../../api/sourcingInquiries.js'

const initialValues = {
  name: '',
  email: '',
  phone: '',
  company: '',
  country: '',
  service_needed: ['supplier_sourcing'],
  product_category: '',
  product_description: '',
  target_quantity: '',
  shipping_destination: '',
  desired_timeline: '',
  message: '',
}

const serviceOptions = [
  ['supplier_sourcing', 'Supplier sourcing'],
  ['factory_verification', 'Factory verification'],
  ['quality_inspection', 'Quality inspection'],
  ['production_follow_up', 'Production follow-up'],
  ['shipping_coordination', 'Shipping coordination'],
]

const validateInquiry = (values) => {
  if (!values.name.trim()) return 'Please enter your name.'
  if (!values.email.trim()) return 'Please enter your business email.'
  if (!/^\S+@\S+\.\S+$/.test(values.email.trim())) return 'Please enter a valid email address.'
  if (values.service_needed.length === 0) return 'Please select at least one service.'
  if (values.product_description.trim().length < 10) return 'Please describe the product or requirement in a little more detail.'
  return null
}

const InquiryForm = ({ compact = false }) => {
  const [values, setValues] = useState(initialValues)
  const [status, setStatus] = useState('idle')
  const [error, setError] = useState('')

  const handleChange = (event) => {
    const { name, value } = event.target
    setValues((current) => ({ ...current, [name]: value }))
  }

  const handleServiceToggle = (service) => {
    setValues((current) => {
      const selected = current.service_needed.includes(service)
        ? current.service_needed.filter((item) => item !== service)
        : [...current.service_needed, service]

      return { ...current, service_needed: selected }
    })
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    setError('')

    const validationError = validateInquiry(values)
    if (validationError) {
      setError(validationError)
      setStatus('error')
      return
    }

    setStatus('submitting')
    createSourcingInquiry(values)
      .then(() => {
        setValues(initialValues)
        setStatus('success')
      })
      .catch((submitError) => {
        setError(submitError.message || 'Unable to submit your inquiry. Please try again.')
        setStatus('error')
      })
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-3xl border border-slate-200 bg-white p-5 text-slate-900 shadow-xl shadow-slate-200/60 sm:p-8"
      aria-busy={status === 'submitting'}
    >
      <div className="mb-6">
        <p className="text-sm font-semibold uppercase tracking-[0.18em] text-brand-blue">Inquiry form</p>
        <h2 className="mt-2 text-2xl font-semibold tracking-tight text-brand-navy">
          Get a Free Sourcing Quote
        </h2>
        <p className="mt-2 text-sm leading-6 text-slate-600">
          Share your product details and we will review supplier options, verification needs, QC scope, and shipping requirements.
        </p>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        <label className="block text-sm font-semibold text-slate-800">
          Name *
          <input
            className="mt-2 w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-brand-blue focus:ring-4 focus:ring-brand-sky"
            name="name"
            value={values.name}
            onChange={handleChange}
            placeholder="Your full name"
          />
        </label>
        <label className="block text-sm font-semibold text-slate-800">
          Business email *
          <input
            className="mt-2 w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-brand-blue focus:ring-4 focus:ring-brand-sky"
            type="email"
            name="email"
            value={values.email}
            onChange={handleChange}
            placeholder="name@company.com"
          />
        </label>
        <label className="block text-sm font-semibold text-slate-800">
          Company
          <input
            className="mt-2 w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-brand-blue focus:ring-4 focus:ring-brand-sky"
            name="company"
            value={values.company}
            onChange={handleChange}
            placeholder="Company name"
          />
        </label>
        <label className="block text-sm font-semibold text-slate-800">
          Country / market
          <input
            className="mt-2 w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-brand-blue focus:ring-4 focus:ring-brand-sky"
            name="country"
            value={values.country}
            onChange={handleChange}
            placeholder="United States, Germany, UAE..."
          />
        </label>
        {!compact && (
          <label className="block text-sm font-semibold text-slate-800">
            Phone / WhatsApp
            <input
              className="mt-2 w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-brand-blue focus:ring-4 focus:ring-brand-sky"
              name="phone"
              value={values.phone}
              onChange={handleChange}
              placeholder="Optional"
            />
          </label>
        )}
        <label className="block text-sm font-semibold text-slate-800">
          Product category
          <input
            className="mt-2 w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-brand-blue focus:ring-4 focus:ring-brand-sky"
            name="product_category"
            value={values.product_category}
            onChange={handleChange}
            placeholder="Electronics, packaging, machinery..."
          />
        </label>
      </div>

      <fieldset className="mt-5">
        <legend className="text-sm font-semibold text-slate-800">Services needed *</legend>
        <div className="mt-3 grid gap-2 sm:grid-cols-2">
          {serviceOptions.map(([value, label]) => (
            <label
              key={value}
              className="flex items-center gap-3 rounded-xl border border-slate-200 bg-slate-50 px-3 py-3 text-sm font-medium text-slate-700"
            >
              <input
                type="checkbox"
                checked={values.service_needed.includes(value)}
                onChange={() => handleServiceToggle(value)}
                className="h-4 w-4 rounded border-slate-300 text-brand-blue focus:ring-brand-blue"
              />
              {label}
            </label>
          ))}
        </div>
      </fieldset>

      <label className="mt-5 block text-sm font-semibold text-slate-800">
        Product or project details *
        <textarea
          className="mt-2 min-h-32 w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-brand-blue focus:ring-4 focus:ring-brand-sky"
          name="product_description"
          value={values.product_description}
          onChange={handleChange}
          placeholder="Tell us what you want to source, key specs, quality requirements, and any supplier concerns."
        />
      </label>

      <div className="mt-4 grid gap-4 md:grid-cols-3">
        <label className="block text-sm font-semibold text-slate-800">
          Target quantity
          <input
            className="mt-2 w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-brand-blue focus:ring-4 focus:ring-brand-sky"
            name="target_quantity"
            value={values.target_quantity}
            onChange={handleChange}
            placeholder="500 pcs, 1 container..."
          />
        </label>
        <label className="block text-sm font-semibold text-slate-800">
          Destination
          <input
            className="mt-2 w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-brand-blue focus:ring-4 focus:ring-brand-sky"
            name="shipping_destination"
            value={values.shipping_destination}
            onChange={handleChange}
            placeholder="Country or port"
          />
        </label>
        <label className="block text-sm font-semibold text-slate-800">
          Timeline
          <input
            className="mt-2 w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-brand-blue focus:ring-4 focus:ring-brand-sky"
            name="desired_timeline"
            value={values.desired_timeline}
            onChange={handleChange}
            placeholder="This month, Q4..."
          />
        </label>
      </div>

      {!compact && (
        <label className="mt-4 block text-sm font-semibold text-slate-800">
          Additional notes
          <textarea
            className="mt-2 min-h-24 w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-brand-blue focus:ring-4 focus:ring-brand-sky"
            name="message"
            value={values.message}
            onChange={handleChange}
            placeholder="Current supplier issues, sample needs, certifications, or Incoterms."
          />
        </label>
      )}

      {status === 'success' && (
        <div className="mt-5 flex items-start gap-3 rounded-2xl border border-emerald-200 bg-emerald-50 p-4 text-sm text-emerald-900" role="status">
          <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-emerald-700" />
          <span>Thank you. Your sourcing inquiry has been received and the team will review your requirements.</span>
        </div>
      )}
      {status === 'error' && error && (
        <p className="mt-5 rounded-2xl border border-red-200 bg-red-50 p-4 text-sm font-medium text-red-800" role="alert">
          {error}
        </p>
      )}

      <button
        type="submit"
        disabled={status === 'submitting'}
        className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-brand-blue px-6 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-brand-navy disabled:cursor-not-allowed disabled:bg-slate-400 md:w-auto"
      >
        <Send className="h-4 w-4" />
        {status === 'submitting' ? 'Submitting inquiry...' : 'Get a Free Sourcing Quote'}
      </button>
    </form>
  )
}

export default InquiryForm
