import { useState } from 'react'
import { CheckCircle2, Send, AlertCircle, Loader2 } from 'lucide-react'
import Button from '@/components/ui/Button'
import { submitSourcingInquiry } from '@/api/inquiries'

const productCategories = [
  'Consumer Electronics',
  'Home & Living',
  'Apparel & Textiles',
  'Promotional & Gifts',
  'Hardware & Tools',
  'Beauty & Personal Care',
  'Outdoor & Sports',
  'Packaging & Printing',
  'Other',
]

const services = [
  'Supplier Search',
  'Factory Verification',
  'Quality Inspection',
  'Production Follow-Up',
  'Shipping & Logistics',
  'End-to-End Order Management',
]

const emptyValues = {
  full_name: '',
  company_name: '',
  email: '',
  phone: '',
  country: '',
  product_category: '',
  target_quantity: '',
  service_needed: '',
  description: '',
}

export default function InquiryForm({ compact = false }) {
  const [values, setValues] = useState(emptyValues)
  const [status, setStatus] = useState('idle')
  const [error, setError] = useState(null)

  const handleChange = (e) => {
    const { name, value } = e.target
    setValues((v) => ({ ...v, [name]: value }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setError(null)
    setStatus('submitting')
    try {
      await submitSourcingInquiry(values)
      setStatus('success')
      setValues(emptyValues)
    } catch (err) {
      console.error('Inquiry submission failed:', err)
      setError(err.message || 'Submission failed. Please try again.')
      setStatus('error')
    }
  }

  if (status === 'success') {
    return (
      <div className="rounded-xl border border-slate-200 bg-white p-8 text-center shadow-sm">
        <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-green-100">
          <CheckCircle2 className="h-8 w-8 text-green-600" />
        </div>
        <h3 className="mt-5 text-xl font-bold text-brand-ink">
          Thank you — your request is in.
        </h3>
        <p className="mt-2 text-brand-muted">
          A sourcing coordinator will review your requirements and reply within
          1 business day. Check your inbox for a confirmation.
        </p>
        <button
          type="button"
          onClick={() => setStatus('idle')}
          className="mt-6 text-sm font-semibold text-brand-blue hover:text-brand-blue-600"
        >
          Submit another request
        </button>
      </div>
    )
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-xl border border-slate-200 bg-white p-6 md:p-8 shadow-sm"
    >
      {error && (
        <div className="mb-5 flex items-start gap-3 rounded-lg border border-red-200 bg-red-50 p-4">
          <AlertCircle className="mt-0.5 h-5 w-5 flex-shrink-0 text-red-600" />
          <p className="text-sm text-red-700">{error}</p>
        </div>
      )}

      <div className={compact ? 'grid grid-cols-1 gap-5' : 'grid grid-cols-1 gap-5 md:grid-cols-2'}>
        <Field label="Full name" name="full_name" required>
          <input
            type="text"
            name="full_name"
            required
            value={values.full_name}
            onChange={handleChange}
            placeholder="Jane Doe"
            className={inputClass}
          />
        </Field>
        <Field label="Company name" name="company_name">
          <input
            type="text"
            name="company_name"
            value={values.company_name}
            onChange={handleChange}
            placeholder="Your company"
            className={inputClass}
          />
        </Field>
        <Field label="Email" name="email" required>
          <input
            type="email"
            name="email"
            required
            value={values.email}
            onChange={handleChange}
            placeholder="you@company.com"
            className={inputClass}
          />
        </Field>
        <Field label="Phone / WhatsApp" name="phone">
          <input
            type="tel"
            name="phone"
            value={values.phone}
            onChange={handleChange}
            placeholder="+1 555 000 0000"
            className={inputClass}
          />
        </Field>
        <Field label="Country" name="country" required>
          <input
            type="text"
            name="country"
            required
            value={values.country}
            onChange={handleChange}
            placeholder="United States"
            className={inputClass}
          />
        </Field>
        <Field label="Product category" name="product_category">
          <select
            name="product_category"
            value={values.product_category}
            onChange={handleChange}
            className={inputClass}
          >
            <option value="" disabled>Select a category</option>
            {productCategories.map((c) => (
              <option key={c} value={c}>{c}</option>
            ))}
          </select>
        </Field>
        <Field label="Target order quantity" name="target_quantity">
          <input
            type="text"
            name="target_quantity"
            value={values.target_quantity}
            onChange={handleChange}
            placeholder="e.g. 2,000 units"
            className={inputClass}
          />
        </Field>
        <Field label="Service needed" name="service_needed">
          <select
            name="service_needed"
            value={values.service_needed}
            onChange={handleChange}
            className={inputClass}
          >
            <option value="" disabled>Select a service</option>
            {services.map((s) => (
              <option key={s} value={s}>{s}</option>
            ))}
          </select>
        </Field>
      </div>

      <div className="mt-5">
        <Field label="Product description & requirements" name="description" required>
          <textarea
            name="description"
            required
            rows={compact ? 4 : 5}
            value={values.description}
            onChange={handleChange}
            placeholder="Describe your product, specs, target price, certifications, and timeline."
            className={`${inputClass} resize-y`}
          />
        </Field>
      </div>

      <div className="mt-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <p className="text-xs text-brand-muted">
          By submitting, you agree to be contacted about your sourcing request.
          We never share your information.
        </p>
        <Button
          type="submit"
          size="lg"
          disabled={status === 'submitting'}
          className="w-full sm:w-auto"
        >
          {status === 'submitting' ? (
            <Loader2 className="h-4 w-4 animate-spin" />
          ) : (
            <Send className="h-4 w-4" />
          )}
          {status === 'submitting' ? 'Sending…' : 'Get My Free Quote'}
        </Button>
      </div>
    </form>
  )
}

const inputClass =
  'w-full rounded-lg border border-slate-300 bg-white px-3.5 py-2.5 text-sm text-brand-ink placeholder:text-slate-400 focus:border-brand-blue focus:outline-none focus:ring-2 focus:ring-brand-blue/30'

function Field({ label, required, children }) {
  return (
    <label className="block">
      <span className="mb-1.5 block text-sm font-medium text-brand-ink">
        {label}
        {required && <span className="text-brand-amber"> *</span>}
      </span>
      {children}
    </label>
  )
}
