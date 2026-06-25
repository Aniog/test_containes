import { useState } from 'react'
import { CheckCircle2, Loader2, Send } from 'lucide-react'
import { createSourcingInquiry, emptyInquiry, sourcingServiceOptions, validateInquiry } from '../api/sourcingInquiries.js'

const inputClass = 'mt-2 w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-sm text-slate-950 outline-none transition placeholder:text-slate-400 focus:border-blue-600 focus:ring-4 focus:ring-blue-100'
const labelClass = 'text-sm font-bold text-slate-800'

export default function InquiryForm({ compact = false }) {
  const [values, setValues] = useState(emptyInquiry)
  const [status, setStatus] = useState('idle')
  const [message, setMessage] = useState('')

  const onChange = (event) => {
    const { name, value } = event.target
    setValues((current) => ({ ...current, [name]: value }))
  }

  const onSubmit = async (event) => {
    event.preventDefault()
    setMessage('')
    const validation = validateInquiry(values)
    if (validation) {
      setStatus('error')
      setMessage(validation)
      return
    }

    setStatus('submitting')
    try {
      await createSourcingInquiry(values)
      setValues(emptyInquiry)
      setStatus('success')
      setMessage('Thank you. Your sourcing inquiry has been received. We will review your requirements and reply with next steps.')
    } catch (error) {
      setStatus('error')
      setMessage(error.message || 'Unable to submit the inquiry right now. Please try again.')
    }
  }

  return (
    <form id="inquiry" onSubmit={onSubmit} className="rounded-3xl border border-slate-200 bg-white p-6 text-slate-950 shadow-xl shadow-slate-200/60 sm:p-8" aria-busy={status === 'submitting'}>
      <div className="mb-6">
        <p className="text-sm font-bold uppercase tracking-[0.22em] text-blue-700">Free sourcing quote</p>
        <h2 className="mt-2 text-2xl font-black tracking-tight text-slate-950 sm:text-3xl">Tell us what you need to source</h2>
        <p className="mt-3 text-sm leading-6 text-slate-600">
          Share product details, target quantity, and the support you need. We will respond with a practical sourcing approach.
        </p>
      </div>

      <div className={`grid gap-5 ${compact ? 'md:grid-cols-1' : 'md:grid-cols-2'}`}>
        <label className={labelClass}>
          Name *
          <input className={inputClass} name="name" value={values.name} onChange={onChange} placeholder="Your full name" autoComplete="name" />
        </label>
        <label className={labelClass}>
          Business email *
          <input className={inputClass} name="email" type="email" value={values.email} onChange={onChange} placeholder="you@company.com" autoComplete="email" />
        </label>
        <label className={labelClass}>
          Company
          <input className={inputClass} name="company" value={values.company} onChange={onChange} placeholder="Company name" autoComplete="organization" />
        </label>
        <label className={labelClass}>
          Country / market
          <input className={inputClass} name="country" value={values.country} onChange={onChange} placeholder="United States, Germany, UAE..." autoComplete="country-name" />
        </label>
        <label className={labelClass}>
          Product category *
          <input className={inputClass} name="product_category" value={values.product_category} onChange={onChange} placeholder="Packaging, electronics, furniture..." />
        </label>
        <label className={labelClass}>
          Estimated quantity
          <input className={inputClass} name="quantity" value={values.quantity} onChange={onChange} placeholder="MOQ, annual volume, or first order" />
        </label>
        <label className={labelClass}>
          Service needed *
          <select className={inputClass} name="service_needed" value={values.service_needed} onChange={onChange}>
            {sourcingServiceOptions.map((option) => (
              <option key={option} value={option}>{option}</option>
            ))}
          </select>
        </label>
        <label className={labelClass}>
          Timeline
          <input className={inputClass} name="timeline" value={values.timeline} onChange={onChange} placeholder="Urgent, 30 days, next quarter..." />
        </label>
        <label className={`${labelClass} md:col-span-2`}>
          Project details *
          <textarea className={`${inputClass} min-h-36 resize-y`} name="message" value={values.message} onChange={onChange} placeholder="Tell us product specifications, target price, current supplier issues, inspection needs, shipping destination, or any known requirements." />
        </label>
        <label className={`${labelClass} md:col-span-2`}>
          Phone / WhatsApp / WeChat
          <input className={inputClass} name="phone" value={values.phone} onChange={onChange} placeholder="Optional contact number" autoComplete="tel" />
        </label>
      </div>

      {message && (
        <div className={`mt-5 rounded-2xl border px-4 py-3 text-sm font-semibold ${status === 'success' ? 'border-emerald-200 bg-emerald-50 text-emerald-800' : 'border-red-200 bg-red-50 text-red-800'}`} role={status === 'success' ? 'status' : 'alert'}>
          {message}
        </div>
      )}

      <button type="submit" disabled={status === 'submitting'} className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-blue-700 px-6 py-4 text-sm font-black text-white shadow-lg shadow-blue-700/20 transition hover:bg-blue-800 disabled:cursor-not-allowed disabled:bg-slate-400 sm:w-auto">
        {status === 'submitting' ? <Loader2 className="h-5 w-5 animate-spin" /> : status === 'success' ? <CheckCircle2 className="h-5 w-5" /> : <Send className="h-5 w-5" />}
        Get a Free Sourcing Quote
      </button>
    </form>
  )
}
