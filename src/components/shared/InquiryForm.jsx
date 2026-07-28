import { useState } from 'react'
import { Send, CheckCircle } from 'lucide-react'

const productCategories = [
  'Electronics & Components',
  'Machinery & Equipment',
  'Textiles & Apparel',
  'Home & Garden Products',
  'Automotive Parts',
  'Medical Supplies',
  'Custom Products',
  'Other',
]

export default function InquiryForm({ compact = false }) {
  const [submitted, setSubmitted] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    country: '',
    productCategory: '',
    quantity: '',
    message: '',
  })

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
  }

  if (submitted) {
    return (
      <div className="bg-white rounded-2xl shadow-lg p-8 text-center border border-gray-100">
        <div className="w-16 h-16 bg-trust-100 rounded-full flex items-center justify-center mx-auto mb-4">
          <CheckCircle className="w-8 h-8 text-trust-600" />
        </div>
        <h3 className="text-2xl font-bold text-navy-900 mb-2">Thank You!</h3>
        <p className="text-gray-600 mb-6">
          We&apos;ve received your inquiry. Our sourcing team will review your requirements
          and respond within 24 hours.
        </p>
        <button
          onClick={() => setSubmitted(false)}
          className="text-cta-500 hover:text-cta-600 font-semibold text-sm"
        >
          Submit another inquiry
        </button>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="bg-white rounded-2xl shadow-lg p-6 lg:p-8 border border-gray-100">
      {!compact && (
        <h3 className="text-2xl font-bold text-navy-900 mb-1">Get a Free Sourcing Quote</h3>
      )}
      {!compact && (
        <p className="text-gray-600 mb-6">Tell us what you need and we&apos;ll get back to you within 24 hours.</p>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-navy-700 mb-1.5">Full Name *</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full px-4 py-2.5 border border-gray-200 rounded-lg text-sm focus:ring-2 focus:ring-royal-500 focus:border-transparent outline-none transition-all text-navy-900 bg-white"
            placeholder="John Smith"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-navy-700 mb-1.5">Email *</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full px-4 py-2.5 border border-gray-200 rounded-lg text-sm focus:ring-2 focus:ring-royal-500 focus:border-transparent outline-none transition-all text-navy-900 bg-white"
            placeholder="john@company.com"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-navy-700 mb-1.5">Company</label>
          <input
            type="text"
            name="company"
            value={formData.company}
            onChange={handleChange}
            className="w-full px-4 py-2.5 border border-gray-200 rounded-lg text-sm focus:ring-2 focus:ring-royal-500 focus:border-transparent outline-none transition-all text-navy-900 bg-white"
            placeholder="Your Company Ltd."
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-navy-700 mb-1.5">Country *</label>
          <input
            type="text"
            name="country"
            value={formData.country}
            onChange={handleChange}
            required
            className="w-full px-4 py-2.5 border border-gray-200 rounded-lg text-sm focus:ring-2 focus:ring-royal-500 focus:border-transparent outline-none transition-all text-navy-900 bg-white"
            placeholder="United States"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-navy-700 mb-1.5">Product Category *</label>
          <select
            name="productCategory"
            value={formData.productCategory}
            onChange={handleChange}
            required
            className="w-full px-4 py-2.5 border border-gray-200 rounded-lg text-sm focus:ring-2 focus:ring-royal-500 focus:border-transparent outline-none transition-all text-navy-900 bg-white appearance-none"
          >
            <option value="">Select category...</option>
            {productCategories.map((cat) => (
              <option key={cat} value={cat}>{cat}</option>
            ))}
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-navy-700 mb-1.5">Estimated Quantity</label>
          <input
            type="text"
            name="quantity"
            value={formData.quantity}
            onChange={handleChange}
            className="w-full px-4 py-2.5 border border-gray-200 rounded-lg text-sm focus:ring-2 focus:ring-royal-500 focus:border-transparent outline-none transition-all text-navy-900 bg-white"
            placeholder="e.g., 500 units"
          />
        </div>

        <div className="md:col-span-2">
          <label className="block text-sm font-medium text-navy-700 mb-1.5">Product Details / Requirements</label>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            rows={4}
            className="w-full px-4 py-2.5 border border-gray-200 rounded-lg text-sm focus:ring-2 focus:ring-royal-500 focus:border-transparent outline-none transition-all resize-none text-navy-900 bg-white"
            placeholder="Describe the product you need, specifications, target price, etc."
          />
        </div>
      </div>

      <button
        type="submit"
        className="mt-4 w-full bg-cta-500 hover:bg-cta-600 text-white px-6 py-3 rounded-lg text-sm font-semibold transition-colors flex items-center justify-center gap-2 shadow-sm"
      >
        <Send className="w-4 h-4" />
        Submit Inquiry
      </button>

      <p className="mt-3 text-center text-xs text-gray-500">
        We respect your privacy. Your information will only be used to respond to your inquiry.
      </p>
    </form>
  )
}
