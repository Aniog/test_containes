import { useMemo, useState } from 'react'
import { CheckCircle2, LoaderCircle } from 'lucide-react'
import { createSourcingInquiry } from '@/api/inquiries'
import { orderStageOptions, serviceOptions } from '@/data/siteContent'

const initialValues = {
  company_name: '',
  contact_name: '',
  email: '',
  country: '',
  product_name: '',
  estimated_quantity: '',
  services_needed: ['supplier_sourcing'],
  order_stage: 'active_sourcing',
  timeline: '',
  message: '',
  consent: false,
}

const InquiryForm = ({ pageContext = 'general', title, description }) => {
  const [values, setValues] = useState(initialValues)
  const [status, setStatus] = useState('idle')
  const [error, setError] = useState('')

  const isSubmitting = status === 'submitting'

  const serviceSummary = useMemo(
    () =>
      serviceOptions
        .filter((option) => values.services_needed.includes(option.value))
        .map((option) => option.label)
        .join(', '),
    [values.services_needed],
  )

  const handleChange = (event) => {
    const { name, value, type, checked } = event.target

    setValues((current) => ({
      ...current,
      [name]: type === 'checkbox' ? checked : value,
    }))
  }

  const toggleService = (value) => {
    setValues((current) => {
      const alreadySelected = current.services_needed.includes(value)

      const nextServices = alreadySelected
        ? current.services_needed.filter((item) => item !== value)
        : [...current.services_needed, value]

      return {
        ...current,
        services_needed: nextServices,
      }
    })
  }

  const validate = () => {
    if (!values.company_name.trim()) return 'Please enter your company name.'
    if (!values.contact_name.trim()) return 'Please enter your name.'
    if (!values.email.trim()) return 'Please enter your business email.'
    if (!/^\S+@\S+\.\S+$/.test(values.email)) return 'Please provide a valid email address.'
    if (!values.country.trim()) return 'Please enter your country or market.'
    if (!values.product_name.trim()) return 'Please describe the product you want to source.'
    if (values.services_needed.length === 0) return 'Please choose at least one service.'
    if (!values.message.trim() || values.message.trim().length < 10) {
      return 'Please share a little more detail about your sourcing requirement.'
    }
    if (!values.consent) return 'Please confirm that we may contact you about this inquiry.'

    return ''
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    const validationError = validate()

    if (validationError) {
      setError(validationError)
      setStatus('error')
      return
    }

    setError('')
    setStatus('submitting')

    createSourcingInquiry({
      ...values,
      company_name: values.company_name.trim(),
      contact_name: values.contact_name.trim(),
      email: values.email.trim(),
      country: values.country.trim(),
      product_name: values.product_name.trim(),
      estimated_quantity: values.estimated_quantity.trim(),
      timeline: values.timeline.trim(),
      message: values.message.trim(),
      page_context: pageContext,
    })
      .then(() => {
        setValues(initialValues)
        setStatus('success')
      })
      .catch((submissionError) => {
        console.error('Failed to submit sourcing inquiry:', submissionError)
        setError(submissionError.message || 'Unable to submit your inquiry right now.')
        setStatus('error')
      })
  }

  return (
    <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm md:p-8">
      <div className="max-w-2xl">
        <h3 className="text-2xl font-bold tracking-tight text-slate-900">
          {title || 'Get a Free Sourcing Quote'}
        </h3>
        <p className="mt-3 text-base leading-7 text-slate-600">
          {description ||
            'Share your product requirements, target market, and timeline. We will review your inquiry and reply with practical next steps.'}
        </p>
      </div>

      <form className="mt-8 space-y-6" onSubmit={handleSubmit} aria-busy={isSubmitting}>
        <div className="grid gap-5 md:grid-cols-2">
          <label className="space-y-2 text-sm font-medium text-slate-700">
            <span>Company name</span>
            <input
              className="w-full rounded-2xl border border-slate-300 bg-white px-4 py-3 text-base text-slate-900 outline-none ring-0 transition focus:border-blue-500 focus:ring-4 focus:ring-blue-100"
              name="company_name"
              placeholder="Example Trading Ltd."
              value={values.company_name}
              onChange={handleChange}
            />
          </label>

          <label className="space-y-2 text-sm font-medium text-slate-700">
            <span>Contact name</span>
            <input
              className="w-full rounded-2xl border border-slate-300 bg-white px-4 py-3 text-base text-slate-900 outline-none ring-0 transition focus:border-blue-500 focus:ring-4 focus:ring-blue-100"
              name="contact_name"
              placeholder="Your full name"
              value={values.contact_name}
              onChange={handleChange}
            />
          </label>

          <label className="space-y-2 text-sm font-medium text-slate-700">
            <span>Business email</span>
            <input
              className="w-full rounded-2xl border border-slate-300 bg-white px-4 py-3 text-base text-slate-900 outline-none ring-0 transition focus:border-blue-500 focus:ring-4 focus:ring-blue-100"
              name="email"
              type="email"
              placeholder="you@company.com"
              value={values.email}
              onChange={handleChange}
            />
          </label>

          <label className="space-y-2 text-sm font-medium text-slate-700">
            <span>Country / market</span>
            <input
              className="w-full rounded-2xl border border-slate-300 bg-white px-4 py-3 text-base text-slate-900 outline-none ring-0 transition focus:border-blue-500 focus:ring-4 focus:ring-blue-100"
              name="country"
              placeholder="United States"
              value={values.country}
              onChange={handleChange}
            />
          </label>

          <label className="space-y-2 text-sm font-medium text-slate-700">
            <span>Product to source</span>
            <input
              className="w-full rounded-2xl border border-slate-300 bg-white px-4 py-3 text-base text-slate-900 outline-none ring-0 transition focus:border-blue-500 focus:ring-4 focus:ring-blue-100"
              name="product_name"
              placeholder="Kitchen accessories, packaging, promotional items..."
              value={values.product_name}
              onChange={handleChange}
            />
          </label>

          <label className="space-y-2 text-sm font-medium text-slate-700">
            <span>Estimated quantity</span>
            <input
              className="w-full rounded-2xl border border-slate-300 bg-white px-4 py-3 text-base text-slate-900 outline-none ring-0 transition focus:border-blue-500 focus:ring-4 focus:ring-blue-100"
              name="estimated_quantity"
              placeholder="1,000 units / 1 x 40HQ / MOQ target"
              value={values.estimated_quantity}
              onChange={handleChange}
            />
          </label>
        </div>

        <div className="space-y-3">
          <span className="block text-sm font-medium text-slate-700">Services needed</span>
          <div className="grid gap-3 md:grid-cols-2 xl:grid-cols-3">
            {serviceOptions.map((option) => {
              const active = values.services_needed.includes(option.value)

              return (
                <button
                  key={option.value}
                  type="button"
                  onClick={() => toggleService(option.value)}
                  className={`rounded-2xl border px-4 py-3 text-left text-sm font-medium transition ${
                    active
                      ? 'border-blue-600 bg-blue-50 text-blue-900'
                      : 'border-slate-300 bg-white text-slate-700 hover:border-slate-400 hover:bg-slate-50'
                  }`}
                >
                  {option.label}
                </button>
              )
            })}
          </div>
          <p className="text-sm text-slate-500">
            Selected: {serviceSummary || 'No services selected yet'}
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-2">
          <label className="space-y-2 text-sm font-medium text-slate-700">
            <span>Current order stage</span>
            <select
              className="w-full rounded-2xl border border-slate-300 bg-white px-4 py-3 text-base text-slate-900 outline-none ring-0 transition focus:border-blue-500 focus:ring-4 focus:ring-blue-100"
              name="order_stage"
              value={values.order_stage}
              onChange={handleChange}
            >
              {orderStageOptions.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
          </label>

          <label className="space-y-2 text-sm font-medium text-slate-700">
            <span>Target timeline</span>
            <input
              className="w-full rounded-2xl border border-slate-300 bg-white px-4 py-3 text-base text-slate-900 outline-none ring-0 transition focus:border-blue-500 focus:ring-4 focus:ring-blue-100"
              name="timeline"
              placeholder="Need samples in 3 weeks / shipment in September"
              value={values.timeline}
              onChange={handleChange}
            />
          </label>
        </div>

        <label className="space-y-2 text-sm font-medium text-slate-700">
          <span>Project details</span>
          <textarea
            className="min-h-40 w-full rounded-2xl border border-slate-300 bg-white px-4 py-3 text-base text-slate-900 outline-none ring-0 transition focus:border-blue-500 focus:ring-4 focus:ring-blue-100"
            name="message"
            placeholder="Tell us about your product, specifications, certifications, packaging, target price, delivery timing, or the sourcing issues you want to solve."
            value={values.message}
            onChange={handleChange}
          />
        </label>

        <label className="flex items-start gap-3 rounded-2xl border border-slate-200 bg-slate-50 px-4 py-4 text-sm text-slate-700">
          <input
            className="mt-1 h-4 w-4 rounded border-slate-300 text-blue-700"
            name="consent"
            type="checkbox"
            checked={values.consent}
            onChange={handleChange}
          />
          <span>
            I agree that SSourcing China may contact me about this sourcing inquiry and related follow-up.
          </span>
        </label>

        {status === 'success' ? (
          <div className="flex items-start gap-3 rounded-2xl border border-emerald-200 bg-emerald-50 px-4 py-4 text-sm text-emerald-800">
            <CheckCircle2 className="mt-0.5 h-5 w-5 flex-none" />
            <p>
              Thanks for your inquiry. We have received your request and will review the next practical sourcing steps.
            </p>
          </div>
        ) : null}

        {error ? (
          <div className="rounded-2xl border border-amber-200 bg-amber-50 px-4 py-4 text-sm text-amber-800">
            {error}
          </div>
        ) : null}

        <button
          className="inline-flex items-center justify-center gap-2 rounded-full bg-blue-700 px-6 py-3 text-sm font-semibold text-white transition hover:bg-blue-800 disabled:cursor-not-allowed disabled:bg-slate-400"
          type="submit"
          disabled={isSubmitting}
        >
          {isSubmitting ? <LoaderCircle className="h-4 w-4 animate-spin" /> : null}
          {isSubmitting ? 'Submitting inquiry...' : 'Get a Free Sourcing Quote'}
        </button>
      </form>
    </div>
  )
}

export default InquiryForm
