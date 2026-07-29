import { CheckCircle2, Loader2 } from 'lucide-react'
import { useState } from 'react'
import { SERVICE_OPTIONS, createSourcingInquiry } from '../../api/sourcingInquiries.js'

const initialValues = {
  name: '',
  email: '',
  company: '',
  country: '',
  product_category: '',
  order_quantity: '',
  services_needed: ['Supplier search'],
  message: '',
}

const validateInquiry = (values) => {
  if (!values.name.trim()) return 'Please enter your name.'
  if (!values.email.trim()) return 'Please enter your business email.'
  if (!/^\S+@\S+\.\S+$/.test(values.email)) return 'Please enter a valid email address.'
  if (!values.product_category.trim()) return 'Please enter the product category you want to source.'
  if (!values.message.trim()) return 'Please tell us what you need help with.'
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

  const toggleService = (service) => {
    setValues((current) => {
      const exists = current.services_needed.includes(service)
      const services = exists
        ? current.services_needed.filter((item) => item !== service)
        : [...current.services_needed, service]

      return {
        ...current,
        services_needed: services.length > 0 ? services : ['Other'],
      }
    })
  }

  const handleSubmit = async (event) => {
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
      .then((submitted) => {
        console.log('Sourcing inquiry created', submitted?.id || submitted)
        setValues(initialValues)
        setStatus('success')
      })
      .catch((submissionError) => {
        console.error('Sourcing inquiry submission failed', submissionError)
        setError(submissionError.message || 'Unable to submit the inquiry. Please try again.')
        setStatus('error')
      })
  }

  const isSubmitting = status === 'submitting'

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-3xl border border-slate-200 bg-white p-6 text-slate-950 shadow-xl shadow-slate-200/60 md:p-8"
      aria-busy={isSubmitting}
    >
      <div>
        <p className="text-sm font-semibold uppercase tracking-wide text-blue-700">
          Sourcing inquiry
        </p>
        <h2 className="mt-2 text-2xl font-bold text-slate-950">
          Get a Free Sourcing Quote
        </h2>
        <p className="mt-3 text-sm leading-6 text-slate-600">
          Tell us what you want to source from China. We will review your requirements and suggest practical next steps.
        </p>
      </div>

      <div className={`mt-6 grid gap-4 ${compact ? '' : 'md:grid-cols-2'}`}>
        <label className="grid gap-2 text-sm font-semibold text-slate-800">
          Name *
          <input
            name="name"
            value={values.name}
            onChange={handleChange}
            className="rounded-xl border border-slate-300 bg-white px-4 py-3 text-sm text-slate-950 outline-none transition placeholder:text-slate-400 focus:border-blue-600 focus:ring-4 focus:ring-blue-100"
            placeholder="Your name"
            autoComplete="name"
          />
        </label>
        <label className="grid gap-2 text-sm font-semibold text-slate-800">
          Email *
          <input
            name="email"
            type="email"
            value={values.email}
            onChange={handleChange}
            className="rounded-xl border border-slate-300 bg-white px-4 py-3 text-sm text-slate-950 outline-none transition placeholder:text-slate-400 focus:border-blue-600 focus:ring-4 focus:ring-blue-100"
            placeholder="you@company.com"
            autoComplete="email"
          />
        </label>
        <label className="grid gap-2 text-sm font-semibold text-slate-800">
          Company
          <input
            name="company"
            value={values.company}
            onChange={handleChange}
            className="rounded-xl border border-slate-300 bg-white px-4 py-3 text-sm text-slate-950 outline-none transition placeholder:text-slate-400 focus:border-blue-600 focus:ring-4 focus:ring-blue-100"
            placeholder="Company name"
            autoComplete="organization"
          />
        </label>
        <label className="grid gap-2 text-sm font-semibold text-slate-800">
          Country / Region
          <input
            name="country"
            value={values.country}
            onChange={handleChange}
            className="rounded-xl border border-slate-300 bg-white px-4 py-3 text-sm text-slate-950 outline-none transition placeholder:text-slate-400 focus:border-blue-600 focus:ring-4 focus:ring-blue-100"
            placeholder="Destination market"
            autoComplete="country-name"
          />
        </label>
        <label className="grid gap-2 text-sm font-semibold text-slate-800">
          Product category *
          <input
            name="product_category"
            value={values.product_category}
            onChange={handleChange}
            className="rounded-xl border border-slate-300 bg-white px-4 py-3 text-sm text-slate-950 outline-none transition placeholder:text-slate-400 focus:border-blue-600 focus:ring-4 focus:ring-blue-100"
            placeholder="e.g. packaging, electronics, home goods"
          />
        </label>
        <label className="grid gap-2 text-sm font-semibold text-slate-800">
          Estimated quantity
          <input
            name="order_quantity"
            value={values.order_quantity}
            onChange={handleChange}
            className="rounded-xl border border-slate-300 bg-white px-4 py-3 text-sm text-slate-950 outline-none transition placeholder:text-slate-400 focus:border-blue-600 focus:ring-4 focus:ring-blue-100"
            placeholder="e.g. 1,000 pcs or one container"
          />
        </label>
      </div>

      <fieldset className="mt-5">
        <legend className="text-sm font-semibold text-slate-800">Services needed</legend>
        <div className="mt-3 grid gap-2 sm:grid-cols-2">
          {SERVICE_OPTIONS.map((service) => (
            <label key={service} className="flex items-center gap-3 rounded-xl border border-slate-200 bg-slate-50 px-3 py-2 text-sm font-medium text-slate-700">
              <input
                type="checkbox"
                checked={values.services_needed.includes(service)}
                onChange={() => toggleService(service)}
                className="h-4 w-4 rounded border-slate-300 text-blue-700 focus:ring-blue-600"
              />
              {service}
            </label>
          ))}
        </div>
      </fieldset>

      <label className="mt-5 grid gap-2 text-sm font-semibold text-slate-800">
        Requirements and questions *
        <textarea
          name="message"
          value={values.message}
          onChange={handleChange}
          rows="5"
          className="rounded-xl border border-slate-300 bg-white px-4 py-3 text-sm text-slate-950 outline-none transition placeholder:text-slate-400 focus:border-blue-600 focus:ring-4 focus:ring-blue-100"
          placeholder="Share specifications, target price, timeline, certifications, supplier concerns, or shipment destination."
        />
      </label>

      {error && (
        <p className="mt-4 rounded-xl bg-amber-50 px-4 py-3 text-sm font-medium text-amber-800" role="alert">
          {error}
        </p>
      )}

      {status === 'success' && (
        <p className="mt-4 flex items-start gap-2 rounded-xl bg-emerald-50 px-4 py-3 text-sm font-medium text-emerald-800" role="status">
          <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0" />
          Thank you. Your inquiry has been received and our team will review the sourcing details.
        </p>
      )}

      <button
        type="submit"
        disabled={isSubmitting}
        className="mt-6 inline-flex w-full items-center justify-center rounded-full bg-blue-700 px-6 py-3.5 text-sm font-semibold text-white shadow-sm transition hover:bg-blue-800 disabled:cursor-not-allowed disabled:bg-blue-400"
      >
        {isSubmitting && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
        {isSubmitting ? 'Submitting inquiry...' : 'Get a Free Sourcing Quote'}
      </button>
    </form>
  )
}

export default InquiryForm
