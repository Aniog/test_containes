import { useState } from 'react'
import { AlertCircle, CheckCircle2, Loader2, Send } from 'lucide-react'
import { DataClient } from '@strikingly/sdk'
import { STRK_PROJECT_URL, STRK_PROJECT_ANON_KEY } from '@/config.jsx'
import { PRODUCT_CATEGORIES } from '@/data/site.js'

const client = new DataClient(STRK_PROJECT_URL, STRK_PROJECT_ANON_KEY)

const inputCls =
  'w-full rounded-lg border border-slate-300 bg-white px-4 py-2.5 text-sm text-slate-900 placeholder:text-slate-400 focus:border-brand-500 focus:outline-none focus:ring-2 focus:ring-brand-100'
const labelCls = 'mb-1.5 block text-sm font-medium text-slate-700'
const EMPTY = { name: '', email: '', company: '', country: '', category: '', details: '' }

const getErrorMessage = (response, error) => {
  if (Array.isArray(response?.errors) && response.errors.length > 0) {
    return response.errors.join(', ')
  }
  return error?.message || 'Submission failed. Please try again.'
}

export default function InquiryForm({ compact = false }) {
  const [submitted, setSubmitted] = useState(false)
  const [submitting, setSubmitting] = useState(false)
  const [error, setError] = useState(null)
  const [form, setForm] = useState(EMPTY)

  const update = (k) => (e) => setForm({ ...form, [k]: e.target.value })

  const onSubmit = async (e) => {
    e.preventDefault()
    setError(null)
    setSubmitting(true)
    console.log('Submitting sourcing inquiry:', form)

    const { data: response, error: insertError } = await client
      .from('SourcingInquiry')
      .insert({
        data: {
          name: form.name.trim(),
          email: form.email.trim(),
          company: form.company.trim(),
          country: form.country.trim(),
          category: form.category,
          details: form.details.trim(),
          source: 'website',
          status: 'new',
        },
      })
      .select()
      .single()

    setSubmitting(false)
    if (insertError || response?.success === false) {
      console.error('Inquiry submission failed:', getErrorMessage(response, insertError))
      setError(getErrorMessage(response, insertError))
      return
    }
    console.log('Inquiry saved:', response?.data)
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
          onClick={() => { setSubmitted(false); setForm(EMPTY) }}
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
          disabled={submitting}
          className="inline-flex w-full items-center justify-center gap-2 rounded-lg bg-brand-600 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-brand-700 disabled:cursor-not-allowed disabled:opacity-70 sm:w-auto"
        >
          {submitting ? <Loader2 className="h-4 w-4 animate-spin" /> : <Send className="h-4 w-4" />}
          {submitting ? 'Sending…' : 'Get a Free Sourcing Quote'}
        </button>
        {error && (
          <p role="alert" className="mt-3 inline-flex items-start gap-1.5 text-xs font-medium text-red-600">
            <AlertCircle className="mt-0.5 h-3.5 w-3.5 shrink-0" /> {error}
          </p>
        )}
        <p className="mt-3 text-xs leading-relaxed text-slate-500">
          No obligation. We reply within one business day and never share your details with third parties.
        </p>
      </div>
    </form>
  )
}
