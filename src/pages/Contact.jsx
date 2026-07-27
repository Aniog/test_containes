import React, { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '', company: '', email: '', phone: '', product: '', quantity: '', message: ''
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
      <div className="max-w-2xl mx-auto px-6 py-24 text-center">
        <h1 className="text-3xl font-bold text-slate-900 mb-4">Thank You</h1>
        <p className="text-lg text-slate-600">We've received your inquiry and will respond within 2 business days.</p>
      </div>
    )
  }

  return (
    <div className="max-w-4xl mx-auto px-6 py-16">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-slate-900 mb-4">Contact Us</h1>
        <p className="text-xl text-slate-600">Request a free sourcing quote or consultation.</p>
      </div>

      <div className="grid md:grid-cols-5 gap-12">
        <div className="md:col-span-3">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">Full Name</label>
                <Input name="name" value={formData.name} onChange={handleChange} required />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">Company</label>
                <Input name="company" value={formData.company} onChange={handleChange} required />
              </div>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">Email Address</label>
                <Input type="email" name="email" value={formData.email} onChange={handleChange} required />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">Phone Number</label>
                <Input name="phone" value={formData.phone} onChange={handleChange} />
              </div>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">Product Category</label>
                <Input name="product" value={formData.product} onChange={handleChange} placeholder="e.g., Electronics, Textiles" required />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">Estimated Annual Quantity</label>
                <Input name="quantity" value={formData.quantity} onChange={handleChange} placeholder="e.g., 5,000 units" />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">Project Details</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={6}
                className="w-full rounded-md border border-slate-200 px-4 py-3 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-500"
                placeholder="Describe your product requirements, specifications, timeline, and any other relevant details..."
              />
            </div>
            <Button type="submit" size="lg" className="w-full md:w-auto">Submit Inquiry</Button>
          </form>
        </div>

        <div className="md:col-span-2 space-y-8 text-sm">
          <div>
            <div className="font-semibold text-slate-900 mb-2">Office</div>
            <p className="text-slate-600">Shanghai, China<br />Room 1208, Tower B, 88 Century Avenue<br />Pudong New Area, Shanghai 200120</p>
          </div>
          <div>
            <div className="font-semibold text-slate-900 mb-2">Email</div>
            <a href="mailto:info@ssourcingchina.com" className="text-sky-600 hover:underline">info@ssourcingchina.com</a>
          </div>
          <div>
            <div className="font-semibold text-slate-900 mb-2">Phone</div>
            <p className="text-slate-600">+86 21 5888 9999</p>
          </div>
          <div>
            <div className="font-semibold text-slate-900 mb-2">Business Hours</div>
            <p className="text-slate-600">Monday - Friday: 9:00 AM - 6:00 PM (CST)<br />Response within 2 business days</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact