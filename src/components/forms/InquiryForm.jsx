import { useMemo, useState } from 'react'
import { LoaderCircle } from 'lucide-react'
import { toast } from 'sonner'
import { createInquiry } from '@/api/inquiries.js'
import { serviceOptions } from '@/data/site-content.js'

const initialValues = {
  contact_name: '',
  company_name: '',
  email: '',
  phone: '',
  country: '',
  product_name: '',
  product_category: '',
  estimated_order_quantity: '',
  timeline: '',
  services_needed: [],
  message: '',
}

const fieldClassName =
  'w-full rounded-2xl border border-slate-300 bg-white px-4 py-3 text-base text-slate-950 outline-none transition placeholder:text-slate-400 focus:border-sky-700 focus:ring-4 focus:ring-sky-100'

const validateValues = (values) => {
  if (!values.contact_name.trim()) return 'Please enter your name.'
  if (!values.company_name.trim()) return 'Please enter your company name.'
  if (!values.email.trim()) return 'Please enter your business email.'
  if (!/^\S+@\S+\.\S+$/.test(values.email)) return 'Please enter a valid email address.'
  if (!values.product_name.trim()) return 'Please describe the product you want to source.'
  if (values.services_needed.length === 0) return 'Please select at least one service.'
  if (values.message.trim().length < 20) {
    return 'Please provide a short sourcing brief with at least 20 characters.'
  }

  return null
}

const InquiryForm = ({ sourcePage = 'contact', title = 'Send your sourcing inquiry' }) => {
  const [values, setValues] = useState(initialValues)
  const [status, setStatus] = useState('idle')
  const [error, setError] = useState('')
  const selectedServices = useMemo(() => new Set(values.services_needed), [values.services_needed])

  const handleChange = (event) => {
    const { name, value } = event.target
    setValues((current) => ({ ...current, [name]: value }))
  }

  const handleServiceToggle = (service) => {
    setValues((current) => ({
      ...current,
      services_needed: current.services_needed.includes(service)
        ? current.services_needed.filter((item) => item !== service)
        : [...current.services_needed, service],
    }))
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    const validationError = validateValues(values)

    if (validationError) {
      setError(validationError)
      toast.error(validationError)
      return
    }

    setStatus('submitting')
    setError('')

    try {
      await createInquiry({
        ...values,
        source_page: sourcePage,
      })

      setValues(initialValues)
      setStatus('success')
      toast.success('Your inquiry was sent successfully. We will review it and get back to you.')
    } catch (submissionError) {
      const message = submissionError.message || 'Unable to send your inquiry right now.'
      setError(message)
      setStatus('error')
      toast.error(message)
    }
  }

  return (
    <div className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm md:p-8">
      <div className="max-w-2xl">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-sky-700">Inquiry form</p>
        <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-950">{title}</h2>
        <p className="mt-4 text-base leading-7 text-slate-600">
          Share your product details, sourcing priorities, and target timeline. We will review the brief and reply with practical next steps.
        </p>
      </div>

      <form className="mt-8 grid gap-5 md:grid-cols-2" onSubmit={handleSubmit}>
        <label className="block">
          <span className="mb-2 block text-sm font-medium text-slate-800">Contact name</span>
          <input className={fieldClassName} name="contact_name" value={values.contact_name} onChange={handleChange} placeholder="Your name" />
        </label>

        <label className="block">
          <span className="mb-2 block text-sm font-medium text-slate-800">Company name</span>
          <input className={fieldClassName} name="company_name" value={values.company_name} onChange={handleChange} placeholder="Your company" />
        </label>

        <label className="block">
          <span className="mb-2 block text-sm font-medium text-slate-800">Business email</span>
          <input className={fieldClassName} name="email" type="email" value={values.email} onChange={handleChange} placeholder="name@company.com" />
        </label>

        <label className="block">
          <span className="mb-2 block text-sm font-medium text-slate-800">Phone / WhatsApp</span>
          <input className={fieldClassName} name="phone" value={values.phone} onChange={handleChange} placeholder="Optional" />
        </label>

        <label className="block">
          <span className="mb-2 block text-sm font-medium text-slate-800">Country / market</span>
          <input className={fieldClassName} name="country" value={values.country} onChange={handleChange} placeholder="United States" />
        </label>

        <label className="block">
          <span className="mb-2 block text-sm font-medium text-slate-800">Product name</span>
          <input className={fieldClassName} name="product_name" value={values.product_name} onChange={handleChange} placeholder="Stainless steel kitchen utensil set" />
        </label>

        <label className="block">
          <span className="mb-2 block text-sm font-medium text-slate-800">Product category</span>
          <input className={fieldClassName} name="product_category" value={values.product_category} onChange={handleChange} placeholder="Home & Kitchen" />
        </label>

        <label className="block">
          <span className="mb-2 block text-sm font-medium text-slate-800">Estimated order quantity</span>
          <input className={fieldClassName} name="estimated_order_quantity" value={values.estimated_order_quantity} onChange={handleChange} placeholder="5,000 units / 1 x 20GP" />
        </label>

        <label className="block md:col-span-2">
          <span className="mb-2 block text-sm font-medium text-slate-800">Target timeline</span>
          <input className={fieldClassName} name="timeline" value={values.timeline} onChange={handleChange} placeholder="Need sampling this month, shipment in 90 days" />
        </label>

        <fieldset className="md:col-span-2">
          <legend className="mb-3 text-sm font-medium text-slate-800">Services needed</legend>
          <div className="grid gap-3 md:grid-cols-2 xl:grid-cols-3">
            {serviceOptions.map((service) => {
              const active = selectedServices.has(service)

              return (
                <label
                  key={service}
                  className={`flex cursor-pointer items-center gap-3 rounded-2xl border px-4 py-3 text-sm font-medium transition ${
                    active
                      ? 'border-sky-700 bg-sky-50 text-slate-950'
                      : 'border-slate-300 bg-white text-slate-700 hover:border-slate-400'
                  }`}
                >
                  <input
                    checked={active}
                    className="h-4 w-4 accent-sky-700"
                    type="checkbox"
                    onChange={() => handleServiceToggle(service)}
                  />
                  <span>{service}</span>
                </label>
              )
            })}
          </div>
        </fieldset>

        <label className="block md:col-span-2">
          <span className="mb-2 block text-sm font-medium text-slate-800">Project brief</span>
          <textarea
            className={`${fieldClassName} min-h-[180px] resize-y`}
            name="message"
            value={values.message}
            onChange={handleChange}
            placeholder="Tell us the product specifications, target price range, quality expectations, compliance needs, packaging details, and timeline."
          />
        </label>

        <div className="md:col-span-2 flex flex-col gap-4 rounded-2xl bg-slate-50 p-4">
          <button
            type="submit"
            disabled={status === 'submitting'}
            className="inline-flex items-center justify-center gap-2 rounded-full bg-sky-700 px-6 py-3 text-sm font-semibold text-white transition hover:bg-sky-800 disabled:cursor-not-allowed disabled:bg-sky-400"
          >
            {status === 'submitting' ? <LoaderCircle className="h-4 w-4 animate-spin" /> : null}
            {status === 'submitting' ? 'Sending inquiry...' : 'Get a Free Sourcing Quote'}
          </button>
          <p className="text-sm text-slate-600">
            We use your details only to review and reply to your sourcing request.
          </p>
          {error ? <p className="text-sm font-medium text-rose-700">{error}</p> : null}
          {status === 'success' ? (
            <p className="text-sm font-medium text-emerald-700">
              Thank you. Your sourcing inquiry has been submitted successfully.
            </p>
          ) : null}
        </div>
      </form>
    </div>
  )
}

export default InquiryForm
