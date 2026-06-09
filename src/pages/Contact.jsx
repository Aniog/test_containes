import { useState } from 'react'
import { Phone, Mail, MapPin, Clock, Send, CheckCircle2, Globe, Shield, FileText } from 'lucide-react'

const productCategories = [
  'Home & Kitchen',
  'Electronics',
  'Apparel & Textiles',
  'Toys & Gifts',
  'Hardware & Tools',
  'Sports & Outdoor',
  'Beauty & Personal Care',
  'Medical & Health',
  'Automotive',
  'Pet Supplies',
  'Food & Beverage',
  'Other / Not Listed',
]

const initialForm = {
  name: '',
  email: '',
  phone: '',
  company: '',
  country: '',
  productCategory: '',
  productDescription: '',
  orderVolume: '',
  timeline: '',
  message: '',
}

export default function Contact() {
  const [form, setForm] = useState(initialForm)
  const [status, setStatus] = useState('idle')
  const [error, setError] = useState(null)

  const handleChange = (e) => {
    const { name, value } = e.target
    setForm((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setError(null)

    if (!form.name.trim()) { setError('Please enter your name.'); return }
    if (!form.email.trim()) { setError('Please enter your email.'); return }
    if (!/^\S+@\S+\.\S+$/.test(form.email)) { setError('Please enter a valid email address.'); return }
    if (!form.productDescription.trim()) { setError('Please describe what you want to source.'); return }

    setStatus('submitting')
    
    // Simulate form submission
    setTimeout(() => {
      setStatus('success')
      setForm(initialForm)
    }, 1500)
  }

  return (
    <div>
      {/* Hero */}
      <section className="bg-gradient-to-br from-brand-900 via-brand-800 to-brand-700 text-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-gold-400 font-semibold text-sm tracking-wide uppercase mb-4">Contact Us</p>
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
              Get a Free Sourcing Quote
            </h1>
            <p className="text-xl text-brand-200 leading-relaxed">
              Tell us what you need. We'll get back to you within 24 hours with a customized plan and quote.
            </p>
          </div>
        </div>
      </section>

      {/* Form Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Form */}
            <div className="lg:col-span-2">
              {status === 'success' ? (
                <div className="bg-green-50 border border-green-200 rounded-2xl p-10 text-center">
                  <CheckCircle2 className="w-16 h-16 text-green-500 mx-auto mb-4" />
                  <h2 className="text-2xl font-bold text-slate-900 mb-2">Thank You for Your Inquiry</h2>
                  <p className="text-lg text-slate-600 mb-6">
                    We've received your sourcing request. Our team will review your requirements and get back to you within 24 hours with a customized plan.
                  </p>
                  <p className="text-sm text-slate-500">
                    For urgent inquiries, call us at <strong className="text-slate-700">+86 138 0000 0000</strong>
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} noValidate className="space-y-6">
                  <p className="text-sm text-slate-500">
                    Fields marked with <span className="text-red-500">*</span> are required.
                  </p>

                  <div className="grid sm:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-semibold text-slate-700 mb-1.5">
                        Full Name <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={form.name}
                        onChange={handleChange}
                        className="w-full border border-gray-300 rounded-lg px-4 py-3 text-slate-800 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-brand-500 transition"
                        placeholder="John Smith"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-semibold text-slate-700 mb-1.5">
                        Email Address <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={form.email}
                        onChange={handleChange}
                        className="w-full border border-gray-300 rounded-lg px-4 py-3 text-slate-800 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-brand-500 transition"
                        placeholder="john@company.com"
                      />
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="phone" className="block text-sm font-semibold text-slate-700 mb-1.5">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={form.phone}
                        onChange={handleChange}
                        className="w-full border border-gray-300 rounded-lg px-4 py-3 text-slate-800 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-brand-500 transition"
                        placeholder="+1 (555) 000-0000"
                      />
                    </div>
                    <div>
                      <label htmlFor="company" className="block text-sm font-semibold text-slate-700 mb-1.5">
                        Company Name
                      </label>
                      <input
                        type="text"
                        id="company"
                        name="company"
                        value={form.company}
                        onChange={handleChange}
                        className="w-full border border-gray-300 rounded-lg px-4 py-3 text-slate-800 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-brand-500 transition"
                        placeholder="Your Company Ltd."
                      />
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="country" className="block text-sm font-semibold text-slate-700 mb-1.5">
                        Your Country
                      </label>
                      <input
                        type="text"
                        id="country"
                        name="country"
                        value={form.country}
                        onChange={handleChange}
                        className="w-full border border-gray-300 rounded-lg px-4 py-3 text-slate-800 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-brand-500 transition"
                        placeholder="e.g., United Kingdom"
                      />
                    </div>
                    <div>
                      <label htmlFor="productCategory" className="block text-sm font-semibold text-slate-700 mb-1.5">
                        Product Category
                      </label>
                      <select
                        id="productCategory"
                        name="productCategory"
                        value={form.productCategory}
                        onChange={handleChange}
                        className="w-full border border-gray-300 rounded-lg px-4 py-3 text-slate-800 focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-brand-500 transition bg-white"
                      >
                        <option value="">Select a category...</option>
                        {productCategories.map((cat) => (
                          <option key={cat} value={cat}>{cat}</option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div>
                    <label htmlFor="productDescription" className="block text-sm font-semibold text-slate-700 mb-1.5">
                      Product Description <span className="text-red-500">*</span>
                    </label>
                    <textarea
                      id="productDescription"
                      name="productDescription"
                      rows={3}
                      value={form.productDescription}
                      onChange={handleChange}
                      className="w-full border border-gray-300 rounded-lg px-4 py-3 text-slate-800 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-brand-500 transition"
                      placeholder="Describe the product you want to source: type, materials, specifications, target price range..."
                    />
                  </div>

                  <div className="grid sm:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="orderVolume" className="block text-sm font-semibold text-slate-700 mb-1.5">
                        Estimated Order Volume
                      </label>
                      <input
                        type="text"
                        id="orderVolume"
                        name="orderVolume"
                        value={form.orderVolume}
                        onChange={handleChange}
                        className="w-full border border-gray-300 rounded-lg px-4 py-3 text-slate-800 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-brand-500 transition"
                        placeholder="e.g., 1,000 units per order"
                      />
                    </div>
                    <div>
                      <label htmlFor="timeline" className="block text-sm font-semibold text-slate-700 mb-1.5">
                        Expected Timeline
                      </label>
                      <input
                        type="text"
                        id="timeline"
                        name="timeline"
                        value={form.timeline}
                        onChange={handleChange}
                        className="w-full border border-gray-300 rounded-lg px-4 py-3 text-slate-800 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-brand-500 transition"
                        placeholder="e.g., within 3 months"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-semibold text-slate-700 mb-1.5">
                      Additional Information
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      value={form.message}
                      onChange={handleChange}
                      className="w-full border border-gray-300 rounded-lg px-4 py-3 text-slate-800 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-brand-500 transition"
                      placeholder="Any specific requirements, certifications needed, target markets, or questions you have..."
                    />
                  </div>

                  {error && (
                    <div className="bg-red-50 text-red-700 border border-red-200 rounded-lg px-4 py-3 text-sm" role="alert">
                      {error}
                    </div>
                  )}

                  <button
                    type="submit"
                    disabled={status === 'submitting'}
                    className="inline-flex items-center justify-center gap-2 bg-gold-500 hover:bg-gold-600 disabled:bg-gold-300 text-white font-semibold px-8 py-4 rounded-lg transition-colors text-lg w-full sm:w-auto"
                  >
                    {status === 'submitting' ? (
                      <>
                        <span className="animate-spin w-5 h-5 border-2 border-white border-t-transparent rounded-full" />
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send className="w-5 h-5" />
                        Send Inquiry
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>

            {/* Sidebar */}
            <div className="space-y-8">
              <div className="bg-brand-50 rounded-xl p-6 border border-brand-100">
                <h2 className="text-lg font-bold text-slate-900 mb-6">Contact Information</h2>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <Phone className="w-5 h-5 text-brand-600 mt-0.5 shrink-0" />
                    <div>
                      <p className="text-sm font-semibold text-slate-800">Phone</p>
                      <a href="tel:+8613800000000" className="text-sm text-brand-600 hover:text-brand-700">+86 138 0000 0000</a>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <Mail className="w-5 h-5 text-brand-600 mt-0.5 shrink-0" />
                    <div>
                      <p className="text-sm font-semibold text-slate-800">Email</p>
                      <a href="mailto:info@ssourcingchina.com" className="text-sm text-brand-600 hover:text-brand-700">info@ssourcingchina.com</a>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-brand-600 mt-0.5 shrink-0" />
                    <div>
                      <p className="text-sm font-semibold text-slate-800">Office</p>
                      <p className="text-sm text-slate-600">Shenzhen, Guangdong, China</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <Clock className="w-5 h-5 text-brand-600 mt-0.5 shrink-0" />
                    <div>
                      <p className="text-sm font-semibold text-slate-800">Business Hours</p>
                      <p className="text-sm text-slate-600">Mon – Sat, 9:00 – 18:00 (CST)</p>
                    </div>
                  </li>
                </ul>
              </div>

              <div className="bg-white rounded-xl p-6 border border-gray-100 shadow-sm">
                <h3 className="font-bold text-slate-900 mb-4">Why Work With Us</h3>
                <ul className="space-y-3">
                  {[
                    { icon: Shield, text: 'Factory-verified suppliers only' },
                    { icon: Globe, text: 'Serving buyers from 35+ countries' },
                    { icon: FileText, text: 'Free initial consultation & quote' },
                    { icon: CheckCircle2, text: 'No upfront commitment required' },
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-2.5">
                      <item.icon className="w-4 h-4 text-gold-500 mt-0.5 shrink-0" />
                      <span className="text-sm text-slate-600">{item.text}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-brand-700 text-white rounded-xl p-6">
                <h3 className="font-bold mb-2">Response Time</h3>
                <p className="text-sm text-brand-200 leading-relaxed">
                  We typically respond within 24 hours. For urgent inquiries, please call us directly.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
