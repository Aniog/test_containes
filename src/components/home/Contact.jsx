import React, { useState } from 'react'
import { Send, CheckCircle } from 'lucide-react'

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', company: '', phone: '', product: '', message: '' })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setForm((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
  }

  if (submitted) {
    return (
      <section id="contact" className="py-20 md:py-28 bg-[#0F1B2D]">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="w-16 h-16 rounded-full bg-[#C8963E]/20 flex items-center justify-center mx-auto mb-6">
            <CheckCircle className="w-8 h-8 text-[#C8963E]" />
          </div>
          <h2 className="text-2xl md:text-3xl font-extrabold text-white mb-4">Thank You!</h2>
          <p className="text-white/60 leading-relaxed mb-8">
            Your inquiry has been received. Our team will get back to you within 24 hours.
          </p>
          <button
            onClick={() => { setSubmitted(false); setForm({ name: '', email: '', company: '', phone: '', product: '', message: '' }) }}
            className="px-6 py-2.5 text-sm font-semibold rounded-lg border-2 border-white/30 text-white hover:bg-white/10 transition-colors"
          >
            Send Another Inquiry
          </button>
        </div>
      </section>
    )
  }

  return (
    <section id="contact" className="py-20 md:py-28 bg-[#0F1B2D]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          <div>
            <span className="inline-block text-xs font-semibold uppercase tracking-widest text-[#C8963E] mb-3">Get in Touch</span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-white tracking-tight mb-6">
              Request a Quote
            </h2>
            <p className="text-white/60 leading-relaxed mb-8">
              Tell us about your project requirements and our specialists will recommend the ideal folding solution for your needs.
            </p>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center shrink-0">
                  <Send className="w-4 h-4 text-[#C8963E]" />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-white mb-1">Quick Response</h4>
                  <p className="text-sm text-white/50">We respond to all inquiries within 24 business hours.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center shrink-0">
                  <CheckCircle className="w-4 h-4 text-[#C8963E]" />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-white mb-1">Free Consultation</h4>
                  <p className="text-sm text-white/50">Get expert advice on the best machine for your application at no cost.</p>
                </div>
              </div>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="bg-white/5 border border-white/10 rounded-xl p-6 md:p-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
              <div>
                <label htmlFor="name" className="block text-xs font-medium text-white/70 mb-1.5">Full Name *</label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  value={form.name}
                  onChange={handleChange}
                  className="w-full px-4 py-2.5 rounded-lg bg-white/10 border border-white/15 text-white placeholder-white/30 text-sm focus:outline-none focus:border-[#C8963E] focus:ring-1 focus:ring-[#C8963E] transition-colors"
                  placeholder="John Smith"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-xs font-medium text-white/70 mb-1.5">Email *</label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  value={form.email}
                  onChange={handleChange}
                  className="w-full px-4 py-2.5 rounded-lg bg-white/10 border border-white/15 text-white placeholder-white/30 text-sm focus:outline-none focus:border-[#C8963E] focus:ring-1 focus:ring-[#C8963E] transition-colors"
                  placeholder="john@company.com"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
              <div>
                <label htmlFor="company" className="block text-xs font-medium text-white/70 mb-1.5">Company</label>
                <input
                  id="company"
                  name="company"
                  type="text"
                  value={form.company}
                  onChange={handleChange}
                  className="w-full px-4 py-2.5 rounded-lg bg-white/10 border border-white/15 text-white placeholder-white/30 text-sm focus:outline-none focus:border-[#C8963E] focus:ring-1 focus:ring-[#C8963E] transition-colors"
                  placeholder="Your company"
                />
              </div>
              <div>
                <label htmlFor="phone" className="block text-xs font-medium text-white/70 mb-1.5">Phone</label>
                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  value={form.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-2.5 rounded-lg bg-white/10 border border-white/15 text-white placeholder-white/30 text-sm focus:outline-none focus:border-[#C8963E] focus:ring-1 focus:ring-[#C8963E] transition-colors"
                  placeholder="+1 (555) 000-0000"
                />
              </div>
            </div>

            <div className="mb-4">
              <label htmlFor="product" className="block text-xs font-medium text-white/70 mb-1.5">Product of Interest</label>
              <select
                id="product"
                name="product"
                value={form.product}
                onChange={handleChange}
                className="w-full px-4 py-2.5 rounded-lg bg-white/10 border border-white/15 text-white text-sm focus:outline-none focus:border-[#C8963E] focus:ring-1 focus:ring-[#C8963E] transition-colors appearance-none"
              >
                <option value="" className="text-[#0F1B2D]">Select a product</option>
                <option value="double-folding-machine" className="text-[#0F1B2D]">Double Folding Machine</option>
                <option value="double-folder" className="text-[#0F1B2D]">Double Folder</option>
                <option value="sheet-metal-folder" className="text-[#0F1B2D]">Sheet Metal Folder</option>
                <option value="sheet-metal-folding-machine" className="text-[#0F1B2D]">Sheet Metal Folding Machine</option>
                <option value="metal-folder" className="text-[#0F1B2D]">Metal Folder</option>
                <option value="metal-folder-machine" className="text-[#0F1B2D]">Metal Folder Machine</option>
                <option value="metal-folding-machine" className="text-[#0F1B2D]">Metal Folding Machine</option>
              </select>
            </div>

            <div className="mb-6">
              <label htmlFor="message" className="block text-xs font-medium text-white/70 mb-1.5">Message *</label>
              <textarea
                id="message"
                name="message"
                required
                rows={4}
                value={form.message}
                onChange={handleChange}
                className="w-full px-4 py-2.5 rounded-lg bg-white/10 border border-white/15 text-white placeholder-white/30 text-sm focus:outline-none focus:border-[#C8963E] focus:ring-1 focus:ring-[#C8963E] transition-colors resize-none"
                placeholder="Describe your requirements..."
              />
            </div>

            <button
              type="submit"
              className="w-full px-6 py-3 text-sm font-semibold rounded-lg bg-[#C8963E] text-white hover:bg-[#B07E2F] transition-colors duration-200 shadow-lg shadow-[#C8963E]/25"
            >
              Submit Inquiry
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}
