import { CheckCircle2, LoaderCircle } from 'lucide-react'
import { useState } from 'react'
import { useLocation } from 'react-router-dom'
import { createSourcingInquiry } from '../../api/sourcingInquiries.js'

const initialValues = {
  company_name: '',
  contact_name: '',
  email: '',
  country: '',
  product_category: '',
  service_need: 'full_sourcing_support',
  order_stage: 'supplier_comparison',
  estimated_order_value: '',
  message: '',
}

const serviceOptions = [
  { value: 'supplier_sourcing', label: 'Supplier sourcing' },
  { value: 'factory_verification', label: 'Factory verification' },
  { value: 'quality_inspection', label: 'Quality inspection' },
  { value: 'production_follow_up', label: 'Production follow-up' },
  { value: 'shipping_coordination', label: 'Shipping coordination' },
  { value: 'full_sourcing_support', label: 'Full sourcing support' },
]

const stageOptions = [
  { value: 'idea_stage', label: 'Idea stage' },
  { value: 'sample_stage', label: 'Sample stage' },
  { value: 'supplier_comparison', label: 'Comparing suppliers' },
  { value: 'production_ready', label: 'Ready to place order' },
  { value: 'active_production', label: 'Order already in production' },
  { value: 'repeat_orders', label: 'Repeat orders / ongoing purchasing' },
]

function validate(values) {
  if (!values.company_name.trim()) return 'Please enter your company name.'
  if (!values.contact_name.trim()) return 'Please enter your name.'
  if (!values.email.trim()) return 'Please enter your email address.'
  if (!/^\S+@\S+\.\S+$/.test(values.email)) return 'Please enter a valid email address.'
  if (!values.country.trim()) return 'Please enter your country or market.'
  if (!values.product_category.trim()) return 'Please enter the product category.'
  if (!values.message.trim()) return 'Please describe your sourcing requirement.'
  if (values.message.trim().length < 20) return 'Please share a little more detail so we can review your request properly.'
  return null
}

function InquiryForm({ sourcePage, title = 'Tell us what you need to source', subtitle = 'Share your product, sourcing stage, and support needed. We will review your request and reply with the next practical step.' }) {
  const location = useLocation()
  const [values, setValues] = useState(initialValues)
  const [status, setStatus] = useState('idle')
  const [error, setError] = useState('')
  const [lastSubmittedInquiry, setLastSubmittedInquiry] = useState(null)

  const handleChange = (event) => {
    const { name, value } = event.target
    setValues((current) => ({ ...current, [name]: value }))
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    const validationError = validate(values)
    setError('')

    if (validationError) {
      setStatus('error')
      setError(validationError)
      return
    }

    setStatus('submitting')

    try {
      const createdInquiry = await createSourcingInquiry({
        ...values,
        source_page: sourcePage || location.pathname,
        status: 'new',
        submitted_at: new Date().toISOString(),
      })

      setLastSubmittedInquiry(createdInquiry)
      setValues(initialValues)
      setStatus('success')
    } catch (submissionError) {
      setStatus('error')
      setError(submissionError.message || 'Unable to send your inquiry right now.')
    }
  }

  const submittedData = lastSubmittedInquiry?.data ?? {}

  return (
    <div className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm md:p-8">
      <div className="space-y-3">
        <h3 className="text-2xl font-semibold tracking-tight text-slate-900">{title}</h3>
        <p className="text-base leading-7 text-slate-600">{subtitle}</p>
      </div>

      <form id="quote-form" className="mt-8 grid gap-5" onSubmit={handleSubmit}>
        <div className="grid gap-5 md:grid-cols-2">
          <label className="grid gap-2 text-sm font-medium text-slate-700">
            Company name
            <input
              name="company_name"
              value={values.company_name}
              onChange={handleChange}
              className="h-12 rounded-2xl border border-slate-300 bg-white px-4 text-base text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-blue-500 focus:ring-4 focus:ring-blue-100"
              placeholder="Your company"
            />
          </label>
          <label className="grid gap-2 text-sm font-medium text-slate-700">
            Contact name
            <input
              name="contact_name"
              value={values.contact_name}
              onChange={handleChange}
              className="h-12 rounded-2xl border border-slate-300 bg-white px-4 text-base text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-blue-500 focus:ring-4 focus:ring-blue-100"
              placeholder="Your name"
            />
          </label>
        </div>

        <div className="grid gap-5 md:grid-cols-2">
          <label className="grid gap-2 text-sm font-medium text-slate-700">
            Business email
            <input
              type="email"
              name="email"
              value={values.email}
              onChange={handleChange}
              className="h-12 rounded-2xl border border-slate-300 bg-white px-4 text-base text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-blue-500 focus:ring-4 focus:ring-blue-100"
              placeholder="name@company.com"
            />
          </label>
          <label className="grid gap-2 text-sm font-medium text-slate-700">
            Country / market
            <input
              name="country"
              value={values.country}
              onChange={handleChange}
              className="h-12 rounded-2xl border border-slate-300 bg-white px-4 text-base text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-blue-500 focus:ring-4 focus:ring-blue-100"
              placeholder="United States"
            />
          </label>
        </div>

        <div className="grid gap-5 md:grid-cols-2">
          <label className="grid gap-2 text-sm font-medium text-slate-700">
            Product category
            <input
              name="product_category"
              value={values.product_category}
              onChange={handleChange}
              className="h-12 rounded-2xl border border-slate-300 bg-white px-4 text-base text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-blue-500 focus:ring-4 focus:ring-blue-100"
              placeholder="Home storage, hardware, packaging..."
            />
          </label>
          <label className="grid gap-2 text-sm font-medium text-slate-700">
            Estimated order value
            <input
              name="estimated_order_value"
              value={values.estimated_order_value}
              onChange={handleChange}
              className="h-12 rounded-2xl border border-slate-300 bg-white px-4 text-base text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-blue-500 focus:ring-4 focus:ring-blue-100"
              placeholder="For example: USD 15,000"
            />
          </label>
        </div>

        <div className="grid gap-5 md:grid-cols-2">
          <label className="grid gap-2 text-sm font-medium text-slate-700">
            Main service needed
            <select
              name="service_need"
              value={values.service_need}
              onChange={handleChange}
              className="h-12 rounded-2xl border border-slate-300 bg-white px-4 text-base text-slate-900 outline-none transition focus:border-blue-500 focus:ring-4 focus:ring-blue-100"
            >
              {serviceOptions.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
          </label>
          <label className="grid gap-2 text-sm font-medium text-slate-700">
            Current stage
            <select
              name="order_stage"
              value={values.order_stage}
              onChange={handleChange}
              className="h-12 rounded-2xl border border-slate-300 bg-white px-4 text-base text-slate-900 outline-none transition focus:border-blue-500 focus:ring-4 focus:ring-blue-100"
            >
              {stageOptions.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
          </label>
        </div>

        <label className="grid gap-2 text-sm font-medium text-slate-700">
          Sourcing brief
          <textarea
            name="message"
            value={values.message}
            onChange={handleChange}
            rows={6}
            className="rounded-3xl border border-slate-300 bg-white px-4 py-3 text-base leading-7 text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-blue-500 focus:ring-4 focus:ring-blue-100"
            placeholder="Please describe your product, quantity, target market, quality concerns, or current supplier situation."
          />
        </label>

        <div className="flex flex-col gap-4 border-t border-slate-200 pt-2 md:flex-row md:items-center md:justify-between">
          <p className="max-w-2xl text-sm leading-6 text-slate-500">
            By sending this form, you share business inquiry details so we can review your sourcing request and reply appropriately.
          </p>
          <button
            type="submit"
            disabled={status === 'submitting'}
            className="inline-flex items-center justify-center gap-2 rounded-full bg-blue-700 px-6 py-3 text-sm font-semibold text-white transition hover:bg-blue-800 disabled:cursor-not-allowed disabled:bg-slate-400"
          >
            {status === 'submitting' ? <LoaderCircle className="h-4 w-4 animate-spin" /> : null}
            {status === 'submitting' ? 'Sending inquiry...' : 'Get a Free Sourcing Quote'}
          </button>
        </div>

        {error ? (
          <p className="rounded-2xl border border-rose-200 bg-rose-50 px-4 py-3 text-sm font-medium text-rose-700" role="alert">
            {error}
          </p>
        ) : null}

        {status === 'success' ? (
          <div className="rounded-3xl border border-emerald-200 bg-emerald-50 p-4 text-emerald-800">
            <div className="flex items-start gap-3">
              <CheckCircle2 className="mt-0.5 h-5 w-5 flex-none" />
              <div className="space-y-1 text-sm leading-6">
                <p className="font-semibold">Your inquiry has been sent.</p>
                <p>
                  Thank you, {submittedData.contact_name || 'there'}. We have recorded your request for {submittedData.product_category || 'your sourcing project'}.
                </p>
              </div>
            </div>
          </div>
        ) : null}
      </form>
    </div>
  )
}

export default InquiryForm
