import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Mail, Phone, MapPin, Clock, Send, CheckCircle } from 'lucide-react'

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
      <section className="bg-slate-900 py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="text-blue-400 font-semibold text-sm uppercase tracking-wide">Contact Us</span>
            <h1 className="text-3xl md:text-5xl font-bold text-white mt-3 tracking-tight">
              Get a Free Sourcing Quote
            </h1>
            <p className="text-slate-300 text-lg mt-4 leading-relaxed">
              Tell us what you're looking for and our team will respond with a tailored sourcing proposal within 24 hours.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <h2 className="text-2xl font-bold text-slate-900 mb-6">Sourcing Inquiry Form</h2>

              {status === 'success' ? (
                <div className="bg-green-50 border border-green-200 rounded-xl p-8 text-center">
                  <CheckCircle className="w-12 h-12 text-green-500 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-slate-900 mb-2">Inquiry Submitted Successfully</h3>
                  <p className="text-slate-500">
                    Thank you for your inquiry. Our sourcing team will review your requirements and respond within 24 hours.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-slate-900 mb-1.5">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-slate-200 rounded-lg text-sm text-slate-900 placeholder-text-500 focus:outline-none focus:ring-2 focus:ring-blue-600/20 focus:border-blue-600"
                        placeholder="Your full name"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-slate-900 mb-1.5">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-slate-200 rounded-lg text-sm text-slate-900 placeholder-text-500 focus:outline-none focus:ring-2 focus:ring-blue-600/20 focus:border-blue-600"
                        placeholder="you@company.com"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div>
                      <label htmlFor="company" className="block text-sm font-medium text-slate-900 mb-1.5">
                        Company Name
                      </label>
                      <input
                        type="text"
                        id="company"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-slate-200 rounded-lg text-sm text-slate-900 placeholder-text-500 focus:outline-none focus:ring-2 focus:ring-blue-600/20 focus:border-blue-600"
                        placeholder="Your company"
                      />
                    </div>
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-slate-900 mb-1.5">
                        Phone / WhatsApp
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-slate-200 rounded-lg text-sm text-slate-900 placeholder-text-500 focus:outline-none focus:ring-2 focus:ring-blue-600/20 focus:border-blue-600"
                        placeholder="+1 234 567 8900"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div>
                      <label htmlFor="product" className="block text-sm font-medium text-slate-900 mb-1.5">
                        Product Description *
                      </label>
                      <input
                        type="text"
                        id="product"
                        name="product"
                        required
                        value={formData.product}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-slate-200 rounded-lg text-sm text-slate-900 placeholder-text-500 focus:outline-none focus:ring-2 focus:ring-blue-600/20 focus:border-blue-600"
                        placeholder="e.g., LED panel lights, 600x600mm"
                      />
                    </div>
                    <div>
                      <label htmlFor="quantity" className="block text-sm font-medium text-slate-900 mb-1.5">
                        Estimated Quantity
                      </label>
                      <input
                        type="text"
                        id="quantity"
                        name="quantity"
                        value={formData.quantity}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-slate-200 rounded-lg text-sm text-slate-900 placeholder-text-500 focus:outline-none focus:ring-2 focus:ring-blue-600/20 focus:border-blue-600"
                        placeholder="e.g., 5,000 units"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-slate-900 mb-1.5">
                      Additional Details
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-slate-200 rounded-lg text-sm text-slate-900 placeholder-text-500 focus:outline-none focus:ring-2 focus:ring-blue-600/20 focus:border-blue-600 resize-none"
                      placeholder="Tell us more about your requirements: specifications, target price, certifications needed, timeline, etc."
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={status === 'submitting'}
                    className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 disabled:bg-blue-600/50 text-white font-semibold px-8 py-3.5 rounded-lg transition-colors"
                  >
                    <Send className="w-4 h-4" />
                    {status === 'submitting' ? 'Submitting...' : 'Submit Inquiry'}
                  </button>
                </form>
              )}
            </div>

            <div className="space-y-6">
              <div className="bg-slate-50 rounded-xl p-6 border border-slate-200">
                <h3 className="text-lg font-semibold text-slate-900 mb-4">Contact Information</h3>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <Mail className="w-5 h-5 text-blue-600 mt-0.5 shrink-0" />
                    <div>
                      <p className="text-sm font-medium text-slate-900">Email</p>
                      <p className="text-sm text-slate-500">info@ssourcingchina.com</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <Phone className="w-5 h-5 text-blue-600 mt-0.5 shrink-0" />
                    <div>
                      <p className="text-sm font-medium text-slate-900">Phone / WhatsApp</p>
                      <p className="text-sm text-slate-500">+86 138 0000 0000</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-blue-600 mt-0.5 shrink-0" />
                    <div>
                      <p className="text-sm font-medium text-slate-900">Office</p>
                      <p className="text-sm text-slate-500">Guangzhou, Guangdong, China</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <Clock className="w-5 h-5 text-blue-600 mt-0.5 shrink-0" />
                    <div>
                      <p className="text-sm font-medium text-slate-900">Response Time</p>
                      <p className="text-sm text-slate-500">Within 24 hours (Mon–Sat)</p>
                    </div>
                  </li>
                </ul>
              </div>

              <div className="bg-slate-50 rounded-xl p-6 border border-slate-200">
                <h3 className="text-lg font-semibold text-slate-900 mb-3">What Happens Next?</h3>
                <ol className="space-y-3">
                  <li className="flex items-start gap-3">
                    <span className="w-6 h-6 bg-blue-600 text-white text-xs font-bold rounded-full flex items-center justify-center shrink-0 mt-0.5">1</span>
                    <p className="text-sm text-slate-500">We review your requirements and research potential suppliers.</p>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-6 h-6 bg-blue-600 text-white text-xs font-bold rounded-full flex items-center justify-center shrink-0 mt-0.5">2</span>
                    <p className="text-sm text-slate-500">You receive a sourcing proposal with supplier options and pricing.</p>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-6 h-6 bg-blue-600 text-white text-xs font-bold rounded-full flex items-center justify-center shrink-0 mt-0.5">3</span>
                    <p className="text-sm text-slate-500">We proceed with verification, sampling, and production upon your approval.</p>
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
