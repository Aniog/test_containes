import { useState } from 'react'
import { Mail, Phone, MapPin, Clock, Send, CheckCircle, Loader2 } from 'lucide-react'
import { Button } from '@/components/ui/Button'

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

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    country: '',
    product: '',
    quantity: '',
    message: '',
  })
  const [status, setStatus] = useState('idle')

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('submitting')
    
    await new Promise((resolve) => setTimeout(resolve, 1500))
    
    console.log('Form submitted:', formData)
    setStatus('success')
  }

  if (status === 'success') {
    return (
      <section className="min-h-screen bg-neutral-50 flex items-center">
        <div className="max-w-2xl mx-auto px-4 text-center py-20">
          <div className="w-24 h-24 bg-accent-100 rounded-full flex items-center justify-center mx-auto mb-8">
            <CheckCircle className="w-12 h-12 text-accent-600" />
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-4">
            Thank You for Your Inquiry!
          </h1>
          <p className="text-lg text-neutral-600 mb-8 max-w-xl mx-auto">
            We've received your message and will get back to you within 24 hours. 
            Our team is excited to learn about your China sourcing needs.
          </p>
          <Button 
            variant="outline" 
            onClick={() => {
              setStatus('idle')
              setFormData({
                name: '',
                company: '',
                email: '',
                phone: '',
                country: '',
                product: '',
                quantity: '',
                message: '',
              })
            }}
          >
            Submit Another Inquiry
          </Button>
        </div>
      </section>
    )
  }

  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-neutral-50 via-white to-primary-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-neutral-900 mb-6">
            Contact Us
          </h1>
          <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
            Ready to start sourcing from China? Get in touch with our team and 
            we'll respond within 24 hours with a customized plan for your project.
          </p>
        </div>
      </section>

      {/* Contact Info & Form */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Contact Info */}
            <div className="lg:col-span-1">
              <h2 className="text-2xl font-bold text-neutral-900 mb-8">
                Get In Touch
              </h2>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-primary-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-neutral-900 mb-1">Email</h3>
                    <a href="mailto:contact@ssourcingchina.com" className="text-primary-600 hover:text-primary-700">
                      contact@ssourcingchina.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-primary-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-neutral-900 mb-1">Phone</h3>
                    <a href="tel:+862158881234" className="text-neutral-600 hover:text-primary-600">
                      +86 21 5888 1234
                    </a>
                    <p className="text-sm text-neutral-500 mt-1">WeChat/WhatsApp available</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-primary-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-neutral-900 mb-1">Office</h3>
                    <p className="text-neutral-600">
                      Shanghai, China
                    </p>
                    <p className="text-sm text-neutral-500 mt-1">On-site visits by appointment</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Clock className="w-6 h-6 text-primary-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-neutral-900 mb-1">Business Hours</h3>
                    <p className="text-neutral-600">
                      Mon-Fri: 9:00 AM - 6:00 PM (CST)
                    </p>
                    <p className="text-sm text-neutral-500 mt-1">
                      Urgent inquiries: 24h response guaranteed
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-12 pt-8 border-t border-neutral-200">
                <h3 className="font-semibold text-neutral-900 mb-4">Quick Response Guarantee</h3>
                <div className="space-y-3">
                  <div className="flex items-center gap-3 text-sm text-neutral-600">
                    <CheckCircle className="w-5 h-5 text-accent-500" />
                    <span>Quote within 24 hours</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm text-neutral-600">
                    <CheckCircle className="w-5 h-5 text-accent-500" />
                    <span>Sample sourcing within 48 hours</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm text-neutral-600">
                    <CheckCircle className="w-5 h-5 text-accent-500" />
                    <span>Expert consultation on every inquiry</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Form */}
            <div className="lg:col-span-2">
              <div className="bg-neutral-50 rounded-2xl p-8">
                <h2 className="text-2xl font-bold text-neutral-900 mb-2">
                  Request a Free Quote
                </h2>
                <p className="text-neutral-600 mb-8">
                  Tell us about your sourcing needs and we'll get back to you with a tailored solution.
                </p>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-neutral-700 mb-2">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 bg-white"
                        placeholder="John Smith"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-neutral-700 mb-2">
                        Company Name
                      </label>
                      <input
                        type="text"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 bg-white"
                        placeholder="Your Company Ltd."
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-neutral-700 mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 bg-white"
                        placeholder="john@company.com"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-neutral-700 mb-2">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 bg-white"
                        placeholder="+1 555 123 4567"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-3 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-neutral-700 mb-2">
                        Country
                      </label>
                      <input
                        type="text"
                        name="country"
                        value={formData.country}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 bg-white"
                        placeholder="United States"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-neutral-700 mb-2">
                        Product Category *
                      </label>
                      <select
                        name="product"
                        required
                        value={formData.product}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 bg-white"
                      >
                        <option value="">Select category</option>
                        {productCategories.map((cat) => (
                          <option key={cat} value={cat}>{cat}</option>
                        ))}
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-neutral-700 mb-2">
                        Estimated Quantity
                      </label>
                      <input
                        type="text"
                        name="quantity"
                        value={formData.quantity}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 bg-white"
                        placeholder="e.g., 5,000 units"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-neutral-700 mb-2">
                      Tell Us About Your Project
                    </label>
                    <textarea
                      name="message"
                      rows={5}
                      required
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 bg-white resize-none"
                      placeholder="Describe your product requirements, target price, quality standards, timeline, and any other relevant details..."
                    ></textarea>
                  </div>

                  <Button
                    type="submit"
                    size="lg"
                    className="w-full"
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
                        Send Inquiry
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
        </div>
      </section>
    </>
  )
}