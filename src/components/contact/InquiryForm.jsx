import { useState } from 'react'
import { Mail, MessageSquare, Package, User } from 'lucide-react'

const initialValues = {
  name: '',
  email: '',
  company: '',
  country: '',
  product: '',
  quantity: '',
  support: 'Supplier search and quotation comparison',
  details: '',
}

const fieldClass = 'mt-2 w-full rounded-2xl border border-brand-line bg-white px-4 py-3 text-sm text-slate-900 placeholder:text-slate-400 focus:border-brand-blue focus:outline-none focus:ring-4 focus:ring-brand-blue/10 disabled:cursor-not-allowed disabled:bg-slate-100 disabled:text-slate-500'

function validateInquiry(values) {
  if (!values.name.trim()) return 'Please enter your name.'
  if (!values.email.trim()) return 'Please enter your business email.'
  if (!/^\S+@\S+\.\S+$/.test(values.email.trim())) return 'Please enter a valid business email.'
  if (!values.product.trim()) return 'Please enter the product category you want to source.'
  if (values.details.trim().length < 10) return 'Please add at least a short description of your sourcing project.'
  return null
}

export default function InquiryForm() {
  const [values, setValues] = useState(initialValues)
  const [status, setStatus] = useState('idle')
  const [message, setMessage] = useState('')

  const handleChange = (event) => {
    const { name, value } = event.target
    setValues((current) => ({ ...current, [name]: value }))
    if (status !== 'idle') {
      setStatus('idle')
      setMessage('')
    }
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    const validationError = validateInquiry(values)
    if (validationError) {
      setStatus('error')
      setMessage(validationError)
      return
    }

    setStatus('success')
    setMessage('Thank you. This frontend preview has captured your inquiry locally for design review. Submission handling can be connected later if needed.')
    setValues(initialValues)
  }

  return (
    <section className="bg-white py-16 sm:py-20">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
        <div className="rounded-3xl bg-brand-navy p-8 text-white lg:p-10">
          <p className="text-sm font-semibold uppercase tracking-widest text-brand-amber">Start an inquiry</p>
          <h2 className="mt-4 text-3xl font-bold tracking-tight text-white">Get a Free Sourcing Quote</h2>
          <p className="mt-5 text-sm leading-7 text-blue-100">
            Share your product details and we will review what information is needed to begin supplier search, quotation comparison, factory verification, QC planning, or shipping coordination.
          </p>
          <div className="mt-8 grid gap-5 text-sm text-blue-100">
            <p className="flex gap-3"><Package className="mt-0.5 h-5 w-5 text-brand-amber" /> Product type, quantity, target price, and destination</p>
            <p className="flex gap-3"><MessageSquare className="mt-0.5 h-5 w-5 text-brand-amber" /> Drawings, photos, product links, samples, or requirements</p>
            <p className="flex gap-3"><Mail className="mt-0.5 h-5 w-5 text-brand-amber" /> We will respond with next-step questions or a suggested sourcing plan</p>
          </div>
        </div>

        <form className="rounded-3xl border border-brand-line bg-slate-50 p-6 text-slate-900 shadow-sm sm:p-8" aria-label="Sourcing inquiry form" onSubmit={handleSubmit}>
          <div className="grid gap-5 md:grid-cols-2">
            <label className="text-sm font-semibold text-slate-800">
              Name
              <div className="relative">
                <User className="pointer-events-none absolute left-4 top-5 h-4 w-4 text-slate-400" aria-hidden="true" />
                <input className={`${fieldClass} pl-11`} type="text" name="name" placeholder="Your name" value={values.name} onChange={handleChange} required />
              </div>
            </label>
            <label className="text-sm font-semibold text-slate-800">
              Business email
              <input className={fieldClass} type="email" name="email" placeholder="you@company.com" value={values.email} onChange={handleChange} required />
            </label>
            <label className="text-sm font-semibold text-slate-800">
              Company
              <input className={fieldClass} type="text" name="company" placeholder="Company name" value={values.company} onChange={handleChange} />
            </label>
            <label className="text-sm font-semibold text-slate-800">
              Country / market
              <input className={fieldClass} type="text" name="country" placeholder="United States, Germany, UAE..." value={values.country} onChange={handleChange} />
            </label>
          </div>
          <div className="mt-5 grid gap-5 md:grid-cols-2">
            <label className="text-sm font-semibold text-slate-800">
              Product category
              <input className={fieldClass} type="text" name="product" placeholder="Industrial parts, packaging, electronics..." value={values.product} onChange={handleChange} required />
            </label>
            <label className="text-sm font-semibold text-slate-800">
              Estimated order quantity
              <input className={fieldClass} type="text" name="quantity" placeholder="MOQ, trial order, annual volume" value={values.quantity} onChange={handleChange} />
            </label>
          </div>
          <label className="mt-5 block text-sm font-semibold text-slate-800">
            What sourcing support do you need?
            <select className={fieldClass} name="support" value={values.support} onChange={handleChange}>
              <option>Supplier search and quotation comparison</option>
              <option>Factory verification</option>
              <option>Quality inspection</option>
              <option>Production follow-up</option>
              <option>Shipping coordination</option>
              <option>Full sourcing project support</option>
            </select>
          </label>
          <label className="mt-5 block text-sm font-semibold text-slate-800">
            Project details
            <textarea className={`${fieldClass} min-h-36`} name="details" placeholder="Please include specifications, target timeline, quality requirements, destination, or any supplier links you already have." value={values.details} onChange={handleChange} required />
          </label>
          <button type="submit" className="mt-6 inline-flex w-full items-center justify-center rounded-full bg-brand-blue px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-brand-blue/20 transition hover:bg-brand-navy focus:outline-none focus:ring-4 focus:ring-brand-blue/20 sm:w-auto">
            Get a Free Sourcing Quote
          </button>
          {message && (
            <p className={`mt-4 rounded-2xl border px-4 py-3 text-sm leading-6 ${status === 'success' ? 'border-emerald-200 bg-emerald-50 text-emerald-800' : 'border-red-200 bg-red-50 text-red-800'}`} role={status === 'success' ? 'status' : 'alert'}>
              {message}
            </p>
          )}
          <p className="mt-4 text-xs leading-5 text-slate-500">
            Frontend preview only: the form is visual/local and does not send data to a server.
          </p>
        </form>
      </div>
    </section>
  )
}
