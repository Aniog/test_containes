import { useState } from 'react'
import { Mail, Phone, Globe, MapPin, Send, CheckCircle } from 'lucide-react'

const productCategories = [
  'Electronics & Components',
  'Home & Garden',
  'Textiles & Apparel',
  'Industrial Equipment',
  'Packaging Materials',
  'Auto Parts',
  'Building Materials',
  'Health & Beauty',
  'Consumer Goods',
  'Other',
]

const orderSizes = [
  'Under $5,000',
  '$5,000 – $20,000',
  '$20,000 – $50,000',
  '$50,000 – $100,000',
  'Over $100,000',
]

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    country: '',
    phone: '',
    productCategory: '',
    productDescription: '',
    orderSize: '',
    timeline: '',
    message: '',
  })
  const [submitted, setSubmitted] = useState(false)
  const [submitting, setSubmitting] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setSubmitting(true)

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1000))

    console.log('Inquiry submitted:', formData)
    setSubmitted(true)
    setSubmitting(false)
  }

  if (submitted) {
    return (
      <div className="py-24 md:py-32">
        <div className="max-w-xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <CheckCircle className="w-16 h-16 text-green-600 mx-auto mb-6" />
          <h1 className="text-3xl font-bold text-slate-900 mb-4">Thank You!</h1>
          <p className="text-slate-600 text-lg leading-relaxed">
            We have received your sourcing inquiry. Our team will review your requirements and respond within 24 hours with a preliminary sourcing plan.
          </p>
          <p className="text-slate-500 text-sm mt-4">
            Check your email for a confirmation message.
          </p>
        </div>
      </div>
    )
  }

  return (
    <div>
      {/* Hero */}
      <section className="bg-navy py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-3xl md:text-5xl font-bold text-white tracking-tight">
              Get a Free Sourcing Quote
            </h1>
            <p className="mt-4 text-lg text-slate-300 leading-relaxed">
              Tell us what you need and we will respond within 24 hours with a sourcing plan tailored to your requirements.
            </p>
          </div>
        </div>
      </section>

      {/* Form + Contact Info */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Form */}
            <div className="lg:col-span-2">
              <h2 className="text-2xl font-bold text-slate-900 mb-6">Sourcing Inquiry Form</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Contact Details */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-1.5">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-2.5 border border-slate-300 rounded-lg text-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-navy/20 focus:border-navy bg-white"
                      placeholder="Your full name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-1.5">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-2.5 border border-slate-300 rounded-lg text-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-navy/20 focus:border-navy bg-white"
                      placeholder="you@company.com"
                    />
                  </div>
                  <div>
                    <label htmlFor="company" className="block text-sm font-medium text-slate-700 mb-1.5">
                      Company Name
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      className="w-full px-4 py-2.5 border border-slate-300 rounded-lg text-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-navy/20 focus:border-navy bg-white"
                      placeholder="Your company"
                    />
                  </div>
                  <div>
                    <label htmlFor="country" className="block text-sm font-medium text-slate-700 mb-1.5">
                      Country *
                    </label>
                    <input
                      type="text"
                      id="country"
                      name="country"
                      required
                      value={formData.country}
                      onChange={handleChange}
                      className="w-full px-4 py-2.5 border border-slate-300 rounded-lg text-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-navy/20 focus:border-navy bg-white"
                      placeholder="Your country"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-slate-700 mb-1.5">
                      Phone / WhatsApp
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-2.5 border border-slate-300 rounded-lg text-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-navy/20 focus:border-navy bg-white"
                      placeholder="+1 234 567 8900"
                    />
                  </div>
                </div>

                {/* Product Details */}
                <div className="border-t border-slate-200 pt-6">
                  <h3 className="text-lg font-semibold text-slate-900 mb-4">Product Details</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="productCategory" className="block text-sm font-medium text-slate-700 mb-1.5">
                        Product Category *
                      </label>
                      <select
                        id="productCategory"
                        name="productCategory"
                        required
                        value={formData.productCategory}
                        onChange={handleChange}
                        className="w-full px-4 py-2.5 border border-slate-300 rounded-lg text-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-navy/20 focus:border-navy bg-white"
                      >
                        <option value="">Select a category</option>
                        {productCategories.map((cat) => (
                          <option key={cat} value={cat}>{cat}</option>
                        ))}
                      </select>
                    </div>
                    <div>
                      <label htmlFor="orderSize" className="block text-sm font-medium text-slate-700 mb-1.5">
                        Estimated Order Value
                      </label>
                      <select
                        id="orderSize"
                        name="orderSize"
                        value={formData.orderSize}
                        onChange={handleChange}
                        className="w-full px-4 py-2.5 border border-slate-300 rounded-lg text-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-navy/20 focus:border-navy bg-white"
                      >
                        <option value="">Select range</option>
                        {orderSizes.map((size) => (
                          <option key={size} value={size}>{size}</option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div className="mt-4">
                    <label htmlFor="productDescription" className="block text-sm font-medium text-slate-700 mb-1.5">
                      Product Description *
                    </label>
                    <textarea
                      id="productDescription"
                      name="productDescription"
                      required
                      rows={4}
                      value={formData.productDescription}
                      onChange={handleChange}
                      className="w-full px-4 py-2.5 border border-slate-300 rounded-lg text-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-navy/20 focus:border-navy bg-white resize-y"
                      placeholder="Describe the product you want to source — specifications, materials, certifications needed, etc."
                    />
                  </div>

                  <div className="mt-4">
                    <label htmlFor="timeline" className="block text-sm font-medium text-slate-700 mb-1.5">
                      Desired Timeline
                    </label>
                    <input
                      type="text"
                      id="timeline"
                      name="timeline"
                      value={formData.timeline}
                      onChange={handleChange}
                      className="w-full px-4 py-2.5 border border-slate-300 rounded-lg text-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-navy/20 focus:border-navy bg-white"
                      placeholder="e.g., Need goods by September 2026"
                    />
                  </div>

                  <div className="mt-4">
                    <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-1.5">
                      Additional Notes
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={3}
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full px-4 py-2.5 border border-slate-300 rounded-lg text-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-navy/20 focus:border-navy bg-white resize-y"
                      placeholder="Any other details or questions..."
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  disabled={submitting}
                  className="w-full md:w-auto inline-flex items-center justify-center bg-accent hover:bg-accent-hover disabled:opacity-60 text-white font-semibold px-8 py-3.5 rounded-lg text-base transition-colors border-none cursor-pointer"
                >
                  {submitting ? (
                    'Submitting...'
                  ) : (
                    <>
                      Submit Inquiry
                      <Send className="ml-2 w-4 h-4" />
                    </>
                  )}
                </button>
              </form>
            </div>

            {/* Contact Info Sidebar */}
            <div className="lg:col-span-1">
              <div className="bg-surface rounded-xl p-6 md:p-8 sticky top-24">
                <h3 className="text-lg font-semibold text-slate-900 mb-6">Contact Information</h3>
                <div className="space-y-5">
                  <div className="flex items-start gap-3">
                    <Mail className="w-5 h-5 text-accent mt-0.5" />
                    <div>
                      <div className="text-sm font-medium text-slate-900">Email</div>
                      <div className="text-sm text-slate-600">info@ssourcingchina.com</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Phone className="w-5 h-5 text-accent mt-0.5" />
                    <div>
                      <div className="text-sm font-medium text-slate-900">Phone / WhatsApp</div>
                      <div className="text-sm text-slate-600">+86 138 0000 0000</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-accent mt-0.5" />
                    <div>
                      <div className="text-sm font-medium text-slate-900">Office</div>
                      <div className="text-sm text-slate-600">Guangzhou, Guangdong, China</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Globe className="w-5 h-5 text-accent mt-0.5" />
                    <div>
                      <div className="text-sm font-medium text-slate-900">Working Hours</div>
                      <div className="text-sm text-slate-600">Mon–Fri, 9:00–18:00 (GMT+8)</div>
                    </div>
                  </div>
                </div>

                <div className="mt-8 pt-6 border-t border-slate-200">
                  <h4 className="text-sm font-semibold text-slate-900 mb-3">What happens next?</h4>
                  <ol className="space-y-2 list-none p-0 m-0">
                    <li className="flex items-start gap-2 text-sm text-slate-600">
                      <span className="w-5 h-5 bg-navy text-white rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0">1</span>
                      We review your inquiry within 24 hours
                    </li>
                    <li className="flex items-start gap-2 text-sm text-slate-600">
                      <span className="w-5 h-5 bg-navy text-white rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0">2</span>
                      We send you a preliminary sourcing plan
                    </li>
                    <li className="flex items-start gap-2 text-sm text-slate-600">
                      <span className="w-5 h-5 bg-navy text-white rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0">3</span>
                      We schedule a call to discuss details
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
