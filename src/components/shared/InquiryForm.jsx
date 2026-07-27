import { useMemo, useState } from 'react'
import { DataClient } from '@strikingly/sdk'
import { STRK_PROJECT_URL, STRK_PROJECT_ANON_KEY } from '@/config'
import { inquiryServiceOptions } from '@/data/siteContent'

const client = new DataClient(STRK_PROJECT_URL, STRK_PROJECT_ANON_KEY)

const initialValues = {
  company_name: '',
  contact_name: '',
  email: '',
  country: '',
  product_type: '',
  quantity: '',
  service_needed: inquiryServiceOptions[0],
  target_market: '',
  message: '',
}

const getErrorMessage = (response, error) => {
  if (Array.isArray(response?.errors) && response.errors.length > 0) {
    return response.errors.join(', ')
  }

  return error?.message || 'Failed to send inquiry'
}

export default function InquiryForm() {
  const [values, setValues] = useState(initialValues)
  const [status, setStatus] = useState('idle')
  const [feedback, setFeedback] = useState('')

  const isSubmitting = status === 'submitting'

  const quantityNumber = useMemo(() => {
    const parsed = Number(values.quantity)
    return Number.isFinite(parsed) && parsed > 0 ? parsed : null
  }, [values.quantity])

  const handleChange = (event) => {
    const { name, value } = event.target
    setValues((current) => ({ ...current, [name]: value }))
  }

  const validate = () => {
    if (!values.company_name.trim()) return 'Company name is required.'
    if (!values.contact_name.trim()) return 'Contact name is required.'
    if (!values.email.trim()) return 'Business email is required.'
    if (!/^\S+@\S+\.\S+$/.test(values.email)) return 'Please enter a valid email address.'
    if (values.quantity.trim() && !quantityNumber) {
      return 'Please enter a valid estimated quantity.'
    }
    if (!values.product_type.trim()) return 'Please tell us what product you need to source.'
    if (!values.message.trim()) return 'Please add your sourcing request details.'
    return null
  }

  const handleSubmit = async (event) => {
    event.preventDefault()

    const validationError = validate()
    if (validationError) {
      setStatus('error')
      setFeedback(validationError)
      return
    }

    setStatus('submitting')
    setFeedback('')

    const inquiryData = {
      company_name: values.company_name.trim(),
      contact_name: values.contact_name.trim(),
      email: values.email.trim(),
      country: values.country.trim(),
      product_type: values.product_type.trim(),
      service_needed: values.service_needed,
      target_market: values.target_market.trim(),
      message: values.message.trim(),
    }

    if (quantityNumber) {
      inquiryData.quantity = quantityNumber
    }

    const { data: response, error } = await client
      .from('SourcingInquiry')
      .insert({
        data: inquiryData,
      })
      .select()
      .single()

    if (error || response?.success === false) {
      setStatus('error')
      setFeedback(getErrorMessage(response, error))
      return
    }

    setValues(initialValues)
    setStatus('success')
    setFeedback('Thank you. Your inquiry has been received and we will review it shortly.')
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm sm:p-8"
      aria-busy={isSubmitting}
    >
      <div className="grid gap-5 md:grid-cols-2">
        <label className="grid gap-2 text-sm font-medium text-slate-800">
          Company name
          <input
            name="company_name"
            value={values.company_name}
            onChange={handleChange}
            className="h-12 rounded-xl border border-slate-300 bg-white px-4 text-sm text-slate-900 outline-none transition focus:border-blue-700"
            placeholder="Your company"
          />
        </label>

        <label className="grid gap-2 text-sm font-medium text-slate-800">
          Contact name
          <input
            name="contact_name"
            value={values.contact_name}
            onChange={handleChange}
            className="h-12 rounded-xl border border-slate-300 bg-white px-4 text-sm text-slate-900 outline-none transition focus:border-blue-700"
            placeholder="Your name"
          />
        </label>

        <label className="grid gap-2 text-sm font-medium text-slate-800">
          Business email
          <input
            type="email"
            name="email"
            value={values.email}
            onChange={handleChange}
            className="h-12 rounded-xl border border-slate-300 bg-white px-4 text-sm text-slate-900 outline-none transition focus:border-blue-700"
            placeholder="name@company.com"
          />
        </label>

        <label className="grid gap-2 text-sm font-medium text-slate-800">
          Country / region
          <input
            name="country"
            value={values.country}
            onChange={handleChange}
            className="h-12 rounded-xl border border-slate-300 bg-white px-4 text-sm text-slate-900 outline-none transition focus:border-blue-700"
            placeholder="United Kingdom"
          />
        </label>

        <label className="grid gap-2 text-sm font-medium text-slate-800 md:col-span-2">
          Product type
          <input
            name="product_type"
            value={values.product_type}
            onChange={handleChange}
            className="h-12 rounded-xl border border-slate-300 bg-white px-4 text-sm text-slate-900 outline-none transition focus:border-blue-700"
            placeholder="Packaging, kitchenware, textiles, accessories..."
          />
        </label>

        <label className="grid gap-2 text-sm font-medium text-slate-800">
          Estimated quantity
          <input
            name="quantity"
            value={values.quantity}
            onChange={handleChange}
            className="h-12 rounded-xl border border-slate-300 bg-white px-4 text-sm text-slate-900 outline-none transition focus:border-blue-700"
            placeholder="5000"
            inputMode="numeric"
          />
        </label>

        <label className="grid gap-2 text-sm font-medium text-slate-800">
          Service needed
          <select
            name="service_needed"
            value={values.service_needed}
            onChange={handleChange}
            className="h-12 rounded-xl border border-slate-300 bg-white px-4 text-sm text-slate-900 outline-none transition focus:border-blue-700"
          >
            {inquiryServiceOptions.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </label>

        <label className="grid gap-2 text-sm font-medium text-slate-800 md:col-span-2">
          Target market
          <input
            name="target_market"
            value={values.target_market}
            onChange={handleChange}
            className="h-12 rounded-xl border border-slate-300 bg-white px-4 text-sm text-slate-900 outline-none transition focus:border-blue-700"
            placeholder="EU, USA, GCC, Australia..."
          />
        </label>

        <label className="grid gap-2 text-sm font-medium text-slate-800 md:col-span-2">
          Inquiry details
          <textarea
            name="message"
            value={values.message}
            onChange={handleChange}
            rows={6}
            className="rounded-2xl border border-slate-300 bg-white px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-blue-700"
            placeholder="Share product details, current sourcing stage, timelines, quality requirements, or supplier concerns."
          />
        </label>
      </div>

      <div className="mt-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-sm leading-6 text-slate-600">
          We use your information only to review your sourcing request and respond.
        </p>
        <button
          type="submit"
          disabled={isSubmitting}
          className="inline-flex items-center justify-center rounded-full bg-blue-700 px-6 py-3 text-sm font-semibold text-white transition hover:bg-blue-800 disabled:cursor-not-allowed disabled:bg-slate-400"
        >
          {isSubmitting ? 'Sending inquiry...' : 'Get a Free Sourcing Quote'}
        </button>
      </div>

      {feedback ? (
        <p
          className={`mt-5 rounded-2xl px-4 py-3 text-sm font-medium ${
            status === 'success'
              ? 'bg-blue-50 text-blue-800'
              : 'bg-amber-50 text-amber-800'
          }`}
        >
          {feedback}
        </p>
      ) : null}
    </form>
  )
}
