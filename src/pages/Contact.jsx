import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Mail, Phone, MapPin, Clock, ArrowRight, Send } from 'lucide-react'

const ContactPage = () => {
  const [form, setForm] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    product: '',
    quantity: '',
    message: '',
  })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <div>
      <section className="bg-primary-800 text-white py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">Contact Us</h1>
          <p className="text-primary-100 max-w-2xl text-lg">
            Get a free sourcing quote or ask us anything about sourcing from China. We respond within 24 hours.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 md:gap-12">
            <div className="lg:col-span-2">
              {submitted ? (
                <div className="bg-primary-50 rounded-lg p-8 text-center">
                  <h2 className="text-2xl font-bold text-neutral-800 mb-3">Thank You!</h2>
                  <p className="text-neutral-500 mb-4">
                    We have received your inquiry. Our team will review your requirements and respond within 24 hours with a detailed sourcing plan.
                  </p>
                  <Link
                    to="/"
                    className="inline-flex items-center gap-2 text-primary-500 hover:text-primary-600 font-medium no-underline transition-colors"
                  >
                    Back to Home
                  </Link>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <h2 className="text-xl font-bold text-neutral-800 mb-2">Sourcing Inquiry Form</h2>
                  <p className="text-sm text-neutral-500 mb-6">Fill out the form below and we will get back to you within 24 hours.</p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="c-name" className="block text-sm font-medium text-neutral-700 mb-1">Name *</label>
                      <input
                        id="c-name"
                        name="name"
                        type="text"
                        required
                        value={form.name}
                        onChange={handleChange}
                        className="w-full px-4 py-2.5 rounded-md border border-neutral-300 text-neutral-800 bg-white focus:border-primary-500 focus:outline-none"
                        placeholder="Your name"
                      />
                    </div>
                    <div>
                      <label htmlFor="c-email" className="block text-sm font-medium text-neutral-700 mb-1">Email *</label>
                      <input
                        id="c-email"
                        name="email"
                        type="email"
                        required
                        value={form.email}
                        onChange={handleChange}
                        className="w-full px-4 py-2.5 rounded-md border border-neutral-300 text-neutral-800 bg-white focus:border-primary-500 focus:outline-none"
                        placeholder="you@company.com"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="c-company" className="block text-sm font-medium text-neutral-700 mb-1">Company</label>
                      <input
                        id="c-company"
                        name="company"
                        type="text"
                        value={form.company}
                        onChange={handleChange}
                        className="w-full px-4 py-2.5 rounded-md border border-neutral-300 text-neutral-800 bg-white focus:border-primary-500 focus:outline-none"
                        placeholder="Your company name"
                      />
                    </div>
                    <div>
                      <label htmlFor="c-phone" className="block text-sm font-medium text-neutral-700 mb-1">Phone</label>
                      <input
                        id="c-phone"
                        name="phone"
                        type="tel"
                        value={form.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-2.5 rounded-md border border-neutral-300 text-neutral-800 bg-white focus:border-primary-500 focus:outline-none"
                        placeholder="+1 234 567 8900"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="c-product" className="block text-sm font-medium text-neutral-700 mb-1">Product You Need *</label>
                      <input
                        id="c-product"
                        name="product"
                        type="text"
                        required
                        value={form.product}
                        onChange={handleChange}
                        className="w-full px-4 py-2.5 rounded-md border border-neutral-300 text-neutral-800 bg-white focus:border-primary-500 focus:outline-none"
                        placeholder="e.g., stainless steel fasteners"
                      />
                    </div>
                    <div>
                      <label htmlFor="c-quantity" className="block text-sm font-medium text-neutral-700 mb-1">Estimated Quantity</label>
                      <input
                        id="c-quantity"
                        name="quantity"
                        type="text"
                        value={form.quantity}
                        onChange={handleChange}
                        className="w-full px-4 py-2.5 rounded-md border border-neutral-300 text-neutral-800 bg-white focus:border-primary-500 focus:outline-none"
                        placeholder="e.g., 10,000 units"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="c-message" className="block text-sm font-medium text-neutral-700 mb-1">Additional Details</label>
                    <textarea
                      id="c-message"
                      name="message"
                      rows={5}
                      value={form.message}
                      onChange={handleChange}
                      className="w-full px-4 py-2.5 rounded-md border border-neutral-300 text-neutral-800 bg-white focus:border-primary-500 focus:outline-none resize-y"
                      placeholder="Specifications, target price, timeline, quality requirements..."
                    />
                  </div>

                  <button
                    type="submit"
                    className="flex items-center justify-center gap-2 bg-accent-500 hover:bg-accent-600 text-white font-semibold px-6 py-3 rounded-lg transition-colors border-0 cursor-pointer"
                  >
                    Submit Inquiry
                    <ArrowRight className="w-5 h-5" />
                  </button>
                </form>
              )}
            </div>

            <div>
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold text-neutral-800 mb-4">Contact Information</h3>
                  <ul className="space-y-4">
                    <li className="flex items-start gap-3">
                      <Mail className="w-5 h-5 text-primary-500 mt-0.5" />
                      <div>
                        <div className="text-sm font-medium text-neutral-700">Email</div>
                        <div className="text-sm text-neutral-500">info@ssourcingchina.com</div>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <Phone className="w-5 h-5 text-primary-500 mt-0.5" />
                      <div>
                        <div className="text-sm font-medium text-neutral-700">Phone</div>
                        <div className="text-sm text-neutral-500">+86 755 8888 0000</div>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <MapPin className="w-5 h-5 text-primary-500 mt-0.5" />
                      <div>
                        <div className="text-sm font-medium text-neutral-700">Office</div>
                        <div className="text-sm text-neutral-500">Shenzhen, Guangdong, China</div>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <Clock className="w-5 h-5 text-primary-500 mt-0.5" />
                      <div>
                        <div className="text-sm font-medium text-neutral-700">Response Time</div>
                        <div className="text-sm text-neutral-500">Within 24 hours</div>
                      </div>
                    </li>
                  </ul>
                </div>

                <div className="p-5 rounded-lg bg-primary-50 border border-primary-100">
                  <h3 className="text-base font-semibold text-neutral-800 mb-2">What Happens Next?</h3>
                  <ul className="space-y-2 text-sm text-neutral-600">
                    <li className="flex items-start gap-2">
                      <Send className="w-4 h-4 text-primary-500 mt-0.5" />
                      We review your requirements
                    </li>
                    <li className="flex items-start gap-2">
                      <Send className="w-4 h-4 text-primary-500 mt-0.5" />
                      We search our supplier network
                    </li>
                    <li className="flex items-start gap-2">
                      <Send className="w-4 h-4 text-primary-500 mt-0.5" />
                      We send you a sourcing plan and quote
                    </li>
                    <li className="flex items-start gap-2">
                      <Send className="w-4 h-4 text-primary-500 mt-0.5" />
                      No commitment required
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default ContactPage
