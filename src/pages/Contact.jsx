import { useState } from 'react'
import { Mail, Phone, MapPin, Clock, Send, CheckCircle, Linkedin } from 'lucide-react'

const initialForm = {
  name: '',
  email: '',
  company: '',
  phone: '',
  product: '',
  quantity: '',
  budget: '',
  timeline: '',
  message: '',
}

export default function Contact() {
  const [form, setForm] = useState(initialForm)
  const [status, setStatus] = useState('idle')

  const handleChange = (e) => {
    const { name, value } = e.target
    setForm((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setStatus('submitting')
    setTimeout(() => {
      setStatus('success')
      setForm(initialForm)
    }, 1500)
  }

  const contactInfo = [
    { icon: Mail, label: 'Email', value: 'info@ssourcingchina.com', href: 'mailto:info@ssourcingchina.com' },
    { icon: Phone, label: 'Phone', value: '+86 20 1234 5678', href: 'tel:+862012345678' },
    { icon: MapPin, label: 'Office', value: 'Guangzhou, Guangdong, China', href: null },
    { icon: Clock, label: 'Response Time', value: 'Within 24 hours on business days', href: null },
  ]

  return (
    <div>
      {/* Page Header */}
      <section className="bg-gradient-to-br from-neutral-900 to-neutral-800 py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Contact Us</h1>
          <p className="text-lg text-neutral-300 max-w-2xl mx-auto">
            Ready to start sourcing from China? Get in touch and we will respond within 24 hours.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Contact Info */}
            <div className="lg:col-span-1">
              <h2 className="text-2xl font-bold text-neutral-900 mb-6">Get in Touch</h2>
              <div className="space-y-6">
                {contactInfo.map((item) => (
                  <div key={item.label} className="flex gap-4">
                    <div className="w-10 h-10 bg-brand-50 rounded-lg flex items-center justify-center flex-shrink-0">
                      <item.icon className="w-5 h-5 text-brand-500" />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-neutral-500">{item.label}</p>
                      {item.href ? (
                        <a href={item.href} className="text-neutral-900 hover:text-brand-500 transition-colors font-medium">
                          {item.value}
                        </a>
                      ) : (
                        <p className="text-neutral-900 font-medium">{item.value}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-10 p-6 bg-neutral-50 rounded-xl border border-neutral-100">
                <h3 className="font-semibold text-neutral-900 mb-2">Prefer to send a brief first?</h3>
                <p className="text-sm text-neutral-600 mb-4">
                  Use the form and we will get back to you with a preliminary assessment and quote within 24 hours.
                </p>
                <div className="flex items-center gap-2 text-sm text-neutral-500">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  Free consultation, no obligation
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-xl shadow-sm border border-neutral-100 p-6 md:p-8">
                {status === 'success' ? (
                  <div className="text-center py-12">
                    <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <CheckCircle className="w-8 h-8 text-green-600" />
                    </div>
                    <h3 className="text-xl font-semibold text-neutral-900 mb-2">Thank You for Your Inquiry!</h3>
                    <p className="text-neutral-600 max-w-md mx-auto">
                      We have received your message and will review your requirements. A member of our team will contact you within 24 hours.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid sm:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium text-neutral-700 mb-1.5">Full Name *</label>
                        <input
                          id="name"
                          name="name"
                          type="text"
                          required
                          value={form.name}
                          onChange={handleChange}
                          className="w-full rounded-lg border border-neutral-300 px-4 py-3 text-neutral-900 placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent"
                          placeholder="Your full name"
                        />
                      </div>
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-neutral-700 mb-1.5">Email Address *</label>
                        <input
                          id="email"
                          name="email"
                          type="email"
                          required
                          value={form.email}
                          onChange={handleChange}
                          className="w-full rounded-lg border border-neutral-300 px-4 py-3 text-neutral-900 placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent"
                          placeholder="you@company.com"
                        />
                      </div>
                    </div>
                    <div className="grid sm:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="company" className="block text-sm font-medium text-neutral-700 mb-1.5">Company Name</label>
                        <input
                          id="company"
                          name="company"
                          type="text"
                          value={form.company}
                          onChange={handleChange}
                          className="w-full rounded-lg border border-neutral-300 px-4 py-3 text-neutral-900 placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent"
                          placeholder="Your company name"
                        />
                      </div>
                      <div>
                        <label htmlFor="phone" className="block text-sm font-medium text-neutral-700 mb-1.5">Phone Number</label>
                        <input
                          id="phone"
                          name="phone"
                          type="tel"
                          value={form.phone}
                          onChange={handleChange}
                          className="w-full rounded-lg border border-neutral-300 px-4 py-3 text-neutral-900 placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent"
                          placeholder="+1 (555) 000-0000"
                        />
                      </div>
                    </div>
                    <div>
                      <label htmlFor="product" className="block text-sm font-medium text-neutral-700 mb-1.5">Product to Source *</label>
                      <input
                        id="product"
                        name="product"
                        type="text"
                        required
                        value={form.product}
                        onChange={handleChange}
                        className="w-full rounded-lg border border-neutral-300 px-4 py-3 text-neutral-900 placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent"
                        placeholder="Describe the product you want to source"
                      />
                    </div>
                    <div className="grid sm:grid-cols-3 gap-6">
                      <div>
                        <label htmlFor="quantity" className="block text-sm font-medium text-neutral-700 mb-1.5">Estimated Quantity</label>
                        <input
                          id="quantity"
                          name="quantity"
                          type="text"
                          value={form.quantity}
                          onChange={handleChange}
                          className="w-full rounded-lg border border-neutral-300 px-4 py-3 text-neutral-900 placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent"
                          placeholder="E.g. 1,000 pcs"
                        />
                      </div>
                      <div>
                        <label htmlFor="budget" className="block text-sm font-medium text-neutral-700 mb-1.5">Target Budget (USD)</label>
                        <input
                          id="budget"
                          name="budget"
                          type="text"
                          value={form.budget}
                          onChange={handleChange}
                          className="w-full rounded-lg border border-neutral-300 px-4 py-3 text-neutral-900 placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent"
                          placeholder="E.g. $5,000"
                        />
                      </div>
                      <div>
                        <label htmlFor="timeline" className="block text-sm font-medium text-neutral-700 mb-1.5">Target Timeline</label>
                        <input
                          id="timeline"
                          name="timeline"
                          type="text"
                          value={form.timeline}
                          onChange={handleChange}
                          className="w-full rounded-lg border border-neutral-300 px-4 py-3 text-neutral-900 placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent"
                          placeholder="E.g. 3 months"
                        />
                      </div>
                    </div>
                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-neutral-700 mb-1.5">Additional Details</label>
                      <textarea
                        id="message"
                        name="message"
                        rows={5}
                        value={form.message}
                        onChange={handleChange}
                        className="w-full rounded-lg border border-neutral-300 px-4 py-3 text-neutral-900 placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent resize-none"
                        placeholder="Share any additional details about your requirements, specifications, or questions..."
                      />
                    </div>
                    <button
                      type="submit"
                      disabled={status === 'submitting'}
                      className="w-full flex items-center justify-center gap-2 bg-brand-500 text-white px-6 py-4 rounded-lg font-semibold text-lg hover:bg-brand-600 transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
                    >
                      {status === 'submitting' ? (
                        'Submitting...'
                      ) : (
                        <>
                          Send Inquiry <Send className="w-5 h-5" />
                        </>
                      )}
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