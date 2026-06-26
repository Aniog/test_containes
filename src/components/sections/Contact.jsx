import { useState } from 'react'
import { DataClient } from '@strikingly/sdk'
import {
  STRK_PROJECT_URL,
  STRK_PROJECT_ANON_KEY,
} from '@/config.jsx'
import { products } from '@/data/catalog'
import { Mail, Phone, MapPin, Send, CheckCircle2, Loader2 } from 'lucide-react'

const client = new DataClient(STRK_PROJECT_URL, STRK_PROJECT_ANON_KEY)

const getErrorMessage = (response, error) => {
  if (Array.isArray(response?.errors) && response.errors.length > 0) {
    return response.errors.join(', ')
  }
  return error?.message || 'Submission failed. Please try again.'
}

const initialValues = {
  name: '',
  email: '',
  phone: '',
  company: '',
  product_interest: '',
  message: '',
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
    if (!/^\S+@\S+\.\S+$/.test(v.email)) return 'Please enter a valid email.'
    if (!v.message.trim()) return 'Please enter a message.'
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
    try {
      const { data: response, error: createError } = await client
        .from('InquirySubmission')
        .insert({
          data: {
            name: values.name,
            email: values.email,
            phone: values.phone,
            company: values.company,
            product_interest: values.product_interest,
            message: values.message,
          },
        })
        .select()
        .single()

      if (createError || response?.success === false) {
        throw new Error(getErrorMessage(response, createError))
      }

      setStatus('success')
      setValues(initialValues)
    } catch (err) {
      console.error(err)
      setError(err.message || 'Submission failed')
      setStatus('error')
    }
  }

  const inputClass =
    'w-full rounded-lg border border-slate-300 bg-white px-4 py-2.5 text-sm text-slate-900 placeholder-slate-400 transition-colors focus:border-amber-500 focus:outline-none focus:ring-2 focus:ring-amber-500/30'
  const labelClass = 'mb-1.5 block text-sm font-medium text-slate-700'

  return (
    <section id="contact" className="bg-slate-50 py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2">
          {/* Info side */}
          <div>
            <p className="text-sm font-semibold uppercase tracking-wider text-amber-600">
              Get in Touch
            </p>
            <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
              Request a Quote or Consultation
            </h2>
            <p className="mt-4 text-lg text-slate-600">
              Tell us about your folding requirements and our engineers will
              recommend the right machine and prepare a tailored quote.
            </p>

            <ul className="mt-8 space-y-5">
              <li className="flex items-start gap-3">
                <span className="flex h-10 w-10 flex-none items-center justify-center rounded-lg bg-amber-500 text-slate-950">
                  <Phone className="h-5 w-5" />
                </span>
                <div>
                  <div className="text-sm font-semibold text-slate-900">Phone</div>
                  <div className="text-sm text-slate-600">+1 (800) 555-0142</div>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="flex h-10 w-10 flex-none items-center justify-center rounded-lg bg-amber-500 text-slate-950">
                  <Mail className="h-5 w-5" />
                </span>
                <div>
                  <div className="text-sm font-semibold text-slate-900">Email</div>
                  <div className="text-sm text-slate-600">sales@artitectmachinery.com</div>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="flex h-10 w-10 flex-none items-center justify-center rounded-lg bg-amber-500 text-slate-950">
                  <MapPin className="h-5 w-5" />
                </span>
                <div>
                  <div className="text-sm font-semibold text-slate-900">Address</div>
                  <div className="text-sm text-slate-600">1200 Industrial Parkway, Cleveland, OH 44114</div>
                </div>
              </li>
            </ul>
          </div>

          {/* Form side */}
          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
            {status === 'success' ? (
              <div className="flex h-full flex-col items-center justify-center py-12 text-center">
                <CheckCircle2 className="h-14 w-14 text-amber-500" />
                <h3 className="mt-4 text-xl font-bold text-slate-900">
                  Thank you!
                </h3>
                <p className="mt-2 max-w-sm text-sm text-slate-600">
                  Your inquiry has been received. One of our specialists will
                  contact you within one business day.
                </p>
                <button
                  type="button"
                  onClick={() => setStatus('idle')}
                  className="mt-6 rounded-lg border border-slate-300 px-5 py-2.5 text-sm font-semibold text-slate-700 transition-colors hover:bg-slate-100"
                >
                  Submit another inquiry
                </button>
              </div>
            ) : (
              <form onSubmit={onSubmit} className="space-y-5">
                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <label htmlFor="name" className={labelClass}>
                      Full name <span className="text-amber-600">*</span>
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      value={values.name}
                      onChange={onChange}
                      className={inputClass}
                      placeholder="Jane Doe"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className={labelClass}>
                      Email <span className="text-amber-600">*</span>
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      value={values.email}
                      onChange={onChange}
                      className={inputClass}
                      placeholder="jane@company.com"
                    />
                  </div>
                </div>

                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <label htmlFor="phone" className={labelClass}>Phone</label>
                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={values.phone}
                      onChange={onChange}
                      className={inputClass}
                      placeholder="+1 (555) 000-0000"
                    />
                  </div>
                  <div>
                    <label htmlFor="company" className={labelClass}>Company</label>
                    <input
                      id="company"
                      name="company"
                      type="text"
                      value={values.company}
                      onChange={onChange}
                      className={inputClass}
                      placeholder="Acme Fabrication"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="product_interest" className={labelClass}>
                    Product of interest
                  </label>
                  <select
                    id="product_interest"
                    name="product_interest"
                    value={values.product_interest}
                    onChange={onChange}
                    className={inputClass}
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
                  <label htmlFor="message" className={labelClass}>
                    Message <span className="text-amber-600">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    value={values.message}
                    onChange={onChange}
                    className={inputClass}
                    placeholder="Describe your folding needs, materials, and volumes..."
                  />
                </div>

                {error && (
                  <p role="alert" className="rounded-lg bg-red-50 px-4 py-3 text-sm font-medium text-red-700">
                    {error}
                  </p>
                )}

                <button
                  type="submit"
                  disabled={status === 'submitting'}
                  className="inline-flex w-full items-center justify-center gap-2 rounded-lg bg-amber-500 px-6 py-3.5 text-base font-semibold text-slate-950 transition-colors hover:bg-amber-600 disabled:cursor-not-allowed disabled:opacity-70"
                >
                  {status === 'submitting' ? (
                    <>
                      <Loader2 className="h-5 w-5 animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send className="h-5 w-5" />
                      Send Inquiry
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
