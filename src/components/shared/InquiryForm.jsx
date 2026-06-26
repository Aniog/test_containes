import { useState } from 'react'
import { ArrowRight, CheckCircle2, AlertCircle } from 'lucide-react'
import Button from '@/components/shared/Button'

const initial = {
  name: '',
  company: '',
  email: '',
  phone: '',
  country: '',
  product: '',
  quantity: '',
  details: '',
}

const requiredFields = ['name', 'email', 'product', 'details']

export default function InquiryForm({ source = 'home', compact = false }) {
  const [values, setValues] = useState(initial)
  const [errors, setErrors] = useState({})
  const [status, setStatus] = useState('idle') // idle | submitting | success | error

  const onChange = (e) => {
    const { name, value } = e.target
    setValues((v) => ({ ...v, [name]: value }))
    setErrors((prev) => ({ ...prev, [name]: undefined }))
  }

  const validate = () => {
    const next = {}
    requiredFields.forEach((field) => {
      if (!values[field] || !String(values[field]).trim()) {
        next[field] = 'This field is required'
      }
    })
    if (values.email && !/^\S+@\S+\.\S+$/.test(values.email)) {
      next.email = 'Please enter a valid email'
    }
    return next
  }

  const onSubmit = async (e) => {
    e.preventDefault()
    const v = validate()
    setErrors(v)
    if (Object.keys(v).length > 0) return

    setStatus('submitting')
    try {
      // Persist locally and simulate submission. Backend integration
      // can replace this with a real API call later.
      await new Promise((resolve) => setTimeout(resolve, 700))
      const submissions = JSON.parse(
        window.localStorage.getItem('ssourcing-inquiries') || '[]',
      )
      submissions.push({
        ...values,
        source,
        submittedAt: new Date().toISOString(),
      })
      window.localStorage.setItem(
        'ssourcing-inquiries',
        JSON.stringify(submissions),
      )
      setStatus('success')
      setValues(initial)
    } catch (err) {
      setStatus('error')
    }
  }

  if (status === 'success') {
    return (
      <div className="bg-white border border-brand-line rounded-xl p-6 md:p-8">
        <div className="flex items-start gap-3">
          <CheckCircle2 className="w-6 h-6 text-brand-success shrink-0 mt-0.5" />
          <div>
            <h3 className="text-lg md:text-xl font-bold text-brand-ink">
              Thanks — your inquiry is in.
            </h3>
            <p className="mt-2 text-sm md:text-base text-brand-muted leading-relaxed">
              A sourcing manager will review your request and reply within one
              business day with a shortlist of factories or follow-up questions.
            </p>
            <button
              type="button"
              onClick={() => setStatus('idle')}
              className="mt-4 text-sm font-semibold text-brand-accent hover:text-brand-accent-2 inline-flex items-center gap-1"
            >
              Submit another inquiry
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    )
  }

  return (
    <form
      onSubmit={onSubmit}
      noValidate
      className="bg-white border border-brand-line rounded-xl p-6 md:p-8 shadow-sm"
    >
      <div className={compact ? 'space-y-4' : 'space-y-5'}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-5">
          <Field
            label="Full name"
            name="name"
            value={values.name}
            onChange={onChange}
            error={errors.name}
            required
            placeholder="Jane Doe"
          />
          <Field
            label="Company"
            name="company"
            value={values.company}
            onChange={onChange}
            placeholder="Your company"
          />
          <Field
            label="Work email"
            name="email"
            type="email"
            value={values.email}
            onChange={onChange}
            error={errors.email}
            required
            placeholder="you@company.com"
          />
          <Field
            label="Phone / WhatsApp"
            name="phone"
            value={values.phone}
            onChange={onChange}
            placeholder="+1 555 000 0000"
          />
          <Field
            label="Country"
            name="country"
            value={values.country}
            onChange={onChange}
            placeholder="United States"
          />
          <Field
            label="Estimated quantity"
            name="quantity"
            value={values.quantity}
            onChange={onChange}
            placeholder="e.g. 2,000 units"
          />
        </div>

        <Field
          label="Product to source"
          name="product"
          value={values.product}
          onChange={onChange}
          error={errors.product}
          required
          placeholder="e.g. Stainless steel insulated bottle, 500ml"
        />

        <TextareaField
          label="Project details"
          name="details"
          value={values.details}
          onChange={onChange}
          error={errors.details}
          required
          placeholder="Specifications, target price, materials, packaging, timeline, or any other requirements."
          rows={compact ? 4 : 5}
        />

        {status === 'error' && (
          <div className="flex items-start gap-2 text-sm text-brand-accent">
            <AlertCircle className="w-4 h-4 mt-0.5" />
            <span>Something went wrong. Please try again.</span>
          </div>
        )}

        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 pt-2">
          <p className="text-xs text-brand-muted leading-relaxed max-w-md">
            By submitting, you agree to be contacted by SSourcing China about
            your sourcing inquiry. We do not share your details with third
            parties.
          </p>
          <Button type="submit" size="lg" disabled={status === 'submitting'}>
            {status === 'submitting' ? 'Sending…' : 'Get a Free Quote'}
          </Button>
        </div>
      </div>
    </form>
  )
}

function Field({
  label,
  name,
  value,
  onChange,
  error,
  type = 'text',
  required,
  placeholder,
}) {
  return (
    <label className="block">
      <span className="block text-xs font-semibold uppercase tracking-wider text-brand-muted mb-1.5">
        {label}
        {required && <span className="text-brand-accent ml-1">*</span>}
      </span>
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        aria-invalid={Boolean(error)}
        className={`w-full h-11 px-3 rounded-md border bg-white text-brand-text placeholder:text-brand-muted/80 focus:outline-none focus:ring-2 focus:ring-brand-accent/30 focus:border-brand-accent ${
          error ? 'border-brand-accent' : 'border-brand-line'
        }`}
      />
      {error && (
        <span className="block text-xs text-brand-accent mt-1">{error}</span>
      )}
    </label>
  )
}

function TextareaField({
  label,
  name,
  value,
  onChange,
  error,
  required,
  placeholder,
  rows = 5,
}) {
  return (
    <label className="block">
      <span className="block text-xs font-semibold uppercase tracking-wider text-brand-muted mb-1.5">
        {label}
        {required && <span className="text-brand-accent ml-1">*</span>}
      </span>
      <textarea
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        rows={rows}
        aria-invalid={Boolean(error)}
        className={`w-full px-3 py-3 rounded-md border bg-white text-brand-text placeholder:text-brand-muted/80 focus:outline-none focus:ring-2 focus:ring-brand-accent/30 focus:border-brand-accent resize-y ${
          error ? 'border-brand-accent' : 'border-brand-line'
        }`}
      />
      {error && (
        <span className="block text-xs text-brand-accent mt-1">{error}</span>
      )}
    </label>
  )
}