import { useState } from 'react'
import { AlertCircle, CheckCircle2 } from 'lucide-react'
import { createSourcingInquiry } from '@/api/sourcingInquiries'

const initialValues = {
  name: '',
  email: '',
  company: '',
  destination_country: '',
  product_category: '',
  estimated_quantity: '',
  message: '',
}

const inputClass = 'rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-950 outline-none transition placeholder:text-slate-400 focus:border-blue-500 disabled:bg-slate-100'

const InquiryForm = ({ compact = false, pageSource = 'website inquiry form' }) => {
  const [values, setValues] = useState(initialValues)
  const [status, setStatus] = useState('idle')
  const [error, setError] = useState('')

  const handleChange = (event) => {
    const { name, value } = event.target
    setValues((current) => ({ ...current, [name]: value }))
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    setStatus('submitting')
    setError('')

    try {
      const savedInquiry = await createSourcingInquiry({
        ...values,
        page_source: pageSource,
      })

      console.log('Sourcing inquiry submitted', savedInquiry?.id)
      setValues(initialValues)
      setStatus('success')
    } catch (submissionError) {
      console.error('Sourcing inquiry submission failed', submissionError)
      setError(submissionError.message || 'Unable to submit your inquiry. Please try again.')
      setStatus('error')
    }
  }

  const isSubmitting = status === 'submitting'

  return (
    <form onSubmit={handleSubmit} className="rounded-3xl border border-slate-200 bg-white p-6 text-slate-950 shadow-card md:p-8" aria-busy={isSubmitting}>
      <div className="grid gap-4 sm:grid-cols-2">
        <label className="grid gap-2 text-sm font-semibold text-slate-950">
          Name
          <input name="name" value={values.name} onChange={handleChange} className={inputClass} placeholder="Your name" required disabled={isSubmitting} />
        </label>
        <label className="grid gap-2 text-sm font-semibold text-slate-950">
          Email
          <input name="email" value={values.email} onChange={handleChange} type="email" className={inputClass} placeholder="you@company.com" required disabled={isSubmitting} />
        </label>
        <label className="grid gap-2 text-sm font-semibold text-slate-950">
          Company
          <input name="company" value={values.company} onChange={handleChange} className={inputClass} placeholder="Company name" disabled={isSubmitting} />
        </label>
        <label className="grid gap-2 text-sm font-semibold text-slate-950">
          Destination country
          <input name="destination_country" value={values.destination_country} onChange={handleChange} className={inputClass} placeholder="United States, Germany..." disabled={isSubmitting} />
        </label>
      </div>

      {!compact && (
        <div className="mt-4 grid gap-4 sm:grid-cols-2">
          <label className="grid gap-2 text-sm font-semibold text-slate-950">
            Product category
            <input name="product_category" value={values.product_category} onChange={handleChange} className={inputClass} placeholder="Packaging, components, home goods..." disabled={isSubmitting} />
          </label>
          <label className="grid gap-2 text-sm font-semibold text-slate-950">
            Estimated quantity
            <input name="estimated_quantity" value={values.estimated_quantity} onChange={handleChange} className={inputClass} placeholder="MOQ or target order size" disabled={isSubmitting} />
          </label>
        </div>
      )}

      <label className="mt-4 grid gap-2 text-sm font-semibold text-slate-950">
        What do you need sourced?
        <textarea name="message" value={values.message} onChange={handleChange} className={`${inputClass} min-h-32`} placeholder="Share product details, specifications, target price, packaging, certification needs, and shipment timeline." required disabled={isSubmitting} />
      </label>

      <button type="submit" disabled={isSubmitting} className="mt-5 w-full rounded-full bg-blue-700 px-6 py-4 text-sm font-semibold text-white shadow-card transition hover:bg-blue-800 disabled:cursor-not-allowed disabled:bg-slate-400">
        {isSubmitting ? 'Submitting inquiry...' : 'Get a Free Sourcing Quote'}
      </button>

      {status === 'success' && (
        <div className="mt-4 flex items-start gap-3 rounded-2xl bg-teal-50 p-4 text-sm leading-6 text-teal-900" role="status">
          <CheckCircle2 className="mt-0.5 h-5 w-5 flex-none text-teal-700" />
          <p>Thank you. Your sourcing inquiry has been submitted and is ready for review.</p>
        </div>
      )}

      {status === 'error' && error && (
        <div className="mt-4 flex items-start gap-3 rounded-2xl bg-red-50 p-4 text-sm leading-6 text-red-900" role="alert">
          <AlertCircle className="mt-0.5 h-5 w-5 flex-none text-red-700" />
          <p>{error}</p>
        </div>
      )}
    </form>
  )
}

export default InquiryForm
