import React, { useState } from 'react'
import { Send, Phone, Mail, MapPin } from 'lucide-react'

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', company: '', phone: '', message: '' })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <section id="contact" className="py-20 md:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-[#C8973E] font-semibold text-sm tracking-widest uppercase">
            Get in Touch
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#0F1B2D] mt-3 mb-5 tracking-tight">
            Request a Quote
          </h2>
          <p className="text-[#5A6577] text-lg max-w-2xl mx-auto">
            Tell us about your project and our team will get back to you within 24 hours with a tailored solution.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
          <div className="lg:col-span-3">
            {submitted ? (
              <div className="bg-[#0F1B2D] rounded-2xl p-12 text-center">
                <div className="w-16 h-16 bg-[#C8973E] rounded-full flex items-center justify-center mx-auto mb-6">
                  <Send className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-3">Thank You!</h3>
                <p className="text-white/70">
                  Your inquiry has been received. Our team will contact you shortly.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-semibold text-[#0F1B2D] mb-2">
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
                      className="w-full px-4 py-3 rounded-lg border border-[#E2E6ED] bg-[#F7F8FA] text-[#0F1B2D] placeholder-[#5A6577]/50 focus:outline-none focus:ring-2 focus:ring-[#C8973E] focus:border-transparent transition-all"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-semibold text-[#0F1B2D] mb-2">
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
                      className="w-full px-4 py-3 rounded-lg border border-[#E2E6ED] bg-[#F7F8FA] text-[#0F1B2D] placeholder-[#5A6577]/50 focus:outline-none focus:ring-2 focus:ring-[#C8973E] focus:border-transparent transition-all"
                    />
                  </div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="company" className="block text-sm font-semibold text-[#0F1B2D] mb-2">
                      Company
                    </label>
                    <input
                      id="company"
                      name="company"
                      type="text"
                      value={form.company}
                      onChange={handleChange}
                      placeholder="Your company name"
                      className="w-full px-4 py-3 rounded-lg border border-[#E2E6ED] bg-[#F7F8FA] text-[#0F1B2D] placeholder-[#5A6577]/50 focus:outline-none focus:ring-2 focus:ring-[#C8973E] focus:border-transparent transition-all"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-semibold text-[#0F1B2D] mb-2">
                      Phone Number
                    </label>
                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={form.phone}
                      onChange={handleChange}
                      placeholder="+1 (555) 000-0000"
                      className="w-full px-4 py-3 rounded-lg border border-[#E2E6ED] bg-[#F7F8FA] text-[#0F1B2D] placeholder-[#5A6577]/50 focus:outline-none focus:ring-2 focus:ring-[#C8973E] focus:border-transparent transition-all"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-semibold text-[#0F1B2D] mb-2">
                    Your Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    value={form.message}
                    onChange={handleChange}
                    placeholder="Tell us about your requirements..."
                    className="w-full px-4 py-3 rounded-lg border border-[#E2E6ED] bg-[#F7F8FA] text-[#0F1B2D] placeholder-[#5A6577]/50 focus:outline-none focus:ring-2 focus:ring-[#C8973E] focus:border-transparent transition-all resize-none"
                  />
                </div>
                <button
                  type="submit"
                  className="bg-[#C8973E] text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-[#D4A94F] transition-colors duration-300 flex items-center gap-2"
                >
                  Send Inquiry
                  <Send className="w-5 h-5" />
                </button>
              </form>
            )}
          </div>

          <div className="lg:col-span-2">
            <div className="bg-[#0F1B2D] rounded-2xl p-8 text-white h-full">
              <h3 className="text-xl font-bold mb-6">Contact Information</h3>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-[#C8973E]/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Phone className="w-5 h-5 text-[#C8973E]" />
                  </div>
                  <div>
                    <div className="text-white/60 text-sm mb-1">Phone</div>
                    <div className="font-medium">+86 555 8888 9999</div>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-[#C8973E]/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Mail className="w-5 h-5 text-[#C8973E]" />
                  </div>
                  <div>
                    <div className="text-white/60 text-sm mb-1">Email</div>
                    <div className="font-medium">sales@artitect-machinery.com</div>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-[#C8973E]/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-5 h-5 text-[#C8973E]" />
                  </div>
                  <div>
                    <div className="text-white/60 text-sm mb-1">Address</div>
                    <div className="font-medium leading-relaxed">
                      Industrial Zone, Ma'anshan
                      <br />
                      Anhui Province, China 243000
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-10 pt-8 border-t border-white/10">
                <h4 className="font-semibold mb-3">Business Hours</h4>
                <div className="space-y-2 text-sm text-white/70">
                  <div className="flex justify-between">
                    <span>Monday — Friday</span>
                    <span>8:00 AM — 6:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Saturday</span>
                    <span>9:00 AM — 4:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Sunday</span>
                    <span>Closed</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
