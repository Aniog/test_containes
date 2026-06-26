import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock,
  Send,
  CheckCircle,
  AlertCircle
} from 'lucide-react'
import { submitContactForm } from '../api/contact'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    product_details: '',
    quantity: '',
    target_price: '',
    message: ''
  })
  
  const [status, setStatus] = useState('idle') // idle, submitting, success, error
  const [errorMessage, setErrorMessage] = useState('')

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const validateForm = () => {
    if (!formData.name.trim()) return 'Name is required'
    if (!formData.email.trim()) return 'Email is required'
    if (!/^\S+@\S+\.\S+$/.test(formData.email)) return 'Please enter a valid email'
    if (!formData.product_details.trim()) return 'Product details are required'
    return null
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    
    const validationError = validateForm()
    if (validationError) {
      setErrorMessage(validationError)
      setStatus('error')
      return
    }

    setStatus('submitting')
    setErrorMessage('')

    try {
      const result = await submitContactForm(formData)
      
      if (result.success) {
        setStatus('success')
        setFormData({
          name: '',
          email: '',
          company: '',
          phone: '',
          product_details: '',
          quantity: '',
          target_price: '',
          message: ''
        })
      } else {
        throw new Error(result.error || 'Failed to submit form')
      }
    } catch (error) {
      setStatus('error')
      setErrorMessage(error.message || 'Failed to submit form. Please try again.')
    }
  }

  return (
    <div>
      {/* Page Header */}
      <section className="bg-blue-900 text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Contact Us</h1>
          <p className="text-xl text-blue-100 max-w-2xl">
            Get in touch with our sourcing experts. We're here to help you succeed.
          </p>
        </div>
      </section>

      {/* Contact Content */}
      <section className="section">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            {/* Contact Information */}
            <div className="md:col-span-1">
              <div className="bg-white rounded-lg shadow-md p-6 mb-6">
                <h2 className="text-2xl font-bold mb-6">Get in Touch</h2>
                
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <Phone className="w-5 h-5 text-blue-600 mt-1" />
                    <div>
                      <h3 className="font-semibold">Phone / WhatsApp</h3>
                      <p className="text-gray-600">+86 138 0000 0000</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3">
                    <Mail className="w-5 h-5 text-blue-600 mt-1" />
                    <div>
                      <h3 className="font-semibold">Email</h3>
                      <p className="text-gray-600">info@ssourcingchina.com</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3">
                    <MapPin className="w-5 h-5 text-blue-600 mt-1" />
                    <div>
                      <h3 className="font-semibold">Address</h3>
                      <p className="text-gray-600">Shenzhen, Guangdong<br />China</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3">
                    <Clock className="w-5 h-5 text-blue-600 mt-1" />
                    <div>
                      <h3 className="font-semibold">Business Hours</h3>
                      <p className="text-gray-600">Monday - Friday<br />9:00 AM - 6:00 PM (China Time)</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Quick Links */}
              <div className="bg-blue-50 rounded-lg p-6">
                <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
                <ul className="space-y-2">
                  <li>
                    <Link to="/services" className="text-blue-600 hover:text-blue-700">
                      → View Our Services
                    </Link>
                  </li>
                  <li>
                    <Link to="/how-it-works" className="text-blue-600 hover:text-blue-700">
                      → How It Works
                    </Link>
                  </li>
                  <li>
                    <Link to="/case-studies" className="text-blue-600 hover:text-blue-700">
                      → Success Stories
                    </Link>
                  </li>
                  <li>
                    <Link to="/blog" className="text-blue-600 hover:text-blue-700">
                      → Sourcing Guides
                    </Link>
                  </li>
                </ul>
              </div>
            </div>

            {/* Contact Form */}
            <div className="md:col-span-2">
              <div className="bg-white rounded-lg shadow-md p-8">
                <h2 className="text-2xl font-bold mb-2">Get a Free Sourcing Quote</h2>
                <p className="text-gray-600 mb-6">
                  Fill out the form below with your sourcing requirements. We'll get back to you within 24 hours.
                </p>

                {status === 'success' ? (
                  <div className="text-center py-12">
                    <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
                    <h3 className="text-2xl font-bold text-green-600 mb-2">Thank You!</h3>
                    <p className="text-gray-600 mb-6">
                      Your inquiry has been submitted successfully. Our team will review your requirements 
                      and get back to you within 24 hours.
                    </p>
                    <button
                      onClick={() => setStatus('idle')}
                      className="btn-primary"
                    >
                      Submit Another Inquiry
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    {/* Name & Email */}
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="name" className="block text-sm font-semibold mb-2">
                          Full Name <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                          placeholder="John Smith"
                        />
                      </div>

                      <div>
                        <label htmlFor="email" className="block text-sm font-semibold mb-2">
                          Email Address <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                          placeholder="john@example.com"
                        />
                      </div>
                    </div>

                    {/* Company & Phone */}
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="company" className="block text-sm font-semibold mb-2">
                          Company Name
                        </label>
                        <input
                          type="text"
                          id="company"
                          name="company"
                          value={formData.company}
                          onChange={handleChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                          placeholder="Your Company Ltd."
                        />
                      </div>

                      <div>
                        <label htmlFor="phone" className="block text-sm font-semibold mb-2">
                          Phone / WhatsApp
                        </label>
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                          placeholder="+1 234 567 8900"
                        />
                      </div>
                    </div>

                    {/* Product Details */}
                    <div>
                      <label htmlFor="product_details" className="block text-sm font-semibold mb-2">
                        Product Details <span className="text-red-500">*</span>
                      </label>
                      <textarea
                        id="product_details"
                        name="product_details"
                        value={formData.product_details}
                        onChange={handleChange}
                        required
                        rows={4}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                        placeholder="Describe the product you want to source. Include specifications, materials, dimensions, colors, etc."
                      />
                    </div>

                    {/* Quantity & Target Price */}
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="quantity" className="block text-sm font-semibold mb-2">
                          Estimated Order Quantity
                        </label>
                        <input
                          type="text"
                          id="quantity"
                          name="quantity"
                          value={formData.quantity}
                          onChange={handleChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                          placeholder="e.g., 1000 units, 5000 pcs"
                        />
                      </div>

                      <div>
                        <label htmlFor="target_price" className="block text-sm font-semibold mb-2">
                          Target Price (per unit)
                        </label>
                        <input
                          type="text"
                          id="target_price"
                          name="target_price"
                          value={formData.target_price}
                          onChange={handleChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                          placeholder="e.g., $5 - $8 USD"
                        />
                      </div>
                    </div>

                    {/* Message */}
                    <div>
                      <label htmlFor="message" className="block text-sm font-semibold mb-2">
                        Additional Message
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        rows={4}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                        placeholder="Any additional requirements, questions, or specific needs..."
                      />
                    </div>

                    {/* Error Message */}
                    {status === 'error' && (
                      <div className="bg-red-50 border border-red-200 rounded-lg p-4 flex items-start space-x-3">
                        <AlertCircle className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
                        <p className="text-red-700">{errorMessage}</p>
                      </div>
                    )}

                    {/* Submit Button */}
                    <div>
                      <button
                        type="submit"
                        disabled={status === 'submitting'}
                        className="btn-primary text-lg w-full md:w-auto flex items-center justify-center space-x-2"
                      >
                        {status === 'submitting' ? (
                          <>
                            <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                            <span>Submitting...</span>
                          </>
                        ) : (
                          <>
                            <Send className="w-5 h-5" />
                            <span>Get Free Sourcing Quote</span>
                          </>
                        )}
                      </button>
                    </div>

                    <p className="text-sm text-gray-500">
                      By submitting this form, you agree to our privacy policy. We'll never share your information with third parties.
                    </p>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="section-title">
            <h2>Common Questions</h2>
            <p>Quick answers to questions you may have</p>
          </div>

          <div className="max-w-3xl mx-auto space-y-4">
            {[
              {
                question: 'How quickly will I receive a response?',
                answer: 'We typically respond to all inquiries within 24 hours during business days.'
              },
              {
                question: 'Is the initial consultation really free?',
                answer: 'Yes, our initial consultation and sourcing quote are completely free with no obligations.'
              },
              {
                question: 'What information should I provide?',
                answer: 'The more details you provide about your product requirements, the better we can assist you. Include specifications, quantity, target price, and any quality standards.'
              },
              {
                question: 'Do you work with small businesses?',
                answer: 'Absolutely! We work with businesses of all sizes, from startups to large enterprises.'
              }
            ].map((item, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-lg font-semibold mb-2">{item.question}</h3>
                <p className="text-gray-600">{item.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default Contact
