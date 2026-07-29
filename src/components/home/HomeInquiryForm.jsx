import { useState } from 'react'
import { Send, CheckCircle, AlertCircle } from 'lucide-react'

export default function HomeInquiryForm() {
  const [values, setValues] = useState({
    name: '',
    email: '',
    company: '',
    product: '',
    quantity: '',
    message: '',
  })
  const [status, setStatus] = useState('idle')
  const [error, setError] = useState(null)

  const onChange = (e) => {
    const { name, value } = e.target
    setValues((v) => ({ ...v, [name]: value }))
  }

  const validate = (v) => {
    if (!v.name.trim()) return 'Name is required'
    if (!v.email.trim()) return 'Email is required'
    if (!/^\S+@\S+\.\S+$/.test(v.email)) return 'Provide a valid email address'
    if (!v.product.trim()) return 'Please describe the product you need sourced'
    return null
  }

  const onSubmit = async (e) => {
    e.preventDefault()
    setError(null)
    const err = validate(values)
    if (err) {
      setError(err)
      return
    }
    setStatus('submitting')

    // Simulate submission - in production this would call an API
    setTimeout(() => {
      setStatus('success')
      setValues({ name: '', email: '', company: '', product: '', quantity: '', message: '' })
    }, 1500)
  }

  if (status === 'success') {
    return (
      <section className="py-16 md:py-24 bg-blue-700 text-white">
        <div className="max-w-2xl mx-auto px-4 text-center">
          <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircle className="w-8 h-8" />
          </div>
          <h2 className="text-2xl md:text-3xl font-bold mb-4">Thank You!</h2>
          <p className="text-blue-100 text-lg mb-6">
            We have received your sourcing inquiry. Our team will review your requirements and respond within 24 hours.
          </p>
          <button
            onClick={() => setStatus('idle')}
            className="bg-white text-blue-700 px-6 py-3 rounded-lg font-medium hover:bg-blue-50 transition-colors"
          >
            Submit Another Inquiry
          </button>
        </div>
      </section>
    )
  }

  return (
    <section className="py-16 md:py-24 bg-blue-700 text-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Left: CTA Content */}
          <div>
            <span className="text-blue-200 font-semibold text-sm uppercase tracking-wide">Get Started</span>
            <h2 className="text-2xl md:text-4xl font-bold mt-2 mb-4">
              Get a Free Sourcing Quote
            </h2>
            <p className="text-blue-100 text-lg leading-relaxed mb-8">
              Tell us what you need, and we will get back to you within 24 hours with a free assessment
              and initial supplier recommendations. No obligation, no hidden fees.
            </p>

            <div className="space-y-4">
              {[
                'Free initial consultation and supplier assessment',
                'Transparent pricing with no hidden costs',
                'Response within 24 hours',
                'No obligation to proceed',
              ].map((item) => (
                <div key={item} className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                  <span className="text-blue-100">{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Form */}
          <div className="bg-white rounded-xl p-6 md:p-8 text-gray-900">
            <form onSubmit={onSubmit} className="space-y-4" aria-busy={status === 'submitting'}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="inq-name" className="block text-sm font-medium text-gray-700 mb-1">
                    Full Name *
                  </label>
                  <input
                    id="inq-name"
                    name="name"
                    type="text"
                    value={values.name}
                    onChange={onChange}
                    required
                    className="w-full px-3 py-2.5 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="John Smith"
                  />
                </div>
                <div>
                  <label htmlFor="inq-email" className="block text-sm font-medium text-gray-700 mb-1">
                    Email Address *
                  </label>
                  <input
                    id="inq-email"
                    name="email"
                    type="email"
                    value={values.email}
                    onChange={onChange}
                    required
                    className="w-full px-3 py-2.5 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="john@company.com"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="inq-company" className="block text-sm font-medium text-gray-700 mb-1">
                  Company Name
                </label>
                <input
                  id="inq-company"
                  name="company"
                  type="text"
                  value={values.company}
                  onChange={onChange}
                  className="w-full px-3 py-2.5 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Your company name"
                />
              </div>

              <div>
                <label htmlFor="inq-product" className="block text-sm font-medium text-gray-700 mb-1">
                  Product Description *
                </label>
                <textarea
                  id="inq-product"
                  name="product"
                  rows={3}
                  value={values.product}
                  onChange={onChange}
                  required
                  className="w-full px-3 py-2.5 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Describe the product you need sourced, including specifications, materials, etc."
                />
              </div>

              <div>
                <label htmlFor="inq-quantity" className="block text-sm font-medium text-gray-700 mb-1">
                  Estimated Quantity
                </label>
                <input
                  id="inq-quantity"
                  name="quantity"
                  type="text"
                  value={values.quantity}
                  onChange={onChange}
                  className="w-full px-3 py-2.5 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="e.g., 500 units, 1 container"
                />
              </div>

              <div>
                <label htmlFor="inq-message" className="block text-sm font-medium text-gray-700 mb-1">
                  Additional Details
                </label>
                <textarea
                  id="inq-message"
                  name="message"
                  rows={3}
                  value={values.message}
                  onChange={onChange}
                  className="w-full px-3 py-2.5 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Target price, timeline, quality requirements, or any other details"
                />
              </div>

              {error && (
                <div className="flex items-center gap-2 text-red-600 text-sm" role="alert">
                  <AlertCircle className="w-4 h-4" />
                  {error}
                </div>
              )}

              <button
                type="submit"
                disabled={status === 'submitting'}
                className="w-full bg-blue-700 hover:bg-blue-800 disabled:bg-blue-400 text-white px-6 py-3 rounded-lg font-semibold transition-colors flex items-center justify-center gap-2"
              >
                {status === 'submitting' ? (
                  <>
                    <svg className="animate-spin w-5 h-5" viewBox="0 0 24 24" fill="none">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                    </svg>
                    Submitting...
                  </>
                ) : (
                  <>
                    <Send className="w-4 h-4" />
                    Get a Free Sourcing Quote
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
