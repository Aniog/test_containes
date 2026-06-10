import React, { useState } from 'react'
import { MapPin, Phone, Mail, Clock, Send, CheckCircle, MessageSquare } from 'lucide-react'
import SectionHeading from '@/components/ui/SectionHeading'
import Button from '@/components/ui/Button'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    country: '',
    product: '',
    quantity: '',
    budget: '',
    timeline: '',
    message: '',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500))
    
    setIsSubmitting(false)
    setIsSubmitted(true)
  }

  if (isSubmitted) {
    return (
      <section className="py-20 bg-gradient-to-br from-primary to-primary-600 min-h-screen flex items-center">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="w-24 h-24 bg-accent rounded-full flex items-center justify-center mx-auto mb-8">
            <CheckCircle className="w-12 h-12 text-white" />
          </div>
          <h2 className="text-4xl font-bold text-white mb-4">Thank You!</h2>
          <p className="text-xl text-slate-200 mb-6">
            Your inquiry has been received successfully.
          </p>
          <p className="text-slate-300 mb-8">
            Our team will review your requirements and get back to you within <strong>24 hours</strong>. 
            In the meantime, feel free to explore our{' '}
            <a href="/case-studies" className="text-secondary hover:underline">case studies</a>
            {' '}or{' '}
            <a href="/blog" className="text-secondary hover:underline">sourcing guides</a>.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              variant="secondary" 
              onClick={() => {
                setIsSubmitted(false)
                setFormData({
                  name: '',
                  company: '',
                  email: '',
                  phone: '',
                  country: '',
                  product: '',
                  quantity: '',
                  budget: '',
                  timeline: '',
                  message: '',
                })
              }}
            >
              Submit Another Inquiry
            </Button>
            <a href="/" className="inline-flex items-center justify-center px-6 py-3 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-primary transition-colors">
              Back to Home
            </a>
          </div>
        </div>
      </section>
    )
  }

  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary to-primary-600 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Get in Touch
          </h1>
          <p className="text-xl text-slate-200 max-w-3xl mx-auto">
            Ready to start sourcing from China? Tell us about your requirements 
            and we'll provide a detailed plan within 24 hours.
          </p>
        </div>
      </section>

      {/* Contact Info & Form */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Contact Info */}
            <div className="lg:col-span-1">
              <h2 className="text-2xl font-bold text-primary mb-6">Contact Information</h2>
              <p className="text-slate-600 mb-8">
                Our team is available Monday to Friday, 9:00 AM to 6:00 PM (China Standard Time) 
                to assist with your sourcing inquiries.
              </p>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-secondary-50 rounded-xl flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-secondary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-primary mb-1">Office Address</h3>
                    <p className="text-slate-600 text-sm">
                      Room 1508, Building A<br />
                      Shenzhen Bay Technology Park<br />
                      Nanshan District, Shenzhen<br />
                      Guangdong Province, China 518000
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-secondary-50 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-secondary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-primary mb-1">Phone</h3>
                    <a href="tel:+8675588888888" className="text-slate-600 hover:text-secondary transition-colors">
                      +86 755 8888 8888
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-secondary-50 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-secondary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-primary mb-1">Email</h3>
                    <a href="mailto:info@ssourcingchina.com" className="text-slate-600 hover:text-secondary transition-colors">
                      info@ssourcingchina.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-secondary-50 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Clock className="w-6 h-6 text-secondary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-primary mb-1">Business Hours</h3>
                    <p className="text-slate-600 text-sm">
                      Monday - Friday: 9:00 AM - 6:00 PM (CST)<br />
                      Saturday - Sunday: Closed
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-8 p-6 bg-white rounded-xl border border-slate-200">
                <div className="flex items-center gap-3 mb-3">
                  <MessageSquare className="w-5 h-5 text-secondary" />
                  <h3 className="font-semibold text-primary">Quick Response</h3>
                </div>
                <p className="text-slate-600 text-sm">
                  We typically respond to all inquiries within <strong>24 hours</strong>. 
                  For urgent matters, please call us directly.
                </p>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-2xl p-8 shadow-lg border border-slate-200">
                <h2 className="text-2xl font-bold text-primary mb-2">Sourcing Inquiry Form</h2>
                <p className="text-slate-600 mb-8">Fill out the form below and we'll get back to you within 24 hours.</p>

                <form onSubmit={handleSubmit}>
                  <div className="grid md:grid-cols-2 gap-6 mb-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-2">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-secondary focus:border-secondary outline-none transition-colors"
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
                        className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-secondary focus:border-secondary outline-none transition-colors"
                        placeholder="Your Company Ltd."
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6 mb-6">
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-secondary focus:border-secondary outline-none transition-colors"
                        placeholder="john@company.com"
                      />
                    </div>
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-slate-700 mb-2">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-secondary focus:border-secondary outline-none transition-colors"
                        placeholder="+1 555 123 4567"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6 mb-6">
                    <div>
                      <label htmlFor="country" className="block text-sm font-medium text-slate-700 mb-2">
                        Country/Region
                      </label>
                      <select
                        id="country"
                        name="country"
                        value={formData.country}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-secondary focus:border-secondary outline-none transition-colors bg-white"
                      >
                        <option value="">Select country</option>
                        <option value="US">United States</option>
                        <option value="UK">United Kingdom</option>
                        <option value="DE">Germany</option>
                        <option value="FR">France</option>
                        <option value="AU">Australia</option>
                        <option value="CA">Canada</option>
                        <option value="NL">Netherlands</option>
                        <option value="SE">Sweden</option>
                        <option value="JP">Japan</option>
                        <option value="KR">South Korea</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                    <div>
                      <label htmlFor="product" className="block text-sm font-medium text-slate-700 mb-2">
                        Product Description *
                      </label>
                      <input
                        type="text"
                        id="product"
                        name="product"
                        value={formData.product}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-secondary focus:border-secondary outline-none transition-colors"
                        placeholder="What do you want to source?"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-3 gap-6 mb-6">
                    <div>
                      <label htmlFor="quantity" className="block text-sm font-medium text-slate-700 mb-2">
                        Estimated Quantity
                      </label>
                      <input
                        type="text"
                        id="quantity"
                        name="quantity"
                        value={formData.quantity}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-secondary focus:border-secondary outline-none transition-colors"
                        placeholder="e.g., 5,000 units"
                      />
                    </div>
                    <div>
                      <label htmlFor="budget" className="block text-sm font-medium text-slate-700 mb-2">
                        Target Budget (per unit)
                      </label>
                      <select
                        id="budget"
                        name="budget"
                        value={formData.budget}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-secondary focus:border-secondary outline-none transition-colors bg-white"
                      >
                        <option value="">Select range</option>
                        <option value="under-5">Under $5</option>
                        <option value="5-20">$5 - $20</option>
                        <option value="20-50">$20 - $50</option>
                        <option value="50-100">$50 - $100</option>
                        <option value="100-500">$100 - $500</option>
                        <option value="over-500">Over $500</option>
                      </select>
                    </div>
                    <div>
                      <label htmlFor="timeline" className="block text-sm font-medium text-slate-700 mb-2">
                        Timeline
                      </label>
                      <select
                        id="timeline"
                        name="timeline"
                        value={formData.timeline}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-secondary focus:border-secondary outline-none transition-colors bg-white"
                      >
                        <option value="">Select timeline</option>
                        <option value="1-2-months">1-2 months</option>
                        <option value="3-4-months">3-4 months</option>
                        <option value="5-6-months">5-6 months</option>
                        <option value="6-plus-months">6+ months</option>
                        <option value="flexible">Flexible</option>
                      </select>
                    </div>
                  </div>

                  <div className="mb-6">
                    <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-2">
                      Additional Details
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={5}
                      className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-secondary focus:border-secondary outline-none transition-colors resize-none"
                      placeholder="Tell us more about your project: specific requirements, existing supplier relationships, special quality standards, etc."
                    />
                  </div>

                  <Button type="submit" variant="secondary" size="lg" className="w-full" disabled={isSubmitting}>
                    {isSubmitting ? (
                      <>
                        <span className="inline-block animate-spin mr-2">⟳</span>
                        Sending Inquiry...
                      </>
                    ) : (
                      <>
                        <Send className="w-5 h-5 mr-2" />
                        Submit Inquiry
                      </>
                    )}
                  </Button>

                  <p className="text-sm text-slate-500 text-center mt-4">
                    By submitting this form, you agree to our{' '}
                    <a href="/privacy" className="text-secondary hover:underline">privacy policy</a>. 
                    We never spam or share your data.
                  </p>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Contact