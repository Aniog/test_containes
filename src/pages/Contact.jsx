import { useState } from 'react'
import { Link } from 'react-router-dom'
import { 
  Mail, MessageCircle, Phone, MapPin, Clock, 
  CheckCircle, Send, ArrowRight, Globe
} from 'lucide-react'
import { DataClient } from '@strikingly/sdk'
import { STRK_PROJECT_URL, STRK_PROJECT_ANON_KEY } from '../config.jsx'

const contactMethods = [
  { icon: Mail, title: 'Email', value: 'info@ssourcingchina.com', action: 'mailto:info@ssourcingchina.com' },
  { icon: MessageCircle, title: 'WeChat', value: 'SSourcing_China', action: '#' },
  { icon: Phone, title: 'WhatsApp', value: '+86 150 1234 5678', action: 'https://wa.me/8615012345678' },
]

const productCategories = [
  'Electronics & Components',
  'Home & Garden',
  'Sports & Outdoor',
  'Fashion & Accessories',
  'Industrial Equipment',
  'Packaging Materials',
  'Other',
]

const serviceOptions = [
  'Supplier Verification',
  'Quality Inspection',
  'Production Follow-up',
  'Shipping Coordination',
  'Custom Sourcing',
  'Full Service Package',
]

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    product: '',
    category: '',
    quantity: '',
    budget: '',
    timeline: '',
    services: [],
    message: '',
  })
  const [status, setStatus] = useState('idle') // idle, submitting, success, error
  const [errorMessage, setErrorMessage] = useState('')

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleCheckboxChange = (service) => {
    setFormData(prev => ({
      ...prev,
      services: prev.services.includes(service)
        ? prev.services.filter(s => s !== service)
        : [...prev.services, service]
    }))
  }

  const validateForm = () => {
    if (!formData.name.trim()) return 'Name is required'
    if (!formData.email.trim()) return 'Email is required'
    if (!/^\S+@\S+\.\S+$/.test(formData.email)) return 'Please enter a valid email'
    if (!formData.product.trim()) return 'Product description is required'
    if (!formData.message.trim()) return 'Please tell us more about your needs'
    return null
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setErrorMessage('')
    
    const validationError = validateForm()
    if (validationError) {
      setErrorMessage(validationError)
      return
    }

    setStatus('submitting')

    try {
      // Create inquiry using DataClient
      const client = new DataClient(STRK_PROJECT_URL, STRK_PROJECT_ANON_KEY)
      
      const { error: insertError } = await client
        .from('SourcingInquiries')
        .insert({
          data: {
            name: formData.name,
            company: formData.company,
            email: formData.email,
            phone: formData.phone,
            product_description: formData.product,
            product_category: formData.category,
            quantity: formData.quantity,
            budget: formData.budget,
            timeline: formData.timeline,
            services_needed: formData.services,
            message: formData.message,
            status: 'new',
          }
        })

      if (insertError) {
        console.error('Insert error:', insertError)
        throw insertError
      }

      setStatus('success')
      setFormData({
        name: '',
        company: '',
        email: '',
        phone: '',
        product: '',
        category: '',
        quantity: '',
        budget: '',
        timeline: '',
        services: [],
        message: '',
      })
    } catch (err) {
      console.error('Form submission error:', err)
      setErrorMessage(err.message || 'Submission failed. Please try again or contact us directly.')
      setStatus('error')
    }
  }

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-slate-900 via-slate-800 to-cyan-900 text-white section-padding">
        <div className="container-custom">
          <div className="max-w-3xl">
            <span className="badge bg-cyan-500/20 text-cyan-400 border border-cyan-500/30 mb-4">Contact Us</span>
            <h1 className="heading-xl mb-6">Get a Free Sourcing Quote</h1>
            <p className="text-lead text-slate-300 mb-8">
              Tell us what you need. We'll identify verified suppliers and provide a detailed quote within 24-48 hours. No commitment required.
            </p>
            <div className="flex items-center gap-2 text-cyan-300 text-sm">
              <Clock className="w-4 h-4" />
              <span>Typical response time: 24 hours</span>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="section-padding bg-slate-50">
        <div className="container-custom">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Form */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-2xl p-8 shadow-sm">
                <h2 className="heading-md mb-6">Submit Your Inquiry</h2>
                
                {status === 'success' ? (
                  <div className="text-center py-12">
                    <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <CheckCircle className="w-8 h-8 text-emerald-600" />
                    </div>
                    <h3 className="heading-md mb-2">Thank You!</h3>
                    <p className="text-slate-600 mb-6">
                      Your inquiry has been received. We'll get back to you within 24 hours.
                    </p>
                    <Link to="/" className="btn-secondary">
                      Back to Home
                    </Link>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    {errorMessage && (
                      <div className="p-4 bg-red-50 border border-red-200 rounded-lg text-red-700 text-sm">
                        {errorMessage}
                      </div>
                    )}

                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-2">
                          Your Name <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:border-cyan-500 focus:ring-2 focus:ring-cyan-200 outline-none transition-colors"
                          placeholder="John Smith"
                        />
                      </div>
                      <div>
                        <label htmlFor="company" className="block text-sm font-medium text-slate-700 mb-2">
                          Company Name
                        </label>
                        <input
                          type="text"
                          id="company"
                          name="company"
                          value={formData.company}
                          onChange={handleChange}
                          className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:border-cyan-500 focus:ring-2 focus:ring-cyan-200 outline-none transition-colors"
                          placeholder="Your Company Inc."
                        />
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-2">
                          Email Address <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:border-cyan-500 focus:ring-2 focus:ring-cyan-200 outline-none transition-colors"
                          placeholder="john@company.com"
                        />
                      </div>
                      <div>
                        <label htmlFor="phone" className="block text-sm font-medium text-slate-700 mb-2">
                          Phone / WhatsApp
                        </label>
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:border-cyan-500 focus:ring-2 focus:ring-cyan-200 outline-none transition-colors"
                          placeholder="+1 234 567 8900"
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="product" className="block text-sm font-medium text-slate-700 mb-2">
                        What product do you need? <span className="text-red-500">*</span>
                      </label>
                      <textarea
                        id="product"
                        name="product"
                        value={formData.product}
                        onChange={handleChange}
                        required
                        rows={3}
                        className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:border-cyan-500 focus:ring-2 focus:ring-cyan-200 outline-none transition-colors resize-none"
                        placeholder="Describe the product you're looking for - specifications, materials, features, etc."
                      />
                    </div>

                    <div className="grid md:grid-cols-3 gap-6">
                      <div>
                        <label htmlFor="category" className="block text-sm font-medium text-slate-700 mb-2">
                          Product Category
                        </label>
                        <select
                          id="category"
                          name="category"
                          value={formData.category}
                          onChange={handleChange}
                          className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:border-cyan-500 focus:ring-2 focus:ring-cyan-200 outline-none transition-colors bg-white"
                        >
                          <option value="">Select category</option>
                          {productCategories.map(cat => (
                            <option key={cat} value={cat}>{cat}</option>
                          ))}
                        </select>
                      </div>
                      <div>
                        <label htmlFor="quantity" className="block text-sm font-medium text-slate-700 mb-2">
                          Target Quantity
                        </label>
                        <input
                          type="text"
                          id="quantity"
                          name="quantity"
                          value={formData.quantity}
                          onChange={handleChange}
                          className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:border-cyan-500 focus:ring-2 focus:ring-cyan-200 outline-none transition-colors"
                          placeholder="e.g., 500 units"
                        />
                      </div>
                      <div>
                        <label htmlFor="budget" className="block text-sm font-medium text-slate-700 mb-2">
                          Budget per Unit
                        </label>
                        <input
                          type="text"
                          id="budget"
                          name="budget"
                          value={formData.budget}
                          onChange={handleChange}
                          className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:border-cyan-500 focus:ring-2 focus:ring-cyan-200 outline-none transition-colors"
                          placeholder="e.g., $5-10"
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="timeline" className="block text-sm font-medium text-slate-700 mb-2">
                        Required Timeline
                      </label>
                      <select
                        id="timeline"
                        name="timeline"
                        value={formData.timeline}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:border-cyan-500 focus:ring-2 focus:ring-cyan-200 outline-none transition-colors bg-white"
                      >
                        <option value="">Select timeline</option>
                        <option value="urgent">Urgent (within 1 month)</option>
                        <option value="short">Short term (1-2 months)</option>
                        <option value="medium">Medium term (2-4 months)</option>
                        <option value="long">Long term (4+ months)</option>
                        <option value="flexible">Flexible / No rush</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-3">
                        Services You Need
                      </label>
                      <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                        {serviceOptions.map(service => (
                          <label key={service} className="flex items-center gap-2 cursor-pointer">
                            <input
                              type="checkbox"
                              checked={formData.services.includes(service)}
                              onChange={() => handleCheckboxChange(service)}
                              className="w-4 h-4 rounded border-slate-300 text-cyan-600 focus:ring-cyan-500"
                            />
                            <span className="text-sm text-slate-700">{service}</span>
                          </label>
                        ))}
                      </div>
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-2">
                        Additional Details <span className="text-red-500">*</span>
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows={4}
                        className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:border-cyan-500 focus:ring-2 focus:ring-cyan-200 outline-none transition-colors resize-none"
                        placeholder="Any additional information about your requirements, existing supplier relationships, specific questions, etc."
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={status === 'submitting'}
                      className="btn-primary w-full justify-center disabled:opacity-50 disabled:cursor-not-allowed"
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
                          Submit Inquiry
                          <Send className="w-5 h-5 ml-2" />
                        </>
                      )}
                    </button>

                    <p className="text-xs text-slate-500 text-center">
                      By submitting this form, you agree to be contacted regarding your inquiry. We respect your privacy and will never share your information.
                    </p>
                  </form>
                )}
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="sticky top-24 space-y-6">
                {/* Contact Methods */}
                <div className="bg-white rounded-xl p-6 shadow-sm">
                  <h3 className="font-semibold text-slate-900 mb-4">Other Ways to Reach Us</h3>
                  <div className="space-y-4">
                    {contactMethods.map((method, i) => (
                      <a
                        key={i}
                        href={method.action}
                        className="flex items-center gap-4 p-4 rounded-xl border border-slate-100 hover:border-cyan-200 hover:bg-cyan-50 transition-colors"
                      >
                        <div className="w-10 h-10 bg-cyan-100 rounded-lg flex items-center justify-center">
                          <method.icon className="w-5 h-5 text-cyan-600" />
                        </div>
                        <div>
                          <div className="font-medium text-slate-900">{method.title}</div>
                          <div className="text-sm text-slate-600">{method.value}</div>
                        </div>
                      </a>
                    ))}
                  </div>
                </div>

                {/* Response Time */}
                <div className="bg-slate-50 rounded-xl p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <Clock className="w-5 h-5 text-cyan-600" />
                    <h3 className="font-semibold text-slate-900">Response Time</h3>
                  </div>
                  <p className="text-sm text-slate-600 mb-3">
                    We typically respond to all inquiries within 24 hours during business days.
                  </p>
                  <div className="text-sm text-slate-500">
                    <strong>Business Hours:</strong><br />
                    Mon-Fri: 9:00 AM - 6:00 PM (China Time)<br />
                    Sat: 10:00 AM - 2:00 PM
                  </div>
                </div>

                {/* Location */}
                <div className="bg-white rounded-xl p-6 shadow-sm">
                  <div className="flex items-center gap-3 mb-3">
                    <MapPin className="w-5 h-5 text-cyan-600" />
                    <h3 className="font-semibold text-slate-900">Our Location</h3>
                  </div>
                  <p className="text-sm text-slate-600">
                    Based in Shenzhen, China - the heart of manufacturing. We have boots on the ground to serve your sourcing needs.
                  </p>
                </div>

                {/* Quick Links */}
                <div className="bg-white rounded-xl p-6 shadow-sm">
                  <h3 className="font-semibold text-slate-900 mb-4">Quick Links</h3>
                  <div className="space-y-2">
                    <Link to="/services" className="flex items-center gap-2 text-sm text-slate-600 hover:text-cyan-700">
                      <ArrowRight className="w-4 h-4" />
                      Our Services
                    </Link>
                    <Link to="/how-it-works" className="flex items-center gap-2 text-sm text-slate-600 hover:text-cyan-700">
                      <ArrowRight className="w-4 h-4" />
                      How It Works
                    </Link>
                    <Link to="/products" className="flex items-center gap-2 text-sm text-slate-600 hover:text-cyan-700">
                      <ArrowRight className="w-4 h-4" />
                      Products We Source
                    </Link>
                    <Link to="/case-studies" className="flex items-center gap-2 text-sm text-slate-600 hover:text-cyan-700">
                      <ArrowRight className="w-4 h-4" />
                      Case Studies
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Contact