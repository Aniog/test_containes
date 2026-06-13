import { useState } from 'react'
import { Mail, MapPin, Clock, Phone, Send, CheckCircle, AlertCircle } from 'lucide-react'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    country: '',
    productCategory: '',
    productDescription: '',
    orderQuantity: '',
    targetPrice: '',
    services: [],
    message: '',
  })
  const [status, setStatus] = useState('idle')
  const [errors, setErrors] = useState({})

  const serviceOptions = [
    'Product Sourcing',
    'Supplier Verification',
    'Quality Inspection',
    'Production Follow-up',
    'Shipping Coordination',
  ]

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
    if (errors[name]) {
      setErrors((prev) => {
        const next = { ...prev }
        delete next[name]
        return next
      })
    }
  }

  const handleServiceToggle = (service) => {
    setFormData((prev) => ({
      ...prev,
      services: prev.services.includes(service)
        ? prev.services.filter((s) => s !== service)
        : [...prev.services, service],
    }))
  }

  const validate = () => {
    const newErrors = {}
    if (!formData.name.trim()) newErrors.name = 'Name is required'
    if (!formData.email.trim()) newErrors.email = 'Email is required'
    else if (!/^\S+@\S+\.\S+$/.test(formData.email)) newErrors.email = 'Please enter a valid email'
    if (!formData.productDescription.trim()) newErrors.productDescription = 'Please describe what you need'
    return newErrors
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const newErrors = validate()
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors)
      return
    }

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
        productCategory: '',
        productDescription: '',
        orderQuantity: '',
        targetPrice: '',
        services: [],
        message: '',
      })
    } catch (err) {
      setStatus('error')
    }
  }

  if (status === 'success') {
    return (
      <div className="min-h-[60vh] flex items-center justify-center bg-white">
        <div className="max-w-md mx-auto px-4 text-center">
          <CheckCircle className="w-16 h-16 text-green-600 mx-auto mb-4" />
          <h2 className="text-2xl font-bold text-slate-900 mb-2">Inquiry Submitted</h2>
          <p className="text-slate-600 mb-6">
            Thank you for your inquiry. Our team will review your requirements and respond within 24 hours.
          </p>
          <button
            onClick={() => setStatus('idle')}
            className="px-6 py-2.5 bg-blue-700 text-white font-medium rounded-md hover:bg-blue-800 transition-colors"
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
      <section className="bg-slate-900 text-white py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold">Contact Us</h1>
            <p className="mt-4 text-lg text-slate-300 leading-relaxed">
              Tell us about your sourcing needs. We will review your requirements and respond within 24 hours with a free quotation.
            </p>
          </div>
        </div>
      </section>

      {/* Form + Contact Info */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Form */}
            <div className="lg:col-span-2">
              <h2 className="text-2xl font-bold text-slate-900 mb-6">Request a Free Sourcing Quote</h2>

              {status === 'error' && (
                <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg flex items-start gap-3">
                  <AlertCircle className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                  <p className="text-sm text-red-800">Something went wrong. Please try again or email us directly.</p>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6" noValidate>
                {/* Name & Email */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-1">
                      Full Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      value={formData.name}
                      onChange={handleChange}
                      className={`w-full px-3 py-2.5 border rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent ${
                        errors.name ? 'border-red-400' : 'border-slate-300'
                      }`}
                      placeholder="Your name"
                    />
                    {errors.name && <p className="mt-1 text-xs text-red-600">{errors.name}</p>}
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-1">
                      Email <span className="text-red-500">*</span>
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      className={`w-full px-3 py-2.5 border rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent ${
                        errors.email ? 'border-red-400' : 'border-slate-300'
                      }`}
                      placeholder="you@company.com"
                    />
                    {errors.email && <p className="mt-1 text-xs text-red-600">{errors.email}</p>}
                  </div>
                </div>

                {/* Company & Country */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="company" className="block text-sm font-medium text-slate-700 mb-1">
                      Company Name
                    </label>
                    <input
                      id="company"
                      name="company"
                      type="text"
                      value={formData.company}
                      onChange={handleChange}
                      className="w-full px-3 py-2.5 border border-slate-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="Your company"
                    />
                  </div>
                  <div>
                    <label htmlFor="country" className="block text-sm font-medium text-slate-700 mb-1">
                      Country
                    </label>
                    <input
                      id="country"
                      name="country"
                      type="text"
                      value={formData.country}
                      onChange={handleChange}
                      className="w-full px-3 py-2.5 border border-slate-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="Your country"
                    />
                  </div>
                </div>

                {/* Product Category & Description */}
                <div>
                  <label htmlFor="productCategory" className="block text-sm font-medium text-slate-700 mb-1">
                    Product Category
                  </label>
                  <select
                    id="productCategory"
                    name="productCategory"
                    value={formData.productCategory}
                    onChange={handleChange}
                    className="w-full px-3 py-2.5 border border-slate-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  >
                    <option value="">Select a category</option>
                    <option value="electronics">Electronics & Components</option>
                    <option value="machinery">Machinery & Industrial</option>
                    <option value="textiles">Textiles & Apparel</option>
                    <option value="home">Home & Garden</option>
                    <option value="packaging">Packaging & Printing</option>
                    <option value="auto">Auto Parts & Accessories</option>
                    <option value="hardware">Hardware & Building Materials</option>
                    <option value="health">Health & Beauty</option>
                    <option value="consumer">Consumer Goods & Gifts</option>
                    <option value="it">IT & Telecom Equipment</option>
                    <option value="energy">Energy & Solar Products</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="productDescription" className="block text-sm font-medium text-slate-700 mb-1">
                    Product Description <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    id="productDescription"
                    name="productDescription"
                    rows={4}
                    value={formData.productDescription}
                    onChange={handleChange}
                    className={`w-full px-3 py-2.5 border rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none ${
                      errors.productDescription ? 'border-red-400' : 'border-slate-300'
                    }`}
                    placeholder="Describe the product you need, including specifications, materials, and any special requirements..."
                  />
                  {errors.productDescription && <p className="mt-1 text-xs text-red-600">{errors.productDescription}</p>}
                </div>

                {/* Order Quantity & Target Price */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="orderQuantity" className="block text-sm font-medium text-slate-700 mb-1">
                      Estimated Order Quantity
                    </label>
                    <input
                      id="orderQuantity"
                      name="orderQuantity"
                      type="text"
                      value={formData.orderQuantity}
                      onChange={handleChange}
                      className="w-full px-3 py-2.5 border border-slate-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="e.g., 1,000 units"
                    />
                  </div>
                  <div>
                    <label htmlFor="targetPrice" className="block text-sm font-medium text-slate-700 mb-1">
                      Target Price (USD)
                    </label>
                    <input
                      id="targetPrice"
                      name="targetPrice"
                      type="text"
                      value={formData.targetPrice}
                      onChange={handleChange}
                      className="w-full px-3 py-2.5 border border-slate-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="e.g., $5-10 per unit"
                    />
                  </div>
                </div>

                {/* Services Needed */}
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">
                    Services Needed
                  </label>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {serviceOptions.map((service) => (
                      <label key={service} className="flex items-center gap-2 cursor-pointer">
                        <input
                          type="checkbox"
                          checked={formData.services.includes(service)}
                          onChange={() => handleServiceToggle(service)}
                          className="w-4 h-4 text-blue-700 border-slate-300 rounded focus:ring-blue-500"
                        />
                        <span className="text-sm text-slate-700">{service}</span>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Additional Message */}
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-1">
                    Additional Notes
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={3}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-3 py-2.5 border border-slate-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
                    placeholder="Any other details, questions, or requirements..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={status === 'submitting'}
                  className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-3 bg-blue-700 text-white font-medium rounded-md hover:bg-blue-800 transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  {status === 'submitting' ? (
                    <>
                      <span className="animate-spin mr-2">
                        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                        </svg>
                      </span>
                      Submitting...
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4 mr-2" />
                      Submit Inquiry
                    </>
                  )}
                </button>
              </form>
            </div>

            {/* Contact Info Sidebar */}
            <div className="lg:col-span-1">
              <div className="sticky top-24 space-y-6">
                <div className="p-6 bg-slate-50 rounded-lg border border-slate-200">
                  <h3 className="font-semibold text-slate-900 mb-4">Contact Information</h3>
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <Mail className="w-5 h-5 text-blue-700 flex-shrink-0 mt-0.5" />
                      <div>
                        <div className="text-sm font-medium text-slate-900">Email</div>
                        <div className="text-sm text-slate-600">info@ssourcingchina.com</div>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Phone className="w-5 h-5 text-blue-700 flex-shrink-0 mt-0.5" />
                      <div>
                        <div className="text-sm font-medium text-slate-900">Phone / WhatsApp</div>
                        <div className="text-sm text-slate-600">+86 755 1234 5678</div>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <MapPin className="w-5 h-5 text-blue-700 flex-shrink-0 mt-0.5" />
                      <div>
                        <div className="text-sm font-medium text-slate-900">Office</div>
                        <div className="text-sm text-slate-600">Shenzhen, Guangdong, China</div>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Clock className="w-5 h-5 text-blue-700 flex-shrink-0 mt-0.5" />
                      <div>
                        <div className="text-sm font-medium text-slate-900">Business Hours</div>
                        <div className="text-sm text-slate-600">Mon - Fri: 9:00 AM - 6:00 PM (CST)</div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="p-6 bg-blue-50 rounded-lg border border-blue-200">
                  <h3 className="font-semibold text-blue-900 mb-2">Why Submit an Inquiry?</h3>
                  <ul className="space-y-2 text-sm text-blue-800">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 flex-shrink-0 mt-0.5" />
                      Free initial consultation
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 flex-shrink-0 mt-0.5" />
                      Response within 24 hours
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 flex-shrink-0 mt-0.5" />
                      No obligation or commitment
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 flex-shrink-0 mt-0.5" />
                      Tailored sourcing plan
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
