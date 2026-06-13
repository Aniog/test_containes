import { useMemo, useState } from 'react'
import { createSourcingInquiry } from '@/api/sourcingInquiries'
import { serviceOptions } from '@/data/siteContent'

const initialValues = {
  company_name: '',
  contact_name: '',
  email: '',
  phone: '',
  country: '',
  product_name: '',
  service_interest: ['supplier_sourcing'],
  estimated_order_quantity: '',
  target_price: '',
  target_market: '',
  timeline: '',
  message: '',
  consent: false,
}

const InquiryForm = ({ sourcePage = 'contact-page' }) => {
  const [values, setValues] = useState(initialValues)
  const [status, setStatus] = useState('idle')
  const [feedback, setFeedback] = useState('')
  const [submittedLead, setSubmittedLead] = useState(null)

  const canSubmit = useMemo(() => {
    return (
      values.company_name.trim() &&
      values.contact_name.trim() &&
      values.email.trim() &&
      values.country.trim() &&
      values.product_name.trim() &&
      values.message.trim().length >= 10 &&
      values.service_interest.length > 0 &&
      values.consent
    )
  }, [values])

  const handleChange = (event) => {
    const { name, value, type, checked } = event.target
    setValues((current) => ({
      ...current,
      [name]: type === 'checkbox' ? checked : value,
    }))
  }

  const handleServiceToggle = (serviceValue) => {
    setValues((current) => {
      const exists = current.service_interest.includes(serviceValue)
      return {
        ...current,
        service_interest: exists
          ? current.service_interest.filter((entry) => entry !== serviceValue)
          : [...current.service_interest, serviceValue],
      }
    })
  }

  const handleSubmit = async (event) => {
    event.preventDefault()

    if (!canSubmit) {
      setStatus('error')
      setFeedback(
        'Please complete the required fields and select at least one service.'
      )
      return
    }

    setStatus('submitting')
    setFeedback('')

    const result = await createSourcingInquiry({
      ...values,
      source_page: sourcePage,
    })

    if (!result.success) {
      setStatus('error')
      setFeedback(result.message)
      return
    }

    setSubmittedLead(result.entity)
    setValues(initialValues)
    setStatus('success')
    setFeedback(
      'Thanks. Your sourcing inquiry has been received and our team will review it.'
    )
  }

  return (
    <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">
      <div className="rounded-3xl bg-slate-950 p-8 text-white shadow-sm">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-sky-300">
          Inquiry form
        </p>
        <h3 className="mt-4 text-3xl font-bold tracking-tight">
          Tell us what you need sourced from China.
        </h3>
        <p className="mt-4 text-base leading-7 text-slate-300">
          The more specific the brief, the faster we can evaluate supplier fit,
          verification needs, and the best next steps.
        </p>
        <ul className="mt-8 space-y-4 text-sm text-slate-200">
          <li>Clear buyer brief and target market</li>
          <li>Service scope selection</li>
          <li>Submission stored for follow-up</li>
        </ul>
        {submittedLead ? (
          <div className="mt-8 rounded-2xl border border-slate-800 bg-slate-900/70 p-4 text-sm text-slate-200">
            Inquiry recorded{submittedLead?.id ? ` with reference #${submittedLead.id}` : ''}.
          </div>
        ) : null}
      </div>

      <form
        id="inquiry-form"
        onSubmit={handleSubmit}
        className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm md:p-8"
      >
        <div className="grid gap-5 md:grid-cols-2">
          <label className="text-sm font-medium text-slate-700">
            Company name *
            <input
              name="company_name"
              value={values.company_name}
              onChange={handleChange}
              className="mt-2 w-full rounded-2xl border border-slate-300 px-4 py-3 text-sm text-slate-900 placeholder:text-slate-400 focus:border-sky-600 focus:outline-none"
              placeholder="Your company"
            />
          </label>
          <label className="text-sm font-medium text-slate-700">
            Contact name *
            <input
              name="contact_name"
              value={values.contact_name}
              onChange={handleChange}
              className="mt-2 w-full rounded-2xl border border-slate-300 px-4 py-3 text-sm text-slate-900 placeholder:text-slate-400 focus:border-sky-600 focus:outline-none"
              placeholder="Your name"
            />
          </label>
          <label className="text-sm font-medium text-slate-700">
            Business email *
            <input
              type="email"
              name="email"
              value={values.email}
              onChange={handleChange}
              className="mt-2 w-full rounded-2xl border border-slate-300 px-4 py-3 text-sm text-slate-900 placeholder:text-slate-400 focus:border-sky-600 focus:outline-none"
              placeholder="name@company.com"
            />
          </label>
          <label className="text-sm font-medium text-slate-700">
            Phone or WhatsApp
            <input
              name="phone"
              value={values.phone}
              onChange={handleChange}
              className="mt-2 w-full rounded-2xl border border-slate-300 px-4 py-3 text-sm text-slate-900 placeholder:text-slate-400 focus:border-sky-600 focus:outline-none"
              placeholder="Optional"
            />
          </label>
          <label className="text-sm font-medium text-slate-700">
            Country / region *
            <input
              name="country"
              value={values.country}
              onChange={handleChange}
              className="mt-2 w-full rounded-2xl border border-slate-300 px-4 py-3 text-sm text-slate-900 placeholder:text-slate-400 focus:border-sky-600 focus:outline-none"
              placeholder="United Kingdom"
            />
          </label>
          <label className="text-sm font-medium text-slate-700">
            Product name *
            <input
              name="product_name"
              value={values.product_name}
              onChange={handleChange}
              className="mt-2 w-full rounded-2xl border border-slate-300 px-4 py-3 text-sm text-slate-900 placeholder:text-slate-400 focus:border-sky-600 focus:outline-none"
              placeholder="Product to source"
            />
          </label>
          <label className="text-sm font-medium text-slate-700">
            Estimated order quantity
            <input
              name="estimated_order_quantity"
              value={values.estimated_order_quantity}
              onChange={handleChange}
              className="mt-2 w-full rounded-2xl border border-slate-300 px-4 py-3 text-sm text-slate-900 placeholder:text-slate-400 focus:border-sky-600 focus:outline-none"
              placeholder="e.g. 5,000 units"
            />
          </label>
          <label className="text-sm font-medium text-slate-700">
            Target price / budget
            <input
              name="target_price"
              value={values.target_price}
              onChange={handleChange}
              className="mt-2 w-full rounded-2xl border border-slate-300 px-4 py-3 text-sm text-slate-900 placeholder:text-slate-400 focus:border-sky-600 focus:outline-none"
              placeholder="e.g. USD 2.80"
            />
          </label>
          <label className="text-sm font-medium text-slate-700">
            Target market
            <input
              name="target_market"
              value={values.target_market}
              onChange={handleChange}
              className="mt-2 w-full rounded-2xl border border-slate-300 px-4 py-3 text-sm text-slate-900 placeholder:text-slate-400 focus:border-sky-600 focus:outline-none"
              placeholder="EU / US / Middle East"
            />
          </label>
          <label className="text-sm font-medium text-slate-700">
            Timeline
            <input
              name="timeline"
              value={values.timeline}
              onChange={handleChange}
              className="mt-2 w-full rounded-2xl border border-slate-300 px-4 py-3 text-sm text-slate-900 placeholder:text-slate-400 focus:border-sky-600 focus:outline-none"
              placeholder="e.g. sample in 3 weeks"
            />
          </label>
        </div>

        <fieldset className="mt-6">
          <legend className="text-sm font-medium text-slate-700">
            Services needed *
          </legend>
          <div className="mt-3 flex flex-wrap gap-3">
            {serviceOptions.map((option) => {
              const active = values.service_interest.includes(option.value)
              return (
                <button
                  key={option.value}
                  type="button"
                  onClick={() => handleServiceToggle(option.value)}
                  className={`rounded-full border px-4 py-2 text-sm font-medium transition ${
                    active
                      ? 'border-sky-700 bg-sky-50 text-sky-700'
                      : 'border-slate-300 bg-white text-slate-700 hover:border-slate-400'
                  }`}
                >
                  {option.label}
                </button>
              )
            })}
          </div>
        </fieldset>

        <label className="mt-6 block text-sm font-medium text-slate-700">
          Project details *
          <textarea
            name="message"
            value={values.message}
            onChange={handleChange}
            rows={6}
            className="mt-2 w-full rounded-3xl border border-slate-300 px-4 py-3 text-sm text-slate-900 placeholder:text-slate-400 focus:border-sky-600 focus:outline-none"
            placeholder="Share specifications, material needs, sample status, compliance requirements, packaging notes, and shipment goals."
          />
        </label>

        <label className="mt-6 flex items-start gap-3 text-sm text-slate-700">
          <input
            type="checkbox"
            name="consent"
            checked={values.consent}
            onChange={handleChange}
            className="mt-1 h-4 w-4 rounded border-slate-300 text-sky-700 focus:ring-sky-600"
          />
          <span>
            I agree that SSourcing China may contact me about this sourcing inquiry.
          </span>
        </label>

        {feedback ? (
          <div
            className={`mt-6 rounded-2xl px-4 py-3 text-sm ${
              status === 'success'
                ? 'bg-emerald-50 text-emerald-700'
                : 'bg-rose-50 text-rose-700'
            }`}
          >
            {feedback}
          </div>
        ) : null}

        <button
          type="submit"
          disabled={status === 'submitting'}
          className="mt-6 inline-flex items-center rounded-full bg-sky-700 px-6 py-3 text-sm font-semibold text-white transition hover:bg-sky-800 disabled:cursor-not-allowed disabled:bg-slate-400"
        >
          {status === 'submitting' ? 'Sending inquiry...' : 'Get a Free Sourcing Quote'}
        </button>
      </form>
    </div>
  )
}

export default InquiryForm
