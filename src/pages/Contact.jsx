import React, { useState } from 'react'
import { Phone, Mail, MapPin, Clock, Send, CheckCircle, Loader2 } from 'lucide-react'
import Button from '@/components/ui/Button'

export default function Contact() {
  const [status, setStatus] = useState('idle')
  const [formValues, setFormValues] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    product: '',
    budget: '',
    quantity: '',
    message: '',
  })
  const [error, setError] = useState(null)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormValues((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setError(null)
    setStatus('submitting')

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500))
    setStatus('success')
    setFormValues({
      name: '',
      email: '',
      company: '',
      phone: '',
      product: '',
      budget: '',
      quantity: '',
      message: '',
    })

    // Reset success message after 5 seconds
    setTimeout(() => setStatus('idle'), 5000)
  }

  return (
    <div>
      {/* Hero */}
      <section className="bg-neutral-900 py-16 md:py-24">
        <div className="container-page text-center">
          <span className="text-brand-300 text-sm font-medium tracking-wider uppercase">Contact Us</span>
          <h1 className="text-4xl md:text-5xl font-bold text-white mt-3 mb-4">Get in Touch</h1>
          <p className="text-lg text-neutral-300 max-w-2xl mx-auto">
            Tell us about your sourcing needs and we'll get back to you within 24 hours
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container-page">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Contact Info */}
            <div className="space-y-8">
              <div>
                <h2 className="text-2xl font-bold text-neutral-900 mb-2">Contact Information</h2>
                <p className="text-sm text-neutral-500">
                  Reach out through any of these channels. We're here to help.
                </p>
              </div>

              <div className="space-y-5">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-brand-50 flex items-center justify-center flex-shrink-0">
                    <Phone className="h-5 w-5 text-brand-500" />
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-neutral-900">Phone</h3>
                    <a href="tel:+861234567890" className="text-sm text-neutral-500 hover:text-brand-500 transition-colors">
                      +86 123 4567 890
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-brand-50 flex items-center justify-center flex-shrink-0">
                    <Mail className="h-5 w-5 text-brand-500" />
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-neutral-900">Email</h3>
                    <a href="mailto:info@ssourcingchina.com" className="text-sm text-neutral-500 hover:text-brand-500 transition-colors">
                      info@ssourcingchina.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-brand-50 flex items-center justify-center flex-shrink-0">
                    <MapPin className="h-5 w-5 text-brand-500" />
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-neutral-900">Office</h3>
                    <p className="text-sm text-neutral-500">
                      Room 1208, Tianhe Business Center<br />
                      208 Tianhe Road, Guangzhou<br />
                      Guangdong, China 510620
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-brand-50 flex items-center justify-center flex-shrink-0">
                    <Clock className="h-5 w-5 text-brand-500" />
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-neutral-900">Business Hours</h3>
                    <p className="text-sm text-neutral-500">
                      Monday - Friday: 9:00 - 18:00 (CST)<br />
                      Saturday: 9:00 - 13:00 (CST)<br />
                      We respond to all inquiries within 24 hours
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Inquiry Form */}
            <div className="lg:col-span-2">
              <div className="bg-neutral-50 rounded-2xl p-8 md:p-10 border border-neutral-200">
                <h2 className="text-2xl font-bold text-neutral-900 mb-6">Send Us a Message</h2>

                {status === 'success' ? (
                  <div className="flex flex-col items-center justify-center py-12 text-center">
                    <div className="w-16 h-16 rounded-full bg-green-50 flex items-center justify-center mb-4">
                      <CheckCircle className="h-8 w-8 text-green-500" />
                    </div>
                    <h3 className="text-xl font-bold text-neutral-900 mb-2">Thank You!</h3>
                    <p className="text-neutral-500 max-w-sm">
                      Your inquiry has been received. Our team will review it and get back to you within 24 hours.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium text-neutral-700 mb-1.5">
                          Full Name <span className="text-accent-500">*</span>
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          value={formValues.name}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 rounded-lg border border-neutral-200 text-neutral-900 text-sm focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent placeholder-neutral-400 bg-white"
                          placeholder="Your full name"
                        />
                      </div>
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-neutral-700 mb-1.5">
                          Email <span className="text-accent-500">*</span>
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formValues.email}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 rounded-lg border border-neutral-200 text-neutral-900 text-sm focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent placeholder-neutral-400 bg-white"
                          placeholder="your@email.com"
                        />
                      </div>
                      <div>
                        <label htmlFor="company" className="block text-sm font-medium text-neutral-700 mb-1.5">
                          Company
                        </label>
                        <input
                          type="text"
                          id="company"
                          name="company"
                          value={formValues.company}
                          onChange={handleChange}
                          className="w-full px-4 py-3 rounded-lg border border-neutral-200 text-neutral-900 text-sm focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent placeholder-neutral-400 bg-white"
                          placeholder="Your company name"
                        />
                      </div>
                      <div>
                        <label htmlFor="phone" className="block text-sm font-medium text-neutral-700 mb-1.5">
                          Phone Number
                        </label>
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          value={formValues.phone}
                          onChange={handleChange}
                          className="w-full px-4 py-3 rounded-lg border border-neutral-200 text-neutral-900 text-sm focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent placeholder-neutral-400 bg-white"
                          placeholder="+1 234 567 8900"
                        />
                      </div>
                      <div className="md:col-span-2">
                        <label htmlFor="product" className="block text-sm font-medium text-neutral-700 mb-1.5">
                          Product Description <span className="text-accent-500">*</span>
                        </label>
                        <textarea
                          id="product"
                          name="product"
                          value={formValues.product}
                          onChange={handleChange}
                          rows={4}
                          required
                          className="w-full px-4 py-3 rounded-lg border border-neutral-200 text-neutral-900 text-sm focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent placeholder-neutral-400 bg-white"
                          placeholder="Describe the products you want to source, including specifications, target price range, and any specific requirements..."
                        />
                      </div>
                      <div>
                        <label htmlFor="budget" className="block text-sm font-medium text-neutral-700 mb-1.5">
                          Estimated Budget (USD)
                        </label>
                        <select
                          id="budget"
                          name="budget"
                          value={formValues.budget}
                          onChange={handleChange}
                          className="w-full px-4 py-3 rounded-lg border border-neutral-200 text-neutral-900 text-sm focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent bg-white"
                        >
                          <option value="">Select range</option>
                          <option value="under-10k">Under $10,000</option>
                          <option value="10k-50k">$10,000 - $50,000</option>
                          <option value="50k-100k">$50,000 - $100,000</option>
                          <option value="100k-500k">$100,000 - $500,000</option>
                          <option value="over-500k">Over $500,000</option>
                        </select>
                      </div>
                      <div>
                        <label htmlFor="quantity" className="block text-sm font-medium text-neutral-700 mb-1.5">
                          Estimated Quantity
                        </label>
                        <input
                          type="text"
                          id="quantity"
                          name="quantity"
                          value={formValues.quantity}
                          onChange={handleChange}
                          className="w-full px-4 py-3 rounded-lg border border-neutral-200 text-neutral-900 text-sm focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent placeholder-neutral-400 bg-white"
                          placeholder="e.g., 1,000 - 5,000 units"
                        />
                      </div>
                      <div className="md:col-span-2">
                        <label htmlFor="message" className="block text-sm font-medium text-neutral-700 mb-1.5">
                          Additional Information
                        </label>
                        <textarea
                          id="message"
                          name="message"
                          value={formValues.message}
                          onChange={handleChange}
                          rows={3}
                          className="w-full px-4 py-3 rounded-lg border border-neutral-200 text-neutral-900 text-sm focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent placeholder-neutral-400 bg-white"
                          placeholder="Any other details you'd like to share..."
                        />
                      </div>
                    </div>

                    {error && (
                      <div className="text-sm text-accent-500 bg-accent-50 px-4 py-3 rounded-lg border border-accent-100">
                        {error}
                      </div>
                    )}

                    <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center pt-2">
                      <Button type="submit" size="xl" variant="accent" loading={status === 'submitting'}>
                        <Send className="h-5 w-5" />
                        Send Inquiry
                      </Button>
                      <span className="text-sm text-neutral-400">We respond within 24 hours</span>
                    </div>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Placeholder */}
      <section className="bg-neutral-100">
        <div className="h-64 md:h-80 bg-neutral-200 flex items-center justify-center">
          <div className="text-center">
            <MapPin className="h-8 w-8 text-neutral-400 mx-auto mb-2" />
            <p className="text-sm text-neutral-500">Guangzhou, Guangdong, China</p>
          </div>
        </div>
      </section>
    </div>
  )
}