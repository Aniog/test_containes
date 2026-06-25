import { useState } from 'react'
import { Mail, Phone, MapPin, Check, AlertCircle } from 'lucide-react'
import { DataClient } from '@strikingly/sdk'
import { STRK_PROJECT_URL, STRK_PROJECT_ANON_KEY } from '../config.jsx'

const client = new DataClient(STRK_PROJECT_URL, STRK_PROJECT_ANON_KEY)

const productOptions = [
  { value: 'double-folding-machine', label: 'Double folding machine' },
  { value: 'sheet-metal-folder', label: 'Sheet metal folder' },
  { value: 'metal-folding-machine', label: 'Metal folding machine' },
  { value: 'custom-solution', label: 'Custom solution' },
  { value: 'other', label: 'Other' },
]

const initialValues = {
  name: '',
  company: '',
  email: '',
  phone: '',
  country: '',
  product_interest: 'double-folding-machine',
  message: '',
}

const getErrorMessage = (response, error) => {
  if (Array.isArray(response?.errors) && response.errors.length > 0) {
    return response.errors.join(', ')
  }
  return error?.message || 'Something went wrong. Please try again.'
}

const Contact = () => {
  const [values, setValues] = useState(initialValues)
  const [status, setStatus] = useState('idle') // idle | submitting | success | error
  const [error, setError] = useState(null)

  const onChange = (e) => {
    const { name, value } = e.target
    setValues((v) => ({ ...v, [name]: value }))
  }

  const validate = (v) => {
    if (!v.name.trim()) return 'Please tell us your name.'
    if (!v.email.trim()) return 'Please provide an email address.'
    if (!/^\S+@\S+\.\S+$/.test(v.email)) return 'Please provide a valid email address.'
    if (!v.message.trim()) return 'Please include a short message.'
    return null
  }

  const onSubmit = async (e) => {
    e.preventDefault()
    setError(null)
    const err = validate(values)
    if (err) {
      setError(err)
      setStatus('error')
      return
    }

    setStatus('submitting')

    const payload = {
      name: values.name.trim(),
      company: values.company.trim(),
      email: values.email.trim(),
      phone: values.phone.trim(),
      country: values.country.trim(),
      product_interest: values.product_interest,
      message: values.message.trim(),
      created_at: new Date().toISOString(),
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
    <div className="bg-paper">
      {/* Header */}
      <section className="border-b border-line">
        <div className="max-w-7xl mx-auto px-6 md:px-10 pt-20 md:pt-28 pb-16 md:pb-20">
          <p className="text-xs uppercase tracking-[0.3em] text-bronze">
            Contact us
          </p>
          <h1 className="mt-5 font-serif text-4xl md:text-6xl leading-[1.05] tracking-tight text-ink max-w-4xl">
            Tell us what you need to fold.
          </h1>
          <p className="mt-6 text-base md:text-lg text-steel max-w-2xl leading-relaxed">
            Send us a few details about your application and we will reply
            within one business day with a recommendation, a quote, or a time
            to talk.
          </p>
        </div>
      </section>

      {/* Form + info */}
      <section className="max-w-7xl mx-auto px-6 md:px-10 py-20 md:py-28 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
        {/* Form */}
        <div className="lg:col-span-7">
          <form onSubmit={onSubmit} className="space-y-8" noValidate>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
              <Field
                label="Full name"
                name="name"
                value={values.name}
                onChange={onChange}
                required
              />
              <Field
                label="Company"
                name="company"
                value={values.company}
                onChange={onChange}
              />
              <Field
                label="Email"
                name="email"
                type="email"
                value={values.email}
                onChange={onChange}
                required
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
                <label
                  htmlFor="product_interest"
                  className="block text-xs uppercase tracking-[0.2em] text-steel"
                >
                  Product of interest
                </label>
                <select
                  id="product_interest"
                  name="product_interest"
                  value={values.product_interest}
                  onChange={onChange}
                  className="mt-3 w-full border-b border-line focus:border-ink bg-transparent py-3 text-ink outline-none transition-colors"
                >
                  {productOptions.map((opt) => (
                    <option key={opt.value} value={opt.value}>
                      {opt.label}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <div>
              <label
                htmlFor="message"
                className="block text-xs uppercase tracking-[0.2em] text-steel"
              >
                Message <span className="text-bronze">*</span>
              </label>
              <textarea
                id="message"
                name="message"
                rows={6}
                value={values.message}
                onChange={onChange}
                required
                placeholder="Sheet length, thickness, material, expected volume — anything that helps us understand the work."
                className="mt-3 w-full border-b border-line focus:border-ink bg-transparent py-3 text-ink placeholder:text-steel outline-none transition-colors resize-none"
              />
            </div>

            {status === 'error' && error && (
              <div
                role="alert"
                className="flex items-start gap-3 border border-line bg-mist p-4 text-sm text-ink"
              >
                <AlertCircle className="w-4 h-4 mt-0.5 text-bronze shrink-0" />
                <span>{error}</span>
              </div>
            )}

            {status === 'success' && (
              <div
                role="status"
                className="flex items-start gap-3 border border-ink bg-ink p-4 text-sm text-white"
              >
                <Check className="w-4 h-4 mt-0.5 text-bronze shrink-0" />
                <span>
                  Thank you. Your inquiry has been received — we will reply
                  within one business day.
                </span>
              </div>
            )}

            <div className="flex items-center gap-4">
              <button
                type="submit"
                disabled={status === 'submitting'}
                className="bg-ink text-white hover:bg-bronze disabled:opacity-60 disabled:cursor-not-allowed transition-colors px-7 py-3.5 text-sm font-medium tracking-wide"
              >
                {status === 'submitting' ? 'Sending…' : 'Send inquiry'}
              </button>
              <p className="text-xs text-steel">
                Required fields are marked with an accent.
              </p>
            </div>
          </form>
        </div>

        {/* Info panel */}
        <aside className="lg:col-span-5">
          <div className="border-t border-line pt-8 space-y-8">
            <InfoBlock
              icon={Mail}
              label="Email"
              lines={['sales@artitect-machinery.com', 'service@artitect-machinery.com']}
            />
            <InfoBlock
              icon={Phone}
              label="Phone"
              lines={['+1 (415) 555-0142', 'Mon – Fri · 09:00 – 18:00 CET']}
            />
            <InfoBlock
              icon={MapPin}
              label="Workshop"
              lines={['Industrial Quarter, Building 12', 'Modena 41122, Italy']}
            />
          </div>

          <div className="mt-12 border border-line p-8 bg-mist">
            <p className="text-xs uppercase tracking-[0.3em] text-bronze">
              On-site visits
            </p>
            <h3 className="mt-3 font-serif text-2xl text-ink">
              See the machines in operation.
            </h3>
            <p className="mt-3 text-sm text-steel leading-relaxed">
              We welcome fabricators, architects, and engineers to our Modena
              workshop. Folding demonstrations are arranged by appointment.
            </p>
          </div>
        </aside>
      </section>
    </div>
  )
}

const Field = ({ label, name, type = 'text', value, onChange, required }) => (
  <div>
    <label
      htmlFor={name}
      className="block text-xs uppercase tracking-[0.2em] text-steel"
    >
      {label} {required && <span className="text-bronze">*</span>}
    </label>
    <input
      id={name}
      name={name}
      type={type}
      value={value}
      onChange={onChange}
      required={required}
      className="mt-3 w-full border-b border-line focus:border-ink bg-transparent py-3 text-ink placeholder:text-steel outline-none transition-colors"
    />
  </div>
)

const InfoBlock = ({ icon: Icon, label, lines }) => (
  <div className="flex items-start gap-4">
    <span className="w-10 h-10 border border-line flex items-center justify-center shrink-0">
      <Icon className="w-4 h-4 text-bronze" />
    </span>
    <div>
      <p className="text-xs uppercase tracking-[0.2em] text-steel">{label}</p>
      {lines.map((l) => (
        <p key={l} className="mt-1.5 text-sm text-ink leading-relaxed">
          {l}
        </p>
      ))}
    </div>
  </div>
)

export default Contact
