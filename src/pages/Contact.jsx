import { useState } from 'react'
import { Send, CheckCircle, AlertCircle, MapPin, Phone, Mail, Clock } from 'lucide-react'

export default function Contact() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    product: '',
    quantity: '',
    message: '',
  })
  const [status, setStatus] = useState('idle')
  const [error, setError] = useState(null)

  const onChange = (e) => {
    const { name, value } = e.target
    setForm((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setError(null)
    if (!form.name.trim() || !form.email.trim() || !form.product.trim()) {
      setError('Please fill in required fields: name, email, and product description.')
      return
    }
    if (!/^\S+@\S+\.\S+$/.test(form.email)) {
      setError('Please provide a valid business email address.')
      return
    }
    setStatus('submitting')
    setTimeout(() => {
      setStatus('success')
      setForm({ name: '', email: '', phone: '', company: '', product: '', quantity: '', message: '' })
    }, 1500)
  }

  const contactInfo = [
    { icon: MapPin, label: 'Office Address', value: 'Room 1208, International Trade Center, Shenzhen, Guangdong, China' },
    { icon: Mail, label: 'Email', value: 'info@ssourcingchina.com' },
    { icon: Phone, label: 'Phone', value: '+86 755 8888 8888' },
    { icon: Clock, label: 'Business Hours', value: 'Mon - Fri, 9:00 AM - 6:00 PM (CST / UTC+8)' },
  ]

  return (
    <div>
      {/* Hero */}
      <section className="bg-brand-navy py-20 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold text-white tracking-tight mb-4">
            Get a Free Sourcing Quote
          </h1>
          <p className="text-lg text-brand-gray-400 max-w-2xl mx-auto">
            Tell us about your project and we will respond within 24 hours with a preliminary assessment.
          </p>
        </div>
      </section>

      {/* Main content */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Contact info sidebar */}
            <div className="lg:col-span-1">
              <h2 className="text-xl font-bold text-brand-navy mb-6">Contact Information</h2>
              <div className="space-y-6 mb-8">
                {contactInfo.map((item) => (
                  <div key={item.label} className="flex gap-3">
                    <item.icon className="w-5 h-5 text-brand-blue shrink-0 mt-0.5" />
                    <div>
                      <p className="text-sm font-semibold text-brand-navy">{item.label}</p>
                      <p className="text-sm text-brand-gray-600">{item.value}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="bg-brand-gray-50 border border-brand-gray-200 rounded-xl p-6">
                <h3 className="text-sm font-semibold text-brand-navy mb-3">What Happens Next?</h3>
                <ol className="space-y-3 text-sm text-brand-gray-600">
                  <li className="flex gap-3">
                    <span className="font-bold text-brand-blue shrink-0">1.</span>
                    <span>We review your inquiry within 24 hours</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="font-bold text-brand-blue shrink-0">2.</span>
                    <span>We schedule a call to discuss requirements in detail</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="font-bold text-brand-blue shrink-0">3.</span>
                    <span>We provide a preliminary supplier assessment and quote</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="font-bold text-brand-blue shrink-0">4.</span>
                    <span>You decide — no commitment required</span>
                  </li>
                </ol>
              </div>
            </div>

            {/* Form */}
            <div className="lg:col-span-2">
              <form onSubmit={handleSubmit} className="bg-white border border-brand-gray-200 rounded-xl p-6 md:p-8 space-y-5">
                <h2 className="text-xl font-bold text-brand-navy">Submit Your Sourcing Inquiry</h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-brand-gray-700 mb-1.5">
                      Full Name *
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      value={form.name}
                      onChange={onChange}
                      required
                      className="w-full px-4 py-2.5 border border-brand-gray-300 rounded-lg text-sm bg-brand-gray-50 focus:ring-2 focus:ring-brand-blue focus:border-brand-blue outline-none transition"
                      placeholder="John Smith"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-brand-gray-700 mb-1.5">
                      Business Email *
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      value={form.email}
                      onChange={onChange}
                      required
                      className="w-full px-4 py-2.5 border border-brand-gray-300 rounded-lg text-sm bg-brand-gray-50 focus:ring-2 focus:ring-brand-blue focus:border-brand-blue outline-none transition"
                      placeholder="john@company.com"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-brand-gray-700 mb-1.5">
                      Phone (optional)
                    </label>
                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={form.phone}
                      onChange={onChange}
                      className="w-full px-4 py-2.5 border border-brand-gray-300 rounded-lg text-sm bg-brand-gray-50 focus:ring-2 focus:ring-brand-blue focus:border-brand-blue outline-none transition"
                      placeholder="+1 555 0123"
                    />
                  </div>
                  <div>
                    <label htmlFor="company" className="block text-sm font-medium text-brand-gray-700 mb-1.5">
                      Company Name
                    </label>
                    <input
                      id="company"
                      name="company"
                      type="text"
                      value={form.company}
                      onChange={onChange}
                      className="w-full px-4 py-2.5 border border-brand-gray-300 rounded-lg text-sm bg-brand-gray-50 focus:ring-2 focus:ring-brand-blue focus:border-brand-blue outline-none transition"
                      placeholder="Your Company Ltd."
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="product" className="block text-sm font-medium text-brand-gray-700 mb-1.5">
                      Product Description *
                    </label>
                    <input
                      id="product"
                      name="product"
                      type="text"
                      value={form.product}
                      onChange={onChange}
                      required
                      className="w-full px-4 py-2.5 border border-brand-gray-300 rounded-lg text-sm bg-brand-gray-50 focus:ring-2 focus:ring-brand-blue focus:border-brand-blue outline-none transition"
                      placeholder="Describe the product you need"
                    />
                  </div>
                  <div>
                    <label htmlFor="quantity" className="block text-sm font-medium text-brand-gray-700 mb-1.5">
                      Estimated Order Quantity
                    </label>
                    <input
                      id="quantity"
                      name="quantity"
                      type="text"
                      value={form.quantity}
                      onChange={onChange}
                      className="w-full px-4 py-2.5 border border-brand-gray-300 rounded-lg text-sm bg-brand-gray-50 focus:ring-2 focus:ring-brand-blue focus:border-brand-blue outline-none transition"
                      placeholder="e.g., 1,000 units"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-brand-gray-700 mb-1.5">
                    Additional Details
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    value={form.message}
                    onChange={onChange}
                    className="w-full px-4 py-2.5 border border-brand-gray-300 rounded-lg text-sm bg-brand-gray-50 focus:ring-2 focus:ring-brand-blue focus:border-brand-blue outline-none transition resize-none"
                    placeholder="Target price, certifications needed, destination port, timeline, or any other relevant information..."
                  />
                </div>

                {error && (
                  <div className="flex items-center gap-2 text-sm text-red-700 bg-red-50 rounded-lg px-4 py-3">
                    <AlertCircle className="w-4 h-4 shrink-0" />
                    {error}
                  </div>
                )}

                {status === 'success' && (
                  <div className="flex items-center gap-2 text-sm text-green-700 bg-green-50 rounded-lg px-4 py-3">
                    <CheckCircle className="w-4 h-4 shrink-0" />
                    Thank you for your inquiry! We will review your requirements and get back to you within 24 hours.
                  </div>
                )}

                <button
                  type="submit"
                  disabled={status === 'submitting'}
                  className="w-full flex items-center justify-center gap-2 px-6 py-3.5 bg-brand-blue text-white font-semibold rounded-lg hover:bg-brand-lightblue disabled:opacity-60 transition-colors text-base"
                >
                  {status === 'submitting' ? (
                    'Sending...'
                  ) : (
                    <>
                      Submit Inquiry
                      <Send className="w-4 h-4" />
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
