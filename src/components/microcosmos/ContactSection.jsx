import { useState } from 'react'
import { DataClient } from '@strikingly/sdk'
import { STRK_PROJECT_URL, STRK_PROJECT_ANON_KEY } from '@/config.jsx'

const client = new DataClient(STRK_PROJECT_URL, STRK_PROJECT_ANON_KEY)

const INITIAL_VALUES = { name: '', email: '', subject: '', message: '' }

const validate = (v) => {
  if (!v.name.trim()) return 'Name is required.'
  if (!v.email.trim()) return 'Email is required.'
  if (!/^\S+@\S+\.\S+$/.test(v.email)) return 'Please enter a valid email address.'
  if (!v.message.trim()) return 'Message is required.'
  return null
}

export default function ContactSection() {
  const [values, setValues] = useState(INITIAL_VALUES)
  const [status, setStatus] = useState('idle') // idle | submitting | success | error
  const [error, setError] = useState(null)

  const onChange = (e) => {
    const { name, value } = e.target
    setValues((v) => ({ ...v, [name]: value }))
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
      const { data: response, error: insertError } = await client
        .from('Contact Form Responses')
        .insert({
          data: {
            name: values.name,
            email: values.email,
            subject: values.subject || undefined,
            message: values.message,
          },
        })
        .select()
        .single()

      if (insertError || response?.success === false) {
        const msg = Array.isArray(response?.errors) && response.errors.length > 0
          ? response.errors.join(', ')
          : insertError?.message || 'Submission failed. Please try again.'
        throw new Error(msg)
      }

      setStatus('success')
      setValues(INITIAL_VALUES)
    } catch (err) {
      console.error('Contact form error:', err)
      setError(err.message || 'Something went wrong. Please try again.')
      setStatus('error')
    }
  }

  return (
    <section id="contact" className="py-20 md:py-28 bg-gray-950">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid md:grid-cols-2 gap-12 md:gap-20 items-start">
          {/* Left: Info */}
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-teal-400 mb-3">Contact Us</p>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 leading-tight">
              Get in Touch with Our Team
            </h2>
            <p className="text-gray-400 leading-relaxed mb-8">
              Whether you're a researcher, educator, science enthusiast, or journalist — we'd love to hear from you. Reach out to collaborate, license imagery, or simply share your curiosity about the microscopic world.
            </p>

            <div className="space-y-5">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-teal-500/10 border border-teal-500/30 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <svg className="w-5 h-5 text-teal-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <div className="text-sm font-semibold text-white mb-0.5">Email</div>
                  <div className="text-gray-400 text-sm">hello@microcosmos.science</div>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-teal-500/10 border border-teal-500/30 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <svg className="w-5 h-5 text-teal-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <div className="text-sm font-semibold text-white mb-0.5">Location</div>
                  <div className="text-gray-400 text-sm">Research Institute, Cambridge, MA</div>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-teal-500/10 border border-teal-500/30 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <svg className="w-5 h-5 text-teal-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <div className="text-sm font-semibold text-white mb-0.5">Response Time</div>
                  <div className="text-gray-400 text-sm">Within 24–48 hours</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Form */}
          <div className="bg-gray-900 border border-gray-700 rounded-2xl p-6 md:p-8 shadow-2xl">
            {status === 'success' ? (
              <div className="text-center py-10">
                <div className="w-16 h-16 rounded-full bg-teal-500/10 border border-teal-500/30 flex items-center justify-center mx-auto mb-5">
                  <svg className="w-8 h-8 text-teal-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Message Sent!</h3>
                <p className="text-gray-400 mb-6">Thank you for reaching out. We'll get back to you within 24–48 hours.</p>
                <button
                  onClick={() => setStatus('idle')}
                  className="border border-teal-500 text-teal-400 hover:bg-teal-500/10 px-6 py-2.5 rounded-full transition-colors text-sm font-semibold"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={onSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="name" className="text-sm font-medium text-gray-300 mb-1.5 block">
                      Full Name <span className="text-teal-400">*</span>
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      value={values.name}
                      onChange={onChange}
                      placeholder="Jane Smith"
                      className="bg-gray-800 border border-gray-700 text-white placeholder-gray-500 rounded-xl px-4 py-3 focus:outline-none focus:border-teal-500 w-full transition-colors"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="text-sm font-medium text-gray-300 mb-1.5 block">
                      Email Address <span className="text-teal-400">*</span>
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      value={values.email}
                      onChange={onChange}
                      placeholder="jane@example.com"
                      className="bg-gray-800 border border-gray-700 text-white placeholder-gray-500 rounded-xl px-4 py-3 focus:outline-none focus:border-teal-500 w-full transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="text-sm font-medium text-gray-300 mb-1.5 block">
                    Subject
                  </label>
                  <input
                    id="subject"
                    name="subject"
                    type="text"
                    value={values.subject}
                    onChange={onChange}
                    placeholder="Research collaboration, image licensing..."
                    className="bg-gray-800 border border-gray-700 text-white placeholder-gray-500 rounded-xl px-4 py-3 focus:outline-none focus:border-teal-500 w-full transition-colors"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="text-sm font-medium text-gray-300 mb-1.5 block">
                    Message <span className="text-teal-400">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    value={values.message}
                    onChange={onChange}
                    placeholder="Tell us about your project or question..."
                    className="bg-gray-800 border border-gray-700 text-white placeholder-gray-500 rounded-xl px-4 py-3 focus:outline-none focus:border-teal-500 w-full transition-colors resize-none"
                  />
                </div>

                {error && (
                  <div className="bg-red-500/10 border border-red-500/30 text-red-400 rounded-xl px-4 py-3 text-sm">
                    {error}
                  </div>
                )}

                <button
                  type="submit"
                  disabled={status === 'submitting'}
                  className="w-full bg-teal-500 hover:bg-teal-400 disabled:opacity-60 disabled:cursor-not-allowed text-white font-semibold px-8 py-4 rounded-full transition-colors text-base"
                >
                  {status === 'submitting' ? 'Sending…' : 'Send Message'}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
