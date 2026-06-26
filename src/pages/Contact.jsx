import React, { useState } from 'react'
import { Mail, Phone, MapPin, Clock, Send, Loader2 } from 'lucide-react'
import { DataClient } from '@strikingly/sdk'
import { STRK_PROJECT_URL, STRK_PROJECT_ANON_KEY } from '@/config.jsx'

const client = new DataClient(STRK_PROJECT_URL, STRK_PROJECT_ANON_KEY)

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
  const [error, setError] = useState(null)

  const onChange = (e) => {
    const { name, value } = e.target
    setValues((v) => ({ ...v, [name]: value }))
  }

  const validate = (v) => {
    if (!v.name.trim()) return 'Name is required'
    if (!v.email.trim()) return 'Email is required'
    if (!/^\S+@\S+\.\S+$/.test(v.email)) return 'Please enter a valid email'
    if (!v.product.trim()) return 'Please describe the product you want to source'
    return null
  }

  const onSubmit = async (e) => {
    e.preventDefault()
    setError(null)
    const err = validate(values)
    if (err) { setError(err); return }

    setStatus('submitting')

    try {
      const { error: insertError } = await client
        .from('SourcingInquiries')
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

      if (insertError) throw insertError

      setStatus('success')
      setValues({ name: '', email: '', company: '', phone: '', product: '', quantity: '', message: '' })
    } catch (err) {
      console.error(err)
      setError(err.message || 'Submission failed. Please try again.')
      setStatus('error')
    }
  }

  return (
    <div>
      <section className="bg-primary py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl md:text-5xl font-extrabold text-white tracking-tight mb-4">
            Contact Us
          </h1>
          <p className="text-slate-300 text-lg max-w-2xl">
            Ready to start sourcing from China? Tell us about your product and requirements. We respond within 24 hours.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <h2 className="text-2xl font-bold text-primary mb-6">Get a Free Sourcing Quote</h2>
              
              {status === 'success' ? (
                <div className="bg-green-50 border border-green-200 rounded-xl p-8 text-center">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Send className="w-8 h-8 text-green-600" />
                  </div>
                  <h3 className="text-xl font-bold text-green-800 mb-2">Inquiry Submitted!</h3>
                  <p className="text-green-700">Thank you for your inquiry. We will review your requirements and respond within 24 hours with a tailored sourcing plan.</p>
                  <button
                    onClick={() => setStatus('idle')}
                    className="mt-6 text-primary font-semibold text-sm hover:text-primary-light transition-colors"
                  >
                    Submit Another Inquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={onSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="ct-name" className="block text-sm font-medium text-slate-700 mb-1.5">Full Name *</label>
                      <input
                        id="ct-name"
                        name="name"
                        type="text"
                        value={values.name}
                        onChange={onChange}
                        required
                        placeholder="John Smith"
                        className="w-full px-4 py-2.5 border border-slate-300 rounded-lg text-sm text-slate-900 bg-white focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition"
                      />
                    </div>
                    <div>
                      <label htmlFor="ct-email" className="block text-sm font-medium text-slate-700 mb-1.5">Email *</label>
                      <input
                        id="ct-email"
                        name="email"
                        type="email"
                        value={values.email}
                        onChange={onChange}
                        required
                        placeholder="john@company.com"
                        className="w-full px-4 py-2.5 border border-slate-300 rounded-lg text-sm text-slate-900 bg-white focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="ct-company" className="block text-sm font-medium text-slate-700 mb-1.5">Company</label>
                      <input
                        id="ct-company"
                        name="company"
                        type="text"
                        value={values.company}
                        onChange={onChange}
                        placeholder="Your Company"
                        className="w-full px-4 py-2.5 border border-slate-300 rounded-lg text-sm text-slate-900 bg-white focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition"
                      />
                    </div>
                    <div>
                      <label htmlFor="ct-phone" className="block text-sm font-medium text-slate-700 mb-1.5">Phone</label>
                      <input
                        id="ct-phone"
                        name="phone"
                        type="tel"
                        value={values.phone}
                        onChange={onChange}
                        placeholder="+1 234 567 890"
                        className="w-full px-4 py-2.5 border border-slate-300 rounded-lg text-sm text-slate-900 bg-white focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="ct-product" className="block text-sm font-medium text-slate-700 mb-1.5">Product You Want to Source *</label>
                    <input
                      id="ct-product"
                      name="product"
                      type="text"
                      value={values.product}
                      onChange={onChange}
                      required
                      placeholder="e.g., Stainless steel water bottles, 500ml"
                      className="w-full px-4 py-2.5 border border-slate-300 rounded-lg text-sm text-slate-900 bg-white focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition"
                    />
                  </div>

                  <div>
                    <label htmlFor="ct-quantity" className="block text-sm font-medium text-slate-700 mb-1.5">Estimated Quantity</label>
                    <input
                      id="ct-quantity"
                      name="quantity"
                      type="text"
                      value={values.quantity}
                      onChange={onChange}
                      placeholder="e.g., 5,000 units"
                      className="w-full px-4 py-2.5 border border-slate-300 rounded-lg text-sm text-slate-900 bg-white focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition"
                    />
                  </div>

                  <div>
                    <label htmlFor="ct-message" className="block text-sm font-medium text-slate-700 mb-1.5">Additional Details</label>
                    <textarea
                      id="ct-message"
                      name="message"
                      rows={5}
                      value={values.message}
                      onChange={onChange}
                      placeholder="Tell us more about your requirements, target price, timeline, quality standards, etc."
                      className="w-full px-4 py-2.5 border border-slate-300 rounded-lg text-sm text-slate-900 bg-white focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition resize-none"
                    />
                  </div>

                  {error && (
                    <div className="p-3 bg-red-50 border border-red-200 rounded-lg">
                      <p className="text-red-700 text-sm">{error}</p>
                    </div>
                  )}

                  <button
                    type="submit"
                    disabled={status === 'submitting'}
                    className="inline-flex items-center gap-2 bg-accent hover:bg-accent-light text-white font-semibold px-7 py-3 rounded-lg transition-colors disabled:opacity-60"
                  >
                    {status === 'submitting' ? (
                      <>
                        <Loader2 className="w-4 h-4 animate-spin" />
                        Submitting...
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        Submit Inquiry
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>

            <div>
              <h2 className="text-2xl font-bold text-primary mb-6">Get in Touch</h2>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center shrink-0">
                    <Mail className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-slate-900 mb-1">Email</h3>
                    <p className="text-slate-600 text-sm">info@ssourcingchina.com</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center shrink-0">
                    <Phone className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-slate-900 mb-1">Phone</h3>
                    <p className="text-slate-600 text-sm">+86 755 1234 5678</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-slate-900 mb-1">Office</h3>
                    <p className="text-slate-600 text-sm">Shenzhen, Guangdong, China</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center shrink-0">
                    <Clock className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-slate-900 mb-1">Business Hours</h3>
                    <p className="text-slate-600 text-sm">Mon-Fri: 9:00 AM - 6:00 PM (CST)</p>
                    <p className="text-slate-600 text-sm">Sat: 9:00 AM - 1:00 PM (CST)</p>
                  </div>
                </div>
              </div>

              <div className="mt-8 bg-slate-50 border border-slate-200 rounded-xl p-6">
                <h3 className="text-sm font-semibold text-primary mb-3">What Happens Next?</h3>
                <ol className="space-y-2.5">
                  {[
                    'We review your inquiry within 24 hours',
                    'We ask clarifying questions if needed',
                    'We provide a tailored sourcing plan and quote',
                    'You decide how to proceed — no obligation',
                  ].map((step, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <span className="w-6 h-6 bg-primary text-white text-xs font-bold rounded-full flex items-center justify-center shrink-0">
                        {i + 1}
                      </span>
                      <span className="text-slate-600 text-sm">{step}</span>
                    </li>
                  ))}
                </ol>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
