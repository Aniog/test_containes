import { useState } from 'react'
import { Send, CheckCircle, AlertCircle } from 'lucide-react'

export default function InquirySection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    product: '',
    quantity: '',
    message: '',
  })
  const [status, setStatus] = useState('idle')
  const [error, setError] = useState('')

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setError('')
    setStatus('submitting')

    // Simulate form submission for now
    try {
      await new Promise((resolve) => setTimeout(resolve, 1500))
      setStatus('success')
      setFormData({ name: '', email: '', company: '', product: '', quantity: '', message: '' })
    } catch (err) {
      setError('Something went wrong. Please try again.')
      setStatus('error')
    }
  }

  if (status === 'success') {
    return (
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <CheckCircle className="w-8 h-8 text-green-600" />
          </div>
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">Thank You</h2>
          <p className="text-gray-600 text-lg">
            Your inquiry has been received. We will review your requirements and get back to you within 1-2 business days.
          </p>
        </div>
      </section>
    )
  }

  return (
    <section className="py-16 md:py-24 bg-gray-50">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <span className="text-sm font-semibold text-brand-600 uppercase tracking-wider">Get Started</span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-3 mb-4">
            Request a Free Sourcing Quote
          </h2>
          <p className="text-gray-600 max-w-xl mx-auto">
            Tell us about the products you want to source, and we will provide a no-obligation assessment and quote.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="bg-white border border-gray-200 rounded-xl p-6 md:p-8 shadow-sm">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1.5">
                Full Name <span className="text-red-500">*</span>
              </label>
              <input
                id="name"
                name="name"
                type="text"
                required
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-2.5 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-brand-500 focus:border-brand-500 outline-none transition-colors"
                placeholder="Your name"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1.5">
                Business Email <span className="text-red-500">*</span>
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-2.5 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-brand-500 focus:border-brand-500 outline-none transition-colors"
                placeholder="you@company.com"
              />
            </div>
            <div>
              <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-1.5">
                Company Name
              </label>
              <input
                id="company"
                name="company"
                type="text"
                value={formData.company}
                onChange={handleChange}
                className="w-full px-4 py-2.5 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-brand-500 focus:border-brand-500 outline-none transition-colors"
                placeholder="Your company"
              />
            </div>
            <div>
              <label htmlFor="product" className="block text-sm font-medium text-gray-700 mb-1.5">
                Product to Source <span className="text-red-500">*</span>
              </label>
              <input
                id="product"
                name="product"
                type="text"
                required
                value={formData.product}
                onChange={handleChange}
                className="w-full px-4 py-2.5 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-brand-500 focus:border-brand-500 outline-none transition-colors"
                placeholder="e.g. Stainless steel water bottles"
              />
            </div>
            <div>
              <label htmlFor="quantity" className="block text-sm font-medium text-gray-700 mb-1.5">
                Estimated Quantity
              </label>
              <input
                id="quantity"
                name="quantity"
                type="text"
                value={formData.quantity}
                onChange={handleChange}
                className="w-full px-4 py-2.5 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-brand-500 focus:border-brand-500 outline-none transition-colors"
                placeholder="e.g. 1,000 units per month"
              />
            </div>
          </div>

          <div className="mt-5">
            <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1.5">
              Tell Us More About Your Requirements
            </label>
            <textarea
              id="message"
              name="message"
              rows={4}
              value={formData.message}
              onChange={handleChange}
              className="w-full px-4 py-2.5 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-brand-500 focus:border-brand-500 outline-none transition-colors resize-y"
              placeholder="Describe your product specifications, target price, quality standards, target markets, or any other details..."
            />
          </div>

          {error && (
            <div className="mt-4 flex items-center gap-2 text-red-600 text-sm">
              <AlertCircle className="w-4 h-4" />
              {error}
            </div>
          )}

          <button
            type="submit"
            disabled={status === 'submitting'}
            className="mt-6 w-full inline-flex items-center justify-center gap-2 bg-brand-600 hover:bg-brand-700 text-white px-6 py-3 rounded-lg text-base font-semibold transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
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
    </section>
  )
}