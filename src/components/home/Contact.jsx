import React, { useState } from 'react'
import { Phone, Mail, MapPin, Send } from 'lucide-react'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
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
      setFormData({ name: '', email: '', phone: '', company: '', product: '', message: '' })
      setTimeout(() => setStatus('idle'), 4000)
    }, 1000)
  }

  return (
    <section id="contact" className="py-20 md:py-28 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-gold-400 font-semibold text-sm uppercase tracking-wider">
            Get In Touch
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-charcoal-500 mt-3 mb-5">
            Request a Quote
          </h2>
          <p className="text-charcoal-300 text-lg max-w-2xl mx-auto">
            Ready to elevate your metal fabrication capabilities? Contact our team 
            for a personalized quote and expert consultation.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          {/* Contact Info */}
          <div className="space-y-6">
            {[
              {
                icon: Phone,
                title: 'Call Us',
                detail: '+86 123 4567 890',
                sub: 'Mon-Fri 9:00-18:00 CST',
              },
              {
                icon: Mail,
                title: 'Email Us',
                detail: 'info@artitectmachinery.com',
                sub: 'We reply within 24 hours',
              },
              {
                icon: MapPin,
                title: 'Visit Us',
                detail: 'Industrial Zone, Block C',
                sub: 'Shanghai, China 200000',
              },
            ].map((item) => {
              const Icon = item.icon
              return (
                <div
                  key={item.title}
                  className="flex items-start gap-4 bg-white rounded-xl p-6 border border-gray-200 shadow-sm"
                >
                  <div className="w-12 h-12 bg-navy-700 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Icon className="w-5 h-5 text-gold-400" />
                  </div>
                  <div>
                    <h4 className="text-charcoal-500 font-semibold text-sm">{item.title}</h4>
                    <p className="text-charcoal-500 font-medium text-base mt-1">{item.detail}</p>
                    <p className="text-charcoal-300 text-sm mt-0.5">{item.sub}</p>
                  </div>
                </div>
              )
            })}
          </div>

          {/* Form */}
          <div className="lg:col-span-2">
            <form
              onSubmit={handleSubmit}
              className="bg-white rounded-xl border border-gray-200 shadow-sm p-8"
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label htmlFor="name" className="block text-charcoal-500 text-sm font-semibold mb-2">
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
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 text-charcoal-500 text-sm placeholder:text-charcoal-200 focus:outline-none focus:ring-2 focus:ring-steel-500 focus:border-transparent transition-all"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-charcoal-500 text-sm font-semibold mb-2">
                    Email Address *
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="john@company.com"
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 text-charcoal-500 text-sm placeholder:text-charcoal-200 focus:outline-none focus:ring-2 focus:ring-steel-500 focus:border-transparent transition-all"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-charcoal-500 text-sm font-semibold mb-2">
                    Phone Number
                  </label>
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+1 234 567 890"
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 text-charcoal-500 text-sm placeholder:text-charcoal-200 focus:outline-none focus:ring-2 focus:ring-steel-500 focus:border-transparent transition-all"
                  />
                </div>
                <div>
                  <label htmlFor="company" className="block text-charcoal-500 text-sm font-semibold mb-2">
                    Company Name
                  </label>
                  <input
                    id="company"
                    name="company"
                    type="text"
                    value={formData.company}
                    onChange={handleChange}
                    placeholder="Your Company"
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 text-charcoal-500 text-sm placeholder:text-charcoal-200 focus:outline-none focus:ring-2 focus:ring-steel-500 focus:border-transparent transition-all"
                  />
                </div>
              </div>

              <div className="mt-5">
                <label htmlFor="product" className="block text-charcoal-500 text-sm font-semibold mb-2">
                  Product of Interest
                </label>
                <select
                  id="product"
                  name="product"
                  value={formData.product}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border border-gray-200 text-charcoal-500 text-sm focus:outline-none focus:ring-2 focus:ring-steel-500 focus:border-transparent transition-all bg-white"
                >
                  <option value="">Select a product</option>
                  <option value="double-folding-machine">Double Folding Machine</option>
                  <option value="double-folder">Double Folder</option>
                  <option value="sheet-metal-folder">Sheet Metal Folder</option>
                  <option value="sheet-metal-folding-machine">Sheet Metal Folding Machine</option>
                  <option value="metal-folder">Metal Folder</option>
                  <option value="metal-folder-machine">Metal Folder Machine</option>
                  <option value="metal-folding-machine">Metal Folding Machine</option>
                </select>
              </div>

              <div className="mt-5">
                <label htmlFor="message" className="block text-charcoal-500 text-sm font-semibold mb-2">
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
                  className="w-full px-4 py-3 rounded-lg border border-gray-200 text-charcoal-500 text-sm placeholder:text-charcoal-200 focus:outline-none focus:ring-2 focus:ring-steel-500 focus:border-transparent transition-all resize-none"
                />
              </div>

              <div className="mt-6">
                <button
                  type="submit"
                  disabled={status === 'submitting'}
                  className="flex items-center justify-center gap-2 w-full sm:w-auto bg-gold-400 hover:bg-gold-300 disabled:bg-gold-400/60 text-navy-700 font-bold text-base px-8 py-4 rounded-full transition-all duration-200 shadow-md hover:shadow-lg"
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
              </div>

              {status === 'success' && (
                <div className="mt-4 p-4 bg-green-50 border border-green-200 rounded-lg">
                  <p className="text-green-700 text-sm font-medium">
                    Thank you! Your inquiry has been received. We will contact you within 24 hours.
                  </p>
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
