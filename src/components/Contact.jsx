import { useState } from 'react'
import { Button } from './ui/button'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    product: '',
    message: ''
  })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Simulate form submission
    setTimeout(() => {
      setSubmitted(true)
      setFormData({
        name: '',
        email: '',
        company: '',
        phone: '',
        product: '',
        message: ''
      })
      setTimeout(() => setSubmitted(false), 5000)
    }, 500)
  }

  return (
    <section id="contact" className="py-20 bg-[#1a1f2e] text-white">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-12">
          <div className="inline-block px-4 py-1.5 mb-4 rounded-full bg-[#b8860b]/20">
            <span className="text-[#b8860b] text-sm font-medium tracking-wider">GET IN TOUCH</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
            Let's discuss your requirements
          </h2>
          <p className="text-lg text-white/60 max-w-xl mx-auto">
            Our team of specialists is ready to help you find the perfect folding solution for your operation.
          </p>
        </div>

        <div className="bg-white/5 backdrop-blur-sm rounded-3xl p-8 md:p-12 border border-white/10">
          {submitted ? (
            <div className="text-center py-12">
              <div className="w-16 h-16 bg-[#b8860b] rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7" />
                </svg>
              </div>
              <h3 className="text-2xl font-semibold mb-2">Thank you for your inquiry</h3>
              <p className="text-white/60">We'll respond within 24 hours.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2 text-white/80">Full Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/40 focus:outline-none focus:border-[#b8860b] transition-colors"
                    placeholder="John Smith"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2 text-white/80">Email Address</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/40 focus:outline-none focus:border-[#b8860b] transition-colors"
                    placeholder="john@company.com"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="company" className="block text-sm font-medium mb-2 text-white/80">Company</label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/40 focus:outline-none focus:border-[#b8860b] transition-colors"
                    placeholder="Your Company"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium mb-2 text-white/80">Phone Number</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/40 focus:outline-none focus:border-[#b8860b] transition-colors"
                    placeholder="+1 (555) 000-0000"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="product" className="block text-sm font-medium mb-2 text-white/80">Product of Interest</label>
                <select
                  id="product"
                  name="product"
                  value={formData.product}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:border-[#b8860b] transition-colors"
                >
                  <option value="" className="bg-[#1a1f2e]">Select a product</option>
                  <option value="Double Folding Machine" className="bg-[#1a1f2e]">Double Folding Machine</option>
                  <option value="Double Folder" className="bg-[#1a1f2e]">Double Folder</option>
                  <option value="Sheet Metal Folder" className="bg-[#1a1f2e]">Sheet Metal Folder</option>
                  <option value="Sheet Metal Folding Machine" className="bg-[#1a1f2e]">Sheet Metal Folding Machine</option>
                  <option value="Metal Folder" className="bg-[#1a1f2e]">Metal Folder</option>
                  <option value="Metal Folder Machine" className="bg-[#1a1f2e]">Metal Folder Machine</option>
                  <option value="Metal Folding Machine" className="bg-[#1a1f2e]">Metal Folding Machine</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2 text-white/80">Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/40 focus:outline-none focus:border-[#b8860b] transition-colors resize-none"
                  placeholder="Tell us about your project requirements..."
                />
              </div>

              <Button type="submit" size="lg" className="w-full md:w-auto px-12">
                Submit Inquiry
              </Button>
            </form>
          )}
        </div>

        <div className="mt-12 text-center text-sm text-white/50">
          <p>Or reach us directly at <a href="mailto:sales@artitectmachinery.com" className="text-[#b8860b] hover:underline">sales@artitectmachinery.com</a> or call <a href="tel:+18005551234" className="text-[#b8860b] hover:underline">+1 (800) 555-1234</a></p>
        </div>
      </div>
    </section>
  )
}

export default Contact