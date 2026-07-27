import { useState } from 'react'
import { AlertCircle, CheckCircle2 } from 'lucide-react'
import { createSourcingInquiry } from '@/api/sourcingInquiries.js'

const inputClass = 'w-full rounded-xl border border-brand-line bg-white px-4 py-3 text-sm text-brand-navy placeholder:text-slate-500 outline-none transition focus:border-brand-blue focus:ring-4 focus:ring-blue-100 disabled:cursor-not-allowed disabled:bg-slate-100 disabled:text-slate-500'
const labelClass = 'text-sm font-semibold text-brand-navy'

export default function InquiryForm({ compact = false }) {
  const [status, setStatus] = useState('idle')
  const [error, setError] = useState('')
  const isSubmitting = status === 'submitting'

  const handleSubmit = (event) => {
    event.preventDefault()
    setStatus('submitting')
    setError('')

    const form = event.currentTarget
    const formData = new FormData(form)

    createSourcingInquiry({
      name: String(formData.get('name') || '').trim(),
      email: String(formData.get('email') || '').trim(),
      company: String(formData.get('company') || '').trim(),
      destination_market: String(formData.get('market') || '').trim(),
      service_needed: String(formData.get('service') || '').trim(),
      estimated_order_quantity: String(formData.get('quantity') || '').trim(),
      product_details: String(formData.get('details') || '').trim(),
      page_source: window.location.pathname,
    })
      .then(() => {
        form.reset()
        setStatus('success')
      })
      .catch((submissionError) => {
        setError(submissionError.message || 'Unable to submit the inquiry. Please try again.')
        setStatus('error')
      })
  }

  return (
    <div className="rounded-2xl border border-brand-line bg-white p-5 text-brand-navy shadow-b2b md:p-8">
      <div className="mb-6">
        <p className="text-xs font-bold uppercase tracking-[0.18em] text-brand-cyan">Sourcing inquiry</p>
        <h2 className="mt-3 text-2xl font-bold tracking-tight md:text-3xl">Get a Free Sourcing Quote</h2>
        <p className="mt-3 text-sm leading-6 text-brand-slate">
          Share the product details you have. SSourcing China will review the request and suggest practical next steps.
        </p>
      </div>

      {status === 'success' && (
        <div className="mb-6 flex gap-3 rounded-xl border border-cyan-200 bg-cyan-50 p-4 text-sm text-brand-navy" role="status">
          <CheckCircle2 className="mt-0.5 h-5 w-5 flex-none text-brand-cyan" />
          <p>
            Thank you. Your sourcing inquiry has been received. We will review the details and respond with practical next steps.
          </p>
        </div>
      )}

      {status === 'error' && error && (
        <div className="mb-6 flex gap-3 rounded-xl border border-red-200 bg-red-50 p-4 text-sm text-red-900" role="alert">
          <AlertCircle className="mt-0.5 h-5 w-5 flex-none text-red-600" />
          <p>{error}</p>
        </div>
      )}

      <form className="grid gap-4" onSubmit={handleSubmit} aria-busy={isSubmitting}>
        <div className="grid gap-4 md:grid-cols-2">
          <label className="grid gap-2">
            <span className={labelClass}>Name</span>
            <input className={inputClass} name="name" placeholder="Your name" required disabled={isSubmitting} />
          </label>
          <label className="grid gap-2">
            <span className={labelClass}>Work email</span>
            <input className={inputClass} name="email" type="email" placeholder="name@company.com" required disabled={isSubmitting} />
          </label>
        </div>

        {!compact && (
          <div className="grid gap-4 md:grid-cols-2">
            <label className="grid gap-2">
              <span className={labelClass}>Company</span>
              <input className={inputClass} name="company" placeholder="Company name" disabled={isSubmitting} />
            </label>
            <label className="grid gap-2">
              <span className={labelClass}>Destination market</span>
              <input className={inputClass} name="market" placeholder="United States, EU, Australia..." disabled={isSubmitting} />
            </label>
          </div>
        )}

        <div className="grid gap-4 md:grid-cols-2">
          <label className="grid gap-2">
            <span className={labelClass}>Service needed</span>
            <select className={inputClass} name="service" defaultValue="" disabled={isSubmitting}>
              <option value="" disabled>Select a service</option>
              <option>Supplier search</option>
              <option>Supplier verification</option>
              <option>Factory audit</option>
              <option>QC inspection</option>
              <option>Production follow-up</option>
              <option>Shipping coordination</option>
            </select>
          </label>
          <label className="grid gap-2">
            <span className={labelClass}>Estimated order quantity</span>
            <input className={inputClass} name="quantity" placeholder="Quantity or monthly volume" disabled={isSubmitting} />
          </label>
        </div>

        <label className="grid gap-2">
          <span className={labelClass}>Product details</span>
          <textarea
            className={`${inputClass} min-h-32 resize-y`}
            name="details"
            placeholder="Product type, materials, dimensions, target price, certifications, packaging, timeline..."
            required
            disabled={isSubmitting}
          />
        </label>

        <button
          type="submit"
          disabled={isSubmitting}
          className="rounded-full bg-brand-blue px-6 py-4 text-sm font-bold text-white shadow-sm transition hover:bg-brand-navy disabled:cursor-not-allowed disabled:bg-slate-500"
        >
          {isSubmitting ? 'Submitting inquiry...' : 'Get a Free Sourcing Quote'}
        </button>
        <p className="text-xs leading-5 text-slate-600">
          No exaggerated promises. We respond with practical sourcing, verification, QC, or shipping recommendations based on your request.
        </p>
      </form>
    </div>
  )
}
