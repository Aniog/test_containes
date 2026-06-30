import { useState } from 'react'
import { Send, CheckCircle, AlertCircle, Mail, Phone, MapPin, Clock } from 'lucide-react'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    product: '',
    quantity: '',
    budget: '',
    message: '',
  })
  const [status, setStatus] = useState('idle')
  const [error, setError] = useState('')

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setError('')
    setStatus('submitting')

    try {
      await new Promise((resolve) => setTimeout(resolve, 1500))
      setStatus('success')
      setFormData({
        name: '', email: '', company: '', phone: '',
        product: '', quantity: '', budget: '', message: '',
      })
    } catch (err) {
      setError('Something went wrong. Please try again.')
      setStatus('error')
    }
  }

  if (status === 'success') {
    return (
      <section className="py-16 md:py-24">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <CheckCircle className="w-8 h-8 text-green-600" />
          </div>
          <h1 className="text-3xl font-bold text-gray-900 mb-3">Thank You for Your Inquiry</h1>
          <p className="text-gray-600 text-lg">
            We have received your message and will get back to you within 1-2 business days with a free sourcing assessment.
          </p>
        </div>
      </section>
    )
  }

  return (
    <>
      <section className="bg-gradient-to-br from-gray-900 via-brand-900 to-gray-900 py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Contact Us</h1>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Ready to start sourcing? Fill out the form below and we will provide a free, no-obligation quote.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            <div className="lg:col-span-2">
              <form onSubmit={handleSubmit} className="bg-white border border-gray-200 rounded-xl p-6 md:p-8 shadow-sm">
                <h2 className="text-xl font-bold text-gray-900 mb-6">Send Us Your Requirements</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1.5">
                      Full Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      id="name" name="name" type="text" required
                      value={formData.name} onChange={handleChange}
                      className="w-full px-4 py-2.5 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-brand-500 focus:border-brand-500 outline-none transition-colors"
                      placeholder="Your full name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1.5">
                      Business Email <span className="text-red-500">*</span>
                    </label>
                    <input
                      id="email" name="email" type="email" required
                      value={formData.email} onChange={handleChange}
                      className="w-full px-4 py-2.5 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-brand-500 focus:border-brand-500 outline-none transition-colors"
                      placeholder="you@company.com"
                    />
                  </div>
                  <div>
                    <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-1.5">
                      Company Name
                    </label>
                    <input
                      id="company" name="company" type="text"
                      value={formData.company} onChange={handleChange}
                      className="w-full px-4 py-2.5 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-brand-500 focus:border-brand-500 outline-none transition-colors"
                      placeholder="Your company"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1.5">
                      Phone Number
                    </label>
                    <input
                      id="phone" name="phone" type="tel"
                      value={formData.phone} onChange={handleChange}
                      className="w-full px-4 py-2.5 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-brand-500 focus:border-brand-500 outline-none transition-colors"
                      placeholder="+1 234 567 8900"
                    />
                  </div>
                  <div>
                    <label htmlFor="product" className="block text-sm font-medium text-gray-700 mb-1.5">
                      Product to Source <span className="text-red-500">*</span>
                    </label>
                    <input
                      id="product" name="product" type="text" required
                      value={formData.product} onChange={handleChange}
                      className="w-full px-4 py-2.5 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-brand-500 focus:border-brand-500 outline-none transition-colors"
                      placeholder="e.g. Stainless steel bottles"
                    />
                  </div>
                  <div>
                    <label htmlFor="quantity" className="block text-sm font-medium text-gray-700 mb-1.5">
                      Estimated Quantity
                    </label>
                    <input
                      id="quantity" name="quantity" type="text"
                      value={formData.quantity} onChange={handleChange}
                      className="w-full px-4 py-2.5 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-brand-500 focus:border-brand-500 outline-none transition-colors"
                      placeholder="e.g. 500-1000 units"
                    />
                  </div>
                  <div>
                    <label htmlFor="budget" className="block text-sm font-medium text-gray-700 mb-1.5">
                      Target Budget (FOB)
                    </label>
                    <input
                      id="budget" name="budget" type="text"
                      value={formData.budget} onChange={handleChange}
                      className="w-full px-4 py-2.5 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-brand-500 focus:border-brand-500 outline-none transition-colors"
                      placeholder="e.g. $2-3 per unit"
                    />
                  </div>
                </div>
                <div className="mt-5">
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1.5">
                    Tell Us More <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    id="message" name="message" rows={5} required
                    value={formData.message} onChange={handleChange}
                    className="w-full px-4 py-2.5 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-brand-500 focus:border-brand-500 outline-none transition-colors resize-y"
                    placeholder="Describe your product specifications, quality requirements, target markets, timeline, or any other details that will help us understand your needs..."
                  />
                </div>

                {error && (
                  <div className="mt-4 flex items-center gap-2 text-red-600 text-sm">
                    <AlertCircle className="w-4 h-4" />
                    {error}
                  </div>
                )}

                <button
                  type="submit"
                  disabled={status === 'submitting'}
                  className="mt-6 w-full inline-flex items-center justify-center gap-2 bg-brand-600 hover:bg-brand-700 text-white px-6 py-3 rounded-lg text-base font-semibold transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  {status === 'submitting' ? 'Submitting...' : (
                    <>Submit Inquiry <Send className="w-4 h-4" /></>
                  )}
                </button>
              </form>
            </div>

            <div className="space-y-6">
              <div className="bg-gray-50 border border-gray-200 rounded-xl p-6">
                <h3 className="font-semibold text-gray-900 mb-4">Contact Information</h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <Mail className="w-5 h-5 text-brand-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="text-sm font-medium text-gray-900">Email</p>
                      <a href="mailto:info@ssourcingchina.com" className="text-sm text-brand-600 hover:text-brand-700">
                        info@ssourcingchina.com
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Phone className="w-5 h-5 text-brand-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="text-sm font-medium text-gray-900">Phone</p>
                      <a href="tel:+861234567890" className="text-sm text-brand-600 hover:text-brand-700">
                        +86 123 4567 890
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-brand-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="text-sm font-medium text-gray-900">Location</p>
                      <p className="text-sm text-gray-600">Guangzhou, Guangdong, China</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Clock className="w-5 h-5 text-brand-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="text-sm font-medium text-gray-900">Response Time</p>
                      <p className="text-sm text-gray-600">Within 1-2 business days</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gray-50 border border-gray-200 rounded-xl p-6">
                <h3 className="font-semibold text-gray-900 mb-3">What Happens Next?</h3>
                <ol className="space-y-3 text-sm text-gray-600">
                  <li className="flex items-start gap-2">
                    <span className="w-5 h-5 bg-brand-600 text-white rounded-full flex items-center justify-center text-xs font-medium flex-shrink-0 mt-0.5">1</span>
                    We review your requirements within 1-2 days
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-5 h-5 bg-brand-600 text-white rounded-full flex items-center justify-center text-xs font-medium flex-shrink-0 mt-0.5">2</span>
                    We schedule a consultation call to discuss details
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-5 h-5 bg-brand-600 text-white rounded-full flex items-center justify-center text-xs font-medium flex-shrink-0 mt-0.5">3</span>
                    We provide a free sourcing plan and quote
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-5 h-5 bg-brand-600 text-white rounded-full flex items-center justify-center text-xs font-medium flex-shrink-0 mt-0.5">4</span>
                    You decide if you want to proceed
                  </li>
                </ol>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}