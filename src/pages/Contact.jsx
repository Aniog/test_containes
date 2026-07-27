import { useState } from 'react'
import { Link } from 'react-router-dom'
import {
  Mail, Phone, MapPin, Clock, Send, CheckCircle2,
  Building2, Globe,
} from 'lucide-react'

const contactInfo = [
  { icon: Mail, label: 'Email', value: 'info@ssourcingchina.com', href: 'mailto:info@ssourcingchina.com' },
  { icon: Phone, label: 'Phone', value: '+86 755 1234 5678', href: 'tel:+8675512345678' },
  { icon: MapPin, label: 'Office', value: 'Shenzhen, Guangdong, China' },
  { icon: Clock, label: 'Hours', value: 'Mon-Fri, 9:00 AM - 6:00 PM (CST)' },
]

const productInterests = [
  'Electronics & Gadgets',
  'Industrial Equipment',
  'Consumer Goods',
  'Textiles & Apparel',
  'Furniture & Home',
  'Auto Parts & Hardware',
  'Not sure yet / Other',
]

const serviceInterests = [
  'Supplier Sourcing',
  'Factory Verification',
  'Quality Inspection',
  'Shipping & Logistics',
  'Full Service Package',
  'Not sure yet',
]

export default function Contact() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    productCategory: '',
    serviceInterest: '',
    orderQuantity: '',
    targetPrice: '',
    message: '',
  })
  const [submitted, setSubmitted] = useState(false)
  const [status, setStatus] = useState('idle')

  const handleChange = (e) => {
    const { name, value } = e.target
    setForm((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setStatus('submitting')

    // Simulate submission
    setTimeout(() => {
      setStatus('success')
      setSubmitted(true)
    }, 1000)
  }

  return (
    <div>
      {/* Hero */}
      <section className="bg-navy text-white py-16 md:py-24">
        <div className="container-main">
          <div className="max-w-3xl">
            <span className="text-sm font-semibold text-gold uppercase tracking-wider">Contact Us</span>
            <h1 className="mt-4 text-4xl md:text-5xl font-bold leading-tight">Get a Free Sourcing Quote</h1>
            <p className="mt-4 text-lg text-slate-300 leading-relaxed">
              Tell us about your product and requirements. We'll analyze your needs and get back to you within 24 hours with a tailored sourcing plan.
            </p>
          </div>
        </div>
      </section>

      {/* Form + Info */}
      <section className="section-padding">
        <div className="container-main">
          <div className="grid lg:grid-cols-3 gap-10">
            {/* Contact Info Sidebar */}
            <div className="lg:col-span-1">
              <div className="space-y-6">
                <div>
                  <h2 className="text-xl font-bold text-navy">Contact Information</h2>
                  <p className="mt-2 text-sm text-slate-600">Reach out directly or use the inquiry form.</p>
                </div>

                <div className="space-y-4">
                  {contactInfo.map((item) => (
                    <div key={item.label} className="flex items-start gap-3">
                      <div className="bg-navy/5 p-2 rounded-lg">
                        <item.icon className="w-5 h-5 text-navy" />
                      </div>
                      <div>
                        <p className="text-xs text-slate-500 font-medium">{item.label}</p>
                        {item.href ? (
                          <a href={item.href} className="text-sm text-navy font-medium hover:text-accent-blue transition-colors">
                            {item.value}
                          </a>
                        ) : (
                          <p className="text-sm text-navy font-medium">{item.value}</p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>

                <div className="bg-[#f7f8fa] rounded-xl p-6 border border-gray-200">
                  <h3 className="font-semibold text-navy flex items-center gap-2">
                    <Globe className="w-4 h-4 text-gold" />
                    Why Work With Us?
                  </h3>
                  <ul className="mt-3 space-y-2">
                    {[
                      'Free initial consultation',
                      'Response within 24 hours',
                      'No upfront fees',
                      'English & Chinese speaking team',
                      'Based in Shenzhen, China',
                    ].map((item) => (
                      <li key={item} className="flex items-start gap-2 text-sm text-slate-600">
                        <CheckCircle2 className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {/* Inquiry Form */}
            <div className="lg:col-span-2">
              {submitted ? (
                <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-10 text-center">
                  <div className="w-16 h-16 bg-green-50 rounded-full flex items-center justify-center mx-auto mb-6">
                    <CheckCircle2 className="w-8 h-8 text-green-500" />
                  </div>
                  <h2 className="text-2xl font-bold text-navy">Thank You for Your Inquiry!</h2>
                  <p className="mt-3 text-slate-600 max-w-md mx-auto">
                    We've received your sourcing request and will review it carefully. One of our sourcing specialists will get back to you within 24 hours.
                  </p>
                  <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
                    <Link
                      to="/"
                      className="bg-navy hover:bg-navy/90 text-white font-semibold px-6 py-3 rounded-lg transition-colors"
                    >
                      Back to Home
                    </Link>
                    <Link
                      to="/services"
                      className="border-2 border-navy text-navy hover:bg-navy hover:text-white font-semibold px-6 py-3 rounded-lg transition-colors"
                    >
                      Explore Services
                    </Link>
                  </div>
                </div>
              ) : (
                <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 md:p-10">
                  <h2 className="text-2xl font-bold text-navy mb-2">Sourcing Inquiry Form</h2>
                  <p className="text-sm text-slate-500 mb-8">Fill in the details below and we'll get back to you within 24 hours.</p>

                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-1.5">
                          Full Name *
                        </label>
                        <input
                          id="name"
                          name="name"
                          type="text"
                          required
                          value={form.name}
                          onChange={handleChange}
                          className="w-full px-4 py-2.5 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-navy focus:border-transparent"
                          placeholder="John Smith"
                        />
                      </div>
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-1.5">
                          Email Address *
                        </label>
                        <input
                          id="email"
                          name="email"
                          type="email"
                          required
                          value={form.email}
                          onChange={handleChange}
                          className="w-full px-4 py-2.5 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-navy focus:border-transparent"
                          placeholder="john@company.com"
                        />
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="phone" className="block text-sm font-medium text-slate-700 mb-1.5">
                          Phone Number
                        </label>
                        <input
                          id="phone"
                          name="phone"
                          type="tel"
                          value={form.phone}
                          onChange={handleChange}
                          className="w-full px-4 py-2.5 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-navy focus:border-transparent"
                          placeholder="+1 555 123 4567"
                        />
                      </div>
                      <div>
                        <label htmlFor="company" className="block text-sm font-medium text-slate-700 mb-1.5">
                          Company Name
                        </label>
                        <input
                          id="company"
                          name="company"
                          type="text"
                          value={form.company}
                          onChange={handleChange}
                          className="w-full px-4 py-2.5 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-navy focus:border-transparent"
                          placeholder="Acme Inc."
                        />
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="productCategory" className="block text-sm font-medium text-slate-700 mb-1.5">
                          Product Category *
                        </label>
                        <select
                          id="productCategory"
                          name="productCategory"
                          required
                          value={form.productCategory}
                          onChange={handleChange}
                          className="w-full px-4 py-2.5 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-navy focus:border-transparent bg-white"
                        >
                          <option value="">Select product category</option>
                          {productInterests.map((p) => (
                            <option key={p} value={p}>{p}</option>
                          ))}
                        </select>
                      </div>
                      <div>
                        <label htmlFor="serviceInterest" className="block text-sm font-medium text-slate-700 mb-1.5">
                          Service Needed *
                        </label>
                        <select
                          id="serviceInterest"
                          name="serviceInterest"
                          required
                          value={form.serviceInterest}
                          onChange={handleChange}
                          className="w-full px-4 py-2.5 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-navy focus:border-transparent bg-white"
                        >
                          <option value="">Select service</option>
                          {serviceInterests.map((s) => (
                            <option key={s} value={s}>{s}</option>
                          ))}
                        </select>
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="orderQuantity" className="block text-sm font-medium text-slate-700 mb-1.5">
                          Estimated Order Quantity
                        </label>
                        <input
                          id="orderQuantity"
                          name="orderQuantity"
                          type="text"
                          value={form.orderQuantity}
                          onChange={handleChange}
                          className="w-full px-4 py-2.5 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-navy focus:border-transparent"
                          placeholder="e.g., 1,000 units"
                        />
                      </div>
                      <div>
                        <label htmlFor="targetPrice" className="block text-sm font-medium text-slate-700 mb-1.5">
                          Target Price per Unit (USD)
                        </label>
                        <input
                          id="targetPrice"
                          name="targetPrice"
                          type="text"
                          value={form.targetPrice}
                          onChange={handleChange}
                          className="w-full px-4 py-2.5 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-navy focus:border-transparent"
                          placeholder="e.g., $5-10"
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-1.5">
                        Product Details & Requirements *
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        rows={5}
                        required
                        value={form.message}
                        onChange={handleChange}
                        className="w-full px-4 py-2.5 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-navy focus:border-transparent resize-y"
                        placeholder="Please describe your product in detail: materials, dimensions, specifications, certifications needed, target market, etc. The more detail you provide, the better we can help."
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={status === 'submitting'}
                      className="w-full sm:w-auto bg-gold hover:bg-gold-hover text-white font-semibold px-8 py-3.5 rounded-lg transition-colors inline-flex items-center justify-center gap-2 disabled:opacity-70"
                    >
                      {status === 'submitting' ? (
                        <>Sending...</>
                      ) : (
                        <>
                          <Send className="w-5 h-5" /> Submit Sourcing Inquiry
                        </>
                      )}
                    </button>

                    <p className="text-xs text-slate-400">
                      By submitting this form, you agree to our privacy policy. We'll never share your information with third parties.
                    </p>
                  </form>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
