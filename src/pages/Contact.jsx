import React, { useState } from 'react'
import { Button } from '@/components/ui/button'
import { toast } from 'sonner'

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
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    setTimeout(() => {
      toast.success('Thank you. We will contact you within 2 business days.')
      setFormData({
        name: '', company: '', email: '', phone: '',
        productCategory: '', quantity: '', timeline: '', message: '',
      })
      setIsSubmitting(false)
    }, 800)
  }

  return (
    <div>
      <section className="bg-[#0A2540] text-white py-16">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h1 className="text-4xl font-semibold mb-4">Contact Us</h1>
          <p className="text-xl text-[#94A3B8]">Request a free sourcing quote or consultation.</p>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-5xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <h2 className="text-2xl font-semibold mb-6">Get a Free Sourcing Quote</h2>
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-medium mb-1.5">Name *</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2.5 border border-[#E2E8F0] rounded-md focus:outline-none focus:border-[#0D9488]"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1.5">Company *</label>
                    <input
                      type="text"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2.5 border border-[#E2E8F0] rounded-md focus:outline-none focus:border-[#0D9488]"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-medium mb-1.5">Email *</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2.5 border border-[#E2E8F0] rounded-md focus:outline-none focus:border-[#0D9488]"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1.5">Phone</label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-2.5 border border-[#E2E8F0] rounded-md focus:outline-none focus:border-[#0D9488]"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-medium mb-1.5">Product Category</label>
                    <input
                      type="text"
                      name="productCategory"
                      value={formData.productCategory}
                      onChange={handleChange}
                      placeholder="e.g., Electronics, Textiles"
                      className="w-full px-4 py-2.5 border border-[#E2E8F0] rounded-md focus:outline-none focus:border-[#0D9488]"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1.5">Estimated Quantity</label>
                    <input
                      type="text"
                      name="quantity"
                      value={formData.quantity}
                      onChange={handleChange}
                      placeholder="e.g., 500 units"
                      className="w-full px-4 py-2.5 border border-[#E2E8F0] rounded-md focus:outline-none focus:border-[#0D9488]"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-1.5">Target Timeline</label>
                  <input
                    type="text"
                    name="timeline"
                    value={formData.timeline}
                    onChange={handleChange}
                    placeholder="e.g., Within 3 months"
                    className="w-full px-4 py-2.5 border border-[#E2E8F0] rounded-md focus:outline-none focus:border-[#0D9488]"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-1.5">Message *</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    placeholder="Describe your product requirements, specifications, or any questions you have."
                    className="w-full px-4 py-2.5 border border-[#E2E8F0] rounded-md focus:outline-none focus:border-[#0D9488] resize-y"
                  />
                </div>

                <Button type="submit" className="w-full md:w-auto" disabled={isSubmitting}>
                  {isSubmitting ? 'Submitting...' : 'Submit Inquiry'}
                </Button>
              </form>
            </div>

            {/* Contact Information */}
            <div className="pt-2">
              <h2 className="text-2xl font-semibold mb-6">Contact Information</h2>
              
              <div className="space-y-6 text-[#64748B]">
                <div>
                  <h4 className="font-semibold text-[#1E293B] mb-1">Email</h4>
                  <p>info@ssourcingchina.com</p>
                </div>
                <div>
                  <h4 className="font-semibold text-[#1E293B] mb-1">Phone</h4>
                  <p>+86 21 5888 0000</p>
                </div>
                <div>
                  <h4 className="font-semibold text-[#1E293B] mb-1">Office</h4>
                  <p>Room 1208, Building 3<br />No. 88 Century Avenue<br />Shanghai, China 200120</p>
                </div>
                <div>
                  <h4 className="font-semibold text-[#1E293B] mb-1">Business Hours</h4>
                  <p>Monday - Friday: 9:00 AM - 6:00 PM (CST)<br />Saturday: 9:00 AM - 12:00 PM (CST)</p>
                </div>
              </div>

              <div className="mt-8 p-6 bg-[#F8FAFC] rounded-lg border border-[#E2E8F0]">
                <h4 className="font-semibold mb-2">Response Time</h4>
                <p className="text-sm text-[#64748B]">
                  We typically respond to inquiries within 2 business days. 
                  For urgent matters, please call our office directly.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Contact