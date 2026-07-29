import { useState } from 'react'
import { Link } from 'react-router-dom'
import {
  ArrowRight, Mail, Phone, MapPin, Clock, MessageSquare,
  Send, CheckCircle2, Building, Globe, Package
} from 'lucide-react'

const contactInfo = [
  {
    icon: Mail,
    title: 'Email Us',
    details: ['info@ssourcingchina.com', 'quotes@ssourcingchina.com'],
    desc: 'We respond within 24 hours',
  },
  {
    icon: Phone,
    title: 'Call Us',
    details: ['+86 755 8888 9999', 'WhatsApp: +86 138 0000 0000'],
    desc: 'Mon-Fri, 9:00-18:00 CST',
  },
  {
    icon: MapPin,
    title: 'Visit Us',
    details: ['Room 1205, Tower A', 'Futian District, Shenzhen', 'Guangdong, China 518048'],
    desc: 'By appointment only',
  },
  {
    icon: Clock,
    title: 'Working Hours',
    details: ['Monday - Friday: 9:00 - 18:00 (CST)', 'Saturday: 9:00 - 12:00 (CST)'],
    desc: 'UTC+8 timezone',
  },
]

const inquiryTypes = [
  'New Sourcing Inquiry',
  'Supplier Verification',
  'Quality Inspection',
  'Production Monitoring',
  'Shipping & Logistics',
  'General Question',
]

const orderQuantities = [
  'Less than 500 units',
  '500 - 1,000 units',
  '1,000 - 5,000 units',
  '5,000 - 10,000 units',
  '10,000 - 50,000 units',
  '50,000+ units',
]

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    country: '',
    inquiryType: '',
    productDescription: '',
    quantity: '',
    targetPrice: '',
    timeline: '',
    additionalInfo: '',
  })
  const [submitted, setSubmitted] = useState(false)
  const [errors, setErrors] = useState({})

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }))
    }
  }

  const validate = () => {
    const newErrors = {}
    if (!formData.name.trim()) newErrors.name = 'Name is required'
    if (!formData.email.trim()) newErrors.email = 'Email is required'
    else if (!/^\S+@\S+\.\S+$/.test(formData.email)) newErrors.email = 'Please enter a valid email'
    if (!formData.inquiryType) newErrors.inquiryType = 'Please select an inquiry type'
    if (!formData.productDescription.trim()) newErrors.productDescription = 'Product description is required'
    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (validate()) {
      console.log('Form submitted:', formData)
      setSubmitted(true)
    }
  }

  if (submitted) {
    return (
      <div className="min-h-[60vh] flex items-center justify-center bg-neutral-50">
        <div className="max-w-md mx-auto text-center p-8">
          <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircle2 className="w-10 h-10 text-green-500" />
          </div>
          <h2 className="text-2xl font-bold text-neutral-900 mb-4">Thank You!</h2>
          <p className="text-neutral-600 mb-6">
            Your inquiry has been submitted successfully. Our team will review your requirements and respond within 24 hours with a detailed sourcing plan.
          </p>
          <Link
            to="/"
            className="inline-flex items-center gap-2 px-6 py-3 bg-brand-500 hover:bg-brand-600 text-white font-semibold rounded-lg transition-all"
          >
            Back to Home <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div>
      {/* Hero */}
      <section className="bg-gradient-to-br from-brand-500 to-brand-900 py-20 md:py-28">
        <div className="container-wide text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-6">
            Get a Free Sourcing Quote
          </h1>
          <p className="text-lg md:text-xl text-brand-100 max-w-2xl mx-auto">
            Tell us what you need. Our team will respond within 24 hours with a detailed sourcing plan and transparent pricing.
          </p>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-20 md:py-28 bg-white">
        <div className="container-wide">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Form */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-2xl border border-neutral-200 p-8 md:p-10 shadow-sm">
                <h2 className="text-2xl font-bold text-neutral-900 mb-2">Sourcing Inquiry Form</h2>
                <p className="text-neutral-500 mb-8">Fields marked with * are required</p>

                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Contact Information */}
                  <div>
                    <h3 className="text-lg font-semibold text-neutral-900 mb-4 flex items-center gap-2">
                      <Building className="w-5 h-5 text-brand-500" />
                      Contact Information
                    </h3>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-neutral-700 mb-1">
                          Full Name *
                        </label>
                        <input
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          className={`w-full px-4 py-3 rounded-lg border ${errors.name ? 'border-red-400' : 'border-neutral-300'} focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent text-neutral-900`}
                          placeholder="John Smith"
                        />
                        {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-neutral-700 mb-1">
                          Email Address *
                        </label>
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          className={`w-full px-4 py-3 rounded-lg border ${errors.email ? 'border-red-400' : 'border-neutral-300'} focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent text-neutral-900`}
                          placeholder="john@company.com"
                        />
                        {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-neutral-700 mb-1">
                          Company Name
                        </label>
                        <input
                          type="text"
                          name="company"
                          value={formData.company}
                          onChange={handleChange}
                          className="w-full px-4 py-3 rounded-lg border border-neutral-300 focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent text-neutral-900"
                          placeholder="Your Company Ltd."
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-neutral-700 mb-1">
                          Phone Number
                        </label>
                        <input
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          className="w-full px-4 py-3 rounded-lg border border-neutral-300 focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent text-neutral-900"
                          placeholder="+1 234 567 8900"
                        />
                      </div>
                      <div className="md:col-span-2">
                        <label className="block text-sm font-medium text-neutral-700 mb-1">
                          Country
                        </label>
                        <input
                          type="text"
                          name="country"
                          value={formData.country}
                          onChange={handleChange}
                          className="w-full px-4 py-3 rounded-lg border border-neutral-300 focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent text-neutral-900"
                          placeholder="United States"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Inquiry Details */}
                  <div>
                    <h3 className="text-lg font-semibold text-neutral-900 mb-4 flex items-center gap-2">
                      <Package className="w-5 h-5 text-brand-500" />
                      Sourcing Requirements
                    </h3>
                    <div className="space-y-4">
                      <div>
                        <label className="block text-sm font-medium text-neutral-700 mb-1">
                          Inquiry Type *
                        </label>
                        <select
                          name="inquiryType"
                          value={formData.inquiryType}
                          onChange={handleChange}
                          className={`w-full px-4 py-3 rounded-lg border ${errors.inquiryType ? 'border-red-400' : 'border-neutral-300'} focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent text-neutral-900 bg-white`}
                        >
                          <option value="">Select inquiry type</option>
                          {inquiryTypes.map((type) => (
                            <option key={type} value={type}>{type}</option>
                          ))}
                        </select>
                        {errors.inquiryType && <p className="text-red-500 text-sm mt-1">{errors.inquiryType}</p>}
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-neutral-700 mb-1">
                          Product Description *
                        </label>
                        <textarea
                          name="productDescription"
                          value={formData.productDescription}
                          onChange={handleChange}
                          rows={4}
                          className={`w-full px-4 py-3 rounded-lg border ${errors.productDescription ? 'border-red-400' : 'border-neutral-300'} focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent text-neutral-900`}
                          placeholder="Describe the product(s) you want to source. Include specifications, materials, dimensions, and any certifications required."
                        />
                        {errors.productDescription && <p className="text-red-500 text-sm mt-1">{errors.productDescription}</p>}
                      </div>
                      <div className="grid md:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm font-medium text-neutral-700 mb-1">
                            Estimated Quantity
                          </label>
                          <select
                            name="quantity"
                            value={formData.quantity}
                            onChange={handleChange}
                            className="w-full px-4 py-3 rounded-lg border border-neutral-300 focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent text-neutral-900 bg-white"
                          >
                            <option value="">Select quantity range</option>
                            {orderQuantities.map((qty) => (
                              <option key={qty} value={qty}>{qty}</option>
                            ))}
                          </select>
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-neutral-700 mb-1">
                            Target Price (USD per unit)
                          </label>
                          <input
                            type="text"
                            name="targetPrice"
                            value={formData.targetPrice}
                            onChange={handleChange}
                            className="w-full px-4 py-3 rounded-lg border border-neutral-300 focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent text-neutral-900"
                            placeholder="e.g., $5-10 per unit"
                          />
                        </div>
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-neutral-700 mb-1">
                          Desired Timeline
                        </label>
                        <input
                          type="text"
                          name="timeline"
                          value={formData.timeline}
                          onChange={handleChange}
                          className="w-full px-4 py-3 rounded-lg border border-neutral-300 focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent text-neutral-900"
                          placeholder="e.g., Need samples within 2 weeks, production within 6 weeks"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-neutral-700 mb-1">
                          Additional Information
                        </label>
                        <textarea
                          name="additionalInfo"
                          value={formData.additionalInfo}
                          onChange={handleChange}
                          rows={3}
                          className="w-full px-4 py-3 rounded-lg border border-neutral-300 focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent text-neutral-900"
                          placeholder="Any other details about your sourcing needs, special requirements, or questions."
                        />
                      </div>
                    </div>
                  </div>

                  <button
                    type="submit"
                    className="w-full px-8 py-4 bg-accent-500 hover:bg-accent-600 text-white font-bold rounded-lg transition-all shadow-lg hover:shadow-xl flex items-center justify-center gap-2 text-lg"
                  >
                    <Send className="w-5 h-5" />
                    Submit Sourcing Inquiry
                  </button>

                  <p className="text-sm text-neutral-500 text-center">
                    We respond to all inquiries within 24 hours. Your information is kept confidential.
                  </p>
                </form>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-8">
              {/* Contact Info */}
              <div className="bg-neutral-50 rounded-2xl p-8 border border-neutral-200">
                <h3 className="text-xl font-bold text-neutral-900 mb-6">Contact Information</h3>
                <div className="space-y-6">
                  {contactInfo.map((info) => (
                    <div key={info.title} className="flex items-start gap-4">
                      <div className="w-10 h-10 bg-brand-50 rounded-lg flex items-center justify-center flex-shrink-0">
                        <info.icon className="w-5 h-5 text-brand-500" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-neutral-900 mb-1">{info.title}</h4>
                        {info.details.map((detail) => (
                          <p key={detail} className="text-neutral-600 text-sm">{detail}</p>
                        ))}
                        <p className="text-neutral-400 text-xs mt-1">{info.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Quick Response */}
              <div className="bg-brand-500 rounded-2xl p-8 text-white">
                <h3 className="text-xl font-bold mb-3">Need a Quick Response?</h3>
                <p className="text-brand-100 mb-4 text-sm">
                  For urgent inquiries, reach us directly via WhatsApp or email. We typically respond within 2 hours during business hours.
                </p>
                <div className="space-y-3">
                  <a
                    href="https://wa.me/8613800000000"
                    className="flex items-center gap-2 px-4 py-3 bg-white/10 hover:bg-white/20 rounded-lg transition-all text-sm font-medium"
                  >
                    <MessageSquare className="w-4 h-4" />
                    WhatsApp Us
                  </a>
                  <a
                    href="mailto:quotes@ssourcingchina.com"
                    className="flex items-center gap-2 px-4 py-3 bg-white/10 hover:bg-white/20 rounded-lg transition-all text-sm font-medium"
                  >
                    <Mail className="w-4 h-4" />
                    Email Directly
                  </a>
                </div>
              </div>

              {/* Trust Badge */}
              <div className="bg-white rounded-2xl p-8 border border-neutral-200 text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle2 className="w-8 h-8 text-green-500" />
                </div>
                <h4 className="font-bold text-neutral-900 mb-2">100% Confidential</h4>
                <p className="text-neutral-500 text-sm">
                  Your product specifications and business information are kept strictly confidential. We never share your data with third parties.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
