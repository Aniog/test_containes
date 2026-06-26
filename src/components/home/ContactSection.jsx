import React, { useState } from 'react'
import { DataClient } from '@strikingly/sdk'
import { STRK_PROJECT_URL, STRK_PROJECT_ANON_KEY } from '@/config.jsx'
import { Phone, Mail, MapPin, Send, CheckCircle, AlertCircle } from 'lucide-react'

const client = new DataClient(STRK_PROJECT_URL, STRK_PROJECT_ANON_KEY)

const productOptions = [
  'Double Folding Machine',
  'Double Folder',
  'Sheet Metal Folder',
  'Sheet Metal Folding Machine',
  'Metal Folder',
  'Metal Folder Machine',
  'Metal Folding Machine',
  'General Inquiry',
]

const contactInfo = [
  {
    icon: MapPin,
    label: 'Address',
    value: 'Industrial Zone, Manufacturing District',
  },
  {
    icon: Phone,
    label: 'Phone',
    value: '+1 (234) 567-890',
    href: 'tel:+1234567890',
  },
  {
    icon: Mail,
    label: 'Email',
    value: 'info@artitect.com',
    href: 'mailto:info@artitect.com',
  },
]

export default function ContactSection() {
  const [values, setValues] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    product_interest: 'General Inquiry',
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
        .from('ContactFormResponse')
        .insert({
          data: {
            name: values.name,
            email: values.email,
            company: values.company,
            phone: values.phone,
            product_interest: values.product_interest,
            message: values.message,
            submitted_at: new Date().toISOString(),
          },
        })

      if (insertError || response?.success === false) {
        const errMsg = Array.isArray(response?.errors)
          ? response.errors.join(', ')
          : insertError?.message || 'Submission failed'
        throw new Error(errMsg)
      }

      setStatus('success')
      setValues({
        name: '',
        email: '',
        company: '',
        phone: '',
        product_interest: 'General Inquiry',
        message: '',
      })
    } catch (err) {
      setError(err.message || 'Submission failed')
      setStatus('error')
    }
  }

  return (
    <section id="contact" className="py-16 md:py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
          <span className="text-amber-600 font-semibold text-sm uppercase tracking-wider">Contact Us</span>
          <h2 className="mt-3 text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight">
            Get in Touch
          </h2>
          <p className="mt-4 text-lg text-slate-600 leading-relaxed">
            Ready to discuss your sheet metal folding needs? Contact us for a free consultation
            and customized quote.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-12">
          {/* Contact Info */}
          <div className="lg:col-span-2">
            <div className="bg-slate-900 text-white rounded-2xl p-8 h-full">
              <h3 className="text-xl font-bold mb-6">Contact Information</h3>

              <ul className="space-y-6">
                {contactInfo.map((info) => (
                  <li key={info.label} className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-slate-800 rounded-lg flex items-center justify-center shrink-0">
                      <info.icon className="w-5 h-5 text-amber-500" />
                    </div>
                    <div>
                      <div className="text-sm text-slate-400">{info.label}</div>
                      {info.href ? (
                        <a href={info.href} className="text-white hover:text-amber-500 transition-colors">
                          {info.value}
                        </a>
                      ) : (
                        <span className="text-white">{info.value}</span>
                      )}
                    </div>
                  </li>
                ))}
              </ul>

              <div className="mt-10 pt-8 border-t border-slate-700">
                <h4 className="font-semibold mb-3">Business Hours</h4>
                <ul className="space-y-2 text-sm text-slate-400">
                  <li>Monday - Friday: 8:00 AM - 6:00 PM</li>
                  <li>Saturday: 9:00 AM - 2:00 PM</li>
                  <li>Sunday: Closed</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-3">
            <form
              onSubmit={onSubmit}
              className="bg-white rounded-2xl border border-slate-200 shadow-sm p-8"
              aria-busy={status === 'submitting'}
            >
              <h3 className="text-xl font-bold text-slate-900 mb-6">Request a Quote</h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                {/* Name */}
                <div>
                  <label htmlFor="contact-name" className="block text-sm font-medium text-slate-700 mb-1.5">
                    Full Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    id="contact-name"
                    name="name"
                    type="text"
                    value={values.name}
                    onChange={onChange}
                    required
                    placeholder="John Smith"
                    className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:border-amber-500 focus:ring-2 focus:ring-amber-500/20 outline-none transition-colors text-slate-900"
                  />
                </div>

                {/* Email */}
                <div>
                  <label htmlFor="contact-email" className="block text-sm font-medium text-slate-700 mb-1.5">
                    Email <span className="text-red-500">*</span>
                  </label>
                  <input
                    id="contact-email"
                    name="email"
                    type="email"
                    value={values.email}
                    onChange={onChange}
                    required
                    placeholder="john@company.com"
                    className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:border-amber-500 focus:ring-2 focus:ring-amber-500/20 outline-none transition-colors text-slate-900"
                  />
                </div>

                {/* Company */}
                <div>
                  <label htmlFor="contact-company" className="block text-sm font-medium text-slate-700 mb-1.5">
                    Company
                  </label>
                  <input
                    id="contact-company"
                    name="company"
                    type="text"
                    value={values.company}
                    onChange={onChange}
                    placeholder="Your Company Ltd."
                    className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:border-amber-500 focus:ring-2 focus:ring-amber-500/20 outline-none transition-colors text-slate-900"
                  />
                </div>

                {/* Phone */}
                <div>
                  <label htmlFor="contact-phone" className="block text-sm font-medium text-slate-700 mb-1.5">
                    Phone
                  </label>
                  <input
                    id="contact-phone"
                    name="phone"
                    type="tel"
                    value={values.phone}
                    onChange={onChange}
                    placeholder="+1 (234) 567-890"
                    className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:border-amber-500 focus:ring-2 focus:ring-amber-500/20 outline-none transition-colors text-slate-900"
                  />
                </div>

                {/* Product Interest */}
                <div className="sm:col-span-2">
                  <label htmlFor="contact-product" className="block text-sm font-medium text-slate-700 mb-1.5">
                    Product Interest
                  </label>
                  <select
                    id="contact-product"
                    name="product_interest"
                    value={values.product_interest}
                    onChange={onChange}
                    className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:border-amber-500 focus:ring-2 focus:ring-amber-500/20 outline-none transition-colors text-slate-900 bg-white"
                  >
                    {productOptions.map((opt) => (
                      <option key={opt} value={opt}>{opt}</option>
                    ))}
                  </select>
                </div>

                {/* Message */}
                <div className="sm:col-span-2">
                  <label htmlFor="contact-message" className="block text-sm font-medium text-slate-700 mb-1.5">
                    Message <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    id="contact-message"
                    name="message"
                    rows={5}
                    value={values.message}
                    onChange={onChange}
                    required
                    placeholder="Tell us about your requirements, material thickness, sheet dimensions, etc."
                    className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:border-amber-500 focus:ring-2 focus:ring-amber-500/20 outline-none transition-colors text-slate-900 resize-none"
                  />
                </div>
              </div>

              {/* Submit */}
              <button
                type="submit"
                disabled={status === 'submitting'}
                className="mt-6 w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-amber-600 hover:bg-amber-700 disabled:bg-amber-400 text-white px-8 py-3.5 rounded-lg font-semibold transition-colors"
              >
                {status === 'submitting' ? (
                  <>Sending...</>
                ) : (
                  <>
                    <Send className="w-4 h-4" />
                    Send Inquiry
                  </>
                )}
              </button>

              {/* Status Messages */}
              {status === 'success' && (
                <div className="mt-4 flex items-center gap-2 text-green-700 bg-green-50 px-4 py-3 rounded-lg" role="status">
                  <CheckCircle className="w-5 h-5 shrink-0" />
                  <span>Thank you! We have received your inquiry and will respond shortly.</span>
                </div>
              )}

              {status === 'error' && error && (
                <div className="mt-4 flex items-center gap-2 text-red-700 bg-red-50 px-4 py-3 rounded-lg" role="alert">
                  <AlertCircle className="w-5 h-5 shrink-0" />
                  <span>{error}</span>
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
