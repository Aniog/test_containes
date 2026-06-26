import React from 'react'
import { Mail, MapPin, Phone, Send, CheckCircle2, AlertCircle } from 'lucide-react'

const interestOptions = [
  'AF-3200 Double Folder',
  'MF-2500 Sheet Metal Folder',
  'TF-4000 Long-Bed Folder',
  'CF-1600 Compact Metal Folder',
  'Not sure yet',
]

const initialValues = {
  name: '',
  company: '',
  email: '',
  phone: '',
  country: '',
  interest: 'AF-3200 Double Folder',
  message: '',
}

const getErrorMessage = (response, error) => {
  if (Array.isArray(response?.errors) && response.errors.length > 0) {
    return response.errors.join(', ')
  }
  return error?.message || 'Submission failed. Please try again.'
}

export default function Contact() {
  const [values, setValues] = React.useState(initialValues)
  const [status, setStatus] = React.useState('idle') // idle | submitting | success | error
  const [errorMsg, setErrorMsg] = React.useState(null)

  const onChange = (e) => {
    const { name, value } = e.target
    setValues((v) => ({ ...v, [name]: value }))
  }

  const validate = (v) => {
    if (!v.name.trim()) return 'Please enter your name.'
    if (!v.email.trim() || !/^\S+@\S+\.\S+$/.test(v.email)) {
      return 'Please enter a valid email address.'
    }
    if (!v.message.trim()) return 'Please tell us about your project.'
    return null
  }

  const onSubmit = async (e) => {
    e.preventDefault()
    setErrorMsg(null)

    const validation = validate(values)
    if (validation) {
      setErrorMsg(validation)
      setStatus('error')
      return
    }

    setStatus('submitting')

    try {
      // Lazy-load the SDK so module init issues never block page render
      const [{ DataClient, User }, config] = await Promise.all([
        import('@strikingly/sdk'),
        import('../config.jsx'),
      ])
      const client = new DataClient(config.STRK_PROJECT_URL, config.STRK_PROJECT_ANON_KEY)

      // Upsert lead into Users (CRM)
      let userId = null
      try {
        const userRecord = await User.upsert({
          email: values.email,
          name: values.name,
          role: 'guest',
        })
        userId = userRecord?.id ?? null
      } catch (_) {
        // Non-blocking: continue saving the inquiry even if CRM upsert fails
      }

      const { data: response, error } = await client
        .from('MachineryInquiry')
        .insert({
          data: {
            name: values.name,
            company: values.company,
            email: values.email,
            phone: values.phone,
            country: values.country,
            interest: values.interest,
            message: values.message,
            ...(userId ? { user_id: userId } : {}),
          },
        })
        .select()
        .single()

      if (error || response?.success === false) {
        setErrorMsg(getErrorMessage(response, error))
        setStatus('error')
        return
      }

      setStatus('success')
      setValues(initialValues)
    } catch (err) {
      setErrorMsg(err?.message || 'Submission failed. Please try again.')
      setStatus('error')
    }
  }

  const submitting = status === 'submitting'

  return (
    <section id="contact" className="bg-neutral-900 text-stone-50 py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-6 md:px-10 grid lg:grid-cols-12 gap-12 lg:gap-16">
        <div className="lg:col-span-5">
          <p
            id="contact-eyebrow"
            className="text-xs uppercase tracking-[0.25em] font-medium text-amber-500 mb-4"
          >
            Get in touch
          </p>
          <h2
            id="contact-title"
            className="font-serif text-3xl md:text-5xl font-medium tracking-tight leading-[1.05]"
          >
            Tell us about your folds.
          </h2>
          <p className="mt-5 text-lg text-neutral-300 leading-relaxed">
            Share the sheet sizes, materials and volumes you work with. We'll
            come back within one working day with a recommended machine and
            indicative pricing.
          </p>

          <ul className="mt-10 space-y-5 text-neutral-300">
            <li className="flex items-start gap-4">
              <Mail className="w-5 h-5 text-amber-500 mt-0.5 shrink-0" />
              <div>
                <p className="text-xs uppercase tracking-wider text-neutral-500">Email</p>
                <a
                  href="mailto:sales@artitect-machinery.com"
                  className="text-base text-stone-50 hover:text-amber-500 transition-colors"
                >
                  sales@artitect-machinery.com
                </a>
              </div>
            </li>
            <li className="flex items-start gap-4">
              <Phone className="w-5 h-5 text-amber-500 mt-0.5 shrink-0" />
              <div>
                <p className="text-xs uppercase tracking-wider text-neutral-500">Phone</p>
                <p className="text-base text-stone-50">+1 (415) 555 — 0148</p>
              </div>
            </li>
            <li className="flex items-start gap-4">
              <MapPin className="w-5 h-5 text-amber-500 mt-0.5 shrink-0" />
              <div>
                <p className="text-xs uppercase tracking-wider text-neutral-500">Workshop</p>
                <p className="text-base text-stone-50">
                  Bay 14, Industrial District,<br />Forge Road · Open Mon–Fri 08:00–17:00
                </p>
              </div>
            </li>
          </ul>
        </div>

        <div className="lg:col-span-7">
          <form
            onSubmit={onSubmit}
            className="rounded-2xl bg-stone-50 text-neutral-900 p-7 md:p-10 border border-neutral-800"
            aria-busy={submitting}
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <Field label="Full name *" name="name" value={values.name} onChange={onChange} required disabled={submitting} />
              <Field label="Company" name="company" value={values.company} onChange={onChange} disabled={submitting} />
              <Field label="Email *" type="email" name="email" value={values.email} onChange={onChange} required disabled={submitting} />
              <Field label="Phone" name="phone" value={values.phone} onChange={onChange} disabled={submitting} />
              <Field label="Country" name="country" value={values.country} onChange={onChange} disabled={submitting} />

              <div className="flex flex-col">
                <label htmlFor="interest" className="text-xs uppercase tracking-wider font-medium text-neutral-600 mb-2">
                  Machine of interest
                </label>
                <select
                  id="interest"
                  name="interest"
                  value={values.interest}
                  onChange={onChange}
                  disabled={submitting}
                  className="bg-white border border-neutral-300 rounded-lg px-4 py-3 text-base text-neutral-900 focus:outline-none focus:border-neutral-900 transition-colors"
                >
                  {interestOptions.map((opt) => (
                    <option key={opt} value={opt}>{opt}</option>
                  ))}
                </select>
              </div>
            </div>

            <div className="mt-5">
              <label htmlFor="message" className="text-xs uppercase tracking-wider font-medium text-neutral-600 mb-2 block">
                Your project *
              </label>
              <textarea
                id="message"
                name="message"
                rows={5}
                value={values.message}
                onChange={onChange}
                required
                disabled={submitting}
                placeholder="Sheet sizes, materials, expected volume, timeline…"
                className="w-full bg-white border border-neutral-300 rounded-lg px-4 py-3 text-base text-neutral-900 focus:outline-none focus:border-neutral-900 transition-colors resize-none"
              />
            </div>

            <div className="mt-6 flex flex-wrap items-center justify-between gap-4">
              <p className="text-sm text-neutral-500">
                We typically reply within one working day.
              </p>
              <button
                type="submit"
                disabled={submitting}
                className="inline-flex items-center gap-2 bg-neutral-900 text-white px-7 py-3.5 rounded-full font-medium hover:bg-amber-500 hover:text-neutral-900 transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
              >
                {submitting ? 'Sending…' : 'Send inquiry'}
                <Send className="w-4 h-4" />
              </button>
            </div>

            {status === 'success' && (
              <div className="mt-6 flex items-start gap-3 p-4 rounded-lg bg-emerald-50 border border-emerald-200 text-emerald-900" role="status">
                <CheckCircle2 className="w-5 h-5 mt-0.5 shrink-0" />
                <p className="text-sm">
                  Thank you. Your inquiry is with our team — we'll be in touch shortly.
                </p>
              </div>
            )}

            {status === 'error' && errorMsg && (
              <div className="mt-6 flex items-start gap-3 p-4 rounded-lg bg-red-50 border border-red-200 text-red-900" role="alert">
                <AlertCircle className="w-5 h-5 mt-0.5 shrink-0" />
                <p className="text-sm">{errorMsg}</p>
              </div>
            )}
          </form>
        </div>
      </div>
    </section>
  )
}

function Field({ label, name, type = 'text', value, onChange, required, disabled }) {
  return (
    <div className="flex flex-col">
      <label htmlFor={name} className="text-xs uppercase tracking-wider font-medium text-neutral-600 mb-2">
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        value={value}
        onChange={onChange}
        required={required}
        disabled={disabled}
        className="bg-white border border-neutral-300 rounded-lg px-4 py-3 text-base text-neutral-900 focus:outline-none focus:border-neutral-900 transition-colors"
      />
    </div>
  )
}
