import { useMemo, useState } from 'react'
import { ArrowRight, CheckCircle2 } from 'lucide-react'
import { serviceNeedOptions } from '@/content/siteContent'
import { submitInquiry } from '@/api/inquiries'

const initialValues = {
  company_name: '',
  contact_name: '',
  email: '',
  phone: '',
  country: '',
  product_description: '',
  quantity: '',
  services_needed: [],
  sourcing_stage: 'Need supplier search',
  target_market: '',
  message: '',
}

const sourcingStages = [
  'Need supplier search',
  'Comparing suppliers',
  'Sample stage',
  'Production ready',
  'Need inspection or shipping support',
]

const InquiryForm = ({ compact = false }) => {
  const [values, setValues] = useState(initialValues)
  const [status, setStatus] = useState('idle')
  const [error, setError] = useState('')

  const layoutClass = useMemo(
    () =>
      compact
        ? 'grid gap-4 md:grid-cols-2'
        : 'grid gap-4 md:grid-cols-2 lg:grid-cols-2',
    [compact],
  )

  const updateField = (field, value) => {
    setValues((current) => ({ ...current, [field]: value }))
  }

  const toggleService = (service) => {
    setValues((current) => {
      const exists = current.services_needed.includes(service)
      return {
        ...current,
        services_needed: exists
          ? current.services_needed.filter((item) => item !== service)
          : [...current.services_needed, service],
      }
    })
  }

  const validate = () => {
    if (!values.contact_name.trim()) return 'Please enter your contact name.'
    if (!values.email.trim()) return 'Please enter your email address.'
    if (!/^\S+@\S+\.\S+$/.test(values.email)) return 'Please enter a valid email address.'
    if (!values.product_description.trim()) return 'Please describe the product you want to source.'
    if (!values.message.trim()) return 'Please share your sourcing requirements.'
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
      await submitInquiry(values)
      setValues(initialValues)
      setStatus('success')
    } catch (submissionError) {
      console.error('Inquiry submission failed', submissionError)
      setError(submissionError.message || 'Unable to submit your inquiry right now.')
      setStatus('error')
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-[2rem] border border-slate-200 bg-white p-6 text-slate-900 shadow-sm md:p-8"
      aria-busy={status === 'submitting'}
    >
      <div className="max-w-2xl">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-700">
          Inquiry Form
        </p>
        <h3 className="mt-3 text-2xl font-semibold tracking-tight text-slate-950 md:text-3xl">
          Get a Free Sourcing Quote
        </h3>
        <p className="mt-3 text-base leading-7 text-slate-600">
          Share your product and sourcing needs. We will review the brief and respond with the most practical next step.
        </p>
      </div>

      <div className={`mt-8 ${layoutClass}`}>
        <label className="grid gap-2 text-sm font-medium text-slate-700">
          Company name
          <input
            type="text"
            value={values.company_name}
            onChange={(event) => updateField('company_name', event.target.value)}
            placeholder="Your company"
            className="rounded-2xl border border-slate-300 bg-white px-4 py-3 text-sm text-slate-950 outline-none transition placeholder:text-slate-400 focus:border-blue-700"
          />
        </label>

        <label className="grid gap-2 text-sm font-medium text-slate-700">
          Contact name
          <input
            type="text"
            value={values.contact_name}
            onChange={(event) => updateField('contact_name', event.target.value)}
            placeholder="Your name"
            className="rounded-2xl border border-slate-300 bg-white px-4 py-3 text-sm text-slate-950 outline-none transition placeholder:text-slate-400 focus:border-blue-700"
            required
          />
        </label>

        <label className="grid gap-2 text-sm font-medium text-slate-700">
          Email
          <input
            type="email"
            value={values.email}
            onChange={(event) => updateField('email', event.target.value)}
            placeholder="you@company.com"
            className="rounded-2xl border border-slate-300 bg-white px-4 py-3 text-sm text-slate-950 outline-none transition placeholder:text-slate-400 focus:border-blue-700"
            required
          />
        </label>

        <label className="grid gap-2 text-sm font-medium text-slate-700">
          Phone / WhatsApp
          <input
            type="text"
            value={values.phone}
            onChange={(event) => updateField('phone', event.target.value)}
            placeholder="Optional"
            className="rounded-2xl border border-slate-300 bg-white px-4 py-3 text-sm text-slate-950 outline-none transition placeholder:text-slate-400 focus:border-blue-700"
          />
        </label>

        <label className="grid gap-2 text-sm font-medium text-slate-700">
          Country
          <input
            type="text"
            value={values.country}
            onChange={(event) => updateField('country', event.target.value)}
            placeholder="Destination market country"
            className="rounded-2xl border border-slate-300 bg-white px-4 py-3 text-sm text-slate-950 outline-none transition placeholder:text-slate-400 focus:border-blue-700"
          />
        </label>

        <label className="grid gap-2 text-sm font-medium text-slate-700">
          Quantity / MOQ target
          <input
            type="text"
            value={values.quantity}
            onChange={(event) => updateField('quantity', event.target.value)}
            placeholder="Example: 5,000 units"
            className="rounded-2xl border border-slate-300 bg-white px-4 py-3 text-sm text-slate-950 outline-none transition placeholder:text-slate-400 focus:border-blue-700"
          />
        </label>
      </div>

      <div className="mt-4 grid gap-4">
        <label className="grid gap-2 text-sm font-medium text-slate-700">
          Product description
          <textarea
            value={values.product_description}
            onChange={(event) => updateField('product_description', event.target.value)}
            rows={4}
            placeholder="Describe the product, materials, specifications, packaging, or reference information"
            className="rounded-3xl border border-slate-300 bg-white px-4 py-3 text-sm text-slate-950 outline-none transition placeholder:text-slate-400 focus:border-blue-700"
            required
          />
        </label>
      </div>

      <div className="mt-6 grid gap-3">
        <p className="text-sm font-medium text-slate-700">Services needed</p>
        <div className="flex flex-wrap gap-3">
          {serviceNeedOptions.map((service) => {
            const active = values.services_needed.includes(service)

            return (
              <button
                key={service}
                type="button"
                onClick={() => toggleService(service)}
                className={`rounded-full px-4 py-2 text-sm font-medium transition ${
                  active
                    ? 'border border-blue-700 bg-blue-50 text-blue-700'
                    : 'border border-slate-300 bg-white text-slate-700 hover:border-slate-400'
                }`}
              >
                {service}
              </button>
            )
          })}
        </div>
      </div>

      <div className="mt-6 grid gap-4 md:grid-cols-2">
        <label className="grid gap-2 text-sm font-medium text-slate-700">
          Current sourcing stage
          <select
            value={values.sourcing_stage}
            onChange={(event) => updateField('sourcing_stage', event.target.value)}
            className="rounded-2xl border border-slate-300 bg-white px-4 py-3 text-sm text-slate-950 outline-none transition focus:border-blue-700"
          >
            {sourcingStages.map((stage) => (
              <option key={stage} value={stage}>
                {stage}
              </option>
            ))}
          </select>
        </label>

        <label className="grid gap-2 text-sm font-medium text-slate-700">
          Target market
          <input
            type="text"
            value={values.target_market}
            onChange={(event) => updateField('target_market', event.target.value)}
            placeholder="Example: EU, UK, USA, Middle East"
            className="rounded-2xl border border-slate-300 bg-white px-4 py-3 text-sm text-slate-950 outline-none transition placeholder:text-slate-400 focus:border-blue-700"
          />
        </label>
      </div>

      <div className="mt-6 grid gap-2 text-sm font-medium text-slate-700">
        <label htmlFor="message">Inquiry details</label>
        <textarea
          id="message"
          value={values.message}
          onChange={(event) => updateField('message', event.target.value)}
          rows={5}
          placeholder="Tell us your sourcing goals, known supplier situation, timeline, quality concerns, or shipping requirements"
          className="rounded-3xl border border-slate-300 bg-white px-4 py-3 text-sm text-slate-950 outline-none transition placeholder:text-slate-400 focus:border-blue-700"
          required
        />
      </div>

      <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div className="min-h-[28px] text-sm">
          {status === 'success' ? (
            <p className="inline-flex items-center gap-2 text-emerald-700">
              <CheckCircle2 className="h-4 w-4" />
              Your inquiry has been submitted successfully.
            </p>
          ) : null}
          {status === 'error' && error ? <p className="text-red-600">{error}</p> : null}
        </div>

        <button
          type="submit"
          disabled={status === 'submitting'}
          className="inline-flex items-center justify-center gap-2 rounded-full bg-blue-700 px-6 py-3 text-sm font-semibold text-white transition hover:bg-blue-800 disabled:cursor-not-allowed disabled:bg-slate-400"
        >
          {status === 'submitting' ? 'Submitting...' : 'Get a Free Sourcing Quote'}
          <ArrowRight className="h-4 w-4" />
        </button>
      </div>
    </form>
  )
}

export default InquiryForm
