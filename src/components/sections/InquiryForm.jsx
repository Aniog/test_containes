import { useState } from 'react'
import { DataClient } from '@strikingly/sdk'
import { STRK_PROJECT_URL, STRK_PROJECT_ANON_KEY } from '@/config.jsx'
import { CheckCircle2, AlertTriangle, Loader2, Mail, Phone, MapPin } from 'lucide-react'

const client = new DataClient(STRK_PROJECT_URL, STRK_PROJECT_ANON_KEY)

const CATEGORIES = [
  'Consumer Electronics',
  'Home & Kitchen',
  'Apparel & Textiles',
  'Industrial & Machinery',
  'Furniture & Decor',
  'Beauty & Personal Care',
  'Sports & Outdoors',
  'Auto Parts & Accessories',
  'Packaging & Printing',
  'Other',
]

const SERVICES = [
  'Supplier Sourcing',
  'Factory Verification',
  'Sample Management',
  'Price Negotiation',
  'Production Follow-up',
  'Quality Inspection',
  'Shipping & Logistics',
  'Private Label / OEM',
]

const TIMELINES = ['Within 2 weeks', 'Within 1 month', '1-3 months', 'Just exploring']

const initial = {
  full_name: '',
  email: '',
  phone: '',
  company: '',
  country: '',
  product_category: 'Consumer Electronics',
  product_description: '',
  target_quantity: '',
  target_unit_price: '',
  services_needed: ['Supplier Sourcing'],
  timeline: 'Within 1 month',
}

const getErrorMessage = (response, error) => {
  if (Array.isArray(response?.errors) && response.errors.length > 0) {
    return response.errors.join(', ')
  }
  return error?.message || 'Submission failed. Please try again.'
}

export default function InquiryForm({
  variant = 'page',
  kicker = 'Inquiry form',
  title = 'Get a free sourcing quote',
  subtitle = 'Tell us about your product. We respond within one business day with next steps.',
}) {
  const [values, setValues] = useState(initial)
  const [status, setStatus] = useState('idle')
  const [error, setError] = useState(null)

  const onChange = (e) => {
    const { name, value } = e.target
    setValues((v) => ({ ...v, [name]: value }))
  }

  const toggleService = (svc) => {
    setValues((v) => {
      const has = v.services_needed.includes(svc)
      return {
        ...v,
        services_needed: has
          ? v.services_needed.filter((s) => s !== svc)
          : [...v.services_needed, svc],
      }
    })
  }

  const validate = (v) => {
    if (!v.full_name.trim()) return 'Please enter your name'
    if (!v.email.trim()) return 'Please enter your email'
    if (!/^\S+@\S+\.\S+$/.test(v.email)) return 'Please enter a valid email address'
    if (!v.product_description.trim() || v.product_description.trim().length < 5)
      return 'Please describe the product you want to source'
    return null
  }

  const onSubmit = async (e) => {
    e.preventDefault()
    setError(null)
    const err = validate(values)
    if (err) {
      setError(err)
      setStatus('error')
      return
    }

    setStatus('submitting')

    const payload = {
      ...values,
      status: 'new',
      created_at: new Date().toISOString(),
    }

    const { data: response, error: insertError } = await client
      .from('SourcingInquiry')
      .insert({ data: payload })
      .select()
      .single()

    if (insertError || response?.success === false) {
      setError(getErrorMessage(response, insertError))
      setStatus('error')
      return
    }

    setStatus('success')
    setValues(initial)
  }

  const isSubmitting = status === 'submitting'

  return (
    <section
      id="inquiry"
      className={
        variant === 'home'
          ? 'bg-slate-50 py-16 md:py-24'
          : 'bg-white py-16 md:py-24'
      }
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <p className="text-sm font-semibold uppercase tracking-wider text-blue-700">{kicker}</p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 md:text-4xl">{title}</h2>
            <p className="mt-4 text-base leading-relaxed text-slate-600 md:text-lg">{subtitle}</p>

            <ul className="mt-8 space-y-4 text-sm text-slate-700">
              <li className="flex items-start gap-3">
                <Mail className="mt-0.5 h-5 w-5 shrink-0 text-blue-700" aria-hidden="true" />
                <div>
                  <p className="font-medium text-slate-900">Email</p>
                  <a href="mailto:hello@ssourcingchina.com" className="text-blue-700 hover:text-blue-800">
                    hello@ssourcingchina.com
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Phone className="mt-0.5 h-5 w-5 shrink-0 text-blue-700" aria-hidden="true" />
                <div>
                  <p className="font-medium text-slate-900">Phone / WhatsApp</p>
                  <a href="tel:+8675500000000" className="text-slate-700 hover:text-slate-900">
                    +86 755 0000 0000
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-blue-700" aria-hidden="true" />
                <div>
                  <p className="font-medium text-slate-900">Office</p>
                  <p>Office 1208, Futian District, Shenzhen, China</p>
                </div>
              </li>
            </ul>

            <div className="mt-8 rounded-xl border border-slate-200 bg-white p-5">
              <p className="text-sm font-semibold text-slate-900">What happens next</p>
              <ol className="mt-3 space-y-2 text-sm text-slate-600">
                <li>1. We review your brief and reply within 1 business day.</li>
                <li>2. Quick call to confirm specs, target price and quantity.</li>
                <li>3. Shortlist of 3–5 factories with quotes — usually in 5–10 days.</li>
              </ol>
            </div>
          </div>

          <div className="lg:col-span-7">
            <form
              onSubmit={onSubmit}
              className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm md:p-8"
              aria-busy={isSubmitting}
              noValidate
            >
              {status === 'success' && (
                <div className="mb-6 flex items-start gap-3 rounded-lg border border-emerald-200 bg-emerald-50 p-4 text-emerald-800">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0" aria-hidden="true" />
                  <div>
                    <p className="font-semibold">Thanks — we received your inquiry.</p>
                    <p className="mt-1 text-sm">A sourcing manager will reply within one business day.</p>
                  </div>
                </div>
              )}

              {status === 'error' && error && (
                <div className="mb-6 flex items-start gap-3 rounded-lg border border-amber-200 bg-amber-50 p-4 text-amber-800">
                  <AlertTriangle className="mt-0.5 h-5 w-5 shrink-0" aria-hidden="true" />
                  <p className="text-sm">{error}</p>
                </div>
              )}

              <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
                <Field label="Full name *" htmlFor="full_name">
                  <input
                    id="full_name"
                    name="full_name"
                    type="text"
                    required
                    value={values.full_name}
                    onChange={onChange}
                    className={inputCls}
                    placeholder="Jane Doe"
                  />
                </Field>
                <Field label="Business email *" htmlFor="email">
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={values.email}
                    onChange={onChange}
                    className={inputCls}
                    placeholder="jane@company.com"
                  />
                </Field>
                <Field label="Company" htmlFor="company">
                  <input
                    id="company"
                    name="company"
                    type="text"
                    value={values.company}
                    onChange={onChange}
                    className={inputCls}
                    placeholder="Acme Trading Co."
                  />
                </Field>
                <Field label="Country" htmlFor="country">
                  <input
                    id="country"
                    name="country"
                    type="text"
                    value={values.country}
                    onChange={onChange}
                    className={inputCls}
                    placeholder="United States"
                  />
                </Field>
                <Field label="Phone / WhatsApp" htmlFor="phone">
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    value={values.phone}
                    onChange={onChange}
                    className={inputCls}
                    placeholder="+1 555 555 5555"
                  />
                </Field>
                <Field label="Timeline" htmlFor="timeline">
                  <select
                    id="timeline"
                    name="timeline"
                    value={values.timeline}
                    onChange={onChange}
                    className={inputCls}
                  >
                    {TIMELINES.map((t) => (
                      <option key={t} value={t}>{t}</option>
                    ))}
                  </select>
                </Field>
                <Field label="Product category" htmlFor="product_category">
                  <select
                    id="product_category"
                    name="product_category"
                    value={values.product_category}
                    onChange={onChange}
                    className={inputCls}
                  >
                    {CATEGORIES.map((c) => (
                      <option key={c} value={c}>{c}</option>
                    ))}
                  </select>
                </Field>
                <Field label="Target quantity" htmlFor="target_quantity">
                  <input
                    id="target_quantity"
                    name="target_quantity"
                    type="text"
                    value={values.target_quantity}
                    onChange={onChange}
                    className={inputCls}
                    placeholder="e.g. 5,000 units / month"
                  />
                </Field>
                <Field label="Target unit price (optional)" htmlFor="target_unit_price">
                  <input
                    id="target_unit_price"
                    name="target_unit_price"
                    type="text"
                    value={values.target_unit_price}
                    onChange={onChange}
                    className={inputCls}
                    placeholder="e.g. USD 8.50 FOB Shenzhen"
                  />
                </Field>
              </div>

              <div className="mt-5">
                <Field label="Product description *" htmlFor="product_description">
                  <textarea
                    id="product_description"
                    name="product_description"
                    required
                    rows={5}
                    value={values.product_description}
                    onChange={onChange}
                    className={`${inputCls} resize-y`}
                    placeholder="What product do you want to source? Specs, materials, certifications, packaging requirements, etc."
                  />
                </Field>
              </div>

              <fieldset className="mt-5">
                <legend className="block text-sm font-medium text-slate-900">Services needed</legend>
                <p className="mt-1 text-xs text-slate-500">Select all that apply.</p>
                <div className="mt-3 grid grid-cols-1 gap-2 sm:grid-cols-2">
                  {SERVICES.map((svc) => {
                    const checked = values.services_needed.includes(svc)
                    return (
                      <label
                        key={svc}
                        className={`flex items-start gap-3 rounded-md border px-3 py-2.5 text-sm transition cursor-pointer ${
                          checked
                            ? 'border-blue-600 bg-blue-50 text-blue-900'
                            : 'border-slate-300 bg-white text-slate-700 hover:bg-slate-50'
                        }`}
                      >
                        <input
                          type="checkbox"
                          checked={checked}
                          onChange={() => toggleService(svc)}
                          className="mt-0.5 h-4 w-4 rounded border-slate-300 text-blue-600 focus:ring-blue-600"
                        />
                        <span>{svc}</span>
                      </label>
                    )
                  })}
                </div>
              </fieldset>

              <div className="mt-8 flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
                <p className="text-xs text-slate-500">
                  By submitting, you agree to be contacted by SSourcing China about your inquiry.
                </p>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="inline-flex items-center justify-center gap-2 rounded-md bg-blue-600 px-6 py-3 text-base font-semibold text-white shadow-sm hover:bg-blue-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 transition disabled:cursor-not-allowed disabled:bg-blue-400"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="h-4 w-4 animate-spin" aria-hidden="true" />
                      Submitting…
                    </>
                  ) : (
                    'Get a Free Sourcing Quote'
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

const inputCls =
  'block w-full rounded-md border border-slate-300 bg-white px-3.5 py-2.5 text-slate-900 placeholder:text-slate-400 focus:border-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-200 text-sm'

function Field({ label, htmlFor, children }) {
  return (
    <div>
      <label htmlFor={htmlFor} className="block text-sm font-medium text-slate-900">
        {label}
      </label>
      <div className="mt-1.5">{children}</div>
    </div>
  )
}
