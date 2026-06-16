import { useState } from 'react'
import { CheckCircle2, AlertCircle, Loader2, Send, Mail, Phone, MapPin } from 'lucide-react'
import { BRAND, PRODUCTS } from '@/data/site'
import { submitContactLead } from '@/api/contact'

const PRODUCT_OPTIONS = [
  ...PRODUCTS.map((p) => ({ value: p.id, label: p.title })),
  { value: 'other', label: 'Other / not sure yet' },
]

const INITIAL = {
  name: '',
  email: '',
  company: '',
  phone: '',
  country: '',
  productInterest: '',
  material: '',
  message: '',
}

function validate(values) {
  const errors = {}
  if (!values.name.trim()) errors.name = 'Please tell us your name.'
  if (!values.email.trim()) {
    errors.email = 'An email helps us reply quickly.'
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email.trim())) {
    errors.email = 'That email does not look right.'
  }
  if (!values.message.trim() || values.message.trim().length < 10) {
    errors.message = 'A short description of the project helps us route your request.'
  }
  return errors
}

export default function Contact() {
  const [values, setValues] = useState(INITIAL)
  const [errors, setErrors] = useState({})
  const [status, setStatus] = useState('idle') // idle | submitting | success | error
  const [errorMessage, setErrorMessage] = useState('')

  const onChange = (e) => {
    const { name, value } = e.target
    setValues((v) => ({ ...v, [name]: value }))
    if (errors[name]) {
      setErrors((prev) => {
        const next = { ...prev }
        delete next[name]
        return next
      })
    }
  }

  const onSubmit = async (e) => {
    e.preventDefault()
    const v = validate(values)
    setErrors(v)
    if (Object.keys(v).length > 0) return

    setStatus('submitting')
    setErrorMessage('')

    try {
      await submitContactLead({
        name: values.name.trim(),
        email: values.email.trim(),
        company: values.company.trim() || undefined,
        phone: values.phone.trim() || undefined,
        country: values.country.trim() || undefined,
        productInterest: values.productInterest || undefined,
        material: values.material.trim() || undefined,
        message: values.message.trim(),
        source: 'website',
      })
      setStatus('success')
      setValues(INITIAL)
    } catch (err) {
      setStatus('error')
      setErrorMessage(err.message || 'Submission failed. Please try again.')
    }
  }

  return (
    <section id="contact" className="bg-ink-900 text-ink-50 py-20 md:py-28 lg:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-20">
          <div className="lg:col-span-5">
            <p className="eyebrow text-copper-500">Talk to engineering</p>
            <h2 className="mt-4 text-3xl md:text-4xl lg:text-5xl font-light text-ink-50 tracking-tight">
              Tell us about the
              <br />
              parts you need to bend.
            </h2>
            <p className="mt-6 text-base lg:text-lg text-ink-50/70 leading-relaxed">
              Share a few details about your shop, the materials you run and
              the parts you make. An applications engineer will respond with
              specifications, tooling notes and a quote within one business
              day.
            </p>

            <dl className="mt-10 space-y-5 text-sm">
              <div className="flex items-start gap-4">
                <span
                  aria-hidden="true"
                  className="inline-flex items-center justify-center w-10 h-10 rounded-md bg-ink-800 text-copper-500 shrink-0"
                >
                  <Mail className="w-4 h-4" strokeWidth={1.5} />
                </span>
                <div>
                  <dt className="text-xs uppercase tracking-widest-2 text-ink-50/50">Email</dt>
                  <dd className="mt-1 text-ink-50">
                    <a
                      href={`mailto:${BRAND.contactEmail}`}
                      className="hover:text-copper-500 transition-colors"
                    >
                      {BRAND.contactEmail}
                    </a>
                  </dd>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <span
                  aria-hidden="true"
                  className="inline-flex items-center justify-center w-10 h-10 rounded-md bg-ink-800 text-copper-500 shrink-0"
                >
                  <Phone className="w-4 h-4" strokeWidth={1.5} />
                </span>
                <div>
                  <dt className="text-xs uppercase tracking-widest-2 text-ink-50/50">Phone</dt>
                  <dd className="mt-1 text-ink-50">{BRAND.contactPhone}</dd>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <span
                  aria-hidden="true"
                  className="inline-flex items-center justify-center w-10 h-10 rounded-md bg-ink-800 text-copper-500 shrink-0"
                >
                  <MapPin className="w-4 h-4" strokeWidth={1.5} />
                </span>
                <div>
                  <dt className="text-xs uppercase tracking-widest-2 text-ink-50/50">Headquarters</dt>
                  <dd className="mt-1 text-ink-50/80 leading-relaxed">{BRAND.address}</dd>
                </div>
              </div>
            </dl>
          </div>

          <div className="lg:col-span-7">
            <form
              onSubmit={onSubmit}
              noValidate
              className="bg-ink-800/50 border border-line-dark rounded-md p-7 md:p-10"
              aria-busy={status === 'submitting'}
            >
              {status === 'success' ? (
                <SuccessPanel onReset={() => setStatus('idle')} />
              ) : (
                <>
                  <div className="grid sm:grid-cols-2 gap-5">
                    <Field
                      label="Full name"
                      name="name"
                      autoComplete="name"
                      required
                      value={values.name}
                      onChange={onChange}
                      error={errors.name}
                    />
                    <Field
                      label="Work email"
                      name="email"
                      type="email"
                      autoComplete="email"
                      required
                      value={values.email}
                      onChange={onChange}
                      error={errors.email}
                    />
                    <Field
                      label="Company"
                      name="company"
                      autoComplete="organization"
                      value={values.company}
                      onChange={onChange}
                    />
                    <Field
                      label="Phone"
                      name="phone"
                      type="tel"
                      autoComplete="tel"
                      value={values.phone}
                      onChange={onChange}
                    />
                    <Field
                      label="Country"
                      name="country"
                      autoComplete="country-name"
                      value={values.country}
                      onChange={onChange}
                    />
                    <SelectField
                      label="Product of interest"
                      name="productInterest"
                      value={values.productInterest}
                      onChange={onChange}
                      options={PRODUCT_OPTIONS}
                      placeholder="Select a product line"
                    />
                    <Field
                      label="Primary material"
                      name="material"
                      placeholder="e.g. 2 mm cold-rolled steel"
                      value={values.material}
                      onChange={onChange}
                      className="sm:col-span-2"
                    />
                    <TextAreaField
                      label="Tell us about the project"
                      name="message"
                      required
                      value={values.message}
                      onChange={onChange}
                      error={errors.message}
                      placeholder="Part geometry, tolerances, monthly volume, anything that helps us recommend the right machine."
                      className="sm:col-span-2"
                    />
                  </div>

                  {status === 'error' && errorMessage && (
                    <div
                      role="alert"
                      className="mt-6 flex items-start gap-3 p-4 rounded-md border border-red-400/30 bg-red-500/10 text-sm text-red-200"
                    >
                      <AlertCircle className="w-5 h-5 mt-0.5 shrink-0" strokeWidth={1.5} />
                      <span>{errorMessage}</span>
                    </div>
                  )}

                  <div className="mt-8 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                    <p className="text-xs text-ink-50/50 leading-relaxed max-w-md">
                      By submitting this form you agree to be contacted by an
                      ARTITECT applications engineer. We never share inquiries
                      with third parties.
                    </p>
                    <button
                      type="submit"
                      disabled={status === 'submitting'}
                      className="btn-on-dark disabled:opacity-60 disabled:cursor-not-allowed"
                    >
                      {status === 'submitting' ? (
                        <>
                          <Loader2 className="w-4 h-4 animate-spin" strokeWidth={2} />
                          Sending…
                        </>
                      ) : (
                        <>
                          Send inquiry
                          <Send className="w-4 h-4" strokeWidth={1.5} />
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

function fieldBaseClass(hasError) {
  return (
    'block w-full bg-ink-900/60 text-ink-50 placeholder-ink-50/30 ' +
    'border rounded-md px-4 py-3 text-sm transition-colors ' +
    'focus:outline-none focus:ring-2 focus:ring-copper-500 focus:ring-offset-0 ' +
    (hasError
      ? 'border-red-400/60 focus:border-red-300'
      : 'border-line-dark focus:border-copper-500')
  )
}

function Field({
  label,
  name,
  type = 'text',
  value,
  onChange,
  required,
  error,
  className = '',
  ...rest
}) {
  return (
    <label className={`block ${className}`}>
      <span className="block text-xs font-medium uppercase tracking-widest-2 text-ink-50/60 mb-2">
        {label}
        {required && <span className="text-copper-500 ml-1">*</span>}
      </span>
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        required={required}
        aria-invalid={!!error}
        className={fieldBaseClass(!!error)}
        {...rest}
      />
      {error && (
        <span className="mt-1.5 block text-xs text-red-300">{error}</span>
      )}
    </label>
  )
}

function TextAreaField({
  label,
  name,
  value,
  onChange,
  required,
  error,
  className = '',
  ...rest
}) {
  return (
    <label className={`block ${className}`}>
      <span className="block text-xs font-medium uppercase tracking-widest-2 text-ink-50/60 mb-2">
        {label}
        {required && <span className="text-copper-500 ml-1">*</span>}
      </span>
      <textarea
        name={name}
        value={value}
        onChange={onChange}
        required={required}
        rows={5}
        aria-invalid={!!error}
        className={fieldBaseClass(!!error) + ' resize-y min-h-[120px]'}
        {...rest}
      />
      {error && (
        <span className="mt-1.5 block text-xs text-red-300">{error}</span>
      )}
    </label>
  )
}

function SelectField({
  label,
  name,
  value,
  onChange,
  options,
  placeholder,
  className = '',
}) {
  return (
    <label className={`block ${className}`}>
      <span className="block text-xs font-medium uppercase tracking-widest-2 text-ink-50/60 mb-2">
        {label}
      </span>
      <select
        name={name}
        value={value}
        onChange={onChange}
        className={fieldBaseClass(false) + ' appearance-none pr-10 bg-[url("data:image/svg+xml,%3Csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 20 20%27 fill=%27%23C8A45D%27%3E%3Cpath fill-rule=%27evenodd%27 d=%27M5.23 7.21a.75.75 0 011.06.02L10 11.06l3.71-3.83a.75.75 0 111.08 1.04l-4.25 4.39a.75.75 0 01-1.08 0L5.21 8.27a.75.75 0 01.02-1.06z%27 clip-rule=%27evenodd%27/%3E%3C/svg%3E")] bg-[length:18px_18px] bg-[right_12px_center] bg-no-repeat'}
      >
        <option value="">{placeholder}</option>
        {options.map((opt) => (
          <option key={opt.value} value={opt.value}>
            {opt.label}
          </option>
        ))}
      </select>
    </label>
  )
}

function SuccessPanel({ onReset }) {
  return (
    <div
      role="status"
      className="flex flex-col items-center text-center py-6"
    >
      <span
        aria-hidden="true"
        className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-copper-100 text-copper-700 mb-5"
      >
        <CheckCircle2 className="w-7 h-7" strokeWidth={1.5} />
      </span>
      <h3 className="font-display text-2xl text-ink-50">
        Thank you — your inquiry is in.
      </h3>
      <p className="mt-3 text-sm text-ink-50/70 max-w-md">
        An ARTITECT applications engineer will be in touch within one
        business day with specifications, tooling notes and a quote.
      </p>
      <button
        type="button"
        onClick={onReset}
        className="mt-7 btn-ghost-on-dark"
      >
        Submit another inquiry
      </button>
    </div>
  )
}
