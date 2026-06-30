import React, { useState } from 'react'
import { Mail, Phone, MapPin, Clock, Send, CheckCircle } from 'lucide-react'

const initialForm = {
  name: '',
  email: '',
  company: '',
  phone: '',
  product: '',
  quantity: '',
  budget: '',
  timeline: '',
  message: '',
}

export default function Contact() {
  const [form, setForm] = useState(initialForm)
  const [status, setStatus] = useState('idle')
  const [error, setError] = useState(null)

  const handleChange = (e) => {
    const { name, value } = e.target
    setForm((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setError(null)
    setStatus('submitting')

    try {
      // Simulate submission
      await new Promise((r) => setTimeout(r, 1000))
      setStatus('success')
      setForm(initialForm)
    } catch (err) {
      setError(err.message || 'Something went wrong. Please try again.')
      setStatus('error')
    }
  }

  const contactInfo = [
    { icon: Mail, label: 'Email', value: 'info@ssourcingchina.com', href: 'mailto:info@ssourcingchina.com' },
    { icon: Phone, label: 'Phone', value: '+86 20 1234 5678', href: 'tel:+862012345678' },
    { icon: MapPin, label: 'Address', value: 'Guangzhou, Guangdong, China', href: null },
    { icon: Clock, label: 'Response Time', value: 'Within 24 hours on business days', href: null },
  ]

  return (
    <div>
      {/* Page Header */}
      <section className="bg-navy-900 py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl lg:text-5xl font-bold text-white mb-6">
              Get a Free Sourcing Quote
            </h1>
            <p className="text-lg lg:text-xl text-slate-300 leading-relaxed">
              Tell us about your product sourcing needs and we will get back to you 
              within 24 hours with a free assessment and quote.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16">
            {/* Contact Info */}
            <div className="lg:col-span-2">
              <h2 className="text-2xl font-bold text-navy-900 mb-6">
                Contact Information
              </h2>
              <p className="text-slate-600 text-sm mb-8">
                We are based in Guangzhou, the heart of China&apos;s manufacturing 
                and trade industry. Reach out to us through any of the channels below.
              </p>

              <div className="space-y-6">
                {contactInfo.map((item) => {
                  const Icon = item.icon
                  return (
                    <div key={item.label} className="flex items-start gap-4">
                      <div className="w-10 h-10 bg-navy-50 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Icon className="w-5 h-5 text-navy-700" />
                      </div>
                      <div>
                        <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider">{item.label}</p>
                        {item.href ? (
                          <a href={item.href} className="text-sm text-navy-700 hover:text-amber-600 font-medium transition-colors">
                            {item.value}
                          </a>
                        ) : (
                          <p className="text-sm text-navy-700">{item.value}</p>
                        )}
                      </div>
                    </div>
                  )
                })}
              </div>

              <div className="mt-10 p-6 bg-navy-50 rounded-xl">
                <h3 className="font-semibold text-navy-900 mb-2">What Happens After You Submit?</h3>
                <ol className="space-y-3 text-sm text-slate-600">
                  <li className="flex items-start gap-2">
                    <span className="w-5 h-5 bg-navy-200 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-xs font-bold text-navy-700">1</span>
                    </span>
                    We review your requirements within 24 hours
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-5 h-5 bg-navy-200 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-xs font-bold text-navy-700">2</span>
                    </span>
                    We contact you to discuss details and clarify questions
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-5 h-5 bg-navy-200 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-xs font-bold text-navy-700">3</span>
                    </span>
                    We provide a free sourcing assessment and quote
                  </li>
                </ol>
              </div>
            </div>

            {/* Form */}
            <div className="lg:col-span-3">
              {status === 'success' ? (
                <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-10 text-center">
                  <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                    <CheckCircle className="w-10 h-10 text-green-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-navy-900 mb-3">Thank You!</h3>
                  <p className="text-slate-600 max-w-md mx-auto">
                    We have received your inquiry and will get back to you within 24 hours 
                    with a free sourcing assessment and quote.
                  </p>
                  <button
                    onClick={() => setStatus('idle')}
                    className="mt-6 text-navy-700 font-semibold hover:text-navy-900 text-sm transition-colors"
                  >
                    Submit Another Inquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="bg-white rounded-xl border border-gray-100 shadow-sm p-6 lg:p-8">
                  <h3 className="text-xl font-bold text-navy-900 mb-6">Sourcing Inquiry Form</h3>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-5">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-navy-900 mb-1">Full Name *</label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        value={form.name}
                        onChange={handleChange}
                        className="w-full px-4 py-2.5 rounded-lg border border-gray-300 text-sm focus:ring-2 focus:ring-amber-500 focus:border-amber-500 outline-none"
                        placeholder="John Smith"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-navy-900 mb-1">Email Address *</label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        value={form.email}
                        onChange={handleChange}
                        className="w-full px-4 py-2.5 rounded-lg border border-gray-300 text-sm focus:ring-2 focus:ring-amber-500 focus:border-amber-500 outline-none"
                        placeholder="john@company.com"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-5">
                    <div>
                      <label htmlFor="company" className="block text-sm font-medium text-navy-900 mb-1">Company Name</label>
                      <input
                        type="text"
                        id="company"
                        name="company"
                        value={form.company}
                        onChange={handleChange}
                        className="w-full px-4 py-2.5 rounded-lg border border-gray-300 text-sm focus:ring-2 focus:ring-amber-500 focus:border-amber-500 outline-none"
                        placeholder="Your company name"
                      />
                    </div>
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-navy-900 mb-1">Phone Number</label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={form.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-2.5 rounded-lg border border-gray-300 text-sm focus:ring-2 focus:ring-amber-500 focus:border-amber-500 outline-none"
                        placeholder="+1 234 567 8900"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-5">
                    <div>
                      <label htmlFor="product" className="block text-sm font-medium text-navy-900 mb-1">Product to Source *</label>
                      <input
                        type="text"
                        id="product"
                        name="product"
                        required
                        value={form.product}
                        onChange={handleChange}
                        className="w-full px-4 py-2.5 rounded-lg border border-gray-300 text-sm focus:ring-2 focus:ring-amber-500 focus:border-amber-500 outline-none"
                        placeholder="e.g. Bluetooth speakers"
                      />
                    </div>
                    <div>
                      <label htmlFor="quantity" className="block text-sm font-medium text-navy-900 mb-1">Estimated Quantity</label>
                      <input
                        type="text"
                        id="quantity"
                        name="quantity"
                        value={form.quantity}
                        onChange={handleChange}
                        className="w-full px-4 py-2.5 rounded-lg border border-gray-300 text-sm focus:ring-2 focus:ring-amber-500 focus:border-amber-500 outline-none"
                        placeholder="e.g. 1,000 units"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-5">
                    <div>
                      <label htmlFor="budget" className="block text-sm font-medium text-navy-900 mb-1">Target Budget</label>
                      <select
                        id="budget"
                        name="budget"
                        value={form.budget}
                        onChange={handleChange}
                        className="w-full px-4 py-2.5 rounded-lg border border-gray-300 text-sm focus:ring-2 focus:ring-amber-500 focus:border-amber-500 outline-none bg-white"
                      >
                        <option value="">Select budget range</option>
                        <option value="under-5000">Under $5,000</option>
                        <option value="5000-25000">$5,000 - $25,000</option>
                        <option value="25000-100000">$25,000 - $100,000</option>
                        <option value="100000-plus">$100,000+</option>
                        <option value="not-sure">Not sure yet</option>
                      </select>
                    </div>
                    <div>
                      <label htmlFor="timeline" className="block text-sm font-medium text-navy-900 mb-1">Target Timeline</label>
                      <select
                        id="timeline"
                        name="timeline"
                        value={form.timeline}
                        onChange={handleChange}
                        className="w-full px-4 py-2.5 rounded-lg border border-gray-300 text-sm focus:ring-2 focus:ring-amber-500 focus:border-amber-500 outline-none bg-white"
                      >
                        <option value="">Select timeline</option>
                        <option value="urgent">Urgent (within 1 month)</option>
                        <option value="standard">Standard (1-3 months)</option>
                        <option value="relaxed">Relaxed (3-6 months)</option>
                        <option value="exploring">Just exploring options</option>
                      </select>
                    </div>
                  </div>

                  <div className="mb-5">
                    <label htmlFor="message" className="block text-sm font-medium text-navy-900 mb-1">Project Details</label>
                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      value={form.message}
                      onChange={handleChange}
                      className="w-full px-4 py-2.5 rounded-lg border border-gray-300 text-sm focus:ring-2 focus:ring-amber-500 focus:border-amber-500 outline-none resize-none"
                      placeholder="Please describe your product, specifications, quality requirements, target price, and any other relevant details..."
                    />
                  </div>

                  {error && (
                    <p className="text-sm text-red-600 bg-red-50 rounded-lg px-4 py-2 mb-5">{error}</p>
                  )}

                  <button
                    type="submit"
                    disabled={status === 'submitting'}
                    className="w-full flex items-center justify-center gap-2 bg-amber-500 hover:bg-amber-600 disabled:bg-amber-300 text-white font-semibold px-6 py-3.5 rounded-lg text-base transition-colors"
                  >
                    {status === 'submitting' ? (
                      'Submitting...'
                    ) : (
                      <>
                        Get a Free Sourcing Quote
                        <Send className="w-4 h-4" />
                      </>
                    )}
                  </button>

                  <p className="text-xs text-slate-400 text-center mt-4">
                    We respect your privacy. Your information will not be shared with third parties.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}