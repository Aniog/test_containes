import { useState } from 'react'
import { CheckCircle2, AlertCircle, Loader2 } from 'lucide-react'
import { submitSourcingInquiry } from '@/api/inquiries.js'

const SERVICE_OPTIONS = [
  { value: 'supplier_sourcing', label: 'Supplier Sourcing' },
  { value: 'factory_verification', label: 'Factory Verification' },
  { value: 'quality_inspection', label: 'Quality Inspection' },
  { value: 'production_follow_up', label: 'Production Follow-up' },
  { value: 'shipping_logistics', label: 'Shipping & Logistics' },
  { value: 'sample_consolidation', label: 'Sample Consolidation' },
  { value: 'other', label: 'Other' },
]

const PRODUCT_CATEGORIES = [
  'Consumer Electronics & Accessories',
  'Home & Kitchen Products',
  'Apparel, Textiles & Accessories',
  'Beauty, Personal Care & Cosmetics',
  'Industrial Parts & Components',
  'Packaging & Print',
  'Sporting & Outdoor Goods',
  'Tools & Hardware',
  'Furniture & Home Decor',
  'Other / Not Sure',
]

const emptyForm = {
  full_name: '',
  company_name: '',
  email: '',
  phone: '',
  country: '',
  product_category: '',
  product_description: '',
  target_quantity: '',
  target_unit_price: '',
  services_needed: [],
  destination_port: '',
  additional_notes: '',
}

function validate(values) {
  const errors = {}
  if (!values.full_name.trim()) errors.full_name = 'Please enter your name.'
  if (!values.email.trim()) errors.email = 'Please enter your email.'
  else if (!/^\S+@\S+\.\S+$/.test(values.email)) errors.email = 'Please enter a valid email address.'
  if (!values.product_description.trim() || values.product_description.trim().length < 10) {
    errors.product_description = 'Please describe what you want to source (at least 10 characters).'
  }
  return errors
}

export default function InquiryForm({ variant = 'panel', compact = false }) {
  const [values, setValues] = useState(emptyForm)
  const [errors, setErrors] = useState({})
  const [status, setStatus] = useState('idle') // idle | submitting | success | error
  const [errorMessage, setErrorMessage] = useState('')

  const update = (field, value) => {
    setValues((v) => ({ ...v, [field]: value }))
    if (errors[field]) setErrors((e) => ({ ...e, [field]: undefined }))
  }

  const toggleService = (value) => {
    setValues((v) => {
      const current = v.services_needed
      const next = current.includes(value) ? current.filter((s) => s !== value) : [...current, value]
      return { ...v, services_needed: next }
    })
  }

  const onSubmit = async (e) => {
    e.preventDefault()
    setErrorMessage('')
    const v = validate(values)
    setErrors(v)
    if (Object.keys(v).length > 0) return

    setStatus('submitting')
    try {
      await submitSourcingInquiry(values)
      setStatus('success')
      setValues(emptyForm)
    } catch (err) {
      setErrorMessage(err.message || 'Submission failed. Please try again.')
      setStatus('error')
    }
  }

  const isPanel = variant === 'panel'
  const wrapperCls = isPanel
    ? 'rounded-2xl border border-slate-200 bg-white p-6 shadow-sm md:p-8'
    : 'rounded-2xl bg-white p-6 shadow-xl md:p-10'

  return (
    <div className={wrapperCls}>
      {status === 'success' ? (
        <div className="flex flex-col items-center text-center" role="status">
          <div className="flex h-14 w-14 items-center justify-center rounded-full bg-emerald-50 text-emerald-600">
            <CheckCircle2 className="h-7 w-7" />
          </div>
          <h3 className="mt-5 text-xl font-semibold text-brand-ink">Your inquiry is in.</h3>
          <p className="mt-2 max-w-md text-sm text-slate-600">
            Thanks for reaching out. A sourcing manager will review your request and reply within one business day with a shortlist of suppliers and indicative pricing.
          </p>
          <button
            type="button"
            onClick={() => setStatus('idle')}
            className="mt-6 text-sm font-semibold text-brand-accent hover:text-brand-accent-dark"
          >
            Submit another request
          </button>
        </div>
      ) : (
        <form onSubmit={onSubmit} noValidate>
          {!compact && (
            <div className="mb-6">
              <h3 className="text-xl font-semibold text-brand-ink md:text-2xl">Get a free sourcing quote</h3>
              <p className="mt-1 text-sm text-slate-600">
                Tell us about your product and requirements. We will reply within 24 hours.
              </p>
            </div>
          )}

          <div className="grid gap-4 md:grid-cols-2">
            <Field
              label="Full name *"
              error={errors.full_name}
              input={
                <input
                  type="text"
                  className={inputCls(errors.full_name)}
                  value={values.full_name}
                  onChange={(e) => update('full_name', e.target.value)}
                  placeholder="Jane Smith"
                  autoComplete="name"
                />
              }
            />
            <Field
              label="Company name"
              input={
                <input
                  type="text"
                  className={inputCls()}
                  value={values.company_name}
                  onChange={(e) => update('company_name', e.target.value)}
                  placeholder="Acme Trading Co."
                  autoComplete="organization"
                />
              }
            />
            <Field
              label="Business email *"
              error={errors.email}
              input={
                <input
                  type="email"
                  className={inputCls(errors.email)}
                  value={values.email}
                  onChange={(e) => update('email', e.target.value)}
                  placeholder="you@company.com"
                  autoComplete="email"
                />
              }
            />
            <Field
              label="Phone / WhatsApp"
              input={
                <input
                  type="text"
                  className={inputCls()}
                  value={values.phone}
                  onChange={(e) => update('phone', e.target.value)}
                  placeholder="+1 555 0123"
                  autoComplete="tel"
                />
              }
            />
            <Field
              label="Country / Region"
              input={
                <input
                  type="text"
                  className={inputCls()}
                  value={values.country}
                  onChange={(e) => update('country', e.target.value)}
                  placeholder="e.g. United States"
                  autoComplete="country-name"
                />
              }
            />
            <Field
              label="Product category"
              input={
                <select
                  className={inputCls()}
                  value={values.product_category}
                  onChange={(e) => update('product_category', e.target.value)}
                >
                  <option value="">Select a category</option>
                  {PRODUCT_CATEGORIES.map((c) => (
                    <option key={c} value={c}>{c}</option>
                  ))}
                </select>
              }
            />
          </div>

          <div className="mt-4">
            <Field
              label="Product description *"
              hint="Materials, key specs, target use, reference links, etc."
              error={errors.product_description}
              input={
                <textarea
                  rows={4}
                  className={inputCls(errors.product_description)}
                  value={values.product_description}
                  onChange={(e) => update('product_description', e.target.value)}
                  placeholder="Example: 500ml double-wall stainless steel water bottle, powder-coated, with leak-proof lid. We need 5,000 units for our Amazon FBA."
                />
              }
            />
          </div>

          <div className="mt-4 grid gap-4 md:grid-cols-3">
            <Field
              label="Estimated quantity"
              input={
                <input
                  type="text"
                  className={inputCls()}
                  value={values.target_quantity}
                  onChange={(e) => update('target_quantity', e.target.value)}
                  placeholder="e.g. 5,000 units"
                />
              }
            />
            <Field
              label="Target unit price (USD)"
              input={
                <input
                  type="text"
                  className={inputCls()}
                  value={values.target_unit_price}
                  onChange={(e) => update('target_unit_price', e.target.value)}
                  placeholder="e.g. $3.50 - $4.00"
                />
              }
            />
            <Field
              label="Destination port / city"
              input={
                <input
                  type="text"
                  className={inputCls()}
                  value={values.destination_port}
                  onChange={(e) => update('destination_port', e.target.value)}
                  placeholder="e.g. Los Angeles, USA"
                />
              }
            />
          </div>

          <div className="mt-4">
            <div className="text-sm font-medium text-brand-ink">Which services do you need?</div>
            <div className="mt-2 grid grid-cols-1 gap-2 sm:grid-cols-2 md:grid-cols-3">
              {SERVICE_OPTIONS.map((opt) => {
                const checked = values.services_needed.includes(opt.value)
                return (
                  <label
                    key={opt.value}
                    className={`flex cursor-pointer items-center gap-2 rounded-md border px-3 py-2 text-sm transition-colors ${
                      checked
                        ? 'border-brand-accent bg-brand-accent-soft text-brand-ink'
                        : 'border-slate-200 bg-white text-slate-700 hover:border-slate-300'
                    }`}
                  >
                    <input
                      type="checkbox"
                      className="h-4 w-4 rounded border-slate-300 text-brand-accent focus:ring-brand-accent"
                      checked={checked}
                      onChange={() => toggleService(opt.value)}
                    />
                    <span>{opt.label}</span>
                  </label>
                )
              })}
            </div>
          </div>

          <div className="mt-4">
            <Field
              label="Additional notes"
              hint="Optional — timeline, certifications, packaging, etc."
              input={
                <textarea
                  rows={3}
                  className={inputCls()}
                  value={values.additional_notes}
                  onChange={(e) => update('additional_notes', e.target.value)}
                  placeholder="Anything else we should know"
                />
              }
            />
          </div>

          {status === 'error' && errorMessage && (
            <div className="mt-5 flex items-start gap-2 rounded-md border border-red-200 bg-red-50 p-3 text-sm text-red-700">
              <AlertCircle className="mt-0.5 h-4 w-4 flex-shrink-0" />
              <span>{errorMessage}</span>
            </div>
          )}

          <div className="mt-6 flex flex-col items-stretch gap-3 sm:flex-row sm:items-center sm:justify-between">
            <p className="text-xs text-slate-500">
              We will only use your information to reply to your inquiry. No spam, no resale.
            </p>
            <button
              type="submit"
              disabled={status === 'submitting'}
              className="btn-primary sm:w-auto"
            >
              {status === 'submitting' ? (
                <>
                  <Loader2 className="h-4 w-4 animate-spin" />
                  Sending...
                </>
              ) : (
                'Get a Free Sourcing Quote'
              )}
            </button>
          </div>
        </form>
      )}
    </div>
  )
}

function inputCls(error) {
  return `w-full rounded-md border bg-white px-3 py-2.5 text-sm text-brand-ink placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-brand-accent/30 ${
    error ? 'border-red-300 focus:border-red-400' : 'border-slate-300 focus:border-brand-accent'
  }`
}

function Field({ label, hint, error, input }) {
  return (
    <label className="block">
      <span className="block text-sm font-medium text-brand-ink">{label}</span>
      <div className="mt-1.5">{input}</div>
      {hint && !error && <span className="mt-1 block text-xs text-slate-500">{hint}</span>}
      {error && <span className="mt-1 block text-xs text-red-600">{error}</span>}
    </label>
  )
}
