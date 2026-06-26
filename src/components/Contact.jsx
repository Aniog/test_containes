import { useState } from 'react'
import { DataClient } from '@strikingly/sdk'
import { STRK_PROJECT_URL, STRK_PROJECT_ANON_KEY } from '../config.jsx'
import { Mail, Phone, MapPin, Clock, Send } from 'lucide-react'

const projectUrl = STRK_PROJECT_URL
const projectAnonKey = STRK_PROJECT_ANON_KEY
const client = new DataClient(projectUrl, projectAnonKey)

const contactInfo = [
  { icon: MapPin, text: 'Industriestrasse 42, 70565 Stuttgart, Germany' },
  { icon: Phone, text: '+49 711 1234 5678' },
  { icon: Mail, text: 'info@artitect-machinery.com' },
  { icon: Clock, text: 'Mon–Fri: 08:00 – 18:00 CET' },
]

export default function Contact() {
  const [values, setValues] = useState({ name: '', email: '', company: '', phone: '', message: '' })
  const [status, setStatus] = useState('idle')
  const [error, setError] = useState(null)

  const onChange = (e) => {
    const { name, value } = e.target
    setValues((v) => ({ ...v, [name]: value }))
  }

  const validate = (v) => {
    if (!v.name.trim()) return 'Name is required'
    if (!v.email.trim()) return 'Email is required'
    if (!/^\S+@\S+\.\S+$/.test(v.email)) return 'Please provide a valid email'
    if (!v.message.trim()) return 'Message is required'
    return null
  }

  const onSubmit = async (e) => {
    e.preventDefault()
    setError(null)
    const err = validate(values)
    if (err) { setError(err); return }

    setStatus('submitting')

    try {
      // Create user record in Users table
      const { data: userResponse, error: userError } = await client
        .from('Users')
        .insert({
          data: {
            email: values.email,
            name: values.name,
            role: 'guest',
          },
        })
        .select()
        .single()

      if (userError) throw userError
      const userRecord = userResponse?.data || userResponse
      const userId = userRecord?.id

      // Insert inquiry
      const { error: inquiryError } = await client
        .from('Inquiries')
        .insert({
          data: {
            user_id: userId || null,
            email: values.email,
            name: values.name,
            company: values.company,
            phone: values.phone,
            message: values.message,
          },
        })

      if (inquiryError) throw inquiryError

      setStatus('success')
      setValues({ name: '', email: '', company: '', phone: '', message: '' })
    } catch (err) {
      console.error(err)
      setError(err.message || 'Submission failed. Please try again.')
      setStatus('error')
    }
  }

  return (
    <section id="contact" className="py-20 md:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-16">
          <span className="text-brand-gold text-xs font-medium tracking-[0.2em] uppercase">
            Get in Touch
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-brand-dark mt-4 mb-4 tracking-tight">
            Request a Consultation
          </h2>
          <p className="text-brand-text-secondary text-lg max-w-2xl mx-auto">
            Tell us about your requirements and our team will get back to you
            within 24 hours with a tailored solution.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-12 lg:gap-16">
          {/* Contact form */}
          <form onSubmit={onSubmit} className="lg:col-span-3 space-y-5" aria-busy={status === 'submitting'}>
            <div className="grid sm:grid-cols-2 gap-5">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-brand-dark mb-1.5">Full Name *</label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  value={values.name}
                  onChange={onChange}
                  required
                  placeholder="Your name"
                  className="w-full px-4 py-3 border border-brand-border rounded-sm text-brand-dark placeholder:text-brand-text-muted text-sm focus:outline-none focus:ring-2 focus:ring-brand-gold/40 focus:border-brand-gold transition-all bg-brand-bg"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-brand-dark mb-1.5">Email Address *</label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  value={values.email}
                  onChange={onChange}
                  required
                  placeholder="you@company.com"
                  className="w-full px-4 py-3 border border-brand-border rounded-sm text-brand-dark placeholder:text-brand-text-muted text-sm focus:outline-none focus:ring-2 focus:ring-brand-gold/40 focus:border-brand-gold transition-all bg-brand-bg"
                />
              </div>
            </div>

            <div className="grid sm:grid-cols-2 gap-5">
              <div>
                <label htmlFor="company" className="block text-sm font-medium text-brand-dark mb-1.5">Company</label>
                <input
                  id="company"
                  name="company"
                  type="text"
                  value={values.company}
                  onChange={onChange}
                  placeholder="Your company name"
                  className="w-full px-4 py-3 border border-brand-border rounded-sm text-brand-dark placeholder:text-brand-text-muted text-sm focus:outline-none focus:ring-2 focus:ring-brand-gold/40 focus:border-brand-gold transition-all bg-brand-bg"
                />
              </div>
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-brand-dark mb-1.5">Phone Number</label>
                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  value={values.phone}
                  onChange={onChange}
                  placeholder="+49 711 1234 5678"
                  className="w-full px-4 py-3 border border-brand-border rounded-sm text-brand-dark placeholder:text-brand-text-muted text-sm focus:outline-none focus:ring-2 focus:ring-brand-gold/40 focus:border-brand-gold transition-all bg-brand-bg"
                />
              </div>
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-brand-dark mb-1.5">Message *</label>
              <textarea
                id="message"
                name="message"
                rows={5}
                value={values.message}
                onChange={onChange}
                required
                placeholder="Describe your requirements — machine type, capacity, material thickness, etc."
                className="w-full px-4 py-3 border border-brand-border rounded-sm text-brand-dark placeholder:text-brand-text-muted text-sm focus:outline-none focus:ring-2 focus:ring-brand-gold/40 focus:border-brand-gold transition-all bg-brand-bg resize-none"
              />
            </div>

            <button
              type="submit"
              disabled={status === 'submitting'}
              className="inline-flex items-center gap-2 px-8 py-3.5 bg-brand-gold text-white rounded-sm font-medium text-sm hover:bg-brand-gold-light transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {status === 'submitting' ? (
                'Sending...'
              ) : (
                <>
                  Send Inquiry
                  <Send className="w-4 h-4" />
                </>
              )}
            </button>

            {status === 'success' && (
              <p className="text-brand-success text-sm font-medium mt-3">
                Thank you! Your inquiry has been received. Our team will contact you within 24 hours.
              </p>
            )}
            {status === 'error' && error && (
              <p className="text-red-500 text-sm font-medium mt-3">{error}</p>
            )}
          </form>

          {/* Contact info */}
          <div className="lg:col-span-2">
            <div className="bg-brand-dark p-8 rounded-sm h-full">
              <h3 className="text-xl font-bold text-white mb-8">Contact Information</h3>

              <div className="space-y-6">
                {contactInfo.map((item) => {
                  const Icon = item.icon
                  return (
                    <div key={item.text} className="flex items-start gap-3">
                      <Icon className="w-5 h-5 text-brand-gold mt-0.5 shrink-0" />
                      <span className="text-white/80 text-sm">{item.text}</span>
                    </div>
                  )
                })}
              </div>

              <hr className="border-white/10 my-8" />

              <div>
                <h4 className="text-white font-semibold mb-3">Sales Inquiries</h4>
                <p className="text-white/60 text-sm leading-relaxed">
                  For pricing, lead times, and machine specifications, our sales team
                  is ready to assist you with detailed information.
                </p>
              </div>

              <div className="mt-6">
                <h4 className="text-white font-semibold mb-3">Service & Support</h4>
                <p className="text-white/60 text-sm leading-relaxed">
                  Existing customers can reach our technical support team directly at
                  {' '}<span className="text-brand-gold">support@artitect-machinery.com</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}