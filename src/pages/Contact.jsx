import { useState } from 'react'
import { DataClient } from '@strikingly/sdk'
import { Mail, Phone, MapPin, Send, Check, AlertCircle } from 'lucide-react'
import { STRK_PROJECT_URL, STRK_PROJECT_ANON_KEY } from '@/config.jsx'
import Eyebrow from '@/components/Eyebrow'

const client = new DataClient(STRK_PROJECT_URL, STRK_PROJECT_ANON_KEY)

const productOptions = [
  'Double Folding Machine',
  'Sheet Metal Folder',
  'Metal Folding Machine',
  'Spare Parts & Service',
  'General Inquiry',
]

const initialValues = {
  name: '',
  company: '',
  email: '',
  phone: '',
  country: '',
  product_interest: 'Double Folding Machine',
  message: '',
}

const getErrorMessage = (response, error) => {
  if (Array.isArray(response?.errors) && response.errors.length > 0) {
    return response.errors.join(', ')
  }
  return error?.message || 'Submission failed. Please try again.'
}

const Contact = () => {
  const [values, setValues] = useState(initialValues)
  const [status, setStatus] = useState('idle')
  const [error, setError] = useState(null)

  const onChange = (e) => {
    const { name, value } = e.target
    setValues((v) => ({ ...v, [name]: value }))
  }

  const validate = (v) => {
    if (!v.name.trim()) return 'Please enter your name.'
    if (!v.email.trim()) return 'Please enter your email.'
    if (!/^\S+@\S+\.\S+$/.test(v.email)) return 'Please enter a valid email address.'
    if (!v.message.trim()) return 'Please share a few details about your inquiry.'
    return null
  }

  const onSubmit = async (e) => {
    e.preventDefault()
    setError(null)
    const v = validate(values)
    if (v) {
      setError(v)
      setStatus('error')
      return
    }

    setStatus('submitting')
    const { data: response, error: createError } = await client
      .from('ContactInquiry')
      .insert({
        data: {
          ...values,
          submitted_at: new Date().toISOString(),
        },
      })
      .select()
      .single()

    if (createError || response?.success === false) {
      setError(getErrorMessage(response, createError))
      setStatus('error')
      return
    }

    setValues(initialValues)
    setStatus('success')
  }

  return (
    <div>
      {/* Page Header */}
      <section className="bg-ink text-bone py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <Eyebrow tone="light" className="mb-6">
            Begin a Conversation
          </Eyebrow>
          <h1 className="font-serif font-light text-5xl md:text-7xl leading-[1.05] max-w-4xl">
            Tell us about your
            <span className="italic text-brass-soft"> next bend.</span>
          </h1>
          <p className="text-bone/70 max-w-2xl mt-8 leading-relaxed text-lg font-light">
            An ARTITECT engineer will read your inquiry and reply within one
            business day &mdash; with answers, not autoresponders.
          </p>
        </div>
      </section>

      <section className="bg-bone py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-6 md:px-10 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          {/* Contact info */}
          <aside className="lg:col-span-4">
            <Eyebrow className="mb-6">Direct Lines</Eyebrow>
            <h2 className="font-serif font-light text-3xl text-ink leading-tight mb-10">
              Speak with the people who build the machines.
            </h2>

            <ul className="space-y-8">
              <li className="flex items-start gap-4">
                <span className="w-10 h-10 border border-brass flex items-center justify-center text-brass shrink-0">
                  <MapPin size={18} />
                </span>
                <div>
                  <div className="text-xs tracking-[0.25em] uppercase text-steel mb-2">
                    Workshop
                  </div>
                  <p className="text-ink leading-relaxed">
                    Industrial Park 14<br />
                    70435 Stuttgart, Germany
                  </p>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <span className="w-10 h-10 border border-brass flex items-center justify-center text-brass shrink-0">
                  <Mail size={18} />
                </span>
                <div>
                  <div className="text-xs tracking-[0.25em] uppercase text-steel mb-2">
                    Sales & Engineering
                  </div>
                  <a
                    href="mailto:sales@artitect.com"
                    className="text-ink hover:text-brass transition-colors"
                  >
                    sales@artitect.com
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <span className="w-10 h-10 border border-brass flex items-center justify-center text-brass shrink-0">
                  <Phone size={18} />
                </span>
                <div>
                  <div className="text-xs tracking-[0.25em] uppercase text-steel mb-2">
                    Telephone
                  </div>
                  <a
                    href="tel:+49711000000"
                    className="text-ink hover:text-brass transition-colors"
                  >
                    +49 711 000 000
                  </a>
                </div>
              </li>
            </ul>

            <div className="mt-12 pt-10 border-t border-mist">
              <div className="text-xs tracking-[0.25em] uppercase text-steel mb-3">
                Hours
              </div>
              <p className="text-ink text-sm leading-relaxed">
                Monday &ndash; Friday<br />
                08:00 &ndash; 18:00 CET
              </p>
            </div>
          </aside>

          {/* Form */}
          <div className="lg:col-span-8">
            <form
              onSubmit={onSubmit}
              className="bg-ivory border border-mist p-8 md:p-12"
              aria-busy={status === 'submitting'}
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Field
                  label="Full Name"
                  name="name"
                  required
                  value={values.name}
                  onChange={onChange}
                  placeholder="Jane Doe"
                />
                <Field
                  label="Company"
                  name="company"
                  value={values.company}
                  onChange={onChange}
                  placeholder="Company name"
                />
                <Field
                  label="Email"
                  name="email"
                  type="email"
                  required
                  value={values.email}
                  onChange={onChange}
                  placeholder="you@company.com"
                />
                <Field
                  label="Phone"
                  name="phone"
                  type="tel"
                  value={values.phone}
                  onChange={onChange}
                  placeholder="+1 555 000 0000"
                />
                <Field
                  label="Country"
                  name="country"
                  value={values.country}
                  onChange={onChange}
                  placeholder="Germany"
                />
                <div className="flex flex-col gap-2">
                  <label
                    htmlFor="product_interest"
                    className="text-[10px] tracking-[0.25em] uppercase text-steel"
                  >
                    Interested In
                  </label>
                  <select
                    id="product_interest"
                    name="product_interest"
                    value={values.product_interest}
                    onChange={onChange}
                    className="bg-transparent border-b border-mist focus:border-brass outline-none py-3 text-ink text-sm transition-colors"
                  >
                    {productOptions.map((opt) => (
                      <option key={opt} value={opt}>
                        {opt}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="mt-6 flex flex-col gap-2">
                <label
                  htmlFor="message"
                  className="text-[10px] tracking-[0.25em] uppercase text-steel"
                >
                  Project Details *
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={6}
                  required
                  value={values.message}
                  onChange={onChange}
                  placeholder="Working length, sheet capacity, production needs, or anything else we should know."
                  className="bg-transparent border-b border-mist focus:border-brass outline-none py-3 text-ink text-sm leading-relaxed transition-colors resize-none placeholder:text-steel/60"
                />
              </div>

              {status === 'success' && (
                <div className="mt-8 flex items-start gap-3 bg-brass-soft text-ink p-5">
                  <Check size={18} className="text-brass-deep mt-0.5 shrink-0" />
                  <div>
                    <div className="font-medium">Inquiry received.</div>
                    <p className="text-sm text-steel mt-1">
                      Thank you. An ARTITECT engineer will reply within one business day.
                    </p>
                  </div>
                </div>
              )}

              {status === 'error' && error && (
                <div className="mt-8 flex items-start gap-3 border border-red-300 bg-red-50 text-ink p-5">
                  <AlertCircle size={18} className="text-red-700 mt-0.5 shrink-0" />
                  <div>
                    <div className="font-medium text-red-800">
                      We couldn&rsquo;t send your inquiry.
                    </div>
                    <p className="text-sm text-red-700 mt-1">{error}</p>
                  </div>
                </div>
              )}

              <div className="mt-10 flex flex-col md:flex-row md:items-center md:justify-between gap-6">
                <p className="text-xs text-steel max-w-md">
                  By submitting, you agree to be contacted by an ARTITECT engineer
                  regarding your inquiry.
                </p>
                <button
                  type="submit"
                  disabled={status === 'submitting'}
                  className="inline-flex items-center justify-center gap-3 bg-ink text-bone px-8 py-4 text-xs tracking-[0.25em] uppercase hover:bg-brass hover:text-ink transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  {status === 'submitting' ? 'Sending\u2026' : 'Send Inquiry'}
                  <Send size={14} />
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </div>
  )
}

const Field = ({ label, name, type = 'text', required, value, onChange, placeholder }) => (
  <div className="flex flex-col gap-2">
    <label
      htmlFor={name}
      className="text-[10px] tracking-[0.25em] uppercase text-steel"
    >
      {label} {required && '*'}
    </label>
    <input
      id={name}
      name={name}
      type={type}
      required={required}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      className="bg-transparent border-b border-mist focus:border-brass outline-none py-3 text-ink text-sm transition-colors placeholder:text-steel/60"
    />
  </div>
)

export default Contact
