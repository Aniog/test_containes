import { useState } from 'react'
import { Mail, Phone, MapPin, Send } from 'lucide-react'

export default function ContactSection() {
  const [form, setForm] = useState({ name: '', email: '', company: '', message: '' })
  const [status, setStatus] = useState('idle')

  const handleChange = (e) => {
    const { name, value } = e.target
    setForm((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setStatus('submitted')
    setTimeout(() => {
      setStatus('idle')
      setForm({ name: '', email: '', company: '', message: '' })
    }, 3000)
  }

  return (
    <section id="contact" className="py-20 lg:py-28 bg-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 lg:mb-20">
          <span className="text-gold text-xs lg:text-sm font-semibold tracking-[0.25em] uppercase">
            Get in Touch
          </span>
          <h2 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-navy">
            Request a Quote or Demo
          </h2>
          <p className="mt-4 text-charcoal/60 max-w-2xl mx-auto text-base lg:text-lg">
            Tell us about your folding requirements and our team will get back to you within 24 hours.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16">
          {/* Contact Info */}
          <div className="lg:col-span-2 space-y-8">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-lg bg-navy/5 flex items-center justify-center shrink-0">
                <Mail size={20} className="text-gold" />
              </div>
              <div>
                <h4 className="font-serif font-bold text-navy text-lg mb-1">Email Us</h4>
                <p className="text-sm text-charcoal/60">info@artitectmachinery.com</p>
                <p className="text-sm text-charcoal/60">sales@artitectmachinery.com</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-lg bg-navy/5 flex items-center justify-center shrink-0">
                <Phone size={20} className="text-gold" />
              </div>
              <div>
                <h4 className="font-serif font-bold text-navy text-lg mb-1">Call Us</h4>
                <p className="text-sm text-charcoal/60">+1 (555) 123-4567</p>
                <p className="text-sm text-charcoal/50 text-xs mt-1">Mon–Fri, 8:00 AM – 6:00 PM CST</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-lg bg-navy/5 flex items-center justify-center shrink-0">
                <MapPin size={20} className="text-gold" />
              </div>
              <div>
                <h4 className="font-serif font-bold text-navy text-lg mb-1">Visit Us</h4>
                <p className="text-sm text-charcoal/60">
                  123 Industrial Way, Suite 100<br />
                  Chicago, IL 60601<br />
                  United States
                </p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-3">
            <form onSubmit={handleSubmit} className="bg-white rounded-xl shadow-md p-6 sm:p-8 lg:p-10 space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-charcoal mb-1.5">
                    Full Name *
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    value={form.name}
                    onChange={handleChange}
                    className="w-full px-4 py-2.5 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-gold/30 focus:border-gold transition-colors"
                    placeholder="John Smith"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-charcoal mb-1.5">
                    Email Address *
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={form.email}
                    onChange={handleChange}
                    className="w-full px-4 py-2.5 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-gold/30 focus:border-gold transition-colors"
                    placeholder="john@company.com"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="company" className="block text-sm font-medium text-charcoal mb-1.5">
                  Company
                </label>
                <input
                  id="company"
                  name="company"
                  type="text"
                  value={form.company}
                  onChange={handleChange}
                  className="w-full px-4 py-2.5 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-gold/30 focus:border-gold transition-colors"
                  placeholder="Your Company Name"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-charcoal mb-1.5">
                  Tell us about your requirements *
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  required
                  value={form.message}
                  onChange={handleChange}
                  className="w-full px-4 py-2.5 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-gold/30 focus:border-gold transition-colors resize-none"
                  placeholder="Describe the type of folding machine you need, material thickness, production volume, etc."
                />
              </div>

              <button
                type="submit"
                disabled={status === 'submitted'}
                className="inline-flex items-center gap-2 px-8 py-3.5 bg-gold text-navy font-semibold rounded-lg hover:bg-gold-light transition-colors text-sm lg:text-base disabled:opacity-60"
              >
                <Send size={18} />
                {status === 'submitted' ? 'Message Sent!' : 'Send Inquiry'}
              </button>

              {status === 'submitted' && (
                <p className="text-sm text-green-600 mt-2">
                  Thank you for your inquiry! Our team will get back to you shortly.
                </p>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}