import { Mail, Phone, MapPin, Send } from 'lucide-react'
import { useState } from 'react'

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: '',
  })
  const [status, setStatus] = useState('idle')

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setStatus('success')
    setFormData({ name: '', email: '', company: '', message: '' })
    setTimeout(() => setStatus('idle'), 4000)
  }

  return (
    <section id="contact" className="py-20 md:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-gold font-semibold text-sm uppercase tracking-widest mb-3">
            Get In Touch
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">
            Request a Quote
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Tell us about your project requirements and our team will provide a
            tailored solution within 24 hours.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-12 lg:gap-16">
          <div className="lg:col-span-3">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-slate-200 bg-slate-50 text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-gold/50 focus:border-gold transition-colors"
                    placeholder="John Smith"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-slate-200 bg-slate-50 text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-gold/50 focus:border-gold transition-colors"
                    placeholder="john@company.com"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="company" className="block text-sm font-medium text-slate-700 mb-2">
                  Company Name
                </label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border border-slate-200 bg-slate-50 text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-gold/50 focus:border-gold transition-colors"
                  placeholder="Your Company Ltd."
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-2">
                  Project Details *
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border border-slate-200 bg-slate-50 text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-gold/50 focus:border-gold transition-colors resize-none"
                  placeholder="Tell us about the materials, dimensions, and production volume you need..."
                />
              </div>
              <button
                type="submit"
                className="inline-flex items-center justify-center gap-2 bg-gold text-white font-semibold px-8 py-4 rounded-lg hover:bg-gold-light transition-colors text-base w-full sm:w-auto"
              >
                <Send className="w-4 h-4" />
                Send Inquiry
              </button>
              {status === 'success' && (
                <p className="text-green-600 font-medium mt-2">
                  Thank you! We'll get back to you within 24 hours.
                </p>
              )}
            </form>
          </div>

          <div className="lg:col-span-2">
            <div className="bg-navy rounded-2xl p-8 text-white h-full">
              <h3 className="text-xl font-bold mb-6">Contact Information</h3>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Mail className="w-5 h-5 text-gold" />
                  </div>
                  <div>
                    <p className="text-slate-300 text-sm mb-1">Email</p>
                    <p className="font-medium">info@artitectmachinery.com</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Phone className="w-5 h-5 text-gold" />
                  </div>
                  <div>
                    <p className="text-slate-300 text-sm mb-1">Phone</p>
                    <p className="font-medium">+1 (555) 234-5678</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-5 h-5 text-gold" />
                  </div>
                  <div>
                    <p className="text-slate-300 text-sm mb-1">Headquarters</p>
                    <p className="font-medium">
                      1200 Industrial Blvd<br />
                      Suite 400, Chicago, IL 60607
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-10 pt-6 border-t border-white/10">
                <p className="text-slate-300 text-sm mb-2">Business Hours</p>
                <p className="font-medium text-sm">Mon – Fri: 8:00 AM – 6:00 PM CST</p>
                <p className="font-medium text-sm">Sat: 9:00 AM – 1:00 PM CST</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ContactSection
