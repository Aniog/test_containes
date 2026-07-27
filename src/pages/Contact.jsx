import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Mail, Phone, MapPin, Send, CheckCircle, Clock, ShieldCheck } from 'lucide-react'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    product: '',
    quantity: '',
    timeline: '',
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

    console.log('Contact inquiry submitted:', formData)
    setSubmitted(true)
  }

  return (
    <div>
      <section className="bg-slate-900 py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Contact Us
          </h1>
          <p className="text-slate-300 text-lg max-w-2xl mx-auto">
            Get a free sourcing quote or ask us anything about sourcing from China. We respond within 24 hours.
          </p>
        </div>
      </section>

      <section className="bg-white py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <h2 className="text-2xl font-bold text-slate-900 mb-6">
                Get a Free Sourcing Quote
              </h2>

              {submitted ? (
                <div className="bg-green-50 border border-green-200 rounded-xl p-8 text-center">
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
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="contact-name" className="block text-sm font-medium text-slate-700 mb-1">
                        Name *
                      </label>
                      <input
                        id="contact-name"
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
                      <label htmlFor="contact-email" className="block text-sm font-medium text-slate-700 mb-1">
                        Email *
                      </label>
                      <input
                        id="contact-email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        placeholder="you@company.com"
                        className="w-full px-4 py-2 border border-slate-300 rounded-lg text-slate-900 focus:border-primary-500 focus:ring-1 focus:ring-primary-500 outline-none"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="contact-company" className="block text-sm font-medium text-slate-700 mb-1">
                        Company
                      </label>
                      <input
                        id="contact-company"
                        name="company"
                        type="text"
                        value={formData.company}
                        onChange={handleChange}
                        placeholder="Your company name"
                        className="w-full px-4 py-2 border border-slate-300 rounded-lg text-slate-900 focus:border-primary-500 focus:ring-1 focus:ring-primary-500 outline-none"
                      />
                    </div>
                    <div>
                      <label htmlFor="contact-phone" className="block text-sm font-medium text-slate-700 mb-1">
                        Phone
                      </label>
                      <input
                        id="contact-phone"
                        name="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="+1 234 567 8900"
                        className="w-full px-4 py-2 border border-slate-300 rounded-lg text-slate-900 focus:border-primary-500 focus:ring-1 focus:ring-primary-500 outline-none"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="contact-product" className="block text-sm font-medium text-slate-700 mb-1">
                      Product You Want to Source *
                    </label>
                    <input
                      id="contact-product"
                      name="product"
                      type="text"
                      value={formData.product}
                      onChange={handleChange}
                      required
                      placeholder="e.g., stainless steel kitchenware, LED lighting, cotton T-shirts"
                      className="w-full px-4 py-2 border border-slate-300 rounded-lg text-slate-900 focus:border-primary-500 focus:ring-1 focus:ring-primary-500 outline-none"
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="contact-quantity" className="block text-sm font-medium text-slate-700 mb-1">
                        Estimated Quantity
                      </label>
                      <input
                        id="contact-quantity"
                        name="quantity"
                        type="text"
                        value={formData.quantity}
                        onChange={handleChange}
                        placeholder="e.g., 1,000 units, 5,000 pcs"
                        className="w-full px-4 py-2 border border-slate-300 rounded-lg text-slate-900 focus:border-primary-500 focus:ring-1 focus:ring-primary-500 outline-none"
                      />
                    </div>
                    <div>
                      <label htmlFor="contact-timeline" className="block text-sm font-medium text-slate-700 mb-1">
                        Target Timeline
                      </label>
                      <input
                        id="contact-timeline"
                        name="timeline"
                        type="text"
                        value={formData.timeline}
                        onChange={handleChange}
                        placeholder="e.g., 8 weeks, 3 months"
                        className="w-full px-4 py-2 border border-slate-300 rounded-lg text-slate-900 focus:border-primary-500 focus:ring-1 focus:ring-primary-500 outline-none"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="contact-message" className="block text-sm font-medium text-slate-700 mb-1">
                      Additional Details
                    </label>
                    <textarea
                      id="contact-message"
                      name="message"
                      rows={4}
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Specifications, quality requirements, budget range, or any other details..."
                      className="w-full px-4 py-2 border border-slate-300 rounded-lg text-slate-900 focus:border-primary-500 focus:ring-1 focus:ring-primary-500 outline-none resize-none"
                    />
                  </div>

                  {error && (
                    <p className="text-red-500 text-sm">{error}</p>
                  )}

                  <button
                    type="submit"
                    className="bg-accent-500 text-white font-semibold py-3 px-6 rounded-lg hover:bg-accent-600 transition-colors flex items-center justify-center gap-2 border-0"
                  >
                    <Send className="w-4 h-4" />
                    Submit Inquiry
                  </button>
                </form>
              )}
            </div>

            <div>
              <h2 className="text-2xl font-bold text-slate-900 mb-6">
                Contact Information
              </h2>

              <div className="space-y-6">
                <div className="flex items-start gap-3">
                  <Mail className="w-5 h-5 text-primary-500 mt-0.5" />
                  <div>
                    <h4 className="text-sm font-semibold text-slate-900">Email</h4>
                    <p className="text-slate-600 text-sm">info@ssourcingchina.com</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Phone className="w-5 h-5 text-primary-500 mt-0.5" />
                  <div>
                    <h4 className="text-sm font-semibold text-slate-900">Phone</h4>
                    <p className="text-slate-600 text-sm">+86 755 8888 0000</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-primary-500 mt-0.5" />
                  <div>
                    <h4 className="text-sm font-semibold text-slate-900">Office</h4>
                    <p className="text-slate-600 text-sm">Shenzhen, Guangdong, China</p>
                  </div>
                </div>
              </div>

              <div className="mt-8 bg-slate-50 rounded-xl p-6 border border-slate-200">
                <h3 className="text-lg font-semibold text-slate-900 mb-4">What Happens Next?</h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <Clock className="w-5 h-5 text-primary-500" />
                    <div>
                      <h4 className="text-sm font-medium text-slate-900">Response within 24 hours</h4>
                      <p className="text-slate-600 text-xs">We review your request and reply promptly.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <ShieldCheck className="w-5 h-5 text-primary-500" />
                    <div>
                      <h4 className="text-sm font-medium text-slate-900">Free consultation</h4>
                      <p className="text-slate-600 text-xs">No commitment required. We discuss your needs first.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-primary-500" />
                    <div>
                      <h4 className="text-sm font-medium text-slate-900">Transparent quote</h4>
                      <p className="text-slate-600 text-xs">Clear pricing with no hidden fees or surprises.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
