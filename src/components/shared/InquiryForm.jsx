import { useState } from 'react'
import { CheckCircle2, Send, AlertCircle, Loader2 } from 'lucide-react'
import { DataClient } from '@strikingly/sdk'
import { STRK_PROJECT_URL, STRK_PROJECT_ANON_KEY } from '@/config.jsx'
import { cn } from '@/lib/utils'

const client = new DataClient(STRK_PROJECT_URL, STRK_PROJECT_ANON_KEY)

const getErrorMessage = (response, error) => {
  if (Array.isArray(response?.errors) && response.errors.length > 0) {
    return response.errors.join(', ')
  }
  return error?.message || 'Something went wrong. Please try again.'
}

const productOptions = [
  'Consumer Electronics',
  'Home & Kitchen',
  'Furniture & Home Decor',
  'Apparel & Textiles',
  'Beauty & Personal Care',
  'Toys & Games',
  'Industrial & Hardware',
  'Packaging & Printing',
  'Other / Multiple categories',
]

const serviceOptions = [
  'Supplier sourcing',
  'Factory verification / audit',
  'Quality control inspection',
  'Production follow-up',
  'Shipping & logistics coordination',
  'End-to-end sourcing management',
]

const budgetOptions = [
  'Under $10,000',
  '$10,000 – $50,000',
  '$50,000 – $200,000',
  'Over $200,000',
  'Not sure yet',
]

const inputClass =
  'w-full rounded-lg border border-line bg-white px-4 py-3 text-ink placeholder:text-slate-400 focus:border-brand-500 focus:outline-none focus:ring-2 focus:ring-brand-500/20'

const InquiryForm = ({ compact = false }) => {
  const [submitted, setSubmitted] = useState(false)
  const [submitting, setSubmitting] = useState(false)
  const [error, setError] = useState(null)
  const [form, setForm] = useState({
    name: '',
    email: '',
    company: '',
    country: '',
    product: '',
    service: '',
    budget: '',
    message: '',
  })

  const update = (field) => (e) => setForm((f) => ({ ...f, [field]: e.target.value }))

  const handleSubmit = async (e) => {
    e.preventDefault()
    setError(null)
    setSubmitting(true)

    const { data: response, error: insertError } = await client
      .from('SourcingInquiry')
      .insert({
        data: {
          name: form.name,
          email: form.email,
          company: form.company,
          country: form.country,
          product: form.product,
          service: form.service,
          budget: form.budget,
          message: form.message,
          status: 'new',
        },
      })
      .select()
      .single()

    if (insertError || response?.success === false) {
      setError(getErrorMessage(response, insertError))
      setSubmitting(false)
      return
    }

    setSubmitting(false)
    setSubmitted(true)
  }

  if (submitted) {
    return (
      <div className="rounded-xl border border-line bg-white p-8 text-center md:p-10">
        <CheckCircle2 className="mx-auto h-12 w-12 text-brand-600" />
        <h3 className="mt-4 text-xl font-bold text-ink md:text-2xl">
          Thank you, {form.name.split(' ')[0] || 'there'} — inquiry received.
        </h3>
        <p className="mx-auto mt-3 max-w-md text-base leading-relaxed text-slate-body">
          A sourcing specialist will review your requirements and reply to{' '}
          <span className="font-medium text-ink">{form.email}</span> within one
          business day with next steps.
        </p>
        <button
          type="button"
          onClick={() => {
            setSubmitted(false)
            setForm({ name: '', email: '', company: '', country: '', product: '', service: '', budget: '', message: '' })
          }}
          className="mt-6 rounded-lg border border-line px-5 py-2.5 text-sm font-semibold text-ink transition-colors hover:bg-paper"
        >
          Submit another inquiry
        </button>
      </div>
    )
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-xl border border-line bg-white p-6 shadow-sm md:p-8"
    >
      <div className={cn('grid gap-5', compact ? 'md:grid-cols-2' : 'sm:grid-cols-2')}>
        <div>
          <label htmlFor="inq-name" className="mb-1.5 block text-sm font-medium text-ink">
            Full name *
          </label>
          <input
            id="inq-name"
            required
            value={form.name}
            onChange={update('name')}
            placeholder="e.g. Sarah Miller"
            className={inputClass}
          />
        </div>
        <div>
          <label htmlFor="inq-email" className="mb-1.5 block text-sm font-medium text-ink">
            Work email *
          </label>
          <input
            id="inq-email"
            type="email"
            required
            value={form.email}
            onChange={update('email')}
            placeholder="you@company.com"
            className={inputClass}
          />
        </div>
        <div>
          <label htmlFor="inq-company" className="mb-1.5 block text-sm font-medium text-ink">
            Company name
          </label>
          <input
            id="inq-company"
            value={form.company}
            onChange={update('company')}
            placeholder="Your company or brand"
            className={inputClass}
          />
        </div>
        <div>
          <label htmlFor="inq-country" className="mb-1.5 block text-sm font-medium text-ink">
            Country / region *
          </label>
          <input
            id="inq-country"
            required
            value={form.country}
            onChange={update('country')}
            placeholder="e.g. United States"
            className={inputClass}
          />
        </div>
        <div>
          <label htmlFor="inq-product" className="mb-1.5 block text-sm font-medium text-ink">
            Product category *
          </label>
          <select
            id="inq-product"
            required
            value={form.product}
            onChange={update('product')}
            className={cn(inputClass, !form.product && 'text-slate-400')}
          >
            <option value="" disabled>
              Select a category
            </option>
            {productOptions.map((opt) => (
              <option key={opt} value={opt}>
                {opt}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label htmlFor="inq-service" className="mb-1.5 block text-sm font-medium text-ink">
            Service needed *
          </label>
          <select
            id="inq-service"
            required
            value={form.service}
            onChange={update('service')}
            className={cn(inputClass, !form.service && 'text-slate-400')}
          >
            <option value="" disabled>
              Select a service
            </option>
            {serviceOptions.map((opt) => (
              <option key={opt} value={opt}>
                {opt}
              </option>
            ))}
          </select>
        </div>
        <div className="sm:col-span-2">
          <label htmlFor="inq-budget" className="mb-1.5 block text-sm font-medium text-ink">
            Estimated order budget
          </label>
          <select
            id="inq-budget"
            value={form.budget}
            onChange={update('budget')}
            className={cn(inputClass, !form.budget && 'text-slate-400')}
          >
            <option value="" disabled>
              Select a range (optional)
            </option>
            {budgetOptions.map((opt) => (
              <option key={opt} value={opt}>
                {opt}
              </option>
            ))}
          </select>
        </div>
        <div className="sm:col-span-2">
          <label htmlFor="inq-message" className="mb-1.5 block text-sm font-medium text-ink">
            Tell us about your product *
          </label>
          <textarea
            id="inq-message"
            required
            rows={compact ? 4 : 5}
            value={form.message}
            onChange={update('message')}
            placeholder="Describe the product, target quantity, quality requirements, destination port, and any links or specifications you have."
            className={inputClass}
          />
        </div>
      </div>

      {error && (
        <div role="alert" className="mt-5 flex items-start gap-3 rounded-lg border border-red-200 bg-red-50 px-4 py-3">
          <AlertCircle className="mt-0.5 h-5 w-5 shrink-0 text-red-600" />
          <p className="text-sm leading-relaxed text-red-800">{error}</p>
        </div>
      )}

      <button
        type="submit"
        disabled={submitting}
        className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-lg bg-brand-600 px-6 py-3 text-base font-semibold text-white transition-colors hover:bg-brand-700 disabled:cursor-not-allowed disabled:opacity-60 sm:w-auto"
      >
        {submitting ? (
          <>
            <Loader2 className="h-5 w-5 animate-spin" /> Sending inquiry…
          </>
        ) : (
          <>
            <Send className="h-5 w-5" /> Get a Free Sourcing Quote
          </>
        )}
      </button>
      <p className="mt-4 text-sm text-slate-500">
        No obligation. We reply within one business day. Your information is only
        used to prepare your quotation.
      </p>
    </form>
  )
}

export default InquiryForm
