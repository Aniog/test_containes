import React, { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    productCategory: '',
    quantity: '',
    timeline: '',
    message: '',
  })
  const [status, setStatus] = useState('idle')
  const [error, setError] = useState(null)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const validate = () => {
    if (!formData.name.trim()) return 'Name is required'
    if (!formData.company.trim()) return 'Company is required'
    if (!formData.email.trim()) return 'Email is required'
    if (!/^\S+@\S+\.\S+$/.test(formData.email)) return 'Please enter a valid email'
    if (!formData.message.trim()) return 'Message is required'
    return null
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setError(null)
    const validationError = validate()
    if (validationError) {
      setError(validationError)
      return
    }

    setStatus('submitting')

    // Simulate form submission - in production this would connect to backend
    setTimeout(() => {
      setStatus('success')
      setFormData({
        name: '',
        company: '',
        email: '',
        phone: '',
        productCategory: '',
        quantity: '',
        timeline: '',
        message: '',
      })
    }, 800)
  }

  return (
    <div>
      <section className="bg-slate-900 text-white py-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h1 className="text-4xl font-semibold mb-4">Contact Us</h1>
          <p className="text-lg text-slate-300">Request a free sourcing quote or discuss your project requirements.</p>
        </div>
      </section>

      <section className="max-w-4xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-5 gap-12">
          <div className="md:col-span-2">
            <h3 className="font-semibold mb-4">Get in Touch</h3>
            <div className="space-y-4 text-sm text-slate-600">
              <p>Shanghai Office<br />Room 1208, Tower B, 88 Century Avenue<br />Pudong, Shanghai 200120, China</p>
              <p>info@ssourcingchina.com<br />+86 21 5888 0000</p>
              <p>Business Hours: Monday–Friday, 9:00–18:00 CST</p>
            </div>
          </div>

          <div className="md:col-span-3">
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid md:grid-cols-2 gap-5">
                <div>
                  <label className="block text-sm font-medium mb-1.5">Full Name *</label>
                  <Input name="name" value={formData.name} onChange={handleChange} required />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1.5">Company *</label>
                  <Input name="company" value={formData.company} onChange={handleChange} required />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-5">
                <div>
                  <label className="block text-sm font-medium mb-1.5">Email Address *</label>
                  <Input type="email" name="email" value={formData.email} onChange={handleChange} required />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1.5">Phone Number</label>
                  <Input name="phone" value={formData.phone} onChange={handleChange} />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-5">
                <div>
                  <label className="block text-sm font-medium mb-1.5">Product Category</label>
                  <Input name="productCategory" value={formData.productCategory} onChange={handleChange} placeholder="e.g., Electronics, Furniture" />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1.5">Estimated Quantity</label>
                  <Input name="quantity" value={formData.quantity} onChange={handleChange} placeholder="e.g., 500 units" />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium mb-1.5">Target Timeline</label>
                <Input name="timeline" value={formData.timeline} onChange={handleChange} placeholder="e.g., Q3 2026" />
              </div>

              <div>
                <label className="block text-sm font-medium mb-1.5">Project Details *</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full rounded-md border border-slate-300 px-4 py-3 text-sm placeholder:text-slate-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-400"
                  placeholder="Describe your product requirements, specifications, or any questions you have..."
                />
              </div>

              {error && <p className="text-sm text-red-600">{error}</p>}

              <Button type="submit" disabled={status === 'submitting'} className="w-full md:w-auto">
                {status === 'submitting' ? 'Submitting...' : 'Submit Inquiry'}
              </Button>

              {status === 'success' && (
                <p className="text-sm text-emerald-600">Thank you. We will respond within 48 hours.</p>
              )}
            </form>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Contact