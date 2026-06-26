import { useState } from 'react'
import { Mail, Phone, MapPin, Clock, Send, CheckCircle } from 'lucide-react'

const initialValues = {
  name: '',
  email: '',
  phone: '',
  company: '',
  productCategory: '',
  productDescription: '',
  orderQuantity: '',
  targetPrice: '',
  timeline: '',
  message: '',
}

export default function Contact() {
  const [values, setValues] = useState(initialValues)
  const [status, setStatus] = useState('idle')
  const [error, setError] = useState(null)

  const onChange = (e) => {
    const { name, value } = e.target
    setValues((v) => ({ ...v, [name]: value }))
  }

  const validate = (v) => {
    if (!v.name.trim()) return 'Name is required'
    if (!v.email.trim()) return 'Email is required'
    if (!/^\S+@\S+\.\S+$/.test(v.email)) return 'Please enter a valid email'
    if (!v.productDescription.trim()) return 'Product description is required'
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
    // Simulate submission — in production this would call an API
    await new Promise((resolve) => setTimeout(resolve, 1500))
    setStatus('success')
    setValues(initialValues)
  }

  return (
    <div>
      <section className="bg-navy py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-sm font-semibold text-accent uppercase tracking-wider mb-4">Contact</p>
          <h1 className="text-3xl md:text-5xl font-extrabold text-white mb-4">
            Get a Free Sourcing Quote
          </h1>
          <p className="text-lg text-gray-300 max-w-2xl">
            Tell us about your product needs and we will provide a customized sourcing plan
            within 24 hours — no obligation, no cost.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-16">
            <div className="lg:col-span-2">
              {status === 'success' ? (
                <div className="bg-success/5 rounded-2xl p-10 text-center border border-success/20">
                  <CheckCircle className="w-12 h-12 text-success mx-auto mb-4" />
                  <h2 className="text-2xl font-bold text-navy mb-3">Thank You for Your Inquiry</h2>
                  <p className="text-gray-600 mb-2">
                    We have received your sourcing request. Our team will review your requirements
                    and get back to you within 24 hours with a preliminary assessment and proposed plan.
                  </p>
                  <p className="text-sm text-gray-500">
                    For urgent inquiries, call us at +86 755-8888-6666.
                  </p>
                  <button
                    onClick={() => setStatus('idle')}
                    className="mt-6 inline-flex items-center px-6 py-2.5 text-accent font-semibold text-sm rounded-lg border-2 border-accent/20 hover:border-accent transition-colors"
                  >
                    Submit Another Inquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={onSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1.5">
                        Full Name <span className="text-red-500">*</span>
                      </label>
                      <input
                        id="name"
                        name="name"
                        type="text"
                        value={values.name}
                        onChange={onChange}
                        required
                        className="w-full px-4 py-2.5 border border-gray-200 rounded-lg text-sm focus:ring-2 focus:ring-accent/20 focus:border-accent outline-none transition-shadow"
                        placeholder="Your name"
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
                        value={values.email}
                        onChange={onChange}
                        required
                        className="w-full px-4 py-2.5 border border-gray-200 rounded-lg text-sm focus:ring-2 focus:ring-accent/20 focus:border-accent outline-none transition-shadow"
                        placeholder="you@company.com"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1.5">
                        Phone Number
                      </label>
                      <input
                        id="phone"
                        name="phone"
                        type="tel"
                        value={values.phone}
                        onChange={onChange}
                        className="w-full px-4 py-2.5 border border-gray-200 rounded-lg text-sm focus:ring-2 focus:ring-accent/20 focus:border-accent outline-none transition-shadow"
                        placeholder="+1 (555) 000-0000"
                      />
                    </div>
                    <div>
                      <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-1.5">
                        Company Name
                      </label>
                      <input
                        id="company"
                        name="company"
                        type="text"
                        value={values.company}
                        onChange={onChange}
                        className="w-full px-4 py-2.5 border border-gray-200 rounded-lg text-sm focus:ring-2 focus:ring-accent/20 focus:border-accent outline-none transition-shadow"
                        placeholder="Your company"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="productCategory" className="block text-sm font-medium text-gray-700 mb-1.5">
                      Product Category
                    </label>
                    <select
                      id="productCategory"
                      name="productCategory"
                      value={values.productCategory}
                      onChange={onChange}
                      className="w-full px-4 py-2.5 border border-gray-200 rounded-lg text-sm focus:ring-2 focus:ring-accent/20 focus:border-accent outline-none transition-shadow bg-white"
                    >
                      <option value="">Select a category</option>
                      <option>Electronics & Accessories</option>
                      <option>Home & Kitchen</option>
                      <option>Textiles & Apparel</option>
                      <option>Hardware & Tools</option>
                      <option>Packaging & Printing</option>
                      <option>Machinery & Parts</option>
                      <option>Sports & Outdoor</option>
                      <option>Toys & Gifts</option>
                      <option>Automotive Parts</option>
                      <option>Other / Not Listed</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="productDescription" className="block text-sm font-medium text-gray-700 mb-1.5">
                      Product Description <span className="text-red-500">*</span>
                    </label>
                    <textarea
                      id="productDescription"
                      name="productDescription"
                      rows={3}
                      value={values.productDescription}
                      onChange={onChange}
                      required
                      className="w-full px-4 py-2.5 border border-gray-200 rounded-lg text-sm focus:ring-2 focus:ring-accent/20 focus:border-accent outline-none transition-shadow resize-y"
                      placeholder="Describe the product you want to source (materials, specifications, features, etc.)"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                    <div>
                      <label htmlFor="orderQuantity" className="block text-sm font-medium text-gray-700 mb-1.5">
                        Estimated Order Quantity
                      </label>
                      <input
                        id="orderQuantity"
                        name="orderQuantity"
                        type="text"
                        value={values.orderQuantity}
                        onChange={onChange}
                        className="w-full px-4 py-2.5 border border-gray-200 rounded-lg text-sm focus:ring-2 focus:ring-accent/20 focus:border-accent outline-none transition-shadow"
                        placeholder="e.g. 1,000 units"
                      />
                    </div>
                    <div>
                      <label htmlFor="targetPrice" className="block text-sm font-medium text-gray-700 mb-1.5">
                        Target Unit Price (USD)
                      </label>
                      <input
                        id="targetPrice"
                        name="targetPrice"
                        type="text"
                        value={values.targetPrice}
                        onChange={onChange}
                        className="w-full px-4 py-2.5 border border-gray-200 rounded-lg text-sm focus:ring-2 focus:ring-accent/20 focus:border-accent outline-none transition-shadow"
                        placeholder="e.g. $5-10"
                      />
                    </div>
                    <div>
                      <label htmlFor="timeline" className="block text-sm font-medium text-gray-700 mb-1.5">
                        Target Timeline
                      </label>
                      <select
                        id="timeline"
                        name="timeline"
                        value={values.timeline}
                        onChange={onChange}
                        className="w-full px-4 py-2.5 border border-gray-200 rounded-lg text-sm focus:ring-2 focus:ring-accent/20 focus:border-accent outline-none transition-shadow bg-white"
                      >
                        <option value="">Select timeline</option>
                        <option>ASAP / Urgent</option>
                        <option>Within 1 month</option>
                        <option>1-3 months</option>
                        <option>3-6 months</option>
                        <option>Just exploring options</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1.5">
                      Additional Notes
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={2}
                      value={values.message}
                      onChange={onChange}
                      className="w-full px-4 py-2.5 border border-gray-200 rounded-lg text-sm focus:ring-2 focus:ring-accent/20 focus:border-accent outline-none transition-shadow resize-y"
                      placeholder="Any other details or requirements"
                    />
                  </div>

                  {error && (
                    <div className="bg-red-50 border border-red-200 rounded-lg px-4 py-3 text-sm text-red-700">
                      {error}
                    </div>
                  )}

                  <button
                    type="submit"
                    disabled={status === 'submitting'}
                    className="inline-flex items-center gap-2 px-8 py-3.5 bg-accent text-white font-semibold rounded-lg hover:bg-accent-hover transition-colors shadow-md disabled:opacity-60 disabled:cursor-not-allowed"
                  >
                    {status === 'submitting' ? (
                      'Sending...'
                    ) : (
                      <>
                        <Send className="w-5 h-5" />
                        Submit Inquiry
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>

            <div className="space-y-8">
              <div>
                <h2 className="text-xl font-bold text-navy mb-5">Contact Information</h2>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                    <div>
                      <p className="text-sm font-semibold text-gray-700">Office Address</p>
                      <p className="text-sm text-gray-500">Nanshan District, Shenzhen<br />Guangdong, China</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Mail className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                    <div>
                      <p className="text-sm font-semibold text-gray-700">Email</p>
                      <p className="text-sm text-gray-500">info@ssourcingchina.com</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Phone className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                    <div>
                      <p className="text-sm font-semibold text-gray-700">Phone</p>
                      <p className="text-sm text-gray-500">+86 755-8888-6666</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Clock className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                    <div>
                      <p className="text-sm font-semibold text-gray-700">Business Hours</p>
                      <p className="text-sm text-gray-500">Mon-Fri: 9:00 AM - 6:00 PM (CST)<br />Sat: 9:00 AM - 12:00 PM (CST)</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-surface rounded-xl p-6 border border-gray-100">
                <h3 className="font-bold text-navy mb-3">What Happens Next?</h3>
                <ol className="space-y-3 text-sm text-gray-600">
                  <li className="flex gap-2">
                    <span className="font-bold text-accent shrink-0">1.</span>
                    We review your inquiry within 24 hours.
                  </li>
                  <li className="flex gap-2">
                    <span className="font-bold text-accent shrink-0">2.</span>
                    We schedule a free consultation call to discuss your needs in detail.
                  </li>
                  <li className="flex gap-2">
                    <span className="font-bold text-accent shrink-0">3.</span>
                    We prepare a customized sourcing plan with timeline and cost estimate.
                  </li>
                  <li className="flex gap-2">
                    <span className="font-bold text-accent shrink-0">4.</span>
                    Upon your approval, we begin the sourcing process immediately.
                  </li>
                </ol>
              </div>

              <div className="bg-navy rounded-xl p-6 text-white">
                <h3 className="font-bold mb-2">Free Consultation</h3>
                <p className="text-sm text-gray-300 leading-relaxed">
                  Not sure where to start? Schedule a free 30-minute call to discuss your sourcing needs with our team. No commitment required.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}