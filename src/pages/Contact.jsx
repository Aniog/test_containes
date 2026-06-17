import { useState } from 'react'
import {
  MapPin, Phone, Mail, Clock, Send, CheckCircle, AlertCircle,
  ArrowRight, Linkedin, Twitter
} from 'lucide-react'
import { Link } from 'react-router-dom'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    country: '',
    productCategory: '',
    productDescription: '',
    estimatedVolume: '',
    timeline: '',
    message: '',
  })
  const [status, setStatus] = useState('idle')
  const [error, setError] = useState(null)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const validate = () => {
    if (!formData.name.trim()) return 'Name is required'
    if (!formData.email.trim()) return 'Email is required'
    if (!/^\S+@\S+\.\S+$/.test(formData.email)) return 'Please enter a valid email'
    if (!formData.company.trim()) return 'Company name is required'
    if (!formData.productDescription.trim()) return 'Please describe the product you want to source'
    return null
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setError(null)
    const validationError = validate()
    if (validationError) {
      setError(validationError)
      return
    }
    setStatus('submitting')

    // Simulate submission (no actual DB for contact form to avoid complexity)
    setTimeout(() => {
      setStatus('success')
      setFormData({
        name: '',
        company: '',
        email: '',
        phone: '',
        country: '',
        productCategory: '',
        productDescription: '',
        estimatedVolume: '',
        timeline: '',
        message: '',
      })
    }, 1500)
  }

  return (
    <div>
      {/* Hero */}
      <section className="bg-slate-900 py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="text-secondary font-semibold text-sm uppercase tracking-wider">Contact</span>
            <h1 className="text-4xl md:text-5xl font-extrabold text-white mt-3 mb-6">
              Get a Free Sourcing Quote
            </h1>
            <p className="text-slate-300 text-lg leading-relaxed mb-8">
              Tell us what you need and our team will get back to you within 48 hours with a tailored sourcing proposal. No commitment required.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Contact Info */}
            <div className="lg:col-span-1">
              <h2 className="text-2xl font-bold text-slate-800 mb-6">Contact Information</h2>
              <div className="space-y-6 mb-10">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-800 text-sm mb-1">Office Address</h3>
                    <p className="text-slate-500 text-sm leading-relaxed">
                      Room 1808, Tower B, Fortune Plaza<br />
                      No. 7002 Shennan Avenue, Futian District<br />
                      Shenzhen, Guangdong 518000, China
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center shrink-0">
                    <Phone className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-800 text-sm mb-1">Phone</h3>
                    <p className="text-slate-500 text-sm">+86 755 1234 5678</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center shrink-0">
                    <Mail className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-800 text-sm mb-1">Email</h3>
                    <p className="text-slate-500 text-sm">info@ssourcingchina.com</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center shrink-0">
                    <Clock className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-800 text-sm mb-1">Working Hours</h3>
                    <p className="text-slate-500 text-sm">
                      Monday – Friday: 9:00 AM – 6:00 PM CST<br />
                      We cover US and EU time zones for calls.
                    </p>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="font-semibold text-slate-800 text-sm mb-3">Follow Us</h3>
                <div className="flex items-center gap-3">
                  <a href="#" className="w-10 h-10 bg-slate-100 rounded-lg flex items-center justify-center text-slate-500 hover:bg-primary hover:text-white transition-colors">
                    <Linkedin className="w-5 h-5" />
                  </a>
                  <a href="#" className="w-10 h-10 bg-slate-100 rounded-lg flex items-center justify-center text-slate-500 hover:bg-primary hover:text-white transition-colors">
                    <Twitter className="w-5 h-5" />
                  </a>
                </div>
              </div>
            </div>

            {/* Form */}
            <div className="lg:col-span-2">
              <div className="bg-slate-50 rounded-xl border border-slate-100 p-8">
                {status === 'success' ? (
                  <div className="text-center py-12">
                    <div className="w-16 h-16 bg-accent-light rounded-full flex items-center justify-center mx-auto mb-5">
                      <CheckCircle className="w-8 h-8 text-accent" />
                    </div>
                    <h2 className="text-2xl font-bold text-slate-800 mb-3">Thank You!</h2>
                    <p className="text-slate-500 mb-8 max-w-md mx-auto">
                      Your inquiry has been received. One of our sourcing specialists will review your requirements and contact you within 48 hours.
                    </p>
                    <button
                      onClick={() => setStatus('idle')}
                      className="inline-flex items-center px-6 py-3 bg-primary text-white font-semibold rounded-md hover:bg-primary-hover transition-colors"
                    >
                      Submit Another Inquiry
                    </button>
                  </div>
                ) : (
                  <>
                    <h2 className="text-2xl font-bold text-slate-800 mb-2">Sourcing Inquiry Form</h2>
                    <p className="text-slate-500 text-sm mb-8">
                      Fill out the form below with as much detail as possible. The more we know, the better we can help.
                    </p>

                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid md:grid-cols-2 gap-6">
                        <div>
                          <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-1.5">
                            Full Name <span className="text-red-500">*</span>
                          </label>
                          <input
                            type="text"
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            className="w-full px-4 py-2.5 border border-slate-200 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary bg-white"
                            placeholder="John Smith"
                          />
                        </div>
                        <div>
                          <label htmlFor="company" className="block text-sm font-medium text-slate-700 mb-1.5">
                            Company Name <span className="text-red-500">*</span>
                          </label>
                          <input
                            type="text"
                            id="company"
                            name="company"
                            value={formData.company}
                            onChange={handleChange}
                            className="w-full px-4 py-2.5 border border-slate-200 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary bg-white"
                            placeholder="Acme Inc."
                          />
                        </div>
                      </div>

                      <div className="grid md:grid-cols-2 gap-6">
                        <div>
                          <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-1.5">
                            Email Address <span className="text-red-500">*</span>
                          </label>
                          <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            className="w-full px-4 py-2.5 border border-slate-200 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary bg-white"
                            placeholder="john@company.com"
                          />
                        </div>
                        <div>
                          <label htmlFor="phone" className="block text-sm font-medium text-slate-700 mb-1.5">
                            Phone Number
                          </label>
                          <input
                            type="tel"
                            id="phone"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            className="w-full px-4 py-2.5 border border-slate-200 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary bg-white"
                            placeholder="+1 555 123 4567"
                          />
                        </div>
                      </div>

                      <div className="grid md:grid-cols-2 gap-6">
                        <div>
                          <label htmlFor="country" className="block text-sm font-medium text-slate-700 mb-1.5">
                            Your Country
                          </label>
                          <input
                            type="text"
                            id="country"
                            name="country"
                            value={formData.country}
                            onChange={handleChange}
                            className="w-full px-4 py-2.5 border border-slate-200 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary bg-white"
                            placeholder="United States"
                          />
                        </div>
                        <div>
                          <label htmlFor="productCategory" className="block text-sm font-medium text-slate-700 mb-1.5">
                            Product Category
                          </label>
                          <select
                            id="productCategory"
                            name="productCategory"
                            value={formData.productCategory}
                            onChange={handleChange}
                            className="w-full px-4 py-2.5 border border-slate-200 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary bg-white"
                          >
                            <option value="">Select a category</option>
                            <option value="electronics">Electronics & Components</option>
                            <option value="home">Home & Garden</option>
                            <option value="apparel">Apparel & Textiles</option>
                            <option value="machinery">Machinery & Hardware</option>
                            <option value="packaging">Packaging & Printing</option>
                            <option value="automotive">Automotive Parts</option>
                            <option value="other">Other</option>
                          </select>
                        </div>
                      </div>

                      <div>
                        <label htmlFor="productDescription" className="block text-sm font-medium text-slate-700 mb-1.5">
                          Product Description <span className="text-red-500">*</span>
                        </label>
                        <textarea
                          id="productDescription"
                          name="productDescription"
                          value={formData.productDescription}
                          onChange={handleChange}
                          rows={4}
                          className="w-full px-4 py-2.5 border border-slate-200 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary bg-white resize-none"
                          placeholder="Describe the product you want to source: dimensions, materials, colors, features, packaging requirements, etc."
                        />
                      </div>

                      <div className="grid md:grid-cols-2 gap-6">
                        <div>
                          <label htmlFor="estimatedVolume" className="block text-sm font-medium text-slate-700 mb-1.5">
                            Estimated Order Volume
                          </label>
                          <select
                            id="estimatedVolume"
                            name="estimatedVolume"
                            value={formData.estimatedVolume}
                            onChange={handleChange}
                            className="w-full px-4 py-2.5 border border-slate-200 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary bg-white"
                          >
                            <option value="">Select volume range</option>
                            <option value="500-1000">500 – 1,000 units</option>
                            <option value="1000-5000">1,000 – 5,000 units</option>
                            <option value="5000-20000">5,000 – 20,000 units</option>
                            <option value="20000-50000">20,000 – 50,000 units</option>
                            <option value="50000+">50,000+ units</option>
                          </select>
                        </div>
                        <div>
                          <label htmlFor="timeline" className="block text-sm font-medium text-slate-700 mb-1.5">
                            Target Timeline
                          </label>
                          <select
                            id="timeline"
                            name="timeline"
                            value={formData.timeline}
                            onChange={handleChange}
                            className="w-full px-4 py-2.5 border border-slate-200 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary bg-white"
                          >
                            <option value="">Select timeline</option>
                            <option value="1-2months">1 – 2 months</option>
                            <option value="3-4months">3 – 4 months</option>
                            <option value="5-6months">5 – 6 months</option>
                            <option value="6months+">6+ months</option>
                            <option value="flexible">Flexible</option>
                          </select>
                        </div>
                      </div>

                      <div>
                        <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-1.5">
                          Additional Information
                        </label>
                        <textarea
                          id="message"
                          name="message"
                          value={formData.message}
                          onChange={handleChange}
                          rows={3}
                          className="w-full px-4 py-2.5 border border-slate-200 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary bg-white resize-none"
                          placeholder="Any other details: target price, quality standards, certifications required, shipping preferences, etc."
                        />
                      </div>

                      {error && (
                        <div className="flex items-center gap-2 text-red-600 text-sm bg-red-50 rounded-lg px-4 py-3">
                          <AlertCircle className="w-4 h-4 shrink-0" />
                          {error}
                        </div>
                      )}

                      <button
                        type="submit"
                        disabled={status === 'submitting'}
                        className="w-full inline-flex items-center justify-center px-8 py-4 bg-secondary text-white text-base font-semibold rounded-md hover:bg-secondary-hover transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
                      >
                        {status === 'submitting' ? (
                          <>
                            <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin mr-2" />
                            Submitting...
                          </>
                        ) : (
                          <>
                            Submit Inquiry
                            <Send className="w-5 h-5 ml-2" />
                          </>
                        )}
                      </button>

                      <p className="text-slate-400 text-xs text-center">
                        We respect your privacy. Your information will only be used to respond to your inquiry.
                      </p>
                    </form>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}