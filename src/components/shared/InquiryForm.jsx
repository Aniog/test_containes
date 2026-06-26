import React from 'react'
import { DataClient } from '@strikingly/sdk'
import { Loader2, CheckCircle2, AlertCircle, Send } from 'lucide-react'
import { STRK_PROJECT_URL, STRK_PROJECT_ANON_KEY } from '../../config.jsx'

const client = new DataClient(STRK_PROJECT_URL, STRK_PROJECT_ANON_KEY)

const PRODUCT_CATEGORIES = [
  'Consumer Electronics',
  'Home & Kitchen',
  'Apparel & Textiles',
  'Furniture',
  'Industrial & Hardware',
  'Beauty & Personal Care',
  'Sports & Outdoor',
  'Toys & Baby',
  'Auto & Accessories',
  'Other',
]

const SERVICES = [
  'Supplier Sourcing',
  'Factory Verification',
  'Quality Inspection',
  'Production Follow-up',
  'Shipping & Logistics',
  'Full Sourcing Service',
]

const ORDER_VOLUMES = [
  'Under $5,000',
  '$5,000 - $20,000',
  '$20,000 - $100,000',
  '$100,000 - $500,000',
  'Over $500,000',
]

const initialValues = {
  name: '',
  email: '',
  phone: '',
  company: '',
  country: '',
  product_category: '',
  service_needed: '',
  order_volume: '',
  message: '',
}

const labelClass = 'block text-sm font-medium text-slate-800 mb-1.5'
const inputClass =
  'w-full rounded-md border border-slate-300 bg-white px-3 py-2.5 text-sm text-slate-900 placeholder:text-slate-400 focus:border-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-600/20 transition'

export default function InquiryForm({ compact = false, title, subtitle }) {
  const [values, setValues] = React.useState(initialValues)
  const [status, setStatus] = React.useState('idle')
  const [error, setError] = React.useState(null)

  const onChange = (e) => {
    const { name, value } = e.target
    setValues((prev) => ({ ...prev, [name]: value }))
  }

  const validate = (v) => {
    if (!v.name.trim()) return 'Please provide your name'
    if (!v.email.trim()) return 'Please provide your email'
    if (!/^\S+@\S+\.\S+$/.test(v.email)) return 'Please provide a valid email address'
    if (!v.product_category) return 'Please select a product category'
    if (!v.message.trim()) return 'Please describe your sourcing needs'
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

    const payload = {
      name: values.name.trim(),
      email: values.email.trim(),
      product_category: values.product_category,
      message: values.message.trim(),
      status: 'new',
      created_at: new Date().toISOString(),
    }
    if (values.phone.trim()) payload.phone = values.phone.trim()
    if (values.company.trim()) payload.company = values.company.trim()
    if (values.country.trim()) payload.country = values.country.trim()
    if (values.service_needed) payload.service_needed = values.service_needed
    if (values.order_volume) payload.order_volume = values.order_volume

    const { data: response, error: submitError } = await client
      .from('SourcingInquiry')
      .insert({ data: payload })
      .select()
      .single()

    if (submitError || response?.success === false) {
      const messages = Array.isArray(response?.errors) ? response.errors.join(', ') : null
      setError(messages || submitError?.message || 'Submission failed. Please try again.')
      setStatus('error')
      return
    }

    setStatus('success')
    setValues(initialValues)
  }

  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-6 md:p-8 shadow-sm">
      {(title || subtitle) && (
        <div className="mb-6">
          {title && <h3 className="text-2xl font-bold text-slate-900 tracking-tight">{title}</h3>}
          {subtitle && <p className="mt-2 text-sm text-slate-600">{subtitle}</p>}
        </div>
      )}

      {status === 'success' ? (
        <div className="rounded-lg border border-emerald-200 bg-emerald-50 p-5">
          <div className="flex items-start gap-3">
            <CheckCircle2 className="h-6 w-6 text-emerald-600 flex-shrink-0 mt-0.5" />
            <div>
              <h4 className="text-base font-semibold text-emerald-900">
                Thanks — your inquiry has been received.
              </h4>
              <p className="mt-1 text-sm text-emerald-800 leading-relaxed">
                One of our sourcing managers will review your project and reply within one
                business day with a free, tailored proposal.
              </p>
              <button
                type="button"
                onClick={() => setStatus('idle')}
                className="mt-4 text-sm font-semibold text-emerald-900 underline underline-offset-2 hover:text-emerald-700"
              >
                Submit another inquiry
              </button>
            </div>
          </div>
        </div>
      ) : (
        <form onSubmit={onSubmit} className="space-y-5" noValidate>
          <div className={`grid grid-cols-1 ${compact ? '' : 'md:grid-cols-2'} gap-5`}>
            <div>
              <label htmlFor="name" className={labelClass}>Full name *</label>
              <input id="name" name="name" type="text" value={values.name} onChange={onChange}
                placeholder="Your full name" className={inputClass} required />
            </div>
            <div>
              <label htmlFor="email" className={labelClass}>Business email *</label>
              <input id="email" name="email" type="email" value={values.email} onChange={onChange}
                placeholder="you@company.com" className={inputClass} required />
            </div>
            <div>
              <label htmlFor="company" className={labelClass}>Company</label>
              <input id="company" name="company" type="text" value={values.company} onChange={onChange}
                placeholder="Company name" className={inputClass} />
            </div>
            <div>
              <label htmlFor="country" className={labelClass}>Country</label>
              <input id="country" name="country" type="text" value={values.country} onChange={onChange}
                placeholder="Where are you based?" className={inputClass} />
            </div>
            <div>
              <label htmlFor="phone" className={labelClass}>Phone / WhatsApp</label>
              <input id="phone" name="phone" type="tel" value={values.phone} onChange={onChange}
                placeholder="Optional" className={inputClass} />
            </div>
            <div>
              <label htmlFor="order_volume" className={labelClass}>Estimated order value</label>
              <select id="order_volume" name="order_volume" value={values.order_volume}
                onChange={onChange} className={inputClass}>
                <option value="">Select a range</option>
                {ORDER_VOLUMES.map((v) => <option key={v} value={v}>{v}</option>)}
              </select>
            </div>
            <div>
              <label htmlFor="product_category" className={labelClass}>Product category *</label>
              <select id="product_category" name="product_category" value={values.product_category}
                onChange={onChange} className={inputClass} required>
                <option value="">Select a category</option>
                {PRODUCT_CATEGORIES.map((c) => <option key={c} value={c}>{c}</option>)}
              </select>
            </div>
            <div>
              <label htmlFor="service_needed" className={labelClass}>Service needed</label>
              <select id="service_needed" name="service_needed" value={values.service_needed}
                onChange={onChange} className={inputClass}>
                <option value="">Select a service</option>
                {SERVICES.map((s) => <option key={s} value={s}>{s}</option>)}
              </select>
            </div>
          </div>

          <div>
            <label htmlFor="message" className={labelClass}>Project details *</label>
            <textarea id="message" name="message" rows={5} value={values.message} onChange={onChange}
              placeholder="Describe the product, target price, quantity, specifications and timeline."
              className={inputClass} required />
          </div>

          {status === 'error' && error && (
            <div className="flex items-start gap-2 rounded-md border border-red-200 bg-red-50 p-3">
              <AlertCircle className="h-5 w-5 text-red-600 flex-shrink-0 mt-0.5" />
              <p className="text-sm text-red-800">{error}</p>
            </div>
          )}

          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
            <p className="text-xs text-slate-500">
              We typically reply within one business day. No obligation.
            </p>
            <button
              type="submit"
              disabled={status === 'submitting'}
              className="inline-flex items-center justify-center gap-2 rounded-md bg-blue-700 px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-blue-800 disabled:opacity-70 disabled:cursor-not-allowed transition"
            >
              {status === 'submitting' ? (
                <>
                  <Loader2 className="h-4 w-4 animate-spin" />
                  Sending...
                </>
              ) : (
                <>
                  <Send className="h-4 w-4" />
                  Get a Free Sourcing Quote
                </>
              )}
            </button>
          </div>
        </form>
      )}
    </div>
  )
}
