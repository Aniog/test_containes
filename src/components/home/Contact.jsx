import { useState } from 'react'
import { Phone, Mail, MapPin, Clock, Send } from 'lucide-react'

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', company: '', product: '', message: '' })
  const [status, setStatus] = useState('idle')

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setStatus('submitted')
  }

  return (
    <section id="contact" className="py-20 md:py-28 lg:py-32 bg-offwhite">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-gold text-sm font-semibold tracking-[0.3em] uppercase">Get in Touch</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-charcoal mt-3 mb-4">
            Contact Us
          </h2>
          <div className="h-1 w-16 bg-gold mx-auto mb-6" />
          <p className="text-gray-500 text-lg max-w-2xl mx-auto">
            Ready to find the right folding solution? Our team of experts is here to help you choose the perfect machine for your needs.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">
          <div className="lg:col-span-3">
            <form onSubmit={handleSubmit} className="bg-white rounded-lg border border-border-light p-8 md:p-10 shadow-sm">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-5">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-charcoal mb-1.5">Full Name *</label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    value={form.name}
                    onChange={handleChange}
                    placeholder="John Smith"
                    className="w-full px-4 py-3 rounded-lg border border-border-light text-charcoal text-sm focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold transition-colors"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-charcoal mb-1.5">Email Address *</label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={form.email}
                    onChange={handleChange}
                    placeholder="john@company.com"
                    className="w-full px-4 py-3 rounded-lg border border-border-light text-charcoal text-sm focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold transition-colors"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-5">
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-charcoal mb-1.5">Phone Number</label>
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    value={form.phone}
                    onChange={handleChange}
                    placeholder="+1 (555) 123-4567"
                    className="w-full px-4 py-3 rounded-lg border border-border-light text-charcoal text-sm focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold transition-colors"
                  />
                </div>
                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-charcoal mb-1.5">Company Name</label>
                  <input
                    id="company"
                    name="company"
                    type="text"
                    value={form.company}
                    onChange={handleChange}
                    placeholder="Your Company"
                    className="w-full px-4 py-3 rounded-lg border border-border-light text-charcoal text-sm focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold transition-colors"
                  />
                </div>
              </div>

              <div className="mb-5">
                <label htmlFor="product" className="block text-sm font-medium text-charcoal mb-1.5">Product of Interest</label>
                <select
                  id="product"
                  name="product"
                  value={form.product}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border border-border-light text-charcoal text-sm focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold transition-colors bg-white"
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

              <div className="mb-6">
                <label htmlFor="message" className="block text-sm font-medium text-charcoal mb-1.5">Message *</label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  value={form.message}
                  onChange={handleChange}
                  placeholder="Tell us about your requirements..."
                  className="w-full px-4 py-3 rounded-lg border border-border-light text-charcoal text-sm focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold transition-colors resize-none"
                />
              </div>

              <button
                type="submit"
                disabled={status === 'submitting'}
                className="w-full bg-gold hover:bg-gold-light text-white font-semibold px-8 py-4 rounded-full text-base transition-all duration-300 flex items-center justify-center gap-2 disabled:opacity-60"
              >
                <Send className="w-5 h-5" />
                {status === 'submitting' ? 'Sending...' : 'Send Inquiry'}
              </button>

              {status === 'submitted' && (
                <p className="text-green-600 text-sm mt-4 text-center font-medium">
                  Thank you! Your inquiry has been received. We will get back to you shortly.
                </p>
              )}
            </form>
          </div>

          <div className="lg:col-span-2 space-y-6">
            <div className="bg-white rounded-lg border border-border-light p-8 shadow-sm">
              <h3 className="font-bold text-charcoal text-lg mb-6">Contact Information</h3>
              <ul className="space-y-5">
                <li className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-gold/10 rounded-lg flex items-center justify-center shrink-0">
                    <Phone className="w-5 h-5 text-gold" />
                  </div>
                  <div>
                    <div className="text-sm font-medium text-charcoal">Phone</div>
                    <div className="text-sm text-gray-500">+1 (555) 123-4567</div>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-gold/10 rounded-lg flex items-center justify-center shrink-0">
                    <Mail className="w-5 h-5 text-gold" />
                  </div>
                  <div>
                    <div className="text-sm font-medium text-charcoal">Email</div>
                    <div className="text-sm text-gray-500">info@artitectmachinery.com</div>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-gold/10 rounded-lg flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5 text-gold" />
                  </div>
                  <div>
                    <div className="text-sm font-medium text-charcoal">Address</div>
                    <div className="text-sm text-gray-500">Industrial Zone, Suite 200<br />Shanghai, China</div>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-gold/10 rounded-lg flex items-center justify-center shrink-0">
                    <Clock className="w-5 h-5 text-gold" />
                  </div>
                  <div>
                    <div className="text-sm font-medium text-charcoal">Business Hours</div>
                    <div className="text-sm text-gray-500">Mon - Fri: 8:00 AM - 6:00 PM<br />Sat: 9:00 AM - 1:00 PM</div>
                  </div>
                </li>
              </ul>
            </div>

            <div className="bg-navy rounded-lg p-8 text-center">
              <h3 className="font-bold text-white text-lg mb-2">Need Urgent Help?</h3>
              <p className="text-white/60 text-sm mb-5">Our technical team is available for emergency support.</p>
              <a
                href="tel:+15551234567"
                className="inline-flex items-center gap-2 bg-gold hover:bg-gold-light text-white font-semibold px-6 py-3 rounded-full text-sm transition-all duration-300"
              >
                <Phone className="w-4 h-4" />
                Call Now
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
