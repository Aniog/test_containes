import { useState } from 'react'
import { CheckCircle2, Loader2 } from 'lucide-react'
import { createSourcingInquiry } from '../api/inquiries.js'

const serviceOptions = [
  'Supplier sourcing',
  'Factory verification',
  'Quality inspection',
  'Production follow-up',
  'Shipping coordination',
  'Other',
]

const initialValues = {
  name: '',
  email: '',
  company: '',
  country: '',
  product_category: '',
  quantity: '',
  services_needed: ['Supplier sourcing'],
  message: '',
  preferred_contact: 'Email',
}

const validate = (values) => {
  if (!values.name.trim()) return 'Please enter your name.'
  if (!/^\S+@\S+\.\S+$/.test(values.email.trim())) return 'Please enter a valid business email.'
  if (!values.product_category.trim()) return 'Please tell us what product you want to source.'
  if (!values.message.trim()) return 'Please add a short description of your requirements.'
  return null
}

const InquiryForm = ({ compact = false }) => {
  const [values, setValues] = useState(initialValues)
  const [status, setStatus] = useState('idle')
  const [error, setError] = useState('')

  const updateValue = (event) => {
    const { name, value } = event.target
    setValues((current) => ({ ...current, [name]: value }))
  }

  const toggleService = (service) => {
    setValues((current) => {
      const selected = current.services_needed.includes(service)
      const next = selected
        ? current.services_needed.filter((item) => item !== service)
        : [...current.services_needed, service]

      return { ...current, services_needed: next }
    })
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    setError('')

    const validationError = validate(values)
    if (validationError) {
      setError(validationError)
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
        product_category: values.product_category.trim(),
        quantity: values.quantity.trim(),
        message: values.message.trim(),
        submitted_at: new Date().toISOString(),
      })

      setValues(initialValues)
      setStatus('success')
    } catch (submissionError) {
      setError(submissionError.message || 'Unable to submit the inquiry. Please try again.')
      setStatus('error')
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-3xl border border-brand-steel bg-white p-6 text-brand-ink shadow-soft md:p-8"
      aria-busy={status === 'submitting'}
    >
      <div className="mb-6">
        <p className="text-sm font-semibold uppercase tracking-[0.18em] text-brand-blue">Request a quote</p>
        <h2 className="mt-2 text-2xl font-bold text-brand-navy">Get a Free Sourcing Quote</h2>
        <p className="mt-3 text-sm leading-6 text-brand-slate">
          Share the product, quantity, and support you need. We will review whether it fits our sourcing process.
        </p>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        <label className="grid gap-2 text-sm font-semibold text-brand-ink">
          Name *
          <input className="rounded-xl border border-brand-steel bg-white px-4 py-3 text-brand-ink outline-none transition placeholder:text-brand-slate/70 focus:border-brand-blue" name="name" value={values.name} onChange={updateValue} placeholder="Your name" />
        </label>
        <label className="grid gap-2 text-sm font-semibold text-brand-ink">
          Business email *
          <input className="rounded-xl border border-brand-steel bg-white px-4 py-3 text-brand-ink outline-none transition placeholder:text-brand-slate/70 focus:border-brand-blue" name="email" value={values.email} onChange={updateValue} placeholder="you@company.com" type="email" />
        </label>
        <label className="grid gap-2 text-sm font-semibold text-brand-ink">
          Company
          <input className="rounded-xl border border-brand-steel bg-white px-4 py-3 text-brand-ink outline-none transition placeholder:text-brand-slate/70 focus:border-brand-blue" name="company" value={values.company} onChange={updateValue} placeholder="Company name" />
        </label>
        <label className="grid gap-2 text-sm font-semibold text-brand-ink">
          Country / market
          <input className="rounded-xl border border-brand-steel bg-white px-4 py-3 text-brand-ink outline-none transition placeholder:text-brand-slate/70 focus:border-brand-blue" name="country" value={values.country} onChange={updateValue} placeholder="United States, Germany, UAE..." />
        </label>
        <label className="grid gap-2 text-sm font-semibold text-brand-ink">
          Product category *
          <input className="rounded-xl border border-brand-steel bg-white px-4 py-3 text-brand-ink outline-none transition placeholder:text-brand-slate/70 focus:border-brand-blue" name="product_category" value={values.product_category} onChange={updateValue} placeholder="Packaging, electronics, furniture..." />
        </label>
        <label className="grid gap-2 text-sm font-semibold text-brand-ink">
          Estimated quantity
          <input className="rounded-xl border border-brand-steel bg-white px-4 py-3 text-brand-ink outline-none transition placeholder:text-brand-slate/70 focus:border-brand-blue" name="quantity" value={values.quantity} onChange={updateValue} placeholder="MOQ, annual volume, trial order" />
        </label>
      </div>

      {!compact && (
        <fieldset className="mt-5">
          <legend className="text-sm font-semibold text-brand-ink">Services needed</legend>
          <div className="mt-3 grid gap-3 sm:grid-cols-2">
            {serviceOptions.map((service) => (
              <label key={service} className="flex items-center gap-3 rounded-xl border border-brand-steel bg-brand-cloud px-4 py-3 text-sm font-medium text-brand-ink">
                <input
                  type="checkbox"
                  checked={values.services_needed.includes(service)}
                  onChange={() => toggleService(service)}
                  className="h-4 w-4 accent-brand-blue"
                />
                {service}
              </label>
            ))}
          </div>
        </fieldset>
      )}

      <label className="mt-5 grid gap-2 text-sm font-semibold text-brand-ink">
        Requirements *
        <textarea
          className="min-h-32 rounded-xl border border-brand-steel bg-white px-4 py-3 text-brand-ink outline-none transition placeholder:text-brand-slate/70 focus:border-brand-blue"
          name="message"
          value={values.message}
          onChange={updateValue}
          placeholder="Tell us what you need to source, target price, quality standard, packaging, timeline, and destination port."
        />
      </label>

      <label className="mt-5 grid gap-2 text-sm font-semibold text-brand-ink">
        Preferred contact
        <select className="rounded-xl border border-brand-steel bg-white px-4 py-3 text-brand-ink outline-none transition focus:border-brand-blue" name="preferred_contact" value={values.preferred_contact} onChange={updateValue}>
          <option>Email</option>
          <option>WhatsApp</option>
          <option>WeChat</option>
          <option>Phone</option>
        </select>
      </label>

      {error && <p className="mt-4 rounded-xl bg-red-50 px-4 py-3 text-sm font-medium text-red-700" role="alert">{error}</p>}
      {status === 'success' && (
        <p className="mt-4 flex items-start gap-2 rounded-xl bg-emerald-50 px-4 py-3 text-sm font-medium text-emerald-800" role="status">
          <CheckCircle2 className="mt-0.5 h-4 w-4" /> Thank you. Your inquiry has been received and our team will review it.
        </p>
      )}

      <button
        type="submit"
        disabled={status === 'submitting'}
        className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-brand-blue px-6 py-4 text-sm font-semibold text-white transition hover:bg-brand-navy disabled:cursor-not-allowed disabled:bg-brand-slate"
      >
        {status === 'submitting' && <Loader2 className="h-4 w-4 animate-spin" />}
        {status === 'submitting' ? 'Submitting...' : 'Get a Free Sourcing Quote'}
      </button>
    </form>
  )
}

export default InquiryForm
