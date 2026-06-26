import { useState } from 'react'
import { Send, CheckCircle, AlertCircle, Mail, Phone, MapPin, Clock } from 'lucide-react'
import { DataClient } from '@strikingly/sdk'
import { STRK_PROJECT_URL, STRK_PROJECT_ANON_KEY } from '../config.jsx'

const client = new DataClient(STRK_PROJECT_URL, STRK_PROJECT_ANON_KEY)

const contactInfo = [
  {
    icon: Mail,
    label: 'Email',
    value: 'info@ssourcingchina.com',
    description: 'We respond within 24 hours',
  },
  {
    icon: Phone,
    label: 'Phone',
    value: '+86 755 8888 8888',
    description: 'Mon-Fri, 9:00-18:00 CST',
  },
  {
    icon: MapPin,
    label: 'Office',
    value: 'Shenzhen, Guangdong, China',
    description: 'Nanshan District, Science & Technology Park',
  },
  {
    icon: Clock,
    label: 'Business Hours',
    value: 'Mon-Fri, 9:00-18:00 CST',
    description: 'UTC+8, we accommodate different time zones',
  },
]

export default function Contact() {
  const [values, setValues] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    product: '',
    quantity: '',
    message: '',
  })
  const [status, setStatus] = useState('idle')
  const [errorMsg, setErrorMsg] = useState('')

  const onChange = (e) => {
    const { name, value } = e.target
    setValues((v) => ({ ...v, [name]: value }))
  }

  const validate = (v) => {
    if (!v.name.trim()) return 'Name is required'
    if (!v.email.trim()) return 'Email is required'
    if (!/^\S+@\S+\.\S+$/.test(v.email)) return 'Please enter a valid email'
    if (!v.product.trim()) return 'Please describe the product you want to source'
    if (!v.message.trim()) return 'Please include a message'
    return null
  }

  const onSubmit = async (e) => {
    e.preventDefault()
    setErrorMsg('')
    const err = validate(values)
    if (err) {
      setErrorMsg(err)
      return
    }

    setStatus('submitting')

    try {
      const { error: responseError } = await client
        .from('SourcingInquiry')
        .insert({
          data: {
            name: values.name,
            email: values.email,
            company: values.company,
            phone: values.phone,
            product: values.product,
            quantity: values.quantity,
            message: values.message,
          },
        })

      if (responseError) throw responseError

      setStatus('success')
      setValues({ name: '', email: '', company: '', phone: '', product: '', quantity: '', message: '' })
    } catch (err) {
      console.error('Contact form error:', err)
      setErrorMsg(err.message || 'Submission failed. Please try again.')
      setStatus('error')
    }
  }

  return (
    <div>
      <section className="bg-primary-900 py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl md:text-5xl font-extrabold text-white mb-4">Contact Us</h1>
          <p className="text-lg text-primary-200 max-w-2xl mx-auto">
            Ready to start sourcing from China? Get in touch for a free consultation and quote.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-16">
            <div className="lg:col-span-1 space-y-6">
              <h2 className="text-2xl font-bold text-neutral-900">Get in Touch</h2>
              <p className="text-neutral-500 leading-relaxed">
                Whether you are starting a new sourcing project or need help with an existing one, our team is here to help.
              </p>

              <div className="space-y-5">
                {contactInfo.map((item) => {
                  const Icon = item.icon
                  return (
                    <div key={item.label} className="flex items-start gap-4">
                      <div className="w-10 h-10 bg-primary-50 rounded-lg flex items-center justify-center shrink-0">
                        <Icon className="w-5 h-5 text-primary-500" />
                      </div>
                      <div>
                        <div className="font-semibold text-neutral-900">{item.value}</div>
                        <div className="text-sm text-neutral-500">{item.description}</div>
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>

            <div className="lg:col-span-2">
              <div className="bg-neutral-50 rounded-2xl p-6 md:p-8 border border-neutral-200">
                {status === 'success' ? (
                  <div className="text-center py-12">
                    <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
                    <h3 className="text-2xl font-bold text-neutral-900 mb-2">Thank You!</h3>
                    <p className="text-neutral-500 mb-6">
                      We have received your inquiry. Our team will review your requirements and contact you within 24 hours.
                    </p>
                    <button
                      onClick={() => setStatus('idle')}
                      className="text-primary-500 font-semibold hover:text-primary-600 transition-colors"
                    >
                      Submit another inquiry
                    </button>
                  </div>
                ) : (
                  <form onSubmit={onSubmit} className="space-y-4">
                    <h3 className="text-xl font-bold text-neutral-900 mb-2">Request a Free Sourcing Quote</h3>
                    <p className="text-neutral-500 text-sm mb-6">Fill out the form below and we will get back to you within 24 business hours.</p>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="contact-name" className="block text-sm font-medium text-neutral-700 mb-1">Full Name *</label>
                        <input
                          id="contact-name"
                          name="name"
                          type="text"
                          value={values.name}
                          onChange={onChange}
                          required
                          placeholder="John Smith"
                          className="w-full px-4 py-2.5 rounded-lg border border-neutral-300 bg-white text-neutral-900 placeholder:text-neutral-400 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                        />
                      </div>
                      <div>
                        <label htmlFor="contact-email" className="block text-sm font-medium text-neutral-700 mb-1">Email *</label>
                        <input
                          id="contact-email"
                          name="email"
                          type="email"
                          value={values.email}
                          onChange={onChange}
                          required
                          placeholder="john@company.com"
                          className="w-full px-4 py-2.5 rounded-lg border border-neutral-300 bg-white text-neutral-900 placeholder:text-neutral-400 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="contact-company" className="block text-sm font-medium text-neutral-700 mb-1">Company</label>
                        <input
                          id="contact-company"
                          name="company"
                          type="text"
                          value={values.company}
                          onChange={onChange}
                          placeholder="Your company name"
                          className="w-full px-4 py-2.5 rounded-lg border border-neutral-300 bg-white text-neutral-900 placeholder:text-neutral-400 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                        />
                      </div>
                      <div>
                        <label htmlFor="contact-phone" className="block text-sm font-medium text-neutral-700 mb-1">Phone</label>
                        <input
                          id="contact-phone"
                          name="phone"
                          type="tel"
                          value={values.phone}
                          onChange={onChange}
                          placeholder="+1 234 567 8900"
                          className="w-full px-4 py-2.5 rounded-lg border border-neutral-300 bg-white text-neutral-900 placeholder:text-neutral-400 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="contact-product" className="block text-sm font-medium text-neutral-700 mb-1">Product to Source *</label>
                        <input
                          id="contact-product"
                          name="product"
                          type="text"
                          value={values.product}
                          onChange={onChange}
                          required
                          placeholder="e.g., Bluetooth speakers"
                          className="w-full px-4 py-2.5 rounded-lg border border-neutral-300 bg-white text-neutral-900 placeholder:text-neutral-400 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                        />
                      </div>
                      <div>
                        <label htmlFor="contact-quantity" className="block text-sm font-medium text-neutral-700 mb-1">Estimated Quantity</label>
                        <input
                          id="contact-quantity"
                          name="quantity"
                          type="text"
                          value={values.quantity}
                          onChange={onChange}
                          placeholder="e.g., 1,000 units"
                          className="w-full px-4 py-2.5 rounded-lg border border-neutral-300 bg-white text-neutral-900 placeholder:text-neutral-400 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="contact-message" className="block text-sm font-medium text-neutral-700 mb-1">Details / Requirements *</label>
                      <textarea
                        id="contact-message"
                        name="message"
                        rows={5}
                        value={values.message}
                        onChange={onChange}
                        required
                        placeholder="Describe your product requirements, specifications, target price, timeline, etc."
                        className="w-full px-4 py-2.5 rounded-lg border border-neutral-300 bg-white text-neutral-900 placeholder:text-neutral-400 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent resize-none"
                      />
                    </div>

                    {errorMsg && (
                      <div className="flex items-center gap-2 text-red-600 text-sm">
                        <AlertCircle className="w-4 h-4 shrink-0" />
                        <span>{errorMsg}</span>
                      </div>
                    )}

                    <button
                      type="submit"
                      disabled={status === 'submitting'}
                      className="w-full bg-accent-500 text-white px-6 py-3.5 rounded-lg font-bold text-lg hover:bg-accent-600 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                    >
                      {status === 'submitting' ? (
                        <>
                          <svg className="animate-spin w-5 h-5" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                          </svg>
                          Submitting...
                        </>
                      ) : (
                        <>
                          Get a Free Sourcing Quote
                          <Send className="w-5 h-5" />
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
    </div>
  )
}
