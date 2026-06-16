import { useEffect, useRef, useState } from 'react'
import { ImageHelper } from '@strikingly/sdk'
import {
  Mail,
  Phone,
  MapPin,
  Send,
  CheckCircle2,
  AlertCircle,
  Clock,
  Globe2,
} from 'lucide-react'
import strkImgConfig from '@/strk-img-config.json'
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

export default function Contact() {
  const containerRef = useRef(null)
  const [values, setValues] = useState(initialValues)
  const [status, setStatus] = useState('idle')
  const [error, setError] = useState(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

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
          source: 'contact',
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
    <div ref={containerRef}>
      {/* Hero */}
      <section className="relative isolate overflow-hidden bg-ink pb-16 pt-36 text-white md:pb-20 md:pt-44">
        <div
          className="pointer-events-none absolute inset-0 -z-10"
          data-strk-bg-id="contact-hero-bg-9c7d3e"
          data-strk-bg="[contact-eyebrow] [contact-subtitle] [contact-title]"
          data-strk-bg-ratio="16x9"
          data-strk-bg-width="1800"
        />
        <div className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-b from-ink/80 via-ink/70 to-ink" />
        <div className="pointer-events-none absolute inset-0 -z-10 bg-grid opacity-15" />

        <div className="container-page">
          <p
            id="contact-eyebrow"
            className="eyebrow eyebrow-line text-brass"
          >
            <span>Get in touch</span>
          </p>
          <h1
            id="contact-title"
            className="mt-6 max-w-3xl text-balance text-5xl font-semibold leading-[1.05] tracking-tight md:text-6xl"
          >
            Let&rsquo;s fold your next part.
          </h1>
          <p
            id="contact-subtitle"
            className="mt-6 max-w-2xl text-lg leading-relaxed text-steel"
          >
            Tell us about your application and we will respond within one
            business day with a recommended machine, a sample-folding plan,
            and a firm quote.
          </p>
        </div>
      </section>

      {/* Form + contact info */}
      <section className="bg-paper py-20 text-ink md:py-24">
        <div className="container-page">
          <div className="grid items-start gap-10 lg:grid-cols-12 lg:gap-14">
            <div className="lg:col-span-7">
              <form
                onSubmit={onSubmit}
                className="rounded-2xl border border-line-2 bg-bone p-6 md:p-10"
                aria-busy={status === 'submitting'}
                noValidate
              >
                <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
                  <div>
                    <label htmlFor="contact-name" className="block text-xs font-medium uppercase tracking-eyebrow text-ash">
                      Full name *
                    </label>
                    <input
                      id="contact-name"
                      name="name"
                      type="text"
                      value={values.name}
                      onChange={onChange}
                      className="input-field mt-2"
                      placeholder="Alex Morgan"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="contact-email" className="block text-xs font-medium uppercase tracking-eyebrow text-ash">
                      Business email *
                    </label>
                    <input
                      id="contact-email"
                      name="email"
                      type="email"
                      value={values.email}
                      onChange={onChange}
                      className="input-field mt-2"
                      placeholder="alex@yourcompany.com"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="contact-company" className="block text-xs font-medium uppercase tracking-eyebrow text-ash">
                      Company
                    </label>
                    <input
                      id="contact-company"
                      name="company"
                      type="text"
                      value={values.company}
                      onChange={onChange}
                      className="input-field mt-2"
                      placeholder="Your fabrication shop"
                    />
                  </div>
                  <div>
                    <label htmlFor="contact-phone" className="block text-xs font-medium uppercase tracking-eyebrow text-ash">
                      Phone
                    </label>
                    <input
                      id="contact-phone"
                      name="phone"
                      type="tel"
                      value={values.phone}
                      onChange={onChange}
                      className="input-field mt-2"
                      placeholder="+1 555 123 4567"
                    />
                  </div>
                  <div>
                    <label htmlFor="contact-country" className="block text-xs font-medium uppercase tracking-eyebrow text-ash">
                      Country
                    </label>
                    <input
                      id="contact-country"
                      name="country"
                      type="text"
                      value={values.country}
                      onChange={onChange}
                      className="input-field mt-2"
                      placeholder="United States"
                    />
                  </div>
                  <div>
                    <label htmlFor="contact-product" className="block text-xs font-medium uppercase tracking-eyebrow text-ash">
                      Product of interest
                    </label>
                    <select
                      id="contact-product"
                      name="productInterest"
                      value={values.productInterest}
                      onChange={onChange}
                      className="input-field mt-2"
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
                    <label htmlFor="contact-material" className="block text-xs font-medium uppercase tracking-eyebrow text-ash">
                      Material
                    </label>
                    <input
                      id="contact-material"
                      name="material"
                      type="text"
                      value={values.material}
                      onChange={onChange}
                      className="input-field mt-2"
                      placeholder="Mild steel, stainless, aluminum…"
                    />
                  </div>
                  <div>
                    <label htmlFor="contact-thickness" className="block text-xs font-medium uppercase tracking-eyebrow text-ash">
                      Max thickness
                    </label>
                    <input
                      id="contact-thickness"
                      name="thickness"
                      type="text"
                      value={values.thickness}
                      onChange={onChange}
                      className="input-field mt-2"
                      placeholder="2.0 mm"
                    />
                  </div>
                </div>

                <div className="mt-5">
                  <label htmlFor="contact-length" className="block text-xs font-medium uppercase tracking-eyebrow text-ash">
                    Max folding length
                  </label>
                  <input
                    id="contact-length"
                    name="length"
                    type="text"
                    value={values.length}
                    onChange={onChange}
                    className="input-field mt-2"
                    placeholder="2500 mm"
                  />
                </div>

                <div className="mt-5">
                  <label htmlFor="contact-message" className="block text-xs font-medium uppercase tracking-eyebrow text-ash">
                    Tell us about your project *
                  </label>
                  <textarea
                    id="contact-message"
                    name="message"
                    rows={6}
                    value={values.message}
                    onChange={onChange}
                    className="input-field mt-2 resize-y"
                    placeholder="Share a part drawing description, expected throughput, or your toughest fold."
                    required
                  />
                </div>

                {error && (
                  <div className="mt-5 flex items-start gap-2 rounded-lg border border-red-500/30 bg-red-500/10 px-4 py-3 text-sm text-red-700">
                    <AlertCircle className="mt-0.5 h-4 w-4 flex-shrink-0" strokeWidth={1.75} />
                    <span>{error}</span>
                  </div>
                )}

                {status === 'success' && (
                  <div className="mt-5 flex items-start gap-2 rounded-lg border border-emerald-500/30 bg-emerald-500/10 px-4 py-3 text-sm text-emerald-700">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 flex-shrink-0" strokeWidth={1.75} />
                    <span>
                      Thank you. An applications engineer will be in touch within
                      one business day.
                    </span>
                  </div>
                )}

                <div className="mt-8 flex flex-col items-center justify-between gap-3 sm:flex-row">
                  <p className="text-xs text-ash">
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

            <aside className="lg:col-span-5">
              <div className="rounded-2xl border border-line-2 bg-bone p-6 md:p-8">
                <p className="eyebrow eyebrow-line text-brass-2">Other ways to reach us</p>
                <h2 className="mt-3 text-2xl font-semibold tracking-tight text-ink">
                  We answer the phone.
                </h2>
                <p className="mt-3 text-sm text-ash">
                  Prefer to talk it through? Our applications engineering team
                  is on the line Monday through Friday, 7:00 to 18:00 CET.
                </p>

                <ul className="mt-8 space-y-5 text-sm">
                  <li className="flex items-start gap-3">
                    <span className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-full border border-brass/30 bg-paper text-brass-2">
                      <Mail className="h-4 w-4" strokeWidth={1.5} />
                    </span>
                    <div>
                      <p className="font-medium text-ink">Email</p>
                      <a href="mailto:sales@artitect-machinery.com" className="text-ash hover:text-ink">
                        sales@artitect-machinery.com
                      </a>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-full border border-brass/30 bg-paper text-brass-2">
                      <Phone className="h-4 w-4" strokeWidth={1.5} />
                    </span>
                    <div>
                      <p className="font-medium text-ink">Phone</p>
                      <a href="tel:+15551234567" className="text-ash hover:text-ink">
                        +1 (555) 123-4567
                      </a>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-full border border-brass/30 bg-paper text-brass-2">
                      <MapPin className="h-4 w-4" strokeWidth={1.5} />
                    </span>
                    <div>
                      <p className="font-medium text-ink">Headquarters</p>
                      <p className="text-ash">
                        124 Foundry Lane, Bay 7<br />
                        Industrial Park, Stuttgart, Germany
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-full border border-brass/30 bg-paper text-brass-2">
                      <Clock className="h-4 w-4" strokeWidth={1.5} />
                    </span>
                    <div>
                      <p className="font-medium text-ink">Hours</p>
                      <p className="text-ash">Mon – Fri · 07:00 – 18:00 CET</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-full border border-brass/30 bg-paper text-brass-2">
                      <Globe2 className="h-4 w-4" strokeWidth={1.5} />
                    </span>
                    <div>
                      <p className="font-medium text-ink">Field service</p>
                      <p className="text-ash">Engineers in 52 countries</p>
                    </div>
                  </li>
                </ul>
              </div>

              <div className="mt-6 rounded-2xl border border-brass/30 bg-bone p-6">
                <p className="eyebrow eyebrow-line text-brass-2">Response times</p>
                <ul className="mt-4 space-y-3 text-sm">
                  {[
                    ['Email inquiries', '1 business day'],
                    ['Quote requests with drawings', '5 business days'],
                    ['Spare-parts orders', '48 hours, worldwide'],
                    ['Emergency service', 'Same day'],
                  ].map(([label, value]) => (
                    <li
                      key={label}
                      className="flex items-center justify-between border-b border-line-2 pb-2 last:border-0 last:pb-0"
                    >
                      <span className="text-ash">{label}</span>
                      <span className="font-medium text-ink">{value}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </aside>
          </div>
        </div>
      </section>
    </div>
  )
}
