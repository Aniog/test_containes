import React, { useState } from 'react'
import { Button } from './ui/button'
import { Input } from './ui/input'
import { Textarea } from './ui/textarea'
import { Label } from './ui/label'
import { toast } from 'sonner'

const InquiryForm = ({ variant = 'default' }) => {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    productCategory: '',
    quantity: '',
    targetPrice: '',
    timeline: '',
    message: '',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    // Basic validation
    if (!formData.name || !formData.email || !formData.message) {
      toast.error('Please fill in your name, email, and message.')
      return
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(formData.email)) {
      toast.error('Please enter a valid email address.')
      return
    }

    setIsSubmitting(true)

    // Simulate form submission
    setTimeout(() => {
      toast.success('Thank you. Your inquiry has been received. We will contact you within 24 hours.')
      setFormData({
        name: '',
        company: '',
        email: '',
        phone: '',
        productCategory: '',
        quantity: '',
        targetPrice: '',
        timeline: '',
        message: '',
      })
      setIsSubmitting(false)
    }, 800)
  }

  const isCompact = variant === 'compact'

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
            required
          />
        </div>
        <div>
          <Label htmlFor="company">Company</Label>
          <Input
            id="company"
            name="company"
            value={formData.company}
            onChange={handleChange}
            placeholder="Your Company Ltd"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <div>
          <Label htmlFor="email">Email Address *</Label>
          <Input
            id="email"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="you@company.com"
            required
          />
        </div>
        <div>
          <Label htmlFor="phone">Phone / WhatsApp</Label>
          <Input
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="+1 555 123 4567"
          />
        </div>
      </div>

      {!isCompact && (
        <>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div>
              <Label htmlFor="productCategory">Product Category</Label>
              <Input
                id="productCategory"
                name="productCategory"
                value={formData.productCategory}
                onChange={handleChange}
                placeholder="e.g., Electronics, Textiles, Machinery"
              />
            </div>
            <div>
              <Label htmlFor="quantity">Estimated Quantity</Label>
              <Input
                id="quantity"
                name="quantity"
                value={formData.quantity}
                onChange={handleChange}
                placeholder="e.g., 5,000 units"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div>
              <Label htmlFor="targetPrice">Target Price Range</Label>
              <Input
                id="targetPrice"
                name="targetPrice"
                value={formData.targetPrice}
                onChange={handleChange}
                placeholder="e.g., $2.50 - $3.00 per unit"
              />
            </div>
            <div>
              <Label htmlFor="timeline">Required Timeline</Label>
              <Input
                id="timeline"
                name="timeline"
                value={formData.timeline}
                onChange={handleChange}
                placeholder="e.g., Within 8 weeks"
              />
            </div>
          </div>
        </>
      )}

      <div>
        <Label htmlFor="message">Message / Requirements *</Label>
        <Textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          placeholder="Please describe the products you are looking to source, any specific requirements, certifications needed, or questions you have."
          required
        />
      </div>

      <Button type="submit" disabled={isSubmitting} className="w-full md:w-auto" size="lg">
        {isSubmitting ? 'Submitting...' : 'Submit Inquiry'}
      </Button>

      <p className="text-xs text-[#64748B]">
        We typically respond within 24 hours. Your information is kept confidential.
      </p>
    </form>
  )
}

export default InquiryForm
