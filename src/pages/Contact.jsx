import { useState } from 'react'
import { MapPin, Phone, Mail, Clock, Send } from 'lucide-react'

const contactInfo = [
  {
    icon: MapPin,
    title: 'Visit Us',
    lines: ['123 Industrial Park Drive', 'Stuttgart, Germany 70173'],
  },
  {
    icon: Phone,
    title: 'Call Us',
    lines: ['+1 (234) 567-890', '+49 711 123 4567'],
  },
  {
    icon: Mail,
    title: 'Email Us',
    lines: ['info@artitectmachinery.com', 'sales@artitectmachinery.com'],
  },
  {
    icon: Clock,
    title: 'Business Hours',
    lines: ['Mon – Fri: 8:00 AM – 6:00 PM', 'Sat: 9:00 AM – 1:00 PM'],
  },
]

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    subject: '',
    message: '',
  })
  const [status, setStatus] = useState('idle')

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setStatus('sending')
    setTimeout(() => {
      setStatus('success')
      setFormData({ name: '', email: '', company: '', phone: '', subject: '', message: '' })
    }, 1500)
  }

  return (
    <div>
      {/* Page Header */}
      <section className="bg-primary py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <p className="text-accent font-semibold text-sm uppercase tracking-widest mb-3">Get in Touch</p>
          <h1 className="text-3xl lg:text-5xl font-bold text-text-light tracking-tight mb-4">
            Contact Us
          </h1>
          <p className="text-text-light/70 max-w-2xl leading-relaxed">
            Whether you need a quote, technical support, or want to discuss a custom solution, our team is ready to help.
          </p>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-20 lg:py-28 bg-bg">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Contact Info */}
            <div className="space-y-6">
              {contactInfo.map((item) => (
                <div key={item.title} className="flex gap-4">
                  <div className="w-11 h-11 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <item.icon className="w-5 h-5 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-text mb-1">{item.title}</h3>
                    {item.lines.map((line) => (
                      <p key={line} className="text-sm text-text-muted">{line}</p>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <div className="bg-surface rounded-xl border border-border p-8 lg:p-10">
                <h2 className="text-2xl font-bold text-text mb-2">Send Us a Message</h2>
                <p className="text-text-muted text-sm mb-8">Fill out the form below and we will get back to you within 24 hours.</p>

                {status === 'success' ? (
                  <div className="text-center py-12">
                    <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Send className="w-7 h-7 text-accent" />
                    </div>
                    <h3 className="text-xl font-semibold text-text mb-2">Message Sent!</h3>
                    <p className="text-text-muted">Thank you for reaching out. Our team will respond shortly.</p>
                    <button
                      onClick={() => setStatus('idle')}
                      className="mt-6 text-accent font-semibold hover:underline"
                    >
                      Send another message
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium text-text mb-1.5">Full Name *</label>
                        <input
                          id="name"
                          name="name"
                          type="text"
                          required
                          value={formData.name}
                          onChange={handleChange}
                          placeholder="John Smith"
                          className="w-full px-4 py-3 rounded-lg border border-border bg-bg text-text placeholder:text-text-muted/50 focus:outline-none focus:ring-2 focus:ring-accent/30 focus:border-accent transition-colors"
                        />
                      </div>
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-text mb-1.5">Email Address *</label>
                        <input
                          id="email"
                          name="email"
                          type="email"
                          required
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="john@company.com"
                          className="w-full px-4 py-3 rounded-lg border border-border bg-bg text-text placeholder:text-text-muted/50 focus:outline-none focus:ring-2 focus:ring-accent/30 focus:border-accent transition-colors"
                        />
                      </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                      <div>
                        <label htmlFor="company" className="block text-sm font-medium text-text mb-1.5">Company</label>
                        <input
                          id="company"
                          name="company"
                          type="text"
                          value={formData.company}
                          onChange={handleChange}
                          placeholder="Your company name"
                          className="w-full px-4 py-3 rounded-lg border border-border bg-bg text-text placeholder:text-text-muted/50 focus:outline-none focus:ring-2 focus:ring-accent/30 focus:border-accent transition-colors"
                        />
                      </div>
                      <div>
                        <label htmlFor="phone" className="block text-sm font-medium text-text mb-1.5">Phone Number</label>
                        <input
                          id="phone"
                          name="phone"
                          type="tel"
                          value={formData.phone}
                          onChange={handleChange}
                          placeholder="+1 (234) 567-890"
                          className="w-full px-4 py-3 rounded-lg border border-border bg-bg text-text placeholder:text-text-muted/50 focus:outline-none focus:ring-2 focus:ring-accent/30 focus:border-accent transition-colors"
                        />
                      </div>
                    </div>
                    <div>
                      <label htmlFor="subject" className="block text-sm font-medium text-text mb-1.5">Subject *</label>
                      <select
                        id="subject"
                        name="subject"
                        required
                        value={formData.subject}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-lg border border-border bg-bg text-text focus:outline-none focus:ring-2 focus:ring-accent/30 focus:border-accent transition-colors"
                      >
                        <option value="">Select a subject</option>
                        <option value="quote">Request a Quote</option>
                        <option value="technical">Technical Support</option>
                        <option value="custom">Custom Solution</option>
                        <option value="parts">Spare Parts</option>
                        <option value="other">Other Inquiry</option>
                      </select>
                    </div>
                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-text mb-1.5">Message *</label>
                      <textarea
                        id="message"
                        name="message"
                        required
                        rows={5}
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Tell us about your requirements..."
                        className="w-full px-4 py-3 rounded-lg border border-border bg-bg text-text placeholder:text-text-muted/50 focus:outline-none focus:ring-2 focus:ring-accent/30 focus:border-accent transition-colors resize-none"
                      />
                    </div>
                    <button
                      type="submit"
                      disabled={status === 'sending'}
                      className="inline-flex items-center gap-2 bg-accent text-white px-7 py-3.5 rounded-lg font-semibold hover:bg-accent-light transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
                    >
                      {status === 'sending' ? 'Sending...' : 'Send Message'}
                      <Send className="w-4 h-4" />
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
