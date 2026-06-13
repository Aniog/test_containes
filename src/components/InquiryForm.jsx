import { useState } from 'react'
import { Send, CheckCircle, Loader2 } from 'lucide-react'

export default function InquiryForm({ compact = false }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    productCategory: '',
    quantity: '',
    message: '',
  })
  const [status, setStatus] = useState('idle')

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setStatus('submitting')
    setTimeout(() => {
      setStatus('success')
    }, 1500)
  }

  if (status === 'success') {
    return (
      <div className="text-center py-12 px-6">
        <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
        <h3 className="text-2xl font-bold text-[#0F172A] mb-2">Thank You!</h3>
        <p className="text-gray-600 text-base max-w-md mx-auto">
          We received your inquiry. Our sourcing team will review your requirements and get back to you within 24 hours.
        </p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className={compact ? 'grid grid-cols-1 gap-4' : 'grid grid-cols-1 md:grid-cols-2 gap-5'}>
        <div>
          <label className="block text-sm font-semibold text-[#0F172A] mb-1.5">Full Name *</label>
          <input
            type="text"
            name="name"
            required
            value={formData.name}
            onChange={handleChange}
            placeholder="John Smith"
            className="w-full px-4 py-3 rounded-lg border border-gray-200 bg-white text-[#0F172A] text-sm focus:outline-none focus:ring-2 focus:ring-[#1B4D8E] focus:border-transparent transition"
          />
        </div>
        <div>
          <label className="block text-sm font-semibold text-[#0F172A] mb-1.5">Business Email *</label>
          <input
            type="email"
            name="email"
            required
            value={formData.email}
            onChange={handleChange}
            placeholder="john@company.com"
            className="w-full px-4 py-3 rounded-lg border border-gray-200 bg-white text-[#0F172A] text-sm focus:outline-none focus:ring-2 focus:ring-[#1B4D8E] focus:border-transparent transition"
          />
        </div>
        {!compact && (
          <>
            <div>
              <label className="block text-sm font-semibold text-[#0F172A] mb-1.5">Company Name</label>
              <input
                type="text"
                name="company"
                value={formData.company}
                onChange={handleChange}
                placeholder="Your Company Ltd."
                className="w-full px-4 py-3 rounded-lg border border-gray-200 bg-white text-[#0F172A] text-sm focus:outline-none focus:ring-2 focus:ring-[#1B4D8E] focus:border-transparent transition"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-[#0F172A] mb-1.5">Phone Number</label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="+1 (555) 123-4567"
                className="w-full px-4 py-3 rounded-lg border border-gray-200 bg-white text-[#0F172A] text-sm focus:outline-none focus:ring-2 focus:ring-[#1B4D8E] focus:border-transparent transition"
              />
            </div>
          </>
        )}
        <div>
          <label className="block text-sm font-semibold text-[#0F172A] mb-1.5">Product Category</label>
          <select
            name="productCategory"
            value={formData.productCategory}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-lg border border-gray-200 bg-white text-[#0F172A] text-sm focus:outline-none focus:ring-2 focus:ring-[#1B4D8E] focus:border-transparent transition appearance-none"
          >
            <option value="">Select a category</option>
            <option value="electronics">Electronics & Gadgets</option>
            <option value="home-garden">Home & Garden</option>
            <option value="fashion">Fashion & Apparel</option>
            <option value="auto">Auto Parts & Accessories</option>
            <option value="beauty">Beauty & Personal Care</option>
            <option value="toys">Toys & Games</option>
            <option value="industrial">Industrial Equipment</option>
            <option value="packaging">Packaging & Printing</option>
            <option value="promotional">Promotional Products</option>
            <option value="other">Other</option>
          </select>
        </div>
        {!compact && (
          <div>
            <label className="block text-sm font-semibold text-[#0F172A] mb-1.5">Estimated Quantity</label>
            <input
              type="text"
              name="quantity"
              value={formData.quantity}
              onChange={handleChange}
              placeholder="e.g. 500 units"
              className="w-full px-4 py-3 rounded-lg border border-gray-200 bg-white text-[#0F172A] text-sm focus:outline-none focus:ring-2 focus:ring-[#1B4D8E] focus:border-transparent transition"
            />
          </div>
        )}
      </div>
      <div>
        <label className="block text-sm font-semibold text-[#0F172A] mb-1.5">Product Details / Requirements *</label>
        <textarea
          name="message"
          required
          rows={compact ? 4 : 5}
          value={formData.message}
          onChange={handleChange}
          placeholder="Describe the product you need, materials, specifications, target price range, etc."
          className="w-full px-4 py-3 rounded-lg border border-gray-200 bg-white text-[#0F172A] text-sm focus:outline-none focus:ring-2 focus:ring-[#1B4D8E] focus:border-transparent transition resize-y"
        />
      </div>
      <button
        type="submit"
        disabled={status === 'submitting'}
        className="inline-flex items-center gap-2 px-8 py-3.5 bg-[#1B4D8E] text-white font-bold rounded-lg hover:bg-[#133A6B] transition-all hover:-translate-y-0.5 disabled:opacity-60 disabled:cursor-not-allowed disabled:hover:translate-y-0 text-base border-none cursor-pointer shadow-lg"
      >
        {status === 'submitting' ? (
          <>
            <Loader2 className="w-5 h-5 animate-spin" />
            Sending...
          </>
        ) : (
          <>
            <Send className="w-5 h-5" />
            Send Inquiry
          </>
        )}
      </button>
      <p className="text-xs text-gray-400">
        We typically respond within 24 hours. Your information is kept confidential.
      </p>
    </form>
  )
}
