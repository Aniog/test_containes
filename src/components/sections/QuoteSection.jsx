import React, { useState } from 'react'
import { DataClient } from '@strikingly/sdk'
import { CheckCircle2, AlertCircle, ArrowRight, Loader2 } from 'lucide-react'
import Eyebrow from '@/components/ui/Eyebrow'
import { useReveal } from '@/lib/useReveal'
import { STRK_PROJECT_URL, STRK_PROJECT_ANON_KEY } from '@/config.jsx'

const client = new DataClient(STRK_PROJECT_URL, STRK_PROJECT_ANON_KEY)

const PRODUCT_OPTIONS = [
  'Double Folding Machine',
  'Double Folder',
  'Sheet Metal Folder',
  'Sheet Metal Folding Machine',
  'Metal Folder',
  'Metal Folder Machine',
  'Metal Folding Machine',
  'Not sure yet',
]

const getEntity = (response) => response?.data ?? null
const getErrorMessage = (response, error) => {
  if (Array.isArray(response?.errors) && response.errors.length > 0) {
    return response.errors.join(', ')
  }
  return error?.message || 'Submission failed. Please try again.'
}

const INITIAL_VALUES = {
  full_name: '',
  company: '',
  email: '',
  phone: '',
  country: '',
  product_interest: 'Not sure yet',
  material_thickness: '',
  sheet_length: '',
  message: '',
}

const validate = (v) => {
  if (!v.full_name.trim()) return 'Please tell us your full name.'
  if (!v.email.trim()) return 'Please share an email so we can reply.'
  if (!/^\S+@\S+\.\S+$/.test(v.email)) return 'That email address looks off — could you double-check it?'
  if (!v.product_interest) return 'Please choose a product you are interested in.'
  return null
}

const QuoteSection = () => {
  const [values, setValues] = useState(INITIAL_VALUES)
  const [status, setStatus] = useState('idle')
  const [error, setError] = useState(null)
  const [submittedId, setSubmittedId] = useState(null)
  const headlineRef = useReveal()
  const formRef = useReveal()

  const handleChange = (e) => {
    const { name, value } = e.target
    setValues((v) => ({ ...v, [name]: value }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setError(null)
    const validationError = validate(values)
    if (validationError) {
      setError(validationError)
      setStatus('error')
      return
    }

    setStatus('submitting')

    const payload = {
      full_name: values.full_name.trim(),
      email: values.email.trim(),
      product_interest: values.product_interest,
      status: 'new',
    }
    if (values.company.trim()) payload.company = values.company.trim()
    if (values.phone.trim()) payload.phone = values.phone.trim()
    if (values.country.trim()) payload.country = values.country.trim()
    if (values.material_thickness.trim()) payload.material_thickness = values.material_thickness.trim()
    if (values.sheet_length.trim()) payload.sheet_length = values.sheet_length.trim()
    if (values.message.trim()) payload.message = values.message.trim()

    const { data: response, error: submitError } = await client
      .from('Quote Request')
      .insert({ data: payload })
      .select()
      .single()

    if (submitError || response?.success === false) {
      setError(getErrorMessage(response, submitError))
      setStatus('error')
      return
    }

    const created = getEntity(response)
    setSubmittedId(created?.id ?? null)
    setStatus('success')
    setValues(INITIAL_VALUES)
  }

  const submitting = status === 'submitting'

  return (
    <section
      id="quote"
      className="relative bg-ink py-24 md:py-32 text-cream overflow-hidden"
    >
      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage:
            'radial-gradient(circle at 20% 20%, rgba(184,118,62,0.35), transparent 40%), radial-gradient(circle at 80% 80%, rgba(212,165,116,0.25), transparent 45%)',
        }}
      />
      <div className="absolute inset-0 opacity-15"
        style={{
          backgroundImage:
            'linear-gradient(rgba(184,118,62,0.18) 1px, transparent 1px), linear-gradient(90deg, rgba(184,118,62,0.18) 1px, transparent 1px)',
          backgroundSize: '64px 64px',
        }}
      />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-10">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-20">
          <div ref={headlineRef} className="reveal lg:col-span-5">
            <Eyebrow tone="copper-bright">Request a Quote</Eyebrow>
            <h2 className="mt-5 font-display text-4xl md:text-5xl lg:text-6xl text-cream leading-tight">
              Let's spec the right<br />
              <span className="italic text-copper-bright">machine for you.</span>
            </h2>
            <p className="mt-6 text-cream/70 text-base md:text-lg leading-relaxed max-w-prose">
              Tell us about your shop, your typical material, and the bends you need. An
              ARTITECT engineer — not a chatbot — will respond within one business day with
              a tailored spec sheet and a transparent price.
            </p>

            <dl className="mt-10 space-y-6">
              <div>
                <dt className="text-xs uppercase tracking-eyebrow text-copper-bright">Sales</dt>
                <dd className="mt-2 font-display text-xl text-cream">sales@artitect-machinery.com</dd>
              </div>
              <div>
                <dt className="text-xs uppercase tracking-eyebrow text-copper-bright">Phone</dt>
                <dd className="mt-2 font-display text-xl text-cream">+86 21 0000 0000</dd>
              </div>
              <div>
                <dt className="text-xs uppercase tracking-eyebrow text-copper-bright">Headquarters</dt>
                <dd className="mt-2 text-cream/80 text-base leading-relaxed">
                  No. 88, Precision Industrial Park<br />
                  Jiading District, Shanghai 201800<br />
                  People's Republic of China
                </dd>
              </div>
              <div>
                <dt className="text-xs uppercase tracking-eyebrow text-copper-bright">Hours</dt>
                <dd className="mt-2 text-cream/80 text-base">Mon — Fri · 09:00 – 18:00 CST</dd>
              </div>
            </dl>
          </div>

          <div ref={formRef} className="reveal lg:col-span-7">
            {status === 'success' ? (
              <SuccessCard onAnother={() => { setStatus('idle'); setSubmittedId(null) }} submittedId={submittedId} />
            ) : (
              <form
                onSubmit={handleSubmit}
                className="bg-ink-soft border border-copper/30 p-8 md:p-10"
                noValidate
              >
                <div className="grid sm:grid-cols-2 gap-6">
                  <Field label="Full name" name="full_name" value={values.full_name} onChange={handleChange} required />
                  <Field label="Company" name="company" value={values.company} onChange={handleChange} />
                  <Field label="Email" name="email" type="email" value={values.email} onChange={handleChange} required />
                  <Field label="Phone / WhatsApp" name="phone" value={values.phone} onChange={handleChange} />
                  <Field label="Country" name="country" value={values.country} onChange={handleChange} />
                  <SelectField
                    label="Product of interest"
                    name="product_interest"
                    value={values.product_interest}
                    onChange={handleChange}
                    options={PRODUCT_OPTIONS}
                    required
                  />
                  <Field label="Material thickness" name="material_thickness" value={values.material_thickness} onChange={handleChange} placeholder="e.g. 0.5 – 3 mm" />
                  <Field label="Sheet length needed" name="sheet_length" value={values.sheet_length} onChange={handleChange} placeholder="e.g. 2500 mm" />
                </div>

                <div className="mt-6">
                  <label htmlFor="message" className="block text-xs uppercase tracking-eyebrow text-copper-bright mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={values.message}
                    onChange={handleChange}
                    rows={5}
                    className="w-full bg-transparent border border-cream/15 focus:border-copper-bright focus:outline-none px-4 py-3 text-cream placeholder:text-cream/30 text-base transition-colors"
                    placeholder="Tell us about your typical work, batch sizes, and any constraints we should consider."
                  />
                </div>

                {status === 'error' && error && (
                  <div className="mt-6 flex items-start gap-3 border border-danger/50 bg-danger/10 px-4 py-3 text-sm text-cream">
                    <AlertCircle className="h-5 w-5 text-danger shrink-0 mt-0.5" />
                    <span>{error}</span>
                  </div>
                )}

                <div className="mt-8 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                  <p className="text-xs text-cream/50 leading-relaxed max-w-md">
                    By submitting this form you agree to receive a one-time reply from
                    ARTITECT MACHINERY. We never share your details.
                  </p>
                  <button
                    type="submit"
                    disabled={submitting}
                    className="inline-flex items-center justify-center gap-3 bg-copper text-ink px-7 py-4 text-sm font-medium tracking-widest uppercase hover:bg-copper-bright transition-colors disabled:opacity-60 disabled:cursor-not-allowed min-w-[200px]"
                  >
                    {submitting ? (
                      <>
                        <Loader2 className="h-4 w-4 animate-spin" />
                        Sending…
                      </>
                    ) : (
                      <>
                        Submit request
                        <ArrowRight className="h-4 w-4" />
                      </>
                    )}
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}

const Field = ({ label, name, type = 'text', value, onChange, required, placeholder }) => (
  <div>
    <label htmlFor={name} className="flex items-center justify-between text-xs uppercase tracking-eyebrow text-copper-bright mb-2">
      <span>{label}{required && <span className="ml-1 text-copper">*</span>}</span>
    </label>
    <input
      id={name}
      name={name}
      type={type}
      value={value}
      onChange={onChange}
      required={required}
      placeholder={placeholder}
      className="w-full bg-transparent border border-cream/15 focus:border-copper-bright focus:outline-none px-4 py-3 text-cream placeholder:text-cream/30 text-base transition-colors"
    />
  </div>
)

const SelectField = ({ label, name, value, onChange, options, required }) => (
  <div>
    <label htmlFor={name} className="block text-xs uppercase tracking-eyebrow text-copper-bright mb-2">
      {label}{required && <span className="ml-1 text-copper">*</span>}
    </label>
    <div className="relative">
      <select
        id={name}
        name={name}
        value={value}
        onChange={onChange}
        required={required}
        className="w-full appearance-none bg-transparent border border-cream/15 focus:border-copper-bright focus:outline-none px-4 py-3 pr-10 text-cream text-base transition-colors"
      >
        {options.map((opt) => (
          <option key={opt} value={opt} className="bg-ink text-cream">{opt}</option>
        ))}
      </select>
      <span className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-copper-bright">
        <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
          <path d="M2 4l4 4 4-4" stroke="currentColor" strokeWidth="1.5" />
        </svg>
      </span>
    </div>
  </div>
)

const SuccessCard = ({ onAnother, submittedId }) => (
  <div className="bg-ink-soft border border-copper/40 p-10 md:p-12 text-center">
    <div className="mx-auto h-14 w-14 rounded-full border border-copper-bright/60 flex items-center justify-center">
      <CheckCircle2 className="h-8 w-8 text-copper-bright" />
    </div>
    <h3 className="mt-6 font-display text-3xl md:text-4xl text-cream">Request received.</h3>
    <p className="mt-4 text-cream/70 max-w-md mx-auto leading-relaxed">
      Thank you. An ARTITECT engineer will review your enquiry and reply within one business
      day with a tailored spec sheet and transparent pricing.
      {submittedId && (
        <span className="block mt-3 text-xs text-copper-bright uppercase tracking-eyebrow">
          Reference #{submittedId}
        </span>
      )}
    </p>
    <button
      type="button"
      onClick={onAnother}
      className="mt-8 inline-flex items-center gap-2 border border-cream/20 text-cream px-6 py-3 text-xs font-medium tracking-widest uppercase hover:bg-cream/5 transition-colors"
    >
      Submit another request
    </button>
  </div>
)

export default QuoteSection
