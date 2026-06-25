import { useState } from 'react'
import { Send, MapPin, Phone, Mail } from 'lucide-react'

const ContactSection = () => {
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
    setStatus('sending')
    setTimeout(() => {
      setStatus('success')
      setFormData({ name: '', email: '', company: '', phone: '', product: '', message: '' })
    }, 1000)
  }

  return (
    <section id="contact" className="py-20 md:py-28 bg-surface">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <div className="text-center mb-16">
          <p className="text-copper font-medium text-sm tracking-widest uppercase mb-3">
            Get In Touch
          </p>
          <h2 className="font-[var(--font-heading)] text-3xl md:text-4xl font-bold text-text-dark mb-4">
            Request a Quote
          </h2>
          <p className="text-text-medium text-lg max-w-2xl mx-auto">
            Tell us about your project and our team will provide a tailored solution 
            with competitive pricing.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2">
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div>
                  <label htmlFor="name" className="block text-text-dark text-sm font-medium mb-1.5">
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
                    className="w-full px-4 py-3 rounded-lg border border-border bg-surface text-text-dark placeholder:text-text-light text-sm focus:outline-none focus:ring-2 focus:ring-copper/30 focus:border-copper transition-colors"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-text-dark text-sm font-medium mb-1.5">
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
                    className="w-full px-4 py-3 rounded-lg border border-border bg-surface text-text-dark placeholder:text-text-light text-sm focus:outline-none focus:ring-2 focus:ring-copper/30 focus:border-copper transition-colors"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div>
                  <label htmlFor="company" className="block text-text-dark text-sm font-medium mb-1.5">
                    Company
                  </label>
                  <input
                    id="company"
                    name="company"
                    type="text"
                    value={formData.company}
                    onChange={handleChange}
                    placeholder="Your company name"
                    className="w-full px-4 py-3 rounded-lg border border-border bg-surface text-text-dark placeholder:text-text-light text-sm focus:outline-none focus:ring-2 focus:ring-copper/30 focus:border-copper transition-colors"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-text-dark text-sm font-medium mb-1.5">
                    Phone Number
                  </label>
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+1 (555) 000-0000"
                    className="w-full px-4 py-3 rounded-lg border border-border bg-surface text-text-dark placeholder:text-text-light text-sm focus:outline-none focus:ring-2 focus:ring-copper/30 focus:border-copper transition-colors"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="product" className="block text-text-dark text-sm font-medium mb-1.5">
                  Product Interest
                </label>
                <select
                  id="product"
                  name="product"
                  value={formData.product}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border border-border bg-surface text-text-dark text-sm focus:outline-none focus:ring-2 focus:ring-copper/30 focus:border-copper transition-colors"
                >
                  <option value="">Select a product...</option>
                  <option value="double-folding">Double Folding Machine</option>
                  <option value="sheet-metal-folder">Sheet Metal Folder</option>
                  <option value="metal-folder-pro">Metal Folder Pro Series</option>
                  <option value="custom">Custom Solution</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-text-dark text-sm font-medium mb-1.5">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell us about your requirements..."
                  className="w-full px-4 py-3 rounded-lg border border-border bg-surface text-text-dark placeholder:text-text-light text-sm focus:outline-none focus:ring-2 focus:ring-copper/30 focus:border-copper transition-colors resize-none"
                />
              </div>

              <button
                type="submit"
                disabled={status === 'sending'}
                className="inline-flex items-center gap-2 bg-copper hover:bg-copper-dark disabled:opacity-60 text-white px-8 py-3.5 rounded-lg font-medium text-sm transition-colors duration-200 border-none cursor-pointer"
              >
                {status === 'sending' ? 'Sending...' : 'Send Message'}
                <Send className="w-4 h-4" />
              </button>

              {status === 'success' && (
                <p className="text-green-600 text-sm font-medium mt-2">
                  Thank you! We'll get back to you within 24 hours.
                </p>
              )}
            </form>
          </div>

          <div className="space-y-8">
            <div className="bg-surface-alt rounded-2xl p-6 border border-border">
              <h3 className="font-semibold text-text-dark text-base mb-4">Contact Information</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-copper shrink-0 mt-0.5" />
                  <div>
                    <p className="text-text-dark text-sm font-medium">Address</p>
                    <p className="text-text-medium text-sm">123 Industrial Park Drive, Manufacturing District, CA 90210</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Phone className="w-5 h-5 text-copper shrink-0 mt-0.5" />
                  <div>
                    <p className="text-text-dark text-sm font-medium">Phone</p>
                    <p className="text-text-medium text-sm">+1 (555) 234-5678</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Mail className="w-5 h-5 text-copper shrink-0 mt-0.5" />
                  <div>
                    <p className="text-text-dark text-sm font-medium">Email</p>
                    <p className="text-text-medium text-sm">info@artitectmachinery.com</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-navy rounded-2xl p-6">
              <h3 className="font-semibold text-white text-base mb-2">Need Immediate Help?</h3>
              <p className="text-white/60 text-sm mb-4">
                Our technical team is available Monday–Friday, 8AM–6PM EST.
              </p>
              <a
                href="tel:+15552345678"
                className="inline-flex items-center gap-2 text-copper hover:text-copper-dark font-medium text-sm transition-colors no-underline"
              >
                <Phone className="w-4 h-4" />
                Call Us Now
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ContactSection
