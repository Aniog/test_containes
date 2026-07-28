import { useState } from 'react'
import { useLocation } from 'react-router-dom'
import { Send } from 'lucide-react'
import { submitSourcingInquiry } from '@/api/sourcingInquiries.js'

const initialValues = {
  name: '',
  email: '',
  company: '',
  productCategory: '',
  supportNeeded: '',
  projectDetails: '',
}

const inputClass = 'mt-2 w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-slate-950 placeholder:text-slate-500 focus:border-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-100'

const validateInquiry = (values) => {
  if (!values.name.trim()) return 'Please enter your name.'
  if (!/^\S+@\S+\.\S+$/.test(values.email.trim())) return 'Please enter a valid work email.'
  if (!values.productCategory) return 'Please select a product category.'
  if (!values.supportNeeded) return 'Please select the support you need.'
  if (!values.projectDetails.trim()) return 'Please share a few project details.'
  return null
}

const InquiryForm = () => {
  const location = useLocation()
  const [values, setValues] = useState(initialValues)
  const [status, setStatus] = useState('idle')
  const [message, setMessage] = useState('')

  const updateValue = (event) => {
    const { name, value } = event.target
    setValues((current) => ({ ...current, [name]: value }))
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    const validationError = validateInquiry(values)

    if (validationError) {
      setStatus('error')
      setMessage(validationError)
      return
    }

    setStatus('submitting')
    setMessage('')

    try {
      await submitSourcingInquiry(values, location.pathname)
      setValues(initialValues)
      setStatus('success')
      setMessage('Thank you. Your inquiry has been received and the SSourcing China team will review it.')
    } catch (error) {
      console.error('Sourcing inquiry submission failed:', error)
      setStatus('error')
      setMessage(error.message || 'We could not send your inquiry. Please try again.')
    }
  }

  const isSubmitting = status === 'submitting'

  return (
    <form className="rounded-3xl border border-slate-200 bg-white p-6 text-slate-950 shadow-xl lg:p-8" onSubmit={handleSubmit} aria-busy={isSubmitting}>
      <div>
        <p className="text-sm font-semibold uppercase tracking-widest text-blue-700">Inquiry form</p>
        <h2 className="mt-2 text-2xl font-bold text-slate-950">Get a Free Sourcing Quote</h2>
        <p className="mt-3 text-sm leading-7 text-slate-700">
          Share your sourcing brief and our team will review the best next step: supplier search, verification, QC, production follow-up, or shipping coordination.
        </p>
      </div>

      <div className="mt-6 grid gap-5 sm:grid-cols-2">
        <label className="text-sm font-semibold text-slate-800">
          Name
          <input name="name" value={values.name} onChange={updateValue} className={inputClass} placeholder="Your name" autoComplete="name" required />
        </label>
        <label className="text-sm font-semibold text-slate-800">
          Work email
          <input name="email" type="email" value={values.email} onChange={updateValue} className={inputClass} placeholder="name@company.com" autoComplete="email" required />
        </label>
        <label className="text-sm font-semibold text-slate-800">
          Company
          <input name="company" value={values.company} onChange={updateValue} className={inputClass} placeholder="Company name" autoComplete="organization" />
        </label>
        <label className="text-sm font-semibold text-slate-800">
          Product category
          <select name="productCategory" className={inputClass} value={values.productCategory} onChange={updateValue} required>
            <option value="" disabled>Select a category</option>
            <option>Electronics and accessories</option>
            <option>Home and kitchen products</option>
            <option>Packaging and labels</option>
            <option>Industrial parts</option>
            <option>Textiles and soft goods</option>
            <option>Other products</option>
          </select>
        </label>
        <label className="text-sm font-semibold text-slate-800 sm:col-span-2">
          What support do you need?
          <select name="supportNeeded" className={inputClass} value={values.supportNeeded} onChange={updateValue} required>
            <option value="" disabled>Select a service</option>
            <option>Find new suppliers</option>
            <option>Verify an existing supplier</option>
            <option>Inspect product quality</option>
            <option>Follow production</option>
            <option>Coordinate shipping handoff</option>
            <option>End-to-end sourcing support</option>
          </select>
        </label>
        <label className="text-sm font-semibold text-slate-800 sm:col-span-2">
          Project details
          <textarea name="projectDetails" value={values.projectDetails} onChange={updateValue} className={`${inputClass} min-h-32`} placeholder="Share product specifications, target quantity, destination country, timeline, and key concerns." required />
        </label>
      </div>

      {message && (
        <p className={`mt-5 rounded-2xl px-4 py-3 text-sm font-medium leading-6 ${status === 'success' ? 'bg-emerald-50 text-emerald-900 ring-1 ring-emerald-200' : 'bg-red-50 text-red-900 ring-1 ring-red-200'}`} role={status === 'success' ? 'status' : 'alert'}>
          {message}
        </p>
      )}

      <button type="submit" disabled={isSubmitting} className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-blue-700 px-6 py-3 text-sm font-semibold text-white transition hover:bg-blue-800 focus:outline-none focus:ring-2 focus:ring-blue-700 focus:ring-offset-2 disabled:cursor-not-allowed disabled:bg-slate-400 sm:w-auto">
        {isSubmitting ? 'Sending inquiry...' : 'Send Inquiry'} <Send className="h-4 w-4" />
      </button>
    </form>
  )
}

export default InquiryForm
