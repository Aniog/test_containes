import { useState } from 'react'
import { Mail, Phone, MapPin, Send, CheckCircle2, AlertCircle } from 'lucide-react'
import { DataClient } from '@strikingly/sdk'
import { STRK_PROJECT_URL, STRK_PROJECT_ANON_KEY } from '@/config'

const client = new DataClient(STRK_PROJECT_URL, STRK_PROJECT_ANON_KEY)

const interestOptions = [
  { value: 'double-folder', label: 'Double folding machine' },
  { value: 'sheet-metal-folder', label: 'Sheet metal folder' },
  { value: 'metal-folding-machine', label: 'Metal folding machine' },
  { value: 'spare-parts', label: 'Spare parts' },
  { value: 'service', label: 'Service & support' },
  { value: 'general', label: 'General enquiry' },
]

const initialForm = {
  name: '',
  company: '',
  email: '',
  phone: '',
  country: '',
  interest: 'general',
  message: '',
}

const getErrorMessage = (response, error) => {
  if (Array.isArray(response?.errors) && response.errors.length > 0) {
    return response.errors.join(', ')
  }
  return error?.message || 'Something went wrong. Please try again.'
}

export default function Contact() {
  const [values, setValues] = useState(initialForm)
  const [status, setStatus] = useState('idle') // idle | submitting | success | error
  const [feedback, setFeedback] = useState(null)

  const onChange = (e) => {
    const { name, value } = e.target
    setValues((v) => ({ ...v, [name]: value }))
  }

  const validate = () => {
    if (!values.name.trim()) return 'Please tell us your name.'
    if (!values.email.trim()) return 'Please provide your email address.'
    if (!/^\S+@\S+\.\S+$/.test(values.email)) return 'Please provide a valid email address.'
    if (!values.message.trim()) return 'Please include a short message.'
    return null
  }

  const onSubmit = async (e) => {
    e.preventDefault()
    setFeedback(null)
    const err = validate()
    if (err) {
      setStatus('error')
      setFeedback(err)
      return
    }
    setStatus('submitting')

    const { data: response, error: submitError } = await client
      .from('ContactInquiry')
      .insert({
        data: {
          name: values.name.trim(),
          company: values.company.trim(),
          email: values.email.trim(),
          phone: values.phone.trim(),
          country: values.country.trim(),
          interest: values.interest,
          message: values.message.trim(),
        },
      })
      .select()
      .single()

    if (submitError || response?.success === false) {
      setStatus('error')
      setFeedback(getErrorMessage(response, submitError))
      return
    }

    setStatus('success')
    setFeedback("Thank you. Your inquiry has been received — we'll be in touch within one business day.")
    setValues(initialForm)
  }

  return (
    <div>
      <section className="bg-stone-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-6 md:px-10 py-16 md:py-24">
          <p className="text-xs uppercase tracking-[0.2em] text-amber-600 font-semibold">Contact</p>
          <h1 className="mt-4 font-serif text-4xl md:text-6xl font-medium text-slate-900 leading-[1.05]">
            Let's talk folding.
          </h1>
          <p className="mt-5 text-base md:text-lg text-slate-600 leading-relaxed max-w-2xl">
            Tell us about the parts you make, the volumes you run, and the
            tolerances you need. Our engineers will recommend the right Artitect
            machine and prepare a tailored quote.
          </p>
        </div>
      </section>

      <section>
        <div className="max-w-7xl mx-auto px-6 md:px-10 py-16 md:py-24 grid lg:grid-cols-12 gap-12">
          <div className="lg:col-span-5 space-y-8">
            <div>
              <p className="text-xs uppercase tracking-[0.2em] text-amber-600 font-semibold">Reach us</p>
              <h2 className="mt-3 font-serif text-2xl md:text-3xl text-slate-900">
                A real engineer, on the other end of every message.
              </h2>
              <p className="mt-4 text-slate-600 leading-relaxed">
                We answer technical questions with technical people. Expect a
                response within one business day.
              </p>
            </div>

            <ul className="space-y-5">
              <li className="flex items-start gap-4 p-5 rounded-2xl bg-white border border-slate-200">
                <div className="h-10 w-10 rounded-xl bg-slate-900 text-amber-400 flex items-center justify-center">
                  <Mail className="w-5 h-5" strokeWidth={1.5} />
                </div>
                <div>
                  <p className="text-xs uppercase tracking-[0.16em] text-slate-500 font-semibold">Email</p>
                  <a
                    href="mailto:sales@artitect-machinery.com"
                    className="mt-1 block text-slate-900 hover:text-amber-600 transition"
                  >
                    sales@artitect-machinery.com
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-4 p-5 rounded-2xl bg-white border border-slate-200">
                <div className="h-10 w-10 rounded-xl bg-slate-900 text-amber-400 flex items-center justify-center">
                  <Phone className="w-5 h-5" strokeWidth={1.5} />
                </div>
                <div>
                  <p className="text-xs uppercase tracking-[0.16em] text-slate-500 font-semibold">Phone</p>
                  <p className="mt-1 text-slate-900">+86 757 8888 0000</p>
                </div>
              </li>
              <li className="flex items-start gap-4 p-5 rounded-2xl bg-white border border-slate-200">
                <div className="h-10 w-10 rounded-xl bg-slate-900 text-amber-400 flex items-center justify-center">
                  <MapPin className="w-5 h-5" strokeWidth={1.5} />
                </div>
                <div>
                  <p className="text-xs uppercase tracking-[0.16em] text-slate-500 font-semibold">Workshop</p>
                  <p className="mt-1 text-slate-900 leading-relaxed">
                    Industrial Park, Building 14<br />
                    Foshan, Guangdong, China
                  </p>
                </div>
              </li>
            </ul>
          </div>

          <div className="lg:col-span-7">
            <form
              onSubmit={onSubmit}
              className="bg-white border border-slate-200 rounded-3xl p-7 md:p-10 shadow-sm"
              noValidate
            >
              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label htmlFor="name" className="block text-xs uppercase tracking-[0.16em] text-slate-600 font-semibold">
                    Name *
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    value={values.name}
                    onChange={onChange}
                    required
                    className="mt-2 w-full rounded-lg border border-slate-300 bg-white px-4 py-3 text-slate-900 placeholder:text-slate-400 focus:border-slate-900 focus:outline-none transition"
                    placeholder="Your full name"
                  />
                </div>
                <div>
                  <label htmlFor="company" className="block text-xs uppercase tracking-[0.16em] text-slate-600 font-semibold">
                    Company
                  </label>
                  <input
                    id="company"
                    name="company"
                    type="text"
                    value={values.company}
                    onChange={onChange}
                    className="mt-2 w-full rounded-lg border border-slate-300 bg-white px-4 py-3 text-slate-900 placeholder:text-slate-400 focus:border-slate-900 focus:outline-none transition"
                    placeholder="Workshop or company name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-xs uppercase tracking-[0.16em] text-slate-600 font-semibold">
                    Email *
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    value={values.email}
                    onChange={onChange}
                    required
                    className="mt-2 w-full rounded-lg border border-slate-300 bg-white px-4 py-3 text-slate-900 placeholder:text-slate-400 focus:border-slate-900 focus:outline-none transition"
                    placeholder="you@example.com"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-xs uppercase tracking-[0.16em] text-slate-600 font-semibold">
                    Phone
                  </label>
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    value={values.phone}
                    onChange={onChange}
                    className="mt-2 w-full rounded-lg border border-slate-300 bg-white px-4 py-3 text-slate-900 placeholder:text-slate-400 focus:border-slate-900 focus:outline-none transition"
                    placeholder="+1 555 000 0000"
                  />
                </div>
                <div>
                  <label htmlFor="country" className="block text-xs uppercase tracking-[0.16em] text-slate-600 font-semibold">
                    Country
                  </label>
                  <input
                    id="country"
                    name="country"
                    type="text"
                    value={values.country}
                    onChange={onChange}
                    className="mt-2 w-full rounded-lg border border-slate-300 bg-white px-4 py-3 text-slate-900 placeholder:text-slate-400 focus:border-slate-900 focus:outline-none transition"
                    placeholder="Where are you based?"
                  />
                </div>
                <div>
                  <label htmlFor="interest" className="block text-xs uppercase tracking-[0.16em] text-slate-600 font-semibold">
                    Interested in
                  </label>
                  <select
                    id="interest"
                    name="interest"
                    value={values.interest}
                    onChange={onChange}
                    className="mt-2 w-full rounded-lg border border-slate-300 bg-white px-4 py-3 text-slate-900 focus:border-slate-900 focus:outline-none transition"
                  >
                    {interestOptions.map((opt) => (
                      <option key={opt.value} value={opt.value}>{opt.label}</option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="mt-5">
                <label htmlFor="message" className="block text-xs uppercase tracking-[0.16em] text-slate-600 font-semibold">
                  Tell us about your project *
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={6}
                  value={values.message}
                  onChange={onChange}
                  required
                  className="mt-2 w-full rounded-lg border border-slate-300 bg-white px-4 py-3 text-slate-900 placeholder:text-slate-400 focus:border-slate-900 focus:outline-none transition resize-none"
                  placeholder="Sheet size, material, gauge, volumes, tolerances — share what you can."
                />
              </div>

              <div className="mt-7 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                <p className="text-xs text-slate-500">
                  By submitting, you agree to be contacted by an Artitect engineer about your enquiry.
                </p>
                <button
                  type="submit"
                  disabled={status === 'submitting'}
                  className="inline-flex items-center justify-center gap-2 bg-slate-900 text-white px-6 py-3 rounded-full text-sm font-medium hover:bg-slate-800 transition disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  {status === 'submitting' ? 'Sending…' : 'Send Inquiry'}
                  <Send className="w-4 h-4" strokeWidth={1.5} />
                </button>
              </div>

              {status === 'success' && feedback && (
                <div role="status" className="mt-6 flex items-start gap-3 rounded-xl bg-emerald-50 border border-emerald-200 px-5 py-4 text-emerald-900">
                  <CheckCircle2 className="w-5 h-5 mt-0.5" strokeWidth={1.5} />
                  <p className="text-sm leading-relaxed">{feedback}</p>
                </div>
              )}
              {status === 'error' && feedback && (
                <div role="alert" className="mt-6 flex items-start gap-3 rounded-xl bg-rose-50 border border-rose-200 px-5 py-4 text-rose-900">
                  <AlertCircle className="w-5 h-5 mt-0.5" strokeWidth={1.5} />
                  <p className="text-sm leading-relaxed">{feedback}</p>
                </div>
              )}
            </form>
          </div>
        </div>
      </section>
    </div>
  )
}
