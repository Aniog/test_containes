import React, { useState } from 'react'
import { Send } from 'lucide-react'

const InquiryForm = ({ compact = false, title = "Get a Free Sourcing Quote" }) => {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    country: '',
    productCategory: '',
    quantity: '',
    timeline: '',
    message: '',
  })
  const [status, setStatus] = useState('idle')
  const [errors, setErrors] = useState({})

  const productCategories = [
    'Consumer Electronics',
    'Home & Garden',
    'Fashion & Apparel',
    'Industrial Equipment',
    'Automotive Parts',
    'Toys & Games',
    'Beauty & Personal Care',
    'Sports & Outdoors',
    'Furniture & Home Decor',
    'Other',
  ]

  const timelines = [
    'Within 1 month',
    '1-3 months',
    '3-6 months',
    '6+ months',
    'Just exploring',
  ]

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }))
    }
  }

  const validate = () => {
    const newErrors = {}
    if (!formData.name.trim()) newErrors.name = 'Name is required'
    if (!formData.company.trim()) newErrors.company = 'Company is required'
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required'
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email'
    }
    if (!formData.country.trim()) newErrors.country = 'Country is required'
    if (!formData.productCategory) newErrors.productCategory = 'Please select a category'
    if (!formData.message.trim()) newErrors.message = 'Please describe your sourcing needs'
    return newErrors
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const newErrors = validate()
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors)
      return
    }

    setStatus('submitting')

    // Simulate API call - in production this would submit to backend
    setTimeout(() => {
      setStatus('success')
      setFormData({
        name: '',
        company: '',
        email: '',
        phone: '',
        country: '',
        productCategory: '',
        quantity: '',
        timeline: '',
        message: '',
      })
      setErrors({})
      
      setTimeout(() => {
        setStatus('idle')
      }, 4000)
    }, 800)
  }

  if (status === 'success') {
    return (
      <div className="bg-emerald-50 border border-emerald-200 rounded-lg p-8 text-center">
        <div className="w-14 h-14 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
          <Send className="w-7 h-7 text-emerald-600" />
        </div>
        <h3 className="text-xl font-semibold text-emerald-900 mb-2">Thank You</h3>
        <p className="text-emerald-700">Your inquiry has been received. A sourcing specialist will contact you within 24 hours.</p>
      </div>
    )
  }

  return (
    <div className={compact ? '' : 'bg-white rounded-xl border border-slate-200 p-8 md:p-10'}>
      {!compact && (
        <div className="mb-8">
          <h2 className="text-2xl font-semibold text-slate-900 mb-2">{title}</h2>
          <p className="text-slate-600">Fill out the form below and we'll prepare a customized sourcing proposal.</p>
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-5">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1.5">Full Name *</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className={`w-full px-4 py-2.5 border rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-slate-900/10 ${errors.name ? 'border-red-300' : 'border-slate-300'}`}
              placeholder="John Smith"
            />
            {errors.name && <p className="text-xs text-red-600 mt-1">{errors.name}</p>}
          </div>
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1.5">Company Name *</label>
            <input
              type="text"
              name="company"
              value={formData.company}
              onChange={handleChange}
              className={`w-full px-4 py-2.5 border rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-slate-900/10 ${errors.company ? 'border-red-300' : 'border-slate-300'}`}
              placeholder="Your Company Ltd"
            />
            {errors.company && <p className="text-xs text-red-600 mt-1">{errors.company}</p>}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1.5">Business Email *</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className={`w-full px-4 py-2.5 border rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-slate-900/10 ${errors.email ? 'border-red-300' : 'border-slate-300'}`}
              placeholder="you@company.com"
            />
            {errors.email && <p className="text-xs text-red-600 mt-1">{errors.email}</p>}
          </div>
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1.5">Phone Number</label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="w-full px-4 py-2.5 border border-slate-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-slate-900/10"
              placeholder="+1 555 123 4567"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1.5">Country / Region *</label>
            <input
              type="text"
              name="country"
              value={formData.country}
              onChange={handleChange}
              className={`w-full px-4 py-2.5 border rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-slate-900/10 ${errors.country ? 'border-red-300' : 'border-slate-300'}`}
              placeholder="United States"
            />
            {errors.country && <p className="text-xs text-red-600 mt-1">{errors.country}</p>}
          </div>
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1.5">Product Category *</label>
            <select
              name="productCategory"
              value={formData.productCategory}
              onChange={handleChange}
              className={`w-full px-4 py-2.5 border rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-slate-900/10 bg-white ${errors.productCategory ? 'border-red-300' : 'border-slate-300'}`}
            >
              <option value="">Select a category</option>
              {productCategories.map((cat) => (
                <option key={cat} value={cat}>{cat}</option>
              ))}
            </select>
            {errors.productCategory && <p className="text-xs text-red-600 mt-1">{errors.productCategory}</p>}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1.5">Estimated Order Quantity</label>
            <input
              type="text"
              name="quantity"
              value={formData.quantity}
              onChange={handleChange}
              className="w-full px-4 py-2.5 border border-slate-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-slate-900/10"
              placeholder="e.g., 500-1000 units"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1.5">Target Timeline</label>
            <select
              name="timeline"
              value={formData.timeline}
              onChange={handleChange}
              className="w-full px-4 py-2.5 border border-slate-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-slate-900/10 bg-white"
            >
              <option value="">Select timeline</option>
              {timelines.map((t) => (
                <option key={t} value={t}>{t}</option>
              ))}
            </select>
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-slate-700 mb-1.5">Tell us about your sourcing needs *</label>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            rows={5}
            className={`w-full px-4 py-3 border rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-slate-900/10 resize-y ${errors.message ? 'border-red-300' : 'border-slate-300'}`}
            placeholder="Please describe the products you're looking to source, target price range, quality requirements, or any specific concerns..."
          />
          {errors.message && <p className="text-xs text-red-600 mt-1">{errors.message}</p>}
        </div>

        <button
          type="submit"
          disabled={status === 'submitting'}
          className="w-full md:w-auto px-8 py-3 bg-slate-900 text-white text-sm font-medium rounded-md hover:bg-slate-800 transition-colors disabled:opacity-70 flex items-center justify-center gap-2"
        >
          {status === 'submitting' ? 'Submitting...' : 'Submit Inquiry'}
          <Send className="w-4 h-4" />
        </button>

        <p className="text-xs text-slate-500">We typically respond within 24 business hours. Your information is kept confidential.</p>
      </form>
    </div>
  )
}

export default InquiryForm
