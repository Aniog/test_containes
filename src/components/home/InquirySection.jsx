import { useState } from 'react'
import { Send, CheckCircle } from 'lucide-react'

export default function InquirySection() {
  const [submitted, setSubmitted] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    product: '',
    message: '',
  })

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
    setSubmitted(true)
  }

  if (submitted) {
    return (
      <section className="section-padding bg-white">
        <div className="section-container">
          <div className="max-w-2xl mx-auto text-center">
            <div className="w-16 h-16 bg-green-50 rounded-full flex items-center justify-center mx-auto mb-6">
              <CheckCircle className="w-8 h-8 text-green-600" />
            </div>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Thank You for Your Inquiry</h2>
            <p className="text-lg text-gray-600 mb-8">
              Our team will review your sourcing requirements and get back to you within 24 hours with a free quote.
            </p>
            <button
              onClick={() => {
                setSubmitted(false)
                setFormData({ name: '', email: '', company: '', product: '', message: '' })
              }}
              className="btn-primary"
            >
              Submit Another Inquiry
            </button>
          </div>
        </div>
      </section>
    )
  }

  return (
    <section className="section-padding bg-white">
      <div className="section-container">
        <div className="max-w-3xl mx-auto">
          <h2 className="section-title">Get a Free Sourcing Quote</h2>
          <p className="section-subtitle">
            Tell us about your product needs and we will provide a tailored sourcing plan and quote within 24 hours.
          </p>
          <form onSubmit={handleSubmit} className="mt-10 space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                  Full Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="input-field"
                  placeholder="John Smith"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                  Email Address <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="input-field"
                  placeholder="john@company.com"
                />
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-1">
                  Company Name
                </label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  className="input-field"
                  placeholder="Your Company Ltd."
                />
              </div>
              <div>
                <label htmlFor="product" className="block text-sm font-medium text-gray-700 mb-1">
                  Product to Source <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="product"
                  name="product"
                  required
                  value={formData.product}
                  onChange={handleChange}
                  className="input-field"
                  placeholder="Describe the product you need"
                />
              </div>
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                Additional Details
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                value={formData.message}
                onChange={handleChange}
                className="input-field"
                placeholder="Share details about quantity, specifications, timeline, budget, or any special requirements..."
              />
            </div>
            <div className="text-center">
              <button type="submit" className="btn-secondary text-lg px-10 py-3.5 inline-flex items-center gap-2">
                <Send className="w-5 h-5" />
                Get My Free Quote
              </button>
              <p className="text-sm text-gray-500 mt-3">
                No obligation. We typically respond within 24 hours.
              </p>
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}