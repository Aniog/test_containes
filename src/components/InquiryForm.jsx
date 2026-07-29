import { useState } from 'react'
import { CheckCircle, Loader2 } from 'lucide-react'
import { createSourcingInquiry } from '../api/inquiries'

const serviceOptions = [
  ['supplier_sourcing', 'Supplier sourcing'],
  ['supplier_verification', 'Supplier verification'],
  ['factory_audit', 'Factory audit'],
  ['quality_inspection', 'Quality inspection'],
  ['production_follow_up', 'Production follow-up'],
  ['shipping_coordination', 'Shipping coordination'],
]

const initialValues = {
  company_name: '',
  contact_name: '',
  email: '',
  phone: '',
  country_region: '',
  product_category: '',
  product_details: '',
  estimated_order_quantity: '',
  target_budget: '',
  services_needed: ['supplier_sourcing'],
  timeline: '',
  message: '',
}

export default function InquiryForm() {
  const [values, setValues] = useState(initialValues)
  const [status, setStatus] = useState('idle')
  const [feedback, setFeedback] = useState('')

  const updateValue = (event) => {
    const { name, value } = event.target
    setValues((current) => ({ ...current, [name]: value }))
  }

  const toggleService = (value) => {
    setValues((current) => {
      const exists = current.services_needed.includes(value)
      const services = exists
        ? current.services_needed.filter((item) => item !== value)
        : [...current.services_needed, value]

      return { ...current, services_needed: services.length ? services : ['supplier_sourcing'] }
    })
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    setStatus('submitting')
    setFeedback('')

    const payload = {
      ...values,
      status: 'new',
      submitted_at: new Date().toISOString(),
    }

    try {
      await createSourcingInquiry(payload)
      setValues(initialValues)
      setStatus('success')
      setFeedback('Thank you. Your sourcing inquiry has been received. We will review it and reply with the next practical steps.')
    } catch (error) {
      setStatus('error')
      setFeedback(error.message || 'Unable to submit the inquiry. Please try again.')
    }
  }

  return (
    <form onSubmit={handleSubmit} className="rounded-3xl border border-sourcing-mist bg-white p-6 text-sourcing-ink shadow-soft md:p-8">
      <div className="grid gap-4 md:grid-cols-2">
        <label className="grid gap-2 text-sm font-semibold text-sourcing-ink">
          Company name
          <input required name="company_name" value={values.company_name} onChange={updateValue} className="form-field" placeholder="Your company" />
        </label>
        <label className="grid gap-2 text-sm font-semibold text-sourcing-ink">
          Contact name
          <input required name="contact_name" value={values.contact_name} onChange={updateValue} className="form-field" placeholder="Your name" />
        </label>
        <label className="grid gap-2 text-sm font-semibold text-sourcing-ink">
          Business email
          <input required type="email" name="email" value={values.email} onChange={updateValue} className="form-field" placeholder="name@company.com" />
        </label>
        <label className="grid gap-2 text-sm font-semibold text-sourcing-ink">
          Phone or WhatsApp
          <input name="phone" value={values.phone} onChange={updateValue} className="form-field" placeholder="Optional" />
        </label>
        <label className="grid gap-2 text-sm font-semibold text-sourcing-ink">
          Country / region
          <input required name="country_region" value={values.country_region} onChange={updateValue} className="form-field" placeholder="United States, Germany, Australia..." />
        </label>
        <label className="grid gap-2 text-sm font-semibold text-sourcing-ink">
          Product category
          <input required name="product_category" value={values.product_category} onChange={updateValue} className="form-field" placeholder="Industrial parts, packaging, electronics..." />
        </label>
      </div>

      <label className="mt-4 grid gap-2 text-sm font-semibold text-sourcing-ink">
        Product requirements
        <textarea required minLength={10} name="product_details" value={values.product_details} onChange={updateValue} rows="4" className="form-field" placeholder="Describe specifications, materials, standards, photos/drawings available, target market, and supplier expectations." />
      </label>

      <div className="mt-4 grid gap-4 md:grid-cols-2">
        <label className="grid gap-2 text-sm font-semibold text-sourcing-ink">
          Estimated order quantity
          <input name="estimated_order_quantity" value={values.estimated_order_quantity} onChange={updateValue} className="form-field" placeholder="e.g. 2,000 pcs or one 20ft container" />
        </label>
        <label className="grid gap-2 text-sm font-semibold text-sourcing-ink">
          Target budget or price range
          <input name="target_budget" value={values.target_budget} onChange={updateValue} className="form-field" placeholder="Optional" />
        </label>
      </div>

      <fieldset className="mt-5">
        <legend className="text-sm font-semibold text-sourcing-ink">Services needed</legend>
        <div className="mt-3 grid gap-2 sm:grid-cols-2">
          {serviceOptions.map(([value, label]) => (
            <label key={value} className="flex items-center gap-3 rounded-xl border border-sourcing-mist bg-sourcing-cloud px-3 py-2 text-sm font-medium text-sourcing-ink">
              <input type="checkbox" checked={values.services_needed.includes(value)} onChange={() => toggleService(value)} className="h-4 w-4 rounded border-sourcing-muted text-sourcing-blue" />
              {label}
            </label>
          ))}
        </div>
      </fieldset>

      <label className="mt-4 grid gap-2 text-sm font-semibold text-sourcing-ink">
        Timeline
        <input name="timeline" value={values.timeline} onChange={updateValue} className="form-field" placeholder="Sampling this month, production in Q4..." />
      </label>
      <label className="mt-4 grid gap-2 text-sm font-semibold text-sourcing-ink">
        Additional message
        <textarea name="message" value={values.message} onChange={updateValue} rows="3" className="form-field" placeholder="Any supplier links, questions, or special requirements." />
      </label>

      <button type="submit" disabled={status === 'submitting'} className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-sourcing-blue px-6 py-4 text-base font-semibold text-white transition hover:bg-sourcing-navy disabled:cursor-not-allowed disabled:opacity-70">
        {status === 'submitting' ? <Loader2 className="h-5 w-5 animate-spin" /> : <CheckCircle className="h-5 w-5" />}
        {status === 'submitting' ? 'Submitting inquiry...' : 'Get a Free Sourcing Quote'}
      </button>

      {feedback && (
        <p role={status === 'error' ? 'alert' : 'status'} className={`mt-4 rounded-2xl px-4 py-3 text-sm font-medium ${status === 'error' ? 'bg-red-50 text-red-700' : 'bg-green-50 text-green-800'}`}>
          {feedback}
        </p>
      )}
    </form>
  )
}
