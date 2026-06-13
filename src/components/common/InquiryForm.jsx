import { useMemo, useState } from 'react'
import { ArrowRight, CheckCircle2, LoaderCircle } from 'lucide-react'
import { submitInquiry } from '../../lib/inquiries.js'
import { serviceOptions } from '../../siteContent.js'

const initialValues = {
  company_name: '',
  contact_name: '',
  email: '',
  phone: '',
  website: '',
  product_category: '',
  quantity_estimate: '',
  target_market: '',
  services_needed: [],
  message: '',
}

const fieldClassName =
  'w-full rounded-2xl border border-slate-300 bg-white px-4 py-3 text-base text-slate-900 outline-none transition focus:border-blue-700 focus:ring-4 focus:ring-blue-100 placeholder:text-slate-400'

const validateEmail = (value) => /\S+@\S+\.\S+/.test(value)

const InquiryForm = ({ compact = false }) => {
  const [values, setValues] = useState(initialValues)
  const [status, setStatus] = useState('idle')
  const [error, setError] = useState('')
  const [submittedInquiry, setSubmittedInquiry] = useState(null)

  const formClassName = useMemo(
    () =>
      compact
        ? 'grid gap-5 rounded-3xl border border-slate-200 bg-white p-6 shadow-sm md:p-8'
        : 'grid gap-5 rounded-[32px] border border-slate-200 bg-white p-6 shadow-sm md:grid-cols-2 md:p-8',
    [compact],
  )

  const updateField = (event) => {
    const { name, value } = event.target
    setValues((current) => ({ ...current, [name]: value }))
  }

  const toggleService = (service) => {
    setValues((current) => ({
      ...current,
      services_needed: current.services_needed.includes(service)
        ? current.services_needed.filter((item) => item !== service)
        : [...current.services_needed, service],
    }))
  }

  const validate = () => {
    if (!values.company_name.trim()) return 'Please enter your company name.'
    if (!values.contact_name.trim()) return 'Please enter a contact name.'
    if (!values.email.trim() || !validateEmail(values.email.trim())) {
      return 'Please enter a valid business email address.'
    }
    if (!values.product_category.trim()) return 'Please tell us what product you need.'
    if (values.services_needed.length === 0) return 'Please choose at least one service.'
    if (values.message.trim().length < 10) {
      return 'Please add a few details about your sourcing requirement.'
    }
    return ''
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    const validationError = validate()

    if (validationError) {
      setError(validationError)
      setStatus('error')
      return
    }

    setStatus('submitting')
    setError('')

    try {
      const createdInquiry = await submitInquiry(values)
      setSubmittedInquiry(createdInquiry)
      setValues(initialValues)
      setStatus('success')
    } catch (submissionError) {
      console.error('Inquiry submission failed', submissionError)
      setError(submissionError.message || 'Failed to submit inquiry')
      setStatus('error')
    }
  }

  return (
    <div className="space-y-5">
      {status === 'success' && (
        <div className="rounded-3xl border border-emerald-200 bg-emerald-50 p-4 text-emerald-800">
          <div className="flex items-start gap-3">
            <CheckCircle2 className="mt-0.5 h-5 w-5 flex-none" />
            <div className="space-y-1">
              <p className="font-semibold">Inquiry received</p>
              <p className="text-sm leading-6 text-emerald-700">
                Thank you. We have received your sourcing request and will review the details for the next step.
              </p>
              {submittedInquiry?.id && (
                <p className="text-sm font-medium text-emerald-700">Reference: #{submittedInquiry.id}</p>
              )}
            </div>
          </div>
        </div>
      )}

      <form className={formClassName} onSubmit={handleSubmit}>
        <div className="space-y-2">
          <label className="text-sm font-medium text-slate-900" htmlFor="company_name">
            Company name
          </label>
          <input id="company_name" name="company_name" className={fieldClassName} value={values.company_name} onChange={updateField} placeholder="Your company" />
        </div>

        <div className="space-y-2">
          <label className="text-sm font-medium text-slate-900" htmlFor="contact_name">
            Contact name
          </label>
          <input id="contact_name" name="contact_name" className={fieldClassName} value={values.contact_name} onChange={updateField} placeholder="Full name" />
        </div>

        <div className="space-y-2">
          <label className="text-sm font-medium text-slate-900" htmlFor="email">
            Business email
          </label>
          <input id="email" name="email" type="email" className={fieldClassName} value={values.email} onChange={updateField} placeholder="name@company.com" />
        </div>

        <div className="space-y-2">
          <label className="text-sm font-medium text-slate-900" htmlFor="phone">
            Phone or WhatsApp
          </label>
          <input id="phone" name="phone" className={fieldClassName} value={values.phone} onChange={updateField} placeholder="Optional" />
        </div>

        <div className="space-y-2">
          <label className="text-sm font-medium text-slate-900" htmlFor="website">
            Company website
          </label>
          <input id="website" name="website" type="url" className={fieldClassName} value={values.website} onChange={updateField} placeholder="https://" />
        </div>

        <div className="space-y-2">
          <label className="text-sm font-medium text-slate-900" htmlFor="target_market">
            Target market
          </label>
          <input id="target_market" name="target_market" className={fieldClassName} value={values.target_market} onChange={updateField} placeholder="e.g. USA, EU, UK" />
        </div>

        <div className="space-y-2">
          <label className="text-sm font-medium text-slate-900" htmlFor="product_category">
            Product category
          </label>
          <input id="product_category" name="product_category" className={fieldClassName} value={values.product_category} onChange={updateField} placeholder="What do you need to source?" />
        </div>

        <div className="space-y-2">
          <label className="text-sm font-medium text-slate-900" htmlFor="quantity_estimate">
            Estimated quantity or MOQ target
          </label>
          <input id="quantity_estimate" name="quantity_estimate" className={fieldClassName} value={values.quantity_estimate} onChange={updateField} placeholder="Optional" />
        </div>

        <div className={compact ? 'space-y-3' : 'space-y-3 md:col-span-2'}>
          <span className="text-sm font-medium text-slate-900">Services needed</span>
          <div className="grid gap-3 md:grid-cols-3">
            {serviceOptions.map((service) => {
              const checked = values.services_needed.includes(service)

              return (
                <label
                  key={service}
                  className={[
                    'flex cursor-pointer items-center gap-3 rounded-2xl border px-4 py-3 text-sm font-medium transition',
                    checked
                      ? 'border-blue-700 bg-blue-50 text-blue-800'
                      : 'border-slate-200 bg-slate-50 text-slate-700 hover:border-slate-300',
                  ].join(' ')}
                >
                  <input
                    type="checkbox"
                    className="h-4 w-4 rounded border-slate-300 text-blue-700 focus:ring-blue-600"
                    checked={checked}
                    onChange={() => toggleService(service)}
                  />
                  <span>{service}</span>
                </label>
              )
            })}
          </div>
        </div>

        <div className={compact ? 'space-y-2' : 'space-y-2 md:col-span-2'}>
          <label className="text-sm font-medium text-slate-900" htmlFor="message">
            Inquiry details
          </label>
          <textarea
            id="message"
            name="message"
            rows={6}
            className={fieldClassName}
            value={values.message}
            onChange={updateField}
            placeholder="Product details, target price range, quality concerns, timeline, or any supplier information you already have"
          />
        </div>

        <div className={compact ? 'space-y-3' : 'space-y-3 md:col-span-2'}>
          {error && <p className="rounded-2xl border border-amber-200 bg-amber-50 px-4 py-3 text-sm text-amber-800">{error}</p>}
          <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
            <p className="max-w-2xl text-sm leading-6 text-slate-500">
              Share as much detail as you can. A clear inquiry helps us assess supplier fit, verification scope, and next-step recommendations.
            </p>
            <button
              type="submit"
              disabled={status === 'submitting'}
              className="inline-flex items-center justify-center gap-2 rounded-full bg-blue-700 px-6 py-3 text-sm font-semibold text-white transition hover:bg-blue-800 disabled:cursor-not-allowed disabled:bg-blue-400"
            >
              {status === 'submitting' ? (
                <>
                  <LoaderCircle className="h-4 w-4 animate-spin" />
                  Sending inquiry
                </>
              ) : (
                <>
                  Get a Free Sourcing Quote
                  <ArrowRight className="h-4 w-4" />
                </>
              )}
            </button>
          </div>
        </div>
      </form>
    </div>
  )
}

export default InquiryForm
