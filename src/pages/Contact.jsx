import { useState } from 'react'
import { DataClient } from '@strikingly/sdk'
import { Mail, Phone, MapPin, ArrowRight, CheckCircle2 } from 'lucide-react'
import { STRK_PROJECT_URL, STRK_PROJECT_ANON_KEY } from '@/config'

const client = new DataClient(STRK_PROJECT_URL, STRK_PROJECT_ANON_KEY)

const interestOptions = [
  { value: 'double-folder', label: 'Double folding machine' },
  { value: 'sheet-metal-folder', label: 'Sheet metal folder' },
  { value: 'metal-folding-machine', label: 'Metal folding machine' },
  { value: 'spare-parts', label: 'Spare parts' },
  { value: 'service', label: 'Service & calibration' },
  { value: 'other', label: 'Something else' },
]

const initialValues = {
  name: '',
  company: '',
  email: '',
  phone: '',
  country: '',
  interest: 'double-folder',
  message: '',
}

const getErrorMessage = (response, error) => {
  if (Array.isArray(response?.errors) && response.errors.length > 0) {
    return response.errors.join(', ')
  }
  return error?.message || 'Sorry, your message could not be sent. Please try again.'
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
    if (!v.name.trim()) return 'Please enter your name.'
    if (!v.email.trim()) return 'Please enter your email.'
    if (!/^\S+@\S+\.\S+$/.test(v.email)) return 'Please enter a valid email.'
    if (!v.message.trim()) return 'Please tell us a bit about your inquiry.'
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
          created_at: new Date().toISOString(),
        },
      })
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
      <section className="bg-neutral-950 text-neutral-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 py-24 md:py-32">
          <p className="text-xs uppercase tracking-[0.3em] text-amber-500 mb-6">
            Contact
          </p>
          <h1 className="font-serif font-light text-5xl md:text-6xl tracking-tight max-w-3xl">
            Let&rsquo;s spec a folder for your line.
          </h1>
          <p className="mt-8 max-w-2xl text-lg text-neutral-300 leading-relaxed">
            Send us your material, thickness, and bend length. One of our application engineers will
            reply within one business day with a tailored proposal.
          </p>
        </div>
      </section>

      <section className="bg-stone-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 py-20 md:py-28">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
            <aside className="lg:col-span-4 space-y-10">
              <div>
                <p className="text-xs uppercase tracking-[0.3em] text-neutral-500 mb-4">
                  Sales
                </p>
                <p className="text-neutral-700 leading-relaxed">
                  For new machines, custom specifications, and quotations. Replies within one
                  business day.
                </p>
              </div>

              <ul className="space-y-6">
                <li className="flex items-start gap-4">
                  <span className="inline-flex h-10 w-10 items-center justify-center bg-neutral-950 text-amber-500 shrink-0">
                    <MapPin className="h-4 w-4" strokeWidth={1.5} />
                  </span>
                  <div>
                    <p className="text-[10px] uppercase tracking-[0.25em] text-neutral-500">
                      Headquarters
                    </p>
                    <p className="mt-1 text-neutral-950 leading-relaxed">
                      Industrieweg 14<br />
                      4283 GZ, Giessen<br />
                      The Netherlands
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <span className="inline-flex h-10 w-10 items-center justify-center bg-neutral-950 text-amber-500 shrink-0">
                    <Phone className="h-4 w-4" strokeWidth={1.5} />
                  </span>
                  <div>
                    <p className="text-[10px] uppercase tracking-[0.25em] text-neutral-500">Phone</p>
                    <p className="mt-1 text-neutral-950">+31 (0)183 555 880</p>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <span className="inline-flex h-10 w-10 items-center justify-center bg-neutral-950 text-amber-500 shrink-0">
                    <Mail className="h-4 w-4" strokeWidth={1.5} />
                  </span>
                  <div>
                    <p className="text-[10px] uppercase tracking-[0.25em] text-neutral-500">Email</p>
                    <p className="mt-1 text-neutral-950">sales@artitectmachinery.com</p>
                  </div>
                </li>
              </ul>

              <div className="border-t border-neutral-200 pt-8">
                <p className="text-xs uppercase tracking-[0.3em] text-neutral-500 mb-3">
                  Service hours
                </p>
                <p className="text-neutral-700 leading-relaxed">
                  Monday &ndash; Friday<br />
                  08:00 &ndash; 17:30 CET
                </p>
              </div>
            </aside>

            <div className="lg:col-span-8">
              {status === 'success' ? (
                <div className="bg-white border border-neutral-200 p-10 md:p-14">
                  <div className="inline-flex h-12 w-12 items-center justify-center bg-amber-500 text-neutral-950 mb-6">
                    <CheckCircle2 className="h-6 w-6" strokeWidth={1.75} />
                  </div>
                  <h2 className="font-serif font-light text-3xl md:text-4xl tracking-tight text-neutral-950">
                    Thank you. Your inquiry is in.
                  </h2>
                  <p className="mt-5 text-neutral-700 leading-relaxed max-w-xl">
                    An Artitect application engineer will review your requirements and reply within
                    one business day. If your request is urgent, please call us directly on{' '}
                    <span className="text-neutral-950">+31 (0)183 555 880</span>.
                  </p>
                  <button
                    type="button"
                    onClick={() => setStatus('idle')}
                    className="mt-10 inline-flex items-center gap-2 text-sm uppercase tracking-[0.2em] text-neutral-950 border-b border-neutral-950 pb-1 hover:text-amber-600 hover:border-amber-600 transition"
                  >
                    Send another inquiry
                    <ArrowRight className="h-4 w-4" />
                  </button>
                </div>
              ) : (
                <form
                  onSubmit={onSubmit}
                  className="bg-white border border-neutral-200 p-8 md:p-12 grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-6"
                  noValidate
                >
                  <h2 className="md:col-span-2 font-serif font-light text-2xl md:text-3xl tracking-tight text-neutral-950 mb-2">
                    Inquiry form
                  </h2>

                  <Field
                    label="Full name"
                    required
                    name="name"
                    value={values.name}
                    onChange={onChange}
                    placeholder="Your full name"
                  />
                  <Field
                    label="Company"
                    name="company"
                    value={values.company}
                    onChange={onChange}
                    placeholder="Company or organization"
                  />
                  <Field
                    label="Email"
                    required
                    type="email"
                    name="email"
                    value={values.email}
                    onChange={onChange}
                    placeholder="you@company.com"
                  />
                  <Field
                    label="Phone"
                    type="tel"
                    name="phone"
                    value={values.phone}
                    onChange={onChange}
                    placeholder="+31 ..."
                  />
                  <Field
                    label="Country"
                    name="country"
                    value={values.country}
                    onChange={onChange}
                    placeholder="Country / region"
                  />

                  <div className="flex flex-col gap-2">
                    <label className="text-[11px] uppercase tracking-[0.25em] text-neutral-500">
                      Interest
                    </label>
                    <select
                      name="interest"
                      value={values.interest}
                      onChange={onChange}
                      className="bg-white border border-neutral-300 text-neutral-950 px-4 py-3 text-sm focus:outline-none focus:border-neutral-950 transition"
                    >
                      {interestOptions.map((opt) => (
                        <option key={opt.value} value={opt.value}>
                          {opt.label}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div className="md:col-span-2 flex flex-col gap-2">
                    <label className="text-[11px] uppercase tracking-[0.25em] text-neutral-500">
                      Tell us about your project
                      <span className="text-amber-600"> *</span>
                    </label>
                    <textarea
                      name="message"
                      value={values.message}
                      onChange={onChange}
                      required
                      rows={6}
                      placeholder="Material, max thickness, bend length, target throughput, controls preference..."
                      className="bg-white border border-neutral-300 text-neutral-950 px-4 py-3 text-sm leading-relaxed focus:outline-none focus:border-neutral-950 transition resize-y"
                    />
                  </div>

                  {status === 'error' && error && (
                    <p className="md:col-span-2 text-sm text-red-700 bg-red-50 border border-red-200 px-4 py-3" role="alert">
                      {error}
                    </p>
                  )}

                  <div className="md:col-span-2 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 pt-2">
                    <p className="text-xs text-neutral-500">
                      We reply within one business day. No automated mailers.
                    </p>
                    <button
                      type="submit"
                      disabled={status === 'submitting'}
                      className="inline-flex items-center justify-center gap-2 bg-neutral-950 text-neutral-50 px-8 py-4 text-xs uppercase tracking-[0.2em] hover:bg-neutral-800 transition disabled:opacity-60 disabled:cursor-not-allowed"
                    >
                      {status === 'submitting' ? 'Sending...' : 'Send inquiry'}
                      {status !== 'submitting' && <ArrowRight className="h-4 w-4" />}
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

const Field = ({ label, required, name, value, onChange, placeholder, type = 'text' }) => (
  <div className="flex flex-col gap-2">
    <label className="text-[11px] uppercase tracking-[0.25em] text-neutral-500">
      {label}
      {required && <span className="text-amber-600"> *</span>}
    </label>
    <input
      type={type}
      name={name}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      required={required}
      className="bg-white border border-neutral-300 text-neutral-950 px-4 py-3 text-sm focus:outline-none focus:border-neutral-950 transition"
    />
  </div>
)

export default Contact
