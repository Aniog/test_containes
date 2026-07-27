import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Send, CheckCircle } from 'lucide-react'

export default function InquirySection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    product: '',
    message: '',
  })
  const [submitted, setSubmitted] = useState(false)
  const [error, setError] = useState(null)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setError(null)

    if (!formData.name.trim() || !formData.email.trim() || !formData.product.trim()) {
      setError('Please fill in your name, email, and product description.')
      return
    }

    // In production, this would submit to the database
    console.log('Inquiry submitted:', formData)
    setSubmitted(true)
  }

  return (
    <section className="bg-primary-500 py-16 md:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
              Get a Free Sourcing Quote
            </h2>
            <p className="text-primary-100 text-lg leading-relaxed mb-6">
              Tell us what you need to source from China. We will review your requirements and provide a free quote within 24 hours.
            </p>
            <div className="space-y-4 text-primary-100">
              <div className="flex items-center gap-3">
                <CheckCircle className="w-5 h-5 text-accent-400" />
                <span className="text-sm">No commitment required — free initial consultation</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle className="w-5 h-5 text-accent-400" />
                <span className="text-sm">Response within 24 hours</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle className="w-5 h-5 text-accent-400" />
                <span className="text-sm">Transparent pricing, no hidden fees</span>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl p-6 md:p-8 shadow-lg">
            {submitted ? (
              <div className="text-center py-8">
                <CheckCircle className="w-12 h-12 text-green-500 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-slate-900 mb-2">Thank You!</h3>
                <p className="text-slate-600 mb-4">We have received your inquiry and will respond within 24 hours.</p>
                <Link
                  to="/"
                  className="text-primary-500 font-medium hover:text-primary-600 no-underline"
                >
                  Return to homepage
                </Link>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="inquiry-name" className="block text-sm font-medium text-slate-700 mb-1">
                    Name *
                  </label>
                  <input
                    id="inquiry-name"
                    name="name"
                    type="text"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="Your full name"
                    className="w-full px-4 py-2 border border-slate-300 rounded-lg text-slate-900 focus:border-primary-500 focus:ring-1 focus:ring-primary-500 outline-none"
                  />
                </div>

                <div>
                  <label htmlFor="inquiry-email" className="block text-sm font-medium text-slate-700 mb-1">
                    Email *
                  </label>
                  <input
                    id="inquiry-email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="you@company.com"
                    className="w-full px-4 py-2 border border-slate-300 rounded-lg text-slate-900 focus:border-primary-500 focus:ring-1 focus:ring-primary-500 outline-none"
                  />
                </div>

                <div>
                  <label htmlFor="inquiry-company" className="block text-sm font-medium text-slate-700 mb-1">
                    Company
                  </label>
                  <input
                    id="inquiry-company"
                    name="company"
                    type="text"
                    value={formData.company}
                    onChange={handleChange}
                    placeholder="Your company name"
                    className="w-full px-4 py-2 border border-slate-300 rounded-lg text-slate-900 focus:border-primary-500 focus:ring-1 focus:ring-primary-500 outline-none"
                  />
                </div>

                <div>
                  <label htmlFor="inquiry-product" className="block text-sm font-medium text-slate-700 mb-1">
                    Product You Want to Source *
                  </label>
                  <input
                    id="inquiry-product"
                    name="product"
                    type="text"
                    value={formData.product}
                    onChange={handleChange}
                    required
                    placeholder="e.g., stainless steel kitchenware, LED lighting"
                    className="w-full px-4 py-2 border border-slate-300 rounded-lg text-slate-900 focus:border-primary-500 focus:ring-1 focus:ring-primary-500 outline-none"
                  />
                </div>

                <div>
                  <label htmlFor="inquiry-message" className="block text-sm font-medium text-slate-700 mb-1">
                    Additional Details
                  </label>
                  <textarea
                    id="inquiry-message"
                    name="message"
                    rows={3}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Quantity, specifications, timeline, etc."
                    className="w-full px-4 py-2 border border-slate-300 rounded-lg text-slate-900 focus:border-primary-500 focus:ring-1 focus:ring-primary-500 outline-none resize-none"
                  />
                </div>

                {error && (
                  <p className="text-red-500 text-sm">{error}</p>
                )}

                <button
                  type="submit"
                  className="w-full bg-accent-500 text-white font-semibold py-3 rounded-lg hover:bg-accent-600 transition-colors flex items-center justify-center gap-2 border-0"
                >
                  <Send className="w-4 h-4" />
                  Submit Inquiry
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
