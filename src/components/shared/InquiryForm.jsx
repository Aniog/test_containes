import { useState } from 'react'
import { ArrowRight } from 'lucide-react'
import { submitSourcingInquiry } from '@/api/sourcingInquiries'

const initialValues = {
  name: '',
  email: '',
  company: '',
  destinationMarket: '',
  productDetails: '',
}

const InquiryForm = ({ compact = false }) => {
  const [values, setValues] = useState(initialValues)
  const [status, setStatus] = useState('idle')
  const [message, setMessage] = useState('')

  const handleChange = (event) => {
    const { name, value } = event.target
    setValues((current) => ({ ...current, [name]: value }))
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    setStatus('submitting')
    setMessage('')

    try {
      await submitSourcingInquiry(values)
      setValues(initialValues)
      setStatus('success')
      setMessage('Thank you. Your sourcing inquiry has been received and will be reviewed by SSourcing China.')
    } catch (error) {
      setStatus('error')
      setMessage(error.message || 'Unable to submit your inquiry. Please try again.')
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-3xl border border-brand-line bg-brand-white p-6 text-brand-navy shadow-soft md:p-8"
    >
      <div>
        <p className="text-sm font-semibold uppercase tracking-[0.18em] text-brand-blue">
          Sourcing inquiry
        </p>
        <h3 className="mt-2 text-2xl font-bold text-brand-navy">
          Get a Free Sourcing Quote
        </h3>
        <p className="mt-3 text-sm leading-6 text-brand-slate">
          Share your product request and we will review the best next steps for sourcing, supplier checks, QC, and shipping coordination.
        </p>
      </div>

      <div className="mt-6 grid gap-4 md:grid-cols-2">
        <label className="block text-sm font-semibold text-brand-navy">
          Name
          <input
            name="name"
            value={values.name}
            onChange={handleChange}
            className="mt-2 w-full rounded-xl border border-brand-line bg-brand-white px-4 py-3 text-sm text-brand-navy outline-none transition placeholder:text-brand-slate/70 focus:border-brand-blue focus:ring-4 focus:ring-brand-blue/10"
            placeholder="Your name"
            required
          />
        </label>
        <label className="block text-sm font-semibold text-brand-navy">
          Work email
          <input
            type="email"
            name="email"
            value={values.email}
            onChange={handleChange}
            className="mt-2 w-full rounded-xl border border-brand-line bg-brand-white px-4 py-3 text-sm text-brand-navy outline-none transition placeholder:text-brand-slate/70 focus:border-brand-blue focus:ring-4 focus:ring-brand-blue/10"
            placeholder="name@company.com"
            required
          />
        </label>
        <label className="block text-sm font-semibold text-brand-navy">
          Company
          <input
            name="company"
            value={values.company}
            onChange={handleChange}
            className="mt-2 w-full rounded-xl border border-brand-line bg-brand-white px-4 py-3 text-sm text-brand-navy outline-none transition placeholder:text-brand-slate/70 focus:border-brand-blue focus:ring-4 focus:ring-brand-blue/10"
            placeholder="Company name"
          />
        </label>
        <label className="block text-sm font-semibold text-brand-navy">
          Destination market
          <input
            name="destinationMarket"
            value={values.destinationMarket}
            onChange={handleChange}
            className="mt-2 w-full rounded-xl border border-brand-line bg-brand-white px-4 py-3 text-sm text-brand-navy outline-none transition placeholder:text-brand-slate/70 focus:border-brand-blue focus:ring-4 focus:ring-brand-blue/10"
            placeholder="United States, EU, UAE..."
          />
        </label>
        <label className="block text-sm font-semibold text-brand-navy md:col-span-2">
          Product details
          <textarea
            name="productDetails"
            value={values.productDetails}
            onChange={handleChange}
            rows={compact ? 4 : 5}
            className="mt-2 w-full rounded-xl border border-brand-line bg-brand-white px-4 py-3 text-sm text-brand-navy outline-none transition placeholder:text-brand-slate/70 focus:border-brand-blue focus:ring-4 focus:ring-brand-blue/10"
            placeholder="Product type, quantity, target price, packaging, certification, timeline..."
            required
          />
        </label>
      </div>

      {message && (
        <div
          role={status === 'error' ? 'alert' : 'status'}
          className={`mt-5 rounded-2xl border px-4 py-3 text-sm font-medium ${
            status === 'error'
              ? 'border-red-200 bg-red-50 text-red-800'
              : 'border-brand-blue/20 bg-brand-blue/5 text-brand-navy'
          }`}
        >
          {message}
        </div>
      )}

      <button
        type="submit"
        disabled={status === 'submitting'}
        className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-brand-blue px-5 py-3 text-sm font-bold text-white shadow-soft transition hover:bg-brand-navy focus:outline-none focus:ring-4 focus:ring-brand-blue/20 disabled:cursor-not-allowed disabled:opacity-70"
      >
        {status === 'submitting' ? 'Submitting inquiry...' : 'Get a Free Sourcing Quote'}
        <ArrowRight className="h-4 w-4" aria-hidden="true" />
      </button>
    </form>
  )
}

export default InquiryForm
