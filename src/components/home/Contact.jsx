import React, { useState } from 'react'
import { Send, CheckCircle } from 'lucide-react'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    product: '',
    message: '',
  })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Contact form submitted:', formData)
    setSubmitted(true)
    setTimeout(() => setSubmitted(false), 5000)
    setFormData({ name: '', email: '', company: '', phone: '', product: '', message: '' })
  }

  return (
    <section id="contact" className="py-20 md:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          <div>
            <span className="text-gold font-medium text-sm tracking-wider uppercase">Contact Us</span>
            <h2 className="font-display text-3xl md:text-4xl font-semibold text-navy mt-3 mb-6">
              Let's Discuss Your Needs
            </h2>
            <p className="text-charcoal/70 text-base leading-relaxed mb-8">
              Whether you need a single machine or a complete production line, our team of experts is ready to help you find the perfect solution for your metalworking requirements.
            </p>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-gold/10 rounded-lg flex items-center justify-center shrink-0">
                  <svg className="w-5 h-5 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold text-navy text-sm">Headquarters</h4>
                  <p className="text-charcoal/60 text-sm">Industrial Zone, Shanghai, China 201600</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-gold/10 rounded-lg flex items-center justify-center shrink-0">
                  <svg className="w-5 h-5 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold text-navy text-sm">Phone</h4>
                  <p className="text-charcoal/60 text-sm">+86 21 5888 8888</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-gold/10 rounded-lg flex items-center justify-center shrink-0">
                  <svg className="w-5 h-5 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold text-navy text-sm">Email</h4>
                  <p className="text-charcoal/60 text-sm">info@artitectmachinery.com</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-gold/10 rounded-lg flex items-center justify-center shrink-0">
                  <svg className="w-5 h-5 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold text-navy text-sm">Business Hours</h4>
                  <p className="text-charcoal/60 text-sm">Mon - Fri: 8:00 AM - 6:00 PM (CST)</p>
                </div>
              </div>
            </div>
          </div>

          <div>
            <form onSubmit={handleSubmit} className="bg-warmwhite rounded-lg p-6 md:p-8 border border-warmborder">
              {submitted && (
                <div className="mb-6 flex items-center gap-3 bg-green-50 border border-green-200 rounded-lg p-4">
                  <CheckCircle className="w-5 h-5 text-green-600 shrink-0" />
                  <p className="text-green-700 text-sm font-medium">
                    Thank you! Your inquiry has been received. We'll get back to you shortly.
                  </p>
                </div>
              )}

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-5">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-navy mb-1.5">
                    Full Name *
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="John Smith"
                    className="w-full px-4 py-2.5 rounded-lg border border-warmborder bg-white text-charcoal text-sm focus:outline-none focus:ring-2 focus:ring-gold/30 focus:border-gold transition-colors"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-navy mb-1.5">
                    Email *
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="john@company.com"
                    className="w-full px-4 py-2.5 rounded-lg border border-warmborder bg-white text-charcoal text-sm focus:outline-none focus:ring-2 focus:ring-gold/30 focus:border-gold transition-colors"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-5">
                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-navy mb-1.5">
                    Company
                  </label>
                  <input
                    id="company"
                    name="company"
                    type="text"
                    value={formData.company}
                    onChange={handleChange}
                    placeholder="Your company name"
                    className="w-full px-4 py-2.5 rounded-lg border border-warmborder bg-white text-charcoal text-sm focus:outline-none focus:ring-2 focus:ring-gold/30 focus:border-gold transition-colors"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-navy mb-1.5">
                    Phone
                  </label>
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+1 234 567 8900"
                    className="w-full px-4 py-2.5 rounded-lg border border-warmborder bg-white text-charcoal text-sm focus:outline-none focus:ring-2 focus:ring-gold/30 focus:border-gold transition-colors"
                  />
                </div>
              </div>

              <div className="mb-5">
                <label htmlFor="product" className="block text-sm font-medium text-navy mb-1.5">
                  Product Interest
                </label>
                <select
                  id="product"
                  name="product"
                  value={formData.product}
                  onChange={handleChange}
                  className="w-full px-4 py-2.5 rounded-lg border border-warmborder bg-white text-charcoal text-sm focus:outline-none focus:ring-2 focus:ring-gold/30 focus:border-gold transition-colors"
                >
                  <option value="">Select a product</option>
                  <option value="double-folding-machine">Double Folding Machine</option>
                  <option value="double-folder">Double Folder</option>
                  <option value="sheet-metal-folder">Sheet Metal Folder</option>
                  <option value="sheet-metal-folding-machine">Sheet Metal Folding Machine</option>
                  <option value="metal-folder">Metal Folder</option>
                  <option value="metal-folder-machine">Metal Folder Machine</option>
                  <option value="metal-folding-machine">Metal Folding Machine</option>
                  <option value="other">Other / Custom</option>
                </select>
              </div>

              <div className="mb-6">
                <label htmlFor="message" className="block text-sm font-medium text-navy mb-1.5">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell us about your requirements..."
                  className="w-full px-4 py-2.5 rounded-lg border border-warmborder bg-white text-charcoal text-sm focus:outline-none focus:ring-2 focus:ring-gold/30 focus:border-gold transition-colors resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full inline-flex items-center justify-center gap-2 bg-gold hover:bg-gold/90 text-white px-8 py-3.5 rounded-full font-medium transition-colors text-base"
              >
                <Send className="w-4 h-4" />
                Send Inquiry
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
