import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Mail, Phone, MapPin, Clock, Send, CheckCircle2, ArrowRight } from 'lucide-react'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    country: '',
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
      setFormData({ name: '', email: '', company: '', country: '', product: '', quantity: '', message: '' })
    }, 1500)
  }

  return (
    <div>
      {/* Hero */}
      <section className="bg-primary py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold text-white tracking-tight">
              Get a Free Sourcing Quote
            </h1>
            <p className="mt-6 text-lg text-slate-200 leading-relaxed">
              Tell us what you're looking for and our team will provide a detailed sourcing plan within 24 hours. No commitment required.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form + Info */}
      <section className="bg-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Form */}
            <div className="lg:col-span-2">
              <h2 className="text-2xl font-bold text-slate-800 mb-6">
                Submit Your Sourcing Inquiry
              </h2>

              {status === 'success' ? (
                <div className="bg-green-50 border border-green-200 rounded-xl p-8 text-center">
                  <CheckCircle2 className="w-12 h-12 text-green-600 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-slate-800">Inquiry Received!</h3>
                  <p className="mt-2 text-slate-600">
                    Thank you for your inquiry. Our sourcing team will review your requirements and respond within 24 hours.
                  </p>
                  <button
                    onClick={() => setStatus('idle')}
                    className="mt-6 text-accent font-semibold hover:text-accent-hover transition-colors bg-transparent border-none cursor-pointer"
                  >
                    Submit Another Inquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-1">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="John Smith"
                        className="w-full px-4 py-3 rounded-lg border border-slate-300 text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-1">
                        Business Email *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="john@company.com"
                        className="w-full px-4 py-3 rounded-lg border border-slate-300 text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="company" className="block text-sm font-medium text-slate-700 mb-1">
                        Company Name
                      </label>
                      <input
                        type="text"
                        id="company"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        placeholder="Your Company Ltd."
                        className="w-full px-4 py-3 rounded-lg border border-slate-300 text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent"
                      />
                    </div>
                    <div>
                      <label htmlFor="country" className="block text-sm font-medium text-slate-700 mb-1">
                        Country *
                      </label>
                      <input
                        type="text"
                        id="country"
                        name="country"
                        required
                        value={formData.country}
                        onChange={handleChange}
                        placeholder="United States"
                        className="w-full px-4 py-3 rounded-lg border border-slate-300 text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="product" className="block text-sm font-medium text-slate-700 mb-1">
                        Product Description *
                      </label>
                      <input
                        type="text"
                        id="product"
                        name="product"
                        required
                        value={formData.product}
                        onChange={handleChange}
                        placeholder="e.g., USB-C cables, custom packaging"
                        className="w-full px-4 py-3 rounded-lg border border-slate-300 text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent"
                      />
                    </div>
                    <div>
                      <label htmlFor="quantity" className="block text-sm font-medium text-slate-700 mb-1">
                        Estimated Quantity
                      </label>
                      <input
                        type="text"
                        id="quantity"
                        name="quantity"
                        value={formData.quantity}
                        onChange={handleChange}
                        placeholder="e.g., 5,000 units"
                        className="w-full px-4 py-3 rounded-lg border border-slate-300 text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-1">
                      Additional Details
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell us more about your requirements — target price, quality standards, certifications needed, timeline, etc."
                      className="w-full px-4 py-3 rounded-lg border border-slate-300 text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent resize-vertical"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={status === 'submitting'}
                    className="inline-flex items-center bg-accent hover:bg-accent-hover disabled:opacity-60 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-colors border-none cursor-pointer"
                  >
                    {status === 'submitting' ? (
                      'Sending...'
                    ) : (
                      <>
                        <Send className="w-5 h-5 mr-2" />
                        Submit Inquiry
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>

            {/* Contact Info Sidebar */}
            <div className="space-y-8">
              <div className="bg-slate-50 rounded-xl p-6 border border-slate-200">
                <h3 className="text-lg font-semibold text-slate-800 mb-4">Contact Information</h3>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <Mail className="w-5 h-5 text-accent mt-0.5" />
                    <div>
                      <p className="text-sm font-medium text-slate-700">Email</p>
                      <p className="text-sm text-slate-600">info@ssourcingchina.com</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <Phone className="w-5 h-5 text-accent mt-0.5" />
                    <div>
                      <p className="text-sm font-medium text-slate-700">Phone / WhatsApp</p>
                      <p className="text-sm text-slate-600">+86 138 0000 0000</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-accent mt-0.5" />
                    <div>
                      <p className="text-sm font-medium text-slate-700">Office</p>
                      <p className="text-sm text-slate-600">Yiwu, Zhejiang, China</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <Clock className="w-5 h-5 text-accent mt-0.5" />
                    <div>
                      <p className="text-sm font-medium text-slate-700">Response Time</p>
                      <p className="text-sm text-slate-600">Within 24 hours (business days)</p>
                    </div>
                  </li>
                </ul>
              </div>

              <div className="bg-primary/5 rounded-xl p-6 border border-primary/10">
                <h3 className="text-lg font-semibold text-slate-800 mb-3">What Happens Next?</h3>
                <ol className="space-y-3 text-sm text-slate-600">
                  <li className="flex items-start gap-2">
                    <span className="w-5 h-5 bg-accent/10 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-xs font-bold text-accent">1</span>
                    </span>
                    <span>We review your requirements within 24 hours</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-5 h-5 bg-accent/10 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-xs font-bold text-accent">2</span>
                    </span>
                    <span>Our team prepares a sourcing plan and cost estimate</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-5 h-5 bg-accent/10 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-xs font-bold text-accent">3</span>
                    </span>
                    <span>We schedule a call to discuss your project in detail</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-5 h-5 bg-accent/10 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-xs font-bold text-accent">4</span>
                    </span>
                    <span>Once approved, we begin supplier research immediately</span>
                  </li>
                </ol>
              </div>

              <div className="bg-slate-50 rounded-xl p-6 border border-slate-200">
                <h3 className="text-sm font-semibold text-slate-800 mb-2">Trusted by buyers from</h3>
                <div className="flex flex-wrap gap-2">
                  {['USA', 'UK', 'Germany', 'Australia', 'Canada', 'France', 'UAE', 'Japan'].map((country) => (
                    <span key={country} className="text-xs bg-white border border-slate-200 px-2 py-1 rounded text-slate-600">
                      {country}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
