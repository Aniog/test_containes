import { useState } from 'react'

function InquiryForm({ compact = false }) {
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (event) => {
    event.preventDefault()
    setSubmitted(true)
  }

  return (
    <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm md:p-8">
      <div className="max-w-2xl">
        <p className="text-sm font-medium uppercase tracking-[0.16em] text-sky-700">
          Inquiry form
        </p>
        <h3 className="mt-3 text-2xl font-semibold tracking-tight text-slate-900">
          Get a Free Sourcing Quote
        </h3>
        <p className="mt-3 text-base leading-7 text-slate-600">
          Tell us what you need to source, your order quantity, and any supplier or quality concerns.
        </p>
      </div>
      <form className="mt-8 grid gap-4 md:grid-cols-2" onSubmit={handleSubmit}>
        <input className="rounded-2xl border border-slate-300 px-4 py-3 text-slate-900 placeholder:text-slate-400 focus:border-slate-500 focus:outline-none" placeholder="Full name" required />
        <input className="rounded-2xl border border-slate-300 px-4 py-3 text-slate-900 placeholder:text-slate-400 focus:border-slate-500 focus:outline-none" placeholder="Company" required />
        <input className="rounded-2xl border border-slate-300 px-4 py-3 text-slate-900 placeholder:text-slate-400 focus:border-slate-500 focus:outline-none" placeholder="Work email" required type="email" />
        <input className="rounded-2xl border border-slate-300 px-4 py-3 text-slate-900 placeholder:text-slate-400 focus:border-slate-500 focus:outline-none" placeholder="Product name or category" required />
        <input className="rounded-2xl border border-slate-300 px-4 py-3 text-slate-900 placeholder:text-slate-400 focus:border-slate-500 focus:outline-none" placeholder="Estimated quantity" />
        <select className="rounded-2xl border border-slate-300 px-4 py-3 text-slate-900 focus:border-slate-500 focus:outline-none" defaultValue="">
          <option disabled value="">Main service needed</option>
          <option>Supplier sourcing</option>
          <option>Supplier verification</option>
          <option>Quality inspection</option>
          <option>Production follow-up</option>
          <option>Shipping coordination</option>
        </select>
        <textarea className={`rounded-2xl border border-slate-300 px-4 py-3 text-slate-900 placeholder:text-slate-400 focus:border-slate-500 focus:outline-none ${compact ? 'md:col-span-2 min-h-[140px]' : 'md:col-span-2 min-h-[180px]'}`} placeholder="Share your specifications, target market, packaging details, quality expectations, and timeline." required />
        <div className="md:col-span-2 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <button className="inline-flex items-center justify-center rounded-full bg-slate-900 px-6 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-slate-800" type="submit">
            Get a Free Sourcing Quote
          </button>
          <p className="text-sm text-slate-500">
            Frontend demo form. We can connect this to your real inquiry workflow after you approve the design.
          </p>
        </div>
      </form>
      {submitted ? (
        <div className="mt-6 rounded-2xl border border-emerald-200 bg-emerald-50 px-4 py-3 text-sm text-emerald-700">
          Thanks. Your inquiry has been prepared in the demo interface. After design approval, we can connect it to your live submission flow.
        </div>
      ) : null}
    </div>
  )
}

export default InquiryForm
