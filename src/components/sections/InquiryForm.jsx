import { useState } from 'react'
import { STRK_PROJECT_URL, STRK_PROJECT_ANON_KEY } from '../../config.jsx'
import { CheckCircle2, AlertCircle, Loader2 } from 'lucide-react'

async function submitInquiry(payload) {
  const res = await fetch(`${STRK_PROJECT_URL}/SourcingInquiry`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      apikey: STRK_PROJECT_ANON_KEY,
      Authorization: `Bearer ${STRK_PROJECT_ANON_KEY}`,
    },
    body: JSON.stringify({ data: payload }),
  })
  let body = null
  try { body = await res.json() } catch { /* non-JSON */ }
  return { ok: res.ok, status: res.status, body }
}

const categories = [
  'Consumer Electronics',
  'Home & Kitchen',
  'Apparel & Textiles',
  'Furniture',
  'Industrial & Machinery',
  'Beauty & Personal Care',
  'Sports & Outdoor',
  'Toys & Baby',
  'Auto Parts & Accessories',
  'Other',
]

const services = [
  'Supplier sourcing',
  'Factory verification',
  'Sample management',
  'Price negotiation',
  'Quality inspection',
  'Production follow-up',
  'Shipping & logistics',
  'Other',
]

const timelines = ['ASAP (within 2 weeks)', '1-2 months', '2-4 months', 'Just exploring']

const initialValues = {
  full_name: '',
  company_name: '',
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
  const [values, setValues] = useState(initialValues)
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

  const validate = (v) => {
    if (!v.full_name.trim()) return 'Please enter your full name.'
    if (!v.email.trim()) return 'Please enter your email address.'
    if (!/^\S+@\S+\.\S+$/.test(v.email)) return 'Please enter a valid email address.'
    if (!v.product_description.trim() || v.product_description.trim().length < 5) {
      return 'Please describe the product you would like to source (at least a few words).'
    }
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
      ...values,
      status: 'new',
      created_at: new Date().toISOString(),
    }
    // Strip empty optional enum/array fields so the server doesn't reject them.
    if (!payload.product_category) delete payload.product_category
    if (!payload.timeline) delete payload.timeline
    if (!payload.services_needed || payload.services_needed.length === 0) {
      delete payload.services_needed
    }
    Object.keys(payload).forEach((k) => {
      if (payload[k] === '' || payload[k] == null) delete payload[k]
    })

    const { ok, body } = await submitInquiry(payload)

    if (!ok || (body && body.success === false)) {
      const messages =
        body && Array.isArray(body.errors) && body.errors.length > 0
          ? body.errors.join(', ')
          : 'Submission failed. Please try again or email us directly.'
      setError(messages)
      setStatus('error')
      return
    }

    setStatus('success')
    setValues(initialValues)
  }

  if (status === 'success') {
    return (
      <div className="rounded-2xl border border-emerald-200 bg-emerald-50 p-8 text-center">
        <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-emerald-100 text-emerald-700">
          <CheckCircle2 className="h-6 w-6" />
        </div>
        <h3 className="mt-4 text-xl font-semibold text-slate-900">Thanks — we have your request</h3>
        <p className="mt-2 text-sm text-slate-700">
          A sourcing manager will review your inquiry and reply by email within one business day.
          You can also reach us at <a className="font-semibold text-red-600 hover:underline" href="mailto:hello@ssourcingchina.com">hello@ssourcingchina.com</a>.
        </p>
        <button
          type="button"
          onClick={() => setStatus('idle')}
          className="mt-6 inline-flex items-center gap-2 rounded-md border border-slate-300 bg-white px-4 py-2 text-sm font-semibold text-slate-900 hover:bg-slate-50"
        >
          Send another inquiry
        </button>
      </div>
    )
  }

  return (
    <form
      onSubmit={onSubmit}
      noValidate
      className="grid gap-5"
      aria-busy={status === 'submitting'}
    >
      <div className="grid gap-5 md:grid-cols-2">
        <Field label="Full name *" htmlFor="full_name">
          <input
            id="full_name"
            name="full_name"
            type="text"
            required
            value={values.full_name}
            onChange={onChange}
            placeholder="Your name"
            className={inputCls}
          />
        </Field>
        <Field label="Company name" htmlFor="company_name">
          <input
            id="company_name"
            name="company_name"
            type="text"
            value={values.company_name}
            onChange={onChange}
            placeholder="Your company or brand"
            className={inputCls}
          />
        </Field>
      </div>

      <div className="grid gap-5 md:grid-cols-2">
        <Field label="Business email *" htmlFor="email">
          <input
            id="email"
            name="email"
            type="email"
            required
            value={values.email}
            onChange={onChange}
            placeholder="you@company.com"
            className={inputCls}
          />
        </Field>
        <Field label="Phone (WhatsApp / WeChat)" htmlFor="phone">
          <input
            id="phone"
            name="phone"
            type="text"
            value={values.phone}
            onChange={onChange}
            placeholder="+1 555 000 0000"
            className={inputCls}
          />
        </Field>
      </div>

      <div className="grid gap-5 md:grid-cols-2">
        <Field label="Country" htmlFor="country">
          <input
            id="country"
            name="country"
            type="text"
            value={values.country}
            onChange={onChange}
            placeholder="e.g. United States"
            className={inputCls}
          />
        </Field>
        <Field label="Product category" htmlFor="product_category">
          <select
            id="product_category"
            name="product_category"
            value={values.product_category}
            onChange={onChange}
            className={inputCls}
          >
            <option value="">Select a category</option>
            {categories.map((c) => <option key={c} value={c}>{c}</option>)}
          </select>
        </Field>
      </div>

      <Field label="Describe the product *" htmlFor="product_description" hint="Specs, materials, certifications, target price if known, reference links.">
        <textarea
          id="product_description"
          name="product_description"
          required
          rows={compact ? 4 : 6}
          value={values.product_description}
          onChange={onChange}
          placeholder="Example: Stainless steel kitchen scale, 5kg capacity, USB-C rechargeable, custom logo, target FOB price USD 6.50…"
          className={inputCls}
        />
      </Field>

      <div className="grid gap-5 md:grid-cols-2">
        <Field label="Target quantity" htmlFor="target_quantity">
          <input
            id="target_quantity"
            name="target_quantity"
            type="text"
            value={values.target_quantity}
            onChange={onChange}
            placeholder="e.g. 2,000 units / month"
            className={inputCls}
          />
        </Field>
        <Field label="Target price / budget" htmlFor="target_budget">
          <input
            id="target_budget"
            name="target_budget"
            type="text"
            value={values.target_budget}
            onChange={onChange}
            placeholder="e.g. FOB USD 6.50 per unit"
            className={inputCls}
          />
        </Field>
      </div>

      <Field label="Services you need" htmlFor="services_needed">
        <div className="flex flex-wrap gap-2">
          {services.map((s) => {
            const active = values.services_needed.includes(s)
            return (
              <button
                key={s}
                type="button"
                onClick={() => toggleService(s)}
                className={`rounded-full border px-3 py-1.5 text-xs font-medium transition-colors ${
                  active
                    ? 'border-red-600 bg-red-600 text-white'
                    : 'border-slate-300 bg-white text-slate-700 hover:bg-slate-50'
                }`}
              >
                {s}
              </button>
            )
          })}
        </div>
      </Field>

      <Field label="Timeline" htmlFor="timeline">
        <select
          id="timeline"
          name="timeline"
          value={values.timeline}
          onChange={onChange}
          className={inputCls}
        >
          <option value="">When do you plan to start?</option>
          {timelines.map((t) => <option key={t} value={t}>{t}</option>)}
        </select>
      </Field>

      {status === 'error' && error && (
        <div className="flex items-start gap-2 rounded-md border border-red-200 bg-red-50 p-3 text-sm text-red-800" role="alert">
          <AlertCircle className="mt-0.5 h-4 w-4 shrink-0" />
          <span>{error}</span>
        </div>
      )}

      <div className="flex flex-col items-start justify-between gap-3 pt-2 sm:flex-row sm:items-center">
        <p className="text-xs text-slate-500">
          By submitting, you agree to be contacted about your sourcing request. We never share your details.
        </p>
        <button
          type="submit"
          disabled={status === 'submitting'}
          className="inline-flex items-center gap-2 rounded-md bg-red-600 px-6 py-3 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-red-700 disabled:cursor-not-allowed disabled:opacity-70"
        >
          {status === 'submitting' && <Loader2 className="h-4 w-4 animate-spin" />}
          {status === 'submitting' ? 'Sending…' : 'Get a Free Sourcing Quote'}
        </button>
      </div>
    </form>
  )
}

const inputCls =
  'w-full rounded-md border border-slate-300 bg-white px-3.5 py-2.5 text-sm text-slate-900 placeholder:text-slate-400 shadow-sm focus:border-red-500 focus:outline-none focus:ring-2 focus:ring-red-500/20'

function Field({ label, htmlFor, hint, children }) {
  return (
    <div>
      <label htmlFor={htmlFor} className="block text-sm font-medium text-slate-800">
        {label}
      </label>
      <div className="mt-1.5">{children}</div>
      {hint && <p className="mt-1.5 text-xs text-slate-500">{hint}</p>}
    </div>
  )
}
