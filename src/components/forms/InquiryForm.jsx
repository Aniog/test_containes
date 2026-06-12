import { Send } from 'lucide-react'
import { useState } from 'react'
import { DataClient } from '@strikingly/sdk'
import { STRK_PROJECT_ANON_KEY, STRK_PROJECT_URL } from '@/config.jsx'

const initialValues = {
  name: '',
  email: '',
  company: '',
  country: '',
  product_category: '',
  estimated_quantity: '',
  service_needed: 'full_sourcing_support',
  message: '',
}

const client = new DataClient(STRK_PROJECT_URL, STRK_PROJECT_ANON_KEY)

const serviceOptions = [
  { value: 'supplier_search', label: 'Supplier search' },
  { value: 'factory_verification', label: 'Factory verification' },
  { value: 'quality_inspection', label: 'Quality inspection' },
  { value: 'production_follow_up', label: 'Production follow-up' },
  { value: 'shipping_coordination', label: 'Shipping coordination' },
  { value: 'full_sourcing_support', label: 'Full sourcing support' },
]

function getErrorMessage(response, error) {
  if (Array.isArray(response?.errors) && response.errors.length > 0) {
    return response.errors.join(', ')
  }
  return error?.message || 'Submission failed. Please check your details and try again.'
}

function validate(values) {
  if (!values.name.trim()) return 'Please enter your name.'
  if (!values.email.trim()) return 'Please enter your business email.'
  if (!/^\S+@\S+\.\S+$/.test(values.email)) return 'Please enter a valid email address.'
  if (!values.product_category.trim()) return 'Please describe the product you want to source.'
  if (!values.message.trim()) return 'Please share your sourcing requirements.'
  return null
}

export default function InquiryForm({ compact = false }) {
  const [values, setValues] = useState(initialValues)
  const [status, setStatus] = useState('idle')
  const [message, setMessage] = useState('')

  const onChange = (event) => {
    const { name, value } = event.target
    setValues((current) => ({ ...current, [name]: value }))
  }

  const onSubmit = async (event) => {
    event.preventDefault()
    setMessage('')

    const validationMessage = validate(values)
    if (validationMessage) {
      setStatus('error')
      setMessage(validationMessage)
      return
    }

    setStatus('submitting')

    const payload = {
      ...values,
      name: values.name.trim(),
      email: values.email.trim(),
      company: values.company.trim(),
      country: values.country.trim(),
      product_category: values.product_category.trim(),
      estimated_quantity: values.estimated_quantity.trim(),
      message: values.message.trim(),
      status: 'new',
      created_at: new Date().toISOString(),
    }

    const { data: response, error } = await client
      .from('Sourcing Inquiries')
      .insert({ data: payload })
      .select()
      .single()

    if (error || response?.success === false) {
      setStatus('error')
      setMessage(getErrorMessage(response, error))
      return
    }

    setValues(initialValues)
    setStatus('success')
    setMessage('Thank you. Your sourcing inquiry has been received. We will review your details and reply with practical next steps.')
  }

  return (
    <form onSubmit={onSubmit} className="rounded-3xl border border-slate-200 bg-white p-6 text-slate-900 shadow-lg md:p-8" aria-busy={status === 'submitting'}>
      <div>
        <p className="text-sm font-bold uppercase tracking-[0.22em] text-blue-700">Inquiry form</p>
        <h2 className="mt-2 text-2xl font-bold text-slate-950">Get a Free Sourcing Quote</h2>
        <p className="mt-3 text-sm leading-6 text-slate-700">
          Share your product, quantity, and support needs. We will review whether SSourcing China can help and suggest a practical next step.
        </p>
      </div>

      <div className={`mt-6 grid gap-4 ${compact ? '' : 'md:grid-cols-2'}`}>
        <label className="grid gap-2 text-sm font-semibold text-slate-800">
          Name *
          <input className="rounded-xl border border-slate-300 bg-white px-4 py-3 text-slate-950 outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-100" name="name" value={values.name} onChange={onChange} placeholder="Your name" autoComplete="name" />
        </label>
        <label className="grid gap-2 text-sm font-semibold text-slate-800">
          Business email *
          <input className="rounded-xl border border-slate-300 bg-white px-4 py-3 text-slate-950 outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-100" name="email" type="email" value={values.email} onChange={onChange} placeholder="you@company.com" autoComplete="email" />
        </label>
        <label className="grid gap-2 text-sm font-semibold text-slate-800">
          Company
          <input className="rounded-xl border border-slate-300 bg-white px-4 py-3 text-slate-950 outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-100" name="company" value={values.company} onChange={onChange} placeholder="Company name" autoComplete="organization" />
        </label>
        <label className="grid gap-2 text-sm font-semibold text-slate-800">
          Country / region
          <input className="rounded-xl border border-slate-300 bg-white px-4 py-3 text-slate-950 outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-100" name="country" value={values.country} onChange={onChange} placeholder="United States, Germany, Australia..." autoComplete="country-name" />
        </label>
        <label className="grid gap-2 text-sm font-semibold text-slate-800">
          Product category *
          <input className="rounded-xl border border-slate-300 bg-white px-4 py-3 text-slate-950 outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-100" name="product_category" value={values.product_category} onChange={onChange} placeholder="e.g. kitchenware, packaging, electronics accessories" />
        </label>
        <label className="grid gap-2 text-sm font-semibold text-slate-800">
          Estimated quantity
          <input className="rounded-xl border border-slate-300 bg-white px-4 py-3 text-slate-950 outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-100" name="estimated_quantity" value={values.estimated_quantity} onChange={onChange} placeholder="e.g. 1,000 pcs / trial order" />
        </label>
        <label className="grid gap-2 text-sm font-semibold text-slate-800 md:col-span-2">
          Service needed
          <select className="rounded-xl border border-slate-300 bg-white px-4 py-3 text-slate-950 outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-100" name="service_needed" value={values.service_needed} onChange={onChange}>
            {serviceOptions.map((option) => (
              <option key={option.value} value={option.value}>{option.label}</option>
            ))}
          </select>
        </label>
        <label className="grid gap-2 text-sm font-semibold text-slate-800 md:col-span-2">
          Requirements *
          <textarea className="min-h-32 rounded-xl border border-slate-300 bg-white px-4 py-3 text-slate-950 outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-100" name="message" value={values.message} onChange={onChange} placeholder="Tell us about product specifications, target price range, certificates, packaging, timeline, and shipping destination." />
        </label>
      </div>

      <button type="submit" disabled={status === 'submitting'} className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-blue-600 px-6 py-3.5 text-sm font-bold text-white transition hover:bg-blue-700 disabled:cursor-not-allowed disabled:bg-slate-400 md:w-auto">
        {status === 'submitting' ? 'Submitting...' : 'Get a Free Sourcing Quote'}
        <Send className="h-4 w-4" aria-hidden="true" />
      </button>

      {message && (
        <p className={`mt-4 rounded-xl px-4 py-3 text-sm font-semibold ${status === 'success' ? 'bg-green-50 text-green-800' : 'bg-red-50 text-red-800'}`} role={status === 'success' ? 'status' : 'alert'}>
          {message}
        </p>
      )}
    </form>
  )
}
