import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import { 
  ArrowRight, 
  Mail, 
  Phone, 
  MapPin, 
  Clock, 
  Send,
  CheckCircle,
  AlertCircle,
  FileText,
  Factory,
  ClipboardCheck,
  Truck,
  HelpCircle
} from 'lucide-react'
import './Contact.css'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    serviceType: '',
    productCategory: '',
    productDetails: '',
    quantity: '',
    targetPrice: '',
    timeline: '',
    message: '',
  })

  const [formStatus, setFormStatus] = useState('idle') // idle, submitting, success, error
  const [errors, setErrors] = useState({})

  const serviceTypes = [
    { value: '', label: 'Select a service' },
    { value: 'supplier-verification', label: 'Supplier Verification' },
    { value: 'factory-sourcing', label: 'Factory Sourcing' },
    { value: 'quality-inspection', label: 'Quality Inspection' },
    { value: 'shipping-logistics', label: 'Shipping & Logistics' },
    { value: 'product-development', label: 'Product Development' },
    { value: 'other', label: 'Other / Not Sure' },
  ]

  const productCategories = [
    { value: '', label: 'Select a category' },
    { value: 'electronics', label: 'Consumer Electronics' },
    { value: 'textiles', label: 'Apparel & Textiles' },
    { value: 'machinery', label: 'Machinery & Industrial' },
    { value: 'packaging', label: 'Packaging' },
    { value: 'home', label: 'Home & Garden' },
    { value: 'automotive', label: 'Automotive' },
    { value: 'sports', label: 'Sports & Outdoors' },
    { value: 'health', label: 'Health & Beauty' },
    { value: 'other', label: 'Other' },
  ]

  const timelines = [
    { value: '', label: 'Select timeline' },
    { value: 'asap', label: 'ASAP (Urgent)' },
    { value: '1-month', label: 'Within 1 month' },
    { value: '1-3-months', label: '1-3 months' },
    { value: '3-6-months', label: '3-6 months' },
    { value: 'flexible', label: 'Flexible' },
  ]

  const validateForm = () => {
    const newErrors = {}
    
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required'
    }
    
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required'
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email'
    }
    
    if (!formData.serviceType) {
      newErrors.serviceType = 'Please select a service'
    }
    
    if (!formData.productDetails.trim()) {
      newErrors.productDetails = 'Please describe what you need to source'
    }

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
    
    if (!validateForm()) {
      return
    }

    setFormStatus('submitting')

    // Simulate form submission
    setTimeout(() => {
      setFormStatus('success')
      setFormData({
        name: '',
        company: '',
        email: '',
        phone: '',
        serviceType: '',
        productCategory: '',
        productDetails: '',
        quantity: '',
        targetPrice: '',
        timeline: '',
        message: '',
      })
    }, 1500)
  }

  const contactInfo = [
    {
      icon: MapPin,
      title: 'Our Location',
      details: ['Shenzhen, China', 'Serving clients worldwide'],
    },
    {
      icon: Clock,
      title: 'Business Hours',
      details: ['Monday - Friday: 9AM - 6PM', 'China Standard Time (CST)'],
    },
    {
      icon: Mail,
      title: 'Email Us',
      details: ['info@ssourcingchina.com', 'We respond within 24 hours'],
    },
    {
      icon: Phone,
      title: 'Call Us',
      details: ['+86 755 1234 5678', 'WeChat: SSourcingChina'],
    },
  ]

  const services = [
    { icon: FileText, name: 'Supplier Verification', description: 'Verify factory legitimacy and capabilities' },
    { icon: Factory, name: 'Factory Sourcing', description: 'Find the right manufacturers for your products' },
    { icon: ClipboardCheck, name: 'Quality Inspection', description: 'Ensure product quality with professional QC' },
    { icon: Truck, name: 'Shipping & Logistics', description: 'Coordinate shipping and customs clearance' },
  ]

  return (
    <>
      <Helmet>
        <title>Contact Us | Get a Free Sourcing Quote | SSourcing China</title>
        <meta name="description" content="Contact SSourcing China for professional sourcing services. Get a free quote for supplier verification, factory sourcing, quality inspection, and shipping." />
      </Helmet>

      <section className="contact-hero">
        <div className="contact-hero-content">
          <h1>Get a Free Sourcing Quote</h1>
          <p>
            Tell us what you need, and we'll find the right suppliers for your business. 
            Our team typically responds within 24 hours with a detailed quote.
          </p>
        </div>
      </section>

      <section className="contact-content">
        <div className="section-container">
          <div className="contact-grid">
            <div className="contact-form-section">
              <div className="form-header">
                <h2>Tell Us About Your Sourcing Needs</h2>
                <p>Fill out the form below and we'll get back to you within 24 hours.</p>
              </div>

              {formStatus === 'success' ? (
                <div className="form-success">
                  <CheckCircle size={48} />
                  <h3>Thank You!</h3>
                  <p>We've received your inquiry and will get back to you within 24 hours.</p>
                  <button 
                    onClick={() => setFormStatus('idle')}
                    className="submit-another"
                  >
                    Submit Another Inquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="contact-form">
                  <div className="form-row">
                    <div className="form-group">
                      <label htmlFor="name">Your Name *</label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="John Smith"
                        className={errors.name ? 'error' : ''}
                      />
                      {errors.name && <span className="error-message">{errors.name}</span>}
                    </div>
                    <div className="form-group">
                      <label htmlFor="company">Company Name</label>
                      <input
                        type="text"
                        id="company"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        placeholder="Your Company Ltd"
                      />
                    </div>
                  </div>

                  <div className="form-row">
                    <div className="form-group">
                      <label htmlFor="email">Email Address *</label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="john@company.com"
                        className={errors.email ? 'error' : ''}
                      />
                      {errors.email && <span className="error-message">{errors.email}</span>}
                    </div>
                    <div className="form-group">
                      <label htmlFor="phone">Phone Number</label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="+1 234 567 8900"
                      />
                    </div>
                  </div>

                  <div className="form-row">
                    <div className="form-group">
                      <label htmlFor="serviceType">Service Needed *</label>
                      <select
                        id="serviceType"
                        name="serviceType"
                        value={formData.serviceType}
                        onChange={handleChange}
                        className={errors.serviceType ? 'error' : ''}
                      >
                        {serviceTypes.map(option => (
                          <option key={option.value} value={option.value}>
                            {option.label}
                          </option>
                        ))}
                      </select>
                      {errors.serviceType && <span className="error-message">{errors.serviceType}</span>}
                    </div>
                    <div className="form-group">
                      <label htmlFor="productCategory">Product Category</label>
                      <select
                        id="productCategory"
                        name="productCategory"
                        value={formData.productCategory}
                        onChange={handleChange}
                      >
                        {productCategories.map(option => (
                          <option key={option.value} value={option.value}>
                            {option.label}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div className="form-group">
                    <label htmlFor="productDetails">What products do you need to source? *</label>
                    <textarea
                      id="productDetails"
                      name="productDetails"
                      value={formData.productDetails}
                      onChange={handleChange}
                      placeholder="Please describe the products you need, including specifications, materials, and any special requirements..."
                      rows={4}
                      className={errors.productDetails ? 'error' : ''}
                    />
                    {errors.productDetails && <span className="error-message">{errors.productDetails}</span>}
                  </div>

                  <div className="form-row">
                    <div className="form-group">
                      <label htmlFor="quantity">Estimated Quantity</label>
                      <input
                        type="text"
                        id="quantity"
                        name="quantity"
                        value={formData.quantity}
                        onChange={handleChange}
                        placeholder="e.g., 5000 units"
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="targetPrice">Target Price (per unit)</label>
                      <input
                        type="text"
                        id="targetPrice"
                        name="targetPrice"
                        value={formData.targetPrice}
                        onChange={handleChange}
                        placeholder="e.g., $5-10 per unit"
                      />
                    </div>
                  </div>

                  <div className="form-group">
                    <label htmlFor="timeline">Timeline</label>
                    <select
                      id="timeline"
                      name="timeline"
                      value={formData.timeline}
                      onChange={handleChange}
                    >
                      {timelines.map(option => (
                        <option key={option.value} value={option.value}>
                          {option.label}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div className="form-group">
                    <label htmlFor="message">Additional Information</label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Any other details that would help us understand your needs..."
                      rows={3}
                    />
                  </div>

                  <button 
                    type="submit" 
                    className="submit-btn"
                    disabled={formStatus === 'submitting'}
                  >
                    {formStatus === 'submitting' ? (
                      <>Processing...</>
                    ) : (
                      <>
                        Submit Inquiry
                        <Send size={18} />
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>

            <div className="contact-info-section">
              <div className="info-card">
                <h3>Contact Information</h3>
                <div className="info-items">
                  {contactInfo.map((info, index) => (
                    <div key={index} className="info-item">
                      <div className="info-icon">
                        <info.icon size={24} />
                      </div>
                      <div className="info-content">
                        <h4>{info.title}</h4>
                        {info.details.map((detail, idx) => (
                          <p key={idx}>{detail}</p>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="services-card">
                <h3>Our Services</h3>
                <div className="services-list">
                  {services.map((service, index) => (
                    <div key={index} className="service-item">
                      <service.icon size={20} />
                      <div>
                        <h4>{service.name}</h4>
                        <p>{service.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
                <Link to="/services" className="services-link">
                  View All Services <ArrowRight size={16} />
                </Link>
              </div>

              <div className="response-card">
                <Clock size={24} />
                <div>
                  <h4>Quick Response</h4>
                  <p>We typically respond to all inquiries within 24 business hours.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="faq-cta-section">
        <div className="section-container">
          <div className="faq-cta-content">
            <h2>Have Questions?</h2>
            <p>Check our FAQ page for answers to common questions about our sourcing services.</p>
            <Link to="/how-it-works" className="faq-cta-btn">
              Learn About Our Process
              <ArrowRight size={20} />
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}

export default Contact