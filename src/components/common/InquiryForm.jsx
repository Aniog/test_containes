import { useState } from 'react'
import { createInquiry } from '@/api/inquiries'
import { inquiryServiceOptions } from '@/data/siteContent'

const initialValues = {
  name: '',
  email: '',
  company: '',
  country: '',
  serviceInterest: inquiryServiceOptions[0],
  productDetails: '',
  quantity: '',
  targetPrice: '',
  timeline: '',
}

const getValidationError = (values) => {
  if (!values.name.trim()) return 'Please enter your name.'
  if (!values.email.trim()) return 'Please enter your business email.'
  if (!/^\S+@\S+\.\S+$/.test(values.email)) return 'Please enter a valid email address.'
  if (!values.company.trim()) return 'Please enter your company name.'
  if (!values.country.trim()) return 'Please enter your country or market.'
  if (!values.productDetails.trim()) {
    return 'Please describe the product and sourcing requirement.'
  }
  if (values.productDetails.trim().length < 10) {
    return 'Please add a little more detail so we can review your request.'
  }
  return ''
}

const InquiryForm = ({ sourcePage = 'contact', compact = false }) => {
  const [values, setValues] = useState(initialValues)
  const [status, setStatus] = useState('idle')
  const [error, setError] = useState('')
  const [successMessage, setSuccessMessage] = useState('')

  const handleChange = (event) => {
    const { name, value } = event.target
    setValues((current) => ({ ...current, [name]: value }))
  }

  const handleSubmit = async (event) => {
    event.preventDefault()

    const validationError = getValidationError(values)
    if (validationError) {
      setError(validationError)
      setSuccessMessage('')
      setStatus('error')
      return
    }

    setStatus('submitting')
    setError('')
    setSuccessMessage('')

    try {
      await createInquiry({ ...values, sourcePage })
      setValues(initialValues)
      setStatus('success')
      setSuccessMessage('Thank you. We will review your sourcing request and reply shortly.')
    } catch (submitError) {
      setStatus('error')
      setError(submitError.message || 'Unable to submit your inquiry right now.')
    }
  }

  return (
    <form
      className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8"
      onSubmit={handleSubmit}
      aria-busy={status === 'submitting'}
    >
      <div className="grid gap-5 sm:grid-cols-2">
        <label className="grid gap-2 text-sm font-medium text-slate-900">
          Full name
          <input
            className="rounded-2xl border border-slate-300 bg-white px-4 py-3 text-sm text-slate-900 placeholder:text-slate-400 focus:border-blue-700 focus:outline-none"
            name="name"
            onChange={handleChange}
            placeholder="Your name"
            type="text"
            value={values.name}
          />
        </label>

        <label className="grid gap-2 text-sm font-medium text-slate-900">
          Business email
          <input
            className="rounded-2xl border border-slate-300 bg-white px-4 py-3 text-sm text-slate-900 placeholder:text-slate-400 focus:border-blue-700 focus:outline-none"
            name="email"
            onChange={handleChange}
            placeholder="you@company.com"
            type="email"
            value={values.email}
          />
        </label>

        <label className="grid gap-2 text-sm font-medium text-slate-900">
          Company
          <input
            className="rounded-2xl border border-slate-300 bg-white px-4 py-3 text-sm text-slate-900 placeholder:text-slate-400 focus:border-blue-700 focus:outline-none"
            name="company"
            onChange={handleChange}
            placeholder="Company name"
            type="text"
            value={values.company}
          />
        </label>

        <label className="grid gap-2 text-sm font-medium text-slate-900">
          Country or market
          <input
            className="rounded-2xl border border-slate-300 bg-white px-4 py-3 text-sm text-slate-900 placeholder:text-slate-400 focus:border-blue-700 focus:outline-none"
            name="country"
            onChange={handleChange}
            placeholder="United States, UK, Germany..."
            type="text"
            value={values.country}
          />
        </label>

        <label className="grid gap-2 text-sm font-medium text-slate-900 sm:col-span-2">
          Service needed
          <select
            className="rounded-2xl border border-slate-300 bg-white px-4 py-3 text-sm text-slate-900 focus:border-blue-700 focus:outline-none"
            name="serviceInterest"
            onChange={handleChange}
            value={values.serviceInterest}
          >
            {inquiryServiceOptions.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </label>

        <label className="grid gap-2 text-sm font-medium text-slate-900 sm:col-span-2">
          Product details and sourcing requirement
          <textarea
            className="min-h-[160px] rounded-2xl border border-slate-300 bg-white px-4 py-3 text-sm text-slate-900 placeholder:text-slate-400 focus:border-blue-700 focus:outline-none"
            name="productDetails"
            onChange={handleChange}
            placeholder="Tell us the product type, materials, specifications, quantity, quality expectations, and timeline."
            value={values.productDetails}
          />
        </label>

        <label className="grid gap-2 text-sm font-medium text-slate-900">
          Estimated quantity
          <input
            className="rounded-2xl border border-slate-300 bg-white px-4 py-3 text-sm text-slate-900 placeholder:text-slate-400 focus:border-blue-700 focus:outline-none"
            name="quantity"
            onChange={handleChange}
            placeholder="e.g. 5,000 units"
            type="text"
            value={values.quantity}
          />
        </label>

        <label className="grid gap-2 text-sm font-medium text-slate-900">
          Target price or budget
          <input
            className="rounded-2xl border border-slate-300 bg-white px-4 py-3 text-sm text-slate-900 placeholder:text-slate-400 focus:border-blue-700 focus:outline-none"
            name="targetPrice"
            onChange={handleChange}
            placeholder="Optional"
            type="text"
            value={values.targetPrice}
          />
        </label>

        <label className="grid gap-2 text-sm font-medium text-slate-900 sm:col-span-2">
          Target timeline
          <input
            className="rounded-2xl border border-slate-300 bg-white px-4 py-3 text-sm text-slate-900 placeholder:text-slate-400 focus:border-blue-700 focus:outline-none"
            name="timeline"
            onChange={handleChange}
            placeholder="Optional"
            type="text"
            value={values.timeline}
          />
        </label>
      </div>

      <div className={`mt-6 ${compact ? 'space-y-3' : 'space-y-4'}`}>
        <button
          className="inline-flex items-center justify-center rounded-full bg-blue-700 px-6 py-3 text-sm font-semibold text-white transition hover:bg-blue-800 disabled:cursor-not-allowed disabled:bg-blue-400"
          disabled={status === 'submitting'}
          type="submit"
        >
          {status === 'submitting' ? 'Submitting...' : 'Get a Free Sourcing Quote'}
        </button>

        {error ? <p className="text-sm text-red-700">{error}</p> : null}
        {successMessage ? <p className="text-sm text-emerald-700">{successMessage}</p> : null}
      </div>
    </form>
  )
}

export default InquiryForm
