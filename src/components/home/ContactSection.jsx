import { useState } from 'react'
import { MapPin, Phone, Mail, Clock, Send } from 'lucide-react'

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
    <section id="contact" className="relative py-20 md:py-28 bg-brand-navy">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-brand-gold/30 to-transparent" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Left: Contact info */}
          <div>
            <span className="text-brand-gold text-xs tracking-[0.25em] uppercase font-medium">
              Get in Touch
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-white mt-4 mb-6">
              Let's Discuss Your{' '}
              <span className="text-brand-gold">Folding Needs</span>
            </h2>
            <p className="text-slate-400 text-lg leading-relaxed mb-10">
              Whether you need a single machine or a complete production line, our team of
              engineers is ready to help you find the perfect solution.
            </p>

            <div className="space-y-6">
              {[
                {
                  icon: MapPin,
                  label: 'Headquarters',
                  value: 'Industriestrasse 42, 73230 Kirchheim, Germany',
                },
                {
                  icon: Phone,
                  label: 'Phone',
                  value: '+49 7021 950 0',
                },
                {
                  icon: Mail,
                  label: 'Email',
                  value: 'info@artitect-machinery.com',
                },
                {
                  icon: Clock,
                  label: 'Business Hours',
                  value: 'Mon – Fri: 8:00 – 18:00 CET',
                },
              ].map((item) => {
                const Icon = item.icon
                return (
                  <div key={item.label} className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-brand-gold/10 flex items-center justify-center shrink-0 mt-0.5">
                      <Icon className="w-5 h-5 text-brand-gold" />
                    </div>
                    <div>
                      <div className="text-xs tracking-[0.15em] uppercase text-slate-500 mb-0.5">
                        {item.label}
                      </div>
                      <div className="text-white text-sm">{item.value}</div>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>

          {/* Right: Contact form */}
          <div className="bg-white/5 border border-white/10 p-8 lg:p-10">
            {submitted ? (
              <div className="flex flex-col items-center justify-center h-full py-12 text-center">
                <div className="w-16 h-16 bg-brand-gold/20 flex items-center justify-center mb-6">
                  <Send className="w-8 h-8 text-brand-gold" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">Thank You!</h3>
                <p className="text-slate-400">
                  Your inquiry has been received. Our team will contact you within 24 hours.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="name" className="block text-xs tracking-[0.15em] uppercase text-slate-400 mb-2">
                      Name *
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full bg-white/10 border border-white/20 text-white px-4 py-3 text-sm focus:outline-none focus:border-brand-gold transition-colors placeholder:text-slate-500"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-xs tracking-[0.15em] uppercase text-slate-400 mb-2">
                      Email *
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full bg-white/10 border border-white/20 text-white px-4 py-3 text-sm focus:outline-none focus:border-brand-gold transition-colors placeholder:text-slate-500"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="company" className="block text-xs tracking-[0.15em] uppercase text-slate-400 mb-2">
                      Company
                    </label>
                    <input
                      id="company"
                      name="company"
                      type="text"
                      value={formData.company}
                      onChange={handleChange}
                      className="w-full bg-white/10 border border-white/20 text-white px-4 py-3 text-sm focus:outline-none focus:border-brand-gold transition-colors placeholder:text-slate-500"
                      placeholder="Company name"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-xs tracking-[0.15em] uppercase text-slate-400 mb-2">
                      Phone
                    </label>
                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full bg-white/10 border border-white/20 text-white px-4 py-3 text-sm focus:outline-none focus:border-brand-gold transition-colors placeholder:text-slate-500"
                      placeholder="+49 7021 950 0"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-xs tracking-[0.15em] uppercase text-slate-400 mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    required
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full bg-white/10 border border-white/20 text-white px-4 py-3 text-sm focus:outline-none focus:border-brand-gold transition-colors placeholder:text-slate-500 resize-none"
                    placeholder="Tell us about your requirements..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-brand-gold hover:bg-brand-gold-hover text-brand-navy px-8 py-3.5 text-sm tracking-[0.2em] uppercase font-semibold transition-all duration-300 flex items-center justify-center gap-3"
                >
                  <Send className="w-4 h-4" />
                  Send Inquiry
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}