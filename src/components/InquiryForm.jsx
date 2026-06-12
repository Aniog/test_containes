import { useState } from 'react'
import { CheckCircle2, AlertCircle, Loader2 } from 'lucide-react'
import { DataClient } from '@strikingly/sdk'
import { STRK_PROJECT_URL, STRK_PROJECT_ANON_KEY } from '../config.jsx'

const client = new DataClient(STRK_PROJECT_URL, STRK_PROJECT_ANON_KEY)

const CATEGORY_OPTIONS = [
  { value: 'consumer-electronics', label: 'Consumer Electronics' },
  { value: 'home-kitchen', label: 'Home & Kitchen' },
  { value: 'apparel-textiles', label: 'Apparel & Textiles' },
  { value: 'promotional-gifts', label: 'Promotional & Gifts' },
  { value: 'industrial-hardware', label: 'Industrial & Hardware' },
  { value: 'beauty-personal-care', label: 'Beauty & Personal Care' },
  { value: 'outdoor-sports', label: 'Outdoor & Sports' },
  { value: 'packaging', label: 'Packaging' },
  { value: 'furniture', label: 'Furniture' },
  { value: 'other', label: 'Other' },
]

const SERVICE_OPTIONS = [
  { value: 'supplier-search', label: 'Supplier search' },
  { value: 'factory-audit', label: 'Factory audit' },
  { value: 'sample-management', label: 'Sample management' },
  { value: 'price-negotiation', label: 'Price negotiation' },
  { value: 'production-follow-up', label: 'Production follow-up' },
  { value: 'quality-inspection', label: 'Quality inspection' },
  { value: 'shipping-logistics', label: 'Shipping & logistics' },
  { value: 'private-label', label: 'Private label / OEM' },
]

const TIMELINE_OPTIONS = [
  { value: 'immediate', label: 'Immediate (within 1 month)' },
  { value: '1-3-months', label: '1–3 months' },
  { value: '3-6-months', label: '3–6 months' },
  { value: 'exploring', label: 'Exploring options' },
]

const INITIAL = {
  full_name: '',
  email: '',
  company: '',
  country: '',
  phone: '',
  product_category: '',
  product_description: '',
  target_quantity: '',
  target_budget: '',
  services_needed: [],
  timeline: '',
}

export default function InquiryForm({ compact = false }) {
  const [values, setValues] = useState(INITIAL)
  const [status, setStatus] = useState('idle') // idle | submitting | success | error
  const [error, setError] = useState(null)

  const update = (name, value) => setValues((v) => ({ ...v, [name]: value }))

  const toggleService = (val) => {
    setValues((v) => {
      const set = new Set(v.services_needed)
      if (set.has(val)) set.delete(val)
      else set.add(val)
      return { ...v, services_needed: Array.from(set) }
    })
  }

  const validate = () => {
    if (!values.full_name.trim()) return 'Please enter your full name.'
    if (!values.email.trim()) return 'Please enter your email.'
    if (!/^\S+@\S+\.\S+$/.test(values.email)) return 'Please enter a valid email.'
    if (!values.product_description.trim() || values.product_description.trim().length < 5) {
      return 'Please describe the product you want to source (at least a few words).'
    }
    return null
  }

  const onSubmit = async (e) => {
    e.preventDefault()
    setError(null)
    const err = validate()
    if (err) {
      setError(err)
      setStatus('error')
      return
    }
    setStatus('submitting')

    const payload = {
      ...values,
      status: 'new',
    }
    // strip empty fields so schema enums don't fail
    const cleaned = Object.fromEntries(
      Object.entries(payload).filter(([, v]) => {
        if (Array.isArray(v)) return v.length > 0
        return v !== '' && v !== null && v !== undefined
      }),
    )

    const { data: response, error: insertError } = await client
      .from('SourcingInquiry')
      .insert({ data: cleaned })
      .select()
      .single()

    if (insertError || response?.success === false) {
      const msg =
        (Array.isArray(response?.errors) && response.errors.join(', ')) ||
        insertError?.message ||
        'Could not submit your inquiry. Please try again.'
      setError(msg)
      setStatus('error')
      return
    }

    setValues(INITIAL)
    setStatus('success')
  }

  if (status === 'success') {
    return (
      <div className="rounded-xl border border-brand-border bg-white p-8 text-center">
        <div className="mx-auto mb-4 inline-flex h-12 w-12 items-center justify-center rounded-full bg-emerald-50 text-emerald-600">
          <CheckCircle2 className="h-7 w-7" />
        </div>
        <h3 className="text-xl font-bold text-brand-navy">Inquiry received</h3>
        <p className="mt-2 text-sm text-brand-muted max-w-md mx-auto">
          Thank you. Our sourcing team will review your requirements and get back to you within
          one business day with a free quote and next steps.
        </p>
        <button
          type="button"
          onClick={() => setStatus('idle')}
          className="mt-6 inline-flex items-center justify-center rounded-md border border-brand-border bg-white px-5 py-2.5 text-sm font-semibold text-brand-navy hover:bg-brand-surface"
        >
          Send another inquiry
        </button>
      </div>
    )
  }

  const inputCls =
    'w-full rounded-md border border-brand-border bg-white px-3.5 py-2.5 text-sm text-brand-ink placeholder:text-slate-400 focus:border-brand-blue focus:outline-none focus:ring-2 focus:ring-brand-blue/20'
  const labelCls = 'block text-sm font-medium text-brand-navy mb-1.5'

  return (
    <form onSubmit={onSubmit} className="rounded-xl border border-brand-border bg-white p-6 md:p-8 shadow-sm">
      {!compact && (
        <div className="mb-6">
          <h3 className="text-2xl font-bold text-brand-navy">Get a free sourcing quote</h3>
          <p className="mt-1.5 text-sm text-brand-muted">
            Tell us about your product and we will reply within one business day.
          </p>
        </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-5">
        <div>
          <label className={labelCls} htmlFor="full_name">Full name *</label>
          <input
            id="full_name"
            type="text"
            required
            value={values.full_name}
            onChange={(e) => update('full_name', e.target.value)}
            className={inputCls}
            placeholder="Jane Smith"
          />
        </div>
        <div>
          <label className={labelCls} htmlFor="email">Business email *</label>
          <input
            id="email"
            type="email"
            required
            value={values.email}
            onChange={(e) => update('email', e.target.value)}
            className={inputCls}
            placeholder="jane@company.com"
          />
        </div>
        <div>
          <label className={labelCls} htmlFor="company">Company</label>
          <input
            id="company"
            type="text"
            value={values.company}
            onChange={(e) => update('company', e.target.value)}
            className={inputCls}
            placeholder="Company name"
          />
        </div>
        <div>
          <label className={labelCls} htmlFor="country">Country / region</label>
          <input
            id="country"
            type="text"
            value={values.country}
            onChange={(e) => update('country', e.target.value)}
            className={inputCls}
            placeholder="United States"
          />
        </div>
        <div>
          <label className={labelCls} htmlFor="phone">Phone / WhatsApp</label>
          <input
            id="phone"
            type="text"
            value={values.phone}
            onChange={(e) => update('phone', e.target.value)}
            className={inputCls}
            placeholder="+1 555 0100"
          />
        </div>
        <div>
          <label className={labelCls} htmlFor="product_category">Product category</label>
          <select
            id="product_category"
            value={values.product_category}
            onChange={(e) => update('product_category', e.target.value)}
            className={inputCls}
          >
            <option value="">Select a category</option>
            {CATEGORY_OPTIONS.map((c) => (
              <option key={c.value} value={c.value}>{c.label}</option>
            ))}
          </select>
        </div>

        <div className="md:col-span-2">
          <label className={labelCls} htmlFor="product_description">Product description *</label>
          <textarea
            id="product_description"
            required
            rows={4}
            value={values.product_description}
            onChange={(e) => update('product_description', e.target.value)}
            className={inputCls}
            placeholder="What product would you like to source? Include materials, specs, certifications, packaging needs, etc."
          />
        </div>

        <div>
          <label className={labelCls} htmlFor="target_quantity">Target quantity</label>
          <input
            id="target_quantity"
            type="text"
            value={values.target_quantity}
            onChange={(e) => update('target_quantity', e.target.value)}
            className={inputCls}
            placeholder="e.g. 5,000 pcs / month"
          />
        </div>
        <div>
          <label className={labelCls} htmlFor="target_budget">Target unit price / budget</label>
          <input
            id="target_budget"
            type="text"
            value={values.target_budget}
            onChange={(e) => update('target_budget', e.target.value)}
            className={inputCls}
            placeholder="e.g. USD 4–6 / unit"
          />
        </div>

        <div>
          <label className={labelCls} htmlFor="timeline">Timeline</label>
          <select
            id="timeline"
            value={values.timeline}
            onChange={(e) => update('timeline', e.target.value)}
            className={inputCls}
          >
            <option value="">Select timeline</option>
            {TIMELINE_OPTIONS.map((t) => (
              <option key={t.value} value={t.value}>{t.label}</option>
            ))}
          </select>
        </div>

        <div className="md:col-span-2">
          <span className={labelCls}>Services you are interested in</span>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
            {SERVICE_OPTIONS.map((s) => {
              const checked = values.services_needed.includes(s.value)
              return (
                <label
                  key={s.value}
                  className={`flex items-center gap-2.5 rounded-md border px-3 py-2.5 text-sm cursor-pointer transition ${
                    checked
                      ? 'border-brand-blue bg-brand-blue/5 text-brand-navy'
                      : 'border-brand-border bg-white text-brand-muted hover:border-slate-300'
                  }`}
                >
                  <input
                    type="checkbox"
                    checked={checked}
                    onChange={() => toggleService(s.value)}
                    className="h-4 w-4 rounded border-slate-300 text-brand-blue focus:ring-brand-blue"
                  />
                  <span className="font-medium">{s.label}</span>
                </label>
              )
            })}
          </div>
        </div>
      </div>

      {error && (
        <div className="mt-5 flex items-start gap-2 rounded-md border border-red-200 bg-red-50 p-3">
          <AlertCircle className="h-5 w-5 text-red-600 flex-shrink-0 mt-0.5" />
          <p className="text-sm text-red-700">{error}</p>
        </div>
      )}

      <div className="mt-6 flex flex-col sm:flex-row sm:items-center gap-3">
        <button
          type="submit"
          disabled={status === 'submitting'}
          className="inline-flex items-center justify-center rounded-md bg-brand-navy px-6 py-3 text-sm font-semibold text-white hover:bg-brand-blue disabled:opacity-60 disabled:cursor-not-allowed transition"
        >
          {status === 'submitting' ? (
            <>
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              Submitting…
            </>
          ) : (
            'Get a Free Sourcing Quote'
          )}
        </button>
        <p className="text-xs text-brand-muted">
          We reply within 1 business day. Your information stays confidential.
        </p>
      </div>
    </form>
  )
}
