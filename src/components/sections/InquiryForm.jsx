import { useState } from 'react'
import { DataClient } from '@strikingly/sdk'
import { CheckCircle2, AlertCircle, Loader2, Mail, MessageCircle, Clock } from 'lucide-react'
import { STRK_PROJECT_URL, STRK_PROJECT_ANON_KEY } from '@/config.jsx'

const client = new DataClient(STRK_PROJECT_URL, STRK_PROJECT_ANON_KEY)

const CATEGORIES = [
  'Consumer electronics',
  'Home & kitchen',
  'Apparel & textiles',
  'Promotional & gifts',
  'Industrial & hardware',
  'Beauty & personal care',
  'Toys & baby',
  'Furniture & lighting',
  'Sports & outdoors',
  'Other',
]

const SERVICES = [
  'Supplier search',
  'Factory verification',
  'Sample management',
  'Price negotiation',
  'Production follow-up',
  'Quality inspection',
  'Shipping & logistics',
]

const TIMELINES = [
  'Within 2 weeks',
  'Within 1 month',
  '1-3 months',
  'Flexible / planning ahead',
]

const initialValues = {
  full_name: '',
  company: '',
  email: '',
  phone: '',
  country: '',
  product_category: '',
  product_description: '',
  target_quantity: '',
  services_needed: [],
  timeline: '',
}

const getErrorMessage = (response, error) => {
  if (Array.isArray(response?.errors) && response.errors.length > 0) {
    return response.errors.join(', ')
  }
  return error?.message || 'Something went wrong. Please try again.'
}

export default function InquiryForm({ variant = 'section' }) {
  const [values, setValues] = useState(initialValues)
  const [status, setStatus] = useState('idle') // idle | submitting | success | error
  const [error, setError] = useState(null)

  const onChange = (e) => {
    const { name, value } = e.target
    setValues((v) => ({ ...v, [name]: value }))
  }

  const toggleService = (s) => {
    setValues((v) => {
      const exists = v.services_needed.includes(s)
      return {
        ...v,
        services_needed: exists
          ? v.services_needed.filter((x) => x !== s)
          : [...v.services_needed, s],
      }
    })
  }

  const validate = () => {
    if (!values.full_name.trim()) return 'Please enter your name.'
    if (!values.email.trim()) return 'Please enter your business email.'
    if (!/^\S+@\S+\.\S+$/.test(values.email)) return 'Please enter a valid email.'
    if (!values.product_category) return 'Please choose a product category.'
    if (!values.product_description.trim())
      return 'Please describe the product you want to source.'
    return null
  }

  const onSubmit = async (e) => {
    e.preventDefault()
    setError(null)
    const v = validate()
    if (v) {
      setError(v)
      setStatus('error')
      return
    }
    setStatus('submitting')

    const payload = {
      ...values,
      status: 'new',
      submitted_at: new Date().toISOString(),
    }

    const { data: response, error: createError } = await client
      .from('SourcingInquiry')
      .insert({ data: payload })
      .select()
      .single()

    if (createError || response?.success === false) {
      setError(getErrorMessage(response, createError))
      setStatus('error')
      return
    }

    setStatus('success')
    setValues(initialValues)
  }

  const wrap =
    variant === 'page'
      ? 'bg-white'
      : 'border-b border-slate-200 bg-slate-50 py-16 md:py-24'

  return (
    <section className={wrap} id="inquiry">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-12 lg:gap-12">
          <div className="lg:col-span-5">
            <p className="text-sm font-medium uppercase tracking-wider text-blue-700">
              Inquiry form
            </p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-900 md:text-4xl">
              Get a free sourcing quote
            </h2>
            <p className="mt-4 text-base leading-relaxed text-slate-700 md:text-lg">
              Tell us what you want to source. A bilingual project manager will
              reply within one business day with next steps and a clear scope.
            </p>

            <ul className="mt-8 space-y-4 text-sm text-slate-700">
              <li className="flex items-start gap-3">
                <Clock className="mt-0.5 h-5 w-5 flex-shrink-0 text-blue-700" />
                <span>Response within 1 business day, Monday to Friday.</span>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="mt-0.5 h-5 w-5 flex-shrink-0 text-blue-700" />
                <span>Quotes and reports delivered by email in clear English.</span>
              </li>
              <li className="flex items-start gap-3">
                <MessageCircle className="mt-0.5 h-5 w-5 flex-shrink-0 text-blue-700" />
                <span>WhatsApp and email available for ongoing communication.</span>
              </li>
            </ul>

            <div className="mt-10 rounded-xl border border-slate-200 bg-white p-6">
              <p className="text-sm font-semibold text-slate-900">What happens next</p>
              <ol className="mt-3 space-y-2 text-sm text-slate-600">
                <li>1. We confirm scope and ask any clarifying questions.</li>
                <li>2. We send a fixed-fee proposal and timeline.</li>
                <li>3. On approval, supplier shortlist within 5–7 business days.</li>
              </ol>
            </div>
          </div>

          <div className="lg:col-span-7">
            <form
              onSubmit={onSubmit}
              noValidate
              className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm md:p-8"
            >
              <div className="grid gap-5 md:grid-cols-2">
                <Field label="Full name" required>
                  <input
                    name="full_name"
                    value={values.full_name}
                    onChange={onChange}
                    required
                    placeholder="Jane Doe"
                    className={inputClass}
                  />
                </Field>
                <Field label="Company">
                  <input
                    name="company"
                    value={values.company}
                    onChange={onChange}
                    placeholder="Acme Imports Ltd."
                    className={inputClass}
                  />
                </Field>
                <Field label="Business email" required>
                  <input
                    type="email"
                    name="email"
                    value={values.email}
                    onChange={onChange}
                    required
                    placeholder="you@company.com"
                    className={inputClass}
                  />
                </Field>
                <Field label="Phone or WhatsApp">
                  <input
                    name="phone"
                    value={values.phone}
                    onChange={onChange}
                    placeholder="+1 555 0100"
                    className={inputClass}
                  />
                </Field>
                <Field label="Country">
                  <input
                    name="country"
                    value={values.country}
                    onChange={onChange}
                    placeholder="United States"
                    className={inputClass}
                  />
                </Field>
                <Field label="Product category" required>
                  <select
                    name="product_category"
                    value={values.product_category}
                    onChange={onChange}
                    required
                    className={inputClass}
                  >
                    <option value="">Choose a category</option>
                    {CATEGORIES.map((c) => (
                      <option key={c} value={c}>
                        {c}
                      </option>
                    ))}
                  </select>
                </Field>

                <div className="md:col-span-2">
                  <Field label="Product description" required>
                    <textarea
                      name="product_description"
                      value={values.product_description}
                      onChange={onChange}
                      required
                      rows={4}
                      placeholder="Specs, materials, target unit price, certifications you need…"
                      className={inputClass}
                    />
                  </Field>
                </div>

                <Field label="Target quantity / MOQ">
                  <input
                    name="target_quantity"
                    value={values.target_quantity}
                    onChange={onChange}
                    placeholder="e.g. 2,000 pcs"
                    className={inputClass}
                  />
                </Field>
                <Field label="Timeline">
                  <select
                    name="timeline"
                    value={values.timeline}
                    onChange={onChange}
                    className={inputClass}
                  >
                    <option value="">Select a timeline</option>
                    {TIMELINES.map((t) => (
                      <option key={t} value={t}>
                        {t}
                      </option>
                    ))}
                  </select>
                </Field>

                <div className="md:col-span-2">
                  <span className="block text-sm font-medium text-slate-900">
                    Services needed
                  </span>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {SERVICES.map((s) => {
                      const active = values.services_needed.includes(s)
                      return (
                        <button
                          type="button"
                          key={s}
                          onClick={() => toggleService(s)}
                          className={[
                            'rounded-full border px-3 py-1.5 text-xs font-medium transition',
                            active
                              ? 'border-blue-700 bg-blue-700 text-white'
                              : 'border-slate-300 bg-white text-slate-700 hover:border-slate-400',
                          ].join(' ')}
                        >
                          {s}
                        </button>
                      )
                    })}
                  </div>
                </div>
              </div>

              {status === 'error' && error && (
                <div className="mt-6 flex items-start gap-2 rounded-md border border-rose-200 bg-rose-50 p-3 text-sm text-rose-700">
                  <AlertCircle className="mt-0.5 h-4 w-4 flex-shrink-0" />
                  <span>{error}</span>
                </div>
              )}

              {status === 'success' && (
                <div className="mt-6 flex items-start gap-2 rounded-md border border-emerald-200 bg-emerald-50 p-3 text-sm text-emerald-800">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 flex-shrink-0" />
                  <span>
                    Thank you. We received your inquiry and will reply within
                    one business day.
                  </span>
                </div>
              )}

              <div className="mt-6 flex flex-col items-start justify-between gap-3 sm:flex-row sm:items-center">
                <p className="text-xs text-slate-500">
                  By submitting, you agree we may contact you regarding your
                  sourcing inquiry. Your information is kept confidential.
                </p>
                <button
                  type="submit"
                  disabled={status === 'submitting'}
                  className="inline-flex items-center gap-2 rounded-md bg-blue-700 px-5 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-blue-800 disabled:cursor-not-allowed disabled:opacity-70"
                >
                  {status === 'submitting' ? (
                    <>
                      <Loader2 className="h-4 w-4 animate-spin" />
                      Sending…
                    </>
                  ) : (
                    'Send inquiry'
                  )}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

const inputClass =
  'w-full rounded-md border border-slate-300 bg-white px-3 py-2.5 text-sm text-slate-900 placeholder:text-slate-400 focus:border-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-100'

function Field({ label, required, children }) {
  return (
    <label className="block">
      <span className="block text-sm font-medium text-slate-900">
        {label}
        {required && <span className="ml-1 text-rose-600">*</span>}
      </span>
      <div className="mt-1.5">{children}</div>
    </label>
  )
}
