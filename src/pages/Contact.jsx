import { useState } from 'react'
import { Mail, Phone, MapPin, Clock, Send, CheckCircle, AlertCircle } from 'lucide-react'

const services = [
  'Supplier Verification',
  'Factory Audit',
  'Quality Inspection',
  'Product Development',
  'Production Monitoring',
  'Shipping & Logistics',
  'Full Sourcing Service',
  'Other',
]

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    service: '',
    product: '',
    quantity: '',
    message: '',
  })
  const [status, setStatus] = useState('idle') // idle, submitting, success, error
  const [errors, setErrors] = useState({})

  const validateForm = () => {
    const newErrors = {}
    if (!formData.name.trim()) newErrors.name = 'Name is required'
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required'
    } else if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email'
    }
    if (!formData.product.trim()) newErrors.product = 'Product description is required'
    if (!formData.message.trim()) newErrors.message = 'Message is required'
    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!validateForm()) return

    setStatus('submitting')
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1500))
    
    setStatus('success')
    setFormData({
      name: '',
      company: '',
      email: '',
      phone: '',
      service: '',
      product: '',
      quantity: '',
      message: '',
    })
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }))
    }
  }

  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-[#1E3A5F] pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Contact Us
            </h1>
            <p className="text-lg text-[#A0AEC0] max-w-2xl mx-auto">
              Ready to streamline your China sourcing? Get in touch for a free consultation and quote.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Info & Form */}
      <section className="py-20 lg:py-28 bg-[#F8FAFC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Contact Info */}
            <div className="lg:col-span-1">
              <div className="bg-white rounded-2xl p-8 shadow-md border border-[#E2E8F0]">
                <h2 className="text-2xl font-bold text-[#1E3A5F] mb-6">Get in Touch</h2>
                
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-[#1E3A5F]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Mail className="text-[#1E3A5F]" size={20} />
                    </div>
                    <div>
                      <p className="font-medium text-[#1E3A5F]">Email</p>
                      <p className="text-sm text-[#4A5568]">info@ssourcingchina.com</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-[#1E3A5F]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Phone className="text-[#1E3A5F]" size={20} />
                    </div>
                    <div>
                      <p className="font-medium text-[#1E3A5F]">Phone</p>
                      <p className="text-sm text-[#4A5568]">+86 138 0011 2233</p>
                      <p className="text-sm text-[#4A5568]">+86 20 1234 5678</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-[#1E3A5F]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <MapPin className="text-[#1E3A5F]" size={20} />
                    </div>
                    <div>
                      <p className="font-medium text-[#1E3A5F]">Office</p>
                      <p className="text-sm text-[#4A5568]">Guangzhou, China</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-[#1E3A5F]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Clock className="text-[#1E3A5F]" size={20} />
                    </div>
                    <div>
                      <p className="font-medium text-[#1E3A5F]">Business Hours</p>
                      <p className="text-sm text-[#4A5568]">Monday - Friday</p>
                      <p className="text-sm text-[#4A5568]">9:00 AM - 6:00 PM (GMT+8)</p>
                    </div>
                  </div>
                </div>

                <div className="mt-8 pt-8 border-t border-[#E2E8F0]">
                  <p className="text-sm text-[#4A5568] mb-4">We typically respond within 24 hours.</p>
                  <div className="flex gap-4">
                    <a href="#" className="text-[#4A5568] hover:text-[#1E3A5F] transition-colors">
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                      </svg>
                    </a>
                    <a href="#" className="text-[#4A5568] hover:text-[#1E3A5F] transition-colors">
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-2xl p-8 shadow-md border border-[#E2E8F0]">
                <h2 className="text-2xl font-bold text-[#1E3A5F] mb-2">Request a Quote</h2>
                <p className="text-[#4A5568] mb-8">Fill out the form below and we'll get back to you within 24 hours.</p>

                {status === 'success' && (
                  <div className="bg-[#38A169]/10 border border-[#38A169] rounded-lg p-4 mb-6 flex items-start gap-3">
                    <CheckCircle className="text-[#38A169] flex-shrink-0 mt-0.5" size={20} />
                    <div>
                      <p className="font-medium text-[#38A169]">Thank you for your inquiry!</p>
                      <p className="text-sm text-[#4A5568]">We'll review your request and get back to you within 24 hours.</p>
                    </div>
                  </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    {/* Name */}
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-[#1E3A5F] mb-2">
                        Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1E3A5F] ${
                          errors.name ? 'border-[#E53E3E]' : 'border-[#E2E8F0]'
                        }`}
                        placeholder="Your full name"
                      />
                      {errors.name && (
                        <p className="mt-1 text-sm text-[#E53E3E] flex items-center gap-1">
                          <AlertCircle size={14} /> {errors.name}
                        </p>
                      )}
                    </div>

                    {/* Company */}
                    <div>
                      <label htmlFor="company" className="block text-sm font-medium text-[#1E3A5F] mb-2">
                        Company
                      </label>
                      <input
                        type="text"
                        id="company"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-[#E2E8F0] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1E3A5F]"
                        placeholder="Your company name"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    {/* Email */}
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-[#1E3A5F] mb-2">
                        Email *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1E3A5F] ${
                          errors.email ? 'border-[#E53E3E]' : 'border-[#E2E8F0]'
                        }`}
                        placeholder="your@email.com"
                      />
                      {errors.email && (
                        <p className="mt-1 text-sm text-[#E53E3E] flex items-center gap-1">
                          <AlertCircle size={14} /> {errors.email}
                        </p>
                      )}
                    </div>

                    {/* Phone */}
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-[#1E3A5F] mb-2">
                        Phone
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-[#E2E8F0] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1E3A5F]"
                        placeholder="+1 234 567 8900"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    {/* Service */}
                    <div>
                      <label htmlFor="service" className="block text-sm font-medium text-[#1E3A5F] mb-2">
                        Service Needed
                      </label>
                      <select
                        id="service"
                        name="service"
                        value={formData.service}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-[#E2E8F0] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1E3A5F] bg-white"
                      >
                        <option value="">Select a service</option>
                        {services.map((service) => (
                          <option key={service} value={service}>{service}</option>
                        ))}
                      </select>
                    </div>

                    {/* Quantity */}
                    <div>
                      <label htmlFor="quantity" className="block text-sm font-medium text-[#1E3A5F] mb-2">
                        Estimated Quantity
                      </label>
                      <input
                        type="text"
                        id="quantity"
                        name="quantity"
                        value={formData.quantity}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-[#E2E8F0] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1E3A5F]"
                        placeholder="e.g., 10,000 units"
                      />
                    </div>
                  </div>

                  {/* Product */}
                  <div>
                    <label htmlFor="product" className="block text-sm font-medium text-[#1E3A5F] mb-2">
                      Product Description *
                    </label>
                    <input
                      type="text"
                      id="product"
                      name="product"
                      value={formData.product}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1E3A5F] ${
                        errors.product ? 'border-[#E53E3E]' : 'border-[#E2E8F0]'
                      }`}
                      placeholder="What product do you need to source?"
                    />
                    {errors.product && (
                      <p className="mt-1 text-sm text-[#E53E3E] flex items-center gap-1">
                        <AlertCircle size={14} /> {errors.product}
                      </p>
                    )}
                  </div>

                  {/* Message */}
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-[#1E3A5F] mb-2">
                      Additional Details *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      value={formData.message}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1E3A5F] ${
                        errors.message ? 'border-[#E53E3E]' : 'border-[#E2E8F0]'
                      }`}
                      placeholder="Tell us about your requirements, timeline, target price, etc."
                    />
                    {errors.message && (
                      <p className="mt-1 text-sm text-[#E53E3E] flex items-center gap-1">
                        <AlertCircle size={14} /> {errors.message}
                      </p>
                    )}
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={status === 'submitting'}
                    className="w-full flex items-center justify-center gap-2 px-8 py-4 bg-[#C9A227] text-[#1E3A5F] font-semibold rounded-lg hover:bg-[#B8911F] transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {status === 'submitting' ? (
                      <>
                        <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                        </svg>
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send size={20} />
                        Submit Inquiry
                      </>
                    )}
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="bg-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-[#F8FAFC] rounded-2xl p-8 text-center">
            <h3 className="text-xl font-semibold text-[#1E3A5F] mb-2">Based in Guangzhou, China</h3>
            <p className="text-[#4A5568]">
              Our team is strategically located in one of China's major manufacturing hubs, allowing us to efficiently serve clients worldwide.
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}