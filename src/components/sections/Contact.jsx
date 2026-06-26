import { useState } from 'react'
import { Mail, MapPin, Phone, Send, CheckCircle2, AlertCircle } from 'lucide-react'
import { DataClient } from '@strikingly/sdk'
import {
  STRK_PROJECT_URL,
  STRK_PROJECT_ANON_KEY,
} from '@/config.jsx'
import { products } from '@/lib/products'

const client = new DataClient(STRK_PROJECT_URL, STRK_PROJECT_ANON_KEY)

const PRODUCT_OPTIONS = [
  ...products.map((p) => ({ value: p.id, label: p.name })),
  { value: 'other', label: 'Something else / not sure yet' },
]

const initialValues = {
  name: '',
  company: '',
  email: '',
  phone: '',
  country: '',
  product_interest: 'double-folding-machine',
  material_thickness_mm: '',
  message: '',
}

function getEntity(response) {
  return response?.data ?? null
}
function getErrorMessage(response, error) {
  if (Array.isArray(response?.errors) && response.errors.length > 0) {
    return response.errors.join(', ')
  }
  return error?.message || 'Submission failed. Please try again.'
}

export default function Contact() {
  const [values, setValues] = useState(initialValues)
  const [status, setStatus] = useState('idle') // idle | submitting | success | error
  const [error, setError] = useState(null)

  const onChange = (e) => {
    const { name, value } = e.target
    setValues((v) => ({ ...v, [name]: value }))
  }

  const validate = (v) => {
    if (!v.name.trim()) return 'Please enter your name.'
    if (!v.email.trim()) return 'Please enter your email.'
    if (!/^\S+@\S+\.\S+$/.test(v.email)) return 'Please provide a valid email.'
    if (!v.message.trim()) return 'Please share a brief project description.'
    return null
  }

  const onSubmit = async (e) => {
    e.preventDefault()
    setError(null)
    const validationError = validate(values)
    if (validationError) {
      setError(validationError)
      setStatus('error')
      return
    }

    setStatus('submitting')

    try {
      const payload = {
        name: values.name.trim(),
        email: values.email.trim(),
        product_interest: values.product_interest,
        message: values.message.trim(),
      }
      if (values.company.trim()) payload.company = values.company.trim()
      if (values.phone.trim()) payload.phone = values.phone.trim()
      if (values.country.trim()) payload.country = values.country.trim()
      if (values.material_thickness_mm !== '') {
        const t = Number(values.material_thickness_mm)
        if (!Number.isNaN(t)) payload.material_thickness_mm = t
      }

      const { data: response, error: createError } = await client
        .from('ContactFormResponse')
        .insert({ data: payload })
        .select()
        .single()

      if (createError || response?.success === false) {
        setError(getErrorMessage(response, createError))
        setStatus('error')
        return
      }

      // Confirm entity was created before resetting UI.
      const created = getEntity(response)
      if (!created) {
        setError('Submission did not return a record. Please try again.')
        setStatus('error')
        return
      }

      setValues(initialValues)
      setStatus('success')
    } catch (err) {
      console.error('Contact submit error:', err)
      setError(err?.message || 'Submission failed. Please try again.')
      setStatus('error')
    }
  }

  return (
    <section id="contact" className="relative overflow-hidden bg-[#F5F4F0] py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="grid items-start gap-12 lg:grid-cols-12 lg:gap-16">
          {/* Left intro */}
          <div className="lg:col-span-5">
            <p className="text-xs font-medium uppercase tracking-[0.32em] text-[#C8A85B]">
              Get in touch
            </p>
            <h2 className="mt-4 text-3xl font-semibold leading-tight tracking-tight text-[#0E1B2C] md:text-4xl lg:text-5xl">
              Tell us about your
              <br />
              <span className="text-[#C8A85B]">folding project.</span>
            </h2>
            <p className="mt-6 text-base leading-relaxed text-[#2C3E50] md:text-lg">
              Share a few details and our applications team will respond within
              one business day with a tailored machine recommendation, pricing
              band, and lead time.
            </p>

            <div className="mt-10 space-y-5 text-sm">
              <div className="flex items-start gap-3">
                <Mail className="mt-0.5 h-5 w-5 flex-shrink-0 text-[#C8A85B]" />
                <div>
                  <div className="text-xs font-semibold uppercase tracking-[0.2em] text-[#0E1B2C]">
                    Email
                  </div>
                  <a
                    href="mailto:sales@artitect-machinery.com"
                    className="text-[#2C3E50] hover:text-[#C8A85B]"
                  >
                    sales@artitect-machinery.com
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Phone className="mt-0.5 h-5 w-5 flex-shrink-0 text-[#C8A85B]" />
                <div>
                  <div className="text-xs font-semibold uppercase tracking-[0.2em] text-[#0E1B2C]">
                    Sales hotline
                  </div>
                  <a
                    href="tel:+10000000000"
                    className="text-[#2C3E50] hover:text-[#C8A85B]"
                  >
                    +1 (000) 000-0000
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-5 w-5 flex-shrink-0 text-[#C8A85B]" />
                <div>
                  <div className="text-xs font-semibold uppercase tracking-[0.2em] text-[#0E1B2C]">
                    Headquarters
                  </div>
                  <div className="text-[#2C3E50]">
                    248 Foundry Avenue
                    <br />
                    Industrial Park District
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right form card */}
          <div className="lg:col-span-7">
            <form
              onSubmit={onSubmit}
              noValidate
              className="rounded-xl border border-[#E5E1D8] bg-white p-7 shadow-[0_2px_24px_-12px_rgba(14,27,44,0.18)] md:p-10"
            >
              <div className="grid gap-5 sm:grid-cols-2">
                <Field label="Full name" required>
                  <input
                    type="text"
                    name="name"
                    value={values.name}
                    onChange={onChange}
                    required
                    placeholder="Jane Doe"
                    className="form-input"
                  />
                </Field>
                <Field label="Company">
                  <input
                    type="text"
                    name="company"
                    value={values.company}
                    onChange={onChange}
                    placeholder="Acme Fabrication"
                    className="form-input"
                  />
                </Field>
                <Field label="Email" required>
                  <input
                    type="email"
                    name="email"
                    value={values.email}
                    onChange={onChange}
                    required
                    placeholder="you@company.com"
                    className="form-input"
                  />
                </Field>
                <Field label="Phone">
                  <input
                    type="tel"
                    name="phone"
                    value={values.phone}
                    onChange={onChange}
                    placeholder="+1 555 010 0000"
                    className="form-input"
                  />
                </Field>
                <Field label="Country / region">
                  <input
                    type="text"
                    name="country"
                    value={values.country}
                    onChange={onChange}
                    placeholder="United States"
                    className="form-input"
                  />
                </Field>
                <Field label="Machine of interest" required>
                  <select
                    name="product_interest"
                    value={values.product_interest}
                    onChange={onChange}
                    required
                    className="form-input bg-white"
                  >
                    {PRODUCT_OPTIONS.map((opt) => (
                      <option key={opt.value} value={opt.value}>
                        {opt.label}
                      </option>
                    ))}
                  </select>
                </Field>
                <Field label="Typical thickness (mm)" className="sm:col-span-2">
                  <input
                    type="number"
                    name="material_thickness_mm"
                    value={values.material_thickness_mm}
                    onChange={onChange}
                    min="0"
                    max="25"
                    step="0.1"
                    placeholder="e.g. 2.0"
                    className="form-input"
                  />
                </Field>
                <Field
                  label="Project details"
                  required
                  className="sm:col-span-2"
                >
                  <textarea
                    name="message"
                    value={values.message}
                    onChange={onChange}
                    required
                    rows={5}
                    placeholder="What are you folding, in what volumes, and what's your current bottleneck?"
                    className="form-input resize-none"
                  />
                </Field>
              </div>

              <div className="mt-8 flex flex-col items-stretch gap-3 sm:flex-row sm:items-center sm:justify-between">
                <p className="text-xs text-[#6B7280]">
                  We respond within one business day. No spam, ever.
                </p>
                <button
                  type="submit"
                  disabled={status === 'submitting'}
                  className="inline-flex items-center justify-center gap-2 rounded-lg bg-[#C8A85B] px-7 py-3.5 text-sm font-semibold text-[#0E1B2C] transition hover:bg-[#B59449] disabled:cursor-not-allowed disabled:opacity-60"
                >
                  {status === 'submitting' ? 'Sending…' : 'Send inquiry'}
                  <Send className="h-4 w-4" />
                </button>
              </div>

              {status === 'success' && (
                <div
                  role="status"
                  className="mt-6 flex items-start gap-3 rounded-lg border border-emerald-200 bg-emerald-50 p-4 text-sm text-emerald-800"
                >
                  <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-emerald-600" />
                  <div>
                    <div className="font-semibold">Inquiry received.</div>
                    <div>
                      Our applications team will be in touch within one business day.
                    </div>
                  </div>
                </div>
              )}

              {status === 'error' && error && (
                <div
                  role="alert"
                  className="mt-6 flex items-start gap-3 rounded-lg border border-rose-200 bg-rose-50 p-4 text-sm text-rose-800"
                >
                  <AlertCircle className="mt-0.5 h-5 w-5 flex-shrink-0 text-rose-600" />
                  <div>{error}</div>
                </div>
              )}
            </form>
          </div>
        </div>
      </div>

      {/* Local form-input style. Imported inline so we don't add a new global CSS file. */}
      <style>{`
        .form-input {
          width: 100%;
          border: 1px solid #E5E1D8;
          background-color: #FFFFFF;
          color: #0E1B2C;
          border-radius: 0.5rem;
          padding: 0.7rem 0.9rem;
          font-size: 0.95rem;
          line-height: 1.4;
          transition: border-color 0.2s, box-shadow 0.2s;
        }
        .form-input::placeholder { color: #9CA3AF; }
        .form-input:focus {
          outline: none;
          border-color: #C8A85B;
          box-shadow: 0 0 0 3px rgba(200, 168, 91, 0.18);
        }
        .form-input:disabled { background-color: #F5F4F0; color: #6B7280; }
      `}</style>
    </section>
  )
}

function Field({ label, required, children, className = '' }) {
  return (
    <label className={`flex flex-col gap-2 ${className}`}>
      <span className="text-xs font-semibold uppercase tracking-[0.18em] text-[#0E1B2C]">
        {label} {required && <span className="text-[#C8A85B]">*</span>}
      </span>
      {children}
    </label>
  )
}