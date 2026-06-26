import { useState } from 'react'
import { DataClient } from '@strikingly/sdk'
import { STRK_PROJECT_URL, STRK_PROJECT_ANON_KEY } from '../config.jsx'
import { CheckCircle2, AlertCircle, Send, Loader2 } from 'lucide-react'

const client = new DataClient(STRK_PROJECT_URL, STRK_PROJECT_ANON_KEY)

const PRODUCT_CATEGORIES = [
  'Home & Kitchen',
  'Consumer Electronics',
  'Apparel & Textiles',
  'Beauty & Personal Care',
  'Furniture & Lighting',
  'Sporting Goods & Outdoor',
  'Toys & Baby Products',
  'Industrial & Hardware',
  'Promotional & Packaging',
  'Other',
]

const SERVICES_NEEDED = [
  'Supplier sourcing',
  'Factory verification',
  'Quality inspection',
  'Production follow-up',
  'Shipping & logistics',
  'Full end-to-end sourcing',
]

const initialState = {
  full_name: '',
  company: '',
  email: '',
  phone: '',
  country: '',
  product_category: '',
  service_needed: '',
  order_quantity: '',
  target_budget: '',
  message: '',
  newsletter_opt_in: false,
}

const inputBase =
  'w-full rounded-md border border-slate-300 bg-white px-4 py-2.5 text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-red-500/30 focus:border-red-500 transition-colors'

const labelBase = 'block text-sm font-medium text-slate-800 mb-1.5'

export default function InquiryForm({ compact = false }) {
  const [values, setValues] = useState(initialState)
  const [status, setStatus] = useState('idle')
  const [error, setError] = useState(null)

  const onChange = (e) => {
    const { name, value, type, checked } = e.target
    setValues((v) => ({ ...v, [name]: type === 'checkbox' ? checked : value }))
  }

  const validate = (v) => {
    if (!v.full_name.trim()) return 'Please enter your full name.'
    if (!v.email.trim()) return 'Please enter your business email.'
    if (!/^\S+@\S+\.\S+$/.test(v.email)) return 'Please enter a valid email address.'
    if (!v.product_category) return 'Please choose a product category.'
    if (!v.message.trim()) return 'Please describe what you need to source.'
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

    const { data: response, error: insertError } = await client
      .from('SourcingInquiry')
      .insert({ data: { ...values } })
      .select()
      .single()

    if (insertError || response?.success === false) {
      const messages = Array.isArray(response?.errors) && response.errors.length > 0
        ? response.errors.join(', ')
        : insertError?.message || 'Submission failed. Please try again.'
      setError(messages)
      setStatus('error')
      return
    }

    setStatus('success')
    setValues(initialState)
  }

  if (status === 'success') {
    return (
      <div className="rounded-xl border border-emerald-200 bg-emerald-50 p-8 text-center">
        <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-emerald-600 text-white">
          <CheckCircle2 className="h-6 w-6" />
        </div>
        <h3 className="mt-4 text-xl font-semibold text-slate-900">Thank you — your inquiry has been received.</h3>
        <p className="mt-2 text-sm text-slate-600">
          A senior sourcing manager will reply within one working day with next steps and a preliminary feasibility check.
        </p>
        <button
          type="button"
          onClick={() => setStatus('idle')}
          className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-red-600 hover:text-red-700"
        >
          Submit another inquiry
        </button>
      </div>
    )
  }

  return (
    <form onSubmit={onSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-5" noValidate>
      <div className={compact ? 'md:col-span-1' : 'md:col-span-1'}>
        <label htmlFor="full_name" className={labelBase}>
          Full name <span className="text-red-600">*</span>
        </label>
        <input id="full_name" name="full_name" type="text" value={values.full_name} onChange={onChange} required className={inputBase} placeholder="e.g. Jane Smith" />
      </div>

      <div>
        <label htmlFor="company" className={labelBase}>Company</label>
        <input id="company" name="company" type="text" value={values.company} onChange={onChange} className={inputBase} placeholder="e.g. Acme Trading Ltd." />
      </div>

      <div>
        <label htmlFor="email" className={labelBase}>
          Business email <span className="text-red-600">*</span>
        </label>
        <input id="email" name="email" type="email" value={values.email} onChange={onChange} required className={inputBase} placeholder="you@company.com" />
      </div>

      <div>
        <label htmlFor="phone" className={labelBase}>Phone / WhatsApp</label>
        <input id="phone" name="phone" type="tel" value={values.phone} onChange={onChange} className={inputBase} placeholder="+1 555 123 4567" />
      </div>

      <div>
        <label htmlFor="country" className={labelBase}>Country / region</label>
        <input id="country" name="country" type="text" value={values.country} onChange={onChange} className={inputBase} placeholder="e.g. United States" />
      </div>

      <div>
        <label htmlFor="product_category" className={labelBase}>
          Product category <span className="text-red-600">*</span>
        </label>
        <select id="product_category" name="product_category" value={values.product_category} onChange={onChange} required className={inputBase}>
          <option value="">Select a category</option>
          {PRODUCT_CATEGORIES.map((c) => (
            <option key={c} value={c}>{c}</option>
          ))}
        </select>
      </div>

      <div>
        <label htmlFor="service_needed" className={labelBase}>Service needed</label>
        <select id="service_needed" name="service_needed" value={values.service_needed} onChange={onChange} className={inputBase}>
          <option value="">Select a service</option>
          {SERVICES_NEEDED.map((s) => (
            <option key={s} value={s}>{s}</option>
          ))}
        </select>
      </div>

      <div>
        <label htmlFor="order_quantity" className={labelBase}>Estimated order quantity</label>
        <input id="order_quantity" name="order_quantity" type="text" value={values.order_quantity} onChange={onChange} className={inputBase} placeholder="e.g. 2,000 units / month" />
      </div>

      <div className="md:col-span-2">
        <label htmlFor="target_budget" className={labelBase}>Target unit price or total budget (USD)</label>
        <input id="target_budget" name="target_budget" type="text" value={values.target_budget} onChange={onChange} className={inputBase} placeholder="e.g. $4.50 / unit FOB Shenzhen" />
      </div>

      <div className="md:col-span-2">
        <label htmlFor="message" className={labelBase}>
          Product details &amp; requirements <span className="text-red-600">*</span>
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          value={values.message}
          onChange={onChange}
          required
          className={inputBase}
          placeholder="Describe the product, materials, target specs, certifications and any reference links or images."
        />
      </div>

      <div className="md:col-span-2 flex items-start gap-2.5">
        <input
          id="newsletter_opt_in"
          name="newsletter_opt_in"
          type="checkbox"
          checked={values.newsletter_opt_in}
          onChange={onChange}
          className="mt-1 h-4 w-4 rounded border-slate-300 text-red-600 focus:ring-red-500"
        />
        <label htmlFor="newsletter_opt_in" className="text-sm text-slate-600">
          Send me practical sourcing tips and market updates (no more than 1 email per month).
        </label>
      </div>

      {error && (
        <div className="md:col-span-2 flex items-start gap-2 rounded-md border border-red-200 bg-red-50 p-3 text-sm text-red-700">
          <AlertCircle className="h-4 w-4 mt-0.5 shrink-0" />
          <span>{error}</span>
        </div>
      )}

      <div className="md:col-span-2 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pt-2">
        <p className="text-xs text-slate-500">
          We respond within one working day. Your details stay confidential and are never shared.
        </p>
        <button
          type="submit"
          disabled={status === 'submitting'}
          className="inline-flex items-center justify-center gap-2 rounded-md bg-red-600 px-6 py-3 text-sm font-semibold text-white hover:bg-red-700 disabled:opacity-60 disabled:cursor-not-allowed transition-colors"
        >
          {status === 'submitting' ? (
            <>
              <Loader2 className="h-4 w-4 animate-spin" />
              Sending…
            </>
          ) : (
            <>
              <Send className="h-4 w-4" />
              Send Inquiry
            </>
          )}
        </button>
      </div>
    </form>
  )
}
