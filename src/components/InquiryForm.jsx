import React, { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Select } from '@/components/ui/select'
import { Label } from '@/components/ui/label'

const InquiryForm = ({ compact = false, onSuccess }) => {
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
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const [error, setError] = useState('')

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const validate = () => {
    if (!formData.name.trim()) return 'Name is required'
    if (!formData.company.trim()) return 'Company is required'
    if (!formData.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) return 'Valid email is required'
    if (!formData.productCategory) return 'Please select a product category'
    if (!formData.message.trim()) return 'Please describe your sourcing needs'
    return null
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setError('')

    const validationError = validate()
    if (validationError) {
      setError(validationError)
      return
    }

    setIsSubmitting(true)

    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 800))

    setIsSubmitting(false)
    setSubmitted(true)

    if (onSuccess) {
      onSuccess(formData)
    }

    // Reset form after 3 seconds for non-compact
    if (!compact) {
      setTimeout(() => {
        setSubmitted(false)
        setFormData({
          name: '', company: '', email: '', phone: '', country: '',
          productCategory: '', quantity: '', timeline: '', message: '',
        })
      }, 3000)
    }
  }

  if (submitted && compact) {
    return (
      <div className="text-center py-8">
        <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
          <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="text-lg font-semibold text-slate-900 mb-1">Thank you</h3>
        <p className="text-sm text-slate-600">We'll contact you within 24 hours.</p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      {error && (
        <div className="p-3 bg-red-50 border border-red-200 text-red-700 text-sm rounded">
          {error}
        </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <div>
          <Label htmlFor="name">Full Name *</Label>
          <Input id="name" name="name" value={formData.name} onChange={handleChange} placeholder="John Smith" required />
        </div>
        <div>
          <Label htmlFor="company">Company *</Label>
          <Input id="company" name="company" value={formData.company} onChange={handleChange} placeholder="Your Company Ltd" required />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <div>
          <Label htmlFor="email">Business Email *</Label>
          <Input id="email" name="email" type="email" value={formData.email} onChange={handleChange} placeholder="you@company.com" required />
        </div>
        <div>
          <Label htmlFor="phone">Phone / WhatsApp</Label>
          <Input id="phone" name="phone" value={formData.phone} onChange={handleChange} placeholder="+1 555 123 4567" />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <div>
          <Label htmlFor="country">Country / Region</Label>
          <Input id="country" name="country" value={formData.country} onChange={handleChange} placeholder="United States" />
        </div>
        <div>
          <Label htmlFor="productCategory">Product Category *</Label>
          <Select id="productCategory" name="productCategory" value={formData.productCategory} onChange={handleChange} required>
            <option value="">Select category</option>
            <option value="Electronics & Components">Electronics & Components</option>
            <option value="Home & Kitchen">Home & Kitchen</option>
            <option value="Apparel & Textiles">Apparel & Textiles</option>
            <option value="Industrial Equipment">Industrial Equipment</option>
            <option value="Automotive Parts">Automotive Parts</option>
            <option value="Consumer Goods">Consumer Goods</option>
            <option value="Packaging & Materials">Packaging & Materials</option>
            <option value="Other">Other</option>
          </Select>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <div>
          <Label htmlFor="quantity">Estimated Annual Quantity</Label>
          <Input id="quantity" name="quantity" value={formData.quantity} onChange={handleChange} placeholder="e.g. 5,000 units" />
        </div>
        <div>
          <Label htmlFor="timeline">Target Timeline</Label>
          <Select id="timeline" name="timeline" value={formData.timeline} onChange={handleChange}>
            <option value="">Select timeline</option>
            <option value="Within 1 month">Within 1 month</option>
            <option value="1-3 months">1-3 months</option>
            <option value="3-6 months">3-6 months</option>
            <option value="6+ months">6+ months</option>
          </Select>
        </div>
      </div>

      <div>
        <Label htmlFor="message">Sourcing Requirements *</Label>
        <Textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          placeholder="Please describe the products you need, target specifications, quality requirements, or any other details..."
          required
        />
      </div>

      <Button type="submit" className="w-full md:w-auto" disabled={isSubmitting}>
        {isSubmitting ? 'Submitting...' : 'Get a Free Sourcing Quote'}
      </Button>

      <p className="text-xs text-slate-500">We typically respond within 24 business hours. Your information is kept confidential.</p>
    </form>
  )
}

export default InquiryForm
