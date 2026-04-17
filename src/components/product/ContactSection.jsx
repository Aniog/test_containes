import { useState } from 'react'
import { submitContactLead } from '../../api/contact'
import { Send, CheckCircle, AlertCircle } from 'lucide-react'

const initialValues = { name: '', email: '', message: '' }

function validate({ name, email, message }) {
  if (!name.trim()) return 'Name is required.'
  if (!email.trim()) return 'Email is required.'
  if (!/^\S+@\S+\.\S+$/.test(email)) return 'Please enter a valid email address.'
  if (!message.trim()) return 'Message is required.'
  return null
}

export default function ContactSection() {
  const [values, setValues] = useState(initialValues)
  const [status, setStatus] = useState('idle') // idle | submitting | success | error
  const [error, setError] = useState(null)

  const onChange = (e) => {
    const { name, value } = e.target
    setValues(v => ({ ...v, [name]: value }))
  }

  const onSubmit = async (e) => {
    e.preventDefault()
    setError(null)

    const validationError = validate(values)
    if (validationError) {
      setError(validationError)
      return
    }

    setStatus('submitting')
    try {
      await submitContactLead(values)
      setStatus('success')
      setValues(initialValues)
    } catch (err) {
      console.error('Contact form error:', err)
      setError(err.message || 'Something went wrong. Please try again.')
      setStatus('error')
    }
  }

  return (
    <section className="py-24 bg-gray-950 relative overflow-hidden" id="contact">
      {/* Dashed decorative lines */}
      <div className="absolute inset-0 pointer-events-none">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="dots" width="40" height="40" patternUnits="userSpaceOnUse">
              <circle cx="20" cy="20" r="1" fill="#374151" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#dots)" />
        </svg>
      </div>

      {/* Gradient accent */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-indigo-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left: Copy */}
          <div>
            <span className="text-xs font-semibold text-indigo-400 uppercase tracking-widest">Get in touch</span>
            <h2 className="mt-3 text-4xl md:text-5xl font-bold text-white tracking-tight leading-tight">
              Ready to build<br />something great?
            </h2>
            <p className="mt-5 text-gray-400 leading-relaxed max-w-md">
              Tell us about your project. Our team will reach out within 24 hours to discuss how NexusAI can transform your web presence.
            </p>

            {/* Stats */}
            <div className="mt-10 grid grid-cols-3 gap-6">
              {[
                { value: '12K+', label: 'Active users' },
                { value: '98%', label: 'Satisfaction rate' },
                { value: '< 24h', label: 'Response time' },
              ].map(({ value, label }) => (
                <div key={label} className="border-l border-dashed border-gray-700 pl-4">
                  <p className="text-2xl font-bold text-white">{value}</p>
                  <p className="text-xs text-gray-500 mt-1">{label}</p>
                </div>
              ))}
            </div>

            {/* Image */}
            <div className="mt-10 rounded-2xl overflow-hidden border border-gray-800">
              <img
                src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=600&q=80&auto=format&fit=crop"
                alt="Modern workspace"
                className="w-full h-48 object-cover opacity-80"
              />
            </div>
          </div>

          {/* Right: Form */}
          <div className="bg-gray-900 rounded-2xl p-8 border border-gray-800">
            {status === 'success' ? (
              <div className="flex flex-col items-center justify-center py-12 text-center">
                <div className="w-16 h-16 bg-green-500/10 rounded-full flex items-center justify-center mb-4">
                  <CheckCircle className="w-8 h-8 text-green-400" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">Message sent!</h3>
                <p className="text-gray-400 text-sm max-w-xs">
                  Thanks for reaching out. We'll get back to you within 24 hours.
                </p>
                <button
                  onClick={() => setStatus('idle')}
                  className="mt-6 text-indigo-400 text-sm hover:text-indigo-300 transition-colors"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={onSubmit} className="space-y-5">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-1.5">
                    Full name
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    value={values.name}
                    onChange={onChange}
                    placeholder="Jane Smith"
                    className="w-full bg-gray-800 border border-gray-700 text-white placeholder-gray-500 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1.5">
                    Email address
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    value={values.email}
                    onChange={onChange}
                    placeholder="jane@company.com"
                    className="w-full bg-gray-800 border border-gray-700 text-white placeholder-gray-500 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-1.5">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    value={values.message}
                    onChange={onChange}
                    placeholder="Tell us about your project..."
                    className="w-full bg-gray-800 border border-gray-700 text-white placeholder-gray-500 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all resize-none"
                  />
                </div>

                {error && (
                  <div className="flex items-center gap-2 text-red-400 text-sm bg-red-500/10 border border-red-500/20 rounded-xl px-4 py-3">
                    <AlertCircle className="w-4 h-4 flex-shrink-0" />
                    {error}
                  </div>
                )}

                <button
                  type="submit"
                  disabled={status === 'submitting'}
                  className="w-full flex items-center justify-center gap-2 bg-indigo-600 hover:bg-indigo-500 disabled:opacity-60 disabled:cursor-not-allowed text-white font-medium py-3 rounded-xl transition-colors"
                >
                  {status === 'submitting' ? (
                    <>
                      <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      Send message
                    </>
                  )}
                </button>

                <p className="text-xs text-gray-600 text-center">
                  By submitting, you agree to our Privacy Policy. No spam, ever.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
