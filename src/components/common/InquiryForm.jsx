import { useMemo, useState } from 'react'
import { CheckCircle2, LoaderCircle } from 'lucide-react'
import { submitSourcingInquiry, getInquiryErrorMessage } from '@/api/sourcingInquiries'
import { serviceOptions } from '@/data/siteContent'

const initialValues = {
  contact_name: '',
  company_name: '',
  email: '',
  phone: '',
  product_name: '',
  product_category: '',
  quantity_moq: '',
  services_needed: [],
  target_market: '',
  shipping_terms: '',
  timeline: '',
  message: '',
}

const fieldClassName =
  'mt-2 w-full rounded-2xl border border-slate-300 bg-white px-4 py-3 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-slate-900 focus:ring-2 focus:ring-slate-900/10'

const getValidationError = (values) => {
  if (!values.contact_name.trim()) return 'Please add your name.'
  if (!values.company_name.trim()) return 'Please add your company name.'
  if (!values.email.trim()) return 'Please add your email address.'
  if (!/^\S+@\S+\.\S+$/.test(values.email)) return 'Please provide a valid email address.'
  if (!values.product_name.trim()) return 'Please describe the product you need.'
  if (values.services_needed.length === 0) return 'Please select at least one service.'
  if (values.message.trim().length < 10) return 'Please share more detail about your sourcing request.'
  return null
}

const InquiryForm = ({ title = 'Tell us what you need sourced in China', compact = false }) => {
  const [values, setValues] = useState(initialValues)
  const [status, setStatus] = useState('idle')
  const [errorMessage, setErrorMessage] = useState('')
  const [successMessage, setSuccessMessage] = useState('')

  const busy = status === 'submitting'

  const serviceSummary = useMemo(() => {
    if (values.services_needed.length === 0) {
      return 'Select the support you need so we can review your inquiry efficiently.'
    }

    const labels = serviceOptions
      .filter((option) => values.services_needed.includes(option.value))
      .map((option) => option.label)

    return `Selected: ${labels.join(', ')}`
  }, [values.services_needed])

  const handleChange = (event) => {
    const { name, value } = event.target
    setValues((current) => ({
      ...current,
      [name]: value,
    }))
  }

  const handleServiceToggle = (serviceValue) => {
    setValues((current) => {
      const exists = current.services_needed.includes(serviceValue)
      return {
        ...current,
        services_needed: exists
          ? current.services_needed.filter((item) => item !== serviceValue)
          : [...current.services_needed, serviceValue],
      }
    })
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    setErrorMessage('')
    setSuccessMessage('')

    const validationError = getValidationError(values)
    if (validationError) {
      setStatus('error')
      setErrorMessage(validationError)
      return
    }

    setStatus('submitting')

    const { response, error } = await submitSourcingInquiry(values)

    if (error || response?.success === false) {
      setStatus('error')
      setErrorMessage(getInquiryErrorMessage(response, error))
      return
    }

    setStatus('success')
    setValues(initialValues)
    setSuccessMessage(
      'Thank you. Your sourcing inquiry has been received. We will review it and get back to you with the next steps.',
    )
  }

  return (
    <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
      <div className="max-w-2xl">
        <p className="text-sm font-semibold uppercase tracking-widest text-amber-700">
          Free inquiry
        </p>
        <h3 className="mt-3 text-2xl font-semibold tracking-tight text-slate-900">
          {title}
        </h3>
        <p className="mt-3 text-sm leading-6 text-slate-600 sm:text-base">
          Share your product details, quantity expectations, and the support you need. We will use your information only to review your sourcing request.
        </p>
      </div>

      <form className="mt-8 space-y-8" onSubmit={handleSubmit} aria-busy={busy}>
        <div className={`grid gap-5 ${compact ? 'lg:grid-cols-2' : 'md:grid-cols-2'}`}>
          <label className="block text-sm font-medium text-slate-700">
            Contact name
            <input
              className={fieldClassName}
              name="contact_name"
              value={values.contact_name}
              onChange={handleChange}
              placeholder="Your full name"
            />
          </label>

          <label className="block text-sm font-medium text-slate-700">
            Company name
            <input
              className={fieldClassName}
              name="company_name"
              value={values.company_name}
              onChange={handleChange}
              placeholder="Company / brand"
            />
          </label>

          <label className="block text-sm font-medium text-slate-700">
            Email
            <input
              className={fieldClassName}
              type="email"
              name="email"
              value={values.email}
              onChange={handleChange}
              placeholder="you@company.com"
            />
          </label>

          <label className="block text-sm font-medium text-slate-700">
            Phone / WhatsApp
            <input
              className={fieldClassName}
              name="phone"
              value={values.phone}
              onChange={handleChange}
              placeholder="Optional"
            />
          </label>

          <label className="block text-sm font-medium text-slate-700">
            Product name
            <input
              className={fieldClassName}
              name="product_name"
              value={values.product_name}
              onChange={handleChange}
              placeholder="Example: stainless steel kitchen tools"
            />
          </label>

          <label className="block text-sm font-medium text-slate-700">
            Product category
            <input
              className={fieldClassName}
              name="product_category"
              value={values.product_category}
              onChange={handleChange}
              placeholder="Home goods, packaging, hardware..."
            />
          </label>

          <label className="block text-sm font-medium text-slate-700">
            Quantity / MOQ
            <input
              className={fieldClassName}
              name="quantity_moq"
              value={values.quantity_moq}
              onChange={handleChange}
              placeholder="Example: 3,000 pcs trial order"
            />
          </label>

          <label className="block text-sm font-medium text-slate-700">
            Target market
            <input
              className={fieldClassName}
              name="target_market"
              value={values.target_market}
              onChange={handleChange}
              placeholder="US, EU, Middle East, Australia..."
            />
          </label>

          <label className="block text-sm font-medium text-slate-700">
            Shipping terms
            <input
              className={fieldClassName}
              name="shipping_terms"
              value={values.shipping_terms}
              onChange={handleChange}
              placeholder="FOB, EXW, DDP, not sure yet"
            />
          </label>

          <label className="block text-sm font-medium text-slate-700">
            Timeline
            <input
              className={fieldClassName}
              name="timeline"
              value={values.timeline}
              onChange={handleChange}
              placeholder="Urgent, within 30 days, planning stage..."
            />
          </label>
        </div>

        <fieldset>
          <legend className="text-sm font-medium text-slate-700">Services needed</legend>
          <div className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {serviceOptions.map((service) => {
              const checked = values.services_needed.includes(service.value)
              return (
                <label
                  key={service.value}
                  className={`flex cursor-pointer items-start gap-3 rounded-2xl border px-4 py-4 text-sm transition ${
                    checked
                      ? 'border-slate-900 bg-slate-900 text-white'
                      : 'border-slate-200 bg-slate-50 text-slate-700 hover:border-slate-300'
                  }`}
                >
                  <input
                    type="checkbox"
                    className="mt-1 h-4 w-4 rounded border-slate-300"
                    checked={checked}
                    onChange={() => handleServiceToggle(service.value)}
                  />
                  <span className="font-medium">{service.label}</span>
                </label>
              )
            })}
          </div>
          <p className="mt-3 text-sm text-slate-500">{serviceSummary}</p>
        </fieldset>

        <label className="block text-sm font-medium text-slate-700">
          Inquiry details
          <textarea
            className={`${fieldClassName} min-h-40 resize-y`}
            name="message"
            value={values.message}
            onChange={handleChange}
            placeholder="Share the product details, materials, target price level, quantity, packaging requirements, destination market, and where you need support."
          />
        </label>

        {errorMessage ? (
          <div className="rounded-2xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">
            {errorMessage}
          </div>
        ) : null}

        {successMessage ? (
          <div className="flex items-start gap-3 rounded-2xl border border-emerald-200 bg-emerald-50 px-4 py-3 text-sm text-emerald-700">
            <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0" />
            <span>{successMessage}</span>
          </div>
        ) : null}

        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <p className="max-w-xl text-sm leading-6 text-slate-500">
            By sending this form, you are requesting a sourcing review and follow-up from SSourcing China.
          </p>
          <button
            type="submit"
            disabled={busy}
            className="inline-flex items-center justify-center gap-2 rounded-full bg-slate-900 px-6 py-3 text-sm font-semibold text-white transition hover:bg-slate-800 disabled:cursor-not-allowed disabled:bg-slate-400"
          >
            {busy ? (
              <>
                <LoaderCircle className="h-4 w-4 animate-spin text-white" />
                <span className="text-white">Sending inquiry...</span>
              </>
            ) : (
              <span className="text-white">Get a Free Sourcing Quote</span>
            )}
          </button>
        </div>
      </form>
    </div>
  )
}

export default InquiryForm
