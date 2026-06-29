import { useState } from 'react'
import { Mail, Phone, MapPin, Send, Loader2 } from 'lucide-react'

const contactInfo = [
  { icon: Mail, label: 'Email', value: 'info@artitectmachinery.com', href: 'mailto:info@artitectmachinery.com' },
  { icon: Phone, label: 'Phone', value: '+1 (555) 123-4567', href: 'tel:+15551234567' },
  { icon: MapPin, label: 'Address', value: '300 Innovation Drive, Detroit, MI 48226' },
]

export default function ContactSection() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [status, setStatus] = useState('idle')

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setStatus('submitting')
    // Simulate submission
    setTimeout(() => {
      setStatus('success')
      setForm({ name: '', email: '', message: '' })
      setTimeout(() => setStatus('idle'), 4000)
    }, 1200)
  }

  return (
    <section id="contact" className="py-20 md:py-28 bg-brand-surface">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-20">
          <span className="inline-block text-sm font-semibold text-brand-accent uppercase tracking-widest mb-4">
            Contact Us
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-brand-navy tracking-tight mb-6">
            Let's Discuss Your Project
          </h2>
          <p className="text-brand-muted text-lg leading-relaxed">
            Ready to upgrade your metal folding capabilities? Reach out to our
            team for a consultation, quote, or machine demonstration.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-12 lg:gap-16">
          {/* Contact Info */}
          <div className="lg:col-span-2 space-y-8">
            <div className="space-y-6">
              {contactInfo.map((item) => {
                const Icon = item.icon
                return (
                  <div key={item.label} className="flex gap-4">
                    <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-brand-accent/10 flex items-center justify-center">
                      <Icon className="w-5 h-5 text-brand-accent" />
                    </div>
                    <div>
                      <p className="text-sm text-brand-muted font-medium">{item.label}</p>
                      {item.href ? (
                        <a
                          href={item.href}
                          className="text-brand-text font-semibold hover:text-brand-accent transition-colors"
                        >
                          {item.value}
                        </a>
                      ) : (
                        <p className="text-brand-text font-semibold">{item.value}</p>
                      )}
                    </div>
                  </div>
                )
              })}
            </div>

            <div className="p-6 rounded-xl bg-brand-navy text-white">
              <h3 className="text-lg font-semibold mb-3">Office Hours</h3>
              <div className="space-y-2 text-white/70 text-sm">
                <p className="flex justify-between">
                  <span>Monday - Friday</span>
                  <span className="text-white/90">8:00 AM - 6:00 PM</span>
                </p>
                <p className="flex justify-between">
                  <span>Saturday</span>
                  <span className="text-white/90">9:00 AM - 2:00 PM</span>
                </p>
                <p className="flex justify-between">
                  <span>Sunday</span>
                  <span className="text-white/90">Closed</span>
                </p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-3">
            <form onSubmit={handleSubmit} className="bg-white rounded-xl border border-brand-border p-8 space-y-6">
              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-brand-text mb-2">
                    Full Name <span className="text-brand-accent">*</span>
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    value={form.name}
                    onChange={handleChange}
                    placeholder="John Smith"
                    className="w-full px-4 py-3 rounded-lg border border-brand-border bg-brand-cream/50 text-brand-text placeholder:text-brand-muted/60 focus:outline-none focus:ring-2 focus:ring-brand-accent/30 focus:border-brand-accent transition-all"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-brand-text mb-2">
                    Email Address <span className="text-brand-accent">*</span>
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={form.email}
                    onChange={handleChange}
                    placeholder="john@company.com"
                    className="w-full px-4 py-3 rounded-lg border border-brand-border bg-brand-cream/50 text-brand-text placeholder:text-brand-muted/60 focus:outline-none focus:ring-2 focus:ring-brand-accent/30 focus:border-brand-accent transition-all"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-brand-text mb-2">
                  Your Message <span className="text-brand-accent">*</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  required
                  value={form.message}
                  onChange={handleChange}
                  placeholder="Tell us about your requirements, machine type, quantity, and any special requests..."
                  className="w-full px-4 py-3 rounded-lg border border-brand-border bg-brand-cream/50 text-brand-text placeholder:text-brand-muted/60 focus:outline-none focus:ring-2 focus:ring-brand-accent/30 focus:border-brand-accent transition-all resize-none"
                />
              </div>

              <button
                type="submit"
                disabled={status === 'submitting'}
                className="w-full inline-flex items-center justify-center gap-2 px-8 py-3.5 bg-brand-accent text-white rounded-lg font-semibold text-base hover:bg-brand-accent-light disabled:opacity-60 disabled:cursor-not-allowed transition-all duration-300"
              >
                {status === 'submitting' ? (
                  <>
                    <Loader2 className="w-5 h-5 animate-spin" />
                    Sending...
                  </>
                ) : (
                  <>
                    <Send className="w-5 h-5" />
                    Send Message
                  </>
                )}
              </button>

              {status === 'success' && (
                <p className="text-center text-green-600 font-medium bg-green-50 rounded-lg py-3">
                  Thank you! We will get back to you within 24 hours.
                </p>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}