import React, { useState } from 'react'
import { Mail, Phone, MapPin, Clock, Send, CheckCircle, AlertCircle } from 'lucide-react'
import Button from '@/components/ui/button'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    product: '',
    quantity: '',
    budget: '',
    message: '',
  })
  const [status, setStatus] = useState('idle')
  const [error, setError] = useState(null)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const validate = () => {
    if (!formData.name.trim()) return 'Please enter your name'
    if (!formData.email.trim()) return 'Please enter your email'
    if (!/^\S+@\S+\.\S+$/.test(formData.email)) return 'Please enter a valid email'
    if (!formData.product.trim()) return 'Please describe the product you want to source'
    if (!formData.message.trim()) return 'Please include a brief message'
    return null
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setError(null)

    const validationError = validate()
    if (validationError) {
      setError(validationError)
      return
    }

    setStatus('submitting')

    try {
      // Simulate API call — in production this would post to the backend
      await new Promise((resolve) => setTimeout(resolve, 1500))

      setStatus('success')
      setFormData({
        name: '',
        email: '',
        company: '',
        product: '',
        quantity: '',
        budget: '',
        message: '',
      })
    } catch (err) {
      setError(err.message || 'Something went wrong. Please try again.')
      setStatus('error')
    }
  }

  if (status === 'success') {
    return (
      <div>
        <section className="bg-gradient-to-br from-neutral-900 to-brand-900 py-16 lg:py-24">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white mb-6">Contact Us</h1>
            <p className="text-lg text-neutral-300 max-w-2xl mx-auto">
              Ready to start sourcing from China? Get in touch and we'll respond within 24 hours.
            </p>
          </div>
        </section>

        <section className="py-16 lg:py-24 bg-neutral-50">
          <div className="max-w-xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="bg-white rounded-2xl p-10 border border-green-200 shadow-lg">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <CheckCircle className="w-8 h-8 text-green-600" />
              </div>
              <h2 className="text-2xl font-bold text-neutral-900 mb-3">Thank You!</h2>
              <p className="text-neutral-600 mb-2">
                Your sourcing inquiry has been submitted successfully.
              </p>
              <p className="text-sm text-neutral-500">
                Our team will review your requirements and get back to you within 24 hours.
              </p>
              <div className="mt-8">
                <Button variant="primary" onClick={() => setStatus('idle')}>
                  Submit Another Inquiry
                </Button>
              </div>
            </div>
          </div>
        </section>
      </div>
    )
  }

  return (
    <div>
      {/* Hero */}
      <section className="bg-gradient-to-br from-neutral-900 to-brand-900 py-16 lg:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white mb-6">Contact Us</h1>
          <p className="text-lg text-neutral-300 max-w-2xl mx-auto">
            Ready to start sourcing from China? Get in touch and we'll respond within 24 hours.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 lg:py-24 bg-neutral-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-5 gap-10 lg:gap-16">
            {/* Contact Info */}
            <div className="lg:col-span-2">
              <h2 className="text-2xl font-bold text-neutral-900 mb-6">Get in Touch</h2>
              <p className="text-neutral-600 mb-8">
                Fill out the form and our team will get back to you within 24 hours with a customized sourcing plan.
              </p>

              <div className="space-y-5">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 bg-brand-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Mail className="w-5 h-5 text-brand-600" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-neutral-900">Email</p>
                    <a href="mailto:info@ssourcingchina.com" className="text-sm text-brand-600 hover:underline">
                      info@ssourcingchina.com
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 bg-brand-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Phone className="w-5 h-5 text-brand-600" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-neutral-900">Phone</p>
                    <a href="tel:+862012345678" className="text-sm text-brand-600 hover:underline">
                      +86 20 1234 5678
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 bg-brand-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-5 h-5 text-brand-600" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-neutral-900">Office</p>
                    <p className="text-sm text-neutral-600">
                      Guangzhou, Guangdong Province<br />China
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 bg-brand-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Clock className="w-5 h-5 text-brand-600" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-neutral-900">Response Time</p>
                    <p className="text-sm text-neutral-600">Within 24 hours (Mon-Sat)</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Form */}
            <div className="lg:col-span-3">
              <div className="bg-white rounded-2xl p-6 lg:p-8 border border-neutral-200 shadow-sm">
                <h3 className="text-xl font-bold text-neutral-900 mb-6">Submit Your Sourcing Inquiry</h3>

                {error && (
                  <div className="flex items-start gap-3 bg-red-50 border border-red-200 rounded-lg p-4 mb-6">
                    <AlertCircle className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
                    <p className="text-sm text-red-700">{error}</p>
                  </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-neutral-700 mb-1">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full px-4 py-2.5 border border-neutral-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-brand-500"
                        placeholder="John Smith"
                        required
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-neutral-700 mb-1">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-4 py-2.5 border border-neutral-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-brand-500"
                        placeholder="john@company.com"
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="company" className="block text-sm font-medium text-neutral-700 mb-1">
                      Company Name
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      className="w-full px-4 py-2.5 border border-neutral-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-brand-500"
                      placeholder="Your Company Ltd."
                    />
                  </div>

                  <div>
                    <label htmlFor="product" className="block text-sm font-medium text-neutral-700 mb-1">
                      Product to Source *
                    </label>
                    <input
                      type="text"
                      id="product"
                      name="product"
                      value={formData.product}
                      onChange={handleChange}
                      className="w-full px-4 py-2.5 border border-neutral-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-brand-500"
                      placeholder="e.g. Custom packaging boxes, LED lighting"
                      required
                    />
                  </div>

                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label htmlFor="quantity" className="block text-sm font-medium text-neutral-700 mb-1">
                        Estimated Quantity
                      </label>
                      <input
                        type="text"
                        id="quantity"
                        name="quantity"
                        value={formData.quantity}
                        onChange={handleChange}
                        className="w-full px-4 py-2.5 border border-neutral-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-brand-500"
                        placeholder="e.g. 1,000 units"
                      />
                    </div>
                    <div>
                      <label htmlFor="budget" className="block text-sm font-medium text-neutral-700 mb-1">
                        Target Budget
                      </label>
                      <input
                        type="text"
                        id="budget"
                        name="budget"
                        value={formData.budget}
                        onChange={handleChange}
                        className="w-full px-4 py-2.5 border border-neutral-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-brand-500"
                        placeholder="e.g. $5,000 - $10,000"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-neutral-700 mb-1">
                      Requirements Details *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full px-4 py-2.5 border border-neutral-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-brand-500 resize-y"
                      placeholder="Tell us about your product specifications, quality requirements, target timeline, and any other important details..."
                      required
                    />
                  </div>

                  <Button
                    variant="primary"
                    size="lg"
                    type="submit"
                    disabled={status === 'submitting'}
                    className="w-full"
                  >
                    {status === 'submitting' ? (
                      <span className="flex items-center gap-2">
                        <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                        Sending...
                      </span>
                    ) : (
                      <span className="flex items-center justify-center gap-2">
                        <Send className="w-4 h-4" />
                        Submit Sourcing Inquiry
                      </span>
                    )}
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}