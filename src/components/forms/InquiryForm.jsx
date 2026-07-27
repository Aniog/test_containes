import { useState } from 'react'
import { CheckCircle2 } from 'lucide-react'

const inputClass = 'w-full rounded-xl border border-brand-line bg-white px-4 py-3 text-sm text-brand-navy placeholder:text-slate-500 outline-none transition focus:border-brand-blue focus:ring-4 focus:ring-blue-100'
const labelClass = 'text-sm font-semibold text-brand-navy'

export default function InquiryForm({ compact = false }) {
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (event) => {
    event.preventDefault()
    setSubmitted(true)
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

      {submitted && (
        <div className="mb-6 flex gap-3 rounded-xl border border-cyan-200 bg-cyan-50 p-4 text-sm text-brand-navy">
          <CheckCircle2 className="mt-0.5 h-5 w-5 flex-none text-brand-cyan" />
          <p>
            Thank you. This frontend preview shows the inquiry flow; message delivery can be connected after the design is approved.
          </p>
        </div>
      )}

      <form className="grid gap-4" onSubmit={handleSubmit}>
        <div className="grid gap-4 md:grid-cols-2">
          <label className="grid gap-2">
            <span className={labelClass}>Name</span>
            <input className={inputClass} name="name" placeholder="Your name" required />
          </label>
          <label className="grid gap-2">
            <span className={labelClass}>Work email</span>
            <input className={inputClass} name="email" type="email" placeholder="name@company.com" required />
          </label>
        </div>

        {!compact && (
          <div className="grid gap-4 md:grid-cols-2">
            <label className="grid gap-2">
              <span className={labelClass}>Company</span>
              <input className={inputClass} name="company" placeholder="Company name" />
            </label>
            <label className="grid gap-2">
              <span className={labelClass}>Destination market</span>
              <input className={inputClass} name="market" placeholder="United States, EU, Australia..." />
            </label>
          </div>
        )}

        <div className="grid gap-4 md:grid-cols-2">
          <label className="grid gap-2">
            <span className={labelClass}>Service needed</span>
            <select className={inputClass} name="service" defaultValue="">
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
            <input className={inputClass} name="quantity" placeholder="Quantity or monthly volume" />
          </label>
        </div>

        <label className="grid gap-2">
          <span className={labelClass}>Product details</span>
          <textarea
            className={`${inputClass} min-h-32 resize-y`}
            name="details"
            placeholder="Product type, materials, dimensions, target price, certifications, packaging, timeline..."
            required
          />
        </label>

        <button
          type="submit"
          className="rounded-full bg-brand-blue px-6 py-4 text-sm font-bold text-white shadow-sm transition hover:bg-brand-navy"
        >
          Get a Free Sourcing Quote
        </button>
        <p className="text-xs leading-5 text-slate-600">
          No exaggerated promises. We respond with practical sourcing, verification, QC, or shipping recommendations based on your request.
        </p>
      </form>
    </div>
  )
}
