import { useMemo, useState } from 'react'
import { CheckCircle2 } from 'lucide-react'
import { createSourcingInquiry, getCreatedInquiry, getInquiryErrorMessage } from '@/api/inquiries'
import { contactHighlights, serviceOptions } from '@/data/siteContent'

const initialValues = {
  name: '',
  email: '',
  company: '',
  website: '',
  country: '',
  service_needed: serviceOptions[0],
  product_name: '',
  quantity: '',
  target_market: '',
  message: '',
}

const validate = (values) => {
  if (!values.name.trim()) return 'Please enter your name.'
  if (!values.email.trim()) return 'Please enter your business email.'
  if (!/^\S+@\S+\.\S+$/.test(values.email)) return 'Please enter a valid email address.'
  if (!values.company.trim()) return 'Please enter your company name.'
  if (!values.product_name.trim()) return 'Please tell us what product you want to source.'
  if (!values.message.trim()) return 'Please share some project details.'
  if (values.message.trim().length < 10) return 'Please provide a little more detail about your sourcing requirement.'
  return null
}

const SourcingInquiryForm = () => {
  const [values, setValues] = useState(initialValues)
  const [status, setStatus] = useState('idle')
  const [error, setError] = useState('')
  const [successMessage, setSuccessMessage] = useState('')

  const messageLength = useMemo(() => values.message.trim().length, [values.message])

  const handleChange = (event) => {
    const { name, value } = event.target
    setValues((current) => ({ ...current, [name]: value }))
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    setError('')
    setSuccessMessage('')

    const validationError = validate(values)

    if (validationError) {
      setError(validationError)
      return
    }

    setStatus('submitting')

    const { data: response, error: submitError } = await createSourcingInquiry({
      name: values.name.trim(),
      email: values.email.trim(),
      company: values.company.trim(),
      website: values.website.trim(),
      country: values.country.trim(),
      service_needed: values.service_needed,
      product_name: values.product_name.trim(),
      quantity: values.quantity.trim(),
      target_market: values.target_market.trim(),
      message: values.message.trim(),
    })

    if (submitError || response?.success === false) {
      setStatus('error')
      setError(getInquiryErrorMessage(response, submitError))
      return
    }

    const createdInquiry = getCreatedInquiry(response)
    setStatus('success')
    setValues(initialValues)
    setSuccessMessage(
      createdInquiry?.id
        ? 'Thank you. Your sourcing inquiry has been received.'
        : 'Thank you. Your sourcing request has been submitted.'
    )
  }

  return (
    <section className="bg-slate-50 py-16 md:py-24">
      <div className="mx-auto grid w-full max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)] lg:px-8">
        <div className="rounded-[2rem] bg-slate-950 p-8 text-white shadow-sm">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-sky-300">
            Inquiry form
          </p>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white md:text-4xl">
            Get a free sourcing quote
          </h2>
          <p className="mt-4 text-base leading-7 text-slate-300 md:text-lg">
            Send your requirement and we will review the project scope,
            sourcing needs, and next steps.
          </p>

          <div className="mt-8 overflow-hidden rounded-[1.5rem] border border-slate-800 bg-slate-900">
            <img
              alt="Shipping coordination and quality control"
              className="h-64 w-full object-cover"
              data-strk-img-id="contact-form-visual-91d1af"
              data-strk-img="[contact-form-desc] [contact-form-title]"
              data-strk-img-ratio="4x3"
              data-strk-img-width="900"
              id="contact-form-image"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
            />
          </div>

          <h3 className="sr-only" id="contact-form-title">
            Free sourcing quote form
          </h3>
          <p className="sr-only" id="contact-form-desc">
            China sourcing, factory verification, quality control, and shipping coordination support for overseas buyers
          </p>

          <ul className="mt-8 grid gap-4">
            {contactHighlights.map((item) => (
              <li className="flex items-start gap-3" key={item}>
                <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-sky-300" />
                <span className="text-sm leading-7 text-slate-300">{item}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="rounded-[2rem] border border-slate-200 bg-white p-6 text-slate-900 shadow-sm md:p-8">
          <form className="grid gap-5" onSubmit={handleSubmit}>
            <div className="grid gap-5 md:grid-cols-2">
              <label className="grid gap-2 text-sm font-medium text-slate-800">
                Full name
                <input
                  className="rounded-2xl border border-slate-300 px-4 py-3 text-base text-slate-900 outline-none transition focus:border-sky-500"
                  name="name"
                  onChange={handleChange}
                  placeholder="Your name"
                  type="text"
                  value={values.name}
                />
              </label>
              <label className="grid gap-2 text-sm font-medium text-slate-800">
                Business email
                <input
                  className="rounded-2xl border border-slate-300 px-4 py-3 text-base text-slate-900 outline-none transition focus:border-sky-500"
                  name="email"
                  onChange={handleChange}
                  placeholder="you@company.com"
                  type="email"
                  value={values.email}
                />
              </label>
              <label className="grid gap-2 text-sm font-medium text-slate-800">
                Company
                <input
                  className="rounded-2xl border border-slate-300 px-4 py-3 text-base text-slate-900 outline-none transition focus:border-sky-500"
                  name="company"
                  onChange={handleChange}
                  placeholder="Company name"
                  type="text"
                  value={values.company}
                />
              </label>
              <label className="grid gap-2 text-sm font-medium text-slate-800">
                Country / Region
                <input
                  className="rounded-2xl border border-slate-300 px-4 py-3 text-base text-slate-900 outline-none transition focus:border-sky-500"
                  name="country"
                  onChange={handleChange}
                  placeholder="United States"
                  type="text"
                  value={values.country}
                />
              </label>
              <label className="grid gap-2 text-sm font-medium text-slate-800">
                Website
                <input
                  className="rounded-2xl border border-slate-300 px-4 py-3 text-base text-slate-900 outline-none transition focus:border-sky-500"
                  name="website"
                  onChange={handleChange}
                  placeholder="https://www.company.com"
                  type="url"
                  value={values.website}
                />
              </label>
              <label className="grid gap-2 text-sm font-medium text-slate-800">
                Service needed
                <select
                  className="rounded-2xl border border-slate-300 bg-white px-4 py-3 text-base text-slate-900 outline-none transition focus:border-sky-500"
                  name="service_needed"
                  onChange={handleChange}
                  value={values.service_needed}>
                  {serviceOptions.map((option) => (
                    <option key={option} value={option}>
                      {option}
                    </option>
                  ))}
                </select>
              </label>
              <label className="grid gap-2 text-sm font-medium text-slate-800">
                Product to source
                <input
                  className="rounded-2xl border border-slate-300 px-4 py-3 text-base text-slate-900 outline-none transition focus:border-sky-500"
                  name="product_name"
                  onChange={handleChange}
                  placeholder="Describe the product or category"
                  type="text"
                  value={values.product_name}
                />
              </label>
              <label className="grid gap-2 text-sm font-medium text-slate-800">
                Quantity / MOQ target
                <input
                  className="rounded-2xl border border-slate-300 px-4 py-3 text-base text-slate-900 outline-none transition focus:border-sky-500"
                  name="quantity"
                  onChange={handleChange}
                  placeholder="Example: 5,000 units"
                  type="text"
                  value={values.quantity}
                />
              </label>
            </div>

            <label className="grid gap-2 text-sm font-medium text-slate-800">
              Target market
              <input
                className="rounded-2xl border border-slate-300 px-4 py-3 text-base text-slate-900 outline-none transition focus:border-sky-500"
                name="target_market"
                onChange={handleChange}
                placeholder="EU, US, Australia, Middle East..."
                type="text"
                value={values.target_market}
              />
            </label>

            <label className="grid gap-2 text-sm font-medium text-slate-800">
              Project details
              <textarea
                className="min-h-40 rounded-2xl border border-slate-300 px-4 py-3 text-base text-slate-900 outline-none transition focus:border-sky-500"
                name="message"
                onChange={handleChange}
                placeholder="Share specifications, quality expectations, certifications, delivery timeline, or supplier issues you want help with."
                value={values.message}
              />
            </label>

            <div className="flex items-center justify-between gap-4 text-sm text-slate-500">
              <span>Helpful detail level for review: at least 10 characters.</span>
              <span>{messageLength} characters</span>
            </div>

            {error ? (
              <p className="rounded-2xl border border-rose-200 bg-rose-50 px-4 py-3 text-sm text-rose-700">
                {error}
              </p>
            ) : null}

            {successMessage ? (
              <p className="rounded-2xl border border-emerald-200 bg-emerald-50 px-4 py-3 text-sm text-emerald-700">
                {successMessage}
              </p>
            ) : null}

            <button
              className="inline-flex items-center justify-center rounded-full bg-sky-700 px-5 py-3 text-sm font-semibold text-white transition hover:bg-sky-800 disabled:cursor-not-allowed disabled:bg-slate-400"
              disabled={status === 'submitting'}
              type="submit">
              {status === 'submitting' ? 'Submitting...' : 'Get a Free Sourcing Quote'}
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}

export default SourcingInquiryForm
