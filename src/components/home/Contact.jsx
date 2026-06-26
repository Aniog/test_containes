import { useState } from 'react'
import { Send, MapPin, Phone, Mail, Clock } from 'lucide-react'

const contactInfo = [
  { icon: MapPin, label: 'Address', value: '1234 Industrial Parkway, Suite 200, Cleveland, OH 44135' },
  { icon: Phone, label: 'Phone', value: '+1 (216) 555-0147' },
  { icon: Mail, label: 'Email', value: 'info@artitectmachinery.com' },
  { icon: Clock, label: 'Business Hours', value: 'Mon - Fri: 8:00 AM - 6:00 PM EST' },
]

export default function Contact() {
  const [formState, setFormState] = useState({
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
    setFormState((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
    setTimeout(() => setSubmitted(false), 4000)
    setFormState({ name: '', email: '', company: '', phone: '', product: '', message: '' })
  }

  return (
    <section id="contact" className="bg-white py-20 lg:py-28">
      <div className="max-w-[1200px] mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-amber text-xs font-semibold tracking-[0.15em] uppercase">
            Get in Touch
          </span>
          <h2 className="text-charcoal font-bold text-3xl sm:text-4xl mt-3 mb-5">
            Request a Quote
          </h2>
          <p className="text-slate text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
            Tell us about your project requirements and our team will provide a customized solution within 24 hours.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16">
          {/* Contact Form */}
          <div className="w-full lg:w-2/3">
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label htmlFor="contact-name" className="block text-steel text-sm font-medium mb-2">
                    Full Name *
                  </label>
                  <input
                    id="contact-name"
                    name="name"
                    type="text"
                    required
                    value={formState.name}
                    onChange={handleChange}
                    placeholder="John Smith"
                    className="w-full px-4 py-3 bg-cream border border-border rounded text-charcoal text-sm placeholder:text-muted focus:outline-none focus:border-amber focus:ring-1 focus:ring-amber/20 transition-colors"
                  />
                </div>
                <div>
                  <label htmlFor="contact-email" className="block text-steel text-sm font-medium mb-2">
                    Email Address *
                  </label>
                  <input
                    id="contact-email"
                    name="email"
                    type="email"
                    required
                    value={formState.email}
                    onChange={handleChange}
                    placeholder="john@company.com"
                    className="w-full px-4 py-3 bg-cream border border-border rounded text-charcoal text-sm placeholder:text-muted focus:outline-none focus:border-amber focus:ring-1 focus:ring-amber/20 transition-colors"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label htmlFor="contact-company" className="block text-steel text-sm font-medium mb-2">
                    Company
                  </label>
                  <input
                    id="contact-company"
                    name="company"
                    type="text"
                    value={formState.company}
                    onChange={handleChange}
                    placeholder="Your Company"
                    className="w-full px-4 py-3 bg-cream border border-border rounded text-charcoal text-sm placeholder:text-muted focus:outline-none focus:border-amber focus:ring-1 focus:ring-amber/20 transition-colors"
                  />
                </div>
                <div>
                  <label htmlFor="contact-phone" className="block text-steel text-sm font-medium mb-2">
                    Phone
                  </label>
                  <input
                    id="contact-phone"
                    name="phone"
                    type="tel"
                    value={formState.phone}
                    onChange={handleChange}
                    placeholder="+1 (555) 000-0000"
                    className="w-full px-4 py-3 bg-cream border border-border rounded text-charcoal text-sm placeholder:text-muted focus:outline-none focus:border-amber focus:ring-1 focus:ring-amber/20 transition-colors"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="contact-product" className="block text-steel text-sm font-medium mb-2">
                  Product Interest
                </label>
                <select
                  id="contact-product"
                  name="product"
                  value={formState.product}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-cream border border-border rounded text-charcoal text-sm focus:outline-none focus:border-amber focus:ring-1 focus:ring-amber/20 transition-colors appearance-none"
                >
                  <option value="">Select a product...</option>
                  <option value="double-folding-machine">Double Folding Machine</option>
                  <option value="double-folder">Double Folder</option>
                  <option value="sheet-metal-folder">Sheet Metal Folder</option>
                  <option value="sheet-metal-folding-machine">Sheet Metal Folding Machine</option>
                  <option value="metal-folder">Metal Folder</option>
                  <option value="metal-folding-machine">Metal Folding Machine</option>
                  <option value="other">Other / Custom</option>
                </select>
              </div>

              <div>
                <label htmlFor="contact-message" className="block text-steel text-sm font-medium mb-2">
                  Message *
                </label>
                <textarea
                  id="contact-message"
                  name="message"
                  rows={5}
                  required
                  value={formState.message}
                  onChange={handleChange}
                  placeholder="Tell us about your project requirements, material types, thicknesses, and any special needs..."
                  className="w-full px-4 py-3 bg-cream border border-border rounded text-charcoal text-sm placeholder:text-muted focus:outline-none focus:border-amber focus:ring-1 focus:ring-amber/20 transition-colors resize-none"
                />
              </div>

              <button
                type="submit"
                className="inline-flex items-center gap-2 bg-amber text-charcoal font-semibold px-8 py-3.5 rounded hover:bg-amber-light transition-all duration-300 shadow-lg shadow-amber/20 hover:shadow-amber/30 hover:-translate-y-0.5 text-sm"
              >
                <Send className="w-4 h-4" />
                Send Inquiry
              </button>

              {submitted && (
                <div className="bg-success/10 border border-success/20 text-success rounded px-4 py-3 text-sm font-medium">
                  Thank you! Your inquiry has been received. Our team will respond within 24 hours.
                </div>
              )}
            </form>
          </div>

          {/* Contact Info */}
          <div className="w-full lg:w-1/3">
            <div className="bg-charcoal rounded-lg p-8 h-full">
              <h3 className="text-white font-semibold text-xl mb-6">Contact Information</h3>
              <div className="flex flex-col gap-6">
                {contactInfo.map((item) => {
                  const Icon = item.icon
                  return (
                    <div key={item.label} className="flex gap-4">
                      <div className="w-10 h-10 bg-white/10 rounded flex items-center justify-center flex-shrink-0">
                        <Icon className="w-5 h-5 text-amber" />
                      </div>
                      <div>
                        <p className="text-white/50 text-xs font-medium uppercase tracking-wider mb-1">{item.label}</p>
                        <p className="text-white text-sm leading-relaxed">{item.value}</p>
                      </div>
                    </div>
                  )
                })}
              </div>

              <div className="mt-8 pt-6 border-t border-white/10">
                <p className="text-white/50 text-xs leading-relaxed">
                  We ship worldwide. For urgent inquiries, call our 24/7 technical support hotline for immediate assistance with existing equipment.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
