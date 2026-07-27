import { useState } from 'react'
import { CheckCircle2, Send } from 'lucide-react'
import Button from '@/components/ui/Button'

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

export default function InquiryForm({ compact = false }) {
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
  }

  if (submitted) {
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
          onClick={() => setSubmitted(false)}
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
      <div className={compact ? 'grid grid-cols-1 gap-5' : 'grid grid-cols-1 gap-5 md:grid-cols-2'}>
        <Field label="Full name" required>
          <input
            type="text"
            required
            placeholder="Jane Doe"
            className={inputClass}
          />
        </Field>
        <Field label="Company name">
          <input
            type="text"
            placeholder="Your company"
            className={inputClass}
          />
        </Field>
        <Field label="Email" required>
          <input
            type="email"
            required
            placeholder="you@company.com"
            className={inputClass}
          />
        </Field>
        <Field label="Phone / WhatsApp">
          <input
            type="tel"
            placeholder="+1 555 000 0000"
            className={inputClass}
          />
        </Field>
        <Field label="Country" required>
          <input
            type="text"
            required
            placeholder="United States"
            className={inputClass}
          />
        </Field>
        <Field label="Product category">
          <select className={inputClass} defaultValue="">
            <option value="" disabled>Select a category</option>
            {productCategories.map((c) => (
              <option key={c} value={c}>{c}</option>
            ))}
          </select>
        </Field>
        <Field label="Target order quantity">
          <input
            type="text"
            placeholder="e.g. 2,000 units"
            className={inputClass}
          />
        </Field>
        <Field label="Service needed">
          <select className={inputClass} defaultValue="">
            <option value="" disabled>Select a service</option>
            {services.map((s) => (
              <option key={s} value={s}>{s}</option>
            ))}
          </select>
        </Field>
      </div>

      <div className="mt-5">
        <Field label="Product description & requirements" required>
          <textarea
            required
            rows={compact ? 4 : 5}
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
        <Button type="submit" size="lg" className="w-full sm:w-auto">
          <Send className="h-4 w-4" />
          Get My Free Quote
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
