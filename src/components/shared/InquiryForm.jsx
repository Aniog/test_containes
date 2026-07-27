import { useState } from 'react'
import { AlertCircle, CheckCircle2, Loader2, Send } from 'lucide-react'
import { cn } from '@/lib/utils'
import { submitSourcingInquiry } from '@/api/inquiries'

const inputClass =
  'w-full rounded-lg border border-slate-300 bg-white px-4 py-2.5 text-sm text-slate-900 placeholder:text-slate-400 focus:border-primary-500 focus:outline-none focus:ring-2 focus:ring-primary-100'

const labelClass = 'mb-1.5 block text-sm font-medium text-slate-700'

export default function InquiryForm({ compact = false, source = 'home' }) {
  const [status, setStatus] = useState('idle')
  const [error, setError] = useState(null)
  const [form, setForm] = useState({
    name: '',
    email: '',
    company: '',
    country: '',
    product: '',
    quantity: '',
    message: '',
  })

  const update = (key) => (e) => setForm({ ...form, [key]: e.target.value })

  const handleSubmit = async (e) => {
    e.preventDefault()
    setError(null)
    setStatus('submitting')
    try {
      await submitSourcingInquiry(form, source)
      setStatus('success')
    } catch (err) {
      setError(err.message || 'Submission failed. Please try again.')
      setStatus('error')
    }
  }

  if (status === 'success') {
    return (
      <div className="rounded-xl border border-green-200 bg-green-50 p-8 text-center">
        <CheckCircle2 className="mx-auto h-12 w-12 text-green-600" />
        <h3 className="mt-4 text-xl font-semibold text-slate-900">Inquiry received</h3>
        <p className="mx-auto mt-2 max-w-md text-sm leading-relaxed text-slate-600">
          Thank you, {form.name.split(' ')[0] || 'there'}. A sourcing specialist will review your product brief and reply within one business day with next steps and a fee proposal.
        </p>
        <button
          type="button"
          onClick={() => {
            setStatus('idle')
            setForm({ name: '', email: '', company: '', country: '', product: '', quantity: '', message: '' })
          }}
          className="mt-6 rounded-lg border border-slate-300 px-5 py-2 text-sm font-medium text-slate-700 hover:bg-white"
        >
          Send another inquiry
        </button>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className={cn('grid gap-5', compact ? 'sm:grid-cols-2' : 'sm:grid-cols-2')}>
        <div>
          <label htmlFor="inq-name" className={labelClass}>Full name *</label>
          <input id="inq-name" required value={form.name} onChange={update('name')} placeholder="Jane Miller" className={inputClass} />
        </div>
        <div>
          <label htmlFor="inq-email" className={labelClass}>Work email *</label>
          <input id="inq-email" type="email" required value={form.email} onChange={update('email')} placeholder="jane@company.com" className={inputClass} />
        </div>
        <div>
          <label htmlFor="inq-company" className={labelClass}>Company</label>
          <input id="inq-company" value={form.company} onChange={update('company')} placeholder="Company Inc." className={inputClass} />
        </div>
        <div>
          <label htmlFor="inq-country" className={labelClass}>Country *</label>
          <input id="inq-country" required value={form.country} onChange={update('country')} placeholder="United States" className={inputClass} />
        </div>
        <div>
          <label htmlFor="inq-product" className={labelClass}>Product to source *</label>
          <input id="inq-product" required value={form.product} onChange={update('product')} placeholder="e.g. stainless steel water bottles" className={inputClass} />
        </div>
        <div>
          <label htmlFor="inq-quantity" className={labelClass}>Estimated quantity</label>
          <input id="inq-quantity" value={form.quantity} onChange={update('quantity')} placeholder="e.g. 2,000 units" className={inputClass} />
        </div>
      </div>
      <div>
        <label htmlFor="inq-message" className={labelClass}>Product details *</label>
        <textarea
          id="inq-message"
          required
          rows={compact ? 4 : 5}
          value={form.message}
          onChange={update('message')}
          placeholder="Describe your product: materials, dimensions, target price, certifications needed, and any reference links."
          className={inputClass}
        />
      </div>
      {status === 'error' && error && (
        <div role="alert" className="flex items-start gap-2.5 rounded-lg border border-red-200 bg-red-50 p-4">
          <AlertCircle className="mt-0.5 h-5 w-5 shrink-0 text-red-600" />
          <p className="text-sm leading-relaxed text-red-700">{error}</p>
        </div>
      )}
      <button
        type="submit"
        disabled={status === 'submitting'}
        className="inline-flex w-full items-center justify-center gap-2 rounded-lg bg-accent-500 px-6 py-3 font-semibold text-white shadow-sm transition-colors hover:bg-accent-600 disabled:opacity-70 sm:w-auto"
      >
        {status === 'submitting' ? (
          <>
            <Loader2 className="h-5 w-5 animate-spin" /> Sending...
          </>
        ) : (
          <>
            <Send className="h-5 w-5" /> Get a Free Sourcing Quote
          </>
        )}
      </button>
      <p className="text-xs leading-relaxed text-slate-500">
        We reply within one business day. Your information is only used to prepare your sourcing proposal.
      </p>
    </form>
  )
}
