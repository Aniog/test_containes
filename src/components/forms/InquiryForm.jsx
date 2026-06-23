import { useState } from 'react'
import { Send, ShieldCheck } from 'lucide-react'
import { dataClient, getErrorMessage } from '../../lib/database'

const initialValues = {
  name: '',
  email: '',
  company: '',
  country: '',
  product_category: '',
  order_quantity: '',
  service_needed: 'full_sourcing_project',
  message: '',
}

const serviceOptions = [
  { value: 'full_sourcing_project', label: 'Full sourcing project' },
  { value: 'supplier_sourcing', label: 'Supplier sourcing' },
  { value: 'factory_verification', label: 'Factory verification' },
  { value: 'quality_inspection', label: 'Quality inspection' },
  { value: 'production_follow_up', label: 'Production follow-up' },
  { value: 'shipping_coordination', label: 'Shipping coordination' },
]

const validate = (values) => {
  if (!values.name.trim()) return 'Please enter your name.'
  if (!values.email.trim()) return 'Please enter your business email.'
  if (!/^\S+@\S+\.\S+$/.test(values.email)) return 'Please enter a valid email address.'
  if (!values.product_category.trim()) return 'Please describe the product you want to source.'
  if (!values.message.trim()) return 'Please add a few project details.'
  return null
}

const fieldClass = 'mt-2 w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-sm text-slate-950 placeholder:text-slate-500 outline-none transition focus:border-blue-700 focus:ring-4 focus:ring-blue-100'
const labelClass = 'text-sm font-semibold text-slate-800'

const InquiryForm = ({ compact = false }) => {
  const [values, setValues] = useState(initialValues)
  const [status, setStatus] = useState('idle')
  const [message, setMessage] = useState('')

  const handleChange = (event) => {
    const { name, value } = event.target
    setValues((current) => ({ ...current, [name]: value }))
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    const validationMessage = validate(values)

    if (validationMessage) {
      setStatus('error')
      setMessage(validationMessage)
      return
    }

    setStatus('submitting')
    setMessage('')

    const payload = {
      ...values,
      name: values.name.trim(),
      email: values.email.trim(),
      company: values.company.trim(),
      country: values.country.trim(),
      product_category: values.product_category.trim(),
      order_quantity: values.order_quantity.trim(),
      message: values.message.trim(),
      submitted_at: new Date().toISOString(),
    }

    const { data: response, error } = await dataClient
      .from('Sourcing Inquiries')
      .insert({ data: payload })
      .select()
      .single()

    if (error || response?.success === false) {
      setStatus('error')
      setMessage(getErrorMessage(response, error))
      return
    }

    setStatus('success')
    setMessage('Thank you. Your sourcing inquiry has been received and we will review your requirements.')
    setValues(initialValues)
  }

  return (
    <form className="rounded-3xl border border-slate-200 bg-white p-6 text-slate-900 shadow-xl sm:p-8" onSubmit={handleSubmit} aria-busy={status === 'submitting'}>
      <div className="flex items-start gap-3">
        <span className="rounded-2xl bg-blue-50 p-3 text-blue-700">
          <ShieldCheck className="h-6 w-6" />
        </span>
        <div>
          <h2 className="text-2xl font-bold text-slate-950">Get a Free Sourcing Quote</h2>
          <p className="mt-2 text-sm leading-6 text-slate-600">
            Share your product and sourcing needs. We will reply with practical next steps.
          </p>
        </div>
      </div>

      <div className={`mt-6 grid gap-5 ${compact ? 'grid-cols-1' : 'md:grid-cols-2'}`}>
        <label className={labelClass} htmlFor="name">
          Name *
          <input className={fieldClass} id="name" name="name" value={values.name} onChange={handleChange} placeholder="Your name" autoComplete="name" />
        </label>
        <label className={labelClass} htmlFor="email">
          Business email *
          <input className={fieldClass} id="email" name="email" type="email" value={values.email} onChange={handleChange} placeholder="you@company.com" autoComplete="email" />
        </label>
        <label className={labelClass} htmlFor="company">
          Company
          <input className={fieldClass} id="company" name="company" value={values.company} onChange={handleChange} placeholder="Company name" autoComplete="organization" />
        </label>
        <label className={labelClass} htmlFor="country">
          Country / market
          <input className={fieldClass} id="country" name="country" value={values.country} onChange={handleChange} placeholder="United States, Germany, Australia..." autoComplete="country-name" />
        </label>
        <label className={labelClass} htmlFor="product_category">
          Product category *
          <input className={fieldClass} id="product_category" name="product_category" value={values.product_category} onChange={handleChange} placeholder="Packaging, tools, electronics accessories..." />
        </label>
        <label className={labelClass} htmlFor="order_quantity">
          Estimated quantity
          <input className={fieldClass} id="order_quantity" name="order_quantity" value={values.order_quantity} onChange={handleChange} placeholder="MOQ, monthly volume, trial order..." />
        </label>
      </div>

      <label className={`mt-5 block ${labelClass}`} htmlFor="service_needed">
        Service needed *
        <select className={fieldClass} id="service_needed" name="service_needed" value={values.service_needed} onChange={handleChange}>
          {serviceOptions.map((option) => (
            <option key={option.value} value={option.value}>{option.label}</option>
          ))}
        </select>
      </label>

      <label className={`mt-5 block ${labelClass}`} htmlFor="message">
        Project details *
        <textarea className={`${fieldClass} min-h-36 resize-y`} id="message" name="message" value={values.message} onChange={handleChange} placeholder="Tell us the product, specifications, target price, timeline, inspection needs, or supplier issues you want to solve." />
      </label>

      <button className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-blue-700 px-6 py-3.5 text-sm font-semibold text-white shadow-sm transition hover:bg-blue-950 disabled:cursor-not-allowed disabled:bg-slate-400" type="submit" disabled={status === 'submitting'}>
        {status === 'submitting' ? 'Sending inquiry...' : 'Get a Free Sourcing Quote'}
        <Send className="h-4 w-4" />
      </button>

      {message && (
        <p className={`mt-4 rounded-xl px-4 py-3 text-sm font-medium ${status === 'success' ? 'bg-emerald-50 text-emerald-800' : 'bg-amber-50 text-amber-900'}`} role={status === 'success' ? 'status' : 'alert'}>
          {message}
        </p>
      )}

      <p className="mt-4 text-xs leading-5 text-slate-500">
        We use your details only to review and respond to your sourcing request.
      </p>
    </form>
  )
}

export default InquiryForm
