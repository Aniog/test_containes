import { useState } from 'react'
import { Send, CheckCircle, AlertCircle, Mail, Phone, MapPin, Clock, MessageSquare } from 'lucide-react'

export default function Contact() {
  const [values, setValues] = useState({
    name: '',
    email: '',
    company: '',
    product: '',
    quantity: '',
    timeline: '',
    budget: '',
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

    // Simulate submission
    setTimeout(() => {
      setStatus('success')
      setValues({ name: '', email: '', company: '', product: '', quantity: '', timeline: '', budget: '', message: '' })
    }, 1500)
  }

  if (status === 'success') {
    return (
      <div className="min-h-[60vh] flex items-center justify-center bg-white">
        <div className="max-w-lg mx-auto px-4 text-center">
          <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircle className="w-10 h-10 text-green-600" />
          </div>
          <h1 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4">Thank You!</h1>
          <p className="text-gray-600 text-lg mb-8">
            We have received your sourcing inquiry. Our team will review your requirements and respond within 24 hours.
          </p>
          <button
            onClick={() => setStatus('idle')}
            className="bg-blue-700 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-800 transition-colors"
          >
            Submit Another Inquiry
          </button>
        </div>
      </div>
    )
  }

  return (
    <div>
      {/* Hero */}
      <section className="bg-slate-900 text-white py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="max-w-3xl">
            <span className="text-blue-400 font-semibold text-sm uppercase tracking-wide">Contact Us</span>
            <h1 className="text-3xl md:text-5xl font-bold mt-2 mb-4">
              Get a Free Sourcing Quote
            </h1>
            <p className="text-lg text-slate-300 leading-relaxed">
              Tell us about your sourcing needs and we will get back to you within 24 hours
              with a free assessment and initial recommendations.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Contact Info */}
            <div className="lg:col-span-1">
              <h2 className="text-xl font-bold text-slate-900 mb-6">Contact Information</h2>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Mail className="w-5 h-5 text-blue-700" />
                  </div>
                  <div>
                    <h3 className="font-medium text-slate-900">Email</h3>
                    <p className="text-gray-600 text-sm">info@ssourcingchina.com</p>
                    <p className="text-gray-500 text-xs mt-1">We respond within 24 hours</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Phone className="w-5 h-5 text-blue-700" />
                  </div>
                  <div>
                    <h3 className="font-medium text-slate-900">Phone / WhatsApp</h3>
                    <p className="text-gray-600 text-sm">+86 755 8888 9999</p>
                    <p className="text-gray-500 text-xs mt-1">Mon-Fri, 9am-6pm CST</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-5 h-5 text-blue-700" />
                  </div>
                  <div>
                    <h3 className="font-medium text-slate-900">Office</h3>
                    <p className="text-gray-600 text-sm">Shenzhen, Guangdong, China</p>
                    <p className="text-gray-500 text-xs mt-1">Heart of China manufacturing hub</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Clock className="w-5 h-5 text-blue-700" />
                  </div>
                  <div>
                    <h3 className="font-medium text-slate-900">Business Hours</h3>
                    <p className="text-gray-600 text-sm">Monday - Friday: 9:00 AM - 6:00 PM CST</p>
                    <p className="text-gray-600 text-sm">Saturday: 10:00 AM - 2:00 PM CST</p>
                  </div>
                </div>
              </div>

              <div className="mt-8 p-4 bg-blue-50 rounded-lg">
                <h3 className="font-semibold text-blue-900 mb-2">Why Contact Us?</h3>
                <ul className="space-y-2 text-sm text-blue-800">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" />
                    Free initial consultation
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" />
                    Response within 24 hours
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" />
                    No obligation to proceed
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" />
                    Transparent pricing
                  </li>
                </ul>
              </div>
            </div>

            {/* Inquiry Form */}
            <div className="lg:col-span-2">
              <div className="bg-gray-50 rounded-xl p-6 md:p-8">
                <h2 className="text-xl font-bold text-slate-900 mb-6">Sourcing Inquiry Form</h2>

                <form onSubmit={onSubmit} className="space-y-5" aria-busy={status === 'submitting'}>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="contact-name" className="block text-sm font-medium text-gray-700 mb-1">
                        Full Name *
                      </label>
                      <input
                        id="contact-name"
                        name="name"
                        type="text"
                        value={values.name}
                        onChange={onChange}
                        required
                        className="w-full px-3 py-2.5 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white"
                        placeholder="John Smith"
                      />
                    </div>

                    <div>
                      <label htmlFor="contact-email" className="block text-sm font-medium text-gray-700 mb-1">
                        Email Address *
                      </label>
                      <input
                        id="contact-email"
                        name="email"
                        type="email"
                        value={values.email}
                        onChange={onChange}
                        required
                        className="w-full px-3 py-2.5 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white"
                        placeholder="john@company.com"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="contact-company" className="block text-sm font-medium text-gray-700 mb-1">
                      Company Name
                    </label>
                    <input
                      id="contact-company"
                      name="company"
                      type="text"
                      value={values.company}
                      onChange={onChange}
                      className="w-full px-3 py-2.5 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white"
                      placeholder="Your company name"
                    />
                  </div>

                  <div>
                    <label htmlFor="contact-product" className="block text-sm font-medium text-gray-700 mb-1">
                      Product Description *
                    </label>
                    <textarea
                      id="contact-product"
                      name="product"
                      rows={4}
                      value={values.product}
                      onChange={onChange}
                      required
                      className="w-full px-3 py-2.5 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white"
                      placeholder="Describe the product you need sourced, including specifications, materials, quality requirements, etc."
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    <div>
                      <label htmlFor="contact-quantity" className="block text-sm font-medium text-gray-700 mb-1">
                        Estimated Quantity
                      </label>
                      <input
                        id="contact-quantity"
                        name="quantity"
                        type="text"
                        value={values.quantity}
                        onChange={onChange}
                        className="w-full px-3 py-2.5 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white"
                        placeholder="e.g., 500 units"
                      />
                    </div>

                    <div>
                      <label htmlFor="contact-timeline" className="block text-sm font-medium text-gray-700 mb-1">
                        Timeline
                      </label>
                      <select
                        id="contact-timeline"
                        name="timeline"
                        value={values.timeline}
                        onChange={onChange}
                        className="w-full px-3 py-2.5 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white"
                      >
                        <option value="">Select timeline</option>
                        <option value="urgent">Urgent (within 2 weeks)</option>
                        <option value="1-month">Within 1 month</option>
                        <option value="2-months">Within 2 months</option>
                        <option value="3-months">Within 3 months</option>
                        <option value="flexible">Flexible</option>
                      </select>
                    </div>

                    <div>
                      <label htmlFor="contact-budget" className="block text-sm font-medium text-gray-700 mb-1">
                        Budget Range
                      </label>
                      <select
                        id="contact-budget"
                        name="budget"
                        value={values.budget}
                        onChange={onChange}
                        className="w-full px-3 py-2.5 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white"
                      >
                        <option value="">Select budget</option>
                        <option value="under-5k">Under $5,000</option>
                        <option value="5k-10k">$5,000 - $10,000</option>
                        <option value="10k-25k">$10,000 - $25,000</option>
                        <option value="25k-50k">$25,000 - $50,000</option>
                        <option value="50k-plus">$50,000+</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label htmlFor="contact-message" className="block text-sm font-medium text-gray-700 mb-1">
                      Additional Details
                    </label>
                    <textarea
                      id="contact-message"
                      name="message"
                      rows={3}
                      value={values.message}
                      onChange={onChange}
                      className="w-full px-3 py-2.5 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white"
                      placeholder="Target price, quality standards, certifications needed, or any other details"
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
                    className="w-full bg-blue-700 hover:bg-blue-800 disabled:bg-blue-400 text-white px-6 py-3.5 rounded-lg font-semibold transition-colors flex items-center justify-center gap-2"
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
        </div>
      </section>
    </div>
  )
}
