import { useState } from 'react'
import { Mail, Phone, MapPin, Send, CheckCircle2, Loader2 } from 'lucide-react'
import { DataClient } from '@strikingly/sdk'
import { STRK_PROJECT_URL, STRK_PROJECT_ANON_KEY } from '@/config.jsx'
import { products } from '@/data/products'

const client = new DataClient(STRK_PROJECT_URL, STRK_PROJECT_ANON_KEY)

const getErrorMessage = (response, error) => {
  if (Array.isArray(response?.errors) && response.errors.length > 0) {
    return response.errors.join(', ')
  }
  return error?.message || 'Submission failed. Please try again.'
}

const contactInfo = [
  {
    icon: Mail,
    label: 'Email',
    value: 'sales@artitect-machinery.com',
  },
  {
    icon: Phone,
    label: 'Phone',
    value: '+1 (800) 555-0142',
  },
  {
    icon: MapPin,
    label: 'Headquarters',
    value: '1200 Industrial Parkway, Suite 400, Chicago, IL 60607',
  },
]

export default function Contact() {
  const [values, setValues] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    product_interest: '',
    message: '',
  })
  const [status, setStatus] = useState('idle')
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
      return
    }

    setStatus('submitting')
    try {
      const { data: response, error: createError } = await client
        .from('ContactInquiry')
        .insert({
          data: {
            name: values.name.trim(),
            email: values.email.trim(),
            company: values.company.trim(),
            phone: values.phone.trim(),
            product_interest: values.product_interest,
            message: values.message.trim(),
          },
        })
        .select()
        .single()

      if (createError || response?.success === false) {
        throw new Error(getErrorMessage(response, createError))
      }

      setStatus('success')
      setValues({
        name: '',
        email: '',
        company: '',
        phone: '',
        product_interest: '',
        message: '',
      })
    } catch (err) {
      console.error(err)
      setError(err.message || 'Submission failed')
      setStatus('error')
    }
  }

  const inputClass =
    'w-full rounded-lg border border-slate-300 bg-white px-4 py-3 text-sm text-slate-900 placeholder:text-slate-400 focus:border-amber-500 focus:outline-none focus:ring-2 focus:ring-amber-500/30 transition'

  return (
    <section id="contact" className="py-20 md:py-28 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto text-center">
          <p className="text-amber-600 font-semibold text-sm tracking-[0.2em] uppercase mb-3">
            Get in Touch
          </p>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900">
            Request a Quote or Consultation
          </h2>
          <p className="mt-4 text-lg text-slate-600">
            Tell us about your folding requirements and our team will respond
            within one business day.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 lg:grid-cols-5 gap-8">
          <div className="lg:col-span-2 space-y-6">
            {contactInfo.map((item) => {
              const Icon = item.icon
              return (
                <div
                  key={item.label}
                  className="flex items-start gap-4 rounded-xl bg-white border border-slate-200 p-5 shadow-sm"
                >
                  <div className="flex items-center justify-center w-11 h-11 rounded-lg bg-slate-900 text-amber-500 shrink-0">
                    <Icon className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs font-semibold tracking-wider uppercase text-slate-500">
                      {item.label}
                    </p>
                    <p className="mt-1 text-sm font-medium text-slate-900">
                      {item.value}
                    </p>
                  </div>
                </div>
              )
            })}
          </div>

          <div className="lg:col-span-3">
            <div className="rounded-xl bg-white border border-slate-200 shadow-sm p-6 sm:p-8">
              {status === 'success' ? (
                <div className="flex flex-col items-center justify-center text-center py-12">
                  <CheckCircle2 className="w-14 h-14 text-amber-500" />
                  <h3 className="mt-4 text-xl font-bold text-slate-900">
                    Thank you for your inquiry
                  </h3>
                  <p className="mt-2 text-sm text-slate-600 max-w-sm">
                    We have received your message and will get back to you
                    within one business day.
                  </p>
                  <button
                    type="button"
                    onClick={() => setStatus('idle')}
                    className="mt-6 inline-flex items-center justify-center rounded-lg border border-slate-300 px-5 py-2.5 text-sm font-semibold text-slate-700 hover:bg-slate-50"
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <form onSubmit={onSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label
                        htmlFor="name"
                        className="block text-sm font-medium text-slate-700 mb-1.5"
                      >
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
                      <label
                        htmlFor="email"
                        className="block text-sm font-medium text-slate-700 mb-1.5"
                      >
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

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label
                        htmlFor="company"
                        className="block text-sm font-medium text-slate-700 mb-1.5"
                      >
                        Company
                      </label>
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
                    <div>
                      <label
                        htmlFor="phone"
                        className="block text-sm font-medium text-slate-700 mb-1.5"
                      >
                        Phone
                      </label>
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
                  </div>

                  <div>
                    <label
                      htmlFor="product_interest"
                      className="block text-sm font-medium text-slate-700 mb-1.5"
                    >
                      Product of interest
                    </label>
                    <select
                      id="product_interest"
                      name="product_interest"
                      value={values.product_interest}
                      onChange={onChange}
                      className={inputClass}
                    >
                      <option value="">Select a product</option>
                      {products.map((p) => (
                        <option key={p.id} value={p.name}>
                          {p.name}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium text-slate-700 mb-1.5"
                    >
                      Message <span className="text-amber-600">*</span>
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      value={values.message}
                      onChange={onChange}
                      className={inputClass}
                      placeholder="Tell us about your folding requirements, materials, and volumes..."
                    />
                  </div>

                  {error && (
                    <p
                      role="alert"
                      className="rounded-lg bg-red-50 border border-red-200 px-4 py-3 text-sm text-red-700"
                    >
                      {error}
                    </p>
                  )}

                  <button
                    type="submit"
                    disabled={status === 'submitting'}
                    className="inline-flex items-center justify-center gap-2 w-full sm:w-auto rounded-lg bg-amber-500 px-7 py-3.5 text-base font-semibold text-slate-900 shadow-sm transition hover:bg-amber-400 disabled:opacity-60 disabled:cursor-not-allowed"
                  >
                    {status === 'submitting' ? (
                      <>
                        <Loader2 className="w-5 h-5 animate-spin" />
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send className="w-5 h-5" />
                        Send Inquiry
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
