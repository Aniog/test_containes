import { useState } from 'react'
import { CheckCircle2, Loader2 } from 'lucide-react'
import { createSourcingInquiry } from '../api/sourcingInquiries.js'

const initialValues = {
  name: '',
  email: '',
  company: '',
  country: '',
  product_category: '',
  product_details: '',
  target_quantity: '',
  timeline: '',
  budget_range: '',
  shipping_destination: '',
  message: '',
}

const serviceOptions = [
  { value: 'supplier_search', label: 'Supplier search' },
  { value: 'factory_verification', label: 'Factory verification' },
  { value: 'price_negotiation', label: 'Price comparison / negotiation' },
  { value: 'quality_inspection', label: 'Quality inspection' },
  { value: 'production_follow_up', label: 'Production follow-up' },
  { value: 'shipping_coordination', label: 'Shipping coordination' },
]

function validate(values, services) {
  if (!values.name.trim()) return 'Please enter your name.'
  if (!values.email.trim()) return 'Please enter your business email.'
  if (!/^\S+@\S+\.\S+$/.test(values.email)) return 'Please enter a valid email address.'
  if (!values.product_details.trim()) return 'Please describe the product you want to source.'
  if (services.length === 0) return 'Please select at least one service you need.'
  return null
}

export default function SourcingInquiryForm({ compact = false }) {
  const [values, setValues] = useState(initialValues)
  const [services, setServices] = useState(['supplier_search', 'factory_verification'])
  const [status, setStatus] = useState('idle')
  const [error, setError] = useState('')

  const updateValue = (event) => {
    const { name, value } = event.target
    setValues((current) => ({ ...current, [name]: value }))
  }

  const toggleService = (value) => {
    setServices((current) =>
      current.includes(value)
        ? current.filter((item) => item !== value)
        : [...current, value],
    )
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    setError('')

    const validationError = validate(values, services)
    if (validationError) {
      setError(validationError)
      setStatus('error')
      return
    }

    setStatus('submitting')
    try {
      await createSourcingInquiry({
        ...values,
        name: values.name.trim(),
        email: values.email.trim(),
        company: values.company.trim(),
        country: values.country.trim(),
        product_details: values.product_details.trim(),
        services_needed: services,
        status: 'new',
        submitted_at: new Date().toISOString(),
      })

      setValues(initialValues)
      setServices(['supplier_search', 'factory_verification'])
      setStatus('success')
    } catch (submissionError) {
      setError(submissionError.message || 'The inquiry could not be submitted. Please try again.')
      setStatus('error')
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-3xl border border-brand-border bg-white p-6 text-brand-ink shadow-soft md:p-8"
      aria-busy={status === 'submitting'}
    >
      <div className="mb-6">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-blue">
          Sourcing inquiry
        </p>
        <h2 className="mt-2 text-2xl font-bold text-brand-navy md:text-3xl">
          Get a Free Sourcing Quote
        </h2>
        <p className="mt-3 text-sm leading-6 text-brand-muted md:text-base">
          Share your product requirements and we will review supplier options, verification needs, and next steps.
        </p>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        <label className="block text-sm font-semibold text-brand-ink">
          Name *
          <input
            className="mt-2 w-full rounded-xl border border-brand-border bg-white px-4 py-3 text-brand-ink outline-none transition focus:border-brand-blue focus:ring-4 focus:ring-brand-blue/10"
            name="name"
            value={values.name}
            onChange={updateValue}
            placeholder="Your name"
            autoComplete="name"
          />
        </label>
        <label className="block text-sm font-semibold text-brand-ink">
          Business email *
          <input
            className="mt-2 w-full rounded-xl border border-brand-border bg-white px-4 py-3 text-brand-ink outline-none transition focus:border-brand-blue focus:ring-4 focus:ring-brand-blue/10"
            name="email"
            type="email"
            value={values.email}
            onChange={updateValue}
            placeholder="name@company.com"
            autoComplete="email"
          />
        </label>
        <label className="block text-sm font-semibold text-brand-ink">
          Company
          <input
            className="mt-2 w-full rounded-xl border border-brand-border bg-white px-4 py-3 text-brand-ink outline-none transition focus:border-brand-blue focus:ring-4 focus:ring-brand-blue/10"
            name="company"
            value={values.company}
            onChange={updateValue}
            placeholder="Company name"
            autoComplete="organization"
          />
        </label>
        <label className="block text-sm font-semibold text-brand-ink">
          Country / market
          <input
            className="mt-2 w-full rounded-xl border border-brand-border bg-white px-4 py-3 text-brand-ink outline-none transition focus:border-brand-blue focus:ring-4 focus:ring-brand-blue/10"
            name="country"
            value={values.country}
            onChange={updateValue}
            placeholder="United States, Germany, UAE..."
            autoComplete="country-name"
          />
        </label>
      </div>

      <div className="mt-4 grid gap-4 md:grid-cols-2">
        <label className="block text-sm font-semibold text-brand-ink">
          Product category
          <input
            className="mt-2 w-full rounded-xl border border-brand-border bg-white px-4 py-3 text-brand-ink outline-none transition focus:border-brand-blue focus:ring-4 focus:ring-brand-blue/10"
            name="product_category"
            value={values.product_category}
            onChange={updateValue}
            placeholder="Electronics, packaging, machinery..."
          />
        </label>
        <label className="block text-sm font-semibold text-brand-ink">
          Target quantity
          <input
            className="mt-2 w-full rounded-xl border border-brand-border bg-white px-4 py-3 text-brand-ink outline-none transition focus:border-brand-blue focus:ring-4 focus:ring-brand-blue/10"
            name="target_quantity"
            value={values.target_quantity}
            onChange={updateValue}
            placeholder="Initial order or annual volume"
          />
        </label>
      </div>

      <label className="mt-4 block text-sm font-semibold text-brand-ink">
        Product details *
        <textarea
          className="mt-2 min-h-32 w-full rounded-xl border border-brand-border bg-white px-4 py-3 text-brand-ink outline-none transition focus:border-brand-blue focus:ring-4 focus:ring-brand-blue/10"
          name="product_details"
          value={values.product_details}
          onChange={updateValue}
          placeholder="Product specifications, materials, target price, standards, sample needs, or supplier issues you want to solve."
        />
      </label>

      <fieldset className="mt-5">
        <legend className="text-sm font-semibold text-brand-ink">Services needed *</legend>
        <div className="mt-3 grid gap-3 sm:grid-cols-2">
          {serviceOptions.map((option) => (
            <label
              key={option.value}
              className="flex cursor-pointer items-center gap-3 rounded-xl border border-brand-border bg-brand-surface px-4 py-3 text-sm font-medium text-brand-ink transition hover:border-brand-blue"
            >
              <input
                type="checkbox"
                className="h-4 w-4 rounded border-brand-border text-brand-blue focus:ring-brand-blue"
                checked={services.includes(option.value)}
                onChange={() => toggleService(option.value)}
              />
              {option.label}
            </label>
          ))}
        </div>
      </fieldset>

      {!compact && (
        <div className="mt-4 grid gap-4 md:grid-cols-3">
          <label className="block text-sm font-semibold text-brand-ink">
            Timeline
            <input
              className="mt-2 w-full rounded-xl border border-brand-border bg-white px-4 py-3 text-brand-ink outline-none transition focus:border-brand-blue focus:ring-4 focus:ring-brand-blue/10"
              name="timeline"
              value={values.timeline}
              onChange={updateValue}
              placeholder="Urgent, 30 days, Q4..."
            />
          </label>
          <label className="block text-sm font-semibold text-brand-ink">
            Budget range
            <input
              className="mt-2 w-full rounded-xl border border-brand-border bg-white px-4 py-3 text-brand-ink outline-none transition focus:border-brand-blue focus:ring-4 focus:ring-brand-blue/10"
              name="budget_range"
              value={values.budget_range}
              onChange={updateValue}
              placeholder="Optional"
            />
          </label>
          <label className="block text-sm font-semibold text-brand-ink">
            Shipping destination
            <input
              className="mt-2 w-full rounded-xl border border-brand-border bg-white px-4 py-3 text-brand-ink outline-none transition focus:border-brand-blue focus:ring-4 focus:ring-brand-blue/10"
              name="shipping_destination"
              value={values.shipping_destination}
              onChange={updateValue}
              placeholder="Country, port, or warehouse"
            />
          </label>
        </div>
      )}

      <label className="mt-4 block text-sm font-semibold text-brand-ink">
        Additional notes
        <textarea
          className="mt-2 min-h-24 w-full rounded-xl border border-brand-border bg-white px-4 py-3 text-brand-ink outline-none transition focus:border-brand-blue focus:ring-4 focus:ring-brand-blue/10"
          name="message"
          value={values.message}
          onChange={updateValue}
          placeholder="Tell us anything else that would help us prepare a practical response."
        />
      </label>

      {status === 'success' && (
        <div className="mt-5 flex items-start gap-3 rounded-2xl border border-green-200 bg-green-50 p-4 text-green-800" role="status">
          <CheckCircle2 className="mt-0.5 h-5 w-5 flex-none" />
          <p className="text-sm leading-6">
            Thank you. Your inquiry has been received and our team will review your requirements.
          </p>
        </div>
      )}

      {status === 'error' && error && (
        <div className="mt-5 rounded-2xl border border-red-200 bg-red-50 p-4 text-sm font-medium text-red-800" role="alert">
          {error}
        </div>
      )}

      <button
        type="submit"
        disabled={status === 'submitting'}
        className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-brand-blue px-6 py-4 text-base font-semibold text-white shadow-sm transition hover:bg-brand-navy disabled:cursor-not-allowed disabled:opacity-70"
      >
        {status === 'submitting' && <Loader2 className="h-5 w-5 animate-spin" />}
        {status === 'submitting' ? 'Submitting inquiry...' : 'Get a Free Sourcing Quote'}
      </button>
      <p className="mt-3 text-center text-xs leading-5 text-brand-muted">
        We use your details only to evaluate and respond to your sourcing request.
      </p>
    </form>
  )
}
