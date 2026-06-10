import { useState } from 'react'
import { DataClient } from '@strikingly/sdk'
import { STRK_PROJECT_URL, STRK_PROJECT_ANON_KEY } from '../../config.jsx'
import { CheckCircle2, AlertTriangle, Loader2 } from 'lucide-react'

const client = new DataClient(STRK_PROJECT_URL, STRK_PROJECT_ANON_KEY)

const PRODUCT_CATEGORIES = [
  'Consumer Electronics',
  'Apparel & Textiles',
  'Home & Kitchen',
  'Furniture',
  'Beauty & Personal Care',
  'Industrial & Hardware',
  'Toys & Baby',
  'Sports & Outdoors',
  'Auto Parts & Accessories',
  'Packaging',
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
  'Private Label / OEM',
]

const TIMELINES = [
  'ASAP (within 30 days)',
  '1 - 3 months',
  '3 - 6 months',
  'Just exploring',
]

const initialValues = {
  full_name: '',
  company: '',
  email: '',
  phone: '',
  country: '',
  product_category: '',
  product_description: '',
  target_quantity: '',
  target_budget: '',
  needed_services: [],
  timeline: '',
}

export default function InquiryForm({ sourcePage = 'unknown', compact = false }) {
  const [values, setValues] = useState(initialValues)
  const [status, setStatus] = useState('idle') // idle | submitting | success | error
  const [errorMessage, setErrorMessage] = useState('')

  const handleChange = (e) => {
    const { name, value } = e.target
    setValues((v) => ({ ...v, [name]: value }))
  }

  const toggleService = (service) => {
    setValues((v) => {
      const exists = v.needed_services.includes(service)
      return {
        ...v,
        needed_services: exists
          ? v.needed_services.filter((s) => s !== service)
          : [...v.needed_services, service],
      }
    })
  }

  const validate = () => {
    if (!values.full_name.trim()) return 'Please enter your full name.'
    if (!/^\S+@\S+\.\S+$/.test(values.email)) return 'Please enter a valid business email.'
    if (!values.product_description.trim()) return 'Please describe the product you want to source.'
    return null
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setErrorMessage('')

    const err = validate()
    if (err) {
      setErrorMessage(err)
      setStatus('error')
      return
    }

    setStatus('submitting')

    const payload = {
      data: {
        ...values,
        status: 'new',
        submitted_at: new Date().toISOString(),
        source_page: sourcePage,
      },
    }
    // remove source_page since not in schema
    delete payload.data.source_page

    try {
      const { data: response, error } = await client
        .from('SourcingInquiry')
        .insert(payload)
        .select()
        .single()

      if (error || response?.success === false) {
        const messages = Array.isArray(response?.errors) && response.errors.length
          ? response.errors.join(', ')
          : (error?.message || 'We could not submit your inquiry. Please try again.')
        setErrorMessage(messages)
        setStatus('error')
        return
      }

      setStatus('success')
      setValues(initialValues)
    } catch (err) {
      setErrorMessage(err?.message || 'Network error. Please try again.')
      setStatus('error')
    }
  }

  const inputClass = 'w-full rounded-md border border-slate-300 bg-white px-4 py-3 text-sm text-slate-900 placeholder:text-slate-400 focus:border-slate-900 focus:outline-none focus:ring-2 focus:ring-slate-900/10'
  const labelClass = 'mb-1.5 block text-sm font-medium text-slate-800'

  if (status === 'success') {
    return (
      <div className="rounded-xl border border-emerald-200 bg-emerald-50 p-8 text-center">
        <CheckCircle2 className="mx-auto h-10 w-10 text-emerald-600" />
        <h3 className="mt-4 text-xl font-semibold text-slate-900">Inquiry received</h3>
        <p className="mt-2 text-sm text-slate-700">
          Thanks for reaching out. A member of our sourcing team will reply within 24 working hours with next steps.
        </p>
        <button
          type="button"
          onClick={() => setStatus('idle')}
          className="mt-5 inline-flex items-center gap-2 rounded-md border border-slate-300 bg-white px-4 py-2 text-sm font-semibold text-slate-900 hover:bg-slate-50"
        >
          Submit another inquiry
        </button>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="grid gap-5">
      <div className={compact ? 'grid gap-5' : 'grid gap-5 sm:grid-cols-2'}>
        <div>
          <label htmlFor="full_name" className={labelClass}>Full name *</label>
          <input id="full_name" name="full_name" value={values.full_name} onChange={handleChange} className={inputClass} placeholder="Jane Smith" required />
        </div>
        <div>
          <label htmlFor="company" className={labelClass}>Company</label>
          <input id="company" name="company" value={values.company} onChange={handleChange} className={inputClass} placeholder="Acme Trading Co." />
        </div>
      </div>

      <div className={compact ? 'grid gap-5' : 'grid gap-5 sm:grid-cols-2'}>
        <div>
          <label htmlFor="email" className={labelClass}>Business email *</label>
          <input id="email" name="email" type="email" value={values.email} onChange={handleChange} className={inputClass} placeholder="you@company.com" required />
        </div>
        <div>
          <label htmlFor="phone" className={labelClass}>Phone / WhatsApp</label>
          <input id="phone" name="phone" value={values.phone} onChange={handleChange} className={inputClass} placeholder="+1 555 000 0000" />
        </div>
      </div>

      <div className={compact ? 'grid gap-5' : 'grid gap-5 sm:grid-cols-2'}>
        <div>
          <label htmlFor="country" className={labelClass}>Country</label>
          <input id="country" name="country" value={values.country} onChange={handleChange} className={inputClass} placeholder="United States" />
        </div>
        <div>
          <label htmlFor="product_category" className={labelClass}>Product category</label>
          <select id="product_category" name="product_category" value={values.product_category} onChange={handleChange} className={inputClass}>
            <option value="">Select a category</option>
            {PRODUCT_CATEGORIES.map((c) => <option key={c} value={c}>{c}</option>)}
          </select>
        </div>
      </div>

      <div>
        <label htmlFor="product_description" className={labelClass}>Product description *</label>
        <textarea
          id="product_description"
          name="product_description"
          value={values.product_description}
          onChange={handleChange}
          rows={5}
          className={inputClass}
          placeholder="Describe your product (specs, materials, reference links, target market)..."
          required
        />
      </div>

      <div className={compact ? 'grid gap-5' : 'grid gap-5 sm:grid-cols-2'}>
        <div>
          <label htmlFor="target_quantity" className={labelClass}>Target quantity</label>
          <input id="target_quantity" name="target_quantity" value={values.target_quantity} onChange={handleChange} className={inputClass} placeholder="e.g. 1,000 pcs / month" />
        </div>
        <div>
          <label htmlFor="target_budget" className={labelClass}>Target unit price / budget</label>
          <input id="target_budget" name="target_budget" value={values.target_budget} onChange={handleChange} className={inputClass} placeholder="e.g. USD 4.50 / unit" />
        </div>
      </div>

      <div>
        <span className={labelClass}>Services you need</span>
        <div className="grid grid-cols-1 gap-2 sm:grid-cols-2">
          {SERVICES.map((service) => {
            const checked = values.needed_services.includes(service)
            return (
              <label
                key={service}
                className={`flex cursor-pointer items-center gap-2 rounded-md border px-3 py-2 text-sm ${
                  checked
                    ? 'border-slate-900 bg-slate-900 text-white'
                    : 'border-slate-300 bg-white text-slate-700 hover:border-slate-400'
                }`}
              >
                <input
                  type="checkbox"
                  className="sr-only"
                  checked={checked}
                  onChange={() => toggleService(service)}
                />
                <span className={`flex h-4 w-4 items-center justify-center rounded border ${checked ? 'border-white' : 'border-slate-400'}`}>
                  {checked && <span className="h-2 w-2 rounded-sm bg-white" />}
                </span>
                {service}
              </label>
            )
          })}
        </div>
      </div>

      <div>
        <label htmlFor="timeline" className={labelClass}>Timeline</label>
        <select id="timeline" name="timeline" value={values.timeline} onChange={handleChange} className={inputClass}>
          <option value="">Select a timeline</option>
          {TIMELINES.map((t) => <option key={t} value={t}>{t}</option>)}
        </select>
      </div>

      {status === 'error' && errorMessage && (
        <div className="flex items-start gap-2 rounded-md border border-red-200 bg-red-50 p-3 text-sm text-red-800">
          <AlertTriangle className="h-4 w-4 mt-0.5" />
          <span>{errorMessage}</span>
        </div>
      )}

      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-xs text-slate-500">
          By submitting, you agree to be contacted by our team about your sourcing project. We never share your details.
        </p>
        <button
          type="submit"
          disabled={status === 'submitting'}
          className="inline-flex items-center justify-center gap-2 rounded-md bg-red-600 px-6 py-3 text-sm font-semibold text-white hover:bg-red-700 disabled:cursor-not-allowed disabled:opacity-70 transition-colors"
        >
          {status === 'submitting' && <Loader2 className="h-4 w-4 animate-spin" />}
          {status === 'submitting' ? 'Sending…' : 'Get a Free Sourcing Quote'}
        </button>
      </div>
    </form>
  )
}
