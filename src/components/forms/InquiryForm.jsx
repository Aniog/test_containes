import React, { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Label } from '@/components/ui/label'
import { Select } from '@/components/ui/select'
import { toast } from 'sonner'

const InquiryForm = ({ compact = false }) => {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    productCategory: '',
    estimatedQuantity: '',
    message: '',
  })
  const [errors, setErrors] = useState({})
  const [isSubmitting, setIsSubmitting] = useState(false)

  const productCategories = [
    'Electronics & Components',
    'Machinery & Equipment',
    'Textiles & Apparel',
    'Home & Garden',
    'Automotive Parts',
    'Medical & Healthcare',
    'Consumer Goods',
    'Industrial Materials',
    'Packaging & Printing',
    'Other',
  ]

  const validate = () => {
    const newErrors = {}

    if (!formData.name.trim()) newErrors.name = 'Name is required'
    if (!formData.company.trim()) newErrors.company = 'Company is required'
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required'
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address'
    }
    if (!formData.message.trim()) newErrors.message = 'Please describe your sourcing needs'

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }))
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    if (!validate()) {
      toast.error('Please fill in all required fields correctly.')
      return
    }

    setIsSubmitting(true)

    // Simulate API call (frontend only)
    await new Promise((resolve) => setTimeout(resolve, 800))

    toast.success('Thank you. Your inquiry has been received. We will contact you within 24 hours.')

    setFormData({
      name: '',
      company: '',
      email: '',
      phone: '',
      productCategory: '',
      estimatedQuantity: '',
      message: '',
    })
    setErrors({})
    setIsSubmitting(false)
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <div>
          <Label htmlFor="name">Full Name *</Label>
          <Input
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="John Smith"
            className={errors.name ? 'border-red-500' : ''}
          />
          {errors.name && <p className="text-xs text-red-600 mt-1">{errors.name}</p>}
        </div>
        <div>
          <Label htmlFor="company">Company Name *</Label>
          <Input
            id="company"
            name="company"
            value={formData.company}
            onChange={handleChange}
            placeholder="Your Company Ltd."
            className={errors.company ? 'border-red-500' : ''}
          />
          {errors.company && <p className="text-xs text-red-600 mt-1">{errors.company}</p>}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <div>
          <Label htmlFor="email">Business Email *</Label>
          <Input
            id="email"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="you@company.com"
            className={errors.email ? 'border-red-500' : ''}
          />
          {errors.email && <p className="text-xs text-red-600 mt-1">{errors.email}</p>}
        </div>
        <div>
          <Label htmlFor="phone">Phone Number</Label>
          <Input
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="+1 555 123 4567"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <div>
          <Label htmlFor="productCategory">Product Category</Label>
          <Select
            id="productCategory"
            name="productCategory"
            value={formData.productCategory}
            onChange={handleChange}
          >
            <option value="">Select a category</option>
            {productCategories.map((cat) => (
              <option key={cat} value={cat}>{cat}</option>
            ))}
          </Select>
        </div>
        <div>
          <Label htmlFor="estimatedQuantity">Estimated Annual Quantity</Label>
          <Input
            id="estimatedQuantity"
            name="estimatedQuantity"
            value={formData.estimatedQuantity}
            onChange={handleChange}
            placeholder="e.g., 5,000 units"
          />
        </div>
      </div>

      <div>
        <Label htmlFor="message">Sourcing Requirements *</Label>
        <Textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          placeholder="Please describe the products you are looking to source, target specifications, timeline, and any other relevant details."
          className={errors.message ? 'border-red-500' : ''}
        />
        {errors.message && <p className="text-xs text-red-600 mt-1">{errors.message}</p>}
      </div>

      <Button type="submit" size="lg" className="w-full md:w-auto" disabled={isSubmitting}>
        {isSubmitting ? 'Submitting...' : 'Get a Free Sourcing Quote'}
      </Button>

      <p className="text-xs text-slate-500">We typically respond within 24 business hours. Your information is kept confidential.</p>
    </form>
  )
}

export default InquiryForm
