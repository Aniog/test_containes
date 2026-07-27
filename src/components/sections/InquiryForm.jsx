import React from 'react'
import { DataClient } from '@strikingly/sdk'
import { STRK_PROJECT_URL, STRK_PROJECT_ANON_KEY } from '@/config.jsx'
import { services } from '@/data/content'
import { Loader2, CheckCircle2, AlertCircle } from 'lucide-react'

const client = new DataClient(STRK_PROJECT_URL, STRK_PROJECT_ANON_KEY)

const getErrorMessage = (response, error) => {
  if (Array.isArray(response?.errors) && response.errors.length > 0) {
    return response.errors.join(', ')
  }
  return error?.message || 'Submission failed. Please try again.'
}

const serviceOptions = services.map((s) => s.title)

export default function InquiryForm({ compact = false }) {
  const [values, setValues] = React.useState({
    name: '',
    email: '',
    company: '',
    country: '',
    phone: '',
    product_category: '',
    estimated_quantity: '',
    budget: '',
    services_needed: [],
    message: '',
  })
  const [status, setStatus] = React.useState('idle')
  const [error, setError] = React.useState(null)

  const onChange = (e) => {
    const { name, value, type, checked } = e.target
    if (type === 'checkbox') {
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
    if (!v.message.trim()) return 'Please tell us what you want to source.'
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
            budget: values.budget.trim(),
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
      setValues({
        name: '',
        email: '',
        company: '',
        country: '',
        phone: '',
        product_category: '',
        estimated_quantity: '',
        budget: '',
        services_needed: [],
        message: '',
      })
    } catch (err) {
      console.error('Inquiry submission failed:', err)
      setError(err.message || 'Submission failed. Please try again.')
      setStatus('error')
    }
  }

  if (status === 'success') {
    return (
      <div className="rounded-xl border border-border-base bg-white p-8 text-center">
        <CheckCircle2 className="mx-auto h-12 w-12 text-green-600" />
        <h3 className="mt-4 text-xl font-semibold text-ink">
          Thank you — we received your inquiry
        </h3>
        <p className="mt-2 text-sm text-slate-body">
          A sourcing specialist will review your request and respond within one
          business day.
        </p>
        <button
          type="button"
          className="mt-6 inline-flex items-center justify-center rounded-lg border border-primary px-5 py-2.5 text-sm font-semibold text-primary hover:bg-primary hover:text-white transition-colors"
          onClick={() => setStatus('idle')}
        >
          Submit another inquiry
        </button>
      </div>
    )
  }

  const inputClass =
    'w-full rounded-lg border border-border-base bg-white px-4 py-2.5 text-sm text-ink placeholder:text-muted focus:border-primary-accent focus:outline-none focus:ring-2 focus:ring-primary-accent/20'
  const labelClass = 'block text-sm font-medium text-ink mb-1.5'

  return (
    <form
      onSubmit={onSubmit}
      className="rounded-xl border border-border-base bg-white p-6 sm:p-8"
      aria-busy={status === 'submitting'}
    >
      <div className={compact ? 'grid gap-5' : 'grid gap-5 sm:grid-cols-2'}>
        <div>
          <label htmlFor="name" className={labelClass}>
            Full name <span className="text-action">*</span>
          </label>
          <input
            id="name"
            name="name"
            type="text"
            value={values.name}
            onChange={onChange}
            className={inputClass}
            placeholder="Your name"
            required
          />
        </div>
        <div>
          <label htmlFor="email" className={labelClass}>
            Email <span className="text-action">*</span>
          </label>
          <input
            id="email"
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
          <label htmlFor="company" className={labelClass}>
            Company
          </label>
          <input
            id="company"
            name="company"
            type="text"
            value={values.company}
            onChange={onChange}
            className={inputClass}
            placeholder="Company name"
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
            className={inputClass}
            placeholder="Your country"
          />
        </div>
        <div>
          <label htmlFor="phone" className={labelClass}>
            Phone / WhatsApp
          </label>
          <input
            id="phone"
            name="phone"
            type="text"
            value={values.phone}
            onChange={onChange}
            className={inputClass}
            placeholder="Optional"
          />
        </div>
        <div>
          <label htmlFor="product_category" className={labelClass}>
            Product category
          </label>
          <input
            id="product_category"
            name="product_category"
            type="text"
            value={values.product_category}
            onChange={onChange}
            className={inputClass}
            placeholder="e.g. consumer electronics"
          />
        </div>
        <div>
          <label htmlFor="estimated_quantity" className={labelClass}>
            Estimated quantity
          </label>
          <input
            id="estimated_quantity"
            name="estimated_quantity"
            type="text"
            value={values.estimated_quantity}
            onChange={onChange}
            className={inputClass}
            placeholder="e.g. 5,000 units"
          />
        </div>
        <div>
          <label htmlFor="budget" className={labelClass}>
            Target budget
          </label>
          <input
            id="budget"
            name="budget"
            type="text"
            value={values.budget}
            onChange={onChange}
            className={inputClass}
            placeholder="e.g. $20,000–$50,000"
          />
        </div>
      </div>

      <div className="mt-5">
        <span className={labelClass}>Services needed</span>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
          {serviceOptions.map((opt) => (
            <label
              key={opt}
              className="flex items-center gap-2 rounded-lg border border-border-base px-3 py-2 text-sm text-slate-body cursor-pointer hover:bg-surface"
            >
              <input
                type="checkbox"
                name="services_needed"
                value={opt}
                checked={values.services_needed.includes(opt)}
                onChange={onChange}
                className="h-4 w-4 rounded border-border-base text-primary-accent focus:ring-primary-accent"
              />
              <span>{opt}</span>
            </label>
          ))}
        </div>
      </div>

      <div className="mt-5">
        <label htmlFor="message" className={labelClass}>
          What do you want to source? <span className="text-action">*</span>
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          value={values.message}
          onChange={onChange}
          className={inputClass}
          placeholder="Describe your product, target price, quality requirements, and timeline."
          required
        />
      </div>

      {error && (
        <div className="mt-5 flex items-start gap-2 rounded-lg bg-red-50 border border-red-200 px-4 py-3 text-sm text-red-700">
          <AlertCircle className="h-5 w-5 flex-shrink-0 mt-0.5" />
          <span>{error}</span>
        </div>
      )}

      <button
        type="submit"
        disabled={status === 'submitting'}
        className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-lg bg-action px-6 py-3.5 text-base font-semibold text-white hover:bg-action-dark disabled:opacity-60 disabled:cursor-not-allowed transition-colors"
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

      <p className="mt-3 text-center text-xs text-muted">
        We respond within one business day. Your information is kept
        confidential.
      </p>
    </form>
  )
}
