import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Button } from '@/components/ui/Button'
import { Send, CheckCircle, Loader2 } from 'lucide-react'

const productCategories = [
  'Furniture',
  'Textiles & Apparel',
  'Electronics',
  'Hardware & Tools',
  'Consumer Goods',
  'Packaging',
  'Industrial Parts',
  'Health & Beauty',
  'Other',
]

export function CTA() {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    product: '',
    quantity: '',
    message: '',
  })
  const [status, setStatus] = useState('idle') // idle, submitting, success, error

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('submitting')
    
    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500))
    
    // In production, this would send to a backend
    console.log('Form submitted:', formData)
    setStatus('success')
  }

  if (status === 'success') {
    return (
      <section className="py-20 bg-primary-600" id="contact">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="w-20 h-20 bg-primary-500 rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircle className="w-10 h-10 text-white" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Thank You!
          </h2>
          <p className="text-xl text-primary-100 mb-8 max-w-2xl mx-auto">
            We've received your inquiry and will get back to you within 24 hours.
            Our team is excited to help with your China sourcing needs.
          </p>
          <button
            onClick={() => setStatus('idle')}
            className="text-primary-100 underline hover:text-white"
          >
            Submit another inquiry
          </button>
        </div>
      </section>
    )
  }

  return (
    <section className="py-20 bg-neutral-900" id="contact">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div>
            <div className="inline-block px-4 py-1 bg-primary-900/50 text-primary-300 rounded-full text-sm font-medium mb-6">
              Get Started Today
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Source from China?
            </h2>
            <p className="text-lg text-neutral-300 mb-8">
              Get a free, no-obligation quote for your sourcing project. 
              Tell us what you need, and we'll respond within 24 hours with 
              a tailored solution.
            </p>

            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <CheckCircle className="w-5 h-5 text-accent-400" />
                <span className="text-neutral-300">Free consultation and quote</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle className="w-5 h-5 text-accent-400" />
                <span className="text-neutral-300">Response within 24 hours</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle className="w-5 h-5 text-accent-400" />
                <span className="text-neutral-300">No commitment required</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle className="w-5 h-5 text-accent-400" />
                <span className="text-neutral-300">Expert guidance on your project</span>
              </div>
            </div>

            <div className="mt-8 pt-8 border-t border-neutral-700">
              <p className="text-sm text-neutral-500 mb-2">Trusted by buyers from</p>
              <div className="flex gap-4 text-neutral-400">
                <span>United States</span>
                <span>•</span>
                <span>United Kingdom</span>
                <span>•</span>
                <span>Germany</span>
                <span>•</span>
                <span>Australia</span>
                <span>•</span>
                <span>Canada</span>
              </div>
            </div>
          </div>

          {/* Right Form */}
          <div className="bg-white rounded-2xl p-8 shadow-2xl">
            <h3 className="text-xl font-bold text-neutral-900 mb-6">
              Get a Free Sourcing Quote
            </h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-neutral-700 mb-1">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors"
                    placeholder="John Smith"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-neutral-700 mb-1">
                    Company Name
                  </label>
                  <input
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors"
                    placeholder="Your Company Ltd."
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-neutral-700 mb-1">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors"
                    placeholder="john@company.com"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-neutral-700 mb-1">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors"
                    placeholder="+1 555 123 4567"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-neutral-700 mb-1">
                    Product Category *
                  </label>
                  <select
                    name="product"
                    required
                    value={formData.product}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors"
                  >
                    <option value="">Select category</option>
                    {productCategories.map((cat) => (
                      <option key={cat} value={cat}>{cat}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-neutral-700 mb-1">
                    Estimated Quantity
                  </label>
                  <input
                    type="text"
                    name="quantity"
                    value={formData.quantity}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors"
                    placeholder="e.g., 5,000 units"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-neutral-700 mb-1">
                  Tell Us About Your Project
                </label>
                <textarea
                  name="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors resize-none"
                  placeholder="Describe your product requirements, target price, quality standards, timeline, etc."
                ></textarea>
              </div>

              <Button
                type="submit"
                className="w-full"
                size="lg"
                disabled={status === 'submitting'}
              >
                {status === 'submitting' ? (
                  <>
                    <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                    Sending...
                  </>
                ) : (
                  <>
                    <Send className="w-5 h-5 mr-2" />
                    Get Free Quote
                  </>
                )}
              </Button>

              <p className="text-xs text-neutral-500 text-center">
                By submitting this form, you agree to our privacy policy. 
                We will never share your information with third parties.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}