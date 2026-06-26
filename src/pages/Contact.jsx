import { useState } from 'react'
import { Mail, Phone, MapPin, Clock, Send, CheckCircle } from 'lucide-react'

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', company: '', message: '', product: '' })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setForm((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Contact form submitted:', form)
    setSubmitted(true)
    setForm({ name: '', email: '', phone: '', company: '', message: '', product: '' })
  }

  const contactInfo = [
    { icon: Phone, label: 'Phone', value: '+1 (312) 555-0198', href: 'tel:+13125550198' },
    { icon: Mail, label: 'Email', value: 'info@artitectmachinery.com', href: 'mailto:info@artitectmachinery.com' },
    { icon: MapPin, label: 'Address', value: '123 Industrial Way, Manufacturing District, IL 60007' },
    { icon: Clock, label: 'Hours', value: 'Mon-Fri: 8:00 AM - 6:00 PM CST' },
  ]

  return (
    <div>
      {/* Hero */}
      <section className="bg-brand-900 text-white py-20 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">
              Get in <span className="text-accent-500">Touch</span>
            </h1>
            <p className="text-brand-300 text-lg leading-relaxed">
              Ready to discuss your sheet metal folding needs? Our team is here to help you find the perfect machine for your production line.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-16">
            {/* Contact Info */}
            <div className="lg:col-span-1">
              <h2 className="text-2xl font-bold text-brand-900 tracking-tight mb-6">
                Contact Information
              </h2>
              <div className="space-y-6">
                {contactInfo.map((item) => {
                  const Icon = item.icon
                  return (
                    <div key={item.label} className="flex gap-4">
                      <div className="w-11 h-11 rounded-lg bg-brand-50 flex items-center justify-center shrink-0">
                        <Icon className="w-5 h-5 text-accent-500" />
                      </div>
                      <div>
                        <p className="text-sm font-medium text-brand-900">{item.label}</p>
                        {item.href ? (
                          <a href={item.href} className="text-brand-600 text-sm hover:text-accent-500 transition-colors">
                            {item.value}
                          </a>
                        ) : (
                          <p className="text-brand-600 text-sm">{item.value}</p>
                        )}
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>

            {/* Form */}
            <div className="lg:col-span-2">
              {submitted ? (
                <div className="bg-brand-50 border border-brand-200 rounded-2xl p-12 text-center">
                  <CheckCircle className="w-14 h-14 text-accent-500 mx-auto mb-4" />
                  <h3 className="text-2xl font-bold text-brand-900 mb-2">Thank You!</h3>
                  <p className="text-brand-600 max-w-md mx-auto">
                    We've received your inquiry. A member of our team will get back to you within 1-2 business days.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="bg-white rounded-2xl border border-slate-200 p-8 shadow-sm">
                  <h2 className="text-2xl font-bold text-brand-900 tracking-tight mb-2">
                    Request a Quote
                  </h2>
                  <p className="text-brand-600 mb-8">
                    Fill out the form below and our sales team will reach out with pricing and availability.
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-5">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-brand-700 mb-1.5">
                        Full Name *
                      </label>
                      <input
                        id="name"
                        name="name"
                        type="text"
                        required
                        value={form.name}
                        onChange={handleChange}
                        className="w-full px-4 py-2.5 rounded-lg border border-slate-300 text-brand-900 text-sm focus:outline-none focus:ring-2 focus:ring-accent-500 focus:border-accent-500 transition-colors"
                        placeholder="John Smith"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-brand-700 mb-1.5">
                        Email Address *
                      </label>
                      <input
                        id="email"
                        name="email"
                        type="email"
                        required
                        value={form.email}
                        onChange={handleChange}
                        className="w-full px-4 py-2.5 rounded-lg border border-slate-300 text-brand-900 text-sm focus:outline-none focus:ring-2 focus:ring-accent-500 focus:border-accent-500 transition-colors"
                        placeholder="john@company.com"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-5">
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-brand-700 mb-1.5">
                        Phone Number
                      </label>
                      <input
                        id="phone"
                        name="phone"
                        type="tel"
                        value={form.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-2.5 rounded-lg border border-slate-300 text-brand-900 text-sm focus:outline-none focus:ring-2 focus:ring-accent-500 focus:border-accent-500 transition-colors"
                        placeholder="+1 (312) 555-0000"
                      />
                    </div>
                    <div>
                      <label htmlFor="company" className="block text-sm font-medium text-brand-700 mb-1.5">
                        Company
                      </label>
                      <input
                        id="company"
                        name="company"
                        type="text"
                        value={form.company}
                        onChange={handleChange}
                        className="w-full px-4 py-2.5 rounded-lg border border-slate-300 text-brand-900 text-sm focus:outline-none focus:ring-2 focus:ring-accent-500 focus:border-accent-500 transition-colors"
                        placeholder="Your Company Inc."
                      />
                    </div>
                  </div>

                  <div className="mb-5">
                    <label htmlFor="product" className="block text-sm font-medium text-brand-700 mb-1.5">
                      Product of Interest
                    </label>
                    <select
                      id="product"
                      name="product"
                      value={form.product}
                      onChange={handleChange}
                      className="w-full px-4 py-2.5 rounded-lg border border-slate-300 text-brand-900 text-sm focus:outline-none focus:ring-2 focus:ring-accent-500 focus:border-accent-500 transition-colors bg-white"
                    >
                      <option value="">Select a product...</option>
                      <option value="double-folding">Double Folding Machine</option>
                      <option value="sheet-metal-folder">Sheet Metal Folder</option>
                      <option value="metal-folder-machine">Metal Folder Machine</option>
                      <option value="metal-folding-machine">Metal Folding Machine</option>
                      <option value="double-folder">Double Folder</option>
                      <option value="custom">Custom Solution</option>
                    </select>
                  </div>

                  <div className="mb-6">
                    <label htmlFor="message" className="block text-sm font-medium text-brand-700 mb-1.5">
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      required
                      value={form.message}
                      onChange={handleChange}
                      className="w-full px-4 py-2.5 rounded-lg border border-slate-300 text-brand-900 text-sm focus:outline-none focus:ring-2 focus:ring-accent-500 focus:border-accent-500 transition-colors resize-none"
                      placeholder="Tell us about your requirements, material types, production volume..."
                    />
                  </div>

                  <button
                    type="submit"
                    className="inline-flex items-center gap-2 px-8 py-3 rounded-lg text-base font-semibold text-white bg-accent-500 hover:bg-accent-600 transition-colors shadow-sm"
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
    </div>
  )
}
