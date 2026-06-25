import { useState } from 'react'
import { CheckCircle2, AlertCircle, Loader2, Mail, MessageSquare, Globe, ShieldCheck } from 'lucide-react'
import { submitSourcingInquiry } from '@/api/inquiries'

const productCategories = [
  'Consumer Electronics',
  'Home & Kitchen',
  'Apparel & Textiles',
  'Promotional & Gifts',
  'Industrial & Hardware',
  'Beauty & Personal Care',
  'Sports & Outdoor',
  'Furniture',
  'Auto Parts',
  'Other',
]

const allServices = [
  'Supplier Sourcing',
  'Factory Verification',
  'Sample Management',
  'Price Negotiation',
  'Quality Inspection',
  'Production Follow-up',
  'Shipping & Logistics',
  'Private Labeling',
]

const timelines = ['Within 2 weeks', 'Within 1 month', '1-3 months', 'Just exploring']

const emptyForm = {
  full_name: '',
  company_name: '',
  email: '',
  phone: '',
  country: '',
  product_category: '',
  product_description: '',
  estimated_order_quantity: '',
  target_unit_price: '',
  needed_services: [],
  timeline: '',
  message: '',
}

export default function InquiryForm({ compact = false }) {
  const [values, setValues] = useState(emptyForm)
  const [status, setStatus] = useState('idle')
  const [errors, setErrors] = useState([])

  const handleChange = (field) => (event) => {
    const value = event.target.value
    setValues((current) => ({ ...current, [field]: value }))
  }

  const toggleService = (svc) => {
    setValues((current) => {
      const has = current.needed_services.includes(svc)
      return {
        ...current,
        needed_services: has
          ? current.needed_services.filter((s) => s !== svc)
          : [...current.needed_services, svc],
      }
    })
  }

  const validate = () => {
    const errs = []
    if (!values.full_name.trim()) errs.push('Please enter your full name.')
    if (!values.email.trim()) errs.push('Please enter your email address.')
    else if (!/^\S+@\S+\.\S+$/.test(values.email.trim()))
      errs.push('Please enter a valid email address.')
    if (!values.product_description.trim() || values.product_description.trim().length < 5)
      errs.push('Please describe the product you want to source (at least a few words).')
    return errs
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    const localErrors = validate()
    if (localErrors.length > 0) {
      setErrors(localErrors)
      setStatus('error')
      return
    }

    setErrors([])
    setStatus('submitting')

    const result = await submitSourcingInquiry(values)
    if (!result.ok) {
      setErrors(result.errors || ['Submission failed. Please try again.'])
      setStatus('error')
      return
    }

    setStatus('success')
    setValues(emptyForm)
  }

  return (
    <section id="inquiry" className="bg-slate-50 py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-12">
          {!compact && (
            <div className="lg:col-span-5">
              <span className="text-xs font-semibold uppercase tracking-[0.18em] text-[#1B6FB8]">
                Get a free sourcing quote
              </span>
              <h2 className="mt-3 text-3xl font-bold tracking-tight text-[#0B2545] md:text-4xl">
                Tell us what you want to source from China
              </h2>
              <p className="mt-4 text-base leading-relaxed text-slate-600">
                Share a few details about your product and we will reply within one business day
                with next steps, indicative pricing and a clear sourcing plan. No obligation.
              </p>

              <ul className="mt-8 space-y-4 text-sm text-slate-700">
                <li className="flex items-start gap-3">
                  <ShieldCheck className="mt-0.5 h-5 w-5 flex-none text-[#1B6FB8]" />
                  <div>
                    <p className="font-semibold text-[#0B2545]">No obligation</p>
                    <p className="text-slate-600">Your information is used only to scope your project.</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <Globe className="mt-0.5 h-5 w-5 flex-none text-[#1B6FB8]" />
                  <div>
                    <p className="font-semibold text-[#0B2545]">Global buyers welcome</p>
                    <p className="text-slate-600">We work with importers in 40+ countries.</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <Mail className="mt-0.5 h-5 w-5 flex-none text-[#1B6FB8]" />
                  <div>
                    <p className="font-semibold text-[#0B2545]">Prefer email or WhatsApp?</p>
                    <p className="text-slate-600">
                      <a href="mailto:hello@ssourcing-china.com" className="text-[#1B6FB8] hover:underline">
                        hello@ssourcing-china.com
                      </a>{' '}
                      · +86 138 0000 0000
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <MessageSquare className="mt-0.5 h-5 w-5 flex-none text-[#1B6FB8]" />
                  <div>
                    <p className="font-semibold text-[#0B2545]">Reply in 1 business day</p>
                    <p className="text-slate-600">Often faster during China business hours.</p>
                  </div>
                </li>
              </ul>
            </div>
          )}

          <div className={compact ? 'lg:col-span-12' : 'lg:col-span-7'}>
            <form
              onSubmit={handleSubmit}
              className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm md:p-10"
              noValidate
            >
              {status === 'success' && (
                <div className="mb-6 flex items-start gap-3 rounded-md border border-[#0F8A6A]/30 bg-[#0F8A6A]/10 p-4 text-sm text-[#0F8A6A]">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 flex-none" />
                  <div>
                    <p className="font-semibold">Thank you — your inquiry has been sent.</p>
                    <p className="mt-1 text-[#0F8A6A]/90">
                      We will get back to you within one business day at the email address you provided.
                    </p>
                  </div>
                </div>
              )}

              {status === 'error' && errors.length > 0 && (
                <div className="mb-6 flex items-start gap-3 rounded-md border border-red-200 bg-red-50 p-4 text-sm text-red-700">
                  <AlertCircle className="mt-0.5 h-5 w-5 flex-none" />
                  <div>
                    <p className="font-semibold">Please review the following:</p>
                    <ul className="mt-1 list-inside list-disc space-y-0.5">
                      {errors.map((err, idx) => (
                        <li key={idx}>{err}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              )}

              <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
                <FormField
                  label="Full name *"
                  htmlFor="full_name"
                >
                  <input
                    id="full_name"
                    type="text"
                    required
                    value={values.full_name}
                    onChange={handleChange('full_name')}
                    className={inputClass}
                    placeholder="Your name"
                  />
                </FormField>

                <FormField label="Company" htmlFor="company_name">
                  <input
                    id="company_name"
                    type="text"
                    value={values.company_name}
                    onChange={handleChange('company_name')}
                    className={inputClass}
                    placeholder="Company or brand"
                  />
                </FormField>

                <FormField label="Email *" htmlFor="email">
                  <input
                    id="email"
                    type="email"
                    required
                    value={values.email}
                    onChange={handleChange('email')}
                    className={inputClass}
                    placeholder="you@company.com"
                  />
                </FormField>

                <FormField label="Phone / WhatsApp" htmlFor="phone">
                  <input
                    id="phone"
                    type="text"
                    value={values.phone}
                    onChange={handleChange('phone')}
                    className={inputClass}
                    placeholder="+1 555 123 4567"
                  />
                </FormField>

                <FormField label="Country" htmlFor="country">
                  <input
                    id="country"
                    type="text"
                    value={values.country}
                    onChange={handleChange('country')}
                    className={inputClass}
                    placeholder="e.g. United States"
                  />
                </FormField>

                <FormField label="Product category" htmlFor="product_category">
                  <select
                    id="product_category"
                    value={values.product_category}
                    onChange={handleChange('product_category')}
                    className={inputClass}
                  >
                    <option value="">Select a category…</option>
                    {productCategories.map((c) => (
                      <option key={c} value={c}>
                        {c}
                      </option>
                    ))}
                  </select>
                </FormField>

                <div className="md:col-span-2">
                  <FormField
                    label="Product description *"
                    htmlFor="product_description"
                    hint="Briefly describe the product, materials, certifications and any reference links."
                  >
                    <textarea
                      id="product_description"
                      required
                      rows={4}
                      value={values.product_description}
                      onChange={handleChange('product_description')}
                      className={inputClass}
                      placeholder="e.g. Stainless steel insulated water bottle, 750ml, double-walled, custom logo, FDA compliant."
                    />
                  </FormField>
                </div>

                <FormField label="Estimated order quantity" htmlFor="estimated_order_quantity">
                  <input
                    id="estimated_order_quantity"
                    type="text"
                    value={values.estimated_order_quantity}
                    onChange={handleChange('estimated_order_quantity')}
                    className={inputClass}
                    placeholder="e.g. 5,000 units / 1x20ft container"
                  />
                </FormField>

                <FormField label="Target unit price (USD)" htmlFor="target_unit_price">
                  <input
                    id="target_unit_price"
                    type="text"
                    value={values.target_unit_price}
                    onChange={handleChange('target_unit_price')}
                    className={inputClass}
                    placeholder="e.g. 3.50 - 5.00 per unit"
                  />
                </FormField>

                <FormField label="Timeline" htmlFor="timeline">
                  <select
                    id="timeline"
                    value={values.timeline}
                    onChange={handleChange('timeline')}
                    className={inputClass}
                  >
                    <option value="">When do you need to start?</option>
                    {timelines.map((t) => (
                      <option key={t} value={t}>
                        {t}
                      </option>
                    ))}
                  </select>
                </FormField>

                <div className="md:col-span-2">
                  <label className="block text-sm font-medium text-slate-900">
                    Services you’re interested in
                  </label>
                  <div className="mt-2 flex flex-wrap gap-2">
                    {allServices.map((svc) => {
                      const checked = values.needed_services.includes(svc)
                      return (
                        <button
                          type="button"
                          key={svc}
                          onClick={() => toggleService(svc)}
                          className={`rounded-full border px-3.5 py-1.5 text-xs font-semibold transition-colors ${
                            checked
                              ? 'border-[#1B6FB8] bg-[#1B6FB8] text-white'
                              : 'border-slate-300 bg-white text-slate-700 hover:border-slate-400'
                          }`}
                        >
                          {svc}
                        </button>
                      )
                    })}
                  </div>
                </div>

                <div className="md:col-span-2">
                  <FormField label="Additional notes" htmlFor="message">
                    <textarea
                      id="message"
                      rows={3}
                      value={values.message}
                      onChange={handleChange('message')}
                      className={inputClass}
                      placeholder="Anything else we should know? Existing suppliers, target markets, certifications, etc."
                    />
                  </FormField>
                </div>
              </div>

              <div className="mt-8 flex flex-col items-start gap-3 sm:flex-row sm:items-center sm:justify-between">
                <p className="text-xs text-slate-500">
                  By submitting, you agree we may contact you about your sourcing inquiry.
                </p>
                <button
                  type="submit"
                  disabled={status === 'submitting'}
                  className="inline-flex w-full items-center justify-center gap-2 rounded-md bg-[#1B6FB8] px-6 py-3 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-[#155A96] disabled:cursor-not-allowed disabled:opacity-70 sm:w-auto"
                >
                  {status === 'submitting' ? (
                    <>
                      <Loader2 className="h-4 w-4 animate-spin" />
                      Sending…
                    </>
                  ) : (
                    'Send my sourcing inquiry'
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
  'mt-1 block w-full rounded-md border border-slate-300 bg-white px-3.5 py-2.5 text-sm text-slate-900 placeholder:text-slate-400 focus:border-[#1B6FB8] focus:outline-none focus:ring-1 focus:ring-[#1B6FB8]'

function FormField({ label, htmlFor, hint, children }) {
  return (
    <div>
      <label htmlFor={htmlFor} className="block text-sm font-medium text-slate-900">
        {label}
      </label>
      {children}
      {hint && <p className="mt-1 text-xs text-slate-500">{hint}</p>}
    </div>
  )
}
