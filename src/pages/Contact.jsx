import { useState } from 'react'
import {
  Mail, Phone, MapPin, Clock, Send, CheckCircle,
  Globe, MessageSquare, ArrowRight
} from 'lucide-react'

const inquiryTypes = [
  'Supplier Sourcing',
  'Factory Verification',
  'Quality Inspection',
  'Production Monitoring',
  'Shipping Coordination',
  'Full Sourcing Package',
  'Other',
]

const budgetRanges = [
  'Under $5,000',
  '$5,000 - $25,000',
  '$25,000 - $100,000',
  '$100,000 - $500,000',
  'Over $500,000',
  'Not sure yet',
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
    budget: '',
    timeline: '',
    additionalNotes: '',
  })
  const [status, setStatus] = useState('idle')
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
    if (!formData.company.trim()) newErrors.company = 'Company name is required'
    if (!formData.inquiryType) newErrors.inquiryType = 'Please select an inquiry type'
    if (!formData.productDescription.trim()) newErrors.productDescription = 'Please describe the product you need'
    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!validate()) return
    setStatus('submitting')
    // Simulate submission
    setTimeout(() => {
      setStatus('success')
      setFormData({
        name: '', email: '', company: '', phone: '', country: '',
        inquiryType: '', productDescription: '', quantity: '',
        budget: '', timeline: '', additionalNotes: '',
      })
    }, 1500)
  }

  const inputClass = (field) =>
    `w-full px-4 py-3 rounded-lg border ${
      errors[field] ? 'border-red-400 bg-red-50' : 'border-border bg-white'
    } text-text-primary text-sm focus:outline-none focus:ring-2 focus:ring-accent/30 focus:border-accent transition-colors`

  return (
    <>
      {/* Page Hero */}
      <section className="bg-primary-dark py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-3xl">
            <span className="text-accent font-semibold text-sm uppercase tracking-wider">Contact Us</span>
            <h1 className="text-3xl lg:text-5xl font-extrabold text-white mt-3 mb-4">
              Get a Free Sourcing Quote
            </h1>
            <p className="text-blue-200 text-lg leading-relaxed">
              Tell us what you need and our team will get back to you within 24 hours with a tailored sourcing plan and quote.
            </p>
          </div>
        </div>
      </section>

      {/* Form + Contact Info */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Contact Info Sidebar */}
            <div className="lg:col-span-1">
              <div className="sticky top-24 space-y-8">
                <div>
                  <h2 className="text-xl font-bold text-text-primary mb-6">Get in Touch</h2>
                  <div className="space-y-5">
                    <a href="mailto:info@ssourcingchina.com" className="flex items-start gap-4 group">
                      <div className="w-10 h-10 bg-accent-light rounded-lg flex items-center justify-center shrink-0">
                        <Mail className="w-5 h-5 text-accent" />
                      </div>
                      <div>
                        <div className="font-medium text-text-primary text-sm group-hover:text-accent transition-colors">Email</div>
                        <div className="text-text-secondary text-sm">info@ssourcingchina.com</div>
                      </div>
                    </a>
                    <a href="tel:+86-755-8888-0000" className="flex items-start gap-4 group">
                      <div className="w-10 h-10 bg-accent-light rounded-lg flex items-center justify-center shrink-0">
                        <Phone className="w-5 h-5 text-accent" />
                      </div>
                      <div>
                        <div className="font-medium text-text-primary text-sm group-hover:text-accent transition-colors">Phone</div>
                        <div className="text-text-secondary text-sm">+86 755-8888-0000</div>
                      </div>
                    </a>
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 bg-accent-light rounded-lg flex items-center justify-center shrink-0">
                        <MapPin className="w-5 h-5 text-accent" />
                      </div>
                      <div>
                        <div className="font-medium text-text-primary text-sm">Office</div>
                        <div className="text-text-secondary text-sm">Shenzhen, Guangdong, China</div>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 bg-accent-light rounded-lg flex items-center justify-center shrink-0">
                        <Clock className="w-5 h-5 text-accent" />
                      </div>
                      <div>
                        <div className="font-medium text-text-primary text-sm">Response Time</div>
                        <div className="text-text-secondary text-sm">Within 24 hours</div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Trust badges */}
                <div className="bg-surface-light rounded-xl p-6 border border-border">
                  <h3 className="font-semibold text-text-primary text-sm mb-4">Why Work With Us?</h3>
                  <ul className="space-y-3">
                    {[
                      'Free sourcing consultation',
                      'No hidden fees or obligations',
                      'On-the-ground team in China',
                      '500+ international clients',
                      '24-hour response time',
                    ].map((item) => (
                      <li key={item} className="flex items-center gap-2 text-text-secondary text-sm">
                        <CheckCircle className="w-4 h-4 text-green-600 shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {/* Inquiry Form */}
            <div className="lg:col-span-2">
              {status === 'success' ? (
                <div className="bg-green-50 rounded-2xl border border-green-200 p-12 text-center">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                    <CheckCircle className="w-8 h-8 text-green-600" />
                  </div>
                  <h2 className="text-2xl font-bold text-text-primary mb-3">Inquiry Submitted Successfully</h2>
                  <p className="text-text-secondary mb-6 max-w-md mx-auto">
                    Thank you for reaching out. Our sourcing team will review your requirements and get back to you within 24 hours with a tailored plan.
                  </p>
                  <button
                    onClick={() => setStatus('idle')}
                    className="inline-flex items-center px-6 py-3 bg-accent hover:bg-accent-hover text-white font-semibold rounded-lg transition-colors"
                  >
                    Submit Another Inquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="bg-surface-light rounded-2xl border border-border p-8 lg:p-10">
                  <h2 className="text-xl font-bold text-text-primary mb-1">Sourcing Inquiry Form</h2>
                  <p className="text-text-secondary text-sm mb-8">Fields marked with * are required.</p>

                  <div className="space-y-6">
                    {/* Contact Details */}
                    <div>
                      <h3 className="font-semibold text-text-primary text-sm uppercase tracking-wider mb-4">Contact Information</h3>
                      <div className="grid sm:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm font-medium text-text-primary mb-1.5">Full Name *</label>
                          <input type="text" name="name" value={formData.name} onChange={handleChange} className={inputClass('name')} placeholder="John Smith" />
                          {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-text-primary mb-1.5">Email Address *</label>
                          <input type="email" name="email" value={formData.email} onChange={handleChange} className={inputClass('email')} placeholder="john@company.com" />
                          {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-text-primary mb-1.5">Company Name *</label>
                          <input type="text" name="company" value={formData.company} onChange={handleChange} className={inputClass('company')} placeholder="Your Company Ltd." />
                          {errors.company && <p className="text-red-500 text-xs mt-1">{errors.company}</p>}
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-text-primary mb-1.5">Phone Number</label>
                          <input type="tel" name="phone" value={formData.phone} onChange={handleChange} className={inputClass('phone')} placeholder="+1 555-000-0000" />
                        </div>
                        <div className="sm:col-span-2">
                          <label className="block text-sm font-medium text-text-primary mb-1.5">Country</label>
                          <input type="text" name="country" value={formData.country} onChange={handleChange} className={inputClass('country')} placeholder="United States" />
                        </div>
                      </div>
                    </div>

                    {/* Sourcing Details */}
                    <div>
                      <h3 className="font-semibold text-text-primary text-sm uppercase tracking-wider mb-4">Sourcing Requirements</h3>
                      <div className="grid sm:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm font-medium text-text-primary mb-1.5">Inquiry Type *</label>
                          <select name="inquiryType" value={formData.inquiryType} onChange={handleChange} className={inputClass('inquiryType')}>
                            <option value="">Select a service</option>
                            {inquiryTypes.map((type) => (
                              <option key={type} value={type}>{type}</option>
                            ))}
                          </select>
                          {errors.inquiryType && <p className="text-red-500 text-xs mt-1">{errors.inquiryType}</p>}
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-text-primary mb-1.5">Estimated Quantity</label>
                          <input type="text" name="quantity" value={formData.quantity} onChange={handleChange} className={inputClass('quantity')} placeholder="e.g. 1,000 units" />
                        </div>
                        <div className="sm:col-span-2">
                          <label className="block text-sm font-medium text-text-primary mb-1.5">Product Description *</label>
                          <textarea name="productDescription" value={formData.productDescription} onChange={handleChange} rows={4} className={inputClass('productDescription')} placeholder="Describe the product you need sourced, including specifications, materials, dimensions, and any certifications required." />
                          {errors.productDescription && <p className="text-red-500 text-xs mt-1">{errors.productDescription}</p>}
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-text-primary mb-1.5">Budget Range</label>
                          <select name="budget" value={formData.budget} onChange={handleChange} className={inputClass('budget')}>
                            <option value="">Select budget range</option>
                            {budgetRanges.map((range) => (
                              <option key={range} value={range}>{range}</option>
                            ))}
                          </select>
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-text-primary mb-1.5">Desired Timeline</label>
                          <input type="text" name="timeline" value={formData.timeline} onChange={handleChange} className={inputClass('timeline')} placeholder="e.g. 8 weeks" />
                        </div>
                        <div className="sm:col-span-2">
                          <label className="block text-sm font-medium text-text-primary mb-1.5">Additional Notes</label>
                          <textarea name="additionalNotes" value={formData.additionalNotes} onChange={handleChange} rows={3} className={inputClass('additionalNotes')} placeholder="Any additional information that would help us understand your needs better." />
                        </div>
                      </div>
                    </div>

                    <button
                      type="submit"
                      disabled={status === 'submitting'}
                      className="w-full flex items-center justify-center px-8 py-4 bg-accent hover:bg-accent-hover disabled:opacity-70 text-white font-semibold rounded-lg transition-colors text-base"
                    >
                      {status === 'submitting' ? (
                        <>
                          <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin mr-2" />
                          Submitting...
                        </>
                      ) : (
                        <>
                          <Send className="w-5 h-5 mr-2" />
                          Submit Sourcing Inquiry
                        </>
                      )}
                    </button>

                    <p className="text-text-muted text-xs text-center">
                      By submitting this form, you agree to be contacted by our team regarding your sourcing inquiry.
                    </p>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
