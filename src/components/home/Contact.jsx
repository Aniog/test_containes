import React, { useState } from 'react'
import { Send, Phone, Mail, MapPin } from 'lucide-react'

const Contact = () => {
  const [form, setForm] = useState({ name: '', email: '', phone: '', company: '', message: '' })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Contact form submitted:', form)
    setSubmitted(true)
    setTimeout(() => setSubmitted(false), 4000)
    setForm({ name: '', email: '', phone: '', company: '', message: '' })
  }

  return (
    <section id="contact" className="py-20 md:py-28 bg-surface-muted">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-gold text-xs font-semibold tracking-[0.2em] uppercase">
            Get in Touch
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-navy mt-3 mb-4">
            Request a Quote
          </h2>
          <p className="text-text-secondary text-lg">
            Tell us about your project and our team will get back to you within 24 hours with a tailored solution.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
          {/* Contact Info */}
          <div className="lg:col-span-2 space-y-8">
            <div className="bg-navy rounded-xl p-8 text-white">
              <h3 className="text-xl font-bold mb-6">Contact Information</h3>
              <div className="space-y-5">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-gold/15 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Phone className="w-5 h-5 text-gold" />
                  </div>
                  <div>
                    <div className="text-white/50 text-xs font-medium uppercase tracking-wider mb-1">Phone</div>
                    <div className="text-white font-medium">+86 555 123 4567</div>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-gold/15 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Mail className="w-5 h-5 text-gold" />
                  </div>
                  <div>
                    <div className="text-white/50 text-xs font-medium uppercase tracking-wider mb-1">Email</div>
                    <div className="text-white font-medium">sales@artitectmachinery.com</div>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-gold/15 rounded-lg flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-5 h-5 text-gold" />
                  </div>
                  <div>
                    <div className="text-white/50 text-xs font-medium uppercase tracking-wider mb-1">Address</div>
                    <div className="text-white font-medium text-sm leading-relaxed">
                      Industrial Zone, Ma'anshan<br />
                      Anhui Province, China 243000
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="lg:col-span-3">
            <form onSubmit={handleSubmit} className="bg-white rounded-xl border border-surface-border p-8">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-5">
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold text-navy mb-1.5">
                    Full Name *
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    value={form.name}
                    onChange={handleChange}
                    placeholder="John Smith"
                    className="w-full px-4 py-3 rounded-lg border border-surface-border text-navy placeholder:text-text-muted text-sm focus:outline-none focus:ring-2 focus:ring-gold/40 focus:border-gold transition-all"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-navy mb-1.5">
                    Email *
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={form.email}
                    onChange={handleChange}
                    placeholder="john@company.com"
                    className="w-full px-4 py-3 rounded-lg border border-surface-border text-navy placeholder:text-text-muted text-sm focus:outline-none focus:ring-2 focus:ring-gold/40 focus:border-gold transition-all"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-semibold text-navy mb-1.5">
                    Phone
                  </label>
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    value={form.phone}
                    onChange={handleChange}
                    placeholder="+1 234 567 8900"
                    className="w-full px-4 py-3 rounded-lg border border-surface-border text-navy placeholder:text-text-muted text-sm focus:outline-none focus:ring-2 focus:ring-gold/40 focus:border-gold transition-all"
                  />
                </div>
                <div>
                  <label htmlFor="company" className="block text-sm font-semibold text-navy mb-1.5">
                    Company
                  </label>
                  <input
                    id="company"
                    name="company"
                    type="text"
                    value={form.company}
                    onChange={handleChange}
                    placeholder="Your company name"
                    className="w-full px-4 py-3 rounded-lg border border-surface-border text-navy placeholder:text-text-muted text-sm focus:outline-none focus:ring-2 focus:ring-gold/40 focus:border-gold transition-all"
                  />
                </div>
              </div>
              <div className="mb-6">
                <label htmlFor="message" className="block text-sm font-semibold text-navy mb-1.5">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  value={form.message}
                  onChange={handleChange}
                  placeholder="Tell us about your requirements — material type, thickness, working length, production volume..."
                  className="w-full px-4 py-3 rounded-lg border border-surface-border text-navy placeholder:text-text-muted text-sm focus:outline-none focus:ring-2 focus:ring-gold/40 focus:border-gold transition-all resize-none"
                />
              </div>
              <button
                type="submit"
                className="w-full bg-gold hover:bg-gold-light text-navy font-bold py-3.5 rounded-lg text-sm transition-all duration-200 flex items-center justify-center gap-2"
              >
                <Send className="w-4 h-4" />
                Send Inquiry
              </button>
              {submitted && (
                <div className="mt-4 p-4 bg-green-50 border border-green-200 rounded-lg text-green-800 text-sm font-medium text-center">
                  Thank you! Your inquiry has been received. We'll respond within 24 hours.
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
