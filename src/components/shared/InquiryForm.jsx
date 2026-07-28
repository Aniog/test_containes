import { useState } from 'react'
import { CheckCircle2 } from 'lucide-react'

const InquiryForm = ({ compact = false }) => {
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (event) => {
    event.preventDefault()
    setSubmitted(true)
  }

  return (
    <form onSubmit={handleSubmit} className="rounded-3xl border border-slate-200 bg-white p-6 text-slate-950 shadow-card md:p-8">
      <div className="grid gap-4 sm:grid-cols-2">
        <label className="grid gap-2 text-sm font-semibold text-slate-950">
          Name
          <input className="rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-950 outline-none focus:border-blue-500" placeholder="Your name" required />
        </label>
        <label className="grid gap-2 text-sm font-semibold text-slate-950">
          Email
          <input type="email" className="rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-950 outline-none focus:border-blue-500" placeholder="you@company.com" required />
        </label>
        <label className="grid gap-2 text-sm font-semibold text-slate-950">
          Company
          <input className="rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-950 outline-none focus:border-blue-500" placeholder="Company name" />
        </label>
        <label className="grid gap-2 text-sm font-semibold text-slate-950">
          Destination country
          <input className="rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-950 outline-none focus:border-blue-500" placeholder="United States, Germany..." />
        </label>
      </div>

      {!compact && (
        <div className="mt-4 grid gap-4 sm:grid-cols-2">
          <label className="grid gap-2 text-sm font-semibold text-slate-950">
            Product category
            <input className="rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-950 outline-none focus:border-blue-500" placeholder="Packaging, components, home goods..." />
          </label>
          <label className="grid gap-2 text-sm font-semibold text-slate-950">
            Estimated quantity
            <input className="rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-950 outline-none focus:border-blue-500" placeholder="MOQ or target order size" />
          </label>
        </div>
      )}

      <label className="mt-4 grid gap-2 text-sm font-semibold text-slate-950">
        What do you need sourced?
        <textarea className="min-h-32 rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-950 outline-none focus:border-blue-500" placeholder="Share product details, specifications, target price, packaging, certification needs, and shipment timeline." required />
      </label>

      <button type="submit" className="mt-5 w-full rounded-full bg-blue-700 px-6 py-4 text-sm font-semibold text-white shadow-card transition hover:bg-blue-800">
        Get a Free Sourcing Quote
      </button>

      {submitted && (
        <div className="mt-4 flex items-start gap-3 rounded-2xl bg-teal-50 p-4 text-sm leading-6 text-teal-900">
          <CheckCircle2 className="mt-0.5 h-5 w-5 flex-none text-teal-700" />
          <p>Your inquiry details are ready to submit. In the next step, this form can be connected to email or a CRM workflow.</p>
        </div>
      )}
    </form>
  )
}

export default InquiryForm
