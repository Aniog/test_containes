import React, { useState } from 'react'
import { Button } from '../components/ui/button'
import { Input } from '../components/ui/input'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    product: '',
    quantity: '',
    message: ''
  })
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
  }

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  if (submitted) {
    return (
      <div className="max-w-lg mx-auto px-6 py-20 text-center">
        <h2 className="text-2xl font-semibold text-[#0F2942] mb-4">Thank You</h2>
        <p className="text-[#475569]">We've received your inquiry. A sourcing specialist will contact you within 24 hours.</p>
      </div>
    )
  }

  return (
    <div className="max-w-5xl mx-auto px-6 py-12 md:py-16">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-semibold text-[#0F2942] mb-4">Get a Free Sourcing Quote</h1>
        <p className="text-[#475569]">Tell us about your project and we'll provide a customized sourcing plan within 48 hours.</p>
      </div>

      <div className="grid md:grid-cols-2 gap-12">
        <div>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-[#475569] mb-1.5">Full Name</label>
                <Input name="name" value={formData.name} onChange={handleChange} required />
              </div>
              <div>
                <label className="block text-sm font-medium text-[#475569] mb-1.5">Company</label>
                <Input name="company" value={formData.company} onChange={handleChange} required />
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-[#475569] mb-1.5">Email</label>
                <Input type="email" name="email" value={formData.email} onChange={handleChange} required />
              </div>
              <div>
                <label className="block text-sm font-medium text-[#475569] mb-1.5">Phone</label>
                <Input type="tel" name="phone" value={formData.phone} onChange={handleChange} />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-[#475569] mb-1.5">Product Description</label>
              <Input name="product" value={formData.product} onChange={handleChange} placeholder="e.g., Bluetooth earbuds, stainless steel water bottles" required />
            </div>
            <div>
              <label className="block text-sm font-medium text-[#475569] mb-1.5">Estimated Annual Quantity</label>
              <Input name="quantity" value={formData.quantity} onChange={handleChange} placeholder="e.g., 5,000 units" />
            </div>
            <div>
              <label className="block text-sm font-medium text-[#475569] mb-1.5">Additional Details</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={4}
                className="flex w-full rounded-lg border border-[#E2E8F0] bg-white px-4 py-2 text-sm text-[#0F2942] placeholder:text-[#94A3B8] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0D9488]"
                placeholder="Target price range, quality requirements, timeline, or other specifications..."
              />
            </div>
            <Button type="submit" size="lg" className="w-full">Submit Inquiry</Button>
          </form>
        </div>

        <div className="space-y-8">
          <div>
            <h3 className="font-semibold text-[#0F2942] mb-3">What Happens Next</h3>
            <ol className="space-y-3 text-sm text-[#475569]">
              <li className="flex gap-3"><span className="font-medium text-[#0D9488]">1.</span> We review your requirements within 24 hours.</li>
              <li className="flex gap-3"><span className="font-medium text-[#0D9488]">2.</span> A sourcing specialist contacts you to discuss details.</li>
              <li className="flex gap-3"><span className="font-medium text-[#0D9488]">3.</span> We provide a customized sourcing plan and initial supplier recommendations.</li>
              <li className="flex gap-3"><span className="font-medium text-[#0D9488]">4.</span> If you proceed, we begin the supplier identification process.</li>
            </ol>
          </div>

          <div className="bg-white p-6 rounded-lg border border-[#E2E8F0]">
            <h3 className="font-semibold text-[#0F2942] mb-4">Contact Information</h3>
            <div className="space-y-2 text-sm text-[#475569]">
              <p><span className="font-medium">Email:</span> info@ssourcingchina.com</p>
              <p><span className="font-medium">Phone:</span> +86 21 5888 9999</p>
              <p><span className="font-medium">Address:</span> Suite 1208, Tower B, 88 Century Avenue, Pudong, Shanghai 200120, China</p>
              <p><span className="font-medium">Hours:</span> Monday - Friday, 9:00 AM - 6:00 PM (GMT+8)</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact