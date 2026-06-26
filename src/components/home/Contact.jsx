import { useState } from 'react'
import { Mail, Phone, MapPin, Send } from 'lucide-react'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    message: '',
  })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Contact form submitted:', formData)
    setSubmitted(true)
    setFormData({ name: '', email: '', company: '', phone: '', message: '' })
    setTimeout(() => setSubmitted(false), 5000)
  }

  return (
    <section id="contact" className="py-20 md:py-28 bg-surface">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-gold text-sm font-semibold tracking-widest uppercase">Get in Touch</span>
          <h2 className="text-3xl md:text-4xl font-bold text-navy-900 mt-3 mb-4">
            Request a Quote or Consultation
          </h2>
          <p className="text-slate-500 max-w-2xl mx-auto text-lg">
            Tell us about your fabrication needs and our team will recommend the ideal
            machine configuration for your operation.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-10 lg:gap-16">
          <div className="lg:col-span-2 space-y-8">
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-gold/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-5 h-5 text-gold" />
                </div>
                <div>
                  <h4 className="font-semibold text-navy-900">Headquarters</h4>
                  <p className="text-slate-500 text-sm mt-1">
                    42 Innovation Drive<br />
                    Industrial District<br />
                    Manchester, M1 2AB, United Kingdom
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-gold/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Phone className="w-5 h-5 text-gold" />
                </div>
                <div>
                  <h4 className="font-semibold text-navy-900">Phone</h4>
                  <p className="text-slate-500 text-sm mt-1">+44 (0) 161 555 0198</p>
                  <p className="text-slate-400 text-xs mt-0.5">Mon–Fri, 8:00–18:00 GMT</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-gold/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Mail className="w-5 h-5 text-gold" />
                </div>
                <div>
                  <h4 className="font-semibold text-navy-900">Email</h4>
                  <p className="text-slate-500 text-sm mt-1">info@artitect-machinery.com</p>
                  <p className="text-slate-400 text-xs mt-0.5">We respond within 24 hours</p>
                </div>
              </div>
            </div>

            <div className="bg-navy-900 rounded-xl p-6">
              <h4 className="text-white font-semibold mb-2">Need Immediate Assistance?</h4>
              <p className="text-slate-400 text-sm leading-relaxed">
                Our technical support team is available for emergency service and
                spare parts requests. Call our 24/7 hotline for urgent matters.
              </p>
            </div>
          </div>

          <div className="lg:col-span-3">
            {submitted ? (
              <div className="bg-green-50 border border-green-100 rounded-xl p-8 text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Send className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-xl font-bold text-navy-900 mb-2">Thank You!</h3>
                <p className="text-slate-500">
                  Your inquiry has been received. A member of our sales team will
                  contact you within 24 hours.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="bg-card border border-slate-100 rounded-xl p-6 md:p-8 space-y-5">
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-navy-900 mb-1.5">
                      Full Name <span className="text-red-400">*</span>
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-2.5 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-gold/40 focus:border-gold transition-all duration-200 text-navy-900 placeholder-slate-400"
                      placeholder="John Smith"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-navy-900 mb-1.5">
                      Email Address <span className="text-red-400">*</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-2.5 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-gold/40 focus:border-gold transition-all duration-200 text-navy-900 placeholder-slate-400"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="company" className="block text-sm font-medium text-navy-900 mb-1.5">
                      Company Name
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      className="w-full px-4 py-2.5 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-gold/40 focus:border-gold transition-all duration-200 text-navy-900 placeholder-slate-400"
                      placeholder="Your Company Ltd."
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-navy-900 mb-1.5">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-2.5 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-gold/40 focus:border-gold transition-all duration-200 text-navy-900 placeholder-slate-400"
                      placeholder="+44 161 555 0198"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-navy-900 mb-1.5">
                    Tell us about your requirements <span className="text-red-400">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-2.5 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-gold/40 focus:border-gold transition-all duration-200 text-navy-900 placeholder-slate-400 resize-none"
                    placeholder="Describe the type of machine, materials, production volume, and any special requirements..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-gold text-navy-900 py-3 rounded-lg font-semibold text-base hover:bg-gold/90 transition-all duration-200 shadow-lg shadow-gold/20 flex items-center justify-center gap-2"
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