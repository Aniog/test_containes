import { useState } from 'react'
import { Send, CheckCircle } from 'lucide-react'

export default function InquiryForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    country: '',
    product: '',
    quantity: '',
    message: '',
  })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // In production, this would send to a backend
    console.log('Inquiry submitted:', formData)
    setSubmitted(true)
  }

  if (submitted) {
    return (
      <section className="section-padding bg-white">
        <div className="container-custom max-w-2xl mx-auto text-center">
          <div className="card">
            <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
            <h3 className="heading-3 mb-2">Thank You!</h3>
            <p className="body-text">
              Your inquiry has been received. Our team will review your requirements and respond within 24 hours.
            </p>
          </div>
        </div>
      </section>
    )
  }

  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-8">
            <span className="text-blue-800 font-semibold text-sm uppercase tracking-wide">Get Started</span>
            <h2 className="heading-2 mt-2 mb-4">Request a Free Sourcing Quote</h2>
            <p className="body-text">
              Tell us about your sourcing needs. We will review your requirements and get back to you within 24 hours with a customized plan.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="card">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-1">
                  Full Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-slate-300 rounded-md text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-800 focus:border-transparent"
                  placeholder="John Smith"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-1">
                  Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-slate-300 rounded-md text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-800 focus:border-transparent"
                  placeholder="john@company.com"
                />
              </div>
              <div>
                <label htmlFor="company" className="block text-sm font-medium text-slate-700 mb-1">
                  Company Name
                </label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-slate-300 rounded-md text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-800 focus:border-transparent"
                  placeholder="Your Company Ltd."
                />
              </div>
              <div>
                <label htmlFor="country" className="block text-sm font-medium text-slate-700 mb-1">
                  Country *
                </label>
                <input
                  type="text"
                  id="country"
                  name="country"
                  required
                  value={formData.country}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-slate-300 rounded-md text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-800 focus:border-transparent"
                  placeholder="United States"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <div>
                <label htmlFor="product" className="block text-sm font-medium text-slate-700 mb-1">
                  Product Description *
                </label>
                <input
                  type="text"
                  id="product"
                  name="product"
                  required
                  value={formData.product}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-slate-300 rounded-md text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-800 focus:border-transparent"
                  placeholder="e.g., Custom packaging boxes, LED lights"
                />
              </div>
              <div>
                <label htmlFor="quantity" className="block text-sm font-medium text-slate-700 mb-1">
                  Estimated Quantity
                </label>
                <input
                  type="text"
                  id="quantity"
                  name="quantity"
                  value={formData.quantity}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-slate-300 rounded-md text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-800 focus:border-transparent"
                  placeholder="e.g., 1000 units"
                />
              </div>
            </div>

            <div className="mb-6">
              <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-1">
                Additional Details
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                value={formData.message}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-slate-300 rounded-md text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-800 focus:border-transparent resize-none"
                placeholder="Tell us more about your requirements, target price, timeline, or any specific questions..."
              />
            </div>

            <button type="submit" className="btn-primary w-full">
              <Send className="w-5 h-5 mr-2" />
              Submit Inquiry
            </button>

            <p className="text-xs text-slate-500 text-center mt-3">
              We respect your privacy. Your information will only be used to respond to your inquiry.
            </p>
          </form>
        </div>
      </div>
    </section>
  )
}
