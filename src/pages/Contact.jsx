import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Mail, Phone, MapPin, Clock, Send, ArrowRight, CheckCircle } from 'lucide-react'

export default function ContactPage() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    product: '',
    quantity: '',
    message: '',
  })
  const [status, setStatus] = useState('idle')

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setStatus('submitting')
    setTimeout(() => {
      setStatus('success')
      setForm({ name: '', email: '', company: '', phone: '', product: '', quantity: '', message: '' })
    }, 1000)
  }

  return (
    <>
      <section className="bg-primary py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="inline-block text-accent font-semibold text-sm tracking-wider uppercase mb-3">Contact Us</span>
          <h1 className="text-4xl md:text-5xl font-bold text-white tracking-tight mb-4">
            Get a Free Sourcing Quote
          </h1>
          <p className="text-white/80 text-lg max-w-2xl">
            Tell us about your sourcing needs and our team will respond within 24 hours with a tailored proposal.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <div className="bg-surface rounded-2xl p-6 md:p-8 border border-gray-100">
                {status === 'success' ? (
                  <div className="text-center py-16">
                    <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <CheckCircle className="w-8 h-8 text-green-600" />
                    </div>
                    <h3 className="text-2xl font-bold text-primary-dark mb-2">Inquiry Received</h3>
                    <p className="text-steel mb-6">Our team will review your request and respond within 24 hours.</p>
                    <button
                      onClick={() => setStatus('idle')}
                      className="text-accent font-semibold hover:underline"
                    >
                      Submit Another Inquiry
                    </button>
                  </div>
                ) : (
                  <>
                    <h2 className="text-2xl font-bold text-primary-dark mb-2">Sourcing Inquiry Form</h2>
                    <p className="text-steel text-sm mb-6">Fill out the form below and we will get back to you within 24 business hours.</p>
                    <form onSubmit={handleSubmit} className="space-y-5">
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                          <label htmlFor="c-name" className="block text-sm font-medium text-primary-dark mb-1.5">Full Name *</label>
                          <input
                            id="c-name"
                            name="name"
                            type="text"
                            required
                            value={form.name}
                            onChange={handleChange}
                            className="w-full px-4 py-2.5 rounded-lg border border-gray-200 bg-white text-primary-dark text-sm focus:outline-none focus:ring-2 focus:ring-accent/30 focus:border-accent transition-colors"
                            placeholder="Your name"
                          />
                        </div>
                        <div>
                          <label htmlFor="c-email" className="block text-sm font-medium text-primary-dark mb-1.5">Email *</label>
                          <input
                            id="c-email"
                            name="email"
                            type="email"
                            required
                            value={form.email}
                            onChange={handleChange}
                            className="w-full px-4 py-2.5 rounded-lg border border-gray-200 bg-white text-primary-dark text-sm focus:outline-none focus:ring-2 focus:ring-accent/30 focus:border-accent transition-colors"
                            placeholder="you@company.com"
                          />
                        </div>
                      </div>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                          <label htmlFor="c-company" className="block text-sm font-medium text-primary-dark mb-1.5">Company Name</label>
                          <input
                            id="c-company"
                            name="company"
                            type="text"
                            value={form.company}
                            onChange={handleChange}
                            className="w-full px-4 py-2.5 rounded-lg border border-gray-200 bg-white text-primary-dark text-sm focus:outline-none focus:ring-2 focus:ring-accent/30 focus:border-accent transition-colors"
                            placeholder="Your company"
                          />
                        </div>
                        <div>
                          <label htmlFor="c-phone" className="block text-sm font-medium text-primary-dark mb-1.5">Phone Number</label>
                          <input
                            id="c-phone"
                            name="phone"
                            type="tel"
                            value={form.phone}
                            onChange={handleChange}
                            className="w-full px-4 py-2.5 rounded-lg border border-gray-200 bg-white text-primary-dark text-sm focus:outline-none focus:ring-2 focus:ring-accent/30 focus:border-accent transition-colors"
                            placeholder="+1 234 567 8900"
                          />
                        </div>
                      </div>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                          <label htmlFor="c-product" className="block text-sm font-medium text-primary-dark mb-1.5">Product Description *</label>
                          <input
                            id="c-product"
                            name="product"
                            type="text"
                            required
                            value={form.product}
                            onChange={handleChange}
                            className="w-full px-4 py-2.5 rounded-lg border border-gray-200 bg-white text-primary-dark text-sm focus:outline-none focus:ring-2 focus:ring-accent/30 focus:border-accent transition-colors"
                            placeholder="What do you need sourced?"
                          />
                        </div>
                        <div>
                          <label htmlFor="c-quantity" className="block text-sm font-medium text-primary-dark mb-1.5">Estimated Quantity</label>
                          <input
                            id="c-quantity"
                            name="quantity"
                            type="text"
                            value={form.quantity}
                            onChange={handleChange}
                            className="w-full px-4 py-2.5 rounded-lg border border-gray-200 bg-white text-primary-dark text-sm focus:outline-none focus:ring-2 focus:ring-accent/30 focus:border-accent transition-colors"
                            placeholder="e.g. 1,000 units"
                          />
                        </div>
                      </div>
                      <div>
                        <label htmlFor="c-message" className="block text-sm font-medium text-primary-dark mb-1.5">Additional Details</label>
                        <textarea
                          id="c-message"
                          name="message"
                          rows={5}
                          value={form.message}
                          onChange={handleChange}
                          className="w-full px-4 py-2.5 rounded-lg border border-gray-200 bg-white text-primary-dark text-sm focus:outline-none focus:ring-2 focus:ring-accent/30 focus:border-accent transition-colors resize-none"
                          placeholder="Any specific requirements, target price, timeline, certifications needed, etc."
                        />
                      </div>
                      <button
                        type="submit"
                        disabled={status === 'submitting'}
                        className="w-full sm:w-auto bg-accent hover:bg-accent-light text-white px-8 py-3 rounded-lg text-base font-semibold transition-colors flex items-center justify-center gap-2 disabled:opacity-60"
                      >
                        {status === 'submitting' ? 'Sending...' : 'Submit Inquiry'}
                        <ArrowRight className="w-4 h-4" />
                      </button>
                    </form>
                  </>
                )}
              </div>
            </div>

            <div className="space-y-6">
              <div className="bg-surface rounded-2xl p-6 border border-gray-100">
                <h3 className="text-lg font-bold text-primary-dark mb-4">Contact Information</h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <Mail className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="text-sm font-medium text-primary-dark">Email</p>
                      <p className="text-steel text-sm">info@ssourcingchina.com</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Phone className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="text-sm font-medium text-primary-dark">Phone</p>
                      <p className="text-steel text-sm">+86 755 8888 8888</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="text-sm font-medium text-primary-dark">Office</p>
                      <p className="text-steel text-sm">Futian District, Shenzhen, Guangdong, China</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Clock className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="text-sm font-medium text-primary-dark">Business Hours</p>
                      <p className="text-steel text-sm">Mon-Fri: 9:00 - 18:00 (CST)</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-primary rounded-2xl p-6">
                <h3 className="text-lg font-bold text-white mb-3">What to Expect</h3>
                <ul className="space-y-3">
                  {[
                    'Response within 24 business hours',
                    'Free initial consultation',
                    'Tailored sourcing proposal',
                    'No obligations or hidden fees',
                    'Confidential handling of your information',
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2.5">
                      <CheckCircle className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" />
                      <span className="text-white/80 text-sm">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
