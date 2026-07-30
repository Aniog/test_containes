import { useState } from 'react'
import { CheckCircle, Mail, Phone, MapPin, Clock } from 'lucide-react'
import { submitSourcingInquiry } from '../api/inquiries.js'

const SERVICES = [
  'Supplier Sourcing',
  'Factory Verification',
  'Quality Inspection',
  'Production Follow-up',
  'Shipping Coordination',
  'Sample Procurement',
]

const CATEGORIES = [
  'Electronics & Components',
  'Furniture & Home Decor',
  'Clothing & Textiles',
  'Machinery & Industrial',
  'Toys & Baby Products',
  'Health & Beauty',
  'Sports & Outdoor',
  'Packaging & Printing',
  'Auto Parts',
  'Other',
]

const initialValues = {
  full_name: '',
  email: '',
  company: '',
  country: '',
  phone: '',
  product_category: '',
  product_description: '',
  estimated_quantity: '',
  target_price: '',
  services_needed: [],
  message: '',
}

export default function ContactPage() {
  const [values, setValues] = useState(initialValues)
  const [status, setStatus] = useState('idle')
  const [error, setError] = useState(null)

  const handleChange = (e) => {
    const { name, value } = e.target
    setValues((v) => ({ ...v, [name]: value }))
  }

  const handleServiceToggle = (service) => {
    setValues((v) => ({
      ...v,
      services_needed: v.services_needed.includes(service)
        ? v.services_needed.filter((s) => s !== service)
        : [...v.services_needed, service],
    }))
  }

  const validate = () => {
    if (!values.full_name.trim()) return 'Full name is required.'
    if (!values.email.trim() || !/^\S+@\S+\.\S+$/.test(values.email)) return 'A valid email address is required.'
    if (!values.product_description.trim()) return 'Please describe the product you want to source.'
    return null
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setError(null)
    const err = validate()
    if (err) { setError(err); return }

    setStatus('submitting')
    try {
      await submitSourcingInquiry(values)
      setStatus('success')
      setValues(initialValues)
    } catch (err) {
      console.error('Inquiry submission error:', err)
      setError(err.message || 'Submission failed. Please try again or email us directly.')
      setStatus('error')
    }
  }

  return (
    <div>
      {/* Hero */}
      <section className="bg-brand-blue py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-block bg-brand-red text-white text-xs font-semibold uppercase tracking-widest px-3 py-1 rounded-full mb-4">
            Contact Us
          </span>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Get a Free Sourcing Quote
          </h1>
          <p className="text-blue-200 text-lg max-w-xl mx-auto">
            Tell us what you need and we'll respond within 24 hours with a tailored sourcing plan.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="bg-brand-bg py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-10">
            {/* Contact Info */}
            <div className="space-y-6">
              <div>
                <h2 className="text-xl font-bold text-brand-dark mb-2">Contact Information</h2>
                <p className="text-gray-500 text-sm leading-relaxed">
                  Our team is based in China and available Monday–Friday. We respond to all inquiries within 24 hours.
                </p>
              </div>

              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Mail className="w-5 h-5 text-brand-blue" />
                  </div>
                  <div>
                    <div className="font-semibold text-brand-dark text-sm">Email</div>
                    <a href="mailto:info@ssourcing.cn" className="text-brand-light text-sm hover:underline">info@ssourcing.cn</a>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Phone className="w-5 h-5 text-brand-blue" />
                  </div>
                  <div>
                    <div className="font-semibold text-brand-dark text-sm">WhatsApp / WeChat</div>
                    <span className="text-gray-500 text-sm">+86 138 0000 0000</span>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-5 h-5 text-brand-blue" />
                  </div>
                  <div>
                    <div className="font-semibold text-brand-dark text-sm">Location</div>
                    <span className="text-gray-500 text-sm">Guangzhou, China<br />Operations across major manufacturing hubs</span>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Clock className="w-5 h-5 text-brand-blue" />
                  </div>
                  <div>
                    <div className="font-semibold text-brand-dark text-sm">Response Time</div>
                    <span className="text-gray-500 text-sm">Within 24 hours (Mon–Fri, China time)</span>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-xl border border-gray-200 p-5">
                <h3 className="font-semibold text-brand-dark mb-3 text-sm">What Happens After You Submit?</h3>
                <ol className="space-y-2 text-sm text-gray-500">
                  <li className="flex items-start gap-2"><span className="font-bold text-brand-blue flex-shrink-0">1.</span> We review your inquiry and confirm receipt within 24 hours.</li>
                  <li className="flex items-start gap-2"><span className="font-bold text-brand-blue flex-shrink-0">2.</span> A sourcing specialist contacts you to clarify requirements.</li>
                  <li className="flex items-start gap-2"><span className="font-bold text-brand-blue flex-shrink-0">3.</span> We prepare a tailored sourcing plan and fee proposal.</li>
                  <li className="flex items-start gap-2"><span className="font-bold text-brand-blue flex-shrink-0">4.</span> You decide whether to proceed — no obligation.</li>
                </ol>
              </div>
            </div>

            {/* Form */}
            <div className="lg:col-span-2">
              {status === 'success' ? (
                <div className="bg-white rounded-2xl border border-gray-200 p-10 text-center">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <CheckCircle className="w-8 h-8 text-green-500" />
                  </div>
                  <h2 className="text-2xl font-bold text-brand-dark mb-3">Inquiry Received!</h2>
                  <p className="text-gray-500 leading-relaxed max-w-md mx-auto">
                    Thank you for your inquiry. Our team will review your requirements and get back to you within 24 hours with a tailored sourcing plan.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="bg-white rounded-2xl border border-gray-200 p-8 space-y-6">
                  <h2 className="text-xl font-bold text-brand-dark">Sourcing Inquiry Form</h2>

                  {/* Contact Details */}
                  <div>
                    <h3 className="font-semibold text-brand-dark text-sm uppercase tracking-wide mb-4 pb-2 border-b border-gray-100">Your Details</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Full Name <span className="text-brand-red">*</span></label>
                        <input
                          type="text"
                          name="full_name"
                          value={values.full_name}
                          onChange={handleChange}
                          placeholder="Your full name"
                          className="w-full border border-gray-300 rounded-lg px-4 py-2.5 text-sm text-gray-900 focus:outline-none focus:ring-2 focus:ring-brand-blue focus:border-transparent"
                          required
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Business Email <span className="text-brand-red">*</span></label>
                        <input
                          type="email"
                          name="email"
                          value={values.email}
                          onChange={handleChange}
                          placeholder="you@company.com"
                          className="w-full border border-gray-300 rounded-lg px-4 py-2.5 text-sm text-gray-900 focus:outline-none focus:ring-2 focus:ring-brand-blue focus:border-transparent"
                          required
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Company Name</label>
                        <input
                          type="text"
                          name="company"
                          value={values.company}
                          onChange={handleChange}
                          placeholder="Your company"
                          className="w-full border border-gray-300 rounded-lg px-4 py-2.5 text-sm text-gray-900 focus:outline-none focus:ring-2 focus:ring-brand-blue focus:border-transparent"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Country</label>
                        <input
                          type="text"
                          name="country"
                          value={values.country}
                          onChange={handleChange}
                          placeholder="Your country"
                          className="w-full border border-gray-300 rounded-lg px-4 py-2.5 text-sm text-gray-900 focus:outline-none focus:ring-2 focus:ring-brand-blue focus:border-transparent"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Phone / WhatsApp</label>
                        <input
                          type="text"
                          name="phone"
                          value={values.phone}
                          onChange={handleChange}
                          placeholder="+1 555 000 0000"
                          className="w-full border border-gray-300 rounded-lg px-4 py-2.5 text-sm text-gray-900 focus:outline-none focus:ring-2 focus:ring-brand-blue focus:border-transparent"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Product Details */}
                  <div>
                    <h3 className="font-semibold text-brand-dark text-sm uppercase tracking-wide mb-4 pb-2 border-b border-gray-100">Product Requirements</h3>
                    <div className="space-y-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Product Category</label>
                        <select
                          name="product_category"
                          value={values.product_category}
                          onChange={handleChange}
                          className="w-full border border-gray-300 rounded-lg px-4 py-2.5 text-sm text-gray-900 focus:outline-none focus:ring-2 focus:ring-brand-blue focus:border-transparent bg-white"
                        >
                          <option value="">Select a category</option>
                          {CATEGORIES.map((c) => <option key={c} value={c}>{c}</option>)}
                        </select>
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Product Description <span className="text-brand-red">*</span></label>
                        <textarea
                          name="product_description"
                          value={values.product_description}
                          onChange={handleChange}
                          rows={4}
                          placeholder="Describe the product(s) you want to source: name, specifications, materials, dimensions, certifications required, etc."
                          className="w-full border border-gray-300 rounded-lg px-4 py-2.5 text-sm text-gray-900 focus:outline-none focus:ring-2 focus:ring-brand-blue focus:border-transparent resize-none"
                          required
                        />
                      </div>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-1">Estimated Quantity</label>
                          <input
                            type="text"
                            name="estimated_quantity"
                            value={values.estimated_quantity}
                            onChange={handleChange}
                            placeholder="e.g. 500 units / month"
                            className="w-full border border-gray-300 rounded-lg px-4 py-2.5 text-sm text-gray-900 focus:outline-none focus:ring-2 focus:ring-brand-blue focus:border-transparent"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-1">Target Unit Price</label>
                          <input
                            type="text"
                            name="target_price"
                            value={values.target_price}
                            onChange={handleChange}
                            placeholder="e.g. USD 5–8 per unit"
                            className="w-full border border-gray-300 rounded-lg px-4 py-2.5 text-sm text-gray-900 focus:outline-none focus:ring-2 focus:ring-brand-blue focus:border-transparent"
                          />
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Services */}
                  <div>
                    <h3 className="font-semibold text-brand-dark text-sm uppercase tracking-wide mb-4 pb-2 border-b border-gray-100">Services Needed</h3>
                    <div className="flex flex-wrap gap-2">
                      {SERVICES.map((s) => (
                        <button
                          key={s}
                          type="button"
                          onClick={() => handleServiceToggle(s)}
                          className={`px-3 py-1.5 rounded-lg text-sm font-medium border transition-colors ${
                            values.services_needed.includes(s)
                              ? 'bg-brand-blue text-white border-brand-blue'
                              : 'bg-white text-gray-700 border-gray-300 hover:border-brand-blue hover:text-brand-blue'
                          }`}
                        >
                          {s}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Additional Notes */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Additional Notes</label>
                    <textarea
                      name="message"
                      value={values.message}
                      onChange={handleChange}
                      rows={3}
                      placeholder="Any other requirements, questions, or context that would help us understand your project."
                      className="w-full border border-gray-300 rounded-lg px-4 py-2.5 text-sm text-gray-900 focus:outline-none focus:ring-2 focus:ring-brand-blue focus:border-transparent resize-none"
                    />
                  </div>

                  {error && (
                    <div className="bg-red-50 border border-red-200 rounded-lg px-4 py-3 text-red-700 text-sm">
                      {error}
                    </div>
                  )}

                  <button
                    type="submit"
                    disabled={status === 'submitting'}
                    className="w-full bg-brand-red text-white py-3 px-6 rounded-lg font-semibold text-base hover:bg-red-700 transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
                  >
                    {status === 'submitting' ? 'Submitting…' : 'Submit Sourcing Inquiry'}
                  </button>

                  <p className="text-gray-400 text-xs text-center">
                    We respect your privacy. Your information is used only to respond to your inquiry.
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
