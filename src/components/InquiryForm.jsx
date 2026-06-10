import { useState } from 'react'
import { CheckCircle2, AlertCircle, Loader2 } from 'lucide-react'
import { submitSourcingInquiry } from '../api/inquiries'

const CATEGORIES = [
  'Consumer Electronics',
  'Home & Kitchen',
  'Apparel & Textiles',
  'Furniture',
  'Industrial & Hardware',
  'Beauty & Personal Care',
  'Sports & Outdoors',
  'Toys & Baby',
  'Auto Parts & Accessories',
  'Other',
]

const TIMELINES = [
  'ASAP',
  'Within 1 month',
  '1-3 months',
  '3-6 months',
  'Just exploring',
]

const SERVICES = [
  'Supplier Sourcing',
  'Factory Verification',
  'Sample Management',
  'Price Negotiation',
  'Quality Inspection',
  'Production Follow-up',
  'Shipping & Logistics',
  'Private Label / OEM',
]

const initialState = {
  full_name: '',
  company: '',
  email: '',
  phone: '',
  country: '',
  product_category: '',
  product_description: '',
  target_quantity: '',
  target_unit_price: '',
  services_needed: [],
  timeline: '',
  message: '',
}

export default function InquiryForm({ sourcePage = 'home', compact = false }) {
  const [values, setValues] = useState(initialState)
  const [status, setStatus] = useState('idle')
  const [error, setError] = useState(null)

  const onChange = (e) => {
    const { name, value } = e.target
    setValues((v) => ({ ...v, [name]: value }))
  }

  const toggleService = (service) => {
    setValues((v) => {
      const has = v.services_needed.includes(service)
      return {
        ...v,
        services_needed: has
          ? v.services_needed.filter((s) => s !== service)
          : [...v.services_needed, service],
      }
    })
  }

  const validate = () => {
    if (!values.full_name.trim()) return 'Please enter your full name.'
    if (!values.email.trim()) return 'Please enter your email.'
    if (!/^\S+@\S+\.\S+$/.test(values.email)) return 'Please enter a valid email.'
    if (!values.product_description.trim() || values.product_description.trim().length < 5)
      return 'Please describe the product you want to source (at least 5 characters).'
    return null
  }

  const onSubmit = async (e) => {
    e.preventDefault()
    setError(null)
    const v = validate()
    if (v) {
      setError(v)
      return
    }
    setStatus('submitting')
    try {
      const payload = {
        ...values,
        source_page: sourcePage,
      }
      // Strip empty strings to keep payload clean (but keep arrays)
      Object.keys(payload).forEach((k) => {
        if (payload[k] === '' || payload[k] === undefined) delete payload[k]
      })
      await submitSourcingInquiry(payload)
      setStatus('success')
      setValues(initialState)
    } catch (err) {
      setError(err.message || 'Something went wrong. Please try again.')
      setStatus('error')
    }
  }

  if (status === 'success') {
    return (
      <div className="rounded-xl border border-ink-200 bg-white p-8 md:p-10 text-center">
        <div className="mx-auto inline-flex h-12 w-12 items-center justify-center rounded-full bg-emerald-50 text-emerald-600">
          <CheckCircle2 className="h-7 w-7" />
        </div>
        <h3 className="mt-4 text-2xl font-semibold text-brand-navy">Thank you — your inquiry was received</h3>
        <p className="mt-2 text-ink-700 max-w-xl mx-auto">
          Our sourcing team will review your requirements and reply with a tailored proposal,
          usually within one business day (GMT+8).
        </p>
        <button
          type="button"
          onClick={() => setStatus('idle')}
          className="mt-6 inline-flex items-center justify-center rounded-md border border-ink-200 bg-white px-5 py-2.5 text-sm font-semibold text-brand-navy hover:bg-surface-muted"
        >
          Submit another inquiry
        </button>
      </div>
    )
  }

  return (
    <form
      onSubmit={onSubmit}
      className="rounded-xl border border-ink-200 bg-white p-6 md:p-8 shadow-sm"
      noValidate
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-5">
        <Field label="Full name" required>
          <input
            name="full_name" type="text" value={values.full_name} onChange={onChange}
            className="input" placeholder="e.g. Marco Rossi"
          />
        </Field>
        <Field label="Company">
          <input
            name="company" type="text" value={values.company} onChange={onChange}
            className="input" placeholder="Your company"
          />
        </Field>

        <Field label="Business email" required>
          <input
            name="email" type="email" value={values.email} onChange={onChange}
            className="input" placeholder="you@company.com"
          />
        </Field>
        <Field label="Phone / WhatsApp">
          <input
            name="phone" type="text" value={values.phone} onChange={onChange}
            className="input" placeholder="+1 555 000 0000"
          />
        </Field>

        <Field label="Country">
          <input
            name="country" type="text" value={values.country} onChange={onChange}
            className="input" placeholder="e.g. United States"
          />
        </Field>
        <Field label="Product category">
          <select name="product_category" value={values.product_category} onChange={onChange} className="input">
            <option value="">Select a category</option>
            {CATEGORIES.map((c) => <option key={c} value={c}>{c}</option>)}
          </select>
        </Field>

        <Field label="Product description" required full>
          <textarea
            name="product_description" rows={compact ? 3 : 4}
            value={values.product_description} onChange={onChange}
            className="input"
            placeholder="Describe the product, key specs, materials, certifications, target market…"
          />
        </Field>

        <Field label="Target quantity">
          <input
            name="target_quantity" type="text" value={values.target_quantity} onChange={onChange}
            className="input" placeholder="e.g. 5,000 units / order"
          />
        </Field>
        <Field label="Target unit price / budget">
          <input
            name="target_unit_price" type="text" value={values.target_unit_price} onChange={onChange}
            className="input" placeholder="e.g. USD 8 – 10 / unit"
          />
        </Field>

        <Field label="Timeline">
          <select name="timeline" value={values.timeline} onChange={onChange} className="input">
            <option value="">Select a timeline</option>
            {TIMELINES.map((t) => <option key={t} value={t}>{t}</option>)}
          </select>
        </Field>

        <Field label="Services needed" full>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
            {SERVICES.map((service) => {
              const checked = values.services_needed.includes(service)
              return (
                <label
                  key={service}
                  className={`flex items-center gap-2.5 rounded-md border px-3 py-2.5 text-sm cursor-pointer transition ${
                    checked
                      ? 'border-brand-blue bg-brand-sky text-brand-navy'
                      : 'border-ink-200 bg-white text-ink-700 hover:bg-surface-muted'
                  }`}
                >
                  <input
                    type="checkbox"
                    className="h-4 w-4 rounded border-ink-200 text-brand-blue focus:ring-brand-blue"
                    checked={checked}
                    onChange={() => toggleService(service)}
                  />
                  <span>{service}</span>
                </label>
              )
            })}
          </div>
        </Field>

        <Field label="Additional notes" full>
          <textarea
            name="message" rows={compact ? 2 : 3}
            value={values.message} onChange={onChange}
            className="input"
            placeholder="Anything else we should know?"
          />
        </Field>
      </div>

      {error && (
        <div className="mt-5 flex items-start gap-2.5 rounded-md border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">
          <AlertCircle className="h-4 w-4 mt-0.5 shrink-0" />
          <span>{error}</span>
        </div>
      )}

      <div className="mt-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
        <p className="text-xs text-ink-500">
          We use your information only to reply to your inquiry. No spam, ever.
        </p>
        <button
          type="submit"
          disabled={status === 'submitting'}
          className="inline-flex items-center justify-center gap-2 rounded-md bg-brand-blue px-6 py-3 text-sm font-semibold text-white hover:bg-brand-blue-600 disabled:opacity-60 disabled:cursor-not-allowed"
        >
          {status === 'submitting' && <Loader2 className="h-4 w-4 animate-spin" />}
          {status === 'submitting' ? 'Sending…' : 'Get a Free Sourcing Quote'}
        </button>
      </div>

      <style>{`
        .input {
          width: 100%;
          border-radius: 0.375rem;
          border: 1px solid #E2E8F0;
          background-color: #FFFFFF;
          padding: 0.625rem 0.75rem;
          color: #0F172A;
          font-size: 0.9rem;
        }
        .input::placeholder { color: #94A3B8; }
        .input:focus {
          outline: none;
          border-color: #1D4ED8;
          box-shadow: 0 0 0 3px rgba(29,78,216,0.15);
        }
        textarea.input { resize: vertical; min-height: 96px; }
      `}</style>
    </form>
  )
}

function Field({ label, required, full, children }) {
  return (
    <div className={full ? 'md:col-span-2' : ''}>
      <label className="block text-sm font-medium text-ink-900 mb-1.5">
        {label}{required && <span className="text-brand-blue"> *</span>}
      </label>
      {children}
    </div>
  )
}
