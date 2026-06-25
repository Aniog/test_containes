import { useState } from 'react'
import { Factory, Mail, Phone, MapPin, Send, CheckCircle } from 'lucide-react'

export default function Contact() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    message: '',
    productInterest: '',
  })
  const [submitted, setSubmitted] = useState(false)
  const [submitting, setSubmitting] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setForm((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setSubmitting(true)
    // Simulate submission
    await new Promise((r) => setTimeout(r, 1000))
    setSubmitting(false)
    setSubmitted(true)
    setForm({ name: '', email: '', company: '', phone: '', message: '', productInterest: '' })
  }

  const CONTACT_INFO = [
    { icon: Phone, label: 'Phone', value: '+1 (555) 123-4567' },
    { icon: Mail, label: 'Email', value: 'info@artitectmachinery.com' },
    { icon: MapPin, label: 'Address', value: '123 Industrial Way, Suite 100' },
  ]

  return (
    <div>
      {/* Hero */}
      <section className="bg-slate-900 py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-white/10 rounded-full text-xs font-medium text-amber-400 mb-5">
            <Factory className="w-3.5 h-3.5" />
            Contact Us
          </div>
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white tracking-tight">
            Let&apos;s Talk About Your{' '}
            <span className="text-amber-500">Folding Needs</span>
          </h1>
          <p className="mt-4 text-lg text-slate-300 max-w-2xl">
            Whether you need a single machine or an entire production line,
            our team is ready to help you find the perfect solution.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-16">
            {/* Form */}
            <div className="lg:col-span-2">
              {submitted ? (
                <div className="bg-white rounded-2xl border border-slate-200 p-10 md:p-12 text-center">
                  <div className="w-16 h-16 bg-green-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
                    <CheckCircle className="w-8 h-8 text-green-600" />
                  </div>
                  <h2 className="text-2xl font-bold text-slate-900 mb-3">
                    Thank You!
                  </h2>
                  <p className="text-slate-500 max-w-md mx-auto leading-relaxed">
                    Your inquiry has been received. One of our engineering
                    specialists will get back to you within 24 hours.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="mt-8 inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold text-slate-700 bg-slate-100 rounded-xl hover:bg-slate-200 transition-colors"
                  >
                    Send Another Inquiry
                  </button>
                </div>
              ) : (
                <form
                  onSubmit={handleSubmit}
                  className="bg-white rounded-2xl border border-slate-200 p-8 md:p-10"
                >
                  <h2 className="text-xl font-bold text-slate-900 mb-8">
                    Request a Quote or Ask a Question
                  </h2>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label
                        htmlFor="name"
                        className="block text-sm font-medium text-slate-700 mb-1.5"
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
                        className="w-full px-4 py-3 text-sm border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent bg-slate-50 text-slate-900 placeholder:text-slate-400 transition-all"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="email"
                        className="block text-sm font-medium text-slate-700 mb-1.5"
                      >
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
                        className="w-full px-4 py-3 text-sm border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent bg-slate-50 text-slate-900 placeholder:text-slate-400 transition-all"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="company"
                        className="block text-sm font-medium text-slate-700 mb-1.5"
                      >
                        Company
                      </label>
                      <input
                        id="company"
                        name="company"
                        type="text"
                        value={form.company}
                        onChange={handleChange}
                        placeholder="Acme Fabrication Inc."
                        className="w-full px-4 py-3 text-sm border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent bg-slate-50 text-slate-900 placeholder:text-slate-400 transition-all"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="phone"
                        className="block text-sm font-medium text-slate-700 mb-1.5"
                      >
                        Phone Number
                      </label>
                      <input
                        id="phone"
                        name="phone"
                        type="tel"
                        value={form.phone}
                        onChange={handleChange}
                        placeholder="+1 (555) 000-0000"
                        className="w-full px-4 py-3 text-sm border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent bg-slate-50 text-slate-900 placeholder:text-slate-400 transition-all"
                      />
                    </div>
                    <div className="sm:col-span-2">
                      <label
                        htmlFor="productInterest"
                        className="block text-sm font-medium text-slate-700 mb-1.5"
                      >
                        Product Interest
                      </label>
                      <select
                        id="productInterest"
                        name="productInterest"
                        value={form.productInterest}
                        onChange={handleChange}
                        className="w-full px-4 py-3 text-sm border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent bg-slate-50 text-slate-900 transition-all"
                      >
                        <option value="">Select a product...</option>
                        <option value="double-folding-machine">
                          Double Folding Machine (AM-DF2500)
                        </option>
                        <option value="sheet-metal-folder">
                          Sheet Metal Folder (AM-SMF1500)
                        </option>
                        <option value="metal-folding-machine">
                          Metal Folding Machine (AM-MF3200)
                        </option>
                        <option value="metal-folder">
                          Metal Folder (AM-MF1000)
                        </option>
                        <option value="multiple">
                          Multiple Products / Custom Solution
                        </option>
                        <option value="other">Other / General Inquiry</option>
                      </select>
                    </div>
                    <div className="sm:col-span-2">
                      <label
                        htmlFor="message"
                        className="block text-sm font-medium text-slate-700 mb-1.5"
                      >
                        Message *
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        rows={5}
                        required
                        value={form.message}
                        onChange={handleChange}
                        placeholder="Tell us about your production requirements, material types, and desired capacity..."
                        className="w-full px-4 py-3 text-sm border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent bg-slate-50 text-slate-900 placeholder:text-slate-400 transition-all resize-none"
                      />
                    </div>
                  </div>
                  <button
                    type="submit"
                    disabled={submitting}
                    className="mt-8 w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 text-base font-semibold text-white bg-slate-900 rounded-xl hover:bg-amber-500 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {submitting ? (
                      'Sending...'
                    ) : (
                      <>
                        Send Inquiry
                        <Send className="w-4 h-4" />
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>

            {/* Sidebar */}
            <div className="space-y-8">
              <div className="bg-slate-900 rounded-2xl p-8 text-white">
                <h3 className="text-lg font-bold mb-6">Contact Information</h3>
                <div className="space-y-5">
                  {CONTACT_INFO.map((item, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <item.icon className="w-5 h-5 text-amber-500 mt-0.5 flex-shrink-0" />
                      <div>
                        <p className="text-xs text-slate-400 mb-0.5">
                          {item.label}
                        </p>
                        <p className="text-sm font-medium">{item.value}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-amber-50 rounded-2xl p-8 border border-amber-100">
                <h3 className="text-lg font-bold text-slate-900 mb-3">
                  Why Contact Us?
                </h3>
                <ul className="space-y-3">
                  {[
                    'Free consultation with an engineer',
                    'Custom machine configurations',
                    'On-site demos available',
                    'Financing options for qualified buyers',
                    'Global shipping & installation',
                  ].map((item, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-2 text-sm text-slate-600"
                    >
                      <CheckCircle className="w-4 h-4 text-amber-500 mt-0.5 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
