import React, { useState } from 'react'
import { Mail, Phone, MapPin, Clock, Send, CheckCircle, AlertCircle } from 'lucide-react'

export default function ContactPage() {
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
  const [errors, setErrors] = useState({})

  const validate = () => {
    const newErrors = {}
    if (!formData.name.trim()) newErrors.name = 'Name is required'
    if (!formData.email.trim()) newErrors.email = 'Email is required'
    else if (!/^\S+@\S+\.\S+$/.test(formData.email)) newErrors.email = 'Please enter a valid email'
    if (!formData.product.trim()) newErrors.product = 'Product description is required'
    if (!formData.message.trim()) newErrors.message = 'Message is required'
    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: null }))
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!validate()) return

    setStatus('submitting')

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500))

    setStatus('success')
    setFormData({ name: '', email: '', company: '', country: '', product: '', quantity: '', message: '' })
  }

  if (status === 'success') {
    return (
      <div className="min-h-[60vh] flex items-center justify-center bg-slate-50">
        <div className="text-center max-w-md mx-auto px-4">
          <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <CheckCircle className="w-8 h-8 text-green-600" />
          </div>
          <h2 className="text-2xl font-bold text-slate-900 mb-2">Thank You!</h2>
          <p className="text-slate-600 mb-6">
            We have received your sourcing inquiry. Our team will review your requirements and get back to you within 24 hours.
          </p>
          <button
            onClick={() => setStatus('idle')}
            className="btn-primary"
          >
            Submit Another Inquiry
          </button>
        </div>
      </div>
    )
  }

  return (
    <div>
      {/* Hero */}
      <section className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white py-16 md:py-24">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Contact Us</h1>
            <p className="text-lg text-slate-300 leading-relaxed">
              Tell us about your sourcing needs and we will get back to you with a free sourcing plan within 24 hours.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Content */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Contact Info */}
            <div className="lg:col-span-1">
              <h2 className="text-2xl font-bold text-slate-900 mb-6">Get in Touch</h2>
              <div className="space-y-6">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Mail className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-medium text-slate-900 mb-1">Email</h3>
                    <a href="mailto:info@ssourcingchina.com" className="text-sm text-slate-600 hover:text-primary transition-colors">
                      info@ssourcingchina.com
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Phone className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-medium text-slate-900 mb-1">Phone / WhatsApp</h3>
                    <a href="tel:+861234567890" className="text-sm text-slate-600 hover:text-primary transition-colors">
                      +86 123 456 7890
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-medium text-slate-900 mb-1">Office</h3>
                    <p className="text-sm text-slate-600">
                      Room 1201, Building A<br />
                      Nanshan District<br />
                      Shenzhen, Guangdong, China
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Clock className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-medium text-slate-900 mb-1">Business Hours</h3>
                    <p className="text-sm text-slate-600">
                      Monday - Friday: 9:00 AM - 6:00 PM (CST)<br />
                      Saturday: 9:00 AM - 1:00 PM (CST)
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Inquiry Form */}
            <div className="lg:col-span-2">
              <div className="bg-slate-50 rounded-xl p-6 md:p-8 border border-slate-200">
                <h2 className="text-2xl font-bold text-slate-900 mb-2">Get a Free Sourcing Quote</h2>
                <p className="text-slate-600 mb-6">
                  Fill out the form below and we will get back to you within 24 hours.
                </p>

                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-1">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className={`w-full px-4 py-2.5 rounded-lg border ${errors.name ? 'border-red-500' : 'border-slate-300'} bg-white focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors`}
                        placeholder="John Smith"
                      />
                      {errors.name && (
                        <p className="text-red-600 text-xs mt-1 flex items-center gap-1">
                          <AlertCircle className="w-3 h-3" />
                          {errors.name}
                        </p>
                      )}
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-1">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className={`w-full px-4 py-2.5 rounded-lg border ${errors.email ? 'border-red-500' : 'border-slate-300'} bg-white focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors`}
                        placeholder="john@company.com"
                      />
                      {errors.email && (
                        <p className="text-red-600 text-xs mt-1 flex items-center gap-1">
                          <AlertCircle className="w-3 h-3" />
                          {errors.email}
                        </p>
                      )}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
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
                        className="w-full px-4 py-2.5 rounded-lg border border-slate-300 bg-white focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors"
                        placeholder="Your Company Ltd."
                      />
                    </div>
                    <div>
                      <label htmlFor="country" className="block text-sm font-medium text-slate-700 mb-1">
                        Country
                      </label>
                      <input
                        type="text"
                        id="country"
                        name="country"
                        value={formData.country}
                        onChange={handleChange}
                        className="w-full px-4 py-2.5 rounded-lg border border-slate-300 bg-white focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors"
                        placeholder="United States"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="product" className="block text-sm font-medium text-slate-700 mb-1">
                      Product You Want to Source *
                    </label>
                    <input
                      type="text"
                      id="product"
                      name="product"
                      value={formData.product}
                      onChange={handleChange}
                      className={`w-full px-4 py-2.5 rounded-lg border ${errors.product ? 'border-red-500' : 'border-slate-300'} bg-white focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors`}
                      placeholder="e.g., Custom PCB boards, LED lighting, promotional items"
                    />
                    {errors.product && (
                      <p className="text-red-600 text-xs mt-1 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" />
                        {errors.product}
                      </p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="quantity" className="block text-sm font-medium text-slate-700 mb-1">
                      Estimated Order Quantity
                    </label>
                    <input
                      type="text"
                      id="quantity"
                      name="quantity"
                      value={formData.quantity}
                      onChange={handleChange}
                      className="w-full px-4 py-2.5 rounded-lg border border-slate-300 bg-white focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors"
                      placeholder="e.g., 1,000 units, 1 container, 500 pcs per month"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-1">
                      Additional Details *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={5}
                      className={`w-full px-4 py-2.5 rounded-lg border ${errors.message ? 'border-red-500' : 'border-slate-300'} bg-white focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors resize-none`}
                      placeholder="Tell us more about your requirements: specifications, target price, quality standards, timeline, etc."
                    />
                    {errors.message && (
                      <p className="text-red-600 text-xs mt-1 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" />
                        {errors.message}
                      </p>
                    )}
                  </div>

                  <button
                    type="submit"
                    disabled={status === 'submitting'}
                    className="btn-primary w-full md:w-auto"
                  >
                    {status === 'submitting' ? (
                      <>
                        <span className="animate-spin mr-2">⏳</span>
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4 mr-2" />
                        Submit Sourcing Inquiry
                      </>
                    )}
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
