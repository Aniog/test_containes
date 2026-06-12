import { useState } from 'react'
import { CheckCircle2, AlertCircle, Loader2, Send } from 'lucide-react'
import { submitInquiry } from '../api/inquiries.js'

const PRODUCT_CATEGORIES = [
  'Consumer Electronics',
  'Home & Kitchen',
  'Apparel & Textiles',
  'Furniture',
  'Industrial & Hardware',
  'Outdoor & Sports',
  'Beauty & Personal Care',
  'Toys & Baby',
  'Auto Parts',
  'Other',
]

const SERVICES = [
  'Supplier Sourcing',
  'Factory Verification',
  'Sample Management',
  'Price Negotiation',
  'Quality Inspection',
  'Production Follow-up',
  'Shipping & Logistics',
  'Customs & Documents',
]

const TIMELINES = [
  'ASAP',
  'Within 1 month',
  '1-3 months',
  '3-6 months',
  'Just exploring',
]

const initialState = {
  name: '',
  company: '',
  email: '',
  phone: '',
  country: '',
  product_category: '',
  product_description: '',
  target_quantity: '',
  target_budget: '',
  services_needed: [],
  timeline: '',
}

export default function InquiryForm({ compact = false }) {
  const [values, setValues] = useState(initialState)
  const [status, setStatus] = useState('idle')
  const [error, setError] = useState(null)

  const onChange = (e) => {
    const { name, value } = e.target
    setValues((v) => ({ ...v, [name]: value }))
  }

  const toggleService = (service) => {
    setValues((v) => ({
      ...v,
      services_needed: v.services_needed.includes(service)
        ? v.services_needed.filter((s) => s !== service)
        : [...v.services_needed, service],
    }))
  }

  const validate = () => {
    if (!values.name.trim()) return 'Please enter your name'
    if (!values.email.trim()) return 'Please enter your email'
    if (!/^\S+@\S+\.\S+$/.test(values.email)) return 'Please enter a valid email'
    if (!values.product_description.trim())
      return 'Please describe the products you want to source'
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
    try {
      await submitInquiry(values)
      setValues(initialState)
      setStatus('success')
    } catch (err2) {
      setError(err2.message || 'Submission failed. Please try again.')
      setStatus('error')
    }
  }

  if (status === 'success') {
    return (
      <div className="bg-green-50 border border-green-200 rounded-lg p-8 text-center">
        <div className="mx-auto w-14 h-14 bg-green-600 rounded-full flex items-center justify-center mb-4">
          <CheckCircle2 className="w-8 h-8 text-white" />
        </div>
        <h3 className="text-2xl font-bold text-green-900 mb-2">
          Thank you. Your inquiry has been received.
        </h3>
        <p className="text-green-800 mb-6">
          One of our sourcing specialists will get back to you within 24 working
          hours with next steps and a free initial quote.
        </p>
        <button
          onClick={() => setStatus('idle')}
          className="inline-flex items-center bg-white border border-green-300 text-green-800 hover:bg-green-100 px-5 py-2.5 rounded-md font-semibold text-sm"
        >
          Submit another inquiry
        </button>
      </div>
    )
  }

  const inputCls =
    'w-full px-4 py-2.5 bg-white border border-slate-300 rounded-md text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-brand-blue focus:border-brand-blue transition'
  const labelCls = 'block text-sm font-medium text-slate-800 mb-1.5'

  return (
    <form onSubmit={onSubmit} className="space-y-5" noValidate>
      <div className={`grid gap-5 ${compact ? 'grid-cols-1' : 'grid-cols-1 md:grid-cols-2'}`}>
        <div>
          <label className={labelCls} htmlFor="name">
            Full Name <span className="text-red-600">*</span>
          </label>
          <input
            id="name" name="name" type="text" required
            value={values.name} onChange={onChange}
            className={inputCls} placeholder="Jane Smith"
          />
        </div>
        <div>
          <label className={labelCls} htmlFor="company">Company</label>
          <input
            id="company" name="company" type="text"
            value={values.company} onChange={onChange}
            className={inputCls} placeholder="Acme Trading Ltd."
          />
        </div>
      </div>

      <div className={`grid gap-5 ${compact ? 'grid-cols-1' : 'grid-cols-1 md:grid-cols-2'}`}>
        <div>
          <label className={labelCls} htmlFor="email">
            Business Email <span className="text-red-600">*</span>
          </label>
          <input
            id="email" name="email" type="email" required
            value={values.email} onChange={onChange}
            className={inputCls} placeholder="you@company.com"
          />
        </div>
        <div>
          <label className={labelCls} htmlFor="phone">Phone / WhatsApp</label>
          <input
            id="phone" name="phone" type="tel"
            value={values.phone} onChange={onChange}
            className={inputCls} placeholder="+1 555 0100"
          />
        </div>
      </div>

      <div className={`grid gap-5 ${compact ? 'grid-cols-1' : 'grid-cols-1 md:grid-cols-2'}`}>
        <div>
          <label className={labelCls} htmlFor="country">Country of Import</label>
          <input
            id="country" name="country" type="text"
            value={values.country} onChange={onChange}
            className={inputCls} placeholder="United States"
          />
        </div>
        <div>
          <label className={labelCls} htmlFor="product_category">Product Category</label>
          <select
            id="product_category" name="product_category"
            value={values.product_category} onChange={onChange}
            className={inputCls}
          >
            <option value="">Select a category</option>
            {PRODUCT_CATEGORIES.map((c) => (
              <option key={c} value={c}>{c}</option>
            ))}
          </select>
        </div>
      </div>

      <div>
        <label className={labelCls} htmlFor="product_description">
          Product Description <span className="text-red-600">*</span>
        </label>
        <textarea
          id="product_description" name="product_description" rows={4} required
          value={values.product_description} onChange={onChange}
          className={inputCls}
          placeholder="Describe the products, specifications, target market, certifications needed, etc."
        />
      </div>

      <div className={`grid gap-5 ${compact ? 'grid-cols-1' : 'grid-cols-1 md:grid-cols-2'}`}>
        <div>
          <label className={labelCls} htmlFor="target_quantity">Estimated Quantity</label>
          <input
            id="target_quantity" name="target_quantity" type="text"
            value={values.target_quantity} onChange={onChange}
            className={inputCls} placeholder="e.g. 5,000 units"
          />
        </div>
        <div>
          <label className={labelCls} htmlFor="target_budget">Target Unit Price / Budget</label>
          <input
            id="target_budget" name="target_budget" type="text"
            value={values.target_budget} onChange={onChange}
            className={inputCls} placeholder="e.g. USD 8 - 12 / unit"
          />
        </div>
      </div>

      <div>
        <label className={labelCls}>Services Needed</label>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
          {SERVICES.map((service) => {
            const active = values.services_needed.includes(service)
            return (
              <button
                type="button"
                key={service}
                onClick={() => toggleService(service)}
                className={`text-xs font-medium px-3 py-2 rounded-md border transition text-left ${
                  active
                    ? 'bg-brand-blue text-white border-brand-blue'
                    : 'bg-white text-slate-700 border-slate-300 hover:border-brand-blue hover:text-brand-blue'
                }`}
              >
                {service}
              </button>
            )
          })}
        </div>
      </div>

      <div>
        <label className={labelCls} htmlFor="timeline">Project Timeline</label>
        <select
          id="timeline" name="timeline"
          value={values.timeline} onChange={onChange}
          className={inputCls}
        >
          <option value="">Select a timeline</option>
          {TIMELINES.map((t) => <option key={t} value={t}>{t}</option>)}
        </select>
      </div>

      {status === 'error' && error && (
        <div className="flex items-start gap-2 p-3 bg-red-50 border border-red-200 rounded-md text-sm text-red-800">
          <AlertCircle className="w-5 h-5 flex-shrink-0 mt-0.5" />
          <span>{error}</span>
        </div>
      )}

      <button
        type="submit"
        disabled={status === 'submitting'}
        className="inline-flex items-center justify-center gap-2 w-full md:w-auto bg-brand-accent hover:bg-brand-accentDark disabled:opacity-60 disabled:cursor-not-allowed text-white px-7 py-3 rounded-md font-semibold transition shadow-sm"
      >
        {status === 'submitting' ? (
          <>
            <Loader2 className="w-4 h-4 animate-spin" /> Sending...
          </>
        ) : (
          <>
            Get a Free Sourcing Quote <Send className="w-4 h-4" />
          </>
        )}
      </button>

      <p className="text-xs text-slate-500">
        We respond within 24 working hours. Your information is confidential and
        used only to prepare your sourcing proposal.
      </p>
    </form>
  )
}
