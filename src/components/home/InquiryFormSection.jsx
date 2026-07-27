import { useState } from 'react'
import { Send, CheckCircle } from 'lucide-react'

export default function InquiryFormSection() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    product: '',
    quantity: '',
    message: '',
  })
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setForm((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
      setSubmitted(true)
      setForm({ name: '', email: '', company: '', phone: '', product: '', quantity: '', message: '' })
    }, 1200)
  }

  if (submitted) {
    return (
      <section className="py-20 md:py-28 bg-brand-600">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <CheckCircle className="w-16 h-16 text-white mx-auto mb-6" />
          <h2 className="text-3xl font-bold text-white mb-4">Thank You for Your Inquiry</h2>
          <p className="text-brand-100 text-lg leading-relaxed">
            We have received your sourcing request. One of our sourcing specialists will get back to you within 24 hours with a preliminary assessment and a free quote.
          </p>
        </div>
      </section>
    )
  }

  return (
    <section className="py-20 md:py-28 bg-brand-600">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <p className="text-brand-200 font-semibold text-sm uppercase tracking-wider mb-3">
            Get Started
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight">
            Get a Free Sourcing Quote
          </h2>
          <p className="mt-4 text-brand-100 text-lg">
            Tell us what you need, and we will provide a free assessment within 24 hours.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="bg-white rounded-xl p-6 md:p-8 shadow-xl">
          <div className="grid sm:grid-cols-2 gap-4 mb-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-navy-700 mb-1.5">
                Your Name *
              </label>
              <input
                id="name"
                name="name"
                type="text"
                required
                value={form.name}
                onChange={handleChange}
                className="w-full rounded-lg border border-gray-200 px-4 py-2.5 text-sm text-navy-900 placeholder-navy-400 focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent transition"
                placeholder="John Smith"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-navy-700 mb-1.5">
                Email Address *
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                value={form.email}
                onChange={handleChange}
                className="w-full rounded-lg border border-gray-200 px-4 py-2.5 text-sm text-navy-900 placeholder-navy-400 focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent transition"
                placeholder="john@company.com"
              />
            </div>
            <div>
              <label htmlFor="company" className="block text-sm font-medium text-navy-700 mb-1.5">
                Company Name
              </label>
              <input
                id="company"
                name="company"
                type="text"
                value={form.company}
                onChange={handleChange}
                className="w-full rounded-lg border border-gray-200 px-4 py-2.5 text-sm text-navy-900 placeholder-navy-400 focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent transition"
                placeholder="Your Company Ltd."
              />
            </div>
            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-navy-700 mb-1.5">
                Phone Number
              </label>
              <input
                id="phone"
                name="phone"
                type="tel"
                value={form.phone}
                onChange={handleChange}
                className="w-full rounded-lg border border-gray-200 px-4 py-2.5 text-sm text-navy-900 placeholder-navy-400 focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent transition"
                placeholder="+1 234 567 890"
              />
            </div>
            <div>
              <label htmlFor="product" className="block text-sm font-medium text-navy-700 mb-1.5">
                Product You Need *
              </label>
              <input
                id="product"
                name="product"
                type="text"
                required
                value={form.product}
                onChange={handleChange}
                className="w-full rounded-lg border border-gray-200 px-4 py-2.5 text-sm text-navy-900 placeholder-navy-400 focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent transition"
                placeholder="e.g., LED light fixtures"
              />
            </div>
            <div>
              <label htmlFor="quantity" className="block text-sm font-medium text-navy-700 mb-1.5">
                Estimated Order Quantity
              </label>
              <input
                id="quantity"
                name="quantity"
                type="text"
                value={form.quantity}
                onChange={handleChange}
                className="w-full rounded-lg border border-gray-200 px-4 py-2.5 text-sm text-navy-900 placeholder-navy-400 focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent transition"
                placeholder="e.g., 1,000 units"
              />
            </div>
          </div>
          <div className="mb-4">
            <label htmlFor="message" className="block text-sm font-medium text-navy-700 mb-1.5">
              Additional Details
            </label>
            <textarea
              id="message"
              name="message"
              rows={4}
              value={form.message}
              onChange={handleChange}
              className="w-full rounded-lg border border-gray-200 px-4 py-2.5 text-sm text-navy-900 placeholder-navy-400 focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent transition resize-none"
              placeholder="Tell us more about your requirements, target price, delivery timeline, etc."
            />
          </div>
          <button
            type="submit"
            disabled={loading}
            className="w-full flex items-center justify-center gap-2 rounded-lg bg-brand-600 px-6 py-3.5 text-base font-semibold text-white hover:bg-brand-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {loading ? (
              'Sending...'
            ) : (
              <>
                Submit Inquiry
                <Send className="w-4 h-4" />
              </>
            )}
          </button>
          <p className="text-xs text-navy-400 text-center mt-4">
            We respect your privacy. Your information will never be shared with third parties.
          </p>
        </form>
      </div>
    </section>
  )
}