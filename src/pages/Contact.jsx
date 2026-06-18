import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import { 
  Mail, 
  Phone, 
  MapPin, 
  Clock, 
  Send,
  CheckCircle,
  AlertCircle,
  ArrowRight
} from 'lucide-react'

const Button = ({ children, variant = 'primary', className = '', disabled = false, ...props }) => {
  const baseStyles = 'inline-flex items-center justify-center px-6 py-3 font-medium rounded-lg transition-all duration-200'
  const variants = {
    primary: 'bg-red-600 text-white hover:bg-red-700 disabled:bg-red-400',
    secondary: 'border-2 border-slate-900 text-slate-900 hover:bg-slate-900 hover:text-white disabled:opacity-50',
  }
  return (
    <button 
      className={`${baseStyles} ${variants[variant]} ${className} ${disabled ? 'cursor-not-allowed' : ''}`} 
      disabled={disabled}
      {...props}
    >
      {children}
    </button>
  )
}

const Section = ({ children, className = '' }) => (
  <section className={`py-16 md:py-20 ${className}`}>
    {children}
  </section>
)

const Input = ({ label, error, ...props }) => (
  <div className="mb-4">
    <label className="block text-sm font-medium text-slate-700 mb-2">{label}</label>
    <input
      className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent ${
        error ? 'border-red-500' : 'border-slate-300'
      }`}
      {...props}
    />
    {error && <p className="mt-1 text-sm text-red-600">{error}</p>}
  </div>
)

const Textarea = ({ label, error, ...props }) => (
  <div className="mb-4">
    <label className="block text-sm font-medium text-slate-700 mb-2">{label}</label>
    <textarea
      className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent ${
        error ? 'border-red-500' : 'border-slate-300'
      }`}
      rows={5}
      {...props}
    />
    {error && <p className="mt-1 text-sm text-red-600">{error}</p>}
  </div>
)

const Select = ({ label, error, children, ...props }) => (
  <div className="mb-4">
    <label className="block text-sm font-medium text-slate-700 mb-2">{label}</label>
    <select
      className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent ${
        error ? 'border-red-500' : 'border-slate-300'
      }`}
      {...props}
    >
      {children}
    </select>
    {error && <p className="mt-1 text-sm text-red-600">{error}</p>}
  </div>
)

const Contact = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    company: '',
    email: '',
    phone: '',
    service: '',
    product: '',
    quantity: '',
    destination: '',
    message: '',
  })
  const [errors, setErrors] = useState({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState(null)

  const validateForm = () => {
    const newErrors = {}
    
    if (!formData.firstName.trim()) newErrors.firstName = 'First name is required'
    if (!formData.lastName.trim()) newErrors.lastName = 'Last name is required'
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required'
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email'
    }
    if (!formData.service) newErrors.service = 'Please select a service'
    if (!formData.message.trim()) newErrors.message = 'Message is required'
    
    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }))
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    
    if (!validateForm()) return
    
    setIsSubmitting(true)
    setSubmitStatus(null)
    
    // Simulate form submission
    try {
      await new Promise(resolve => setTimeout(resolve, 1500))
      setSubmitStatus('success')
      setFormData({
        firstName: '',
        lastName: '',
        company: '',
        email: '',
        phone: '',
        service: '',
        product: '',
        quantity: '',
        destination: '',
        message: '',
      })
    } catch (error) {
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }

  const contactInfo = [
    {
      icon: Mail,
      title: 'Email',
      content: 'info@ssourcingchina.com',
      description: 'We respond within 24 hours',
    },
    {
      icon: Phone,
      title: 'Phone',
      content: '+86 123 4567 8900',
      description: 'Available during business hours',
    },
    {
      icon: MapPin,
      title: 'Location',
      content: 'Shenzhen, China',
      description: 'Headquarters',
    },
    {
      icon: Clock,
      title: 'Business Hours',
      content: 'Mon - Fri: 9:00 - 18:00',
      description: 'China Standard Time (CST)',
    },
  ]

  return (
    <>
      <Helmet>
        <title>Contact Us | Get a Free Quote | SSourcing China</title>
        <meta name="description" content="Contact SSourcing China for professional sourcing services. Get a free quote for supplier verification, quality inspection, and shipping services." />
      </Helmet>

      {/* Hero Section */}
      <section className="bg-slate-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Get a Free Sourcing Quote</h1>
            <p className="text-xl text-slate-200">
              Tell us about your sourcing needs, and we'll provide a comprehensive quote within 24 hours.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <Section className="bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Contact Info */}
            <div className="lg:col-span-1">
              <div className="bg-white rounded-lg shadow-md p-8">
                <h2 className="text-2xl font-bold text-slate-900 mb-6">Contact Information</h2>
                <div className="space-y-6">
                  {contactInfo.map((info, index) => (
                    <div key={index} className="flex items-start gap-4">
                      <div className="w-10 h-10 bg-red-100 rounded-lg flex items-center justify-center flex-shrink-0">
                        <info.icon className="w-5 h-5 text-red-600" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-slate-900">{info.title}</h3>
                        <p className="text-slate-600 text-sm">{info.content}</p>
                        <p className="text-slate-500 text-xs mt-1">{info.description}</p>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-8 pt-8 border-t border-slate-200">
                  <h3 className="font-semibold text-slate-900 mb-4">Why Work With Us?</h3>
                  <ul className="space-y-3">
                    <li className="flex items-center gap-2 text-sm text-slate-600">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      Verified suppliers network
                    </li>
                    <li className="flex items-center gap-2 text-sm text-slate-600">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      Professional QC team
                    </li>
                    <li className="flex items-center gap-2 text-sm text-slate-600">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      End-to-end logistics support
                    </li>
                    <li className="flex items-center gap-2 text-sm text-slate-600">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      Competitive pricing
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-lg shadow-md p-8">
                <h2 className="text-2xl font-bold text-slate-900 mb-6">Send Us a Message</h2>
                
                {submitStatus === 'success' && (
                  <div className="bg-green-50 border border-green-200 rounded-lg p-4 mb-6 flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-medium text-green-800">Thank you for your inquiry!</p>
                      <p className="text-sm text-green-700">We'll get back to you within 24 hours.</p>
                    </div>
                  </div>
                )}

                {submitStatus === 'error' && (
                  <div className="bg-red-50 border border-red-200 rounded-lg p-4 mb-6 flex items-start gap-3">
                    <AlertCircle className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-medium text-red-800">Something went wrong</p>
                      <p className="text-sm text-red-700">Please try again or contact us directly.</p>
                    </div>
                  </div>
                )}

                <form onSubmit={handleSubmit}>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <Input
                      label="First Name *"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleChange}
                      error={errors.firstName}
                      placeholder="John"
                    />
                    <Input
                      label="Last Name *"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleChange}
                      error={errors.lastName}
                      placeholder="Doe"
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <Input
                      label="Company Name"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      placeholder="Your Company Ltd."
                    />
                    <Input
                      label="Email Address *"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      error={errors.email}
                      placeholder="john@company.com"
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <Input
                      label="Phone Number"
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+1 234 567 8900"
                    />
                    <Select
                      label="Service Required *"
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      error={errors.service}
                    >
                      <option value="">Select a service</option>
                      <option value="supplier-verification">Supplier Verification</option>
                      <option value="quality-inspection">Quality Inspection</option>
                      <option value="product-sourcing">Product Sourcing</option>
                      <option value="production-follow">Production Follow-up</option>
                      <option value="shipping-logistics">Shipping & Logistics</option>
                      <option value="full-service">Full Service Sourcing</option>
                      <option value="other">Other</option>
                    </Select>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <Input
                      label="Product Description"
                      name="product"
                      value={formData.product}
                      onChange={handleChange}
                      placeholder="What do you need?"
                    />
                    <Input
                      label="Estimated Quantity"
                      name="quantity"
                      value={formData.quantity}
                      onChange={handleChange}
                      placeholder="e.g., 10,000 units"
                    />
                    <Input
                      label="Destination Country"
                      name="destination"
                      value={formData.destination}
                      onChange={handleChange}
                      placeholder="e.g., USA, UK, Germany"
                    />
                  </div>

                  <Textarea
                    label="Message *"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    error={errors.message}
                    placeholder="Tell us more about your sourcing requirements, timeline, and any specific needs..."
                  />

                  <Button 
                    type="submit" 
                    className="w-full text-lg py-4"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <>
                        <span className="animate-pulse">Sending...</span>
                      </>
                    ) : (
                      <>
                        Send Inquiry <Send className="ml-2 w-5 h-5" />
                      </>
                    )}
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Map Section */}
      <Section className="bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold text-slate-900">Our Location</h2>
            <p className="text-slate-600 mt-2">Based in Shenzhen, the heart of China's manufacturing industry</p>
          </div>
          <div className="bg-slate-100 rounded-lg h-64 md:h-96 flex items-center justify-center">
            <div className="text-center">
              <MapPin className="w-12 h-12 text-red-600 mx-auto mb-2" />
              <p className="text-slate-600">Shenzhen, Guangdong Province, China</p>
            </div>
          </div>
        </div>
      </Section>
    </>
  )
}

export default Contact