import { useState } from 'react'
import { Mail, MapPin, Phone, Send } from 'lucide-react'

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
    const { name, value } = e.target
    setForm((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setStatus('submitted')
  }

  return (
    <section id="contact" className="py-20 md:py-28 bg-brand-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-accent-400 font-semibold text-sm tracking-widest uppercase">
            Get in Touch
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-white mt-3 font-[var(--font-heading)]">
            Let's Find Your Perfect Machine
          </h2>
          <p className="text-brand-300 mt-4 text-lg leading-relaxed">
            Tell us about your project and our specialists will recommend the
            ideal folding solution for your needs.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-12">
          {/* Contact Info */}
          <div className="lg:col-span-2 space-y-8">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-accent-500/15 rounded-xl flex items-center justify-center shrink-0">
                <MapPin className="w-6 h-6 text-accent-400" />
              </div>
              <div>
                <h3 className="text-white font-semibold">Headquarters</h3>
                <p className="text-brand-300 mt-1 text-sm leading-relaxed">
                  ARTITECT MACHINERY Co., Ltd.<br />
                  No. 888 Innovation Drive<br />
                  Shanghai, China 201600
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-accent-500/15 rounded-xl flex items-center justify-center shrink-0">
                <Phone className="w-6 h-6 text-accent-400" />
              </div>
              <div>
                <h3 className="text-white font-semibold">Phone</h3>
                <p className="text-brand-300 mt-1 text-sm">
                  +86 21 5888 8888<br />
                  +1 (888) 555-0199 (US)
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-accent-500/15 rounded-xl flex items-center justify-center shrink-0">
                <Mail className="w-6 h-6 text-accent-400" />
              </div>
              <div>
                <h3 className="text-white font-semibold">Email</h3>
                <p className="text-brand-300 mt-1 text-sm">
                  sales@artitect-machinery.com<br />
                  support@artitect-machinery.com
                </p>
              </div>
            </div>

            {/* Business Hours */}
            <div className="bg-brand-800 rounded-xl p-6 border border-brand-700">
              <h3 className="text-white font-semibold mb-3">Business Hours</h3>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between text-brand-300">
                  <span>Monday – Friday</span>
                  <span>8:00 – 18:00 CST</span>
                </div>
                <div className="flex justify-between text-brand-300">
                  <span>Saturday</span>
                  <span>9:00 – 15:00 CST</span>
                </div>
                <div className="flex justify-between text-brand-300">
                  <span>Sunday</span>
                  <span>Closed</span>
                </div>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="lg:col-span-3">
            {status === 'submitted' ? (
              <div className="bg-brand-800 rounded-2xl p-12 text-center border border-brand-700">
                <div className="w-16 h-16 bg-accent-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Send className="w-8 h-8 text-accent-400" />
                </div>
                <h3 className="text-2xl font-bold text-white font-[var(--font-heading)]">
                  Thank You!
                </h3>
                <p className="text-brand-300 mt-3 max-w-md mx-auto">
                  Your inquiry has been received. Our team will contact you
                  within 24 hours with a personalized recommendation.
                </p>
                <button
                  onClick={() => {
                    setStatus('idle')
                    setForm({ name: '', email: '', company: '', phone: '', product: '', message: '' })
                  }}
                  className="mt-6 text-accent-400 hover:text-accent-300 font-semibold text-sm transition-colors"
                >
                  Send another inquiry
                </button>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="bg-brand-800 rounded-2xl p-8 border border-brand-700 space-y-5"
              >
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-brand-200 text-sm font-medium mb-2"
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
                      className="w-full bg-brand-700 border border-brand-600 rounded-lg px-4 py-3 text-white placeholder-brand-400 focus:outline-none focus:ring-2 focus:ring-accent-500 focus:border-transparent transition-all"
                      placeholder="John Smith"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-brand-200 text-sm font-medium mb-2"
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
                      className="w-full bg-brand-700 border border-brand-600 rounded-lg px-4 py-3 text-white placeholder-brand-400 focus:outline-none focus:ring-2 focus:ring-accent-500 focus:border-transparent transition-all"
                      placeholder="john@company.com"
                    />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label
                      htmlFor="company"
                      className="block text-brand-200 text-sm font-medium mb-2"
                    >
                      Company
                    </label>
                    <input
                      id="company"
                      name="company"
                      type="text"
                      value={form.company}
                      onChange={handleChange}
                      className="w-full bg-brand-700 border border-brand-600 rounded-lg px-4 py-3 text-white placeholder-brand-400 focus:outline-none focus:ring-2 focus:ring-accent-500 focus:border-transparent transition-all"
                      placeholder="Your company name"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="phone"
                      className="block text-brand-200 text-sm font-medium mb-2"
                    >
                      Phone
                    </label>
                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={form.phone}
                      onChange={handleChange}
                      className="w-full bg-brand-700 border border-brand-600 rounded-lg px-4 py-3 text-white placeholder-brand-400 focus:outline-none focus:ring-2 focus:ring-accent-500 focus:border-transparent transition-all"
                      placeholder="+1 555 0199"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="product"
                    className="block text-brand-200 text-sm font-medium mb-2"
                  >
                    Product of Interest
                  </label>
                  <select
                    id="product"
                    name="product"
                    value={form.product}
                    onChange={handleChange}
                    className="w-full bg-brand-700 border border-brand-600 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-accent-500 focus:border-transparent transition-all"
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

                <div>
                  <label
                    htmlFor="message"
                    className="block text-brand-200 text-sm font-medium mb-2"
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
                    className="w-full bg-brand-700 border border-brand-600 rounded-lg px-4 py-3 text-white placeholder-brand-400 focus:outline-none focus:ring-2 focus:ring-accent-500 focus:border-transparent transition-all resize-none"
                    placeholder="Tell us about your project requirements..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-accent-500 hover:bg-accent-600 text-brand-900 font-semibold py-4 rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-accent-500/25 flex items-center justify-center gap-2 tracking-wide"
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
