import { useState } from 'react'
import { Mail, Phone, MapPin, Clock, Send, CheckCircle, AlertCircle } from 'lucide-react'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    country: '',
    product: '',
    quantity: '',
    budget: '',
    timeline: '',
    message: '',
  })
  const [status, setStatus] = useState('idle')
  const [error, setError] = useState(null)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setError(null)
    setStatus('submitting')

    // Simulate form submission
    try {
      await new Promise((resolve) => setTimeout(resolve, 1500))
      setStatus('success')
      setFormData({
        name: '',
        email: '',
        company: '',
        country: '',
        product: '',
        quantity: '',
        budget: '',
        timeline: '',
        message: '',
      })
    } catch (err) {
      setError(err.message || 'Failed to submit. Please try again.')
      setStatus('error')
    }
  }

  if (status === 'success') {
    return (
      <div className="min-h-[60vh] flex items-center justify-center bg-gray-50">
        <div className="text-center max-w-md mx-auto px-4">
          <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircle className="w-8 h-8 text-green-600" />
          </div>
          <h2 className="heading-md text-blue-900 mb-4">Thank You!</h2>
          <p className="text-gray-600 mb-8">
            We have received your sourcing request. Our team will review it and get back to you within 24 hours.
          </p>
          <button
            onClick={() => setStatus('idle')}
            className="btn-primary"
          >
            Submit Another Request
          </button>
        </div>
      </div>
    )
  }

  return (
    <div>
      {/* Hero */}
      <section className="bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900 text-white py-20 md:py-28">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <span className="text-blue-300 font-semibold text-sm uppercase tracking-wider">Contact Us</span>
            <h1 className="heading-xl text-white mt-3 mb-6">Get a Free Sourcing Quote</h1>
            <p className="text-xl text-blue-100 leading-relaxed">
              Tell us what you need and we will provide a detailed sourcing plan and quote within 24 hours.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Form */}
            <div className="lg:col-span-2">
              <h2 className="heading-md text-blue-900 mb-6">Sourcing Request Form</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1.5">
                      Full Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="John Smith"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1.5">
                      Email Address <span className="text-red-500">*</span>
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="john@company.com"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-1.5">
                      Company Name
                    </label>
                    <input
                      id="company"
                      name="company"
                      type="text"
                      value={formData.company}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="Your Company Ltd."
                    />
                  </div>
                  <div>
                    <label htmlFor="country" className="block text-sm font-medium text-gray-700 mb-1.5">
                      Country <span className="text-red-500">*</span>
                    </label>
                    <input
                      id="country"
                      name="country"
                      type="text"
                      value={formData.country}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="United States"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="product" className="block text-sm font-medium text-gray-700 mb-1.5">
                    Product Description <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    id="product"
                    name="product"
                    rows={3}
                    value={formData.product}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Describe the product you want to source, including specifications, materials, and any special requirements."
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div>
                    <label htmlFor="quantity" className="block text-sm font-medium text-gray-700 mb-1.5">
                      Estimated Quantity
                    </label>
                    <input
                      id="quantity"
                      name="quantity"
                      type="text"
                      value={formData.quantity}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="e.g., 5,000 units"
                    />
                  </div>
                  <div>
                    <label htmlFor="budget" className="block text-sm font-medium text-gray-700 mb-1.5">
                      Target Budget
                    </label>
                    <input
                      id="budget"
                      name="budget"
                      type="text"
                      value={formData.budget}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="e.g., $10,000 - $20,000"
                    />
                  </div>
                  <div>
                    <label htmlFor="timeline" className="block text-sm font-medium text-gray-700 mb-1.5">
                      Desired Timeline
                    </label>
                    <input
                      id="timeline"
                      name="timeline"
                      type="text"
                      value={formData.timeline}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="e.g., 8 weeks"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1.5">
                    Additional Information
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Any other details that would help us understand your needs better."
                  />
                </div>

                {status === 'error' && error && (
                  <div className="flex items-center gap-2 text-red-600 bg-red-50 p-4 rounded-lg">
                    <AlertCircle className="w-5 h-5 flex-shrink-0" />
                    <span>{error}</span>
                  </div>
                )}

                <button
                  type="submit"
                  disabled={status === 'submitting'}
                  className="btn-primary w-full md:w-auto"
                >
                  {status === 'submitting' ? (
                    <>
                      <span className="animate-spin mr-2">⏳</span>
                      Submitting...
                    </>
                  ) : (
                    <>
                      Submit Sourcing Request
                      <Send className="w-4 h-4 ml-2" />
                    </>
                  )}
                </button>
              </form>
            </div>

            {/* Contact Info */}
            <div className="lg:col-span-1">
              <div className="bg-gray-50 rounded-xl p-8 border border-gray-100 sticky top-24">
                <h3 className="heading-sm text-blue-900 mb-6">Contact Information</h3>
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Mail className="w-5 h-5 text-blue-700" />
                    </div>
                    <div>
                      <div className="font-medium text-blue-900">Email</div>
                      <a href="mailto:info@ssourcingchina.com" className="text-blue-700 hover:underline text-sm">
                        info@ssourcingchina.com
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Phone className="w-5 h-5 text-blue-700" />
                    </div>
                    <div>
                      <div className="font-medium text-blue-900">Phone</div>
                      <span className="text-gray-600 text-sm">+86 755 8888 8888</span>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-5 h-5 text-blue-700" />
                    </div>
                    <div>
                      <div className="font-medium text-blue-900">Office</div>
                      <span className="text-gray-600 text-sm">
                        Shenzhen, Guangdong<br />
                        China
                      </span>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Clock className="w-5 h-5 text-blue-700" />
                    </div>
                    <div>
                      <div className="font-medium text-blue-900">Business Hours</div>
                      <span className="text-gray-600 text-sm">
                        Mon - Fri: 9:00 AM - 6:00 PM (CST)<br />
                        Response time: Within 24 hours
                      </span>
                    </div>
                  </div>
                </div>

                <div className="mt-8 pt-6 border-t border-gray-200">
                  <h4 className="font-medium text-blue-900 mb-3">What Happens Next?</h4>
                  <ol className="space-y-3 text-sm text-gray-600">
                    <li className="flex gap-2">
                      <span className="w-5 h-5 bg-blue-700 text-white rounded-full flex items-center justify-center text-xs flex-shrink-0">1</span>
                      <span>We review your request within 24 hours</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="w-5 h-5 bg-blue-700 text-white rounded-full flex items-center justify-center text-xs flex-shrink-0">2</span>
                      <span>We send you a detailed sourcing plan and quote</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="w-5 h-5 bg-blue-700 text-white rounded-full flex items-center justify-center text-xs flex-shrink-0">3</span>
                      <span>We schedule a call to discuss your requirements</span>
                    </li>
                  </ol>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
