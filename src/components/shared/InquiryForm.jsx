import { useState } from 'react'
import { toast } from 'sonner'
import { CheckCircle2, Send } from 'lucide-react'
import { PRODUCT_OPTIONS } from '@/data/content'
import { cn } from '@/lib/utils'

const inputClass =
  'w-full rounded-md border border-slate-300 bg-white px-3 py-2.5 text-sm text-slate-900 placeholder:text-slate-400 focus:border-blue-800 focus:outline-none focus:ring-1 focus:ring-blue-800'

const labelClass = 'mb-1.5 block text-sm font-medium text-slate-900'

const InquiryForm = ({ compact = false }) => {
  const [submitted, setSubmitted] = useState(false)
  const [form, setForm] = useState({
    name: '',
    email: '',
    company: '',
    country: '',
    category: '',
    quantity: '',
    message: '',
  })

  const update = (field) => (e) => setForm({ ...form, [field]: e.target.value })

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!form.name.trim() || !form.email.trim() || !form.message.trim()) {
      toast.error('Please fill in your name, email, and product details.')
      return
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      toast.error('Please enter a valid business email address.')
      return
    }
    setSubmitted(true)
    toast.success('Inquiry received. We will reply within one working day.')
  }

  if (submitted) {
    return (
      <div className="rounded-xl border border-emerald-200 bg-emerald-50 p-8 text-center">
        <CheckCircle2 className="mx-auto h-12 w-12 text-emerald-600" />
        <h3 className="mt-4 text-xl font-semibold text-slate-900">Thank you, {form.name.split(' ')[0]}.</h3>
        <p className="mx-auto mt-2 max-w-md text-sm leading-relaxed text-slate-600">
          Your sourcing inquiry has been received. A sourcing specialist will review your
          requirements and reply to <span className="font-medium text-slate-900">{form.email}</span> within
          one working day with an initial assessment and next steps.
        </p>
        <button
          type="button"
          onClick={() => {
            setSubmitted(false)
            setForm({ name: '', email: '', company: '', country: '', category: '', quantity: '', message: '' })
          }}
          className="mt-6 rounded-md border border-slate-300 bg-white px-5 py-2.5 text-sm font-semibold text-slate-900 hover:bg-slate-50"
        >
          Send another inquiry
        </button>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm md:p-8" noValidate>
      <div className={cn('grid gap-5', compact ? 'md:grid-cols-2' : 'sm:grid-cols-2')}>
        <div>
          <label htmlFor="inq-name" className={labelClass}>Full name *</label>
          <input id="inq-name" type="text" required value={form.name} onChange={update('name')} placeholder="Jane Miller" className={inputClass} />
        </div>
        <div>
          <label htmlFor="inq-email" className={labelClass}>Business email *</label>
          <input id="inq-email" type="email" required value={form.email} onChange={update('email')} placeholder="jane@company.com" className={inputClass} />
        </div>
        <div>
          <label htmlFor="inq-company" className={labelClass}>Company</label>
          <input id="inq-company" type="text" value={form.company} onChange={update('company')} placeholder="Company Inc." className={inputClass} />
        </div>
        <div>
          <label htmlFor="inq-country" className={labelClass}>Country</label>
          <input id="inq-country" type="text" value={form.country} onChange={update('country')} placeholder="United States" className={inputClass} />
        </div>
        <div>
          <label htmlFor="inq-category" className={labelClass}>Product category</label>
          <select id="inq-category" value={form.category} onChange={update('category')} className={inputClass}>
            <option value="">Select a category</option>
            {PRODUCT_OPTIONS.map((opt) => (
              <option key={opt} value={opt}>{opt}</option>
            ))}
            <option value="Other">Other / not sure yet</option>
          </select>
        </div>
        <div>
          <label htmlFor="inq-quantity" className={labelClass}>Estimated quantity / order value</label>
          <input id="inq-quantity" type="text" value={form.quantity} onChange={update('quantity')} placeholder="e.g. 5,000 units or USD 30,000" className={inputClass} />
        </div>
        <div className="sm:col-span-2">
          <label htmlFor="inq-message" className={labelClass}>Product details *</label>
          <textarea
            id="inq-message"
            required
            rows={compact ? 4 : 5}
            value={form.message}
            onChange={update('message')}
            placeholder="Describe your product: materials, dimensions, target price, certifications needed, and any links or references."
            className={inputClass}
          />
        </div>
      </div>
      <div className="mt-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-xs leading-relaxed text-slate-500">
          Free and without obligation. Your information is used only to prepare your quote and is never shared without your approval.
        </p>
        <button
          type="submit"
          className="inline-flex shrink-0 items-center justify-center gap-2 rounded-md bg-blue-800 px-7 py-3 text-sm font-semibold text-white transition-colors hover:bg-blue-900"
        >
          Get a Free Sourcing Quote <Send className="h-4 w-4" />
        </button>
      </div>
    </form>
  )
}

export default InquiryForm
