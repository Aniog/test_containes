import { useState } from 'react'
import { Mail, Phone, MapPin, Clock, Send, CheckCircle } from 'lucide-react'

const inquiryTypes = [
  'General Inquiry',
  'Product Sourcing',
  'Supplier Verification',
  'Quality Control',
  'Shipping & Logistics',
  'Custom Manufacturing',
  'Other',
]

const productCategories = [
  'Electronics & Components',
  'Home & Garden',
  'Apparel & Textiles',
  'Industrial & Machinery',
  'Promotional & Custom Products',
  'Building & Hardware',
  'Automotive Parts',
  'Toys & Gifts',
  'Other',
]

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    country: '',
    inquiryType: '',
    productCategory: '',
    quantity: '',
    description: '',
    timeline: '',
    budget: '',
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
    if (!formData.description.trim()) newErrors.description = 'Please describe your requirements'
    return newErrors
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const newErrors = validate()
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors)
      return
    }
    setSubmitted(true)
  }

  if (submitted) {
    return (
      <div>
        <section className="bg-primary py-16 md:py-24">
          <div className="max-w-7xl mx-auto px-4 md:px-6">
            <div className="max-w-3xl">
              <span className="text-accent font-semibold text-sm uppercase tracking-wider">
                Thank You
              </span>
              <h1 className="text-4xl md:text-5xl font-bold text-white mt-3">
                Inquiry Submitted
              </h1>
            </div>
          </div>
        </section>
        <section className="py-16 md:py-24 bg-white">
          <div className="max-w-2xl mx-auto px-4 md:px-6 text-center">
            <div className="w-16 h-16 bg-emerald-50 rounded-full flex items-center justify-center mx-auto mb-6">
              <CheckCircle className="w-8 h-8 text-success" />
            </div>
            <h2 className="text-2xl md:text-3xl font-bold text-primary mb-4">
              We Have Received Your Inquiry
            </h2>
            <p className="text-text-secondary text-lg mb-8">
              Thank you, {formData.name}. Our team will review your requirements and respond within 24 business hours with a detailed sourcing proposal.
            </p>
            <div className="bg-bg-light rounded-lg border border-border p-6 text-left max-w-md mx-auto">
              <h3 className="font-semibold text-primary text-sm mb-3">What Happens Next</h3>
              <ol className="space-y-3 text-text-secondary text-sm">
                <li className="flex items-start gap-3">
                  <span className="w-5 h-5 bg-accent rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-white text-xs font-bold">1</span>
                  </span>
                  <span>Our team reviews your product requirements and specifications</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-5 h-5 bg-accent rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-white text-xs font-bold">2</span>
                  </span>
                  <span>We identify suitable suppliers from our verified network</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-5 h-5 bg-accent rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-white text-xs font-bold">3</span>
                  </span>
                  <span>You receive a detailed proposal with supplier options and pricing</span>
                </li>
              </ol>
            </div>
          </div>
        </section>
      </div>
    )
  }

  return (
    <div>
      {/* Hero */}
      <section className="bg-primary py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="max-w-3xl">
            <span className="text-accent font-semibold text-sm uppercase tracking-wider">
              Get in Touch
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-white mt-3 mb-6">
              Contact Us / Get a Free Quote
            </h1>
            <p className="text-white/80 text-lg leading-relaxed">
              Tell us about your sourcing needs and our team will provide a detailed
              proposal with verified supplier options and transparent pricing.
            </p>
          </div>
        </div>
      </section>

      {/* Form + Info */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Form */}
            <div className="lg:col-span-2">
              <h2 className="text-2xl font-bold text-primary mb-2">Sourcing Inquiry Form</h2>
              <p className="text-text-secondary mb-8">
                Complete the form below and we will respond within 24 business hours.
              </p>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-text-primary mb-1.5">
                      Full Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="John Smith"
                      className={`w-full px-4 py-3 rounded-md border text-sm text-text-primary bg-white focus:outline-none focus:ring-2 focus:ring-accent/30 focus:border-accent ${errors.name ? 'border-red-400' : 'border-border'}`}
                    />
                    {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-text-primary mb-1.5">
                      Company Name
                    </label>
                    <input
                      type="text"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      placeholder="Your Company Ltd."
                      className="w-full px-4 py-3 rounded-md border border-border text-sm text-text-primary bg-white focus:outline-none focus:ring-2 focus:ring-accent/30 focus:border-accent"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-text-primary mb-1.5">
                      Email Address <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="john@company.com"
                      className={`w-full px-4 py-3 rounded-md border text-sm text-text-primary bg-white focus:outline-none focus:ring-2 focus:ring-accent/30 focus:border-accent ${errors.email ? 'border-red-400' : 'border-border'}`}
                    />
                    {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-text-primary mb-1.5">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+1 555 123 4567"
                      className="w-full px-4 py-3 rounded-md border border-border text-sm text-text-primary bg-white focus:outline-none focus:ring-2 focus:ring-accent/30 focus:border-accent"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-text-primary mb-1.5">
                      Country
                    </label>
                    <input
                      type="text"
                      name="country"
                      value={formData.country}
                      onChange={handleChange}
                      placeholder="United States"
                      className="w-full px-4 py-3 rounded-md border border-border text-sm text-text-primary bg-white focus:outline-none focus:ring-2 focus:ring-accent/30 focus:border-accent"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-text-primary mb-1.5">
                      Inquiry Type <span className="text-red-500">*</span>
                    </label>
                    <select
                      name="inquiryType"
                      value={formData.inquiryType}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 rounded-md border text-sm text-text-primary bg-white focus:outline-none focus:ring-2 focus:ring-accent/30 focus:border-accent ${errors.inquiryType ? 'border-red-400' : 'border-border'}`}
                    >
                      <option value="">Select inquiry type</option>
                      {inquiryTypes.map((t) => (
                        <option key={t} value={t}>{t}</option>
                      ))}
                    </select>
                    {errors.inquiryType && <p className="text-red-500 text-xs mt-1">{errors.inquiryType}</p>}
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-text-primary mb-1.5">
                      Product Category
                    </label>
                    <select
                      name="productCategory"
                      value={formData.productCategory}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-md border border-border text-sm text-text-primary bg-white focus:outline-none focus:ring-2 focus:ring-accent/30 focus:border-accent"
                    >
                      <option value="">Select product category</option>
                      {productCategories.map((c) => (
                        <option key={c} value={c}>{c}</option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-text-primary mb-1.5">
                      Estimated Quantity
                    </label>
                    <input
                      type="text"
                      name="quantity"
                      value={formData.quantity}
                      onChange={handleChange}
                      placeholder="e.g., 1,000 - 5,000 units"
                      className="w-full px-4 py-3 rounded-md border border-border text-sm text-text-primary bg-white focus:outline-none focus:ring-2 focus:ring-accent/30 focus:border-accent"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-text-primary mb-1.5">
                      Target Timeline
                    </label>
                    <input
                      type="text"
                      name="timeline"
                      value={formData.timeline}
                      onChange={handleChange}
                      placeholder="e.g., Within 3 months"
                      className="w-full px-4 py-3 rounded-md border border-border text-sm text-text-primary bg-white focus:outline-none focus:ring-2 focus:ring-accent/30 focus:border-accent"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-text-primary mb-1.5">
                      Budget Range
                    </label>
                    <input
                      type="text"
                      name="budget"
                      value={formData.budget}
                      onChange={handleChange}
                      placeholder="e.g., $10,000 - $50,000"
                      className="w-full px-4 py-3 rounded-md border border-border text-sm text-text-primary bg-white focus:outline-none focus:ring-2 focus:ring-accent/30 focus:border-accent"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-text-primary mb-1.5">
                    Product Description / Requirements <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    name="description"
                    value={formData.description}
                    onChange={handleChange}
                    rows={5}
                    placeholder="Please describe the products you need, including specifications, materials, dimensions, target price, and any certifications required. You can also attach files or link to reference products."
                    className={`w-full px-4 py-3 rounded-md border text-sm text-text-primary bg-white focus:outline-none focus:ring-2 focus:ring-accent/30 focus:border-accent resize-vertical ${errors.description ? 'border-red-400' : 'border-border'}`}
                  />
                  {errors.description && <p className="text-red-500 text-xs mt-1">{errors.description}</p>}
                </div>
                <button
                  type="submit"
                  className="inline-flex items-center gap-2 bg-accent text-white px-8 py-4 rounded-md text-base font-semibold hover:bg-accent-hover transition-colors"
                >
                  <Send className="w-4 h-4" />
                  Submit Inquiry
                </button>
                <p className="text-text-muted text-xs">
                  By submitting this form, you agree to our privacy policy. We will never share your information with third parties.
                </p>
              </form>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              <div className="bg-bg-light rounded-lg border border-border p-6">
                <h3 className="font-semibold text-primary mb-4">Direct Contact</h3>
                <div className="space-y-4">
                  <a href="mailto:info@ssourcingchina.com" className="flex items-start gap-3 text-text-secondary text-sm hover:text-accent transition-colors">
                    <Mail className="w-4 h-4 mt-0.5 text-accent flex-shrink-0" />
                    info@ssourcingchina.com
                  </a>
                  <a href="tel:+862161234567" className="flex items-start gap-3 text-text-secondary text-sm hover:text-accent transition-colors">
                    <Phone className="w-4 h-4 mt-0.5 text-accent flex-shrink-0" />
                    +86 21-6123-4567
                  </a>
                  <div className="flex items-start gap-3 text-text-secondary text-sm">
                    <MapPin className="w-4 h-4 mt-0.5 text-accent flex-shrink-0" />
                    Room 1205, World Trade Center,<br />
                    Shanghai, China 200120
                  </div>
                  <div className="flex items-start gap-3 text-text-secondary text-sm">
                    <Clock className="w-4 h-4 mt-0.5 text-accent flex-shrink-0" />
                    Monday - Friday: 9:00 AM - 6:00 PM (CST, GMT+8)
                  </div>
                </div>
              </div>

              <div className="bg-bg-light rounded-lg border border-border p-6">
                <h3 className="font-semibold text-primary mb-4">Response Guarantee</h3>
                <ul className="space-y-3">
                  {[
                    'Initial response within 24 business hours',
                    'Detailed quote within 48-72 hours',
                    'Free sourcing consultation',
                    'No upfront fees or commitments',
                    'Confidentiality guaranteed',
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-success mt-0.5 flex-shrink-0" />
                      <span className="text-text-secondary text-sm">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-primary rounded-lg p-6">
                <h3 className="font-semibold text-white mb-3">Prefer a Direct Conversation?</h3>
                <p className="text-white/70 text-sm mb-4">
                  Schedule a call with our sourcing team to discuss your project in detail.
                </p>
                <a
                  href="tel:+862161234567"
                  className="inline-flex items-center gap-2 bg-accent text-white px-5 py-2.5 rounded-md text-sm font-semibold hover:bg-accent-hover transition-colors w-full justify-center"
                >
                  <Phone className="w-4 h-4" />
                  Call Us Now
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
