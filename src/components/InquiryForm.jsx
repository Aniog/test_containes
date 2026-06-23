import { useState } from 'react'
import { DataClient } from '@strikingly/sdk'
import { STRK_PROJECT_URL, STRK_PROJECT_ANON_KEY } from '@/config.jsx'
import { CheckCircle2, AlertCircle, Send, ShieldCheck, Clock, FileCheck2 } from 'lucide-react'

const client = new DataClient(STRK_PROJECT_URL, STRK_PROJECT_ANON_KEY)

const CATEGORIES = [
  { value: 'consumer_electronics', label: 'Consumer Electronics' },
  { value: 'home_kitchen', label: 'Home & Kitchen' },
  { value: 'apparel_textiles', label: 'Apparel & Textiles' },
  { value: 'industrial_machinery', label: 'Industrial Machinery' },
  { value: 'auto_parts', label: 'Auto Parts' },
  { value: 'promotional_gifts', label: 'Promotional Gifts' },
  { value: 'furniture', label: 'Furniture' },
  { value: 'beauty_personal_care', label: 'Beauty & Personal Care' },
  { value: 'sports_outdoors', label: 'Sports & Outdoors' },
  { value: 'other', label: 'Other / Not sure' },
]

const SERVICES = [
  { value: 'supplier_search', label: 'Supplier Search' },
  { value: 'factory_audit', label: 'Factory Audit' },
  { value: 'sample_management', label: 'Sample Management' },
  { value: 'price_negotiation', label: 'Price Negotiation' },
  { value: 'production_follow_up', label: 'Production Follow-up' },
  { value: 'quality_inspection', label: 'Quality Inspection' },
  { value: 'shipping_logistics', label: 'Shipping & Logistics' },
  { value: 'private_label_oem', label: 'Private Label / OEM' },
]

const TIMELINES = [
  { value: 'asap', label: 'ASAP' },
  { value: '1_month', label: 'Within 1 month' },
  { value: '1_3_months', label: '1–3 months' },
  { value: '3_6_months', label: '3–6 months' },
  { value: 'exploring', label: 'Just exploring' },
]

const initial = {
  name: '',
  company: '',
  email: '',
  phone: '',
  country: '',
  product_category: '',
  product_description: '',
  target_quantity: '',
  target_price: '',
  services_needed: [],
  timeline: '',
}

export default function InquiryForm({ id = 'inquiry-form', compact = false }) {
  const [values, setValues] = useState(initial)
  const [status, setStatus] = useState('idle')
  const [error, setError] = useState(null)

  const onChange = (e) => {
    const { name, value } = e.target
    setValues((v) => ({ ...v, [name]: value }))
  }

  const toggleService = (val) => {
    setValues((v) => {
      const has = v.services_needed.includes(val)
      return {
        ...v,
        services_needed: has
          ? v.services_needed.filter((s) => s !== val)
          : [...v.services_needed, val],
      }
    })
  }

  const validate = (v) => {
    if (!v.name.trim()) return 'Please enter your name.'
    if (!v.email.trim()) return 'Please enter your business email.'
    if (!/^\S+@\S+\.\S+$/.test(v.email)) return 'Please enter a valid email address.'
    if (!v.product_description.trim() || v.product_description.trim().length < 5)
      return 'Please describe the product you want to source (at least 5 characters).'
    return null
  }

  const onSubmit = async (e) => {
    e.preventDefault()
    setError(null)
    const err = validate(values)
    if (err) {
      setError(err)
      return
    }

    setStatus('submitting')

    const payload = {
      ...values,
      status: 'new',
      submitted_at: new Date().toISOString(),
    }

    const { data: response, error: insertError } = await client
      .from('SourcingInquiry')
      .insert({ data: payload })
      .select()
      .single()

    if (insertError || response?.success === false) {
      const msg =
        Array.isArray(response?.errors) && response.errors.length
          ? response.errors.join(', ')
          : insertError?.message || 'Something went wrong. Please try again or email us directly.'
      setError(msg)
      setStatus('error')
      return
    }

    setStatus('success')
    setValues(initial)
  }

  return (
    <section id={id} className={compact ? '' : 'py-16 lg:py-24 bg-surface'}>
      <div className={compact ? '' : 'max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'}>
        <div className={`grid ${compact ? 'grid-cols-1' : 'grid-cols-1 lg:grid-cols-12 gap-10 items-start'}`}>
          {!compact && (
            <div className="lg:col-span-5">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-line text-[11px] font-semibold uppercase tracking-wider text-brand">
                Inquiry Form
              </div>
              <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-brand leading-tight">
                Tell us what you want to source
              </h2>
              <p className="mt-4 text-ink-soft leading-relaxed">
                Share a few details and we will reply within one business day with a free, no-obligation sourcing quote and recommended next steps.
              </p>

              <ul className="mt-8 space-y-4">
                <Bullet icon={<Clock className="w-4 h-4" />} title="Reply within 1 business day">
                  A real human reads every inquiry. No bots.
                </Bullet>
                <Bullet icon={<FileCheck2 className="w-4 h-4" />} title="Free initial quote">
                  Quote covers service scope, fees and indicative supplier benchmarks for your category.
                </Bullet>
                <Bullet icon={<ShieldCheck className="w-4 h-4" />} title="Confidential">
                  We can sign an NDA before reviewing any product details, drawings or specs.
                </Bullet>
              </ul>
            </div>
          )}

          <div className={compact ? '' : 'lg:col-span-7'}>
            <form
              onSubmit={onSubmit}
              className="bg-white border border-line rounded-2xl p-6 sm:p-8 shadow-sm"
              aria-busy={status === 'submitting'}
            >
              {status === 'success' ? (
                <SuccessState onReset={() => setStatus('idle')} />
              ) : (
                <>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <Field label="Full name *" name="name" value={values.name} onChange={onChange} required />
                    <Field label="Company" name="company" value={values.company} onChange={onChange} />
                    <Field type="email" label="Business email *" name="email" value={values.email} onChange={onChange} required />
                    <Field label="Phone / WhatsApp" name="phone" value={values.phone} onChange={onChange} />
                    <Field label="Country / region" name="country" value={values.country} onChange={onChange} />
                    <SelectField label="Product category" name="product_category" value={values.product_category} onChange={onChange} options={CATEGORIES} placeholder="Select a category" />
                  </div>

                  <div className="mt-4">
                    <label className="block text-sm font-semibold text-brand mb-1.5">
                      Product description *
                    </label>
                    <textarea
                      name="product_description"
                      value={values.product_description}
                      onChange={onChange}
                      rows={4}
                      required
                      placeholder="Describe the product you want to source: specs, materials, certifications, target market, reference links."
                      className="w-full bg-white border border-line rounded-lg px-3 py-2.5 text-ink placeholder:text-ink-soft/60 focus:outline-none focus:ring-2 focus:ring-accent/30 focus:border-accent transition"
                    />
                  </div>

                  <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <Field label="Target quantity" name="target_quantity" value={values.target_quantity} onChange={onChange} placeholder="e.g. 1,000 pcs / month" />
                    <Field label="Target price (per unit)" name="target_price" value={values.target_price} onChange={onChange} placeholder="e.g. USD 8–12 FOB" />
                  </div>

                  <div className="mt-4">
                    <label className="block text-sm font-semibold text-brand mb-2">
                      Services you're interested in
                    </label>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {SERVICES.map((s) => {
                        const checked = values.services_needed.includes(s.value)
                        return (
                          <label
                            key={s.value}
                            className={`flex items-center gap-2 px-3 py-2 rounded-lg border cursor-pointer text-sm transition ${
                              checked
                                ? 'border-accent bg-accent/5 text-brand'
                                : 'border-line text-ink-soft hover:border-accent/40'
                            }`}
                          >
                            <input
                              type="checkbox"
                              checked={checked}
                              onChange={() => toggleService(s.value)}
                              className="accent-accent"
                            />
                            <span>{s.label}</span>
                          </label>
                        )
                      })}
                    </div>
                  </div>

                  <div className="mt-4">
                    <SelectField label="Timeline" name="timeline" value={values.timeline} onChange={onChange} options={TIMELINES} placeholder="Select timeline" />
                  </div>

                  {error && (
                    <div className="mt-4 flex items-start gap-2 bg-red-50 border border-red-200 text-red-700 rounded-lg px-3 py-2.5 text-sm">
                      <AlertCircle className="w-4 h-4 mt-0.5 shrink-0" />
                      <span>{error}</span>
                    </div>
                  )}

                  <div className="mt-6 flex flex-col sm:flex-row sm:items-center gap-3 sm:justify-between">
                    <p className="text-xs text-ink-soft">
                      By submitting, you agree to be contacted by SSourcing China about this inquiry. We never share your details.
                    </p>
                    <button
                      type="submit"
                      disabled={status === 'submitting'}
                      className="inline-flex items-center justify-center gap-2 bg-accent hover:bg-accent/90 text-white px-6 py-3 rounded-lg font-semibold disabled:opacity-60 disabled:cursor-not-allowed transition"
                    >
                      {status === 'submitting' ? 'Sending…' : (
                        <>
                          Get a Free Sourcing Quote <Send className="w-4 h-4" />
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

function Field({ label, name, value, onChange, type = 'text', placeholder, required }) {
  return (
    <div>
      <label className="block text-sm font-semibold text-brand mb-1.5">{label}</label>
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        required={required}
        className="w-full bg-white border border-line rounded-lg px-3 py-2.5 text-ink placeholder:text-ink-soft/60 focus:outline-none focus:ring-2 focus:ring-accent/30 focus:border-accent transition"
      />
    </div>
  )
}

function SelectField({ label, name, value, onChange, options, placeholder }) {
  return (
    <div>
      <label className="block text-sm font-semibold text-brand mb-1.5">{label}</label>
      <select
        name={name}
        value={value}
        onChange={onChange}
        className="w-full bg-white border border-line rounded-lg px-3 py-2.5 text-ink focus:outline-none focus:ring-2 focus:ring-accent/30 focus:border-accent transition"
      >
        <option value="">{placeholder}</option>
        {options.map((o) => (
          <option key={o.value} value={o.value}>{o.label}</option>
        ))}
      </select>
    </div>
  )
}

function Bullet({ icon, title, children }) {
  return (
    <li className="flex gap-3">
      <span className="shrink-0 inline-flex w-8 h-8 rounded-lg bg-accent/10 text-accent items-center justify-center">
        {icon}
      </span>
      <div>
        <div className="font-semibold text-brand">{title}</div>
        <div className="text-sm text-ink-soft mt-0.5">{children}</div>
      </div>
    </li>
  )
}

function SuccessState({ onReset }) {
  return (
    <div className="text-center py-6">
      <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-emerald-50 text-emerald-600 mb-3">
        <CheckCircle2 className="w-7 h-7" />
      </div>
      <h3 className="text-2xl font-bold text-brand">Inquiry received</h3>
      <p className="mt-2 text-ink-soft max-w-md mx-auto">
        Thanks — we have your details. A sourcing specialist will review your inquiry and reply within one business day with next steps.
      </p>
      <button
        type="button"
        onClick={onReset}
        className="mt-5 inline-flex items-center gap-2 bg-brand hover:bg-brand-2 text-white px-5 py-2.5 rounded-lg font-semibold"
      >
        Send another inquiry
      </button>
    </div>
  )
}
