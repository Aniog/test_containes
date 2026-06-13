import React, { useState } from 'react'
import { Mail, Phone, MapPin, Send, CheckCircle } from 'lucide-react'
import Button from '@/components/ui/button'

export default function ContactSection() {
  const [submitted, setSubmitted] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: '',
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Simulate form submission
    setSubmitted(true)
  }

  return (
    <section id="contact" className="py-16 md:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-amber-600 font-semibold text-sm uppercase tracking-widest">Get in Touch</span>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 tracking-tight mt-3 mb-4">
            Let's Discuss Your Requirements
          </h2>
          <p className="text-lg text-slate-500 max-w-2xl mx-auto">
            Tell us about your sheet metal folding needs and our team will recommend the perfect solution for your operation.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Contact Info */}
          <div className="space-y-8">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-lg bg-amber-50 flex items-center justify-center flex-shrink-0">
                <MapPin className="w-6 h-6 text-amber-600" />
              </div>
              <div>
                <h3 className="font-semibold text-slate-900 mb-1">Our Location</h3>
                <p className="text-slate-500">Industriestraße 42<br />53117 Bonn, Germany</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-lg bg-amber-50 flex items-center justify-center flex-shrink-0">
                <Phone className="w-6 h-6 text-amber-600" />
              </div>
              <div>
                <h3 className="font-semibold text-slate-900 mb-1">Phone</h3>
                <p className="text-slate-500">+49 228 555 0190</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-lg bg-amber-50 flex items-center justify-center flex-shrink-0">
                <Mail className="w-6 h-6 text-amber-600" />
              </div>
              <div>
                <h3 className="font-semibold text-slate-900 mb-1">Email</h3>
                <p className="text-slate-500">info@artitect-machinery.com</p>
              </div>
            </div>

            {/* Testimonial */}
            <div className="p-6 bg-white rounded-xl border border-gray-100 shadow-sm">
              <p className="text-slate-600 italic leading-relaxed mb-4">
                "We've been using ARTITECT folding machines for over 8 years. The precision and reliability are unmatched. Their after-sales support is exceptional."
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-amber-600 flex items-center justify-center text-white font-semibold text-sm">
                  MK
                </div>
                <div>
                  <p className="font-semibold text-slate-900 text-sm">Michael Kroeger</p>
                  <p className="text-xs text-slate-500">Production Director, MetalForm GmbH</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 md:p-8">
            {submitted ? (
              <div className="text-center py-12">
                <div className="w-16 h-16 rounded-full bg-green-50 flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-2xl font-semibold text-slate-900 mb-2">Thank You!</h3>
                <p className="text-slate-500">We've received your inquiry and will get back to you within 24 hours.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-1.5">Full Name *</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your name"
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-amber-500 focus:ring-2 focus:ring-amber-500/20 outline-none transition-all text-slate-900 placeholder:text-slate-400"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-1.5">Email Address *</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="you@company.com"
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-amber-500 focus:ring-2 focus:ring-amber-500/20 outline-none transition-all text-slate-900 placeholder:text-slate-400"
                  />
                </div>

                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-slate-700 mb-1.5">Company Name</label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    placeholder="Your company"
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-amber-500 focus:ring-2 focus:ring-amber-500/20 outline-none transition-all text-slate-900 placeholder:text-slate-400"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-1.5">Message *</label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Describe your requirements, machine specifications, or any questions..."
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-amber-500 focus:ring-2 focus:ring-amber-500/20 outline-none transition-all text-slate-900 placeholder:text-slate-400 resize-none"
                  />
                </div>

                <Button type="submit" variant="primary" size="lg" className="w-full gap-2">
                  <Send className="w-4 h-4" />
                  Send Inquiry
                </Button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}