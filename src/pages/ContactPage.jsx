import React, { useState } from 'react'
import { Mail, Phone, MapPin, Clock, Send, CheckCircle } from 'lucide-react'

export default function ContactPage() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    company: '',
    product: '',
    quantity: '',
    message: '',
  })
  const [status, setStatus] = useState('idle')
  const [errors, setErrors] = useState({})

  const validate = () => {
    const errs = {}
    if (!form.name.trim()) errs.name = 'Name is required'
    if (!form.email.trim()) errs.email = 'Email is required'
    else if (!/^\S+@\S+\.\S+$/.test(form.email)) errs.email = 'Enter a valid email'
    if (!form.product.trim()) errs.product = 'Product description is required'
    if (!form.message.trim()) errs.message = 'Message is required'
    return errs
  }

  const onChange = (e) => {
    const { name, value } = e.target
    setForm((f) => ({ ...f, [name]: value }))
    if (errors[name]) setErrors((e) => ({ ...e, [name]: undefined }))
  }

  const onSubmit = (e) => {
    e.preventDefault()
    const errs = validate()
    if (Object.keys(errs).length > 0) {
      setErrors(errs)
      return
    }
    setStatus('submitting')
    // Simulate submission
    setTimeout(() => {
      setStatus('success')
      setForm({ name: '', email: '', company: '', product: '', quantity: '', message: '' })
    }, 1500)
  }

  return (
    <div>
      {/* Hero */}
      <section className="bg-slate-900 text-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl md:text-4xl font-extrabold">Contact Us</h1>
          <p className="mt-4 text-lg text-slate-300 max-w-2xl">
            Tell us what you need and we will get back to you within 24 hours.
          </p>
        </div>
      </section>

      {/* Contact Form + Info */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16">
            {/* Form */}
            <div className="lg:col-span-3">
              <h2 className="text-xl font-bold text-slate-900 mb-6">Get a Free Sourcing Quote</h2>

              {status === 'success' ? (
                <div className="p-6 rounded-xl bg-green-50 border border-green-200 text-center">
                  <CheckCircle className="w-12 h-12 text-green-600 mx-auto mb-4" />
                  <h3 className="text-lg font-semibold text-green-900">Thank You!</h3>
                  <p className="mt-2 text-green-700">
                    We have received your sourcing request and will respond within 24 hours.
                  </p>
                  <button
                    className="mt-4 px-4 py-2 text-sm font-medium text-green-700 underline"
                    onClick={() => setStatus('idle')}
                  >
                    Submit another request
                  </button>
                </div>
              ) : (
                <form onSubmit={onSubmit} className="space-y-5" aria-busy={status === 'submitting'}>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-1">
                        Name <span className="text-red-500">*</span>
                      </label>
                      <input
                        id="name"
                        name="name"
                        type="text"
                        value={form.name}
                        onChange={onChange}
                        className={`w-full px-4 py-2.5 rounded-lg border text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent ${
                          errors.name ? 'border-red-400' : 'border-slate-300'
                        }`}
                        placeholder="Your name"
                      />
                      {errors.name && <p className="mt-1 text-xs text-red-500">{errors.name}</p>}
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-1">
                        Email <span className="text-red-500">*</span>
                      </label>
                      <input
                        id="email"
                        name="email"
                        type="email"
                        value={form.email}
                        onChange={onChange}
                        className={`w-full px-4 py-2.5 rounded-lg border text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent ${
                          errors.email ? 'border-red-400' : 'border-slate-300'
                        }`}
                        placeholder="you@company.com"
                      />
                      {errors.email && <p className="mt-1 text-xs text-red-500">{errors.email}</p>}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label htmlFor="company" className="block text-sm font-medium text-slate-700 mb-1">
                        Company
                      </label>
                      <input
                        id="company"
                        name="company"
                        type="text"
                        value={form.company}
                        onChange={onChange}
                        className="w-full px-4 py-2.5 rounded-lg border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        placeholder="Your company name"
                      />
                    </div>
                    <div>
                      <label htmlFor="quantity" className="block text-sm font-medium text-slate-700 mb-1">
                        Estimated Quantity
                      </label>
                      <input
                        id="quantity"
                        name="quantity"
                        type="text"
                        value={form.quantity}
                        onChange={onChange}
                        className="w-full px-4 py-2.5 rounded-lg border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        placeholder="e.g., 1000 units"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="product" className="block text-sm font-medium text-slate-700 mb-1">
                      Product Description <span className="text-red-500">*</span>
                    </label>
                    <input
                      id="product"
                      name="product"
                      type="text"
                      value={form.product}
                      onChange={onChange}
                      className={`w-full px-4 py-2.5 rounded-lg border text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent ${
                        errors.product ? 'border-red-400' : 'border-slate-300'
                      }`}
                      placeholder="What product are you looking to source?"
                    />
                    {errors.product && <p className="mt-1 text-xs text-red-500">{errors.product}</p>}
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-1">
                      Additional Details <span className="text-red-500">*</span>
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      value={form.message}
                      onChange={onChange}
                      className={`w-full px-4 py-2.5 rounded-lg border text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none ${
                        errors.message ? 'border-red-400' : 'border-slate-300'
                      }`}
                      placeholder="Tell us more about your requirements: specifications, target price, timeline, quality standards, etc."
                    />
                    {errors.message && <p className="mt-1 text-xs text-red-500">{errors.message}</p>}
                  </div>

                  <button
                    type="submit"
                    disabled={status === 'submitting'}
                    className="inline-flex items-center px-6 py-3 bg-blue-700 text-white font-semibold rounded-lg hover:bg-blue-800 transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
                  >
                    {status === 'submitting' ? (
                      <>
                        <span className="animate-spin mr-2">⏳</span>
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4 mr-2" />
                        Submit Sourcing Request
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>

            {/* Contact Info */}
            <div className="lg:col-span-2">
              <h2 className="text-xl font-bold text-slate-900 mb-6">Contact Information</h2>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-blue-50 flex items-center justify-center flex-shrink-0">
                    <Mail className="w-5 h-5 text-blue-700" />
                  </div>
                  <div>
                    <h3 className="font-medium text-slate-900">Email</h3>
                    <a href="mailto:info@ssourcingchina.com" className="text-sm text-blue-700 hover:text-blue-800">
                      info@ssourcingchina.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-blue-50 flex items-center justify-center flex-shrink-0">
                    <Phone className="w-5 h-5 text-blue-700" />
                  </div>
                  <div>
                    <h3 className="font-medium text-slate-900">Phone / WhatsApp</h3>
                    <a href="tel:+8675512345678" className="text-sm text-blue-700 hover:text-blue-800">
                      +86 755 1234 5678
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-blue-50 flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-5 h-5 text-blue-700" />
                  </div>
                  <div>
                    <h3 className="font-medium text-slate-900">Office</h3>
                    <p className="text-sm text-slate-600">
                      Shenzhen, Guangdong, China
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-blue-50 flex items-center justify-center flex-shrink-0">
                    <Clock className="w-5 h-5 text-blue-700" />
                  </div>
                  <div>
                    <h3 className="font-medium text-slate-900">Business Hours</h3>
                    <p className="text-sm text-slate-600">
                      Monday - Friday: 9:00 AM - 6:00 PM (CST)
                    </p>
                    <p className="text-sm text-slate-600">
                      Saturday: 9:00 AM - 1:00 PM (CST)
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-8 p-5 rounded-xl bg-slate-50 border border-slate-200">
                <h3 className="font-semibold text-slate-900 mb-2">What Happens Next?</h3>
                <ol className="text-sm text-slate-600 space-y-2">
                  <li className="flex gap-2">
                    <span className="font-medium text-blue-700">1.</span>
                    We review your sourcing request
                  </li>
                  <li className="flex gap-2">
                    <span className="font-medium text-blue-700">2.</span>
                    We respond within 24 hours with initial feedback
                  </li>
                  <li className="flex gap-2">
                    <span className="font-medium text-blue-700">3.</span>
                    We provide a detailed sourcing plan and quote
                  </li>
                  <li className="flex gap-2">
                    <span className="font-medium text-blue-700">4.</span>
                    We begin supplier research upon your approval
                  </li>
                </ol>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
