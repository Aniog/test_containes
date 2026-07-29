import { useState } from 'react'
import { Send, CheckCircle } from 'lucide-react'

export default function SourcingInquiryForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    product: '',
    quantity: '',
    message: '',
  })
  const [status, setStatus] = useState('idle')
  const [error, setError] = useState(null)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setError(null)

    if (!formData.name.trim()) { setError('Name is required'); return }
    if (!formData.email.trim()) { setError('Email is required'); return }
    if (!/^\S+@\S+\.\S+$/.test(formData.email)) { setError('Please provide a valid email'); return }
    if (!formData.message.trim()) { setError('Please describe your sourcing needs'); return }

    setStatus('submitting')

    // Simulate form submission
    setTimeout(() => {
      setStatus('success')
      setFormData({ name: '', email: '', company: '', product: '', quantity: '', message: '' })
    }, 1500)
  }

  if (status === 'success') {
    return (
      <div className="text-center py-6">
        <CheckCircle className="w-10 h-10 text-green-500 mx-auto mb-3" />
        <h3 className="text-lg font-semibold text-slate-900 mb-2">Inquiry Received</h3>
        <p className="text-sm text-slate-600 mb-4">We will review your request and get back to you within 24 hours.</p>
        <button
          onClick={() => setStatus('idle')}
          className="text-blue-700 font-semibold text-sm hover:text-blue-800 transition-colors"
        >
          Submit another inquiry
        </button>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <h3 className="text-lg font-bold text-slate-900">Get a Free Sourcing Quote</h3>

      <div>
        <label htmlFor="inquiry-name" className="block text-sm font-medium text-slate-700 mb-1">
          Name <span className="text-red-500">*</span>
        </label>
        <input
          id="inquiry-name"
          name="name"
          type="text"
          value={formData.name}
          onChange={handleChange}
          className="w-full px-3 py-2.5 border border-slate-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          placeholder="Your name"
          required
        />
      </div>

      <div>
        <label htmlFor="inquiry-email" className="block text-sm font-medium text-slate-700 mb-1">
          Email <span className="text-red-500">*</span>
        </label>
        <input
          id="inquiry-email"
          name="email"
          type="email"
          value={formData.email}
          onChange={handleChange}
          className="w-full px-3 py-2.5 border border-slate-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          placeholder="you@company.com"
          required
        />
      </div>

      <div>
        <label htmlFor="inquiry-company" className="block text-sm font-medium text-slate-700 mb-1">
          Company
        </label>
        <input
          id="inquiry-company"
          name="company"
          type="text"
          value={formData.company}
          onChange={handleChange}
          className="w-full px-3 py-2.5 border border-slate-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          placeholder="Your company name"
        />
      </div>

      <div className="grid grid-cols-2 gap-3">
        <div>
          <label htmlFor="inquiry-product" className="block text-sm font-medium text-slate-700 mb-1">
            Product
          </label>
          <input
            id="inquiry-product"
            name="product"
            type="text"
            value={formData.product}
            onChange={handleChange}
            className="w-full px-3 py-2.5 border border-slate-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            placeholder="Product name"
          />
        </div>
        <div>
          <label htmlFor="inquiry-quantity" className="block text-sm font-medium text-slate-700 mb-1">
            Quantity
          </label>
          <input
            id="inquiry-quantity"
            name="quantity"
            type="text"
            value={formData.quantity}
            onChange={handleChange}
            className="w-full px-3 py-2.5 border border-slate-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            placeholder="e.g., 500 units"
          />
        </div>
      </div>

      <div>
        <label htmlFor="inquiry-message" className="block text-sm font-medium text-slate-700 mb-1">
          Describe Your Needs <span className="text-red-500">*</span>
        </label>
        <textarea
          id="inquiry-message"
          name="message"
          rows={4}
          value={formData.message}
          onChange={handleChange}
          className="w-full px-3 py-2.5 border border-slate-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
          placeholder="Tell us about the product you need, specifications, quality requirements, target price, and timeline..."
          required
        />
      </div>

      {error && (
        <p className="text-sm text-red-600" role="alert">{error}</p>
      )}

      <button
        type="submit"
        disabled={status === 'submitting'}
        className="w-full bg-blue-700 hover:bg-blue-800 disabled:bg-blue-400 text-white px-6 py-3 rounded-lg font-semibold flex items-center justify-center gap-2 transition-colors"
      >
        {status === 'submitting' ? (
          'Sending...'
        ) : (
          <>
            <Send className="w-4 h-4" />
            Get a Free Sourcing Quote
          </>
        )}
      </button>
    </form>
  )
}
