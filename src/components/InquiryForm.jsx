import React, { useState } from 'react'

const InquiryForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    product: '',
    quantity: '',
    message: '',
  })
  const [submitted, setSubmitted] = useState(false)
  const [errors, setErrors] = useState({})

  const validate = () => {
    const newErrors = {}
    if (!formData.name.trim()) newErrors.name = 'Name is required'
    if (!formData.company.trim()) newErrors.company = 'Company is required'
    if (!formData.email.trim()) newErrors.email = 'Email is required'
    else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = 'Invalid email'
    if (!formData.product.trim()) newErrors.product = 'Product is required'
    return newErrors
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const newErrors = validate()
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors)
      return
    }
    setErrors({})
    setSubmitted(true)
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }))
    }
  }

  if (submitted) {
    return (
      <div className="bg-green-50 border border-green-200 rounded-lg p-8 text-center">
        <h3 className="text-xl font-semibold text-green-800 mb-2">Thank you for your inquiry</h3>
        <p className="text-green-700">We will respond within 24 hours with a detailed sourcing proposal.</p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-medium mb-2">Full Name *</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className={`w-full h-12 px-4 border rounded ${errors.name ? 'border-red-500' : 'border-gray-300'}`}
          />
          {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
        </div>
        <div>
          <label className="block text-sm font-medium mb-2">Company *</label>
          <input
            type="text"
            name="company"
            value={formData.company}
            onChange={handleChange}
            className={`w-full h-12 px-4 border rounded ${errors.company ? 'border-red-500' : 'border-gray-300'}`}
          />
          {errors.company && <p className="text-red-500 text-sm mt-1">{errors.company}</p>}
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-medium mb-2">Email Address *</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className={`w-full h-12 px-4 border rounded ${errors.email ? 'border-red-500' : 'border-gray-300'}`}
          />
          {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
        </div>
        <div>
          <label className="block text-sm font-medium mb-2">Phone Number</label>
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className="w-full h-12 px-4 border border-gray-300 rounded"
          />
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-medium mb-2">Product Category *</label>
          <input
            type="text"
            name="product"
            value={formData.product}
            onChange={handleChange}
            placeholder="e.g., Electronics, Textiles, Machinery"
            className={`w-full h-12 px-4 border rounded ${errors.product ? 'border-red-500' : 'border-gray-300'}`}
          />
          {errors.product && <p className="text-red-500 text-sm mt-1">{errors.product}</p>}
        </div>
        <div>
          <label className="block text-sm font-medium mb-2">Estimated Annual Quantity</label>
          <input
            type="text"
            name="quantity"
            value={formData.quantity}
            onChange={handleChange}
            placeholder="e.g., 5,000 units"
            className="w-full h-12 px-4 border border-gray-300 rounded"
          />
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium mb-2">Additional Details</label>
        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          rows={5}
          placeholder="Tell us about your sourcing requirements, target price range, timeline, or any specific certifications needed."
          className="w-full px-4 py-3 border border-gray-300 rounded resize-y"
        />
      </div>

      <button
        type="submit"
        className="w-full md:w-auto h-12 px-8 bg-[#0A2540] text-white text-sm font-medium rounded hover:bg-[#1E40AF] transition-colors"
      >
        Submit Inquiry
      </button>

      <p className="text-xs text-gray-500">* Required fields. We respect your privacy and will never share your information.</p>
    </form>
  )
}

export default InquiryForm