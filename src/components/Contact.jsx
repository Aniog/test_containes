import React, { useState } from 'react'
import { MapPin, Phone, Mail, Send, Clock } from 'lucide-react'
import { useScrollReveal } from '@/lib/useScrollReveal'

const Contact = () => {
  const revealRef = useScrollReveal()
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    interest: '',
    message: '',
  })
  const [status, setStatus] = useState('idle')

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setStatus('submitting')
    // Simulate form submission
    setTimeout(() => {
      setStatus('success')
      setFormData({ name: '', email: '', company: '', phone: '', interest: '', message: '' })
      setTimeout(() => setStatus('idle'), 4000)
    }, 1000)
  }

  return (
    <section id="contact" className="section-padding bg-white" ref={revealRef}>
      <div className="container-max">
        {/* Section Header */}
        <div className="text-center mb-16 reveal-on-scroll">
          <span className="text-brand-gold text-xs font-semibold tracking-widest-plus uppercase">
            Get in Touch
          </span>
          <h2 className="text-3xl md:text-5xl font-extrabold text-brand-dark mt-3 mb-4">
            Request a Quote
          </h2>
          <p className="text-slate-500 text-lg max-w-2xl mx-auto">
            Tell us about your metal folding requirements and our team will provide
            a tailored solution within 24 hours.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-12 lg:gap-16">
          {/* Contact Info */}
          <div className="lg:col-span-2 space-y-8 reveal-on-scroll">
            <div>
              <h3 className="text-lg font-bold text-brand-dark mb-6">Contact Information</h3>
              <div className="space-y-5">
                <div className="flex gap-4 items-start">
                  <div className="w-10 h-10 bg-slate-100 flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-4 h-4 text-brand-gold" />
                  </div>
                  <div>
                    <p className="font-semibold text-brand-dark text-sm">Headquarters</p>
                    <p className="text-slate-500 text-sm mt-0.5">
                      Industrial Zone, Building 47<br />
                      Stuttgart, Germany
                    </p>
                  </div>
                </div>
                <div className="flex gap-4 items-start">
                  <div className="w-10 h-10 bg-slate-100 flex items-center justify-center flex-shrink-0">
                    <Phone className="w-4 h-4 text-brand-gold" />
                  </div>
                  <div>
                    <p className="font-semibold text-brand-dark text-sm">Phone</p>
                    <p className="text-slate-500 text-sm mt-0.5">+49 711 555 0000</p>
                  </div>
                </div>
                <div className="flex gap-4 items-start">
                  <div className="w-10 h-10 bg-slate-100 flex items-center justify-center flex-shrink-0">
                    <Mail className="w-4 h-4 text-brand-gold" />
                  </div>
                  <div>
                    <p className="font-semibold text-brand-dark text-sm">Email</p>
                    <p className="text-slate-500 text-sm mt-0.5">sales@artitect-machinery.com</p>
                  </div>
                </div>
                <div className="flex gap-4 items-start">
                  <div className="w-10 h-10 bg-slate-100 flex items-center justify-center flex-shrink-0">
                    <Clock className="w-4 h-4 text-brand-gold" />
                  </div>
                  <div>
                    <p className="font-semibold text-brand-dark text-sm">Business Hours</p>
                    <p className="text-slate-500 text-sm mt-0.5">
                      Mon - Fri: 8:00 AM - 6:00 PM (CET)<br />
                      Sat: 9:00 AM - 1:00 PM
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick stats */}
            <div className="bg-brand-dark p-6">
              <h4 className="text-white font-bold text-sm mb-4">Why Choose ARTITECT?</h4>
              <div className="space-y-3">
                {[
                  'Free consultation with our engineers',
                  'Custom machine configurations available',
                  'Financing options for qualified buyers',
                  'Global delivery and installation',
                ].map((item) => (
                  <div key={item} className="flex items-center gap-3">
                    <div className="w-1 h-1 bg-brand-gold flex-shrink-0" />
                    <span className="text-slate-300 text-sm">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-3 reveal-on-scroll delay-100">
            <form onSubmit={handleSubmit} className="bg-slate-50 p-6 md:p-8 border border-slate-100">
              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label htmlFor="name" className="block text-xs font-bold text-brand-dark tracking-wider uppercase mb-2">
                    Full Name *
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="John Smith"
                    className="w-full px-4 py-3 bg-white border border-slate-200 text-brand-dark text-sm placeholder:text-slate-400 focus:outline-none focus:border-brand-gold transition-colors"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-xs font-bold text-brand-dark tracking-wider uppercase mb-2">
                    Email Address *
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="john@company.com"
                    className="w-full px-4 py-3 bg-white border border-slate-200 text-brand-dark text-sm placeholder:text-slate-400 focus:outline-none focus:border-brand-gold transition-colors"
                  />
                </div>
                <div>
                  <label htmlFor="company" className="block text-xs font-bold text-brand-dark tracking-wider uppercase mb-2">
                    Company
                  </label>
                  <input
                    id="company"
                    name="company"
                    type="text"
                    value={formData.company}
                    onChange={handleChange}
                    placeholder="Company Name"
                    className="w-full px-4 py-3 bg-white border border-slate-200 text-brand-dark text-sm placeholder:text-slate-400 focus:outline-none focus:border-brand-gold transition-colors"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-xs font-bold text-brand-dark tracking-wider uppercase mb-2">
                    Phone Number
                  </label>
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+1 (555) 000-0000"
                    className="w-full px-4 py-3 bg-white border border-slate-200 text-brand-dark text-sm placeholder:text-slate-400 focus:outline-none focus:border-brand-gold transition-colors"
                  />
                </div>
              </div>

              <div className="mt-5">
                <label htmlFor="interest" className="block text-xs font-bold text-brand-dark tracking-wider uppercase mb-2">
                  Product Interest
                </label>
                <select
                  id="interest"
                  name="interest"
                  value={formData.interest}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-white border border-slate-200 text-brand-dark text-sm focus:outline-none focus:border-brand-gold transition-colors appearance-none"
                >
                  <option value="">Select a product or service</option>
                  <option value="df-3200">DF-3200 Double Folding Machine</option>
                  <option value="df-2500">DF-2500 Double Folding Machine</option>
                  <option value="sf-4000">SF-4000 Sheet Metal Folder</option>
                  <option value="mf-1500">MF-1500 Metal Folder Machine</option>
                  <option value="custom">Custom Configuration</option>
                  <option value="other">Other Inquiry</option>
                </select>
              </div>

              <div className="mt-5">
                <label htmlFor="message" className="block text-xs font-bold text-brand-dark tracking-wider uppercase mb-2">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell us about your metal folding requirements, material types, production volume, and any special needs..."
                  className="w-full px-4 py-3 bg-white border border-slate-200 text-brand-dark text-sm placeholder:text-slate-400 focus:outline-none focus:border-brand-gold transition-colors resize-none"
                />
              </div>

              <button
                type="submit"
                disabled={status === 'submitting'}
                className="mt-6 w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-brand-gold hover:bg-brand-gold-light disabled:opacity-60 text-brand-dark font-bold text-sm px-10 py-4 tracking-wide transition-colors"
              >
                {status === 'submitting' ? (
                  <>
                    <div className="w-4 h-4 border-2 border-brand-dark/30 border-t-brand-dark rounded-full animate-spin" />
                    Sending...
                  </>
                ) : (
                  <>
                    <Send className="w-4 h-4" />
                    Send Inquiry
                  </>
                )}
              </button>

              {status === 'success' && (
                <div className="mt-4 p-4 bg-green-50 border border-green-200 text-green-800 text-sm font-medium">
                  Thank you! We have received your inquiry and will respond within 24 hours.
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
