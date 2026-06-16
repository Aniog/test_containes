import { useState } from 'react'
import { Link } from 'react-router-dom'
import { ArrowUpRight, Send, CheckCircle2, AlertCircle } from 'lucide-react'
import { DataClient } from '@strikingly/sdk'
import { STRK_PROJECT_URL, STRK_PROJECT_ANON_KEY } from '@/config'
import { products } from '@/data/catalog'

const client = new DataClient(STRK_PROJECT_URL, STRK_PROJECT_ANON_KEY)

const getEntity = (response) => response?.data ?? null
const getErrorMessage = (response, error) => {
  if (Array.isArray(response?.errors) && response.errors.length > 0) {
    return response.errors.join(', ')
  }
  return error?.message || 'Submission failed'
}

const initialValues = {
  name: '',
  email: '',
  company: '',
  phone: '',
  country: '',
  productInterest: '',
  material: '',
  thickness: '',
  length: '',
  message: '',
}

export default function ContactCTA() {
  const [values, setValues] = useState(initialValues)
  const [status, setStatus] = useState('idle')
  const [error, setError] = useState(null)

  const onChange = (e) => {
    const { name, value } = e.target
    setValues((v) => ({ ...v, [name]: value }))
  }

  const validate = (v) => {
    if (!v.name.trim()) return 'Please tell us your name.'
    if (!v.email.trim()) return 'An email is required so we can reply.'
    if (!/^\S+@\S+\.\S+$/.test(v.email)) return 'That email address does not look right.'
    if (!v.message.trim()) return 'Tell us a bit about your project or question.'
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

    try {
      const payload = {
        data: {
          name: values.name.trim(),
          email: values.email.trim(),
          company: values.company.trim() || undefined,
          phone: values.phone.trim() || undefined,
          country: values.country.trim() || undefined,
          productInterest: values.productInterest || undefined,
          material: values.material.trim() || undefined,
          thickness: values.thickness.trim() || undefined,
          length: values.length.trim() || undefined,
          message: values.message.trim(),
          source: 'home',
        },
      }

      const { data: response, error: createError } = await client
        .from('QuoteRequest')
        .insert(payload)
        .select()
        .maybeSingle()

      if (createError || response?.success === false) {
        throw new Error(getErrorMessage(response, createError))
      }

      const created = getEntity(response)
      if (!created || !created.id) {
        throw new Error('Submission did not return a confirmation. Please try again.')
      }

      setStatus('success')
      setValues(initialValues)
    } catch (err) {
      console.error(err)
      setError(err.message || 'Submission failed')
      setStatus('error')
    }
  }

  return (
    <section
      id="contact"
      className="relative isolate overflow-hidden bg-ink py-24 text-white md:py-32"
      aria-labelledby="contact-cta-title"
    >
      <div className="pointer-events-none absolute inset-0 -z-10 bg-grid opacity-15" />
      <div
        className="pointer-events-none absolute -right-40 top-0 -z-10 h-96 w-96 rounded-full bg-brass/15 blur-3xl"
        data-strk-bg-id="contact-cta-bg-e1c4af"
        data-strk-bg="[contact-cta-subtitle] [contact-cta-title]"
        data-strk-bg-ratio="1x1"
        data-strk-bg-width="800"
      />

      <div className="container-page">
        <div className="grid items-start gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-5">
            <p
              id="contact-cta-eyebrow"
              className="eyebrow eyebrow-line text-brass"
            >
              <span>Start a conversation</span>
            </p>
            <h2
              id="contact-cta-title"
              className="mt-4 text-balance text-4xl font-semibold leading-tight tracking-tight md:text-5xl"
            >
              Ready to fold true?
            </h2>
            <p
              id="contact-cta-subtitle"
              className="mt-5 text-base leading-relaxed text-steel"
            >
              Send us your part drawing, a sample, or just a few questions
              about your application. An applications engineer will get back
              to you within one business day with a recommended machine and a
              firm quote.
            </p>

            <ul className="mt-10 space-y-5 text-sm">
              {[
                ['Application review', 'Within 1 business day'],
                ['Sample part folding', 'In our Stuttgart demo lab'],
                ['Firm quote', 'Within 5 business days'],
                ['Spare parts guarantee', '48 hours, anywhere'],
              ].map(([title, sub]) => (
                <li key={title} className="flex items-start gap-3">
                  <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-brass" />
                  <div>
                    <p className="font-medium text-white">{title}</p>
                    <p className="text-steel">{sub}</p>
                  </div>
                </li>
              ))}
            </ul>

            <div className="mt-12">
              <Link
                to="/contact"
                className="group inline-flex items-center gap-2 text-sm font-medium text-brass transition-colors hover:text-brass-2"
              >
                Or use the full contact page
                <ArrowUpRight
                  className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                  strokeWidth={1.75}
                />
              </Link>
            </div>
          </div>

          <div className="lg:col-span-7">
            <form
              onSubmit={onSubmit}
              className="rounded-2xl border border-line bg-ink-2 p-6 md:p-8"
              aria-busy={status === 'submitting'}
              noValidate
            >
              <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                <div>
                  <label htmlFor="cta-name" className="block text-xs font-medium uppercase tracking-eyebrow text-steel">
                    Full name *
                  </label>
                  <input
                    id="cta-name"
                    name="name"
                    type="text"
                    value={values.name}
                    onChange={onChange}
                    className="input-field-dark mt-2"
                    placeholder="Alex Morgan"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="cta-email" className="block text-xs font-medium uppercase tracking-eyebrow text-steel">
                    Business email *
                  </label>
                  <input
                    id="cta-email"
                    name="email"
                    type="email"
                    value={values.email}
                    onChange={onChange}
                    className="input-field-dark mt-2"
                    placeholder="alex@yourcompany.com"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="cta-company" className="block text-xs font-medium uppercase tracking-eyebrow text-steel">
                    Company
                  </label>
                  <input
                    id="cta-company"
                    name="company"
                    type="text"
                    value={values.company}
                    onChange={onChange}
                    className="input-field-dark mt-2"
                    placeholder="Your fabrication shop"
                  />
                </div>
                <div>
                  <label htmlFor="cta-phone" className="block text-xs font-medium uppercase tracking-eyebrow text-steel">
                    Phone
                  </label>
                  <input
                    id="cta-phone"
                    name="phone"
                    type="tel"
                    value={values.phone}
                    onChange={onChange}
                    className="input-field-dark mt-2"
                    placeholder="+1 555 123 4567"
                  />
                </div>
                <div>
                  <label htmlFor="cta-country" className="block text-xs font-medium uppercase tracking-eyebrow text-steel">
                    Country
                  </label>
                  <input
                    id="cta-country"
                    name="country"
                    type="text"
                    value={values.country}
                    onChange={onChange}
                    className="input-field-dark mt-2"
                    placeholder="United States"
                  />
                </div>
                <div>
                  <label htmlFor="cta-product" className="block text-xs font-medium uppercase tracking-eyebrow text-steel">
                    Product of interest
                  </label>
                  <select
                    id="cta-product"
                    name="productInterest"
                    value={values.productInterest}
                    onChange={onChange}
                    className="input-field-dark mt-2"
                  >
                    <option value="">Select a machine</option>
                    {products.map((p) => (
                      <option key={p.id} value={p.name}>
                        {p.name}
                      </option>
                    ))}
                  </select>
                </div>
                <div>
                  <label htmlFor="cta-thickness" className="block text-xs font-medium uppercase tracking-eyebrow text-steel">
                    Max thickness
                  </label>
                  <input
                    id="cta-thickness"
                    name="thickness"
                    type="text"
                    value={values.thickness}
                    onChange={onChange}
                    className="input-field-dark mt-2"
                    placeholder="2.0 mm"
                  />
                </div>
                <div>
                  <label htmlFor="cta-length" className="block text-xs font-medium uppercase tracking-eyebrow text-steel">
                    Max folding length
                  </label>
                  <input
                    id="cta-length"
                    name="length"
                    type="text"
                    value={values.length}
                    onChange={onChange}
                    className="input-field-dark mt-2"
                    placeholder="2500 mm"
                  />
                </div>
              </div>

              <div className="mt-4">
                <label htmlFor="cta-message" className="block text-xs font-medium uppercase tracking-eyebrow text-steel">
                  Tell us about your project *
                </label>
                <textarea
                  id="cta-message"
                  name="message"
                  rows={5}
                  value={values.message}
                  onChange={onChange}
                  className="input-field-dark mt-2 resize-y"
                  placeholder="Share a part drawing description, expected throughput, or your toughest fold."
                  required
                />
              </div>

              {error && (
                <div className="mt-5 flex items-start gap-2 rounded-lg border border-red-500/30 bg-red-500/10 px-4 py-3 text-sm text-red-200">
                  <AlertCircle className="mt-0.5 h-4 w-4 flex-shrink-0" strokeWidth={1.75} />
                  <span>{error}</span>
                </div>
              )}

              {status === 'success' && (
                <div className="mt-5 flex items-start gap-2 rounded-lg border border-emerald-500/30 bg-emerald-500/10 px-4 py-3 text-sm text-emerald-200">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 flex-shrink-0" strokeWidth={1.75} />
                  <span>
                    Thank you. An applications engineer will be in touch within
                    one business day.
                  </span>
                </div>
              )}

              <div className="mt-6 flex flex-col items-center justify-between gap-3 sm:flex-row">
                <p className="text-xs text-steel">
                  We respond within one business day. Your information is
                  never shared.
                </p>
                <button
                  type="submit"
                  disabled={status === 'submitting'}
                  className="btn-primary w-full justify-center sm:w-auto"
                >
                  {status === 'submitting' ? 'Sending…' : 'Send request'}
                  <Send className="h-4 w-4" strokeWidth={1.75} />
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
