import React, { useState } from 'react'
import Button from '../components/ui/Button'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    productCategory: '',
    quantity: '',
    timeline: '',
    message: ''
  })
  const [submitted, setSubmitted] = useState(false)
  const [errors, setErrors] = useState({})

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }))
    }
  }

  const validate = () => {
    const newErrors = {}
    if (!formData.name.trim()) newErrors.name = 'Name is required'
    if (!formData.company.trim()) newErrors.company = 'Company is required'
    if (!formData.email.trim()) newErrors.email = 'Email is required'
    else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = 'Please enter a valid email'
    if (!formData.message.trim()) newErrors.message = 'Message is required'
    return newErrors
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const newErrors = validate()
    
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors)
      return
    }

    // Form submission would connect to backend here
    console.log('Form submitted:', formData)
    setSubmitted(true)
  }

  if (submitted) {
    return (
      <div>
        <section className="bg-[#0F172A] text-white py-16">
          <div className="container">
            <h1 className="text-5xl mb-4 text-white">Thank You</h1>
          </div>
        </section>
        <section className="section-padding">
          <div className="container max-w-2xl text-center">
            <h2 className="text-3xl mb-4">Your Inquiry Has Been Received</h2>
            <p className="text-[#64748B] mb-8">
              We will review your requirements and respond within 1-2 business days with a detailed proposal.
            </p>
            <Button onClick={() => {
              setSubmitted(false)
              setFormData({
                name: '', company: '', email: '', phone: '',
                productCategory: '', quantity: '', timeline: '', message: ''
              })
            }}>
              Submit Another Inquiry
            </Button>
          </div>
        </section>
      </div>
    )
  }

  return (
    <div>
      <section className="bg-[#0F172A] text-white py-16">
        <div className="container">
          <h1 className="text-5xl mb-4 text-white">Contact Us</h1>
          <p className="text-xl text-[#94A3B8] max-w-2xl">
            Request a free sourcing quote or discuss your project requirements.
          </p>
        </div>
      </section>

      <section className="section-padding">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-2xl mb-6">Get a Free Sourcing Quote</h2>
              <p className="text-[#64748B] mb-8">
                Complete the form and we will prepare a detailed proposal based on your requirements.
              </p>
              
              <div className="space-y-6 text-sm">
                <div>
                  <div className="font-medium mb-1">Email</div>
                  <div className="text-[#64748B]">info@ssourcingchina.com</div>
                </div>
                <div>
                  <div className="font-medium mb-1">Phone</div>
                  <div className="text-[#64748B]">+86 21 5888 0000</div>
                </div>
                <div>
                  <div className="font-medium mb-1">Office</div>
                  <div className="text-[#64748B]">
                    Room 1208, Building 3<br />
                    1688 North Sichuan Road<br />
                    Shanghai 200080, China
                  </div>
                </div>
                <div>
                  <div className="font-medium mb-1">Business Hours</div>
                  <div className="text-[#64748B]">Monday - Friday, 9:00 - 18:00 (GMT+8)</div>
                </div>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="form-label" htmlFor="name">Full Name *</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="form-input"
                    placeholder="Your name"
                  />
                  {errors.name && <p className="text-red-600 text-sm mt-1">{errors.name}</p>}
                </div>
                <div>
                  <label className="form-label" htmlFor="company">Company *</label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    className="form-input"
                    placeholder="Your company"
                  />
                  {errors.company && <p className="text-red-600 text-sm mt-1">{errors.company}</p>}
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="form-label" htmlFor="email">Email Address *</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="form-input"
                    placeholder="you@company.com"
                  />
                  {errors.email && <p className="text-red-600 text-sm mt-1">{errors.email}</p>}
                </div>
                <div>
                  <label className="form-label" htmlFor="phone">Phone Number</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="form-input"
                    placeholder="+1 234 567 8900"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="form-label" htmlFor="productCategory">Product Category</label>
                  <select
                    id="productCategory"
                    name="productCategory"
                    value={formData.productCategory}
                    onChange={handleChange}
                    className="form-input"
                  >
                    <option value="">Select a category</option>
                    <option value="Consumer Electronics">Consumer Electronics</option>
                    <option value="Home & Kitchen">Home & Kitchen</option>
                    <option value="Textiles & Apparel">Textiles & Apparel</option>
                    <option value="Industrial Components">Industrial Components</option>
                    <option value="Packaging Materials">Packaging Materials</option>
                    <option value="Furniture & Fixtures">Furniture & Fixtures</option>
                    <option value="Other">Other</option>
                  </select>
                </div>
                <div>
                  <label className="form-label" htmlFor="quantity">Estimated Quantity</label>
                  <input
                    type="text"
                    id="quantity"
                    name="quantity"
                    value={formData.quantity}
                    onChange={handleChange}
                    className="form-input"
                    placeholder="e.g., 500 units"
                  />
                </div>
              </div>

              <div>
                <label className="form-label" htmlFor="timeline">Target Timeline</label>
                <input
                  type="text"
                  id="timeline"
                  name="timeline"
                  value={formData.timeline}
                  onChange={handleChange}
                  className="form-input"
                  placeholder="e.g., Q3 2026"
                />
              </div>

              <div>
                <label className="form-label" htmlFor="message">Project Details *</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={6}
                  className="form-input resize-y"
                  placeholder="Please describe your product requirements, specifications, and any other relevant details..."
                />
                {errors.message && <p className="text-red-600 text-sm mt-1">{errors.message}</p>}
              </div>

              <Button type="submit" size="lg" className="w-full md:w-auto">
                Submit Inquiry
              </Button>
              <p className="text-xs text-[#64748B]">
                We typically respond within 1-2 business days.
              </p>
            </form>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Contact