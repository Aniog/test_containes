import { useState } from 'react'
import { Phone, Mail, MapPin, Clock, Send } from 'lucide-react'

const contactInfo = [
  {
    icon: Phone,
    title: 'Phone',
    details: ['+1 (555) 123-4567', '+1 (555) 987-6543'],
    sub: 'Mon–Fri, 8am–6pm CST',
  },
  {
    icon: Mail,
    title: 'Email',
    details: ['info@artitect-machinery.com', 'sales@artitect-machinery.com'],
    sub: 'We respond within 24 hours',
  },
  {
    icon: MapPin,
    title: 'Visit Us',
    details: ['1200 Industrial Way, Suite 400', 'Chicago, IL 60607, USA'],
    sub: 'By appointment only',
  },
]

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', company: '', phone: '', message: '', product: '' })
  const [status, setStatus] = useState('idle')

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setStatus('submitted')
    setForm({ name: '', email: '', company: '', phone: '', message: '', product: '' })
  }

  return (
    <div>
      {/* Header */}
      <section className="bg-brand-charcoal py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-white">
            Get in <span className="text-brand-gold">Touch</span>
          </h1>
          <p className="mt-4 text-lg text-slate-300 max-w-2xl">
            Ready to discuss your sheet metal folding needs? Our team is here to help you find the right solution.
          </p>
        </div>
      </section>

      <section className="bg-white py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-16">
            {/* Contact info */}
            <div className="lg:col-span-2 space-y-10">
              <div>
                <h2 className="text-2xl font-bold text-slate-900">Contact Information</h2>
                <p className="mt-2 text-slate-600">
                  Reach out to our team for sales inquiries, technical support, or service requests.
                </p>
              </div>
              <div className="space-y-6">
                {contactInfo.map((item) => (
                  <div key={item.title} className="flex gap-4">
                    <div className="w-10 h-10 rounded-lg bg-amber-50 flex items-center justify-center shrink-0">
                      <item.icon className="w-5 h-5 text-brand-gold" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-slate-900">{item.title}</h3>
                      {item.details.map((d) => (
                        <p key={d} className="text-sm text-slate-600">{d}</p>
                      ))}
                      <p className="text-xs text-slate-400 mt-1">{item.sub}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Form */}
            <div className="lg:col-span-3">
              <div className="bg-slate-50 rounded-2xl p-8 md:p-10 border border-slate-200">
                <h2 className="text-xl font-bold text-slate-900 mb-6">Request a Quote</h2>

                {status === 'submitted' ? (
                  <div className="text-center py-12">
                    <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-4">
                      <Send className="w-7 h-7 text-green-600" />
                    </div>
                    <h3 className="text-xl font-semibold text-slate-900">Thank You!</h3>
                    <p className="mt-2 text-slate-600 max-w-sm mx-auto">
                      Your inquiry has been received. Our team will get back to you within 24 hours.
                    </p>
                    <button
                      onClick={() => setStatus('idle')}
                      className="mt-6 text-sm font-medium text-brand-gold hover:text-brand-gold-light transition-colors"
                    >
                      Send another inquiry
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-1.5">
                          Full Name *
                        </label>
                        <input
                          id="name"
                          name="name"
                          type="text"
                          required
                          value={form.name}
                          onChange={handleChange}
                          className="w-full px-4 py-2.5 rounded-lg border border-slate-300 bg-white text-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-brand-gold/30 focus:border-brand-gold transition-colors"
                          placeholder="John Smith"
                        />
                      </div>
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-1.5">
                          Email Address *
                        </label>
                        <input
                          id="email"
                          name="email"
                          type="email"
                          required
                          value={form.email}
                          onChange={handleChange}
                          className="w-full px-4 py-2.5 rounded-lg border border-slate-300 bg-white text-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-brand-gold/30 focus:border-brand-gold transition-colors"
                          placeholder="john@company.com"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
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
                          className="w-full px-4 py-2.5 rounded-lg border border-slate-300 bg-white text-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-brand-gold/30 focus:border-brand-gold transition-colors"
                          placeholder="Acme Fabrication Inc."
                        />
                      </div>
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
                          className="w-full px-4 py-2.5 rounded-lg border border-slate-300 bg-white text-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-brand-gold/30 focus:border-brand-gold transition-colors"
                          placeholder="+1 (555) 000-0000"
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="product" className="block text-sm font-medium text-slate-700 mb-1.5">
                        Product of Interest
                      </label>
                      <select
                        id="product"
                        name="product"
                        value={form.product}
                        onChange={handleChange}
                        className="w-full px-4 py-2.5 rounded-lg border border-slate-300 bg-white text-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-brand-gold/30 focus:border-brand-gold transition-colors"
                      >
                        <option value="">Select a product...</option>
                        <option value="double-folding">Double Folding Machine (DFM Series)</option>
                        <option value="sheet-metal-folder">Sheet Metal Folder (SMF Series)</option>
                        <option value="metal-folder">Metal Folder Machine (MFM Series)</option>
                        <option value="double-folder">Double Folder (DF Series)</option>
                        <option value="metal-folding">Metal Folding Machine (MF Series)</option>
                        <option value="other">Other / Multiple Products</option>
                      </select>
                    </div>

                    <div>
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
                        className="w-full px-4 py-2.5 rounded-lg border border-slate-300 bg-white text-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-brand-gold/30 focus:border-brand-gold transition-colors resize-none"
                        placeholder="Tell us about your requirements, materials, production volume, and any specific questions..."
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3 rounded-lg text-sm font-semibold text-white bg-brand-gold hover:bg-brand-gold-light transition-colors"
                    >
                      Send Inquiry
                      <Send className="w-4 h-4" />
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
