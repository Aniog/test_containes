import { useState } from 'react'
import { Link } from 'react-router-dom'
import { ChevronRight, MapPin, Phone, Mail, Clock, Send, CheckCircle } from 'lucide-react'

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', company: '', phone: '', subject: '', message: '' })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <>
      {/* Page Header */}
      <section className="bg-brand-950 pt-8 pb-16 md:pt-12 md:pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 text-brand-400 text-sm mb-6">
            <Link to="/" className="hover:text-white transition-colors">Home</Link>
            <ChevronRight className="w-4 h-4" />
            <span className="text-white">Contact</span>
          </div>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
            Get in Touch
          </h1>
          <p className="text-brand-300 text-lg max-w-2xl">
            Have a question about our machines or need a custom quote? Our team is ready to help you find the right solution.
          </p>
        </div>
      </section>

      {/* Form + Info */}
      <section className="py-16 md:py-20 bg-steel-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 lg:gap-12">
            {/* Contact Info */}
            <div className="lg:col-span-1">
              <h2 className="text-xl font-semibold text-brand-900 mb-6">Contact Information</h2>
              <div className="space-y-5 mb-10">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-5 h-5 text-accent" />
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-brand-900 mb-1">Headquarters</h3>
                    <p className="text-sm text-steel-500">1200 Industrial Parkway<br />Stuttgart, Germany 70173</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center flex-shrink-0">
                    <Phone className="w-5 h-5 text-accent" />
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-brand-900 mb-1">Phone</h3>
                    <p className="text-sm text-steel-500">+49 711 555 0100</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center flex-shrink-0">
                    <Mail className="w-5 h-5 text-accent" />
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-brand-900 mb-1">Email</h3>
                    <p className="text-sm text-steel-500">info@artitect-machinery.com</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center flex-shrink-0">
                    <Clock className="w-5 h-5 text-accent" />
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-brand-900 mb-1">Business Hours</h3>
                    <p className="text-sm text-steel-500">Mon – Fri: 8:00 – 17:00 CET</p>
                  </div>
                </div>
              </div>

              {/* Map placeholder */}
              <div className="aspect-[4/3] bg-gradient-to-br from-brand-100 to-steel-200 rounded-2xl flex items-center justify-center">
                <div className="text-center">
                  <MapPin className="w-8 h-8 text-brand-400 mx-auto mb-2" />
                  <span className="text-brand-500 text-sm">Stuttgart, Germany</span>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-2xl border border-steel-200 p-6 md:p-8 lg:p-10">
                {submitted ? (
                  <div className="text-center py-12">
                    <CheckCircle className="w-14 h-14 text-green-500 mx-auto mb-5" />
                    <h3 className="text-2xl font-bold text-brand-900 mb-3">Thank You!</h3>
                    <p className="text-steel-500 mb-6">
                      Your message has been received. Our team will get back to you within 24 hours.
                    </p>
                    <button
                      onClick={() => { setSubmitted(false); setForm({ name: '', email: '', company: '', phone: '', subject: '', message: '' }) }}
                      className="text-accent font-semibold hover:text-accent-dark transition-colors"
                    >
                      Send another message
                    </button>
                  </div>
                ) : (
                  <>
                    <h2 className="text-xl font-semibold text-brand-900 mb-2">Send Us a Message</h2>
                    <p className="text-sm text-steel-500 mb-8">Fill out the form below and we will get back to you promptly.</p>

                    <form onSubmit={handleSubmit} className="space-y-5">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                        <div>
                          <label htmlFor="name" className="block text-sm font-medium text-brand-800 mb-1.5">Full Name *</label>
                          <input
                            type="text"
                            id="name"
                            name="name"
                            required
                            value={form.name}
                            onChange={handleChange}
                            className="w-full px-4 py-2.5 rounded-lg bg-steel-50 border border-steel-200 text-brand-900 text-sm placeholder:text-steel-400 focus:outline-none focus:ring-2 focus:ring-accent/30 focus:border-accent transition-all"
                            placeholder="John Doe"
                          />
                        </div>
                        <div>
                          <label htmlFor="email" className="block text-sm font-medium text-brand-800 mb-1.5">Email *</label>
                          <input
                            type="email"
                            id="email"
                            name="email"
                            required
                            value={form.email}
                            onChange={handleChange}
                            className="w-full px-4 py-2.5 rounded-lg bg-steel-50 border border-steel-200 text-brand-900 text-sm placeholder:text-steel-400 focus:outline-none focus:ring-2 focus:ring-accent/30 focus:border-accent transition-all"
                            placeholder="john@company.com"
                          />
                        </div>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                        <div>
                          <label htmlFor="company" className="block text-sm font-medium text-brand-800 mb-1.5">Company</label>
                          <input
                            type="text"
                            id="company"
                            name="company"
                            value={form.company}
                            onChange={handleChange}
                            className="w-full px-4 py-2.5 rounded-lg bg-steel-50 border border-steel-200 text-brand-900 text-sm placeholder:text-steel-400 focus:outline-none focus:ring-2 focus:ring-accent/30 focus:border-accent transition-all"
                            placeholder="Your Company"
                          />
                        </div>
                        <div>
                          <label htmlFor="phone" className="block text-sm font-medium text-brand-800 mb-1.5">Phone</label>
                          <input
                            type="tel"
                            id="phone"
                            name="phone"
                            value={form.phone}
                            onChange={handleChange}
                            className="w-full px-4 py-2.5 rounded-lg bg-steel-50 border border-steel-200 text-brand-900 text-sm placeholder:text-steel-400 focus:outline-none focus:ring-2 focus:ring-accent/30 focus:border-accent transition-all"
                            placeholder="+1 (555) 000-0000"
                          />
                        </div>
                      </div>

                      <div>
                        <label htmlFor="subject" className="block text-sm font-medium text-brand-800 mb-1.5">Subject *</label>
                        <select
                          id="subject"
                          name="subject"
                          required
                          value={form.subject}
                          onChange={handleChange}
                          className="w-full px-4 py-2.5 rounded-lg bg-steel-50 border border-steel-200 text-brand-900 text-sm focus:outline-none focus:ring-2 focus:ring-accent/30 focus:border-accent transition-all"
                        >
                          <option value="">Select a subject</option>
                          <option value="quote">Request a Quote</option>
                          <option value="info">Product Information</option>
                          <option value="support">Technical Support</option>
                          <option value="parts">Spare Parts</option>
                          <option value="training">Training Programs</option>
                          <option value="other">Other</option>
                        </select>
                      </div>

                      <div>
                        <label htmlFor="message" className="block text-sm font-medium text-brand-800 mb-1.5">Message *</label>
                        <textarea
                          id="message"
                          name="message"
                          required
                          rows={5}
                          value={form.message}
                          onChange={handleChange}
                          className="w-full px-4 py-2.5 rounded-lg bg-steel-50 border border-steel-200 text-brand-900 text-sm placeholder:text-steel-400 focus:outline-none focus:ring-2 focus:ring-accent/30 focus:border-accent transition-all resize-none"
                          placeholder="Tell us about your requirements..."
                        />
                      </div>

                      <button
                        type="submit"
                        className="w-full flex items-center justify-center gap-2 px-8 py-3.5 bg-accent hover:bg-accent-dark text-white font-semibold rounded-lg text-base transition-all duration-200 shadow-lg shadow-accent/25"
                      >
                        <Send className="w-5 h-5" />
                        Send Message
                      </button>
                    </form>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
