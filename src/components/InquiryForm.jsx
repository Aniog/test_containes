import React, { useState } from 'react'
import { CheckCircle2, Send, ShieldCheck, Clock3, FileText } from 'lucide-react'
import { INQUIRY_PRODUCT_OPTIONS, INQUIRY_QUANTITY_OPTIONS } from '@/data/content'

const initialForm = {
  name: '',
  email: '',
  company: '',
  country: '',
  product: '',
  quantity: '',
  message: '',
}

const inputClass =
  'w-full rounded-lg border border-line bg-white px-4 py-2.5 text-sm text-ink placeholder:text-slate-400 focus:border-brand focus:outline-none focus:ring-2 focus:ring-brand/20'

const labelClass = 'mb-1.5 block text-sm font-medium text-ink'

export default function InquiryForm() {
  const [form, setForm] = useState(initialForm)
  const [submitted, setSubmitted] = useState(false)

  const update = (field) => (e) => setForm((f) => ({ ...f, [field]: e.target.value }))

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
  }

  if (submitted) {
    return (
      <div className="rounded-xl border border-line bg-white p-8 text-center shadow-sm md:p-12">
        <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-brand-light">
          <CheckCircle2 className="h-7 w-7 text-brand" aria-hidden="true" />
        </div>
        <h3 className="mt-5 text-2xl font-bold text-ink">Inquiry received</h3>
        <p className="mx-auto mt-3 max-w-md text-sm leading-relaxed text-slate-600">
          Thank you, {form.name.split(' ')[0] || 'there'}. A sourcing specialist will review your
          request and reply to <span className="font-medium text-ink">{form.email}</span> within
          one business day with next steps.
        </p>
        <button
          type="button"
          onClick={() => {
            setForm(initialForm)
            setSubmitted(false)
          }}
          className="mt-6 text-sm font-semibold text-brand hover:text-brand-dark"
        >
          Send another inquiry
        </button>
      </div>
    )
  }

  return (
    <div className="rounded-xl border border-line bg-white shadow-sm">
      <div className="border-b border-line px-6 py-5 md:px-8">
        <h3 className="text-xl font-bold text-ink">Get a Free Sourcing Quote</h3>
        <p className="mt-1 text-sm text-slate-500">
          Tell us what you need. We reply within one business day.
        </p>
      </div>
      <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-5 px-6 py-6 md:grid-cols-2 md:px-8 md:py-8">
        <div>
          <label htmlFor="inq-name" className={labelClass}>Full name *</label>
          <input id="inq-name" required value={form.name} onChange={update('name')} className={inputClass} placeholder="Jane Miller" />
        </div>
        <div>
          <label htmlFor="inq-email" className={labelClass}>Work email *</label>
          <input id="inq-email" type="email" required value={form.email} onChange={update('email')} className={inputClass} placeholder="jane@company.com" />
        </div>
        <div>
          <label htmlFor="inq-company" className={labelClass}>Company</label>
          <input id="inq-company" value={form.company} onChange={update('company')} className={inputClass} placeholder="Company Ltd." />
        </div>
        <div>
          <label htmlFor="inq-country" className={labelClass}>Country *</label>
          <input id="inq-country" required value={form.country} onChange={update('country')} className={inputClass} placeholder="Germany" />
        </div>
        <div>
          <label htmlFor="inq-product" className={labelClass}>Product category *</label>
          <select id="inq-product" required value={form.product} onChange={update('product')} className={inputClass}>
            <option value="" disabled>Select a category</option>
            {INQUIRY_PRODUCT_OPTIONS.map((opt) => (
              <option key={opt} value={opt}>{opt}</option>
            ))}
          </select>
        </div>
        <div>
          <label htmlFor="inq-quantity" className={labelClass}>Estimated quantity</label>
          <select id="inq-quantity" value={form.quantity} onChange={update('quantity')} className={inputClass}>
            <option value="" disabled>Select a range</option>
            {INQUIRY_QUANTITY_OPTIONS.map((opt) => (
              <option key={opt} value={opt}>{opt}</option>
            ))}
          </select>
        </div>
        <div className="md:col-span-2">
          <label htmlFor="inq-message" className={labelClass}>What do you want to source? *</label>
          <textarea
            id="inq-message"
            required
            rows={5}
            value={form.message}
            onChange={update('message')}
            className={inputClass}
            placeholder="Describe your product, specifications, target price and destination. Links or reference products help a lot."
          />
        </div>
        <div className="md:col-span-2">
          <button
            type="submit"
            className="inline-flex w-full items-center justify-center gap-2 rounded-lg bg-accent px-6 py-3 text-sm font-semibold text-ink transition-colors hover:bg-accent-dark hover:text-white sm:w-auto"
          >
            <Send className="h-4 w-4" aria-hidden="true" />
            Request Free Quote
          </button>
          <div className="mt-5 grid grid-cols-1 gap-3 border-t border-line pt-5 sm:grid-cols-3">
            <div className="flex items-center gap-2 text-xs text-slate-500">
              <Clock3 className="h-4 w-4 shrink-0 text-brand" aria-hidden="true" />
              Reply within 1 business day
            </div>
            <div className="flex items-center gap-2 text-xs text-slate-500">
              <ShieldCheck className="h-4 w-4 shrink-0 text-brand" aria-hidden="true" />
              Your details stay confidential
            </div>
            <div className="flex items-center gap-2 text-xs text-slate-500">
              <FileText className="h-4 w-4 shrink-0 text-brand" aria-hidden="true" />
              No obligation, no hidden fees
            </div>
          </div>
        </div>
      </form>
    </div>
  )
}
