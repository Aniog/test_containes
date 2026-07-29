import { useEffect, useRef, useState } from 'react'
import { Mail, Phone, MapPin, Clock, Send, CheckCircle, AlertCircle } from 'lucide-react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'

const initialValues = {
  name: '',
  email: '',
  phone: '',
  company: '',
  productCategory: '',
  productDescription: '',
  quantity: '',
  targetPrice: '',
  message: '',
}

export default function Contact() {
  const containerRef = useRef(null)
  const [values, setValues] = useState(initialValues)
  const [status, setStatus] = useState('idle')
  const [error, setError] = useState(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  const onChange = (e) => {
    const { name, value } = e.target
    setValues((v) => ({ ...v, [name]: value }))
  }

  const validate = (v) => {
    if (!v.name.trim()) return 'Name is required'
    if (!v.email.trim()) return 'Email is required'
    if (!/^\S+@\S+\.\S+$/.test(v.email)) return 'Please enter a valid email'
    if (!v.productDescription.trim()) return 'Please describe the product you want to source'
    return null
  }

  const onSubmit = async (e) => {
    e.preventDefault()
    setError(null)
    const err = validate(values)
    if (err) { setError(err); return }

    setStatus('submitting')

    // Simulate submission
    try {
      await new Promise((resolve) => setTimeout(resolve, 1500))
      setStatus('success')
      setValues(initialValues)
    } catch (err) {
      setError(err.message || 'Submission failed. Please try again.')
      setStatus('error')
    }
  }

  const contactInfo = [
    { icon: MapPin, label: 'Office', value: 'Shenzhen, Guangdong, China' },
    { icon: Mail, label: 'Email', value: 'info@ssourcingchina.com' },
    { icon: Phone, label: 'Phone', value: '+86 755 1234 5678' },
    { icon: Clock, label: 'Response Time', value: 'Within 24 hours' },
  ]

  return (
    <div ref={containerRef}>
      {/* Hero */}
      <section className="bg-brand-900 text-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 id="contact-title" className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
              Get a Free Sourcing Quote
            </h1>
            <p className="text-lg text-blue-200 leading-relaxed">
              Tell us about your product and we will get back to you within 24 hours with a tailored proposal.
            </p>
          </div>
        </div>
      </section>

      {/* Form + Info */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-5 gap-12">
            {/* Form */}
            <div className="lg:col-span-3">
              {status === 'success' ? (
                <div className="bg-green-50 border border-green-200 rounded-xl p-8 text-center">
                  <CheckCircle className="w-12 h-12 text-green-500 mx-auto mb-4" />
                  <h2 className="text-2xl font-bold text-green-800 mb-2">Thank You!</h2>
                  <p className="text-green-700 mb-6">
                    We have received your inquiry and will get back to you within 24 hours with a tailored sourcing proposal.
                  </p>
                  <button
                    onClick={() => setStatus('idle')}
                    className="text-brand-600 font-medium hover:text-brand-700 transition-colors"
                  >
                    Submit another inquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={onSubmit} className="space-y-5">
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-1.5">
                        Full Name <span className="text-red-500">*</span>
                      </label>
                      <input
                        id="name"
                        name="name"
                        type="text"
                        value={values.name}
                        onChange={onChange}
                        required
                        className="w-full px-4 py-2.5 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent transition-shadow"
                        placeholder="Your name"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-1.5">
                        Email Address <span className="text-red-500">*</span>
                      </label>
                      <input
                        id="email"
                        name="email"
                        type="email"
                        value={values.email}
                        onChange={onChange}
                        required
                        className="w-full px-4 py-2.5 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent transition-shadow"
                        placeholder="you@company.com"
                      />
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-slate-700 mb-1.5">
                        Phone Number
                      </label>
                      <input
                        id="phone"
                        name="phone"
                        type="tel"
                        value={values.phone}
                        onChange={onChange}
                        className="w-full px-4 py-2.5 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent transition-shadow"
                        placeholder="+1 555 0123"
                      />
                    </div>
                    <div>
                      <label htmlFor="company" className="block text-sm font-medium text-slate-700 mb-1.5">
                        Company Name
                      </label>
                      <input
                        id="company"
                        name="company"
                        type="text"
                        value={values.company}
                        onChange={onChange}
                        className="w-full px-4 py-2.5 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent transition-shadow"
                        placeholder="Your company"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="productCategory" className="block text-sm font-medium text-slate-700 mb-1.5">
                      Product Category
                    </label>
                    <select
                      id="productCategory"
                      name="productCategory"
                      value={values.productCategory}
                      onChange={onChange}
                      className="w-full px-4 py-2.5 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent transition-shadow bg-white"
                    >
                      <option value="">Select a category</option>
                      <option value="electronics">Electronics & Components</option>
                      <option value="appliances">Home & Kitchen Appliances</option>
                      <option value="furniture">Furniture & Home Decor</option>
                      <option value="apparel">Apparel & Textiles</option>
                      <option value="hardware">Hardware & Industrial Parts</option>
                      <option value="packaging">Packaging & Printing</option>
                      <option value="beauty">Beauty & Personal Care</option>
                      <option value="toys">Toys & Sporting Goods</option>
                      <option value="medical">Medical Devices & Supplies</option>
                      <option value="other">Other / Not Listed</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="productDescription" className="block text-sm font-medium text-slate-700 mb-1.5">
                      Product Description <span className="text-red-500">*</span>
                    </label>
                    <textarea
                      id="productDescription"
                      name="productDescription"
                      rows={3}
                      value={values.productDescription}
                      onChange={onChange}
                      required
                      className="w-full px-4 py-2.5 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent transition-shadow resize-y"
                      placeholder="Describe the product you want to source — materials, dimensions, features, reference images or links..."
                    />
                  </div>

                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label htmlFor="quantity" className="block text-sm font-medium text-slate-700 mb-1.5">
                        Estimated Order Quantity
                      </label>
                      <input
                        id="quantity"
                        name="quantity"
                        type="text"
                        value={values.quantity}
                        onChange={onChange}
                        className="w-full px-4 py-2.5 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent transition-shadow"
                        placeholder="e.g. 1,000 units"
                      />
                    </div>
                    <div>
                      <label htmlFor="targetPrice" className="block text-sm font-medium text-slate-700 mb-1.5">
                        Target Unit Price (USD)
                      </label>
                      <input
                        id="targetPrice"
                        name="targetPrice"
                        type="text"
                        value={values.targetPrice}
                        onChange={onChange}
                        className="w-full px-4 py-2.5 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent transition-shadow"
                        placeholder="e.g. $5-10 per unit"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-1.5">
                      Additional Notes
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={3}
                      value={values.message}
                      onChange={onChange}
                      className="w-full px-4 py-2.5 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent transition-shadow resize-y"
                      placeholder="Any other requirements, deadlines, or questions..."
                    />
                  </div>

                  {error && (
                    <div className="flex items-center gap-2 text-red-600 text-sm">
                      <AlertCircle className="w-4 h-4" />
                      {error}
                    </div>
                  )}

                  <button
                    type="submit"
                    disabled={status === 'submitting'}
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-brand-500 hover:bg-brand-600 text-white font-semibold px-8 py-3.5 rounded-lg text-base transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {status === 'submitting' ? (
                      'Sending...'
                    ) : (
                      <>
                        Submit Inquiry
                        <Send className="w-4 h-4" />
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>

            {/* Contact Info Sidebar */}
            <div className="lg:col-span-2">
              <div className="bg-gray-50 border border-gray-200 rounded-xl p-6 md:p-8">
                <h2 className="text-xl font-bold text-brand-900 mb-6">Contact Information</h2>
                <div className="space-y-5">
                  {contactInfo.map((item, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <div className="w-9 h-9 rounded-lg bg-brand-100 flex items-center justify-center flex-shrink-0">
                        <item.icon className="w-4 h-4 text-brand-600" />
                      </div>
                      <div>
                        <p className="text-xs text-slate-400 mb-0.5">{item.label}</p>
                        <p className="text-sm font-medium text-slate-800">{item.value}</p>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="border-t border-gray-200 mt-8 pt-8">
                  <h3 className="font-semibold text-brand-900 mb-3">Why Work With Us?</h3>
                  <ul className="space-y-2.5 text-sm text-slate-600">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                      Factory-direct pricing with verified suppliers
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                      On-site quality control at every production stage
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                      Bilingual team — no communication barriers
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                      Transparent pricing with no hidden costs
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
