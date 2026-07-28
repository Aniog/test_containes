import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import {
  Mail, Phone, MapPin, Clock, Send, CheckCircle, ArrowRight,
  MessageSquare, FileText, Package
} from 'lucide-react'

const SectionHeader = ({ eyebrow, title, description, centered = true }) => (
  <div className={`mb-12 ${centered ? 'text-center max-w-3xl mx-auto' : ''}`}>
    {eyebrow && <p className="text-blue-700 font-semibold text-sm uppercase tracking-wider mb-3">{eyebrow}</p>}
    <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">{title}</h2>
    {description && <p className="text-slate-600 text-lg leading-relaxed">{description}</p>}
  </div>
)

const inquiryTypes = [
  { value: 'new-sourcing', label: 'New Sourcing Project', icon: Package },
  { value: 'quality-control', label: 'Quality Control Services', icon: CheckCircle },
  { value: 'supplier-verification', label: 'Supplier Verification', icon: FileText },
  { value: 'shipping', label: 'Shipping & Logistics', icon: Mail },
  { value: 'other', label: 'Other Inquiry', icon: MessageSquare },
]

const productCategories = [
  'Electronics & Components',
  'Textiles & Apparel',
  'Machinery & Industrial',
  'Home & Garden',
  'Packaging & Printing',
  'Sports & Outdoor',
  'Automotive Parts',
  'Health & Beauty',
  'Other',
]

const contactInfo = [
  {
    icon: Mail,
    title: 'Email Us',
    value: 'info@ssourcing.cn',
    href: 'mailto:info@ssourcing.cn',
  },
  {
    icon: Phone,
    title: 'Call Us',
    value: '+86 755 1234 5678',
    href: 'tel:+8675512345678',
  },
  {
    icon: MapPin,
    title: 'Visit Us',
    value: 'Shenzhen, Guangdong, China',
    href: null,
  },
  {
    icon: Clock,
    title: 'Business Hours',
    value: 'Mon-Fri: 9:00 AM - 6:00 PM (UTC+8)',
    href: null,
  },
]

const Contact = () => {
  const containerRef = useRef(null)
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    company: '',
    country: '',
    inquiryType: '',
    productCategory: '',
    productDetails: '',
    estimatedQuantity: '',
    message: '',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [errors, setErrors] = useState({})

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }))
    }
  }

  const validateForm = () => {
    const newErrors = {}
    if (!formData.firstName.trim()) newErrors.firstName = 'First name is required'
    if (!formData.lastName.trim()) newErrors.lastName = 'Last name is required'
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required'
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email'
    }
    if (!formData.company.trim()) newErrors.company = 'Company name is required'
    if (!formData.inquiryType) newErrors.inquiryType = 'Please select an inquiry type'
    if (!formData.message.trim()) newErrors.message = 'Please describe your project'
    
    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!validateForm()) return

    setIsSubmitting(true)
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1500))
    setIsSubmitting(false)
    setIsSubmitted(true)
  }

  const resetForm = () => {
    setFormData({
      firstName: '',
      lastName: '',
      email: '',
      company: '',
      country: '',
      inquiryType: '',
      productCategory: '',
      productDetails: '',
      estimatedQuantity: '',
      message: '',
    })
    setIsSubmitted(false)
    setErrors({})
  }

  return (
    <div ref={containerRef}>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-900 to-slate-900 text-white py-24">
        <div className="absolute inset-0 opacity-10">
          <div 
            className="absolute inset-0"
            data-strk-bg-id="contact-hero-bg"
            data-strk-bg="business communication professional meeting"
            data-strk-bg-ratio="16x9"
            data-strk-bg-width="1920"
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-4">
          <nav className="flex items-center gap-2 text-sm text-slate-400 mb-8">
            <Link to="/" className="hover:text-white transition-colors">Home</Link>
            <span>/</span>
            <span className="text-white">Contact</span>
          </nav>
          <h1 className="text-4xl md:text-5xl font-extrabold mb-6">Contact Us</h1>
          <p className="text-xl text-blue-100 max-w-3xl">
            Ready to start sourcing from China? Get a free, no-obligation quote for your project. We respond within 24 hours.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Contact Info */}
            <div className="lg:col-span-1">
              <h2 className="text-2xl font-bold text-slate-900 mb-8">Get In Touch</h2>
              
              <div className="space-y-6 mb-12">
                {contactInfo.map((info, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center flex-shrink-0">
                      <info.icon className="w-6 h-6 text-blue-700" />
                    </div>
                    <div>
                      <p className="font-semibold text-slate-900 mb-1">{info.title}</p>
                      {info.href ? (
                        <a
                          href={info.href}
                          className="text-slate-600 hover:text-blue-700 transition-colors"
                        >
                          {info.value}
                        </a>
                      ) : (
                        <p className="text-slate-600">{info.value}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              {/* Quick Response */}
              <div className="bg-blue-800 rounded-2xl p-8 text-white">
                <h3 className="text-lg font-bold mb-4">What Happens Next?</h3>
                <ul className="space-y-4">
                  {[
                    'We review your inquiry within 4 hours',
                    'Our sourcing team prepares a customized proposal',
                    'We schedule a call to discuss details',
                    'You receive a detailed quote within 24 hours',
                  ].map((step, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <span className="w-6 h-6 bg-orange-500 rounded-full flex items-center justify-center flex-shrink-0 text-sm font-bold">
                        {index + 1}
                      </span>
                      <span className="text-blue-100">{step}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-2xl shadow-lg border border-slate-100 p-8">
                {isSubmitted ? (
                  <div className="text-center py-12">
                    <div className="w-20 h-20 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-6">
                      <CheckCircle className="w-10 h-10 text-teal-600" />
                    </div>
                    <h3 className="text-2xl font-bold text-slate-900 mb-4">Thank You!</h3>
                    <p className="text-slate-600 text-lg mb-8 max-w-md mx-auto">
                      Your inquiry has been received. Our team will review your request and get back to you within 24 hours.
                    </p>
                    <button
                      onClick={resetForm}
                      className="bg-blue-800 hover:bg-blue-900 text-white px-6 py-3 rounded-md font-semibold transition-colors"
                    >
                      Submit Another Inquiry
                    </button>
                  </div>
                ) : (
                  <>
                    <h2 className="text-2xl font-bold text-slate-900 mb-2">Send Us an Inquiry</h2>
                    <p className="text-slate-600 mb-8">Fill out the form below and we'll get back to you within 24 hours.</p>

                    <form onSubmit={handleSubmit} className="space-y-6">
                      {/* Name Row */}
                      <div className="grid md:grid-cols-2 gap-6">
                        <div>
                          <label className="block text-sm font-medium text-slate-700 mb-2">
                            First Name <span className="text-red-500">*</span>
                          </label>
                          <input
                            type="text"
                            name="firstName"
                            value={formData.firstName}
                            onChange={handleChange}
                            className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent ${
                              errors.firstName ? 'border-red-500' : 'border-slate-300'
                            }`}
                            placeholder="John"
                          />
                          {errors.firstName && (
                            <p className="text-red-500 text-sm mt-1">{errors.firstName}</p>
                          )}
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-slate-700 mb-2">
                            Last Name <span className="text-red-500">*</span>
                          </label>
                          <input
                            type="text"
                            name="lastName"
                            value={formData.lastName}
                            onChange={handleChange}
                            className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent ${
                              errors.lastName ? 'border-red-500' : 'border-slate-300'
                            }`}
                            placeholder="Smith"
                          />
                          {errors.lastName && (
                            <p className="text-red-500 text-sm mt-1">{errors.lastName}</p>
                          )}
                        </div>
                      </div>

                      {/* Email & Company */}
                      <div className="grid md:grid-cols-2 gap-6">
                        <div>
                          <label className="block text-sm font-medium text-slate-700 mb-2">
                            Email <span className="text-red-500">*</span>
                          </label>
                          <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent ${
                              errors.email ? 'border-red-500' : 'border-slate-300'
                            }`}
                            placeholder="john@company.com"
                          />
                          {errors.email && (
                            <p className="text-red-500 text-sm mt-1">{errors.email}</p>
                          )}
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-slate-700 mb-2">
                            Company <span className="text-red-500">*</span>
                          </label>
                          <input
                            type="text"
                            name="company"
                            value={formData.company}
                            onChange={handleChange}
                            className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent ${
                              errors.company ? 'border-red-500' : 'border-slate-300'
                            }`}
                            placeholder="Your Company Name"
                          />
                          {errors.company && (
                            <p className="text-red-500 text-sm mt-1">{errors.company}</p>
                          )}
                        </div>
                      </div>

                      {/* Country */}
                      <div>
                        <label className="block text-sm font-medium text-slate-700 mb-2">
                          Country
                        </label>
                        <input
                          type="text"
                          name="country"
                          value={formData.country}
                          onChange={handleChange}
                          className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                          placeholder="Where are you located?"
                        />
                      </div>

                      {/* Inquiry Type */}
                      <div>
                        <label className="block text-sm font-medium text-slate-700 mb-2">
                          Inquiry Type <span className="text-red-500">*</span>
                        </label>
                        <div className="grid sm:grid-cols-2 gap-3">
                          {inquiryTypes.map((type) => (
                            <label
                              key={type.value}
                              className={`flex items-center gap-3 p-4 border rounded-lg cursor-pointer transition-colors ${
                                formData.inquiryType === type.value
                                  ? 'border-blue-600 bg-blue-50'
                                  : 'border-slate-200 hover:border-slate-300'
                              }`}
                            >
                              <input
                                type="radio"
                                name="inquiryType"
                                value={type.value}
                                checked={formData.inquiryType === type.value}
                                onChange={handleChange}
                                className="sr-only"
                              />
                              <type.icon className={`w-5 h-5 ${
                                formData.inquiryType === type.value ? 'text-blue-600' : 'text-slate-400'
                              }`} />
                              <span className={`text-sm font-medium ${
                                formData.inquiryType === type.value ? 'text-blue-700' : 'text-slate-700'
                              }`}>
                                {type.label}
                              </span>
                            </label>
                          ))}
                        </div>
                        {errors.inquiryType && (
                          <p className="text-red-500 text-sm mt-1">{errors.inquiryType}</p>
                        )}
                      </div>

                      {/* Product Category */}
                      <div className="grid md:grid-cols-2 gap-6">
                        <div>
                          <label className="block text-sm font-medium text-slate-700 mb-2">
                            Product Category
                          </label>
                          <select
                            name="productCategory"
                            value={formData.productCategory}
                            onChange={handleChange}
                            className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white"
                          >
                            <option value="">Select a category</option>
                            {productCategories.map((cat) => (
                              <option key={cat} value={cat}>{cat}</option>
                            ))}
                          </select>
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-slate-700 mb-2">
                            Estimated Quantity
                          </label>
                          <input
                            type="text"
                            name="estimatedQuantity"
                            value={formData.estimatedQuantity}
                            onChange={handleChange}
                            className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                            placeholder="e.g., 500 units"
                          />
                        </div>
                      </div>

                      {/* Product Details */}
                      <div>
                        <label className="block text-sm font-medium text-slate-700 mb-2">
                          Product Details
                        </label>
                        <textarea
                          name="productDetails"
                          value={formData.productDetails}
                          onChange={handleChange}
                          rows={3}
                          className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                          placeholder="Describe the products you're looking to source, including any specifications, materials, or special requirements."
                        />
                      </div>

                      {/* Message */}
                      <div>
                        <label className="block text-sm font-medium text-slate-700 mb-2">
                          Tell Us About Your Project <span className="text-red-500">*</span>
                        </label>
                        <textarea
                          name="message"
                          value={formData.message}
                          onChange={handleChange}
                          rows={5}
                          className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent ${
                            errors.message ? 'border-red-500' : 'border-slate-300'
                          }`}
                          placeholder="Include details like your timeline, target pricing, quality requirements, and any questions you have about our services."
                        />
                        {errors.message && (
                          <p className="text-red-500 text-sm mt-1">{errors.message}</p>
                        )}
                      </div>

                      {/* Submit */}
                      <div className="pt-4">
                        <button
                          type="submit"
                          disabled={isSubmitting}
                          className="w-full bg-orange-500 hover:bg-orange-600 disabled:bg-orange-300 text-white px-8 py-4 rounded-md font-bold text-lg transition-colors inline-flex items-center justify-center gap-2"
                        >
                          {isSubmitting ? (
                            <>
                              <svg className="animate-spin w-5 h-5" viewBox="0 0 24 24">
                                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                              </svg>
                              Submitting...
                            </>
                          ) : (
                            <>
                              Get a Free Quote
                              <ArrowRight className="w-5 h-5" />
                            </>
                          )}
                        </button>
                        <p className="text-slate-500 text-sm text-center mt-4">
                          We typically respond within 24 hours. Your information is kept confidential.
                        </p>
                      </div>
                    </form>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Mini Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <SectionHeader
            eyebrow="Common Questions"
            title="Frequently Asked Questions"
            description="Quick answers to help you before reaching out."
          />
          <div className="space-y-4">
            {[
              {
                q: 'How much do your services cost?',
                a: 'Our fee structure depends on the scope of services. We offer competitive rates and provide detailed quotes after understanding your project requirements. Initial consultations are free.'
              },
              {
                q: 'What is the minimum order quantity you can help with?',
                a: 'We work with suppliers across all order sizes, from small MOQs to large-scale production. Let us know your quantities and we\'ll find suitable partners.'
              },
              {
                q: 'How do I know my information is safe?',
                a: 'We treat all client information with strict confidentiality. We sign NDAs when required and never share your data with third parties.'
              },
            ].map((faq, index) => (
              <details key={index} className="bg-slate-50 rounded-xl border border-slate-200 group">
                <summary className="flex items-center justify-between cursor-pointer p-6 font-semibold text-slate-900 hover:text-blue-700 transition-colors list-none">
                  <span>{faq.q}</span>
                  <span className="text-slate-400 group-open:rotate-45 transition-transform">+</span>
                </summary>
                <div className="px-6 pb-6 text-slate-600 leading-relaxed border-t border-slate-100 pt-4">
                  {faq.a}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default Contact
