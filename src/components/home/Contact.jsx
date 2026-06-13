import React, { useState } from 'react'
import { Mail, Phone, MapPin, Send } from 'lucide-react'

export default function Contact() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    product: '',
    message: '',
  })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setForm((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Contact form submitted:', form)
    setSubmitted(true)
  }

  return (
    <section id="contact" className="py-20 md:py-28 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-gold font-semibold text-sm uppercase tracking-wider">
            Get In Touch
          </span>
          <h2 className="mt-3 text-3xl md:text-4xl lg:text-5xl font-bold text-navy tracking-tight">
            Request a Quote
          </h2>
          <div className="mt-4 h-1 w-16 bg-gold mx-auto rounded-full" />
          <p className="mt-6 text-slate-600 text-lg leading-relaxed">
            Ready to upgrade your metal folding capabilities? Our team is here to
            help you find the perfect machine for your needs.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
          {/* Contact Info */}
          <div className="lg:col-span-2 space-y-8">
            <div>
              <h3 className="text-xl font-bold text-navy mb-6">Contact Information</h3>
              <div className="space-y-5">
                <div className="flex items-start gap-4">
                  <div className="w-11 h-11 bg-gold/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Mail className="w-5 h-5 text-gold" />
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-navy">Email</div>
                    <div className="text-slate-600 text-sm mt-0.5">info@artitectmachinery.com</div>
                    <div className="text-slate-600 text-sm">sales@artitectmachinery.com</div>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-11 h-11 bg-gold/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Phone className="w-5 h-5 text-gold" />
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-navy">Phone</div>
                    <div className="text-slate-600 text-sm mt-0.5">+1 (800) 555-0199</div>
                    <div className="text-slate-600 text-sm">+1 (800) 555-0200</div>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-11 h-11 bg-gold/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-5 h-5 text-gold" />
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-navy">Address</div>
                    <div className="text-slate-600 text-sm mt-0.5">
                      1200 Industrial Parkway<br />
                      Suite 400<br />
                      Cleveland, OH 44115
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Business Hours */}
            <div className="bg-slate-50 rounded-xl p-6 border border-slate-100">
              <h4 className="font-semibold text-navy text-sm mb-3">Business Hours</h4>
              <div className="space-y-2 text-sm text-slate-600">
                <div className="flex justify-between">
                  <span>Monday - Friday</span>
                  <span className="font-medium text-navy">8:00 AM - 6:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span>Saturday</span>
                  <span className="font-medium text-navy">9:00 AM - 1:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span>Sunday</span>
                  <span className="font-medium text-slate-400">Closed</span>
                </div>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="lg:col-span-3">
            {submitted ? (
              <div className="bg-green-50 border border-green-200 rounded-xl p-8 text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Send className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-xl font-bold text-navy mb-2">Thank You!</h3>
                <p className="text-slate-600">
                  Your inquiry has been received. Our team will contact you within 24 hours.
                </p>
                <button
                  onClick={() => {
                    setSubmitted(false)
                    setForm({ name: '', email: '', company: '', phone: '', product: '', message: '' })
                  }}
                  className="mt-6 text-gold font-semibold text-sm hover:underline"
                >
                  Send another inquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="bg-slate-50 rounded-xl p-6 md:p-8 border border-slate-100">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="name" className="block text-sm font-semibold text-navy mb-1.5">
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
                      className="w-full px-4 py-3 rounded-lg border border-slate-200 bg-white text-navy placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-gold/50 focus:border-gold text-sm transition-colors"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-semibold text-navy mb-1.5">
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
                      className="w-full px-4 py-3 rounded-lg border border-slate-200 bg-white text-navy placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-gold/50 focus:border-gold text-sm transition-colors"
                    />
                  </div>
                  <div>
                    <label htmlFor="company" className="block text-sm font-semibold text-navy mb-1.5">
                      Company
                    </label>
                    <input
                      id="company"
                      name="company"
                      type="text"
                      value={form.company}
                      onChange={handleChange}
                      placeholder="Your company name"
                      className="w-full px-4 py-3 rounded-lg border border-slate-200 bg-white text-navy placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-gold/50 focus:border-gold text-sm transition-colors"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-semibold text-navy mb-1.5">
                      Phone Number
                    </label>
                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={form.phone}
                      onChange={handleChange}
                      placeholder="+1 (555) 000-0000"
                      className="w-full px-4 py-3 rounded-lg border border-slate-200 bg-white text-navy placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-gold/50 focus:border-gold text-sm transition-colors"
                    />
                  </div>
                </div>

                <div className="mt-5">
                  <label htmlFor="product" className="block text-sm font-semibold text-navy mb-1.5">
                    Product of Interest
                  </label>
                  <select
                    id="product"
                    name="product"
                    value={form.product}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-slate-200 bg-white text-navy focus:outline-none focus:ring-2 focus:ring-gold/50 focus:border-gold text-sm transition-colors"
                  >
                    <option value="">Select a product</option>
                    <option value="double-folding-machine">Double Folding Machine</option>
                    <option value="double-folder">Double Folder</option>
                    <option value="sheet-metal-folder">Sheet Metal Folder</option>
                    <option value="sheet-metal-folding-machine">Sheet Metal Folding Machine</option>
                    <option value="metal-folder">Metal Folder</option>
                    <option value="metal-folding-machine">Metal Folding Machine</option>
                  </select>
                </div>

                <div className="mt-5">
                  <label htmlFor="message" className="block text-sm font-semibold text-navy mb-1.5">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    value={form.message}
                    onChange={handleChange}
                    placeholder="Tell us about your requirements..."
                    className="w-full px-4 py-3 rounded-lg border border-slate-200 bg-white text-navy placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-gold/50 focus:border-gold text-sm transition-colors resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="mt-6 w-full bg-gold hover:bg-gold-300 text-white font-semibold px-8 py-3.5 rounded-lg text-base transition-colors duration-200 flex items-center justify-center gap-2"
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
