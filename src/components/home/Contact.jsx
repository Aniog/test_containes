import { useState } from 'react'
import { Send, MapPin, Phone, Mail, Clock } from 'lucide-react'

const contactInfo = [
  {
    icon: MapPin,
    label: 'Address',
    value: '888 Industrial Park, Pudong District, Shanghai, China',
  },
  {
    icon: Phone,
    label: 'Phone',
    value: '+86 21 5888 8888',
  },
  {
    icon: Mail,
    label: 'Email',
    value: 'info@artitect-machinery.com',
  },
  {
    icon: Clock,
    label: 'Business Hours',
    value: 'Mon - Fri: 8:00 AM - 6:00 PM (CST)',
  },
]

export default function Contact() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    product: '',
    message: '',
  })
  const [status, setStatus] = useState('idle')

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setStatus('submitted')
  }

  return (
    <section id="contact" className="py-20 md:py-28 bg-offwhite">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-gold-500 font-semibold text-sm tracking-widest uppercase">
            Contact Us
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-dark mt-3 mb-4">
            Get in Touch
          </h2>
          <p className="text-steel-600 max-w-2xl mx-auto text-lg">
            Ready to find the right folding solution? Our team of experts is here
            to help you select the perfect machine for your needs.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
          <div className="lg:col-span-2 space-y-6">
            {contactInfo.map((item) => {
              const Icon = item.icon
              return (
                <div
                  key={item.label}
                  className="flex items-start gap-4 bg-white p-5 rounded-xl shadow-sm border border-steel-200/50"
                >
                  <div className="w-12 h-12 bg-gold-500/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Icon className="w-6 h-6 text-gold-500" />
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-dark">
                      {item.label}
                    </div>
                    <div className="text-steel-600 text-sm mt-1">
                      {item.value}
                    </div>
                  </div>
                </div>
              )
            })}
          </div>

          <div className="lg:col-span-3">
            {status === 'submitted' ? (
              <div className="bg-white rounded-xl shadow-md p-10 text-center border border-steel-200/50">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Send className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-2xl font-bold text-dark mb-2">
                  Message Sent!
                </h3>
                <p className="text-steel-600">
                  Thank you for your inquiry. Our team will get back to you
                  within 24 hours.
                </p>
                <button
                  onClick={() => {
                    setStatus('idle')
                    setForm({ name: '', email: '', company: '', phone: '', product: '', message: '' })
                  }}
                  className="mt-6 text-gold-500 hover:text-gold-400 font-semibold text-sm"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="bg-white rounded-xl shadow-md p-8 border border-steel-200/50"
              >
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-5">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-semibold text-dark mb-1.5"
                    >
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
                      className="w-full px-4 py-3 rounded-lg border border-steel-200 focus:border-gold-500 focus:ring-2 focus:ring-gold-500/20 outline-none transition-all text-dark text-sm bg-white"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-semibold text-dark mb-1.5"
                    >
                      Email *
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={form.email}
                      onChange={handleChange}
                      placeholder="john@company.com"
                      className="w-full px-4 py-3 rounded-lg border border-steel-200 focus:border-gold-500 focus:ring-2 focus:ring-gold-500/20 outline-none transition-all text-dark text-sm bg-white"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-5">
                  <div>
                    <label
                      htmlFor="company"
                      className="block text-sm font-semibold text-dark mb-1.5"
                    >
                      Company
                    </label>
                    <input
                      id="company"
                      name="company"
                      type="text"
                      value={form.company}
                      onChange={handleChange}
                      placeholder="Your company name"
                      className="w-full px-4 py-3 rounded-lg border border-steel-200 focus:border-gold-500 focus:ring-2 focus:ring-gold-500/20 outline-none transition-all text-dark text-sm bg-white"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="phone"
                      className="block text-sm font-semibold text-dark mb-1.5"
                    >
                      Phone
                    </label>
                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={form.phone}
                      onChange={handleChange}
                      placeholder="+1 234 567 8900"
                      className="w-full px-4 py-3 rounded-lg border border-steel-200 focus:border-gold-500 focus:ring-2 focus:ring-gold-500/20 outline-none transition-all text-dark text-sm bg-white"
                    />
                  </div>
                </div>

                <div className="mb-5">
                  <label
                    htmlFor="product"
                    className="block text-sm font-semibold text-dark mb-1.5"
                  >
                    Product of Interest
                  </label>
                  <select
                    id="product"
                    name="product"
                    value={form.product}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-steel-200 focus:border-gold-500 focus:ring-2 focus:ring-gold-500/20 outline-none transition-all text-dark text-sm bg-white"
                  >
                    <option value="">Select a product</option>
                    <option value="double-folding-machine">
                      Double Folding Machine
                    </option>
                    <option value="double-folder">Double Folder</option>
                    <option value="sheet-metal-folder">
                      Sheet Metal Folder
                    </option>
                    <option value="sheet-metal-folding-machine">
                      Sheet Metal Folding Machine
                    </option>
                    <option value="metal-folder">Metal Folder</option>
                    <option value="metal-folder-machine">
                      Metal Folder Machine
                    </option>
                    <option value="metal-folding-machine">
                      Metal Folding Machine
                    </option>
                  </select>
                </div>

                <div className="mb-6">
                  <label
                    htmlFor="message"
                    className="block text-sm font-semibold text-dark mb-1.5"
                  >
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={4}
                    value={form.message}
                    onChange={handleChange}
                    placeholder="Tell us about your requirements..."
                    className="w-full px-4 py-3 rounded-lg border border-steel-200 focus:border-gold-500 focus:ring-2 focus:ring-gold-500/20 outline-none transition-all text-dark text-sm bg-white resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-gold-500 hover:bg-gold-400 text-navy-900 font-bold py-4 rounded-lg transition-colors duration-200 flex items-center justify-center gap-2 text-base"
                >
                  <Send className="w-5 h-5" />
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
