import { useState } from 'react'
import { Send, CheckCircle2, AlertCircle, Mail, User, MessageSquare } from 'lucide-react'
import { submitContactLead } from '../../api/contact'

const initialValues = { name: '', email: '', message: '' }

function validate({ name, email, message }) {
  if (!name.trim()) return 'Name is required.'
  if (!email.trim()) return 'Email is required.'
  if (!/^\S+@\S+\.\S+$/.test(email)) return 'Please enter a valid email address.'
  if (!message.trim()) return 'Message is required.'
  return null
}

export default function ContactForm() {
  const [values, setValues] = useState(initialValues)
  const [status, setStatus] = useState('idle') // idle | submitting | success | error
  const [errorMsg, setErrorMsg] = useState(null)

  const onChange = (e) => {
    const { name, value } = e.target
    setValues((v) => ({ ...v, [name]: value }))
  }

  const onSubmit = async (e) => {
    e.preventDefault()
    setErrorMsg(null)

    const validationError = validate(values)
    if (validationError) {
      setErrorMsg(validationError)
      return
    }

    setStatus('submitting')
    try {
      await submitContactLead(values)
      setStatus('success')
      setValues(initialValues)
    } catch (err) {
      console.error('[ContactForm] Submit error:', err)
      setErrorMsg(err.message || 'Something went wrong. Please try again.')
      setStatus('error')
    }
  }

  return (
    <section id="contact" className="py-24 bg-white relative">
      <div className="absolute top-0 left-0 right-0 border-t border-dashed border-slate-200" />

      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Left: info */}
          <div>
            <p className="text-indigo-600 text-sm font-semibold uppercase tracking-widest mb-4">Contact</p>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 tracking-tight leading-tight mb-6">
              Let's build something<br />remarkable together
            </h2>
            <p className="text-slate-500 text-base leading-relaxed mb-8">
              Whether you're a startup, agency, or enterprise — our team is ready to show you what NexusAI can do for your business.
            </p>

            <div className="space-y-4">
              {[
                { label: 'Response time', value: 'Within 2 hours' },
                { label: 'Free consultation', value: '30-minute strategy call' },
                { label: 'Custom plans', value: 'Available for teams 10+' },
              ].map(({ label, value }) => (
                <div key={label} className="flex items-center gap-4 p-4 bg-slate-50 rounded-xl border border-dashed border-slate-200">
                  <CheckCircle2 className="w-5 h-5 text-indigo-500 flex-shrink-0" />
                  <div>
                    <p className="text-xs text-slate-500 font-medium">{label}</p>
                    <p className="text-sm font-semibold text-slate-900">{value}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8">
              <img
                src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=600&q=80&auto=format&fit=crop"
                alt="Modern office workspace"
                className="w-full h-48 object-cover rounded-2xl"
              />
            </div>
          </div>

          {/* Right: form */}
          <div className="bg-white border border-slate-100 rounded-2xl shadow-xl shadow-slate-100 p-8">
            {status === 'success' ? (
              <div className="flex flex-col items-center justify-center py-12 text-center gap-4">
                <div className="w-16 h-16 bg-emerald-50 rounded-full flex items-center justify-center">
                  <CheckCircle2 className="w-8 h-8 text-emerald-500" />
                </div>
                <h3 className="text-xl font-bold text-slate-900">Message Received!</h3>
                <p className="text-slate-500 text-sm max-w-xs">
                  Thanks for reaching out. Our team will get back to you within 2 hours.
                </p>
                <button
                  onClick={() => setStatus('idle')}
                  className="mt-4 text-sm text-indigo-600 font-semibold hover:text-indigo-700 transition-colors"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={onSubmit} className="space-y-5">
                <div>
                  <h3 className="text-xl font-bold text-slate-900 mb-1">Send us a message</h3>
                  <p className="text-sm text-slate-500">We'll respond within 2 business hours.</p>
                </div>

                {/* Name */}
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-1.5">
                    Full Name
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
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-1.5">
                    Email Address
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
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-1.5">
                    Message
                  </label>
                  <div className="relative">
                    <MessageSquare className="absolute left-3 top-3.5 w-4 h-4 text-slate-400" />
                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      value={values.message}
                      onChange={onChange}
                      placeholder="Tell us about your project..."
                      className="w-full pl-10 pr-4 py-3 border border-slate-200 rounded-xl text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all resize-none"
                    />
                  </div>
                </div>

                {/* Error */}
                {errorMsg && (
                  <div className="flex items-center gap-2 text-red-600 bg-red-50 border border-red-100 rounded-xl px-4 py-3">
                    <AlertCircle className="w-4 h-4 flex-shrink-0" />
                    <p className="text-sm">{errorMsg}</p>
                  </div>
                )}

                <button
                  type="submit"
                  disabled={status === 'submitting'}
                  className="w-full flex items-center justify-center gap-2 bg-indigo-600 hover:bg-indigo-700 disabled:bg-indigo-400 text-white font-semibold py-3.5 rounded-xl transition-colors"
                >
                  {status === 'submitting' ? (
                    <>
                      <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      Send Message
                    </>
                  )}
                </button>

                <p className="text-xs text-slate-400 text-center">
                  By submitting, you agree to our Privacy Policy.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
