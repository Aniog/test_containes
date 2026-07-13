import React from 'react'
import { DataClient } from '@strikingly/sdk'
import { STRK_PROJECT_URL, STRK_PROJECT_ANON_KEY } from '@/config.jsx'
import { CheckCircle2, Loader2, AlertCircle } from 'lucide-react'

const client = new DataClient(STRK_PROJECT_URL, STRK_PROJECT_ANON_KEY)

const SERVICE_OPTIONS = [
  'Supplier Search',
  'Factory Verification',
  'Quality Inspection',
  'Production Follow-Up',
  'Shipping Coordination',
  'Full End-to-End Sourcing',
]

const getErrorMessage = (response, error) => {
  if (Array.isArray(response?.errors) && response.errors.length > 0) {
    return response.errors.join(', ')
  }
  return error?.message || 'Submission failed. Please try again.'
}

const INITIAL = {
  name: '',
  email: '',
  company: '',
  country: '',
  phone: '',
  product_category: '',
  estimated_quantity: '',
  services_needed: [],
  message: '',
}

export default function InquiryForm({ compact = false }) {
  const [values, setValues] = React.useState(INITIAL)
  const [status, setStatus] = React.useState('idle')
  const [error, setError] = React.useState(null)

  const onChange = (e) => {
    const { name, value, type, checked } = e.target
    setValues((v) => {
      if (type === 'checkbox') {
        const set = new Set(v.services_needed)
        if (checked) set.add(value)
        else set.delete(value)
        return { ...v, services_needed: Array.from(set) }
      }
      return { ...v, [name]: value }
    })
  }

  const validate = (v) => {
    if (!v.name.trim()) return 'Please enter your name.'
    if (!v.email.trim()) return 'Please enter your email.'
    if (!/^\S+@\S+\.\S+$/.test(v.email)) return 'Please enter a valid email.'
    if (!v.message.trim()) return 'Please describe what you want to source.'
    return null
  }

  const onSubmit = async (e) => {
    e.preventDefault()
    setError(null)
    const err = validate(values)
    if (err) {
      setError(err)
      return
    }
    setStatus('submitting')
    try {
      const { data: response, error: createError } = await client
        .from('SourcingInquiry')
        .insert({
          data: {
            name: values.name.trim(),
            email: values.email.trim(),
            company: values.company.trim(),
            country: values.country.trim(),
            phone: values.phone.trim(),
            product_category: values.product_category.trim(),
            estimated_quantity: values.estimated_quantity.trim(),
            services_needed: values.services_needed,
            message: values.message.trim(),
            status: 'new',
          },
        })
        .select()
        .single()

      if (createError || response?.success === false) {
        throw new Error(getErrorMessage(response, createError))
      }

      setStatus('success')
      setValues(INITIAL)
    } catch (err) {
      console.error('Inquiry submission failed:', err)
      setError(err.message || 'Submission failed. Please try again.')
      setStatus('error')
    }
  }

  if (status === 'success') {
    return (
      <div className="card flex flex-col items-center justify-center p-8 text-center">
        <CheckCircle2 className="h-12 w-12 text-green-600" />
        <h3 className="mt-4 text-xl font-bold text-slate-900">
          Thank you for your inquiry
        </h3>
        <p className="mt-2 max-w-md text-slate-600">
          We received your sourcing request. A project manager will reply within
          one business day with next steps and a free quote.
        </p>
        <button
          type="button"
          className="btn-outline mt-6"
          onClick={() => setStatus('idle')}
        >
          Submit another inquiry
        </button>
      </div>
    )
  }

  const inputClass =
    'w-full rounded-lg border border-slate-300 bg-white px-4 py-2.5 text-slate-900 placeholder-slate-400 transition focus:border-brand-500 focus:outline-none focus:ring-2 focus:ring-brand-500/30'
  const labelClass = 'mb-1.5 block text-sm font-medium text-slate-700'

  return (
    <form onSubmit={onSubmit} className="card p-6 md:p-8">
      <div className={compact ? 'grid gap-4' : 'grid gap-4 md:grid-cols-2'}>
        <div>
          <label htmlFor="ii-name" className={labelClass}>
            Full name <span className="text-red-600">*</span>
          </label>
          <input
            id="ii-name"
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
          <label htmlFor="ii-email" className={labelClass}>
            Email <span className="text-red-600">*</span>
          </label>
          <input
            id="ii-email"
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
          <label htmlFor="ii-company" className={labelClass}>
            Company
          </label>
          <input
            id="ii-company"
            name="company"
            type="text"
            value={values.company}
            onChange={onChange}
            className={inputClass}
            placeholder="Your company"
          />
        </div>
        <div>
          <label htmlFor="ii-country" className={labelClass}>
            Country
          </label>
          <input
            id="ii-country"
            name="country"
            type="text"
            value={values.country}
            onChange={onChange}
            className={inputClass}
            placeholder="United States"
          />
        </div>
        <div>
          <label htmlFor="ii-phone" className={labelClass}>
            Phone / WhatsApp
          </label>
          <input
            id="ii-phone"
            name="phone"
            type="text"
            value={values.phone}
            onChange={onChange}
            className={inputClass}
            placeholder="+1 555 000 0000"
          />
        </div>
        <div>
          <label htmlFor="ii-product" className={labelClass}>
            Product category
          </label>
          <input
            id="ii-product"
            name="product_category"
            type="text"
            value={values.product_category}
            onChange={onChange}
            className={inputClass}
            placeholder="e.g. Bluetooth speakers"
          />
        </div>
        <div className={compact ? '' : 'md:col-span-2'}>
          <label htmlFor="ii-qty" className={labelClass}>
            Estimated quantity
          </label>
          <input
            id="ii-qty"
            name="estimated_quantity"
            type="text"
            value={values.estimated_quantity}
            onChange={onChange}
            className={inputClass}
            placeholder="e.g. 2,000 units / first order"
          />
        </div>
      </div>

      <div className="mt-4">
        <span className={labelClass}>Services needed (select any)</span>
        <div className="flex flex-wrap gap-2">
          {SERVICE_OPTIONS.map((opt) => {
            const checked = values.services_needed.includes(opt)
            return (
              <label
                key={opt}
                className={
                  'cursor-pointer rounded-full border px-3 py-1.5 text-sm font-medium transition ' +
                  (checked
                    ? 'border-brand-600 bg-brand-50 text-brand-700'
                    : 'border-slate-300 text-slate-600 hover:border-brand-400')
                }
              >
                <input
                  type="checkbox"
                  value={opt}
                  checked={checked}
                  onChange={onChange}
                  className="sr-only"
                />
                {opt}
              </label>
            )
          })}
        </div>
      </div>

      <div className="mt-4">
        <label htmlFor="ii-message" className={labelClass}>
          What do you want to source? <span className="text-red-600">*</span>
        </label>
        <textarea
          id="ii-message"
          name="message"
          rows={compact ? 4 : 5}
          value={values.message}
          onChange={onChange}
          className={inputClass}
          placeholder="Describe your product, target price, timeline, and any quality requirements."
          required
        />
      </div>

      {error && (
        <div className="mt-4 flex items-start gap-2 rounded-lg bg-red-50 p-3 text-sm text-red-700">
          <AlertCircle className="mt-0.5 h-4 w-4 shrink-0" />
          <span>{error}</span>
        </div>
      )}

      <button
        type="submit"
        disabled={status === 'submitting'}
        className="btn-primary mt-6 w-full"
      >
        {status === 'submitting' ? (
          <>
            <Loader2 className="h-4 w-4 animate-spin" />
            Sending...
          </>
        ) : (
          'Get a Free Sourcing Quote'
        )}
      </button>
      <p className="mt-3 text-center text-xs text-slate-500">
        We reply within one business day. Your information is kept confidential.
      </p>
    </form>
  )
}
