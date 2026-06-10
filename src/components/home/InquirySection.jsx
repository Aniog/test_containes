import React, { useState } from 'react'
import { Send, CheckCircle } from 'lucide-react'
import SectionHeading from '@/components/ui/SectionHeading'
import Button from '@/components/ui/Button'

const InquirySection = () => {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    product: '',
    quantity: '',
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
      <section className="py-20 bg-gradient-to-br from-primary to-primary-600">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="w-20 h-20 bg-accent rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircle className="w-10 h-10 text-white" />
          </div>
          <h2 className="text-3xl font-bold text-white mb-4">Thank You!</h2>
          <p className="text-xl text-slate-200 mb-6">
            Your inquiry has been received. We'll get back to you within 24 hours.
          </p>
          <p className="text-slate-300">
            In the meantime, feel free to explore our{' '}
            <a href="/case-studies" className="text-secondary hover:underline">case studies</a>
            {' '}or{' '}
            <a href="/blog" className="text-secondary hover:underline">sourcing guides</a>.
          </p>
        </div>
      </section>
    )
  }

  return (
    <section className="py-20 bg-gradient-to-br from-primary to-primary-600" id="contact">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="Get a Free Sourcing Quote"
          subtitle="Tell us about your requirements and we'll provide a detailed plan within 24 hours"
          light
        />

        <form onSubmit={handleSubmit} className="bg-white rounded-2xl p-8 shadow-2xl">
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
              rows={4}
              className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-secondary focus:border-secondary outline-none transition-colors resize-none"
              placeholder="Timeline, target price, special requirements..."
            />
          </div>

          <Button type="submit" variant="secondary" size="lg" className="w-full" disabled={isSubmitting}>
            {isSubmitting ? (
              <>
                <span className="inline-block animate-spin mr-2">⟳</span>
                Sending...
              </>
            ) : (
              <>
                <Send className="w-5 h-5 mr-2" />
                Submit Inquiry
              </>
            )}
          </Button>

          <p className="text-sm text-slate-500 text-center mt-4">
            By submitting this form, you agree to our privacy policy. We never spam or share your data.
          </p>
        </form>
      </div>
    </section>
  )
}

export default InquirySection