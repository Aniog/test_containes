import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Send, ArrowRight } from 'lucide-react'

const InquiryForm = () => {
  const [form, setForm] = useState({
    name: '',
    email: '',
    company: '',
    product: '',
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
    <section className="py-16 md:py-24 bg-primary-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Get a Free Sourcing Quote</h2>
            <p className="text-primary-100 leading-relaxed mb-6">
              Tell us what you are looking for. Our team will review your requirements and respond within 24 hours with a detailed sourcing plan and quote.
            </p>
            <div className="space-y-3 text-sm text-primary-200">
              <p className="flex items-center gap-2">
                <Send className="w-4 h-4 text-accent-400" />
                Free consultation — no commitment required
              </p>
              <p className="flex items-center gap-2">
                <Send className="w-4 h-4 text-accent-400" />
                Response within 24 hours
              </p>
              <p className="flex items-center gap-2">
                <Send className="w-4 h-4 text-accent-400" />
                Detailed supplier recommendations included
              </p>
            </div>
          </div>

          {submitted ? (
            <div className="bg-white/10 rounded-lg p-8 text-center">
              <h3 className="text-xl font-semibold mb-3">Thank You!</h3>
              <p className="text-primary-100 mb-4">
                We have received your inquiry. Our team will contact you within 24 hours.
              </p>
              <Link
                to="/"
                className="inline-flex items-center gap-2 text-accent-400 hover:text-accent-300 font-medium no-underline transition-colors"
              >
                Back to Home
              </Link>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="bg-white/10 rounded-lg p-6 md:p-8">
              <div className="space-y-4">
                <div>
                  <label htmlFor="inq-name" className="block text-sm font-medium text-primary-100 mb-1">Name *</label>
                  <input
                    id="inq-name"
                    name="name"
                    type="text"
                    required
                    value={form.name}
                    onChange={handleChange}
                    className="w-full px-4 py-2.5 rounded-md bg-white/10 border border-white/20 text-white placeholder-primary-300 focus:border-accent-400 focus:outline-none"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label htmlFor="inq-email" className="block text-sm font-medium text-primary-100 mb-1">Email *</label>
                  <input
                    id="inq-email"
                    name="email"
                    type="email"
                    required
                    value={form.email}
                    onChange={handleChange}
                    className="w-full px-4 py-2.5 rounded-md bg-white/10 border border-white/20 text-white placeholder-primary-300 focus:border-accent-400 focus:outline-none"
                    placeholder="you@company.com"
                  />
                </div>
                <div>
                  <label htmlFor="inq-company" className="block text-sm font-medium text-primary-100 mb-1">Company</label>
                  <input
                    id="inq-company"
                    name="company"
                    type="text"
                    value={form.company}
                    onChange={handleChange}
                    className="w-full px-4 py-2.5 rounded-md bg-white/10 border border-white/20 text-white placeholder-primary-300 focus:border-accent-400 focus:outline-none"
                    placeholder="Your company name"
                  />
                </div>
                <div>
                  <label htmlFor="inq-product" className="block text-sm font-medium text-primary-100 mb-1">Product You Need *</label>
                  <input
                    id="inq-product"
                    name="product"
                    type="text"
                    required
                    value={form.product}
                    onChange={handleChange}
                    className="w-full px-4 py-2.5 rounded-md bg-white/10 border border-white/20 text-white placeholder-primary-300 focus:border-accent-400 focus:outline-none"
                    placeholder="e.g., stainless steel fasteners"
                  />
                </div>
                <div>
                  <label htmlFor="inq-message" className="block text-sm font-medium text-primary-100 mb-1">Details</label>
                  <textarea
                    id="inq-message"
                    name="message"
                    rows={4}
                    value={form.message}
                    onChange={handleChange}
                    className="w-full px-4 py-2.5 rounded-md bg-white/10 border border-white/20 text-white placeholder-primary-300 focus:border-accent-400 focus:outline-none resize-y"
                    placeholder="Quantity, specifications, target price, timeline..."
                  />
                </div>
                <button
                  type="submit"
                  className="w-full flex items-center justify-center gap-2 bg-accent-500 hover:bg-accent-600 text-white font-semibold px-6 py-3 rounded-lg transition-colors border-0 cursor-pointer"
                >
                  Submit Inquiry
                  <ArrowRight className="w-5 h-5" />
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  )
}

export default InquiryForm
