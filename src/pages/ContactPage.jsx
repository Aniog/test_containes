import React, { useState } from 'react'
import { Mail, Phone, MapPin, Clock, Send, CheckCircle, AlertCircle } from 'lucide-react'

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    product: '',
    quantity: '',
    targetPrice: '',
    message: '',
  })
  const [status, setStatus] = useState('idle')
  const [error, setError] = useState(null)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const validate = () => {
    if (!formData.name.trim()) return 'Name is required'
    if (!formData.email.trim()) return 'Email is required'
    if (!/^\S+@\S+\.\S+$/.test(formData.email)) return 'Please provide a valid email address'
    if (!formData.product.trim()) return 'Product description is required'
    if (!formData.message.trim()) return 'Please provide additional details'
    return null
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setError(null)

    const validationError = validate()
    if (validationError) {
      setError(validationError)
      return
    }

    setStatus('submitting')

    // Simulate form submission
    try {
      await new Promise((resolve) => setTimeout(resolve, 1500))
      setStatus('success')
      setFormData({
        name: '',
        email: '',
        company: '',
        phone: '',
        product: '',
        quantity: '',
        targetPrice: '',
        message: '',
      })
    } catch (err) {
      setError('Failed to submit. Please try again or email us directly.')
      setStatus('error')
    }
  }

  return (
    <div>
      {/* Hero */}
      <section className="bg-[#1a2744] py-16 md:py-24">
        <div className="container-custom">
          <div className="max-w-3xl">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
              Get a Free Sourcing Quote
            </h1>
            <p className="text-lg text-gray-300 leading-relaxed">
              Tell us what you need and we will respond within 24 hours with a detailed sourcing plan and transparent pricing.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form + Info */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
            {/* Form */}
            <div className="lg:col-span-2">
              <h2 className="text-xl font-bold text-[#1a2744] mb-6">Sourcing Inquiry Form</h2>

              {status === 'success' ? (
                <div className="card bg-[#38a169]/5 border-[#38a169]/20">
                  <div className="flex items-start gap-3">
                    <CheckCircle size={24} className="text-[#38a169] flex-shrink-0 mt-0.5" />
                    <div>
                      <h3 className="text-lg font-semibold text-[#1a2744] mb-2">Inquiry Submitted Successfully</h3>
                      <p className="text-[#4a5568] text-sm leading-relaxed">
                        Thank you for your inquiry. Our team will review your requirements and respond within 24 hours.
                      </p>
                      <button
                        className="mt-4 text-[#d4a843] text-sm font-semibold"
                        onClick={() => setStatus('idle')}
                      >
                        Submit another inquiry
                      </button>
                    </div>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label htmlFor="name" className="label-field">Full Name *</label>
                      <input
                        id="name"
                        name="name"
                        type="text"
                        value={formData.name}
                        onChange={handleChange}
                        className="input-field"
                        placeholder="Your name"
                        required
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="label-field">Email Address *</label>
                      <input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="input-field"
                        placeholder="you@company.com"
                        required
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label htmlFor="company" className="label-field">Company Name</label>
                      <input
                        id="company"
                        name="company"
                        type="text"
                        value={formData.company}
                        onChange={handleChange}
                        className="input-field"
                        placeholder="Your company"
                      />
                    </div>
                    <div>
                      <label htmlFor="phone" className="label-field">Phone Number</label>
                      <input
                        id="phone"
                        name="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={handleChange}
                        className="input-field"
                        placeholder="+1 234 567 8900"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="product" className="label-field">Product Description *</label>
                    <input
                      id="product"
                      name="product"
                      type="text"
                      value={formData.product}
                      onChange={handleChange}
                      className="input-field"
                      placeholder="What product are you looking to source?"
                      required
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label htmlFor="quantity" className="label-field">Estimated Quantity</label>
                      <input
                        id="quantity"
                        name="quantity"
                        type="text"
                        value={formData.quantity}
                        onChange={handleChange}
                        className="input-field"
                        placeholder="e.g., 5,000 units"
                      />
                    </div>
                    <div>
                      <label htmlFor="targetPrice" className="label-field">Target Price (per unit)</label>
                      <input
                        id="targetPrice"
                        name="targetPrice"
                        type="text"
                        value={formData.targetPrice}
                        onChange={handleChange}
                        className="input-field"
                        placeholder="e.g., $5.00 USD"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="message" className="label-field">Additional Details *</label>
                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      value={formData.message}
                      onChange={handleChange}
                      className="input-field resize-none"
                      placeholder="Please provide any additional details: specifications, materials, certifications required, timeline, shipping destination, etc."
                      required
                    />
                  </div>

                  {error && (
                    <div className="flex items-center gap-2 text-[#e53e3e] text-sm">
                      <AlertCircle size={16} className="flex-shrink-0" />
                      <span>{error}</span>
                    </div>
                  )}

                  <button
                    type="submit"
                    disabled={status === 'submitting'}
                    className="btn-primary w-full sm:w-auto"
                  >
                    {status === 'submitting' ? (
                      <>Submitting...</>
                    ) : (
                      <>
                        Submit Inquiry
                        <Send size={16} className="ml-2" />
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>

            {/* Contact Info */}
            <div className="lg:col-span-1">
              <div className="card bg-[#f5f7fa] border-[#e2e8f0]">
                <h3 className="text-lg font-semibold text-[#1a2744] mb-6">Contact Information</h3>

                <div className="space-y-5">
                  <div className="flex items-start gap-3">
                    <Mail size={18} className="text-[#d4a843] mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="text-sm font-medium text-[#1a2744]">Email</p>
                      <a href="mailto:info@ssourcingchina.com" className="text-sm text-[#4a5568] hover:text-[#1a2744] transition-colors">
                        info@ssourcingchina.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Phone size={18} className="text-[#d4a843] mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="text-sm font-medium text-[#1a2744]">Phone / WhatsApp</p>
                      <a href="tel:+8675588888888" className="text-sm text-[#4a5568] hover:text-[#1a2744] transition-colors">
                        +86 755 8888 8888
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <MapPin size={18} className="text-[#d4a843] mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="text-sm font-medium text-[#1a2744]">Office</p>
                      <p className="text-sm text-[#4a5568]">
                        Shenzhen, Guangdong<br />
                        China
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Clock size={18} className="text-[#d4a843] mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="text-sm font-medium text-[#1a2744]">Business Hours</p>
                      <p className="text-sm text-[#4a5568]">
                        Monday - Friday: 9:00 - 18:00 (CST)<br />
                        Saturday: 9:00 - 13:00 (CST)
                      </p>
                    </div>
                  </div>
                </div>

                <div className="mt-8 pt-6 border-t border-[#e2e8f0]">
                  <h4 className="text-sm font-semibold text-[#1a2744] mb-3">What Happens Next?</h4>
                  <ol className="space-y-2 text-sm text-[#4a5568]">
                    <li className="flex items-start gap-2">
                      <span className="w-5 h-5 bg-[#d4a843]/20 text-[#d4a843] rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0">1</span>
                      <span>We review your inquiry within 24 hours</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-5 h-5 bg-[#d4a843]/20 text-[#d4a843] rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0">2</span>
                      <span>We send a free sourcing quote with pricing</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-5 h-5 bg-[#d4a843]/20 text-[#d4a843] rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0">3</span>
                      <span>A dedicated project manager is assigned to you</span>
                    </li>
                  </ol>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
