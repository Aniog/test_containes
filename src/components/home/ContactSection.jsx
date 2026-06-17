import { useState } from 'react'
import { MapPin, Phone, Mail, Clock, Send } from 'lucide-react'
import { DataClient } from '@strikingly/sdk'
import { STRK_PROJECT_URL, STRK_PROJECT_ANON_KEY } from '@/config.jsx'

const client = new DataClient(STRK_PROJECT_URL, STRK_PROJECT_ANON_KEY)

const contactDetails = [
  { icon: MapPin, label: 'Address', value: '123 Industrial Way, Chicago, IL 60601' },
  { icon: Phone, label: 'Phone', value: '+1 (555) 123-4567' },
  { icon: Mail, label: 'Email', value: 'info@artitect-machinery.com' },
  { icon: Clock, label: 'Hours', value: 'Mon–Fri, 8:00 AM – 6:00 PM' },
]

export default function ContactSection() {
  const [values, setValues] = useState({ name: '', email: '', company: '', message: '' })
  const [status, setStatus] = useState('idle')
  const [error, setError] = useState(null)

  const onChange = (e) => {
    const { name, value } = e.target
    setValues((v) => ({ ...v, [name]: value }))
  }

  const validate = (v) => {
    if (!v.name.trim()) return 'Name is required'
    if (!v.email.trim()) return 'Email is required'
    if (!/^\S+@\S+\.\S+$/.test(v.email)) return 'Provide a valid email'
    if (!v.message.trim()) return 'Message is required'
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
      const { data: response, error: insertError } = await client
        .from('ContactInquiries')
        .insert({
          data: {
            name: values.name,
            email: values.email,
            company: values.company,
            message: values.message,
          },
        })
        .select()
        .single()

      if (insertError || (response && response.success === false)) {
        throw new Error(response?.errors?.join(', ') || insertError?.message || 'Submission failed.')
      }

      setStatus('success')
      setValues({ name: '', email: '', company: '', message: '' })
    } catch (err) {
      console.error(err)
      setError(err.message || 'Submission failed. Please try again.')
      setStatus('error')
    }
  }

  return (
    <section id="contact" className="py-20 lg:py-28 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-sm font-semibold text-amber-600 uppercase tracking-wider">
            Get In Touch
          </span>
          <h2 className="mt-3 text-3xl lg:text-4xl font-bold text-slate-900 tracking-tight">
            Let&apos;s discuss your requirements
          </h2>
          <p className="mt-4 text-slate-600 text-lg leading-relaxed">
            Whether you need a single machine or a complete production line, our team is ready to help.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          {/* Contact details */}
          <div className="space-y-6">
            {contactDetails.map((item) => (
              <div key={item.label} className="flex gap-4">
                <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-amber-50 flex items-center justify-center">
                  <item.icon className="w-5 h-5 text-amber-500" />
                </div>
                <div>
                  <h3 className="font-semibold text-slate-900 text-sm">{item.label}</h3>
                  <p className="mt-0.5 text-sm text-slate-500">{item.value}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Contact form */}
          <div className="lg:col-span-2">
            <form
              onSubmit={onSubmit}
              className="bg-white rounded-xl border border-slate-100 shadow-sm p-6 lg:p-8 space-y-5"
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-1.5">
                    Full Name *
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    value={values.name}
                    onChange={onChange}
                    required
                    placeholder="John Smith"
                    className="w-full px-4 py-2.5 text-sm border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500/20 focus:border-amber-500 text-slate-900 placeholder-slate-400"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-1.5">
                    Email Address *
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    value={values.email}
                    onChange={onChange}
                    required
                    placeholder="john@company.com"
                    className="w-full px-4 py-2.5 text-sm border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500/20 focus:border-amber-500 text-slate-900 placeholder-slate-400"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="company" className="block text-sm font-medium text-slate-700 mb-1.5">
                  Company
                </label>
                <input
                  id="company"
                  name="company"
                  type="text"
                  value={values.company}
                  onChange={onChange}
                  placeholder="Your Company Ltd."
                  className="w-full px-4 py-2.5 text-sm border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500/20 focus:border-amber-500 text-slate-900 placeholder-slate-400"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-1.5">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  value={values.message}
                  onChange={onChange}
                  required
                  placeholder="Tell us about your requirements..."
                  className="w-full px-4 py-2.5 text-sm border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500/20 focus:border-amber-500 text-slate-900 placeholder-slate-400 resize-none"
                />
              </div>

              {status === 'error' && error && (
                <p className="text-sm text-red-600 bg-red-50 px-4 py-3 rounded-lg">{error}</p>
              )}
              {status === 'success' && (
                <p className="text-sm text-green-700 bg-green-50 px-4 py-3 rounded-lg">
                  Thank you! We&apos;ll get back to you within 24 hours.
                </p>
              )}

              <button
                type="submit"
                disabled={status === 'submitting'}
                className="inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold text-white bg-amber-500 rounded-lg hover:bg-amber-600 disabled:opacity-60 transition-colors"
              >
                <Send className="w-4 h-4" />
                {status === 'submitting' ? 'Sending...' : 'Send Message'}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
