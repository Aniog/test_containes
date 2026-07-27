import { useState } from 'react'
import { Send, CheckCircle, AlertCircle } from 'lucide-react'

export default function ContactCTA() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    company: '',
    product: '',
    quantity: '',
    message: '',
  })
  const [status, setStatus] = useState('idle')
  const [error, setError] = useState(null)

  const onChange = (e) => {
    const { name, value } = e.target
    setForm((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setError(null)
    if (!form.name.trim() || !form.email.trim() || !form.product.trim()) {
      setError('Please fill in required fields: name, email, and product.')
      return
    }
    setStatus('submitting')
    // Simulate submission — in production this would call the backend
    setTimeout(() => {
      setStatus('success')
      setForm({ name: '', email: '', company: '', product: '', quantity: '', message: '' })
    }, 1200)
  }

  return (
    <section className="py-20 md:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-start">
          {/* Info */}
          <div className="lg:col-span-2">
            <h2 id="cta-title" className="text-3xl md:text-4xl font-bold text-brand-navy tracking-tight mb-4">
              Ready to Start Sourcing?
            </h2>
            <p id="cta-subtitle" className="text-lg text-brand-gray-600 mb-8">
              Tell us what you need. We will respond within 24 hours with a preliminary assessment and quote.
            </p>

            <div className="space-y-4">
              {[
                'Free initial consultation and supplier research',
                'No commitment — evaluate our proposal first',
                'Confidential — your designs and plans are protected',
                'Dedicated account manager from day one',
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-600 shrink-0 mt-0.5" />
                  <span className="text-sm text-brand-gray-700">{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Form */}
          <div className="lg:col-span-3">
            <form onSubmit={handleSubmit} className="bg-brand-gray-50 border border-brand-gray-200 rounded-xl p-6 md:p-8 space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-brand-gray-700 mb-1.5">
                    Full Name *
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    value={form.name}
                    onChange={onChange}
                    required
                    className="w-full px-4 py-2.5 border border-brand-gray-300 rounded-lg text-sm bg-white focus:ring-2 focus:ring-brand-blue focus:border-brand-blue outline-none transition"
                    placeholder="John Smith"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-brand-gray-700 mb-1.5">
                    Business Email *
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    value={form.email}
                    onChange={onChange}
                    required
                    className="w-full px-4 py-2.5 border border-brand-gray-300 rounded-lg text-sm bg-white focus:ring-2 focus:ring-brand-blue focus:border-brand-blue outline-none transition"
                    placeholder="john@company.com"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-brand-gray-700 mb-1.5">
                    Company Name
                  </label>
                  <input
                    id="company"
                    name="company"
                    type="text"
                    value={form.company}
                    onChange={onChange}
                    className="w-full px-4 py-2.5 border border-brand-gray-300 rounded-lg text-sm bg-white focus:ring-2 focus:ring-brand-blue focus:border-brand-blue outline-none transition"
                    placeholder="Your Company Ltd."
                  />
                </div>
                <div>
                  <label htmlFor="quantity" className="block text-sm font-medium text-brand-gray-700 mb-1.5">
                    Estimated Order Quantity
                  </label>
                  <input
                    id="quantity"
                    name="quantity"
                    type="text"
                    value={form.quantity}
                    onChange={onChange}
                    className="w-full px-4 py-2.5 border border-brand-gray-300 rounded-lg text-sm bg-white focus:ring-2 focus:ring-brand-blue focus:border-brand-blue outline-none transition"
                    placeholder="e.g., 1,000 units"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="product" className="block text-sm font-medium text-brand-gray-700 mb-1.5">
                  Product Description *
                </label>
                <input
                  id="product"
                  name="product"
                  type="text"
                  value={form.product}
                  onChange={onChange}
                  required
                  className="w-full px-4 py-2.5 border border-brand-gray-300 rounded-lg text-sm bg-white focus:ring-2 focus:ring-brand-blue focus:border-brand-blue outline-none transition"
                  placeholder="Describe the product you want to source"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-brand-gray-700 mb-1.5">
                  Additional Details
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  value={form.message}
                  onChange={onChange}
                  className="w-full px-4 py-2.5 border border-brand-gray-300 rounded-lg text-sm bg-white focus:ring-2 focus:ring-brand-blue focus:border-brand-blue outline-none transition resize-none"
                  placeholder="Any specific requirements, target price, certifications needed, etc."
                />
              </div>

              {error && (
                <div className="flex items-center gap-2 text-sm text-red-700 bg-red-50 rounded-lg px-4 py-3">
                  <AlertCircle className="w-4 h-4 shrink-0" />
                  {error}
                </div>
              )}

              {status === 'success' && (
                <div className="flex items-center gap-2 text-sm text-green-700 bg-green-50 rounded-lg px-4 py-3">
                  <CheckCircle className="w-4 h-4 shrink-0" />
                  Thank you! We will get back to you within 24 hours.
                </div>
              )}

              <button
                type="submit"
                disabled={status === 'submitting'}
                className="w-full flex items-center justify-center gap-2 px-6 py-3.5 bg-brand-blue text-white font-semibold rounded-lg hover:bg-brand-lightblue disabled:opacity-60 transition-colors"
              >
                {status === 'submitting' ? (
                  'Sending...'
                ) : (
                  <>
                    Get a Free Sourcing Quote
                    <Send className="w-4 h-4" />
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
