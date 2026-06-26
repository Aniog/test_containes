import React, { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Select } from '@/components/ui/select'

const InquiryForm = ({ compact = false }) => {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    country: '',
    productType: '',
    quantity: '',
    timeline: '',
    message: '',
  })
  const [status, setStatus] = useState('idle')
  const [error, setError] = useState('')

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setError('')
    setStatus('submitting')

    // Basic validation
    if (!formData.name || !formData.email || !formData.message) {
      setError('Please fill in your name, email, and message.')
      setStatus('idle')
      return
    }

    // Simulate API call
    try {
      await new Promise(resolve => setTimeout(resolve, 800))
      setStatus('success')
      setFormData({
        name: '', company: '', email: '', phone: '', country: '',
        productType: '', quantity: '', timeline: '', message: '',
      })
    } catch (err) {
      setError('Something went wrong. Please try again or email us directly.')
      setStatus('idle')
    }
  }

  if (status === 'success') {
    return (
      <div className="bg-emerald-50 border border-emerald-200 rounded-lg p-8 text-center">
        <h3 className="text-xl font-semibold text-emerald-900 mb-2">Thank you for your inquiry.</h3>
        <p className="text-emerald-700">We will contact you within 24 hours with a preliminary sourcing plan.</p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <div>
          <label className="block text-sm font-medium text-slate-700 mb-1.5">Full Name *</label>
          <Input name="name" value={formData.name} onChange={handleChange} placeholder="John Smith" required />
        </div>
        <div>
          <label className="block text-sm font-medium text-slate-700 mb-1.5">Company</label>
          <Input name="company" value={formData.company} onChange={handleChange} placeholder="Your Company Ltd" />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <div>
          <label className="block text-sm font-medium text-slate-700 mb-1.5">Business Email *</label>
          <Input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="you@company.com" required />
        </div>
        <div>
          <label className="block text-sm font-medium text-slate-700 mb-1.5">Phone / WhatsApp</label>
          <Input name="phone" value={formData.phone} onChange={handleChange} placeholder="+1 555 123 4567" />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <div>
          <label className="block text-sm font-medium text-slate-700 mb-1.5">Country / Region</label>
          <Input name="country" value={formData.country} onChange={handleChange} placeholder="United States" />
        </div>
        <div>
          <label className="block text-sm font-medium text-slate-700 mb-1.5">Product Category</label>
          <Select name="productType" value={formData.productType} onChange={handleChange}>
            <option value="">Select a category</option>
            <option value="Electronics & Components">Electronics & Components</option>
            <option value="Home & Kitchen">Home & Kitchen</option>
            <option value="Apparel & Textiles">Apparel & Textiles</option>
            <option value="Industrial Equipment">Industrial Equipment</option>
            <option value="Consumer Goods">Consumer Goods</option>
            <option value="Automotive Parts">Automotive Parts</option>
            <option value="Other">Other</option>
          </Select>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <div>
          <label className="block text-sm font-medium text-slate-700 mb-1.5">Estimated Annual Quantity</label>
          <Input name="quantity" value={formData.quantity} onChange={handleChange} placeholder="e.g., 5,000 units" />
        </div>
        <div>
          <label className="block text-sm font-medium text-slate-700 mb-1.5">Target Timeline</label>
          <Select name="timeline" value={formData.timeline} onChange={handleChange}>
            <option value="">Select timeline</option>
            <option value="Within 1 month">Within 1 month</option>
            <option value="1-3 months">1-3 months</option>
            <option value="3-6 months">3-6 months</option>
            <option value="6+ months">6+ months</option>
          </Select>
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-slate-700 mb-1.5">Project Details *</label>
        <Textarea 
          name="message" 
          value={formData.message} 
          onChange={handleChange} 
          placeholder="Please describe the product you want to source, target price range, quality requirements, or any specific questions."
          required 
        />
      </div>

      {error && <p className="text-sm text-red-600">{error}</p>}

      <Button 
        type="submit" 
        size="lg" 
        className="w-full md:w-auto"
        disabled={status === 'submitting'}
      >
        {status === 'submitting' ? 'Submitting...' : 'Submit Inquiry'}
      </Button>

      <p className="text-xs text-slate-500">We respect your privacy. Your information will only be used to respond to your inquiry.</p>
    </form>
  )
}

export default InquiryForm
