import { useMemo, useState } from 'react'
import { ArrowRight, CheckCircle2, LoaderCircle } from 'lucide-react'
import { createSourcingInquiry } from '@/api/sourcingInquiry.js'

const serviceOptions = [
  { value: 'supplier_search', label: 'Supplier Search' },
  { value: 'supplier_verification', label: 'Supplier Verification' },
  { value: 'factory_audit', label: 'Factory Audit' },
  { value: 'quality_inspection', label: 'Quality Inspection' },
  { value: 'production_follow_up', label: 'Production Follow-Up' },
  { value: 'shipping_coordination', label: 'Shipping Coordination' },
]

const initialValues = {
  company_name: '',
  full_name: '',
  email: '',
  phone: '',
  website: '',
  product_details: '',
  estimated_order_quantity: '',
  target_market: '',
  services_needed: ['supplier_search'],
  shipping_destination: '',
  message: '',
}

function InquiryForm() {
  const [values, setValues] = useState(initialValues)
  const [status, setStatus] = useState('idle')
  const [error, setError] = useState('')
  const [successMessage, setSuccessMessage] = useState('')

  const selectedCount = useMemo(() => values.services_needed.length, [values.services_needed])

  const handleChange = (event) => {
    const { name, value } = event.target
    setValues((current) => ({ ...current, [name]: value }))
  }

  const handleServiceToggle = (serviceValue) => {
    setValues((current) => {
      const exists = current.services_needed.includes(serviceValue)
      const nextValues = exists
        ? current.services_needed.filter((item) => item !== serviceValue)
        : [...current.services_needed, serviceValue]

      return {
        ...current,
        services_needed: nextValues,
      }
    })
  }

  const validate = () => {
    if (!values.company_name.trim()) return 'Please enter your company name.'
    if (!values.full_name.trim()) return 'Please enter your full name.'
    if (!values.email.trim()) return 'Please enter your business email.'
    if (!/^\S+@\S+\.\S+$/.test(values.email.trim())) return 'Please enter a valid email address.'
    if (!values.product_details.trim() || values.product_details.trim().length < 10) {
      return 'Please provide product details or your sourcing brief.'
    }
    if (!values.services_needed.length) return 'Please choose at least one service.'
    if (!values.shipping_destination.trim()) return 'Please enter the destination country or port.'
    if (values.website.trim() && !/^https?:\/\//i.test(values.website.trim())) {
      return 'Please enter a full website URL starting with http:// or https://.'
    }
    return ''
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    setError('')
    setSuccessMessage('')

    const validationError = validate()
    if (validationError) {
      setError(validationError)
      setStatus('error')
      return
    }

    setStatus('submitting')

    try {
      await createSourcingInquiry(values)
      setValues(initialValues)
      setStatus('success')
      setSuccessMessage('Thank you. Your sourcing inquiry has been received, and our team will review it shortly.')
    } catch (submissionError) {
      setStatus('error')
      setError(submissionError.message || 'Something went wrong while sending your inquiry.')
    }
  }

  return (
    <div id="inquiry-form" className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
      <div className="flex flex-col gap-3 border-b border-slate-200 pb-6">
        <span className="text-sm font-semibold uppercase tracking-[0.18em] text-blue-600">
          Get a Free Sourcing Quote
        </span>
        <h3 className="text-2xl font-bold tracking-tight text-slate-950">
          Tell us about your sourcing needs
        </h3>
        <p className="text-sm leading-6 text-slate-700 sm:text-base">
          Share your product details, order quantity, destination market, and the type of support you need from SSourcing China.
        </p>
      </div>

      <form className="mt-6 space-y-6" onSubmit={handleSubmit} noValidate>
        <div className="grid gap-5 md:grid-cols-2">
          <label className="space-y-2 text-sm font-medium text-slate-900">
            Company Name
            <input
              name="company_name"
              value={values.company_name}
              onChange={handleChange}
              placeholder="Your company"
              className="w-full rounded-2xl border border-slate-300 bg-white px-4 py-3 text-sm text-slate-950 outline-none transition placeholder:text-slate-400 focus:border-blue-500"
            />
          </label>
          <label className="space-y-2 text-sm font-medium text-slate-900">
            Full Name
            <input
              name="full_name"
              value={values.full_name}
              onChange={handleChange}
              placeholder="Your name"
              className="w-full rounded-2xl border border-slate-300 bg-white px-4 py-3 text-sm text-slate-950 outline-none transition placeholder:text-slate-400 focus:border-blue-500"
            />
          </label>
          <label className="space-y-2 text-sm font-medium text-slate-900">
            Business Email
            <input
              type="email"
              name="email"
              value={values.email}
              onChange={handleChange}
              placeholder="you@company.com"
              className="w-full rounded-2xl border border-slate-300 bg-white px-4 py-3 text-sm text-slate-950 outline-none transition placeholder:text-slate-400 focus:border-blue-500"
            />
          </label>
          <label className="space-y-2 text-sm font-medium text-slate-900">
            Phone / WhatsApp
            <input
              name="phone"
              value={values.phone}
              onChange={handleChange}
              placeholder="Optional"
              className="w-full rounded-2xl border border-slate-300 bg-white px-4 py-3 text-sm text-slate-950 outline-none transition placeholder:text-slate-400 focus:border-blue-500"
            />
          </label>
          <label className="space-y-2 text-sm font-medium text-slate-900 md:col-span-2">
            Website
            <input
              name="website"
              value={values.website}
              onChange={handleChange}
              placeholder="https://www.yourcompany.com"
              className="w-full rounded-2xl border border-slate-300 bg-white px-4 py-3 text-sm text-slate-950 outline-none transition placeholder:text-slate-400 focus:border-blue-500"
            />
          </label>
        </div>

        <div className="space-y-3">
          <div className="flex items-center justify-between gap-4">
            <p className="text-sm font-medium text-slate-900">Services Needed</p>
            <p className="text-xs font-medium uppercase tracking-[0.16em] text-slate-500">
              {selectedCount} selected
            </p>
          </div>
          <div className="grid gap-3 sm:grid-cols-2">
            {serviceOptions.map((service) => {
              const selected = values.services_needed.includes(service.value)

              return (
                <button
                  key={service.value}
                  type="button"
                  onClick={() => handleServiceToggle(service.value)}
                  className={`rounded-2xl border px-4 py-3 text-left text-sm font-medium transition ${
                    selected
                      ? 'border-blue-600 bg-blue-50 text-blue-700'
                      : 'border-slate-300 bg-white text-slate-700 hover:border-slate-400 hover:bg-slate-50'
                  }`}
                >
                  {service.label}
                </button>
              )
            })}
          </div>
        </div>

        <div className="grid gap-5 md:grid-cols-2">
          <label className="space-y-2 text-sm font-medium text-slate-900 md:col-span-2">
            Product Details
            <textarea
              name="product_details"
              value={values.product_details}
              onChange={handleChange}
              rows={5}
              placeholder="Describe the product, materials, specifications, target price, or sample requirements."
              className="w-full rounded-[1.5rem] border border-slate-300 bg-white px-4 py-3 text-sm text-slate-950 outline-none transition placeholder:text-slate-400 focus:border-blue-500"
            />
          </label>
          <label className="space-y-2 text-sm font-medium text-slate-900">
            Estimated Order Quantity
            <input
              name="estimated_order_quantity"
              value={values.estimated_order_quantity}
              onChange={handleChange}
              placeholder="e.g. 5,000 units"
              className="w-full rounded-2xl border border-slate-300 bg-white px-4 py-3 text-sm text-slate-950 outline-none transition placeholder:text-slate-400 focus:border-blue-500"
            />
          </label>
          <label className="space-y-2 text-sm font-medium text-slate-900">
            Target Market
            <input
              name="target_market"
              value={values.target_market}
              onChange={handleChange}
              placeholder="e.g. Germany, USA, UAE"
              className="w-full rounded-2xl border border-slate-300 bg-white px-4 py-3 text-sm text-slate-950 outline-none transition placeholder:text-slate-400 focus:border-blue-500"
            />
          </label>
          <label className="space-y-2 text-sm font-medium text-slate-900 md:col-span-2">
            Shipping Destination
            <input
              name="shipping_destination"
              value={values.shipping_destination}
              onChange={handleChange}
              placeholder="Destination country or port"
              className="w-full rounded-2xl border border-slate-300 bg-white px-4 py-3 text-sm text-slate-950 outline-none transition placeholder:text-slate-400 focus:border-blue-500"
            />
          </label>
          <label className="space-y-2 text-sm font-medium text-slate-900 md:col-span-2">
            Additional Notes
            <textarea
              name="message"
              value={values.message}
              onChange={handleChange}
              rows={4}
              placeholder="Optional: packaging requirements, compliance needs, target lead time, or any questions."
              className="w-full rounded-[1.5rem] border border-slate-300 bg-white px-4 py-3 text-sm text-slate-950 outline-none transition placeholder:text-slate-400 focus:border-blue-500"
            />
          </label>
        </div>

        {error ? (
          <div className="rounded-2xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">
            {error}
          </div>
        ) : null}

        {successMessage ? (
          <div className="flex items-start gap-3 rounded-2xl border border-emerald-200 bg-emerald-50 px-4 py-3 text-sm text-emerald-700">
            <CheckCircle2 className="mt-0.5 h-5 w-5" />
            <span>{successMessage}</span>
          </div>
        ) : null}

        <button
          type="submit"
          disabled={status === 'submitting'}
          className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-blue-600 px-6 py-3 text-sm font-semibold text-white transition hover:bg-blue-700 disabled:cursor-not-allowed disabled:bg-blue-400"
        >
          {status === 'submitting' ? (
            <>
              <LoaderCircle className="h-4 w-4 animate-spin" />
              Sending inquiry...
            </>
          ) : (
            <>
              Get a Free Sourcing Quote
              <ArrowRight className="h-4 w-4" />
            </>
          )}
        </button>
      </form>
    </div>
  )
}

export default InquiryForm
