import React, { useState } from 'react'
import {
  Mail, Phone, MapPin, Clock, Send, CheckCircle, ArrowRight, MessageCircle, Globe
} from 'lucide-react'
import SectionHeader from '@/components/SectionHeader'

const productCategories = [
  'Electronics & Components',
  'Home & Garden',
  'Apparel & Textiles',
  'Industrial & Machinery',
  'Consumer Goods',
  'Building & Hardware',
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

const contactInfo = [
  { icon: Mail, label: 'Email', value: 'info@ssourcingchina.com', href: 'mailto:info@ssourcingchina.com' },
  { icon: Phone, label: 'Phone', value: '+86 123 4567 8900', href: 'tel:+8612345678900' },
  { icon: MapPin, label: 'Office', value: 'Shenzhen, Guangdong, China', href: null },
  { icon: Clock, label: 'Hours', value: 'Mon-Fri 9:00-18:00 (GMT+8)', href: null },
]

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    country: '',
    phone: '',
    productCategory: '',
    productDescription: '',
    quantity: '',
    budget: '',
    timeline: '',
    message: '',
  })
  const [submitted, setSubmitted] = useState(false)
  const [submitting, setSubmitting] = useState(false)

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setSubmitting(true)
    // Simulate submission
    await new Promise((r) => setTimeout(r, 1000))
    setSubmitting(false)
    setSubmitted(true)
  }

  return (
    <div>
      {/* Hero */}
      <section className="bg-gradient-to-br from-navy-900 to-navy-700 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-block px-3 py-1 bg-white/10 text-white text-xs font-semibold uppercase tracking-wider rounded-full mb-4">
            Get In Touch
          </span>
          <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-6">Contact Us</h1>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Tell us about your sourcing needs and our team will respond within 24 hours with a detailed proposal.
          </p>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-10">
            {/* Contact Info */}
            <div className="lg:col-span-1">
              <div className="bg-white rounded-2xl border border-gray-200 p-8 sticky top-24">
                <h2 className="text-xl font-bold text-navy-900 mb-6">Contact Information</h2>
                <div className="space-y-5 mb-8">
                  {contactInfo.map((item) => (
                    <div key={item.label} className="flex items-start gap-4">
                      <div className="w-10 h-10 bg-navy-50 rounded-lg flex items-center justify-center shrink-0">
                        <item.icon className="w-5 h-5 text-navy-600" />
                      </div>
                      <div>
                        <p className="text-xs text-gray-400 uppercase tracking-wider font-medium mb-0.5">{item.label}</p>
                        {item.href ? (
                          <a href={item.href} className="text-sm text-navy-700 font-medium hover:text-accent-500 transition-colors">
                            {item.value}
                          </a>
                        ) : (
                          <p className="text-sm text-navy-700 font-medium">{item.value}</p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>

                <div className="border-t border-gray-100 pt-6">
                  <h3 className="text-sm font-semibold text-navy-900 mb-3">What to Expect</h3>
                  <ul className="space-y-2">
                    {[
                      'Response within 24 hours',
                      'Free sourcing consultation',
                      'Detailed cost breakdown',
                      'No commitment required',
                    ].map((item) => (
                      <li key={item} className="flex items-center gap-2 text-sm text-gray-600">
                        <CheckCircle className="w-4 h-4 text-green-500 shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {/* Form */}
            <div className="lg:col-span-2">
              {submitted ? (
                <div className="bg-white rounded-2xl border border-gray-200 p-12 text-center">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                    <CheckCircle className="w-8 h-8 text-green-600" />
                  </div>
                  <h2 className="text-2xl font-bold text-navy-900 mb-3">Thank You!</h2>
                  <p className="text-gray-500 mb-6 max-w-md mx-auto">
                    Your inquiry has been submitted. Our sourcing team will review your requirements and respond within 24 hours.
                  </p>
                  <button
                    onClick={() => { setSubmitted(false); setFormData({ name: '', email: '', company: '', country: '', phone: '', productCategory: '', productDescription: '', quantity: '', budget: '', timeline: '', message: '' }) }}
                    className="px-6 py-2.5 bg-navy-600 hover:bg-navy-700 text-white text-sm font-semibold rounded-lg transition-colors"
                  >
                    Submit Another Inquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="bg-white rounded-2xl border border-gray-200 p-8">
                  <h2 className="text-xl font-bold text-navy-900 mb-1">Sourcing Inquiry Form</h2>
                  <p className="text-sm text-gray-500 mb-8">Fields marked with * are required.</p>

                  <div className="space-y-8">
                    {/* Contact Details */}
                    <div>
                      <h3 className="text-sm font-semibold text-navy-700 uppercase tracking-wider mb-4 pb-2 border-b border-gray-100">Your Details</h3>
                      <div className="grid md:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-1.5">Full Name *</label>
                          <input
                            type="text"
                            name="name"
                            required
                            value={formData.name}
                            onChange={handleChange}
                            placeholder="John Smith"
                            className="w-full px-4 py-2.5 bg-gray-50 border border-gray-200 rounded-lg text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-navy-500 focus:border-transparent transition-all"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-1.5">Email *</label>
                          <input
                            type="email"
                            name="email"
                            required
                            value={formData.email}
                            onChange={handleChange}
                            placeholder="john@company.com"
                            className="w-full px-4 py-2.5 bg-gray-50 border border-gray-200 rounded-lg text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-navy-500 focus:border-transparent transition-all"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-1.5">Company</label>
                          <input
                            type="text"
                            name="company"
                            value={formData.company}
                            onChange={handleChange}
                            placeholder="Your company name"
                            className="w-full px-4 py-2.5 bg-gray-50 border border-gray-200 rounded-lg text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-navy-500 focus:border-transparent transition-all"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-1.5">Country *</label>
                          <input
                            type="text"
                            name="country"
                            required
                            value={formData.country}
                            onChange={handleChange}
                            placeholder="e.g. United States"
                            className="w-full px-4 py-2.5 bg-gray-50 border border-gray-200 rounded-lg text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-navy-500 focus:border-transparent transition-all"
                          />
                        </div>
                        <div className="md:col-span-2">
                          <label className="block text-sm font-medium text-gray-700 mb-1.5">Phone</label>
                          <input
                            type="tel"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            placeholder="+1 234 567 8900"
                            className="w-full px-4 py-2.5 bg-gray-50 border border-gray-200 rounded-lg text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-navy-500 focus:border-transparent transition-all"
                          />
                        </div>
                      </div>
                    </div>

                    {/* Product Details */}
                    <div>
                      <h3 className="text-sm font-semibold text-navy-700 uppercase tracking-wider mb-4 pb-2 border-b border-gray-100">Product Requirements</h3>
                      <div className="grid md:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-1.5">Product Category *</label>
                          <select
                            name="productCategory"
                            required
                            value={formData.productCategory}
                            onChange={handleChange}
                            className="w-full px-4 py-2.5 bg-gray-50 border border-gray-200 rounded-lg text-sm text-gray-900 focus:outline-none focus:ring-2 focus:ring-navy-500 focus:border-transparent transition-all appearance-none"
                          >
                            <option value="">Select category</option>
                            {productCategories.map((cat) => (
                              <option key={cat} value={cat}>{cat}</option>
                            ))}
                          </select>
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-1.5">Estimated Quantity</label>
                          <input
                            type="text"
                            name="quantity"
                            value={formData.quantity}
                            onChange={handleChange}
                            placeholder="e.g. 5,000 units"
                            className="w-full px-4 py-2.5 bg-gray-50 border border-gray-200 rounded-lg text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-navy-500 focus:border-transparent transition-all"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-1.5">Budget Range</label>
                          <select
                            name="budget"
                            value={formData.budget}
                            onChange={handleChange}
                            className="w-full px-4 py-2.5 bg-gray-50 border border-gray-200 rounded-lg text-sm text-gray-900 focus:outline-none focus:ring-2 focus:ring-navy-500 focus:border-transparent transition-all appearance-none"
                          >
                            <option value="">Select budget range</option>
                            {budgetRanges.map((range) => (
                              <option key={range} value={range}>{range}</option>
                            ))}
                          </select>
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-1.5">Timeline</label>
                          <input
                            type="text"
                            name="timeline"
                            value={formData.timeline}
                            onChange={handleChange}
                            placeholder="e.g. Need delivery by September"
                            className="w-full px-4 py-2.5 bg-gray-50 border border-gray-200 rounded-lg text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-navy-500 focus:border-transparent transition-all"
                          />
                        </div>
                        <div className="md:col-span-2">
                          <label className="block text-sm font-medium text-gray-700 mb-1.5">Product Description *</label>
                          <textarea
                            name="productDescription"
                            required
                            rows={4}
                            value={formData.productDescription}
                            onChange={handleChange}
                            placeholder="Describe the product(s) you need sourced. Include specifications, materials, dimensions, and any certifications required."
                            className="w-full px-4 py-2.5 bg-gray-50 border border-gray-200 rounded-lg text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-navy-500 focus:border-transparent transition-all resize-none"
                          />
                        </div>
                      </div>
                    </div>

                    {/* Additional info */}
                    <div>
                      <h3 className="text-sm font-semibold text-navy-700 uppercase tracking-wider mb-4 pb-2 border-b border-gray-100">Additional Information</h3>
                      <textarea
                        name="message"
                        rows={3}
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Any additional details, questions, or specific requirements."
                        className="w-full px-4 py-2.5 bg-gray-50 border border-gray-200 rounded-lg text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-navy-500 focus:border-transparent transition-all resize-none"
                      />
                    </div>
                  </div>

                  <button
                    type="submit"
                    disabled={submitting}
                    className="mt-8 w-full flex items-center justify-center gap-2 px-6 py-3.5 bg-accent-500 hover:bg-accent-600 disabled:opacity-50 disabled:cursor-not-allowed text-white font-semibold rounded-lg transition-colors"
                  >
                    {submitting ? (
                      <>
                        <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        Submitting...
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        Submit Sourcing Inquiry
                      </>
                    )}
                  </button>

                  <p className="text-xs text-gray-400 text-center mt-4">
                    Your information is kept confidential. We will never share your details with third parties.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Contact
