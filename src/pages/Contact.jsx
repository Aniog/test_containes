import { useState, useEffect, useRef } from 'react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import {
  Mail, Phone, MapPin, Clock, Send, ArrowRight,
  MessageSquare, Globe, CheckCircle
} from 'lucide-react'

const contactInfo = [
  {
    icon: Mail,
    title: 'Email Us',
    details: ['info@ssourcingchina.com', 'sales@ssourcingchina.com'],
    action: 'mailto:info@ssourcingchina.com',
  },
  {
    icon: Phone,
    title: 'Call Us',
    details: ['+86-21-1234-5678', '+86-138-1234-5678'],
    action: 'tel:+86-21-1234-5678',
  },
  {
    icon: MapPin,
    title: 'Visit Us',
    details: ['123 Sourcing Tower', 'Pudong, Shanghai, China'],
    action: null,
  },
  {
    icon: Clock,
    title: 'Working Hours',
    details: ['Mon-Fri: 9:00 AM - 6:00 PM (CST)', 'Response within 24 hours'],
    action: null,
  },
]

const productCategories = [
  'Electronics & Technology',
  'Textiles & Apparel',
  'Home & Garden',
  'Industrial & Tools',
  'Beauty & Health',
  'Custom Manufacturing',
  'Other',
]

const Contact = () => {
  const containerRef = useRef(null)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    productCategory: '',
    productDescription: '',
    quantity: '',
    targetPrice: '',
    timeline: '',
    additionalInfo: '',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  useEffect(() => {
    if (containerRef.current) {
      return ImageHelper.loadImages(strkImgConfig, containerRef.current)
    }
  }, [])

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false)
      setIsSubmitted(true)
      console.log('Form submitted:', formData)
    }, 1500)
  }

  return (
    <div ref={containerRef}>
      {/* Hero */}
      <section className="bg-gradient-to-br from-brand-800 to-brand-950 section-padding text-center">
        <div className="container-max">
          <span className="inline-block px-4 py-1 bg-brand-700 text-brand-200 text-sm font-medium rounded-full mb-4">
            Get In Touch
          </span>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Contact Us
          </h1>
          <p className="text-lg text-brand-200 max-w-2xl mx-auto">
            Ready to source products from China? Get in touch with our team for a free consultation
            and sourcing quote.
          </p>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {contactInfo.map((info, index) => {
              const Icon = info.icon
              return (
                <div key={index} className="bg-white rounded-xl border border-slate-200 p-6 text-center hover:shadow-md transition-shadow">
                  <div className="w-12 h-12 bg-brand-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon size={24} className="text-brand-600" />
                  </div>
                  <h3 className="font-semibold text-slate-900 mb-2">{info.title}</h3>
                  {info.details.map((detail, i) => (
                    <p key={i} className="text-slate-600 text-sm">
                      {info.action ? (
                        <a href={info.action} className="hover:text-brand-600 transition-colors">
                          {detail}
                        </a>
                      ) : detail}
                    </p>
                  ))}
                </div>
              )
            })}
          </div>

          {/* Form Section */}
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Form */}
            <div>
              <h2 className="text-2xl font-bold text-slate-900 mb-2">Get a Free Sourcing Quote</h2>
              <p className="text-slate-600 mb-8">
                Fill out the form below with your product requirements. Our team will review your
                inquiry and respond within 24 hours with a detailed proposal.
              </p>

              {isSubmitted ? (
                <div className="bg-green-50 rounded-xl p-8 text-center">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <CheckCircle size={32} className="text-green-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-slate-900 mb-2">Thank You!</h3>
                  <p className="text-slate-600 mb-4">
                    Your inquiry has been submitted successfully. Our team will review your requirements
                    and get back to you within 24 hours.
                  </p>
                  <button
                    onClick={() => {
                      setIsSubmitted(false)
                      setFormData({
                        name: '',
                        email: '',
                        company: '',
                        phone: '',
                        productCategory: '',
                        productDescription: '',
                        quantity: '',
                        targetPrice: '',
                        timeline: '',
                        additionalInfo: '',
                      })
                    }}
                    className="btn-primary"
                  >
                    Submit Another Inquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Contact Info */}
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-1">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent"
                        placeholder="John Smith"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-1">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent"
                        placeholder="john@company.com"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-1">
                        Company Name
                      </label>
                      <input
                        type="text"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent"
                        placeholder="Your Company Ltd."
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-1">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent"
                        placeholder="+1 234 567 890"
                      />
                    </div>
                  </div>

                  {/* Product Info */}
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1">
                      Product Category *
                    </label>
                    <select
                      name="productCategory"
                      value={formData.productCategory}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent"
                    >
                      <option value="">Select a category</option>
                      {productCategories.map((cat) => (
                        <option key={cat} value={cat}>{cat}</option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1">
                      Product Description *
                    </label>
                    <textarea
                      name="productDescription"
                      value={formData.productDescription}
                      onChange={handleChange}
                      required
                      rows={4}
                      className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent"
                      placeholder="Describe the products you want to source, including specifications, materials, dimensions, etc."
                    />
                  </div>

                  <div className="grid md:grid-cols-3 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-1">
                        Quantity
                      </label>
                      <input
                        type="text"
                        name="quantity"
                        value={formData.quantity}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent"
                        placeholder="e.g., 1,000 units"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-1">
                        Target Price
                      </label>
                      <input
                        type="text"
                        name="targetPrice"
                        value={formData.targetPrice}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent"
                        placeholder="e.g., $5-10 per unit"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-1">
                        Timeline
                      </label>
                      <input
                        type="text"
                        name="timeline"
                        value={formData.timeline}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent"
                        placeholder="e.g., 8 weeks"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1">
                      Additional Information
                    </label>
                    <textarea
                      name="additionalInfo"
                      value={formData.additionalInfo}
                      onChange={handleChange}
                      rows={3}
                      className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent"
                      placeholder="Any additional requirements, certifications needed, shipping preferences, etc."
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="btn-accent w-full gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                        Submitting...
                      </>
                    ) : (
                      <>
                        <Send size={18} />
                        Submit Inquiry
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>

            {/* Right Side Info */}
            <div>
              {/* Map Placeholder */}
              <div className="bg-slate-100 rounded-xl h-64 mb-8 flex items-center justify-center">
                <div className="text-center">
                  <MapPin size={48} className="text-slate-400 mx-auto mb-2" />
                  <p className="text-slate-500">Shanghai, China</p>
                </div>
              </div>

              {/* Why Contact Us */}
              <div className="bg-brand-50 rounded-xl p-8">
                <h3 className="text-xl font-semibold text-slate-900 mb-4">Why Contact Us?</h3>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <CheckCircle size={20} className="text-green-500 flex-shrink-0 mt-0.5" />
                    <div>
                      <div className="font-medium text-slate-900">Free Consultation</div>
                      <div className="text-sm text-slate-600">No-obligation discussion of your sourcing needs</div>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle size={20} className="text-green-500 flex-shrink-0 mt-0.5" />
                    <div>
                      <div className="font-medium text-slate-900">24-Hour Response</div>
                      <div className="text-sm text-slate-600">We respond to all inquiries within one business day</div>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle size={20} className="text-green-500 flex-shrink-0 mt-0.5" />
                    <div>
                      <div className="font-medium text-slate-900">Detailed Proposal</div>
                      <div className="text-sm text-slate-600">Comprehensive quote with supplier options and timelines</div>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle size={20} className="text-green-500 flex-shrink-0 mt-0.5" />
                    <div>
                      <div className="font-medium text-slate-900">No Hidden Fees</div>
                      <div className="text-sm text-slate-600">Transparent pricing with clear cost breakdowns</div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Contact
