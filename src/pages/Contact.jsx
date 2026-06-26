import { useState } from 'react'
import { DataClient } from '@strikingly/sdk'
import { STRK_PROJECT_URL, STRK_PROJECT_ANON_KEY } from '../config.jsx'
import { Mail, Phone, MapPin, Send, Check, AlertCircle } from 'lucide-react'

const client = new DataClient(STRK_PROJECT_URL, STRK_PROJECT_ANON_KEY)

const interestOptions = [
  { value: '', label: 'Select a topic' },
  { value: 'double-folding-machine', label: 'Double folding machine' },
  { value: 'sheet-metal-folder', label: 'Sheet metal folder' },
  { value: 'metal-folding-machine', label: 'Metal folding machine' },
  { value: 'service-and-parts', label: 'Service & parts' },
  { value: 'other', label: 'Other' },
]

const initialValues = {
  name: '',
  company: '',
  email: '',
  phone: '',
  country: '',
  interest: '',
  message: '',
}

const getErrorMessage = (response, error) => {
  if (Array.isArray(response?.errors) && response.errors.length > 0) {
    return response.errors.join(', ')
  }
  return error?.message || 'Submission failed. Please try again.'
}

export default function Contact() {
  const [values, setValues] = useState(initialValues)
  const [status, setStatus] = useState('idle')
  const [error, setError] = useState(null)

  const onChange = (e) => {
    const { name, value } = e.target
    setValues((v) => ({ ...v, [name]: value }))
  }

  const validate = () => {
    if (!values.name.trim()) return 'Please enter your name.'
    if (!values.email.trim()) return 'Please enter your email.'
    if (!/^\S+@\S+\.\S+$/.test(values.email)) return 'Please enter a valid email address.'
    if (!values.message.trim()) return 'Please include a short message.'
    return null
  }

  const onSubmit = async (e) => {
    e.preventDefault()
    setError(null)

    const validationError = validate()
    if (validationError) {
      setError(validationError)
      setStatus('error')
      return
    }

    setStatus('submitting')

    const payload = {
      data: {
        name: values.name.trim(),
        company: values.company.trim(),
        email: values.email.trim(),
        phone: values.phone.trim(),
        country: values.country.trim(),
        interest: values.interest || 'other',
        message: values.message.trim(),
        created_at: new Date().toISOString(),
      },
    }

    const { data: response, error: createError } = await client
      .from('ContactInquiry')
      .insert(payload)
      .select()
      .single()

    if (createError || response?.success === false) {
      setError(getErrorMessage(response, createError))
      setStatus('error')
      return
    }

    setStatus('success')
    setValues(initialValues)
  }

  return (
    <div>
      <section className="bg-stone-50 border-b border-stone-200">
        <div className="max-w-7xl mx-auto px-6 md:px-10 py-20 md:py-28">
          <span className="text-xs uppercase tracking-[0.28em] text-amber-700 font-medium">
            Get in touch
          </span>
          <h1 className="mt-5 font-serif text-4xl md:text-6xl text-stone-900 leading-[1.05] tracking-tight max-w-3xl">
            Tell us about your folding work.
          </h1>
          <p className="mt-6 text-base md:text-lg text-stone-600 leading-relaxed max-w-2xl">
            Whether you are specifying a new folder, sourcing spare parts, or
            arranging service, our engineers respond personally within two
            working days.
          </p>
        </div>
      </section>

      <section className="bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-10 py-20 md:py-28 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          <aside className="lg:col-span-4">
            <h2 className="font-serif text-2xl text-stone-900 tracking-tight">
              Reach the team directly
            </h2>
            <p className="mt-4 text-sm text-stone-600 leading-relaxed">
              Prefer to start a conversation by phone or email? Our sales and
              service desks are staffed Monday to Friday.
            </p>

            <ul className="mt-10 space-y-6">
              <li className="flex items-start gap-4">
                <div className="w-10 h-10 border border-stone-900 flex items-center justify-center text-stone-900 flex-shrink-0">
                  <Mail className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-[11px] uppercase tracking-[0.22em] text-stone-500">
                    Sales
                  </div>
                  <a
                    href="mailto:sales@artitect.co"
                    className="mt-1 block text-sm text-stone-900 hover:text-amber-800 transition-colors"
                  >
                    sales@artitect.co
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <div className="w-10 h-10 border border-stone-900 flex items-center justify-center text-stone-900 flex-shrink-0">
                  <Phone className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-[11px] uppercase tracking-[0.22em] text-stone-500">
                    Phone
                  </div>
                  <a
                    href="tel:+18005550140"
                    className="mt-1 block text-sm text-stone-900 hover:text-amber-800 transition-colors"
                  >
                    +1 (800) 555-0140
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <div className="w-10 h-10 border border-stone-900 flex items-center justify-center text-stone-900 flex-shrink-0">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-[11px] uppercase tracking-[0.22em] text-stone-500">
                    Workshop
                  </div>
                  <p className="mt-1 text-sm text-stone-900 leading-relaxed">
                    Industrial Park 14, Block C<br />
                    Fabrication District, 38100
                  </p>
                </div>
              </li>
            </ul>

            <div className="mt-12 p-6 bg-stone-50 border border-stone-200">
              <div className="text-[11px] uppercase tracking-[0.22em] text-amber-700 font-medium">
                Hours
              </div>
              <p className="mt-3 text-sm text-stone-700 leading-relaxed">
                Mon – Fri · 08:00 to 17:30<br />
                Workshop visits by appointment
              </p>
            </div>
          </aside>

          <div className="lg:col-span-8">
            <form
              onSubmit={onSubmit}
              className="bg-stone-50 border border-stone-200 p-8 md:p-10"
              aria-busy={status === 'submitting'}
              noValidate
            >
              <h2 className="font-serif text-2xl md:text-3xl text-stone-900 tracking-tight">
                Send an inquiry
              </h2>
              <p className="mt-3 text-sm text-stone-600">
                Fields marked with * are required.
              </p>

              <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
                <Field
                  label="Full name *"
                  name="name"
                  value={values.name}
                  onChange={onChange}
                  required
                  placeholder="Your full name"
                />
                <Field
                  label="Company"
                  name="company"
                  value={values.company}
                  onChange={onChange}
                  placeholder="Your company"
                />
                <Field
                  label="Email *"
                  name="email"
                  type="email"
                  value={values.email}
                  onChange={onChange}
                  required
                  placeholder="you@company.com"
                />
                <Field
                  label="Phone"
                  name="phone"
                  type="tel"
                  value={values.phone}
                  onChange={onChange}
                  placeholder="+1 555 0140"
                />
                <Field
                  label="Country"
                  name="country"
                  value={values.country}
                  onChange={onChange}
                  placeholder="Country"
                />
                <SelectField
                  label="Interest"
                  name="interest"
                  value={values.interest}
                  onChange={onChange}
                  options={interestOptions}
                />
              </div>

              <div className="mt-6">
                <label
                  htmlFor="message"
                  className="block text-[11px] uppercase tracking-[0.22em] text-stone-500 font-medium"
                >
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  required
                  value={values.message}
                  onChange={onChange}
                  placeholder="Tell us about your folding work — material, sizes, volumes, finish targets."
                  className="mt-2 w-full bg-white border border-stone-300 px-4 py-3 text-sm text-stone-900 placeholder:text-stone-400 focus:outline-none focus:border-stone-900 focus:ring-1 focus:ring-stone-900 transition-colors resize-y"
                />
              </div>

              {status === 'error' && error && (
                <div
                  role="alert"
                  className="mt-6 flex items-start gap-3 p-4 bg-amber-50 border border-amber-200 text-amber-900 text-sm"
                >
                  <AlertCircle className="w-5 h-5 mt-0.5 flex-shrink-0" />
                  <span>{error}</span>
                </div>
              )}

              {status === 'success' && (
                <div
                  role="status"
                  className="mt-6 flex items-start gap-3 p-4 bg-stone-900 text-stone-50 text-sm"
                >
                  <Check className="w-5 h-5 mt-0.5 flex-shrink-0 text-amber-500" />
                  <span>
                    Thank you. Your inquiry has been received — an engineer will be in touch within two working days.
                  </span>
                </div>
              )}

              <div className="mt-8 flex items-center justify-between gap-4 flex-wrap">
                <p className="text-xs text-stone-500 max-w-sm leading-relaxed">
                  By submitting this form you agree to ARTITECT contacting you
                  about your inquiry. We never share your details.
                </p>
                <button
                  type="submit"
                  disabled={status === 'submitting'}
                  className="inline-flex items-center gap-2 bg-stone-900 text-stone-50 px-7 py-3.5 text-xs tracking-[0.22em] uppercase font-medium hover:bg-amber-800 transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  {status === 'submitting' ? 'Sending…' : 'Send inquiry'}
                  <Send className="w-4 h-4" />
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </div>
  )
}

function Field({ label, name, type = 'text', value, onChange, required, placeholder }) {
  return (
    <div>
      <label
        htmlFor={name}
        className="block text-[11px] uppercase tracking-[0.22em] text-stone-500 font-medium"
      >
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        value={value}
        onChange={onChange}
        required={required}
        placeholder={placeholder}
        className="mt-2 w-full bg-white border border-stone-300 px-4 py-3 text-sm text-stone-900 placeholder:text-stone-400 focus:outline-none focus:border-stone-900 focus:ring-1 focus:ring-stone-900 transition-colors"
      />
    </div>
  )
}

function SelectField({ label, name, value, onChange, options }) {
  return (
    <div>
      <label
        htmlFor={name}
        className="block text-[11px] uppercase tracking-[0.22em] text-stone-500 font-medium"
      >
        {label}
      </label>
      <select
        id={name}
        name={name}
        value={value}
        onChange={onChange}
        className="mt-2 w-full bg-white border border-stone-300 px-4 py-3 text-sm text-stone-900 focus:outline-none focus:border-stone-900 focus:ring-1 focus:ring-stone-900 transition-colors"
      >
        {options.map((opt) => (
          <option key={opt.value} value={opt.value} disabled={opt.value === ''}>
            {opt.label}
          </option>
        ))}
      </select>
    </div>
  )
}
