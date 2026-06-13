import { useState } from 'react'
import { Mail, Phone, MapPin, Clock, Send, ArrowRight } from 'lucide-react'
import SectionHeader from '@/components/ui/SectionHeader'

const productCategories = [
  'Consumer Electronics',
  'Home & Garden',
  'Apparel & Textiles',
  'Machinery & Industrial',
  'Promotional Products',
  'Beauty & Personal Care',
  'Baby & Kids Products',
  'Automotive Parts',
  'Sports & Outdoor',
  'Building Materials',
  'Kitchen & Housewares',
  'Lighting & Electrical',
  'Other',
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
    quantity: '',
    targetPrice: '',
    timeline: '',
    additionalInfo: '',
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
    }, 1500)
  }

  return (
    <div>
      {/* Hero */}
      <section className="bg-neutral-900 py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="inline-block bg-primary/20 text-primary-light text-xs font-semibold uppercase tracking-wider px-3 py-1 rounded-full mb-5">
              Get In Touch
            </span>
            <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-5">
              Get a Free Sourcing Quote
            </h1>
            <p className="text-lg text-neutral-300 leading-relaxed">
              Tell us what products you need and receive a detailed quotation with supplier options,
              pricing, and lead times within 48 hours. No obligation, no upfront fees.
            </p>
          </div>
        </div>
      </section>

      {/* Form & Contact Info */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 lg:gap-14">
            {/* Form */}
            <div className="lg:col-span-2">
              {status === 'success' ? (
                <div className="bg-green-50 border border-green-200 rounded-xl p-8 text-center">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Send className="w-8 h-8 text-green-600" />
                  </div>
                  <h2 className="text-2xl font-bold text-neutral-900 mb-2">Thank You!</h2>
                  <p className="text-neutral-600 max-w-md mx-auto">
                    We have received your inquiry. Our sourcing team will review your requirements
                    and get back to you within 24-48 hours with a detailed quotation.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit}>
                  <h2 className="text-2xl font-bold text-neutral-900 mb-1">Sourcing Inquiry Form</h2>
                  <p className="text-neutral-500 text-sm mb-8">Fields marked with * are required.</p>

                  {/* Contact Info */}
                  <div className="mb-8">
                    <h3 className="text-base font-semibold text-neutral-900 mb-4 pb-2 border-b border-neutral-200">
                      Contact Information
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-neutral-700 mb-1.5">Full Name *</label>
                        <input
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          placeholder="John Smith"
                          className="w-full px-4 py-2.5 rounded-lg border border-neutral-300 text-sm text-neutral-900 placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-neutral-700 mb-1.5">Email Address *</label>
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          placeholder="john@company.com"
                          className="w-full px-4 py-2.5 rounded-lg border border-neutral-300 text-sm text-neutral-900 placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-neutral-700 mb-1.5">Company Name</label>
                        <input
                          type="text"
                          name="company"
                          value={formData.company}
                          onChange={handleChange}
                          placeholder="Your Company Ltd."
                          className="w-full px-4 py-2.5 rounded-lg border border-neutral-300 text-sm text-neutral-900 placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-neutral-700 mb-1.5">Country *</label>
                        <input
                          type="text"
                          name="country"
                          value={formData.country}
                          onChange={handleChange}
                          required
                          placeholder="United States"
                          className="w-full px-4 py-2.5 rounded-lg border border-neutral-300 text-sm text-neutral-900 placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                        />
                      </div>
                      <div className="md:col-span-2">
                        <label className="block text-sm font-medium text-neutral-700 mb-1.5">Phone Number</label>
                        <input
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          placeholder="+1 234 567 8900"
                          className="w-full px-4 py-2.5 rounded-lg border border-neutral-300 text-sm text-neutral-900 placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Product Info */}
                  <div className="mb-8">
                    <h3 className="text-base font-semibold text-neutral-900 mb-4 pb-2 border-b border-neutral-200">
                      Product Requirements
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="md:col-span-2">
                        <label className="block text-sm font-medium text-neutral-700 mb-1.5">Product Category *</label>
                        <select
                          name="productCategory"
                          value={formData.productCategory}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-2.5 rounded-lg border border-neutral-300 text-sm text-neutral-900 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent bg-white"
                        >
                          <option value="">Select a category</option>
                          {productCategories.map((cat) => (
                            <option key={cat} value={cat}>{cat}</option>
                          ))}
                        </select>
                      </div>
                      <div className="md:col-span-2">
                        <label className="block text-sm font-medium text-neutral-700 mb-1.5">Product Description *</label>
                        <textarea
                          name="productDescription"
                          value={formData.productDescription}
                          onChange={handleChange}
                          required
                          rows={4}
                          placeholder="Describe the products you need. Include specifications, materials, dimensions, colors, certifications, or attach reference links."
                          className="w-full px-4 py-2.5 rounded-lg border border-neutral-300 text-sm text-neutral-900 placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent resize-y"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-neutral-700 mb-1.5">Estimated Quantity</label>
                        <input
                          type="text"
                          name="quantity"
                          value={formData.quantity}
                          onChange={handleChange}
                          placeholder="e.g. 5,000 units"
                          className="w-full px-4 py-2.5 rounded-lg border border-neutral-300 text-sm text-neutral-900 placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-neutral-700 mb-1.5">Target Price (if any)</label>
                        <input
                          type="text"
                          name="targetPrice"
                          value={formData.targetPrice}
                          onChange={handleChange}
                          placeholder="e.g. $3-5 per unit"
                          className="w-full px-4 py-2.5 rounded-lg border border-neutral-300 text-sm text-neutral-900 placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                        />
                      </div>
                      <div className="md:col-span-2">
                        <label className="block text-sm font-medium text-neutral-700 mb-1.5">Preferred Timeline</label>
                        <select
                          name="timeline"
                          value={formData.timeline}
                          onChange={handleChange}
                          className="w-full px-4 py-2.5 rounded-lg border border-neutral-300 text-sm text-neutral-900 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent bg-white"
                        >
                          <option value="">Select timeline</option>
                          <option value="urgent">Urgent (within 30 days)</option>
                          <option value="standard">Standard (30-60 days)</option>
                          <option value="flexible">Flexible (60-90 days)</option>
                          <option value="planning">Planning phase (no rush)</option>
                        </select>
                      </div>
                      <div className="md:col-span-2">
                        <label className="block text-sm font-medium text-neutral-700 mb-1.5">Additional Information</label>
                        <textarea
                          name="additionalInfo"
                          value={formData.additionalInfo}
                          onChange={handleChange}
                          rows={3}
                          placeholder="Any other details about your sourcing needs, certifications required, shipping destination, etc."
                          className="w-full px-4 py-2.5 rounded-lg border border-neutral-300 text-sm text-neutral-900 placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent resize-y"
                        />
                      </div>
                    </div>
                  </div>

                  <button
                    type="submit"
                    disabled={status === 'submitting'}
                    className="w-full md:w-auto bg-primary hover:bg-primary-dark disabled:opacity-70 text-white font-semibold px-10 py-3.5 rounded-lg text-base transition-all shadow-md hover:shadow-lg flex items-center justify-center gap-2"
                  >
                    {status === 'submitting' ? (
                      <>
                        <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        Sending...
                      </>
                    ) : (
                      <>
                        Submit Inquiry <ArrowRight className="w-5 h-5" />
                      </>
                    )}
                  </button>

                  <p className="text-xs text-neutral-400 mt-3">
                    We typically respond within 24 hours during business days.
                  </p>
                </form>
              )}
            </div>

            {/* Contact Info Sidebar */}
            <div>
              <div className="bg-neutral-50 rounded-xl p-6 md:p-7 border border-neutral-200 sticky top-24">
                <h3 className="text-lg font-semibold text-neutral-900 mb-5">Contact Information</h3>

                <div className="flex flex-col gap-5">
                  <a href="mailto:info@ssourcingchina.com" className="flex items-start gap-3 group">
                    <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center shrink-0">
                      <Mail className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-neutral-900 group-hover:text-primary transition-colors">Email Us</p>
                      <p className="text-sm text-neutral-500">info@ssourcingchina.com</p>
                    </div>
                  </a>

                  <a href="tel:+8613612345678" className="flex items-start gap-3 group">
                    <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center shrink-0">
                      <Phone className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-neutral-900 group-hover:text-primary transition-colors">Call Us</p>
                      <p className="text-sm text-neutral-500">+86 136-1234-5678</p>
                      <p className="text-xs text-neutral-400">WeChat available</p>
                    </div>
                  </a>

                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center shrink-0">
                      <MapPin className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-neutral-900">Office Location</p>
                      <p className="text-sm text-neutral-500">Tianhe District, Guangzhou</p>
                      <p className="text-sm text-neutral-500">Guangdong, China 510000</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center shrink-0">
                      <Clock className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-neutral-900">Business Hours</p>
                      <p className="text-sm text-neutral-500">Mon - Fri: 9:00 AM - 6:00 PM</p>
                      <p className="text-xs text-neutral-400">China Standard Time (UTC+8)</p>
                    </div>
                  </div>
                </div>

                <div className="mt-6 pt-6 border-t border-neutral-200">
                  <h4 className="text-sm font-semibold text-neutral-900 mb-3">What to Expect</h4>
                  <ul className="flex flex-col gap-2 text-sm text-neutral-500">
                    <li className="flex items-start gap-2">
                      <ArrowRight className="w-3.5 h-3.5 text-primary shrink-0 mt-1" />
                      Response within 24 hours
                    </li>
                    <li className="flex items-start gap-2">
                      <ArrowRight className="w-3.5 h-3.5 text-primary shrink-0 mt-1" />
                      Detailed quotation within 48 hours
                    </li>
                    <li className="flex items-start gap-2">
                      <ArrowRight className="w-3.5 h-3.5 text-primary shrink-0 mt-1" />
                      No upfront fees or obligations
                    </li>
                    <li className="flex items-start gap-2">
                      <ArrowRight className="w-3.5 h-3.5 text-primary shrink-0 mt-1" />
                      Free initial consultation
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
