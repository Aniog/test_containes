import { useState } from 'react'
import { Mail, Phone, MapPin, Clock, Send, CheckCircle } from 'lucide-react'

const contactInfo = [
  {
    icon: MapPin,
    title: 'Visit Us',
    lines: ['1200 Industrial Parkway', 'Milwaukee, WI 53214, USA'],
  },
  {
    icon: Phone,
    title: 'Call Us',
    lines: ['+1 (414) 555-0187', 'Mon – Fri, 8 AM – 5 PM CST'],
  },
  {
    icon: Mail,
    title: 'Email Us',
    lines: ['info@artitectmachinery.com', 'sales@artitectmachinery.com'],
  },
  {
    icon: Clock,
    title: 'Business Hours',
    lines: ['Monday – Friday: 8:00 AM – 5:00 PM', 'Saturday: By Appointment'],
  },
]

export default function Contact() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    subject: 'general',
    message: '',
  })
  const [status, setStatus] = useState('idle')

  const handleChange = (e) => {
    const { name, value } = e.target
    setForm((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setStatus('submitting')
    setTimeout(() => {
      setStatus('success')
      setForm({ name: '', email: '', company: '', phone: '', subject: 'general', message: '' })
    }, 1500)
  }

  return (
    <>
      {/* Header */}
      <section className="bg-navy-900 pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-gold-400 text-sm font-semibold uppercase tracking-wider">Get in Touch</span>
          <h1 className="mt-3 text-4xl sm:text-5xl lg:text-6xl font-display font-bold text-white">
            Contact Us
          </h1>
          <p className="mt-4 text-lg text-navy-300 max-w-2xl mx-auto">
            Have a question about our machines? Need a custom quote? Our team is here to help.
          </p>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="relative -mt-12 z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {contactInfo.map((item) => (
            <div
              key={item.title}
              className="bg-white rounded-xl shadow-lg p-6 border border-slate-100"
            >
              <item.icon className="w-6 h-6 text-gold-500 mb-3" />
              <h3 className="text-sm font-semibold text-navy-900 mb-2">{item.title}</h3>
              {item.lines.map((line) => (
                <p key={line} className="text-sm text-slate-500">{line}</p>
              ))}
            </div>
          ))}
        </div>
      </section>

      {/* Form + Info */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-16">
            {/* Form */}
            <div className="lg:col-span-3">
              <h2 className="text-2xl font-display font-bold text-navy-900 mb-2">
                Send Us a Message
              </h2>
              <p className="text-slate-500 mb-8">
                Fill out the form below and we will get back to you within one business day.
              </p>

              {status === 'success' ? (
                <div className="bg-green-50 border border-green-200 rounded-xl p-8 text-center">
                  <CheckCircle className="w-12 h-12 text-green-500 mx-auto mb-4" />
                  <h3 className="text-xl font-display font-bold text-navy-900 mb-2">Message Sent!</h3>
                  <p className="text-slate-600">
                    Thank you for reaching out. Our team will respond within one business day.
                  </p>
                  <button
                    onClick={() => setStatus('idle')}
                    className="mt-6 px-6 py-2.5 bg-navy-800 hover:bg-navy-900 text-white text-sm font-semibold rounded-lg transition-colors"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-1.5">
                        Full Name <span className="text-red-500">*</span>
                      </label>
                      <input
                        id="name"
                        name="name"
                        type="text"
                        required
                        value={form.name}
                        onChange={handleChange}
                        placeholder="John Smith"
                        className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-lg text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-gold-500/40 focus:border-gold-500 transition-colors"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-1.5">
                        Email Address <span className="text-red-500">*</span>
                      </label>
                      <input
                        id="email"
                        name="email"
                        type="email"
                        required
                        value={form.email}
                        onChange={handleChange}
                        placeholder="john@company.com"
                        className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-lg text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-gold-500/40 focus:border-gold-500 transition-colors"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="company" className="block text-sm font-medium text-slate-700 mb-1.5">
                        Company
                      </label>
                      <input
                        id="company"
                        name="company"
                        type="text"
                        value={form.company}
                        onChange={handleChange}
                        placeholder="Your Company"
                        className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-lg text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-gold-500/40 focus:border-gold-500 transition-colors"
                      />
                    </div>
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-slate-700 mb-1.5">
                        Phone
                      </label>
                      <input
                        id="phone"
                        name="phone"
                        type="tel"
                        value={form.phone}
                        onChange={handleChange}
                        placeholder="+1 (555) 000-0000"
                        className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-lg text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-gold-500/40 focus:border-gold-500 transition-colors"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-slate-700 mb-1.5">
                      Subject <span className="text-red-500">*</span>
                    </label>
                    <select
                      id="subject"
                      name="subject"
                      required
                      value={form.subject}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-lg text-slate-900 focus:outline-none focus:ring-2 focus:ring-gold-500/40 focus:border-gold-500 transition-colors"
                    >
                      <option value="general">General Inquiry</option>
                      <option value="quote">Request a Quote</option>
                      <option value="support">Technical Support</option>
                      <option value="demo">Schedule a Demo</option>
                      <option value="parts">Spare Parts</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-1.5">
                      Message <span className="text-red-500">*</span>
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={6}
                      value={form.message}
                      onChange={handleChange}
                      placeholder="Tell us about your project or question..."
                      className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-lg text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-gold-500/40 focus:border-gold-500 transition-colors resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={status === 'submitting'}
                    className="inline-flex items-center gap-2 px-8 py-4 bg-gold-500 hover:bg-gold-600 disabled:opacity-60 disabled:cursor-not-allowed text-white font-semibold rounded-lg transition-colors duration-200 shadow-lg shadow-gold-500/25"
                  >
                    {status === 'submitting' ? (
                      <>
                        <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send className="w-5 h-5" />
                        Send Message
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>

            {/* Right column */}
            <div className="lg:col-span-2 space-y-8">
              <div className="bg-slate-50 rounded-xl p-8 border border-slate-100">
                <h3 className="text-lg font-display font-bold text-navy-900 mb-4">
                  Why Contact Us?
                </h3>
                <ul className="space-y-4">
                  {[
                    'Get a custom quote tailored to your production needs',
                    'Schedule a live demo at our Milwaukee showroom',
                    'Speak directly with our engineering team',
                    'Receive technical specifications and drawings',
                    'Learn about financing and leasing options',
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-gold-500 flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-slate-600">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-navy-900 rounded-xl p-8 text-white">
                <h3 className="text-lg font-display font-bold mb-3">
                  Need Urgent Support?
                </h3>
                <p className="text-navy-300 text-sm mb-4">
                  For existing customers with active service contracts, our technical support hotline is available 24/7.
                </p>
                <div className="flex items-center gap-2 text-gold-400 font-semibold">
                  <Phone className="w-5 h-5" />
                  +1 (414) 555-0199
                </div>
                <p className="mt-2 text-navy-400 text-xs">Service contract holders only</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
