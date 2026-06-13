import { useState } from 'react'
import { Phone, Mail, MapPin, Send, CheckCircle } from 'lucide-react'

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', company: '', message: '' })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setForm((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <div>
      {/* Page Header */}
      <section className="bg-slate-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <span className="inline-block bg-amber-500/20 text-amber-400 text-xs font-semibold px-3 py-1 rounded-full mb-4 tracking-wider uppercase">
            Get in Touch
          </span>
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-4">
            Contact Us
          </h1>
          <p className="text-slate-300 text-lg max-w-2xl mx-auto">
            Ready to discuss your sheet metal folding requirements? Our team is here to help.
          </p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-16">
          {/* Contact Info */}
          <div>
            <h2 className="text-2xl font-bold text-slate-900 mb-6">
              Let's Talk About Your Project
            </h2>
            <p className="text-slate-600 leading-relaxed mb-8">
              Whether you need a single machine or a complete production line, our engineering team is ready to help you find the perfect solution. Fill out the form and we'll get back to you within 24 hours.
            </p>

            <div className="space-y-6">
              {[
                { icon: Phone, label: 'Phone', value: '+1 (555) 123-4567' },
                { icon: Mail, label: 'Email', value: 'info@artitectmachinery.com' },
                { icon: MapPin, label: 'Address', value: '123 Industrial Parkway, Chicago, IL 60601' },
              ].map((item) => (
                <div key={item.label} className="flex gap-4">
                  <div className="w-12 h-12 bg-amber-100 rounded-lg flex items-center justify-center shrink-0">
                    <item.icon className="w-5 h-5 text-amber-600" />
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-slate-900">{item.label}</h4>
                    <p className="text-sm text-slate-600">{item.value}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Form */}
          <div>
            {submitted ? (
              <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-8 text-center">
                <CheckCircle className="w-12 h-12 text-emerald-500 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-slate-900 mb-2">
                  Message Sent Successfully
                </h3>
                <p className="text-slate-600">
                  Thank you for reaching out. Our team will get back to you within 24 hours.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="bg-slate-50 rounded-xl p-8 border border-slate-200">
                <div className="grid sm:grid-cols-2 gap-4 mb-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-1.5">
                      Name *
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      required
                      value={form.name}
                      onChange={handleChange}
                      className="w-full px-4 py-2.5 rounded-lg border border-slate-300 bg-white text-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-amber-500"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-1.5">
                      Email *
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={form.email}
                      onChange={handleChange}
                      className="w-full px-4 py-2.5 rounded-lg border border-slate-300 bg-white text-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-amber-500"
                      placeholder="you@company.com"
                    />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-4 mb-4">
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
                      className="w-full px-4 py-2.5 rounded-lg border border-slate-300 bg-white text-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-amber-500"
                      placeholder="+1 (555) 000-0000"
                    />
                  </div>
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
                      className="w-full px-4 py-2.5 rounded-lg border border-slate-300 bg-white text-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-amber-500"
                      placeholder="Company name"
                    />
                  </div>
                </div>

                <div className="mb-6">
                  <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-1.5">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    required
                    value={form.message}
                    onChange={handleChange}
                    className="w-full px-4 py-2.5 rounded-lg border border-slate-300 bg-white text-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-amber-500 resize-none"
                    placeholder="Tell us about your project, material type, thickness, and production volume..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full inline-flex items-center justify-center gap-2 bg-amber-500 hover:bg-amber-600 text-white font-semibold px-6 py-3 rounded-lg transition-colors text-sm"
                >
                  <Send className="w-4 h-4" />
                  Send Message
                </button>
              </form>
            )}
          </div>
        </div>
      </section>
    </div>
  )
}