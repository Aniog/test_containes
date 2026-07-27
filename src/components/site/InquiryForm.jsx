import { useMemo, useState } from 'react'
import { createSourcingInquiry } from '@/api/sourcingInquiry'
import { serviceOptions } from '@/data/siteContent'

const initialValues = {
  contact_name: '',
  company_name: '',
  email: '',
  phone: '',
  country: '',
  product_category: '',
  product_description: '',
  order_quantity: '',
  target_price: '',
  services_needed: [],
  shipping_destination: '',
  timeline: '',
  message: '',
  consent: false,
}

const inputClassName =
  'h-12 w-full rounded-2xl border border-slate-300 bg-white px-4 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-teal-600 focus:ring-2 focus:ring-teal-100'
const textareaClassName =
  'min-h-[140px] w-full rounded-2xl border border-slate-300 bg-white px-4 py-3 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-teal-600 focus:ring-2 focus:ring-teal-100'

const InquiryForm = ({ compact = false }) => {
  const [values, setValues] = useState(initialValues)
  const [status, setStatus] = useState('idle')
  const [error, setError] = useState('')
  const [submittedName, setSubmittedName] = useState('')

  const formTitle = useMemo(
    () => (compact ? 'Request a sourcing quote' : 'Get a Free Sourcing Quote'),
    [compact],
  )

  const handleChange = (event) => {
    const { name, value, type, checked } = event.target
    setValues((current) => ({
      ...current,
      [name]: type === 'checkbox' ? checked : value,
    }))
  }

  const handleServiceToggle = (value) => {
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

  const validate = () => {
    if (!values.contact_name.trim()) return 'Please enter your name.'
    if (!values.company_name.trim()) return 'Please enter your company name.'
    if (!values.email.trim()) return 'Please enter your business email.'
    if (!/^\S+@\S+\.\S+$/.test(values.email)) return 'Please enter a valid email.'
    if (!values.country.trim()) return 'Please enter your country.'
    if (!values.product_category.trim()) return 'Please enter the product category.'
    if (!values.product_description.trim()) {
      return 'Please describe what you want to source.'
    }
    if (!values.consent) return 'Please confirm that we can contact you.'
    return ''
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    const validationError = validate()
    if (validationError) {
      setError(validationError)
      setStatus('error')
      return
    }

    setStatus('submitting')
    setError('')

    try {
      await createSourcingInquiry(values)
      setSubmittedName(values.contact_name)
      setValues(initialValues)
      setStatus('success')
    } catch (submissionError) {
      setError(submissionError.message || 'Unable to submit your inquiry right now.')
      setStatus('error')
    }
  }

  return (
    <div className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm md:p-8">
      <div className="max-w-2xl">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-teal-700">
          Qualified inquiry form
        </p>
        <h2 className="mt-4 text-3xl font-semibold tracking-tight text-slate-900">
          {formTitle}
        </h2>
        <p className="mt-4 text-sm leading-7 text-slate-600 md:text-base">
          Share your sourcing needs and we will review the request based on product fit,
          service scope, and next-step feasibility.
        </p>
      </div>

      <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
        <div className="grid gap-5 md:grid-cols-2">
          <label className="space-y-2 text-sm font-medium text-slate-800">
            Contact name *
            <input
              className={inputClassName}
              name="contact_name"
              value={values.contact_name}
              onChange={handleChange}
              placeholder="Your full name"
            />
          </label>
          <label className="space-y-2 text-sm font-medium text-slate-800">
            Company name *
            <input
              className={inputClassName}
              name="company_name"
              value={values.company_name}
              onChange={handleChange}
              placeholder="Company or brand name"
            />
          </label>
          <label className="space-y-2 text-sm font-medium text-slate-800">
            Business email *
            <input
              className={inputClassName}
              name="email"
              type="email"
              value={values.email}
              onChange={handleChange}
              placeholder="name@company.com"
            />
          </label>
          <label className="space-y-2 text-sm font-medium text-slate-800">
            Phone / WhatsApp
            <input
              className={inputClassName}
              name="phone"
              value={values.phone}
              onChange={handleChange}
              placeholder="Optional"
            />
          </label>
          <label className="space-y-2 text-sm font-medium text-slate-800">
            Country *
            <input
              className={inputClassName}
              name="country"
              value={values.country}
              onChange={handleChange}
              placeholder="United States, Germany, UAE..."
            />
          </label>
          <label className="space-y-2 text-sm font-medium text-slate-800">
            Product category *
            <input
              className={inputClassName}
              name="product_category"
              value={values.product_category}
              onChange={handleChange}
              placeholder="e.g. kitchenware, packaging, hardware"
            />
          </label>
          <label className="space-y-2 text-sm font-medium text-slate-800">
            Order quantity
            <input
              className={inputClassName}
              name="order_quantity"
              value={values.order_quantity}
              onChange={handleChange}
              placeholder="Approximate MOQ or planned volume"
            />
          </label>
          <label className="space-y-2 text-sm font-medium text-slate-800">
            Target price
            <input
              className={inputClassName}
              name="target_price"
              value={values.target_price}
              onChange={handleChange}
              placeholder="Optional target cost"
            />
          </label>
          <label className="space-y-2 text-sm font-medium text-slate-800 md:col-span-2">
            Product description *
            <textarea
              className={textareaClassName}
              name="product_description"
              value={values.product_description}
              onChange={handleChange}
              placeholder="Describe product specs, materials, finishing, standards, or known supplier concerns"
            />
          </label>
          <label className="space-y-2 text-sm font-medium text-slate-800">
            Shipping destination
            <input
              className={inputClassName}
              name="shipping_destination"
              value={values.shipping_destination}
              onChange={handleChange}
              placeholder="Destination country or port"
            />
          </label>
          <label className="space-y-2 text-sm font-medium text-slate-800">
            Timeline
            <input
              className={inputClassName}
              name="timeline"
              value={values.timeline}
              onChange={handleChange}
              placeholder="Target sampling or shipment timing"
            />
          </label>
          <label className="space-y-2 text-sm font-medium text-slate-800 md:col-span-2">
            Additional notes
            <textarea
              className={textareaClassName}
              name="message"
              value={values.message}
              onChange={handleChange}
              placeholder="Share supplier concerns, compliance needs, packaging requirements, or shipping notes"
            />
          </label>
        </div>

        <div>
          <p className="text-sm font-medium text-slate-800">Services needed</p>
          <div className="mt-3 grid gap-3 md:grid-cols-2 xl:grid-cols-3">
            {serviceOptions.map((option) => {
              const checked = values.services_needed.includes(option.value)

              return (
                <label
                  key={option.value}
                  className={`flex items-center gap-3 rounded-2xl border px-4 py-3 text-sm text-slate-800 transition ${
                    checked
                      ? 'border-teal-600 bg-teal-50'
                      : 'border-slate-200 bg-slate-50 hover:border-slate-300'
                  }`}
                >
                  <input
                    type="checkbox"
                    checked={checked}
                    onChange={() => handleServiceToggle(option.value)}
                    className="h-4 w-4 rounded border-slate-300 text-teal-600"
                  />
                  <span>{option.label}</span>
                </label>
              )
            })}
          </div>
        </div>

        <label className="flex items-start gap-3 rounded-2xl bg-slate-50 p-4 text-sm text-slate-700">
          <input
            type="checkbox"
            name="consent"
            checked={values.consent}
            onChange={handleChange}
            className="mt-1 h-4 w-4 rounded border-slate-300 text-teal-600"
          />
          <span>
            I agree that SSourcing China may contact me regarding this sourcing inquiry. *
          </span>
        </label>

        {status === 'error' && error ? (
          <div className="rounded-2xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">
            {error}
          </div>
        ) : null}

        {status === 'success' ? (
          <div className="rounded-2xl border border-teal-200 bg-teal-50 px-4 py-3 text-sm text-teal-800">
            Thank you{submittedName ? `, ${submittedName}` : ''}. Your inquiry has been
            submitted successfully.
          </div>
        ) : null}

        <button
          type="submit"
          disabled={status === 'submitting'}
          className="inline-flex h-12 items-center justify-center rounded-full bg-teal-600 px-6 text-sm font-semibold text-white transition hover:bg-teal-700 disabled:cursor-not-allowed disabled:bg-teal-400"
        >
          {status === 'submitting' ? 'Submitting...' : 'Get a Free Sourcing Quote'}
        </button>
      </form>
    </div>
  )
}

export default InquiryForm
