import { useState } from 'react'
import { Mail, Phone, MapPin, Clock, Send, CheckCircle2 } from 'lucide-react'
import { DataClient } from '@strikingly/sdk'
import { STRK_PROJECT_URL, STRK_PROJECT_ANON_KEY } from '../config.jsx'

const client = new DataClient(STRK_PROJECT_URL, STRK_PROJECT_ANON_KEY)

const interestOptions = [
  'DF-2500 Double Folder',
  'DF-3200 Sheet Metal Folder',
  'DF-4000 Metal Folder Machine',
  'MF-1600 Metal Folder',
  'Custom configuration',
  'Service & support',
  'General inquiry',
]

const getErrorMessage = (response, error) => {
  if (Array.isArray(response?.errors) && response.errors.length > 0) {
    return response.errors.join(', ')
  }
  return error?.message || 'We could not send your message. Please try again.'
}

const initialValues = {
  name: '',
  company: '',
  email: '',
  phone: '',
  country: '',
  interest: 'General inquiry',
  sheet_thickness: '',
  working_length: '',
  message: '',
}

const Contact = () => {
  const [values, setValues] = useState(initialValues)
  const [status, setStatus] = useState('idle')
  const [error, setError] = useState(null)

  const onChange = (e) => {
    const { name, value } = e.target
    setValues((v) => ({ ...v, [name]: value }))
  }

  const onSubmit = async (e) => {
    e.preventDefault()
    setError(null)

    if (!values.name.trim() || !values.email.trim() || !values.message.trim()) {
      setError('Please fill in your name, email, and a short message.')
      return
    }
    if (!/^\S+@\S+\.\S+$/.test(values.email)) {
      setError('Please enter a valid email address.')
      return
    }

    setStatus('submitting')
    const { data: response, error: submitError } = await client
      .from('ContactInquiry')
      .insert({
        data: {
          ...values,
          created_at: new Date().toISOString(),
        },
      })
      .select()
      .single()

    if (submitError || response?.success === false) {
      setError(getErrorMessage(response, submitError))
      setStatus('error')
      return
    }

    setValues(initialValues)
    setStatus('success')
  }

  return (
    <div>
      {/* Header */}
      <section className="bg-paper py-20 md:py-28 border-b border-mist">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 grid gap-10 md:grid-cols-12 items-end">
          <div className="md:col-span-7">
            <div className="flex items-center gap-3 mb-5">
              <span className="h-px w-12 bg-accent" />
              <span className="text-xs uppercase tracking-[0.3em] text-accent">
                Begin a conversation
              </span>
            </div>
            <h1 className="font-serif font-light text-5xl md:text-7xl tracking-tight text-ink">
              Tell us about
              <br />
              <span className="italic text-accent">your part.</span>
            </h1>
          </div>
          <div className="md:col-span-5">
            <p className="text-graphite leading-relaxed">
              Send a few details about what you'd like to fold — sheet thickness, working
              length, and the kind of work you do. One of our engineers will reply within
              a single business day, with a configuration and an honest quote.
            </p>
          </div>
        </div>
      </section>

      {/* Form + Contact details */}
      <section className="bg-paper py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 grid gap-14 md:grid-cols-12">
          {/* Form */}
          <div className="md:col-span-7">
            <form onSubmit={onSubmit} className="bg-paper border border-mist p-8 md:p-10" noValidate>
              <h2 className="font-serif text-2xl md:text-3xl text-ink mb-2">
                Inquiry form
              </h2>
              <p className="text-sm text-graphite mb-8">
                All fields marked with <span className="text-accent">*</span> are required.
              </p>

              <div className="grid gap-6 md:grid-cols-2">
                <Field
                  label="Full name"
                  required
                  name="name"
                  value={values.name}
                  onChange={onChange}
                />
                <Field
                  label="Company"
                  name="company"
                  value={values.company}
                  onChange={onChange}
                />
                <Field
                  label="Email"
                  required
                  type="email"
                  name="email"
                  value={values.email}
                  onChange={onChange}
                />
                <Field
                  label="Phone"
                  name="phone"
                  value={values.phone}
                  onChange={onChange}
                />
                <Field
                  label="Country"
                  name="country"
                  value={values.country}
                  onChange={onChange}
                />

                <div>
                  <label className="block text-[10px] uppercase tracking-[0.25em] text-graphite mb-2">
                    Interested in
                  </label>
                  <select
                    name="interest"
                    value={values.interest}
                    onChange={onChange}
                    className="w-full bg-transparent border-0 border-b border-mist focus:border-ink focus:outline-none text-ink py-2 text-sm appearance-none"
                  >
                    {interestOptions.map((o) => (
                      <option key={o} value={o}>
                        {o}
                      </option>
                    ))}
                  </select>
                </div>

                <Field
                  label="Sheet thickness"
                  name="sheet_thickness"
                  placeholder="e.g. 1.5 mm mild steel"
                  value={values.sheet_thickness}
                  onChange={onChange}
                />
                <Field
                  label="Working length"
                  name="working_length"
                  placeholder="e.g. 3 200 mm"
                  value={values.working_length}
                  onChange={onChange}
                />
              </div>

              <div className="mt-6">
                <label className="block text-[10px] uppercase tracking-[0.25em] text-graphite mb-2">
                  Your message <span className="text-accent">*</span>
                </label>
                <textarea
                  name="message"
                  rows={6}
                  value={values.message}
                  onChange={onChange}
                  placeholder="Tell us a little about the part you'd like to fold, your shop, and any timing you have in mind."
                  className="w-full bg-transparent border-0 border-b border-mist focus:border-ink focus:outline-none text-ink py-2 text-sm placeholder:text-ash resize-none"
                />
              </div>

              {error && (
                <p role="alert" className="mt-6 text-sm text-red-700 bg-red-50 border border-red-200 px-4 py-3">
                  {error}
                </p>
              )}

              {status === 'success' && (
                <div role="status" className="mt-6 flex items-start gap-3 bg-fog border border-mist px-5 py-4">
                  <CheckCircle2 className="w-5 h-5 text-accent mt-0.5 shrink-0" />
                  <div>
                    <p className="text-sm font-medium text-ink">Thank you — your message is on its way.</p>
                    <p className="text-sm text-graphite mt-1">
                      One of our engineers will be in touch within one business day.
                    </p>
                  </div>
                </div>
              )}

              <button
                type="submit"
                disabled={status === 'submitting'}
                className="mt-8 inline-flex items-center gap-3 bg-ink text-paper px-7 py-4 text-xs uppercase tracking-[0.25em] hover:bg-steel transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
              >
                {status === 'submitting' ? 'Sending…' : 'Send inquiry'}
                <Send className="w-4 h-4" />
              </button>
            </form>
          </div>

          {/* Sidebar info */}
          <aside className="md:col-span-5 md:pl-6 space-y-10">
            <div>
              <p className="text-[10px] uppercase tracking-[0.3em] text-accent mb-3">
                Reach us directly
              </p>
              <h3 className="font-serif text-2xl text-ink mb-6">We answer the phone.</h3>
              <ul className="space-y-5 text-sm text-graphite">
                <li className="flex items-start gap-4">
                  <Mail className="w-5 h-5 text-accent mt-0.5 shrink-0" />
                  <div>
                    <p className="text-[10px] uppercase tracking-[0.2em] text-ash">Email</p>
                    <p className="text-ink">sales@artitect-machinery.com</p>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <Phone className="w-5 h-5 text-accent mt-0.5 shrink-0" />
                  <div>
                    <p className="text-[10px] uppercase tracking-[0.2em] text-ash">Phone</p>
                    <p className="text-ink">+86 22 5800 1188</p>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <MapPin className="w-5 h-5 text-accent mt-0.5 shrink-0" />
                  <div>
                    <p className="text-[10px] uppercase tracking-[0.2em] text-ash">Workshop</p>
                    <p className="text-ink leading-relaxed">
                      Building 7, Hangu Industrial District
                      <br />
                      Tianjin 300480, China
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <Clock className="w-5 h-5 text-accent mt-0.5 shrink-0" />
                  <div>
                    <p className="text-[10px] uppercase tracking-[0.2em] text-ash">Hours</p>
                    <p className="text-ink">Mon – Fri · 08:30 – 17:30 (CST)</p>
                  </div>
                </li>
              </ul>
            </div>

            <div className="border-t border-mist pt-8">
              <p className="text-[10px] uppercase tracking-[0.3em] text-accent mb-3">
                What happens next
              </p>
              <ol className="space-y-4 text-sm text-graphite">
                <Step n="01" t="We read your message." />
                <Step n="02" t="An engineer drafts a recommendation and quote." />
                <Step n="03" t="We reply within one business day." />
              </ol>
            </div>
          </aside>
        </div>
      </section>
    </div>
  )
}

const Field = ({ label, required, name, type = 'text', value, onChange, placeholder }) => (
  <div>
    <label className="block text-[10px] uppercase tracking-[0.25em] text-graphite mb-2">
      {label} {required && <span className="text-accent">*</span>}
    </label>
    <input
      type={type}
      name={name}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      className="w-full bg-transparent border-0 border-b border-mist focus:border-ink focus:outline-none text-ink py-2 text-sm placeholder:text-ash"
    />
  </div>
)

const Step = ({ n, t }) => (
  <li className="flex items-start gap-4">
    <span className="font-mono text-xs text-accent tracking-[0.18em] pt-0.5">{n}</span>
    <span className="text-ink">{t}</span>
  </li>
)

export default Contact
