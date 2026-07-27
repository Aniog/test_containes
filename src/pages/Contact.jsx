import { useState, useEffect, useRef } from 'react'
import { Phone, Mail, MapPin, Clock, Send, CheckCircle } from 'lucide-react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'

const contactInfo = [
  {
    icon: MapPin,
    title: 'Our Office',
    lines: ['Room 1208, Building A', 'No. 88 Huaihai Road', 'Shanghai 200021, China'],
  },
  {
    icon: Phone,
    title: 'Phone',
    lines: ['+86 139 1234 5678', '+86 21 1234 5678'],
  },
  {
    icon: Mail,
    title: 'Email',
    lines: ['info@ssourcingchina.com', 'support@ssourcingchina.com'],
  },
  {
    icon: Clock,
    title: 'Business Hours',
    lines: ['Monday - Friday', '9:00 AM - 6:00 PM (CST)', 'UTC+8'],
  },
]

export default function Contact() {
  const containerRef = useRef(null)
  const [form, setForm] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    product: '',
    quantity: '',
    message: '',
  })
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    window.scrollTo(0, 0)
    const frameId = requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, containerRef.current)
    })
    return () => cancelAnimationFrame(frameId)
  }, [])

  const handleChange = (e) => {
    const { name, value } = e.target
    setForm((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
      setSubmitted(true)
    }, 1200)
  }

  return (
    <div ref={containerRef}>
      <section className="bg-gradient-to-br from-navy-900 via-navy-800 to-navy-900 py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-brand-400 font-semibold text-sm uppercase tracking-wider mb-4">
            Contact Us
          </p>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Get a Free Sourcing Quote
          </h1>
          <p className="mt-4 text-navy-200 text-lg max-w-2xl mx-auto">
            Tell us about your product and requirements. Our team will respond within 24 hours with a free assessment.
          </p>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              {submitted ? (
                <div className="bg-green-50 rounded-xl p-10 text-center">
                  <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-6" />
                  <h2 className="text-2xl font-bold text-navy-900 mb-3">Thank You for Your Inquiry</h2>
                  <p className="text-navy-500 leading-relaxed max-w-md mx-auto">
                    We have received your sourcing request. One of our specialists will get back to you within 24 hours with a preliminary assessment and a free quote.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="bg-white rounded-xl border border-gray-100 p-6 md:p-8">
                  <h2 className="text-xl font-bold text-navy-900 mb-6">Send Us Your Sourcing Requirements</h2>

                  <div className="grid sm:grid-cols-2 gap-4 mb-4">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-navy-700 mb-1.5">
                        Your Name *
                      </label>
                      <input
                        id="name"
                        name="name"
                        type="text"
                        required
                        value={form.name}
                        onChange={handleChange}
                        className="w-full rounded-lg border border-gray-200 px-4 py-2.5 text-sm text-navy-900 placeholder-navy-400 focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent transition"
                        placeholder="John Smith"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-navy-700 mb-1.5">
                        Email Address *
                      </label>
                      <input
                        id="email"
                        name="email"
                        type="email"
                        required
                        value={form.email}
                        onChange={handleChange}
                        className="w-full rounded-lg border border-gray-200 px-4 py-2.5 text-sm text-navy-900 placeholder-navy-400 focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent transition"
                        placeholder="john@company.com"
                      />
                    </div>
                    <div>
                      <label htmlFor="company" className="block text-sm font-medium text-navy-700 mb-1.5">
                        Company Name
                      </label>
                      <input
                        id="company"
                        name="company"
                        type="text"
                        value={form.company}
                        onChange={handleChange}
                        className="w-full rounded-lg border border-gray-200 px-4 py-2.5 text-sm text-navy-900 placeholder-navy-400 focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent transition"
                        placeholder="Your Company Ltd."
                      />
                    </div>
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-navy-700 mb-1.5">
                        Phone Number
                      </label>
                      <input
                        id="phone"
                        name="phone"
                        type="tel"
                        value={form.phone}
                        onChange={handleChange}
                        className="w-full rounded-lg border border-gray-200 px-4 py-2.5 text-sm text-navy-900 placeholder-navy-400 focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent transition"
                        placeholder="+1 234 567 890"
                      />
                    </div>
                    <div>
                      <label htmlFor="product" className="block text-sm font-medium text-navy-700 mb-1.5">
                        Product You Need *
                      </label>
                      <input
                        id="product"
                        name="product"
                        type="text"
                        required
                        value={form.product}
                        onChange={handleChange}
                        className="w-full rounded-lg border border-gray-200 px-4 py-2.5 text-sm text-navy-900 placeholder-navy-400 focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent transition"
                        placeholder="e.g., LED light fixtures"
                      />
                    </div>
                    <div>
                      <label htmlFor="quantity" className="block text-sm font-medium text-navy-700 mb-1.5">
                        Estimated Order Quantity
                      </label>
                      <input
                        id="quantity"
                        name="quantity"
                        type="text"
                        value={form.quantity}
                        onChange={handleChange}
                        className="w-full rounded-lg border border-gray-200 px-4 py-2.5 text-sm text-navy-900 placeholder-navy-400 focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent transition"
                        placeholder="e.g., 1,000 units"
                      />
                    </div>
                  </div>

                  <div className="mb-6">
                    <label htmlFor="message" className="block text-sm font-medium text-navy-700 mb-1.5">
                      Additional Details
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      value={form.message}
                      onChange={handleChange}
                      className="w-full rounded-lg border border-gray-200 px-4 py-2.5 text-sm text-navy-900 placeholder-navy-400 focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent transition resize-none"
                      placeholder="Tell us more about your requirements, target price, delivery timeline, certifications needed, etc."
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full flex items-center justify-center gap-2 rounded-lg bg-brand-600 px-6 py-3.5 text-base font-semibold text-white hover:bg-brand-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {loading ? (
                      'Sending...'
                    ) : (
                      <>
                        Submit Inquiry
                        <Send className="w-4 h-4" />
                      </>
                    )}
                  </button>
                  <p className="text-xs text-navy-400 text-center mt-4">
                    We respect your privacy. Your information will never be shared with third parties.
                  </p>
                </form>
              )}
            </div>

            <div>
              <div className="space-y-6 mb-8">
                {contactInfo.map((item) => {
                  const Icon = item.icon
                  return (
                    <div key={item.title} className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-lg bg-brand-50 flex items-center justify-center shrink-0">
                        <Icon className="w-5 h-5 text-brand-600" />
                      </div>
                      <div>
                        <h3 className="text-sm font-semibold text-navy-900 mb-1">{item.title}</h3>
                        {item.lines.map((line, i) => (
                          <p key={i} className="text-sm text-navy-500">{line}</p>
                        ))}
                      </div>
                    </div>
                  )
                })}
              </div>

              <div className="rounded-xl overflow-hidden bg-gray-100 aspect-[4/3]">
                <img
                  alt="SSourcing China office location Shanghai"
                  data-strk-img-id="contact-office-img-a8c2d4"
                  data-strk-img="Shanghai office building professional business China"
                  data-strk-img-ratio="4x3"
                  data-strk-img-width="500"
                  className="w-full h-full object-cover"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}