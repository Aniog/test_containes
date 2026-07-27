import React, { useState } from 'react'
import { toast } from 'sonner'
import { submitInquiry } from '../api/inquiries'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    product: '',
    volume: '',
    message: '',
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const [submitting, setSubmitting] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()

    if (!formData.name || !formData.company || !formData.email || !formData.product) {
      toast.error('Please fill in all required fields.')
      return
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(formData.email)) {
      toast.error('Please enter a valid email address.')
      return
    }

    setSubmitting(true)

    try {
      await submitInquiry(formData)
      toast.success('Thank you. Your inquiry has been submitted. We will respond within 24 hours.')
      setFormData({
        name: '',
        company: '',
        email: '',
        phone: '',
        product: '',
        volume: '',
        message: '',
      })
    } catch (err) {
      toast.error(err.message || 'Submission failed. Please try again.')
    } finally {
      setSubmitting(false)
    }
  }

  return (
    <div>
      <section className="bg-[#F8FAFC] section-padding">
        <div className="container max-w-3xl text-center">
          <h1 className="text-5xl font-bold mb-6">Contact Us</h1>
          <p className="text-xl text-[#475569]">
            Get in touch to discuss your sourcing requirements.
          </p>
        </div>
      </section>

      <section className="section-padding">
        <div className="container max-w-5xl">
          <div className="grid md:grid-cols-5 gap-12">
            <div className="md:col-span-2">
              <h2 className="text-2xl font-semibold mb-6">Get in Touch</h2>
              
              <div className="space-y-6 text-[#475569]">
                <div>
                  <div className="font-medium text-[#0F172A] mb-1">Email</div>
                  <a href="mailto:info@ssourcingchina.com" className="hover:text-[#1E40AF]">info@ssourcingchina.com</a>
                </div>
                <div>
                  <div className="font-medium text-[#0F172A] mb-1">Phone</div>
                  <a href="tel:+862162345678" className="hover:text-[#1E40AF]">+86 21 6234 5678</a>
                </div>
                <div>
                  <div className="font-medium text-[#0F172A] mb-1">Office</div>
                  <p>Room 1208, Building 3<br />No. 88 Century Avenue<br />Pudong, Shanghai 200120<br />China</p>
                </div>
                <div>
                  <div className="font-medium text-[#0F172A] mb-1">Business Hours</div>
                  <p>Monday - Friday<br />8:30 AM - 6:00 PM (CST)</p>
                </div>
              </div>
            </div>

            <div className="md:col-span-3">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="form-label">Full Name *</label>
                    <input 
                      type="text" 
                      name="name" 
                      value={formData.name} 
                      onChange={handleChange}
                      className="form-input" 
                      required 
                    />
                  </div>
                  <div>
                    <label className="form-label">Company *</label>
                    <input 
                      type="text" 
                      name="company" 
                      value={formData.company} 
                      onChange={handleChange}
                      className="form-input" 
                      required 
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="form-label">Email Address *</label>
                    <input 
                      type="email" 
                      name="email" 
                      value={formData.email} 
                      onChange={handleChange}
                      className="form-input" 
                      required 
                    />
                  </div>
                  <div>
                    <label className="form-label">Phone Number</label>
                    <input 
                      type="tel" 
                      name="phone" 
                      value={formData.phone} 
                      onChange={handleChange}
                      className="form-input" 
                    />
                  </div>
                </div>

                <div>
                  <label className="form-label">Product Category or Description *</label>
                  <input 
                    type="text" 
                    name="product" 
                    value={formData.product} 
                    onChange={handleChange}
                    className="form-input" 
                    required 
                  />
                </div>

                <div>
                  <label className="form-label">Estimated Annual Volume</label>
                  <input 
                    type="text" 
                    name="volume" 
                    value={formData.volume} 
                    onChange={handleChange}
                    className="form-input" 
                    placeholder="e.g., 5,000 units, $50,000+" 
                  />
                </div>

                <div>
                  <label className="form-label">Additional Details</label>
                  <textarea 
                    name="message" 
                    value={formData.message} 
                    onChange={handleChange}
                    className="form-input min-h-[140px]" 
                    placeholder="Target price range, timeline, quality requirements, certifications needed, or other specifications..."
                  />
                </div>

                <button type="submit" disabled={submitting} className="btn-primary w-full md:w-auto text-lg px-12 py-3.5 disabled:opacity-60">
                  {submitting ? 'Submitting...' : 'Submit Inquiry'}
                </button>

                <p className="text-xs text-[#64748B]">
                  Your information is confidential. We respond to all inquiries within 24 business hours.
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Contact