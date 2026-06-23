import { useState, useEffect, useRef } from 'react'
import { Mail, Phone, MapPin, Clock, Send, CheckCircle, AlertCircle } from 'lucide-react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '../strk-img-config.json'

const services = [
  'Supplier Verification',
  'Quality Inspection',
  'Production Follow-up',
  'Shipping Coordination',
  'Full Sourcing Service',
  'Other',
]

const productCategories = [
  'Electronics',
  'Textiles & Apparel',
  'Furniture',
  'Machinery',
  'Packaging',
  'Home & Garden',
  'Toys & Games',
  'Jewelry & Watches',
  'Other',
]

export default function Contact() {
  const containerRef = useRef(null)
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    company: '',
    email: '',
    phone: '',
    service: '',
    productCategory: '',
    productDescription: '',
    quantity: '',
    targetPrice: '',
    message: '',
  })
  const [status, setStatus] = useState('idle') // idle, submitting, success, error
  const [errors, setErrors] = useState({})

  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, containerRef.current)
    })
    return () => window.cancelAnimationFrame(frameId)
  }, [])

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }))
    }
  }

  const validate = () => {
    const newErrors = {}
    if (!formData.firstName.trim()) newErrors.firstName = 'First name is required'
    if (!formData.lastName.trim()) newErrors.lastName = 'Last name is required'
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required'
    } else if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email'
    }
    if (!formData.productDescription.trim()) newErrors.productDescription = 'Product description is required'
    if (!formData.message.trim()) newErrors.message = 'Message is required'
    
    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    
    if (!validate()) return
    
    setStatus('submitting')
    
    // Simulate form submission
    try {
      await new Promise(resolve => setTimeout(resolve, 1500))
      setStatus('success')
      setFormData({
        firstName: '',
        lastName: '',
        company: '',
        email: '',
        phone: '',
        service: '',
        productCategory: '',
        productDescription: '',
        quantity: '',
        targetPrice: '',
        message: '',
      })
    } catch (error) {
      setStatus('error')
    }
  }

  return (
    <div ref={containerRef}>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 via-white to-gray-50 py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Get a Free Sourcing Quote
            </h1>
            <p className="text-lg text-gray-600 mb-8">
              Tell us about your sourcing needs and we'll help you find the right suppliers in China. 
              Our team typically responds within 24 hours.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Contact Info */}
            <div className="lg:col-span-1">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                Contact Information
              </h2>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                    <MapPin className="w-5 h-5 text-blue-900" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Office Address</h3>
                    <p className="text-gray-600 text-sm">
                      Shenzhen, Guangdong, China<br />
                      (Near Hong Kong border)
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                    <Mail className="w-5 h-5 text-blue-900" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Email</h3>
                    <a href="mailto:info@ssourcingchina.com" className="text-gray-600 text-sm hover:text-blue-900">
                      info@ssourcingchina.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                    <Phone className="w-5 h-5 text-blue-900" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Phone</h3>
                    <a href="tel:+8675588888888" className="text-gray-600 text-sm hover:text-blue-900">
                      +86 755 8888 8888
                    </a>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                    <Clock className="w-5 h-5 text-blue-900" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Business Hours</h3>
                    <p className="text-gray-600 text-sm">
                      Monday - Friday: 9:00 AM - 6:00 PM<br />
                      (China Standard Time)
                    </p>
                  </div>
                </div>
              </div>

              {/* Additional Info */}
              <div className="mt-8 p-4 bg-blue-50 rounded-xl">
                <h3 className="font-semibold text-gray-900 mb-2">Why Choose Us?</h3>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    Free initial consultation
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    Response within 24 hours
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    No obligation quote
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    Flexible service options
                  </li>
                </ul>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <div className="bg-gray-50 rounded-2xl p-6 lg:p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">
                  Tell Us About Your Project
                </h2>

                {status === 'success' ? (
                  <div className="bg-green-50 border border-green-200 rounded-xl p-6 text-center">
                    <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <CheckCircle className="w-8 h-8 text-green-600" />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                      Thank You!
                    </h3>
                    <p className="text-gray-600 mb-4">
                      Your inquiry has been submitted successfully. Our team will review your requirements 
                      and get back to you within 24 hours.
                    </p>
                    <button
                      onClick={() => setStatus('idle')}
                      className="text-blue-900 font-medium hover:text-blue-700"
                    >
                      Submit Another Inquiry
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    {/* Name Fields */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-1">
                          First Name *
                        </label>
                        <input
                          type="text"
                          id="firstName"
                          name="firstName"
                          value={formData.firstName}
                          onChange={handleChange}
                          className={`w-full px-4 py-3 rounded-lg border ${
                            errors.firstName ? 'border-red-500' : 'border-gray-300'
                          } focus:outline-none focus:ring-2 focus:ring-blue-900 focus:border-transparent`}
                          placeholder="John"
                        />
                        {errors.firstName && (
                          <p className="mt-1 text-sm text-red-500">{errors.firstName}</p>
                        )}
                      </div>
                      <div>
                        <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-1">
                          Last Name *
                        </label>
                        <input
                          type="text"
                          id="lastName"
                          name="lastName"
                          value={formData.lastName}
                          onChange={handleChange}
                          className={`w-full px-4 py-3 rounded-lg border ${
                            errors.lastName ? 'border-red-500' : 'border-gray-300'
                          } focus:outline-none focus:ring-2 focus:ring-blue-900 focus:border-transparent`}
                          placeholder="Doe"
                        />
                        {errors.lastName && (
                          <p className="mt-1 text-sm text-red-500">{errors.lastName}</p>
                        )}
                      </div>
                    </div>

                    {/* Company & Email */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-1">
                          Company Name
                        </label>
                        <input
                          type="text"
                          id="company"
                          name="company"
                          value={formData.company}
                          onChange={handleChange}
                          className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-900 focus:border-transparent"
                          placeholder="Your Company Ltd."
                        />
                      </div>
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                          Email Address *
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          className={`w-full px-4 py-3 rounded-lg border ${
                            errors.email ? 'border-red-500' : 'border-gray-300'
                          } focus:outline-none focus:ring-2 focus:ring-blue-900 focus:border-transparent`}
                          placeholder="john@company.com"
                        />
                        {errors.email && (
                          <p className="mt-1 text-sm text-red-500">{errors.email}</p>
                        )}
                      </div>
                    </div>

                    {/* Phone & Service */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                          Phone Number
                        </label>
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-900 focus:border-transparent"
                          placeholder="+1 (555) 123-4567"
                        />
                      </div>
                      <div>
                        <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-1">
                          Service Needed
                        </label>
                        <select
                          id="service"
                          name="service"
                          value={formData.service}
                          onChange={handleChange}
                          className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-900 focus:border-transparent"
                        >
                          <option value="">Select a service</option>
                          {services.map(service => (
                            <option key={service} value={service}>{service}</option>
                          ))}
                        </select>
                      </div>
                    </div>

                    {/* Product Category & Description */}
                    <div>
                      <label htmlFor="productCategory" className="block text-sm font-medium text-gray-700 mb-1">
                        Product Category
                      </label>
                      <select
                        id="productCategory"
                        name="productCategory"
                        value={formData.productCategory}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-900 focus:border-transparent"
                      >
                        <option value="">Select a category</option>
                        {productCategories.map(cat => (
                          <option key={cat} value={cat}>{cat}</option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label htmlFor="productDescription" className="block text-sm font-medium text-gray-700 mb-1">
                        Product Description *
                      </label>
                      <textarea
                        id="productDescription"
                        name="productDescription"
                        value={formData.productDescription}
                        onChange={handleChange}
                        rows={3}
                        className={`w-full px-4 py-3 rounded-lg border ${
                          errors.productDescription ? 'border-red-500' : 'border-gray-300'
                        } focus:outline-none focus:ring-2 focus:ring-blue-900 focus:border-transparent`}
                        placeholder="Describe the product you want to source, including materials, specifications, etc."
                      />
                      {errors.productDescription && (
                        <p className="mt-1 text-sm text-red-500">{errors.productDescription}</p>
                      )}
                    </div>

                    {/* Quantity & Target Price */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="quantity" className="block text-sm font-medium text-gray-700 mb-1">
                          Estimated Quantity
                        </label>
                        <input
                          type="text"
                          id="quantity"
                          name="quantity"
                          value={formData.quantity}
                          onChange={handleChange}
                          className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-900 focus:border-transparent"
                          placeholder="e.g., 5,000 units"
                        />
                      </div>
                      <div>
                        <label htmlFor="targetPrice" className="block text-sm font-medium text-gray-700 mb-1">
                          Target Price (per unit)
                        </label>
                        <input
                          type="text"
                          id="targetPrice"
                          name="targetPrice"
                          value={formData.targetPrice}
                          onChange={handleChange}
                          className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-900 focus:border-transparent"
                          placeholder="e.g., $5-10 per unit"
                        />
                      </div>
                    </div>

                    {/* Message */}
                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                        Additional Information *
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        rows={4}
                        className={`w-full px-4 py-3 rounded-lg border ${
                          errors.message ? 'border-red-500' : 'border-gray-300'
                        } focus:outline-none focus:ring-2 focus:ring-blue-900 focus:border-transparent`}
                        placeholder="Tell us any additional details about your project, timeline, or specific requirements..."
                      />
                      {errors.message && (
                        <p className="mt-1 text-sm text-red-500">{errors.message}</p>
                      )}
                    </div>

                    {/* Error Message */}
                    {status === 'error' && (
                      <div className="flex items-center p-4 bg-red-50 border border-red-200 rounded-lg text-red-700">
                        <AlertCircle className="w-5 h-5 mr-2" />
                        <span>Something went wrong. Please try again.</span>
                      </div>
                    )}

                    {/* Submit Button */}
                    <button
                      type="submit"
                      disabled={status === 'submitting'}
                      className="w-full flex items-center justify-center px-6 py-4 bg-blue-900 text-white font-semibold rounded-lg hover:bg-blue-800 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {status === 'submitting' ? (
                        <>
                          <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                          </svg>
                          Submitting...
                        </>
                      ) : (
                        <>
                          <Send className="w-5 h-5 mr-2" />
                          Submit Inquiry
                        </>
                      )}
                    </button>

                    <p className="text-xs text-gray-500 text-center">
                      By submitting this form, you agree to our privacy policy. We'll use your information 
                      to respond to your inquiry and provide our services.
                    </p>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="bg-gray-100 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gray-200 rounded-2xl h-64 flex items-center justify-center">
            <div className="text-center">
              <MapPin className="w-12 h-12 text-gray-400 mx-auto mb-2" />
              <p className="text-gray-500">Shenzhen, Guangdong, China</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}