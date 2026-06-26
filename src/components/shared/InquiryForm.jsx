import React from 'react'
import { DataClient } from '@strikingly/sdk'
import { STRK_PROJECT_URL, STRK_PROJECT_ANON_KEY } from '@/config.jsx'
import { CheckCircle2, AlertCircle, Loader2, Send } from 'lucide-react'

const client = new DataClient(STRK_PROJECT_URL, STRK_PROJECT_ANON_KEY)

const PRODUCT_CATEGORIES = [
  'Apparel & Textiles',
  'Home & Kitchen',
  'Furniture',
  'Electronics & Accessories',
  'Beauty & Personal Care',
  'Sports & Outdoor',
  'Industrial & Machinery',
  'Toys & Baby',
  'Packaging & Printing',
  'Other',
]

const TIMELINES = [
  'ASAP (within 4 weeks)',
  '1-3 months',
  '3-6 months',
  'Exploring options',
]

const SERVICES = [
  'Supplier sourcing',
  'Factory verification',
  'Quality inspection',
  'Production follow-up',
  'Shipping & logistics',
  'Private label / OEM',
]

const initialValues = {
  full_name: '',
  company: '',
  email: '',
  phone: '',
  country: '',
  product_category: '',
  product_description: '',
  estimated_quantity: '',
  target_timeline: '',
  service_needed: [],
}

export default function InquiryForm({ compact = false }) {
  const [values, setValues] = React.useState(initialValues)
  const [status, setStatus] = React.useState('idle') // idle | submitting | success | error
  const [error, setError] = React.useState(null)

  const onChange = (e) => {
    const { name, value } = e.target
    setValues((v) => ({ ...v, [name]: value }))
  }

  const toggleService = (svc) => {
    setValues((v) => {
      const exists = v.service_needed.includes(svc)
      return {
        ...v,
        service_needed: exists
          ? v.service_needed.filter((s) => s !== svc)
          : [...v.service_needed, svc],
      }
    })
  }

  const validate = (v) => {
    if (!v.full_name.trim()) return 'Please enter your full name.'
    if (!v.email.trim()) return 'Please enter your business email.'
    if (!/^\S+@\S+\.\S+$/.test(v.email)) return 'Please enter a valid email address.'
    if (!v.product_description.trim() || v.product_description.trim().length < 5)
      return 'Please describe the product you want to source (at least a few words).'
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
      data: {
        ...values,
        status: 'new',
        created_at: new Date().toISOString(),
      },
    }

    const { data: response, error: insertError } = await client
      .from('SourcingInquiry')
      .insert(payload)
      .select()
      .single()

    if (insertError || response?.success === false) {
      const msg =
        (Array.isArray(response?.errors) && response.errors.join(', ')) ||
        insertError?.message ||
        'Could not submit your inquiry. Please try again or email us directly.'
      setError(msg)
      setStatus('error')
      return
    }

    setStatus('success')
    setValues(initialValues)
  }

  if (status === 'success') {
    return (
      <div className="rounded-xl border border-slate-200 bg-white p-8 md:p-10 shadow-sm">
        <div className="flex items-start gap-4">
          <span className="flex w-12 h-12 items-center justify-center rounded-full bg-green-100 text-green-700 shrink-0">
            <CheckCircle2 className="w-6 h-6" />
          </span>
          <div>
            <h3 className="text-xl md:text-2xl font-bold text-slate-900 mb-2">
              Thank you. Your sourcing request was received.
            </h3>
            <p className="text-slate-700 leading-relaxed">
              A member of our sourcing team will review your requirements and reply
              within 1 business day with next steps, suggested suppliers and an
              estimated quote. If you do not see our email, please also check your spam folder.
            </p>
            <button
              type="button"
              onClick={() => setStatus('idle')}
              className="mt-5 inline-flex items-center gap-1 text-blue-700 font-semibold hover:text-blue-800"
            >
              Send another inquiry
            </button>
          </div>
        </div>
      </div>
    )
  }

  return (
    <form
      onSubmit={onSubmit}
      className="rounded-xl border border-slate-200 bg-white p-6 md:p-8 shadow-sm"
      aria-busy={status === 'submitting'}
    >
      {!compact && (
        <div className="mb-6">
          <h3 className="text-2xl font-bold text-slate-900">Request a free sourcing quote</h3>
          <p className="text-sm text-slate-600 mt-2">
            Tell us what you need to source. We typically respond within 1 business day.
          </p>
        </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <div>
          <label htmlFor="full_name" className="block text-sm font-semibold text-slate-900 mb-2">
            Full name <span className="text-red-600">*</span>
          </label>
          <input
            id="full_name"
            name="full_name"
            type="text"
            required
            value={values.full_name}
            onChange={onChange}
            placeholder="Jane Smith"
            className="w-full rounded-md border border-slate-300 bg-white px-4 py-3 text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-blue-600"
          />
        </div>
        <div>
          <label htmlFor="company" className="block text-sm font-semibold text-slate-900 mb-2">
            Company
          </label>
          <input
            id="company"
            name="company"
            type="text"
            value={values.company}
            onChange={onChange}
            placeholder="Acme Trading Co."
            className="w-full rounded-md border border-slate-300 bg-white px-4 py-3 text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-blue-600"
          />
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-semibold text-slate-900 mb-2">
            Business email <span className="text-red-600">*</span>
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            value={values.email}
            onChange={onChange}
            placeholder="you@company.com"
            className="w-full rounded-md border border-slate-300 bg-white px-4 py-3 text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-blue-600"
          />
        </div>
        <div>
          <label htmlFor="phone" className="block text-sm font-semibold text-slate-900 mb-2">
            Phone / WhatsApp
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            value={values.phone}
            onChange={onChange}
            placeholder="+1 555 123 4567"
            className="w-full rounded-md border border-slate-300 bg-white px-4 py-3 text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-blue-600"
          />
        </div>

        <div>
          <label htmlFor="country" className="block text-sm font-semibold text-slate-900 mb-2">
            Country / market
          </label>
          <input
            id="country"
            name="country"
            type="text"
            value={values.country}
            onChange={onChange}
            placeholder="United States"
            className="w-full rounded-md border border-slate-300 bg-white px-4 py-3 text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-blue-600"
          />
        </div>
        <div>
          <label htmlFor="product_category" className="block text-sm font-semibold text-slate-900 mb-2">
            Product category
          </label>
          <select
            id="product_category"
            name="product_category"
            value={values.product_category}
            onChange={onChange}
            className="w-full rounded-md border border-slate-300 bg-white px-4 py-3 text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-blue-600"
          >
            <option value="">Select a category</option>
            {PRODUCT_CATEGORIES.map((c) => (
              <option key={c} value={c}>
                {c}
              </option>
            ))}
          </select>
        </div>

        <div className="md:col-span-2">
          <label htmlFor="product_description" className="block text-sm font-semibold text-slate-900 mb-2">
            What do you want to source? <span className="text-red-600">*</span>
          </label>
          <textarea
            id="product_description"
            name="product_description"
            rows={5}
            required
            value={values.product_description}
            onChange={onChange}
            placeholder="Describe the product, materials, target price, reference links, certifications needed, etc."
            className="w-full rounded-md border border-slate-300 bg-white px-4 py-3 text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-blue-600"
          />
        </div>

        <div>
          <label htmlFor="estimated_quantity" className="block text-sm font-semibold text-slate-900 mb-2">
            Estimated quantity
          </label>
          <input
            id="estimated_quantity"
            name="estimated_quantity"
            type="text"
            value={values.estimated_quantity}
            onChange={onChange}
            placeholder="e.g. 2,000 pcs / 1 x 20ft container"
            className="w-full rounded-md border border-slate-300 bg-white px-4 py-3 text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-blue-600"
          />
        </div>
        <div>
          <label htmlFor="target_timeline" className="block text-sm font-semibold text-slate-900 mb-2">
            Target timeline
          </label>
          <select
            id="target_timeline"
            name="target_timeline"
            value={values.target_timeline}
            onChange={onChange}
            className="w-full rounded-md border border-slate-300 bg-white px-4 py-3 text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-blue-600"
          >
            <option value="">Select a timeline</option>
            {TIMELINES.map((t) => (
              <option key={t} value={t}>
                {t}
              </option>
            ))}
          </select>
        </div>

        <div className="md:col-span-2">
          <span className="block text-sm font-semibold text-slate-900 mb-2">Services needed</span>
          <div className="flex flex-wrap gap-2">
            {SERVICES.map((svc) => {
              const active = values.service_needed.includes(svc)
              return (
                <button
                  type="button"
                  key={svc}
                  onClick={() => toggleService(svc)}
                  className={`px-3 py-2 rounded-md border text-sm font-medium transition ${
                    active
                      ? 'bg-blue-700 border-blue-700 text-white'
                      : 'bg-white border-slate-300 text-slate-700 hover:border-blue-700 hover:text-blue-700'
                  }`}
                >
                  {svc}
                </button>
              )
            })}
          </div>
        </div>
      </div>

      {status === 'error' && error && (
        <div className="mt-5 flex items-start gap-2 rounded-md bg-red-50 border border-red-200 px-4 py-3 text-sm text-red-800">
          <AlertCircle className="w-4 h-4 mt-0.5 shrink-0" />
          <span>{error}</span>
        </div>
      )}

      <div className="mt-6 flex flex-col sm:flex-row items-start sm:items-center gap-3">
        <button
          type="submit"
          disabled={status === 'submitting'}
          className="inline-flex items-center justify-center gap-2 rounded-md bg-blue-700 px-6 py-3 text-base font-semibold text-white shadow-sm hover:bg-blue-800 transition disabled:opacity-60 disabled:cursor-not-allowed"
        >
          {status === 'submitting' ? (
            <>
              <Loader2 className="w-4 h-4 animate-spin" /> Sending…
            </>
          ) : (
            <>
              <Send className="w-4 h-4" /> Get a Free Sourcing Quote
            </>
          )}
        </button>
        <p className="text-xs text-slate-500">
          We respect your privacy. Your details are only used to respond to your inquiry.
        </p>
      </div>
    </form>
  )
}
