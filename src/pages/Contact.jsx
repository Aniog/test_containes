import { useEffect, useRef, useState } from 'react'
import { DataClient } from '@strikingly/sdk'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import { STRK_PROJECT_URL, STRK_PROJECT_ANON_KEY } from '../config.jsx'
import { Mail, Phone, MapPin, Send, CheckCircle2, AlertCircle } from 'lucide-react'

const client = new DataClient(STRK_PROJECT_URL, STRK_PROJECT_ANON_KEY)

const INTERESTS = [
  { value: 'general', label: 'General enquiry' },
  { value: 'atelier-d2', label: 'Atelier D2 — Double Folding Machine' },
  { value: 'studio-s1', label: 'Studio S1 — Sheet Metal Folder' },
  { value: 'forge-f3', label: 'Forge F3 — Heavy-Duty Folding Machine' },
]

const initialValues = {
  name: '',
  email: '',
  phone: '',
  company: '',
  interest: 'general',
  message: '',
}

const getErrorMessage = (response, error) => {
  if (Array.isArray(response?.errors) && response.errors.length > 0) {
    return response.errors.join(', ')
  }
  return error?.message || 'Submission failed. Please try again.'
}

export default function Contact() {
  const containerRef = useRef(null)
  const [values, setValues] = useState(initialValues)
  const [status, setStatus] = useState('idle') // idle | submitting | success | error
  const [error, setError] = useState(null)

  useEffect(() => ImageHelper.loadImages(strkImgConfig, containerRef.current), [])

  const onChange = (e) => {
    const { name, value } = e.target
    setValues((v) => ({ ...v, [name]: value }))
  }

  const validate = () => {
    if (!values.name.trim()) return 'Please share your name.'
    if (!values.email.trim()) return 'Please share an email address.'
    if (!/^\S+@\S+\.\S+$/.test(values.email)) return 'Please enter a valid email address.'
    if (!values.message.trim()) return 'A short message helps us prepare your quote.'
    return null
  }

  const onSubmit = async (e) => {
    e.preventDefault()
    setError(null)
    const v = validate()
    if (v) { setError(v); setStatus('error'); return }

    setStatus('submitting')

    const payload = {
      name: values.name.trim(),
      email: values.email.trim(),
      phone: values.phone.trim(),
      company: values.company.trim(),
      interest: values.interest,
      message: values.message.trim(),
    }

    const { data: response, error: insertError } = await client
      .from('ContactInquiry')
      .insert({ data: payload })
      .select()
      .single()

    if (insertError || response?.success === false) {
      setError(getErrorMessage(response, insertError))
      setStatus('error')
      return
    }

    setValues(initialValues)
    setStatus('success')
  }

  return (
    <div ref={containerRef}>
      {/* Hero */}
      <section className="relative pt-40 pb-20 bg-graphite text-paper overflow-hidden">
        <div
          className="absolute inset-0 opacity-25"
          data-strk-bg-id="contact-hero-bg-7d4f2b"
          data-strk-bg="[contact-hero-title] [contact-hero-desc]"
          data-strk-bg-ratio="16x9"
          data-strk-bg-width="1920"
          style={{ backgroundSize: 'cover', backgroundPosition: 'center' }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-graphite/60 to-graphite" />
        <div className="relative max-w-7xl mx-auto px-6 md:px-10">
          <p className="text-xs tracking-[0.35em] uppercase text-ember-soft mb-5">
            Begin a Conversation
          </p>
          <h1 id="contact-hero-title" className="font-display font-light text-paper text-5xl md:text-6xl leading-[1.05] mb-6 max-w-3xl">
            Tell us about your <span className="italic text-ember-soft">workshop.</span>
          </h1>
          <p id="contact-hero-desc" className="text-paper/75 text-lg max-w-2xl leading-relaxed">
            Share a few details and one of our engineers will reply within two
            working days with a quote, lead time, and any questions about how
            you intend to use the machine.
          </p>
        </div>
      </section>

      {/* Form + info */}
      <section className="bg-paper py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-6 md:px-10 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          {/* Info */}
          <aside className="lg:col-span-4 order-2 lg:order-1">
            <p className="text-xs tracking-[0.35em] uppercase text-ember mb-5">Reach us</p>
            <h2 className="font-display font-light text-ink text-3xl md:text-4xl leading-tight mb-8">
              The workshop is <span className="italic text-ember">always open.</span>
            </h2>
            <div className="space-y-6 mb-10">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 border border-ink/20 flex items-center justify-center flex-shrink-0">
                  <MapPin size={16} className="text-ember" />
                </div>
                <div>
                  <div className="text-[10px] tracking-[0.3em] uppercase text-steel mb-1">Workshop</div>
                  <div className="text-ink">14 Foundry Lane<br />Industrial Quarter<br />Manchester, M11 3FD</div>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 border border-ink/20 flex items-center justify-center flex-shrink-0">
                  <Phone size={16} className="text-ember" />
                </div>
                <div>
                  <div className="text-[10px] tracking-[0.3em] uppercase text-steel mb-1">Telephone</div>
                  <div className="text-ink">+44 (0) 161 555 0118</div>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 border border-ink/20 flex items-center justify-center flex-shrink-0">
                  <Mail size={16} className="text-ember" />
                </div>
                <div>
                  <div className="text-[10px] tracking-[0.3em] uppercase text-steel mb-1">Email</div>
                  <div className="text-ink">hello@artitect-machinery.com</div>
                </div>
              </div>
            </div>
            <div className="border-t border-ink/10 pt-6">
              <div className="text-[10px] tracking-[0.3em] uppercase text-steel mb-2">Workshop hours</div>
              <div className="text-ink/85">Monday – Friday · 08:00 – 17:30 GMT</div>
              <div className="text-steel text-sm mt-1">Visits by appointment</div>
            </div>
          </aside>

          {/* Form */}
          <div className="lg:col-span-8 order-1 lg:order-2">
            <form
              onSubmit={onSubmit}
              className="bg-bone border border-ink/10 p-8 md:p-12"
              aria-busy={status === 'submitting'}
              noValidate
            >
              <h3 className="font-display text-2xl md:text-3xl text-ink mb-2">
                Request a quote
              </h3>
              <p className="text-steel mb-8">
                Fields marked with <span className="text-ember">*</span> are required.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-5">
                <Field label="Your name" required>
                  <input
                    type="text"
                    name="name"
                    value={values.name}
                    onChange={onChange}
                    required
                    placeholder="Jane Doe"
                    className={inputCls}
                  />
                </Field>
                <Field label="Email" required>
                  <input
                    type="email"
                    name="email"
                    value={values.email}
                    onChange={onChange}
                    required
                    placeholder="jane@workshop.com"
                    className={inputCls}
                  />
                </Field>
                <Field label="Phone">
                  <input
                    type="tel"
                    name="phone"
                    value={values.phone}
                    onChange={onChange}
                    placeholder="+44 …"
                    className={inputCls}
                  />
                </Field>
                <Field label="Company / workshop">
                  <input
                    type="text"
                    name="company"
                    value={values.company}
                    onChange={onChange}
                    placeholder="Acme Fabrication"
                    className={inputCls}
                  />
                </Field>
              </div>

              <Field label="Interested in">
                <select
                  name="interest"
                  value={values.interest}
                  onChange={onChange}
                  className={inputCls}
                >
                  {INTERESTS.map((o) => (
                    <option key={o.value} value={o.value}>{o.label}</option>
                  ))}
                </select>
              </Field>

              <div className="mt-5">
                <Field label="Tell us about the work" required>
                  <textarea
                    name="message"
                    rows={6}
                    value={values.message}
                    onChange={onChange}
                    required
                    placeholder="Panel sizes, materials, weekly volumes, anything else worth knowing…"
                    className={inputCls + ' resize-none'}
                  />
                </Field>
              </div>

              {status === 'error' && error && (
                <div className="mt-6 flex items-start gap-3 border border-ember/40 bg-ember/5 text-ink p-4">
                  <AlertCircle size={18} className="text-ember mt-0.5 flex-shrink-0" />
                  <p className="text-sm">{error}</p>
                </div>
              )}
              {status === 'success' && (
                <div className="mt-6 flex items-start gap-3 border border-ink/15 bg-mist text-ink p-4">
                  <CheckCircle2 size={18} className="text-ember mt-0.5 flex-shrink-0" />
                  <p className="text-sm">
                    Thank you — your enquiry has been received. An engineer will
                    be in touch within two working days.
                  </p>
                </div>
              )}

              <div className="mt-8 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                <p className="text-xs text-steel max-w-md">
                  By submitting this form you consent to Artitect contacting you
                  about your enquiry. We never share your details.
                </p>
                <button
                  type="submit"
                  disabled={status === 'submitting'}
                  className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-ink text-paper text-xs tracking-widest uppercase hover:bg-ember transition-colors duration-300 disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  {status === 'submitting' ? 'Sending…' : 'Send enquiry'}
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

const inputCls =
  'w-full bg-paper border border-ink/15 text-ink placeholder:text-steel/60 px-4 py-3 outline-none focus:border-ember focus:ring-1 focus:ring-ember/30 transition-colors'

function Field({ label, required, children }) {
  return (
    <label className="block">
      <span className="block text-[10px] tracking-[0.3em] uppercase text-steel mb-2">
        {label}
        {required && <span className="text-ember"> *</span>}
      </span>
      {children}
    </label>
  )
}
