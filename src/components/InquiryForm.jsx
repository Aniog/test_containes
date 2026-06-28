import { useMemo, useState } from 'react'
import { DataClient } from '@strikingly/sdk'
import { STRK_PROJECT_ANON_KEY, STRK_PROJECT_URL } from '@/config.jsx'

const client = new DataClient(STRK_PROJECT_URL, STRK_PROJECT_ANON_KEY)

const initialValues = {
  companyName: '',
  contactName: '',
  email: '',
  country: '',
  serviceNeeded: 'Supplier sourcing',
  productCategory: '',
  quantityEstimate: '',
  targetPrice: '',
  timeline: '',
  message: '',
}

const services = [
  'Supplier sourcing',
  'Factory verification',
  'Quality inspection',
  'Production follow-up',
  'Shipping coordination',
  'Full sourcing support',
]

const getErrorMessage = (response, requestError) => {
  if (Array.isArray(response?.errors) && response.errors.length > 0) {
    return response.errors.join(', ')
  }

  return requestError?.message || 'Something went wrong while sending your inquiry.'
}

function InquiryForm({ title = 'Tell us what you need sourced', compact = false }) {
  const [values, setValues] = useState(initialValues)
  const [status, setStatus] = useState('idle')
  const [errorMessage, setErrorMessage] = useState('')
  const [successMessage, setSuccessMessage] = useState('')

  const layoutClass = useMemo(
    () =>
      compact
        ? 'grid gap-4 md:grid-cols-2'
        : 'grid gap-4 md:grid-cols-2',
    [compact],
  )

  const handleChange = (event) => {
    const { name, value } = event.target
    setValues((current) => ({ ...current, [name]: value }))
  }

  const validate = () => {
    if (!values.companyName.trim()) return 'Company name is required.'
    if (!values.contactName.trim()) return 'Contact name is required.'
    if (!values.email.trim()) return 'Business email is required.'
    if (!/^\S+@\S+\.\S+$/.test(values.email)) return 'Please enter a valid email address.'
    if (!values.country.trim()) return 'Country or region is required.'
    if (!values.productCategory.trim()) return 'Product category is required.'
    if (!values.message.trim()) return 'Please add a short sourcing brief.'
    if (values.message.trim().length < 10) return 'Please provide a bit more detail in your sourcing brief.'
    return ''
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    setErrorMessage('')
    setSuccessMessage('')

    const validationMessage = validate()
    if (validationMessage) {
      setStatus('error')
      setErrorMessage(validationMessage)
      return
    }

    setStatus('submitting')

    const { data: response, error } = await client
      .from('SourcingInquiry')
      .insert({
        data: {
          company_name: values.companyName.trim(),
          contact_name: values.contactName.trim(),
          email: values.email.trim(),
          country: values.country.trim(),
          service_needed: values.serviceNeeded,
          product_category: values.productCategory.trim(),
          quantity_estimate: values.quantityEstimate.trim(),
          target_price: values.targetPrice.trim(),
          timeline: values.timeline.trim(),
          message: values.message.trim(),
          created_at: new Date().toISOString(),
        },
      })
      .select()
      .single()

    if (error || response?.success === false) {
      setStatus('error')
      setErrorMessage(getErrorMessage(response, error))
      return
    }

    setValues(initialValues)
    setStatus('success')
    setSuccessMessage('Thanks. We received your inquiry and can review your sourcing brief.')
  }

  const inputClass =
    'w-full rounded-2xl border border-border-soft bg-surface px-4 py-3 text-sm text-ink outline-none transition focus:border-accent-strong focus:ring-2 focus:ring-brand-soft'

  return (
    <div id="inquiry-form" className="rounded-3xl border border-border-soft bg-surface p-6 shadow-sm md:p-8">
      <div className="mb-6 space-y-2">
        <h3 className="text-2xl font-semibold tracking-tight text-ink">{title}</h3>
        <p className="text-sm leading-6 text-muted">
          Share the product, quantity, target market, timing, and service you need. We will review the brief and respond with the next step.
        </p>
      </div>

      <form className="space-y-4" onSubmit={handleSubmit} aria-busy={status === 'submitting'}>
        <div className={layoutClass}>
          <label className="space-y-2 text-sm font-medium text-ink">
            <span>Company name</span>
            <input className={inputClass} name="companyName" value={values.companyName} onChange={handleChange} placeholder="Your company" />
          </label>
          <label className="space-y-2 text-sm font-medium text-ink">
            <span>Contact name</span>
            <input className={inputClass} name="contactName" value={values.contactName} onChange={handleChange} placeholder="Your name" />
          </label>
          <label className="space-y-2 text-sm font-medium text-ink">
            <span>Business email</span>
            <input className={inputClass} name="email" type="email" value={values.email} onChange={handleChange} placeholder="name@company.com" />
          </label>
          <label className="space-y-2 text-sm font-medium text-ink">
            <span>Country or region</span>
            <input className={inputClass} name="country" value={values.country} onChange={handleChange} placeholder="United States" />
          </label>
          <label className="space-y-2 text-sm font-medium text-ink">
            <span>Service needed</span>
            <select className={inputClass} name="serviceNeeded" value={values.serviceNeeded} onChange={handleChange}>
              {services.map((service) => (
                <option key={service} value={service}>
                  {service}
                </option>
              ))}
            </select>
          </label>
          <label className="space-y-2 text-sm font-medium text-ink">
            <span>Product category</span>
            <input className={inputClass} name="productCategory" value={values.productCategory} onChange={handleChange} placeholder="Kitchenware, packaging, accessories" />
          </label>
          <label className="space-y-2 text-sm font-medium text-ink">
            <span>Quantity estimate</span>
            <input className={inputClass} name="quantityEstimate" value={values.quantityEstimate} onChange={handleChange} placeholder="e.g. 5,000 units" />
          </label>
          <label className="space-y-2 text-sm font-medium text-ink">
            <span>Target price or budget</span>
            <input className={inputClass} name="targetPrice" value={values.targetPrice} onChange={handleChange} placeholder="Optional" />
          </label>
        </div>

        <label className="space-y-2 text-sm font-medium text-ink">
          <span>Target timeline</span>
          <input className={inputClass} name="timeline" value={values.timeline} onChange={handleChange} placeholder="Sampling in 2 weeks, shipment in 8 weeks" />
        </label>

        <label className="space-y-2 text-sm font-medium text-ink">
          <span>Sourcing brief</span>
          <textarea
            className={`${inputClass} min-h-36 resize-y`}
            name="message"
            value={values.message}
            onChange={handleChange}
            placeholder="Describe the product, specifications, target market, quality requirements, packaging needs, and timeline."
          />
        </label>

        <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
          <p className="text-xs leading-6 text-muted">
            By sending this form, you are requesting a sourcing review for your project.
          </p>
          <button
            type="submit"
            className="inline-flex items-center justify-center rounded-full bg-accent-strong px-6 py-3 text-sm font-semibold text-onbrand transition hover:bg-brand disabled:cursor-not-allowed disabled:opacity-70"
            disabled={status === 'submitting'}
          >
            {status === 'submitting' ? 'Sending inquiry...' : 'Get a Free Sourcing Quote'}
          </button>
        </div>

        {status === 'error' && errorMessage ? (
          <p className="rounded-2xl border border-amber-200 bg-amber-50 px-4 py-3 text-sm text-ink" role="alert">
            {errorMessage}
          </p>
        ) : null}

        {status === 'success' && successMessage ? (
          <p className="rounded-2xl border border-emerald-200 bg-emerald-50 px-4 py-3 text-sm text-ink" role="status">
            {successMessage}
          </p>
        ) : null}
      </form>
    </div>
  )
}

export default InquiryForm
