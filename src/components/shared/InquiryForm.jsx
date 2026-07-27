import { useState } from 'react'
import { DataClient } from '@strikingly/sdk'
import { STRK_PROJECT_URL, STRK_PROJECT_ANON_KEY } from '@/config.jsx'
import { SERVICES } from '@/content'
import { CheckCircle2, Loader2, AlertCircle } from 'lucide-react'
import { cn } from '@/lib/utils'

const client = new DataClient(STRK_PROJECT_URL, STRK_PROJECT_ANON_KEY)

const SERVICE_OPTIONS = SERVICES.map((s) => s.title)

const getErrorMessage = (response, error) => {
  if (Array.isArray(response?.errors) && response.errors.length > 0) {
    return response.errors.join(', ')
  }
  return error?.message || 'Submission failed. Please try again.'
}

const EMPTY = {
  name: '',
  email: '',
  company: '',
  country: '',
  phone: '',
  product_category: '',
  estimated_quantity: '',
  services_needed: [],
  message: '',
}

export default function InquiryForm({ compact = false }) {
  const [values, setValues] = useState(EMPTY)
  const [status, setStatus] = useState('idle')
  const [error, setError] = useState(null)

  const onChange = (e) => {
    const { name, value, type, checked } = e.target
    if (name === 'services_needed') {
      setValues((v) => ({
        ...v,
        services_needed: checked
          ? [...v.services_needed, value]
          : v.services_needed.filter((s) => s !== value),
      }))
    } else {
      setValues((v) => ({ ...v, [name]: value }))
    }
  }

  const validate = (v) => {
    if (!v.name.trim()) return 'Please enter your name.'
    if (!v.email.trim()) return 'Please enter your email.'
    if (!/^\S+@\S+\.\S+$/.test(v.email)) return 'Please enter a valid email.'
    if (!v.message.trim()) return 'Please describe what you want to source.'
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
      const { data: response, error: createError } = await client
        .from('SourcingInquiry')
        .insert({
          data: {
            name: values.name.trim(),
            email: values.email.trim(),
            company: values.company.trim(),
            country: values.country.trim(),
            phone: values.phone.trim(),
            product_category: values.product_category.trim(),
            estimated_quantity: values.estimated_quantity.trim(),
            services_needed: values.services_needed,
            message: values.message.trim(),
            status: 'new',
          },
        })
        .select()
        .single()

      if (createError || response?.success === false) {
        throw new Error(getErrorMessage(response, createError))
      }

      setStatus('success')
      setValues(EMPTY)
    } catch (err) {
      console.error('Inquiry submission failed:', err)
      setError(err.message || 'Submission failed. Please try again.')
      setStatus('error')
    }
  }

  if (status === 'success') {
    return (
      <div className="rounded-xl border border-border bg-card p-8 text-center">
        <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-accent/10 text-accent">
          <CheckCircle2 className="h-6 w-6" />
        </div>
        <h3 className="mt-4 text-xl font-bold text-foreground">
          Thank you for your inquiry
        </h3>
        <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
          We have received your request and will reply within one business day
          with the next steps.
        </p>
        <button
          type="button"
          onClick={() => setStatus('idle')}
          className="mt-5 text-sm font-semibold text-primary hover:underline"
        >
          Submit another request
        </button>
      </div>
    )
  }

  const inputClass =
    'w-full rounded-lg border border-input bg-background px-3.5 py-2.5 text-sm text-foreground placeholder:text-muted-foreground/70 focus:border-primary focus:outline-none focus:ring-2 focus:ring-ring/30 transition-colors'
  const labelClass = 'block text-sm font-medium text-foreground mb-1.5'

  return (
    <form
      onSubmit={onSubmit}
      className="rounded-xl border border-border bg-card p-6 md:p-8"
      noValidate
    >
      <div className={cn('grid gap-5', compact ? 'sm:grid-cols-2' : 'sm:grid-cols-2')}>
        <div>
          <label htmlFor="ii-name" className={labelClass}>
            Full name <span className="text-accent">*</span>
          </label>
          <input
            id="ii-name"
            name="name"
            type="text"
            value={values.name}
            onChange={onChange}
            className={inputClass}
            placeholder="Jane Doe"
            required
          />
        </div>
        <div>
          <label htmlFor="ii-email" className={labelClass}>
            Email <span className="text-accent">*</span>
          </label>
          <input
            id="ii-email"
            name="email"
            type="email"
            value={values.email}
            onChange={onChange}
            className={inputClass}
            placeholder="you@company.com"
            required
          />
        </div>
        <div>
          <label htmlFor="ii-company" className={labelClass}>
            Company
          </label>
          <input
            id="ii-company"
            name="company"
            type="text"
            value={values.company}
            onChange={onChange}
            className={inputClass}
            placeholder="Your company"
          />
        </div>
        <div>
          <label htmlFor="ii-country" className={labelClass}>
            Country
          </label>
          <input
            id="ii-country"
            name="country"
            type="text"
            value={values.country}
            onChange={onChange}
            className={inputClass}
            placeholder="United States"
          />
        </div>
        <div>
          <label htmlFor="ii-phone" className={labelClass}>
            Phone / WhatsApp
          </label>
          <input
            id="ii-phone"
            name="phone"
            type="text"
            value={values.phone}
            onChange={onChange}
            className={inputClass}
            placeholder="+1 555 000 0000"
          />
        </div>
        <div>
          <label htmlFor="ii-product" className={labelClass}>
            Product category
          </label>
          <input
            id="ii-product"
            name="product_category"
            type="text"
            value={values.product_category}
            onChange={onChange}
            className={inputClass}
            placeholder="e.g. Bluetooth speakers"
          />
        </div>
      </div>

      <div className="mt-5">
        <label htmlFor="ii-qty" className={labelClass}>
          Estimated quantity
        </label>
        <input
          id="ii-qty"
          name="estimated_quantity"
          type="text"
          value={values.estimated_quantity}
          onChange={onChange}
          className={inputClass}
          placeholder="e.g. 1,000 - 5,000 units"
        />
      </div>

      <div className="mt-5">
        <span className={labelClass}>Services needed</span>
        <div className="flex flex-wrap gap-2">
          {SERVICE_OPTIONS.map((opt) => {
            const checked = values.services_needed.includes(opt)
            return (
              <label
                key={opt}
                className={cn(
                  'cursor-pointer rounded-lg border px-3 py-1.5 text-xs font-medium transition-colors',
                  checked
                    ? 'border-primary bg-primary/5 text-primary'
                    : 'border-border text-muted-foreground hover:border-primary/40 hover:text-foreground',
                )}
              >
                <input
                  type="checkbox"
                  name="services_needed"
                  value={opt}
                  checked={checked}
                  onChange={onChange}
                  className="sr-only"
                />
                {opt}
              </label>
            )
          })}
        </div>
      </div>

      <div className="mt-5">
        <label htmlFor="ii-message" className={labelClass}>
          What do you want to source? <span className="text-accent">*</span>
        </label>
        <textarea
          id="ii-message"
          name="message"
          rows={compact ? 4 : 5}
          value={values.message}
          onChange={onChange}
          className={inputClass}
          placeholder="Describe your product, target price, quality requirements, and timeline."
          required
        />
      </div>

      {error && (
        <div className="mt-5 flex items-start gap-2 rounded-lg border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">
          <AlertCircle className="h-4 w-4 mt-0.5 shrink-0" />
          <span>{error}</span>
        </div>
      )}

      <button
        type="submit"
        disabled={status === 'submitting'}
        className="mt-6 inline-flex h-12 w-full items-center justify-center gap-2 rounded-lg bg-accent px-8 text-base font-semibold text-accent-foreground shadow-sm transition-colors hover:bg-accent/90 disabled:opacity-60"
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
      <p className="mt-3 text-center text-xs text-muted-foreground">
        We reply within one business day. Your information is kept confidential.
      </p>
    </form>
  )
}
