import { useMemo, useState } from 'react'
import { useLocation } from 'react-router-dom'
import { toast } from 'sonner'
import { createSourcingInquiry } from '../../api/inquiries.js'

const serviceOptions = [
  { value: 'supplier_search', label: 'Supplier Search' },
  { value: 'supplier_verification', label: 'Supplier Verification' },
  { value: 'factory_audit', label: 'Factory Audit / Factory Visit' },
  { value: 'quality_inspection', label: 'Quality Inspection' },
  { value: 'production_follow_up', label: 'Production Follow-up' },
  { value: 'shipping_coordination', label: 'Shipping Coordination' },
]

const emptyValues = {
  company_name: '',
  contact_name: '',
  email: '',
  phone: '',
  website: '',
  product_details: '',
  service_needs: [],
  order_volume: '',
  target_market: '',
  timeline: '',
  shipping_destination: '',
  message: '',
}

const inputClass =
  'w-full rounded-2xl border border-surface-border bg-white px-4 py-3 text-sm text-brand-navy outline-none transition placeholder:text-slate-400 focus:border-brand-blue focus:ring-2 focus:ring-brand-blue/10'

const validateValues = (values) => {
  if (!values.company_name.trim()) return 'Company name is required.'
  if (!values.contact_name.trim()) return 'Contact name is required.'
  if (!values.email.trim()) return 'Business email is required.'
  if (!/^\S+@\S+\.\S+$/.test(values.email.trim())) return 'Please enter a valid business email.'
  if (!values.product_details.trim() || values.product_details.trim().length < 10) {
    return 'Please share enough product or project detail for us to review.'
  }
  if (values.service_needs.length === 0) return 'Please choose at least one service.'
  if (values.website.trim() && !/^https?:\/\//i.test(values.website.trim())) {
    return 'Please enter a full website URL starting with http:// or https://.'
  }
  return null
}

const InquiryForm = ({ compact = false }) => {
  const location = useLocation()
  const [values, setValues] = useState(emptyValues)
  const [status, setStatus] = useState('idle')
  const [error, setError] = useState('')

  const cardClass = useMemo(
    () =>
      compact
        ? 'rounded-3xl border border-surface-border bg-white p-6 shadow-soft md:p-8'
        : 'rounded-3xl border border-surface-border bg-white p-6 shadow-soft md:p-10',
    [compact],
  )

  const handleChange = (event) => {
    const { name, value } = event.target
    setValues((current) => ({ ...current, [name]: value }))
  }

  const handleServiceToggle = (value) => {
    setValues((current) => ({
      ...current,
      service_needs: current.service_needs.includes(value)
        ? current.service_needs.filter((item) => item !== value)
        : [...current.service_needs, value],
    }))
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    const validationError = validateValues(values)

    if (validationError) {
      setError(validationError)
      toast.error(validationError)
      return
    }

    setStatus('submitting')
    setError('')

    try {
      await createSourcingInquiry({
        ...values,
        source_page: location.pathname || '/',
      })
      setValues(emptyValues)
      setStatus('success')
      toast.success('Your sourcing inquiry has been sent.')
    } catch (submissionError) {
      const message = submissionError.message || 'Unable to send your sourcing inquiry.'
      setStatus('error')
      setError(message)
      toast.error(message)
    }
  }

  return (
    <form className={cardClass} onSubmit={handleSubmit} aria-busy={status === 'submitting'}>
      <div className="max-w-2xl">
        <p className="text-sm font-medium uppercase tracking-[0.18em] text-slate-500">
          Get a Free Sourcing Quote
        </p>
        <h2 className="mt-3 text-3xl font-semibold tracking-tight text-brand-navy">
          Tell us what you need sourced from China
        </h2>
        <p className="mt-4 text-base leading-7 text-slate-600">
          Share your product brief, expected volume, target market, and support needed. We will review the requirement and reply with practical next steps.
        </p>
      </div>

      <div className="mt-8 grid gap-5 md:grid-cols-2">
        <label className="block text-sm font-medium text-brand-navy">
          Company name
          <input className={inputClass} name="company_name" value={values.company_name} onChange={handleChange} placeholder="Your company" />
        </label>
        <label className="block text-sm font-medium text-brand-navy">
          Contact name
          <input className={inputClass} name="contact_name" value={values.contact_name} onChange={handleChange} placeholder="Your full name" />
        </label>
        <label className="block text-sm font-medium text-brand-navy">
          Business email
          <input className={inputClass} name="email" type="email" value={values.email} onChange={handleChange} placeholder="name@company.com" />
        </label>
        <label className="block text-sm font-medium text-brand-navy">
          Phone / WhatsApp
          <input className={inputClass} name="phone" value={values.phone} onChange={handleChange} placeholder="Optional" />
        </label>
        <label className="block text-sm font-medium text-brand-navy md:col-span-2">
          Company website
          <input className={inputClass} name="website" value={values.website} onChange={handleChange} placeholder="https://www.company.com" />
        </label>
        <label className="block text-sm font-medium text-brand-navy md:col-span-2">
          Product details
          <textarea className={inputClass} name="product_details" rows="5" value={values.product_details} onChange={handleChange} placeholder="Product type, specifications, target price range, compliance needs, supplier preferences, or current sourcing problem" />
        </label>
      </div>

      <div className="mt-8">
        <p className="text-sm font-medium text-brand-navy">Services needed</p>
        <div className="mt-4 grid gap-3 md:grid-cols-2">
          {serviceOptions.map((option) => {
            const checked = values.service_needs.includes(option.value)
            return (
              <label
                key={option.value}
                className={[
                  'flex cursor-pointer items-start gap-3 rounded-2xl border px-4 py-4 text-sm transition',
                  checked
                    ? 'border-brand-blue bg-brand-sky text-brand-navy'
                    : 'border-surface-border bg-surface-canvas text-slate-700 hover:border-brand-blue/40',
                ].join(' ')}
              >
                <input
                  className="mt-1 h-4 w-4 accent-brand-blue"
                  type="checkbox"
                  checked={checked}
                  onChange={() => handleServiceToggle(option.value)}
                />
                <span>{option.label}</span>
              </label>
            )
          })}
        </div>
      </div>

      <div className="mt-8 grid gap-5 md:grid-cols-2">
        <label className="block text-sm font-medium text-brand-navy">
          Estimated order volume
          <input className={inputClass} name="order_volume" value={values.order_volume} onChange={handleChange} placeholder="MOQ, monthly, or annual estimate" />
        </label>
        <label className="block text-sm font-medium text-brand-navy">
          Target market
          <input className={inputClass} name="target_market" value={values.target_market} onChange={handleChange} placeholder="e.g. USA, EU, GCC" />
        </label>
        <label className="block text-sm font-medium text-brand-navy">
          Timeline
          <input className={inputClass} name="timeline" value={values.timeline} onChange={handleChange} placeholder="When you need to move forward" />
        </label>
        <label className="block text-sm font-medium text-brand-navy">
          Shipping destination
          <input className={inputClass} name="shipping_destination" value={values.shipping_destination} onChange={handleChange} placeholder="Country or destination port" />
        </label>
        <label className="block text-sm font-medium text-brand-navy md:col-span-2">
          Additional notes
          <textarea className={inputClass} name="message" rows="4" value={values.message} onChange={handleChange} placeholder="Optional details such as drawings, quality concerns, current supplier issues, or shipping notes" />
        </label>
      </div>

      {error ? <p className="mt-6 rounded-2xl bg-red-50 px-4 py-3 text-sm text-red-700">{error}</p> : null}
      {status === 'success' ? (
        <p className="mt-6 rounded-2xl bg-emerald-50 px-4 py-3 text-sm text-emerald-700">
          Thank you. Your inquiry has been received and is ready for follow-up.
        </p>
      ) : null}

      <div className="mt-8 flex flex-wrap items-center justify-between gap-4">
        <p className="max-w-xl text-sm leading-6 text-slate-500">
          This form is designed for real sourcing requirements from overseas buyers, brands, wholesalers, and procurement teams.
        </p>
        <button
          type="submit"
          disabled={status === 'submitting'}
          className="inline-flex items-center justify-center rounded-full bg-brand-blue px-6 py-3 text-sm font-semibold text-white transition hover:bg-brand-navy disabled:cursor-not-allowed disabled:opacity-70"
        >
          {status === 'submitting' ? 'Sending inquiry…' : 'Get a Free Sourcing Quote'}
        </button>
      </div>
    </form>
  )
}

export default InquiryForm
