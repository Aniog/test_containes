import { useState } from 'react'
import { DataClient } from '@strikingly/sdk'
import { STRK_PROJECT_URL, STRK_PROJECT_ANON_KEY } from '@/config.jsx'
import { Loader2, CheckCircle2, AlertCircle } from 'lucide-react'

const client = new DataClient(STRK_PROJECT_URL, STRK_PROJECT_ANON_KEY)

const PRODUCT_CATEGORIES = [
  'Consumer Electronics',
  'Apparel & Textiles',
  'Home & Furniture',
  'Industrial & Hardware',
  'Packaging & Printing',
  'Sports & Outdoor',
  'Kitchen & Dining',
  'Baby & Kids',
  'Eco & Sustainable',
  'Other',
]

const TIMELINES = ['ASAP', '1-3 months', '3-6 months', 'Just exploring']

const SERVICE_OPTIONS = [
  'Supplier Sourcing',
  'Factory Verification',
  'Quality Inspection',
  'Production Follow-Up',
  'Shipping & Logistics',
  'Order Management',
]

const getErrorMessage = (response, error) => {
  if (Array.isArray(response?.errors) && response.errors.length > 0) {
    return response.errors.join(', ')
  }
  return error?.message || 'Submission failed. Please try again.'
}

const inputClass =
  'w-full rounded-lg border border-border bg-white px-3.5 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/30'
const labelClass = 'block text-sm font-medium text-foreground'

export default function InquiryForm() {
  const [values, setValues] = useState({
    name: '',
    email: '',
    company: '',
    country: '',
    phone: '',
    product_category: '',
    order_quantity: '',
    target_price: '',
    timeline: '',
    services_needed: [],
    message: '',
  })
  const [status, setStatus] = useState('idle')
  const [error, setError] = useState(null)

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
    if (!/^\S+@\S+\.\S+$/.test(v.email)) return 'Please enter a valid email address.'
    if (!v.message.trim()) return 'Please describe your product and requirements.'
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
      const payload = {
        data: {
          name: values.name,
          email: values.email,
          company: values.company,
          country: values.country,
          phone: values.phone,
          product_category: values.product_category || undefined,
          order_quantity: values.order_quantity || undefined,
          target_price: values.target_price || undefined,
          timeline: values.timeline || undefined,
          services_needed: values.services_needed,
          message: values.message,
          status: 'new',
        },
      }

      const { data: response, error: createError } = await client
        .from('SourcingInquiry')
        .insert(payload)
        .select()
        .single()

      if (createError || response?.success === false) {
        throw new Error(getErrorMessage(response, createError))
      }

      setStatus('success')
      setValues({
        name: '',
        email: '',
        company: '',
        country: '',
        phone: '',
        product_category: '',
        order_quantity: '',
        target_price: '',
        timeline: '',
        services_needed: [],
        message: '',
      })
    } catch (err) {
      console.error(err)
      setError(err.message || 'Submission failed. Please try again.')
      setStatus('error')
    }
  }

  if (status === 'success') {
    return (
      <div className="rounded-xl border border-border bg-card p-8 text-center shadow-sm">
        <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-success/10">
          <CheckCircle2 className="h-7 w-7 text-success" />
        </div>
        <h3 className="mt-4 text-xl font-bold text-foreground">Request received</h3>
        <p className="mt-2 text-sm text-muted-foreground">
          Thank you. Our sourcing team will review your requirements and reply
          within one business day with next steps.
        </p>
        <button
          type="button"
          onClick={() => setStatus('idle')}
          className="mt-6 inline-flex items-center justify-center rounded-lg border border-border bg-white px-5 py-2.5 text-sm font-semibold text-foreground transition hover:bg-muted"
        >
          Submit another request
        </button>
      </div>
    )
  }

  return (
    <form
      onSubmit={onSubmit}
      className="rounded-xl border border-border bg-card p-6 shadow-sm sm:p-8"
      aria-busy={status === 'submitting'}
    >
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className={labelClass}>
            Full name <span className="text-danger">*</span>
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            value={values.name}
            onChange={onChange}
            className={`mt-1.5 ${inputClass}`}
            placeholder="Jane Doe"
          />
        </div>
        <div>
          <label htmlFor="email" className={labelClass}>
            Email <span className="text-danger">*</span>
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            value={values.email}
            onChange={onChange}
            className={`mt-1.5 ${inputClass}`}
            placeholder="you@company.com"
          />
        </div>
        <div>
          <label htmlFor="company" className={labelClass}>
            Company
          </label>
          <input
            id="company"
            name="company"
            type="text"
            value={values.company}
            onChange={onChange}
            className={`mt-1.5 ${inputClass}`}
            placeholder="Your company"
          />
        </div>
        <div>
          <label htmlFor="country" className={labelClass}>
            Country
          </label>
          <input
            id="country"
            name="country"
            type="text"
            value={values.country}
            onChange={onChange}
            className={`mt-1.5 ${inputClass}`}
            placeholder="United States"
          />
        </div>
        <div>
          <label htmlFor="phone" className={labelClass}>
            Phone
          </label>
          <input
            id="phone"
            name="phone"
            type="text"
            value={values.phone}
            onChange={onChange}
            className={`mt-1.5 ${inputClass}`}
            placeholder="+1 555 000 0000"
          />
        </div>
        <div>
          <label htmlFor="product_category" className={labelClass}>
            Product category
          </label>
          <select
            id="product_category"
            name="product_category"
            value={values.product_category}
            onChange={onChange}
            className={`mt-1.5 ${inputClass}`}
          >
            <option value="">Select a category</option>
            {PRODUCT_CATEGORIES.map((c) => (
              <option key={c} value={c}>
                {c}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label htmlFor="order_quantity" className={labelClass}>
            Estimated order quantity
          </label>
          <input
            id="order_quantity"
            name="order_quantity"
            type="text"
            value={values.order_quantity}
            onChange={onChange}
            className={`mt-1.5 ${inputClass}`}
            placeholder="e.g. 5,000 units"
          />
        </div>
        <div>
          <label htmlFor="target_price" className={labelClass}>
            Target price / budget
          </label>
          <input
            id="target_price"
            name="target_price"
            type="text"
            value={values.target_price}
            onChange={onChange}
            className={`mt-1.5 ${inputClass}`}
            placeholder="e.g. $3.50 / unit"
          />
        </div>
        <div>
          <label htmlFor="timeline" className={labelClass}>
            Timeline
          </label>
          <select
            id="timeline"
            name="timeline"
            value={values.timeline}
            onChange={onChange}
            className={`mt-1.5 ${inputClass}`}
          >
            <option value="">Select a timeline</option>
            {TIMELINES.map((t) => (
              <option key={t} value={t}>
                {t}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className="mt-5">
        <span className={labelClass}>Services you need</span>
        <div className="mt-2 grid grid-cols-2 gap-2 sm:grid-cols-3">
          {SERVICE_OPTIONS.map((s) => (
            <label
              key={s}
              className="flex items-center gap-2 rounded-lg border border-border bg-white px-3 py-2 text-sm text-foreground"
            >
              <input
                type="checkbox"
                name="services_needed"
                value={s}
                checked={values.services_needed.includes(s)}
                onChange={onChange}
                className="h-4 w-4 rounded border-border text-accent focus:ring-accent"
              />
              <span>{s}</span>
            </label>
          ))}
        </div>
      </div>

      <div className="mt-5">
        <label htmlFor="message" className={labelClass}>
          Product & requirements <span className="text-danger">*</span>
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          value={values.message}
          onChange={onChange}
          className={`mt-1.5 ${inputClass}`}
          placeholder="Describe your product, specifications, materials, certifications, and any other details that help us source accurately."
        />
      </div>

      {error && (
        <div className="mt-5 flex items-start gap-2 rounded-lg border border-danger/30 bg-danger/5 p-3 text-sm text-danger">
          <AlertCircle className="mt-0.5 h-4 w-4 shrink-0" />
          <span>{error}</span>
        </div>
      )}

      <button
        type="submit"
        disabled={status === 'submitting'}
        className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-lg bg-cta px-6 py-3 text-base font-semibold text-cta-foreground shadow-sm transition hover:bg-amber-400 disabled:cursor-not-allowed disabled:opacity-70 sm:w-auto"
      >
        {status === 'submitting' ? (
          <>
            <Loader2 className="h-5 w-5 animate-spin" />
            Sending…
          </>
        ) : (
          'Get a Free Sourcing Quote'
        )}
      </button>
      <p className="mt-3 text-xs text-muted-foreground">
        No obligation. We will review your request and reply within one business day.
      </p>
    </form>
  )
}
