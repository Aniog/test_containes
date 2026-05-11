import { useState } from 'react'
import { Send, CheckCircle, Mail, User, MessageSquare } from 'lucide-react'
import { DataClient } from '@strikingly/sdk'
import { STRK_PROJECT_URL, STRK_PROJECT_ANON_KEY } from '@/config.jsx'

const client = new DataClient(STRK_PROJECT_URL, STRK_PROJECT_ANON_KEY)

const getErrorMessage = (response, error) => {
  if (Array.isArray(response?.errors) && response.errors.length > 0) {
    return response.errors.join(', ')
  }
  return error?.message || 'Submission failed. Please try again.'
}

export default function ContactSection() {
  const [values, setValues] = useState({ name: '', email: '', message: '' })
  const [status, setStatus] = useState('idle') // idle | submitting | success | error
  const [errorMsg, setErrorMsg] = useState('')

  const onChange = e => {
    const { name, value } = e.target
    setValues(v => ({ ...v, [name]: value }))
  }

  const validate = () => {
    if (!values.name.trim()) return 'Name is required.'
    if (!values.email.trim()) return 'Email is required.'
    if (!/^\S+@\S+\.\S+$/.test(values.email)) return 'Please enter a valid email address.'
    if (!values.message.trim()) return 'Message is required.'
    return null
  }

  const onSubmit = async e => {
    e.preventDefault()
    setErrorMsg('')
    const err = validate()
    if (err) { setErrorMsg(err); return }

    setStatus('submitting')

    const { data: response, error } = await client
      .from('ContactFormResponse')
      .insert({
        data: {
          name: values.name.trim(),
          email: values.email.trim(),
          message: values.message.trim(),
          submitted_at: new Date().toISOString(),
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
    setValues({ name: '', email: '', message: '' })
  }

  return (
    <section className="py-24 bg-slate-50 relative overflow-hidden">
      {/* Dashed top border */}
      <div className="absolute top-0 left-0 right-0 border-t-2 border-dashed border-slate-200" />

      {/* Background decoration */}
      <div className="absolute top-10 right-10 w-64 h-64 bg-indigo-100 rounded-full blur-3xl opacity-40 pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-48 h-48 bg-violet-100 rounded-full blur-3xl opacity-30 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left: Info */}
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-white border border-slate-200 rounded-full text-slate-500 text-xs font-semibold mb-6">
              Get in touch
            </div>
            <h2 id="contact-title" className="text-4xl font-bold text-slate-900 tracking-tight mb-4">
              Let's talk about your project
            </h2>
            <p className="text-slate-500 text-lg leading-relaxed mb-8">
              Have a question, a partnership idea, or just want to see NeuralBuild in action? Our team responds within one business day.
            </p>

            {/* Contact details */}
            <div className="space-y-4">
              {[
                { icon: Mail, label: 'Email us', value: 'hello@neuralbuild.ai' },
                { icon: MessageSquare, label: 'Live chat', value: 'Available Mon–Fri, 9am–6pm EST' },
              ].map((item, i) => {
                const Icon = item.icon
                return (
                  <div key={i} className="flex items-center gap-4 p-4 bg-white rounded-xl border border-slate-100">
                    <div className="w-10 h-10 bg-indigo-50 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Icon className="w-5 h-5 text-indigo-600" />
                    </div>
                    <div>
                      <div className="text-xs text-slate-400 font-medium">{item.label}</div>
                      <div className="text-sm font-semibold text-slate-800">{item.value}</div>
                    </div>
                  </div>
                )
              })}
            </div>

            {/* Dashed decorative box */}
            <div className="mt-8 p-6 border-2 border-dashed border-indigo-100 rounded-2xl bg-indigo-50/50">
              <p className="text-sm text-indigo-700 font-medium">
                🚀 Enterprise customers get a dedicated onboarding specialist and priority support.
              </p>
            </div>
          </div>

          {/* Right: Form */}
          <div className="bg-white rounded-3xl border border-slate-100 shadow-xl p-8 relative">
            {/* Dashed corner accent */}
            <div className="absolute top-4 right-4 w-12 h-12 border-t-2 border-r-2 border-dashed border-indigo-100 rounded-tr-xl pointer-events-none" />

            {status === 'success' ? (
              <div className="flex flex-col items-center justify-center py-12 text-center">
                <div className="w-16 h-16 bg-emerald-50 rounded-full flex items-center justify-center mb-4">
                  <CheckCircle className="w-8 h-8 text-emerald-500" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">Message sent!</h3>
                <p className="text-slate-500 text-sm max-w-xs">
                  Thanks for reaching out. We'll get back to you within one business day.
                </p>
                <button
                  onClick={() => setStatus('idle')}
                  className="mt-6 px-5 py-2.5 bg-indigo-600 text-white text-sm font-semibold rounded-xl hover:bg-indigo-700 transition-colors"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={onSubmit} noValidate>
                <h3 className="text-xl font-bold text-slate-900 mb-6">Send us a message</h3>

                {/* Name */}
                <div className="mb-5">
                  <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-1.5">
                    Full name
                  </label>
                  <div className="relative">
                    <User className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                    <input
                      id="name"
                      name="name"
                      type="text"
                      value={values.name}
                      onChange={onChange}
                      placeholder="Jane Smith"
                      className="w-full pl-10 pr-4 py-3 border border-slate-200 rounded-xl text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all"
                    />
                  </div>
                </div>

                {/* Email */}
                <div className="mb-5">
                  <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-1.5">
                    Email address
                  </label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                    <input
                      id="email"
                      name="email"
                      type="email"
                      value={values.email}
                      onChange={onChange}
                      placeholder="jane@company.com"
                      className="w-full pl-10 pr-4 py-3 border border-slate-200 rounded-xl text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all"
                    />
                  </div>
                </div>

                {/* Message */}
                <div className="mb-6">
                  <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-1.5">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    value={values.message}
                    onChange={onChange}
                    placeholder="Tell us about your project or question…"
                    className="w-full px-4 py-3 border border-slate-200 rounded-xl text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all resize-none"
                  />
                </div>

                {/* Error */}
                {(status === 'error' || errorMsg) && (
                  <p className="mb-4 text-sm text-red-600 bg-red-50 border border-red-100 rounded-lg px-4 py-2.5">
                    {errorMsg}
                  </p>
                )}

                <button
                  type="submit"
                  disabled={status === 'submitting'}
                  className="w-full flex items-center justify-center gap-2 px-6 py-3.5 bg-indigo-600 text-white font-semibold rounded-xl hover:bg-indigo-700 disabled:opacity-60 disabled:cursor-not-allowed transition-colors"
                >
                  {status === 'submitting' ? (
                    <>
                      <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      Sending…
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      Send message
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
