import { useState } from 'react'
import { DataClient } from '@strikingly/sdk'
import { STRK_PROJECT_URL, STRK_PROJECT_ANON_KEY } from '@/config.jsx'
import { Send, CheckCircle, Mail, Phone, MapPin, Clock } from 'lucide-react'

const projectUrl = STRK_PROJECT_URL
const projectAnonKey = STRK_PROJECT_ANON_KEY
const client = new DataClient(projectUrl, projectAnonKey)

const contactInfo = [
  { icon: Mail, label: 'Email', value: 'info@ssourcingchina.com', href: 'mailto:info@ssourcingchina.com' },
  { icon: Phone, label: 'Phone', value: '+86 20 8888 8888', href: 'tel:+862088888888' },
  { icon: MapPin, label: 'Office', value: 'Guangzhou, Guangdong Province, China' },
  { icon: Clock, label: 'Response Time', value: 'Within 24 hours on business days' },
]

export default function Contact() {
  const [values, setValues] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    product: '',
    message: '',
  })
  const [status, setStatus] = useState('idle')
  const [error, setError] = useState(null)

  const onChange = (e) => {
    const { name, value } = e.target
    setValues((v) => ({ ...v, [name]: value }))
  }

  const validate = (v) => {
    if (!v.name.trim()) return 'Name is required'
    if (!v.email.trim()) return 'Email is required'
    if (!/^\S+@\S+\.\S+$/.test(v.email)) return 'Please provide a valid email address'
    if (!v.message.trim()) return 'Please describe your sourcing needs'
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
      const { error: responseError } = await client
        .from('SourcingInquiries')
        .insert({
          data: {
            name: values.name,
            email: values.email,
            company: values.company,
            product: values.product,
            message: values.message,
          },
        })

      if (responseError) throw responseError

      setStatus('success')
      setValues({
        name: '',
        email: '',
        company: '',
        phone: '',
        product: '',
        message: '',
      })
    } catch (err) {
      console.error(err)
      setError(err.message || 'Submission failed. Please try again.')
      setStatus('error')
    }
  }

  return (
    <>
      {/* Hero */}
      <section className="bg-brand-500 py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Contact Us</h1>
          <p className="text-brand-100 text-lg max-w-2xl mx-auto">
            Ready to start sourcing from China? Get in touch and we will respond within 24 hours.
          </p>
        </div>
      </section>

      {/* Contact */}
      <section className="py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            {/* Contact info */}
            <div className="lg:col-span-1">
              <h2 className="text-2xl font-bold text-surface-800 mb-6">Get in Touch</h2>
              <div className="space-y-5">
                {contactInfo.map((item) => (
                  <div key={item.label} className="flex items-start gap-3">
                    <div className="w-10 h-10 bg-brand-50 rounded-lg flex items-center justify-center shrink-0">
                      <item.icon className="w-5 h-5 text-brand-500" />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-surface-700">{item.label}</p>
                      {item.href ? (
                        <a href={item.href} className="text-sm text-surface-500 hover:text-brand-500 transition-colors">
                          {item.value}
                        </a>
                      ) : (
                        <p className="text-sm text-surface-500">{item.value}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Form */}
            <div className="lg:col-span-2">
              {status === 'success' ? (
                <div className="bg-green-50 rounded-xl border border-green-200 p-8 text-center">
                  <CheckCircle className="w-12 h-12 text-green-500 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-green-800 mb-2">Thank You!</h3>
                  <p className="text-green-600">
                    Your message has been received. Our team will review your requirements and contact you within 24 hours.
                  </p>
                </div>
              ) : (
                <form onSubmit={onSubmit} className="bg-white rounded-xl border border-surface-200 p-6 md:p-8 space-y-5">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-surface-700 mb-1.5">
                        Full Name *
                      </label>
                      <input
                        id="name"
                        name="name"
                        type="text"
                        value={values.name}
                        onChange={onChange}
                        required
                        placeholder="Your name"
                        className="w-full px-4 py-2.5 rounded-lg border border-surface-200 text-surface-800 text-sm focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-surface-700 mb-1.5">
                        Email Address *
                      </label>
                      <input
                        id="email"
                        name="email"
                        type="email"
                        value={values.email}
                        onChange={onChange}
                        required
                        placeholder="you@company.com"
                        className="w-full px-4 py-2.5 rounded-lg border border-surface-200 text-surface-800 text-sm focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent"
                      />
                    </div>
                    <div>
                      <label htmlFor="company" className="block text-sm font-medium text-surface-700 mb-1.5">
                        Company Name
                      </label>
                      <input
                        id="company"
                        name="company"
                        type="text"
                        value={values.company}
                        onChange={onChange}
                        placeholder="Your company"
                        className="w-full px-4 py-2.5 rounded-lg border border-surface-200 text-surface-800 text-sm focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent"
                      />
                    </div>
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-surface-700 mb-1.5">
                        Phone Number
                      </label>
                      <input
                        id="phone"
                        name="phone"
                        type="tel"
                        value={values.phone}
                        onChange={onChange}
                        placeholder="+1 234 567 8900"
                        className="w-full px-4 py-2.5 rounded-lg border border-surface-200 text-surface-800 text-sm focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="product" className="block text-sm font-medium text-surface-700 mb-1.5">
                      Product to Source
                    </label>
                    <input
                      id="product"
                      name="product"
                      type="text"
                      value={values.product}
                      onChange={onChange}
                      placeholder="e.g. Bluetooth speakers, custom t-shirts, industrial valves"
                      className="w-full px-4 py-2.5 rounded-lg border border-surface-200 text-surface-800 text-sm focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-surface-700 mb-1.5">
                      Tell Us About Your Sourcing Needs *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      value={values.message}
                      onChange={onChange}
                      required
                      placeholder="Describe the product you want to source, your quality requirements, target budget, and any other relevant details..."
                      className="w-full px-4 py-2.5 rounded-lg border border-surface-200 text-surface-800 text-sm focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent resize-y"
                    />
                  </div>

                  {error && (
                    <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                      <p className="text-red-700 text-sm">{error}</p>
                    </div>
                  )}

                  <button
                    type="submit"
                    disabled={status === 'submitting'}
                    className="w-full inline-flex items-center justify-center gap-2 px-6 py-3 bg-accent-500 text-white rounded-lg font-semibold text-base hover:bg-accent-600 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {status === 'submitting' ? (
                      'Sending...'
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        Send Inquiry
                      </>
                    )}
                  </button>

                  <p className="text-surface-400 text-xs text-center">
                    We respect your privacy. Your information will be kept confidential and used only to respond to your inquiry.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  )
}