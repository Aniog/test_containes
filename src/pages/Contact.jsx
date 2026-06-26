import { useState } from 'react'
import { Phone, Mail, MapPin, Clock, Send } from 'lucide-react'

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', company: '', message: '' })
  const [submitted, setSubmitted] = useState(false)

  const onChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const onSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
    setForm({ name: '', email: '', phone: '', company: '', message: '' })
  }

  return (
    <div>
      {/* Page Header */}
      <section className="bg-navy py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-block px-3 py-1 bg-gold/20 text-gold text-xs font-semibold uppercase tracking-wider rounded-full mb-4">
            Get In Touch
          </span>
          <h1 className="text-3xl md:text-5xl font-bold text-white mb-4">
            Contact Us
          </h1>
          <p className="text-gray-300 max-w-2xl mx-auto text-lg">
            Ready to find the right machine? Let's discuss your requirements.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-20 bg-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            {/* Contact Info */}
            <div className="lg:col-span-1 space-y-6">
              <div className="bg-surface rounded-xl p-6 border border-border">
                <h2 className="text-xl font-bold text-navy mb-6">Contact Information</h2>

                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <Phone className="w-5 h-5 text-gold mt-0.5 shrink-0" />
                    <div>
                      <p className="text-sm font-semibold text-navy">Phone</p>
                      <p className="text-muted text-sm">+1 (555) 123-4567</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Mail className="w-5 h-5 text-gold mt-0.5 shrink-0" />
                    <div>
                      <p className="text-sm font-semibold text-navy">Email</p>
                      <p className="text-muted text-sm">info@artitectmachinery.com</p>
                      <p className="text-muted text-sm">sales@artitectmachinery.com</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-gold mt-0.5 shrink-0" />
                    <div>
                      <p className="text-sm font-semibold text-navy">Address</p>
                      <p className="text-muted text-sm">
                        1200 Industrial Blvd<br />
                        Chicago, IL 60607<br />
                        United States
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Clock className="w-5 h-5 text-gold mt-0.5 shrink-0" />
                    <div>
                      <p className="text-sm font-semibold text-navy">Business Hours</p>
                      <p className="text-muted text-sm">
                        Monday – Friday: 8:00 AM – 6:00 PM<br />
                        Saturday: 9:00 AM – 1:00 PM<br />
                        Sunday: Closed
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <div className="bg-surface rounded-xl p-6 md:p-8 border border-border">
                <h2 className="text-xl font-bold text-navy mb-2">Send Us a Message</h2>
                <p className="text-muted text-sm mb-6">
                  Fill out the form below and our team will get back to you within 24 hours.
                </p>

                {submitted ? (
                  <div className="bg-green-50 border border-green-200 rounded-lg p-6 text-center">
                    <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Send className="w-6 h-6 text-green-600" />
                    </div>
                    <h3 className="text-lg font-semibold text-green-800 mb-1">Thank You!</h3>
                    <p className="text-green-700">
                      Your message has been received. We'll be in touch shortly.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={onSubmit} className="space-y-5">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium text-navy mb-1.5">
                          Full Name *
                        </label>
                        <input
                          id="name"
                          name="name"
                          type="text"
                          required
                          value={form.name}
                          onChange={onChange}
                          className="w-full px-4 py-2.5 border border-border rounded-lg text-navy bg-bg focus:outline-none focus:ring-2 focus:ring-gold/50 focus:border-gold transition-colors"
                          placeholder="John Smith"
                        />
                      </div>
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-navy mb-1.5">
                          Email Address *
                        </label>
                        <input
                          id="email"
                          name="email"
                          type="email"
                          required
                          value={form.email}
                          onChange={onChange}
                          className="w-full px-4 py-2.5 border border-border rounded-lg text-navy bg-bg focus:outline-none focus:ring-2 focus:ring-gold/50 focus:border-gold transition-colors"
                          placeholder="john@company.com"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div>
                        <label htmlFor="phone" className="block text-sm font-medium text-navy mb-1.5">
                          Phone Number
                        </label>
                        <input
                          id="phone"
                          name="phone"
                          type="tel"
                          value={form.phone}
                          onChange={onChange}
                          className="w-full px-4 py-2.5 border border-border rounded-lg text-navy bg-bg focus:outline-none focus:ring-2 focus:ring-gold/50 focus:border-gold transition-colors"
                          placeholder="+1 (555) 000-0000"
                        />
                      </div>
                      <div>
                        <label htmlFor="company" className="block text-sm font-medium text-navy mb-1.5">
                          Company
                        </label>
                        <input
                          id="company"
                          name="company"
                          type="text"
                          value={form.company}
                          onChange={onChange}
                          className="w-full px-4 py-2.5 border border-border rounded-lg text-navy bg-bg focus:outline-none focus:ring-2 focus:ring-gold/50 focus:border-gold transition-colors"
                          placeholder="Company name"
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-navy mb-1.5">
                        Message *
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        rows={5}
                        required
                        value={form.message}
                        onChange={onChange}
                        className="w-full px-4 py-2.5 border border-border rounded-lg text-navy bg-bg focus:outline-none focus:ring-2 focus:ring-gold/50 focus:border-gold transition-colors resize-y"
                        placeholder="Tell us about your requirements..."
                      />
                    </div>

                    <button
                      type="submit"
                      className="px-8 py-3 bg-gold text-navy font-semibold rounded-lg hover:bg-gold/90 transition-colors shadow-md"
                    >
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
