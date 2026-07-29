import { useMemo, useState } from 'react'
import { DataClient } from '@strikingly/sdk'
import { CheckCircle2, LoaderCircle } from 'lucide-react'

import { STRK_PROJECT_ANON_KEY, STRK_PROJECT_URL } from '@/config.jsx'
import { inquiryServiceOptions } from '@/content/siteContent'

const client = new DataClient(STRK_PROJECT_URL, STRK_PROJECT_ANON_KEY)

const initialValues = {
  company_name: '',
  contact_name: '',
  email: '',
  phone: '',
  country: '',
  product_name: '',
  product_description: '',
  estimated_quantity: '',
  target_price: '',
  shipping_destination: '',
  services_needed: [],
  message: '',
}

const getRows = (response) => response?.data?.list ?? []
const getSingleEntity = (response) => response?.data ?? null
const getErrorMessage = (response, error) => {
  if (Array.isArray(response?.errors) && response.errors.length > 0) {
    return response.errors.join(', ')
  }

  return error?.message || 'Unable to submit your inquiry right now.'
}

const InquiryForm = ({ compact = false }) => {
  const [values, setValues] = useState(initialValues)
  const [submissions, setSubmissions] = useState([])
  const [status, setStatus] = useState('idle')
  const [error, setError] = useState('')

  const cardClass = useMemo(
    () =>
      compact
        ? 'rounded-[2rem] border border-brand-line bg-white p-6 shadow-card md:p-8'
        : 'rounded-[2rem] border border-brand-line bg-white p-6 shadow-card md:p-10',
    [compact],
  )

  const handleChange = (event) => {
    const { name, value } = event.target
    setValues((current) => ({ ...current, [name]: value }))
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
    if (!values.company_name.trim()) return 'Please enter your company name.'
    if (!values.contact_name.trim()) return 'Please enter your contact name.'
    if (!values.email.trim()) return 'Please enter your business email.'
    if (!/^\S+@\S+\.\S+$/.test(values.email)) return 'Please enter a valid email address.'
    if (!values.product_name.trim()) return 'Please tell us what product you want to source.'
    if (values.services_needed.length === 0) return 'Please select at least one service.'
    if (values.message.trim().length < 10) return 'Please share a bit more detail about your project.'
    return ''
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    setError('')

    const validationError = validate()
    if (validationError) {
      setStatus('error')
      setError(validationError)
      return
    }

    setStatus('submitting')

    const payload = {
      data: {
        company_name: values.company_name.trim(),
        contact_name: values.contact_name.trim(),
        email: values.email.trim(),
        phone: values.phone.trim(),
        country: values.country.trim(),
        product_name: values.product_name.trim(),
        product_description: values.product_description.trim(),
        estimated_quantity: values.estimated_quantity.trim(),
        target_price: values.target_price.trim(),
        shipping_destination: values.shipping_destination.trim(),
        services_needed: values.services_needed,
        message: values.message.trim(),
      },
    }

    const { data: response, error: submitError } = await client
      .from('SourcingInquiry')
      .insert(payload)
      .select()
      .single()

    if (submitError || response?.success === false) {
      setStatus('error')
      setError(getErrorMessage(response, submitError))
      return
    }

    const createdInquiry = getSingleEntity(response)
    setSubmissions((current) => [createdInquiry, ...current])
    setValues(initialValues)
    setStatus('success')

    const { data: listResponse, error: listError } = await client
      .from('SourcingInquiry')
      .select('*')
      .order('id', { ascending: false })
      .range(0, 2)

    if (!listError && listResponse) {
      setSubmissions(getRows(listResponse))
    }
  }

  return (
    <div className={cardClass}>
      <div className="max-w-2xl">
        <p className="text-sm font-semibold uppercase tracking-[0.24em] text-brand-teal">
          Qualified inquiry form
        </p>
        <h3 className="mt-4 text-3xl font-semibold tracking-tight text-brand-ink">
          Get a Free Sourcing Quote
        </h3>
        <p className="mt-4 text-base leading-7 text-brand-slate">
          Share your product, quantity, destination, and support needed. We will review the brief and respond with the next practical steps.
        </p>
      </div>

      <form className="mt-8 grid gap-5" onSubmit={handleSubmit}>
        <div className="grid gap-5 md:grid-cols-2">
          <Field label="Company name" name="company_name" value={values.company_name} onChange={handleChange} required />
          <Field label="Contact name" name="contact_name" value={values.contact_name} onChange={handleChange} required />
          <Field label="Business email" name="email" type="email" value={values.email} onChange={handleChange} required />
          <Field label="Phone / WhatsApp" name="phone" value={values.phone} onChange={handleChange} />
          <Field label="Country" name="country" value={values.country} onChange={handleChange} />
          <Field label="Main product" name="product_name" value={values.product_name} onChange={handleChange} required />
          <Field label="Estimated quantity" name="estimated_quantity" value={values.estimated_quantity} onChange={handleChange} />
          <Field label="Target price or budget" name="target_price" value={values.target_price} onChange={handleChange} />
          <Field label="Shipping destination" name="shipping_destination" value={values.shipping_destination} onChange={handleChange} />
          <Field label="Product details / specification" name="product_description" value={values.product_description} onChange={handleChange} />
        </div>

        <fieldset className="rounded-3xl border border-brand-line bg-brand-surface p-5">
          <legend className="px-2 text-sm font-semibold uppercase tracking-[0.2em] text-brand-ink">
            Services needed
          </legend>
          <div className="mt-3 flex flex-wrap gap-3">
            {inquiryServiceOptions.map((service) => {
              const active = values.services_needed.includes(service)

              return (
                <label
                  key={service}
                  className={`inline-flex cursor-pointer items-center gap-3 rounded-full border px-4 py-3 text-sm font-medium transition ${
                    active
                      ? 'border-brand-blue bg-brand-blue text-white'
                      : 'border-brand-line bg-white text-brand-ink hover:border-brand-blue'
                  }`}
                >
                  <input
                    type="checkbox"
                    className="sr-only"
                    checked={active}
                    onChange={() => toggleService(service)}
                  />
                  {service}
                </label>
              )
            })}
          </div>
        </fieldset>

        <label className="grid gap-2 text-sm font-medium text-brand-ink">
          Project message
          <textarea
            name="message"
            rows="6"
            value={values.message}
            onChange={handleChange}
            placeholder="Tell us the product type, quantity target, specifications, and where you need support."
            className="min-h-[160px] rounded-2xl border border-brand-line bg-white px-4 py-3 text-base text-brand-ink outline-none transition placeholder:text-brand-muted focus:border-brand-blue"
            required
          />
        </label>

        <div className="flex flex-col gap-4 border-t border-brand-line pt-2 md:flex-row md:items-center md:justify-between">
          <div>
            {status === 'error' && error ? (
              <p className="text-sm font-medium text-red-600">{error}</p>
            ) : null}
            {status === 'success' ? (
              <p className="inline-flex items-center gap-2 text-sm font-medium text-brand-teal">
                <CheckCircle2 className="h-4 w-4" />
                Thank you. Your sourcing inquiry has been submitted successfully.
              </p>
            ) : null}
          </div>
          <button
            type="submit"
            disabled={status === 'submitting'}
            className="inline-flex items-center justify-center gap-2 rounded-full bg-brand-blue px-6 py-3 text-sm font-semibold text-white transition hover:bg-brand-blue-strong disabled:cursor-not-allowed disabled:opacity-70"
          >
            {status === 'submitting' ? (
              <>
                <LoaderCircle className="h-4 w-4 animate-spin" />
                Sending inquiry...
              </>
            ) : (
              'Get a Free Sourcing Quote'
            )}
          </button>
        </div>
      </form>

      {submissions.length > 0 ? (
        <div className="mt-6 rounded-3xl border border-brand-line bg-brand-surface p-5 text-sm text-brand-slate">
          <p className="font-semibold text-brand-ink">Recent successful submissions in this session</p>
          <ul className="mt-3 space-y-2">
            {submissions.slice(0, 3).map((entry) => (
              <li key={entry.id} className="flex flex-wrap items-center justify-between gap-2 rounded-2xl bg-white px-4 py-3">
                <span className="font-medium text-brand-ink">{entry?.data?.company_name || 'Inquiry'}</span>
                <span>{entry?.data?.product_name || 'Product brief received'}</span>
              </li>
            ))}
          </ul>
        </div>
      ) : null}
    </div>
  )
}

const Field = ({ label, name, value, onChange, type = 'text', required = false }) => {
  return (
    <label className="grid gap-2 text-sm font-medium text-brand-ink">
      {label}
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        required={required}
        className="rounded-2xl border border-brand-line bg-white px-4 py-3 text-base text-brand-ink outline-none transition placeholder:text-brand-muted focus:border-brand-blue"
      />
    </label>
  )
}

export default InquiryForm
