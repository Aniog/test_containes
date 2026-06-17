import React, { useState } from 'react'
import { MapPin, Phone, Mail, Clock, Send } from 'lucide-react'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    product: '',
    message: '',
  })
  const [status, setStatus] = useState('idle')

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setStatus('submitting')
    // Simulate submission
    setTimeout(() => {
      setStatus('success')
      setFormData({ name: '', email: '', company: '', phone: '', product: '', message: '' })
      setTimeout(() => setStatus('idle'), 4000)
    }, 1000)
  }

  const contactInfo = [
    { icon: MapPin, label: 'Address', value: 'Industrial Zone, Shanghai, China' },
    { icon: Phone, label: 'Phone', value: '+86 21 5888 8888' },
    { icon: Mail, label: 'Email', value: 'info@artitectmachinery.com' },
    { icon: Clock, label: 'Business Hours', value: 'Mon - Fri: 8:00 AM - 6:00 PM' },
  ]

  return (
    <section id="contact" className="py-20 md:py-28 bg-navy-dark">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="h-px w-12 bg-gold" />
            <span className="text-gold text-sm font-medium tracking-[0.2em] uppercase">Get In Touch</span>
            <div className="h-px w-12 bg-gold" />
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
            Request a <span className="text-gold">Quote</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Tell us about your requirements and our team will provide a tailored solution within 24 hours.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 lg:gap-12">
          {/* Contact Info */}
          <div className="lg:col-span-2">
            <div className="bg-navy-medium border border-navy-light/30 rounded-lg p-6 md:p-8 h-full">
              <h3 className="text-white font-bold text-xl mb-6">Contact Information</h3>
              <div className="space-y-6">
                {contactInfo.map(({ icon: Icon, label, value }) => (
                  <div key={label} className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-gold/10 border border-gold/20 rounded-lg flex items-center justify-center shrink-0">
                      <Icon className="w-5 h-5 text-gold" />
                    </div>
                    <div>
                      <div className="text-gray-500 text-xs font-medium uppercase tracking-wider mb-1">{label}</div>
                      <div className="text-gray-300 text-sm">{value}</div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Map placeholder */}
              <div className="mt-8 h-40 bg-navy-dark rounded-lg border border-navy-light/20 flex items-center justify-center">
                <div className="text-center">
                  <MapPin className="w-8 h-8 text-gold/40 mx-auto mb-2" />
                  <span className="text-gray-500 text-xs">Shanghai, China</span>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-3">
            <form onSubmit={handleSubmit} className="bg-navy-medium border border-navy-light/30 rounded-lg p-6 md:p-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-5">
                <div>
                  <label htmlFor="name" className="block text-gray-300 text-sm font-medium mb-2">
                    Full Name <span className="text-gold">*</span>
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your name"
                    className="w-full bg-navy-dark border border-navy-light/40 rounded px-4 py-3 text-white text-sm placeholder-gray-500 focus:outline-none focus:border-gold/60 transition-colors duration-200"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-gray-300 text-sm font-medium mb-2">
                    Email <span className="text-gold">*</span>
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="you@company.com"
                    className="w-full bg-navy-dark border border-navy-light/40 rounded px-4 py-3 text-white text-sm placeholder-gray-500 focus:outline-none focus:border-gold/60 transition-colors duration-200"
                  />
                </div>
                <div>
                  <label htmlFor="company" className="block text-gray-300 text-sm font-medium mb-2">
                    Company
                  </label>
                  <input
                    id="company"
                    name="company"
                    type="text"
                    value={formData.company}
                    onChange={handleChange}
                    placeholder="Company name"
                    className="w-full bg-navy-dark border border-navy-light/40 rounded px-4 py-3 text-white text-sm placeholder-gray-500 focus:outline-none focus:border-gold/60 transition-colors duration-200"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-gray-300 text-sm font-medium mb-2">
                    Phone
                  </label>
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+1 234 567 8900"
                    className="w-full bg-navy-dark border border-navy-light/40 rounded px-4 py-3 text-white text-sm placeholder-gray-500 focus:outline-none focus:border-gold/60 transition-colors duration-200"
                  />
                </div>
              </div>

              <div className="mb-5">
                <label htmlFor="product" className="block text-gray-300 text-sm font-medium mb-2">
                  Product of Interest
                </label>
                <select
                  id="product"
                  name="product"
                  value={formData.product}
                  onChange={handleChange}
                  className="w-full bg-navy-dark border border-navy-light/40 rounded px-4 py-3 text-white text-sm focus:outline-none focus:border-gold/60 transition-colors duration-200"
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
                <label htmlFor="message" className="block text-gray-300 text-sm font-medium mb-2">
                  Message <span className="text-gold">*</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Describe your requirements, material types, thickness range, etc."
                  className="w-full bg-navy-dark border border-navy-light/40 rounded px-4 py-3 text-white text-sm placeholder-gray-500 focus:outline-none focus:border-gold/60 transition-colors duration-200 resize-none"
                />
              </div>

              <button
                type="submit"
                disabled={status === 'submitting'}
                className="w-full md:w-auto inline-flex items-center justify-center gap-2 bg-gold hover:bg-gold-light disabled:bg-gold/50 text-navy-dark font-semibold px-8 py-3.5 rounded transition-colors duration-200"
              >
                {status === 'submitting' ? (
                  'Sending...'
                ) : (
                  <>
                    Send Inquiry
                    <Send className="w-4 h-4" />
                  </>
                )}
              </button>

              {status === 'success' && (
                <p className="mt-4 text-green-400 text-sm font-medium">
                  Thank you! Your inquiry has been received. We will respond within 24 hours.
                </p>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
