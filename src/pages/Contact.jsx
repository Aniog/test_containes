import { useState } from 'react'
import { Phone, Mail, MapPin, Clock, Send, CheckCircle } from 'lucide-react'

const contactInfo = [
  { icon: Phone, label: 'Phone / WhatsApp', value: '+86 138 1234 5678', href: 'tel:+8613812345678' },
  { icon: Mail, label: 'Email', value: 'info@ssourcingchina.com', href: 'mailto:info@ssourcingchina.com' },
  { icon: MapPin, label: 'Office Address', value: 'Shenzhen, Guangdong, China' },
  { icon: Clock, label: 'Business Hours', value: 'Mon - Fri, 9:00 AM - 6:00 PM (GMT+8)' },
]

export default function Contact() {
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

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Contact form submitted:', form)
    setSubmitted(true)
  }

  return (
    <div>
      {/* Hero */}
      <section className="bg-brand-900 py-16 md:py-20">
        <div className="section-container text-center">
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">Get a Free Sourcing Quote</h1>
          <p className="text-lg text-neutral-300 max-w-2xl mx-auto">
            Tell us about your product requirements and we&apos;ll get back to you within 24 hours with a tailored sourcing plan.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="section-container">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Contact Info */}
            <div className="lg:col-span-1">
              <h2 className="text-xl font-bold text-neutral-900 mb-6">Contact Information</h2>
              <div className="space-y-5">
                {contactInfo.map((item) => (
                  <div key={item.label} className="flex gap-3">
                    <div className="w-10 h-10 bg-brand-50 rounded-lg flex items-center justify-center flex-shrink-0">
                      <item.icon className="w-5 h-5 text-brand-500" />
                    </div>
                    <div>
                      <p className="text-xs font-medium text-neutral-400 uppercase">{item.label}</p>
                      {item.href ? (
                        <a href={item.href} className="text-sm font-medium text-neutral-900 hover:text-brand-500 transition-colors">
                          {item.value}
                        </a>
                      ) : (
                        <p className="text-sm font-medium text-neutral-900">{item.value}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              {/* Why Choose Us */}
              <div className="mt-10 p-6 bg-brand-50 rounded-xl border border-brand-100">
                <h3 className="text-sm font-bold text-brand-600 mb-3">Why Contact Us?</h3>
                <ul className="space-y-2">
                  {[
                    'Response within 24 hours',
                    'Free initial consultation',
                    'No obligation quote',
                    'Confidential handling',
                    'Dedicated account manager',
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm text-neutral-600">
                      <CheckCircle className="w-4 h-4 text-brand-500 mt-0.5 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Form */}
            <div className="lg:col-span-2">
              {submitted ? (
                <div className="bg-brand-50 border border-brand-200 rounded-xl p-10 text-center">
                  <div className="w-16 h-16 bg-brand-500 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Send className="w-8 h-8 text-white" />
                  </div>
                  <h2 className="text-2xl font-bold text-neutral-900 mb-3">Thank You for Your Inquiry</h2>
                  <p className="text-neutral-500 mb-6 max-w-md mx-auto">
                    We have received your sourcing request. Our team will review your requirements and get back to you within 24 hours.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center text-sm text-neutral-500">
                    <span className="flex items-center gap-2">
                      <Phone className="w-4 h-4 text-brand-500" /> +86 138 1234 5678
                    </span>
                    <span className="flex items-center gap-2">
                      <Mail className="w-4 h-4 text-brand-500" /> info@ssourcingchina.com
                    </span>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="bg-neutral-50 border border-neutral-200 rounded-xl p-6 md:p-8">
                  <h2 className="text-xl font-bold text-neutral-900 mb-1">Send Us Your Requirements</h2>
                  <p className="text-sm text-neutral-500 mb-6">Fill out the form below and we&apos;ll respond within one business day.</p>

                  <div className="grid sm:grid-cols-2 gap-4 mb-4">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-neutral-700 mb-1.5">
                        Full Name *
                      </label>
                      <input
                        id="name"
                        name="name"
                        type="text"
                        required
                        value={form.name}
                        onChange={handleChange}
                        className="w-full border border-neutral-300 rounded-lg px-4 py-2.5 text-sm text-neutral-900 placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-brand-500 bg-white"
                        placeholder="John Smith"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-neutral-700 mb-1.5">
                        Email Address *
                      </label>
                      <input
                        id="email"
                        name="email"
                        type="email"
                        required
                        value={form.email}
                        onChange={handleChange}
                        className="w-full border border-neutral-300 rounded-lg px-4 py-2.5 text-sm text-neutral-900 placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-brand-500 bg-white"
                        placeholder="john@company.com"
                      />
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4 mb-4">
                    <div>
                      <label htmlFor="company" className="block text-sm font-medium text-neutral-700 mb-1.5">
                        Company Name
                      </label>
                      <input
                        id="company"
                        name="company"
                        type="text"
                        value={form.company}
                        onChange={handleChange}
                        className="w-full border border-neutral-300 rounded-lg px-4 py-2.5 text-sm text-neutral-900 placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-brand-500 bg-white"
                        placeholder="ABC Corp"
                      />
                    </div>
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-neutral-700 mb-1.5">
                        Phone / WhatsApp
                      </label>
                      <input
                        id="phone"
                        name="phone"
                        type="tel"
                        value={form.phone}
                        onChange={handleChange}
                        className="w-full border border-neutral-300 rounded-lg px-4 py-2.5 text-sm text-neutral-900 placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-brand-500 bg-white"
                        placeholder="+1 555 1234"
                      />
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4 mb-4">
                    <div>
                      <label htmlFor="product" className="block text-sm font-medium text-neutral-700 mb-1.5">
                        Product Description *
                      </label>
                      <input
                        id="product"
                        name="product"
                        type="text"
                        required
                        value={form.product}
                        onChange={handleChange}
                        className="w-full border border-neutral-300 rounded-lg px-4 py-2.5 text-sm text-neutral-900 placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-brand-500 bg-white"
                        placeholder="e.g., Stainless steel bolts M10"
                      />
                    </div>
                    <div>
                      <label htmlFor="quantity" className="block text-sm font-medium text-neutral-700 mb-1.5">
                        Estimated Order Quantity
                      </label>
                      <input
                        id="quantity"
                        name="quantity"
                        type="text"
                        value={form.quantity}
                        onChange={handleChange}
                        className="w-full border border-neutral-300 rounded-lg px-4 py-2.5 text-sm text-neutral-900 placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-brand-500 bg-white"
                        placeholder="e.g., 10,000 pcs/month"
                      />
                    </div>
                  </div>

                  <div className="mb-6">
                    <label htmlFor="message" className="block text-sm font-medium text-neutral-700 mb-1.5">
                      Additional Details
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      value={form.message}
                      onChange={handleChange}
                      className="w-full border border-neutral-300 rounded-lg px-4 py-2.5 text-sm text-neutral-900 placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-brand-500 bg-white resize-none"
                      placeholder="Tell us about your requirements: specifications, target price, timeline, quality standards, or any other details that will help us prepare your quote..."
                    />
                  </div>

                  <button type="submit" className="btn-primary w-full sm:w-auto text-base px-8 py-3">
                    Submit Inquiry
                  </button>

                  <p className="text-xs text-neutral-400 mt-4">
                    By submitting this form, you agree to our privacy policy. We will never share your information with third parties.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}