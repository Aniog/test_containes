import { useState } from 'react'
import { Phone, Mail, MapPin, Clock, Send, CheckCircle } from 'lucide-react'

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', company: '', message: '' })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setForm((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <div>
      {/* Hero */}
      <section className="bg-brand-navy py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl md:text-5xl font-bold text-white tracking-tight">
            Get in Touch
          </h1>
          <p className="mt-4 text-gray-300 text-lg max-w-2xl mx-auto">
            Have questions about our folding machines? Our team is ready to help you find the perfect solution.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-brand-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            {/* Contact Info */}
            <div className="lg:col-span-1 space-y-8">
              <div>
                <h2 className="text-2xl font-bold text-brand-navy mb-6">Contact Information</h2>
                <div className="space-y-5">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-brand-gold/10 rounded-lg flex items-center justify-center shrink-0">
                      <Phone className="w-5 h-5 text-brand-gold" />
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-brand-navy">Phone</p>
                      <a href="tel:+1234567890" className="text-brand-text-secondary hover:text-brand-gold transition-colors">
                        (123) 456-7890
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-brand-gold/10 rounded-lg flex items-center justify-center shrink-0">
                      <Mail className="w-5 h-5 text-brand-gold" />
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-brand-navy">Email</p>
                      <a href="mailto:info@artitectmachinery.com" className="text-brand-text-secondary hover:text-brand-gold transition-colors">
                        info@artitectmachinery.com
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-brand-gold/10 rounded-lg flex items-center justify-center shrink-0">
                      <MapPin className="w-5 h-5 text-brand-gold" />
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-brand-navy">Address</p>
                      <p className="text-brand-text-secondary">
                        123 Industrial Drive, Suite 100<br />
                        Chicago, IL 60601
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-brand-gold/10 rounded-lg flex items-center justify-center shrink-0">
                      <Clock className="w-5 h-5 text-brand-gold" />
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-brand-navy">Business Hours</p>
                      <p className="text-brand-text-secondary">
                        Monday – Friday: 8:00 AM – 6:00 PM<br />
                        Saturday: 9:00 AM – 1:00 PM
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Form */}
            <div className="lg:col-span-2">
              <div className="bg-white border border-brand-border rounded-xl p-6 md:p-8">
                <h2 className="text-2xl font-bold text-brand-navy mb-2">Send Us a Message</h2>
                <p className="text-brand-text-secondary mb-8">
                  Fill out the form below and we'll get back to you within 24 hours.
                </p>

                {submitted ? (
                  <div className="text-center py-12">
                    <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
                    <h3 className="text-xl font-semibold text-brand-navy mb-2">Thank You!</h3>
                    <p className="text-brand-text-secondary">
                      Your message has been received. Our team will contact you shortly.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium text-brand-navy mb-1.5">
                          Full Name *
                        </label>
                        <input
                          id="name"
                          name="name"
                          type="text"
                          required
                          value={form.name}
                          onChange={handleChange}
                          className="w-full px-4 py-2.5 border border-brand-border rounded-lg text-brand-navy placeholder:text-brand-text-muted focus:outline-none focus:ring-2 focus:ring-brand-gold/30 focus:border-brand-gold transition-colors"
                          placeholder="John Smith"
                        />
                      </div>
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-brand-navy mb-1.5">
                          Email Address *
                        </label>
                        <input
                          id="email"
                          name="email"
                          type="email"
                          required
                          value={form.email}
                          onChange={handleChange}
                          className="w-full px-4 py-2.5 border border-brand-border rounded-lg text-brand-navy placeholder:text-brand-text-muted focus:outline-none focus:ring-2 focus:ring-brand-gold/30 focus:border-brand-gold transition-colors"
                          placeholder="john@company.com"
                        />
                      </div>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div>
                        <label htmlFor="phone" className="block text-sm font-medium text-brand-navy mb-1.5">
                          Phone Number
                        </label>
                        <input
                          id="phone"
                          name="phone"
                          type="tel"
                          value={form.phone}
                          onChange={handleChange}
                          className="w-full px-4 py-2.5 border border-brand-border rounded-lg text-brand-navy placeholder:text-brand-text-muted focus:outline-none focus:ring-2 focus:ring-brand-gold/30 focus:border-brand-gold transition-colors"
                          placeholder="(123) 456-7890"
                        />
                      </div>
                      <div>
                        <label htmlFor="company" className="block text-sm font-medium text-brand-navy mb-1.5">
                          Company
                        </label>
                        <input
                          id="company"
                          name="company"
                          type="text"
                          value={form.company}
                          onChange={handleChange}
                          className="w-full px-4 py-2.5 border border-brand-border rounded-lg text-brand-navy placeholder:text-brand-text-muted focus:outline-none focus:ring-2 focus:ring-brand-gold/30 focus:border-brand-gold transition-colors"
                          placeholder="Your Company Inc."
                        />
                      </div>
                    </div>
                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-brand-navy mb-1.5">
                        Message *
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        rows={5}
                        required
                        value={form.message}
                        onChange={handleChange}
                        className="w-full px-4 py-2.5 border border-brand-border rounded-lg text-brand-navy placeholder:text-brand-text-muted focus:outline-none focus:ring-2 focus:ring-brand-gold/30 focus:border-brand-gold transition-colors resize-y"
                        placeholder="Tell us about your project, requirements, and which machines you're interested in..."
                      />
                    </div>
                    <button
                      type="submit"
                      className="inline-flex items-center gap-2 bg-brand-gold text-white font-medium px-8 py-3 rounded-lg hover:bg-brand-navy transition-colors"
                    >
                      <Send className="w-4 h-4" />
                      Send Message
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}