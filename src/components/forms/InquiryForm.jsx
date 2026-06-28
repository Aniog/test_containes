import { useState } from 'react'
import { createInquiry, emptyInquiryValues, serviceOptions, validateInquiry } from '@/api/inquiries'
import { primaryCta } from '@/content/siteContent'

const fieldClassName =
  'mt-2 w-full rounded-2xl border border-site-border bg-white px-4 py-3 text-sm text-site-ink outline-none transition focus:border-brand focus:ring-4 focus:ring-brand/10'

const InquiryForm = ({ title = primaryCta, description = 'Tell us what you want to source and what support you need. The more specific your brief, the more useful our first response can be.' }) => {
  const [values, setValues] = useState(emptyInquiryValues)
  const [status, setStatus] = useState('idle')
  const [errorMessage, setErrorMessage] = useState('')
  const [submittedId, setSubmittedId] = useState('')

  const handleChange = (event) => {
    const { name, value } = event.target
    setValues((current) => ({
      ...current,
      [name]: value,
    }))
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    const validationMessage = validateInquiry(values)

    if (validationMessage) {
      setStatus('error')
      setErrorMessage(validationMessage)
      return
    }

    setStatus('submitting')
    setErrorMessage('')
    console.log('Sending inquiry form', values)

    const result = await createInquiry(values)

    if (!result.ok) {
      setStatus('error')
      setErrorMessage(result.error)
      return
    }

    setValues(emptyInquiryValues)
    setSubmittedId(String(result.entity?.id ?? ''))
    setStatus('success')
  }

  return (
    <div className="rounded-[2rem] border border-site-border bg-site-surface p-6 shadow-sm md:p-8">
      <div className="max-w-2xl">
        <h3 className="text-2xl font-semibold tracking-tight text-site-ink">{title}</h3>
        <p className="mt-3 text-base leading-7 text-site-muted">{description}</p>
      </div>

      <form className="mt-8 grid gap-5" onSubmit={handleSubmit} aria-busy={status === 'submitting'} id="inquiry-form">
        <div className="grid gap-5 md:grid-cols-2">
          <label className="text-sm font-medium text-site-ink">
            Name
            <input className={fieldClassName} name="name" onChange={handleChange} placeholder="Your full name" value={values.name} />
          </label>

          <label className="text-sm font-medium text-site-ink">
            Company
            <input className={fieldClassName} name="company" onChange={handleChange} placeholder="Company name" value={values.company} />
          </label>

          <label className="text-sm font-medium text-site-ink">
            Business email
            <input className={fieldClassName} name="email" onChange={handleChange} placeholder="name@company.com" type="email" value={values.email} />
          </label>

          <label className="text-sm font-medium text-site-ink">
            Phone / WhatsApp
            <input className={fieldClassName} name="phone" onChange={handleChange} placeholder="Optional" value={values.phone} />
          </label>

          <label className="text-sm font-medium text-site-ink">
            Country / Region
            <input className={fieldClassName} name="country" onChange={handleChange} placeholder="Where your business is based" value={values.country} />
          </label>

          <label className="text-sm font-medium text-site-ink">
            Service needed
            <select className={fieldClassName} name="service_needed" onChange={handleChange} value={values.service_needed}>
              {serviceOptions.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
          </label>

          <label className="text-sm font-medium text-site-ink">
            Product type
            <input className={fieldClassName} name="product_type" onChange={handleChange} placeholder="e.g. kitchen storage sets" value={values.product_type} />
          </label>

          <label className="text-sm font-medium text-site-ink">
            Quantity / MOQ target
            <input className={fieldClassName} name="quantity" onChange={handleChange} placeholder="Expected order size" value={values.quantity} />
          </label>
        </div>

        <div className="grid gap-5 md:grid-cols-[1.1fr_1.4fr]">
          <label className="text-sm font-medium text-site-ink">
            Target price / budget note
            <input className={fieldClassName} name="target_price" onChange={handleChange} placeholder="Optional" value={values.target_price} />
          </label>

          <label className="text-sm font-medium text-site-ink">
            Requirement details
            <textarea
              className={`${fieldClassName} min-h-40 resize-y`}
              name="message"
              onChange={handleChange}
              placeholder="Please share product details, specifications, target market, order quantity, drawings/photos, and the support you need."
              value={values.message}
            />
          </label>
        </div>

        <div className="flex flex-col gap-4 border-t border-site-border pt-5 md:flex-row md:items-center md:justify-between">
          <p className="text-sm leading-6 text-site-muted">
            We use your details to review your sourcing request and respond with relevant next steps.
          </p>

          <button
            className="inline-flex items-center justify-center rounded-full bg-brand px-6 py-3 text-sm font-semibold text-white transition hover:bg-brand-dark disabled:cursor-not-allowed disabled:bg-brand/70"
            disabled={status === 'submitting'}
            type="submit"
          >
            {status === 'submitting' ? 'Sending Inquiry…' : primaryCta}
          </button>
        </div>

        {status === 'error' ? (
          <p className="rounded-2xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700" role="alert">
            {errorMessage}
          </p>
        ) : null}

        {status === 'success' ? (
          <p className="rounded-2xl border border-emerald-200 bg-emerald-50 px-4 py-3 text-sm text-emerald-800" role="status">
            Thank you. Your sourcing request has been received{submittedId ? ` (Ref: ${submittedId})` : ''}. We will review the details and follow up with practical next steps.
          </p>
        ) : null}
      </form>
    </div>
  )
}

export default InquiryForm
