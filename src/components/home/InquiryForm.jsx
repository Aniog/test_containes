import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Send } from 'lucide-react'

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
  const [status, setStatus] = useState('idle')

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setStatus('success')
    console.log('Inquiry submitted:', formData)
  }

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          <div>
            <span className="inline-block text-accent font-semibold text-sm uppercase tracking-wider mb-3">Get Started</span>
            <h2 className="text-3xl md:text-4xl font-bold text-neutral-800 tracking-tight mb-4">
              Get a Free Sourcing Quote
            </h2>
            <p className="text-neutral-600 text-lg leading-relaxed mb-8">
              Tell us what you're looking to source from China. Our team will review your requirements and respond within 24 hours with a tailored sourcing plan.
            </p>

            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center shrink-0 mt-0.5">
                  <span className="text-green-600 text-xs font-bold">✓</span>
                </div>
                <span className="text-neutral-700 text-sm">No commitment — just a free consultation</span>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center shrink-0 mt-0.5">
                  <span className="text-green-600 text-xs font-bold">✓</span>
                </div>
                <span className="text-neutral-700 text-sm">Response within 24 business hours</span>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center shrink-0 mt-0.5">
                  <span className="text-green-600 text-xs font-bold">✓</span>
                </div>
                <span className="text-neutral-700 text-sm">Includes supplier recommendations & pricing estimate</span>
              </div>
            </div>
          </div>

          <div className="bg-neutral-50 rounded-xl border border-neutral-200 p-6 md:p-8">
            {status === 'success' ? (
              <div className="text-center py-12">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Send className="w-7 h-7 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold text-neutral-800 mb-2">Inquiry Received!</h3>
                <p className="text-neutral-600 text-sm">We'll review your requirements and get back to you within 24 hours.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-neutral-700 mb-1.5">Full Name *</label>
                    <input
                      type="text"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-2.5 rounded-lg border border-neutral-300 text-sm text-neutral-800 bg-white focus:outline-none focus:ring-2 focus:ring-accent/30 focus:border-accent"
                      placeholder="John Smith"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-neutral-700 mb-1.5">Email *</label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-2.5 rounded-lg border border-neutral-300 text-sm text-neutral-800 bg-white focus:outline-none focus:ring-2 focus:ring-accent/30 focus:border-accent"
                      placeholder="john@company.com"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-neutral-700 mb-1.5">Company</label>
                    <input
                      type="text"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      className="w-full px-4 py-2.5 rounded-lg border border-neutral-300 text-sm text-neutral-800 bg-white focus:outline-none focus:ring-2 focus:ring-accent/30 focus:border-accent"
                      placeholder="Company name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-neutral-700 mb-1.5">Country</label>
                    <input
                      type="text"
                      name="country"
                      value={formData.country}
                      onChange={handleChange}
                      className="w-full px-4 py-2.5 rounded-lg border border-neutral-300 text-sm text-neutral-800 bg-white focus:outline-none focus:ring-2 focus:ring-accent/30 focus:border-accent"
                      placeholder="United States"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-neutral-700 mb-1.5">Product *</label>
                    <input
                      type="text"
                      name="product"
                      required
                      value={formData.product}
                      onChange={handleChange}
                      className="w-full px-4 py-2.5 rounded-lg border border-neutral-300 text-sm text-neutral-800 bg-white focus:outline-none focus:ring-2 focus:ring-accent/30 focus:border-accent"
                      placeholder="e.g. LED panel lights"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-neutral-700 mb-1.5">Estimated Quantity</label>
                    <input
                      type="text"
                      name="quantity"
                      value={formData.quantity}
                      onChange={handleChange}
                      className="w-full px-4 py-2.5 rounded-lg border border-neutral-300 text-sm text-neutral-800 bg-white focus:outline-none focus:ring-2 focus:ring-accent/30 focus:border-accent"
                      placeholder="e.g. 5,000 units"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-neutral-700 mb-1.5">Project Details</label>
                  <textarea
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-2.5 rounded-lg border border-neutral-300 text-sm text-neutral-800 bg-white focus:outline-none focus:ring-2 focus:ring-accent/30 focus:border-accent resize-none"
                    placeholder="Describe your product requirements, target price, certifications needed, timeline..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-accent hover:bg-accent-hover text-white font-semibold px-6 py-3 rounded-lg transition-colors text-sm flex items-center justify-center gap-2"
                >
                  <Send className="w-4 h-4" />
                  Get a Free Sourcing Quote
                </button>

                <p className="text-xs text-neutral-500 text-center">
                  Your information is kept confidential. We never share your details with suppliers without permission.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
