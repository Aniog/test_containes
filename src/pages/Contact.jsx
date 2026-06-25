import { useState } from 'react'
import { Mail, Phone, MapPin, Clock, Send } from 'lucide-react'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    product: '',
    quantity: '',
    message: '',
  })
  const [status, setStatus] = useState('idle')

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setStatus('submitting')
    // Simulate submission
    setTimeout(() => {
      setStatus('success')
      setFormData({ name: '', email: '', company: '', phone: '', product: '', quantity: '', message: '' })
    }, 1500)
  }

  return (
    <div>
      <section className="bg-navy py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-accent font-semibold text-sm uppercase tracking-wider mb-3">Get In Touch</p>
            <h1 className="text-3xl md:text-5xl font-bold text-white tracking-tight mb-4">
              Get a Free Sourcing Quote
            </h1>
            <p className="text-white/70 text-lg">
              Tell us what you're looking for. We'll respond within 24 hours with a sourcing plan, supplier recommendations, and pricing estimate.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <h2 className="text-2xl font-bold text-slate-900 mb-6">Sourcing Inquiry Form</h2>

              {status === 'success' ? (
                <div className="bg-green-50 border border-green-200 rounded-xl p-8 text-center">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Send className="w-7 h-7 text-green-600" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-2">Inquiry Submitted!</h3>
                  <p className="text-slate-600">Thank you for your inquiry. Our sourcing team will review your requirements and respond within 24 hours.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-1.5">Full Name *</label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-slate-300 rounded-lg text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-navy/20 focus:border-navy"
                        placeholder="Your full name"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-1.5">Email Address *</label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-slate-300 rounded-lg text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-navy/20 focus:border-navy"
                        placeholder="you@company.com"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div>
                      <label htmlFor="company" className="block text-sm font-medium text-slate-700 mb-1.5">Company Name</label>
                      <input
                        type="text"
                        id="company"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-slate-300 rounded-lg text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-navy/20 focus:border-navy"
                        placeholder="Your company"
                      />
                    </div>
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-slate-700 mb-1.5">Phone / WhatsApp</label>
                      <input
                        type="text"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-slate-300 rounded-lg text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-navy/20 focus:border-navy"
                        placeholder="+1 234 567 8900"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div>
                      <label htmlFor="product" className="block text-sm font-medium text-slate-700 mb-1.5">Product You're Looking For *</label>
                      <input
                        type="text"
                        id="product"
                        name="product"
                        required
                        value={formData.product}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-slate-300 rounded-lg text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-navy/20 focus:border-navy"
                        placeholder="e.g., LED panel lights"
                      />
                    </div>
                    <div>
                      <label htmlFor="quantity" className="block text-sm font-medium text-slate-700 mb-1.5">Estimated Quantity</label>
                      <input
                        type="text"
                        id="quantity"
                        name="quantity"
                        value={formData.quantity}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-slate-300 rounded-lg text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-navy/20 focus:border-navy"
                        placeholder="e.g., 1,000 units"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-1.5">Project Details *</label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={5}
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-slate-300 rounded-lg text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-navy/20 focus:border-navy resize-y"
                      placeholder="Describe your product requirements, specifications, target price, timeline, and any other relevant details..."
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={status === 'submitting'}
                    className="w-full md:w-auto px-8 py-3.5 bg-accent text-white font-semibold rounded-lg hover:bg-accent-hover transition-colors disabled:opacity-60 disabled:cursor-not-allowed border-none text-base cursor-pointer"
                  >
                    {status === 'submitting' ? 'Submitting...' : 'Submit Sourcing Inquiry'}
                  </button>
                </form>
              )}
            </div>

            <div className="space-y-8">
              <div>
                <h3 className="text-lg font-bold text-slate-900 mb-4">Contact Information</h3>
                <ul className="space-y-4 list-none p-0 m-0">
                  <li className="flex items-start gap-3">
                    <Mail className="w-5 h-5 text-navy mt-0.5 shrink-0" />
                    <div>
                      <p className="text-sm font-medium text-slate-900 m-0">Email</p>
                      <p className="text-sm text-slate-600 m-0">info@ssourcingchina.com</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <Phone className="w-5 h-5 text-navy mt-0.5 shrink-0" />
                    <div>
                      <p className="text-sm font-medium text-slate-900 m-0">Phone / WhatsApp</p>
                      <p className="text-sm text-slate-600 m-0">+86 138 0000 0000</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-navy mt-0.5 shrink-0" />
                    <div>
                      <p className="text-sm font-medium text-slate-900 m-0">Office</p>
                      <p className="text-sm text-slate-600 m-0">Guangzhou, Guangdong, China</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <Clock className="w-5 h-5 text-navy mt-0.5 shrink-0" />
                    <div>
                      <p className="text-sm font-medium text-slate-900 m-0">Response Time</p>
                      <p className="text-sm text-slate-600 m-0">Within 24 hours (Mon-Sat)</p>
                    </div>
                  </li>
                </ul>
              </div>

              <div className="bg-surface rounded-xl p-6 border border-slate-200">
                <h4 className="font-semibold text-slate-900 mb-3">What Happens Next?</h4>
                <ol className="space-y-3 list-none p-0 m-0">
                  <li className="flex items-start gap-3 text-sm text-slate-600">
                    <span className="w-6 h-6 bg-navy text-white rounded-full flex items-center justify-center text-xs font-bold shrink-0">1</span>
                    We review your requirements within 24 hours
                  </li>
                  <li className="flex items-start gap-3 text-sm text-slate-600">
                    <span className="w-6 h-6 bg-navy text-white rounded-full flex items-center justify-center text-xs font-bold shrink-0">2</span>
                    We send you a sourcing plan with timeline and cost estimate
                  </li>
                  <li className="flex items-start gap-3 text-sm text-slate-600">
                    <span className="w-6 h-6 bg-navy text-white rounded-full flex items-center justify-center text-xs font-bold shrink-0">3</span>
                    Once approved, we begin supplier research immediately
                  </li>
                </ol>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Contact
