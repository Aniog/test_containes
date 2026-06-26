import { useState } from 'react'
import { Send, MapPin, Phone, Mail, Clock } from 'lucide-react'

const contactInfo = [
  { icon: MapPin, label: 'Address', value: '1200 Industrial Parkway, Suite 300\nCleveland, OH 44135, USA' },
  { icon: Phone, label: 'Phone', value: '+1 (216) 555-0187' },
  { icon: Mail, label: 'Email', value: 'sales@artitectmachinery.com' },
  { icon: Clock, label: 'Business Hours', value: 'Mon - Fri: 8:00 AM - 6:00 PM EST' },
]

export default function Contact() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    interest: '',
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
    // Simulate submission
    setTimeout(() => {
      setStatus('success')
      setForm({ name: '', email: '', company: '', phone: '', interest: '', message: '' })
    }, 1500)
  }

  return (
    <section id="contact" className="relative py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-5 gap-12">
          {/* Left info */}
          <div className="lg:col-span-2">
            <span className="text-accent-400 text-sm font-semibold tracking-widest uppercase">
              Contact Us
            </span>
            <h2 className="font-display text-4xl lg:text-5xl font-bold text-white mt-3 mb-6">
              Get Your Custom Quote
            </h2>
            <p className="text-steel-400 leading-relaxed mb-10">
              Tell us about your fabrication requirements and we will recommend the ideal
              ARTITECT machine for your operation. Our engineers are ready to help.
            </p>

            <div className="flex flex-col gap-6">
              {contactInfo.map((item) => {
                const Icon = item.icon
                return (
                  <div key={item.label} className="flex gap-4">
                    <div className="w-10 h-10 bg-accent-500/10 rounded-sm flex items-center justify-center flex-shrink-0">
                      <Icon className="w-5 h-5 text-accent-400" />
                    </div>
                    <div>
                      <div className="text-steel-500 text-xs font-semibold uppercase tracking-wider mb-1">
                        {item.label}
                      </div>
                      <div className="text-steel-200 text-sm whitespace-pre-line">
                        {item.value}
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>

          {/* Right form */}
          <div className="lg:col-span-3">
            <div className="p-8 lg:p-10 rounded-sm bg-surface-card border border-steel-700/30">
              {status === 'success' ? (
                <div className="text-center py-16">
                  <div className="w-16 h-16 bg-accent-500/10 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Send className="w-8 h-8 text-accent-400" />
                  </div>
                  <h3 className="font-display text-2xl font-bold text-white mb-3">
                    Message Sent Successfully
                  </h3>
                  <p className="text-steel-400">
                    Thank you for your inquiry. Our team will respond within 24 hours.
                  </p>
                  <button
                    onClick={() => setStatus('idle')}
                    className="mt-6 px-6 py-2.5 border border-steel-600 text-steel-200 rounded-sm hover:border-steel-400 hover:text-white transition-all text-sm"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="name" className="text-steel-300 text-sm font-medium">
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
                      className="px-4 py-3 bg-brand-800 border border-steel-700/40 rounded-sm text-white placeholder:text-steel-600 focus:outline-none focus:border-accent-500 transition-colors text-sm"
                    />
                  </div>

                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="email" className="text-steel-300 text-sm font-medium">
                      Email Address *
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={form.email}
                      onChange={handleChange}
                      placeholder="john@company.com"
                      className="px-4 py-3 bg-brand-800 border border-steel-700/40 rounded-sm text-white placeholder:text-steel-600 focus:outline-none focus:border-accent-500 transition-colors text-sm"
                    />
                  </div>

                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="company" className="text-steel-300 text-sm font-medium">
                      Company
                    </label>
                    <input
                      id="company"
                      name="company"
                      type="text"
                      value={form.company}
                      onChange={handleChange}
                      placeholder="Your Company Name"
                      className="px-4 py-3 bg-brand-800 border border-steel-700/40 rounded-sm text-white placeholder:text-steel-600 focus:outline-none focus:border-accent-500 transition-colors text-sm"
                    />
                  </div>

                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="phone" className="text-steel-300 text-sm font-medium">
                      Phone Number
                    </label>
                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={form.phone}
                      onChange={handleChange}
                      placeholder="+1 (555) 000-0000"
                      className="px-4 py-3 bg-brand-800 border border-steel-700/40 rounded-sm text-white placeholder:text-steel-600 focus:outline-none focus:border-accent-500 transition-colors text-sm"
                    />
                  </div>

                  <div className="flex flex-col gap-1.5 sm:col-span-2">
                    <label htmlFor="interest" className="text-steel-300 text-sm font-medium">
                      Machine of Interest
                    </label>
                    <select
                      id="interest"
                      name="interest"
                      value={form.interest}
                      onChange={handleChange}
                      className="px-4 py-3 bg-brand-800 border border-steel-700/40 rounded-sm text-white focus:outline-none focus:border-accent-500 transition-colors text-sm appearance-none cursor-pointer"
                    >
                      <option value="">Select a product...</option>
                      <option value="df-4000">Double Folder Pro (DF-4000)</option>
                      <option value="sm-6000">Sheet Metal Master (SM-6000)</option>
                      <option value="cf-2000">Compact Metal Folder (CF-2000)</option>
                      <option value="custom">Custom Solution</option>
                      <option value="other">General Inquiry</option>
                    </select>
                  </div>

                  <div className="flex flex-col gap-1.5 sm:col-span-2">
                    <label htmlFor="message" className="text-steel-300 text-sm font-medium">
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      required
                      value={form.message}
                      onChange={handleChange}
                      placeholder="Describe your requirements, material types, thicknesses, and expected production volumes..."
                      className="px-4 py-3 bg-brand-800 border border-steel-700/40 rounded-sm text-white placeholder:text-steel-600 focus:outline-none focus:border-accent-500 transition-colors text-sm resize-none"
                    />
                  </div>

                  <div className="sm:col-span-2">
                    <button
                      type="submit"
                      disabled={status === 'submitting'}
                      className="w-full sm:w-auto px-10 py-4 bg-accent-500 text-brand-900 font-semibold rounded-sm hover:bg-accent-400 transition-all disabled:opacity-60 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                    >
                      {status === 'submitting' ? (
                        <>
                          <div className="w-4 h-4 border-2 border-brand-900/30 border-t-brand-900 rounded-full animate-spin" />
                          Sending...
                        </>
                      ) : (
                        <>
                          Send Inquiry
                          <Send className="w-4 h-4" />
                        </>
                      )}
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
