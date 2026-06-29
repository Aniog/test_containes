import React, { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Send, Mail, Phone, MapPin, CheckCircle } from 'lucide-react'

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    message: '',
  })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
    setSubmitted(true)
    setFormData({ name: '', email: '', company: '', phone: '', message: '' })
    setTimeout(() => setSubmitted(false), 5000)
  }

  return (
    <section id="contact" className="py-20 md:py-28 bg-cream-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Left - Info */}
          <div className="space-y-8">
            <div>
              <span className="text-gold-500 text-sm font-semibold uppercase tracking-[0.2em]">Get in Touch</span>
              <h2 className="mt-4 text-3xl md:text-4xl lg:text-5xl font-bold text-text-primary tracking-tight">
                Let's Discuss Your{' '}
                <span className="text-gold-500">Next Project</span>
              </h2>
              <p className="mt-4 text-text-secondary text-lg leading-relaxed">
                Whether you need a single machine or a complete production line setup, 
                our team is ready to help you find the perfect solution.
              </p>
            </div>

            {/* Contact Info Cards */}
            <div className="space-y-4">
              <div className="flex items-center gap-4 p-5 bg-white rounded-xl border border-stone-200">
                <div className="w-12 h-12 rounded-xl bg-gold-100 flex items-center justify-center shrink-0">
                  <Mail className="w-5 h-5 text-gold-500" />
                </div>
                <div>
                  <p className="text-xs text-text-secondary uppercase tracking-wider">Email</p>
                  <p className="text-text-primary font-medium">info@artitect-machinery.com</p>
                </div>
              </div>
              <div className="flex items-center gap-4 p-5 bg-white rounded-xl border border-stone-200">
                <div className="w-12 h-12 rounded-xl bg-gold-100 flex items-center justify-center shrink-0">
                  <Phone className="w-5 h-5 text-gold-500" />
                </div>
                <div>
                  <p className="text-xs text-text-secondary uppercase tracking-wider">Phone</p>
                  <p className="text-text-primary font-medium">+1 (555) 123-4567</p>
                </div>
              </div>
              <div className="flex items-center gap-4 p-5 bg-white rounded-xl border border-stone-200">
                <div className="w-12 h-12 rounded-xl bg-gold-100 flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5 text-gold-500" />
                </div>
                <div>
                  <p className="text-xs text-text-secondary uppercase tracking-wider">Location</p>
                  <p className="text-text-primary font-medium">Chicago, IL</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right - Form */}
          <div className="bg-white rounded-2xl border border-stone-200 p-6 md:p-8 shadow-sm">
            {submitted ? (
              <div className="flex flex-col items-center justify-center h-full py-12 text-center">
                <div className="w-16 h-16 rounded-full bg-gold-100 flex items-center justify-center mb-4">
                  <CheckCircle className="w-8 h-8 text-gold-500" />
                </div>
                <h3 className="text-xl font-bold text-text-primary mb-2">Thank You!</h3>
                <p className="text-text-secondary max-w-xs">
                  We've received your message and will get back to you within 24 hours.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-text-primary mb-1.5">
                      Name <span className="text-red-400">*</span>
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Your full name"
                      className="w-full px-4 py-2.5 rounded-lg border border-stone-200 bg-cream-50 text-text-primary placeholder:text-stone-300 focus:outline-none focus:ring-2 focus:ring-gold-500 focus:border-transparent transition-all text-sm"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-text-primary mb-1.5">
                      Email <span className="text-red-400">*</span>
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="you@company.com"
                      className="w-full px-4 py-2.5 rounded-lg border border-stone-200 bg-cream-50 text-text-primary placeholder:text-stone-300 focus:outline-none focus:ring-2 focus:ring-gold-500 focus:border-transparent transition-all text-sm"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="company" className="block text-sm font-medium text-text-primary mb-1.5">
                      Company
                    </label>
                    <input
                      id="company"
                      name="company"
                      type="text"
                      value={formData.company}
                      onChange={handleChange}
                      placeholder="Your company name"
                      className="w-full px-4 py-2.5 rounded-lg border border-stone-200 bg-cream-50 text-text-primary placeholder:text-stone-300 focus:outline-none focus:ring-2 focus:ring-gold-500 focus:border-transparent transition-all text-sm"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-text-primary mb-1.5">
                      Phone
                    </label>
                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+1 (555) 000-0000"
                      className="w-full px-4 py-2.5 rounded-lg border border-stone-200 bg-cream-50 text-text-primary placeholder:text-stone-300 focus:outline-none focus:ring-2 focus:ring-gold-500 focus:border-transparent transition-all text-sm"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-text-primary mb-1.5">
                    Message <span className="text-red-400">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell us about your requirements..."
                    className="w-full px-4 py-2.5 rounded-lg border border-stone-200 bg-cream-50 text-text-primary placeholder:text-stone-300 focus:outline-none focus:ring-2 focus:ring-gold-500 focus:border-transparent transition-all text-sm resize-none"
                  />
                </div>

                <Button type="submit" size="lg" className="w-full bg-gold-500 text-navy-900 hover:bg-gold-400 font-semibold group">
                  <Send className="mr-2 w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                  Send Message
                </Button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}