import { useState } from 'react'
import { Mail, Phone, MapPin, Clock, Send, CheckCircle } from 'lucide-react'
import { SectionHeading } from '@/components/shared/SectionHeading'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
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

  const handleSubmit = (e) => {
    e.preventDefault()
    setStatus('submitting')
    // Simulate submission
    setTimeout(() => {
      setStatus('success')
      setFormData({ name: '', email: '', company: '', country: '', product: '', quantity: '', message: '' })
    }, 1500)
  }

  return (
    <div>
      {/* Hero */}
      <section className="bg-primary py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl md:text-5xl font-bold text-white mb-4">Get a Free Sourcing Quote</h1>
          <p className="text-lg text-white/80 max-w-2xl mx-auto">
            Tell us what you need and our team will respond within 24 hours with supplier options and pricing.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Form */}
            <div className="lg:col-span-2">
              <h2 className="text-2xl font-bold text-neutral-900 mb-6">Sourcing Inquiry Form</h2>

              {status === 'success' ? (
                <div className="bg-green-50 border border-green-200 rounded-xl p-8 text-center">
                  <CheckCircle className="w-12 h-12 text-green-500 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-neutral-900 mb-2">Inquiry Submitted!</h3>
                  <p className="text-neutral-600">
                    Thank you for your inquiry. Our sourcing team will review your requirements and respond within 24 hours.
                  </p>
                  <button
                    onClick={() => setStatus('idle')}
                    className="mt-6 px-5 py-2.5 bg-primary hover:bg-primary-dark text-white font-medium rounded-lg transition-colors border-none cursor-pointer"
                  >
                    Submit Another Inquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-neutral-700 mb-1.5">Full Name *</label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full px-4 py-2.5 border border-neutral-300 rounded-lg text-neutral-900 text-sm focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-colors"
                        placeholder="Your full name"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-neutral-700 mb-1.5">Email Address *</label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-4 py-2.5 border border-neutral-300 rounded-lg text-neutral-900 text-sm focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-colors"
                        placeholder="you@company.com"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div>
                      <label htmlFor="company" className="block text-sm font-medium text-neutral-700 mb-1.5">Company Name</label>
                      <input
                        type="text"
                        id="company"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        className="w-full px-4 py-2.5 border border-neutral-300 rounded-lg text-neutral-900 text-sm focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-colors"
                        placeholder="Your company"
                      />
                    </div>
                    <div>
                      <label htmlFor="country" className="block text-sm font-medium text-neutral-700 mb-1.5">Country *</label>
                      <input
                        type="text"
                        id="country"
                        name="country"
                        required
                        value={formData.country}
                        onChange={handleChange}
                        className="w-full px-4 py-2.5 border border-neutral-300 rounded-lg text-neutral-900 text-sm focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-colors"
                        placeholder="Your country"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div>
                      <label htmlFor="product" className="block text-sm font-medium text-neutral-700 mb-1.5">Product Description *</label>
                      <input
                        type="text"
                        id="product"
                        name="product"
                        required
                        value={formData.product}
                        onChange={handleChange}
                        className="w-full px-4 py-2.5 border border-neutral-300 rounded-lg text-neutral-900 text-sm focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-colors"
                        placeholder="What product do you need?"
                      />
                    </div>
                    <div>
                      <label htmlFor="quantity" className="block text-sm font-medium text-neutral-700 mb-1.5">Estimated Quantity</label>
                      <input
                        type="text"
                        id="quantity"
                        name="quantity"
                        value={formData.quantity}
                        onChange={handleChange}
                        className="w-full px-4 py-2.5 border border-neutral-300 rounded-lg text-neutral-900 text-sm focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-colors"
                        placeholder="e.g. 1,000 units"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-neutral-700 mb-1.5">Additional Details</label>
                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full px-4 py-2.5 border border-neutral-300 rounded-lg text-neutral-900 text-sm focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-colors resize-vertical"
                      placeholder="Specifications, target price, timeline, certifications needed, etc."
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={status === 'submitting'}
                    className="inline-flex items-center justify-center px-7 py-3 bg-secondary hover:bg-secondary-dark text-white font-semibold rounded-lg transition-colors border-none cursor-pointer disabled:opacity-60 disabled:cursor-not-allowed"
                  >
                    {status === 'submitting' ? (
                      'Submitting...'
                    ) : (
                      <>
                        <Send className="w-4 h-4 mr-2" />
                        Submit Inquiry
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>

            {/* Contact Info */}
            <div>
              <h3 className="text-xl font-bold text-neutral-900 mb-6">Contact Information</h3>
              <div className="space-y-5">
                <div className="flex items-start gap-3">
                  <Mail className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="text-sm font-medium text-neutral-900">Email</p>
                    <p className="text-sm text-neutral-600">info@ssourcingchina.com</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Phone className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="text-sm font-medium text-neutral-900">Phone / WhatsApp</p>
                    <p className="text-sm text-neutral-600">+86 138 0000 0000</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="text-sm font-medium text-neutral-900">Office</p>
                    <p className="text-sm text-neutral-600">Guangzhou, Guangdong, China</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Clock className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="text-sm font-medium text-neutral-900">Response Time</p>
                    <p className="text-sm text-neutral-600">Within 24 hours (Mon-Sat)</p>
                  </div>
                </div>
              </div>

              <div className="mt-8 p-5 bg-neutral-50 rounded-xl border border-neutral-200">
                <h4 className="text-sm font-semibold text-neutral-900 mb-2">What happens next?</h4>
                <ol className="space-y-2 list-none p-0 m-0">
                  <li className="flex items-start gap-2 text-sm text-neutral-600">
                    <span className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center text-xs font-bold text-primary flex-shrink-0 mt-0.5">1</span>
                    We review your requirements
                  </li>
                  <li className="flex items-start gap-2 text-sm text-neutral-600">
                    <span className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center text-xs font-bold text-primary flex-shrink-0 mt-0.5">2</span>
                    Our team researches suitable suppliers
                  </li>
                  <li className="flex items-start gap-2 text-sm text-neutral-600">
                    <span className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center text-xs font-bold text-primary flex-shrink-0 mt-0.5">3</span>
                    You receive a quote with supplier options
                  </li>
                </ol>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Contact
