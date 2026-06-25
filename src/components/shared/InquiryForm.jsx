import { CheckCircle2, Loader2 } from 'lucide-react'
import { useState } from 'react'
import { submitSourcingInquiry } from '../../api/inquiries'
import { productStageOptions, qualificationOptions } from '../../data/siteContent'

const initialValues = {
  name: '',
  email: '',
  company: '',
  country: '',
  service_needed: qualificationOptions[0],
  product_category: '',
  quantity: '',
  project_stage: productStageOptions[0],
  message: '',
}

const validate = (values) => {
  if (!values.name.trim()) return 'Please enter your name.'
  if (!values.email.trim()) return 'Please enter your business email.'
  if (!/^\S+@\S+\.\S+$/.test(values.email.trim())) return 'Please enter a valid email address.'
  if (!values.product_category.trim()) return 'Please tell us what product you want to source.'
  if (!values.message.trim()) return 'Please share a few details about your sourcing project.'
  return null
}

const Field = ({ label, children, required }) => (
  <label className="grid gap-2 text-sm font-medium text-slate-800">
    <span>
      {label} {required && <span className="text-blue-700">*</span>}
    </span>
    {children}
  </label>
)

const inputClass =
  'w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-sm text-slate-950 shadow-sm outline-none transition placeholder:text-slate-400 focus:border-blue-700 focus:ring-4 focus:ring-blue-100'

const InquiryForm = ({ compact = false }) => {
  const [values, setValues] = useState(initialValues)
  const [status, setStatus] = useState('idle')
  const [error, setError] = useState('')

  const handleChange = (event) => {
    const { name, value } = event.target
    setValues((current) => ({ ...current, [name]: value }))
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    const validationError = validate(values)
    if (validationError) {
      setError(validationError)
      setStatus('error')
      return
    }

    setStatus('submitting')
    setError('')

    try {
      await submitSourcingInquiry(values)
      setValues(initialValues)
      setStatus('success')
    } catch (submitError) {
      setError(submitError.message || 'We could not submit your inquiry. Please try again.')
      setStatus('error')
    }
  }

  return (
    <form
      aria-busy={status === 'submitting'}
      className="rounded-3xl border border-slate-200 bg-white p-6 text-slate-950 shadow-xl shadow-slate-200/60 md:p-8"
      onSubmit={handleSubmit}
    >
      <div className="mb-6">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-700">Free quote request</p>
        <h2 className="mt-2 text-2xl font-semibold tracking-tight text-slate-950">
          Tell us what you need to source
        </h2>
        <p className="mt-2 text-sm leading-6 text-slate-600">
          Share your product, quantity, current stage, and concerns. We will review your brief and suggest practical next steps.
        </p>
      </div>

      <div className={`grid gap-4 ${compact ? '' : 'md:grid-cols-2'}`}>
        <Field label="Name" required>
          <input className={inputClass} name="name" onChange={handleChange} placeholder="Your name" type="text" value={values.name} />
        </Field>
        <Field label="Business email" required>
          <input className={inputClass} name="email" onChange={handleChange} placeholder="name@company.com" type="email" value={values.email} />
        </Field>
        <Field label="Company">
          <input className={inputClass} name="company" onChange={handleChange} placeholder="Company name" type="text" value={values.company} />
        </Field>
        <Field label="Country / region">
          <input className={inputClass} name="country" onChange={handleChange} placeholder="United States, Germany, Australia..." type="text" value={values.country} />
        </Field>
        <Field label="Service needed" required>
          <select className={inputClass} name="service_needed" onChange={handleChange} value={values.service_needed}>
            {qualificationOptions.map((option) => <option key={option}>{option}</option>)}
          </select>
        </Field>
        <Field label="Project stage">
          <select className={inputClass} name="project_stage" onChange={handleChange} value={values.project_stage}>
            {productStageOptions.map((option) => <option key={option}>{option}</option>)}
          </select>
        </Field>
        <Field label="Product category or item" required>
          <input className={inputClass} name="product_category" onChange={handleChange} placeholder="e.g. custom packaging, home goods, electronics" type="text" value={values.product_category} />
        </Field>
        <Field label="Estimated quantity">
          <input className={inputClass} name="quantity" onChange={handleChange} placeholder="e.g. 1,000 pcs, one 20ft container" type="text" value={values.quantity} />
        </Field>
      </div>

      <div className="mt-4">
        <Field label="Project details" required>
          <textarea
            className={`${inputClass} min-h-32 resize-y`}
            name="message"
            onChange={handleChange}
            placeholder="Tell us specifications, target market, budget range, supplier concerns, inspection needs, or shipping timeline."
            value={values.message}
          />
        </Field>
      </div>

      <button
        className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-blue-700 px-6 py-3.5 text-sm font-semibold text-white shadow-sm transition hover:bg-blue-800 disabled:cursor-not-allowed disabled:bg-slate-400"
        disabled={status === 'submitting'}
        type="submit"
      >
        {status === 'submitting' ? <Loader2 className="h-4 w-4 animate-spin" /> : null}
        {status === 'submitting' ? 'Submitting...' : 'Get a Free Sourcing Quote'}
      </button>

      {status === 'success' && (
        <p className="mt-4 flex items-start gap-2 rounded-xl border border-green-200 bg-green-50 px-4 py-3 text-sm font-medium text-green-800" role="status">
          <CheckCircle2 className="mt-0.5 h-4 w-4" />
          Thank you. Your inquiry has been received and the SSourcing China team can review your project details.
        </p>
      )}
      {status === 'error' && error && (
        <p className="mt-4 rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm font-medium text-red-800" role="alert">
          {error}
        </p>
      )}
    </form>
  )
}

export default InquiryForm
