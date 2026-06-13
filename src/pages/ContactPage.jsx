import { useState, useEffect, useRef } from 'react'
import { useSearchParams } from 'react-router-dom'
import { CheckCircle2, Mail, Phone, MapPin, Clock, Shield, Send, Loader2 } from 'lucide-react'

const initialForm = {
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

const productCategories = [
  'Electronics & Components',
  'Machinery & Industrial Parts',
  'Automotive Parts & Accessories',
  'Textiles, Apparel & Bags',
  'Home & Kitchen Products',
  'Packaging & Printing',
  'Consumer Electronics',
  'Sports & Outdoor Equipment',
  'Toys & Educational Products',
  'Hardware & Tools',
  'Other (please specify)',
]

const quantityOptions = [
  'Under 500 units',
  '500 – 2,000 units',
  '2,000 – 10,000 units',
  '10,000 – 50,000 units',
  'Over 50,000 units',
  'Not sure yet',
]

const timelineOptions = [
  'Within 1 month',
  '1 – 3 months',
  '3 – 6 months',
  '6 – 12 months',
  'Just exploring options',
]

export default function ContactPage() {
  const [searchParams] = useSearchParams()
  const [form, setForm] = useState(initialForm)
  const [status, setStatus] = useState('idle')
  const [error, setError] = useState(null)
  const containerRef = useRef(null)

  useEffect(() => {
    const product = searchParams.get('product')
    if (product) {
      setForm((prev) => ({ ...prev, productCategory: product }))
    }
  }, [searchParams])

  const onChange = (e) => {
    const { name, value } = e.target
    setForm((prev) => ({ ...prev, [name]: value }))
  }

  const validate = () => {
    if (!form.name.trim()) return 'Name is required'
    if (!form.email.trim()) return 'Email is required'
    if (!/^\S+@\S+\.\S+$/.test(form.email)) return 'Please enter a valid email address'
    if (!form.productCategory) return 'Please select a product category'
    if (!form.productDescription.trim()) return 'Please describe your product'
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

    try {
      // Simulate form submission
      await new Promise((resolve) => setTimeout(resolve, 1500))
      console.log('Inquiry submitted:', form)
      setStatus('success')
      setForm(initialForm)
    } catch (err) {
      console.error('Submission failed:', err)
      setError(err.message || 'Submission failed. Please try again.')
      setStatus('error')
    }
  }

  return (
    <div ref={containerRef}>
      <section className="bg-navy-800 py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-gold-400 font-semibold text-sm uppercase tracking-wide mb-3">Get Started</p>
            <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4">
              Get a Free Sourcing Quote
            </h1>
            <p className="text-lg text-slate-300 leading-relaxed">
              Tell us about your product and requirements. We'll respond within 24 hours
              with a tailored sourcing plan, estimated costs, and supplier recommendations.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              {status === 'success' ? (
                <div className="bg-green-50 border border-green-200 rounded-2xl p-10 text-center">
                  <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-6">
                    <CheckCircle2 className="w-8 h-8 text-green-600" />
                  </div>
                  <h2 className="text-2xl font-extrabold text-navy-900 mb-3">Thank You for Your Inquiry!</h2>
                  <p className="text-slate-600 text-lg mb-6 max-w-md mx-auto">
                    We've received your sourcing request. Our team will review your requirements
                    and respond with a tailored sourcing plan within 24 hours.
                  </p>
                  <button
                    onClick={() => setStatus('idle')}
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-lg text-sm font-semibold bg-navy-800 text-white hover:bg-navy-900 transition-colors"
                  >
                    Submit Another Inquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6" noValidate>
                  <div className="grid sm:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-semibold text-navy-800 mb-1.5">
                        Your Name <span className="text-red-500">*</span>
                      </label>
                      <input
                        id="name"
                        name="name"
                        type="text"
                        value={form.name}
                        onChange={onChange}
                        required
                        placeholder="John Smith"
                        className="w-full px-4 py-2.5 rounded-lg border border-slate-300 text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-navy-500 focus:border-transparent transition-shadow"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-semibold text-navy-800 mb-1.5">
                        Email Address <span className="text-red-500">*</span>
                      </label>
                      <input
                        id="email"
                        name="email"
                        type="email"
                        value={form.email}
                        onChange={onChange}
                        required
                        placeholder="john@company.com"
                        className="w-full px-4 py-2.5 rounded-lg border border-slate-300 text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-navy-500 focus:border-transparent transition-shadow"
                      />
                    </div>
                    <div>
                      <label htmlFor="phone" className="block text-sm font-semibold text-navy-800 mb-1.5">
                        Phone / WhatsApp
                      </label>
                      <input
                        id="phone"
                        name="phone"
                        type="tel"
                        value={form.phone}
                        onChange={onChange}
                        placeholder="+1 555 123 4567"
                        className="w-full px-4 py-2.5 rounded-lg border border-slate-300 text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-navy-500 focus:border-transparent transition-shadow"
                      />
                    </div>
                    <div>
                      <label htmlFor="company" className="block text-sm font-semibold text-navy-800 mb-1.5">
                        Company Name
                      </label>
                      <input
                        id="company"
                        name="company"
                        type="text"
                        value={form.company}
                        onChange={onChange}
                        placeholder="Your Company Ltd."
                        className="w-full px-4 py-2.5 rounded-lg border border-slate-300 text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-navy-500 focus:border-transparent transition-shadow"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="productCategory" className="block text-sm font-semibold text-navy-800 mb-1.5">
                      Product Category <span className="text-red-500">*</span>
                    </label>
                    <select
                      id="productCategory"
                      name="productCategory"
                      value={form.productCategory}
                      onChange={onChange}
                      required
                      className="w-full px-4 py-2.5 rounded-lg border border-slate-300 text-sm text-slate-800 focus:outline-none focus:ring-2 focus:ring-navy-500 focus:border-transparent transition-shadow bg-white"
                    >
                      <option value="">Select a product category...</option>
                      {productCategories.map((cat) => (
                        <option key={cat} value={cat}>{cat}</option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label htmlFor="productDescription" className="block text-sm font-semibold text-navy-800 mb-1.5">
                      Product Description <span className="text-red-500">*</span>
                    </label>
                    <textarea
                      id="productDescription"
                      name="productDescription"
                      rows={4}
                      value={form.productDescription}
                      onChange={onChange}
                      required
                      placeholder="Describe your product: materials, dimensions, functions, reference images, certifications needed..."
                      className="w-full px-4 py-2.5 rounded-lg border border-slate-300 text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-navy-500 focus:border-transparent transition-shadow resize-y"
                    />
                  </div>

                  <div className="grid sm:grid-cols-3 gap-6">
                    <div>
                      <label htmlFor="orderQuantity" className="block text-sm font-semibold text-navy-800 mb-1.5">
                        Estimated Order Quantity
                      </label>
                      <select
                        id="orderQuantity"
                        name="orderQuantity"
                        value={form.orderQuantity}
                        onChange={onChange}
                        className="w-full px-4 py-2.5 rounded-lg border border-slate-300 text-sm text-slate-800 focus:outline-none focus:ring-2 focus:ring-navy-500 focus:border-transparent transition-shadow bg-white"
                      >
                        <option value="">Select...</option>
                        {quantityOptions.map((q) => (
                          <option key={q} value={q}>{q}</option>
                        ))}
                      </select>
                    </div>
                    <div>
                      <label htmlFor="targetPrice" className="block text-sm font-semibold text-navy-800 mb-1.5">
                        Target Unit Price (USD)
                      </label>
                      <input
                        id="targetPrice"
                        name="targetPrice"
                        type="text"
                        value={form.targetPrice}
                        onChange={onChange}
                        placeholder="e.g. $5 – $10"
                        className="w-full px-4 py-2.5 rounded-lg border border-slate-300 text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-navy-500 focus:border-transparent transition-shadow"
                      />
                    </div>
                    <div>
                      <label htmlFor="timeline" className="block text-sm font-semibold text-navy-800 mb-1.5">
                        Timeline
                      </label>
                      <select
                        id="timeline"
                        name="timeline"
                        value={form.timeline}
                        onChange={onChange}
                        className="w-full px-4 py-2.5 rounded-lg border border-slate-300 text-sm text-slate-800 focus:outline-none focus:ring-2 focus:ring-navy-500 focus:border-transparent transition-shadow bg-white"
                      >
                        <option value="">Select...</option>
                        {timelineOptions.map((t) => (
                          <option key={t} value={t}>{t}</option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-semibold text-navy-800 mb-1.5">
                      Additional Notes
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={3}
                      value={form.message}
                      onChange={onChange}
                      placeholder="Any specific requirements, concerns, or questions..."
                      className="w-full px-4 py-2.5 rounded-lg border border-slate-300 text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-navy-500 focus:border-transparent transition-shadow resize-y"
                    />
                  </div>

                  {error && (
                    <div className="p-4 rounded-lg bg-red-50 border border-red-200">
                      <p className="text-sm text-red-700">{error}</p>
                    </div>
                  )}

                  <button
                    type="submit"
                    disabled={status === 'submitting'}
                    className="inline-flex items-center gap-2 px-8 py-3.5 rounded-lg text-sm font-semibold bg-gold-500 text-white hover:bg-gold-600 disabled:opacity-50 disabled:cursor-not-allowed transition-colors shadow-lg shadow-gold-500/25"
                  >
                    {status === 'submitting' ? (
                      <>
                        <Loader2 className="w-4 h-4 animate-spin" />
                        Submitting...
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        Submit Sourcing Inquiry
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>

            <div className="space-y-6">
              <div className="bg-slate-50 rounded-2xl p-6 border border-slate-100">
                <h3 className="font-bold text-navy-800 mb-4">What Happens Next</h3>
                <ol className="space-y-3">
                  {[
                    'We review your requirements within 24 hours',
                    'Our team analyzes supplier matches and estimated costs',
                    'You receive a free sourcing plan with recommendations',
                    'We schedule a call to discuss the approach in detail',
                    'Once you approve, we begin the sourcing process',
                  ].map((step, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm text-slate-600">
                      <span className="w-5 h-5 rounded-full bg-navy-800 text-white text-xs flex items-center justify-center shrink-0 mt-0.5 font-bold">
                        {i + 1}
                      </span>
                      {step}
                    </li>
                  ))}
                </ol>
              </div>

              <div className="bg-navy-50 rounded-2xl p-6 border border-navy-100">
                <h3 className="font-bold text-navy-800 mb-4">Prefer to Talk?</h3>
                <div className="space-y-3 text-sm">
                  <div className="flex items-center gap-3 text-slate-700">
                    <Phone className="w-4 h-4 text-navy-600" />
                    <span>+86 755 1234 5678</span>
                  </div>
                  <div className="flex items-center gap-3 text-slate-700">
                    <Mail className="w-4 h-4 text-navy-600" />
                    <span>hello@ssourcingchina.com</span>
                  </div>
                  <div className="flex items-start gap-3 text-slate-700">
                    <MapPin className="w-4 h-4 text-navy-600 mt-0.5" />
                    <span>Shenzhen, Guangdong, China</span>
                  </div>
                  <div className="flex items-center gap-3 text-slate-700 pt-2">
                    <Clock className="w-4 h-4 text-navy-600" />
                    <span>Mon – Fri, 9:00 – 18:00 (CST)</span>
                  </div>
                </div>
              </div>

              <div className="bg-green-50 rounded-2xl p-6 border border-green-100">
                <div className="flex items-center gap-2 mb-2">
                  <Shield className="w-5 h-5 text-green-600" />
                  <h3 className="font-bold text-navy-800">Your Information Is Safe</h3>
                </div>
                <p className="text-sm text-slate-600">
                  We never share your product details or business information with
                  third parties. All inquiries are confidential.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
