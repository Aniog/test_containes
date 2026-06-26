import { useState } from 'react'
import { submitSourcingInquiry } from '@/api/inquiries'
import { SERVICES } from '@/data/siteContent'
import Icon from '@/components/ui/Icon'
import { cn } from '@/lib/utils'

const SERVICE_OPTIONS = SERVICES.map((s) => ({ value: s.slug, label: s.title }))

const EMPTY = {
  name: '',
  email: '',
  company: '',
  country: '',
  phone: '',
  product_category: '',
  estimated_quantity: '',
  budget: '',
  services_needed: [],
  message: '',
}

export default function InquiryForm({ sourcePage = 'contact', compact = false }) {
  const [values, setValues] = useState(EMPTY)
  const [status, setStatus] = useState('idle') // idle | submitting | success | error
  const [error, setError] = useState(null)

  const onChange = (e) => {
    const { name, value, type, checked } = e.target
    if (type === 'checkbox') {
      setValues((v) => ({
        ...v,
        services_needed: checked
          ? [...v.services_needed, value]
          : v.services_needed.filter((s) => s !== value),
      }))
    } else {
      setValues((v) => ({ ...v, [name]: value }))
    }
  }

  const validate = (v) => {
    if (!v.name.trim()) return 'Please enter your name.'
    if (!v.email.trim()) return 'Please enter your email.'
    if (!/^\S+@\S+\.\S+$/.test(v.email)) return 'Please enter a valid email address.'
    if (!v.message.trim()) return 'Please describe what you want to source.'
    return null
  }

  const onSubmit = async (e) => {
    e.preventDefault()
    setError(null)
    const err = validate(values)
    if (err) {
      setError(err)
      setStatus('error')
      return
    }
    setStatus('submitting')
    try {
      await submitSourcingInquiry({ ...values, source_page: sourcePage })
      setStatus('success')
      setValues(EMPTY)
    } catch (err) {
      setError(err.message || 'Submission failed. Please try again.')
      setStatus('error')
    }
  }

  if (status === 'success') {
    return (
      <div className="rounded-2xl border border-slate-200 bg-white p-8 text-center shadow-sm">
        <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-green-100">
          <Icon name="CheckCircle2" className="h-7 w-7 text-green-600" />
        </div>
        <h3 className="mt-4 text-xl font-bold text-ink">Request received</h3>
        <p className="mt-2 text-ink-muted">
          Thank you. Our sourcing team will review your requirements and reply within one business
          day with next steps.
        </p>
        <button
          type="button"
          onClick={() => setStatus('idle')}
          className="mt-6 inline-flex items-center gap-2 rounded-lg border border-slate-300 px-5 py-2.5 text-sm font-semibold text-brand hover:border-brand"
        >
          Submit another request
        </button>
      </div>
    )
  }

  const inputClass =
    'w-full rounded-lg border border-slate-300 bg-white px-3.5 py-2.5 text-sm text-ink placeholder:text-slate-400 focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/20'
  const labelClass = 'mb-1.5 block text-sm font-medium text-ink'

  return (
    <form
      onSubmit={onSubmit}
      className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8"
      noValidate
    >
      <div className={cn('grid grid-cols-1 gap-4 sm:grid-cols-2', compact && 'sm:grid-cols-2')}>
        <div>
          <label htmlFor="inq-name" className={labelClass}>
            Full name <span className="text-red-500">*</span>
          </label>
          <input
            id="inq-name"
            name="name"
            type="text"
            value={values.name}
            onChange={onChange}
            className={inputClass}
            placeholder="Jane Doe"
            required
          />
        </div>
        <div>
          <label htmlFor="inq-email" className={labelClass}>
            Email <span className="text-red-500">*</span>
          </label>
          <input
            id="inq-email"
            name="email"
            type="email"
            value={values.email}
            onChange={onChange}
            className={inputClass}
            placeholder="you@company.com"
            required
          />
        </div>
        <div>
          <label htmlFor="inq-company" className={labelClass}>
            Company
          </label>
          <input
            id="inq-company"
            name="company"
            type="text"
            value={values.company}
            onChange={onChange}
            className={inputClass}
            placeholder="Your company"
          />
        </div>
        <div>
          <label htmlFor="inq-country" className={labelClass}>
            Country
          </label>
          <input
            id="inq-country"
            name="country"
            type="text"
            value={values.country}
            onChange={onChange}
            className={inputClass}
            placeholder="United States"
          />
        </div>
        <div>
          <label htmlFor="inq-phone" className={labelClass}>
            Phone / WhatsApp
          </label>
          <input
            id="inq-phone"
            name="phone"
            type="text"
            value={values.phone}
            onChange={onChange}
            className={inputClass}
            placeholder="+1 555 000 0000"
          />
        </div>
        <div>
          <label htmlFor="inq-product" className={labelClass}>
            Product category
          </label>
          <input
            id="inq-product"
            name="product_category"
            type="text"
            value={values.product_category}
            onChange={onChange}
            className={inputClass}
            placeholder="e.g. Bluetooth speakers"
          />
        </div>
        <div>
          <label htmlFor="inq-qty" className={labelClass}>
            Estimated quantity
          </label>
          <input
            id="inq-qty"
            name="estimated_quantity"
            type="text"
            value={values.estimated_quantity}
            onChange={onChange}
            className={inputClass}
            placeholder="e.g. 2,000 units"
          />
        </div>
        <div>
          <label htmlFor="inq-budget" className={labelClass}>
            Budget range
          </label>
          <input
            id="inq-budget"
            name="budget"
            type="text"
            value={values.budget}
            onChange={onChange}
            className={inputClass}
            placeholder="e.g. $10k–$25k"
          />
        </div>
      </div>

      <div className="mt-4">
        <span className={labelClass}>Services needed</span>
        <div className="grid grid-cols-2 gap-2 sm:grid-cols-3">
          {SERVICE_OPTIONS.map((opt) => (
            <label
              key={opt.value}
              className="flex cursor-pointer items-center gap-2 rounded-lg border border-slate-200 px-3 py-2 text-sm text-ink-muted hover:border-accent"
            >
              <input
                type="checkbox"
                name="services_needed"
                value={opt.value}
                checked={values.services_needed.includes(opt.value)}
                onChange={onChange}
                className="h-4 w-4 rounded border-slate-300 text-accent focus:ring-accent"
              />
              <span>{opt.label}</span>
            </label>
          ))}
        </div>
      </div>

      <div className="mt-4">
        <label htmlFor="inq-message" className={labelClass}>
          What do you want to source? <span className="text-red-500">*</span>
        </label>
        <textarea
          id="inq-message"
          name="message"
          rows={4}
          value={values.message}
          onChange={onChange}
          className={inputClass}
          placeholder="Describe your product, target price, quality requirements, and timeline."
          required
        />
      </div>

      {error && (
        <div className="mt-4 flex items-start gap-2 rounded-lg bg-red-50 px-4 py-3 text-sm text-red-700">
          <Icon name="AlertTriangle" className="mt-0.5 h-4 w-4 shrink-0" />
          <span>{error}</span>
        </div>
      )}

      <button
        type="submit"
        disabled={status === 'submitting'}
        className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-lg bg-brand px-6 py-3.5 text-base font-semibold text-white shadow-sm transition-colors hover:bg-brand-dark disabled:opacity-60 sm:w-auto"
      >
        {status === 'submitting' ? 'Sending…' : 'Get a Free Sourcing Quote'}
        {status !== 'submitting' && <Icon name="ArrowRight" className="h-4 w-4" />}
      </button>
      <p className="mt-3 text-xs text-ink-muted">
        We reply within one business day. Your information is kept confidential.
      </p>
    </form>
  )
}
