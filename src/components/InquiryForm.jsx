import React from 'react'
import { CheckCircle2, AlertCircle, Loader2, Send } from 'lucide-react'
import { submitSourcingInquiry } from '../api/inquiries'

const productCategories = [
  'Consumer Electronics',
  'Home & Kitchen',
  'Apparel & Textiles',
  'Industrial & Hardware',
  'Beauty & Personal Care',
  'Sports & Outdoors',
  'Toys & Baby',
  'Promotional & Gifts',
  'Other',
]

const serviceOptions = [
  'Supplier Sourcing',
  'Factory Audit',
  'Sample Management',
  'Quality Inspection',
  'Production Follow-up',
  'Shipping & Logistics',
  'Private Label / OEM',
  'Amazon FBA Prep',
]

const timelineOptions = ['Within 2 weeks', 'Within 1 month', '1-3 months', 'Just exploring']

const initialValues = {
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
}

export default function InquiryForm({ compact = false }) {
  const [values, setValues] = React.useState(initialValues)
  const [status, setStatus] = React.useState('idle') // idle | submitting | success | error
  const [error, setError] = React.useState(null)

  const handleChange = (e) => {
    const { name, value } = e.target
    setValues((v) => ({ ...v, [name]: value }))
  }

  const toggleService = (service) => {
    setValues((v) => {
      const exists = v.services_needed.includes(service)
      return {
        ...v,
        services_needed: exists
          ? v.services_needed.filter((s) => s !== service)
          : [...v.services_needed, service],
      }
    })
  }

  const validate = () => {
    if (!values.full_name.trim()) return 'Please enter your name.'
    if (!values.email.trim()) return 'Please enter your email.'
    if (!/^\S+@\S+\.\S+$/.test(values.email)) return 'Please provide a valid email.'
    if (!values.product_description.trim() || values.product_description.trim().length < 5)
      return 'Please describe what you want to source (at least 5 characters).'
    return null
  }

  const onSubmit = async (e) => {
    e.preventDefault()
    setError(null)
    const v = validate()
    if (v) {
      setError(v)
      setStatus('error')
      return
    }

    setStatus('submitting')
    try {
      await submitSourcingInquiry(values)
      setStatus('success')
      setValues(initialValues)
    } catch (err) {
      setError(err.message || 'Submission failed. Please try again.')
      setStatus('error')
    }
  }

  const inputCls =
    'block w-full rounded-md border border-slate-300 bg-white px-3 py-2.5 text-sm text-slate-900 placeholder-slate-400 shadow-sm focus:border-blue-600 focus:outline-none focus:ring-1 focus:ring-blue-600'
  const labelCls = 'block text-sm font-medium text-slate-800 mb-1.5'

  return (
    <form onSubmit={onSubmit} className="space-y-5" aria-busy={status === 'submitting'}>
      <div className={`grid gap-5 ${compact ? 'sm:grid-cols-2' : 'sm:grid-cols-2'}`}>
        <div>
          <label htmlFor="full_name" className={labelCls}>Full name <span className="text-rose-600">*</span></label>
          <input id="full_name" name="full_name" type="text" value={values.full_name} onChange={handleChange} className={inputCls} placeholder="e.g. John Smith" required />
        </div>
        <div>
          <label htmlFor="company" className={labelCls}>Company</label>
          <input id="company" name="company" type="text" value={values.company} onChange={handleChange} className={inputCls} placeholder="Company or brand" />
        </div>
        <div>
          <label htmlFor="email" className={labelCls}>Business email <span className="text-rose-600">*</span></label>
          <input id="email" name="email" type="email" value={values.email} onChange={handleChange} className={inputCls} placeholder="you@company.com" required />
        </div>
        <div>
          <label htmlFor="phone" className={labelCls}>Phone / WhatsApp</label>
          <input id="phone" name="phone" type="tel" value={values.phone} onChange={handleChange} className={inputCls} placeholder="+1 555 123 4567" />
        </div>
        <div>
          <label htmlFor="country" className={labelCls}>Country</label>
          <input id="country" name="country" type="text" value={values.country} onChange={handleChange} className={inputCls} placeholder="e.g. United States" />
        </div>
        <div>
          <label htmlFor="product_category" className={labelCls}>Product category</label>
          <select id="product_category" name="product_category" value={values.product_category} onChange={handleChange} className={inputCls}>
            <option value="">Select a category</option>
            {productCategories.map((c) => (
              <option key={c} value={c}>{c}</option>
            ))}
          </select>
        </div>
      </div>

      <div>
        <label htmlFor="product_description" className={labelCls}>What do you want to source? <span className="text-rose-600">*</span></label>
        <textarea
          id="product_description"
          name="product_description"
          rows={5}
          value={values.product_description}
          onChange={handleChange}
          className={inputCls}
          placeholder="Describe the product, specifications, materials, packaging, and any reference links."
          required
        />
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="target_quantity" className={labelCls}>Target quantity per SKU</label>
          <input id="target_quantity" name="target_quantity" type="text" value={values.target_quantity} onChange={handleChange} className={inputCls} placeholder="e.g. 2,000 pcs" />
        </div>
        <div>
          <label htmlFor="target_unit_price" className={labelCls}>Target unit price</label>
          <input id="target_unit_price" name="target_unit_price" type="text" value={values.target_unit_price} onChange={handleChange} className={inputCls} placeholder="e.g. USD 3.50 EXW" />
        </div>
      </div>

      <div>
        <span className={labelCls}>Services you are interested in</span>
        <div className="grid gap-2 sm:grid-cols-2">
          {serviceOptions.map((service) => {
            const checked = values.services_needed.includes(service)
            return (
              <label
                key={service}
                className={`flex items-center gap-2 rounded-md border px-3 py-2 cursor-pointer text-sm ${
                  checked ? 'border-blue-600 bg-blue-50 text-blue-800' : 'border-slate-300 bg-white text-slate-700 hover:bg-slate-50'
                }`}
              >
                <input
                  type="checkbox"
                  className="h-4 w-4 rounded border-slate-300 text-blue-700 focus:ring-blue-600"
                  checked={checked}
                  onChange={() => toggleService(service)}
                />
                {service}
              </label>
            )
          })}
        </div>
      </div>

      <div>
        <label htmlFor="timeline" className={labelCls}>When would you like to start?</label>
        <select id="timeline" name="timeline" value={values.timeline} onChange={handleChange} className={inputCls}>
          <option value="">Select a timeline</option>
          {timelineOptions.map((t) => (
            <option key={t} value={t}>{t}</option>
          ))}
        </select>
      </div>

      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 pt-2">
        <p className="text-xs text-slate-500">
          We will reply within 1 business day. Your information stays confidential.
        </p>
        <button
          type="submit"
          disabled={status === 'submitting'}
          className="inline-flex items-center justify-center gap-2 rounded-md bg-blue-700 px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-blue-800 disabled:opacity-60 disabled:cursor-not-allowed"
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

      {status === 'success' && (
        <div role="status" className="flex items-start gap-2 rounded-md border border-emerald-200 bg-emerald-50 p-3 text-sm text-emerald-800">
          <CheckCircle2 className="h-5 w-5 mt-0.5 text-emerald-600 shrink-0" />
          <span>Thanks! Your sourcing inquiry has been received. Our team will reply within 1 business day.</span>
        </div>
      )}

      {status === 'error' && error && (
        <div role="alert" className="flex items-start gap-2 rounded-md border border-rose-200 bg-rose-50 p-3 text-sm text-rose-800">
          <AlertCircle className="h-5 w-5 mt-0.5 text-rose-600 shrink-0" />
          <span>{error}</span>
        </div>
      )}
    </form>
  )
}
