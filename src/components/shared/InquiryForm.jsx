import { useState } from 'react'
import { ArrowRight } from 'lucide-react'

const InquiryForm = ({ compact = false }) => {
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (event) => {
    event.preventDefault()
    setSubmitted(true)
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-3xl border border-brand-line bg-brand-white p-6 text-brand-navy shadow-soft md:p-8"
    >
      <div>
        <p className="text-sm font-semibold uppercase tracking-[0.18em] text-brand-blue">
          Sourcing inquiry
        </p>
        <h3 className="mt-2 text-2xl font-bold text-brand-navy">
          Get a Free Sourcing Quote
        </h3>
        <p className="mt-3 text-sm leading-6 text-brand-slate">
          Share your product request and we will review the best next steps for sourcing, supplier checks, QC, and shipping coordination.
        </p>
      </div>

      <div className="mt-6 grid gap-4 md:grid-cols-2">
        <label className="block text-sm font-semibold text-brand-navy">
          Name
          <input
            className="mt-2 w-full rounded-xl border border-brand-line bg-brand-white px-4 py-3 text-sm text-brand-navy outline-none transition placeholder:text-brand-slate/70 focus:border-brand-blue focus:ring-4 focus:ring-brand-blue/10"
            placeholder="Your name"
            required
          />
        </label>
        <label className="block text-sm font-semibold text-brand-navy">
          Work email
          <input
            type="email"
            className="mt-2 w-full rounded-xl border border-brand-line bg-brand-white px-4 py-3 text-sm text-brand-navy outline-none transition placeholder:text-brand-slate/70 focus:border-brand-blue focus:ring-4 focus:ring-brand-blue/10"
            placeholder="name@company.com"
            required
          />
        </label>
        <label className="block text-sm font-semibold text-brand-navy">
          Company
          <input
            className="mt-2 w-full rounded-xl border border-brand-line bg-brand-white px-4 py-3 text-sm text-brand-navy outline-none transition placeholder:text-brand-slate/70 focus:border-brand-blue focus:ring-4 focus:ring-brand-blue/10"
            placeholder="Company name"
          />
        </label>
        <label className="block text-sm font-semibold text-brand-navy">
          Destination market
          <input
            className="mt-2 w-full rounded-xl border border-brand-line bg-brand-white px-4 py-3 text-sm text-brand-navy outline-none transition placeholder:text-brand-slate/70 focus:border-brand-blue focus:ring-4 focus:ring-brand-blue/10"
            placeholder="United States, EU, UAE..."
          />
        </label>
        <label className="block text-sm font-semibold text-brand-navy md:col-span-2">
          Product details
          <textarea
            rows={compact ? 4 : 5}
            className="mt-2 w-full rounded-xl border border-brand-line bg-brand-white px-4 py-3 text-sm text-brand-navy outline-none transition placeholder:text-brand-slate/70 focus:border-brand-blue focus:ring-4 focus:ring-brand-blue/10"
            placeholder="Product type, quantity, target price, packaging, certification, timeline..."
            required
          />
        </label>
      </div>

      {submitted && (
        <div className="mt-5 rounded-2xl border border-brand-blue/20 bg-brand-blue/5 px-4 py-3 text-sm font-medium text-brand-navy">
          Your inquiry preview has been captured locally. Backend submission can be connected after the frontend design is approved.
        </div>
      )}

      <button
        type="submit"
        className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-brand-blue px-5 py-3 text-sm font-bold text-white shadow-soft transition hover:bg-brand-navy focus:outline-none focus:ring-4 focus:ring-brand-blue/20"
      >
        Get a Free Sourcing Quote
        <ArrowRight className="h-4 w-4" aria-hidden="true" />
      </button>
    </form>
  )
}

export default InquiryForm
