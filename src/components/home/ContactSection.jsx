import { useState } from 'react'
import { Send, Phone, Mail, MapPin, Clock } from 'lucide-react'

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    machine: '',
    message: '',
  })
  const [status, setStatus] = useState('idle')

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('submitting')

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1000))
    setStatus('success')
    setFormData({ name: '', email: '', company: '', machine: '', message: '' })

    // Reset success message after 5 seconds
    setTimeout(() => setStatus('idle'), 5000)
  }

  const contactInfo = [
    {
      icon: Phone,
      label: 'Phone',
      value: '+1 (555) 123-4567',
      href: 'tel:+15551234567',
    },
    {
      icon: Mail,
      label: 'Email',
      value: 'info@artitectmachinery.com',
      href: 'mailto:info@artitectmachinery.com',
    },
    {
      icon: MapPin,
      label: 'Address',
      value: '1250 Industrial Blvd, Suite 400, Chicago, IL 60607',
    },
    {
      icon: Clock,
      label: 'Hours',
      value: 'Mon - Fri: 8:00 AM - 6:00 PM CST',
    },
  ]

  return (
    <section id="contact" className="py-20 md:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-14 md:mb-18">
          <span className="text-[11px] font-semibold text-brand-gold tracking-[0.2em] uppercase">
            Get in Touch
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-brand-navy mb-4 mt-3">Request a Quote</h2>
          <p className="text-lg text-gray-500 max-w-2xl mx-auto">
            Tell us about your requirements and our team will provide a tailored solution
            with pricing within 24 hours.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 lg:gap-16">
          {/* Contact Info */}
          <div className="lg:col-span-2 space-y-6">
            {contactInfo.map((item) => {
              const Icon = item.icon
              return (
                <div key={item.label} className="flex gap-4">
                  <div className="w-11 h-11 rounded-lg bg-brand-gold/10 flex items-center justify-center shrink-0">
                    <Icon className="w-5 h-5 text-brand-gold" />
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider">
                      {item.label}
                    </p>
                    {item.href ? (
                      <a
                        href={item.href}
                        className="text-sm font-medium text-brand-navy hover:text-brand-gold transition-colors"
                      >
                        {item.value}
                      </a>
                    ) : (
                      <p className="text-sm font-medium text-brand-navy">{item.value}</p>
                    )}
                  </div>
                </div>
              )
            })}

            <div className="pt-6 border-t border-gray-100">
              <p className="text-sm text-gray-500 leading-relaxed">
                Our team of application engineers is ready to help you find the perfect
                folding solution for your manufacturing operation.
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-3">
            <form onSubmit={handleSubmit} className="bg-brand-surface rounded-xl p-6 md:p-8 border border-gray-100">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-brand-navy mb-1.5">
                    Full Name <span className="text-red-400">*</span>
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="John Smith"
                    className="w-full px-4 py-2.5 rounded-md border border-gray-200 bg-white text-sm text-brand-navy placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-brand-gold/40 focus:border-brand-gold transition-all"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-brand-navy mb-1.5">
                    Email Address <span className="text-red-400">*</span>
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="john@company.com"
                    className="w-full px-4 py-2.5 rounded-md border border-gray-200 bg-white text-sm text-brand-navy placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-brand-gold/40 focus:border-brand-gold transition-all"
                  />
                </div>
                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-brand-navy mb-1.5">
                    Company Name
                  </label>
                  <input
                    id="company"
                    name="company"
                    type="text"
                    value={formData.company}
                    onChange={handleChange}
                    placeholder="Your Company Ltd."
                    className="w-full px-4 py-2.5 rounded-md border border-gray-200 bg-white text-sm text-brand-navy placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-brand-gold/40 focus:border-brand-gold transition-all"
                  />
                </div>
                <div>
                  <label htmlFor="machine" className="block text-sm font-medium text-brand-navy mb-1.5">
                    Machine Interest
                  </label>
                  <select
                    id="machine"
                    name="machine"
                    value={formData.machine}
                    onChange={handleChange}
                    className="w-full px-4 py-2.5 rounded-md border border-gray-200 bg-white text-sm text-brand-navy focus:outline-none focus:ring-2 focus:ring-brand-gold/40 focus:border-brand-gold transition-all"
                  >
                    <option value="">Select a machine...</option>
                    <option value="double-folding-machine">Double Folding Machine</option>
                    <option value="double-folder">Double Folder</option>
                    <option value="sheet-metal-folder">Sheet Metal Folder</option>
                    <option value="metal-folding-machine">Metal Folding Machine</option>
                    <option value="other">Other / Not Sure</option>
                  </select>
                </div>
              </div>

              <div className="mt-5">
                <label htmlFor="message" className="block text-sm font-medium text-brand-navy mb-1.5">
                  Your Requirements <span className="text-red-400">*</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  required
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Describe your application, material specifications, production volume, and any special requirements..."
                  className="w-full px-4 py-2.5 rounded-md border border-gray-200 bg-white text-sm text-brand-navy placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-brand-gold/40 focus:border-brand-gold transition-all resize-y"
                />
              </div>

              <button
                type="submit"
                disabled={status === 'submitting'}
                className="mt-6 w-full inline-flex items-center justify-center gap-2 bg-brand-gold hover:bg-brand-gold/90 disabled:bg-gray-300 disabled:cursor-not-allowed text-white px-6 py-3 rounded-md font-semibold text-sm transition-all"
              >
                {status === 'submitting' ? (
                  <>
                    <svg className="animate-spin h-4 w-4" viewBox="0 0 24 24" fill="none">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                    </svg>
                    Sending...
                  </>
                ) : (
                  <>
                    <Send className="w-4 h-4" />
                    Send Inquiry
                  </>
                )}
              </button>

              {status === 'success' && (
                <p className="mt-4 text-sm text-green-600 font-medium text-center">
                  Thank you! Your inquiry has been received. Our team will get back to you within 24 hours.
                </p>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}