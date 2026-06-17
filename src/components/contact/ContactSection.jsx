import { useState } from 'react'
import { Mail, Phone, MapPin, Send, Loader2, CheckCircle } from 'lucide-react'

const contactInfo = [
  { icon: MapPin, label: 'Headquarters', value: 'Industriestrasse 42, 8031 Zurich, Switzerland' },
  { icon: Phone, label: 'Phone', value: '+41 44 555 0123' },
  { icon: Mail, label: 'Email', value: 'info@artitect-machinery.com' },
]

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    message: '',
  })
  const [status, setStatus] = useState('idle') // idle | submitting | success | error

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('submitting')

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500))

    // In production, this would send data to your backend
    console.log('Form submitted:', formData)

    setStatus('success')
    setFormData({ name: '', email: '', company: '', phone: '', message: '' })

    // Reset success message after a few seconds
    setTimeout(() => setStatus('idle'), 5000)
  }

  return (
    <section id="contact" className="py-20 md:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block text-accent font-display font-semibold text-sm tracking-[0.2em] uppercase mb-3">
            Get in Touch
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-6">
            Request a Consultation
          </h2>
          <p className="font-body text-lg text-brand-600 leading-relaxed">
            Tell us about your folding requirements and our team will respond within
            24 hours with a tailored solution.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-12 lg:gap-16">
          {/* Contact Info */}
          <div className="lg:col-span-2 space-y-8">
            <div className="bg-brand-50 rounded-xl p-6 md:p-8 border border-brand-100">
              <h3 className="font-display text-xl font-bold text-primary mb-6">
                Contact Information
              </h3>
              <div className="space-y-6">
                {contactInfo.map((item, idx) => (
                  <div key={idx} className="flex gap-4">
                    <div className="shrink-0 w-10 h-10 bg-white rounded-lg flex items-center justify-center shadow-sm">
                      <item.icon className="w-5 h-5 text-accent" />
                    </div>
                    <div>
                      <p className="font-body text-sm font-medium text-brand-500">{item.label}</p>
                      <p className="font-body text-base text-brand-800">{item.value}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-primary rounded-xl p-6 md:p-8 text-white">
              <h3 className="font-display text-xl font-bold mb-3">Need Immediate Assistance?</h3>
              <p className="font-body text-white/80 text-sm mb-4">
                Our technical support team is available 24/7 for urgent inquiries.
              </p>
              <a
                href="tel:+41445550123"
                className="inline-flex items-center gap-2 bg-accent hover:bg-accent-light text-white font-medium py-2.5 px-5 rounded-md transition-all duration-300 text-sm"
              >
                <Phone className="w-4 h-4" />
                +41 44 555 0123
              </a>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-3">
            <form onSubmit={handleSubmit} className="bg-white rounded-xl border border-brand-100 p-6 md:p-8 shadow-sm">
              <h3 className="font-display text-xl font-bold text-primary mb-6">
                Send Us a Message
              </h3>

              {status === 'success' ? (
                <div className="flex flex-col items-center justify-center py-12 text-center">
                  <div className="w-16 h-16 bg-green-50 rounded-full flex items-center justify-center mb-4">
                    <CheckCircle className="w-8 h-8 text-green-500" />
                  </div>
                  <h4 className="font-display text-xl font-bold text-primary mb-2">Message Sent!</h4>
                  <p className="font-body text-brand-600">Thank you for reaching out. We will get back to you shortly.</p>
                </div>
              ) : (
                <div className="space-y-5">
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label htmlFor="name" className="block font-body text-sm font-medium text-brand-700 mb-1.5">
                        Full Name *
                      </label>
                      <input
                        id="name"
                        name="name"
                        type="text"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full px-4 py-2.5 rounded-md border border-brand-200 bg-white text-brand-800 font-body text-sm focus:outline-none focus:ring-2 focus:ring-accent/30 focus:border-accent transition-colors placeholder:text-brand-300"
                        placeholder="John Smith"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block font-body text-sm font-medium text-brand-700 mb-1.5">
                        Email Address *
                      </label>
                      <input
                        id="email"
                        name="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-4 py-2.5 rounded-md border border-brand-200 bg-white text-brand-800 font-body text-sm focus:outline-none focus:ring-2 focus:ring-accent/30 focus:border-accent transition-colors placeholder:text-brand-300"
                        placeholder="john@company.com"
                      />
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label htmlFor="company" className="block font-body text-sm font-medium text-brand-700 mb-1.5">
                        Company
                      </label>
                      <input
                        id="company"
                        name="company"
                        type="text"
                        value={formData.company}
                        onChange={handleChange}
                        className="w-full px-4 py-2.5 rounded-md border border-brand-200 bg-white text-brand-800 font-body text-sm focus:outline-none focus:ring-2 focus:ring-accent/30 focus:border-accent transition-colors placeholder:text-brand-300"
                        placeholder="Your Company Ltd."
                      />
                    </div>
                    <div>
                      <label htmlFor="phone" className="block font-body text-sm font-medium text-brand-700 mb-1.5">
                        Phone Number
                      </label>
                      <input
                        id="phone"
                        name="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-2.5 rounded-md border border-brand-200 bg-white text-brand-800 font-body text-sm focus:outline-none focus:ring-2 focus:ring-accent/30 focus:border-accent transition-colors placeholder:text-brand-300"
                        placeholder="+41 44 555 0123"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="message" className="block font-body text-sm font-medium text-brand-700 mb-1.5">
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      required
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full px-4 py-2.5 rounded-md border border-brand-200 bg-white text-brand-800 font-body text-sm focus:outline-none focus:ring-2 focus:ring-accent/30 focus:border-accent transition-colors placeholder:text-brand-300 resize-none"
                      placeholder="Describe your requirements, machine type, capacity, and any specific needs..."
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={status === 'submitting'}
                    className="w-full inline-flex items-center justify-center gap-2 bg-accent hover:bg-accent-light text-white font-semibold py-3 px-6 rounded-md transition-all duration-300 text-base disabled:opacity-60 disabled:cursor-not-allowed"
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
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}