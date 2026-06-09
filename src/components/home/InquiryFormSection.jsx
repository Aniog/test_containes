import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Send, ArrowRight } from 'lucide-react'

export default function InquiryFormSection() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    company: '',
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
      setForm({ name: '', email: '', company: '', product: '', quantity: '', message: '' })
    }, 1000)
  }

  return (
    <section className="py-16 md:py-24 bg-white" id="inquiry">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          <div>
            <span className="inline-block text-accent font-semibold text-sm tracking-wider uppercase mb-3">Get Started</span>
            <h2 className="text-3xl md:text-4xl font-bold text-primary-dark tracking-tight mb-4">
              Request a Free Sourcing Quote
            </h2>
            <p className="text-steel text-lg mb-8 leading-relaxed">
              Tell us about your sourcing needs and our team will get back to you within 24 hours with a tailored proposal — no obligations.
            </p>

            <div className="space-y-4">
              {[
                'Free initial consultation and sourcing plan',
                'No minimum order requirements',
                'Response within 24 business hours',
                'Confidential handling of your information',
              ].map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <div className="w-5 h-5 bg-accent/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <div className="w-2 h-2 bg-accent rounded-full" />
                  </div>
                  <span className="text-steel text-sm">{item}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-surface rounded-2xl p-6 md:p-8 border border-gray-100">
            {status === 'success' ? (
              <div className="text-center py-12">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Send className="w-7 h-7 text-green-600" />
                </div>
                <h3 className="text-xl font-bold text-primary-dark mb-2">Inquiry Received</h3>
                <p className="text-steel text-sm mb-6">Our team will review your request and respond within 24 hours.</p>
                <button
                  onClick={() => setStatus('idle')}
                  className="text-accent font-semibold text-sm hover:underline"
                >
                  Submit Another Inquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="inq-name" className="block text-sm font-medium text-primary-dark mb-1.5">Full Name *</label>
                    <input
                      id="inq-name"
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
                    <label htmlFor="inq-email" className="block text-sm font-medium text-primary-dark mb-1.5">Email *</label>
                    <input
                      id="inq-email"
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
                <div>
                  <label htmlFor="inq-company" className="block text-sm font-medium text-primary-dark mb-1.5">Company Name</label>
                  <input
                    id="inq-company"
                    name="company"
                    type="text"
                    value={form.company}
                    onChange={handleChange}
                    className="w-full px-4 py-2.5 rounded-lg border border-gray-200 bg-white text-primary-dark text-sm focus:outline-none focus:ring-2 focus:ring-accent/30 focus:border-accent transition-colors"
                    placeholder="Your company"
                  />
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="inq-product" className="block text-sm font-medium text-primary-dark mb-1.5">Product Description *</label>
                    <input
                      id="inq-product"
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
                    <label htmlFor="inq-quantity" className="block text-sm font-medium text-primary-dark mb-1.5">Estimated Quantity</label>
                    <input
                      id="inq-quantity"
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
                  <label htmlFor="inq-message" className="block text-sm font-medium text-primary-dark mb-1.5">Additional Details</label>
                  <textarea
                    id="inq-message"
                    name="message"
                    rows={4}
                    value={form.message}
                    onChange={handleChange}
                    className="w-full px-4 py-2.5 rounded-lg border border-gray-200 bg-white text-primary-dark text-sm focus:outline-none focus:ring-2 focus:ring-accent/30 focus:border-accent transition-colors resize-none"
                    placeholder="Any specific requirements, target price, timeline, etc."
                  />
                </div>
                <button
                  type="submit"
                  disabled={status === 'submitting'}
                  className="w-full bg-accent hover:bg-accent-light text-white py-3 rounded-lg text-base font-semibold transition-colors flex items-center justify-center gap-2 disabled:opacity-60"
                >
                  {status === 'submitting' ? 'Sending...' : 'Submit Inquiry'}
                  <ArrowRight className="w-4 h-4" />
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
