import { useState } from 'react'
import { Send, CheckCircle } from 'lucide-react'

export default function InquirySection() {
  const [submitted, setSubmitted] = useState(false)
  const [form, setForm] = useState({
    name: '',
    email: '',
    company: '',
    product: '',
    quantity: '',
    message: '',
  })

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <section className="py-20 bg-navy text-white">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Get a Free Sourcing Quote
            </h2>
            <p className="text-lg text-gray-300 mb-8 leading-relaxed">
              Tell us what you need and we will get back to you within 24 hours with a tailored sourcing plan and quote. No obligations, no upfront fees.
            </p>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <CheckCircle className="w-5 h-5 text-emerald-400 shrink-0" />
                <span className="text-gray-300">Free initial consultation</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle className="w-5 h-5 text-emerald-400 shrink-0" />
                <span className="text-gray-300">Supplier shortlist within 48 hours</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle className="w-5 h-5 text-emerald-400 shrink-0" />
                <span className="text-gray-300">Transparent pricing, no hidden fees</span>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="bg-white text-gray-900 rounded-lg p-6 md:p-8">
            {submitted ? (
              <div className="text-center py-10">
                <CheckCircle className="w-12 h-12 text-emerald-500 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-navy mb-2">Quote Request Received</h3>
                <p className="text-gray-600">
                  Thank you for reaching out. Our team will review your request and contact you within 24 hours.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Full Name *</label>
                    <input
                      type="text"
                      name="name"
                      required
                      value={form.name}
                      onChange={handleChange}
                      className="w-full px-3 py-2.5 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent text-sm"
                      placeholder="John Smith"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Email *</label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={form.email}
                      onChange={handleChange}
                      className="w-full px-3 py-2.5 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent text-sm"
                      placeholder="john@company.com"
                    />
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Company</label>
                    <input
                      type="text"
                      name="company"
                      value={form.company}
                      onChange={handleChange}
                      className="w-full px-3 py-2.5 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent text-sm"
                      placeholder="Your Company Ltd."
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Product to Source</label>
                    <input
                      type="text"
                      name="product"
                      value={form.product}
                      onChange={handleChange}
                      className="w-full px-3 py-2.5 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent text-sm"
                      placeholder="e.g. Bluetooth speakers"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Estimated Quantity</label>
                  <input
                    type="text"
                    name="quantity"
                    value={form.quantity}
                    onChange={handleChange}
                    className="w-full px-3 py-2.5 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent text-sm"
                    placeholder="e.g. 5,000 units"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                  <textarea
                    name="message"
                    rows={4}
                    value={form.message}
                    onChange={handleChange}
                    className="w-full px-3 py-2.5 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent text-sm resize-none"
                    placeholder="Describe your requirements, specifications, target price, timeline, etc."
                  />
                </div>
                <button
                  type="submit"
                  className="w-full inline-flex items-center justify-center gap-2 bg-accent hover:bg-accent-600 text-white font-medium px-6 py-3 rounded-md transition-colors"
                >
                  <Send className="w-4 h-4" />
                  Request Free Quote
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
