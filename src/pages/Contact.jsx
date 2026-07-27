import React, { useState } from 'react'
import { Mail, Phone, MapPin, Clock, Send, CheckCircle2 } from 'lucide-react'

export default function Contact() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    productType: '',
    quantity: '',
    message: '',
  })
  const [status, setStatus] = useState('idle')
  const [error, setError] = useState(null)

  const handleChange = (e) => {
    const { name, value } = e.target
    setForm((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setError(null)

    if (!form.name.trim()) { setError('Name is required'); return }
    if (!form.email.trim()) { setError('Email is required'); return }
    if (!/^\S+@\S+\.\S+$/.test(form.email)) { setError('Please enter a valid email'); return }
    if (!form.productType.trim()) { setError('Product type is required'); return }
    if (!form.message.trim()) { setError('Please describe your sourcing needs'); return }

    setStatus('submitting')

    // Simulate form submission
    setTimeout(() => {
      setStatus('success')
      setForm({ name: '', email: '', company: '', phone: '', productType: '', quantity: '', message: '' })
    }, 1500)
  }

  return (
    <div>
      <section className="bg-primary py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl md:text-4xl font-extrabold text-white mb-4">
            Contact Us
          </h1>
          <p className="text-white/80 max-w-2xl mx-auto">
            Tell us about your sourcing needs. We respond within 24 hours with a practical proposal.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <h2 className="text-2xl font-bold text-primary mb-6">
                Get a Free Sourcing Quote
              </h2>

              {status === 'success' ? (
                <div className="bg-success/10 border border-success/30 rounded-lg p-8 text-center">
                  <CheckCircle2 className="w-12 h-12 text-success mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-primary mb-2">
                    Inquiry Submitted
                  </h3>
                  <p className="text-neutral-mid">
                    Thank you for your inquiry. We will review your requirements and respond within 24 hours.
                  </p>
                  <button
                    onClick={() => setStatus('idle')}
                    className="mt-4 bg-primary text-white px-6 py-2 rounded-md font-semibold hover:bg-primary-light transition-colors"
                  >
                    Submit Another Inquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  {error && (
                    <div className="bg-red-50 border border-red-200 text-red-700 text-sm rounded-lg p-3">
                      {error}
                    </div>
                  )}

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-neutral-dark mb-1">
                        Name *
                      </label>
                      <input
                        id="name"
                        name="name"
                        type="text"
                        value={form.name}
                        onChange={handleChange}
                        required
                        placeholder="Your name"
                        className="w-full border border-neutral-light rounded-md px-4 py-2.5 text-sm text-neutral-dark bg-white focus:border-accent focus:ring-1 focus:ring-accent outline-none"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-neutral-dark mb-1">
                        Email *
                      </label>
                      <input
                        id="email"
                        name="email"
                        type="email"
                        value={form.email}
                        onChange={handleChange}
                        required
                        placeholder="you@company.com"
                        className="w-full border border-neutral-light rounded-md px-4 py-2.5 text-sm text-neutral-dark bg-white focus:border-accent focus:ring-1 focus:ring-accent outline-none"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="company" className="block text-sm font-medium text-neutral-dark mb-1">
                        Company
                      </label>
                      <input
                        id="company"
                        name="company"
                        type="text"
                        value={form.company}
                        onChange={handleChange}
                        placeholder="Your company name"
                        className="w-full border border-neutral-light rounded-md px-4 py-2.5 text-sm text-neutral-dark bg-white focus:border-accent focus:ring-1 focus:ring-accent outline-none"
                      />
                    </div>
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-neutral-dark mb-1">
                        Phone
                      </label>
                      <input
                        id="phone"
                        name="phone"
                        type="tel"
                        value={form.phone}
                        onChange={handleChange}
                        placeholder="+1 234 567 8900"
                        className="w-full border border-neutral-light rounded-md px-4 py-2.5 text-sm text-neutral-dark bg-white focus:border-accent focus:ring-1 focus:ring-accent outline-none"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="productType" className="block text-sm font-medium text-neutral-dark mb-1">
                        Product Type *
                      </label>
                      <input
                        id="productType"
                        name="productType"
                        type="text"
                        value={form.productType}
                        onChange={handleChange}
                        required
                        placeholder="e.g. Electronics, Textiles, Hardware"
                        className="w-full border border-neutral-light rounded-md px-4 py-2.5 text-sm text-neutral-dark bg-white focus:border-accent focus:ring-1 focus:ring-accent outline-none"
                      />
                    </div>
                    <div>
                      <label htmlFor="quantity" className="block text-sm font-medium text-neutral-dark mb-1">
                        Estimated Quantity
                      </label>
                      <input
                        id="quantity"
                        name="quantity"
                        type="text"
                        value={form.quantity}
                        onChange={handleChange}
                        placeholder="e.g. 5,000 units"
                        className="w-full border border-neutral-light rounded-md px-4 py-2.5 text-sm text-neutral-dark bg-white focus:border-accent focus:ring-1 focus:ring-accent outline-none"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-neutral-dark mb-1">
                      Describe Your Sourcing Needs *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      value={form.message}
                      onChange={handleChange}
                      required
                      placeholder="Tell us about the product you want to source, specifications, quality requirements, timeline, and any other details."
                      className="w-full border border-neutral-light rounded-md px-4 py-2.5 text-sm text-neutral-dark bg-white focus:border-accent focus:ring-1 focus:ring-accent outline-none resize-y"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={status === 'submitting'}
                    className="inline-flex items-center justify-center gap-2 bg-accent text-white px-8 py-3 rounded-md font-semibold hover:bg-accent-light transition-colors disabled:opacity-50"
                  >
                    {status === 'submitting' ? 'Sending...' : 'Submit Inquiry'}
                    <Send className="w-4 h-4" />
                  </button>
                </form>
              )}
            </div>

            <div className="space-y-6">
              <div className="bg-neutral-light rounded-lg p-6">
                <h3 className="text-lg font-semibold text-primary mb-4">Contact Information</h3>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <Mail className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                    <div>
                      <p className="text-sm font-medium text-neutral-dark">Email</p>
                      <p className="text-sm text-neutral-mid">info@ssourcingchina.com</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <Phone className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                    <div>
                      <p className="text-sm font-medium text-neutral-dark">Phone</p>
                      <p className="text-sm text-neutral-mid">+86 755 8888 0000</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                    <div>
                      <p className="text-sm font-medium text-neutral-dark">Location</p>
                      <p className="text-sm text-neutral-mid">Shenzhen, Guangdong, China</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <Clock className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                    <div>
                      <p className="text-sm font-medium text-neutral-dark">Response Time</p>
                      <p className="text-sm text-neutral-mid">Within 24 hours</p>
                    </div>
                  </li>
                </ul>
              </div>

              <div className="bg-primary rounded-lg p-6 text-white">
                <h3 className="text-lg font-semibold mb-3">What Happens Next?</h3>
                <ul className="space-y-3 text-sm text-white/80">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-accent shrink-0 mt-0.5" />
                    We review your requirements within 24 hours
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-accent shrink-0 mt-0.5" />
                    We propose a sourcing plan and service scope
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-accent shrink-0 mt-0.5" />
                    No commitment required until you approve
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-accent shrink-0 mt-0.5" />
                    Transparent pricing with no hidden fees
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
