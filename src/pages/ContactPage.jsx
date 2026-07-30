import { useState } from 'react'
import { Mail, Phone, MapPin, Clock, Send } from 'lucide-react'
import CTASection from '@/components/CTASection'

const productCategories = [
  'Electronics & Components',
  'Textiles & Apparel',
  'Home & Garden',
  'Industrial & Machinery',
  'Packaging & Printing',
  'Auto Parts',
  'Health & Beauty',
  'Building Materials',
  'Consumer Goods',
  'Other',
]

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    productCategory: '',
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
    // Simulate form submission
    setTimeout(() => {
      setStatus('success')
      setFormData({ name: '', email: '', company: '', phone: '', productCategory: '', quantity: '', message: '' })
    }, 1500)
  }

  return (
    <div>
      <section className="bg-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="inline-block bg-navy/10 text-navy text-sm font-medium px-3 py-1 rounded-full mb-4">
              Contact Us
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-slate-900 tracking-tight mb-4">
              Get a Free Sourcing Quote
            </h1>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Tell us about your sourcing needs. Our team will review your requirements and provide a detailed proposal within 24 hours.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-10">
            {/* Contact Info */}
            <div className="lg:col-span-1">
              <div className="bg-navy rounded-xl p-8 text-white">
                <h3 className="text-xl font-bold mb-6">Get in Touch</h3>
                <div className="space-y-5">
                  <div className="flex items-start gap-3">
                    <Mail className="w-5 h-5 mt-0.5 shrink-0 text-slate-300" />
                    <div>
                      <div className="text-sm text-slate-300">Email</div>
                      <div className="font-medium">info@ssourcingchina.com</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Phone className="w-5 h-5 mt-0.5 shrink-0 text-slate-300" />
                    <div>
                      <div className="text-sm text-slate-300">Phone / WhatsApp</div>
                      <div className="font-medium">+86 138 0000 0000</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 mt-0.5 shrink-0 text-slate-300" />
                    <div>
                      <div className="text-sm text-slate-300">Office</div>
                      <div className="font-medium">Guangzhou, Guangdong, China</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Clock className="w-5 h-5 mt-0.5 shrink-0 text-slate-300" />
                    <div>
                      <div className="text-sm text-slate-300">Response Time</div>
                      <div className="font-medium">Within 24 hours</div>
                    </div>
                  </div>
                </div>

                <div className="mt-8 pt-6 border-t border-white/20">
                  <h4 className="font-semibold mb-3">What happens next?</h4>
                  <ol className="space-y-2 text-sm text-slate-300">
                    <li className="flex items-start gap-2">
                      <span className="bg-white/20 rounded-full w-5 h-5 flex items-center justify-center text-xs font-bold shrink-0">1</span>
                      We review your requirements
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="bg-white/20 rounded-full w-5 h-5 flex items-center justify-center text-xs font-bold shrink-0">2</span>
                      We research potential suppliers
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="bg-white/20 rounded-full w-5 h-5 flex items-center justify-center text-xs font-bold shrink-0">3</span>
                      We send you a sourcing proposal
                    </li>
                  </ol>
                </div>
              </div>
            </div>

            {/* Inquiry Form */}
            <div className="lg:col-span-2">
              <form onSubmit={handleSubmit} className="bg-white border border-slate-200 rounded-xl p-8">
                <h3 className="text-xl font-bold text-slate-900 mb-6">Sourcing Inquiry Form</h3>
                
                {status === 'success' ? (
                  <div className="text-center py-12">
                    <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Send className="w-8 h-8 text-green-600" />
                    </div>
                    <h4 className="text-xl font-bold text-slate-900 mb-2">Inquiry Submitted!</h4>
                    <p className="text-slate-600">Thank you for your inquiry. Our sourcing team will review your requirements and respond within 24 hours.</p>
                    <button
                      type="button"
                      onClick={() => setStatus('idle')}
                      className="mt-6 text-navy font-semibold hover:text-navy-light transition-colors"
                    >
                      Submit Another Inquiry
                    </button>
                  </div>
                ) : (
                  <div className="space-y-5">
                    <div className="grid sm:grid-cols-2 gap-5">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-1">Full Name *</label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-2.5 border border-slate-300 rounded-lg text-slate-900 text-sm focus:ring-2 focus:ring-navy/20 focus:border-navy outline-none transition"
                          placeholder="Your full name"
                        />
                      </div>
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-1">Email Address *</label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-2.5 border border-slate-300 rounded-lg text-slate-900 text-sm focus:ring-2 focus:ring-navy/20 focus:border-navy outline-none transition"
                          placeholder="you@company.com"
                        />
                      </div>
                    </div>

                    <div className="grid sm:grid-cols-2 gap-5">
                      <div>
                        <label htmlFor="company" className="block text-sm font-medium text-slate-700 mb-1">Company Name</label>
                        <input
                          type="text"
                          id="company"
                          name="company"
                          value={formData.company}
                          onChange={handleChange}
                          className="w-full px-4 py-2.5 border border-slate-300 rounded-lg text-slate-900 text-sm focus:ring-2 focus:ring-navy/20 focus:border-navy outline-none transition"
                          placeholder="Your company"
                        />
                      </div>
                      <div>
                        <label htmlFor="phone" className="block text-sm font-medium text-slate-700 mb-1">Phone / WhatsApp</label>
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          className="w-full px-4 py-2.5 border border-slate-300 rounded-lg text-slate-900 text-sm focus:ring-2 focus:ring-navy/20 focus:border-navy outline-none transition"
                          placeholder="+1 234 567 8900"
                        />
                      </div>
                    </div>

                    <div className="grid sm:grid-cols-2 gap-5">
                      <div>
                        <label htmlFor="productCategory" className="block text-sm font-medium text-slate-700 mb-1">Product Category *</label>
                        <select
                          id="productCategory"
                          name="productCategory"
                          value={formData.productCategory}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-2.5 border border-slate-300 rounded-lg text-slate-900 text-sm focus:ring-2 focus:ring-navy/20 focus:border-navy outline-none transition bg-white"
                        >
                          <option value="">Select a category</option>
                          {productCategories.map((cat) => (
                            <option key={cat} value={cat}>{cat}</option>
                          ))}
                        </select>
                      </div>
                      <div>
                        <label htmlFor="quantity" className="block text-sm font-medium text-slate-700 mb-1">Estimated Quantity</label>
                        <input
                          type="text"
                          id="quantity"
                          name="quantity"
                          value={formData.quantity}
                          onChange={handleChange}
                          className="w-full px-4 py-2.5 border border-slate-300 rounded-lg text-slate-900 text-sm focus:ring-2 focus:ring-navy/20 focus:border-navy outline-none transition"
                          placeholder="e.g., 1,000 units"
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-1">Product Details & Requirements *</label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows={5}
                        className="w-full px-4 py-2.5 border border-slate-300 rounded-lg text-slate-900 text-sm focus:ring-2 focus:ring-navy/20 focus:border-navy outline-none transition resize-none"
                        placeholder="Describe the product you want to source, specifications, target price, timeline, and any other requirements..."
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={status === 'submitting'}
                      className="w-full bg-orange text-white font-semibold px-6 py-3.5 rounded-lg hover:bg-orange-dark transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
                    >
                      {status === 'submitting' ? 'Submitting...' : 'Submit Sourcing Inquiry'}
                    </button>

                    <p className="text-xs text-slate-500 text-center">
                      Your information is kept confidential. We respond to all inquiries within 24 hours.
                    </p>
                  </div>
                )}
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
