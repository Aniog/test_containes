import { useState } from 'react'
import { DataClient } from '@strikingly/sdk'
import { STRK_PROJECT_URL, STRK_PROJECT_ANON_KEY } from '../config.jsx'
import { CheckCircle2, AlertCircle, Loader2, Mail, Phone, MapPin, Send } from 'lucide-react'

const client = new DataClient(STRK_PROJECT_URL, STRK_PROJECT_ANON_KEY)

const CATEGORIES = [
  'Consumer Electronics',
  'Home & Kitchen',
  'Apparel & Textiles',
  'Furniture',
  'Hardware & Tools',
  'Auto Parts',
  'Beauty & Personal Care',
  'Toys & Baby',
  'Industrial Equipment',
  'Packaging',
  'Other',
]

const SERVICES = [
  'Supplier Sourcing',
  'Factory Verification',
  'Sample Management',
  'Price Negotiation',
  'Quality Inspection',
  'Production Follow-up',
  'Shipping & Logistics',
  'Private Label / OEM',
]

const TIMELINES = ['Within 2 weeks', '1-2 months', '3-6 months', 'Just exploring']

const INITIAL = {
  full_name: '',
  company: '',
  email: '',
  phone: '',
  country: '',
  product_category: '',
  product_description: '',
  estimated_quantity: '',
  target_price: '',
  services_needed: [],
  timeline: '',
}

export default function InquiryForm({ variant = 'full', showContactPanel = true }) {
  const [values, setValues] = useState(INITIAL)
  const [status, setStatus] = useState('idle') // idle | submitting | success | error
  const [error, setError] = useState(null)

  const onChange = (e) => {
    const { name, value } = e.target
    setValues((v) => ({ ...v, [name]: value }))
  }

  const toggleService = (svc) => {
    setValues((v) => ({
      ...v,
      services_needed: v.services_needed.includes(svc)
        ? v.services_needed.filter((s) => s !== svc)
        : [...v.services_needed, svc],
    }))
  }

  const validate = (v) => {
    if (!v.full_name.trim()) return 'Please provide your full name.'
    if (!v.email.trim()) return 'Please provide your business email.'
    if (!/^\S+@\S+\.\S+$/.test(v.email)) return 'Please provide a valid email address.'
    if (!v.product_description.trim() || v.product_description.trim().length < 5) {
      return 'Please describe the product you want to source (at least a few words).'
    }
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
      data: {
        full_name: values.full_name,
        company: values.company,
        email: values.email,
        phone: values.phone,
        country: values.country,
        product_category: values.product_category || undefined,
        product_description: values.product_description,
        estimated_quantity: values.estimated_quantity,
        target_price: values.target_price,
        services_needed: values.services_needed,
        timeline: values.timeline || undefined,
        status: 'new',
        created_at: new Date().toISOString(),
      },
    }

    const { data: response, error: createError } = await client
      .from('SourcingInquiry')
      .insert(payload)
      .select()
      .single()

    if (createError || response?.success === false) {
      const messages = Array.isArray(response?.errors) && response.errors.length > 0
        ? response.errors.join(', ')
        : createError?.message || 'Failed to submit your inquiry. Please try again or email us directly.'
      setError(messages)
      setStatus('error')
      return
    }

    setValues(INITIAL)
    setStatus('success')
  }

  return (
    <section id="inquiry" className="bg-slate-50 py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-10">
          {showContactPanel && (
            <aside className="lg:col-span-4">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#E63946]">Inquiry Form</p>
              <h2 className="mt-3 text-3xl md:text-4xl font-bold tracking-tight text-[#0B2545]">
                Get a free sourcing quote
              </h2>
              <p className="mt-4 text-base text-slate-600 leading-relaxed">
                Tell us about the product you want to source. We'll reply within one business day with a
                shortlist of qualified suppliers, indicative pricing, and our service proposal.
              </p>

              <ul className="mt-8 space-y-4 text-sm">
                <li className="flex items-start gap-3">
                  <span className="inline-flex h-9 w-9 items-center justify-center rounded-md bg-[#0B2545]/5 text-[#0B2545] shrink-0">
                    <Mail className="h-4 w-4" />
                  </span>
                  <div>
                    <p className="font-semibold text-[#0B2545]">Email</p>
                    <a href="mailto:hello@ssourcing-china.com" className="text-slate-600 hover:text-[#0B2545]">hello@ssourcing-china.com</a>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="inline-flex h-9 w-9 items-center justify-center rounded-md bg-[#0B2545]/5 text-[#0B2545] shrink-0">
                    <Phone className="h-4 w-4" />
                  </span>
                  <div>
                    <p className="font-semibold text-[#0B2545]">Phone / WhatsApp</p>
                    <a href="tel:+8657985000000" className="text-slate-600 hover:text-[#0B2545]">+86 579 8500 0000</a>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="inline-flex h-9 w-9 items-center justify-center rounded-md bg-[#0B2545]/5 text-[#0B2545] shrink-0">
                    <MapPin className="h-4 w-4" />
                  </span>
                  <div>
                    <p className="font-semibold text-[#0B2545]">Office</p>
                    <p className="text-slate-600">Room 1208, Futian Trade Centre,<br />Yiwu, Zhejiang, China</p>
                  </div>
                </li>
              </ul>

              <div className="mt-8 rounded-xl border border-slate-200 bg-white p-5 text-sm text-slate-600">
                <p className="font-semibold text-[#0B2545]">No obligation</p>
                <p className="mt-1.5 leading-relaxed">
                  Your inquiry is confidential. We only use the information you share to prepare a sourcing
                  proposal, and we are happy to sign an NDA before any sensitive details are exchanged.
                </p>
              </div>
            </aside>
          )}

          <div className={showContactPanel ? 'lg:col-span-8' : 'lg:col-span-12'}>
            <form
              onSubmit={onSubmit}
              className="rounded-2xl bg-white border border-slate-200 shadow-sm p-6 md:p-8 lg:p-10"
              aria-busy={status === 'submitting'}
            >
              {status === 'success' ? (
                <div className="text-center py-10">
                  <span className="inline-flex h-14 w-14 items-center justify-center rounded-full bg-emerald-50 text-emerald-600">
                    <CheckCircle2 className="h-7 w-7" />
                  </span>
                  <h3 className="mt-5 text-2xl font-bold text-[#0B2545]">Inquiry received</h3>
                  <p className="mt-3 text-slate-600 max-w-md mx-auto leading-relaxed">
                    Thank you. A project manager will review your inquiry and reply by email within one
                    business day. In the meantime, you can also write directly to hello@ssourcing-china.com.
                  </p>
                  <button
                    type="button"
                    onClick={() => setStatus('idle')}
                    className="mt-6 inline-flex items-center gap-2 text-[#0B2545] font-semibold hover:text-[#E63946]"
                  >
                    Submit another inquiry
                  </button>
                </div>
              ) : (
                <>
                  <div className="grid sm:grid-cols-2 gap-4 md:gap-5">
                    <Field label="Full name" required>
                      <input name="full_name" value={values.full_name} onChange={onChange} className={inputCls} placeholder="Jane Smith" />
                    </Field>
                    <Field label="Company">
                      <input name="company" value={values.company} onChange={onChange} className={inputCls} placeholder="Acme Imports Ltd." />
                    </Field>
                    <Field label="Business email" required>
                      <input type="email" name="email" value={values.email} onChange={onChange} className={inputCls} placeholder="you@company.com" />
                    </Field>
                    <Field label="Phone / WhatsApp">
                      <input name="phone" value={values.phone} onChange={onChange} className={inputCls} placeholder="+1 555 123 4567" />
                    </Field>
                    <Field label="Country">
                      <input name="country" value={values.country} onChange={onChange} className={inputCls} placeholder="United States" />
                    </Field>
                    <Field label="Product category">
                      <select name="product_category" value={values.product_category} onChange={onChange} className={inputCls}>
                        <option value="">Select a category</option>
                        {CATEGORIES.map((c) => <option key={c} value={c}>{c}</option>)}
                      </select>
                    </Field>
                  </div>

                  <div className="mt-5">
                    <Field label="What product do you want to source?" required>
                      <textarea
                        name="product_description"
                        value={values.product_description}
                        onChange={onChange}
                        rows={5}
                        className={inputCls}
                        placeholder="Describe the product, materials, target specs, certifications, packaging and any reference links."
                      />
                    </Field>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4 md:gap-5 mt-5">
                    <Field label="Estimated quantity">
                      <input name="estimated_quantity" value={values.estimated_quantity} onChange={onChange} className={inputCls} placeholder="e.g. 5,000 pcs / first order" />
                    </Field>
                    <Field label="Target price (FOB / EXW)">
                      <input name="target_price" value={values.target_price} onChange={onChange} className={inputCls} placeholder="e.g. USD 4.50 / pc" />
                    </Field>
                  </div>

                  <div className="mt-5">
                    <p className="text-sm font-semibold text-[#0B2545] mb-2">Services you need</p>
                    <div className="flex flex-wrap gap-2">
                      {SERVICES.map((svc) => {
                        const active = values.services_needed.includes(svc)
                        return (
                          <button
                            type="button"
                            key={svc}
                            onClick={() => toggleService(svc)}
                            className={`text-sm px-3.5 py-2 rounded-full border transition ${
                              active
                                ? 'bg-[#0B2545] text-white border-[#0B2545]'
                                : 'bg-white text-slate-700 border-slate-300 hover:border-[#0B2545]'
                            }`}
                          >
                            {svc}
                          </button>
                        )
                      })}
                    </div>
                  </div>

                  <div className="mt-5">
                    <p className="text-sm font-semibold text-[#0B2545] mb-2">When do you need to order?</p>
                    <div className="flex flex-wrap gap-2">
                      {TIMELINES.map((t) => {
                        const active = values.timeline === t
                        return (
                          <button
                            type="button"
                            key={t}
                            onClick={() => setValues((v) => ({ ...v, timeline: active ? '' : t }))}
                            className={`text-sm px-3.5 py-2 rounded-full border transition ${
                              active
                                ? 'bg-[#E63946] text-white border-[#E63946]'
                                : 'bg-white text-slate-700 border-slate-300 hover:border-[#E63946]'
                            }`}
                          >
                            {t}
                          </button>
                        )
                      })}
                    </div>
                  </div>

                  {status === 'error' && error && (
                    <div className="mt-6 flex items-start gap-3 rounded-md border border-red-200 bg-red-50 p-4">
                      <AlertCircle className="h-5 w-5 text-red-600 shrink-0 mt-0.5" />
                      <p className="text-sm text-red-700">{error}</p>
                    </div>
                  )}

                  <div className="mt-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                    <p className="text-xs text-slate-500 max-w-md">
                      By submitting this form you agree to be contacted by SSourcing China regarding your inquiry.
                      We do not share buyer information with third parties.
                    </p>
                    <button
                      type="submit"
                      disabled={status === 'submitting'}
                      className="inline-flex items-center gap-2 bg-[#E63946] hover:bg-[#C42E3A] disabled:opacity-70 disabled:cursor-not-allowed text-white font-semibold px-6 py-3 rounded-md transition w-full sm:w-auto justify-center"
                    >
                      {status === 'submitting' ? (
                        <>
                          <Loader2 className="h-4 w-4 animate-spin" />
                          Sending...
                        </>
                      ) : (
                        <>
                          <Send className="h-4 w-4" />
                          Submit Inquiry
                        </>
                      )}
                    </button>
                  </div>
                </>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

const inputCls =
  'w-full rounded-md border border-slate-300 bg-white px-3.5 py-2.5 text-sm text-slate-900 placeholder:text-slate-400 focus:border-[#0B2545] focus:ring-2 focus:ring-[#0B2545]/15 outline-none transition'

function Field({ label, required, children }) {
  return (
    <label className="block">
      <span className="block text-sm font-semibold text-[#0B2545] mb-1.5">
        {label}
        {required && <span className="text-[#E63946] ml-0.5">*</span>}
      </span>
      {children}
    </label>
  )
}
