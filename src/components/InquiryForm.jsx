import { useState } from 'react'
import { CheckCircle2, Send } from 'lucide-react'
import { PRODUCT_CATEGORIES } from '@/data/site.js'

const inputCls =
  'w-full rounded-lg border border-slate-300 bg-white px-4 py-2.5 text-sm text-slate-900 placeholder:text-slate-400 focus:border-brand-500 focus:outline-none focus:ring-2 focus:ring-brand-100'
const labelCls = 'mb-1.5 block text-sm font-medium text-slate-700'

export default function InquiryForm({ compact = false }) {
  const [submitted, setSubmitted] = useState(false)
  const [form, setForm] = useState({
    name: '', email: '', company: '', country: '', category: '', details: '',
  })

  const update = (k) => (e) => setForm({ ...form, [k]: e.target.value })

  const onSubmit = (e) => {
    e.preventDefault()
    console.log('Sourcing inquiry submitted:', form)
    setSubmitted(true)
  }

  if (submitted) {
    return (
      <div className="rounded-xl border border-brand-100 bg-brand-50 p-8 text-center">
        <CheckCircle2 className="mx-auto h-12 w-12 text-brand-600" />
        <h3 className="mt-4 text-xl font-bold text-slate-900">Inquiry received</h3>
        <p className="mx-auto mt-2 max-w-md text-sm leading-relaxed text-slate-600">
          Thank you, {form.name.split(' ')[0] || 'there'}. A sourcing specialist will review your
          requirements and reply to <span className="font-medium text-slate-900">{form.email}</span> within
          one business day.
        </p>
        <button
          onClick={() => { setSubmitted(false); setForm({ name: '', email: '', company: '', country: '', category: '', details: '' }) }}
          className="mt-6 rounded-lg border border-brand-200 bg-white px-5 py-2.5 text-sm font-semibold text-brand-700 hover:bg-brand-50"
        >
          Send another inquiry
        </button>
      </div>
    )
  }

  return (
    <form onSubmit={onSubmit} className="grid gap-5 sm:grid-cols-2">
      <div>
        <label htmlFor="inq-name" className={labelCls}>Full name *</label>
        <input id="inq-name" required value={form.name} onChange={update('name')} placeholder="John Smith" className={inputCls} />
      </div>
      <div>
        <label htmlFor="inq-email" className={labelCls}>Business email *</label>
        <input id="inq-email" type="email" required value={form.email} onChange={update('email')} placeholder="john@company.com" className={inputCls} />
      </div>
      <div>
        <label htmlFor="inq-company" className={labelCls}>Company</label>
        <input id="inq-company" value={form.company} onChange={update('company')} placeholder="Company Ltd." className={inputCls} />
      </div>
      <div>
        <label htmlFor="inq-country" className={labelCls}>Country *</label>
        <input id="inq-country" required value={form.country} onChange={update('country')} placeholder="United States" className={inputCls} />
      </div>
      <div className="sm:col-span-2">
        <label htmlFor="inq-category" className={labelCls}>Product category *</label>
        <select id="inq-category" required value={form.category} onChange={update('category')} className={inputCls}>
          <option value="" disabled>Select a category</option>
          {PRODUCT_CATEGORIES.map((c) => (
            <option key={c.id} value={c.title}>{c.title}</option>
          ))}
          <option value="Other">Other / not sure yet</option>
        </select>
      </div>
      <div className="sm:col-span-2">
        <label htmlFor="inq-details" className={labelCls}>What do you want to source? *</label>
        <textarea
          id="inq-details" required rows={compact ? 3 : 5} value={form.details} onChange={update('details')}
          placeholder="Describe your product, specifications, target quantity, and target price. Links to reference products are helpful."
          className={inputCls}
        />
      </div>
      <div className="sm:col-span-2">
        <button
          type="submit"
          className="inline-flex w-full items-center justify-center gap-2 rounded-lg bg-brand-600 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-brand-700 sm:w-auto"
        >
          <Send className="h-4 w-4" />
          Get a Free Sourcing Quote
        </button>
        <p className="mt-3 text-xs leading-relaxed text-slate-500">
          No obligation. We reply within one business day and never share your details with third parties.
        </p>
      </div>
    </form>
  )
}
