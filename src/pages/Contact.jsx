import { useState } from 'react'
import { Phone, Mail, MapPin, Clock, Send, CheckCircle, AlertCircle, Loader2, Globe } from 'lucide-react'

const CATEGORIES = [
  'Electronics & Accessories',
  'Apparel, Textiles & Footwear',
  'Home, Kitchen & Lifestyle',
  'Furniture & Home Furnishings',
  'Hardware, Tools & Industrial',
  'Packaging & Printing',
  'Automotive Parts & Accessories',
  'Toys, Games & Sporting Goods',
  'Beauty, Personal Care & Health',
  'Medical Supplies & Devices',
  'Pet Products',
  'Outdoor & Garden',
  'Other / Not Sure',
]

const SERVICES = [
  'Supplier Sourcing Only',
  'Factory Audit Only',
  'End-to-End (Sourcing + QC + Shipping)',
  'Quality Inspection Only',
  'Shipping & Logistics Only',
  'Not Sure / Need Consultation',
]

const initialValues = {
  name: '',
  email: '',
  phone: '',
  company: '',
  productCategory: '',
  productDescription: '',
  quantity: '',
  targetPrice: '',
  serviceNeeded: '',
  message: '',
}

export default function Contact() {
  const [values, setValues] = useState(initialValues)
  const [status, setStatus] = useState('idle')
  const [errorMsg, setErrorMsg] = useState(null)

  const onChange = (e) => {
    const { name, value } = e.target
    setValues((v) => ({ ...v, [name]: value }))
  }

  const validate = (v) => {
    if (!v.name.trim()) return 'Full name is required'
    if (!v.email.trim()) return 'Email address is required'
    if (!/^\S+@\S+\.\S+$/.test(v.email)) return 'Please enter a valid email address'
    if (!v.productCategory) return 'Please select a product category'
    if (!v.productDescription.trim()) return 'Please describe your product'
    if (!v.serviceNeeded) return 'Please select the service you need'
    return null
  }

  const onSubmit = async (e) => {
    e.preventDefault()
    setErrorMsg(null)

    const validationError = validate(values)
    if (validationError) {
      setErrorMsg(validationError)
      return
    }

    setStatus('submitting')

    try {
      // Simulate form submission
      await new Promise((resolve) => setTimeout(resolve, 1500))

      setStatus('success')
      setValues(initialValues)
    } catch (err) {
      setErrorMsg(err.message || 'Something went wrong. Please try again.')
      setStatus('error')
    }
  }

  return (
    <div>
      {/* Hero */}
      <section className="bg-brand-900 text-white">
        <div className="container-wide py-16 md:py-20">
          <div className="max-w-3xl">
            <span className="text-accent-400 font-semibold text-sm uppercase tracking-wide">Contact Us</span>
            <h1 className="text-4xl md:text-5xl font-extrabold mt-3 mb-4 leading-tight">
              Get a Free Sourcing Quote
            </h1>
            <p className="text-lg text-white/70 leading-relaxed">
              Tell us about your product needs and receive a customized sourcing plan within 24 hours — no obligation, no cost.
            </p>
          </div>
        </div>
      </section>

      {/* Form + Info */}
      <section className="section-padding bg-white">
        <div className="container-wide">
          <div className="flex flex-col lg:flex-row gap-12">
            {/* Form */}
            <div className="lg:w-2/3">
              <div className="bg-surface border border-surface-border rounded-xl p-6 md:p-8">
                <h2 className="text-2xl font-bold text-text mb-6">Your Sourcing Inquiry</h2>

                <form onSubmit={onSubmit} className="space-y-5" noValidate>
                  {/* Name & Email */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div>
                      <label htmlFor="name" className="block text-sm font-semibold text-text mb-1.5">
                        Full Name <span className="text-accent-500">*</span>
                      </label>
                      <input
                        id="name"
                        name="name"
                        type="text"
                        value={values.name}
                        onChange={onChange}
                        required
                        placeholder="John Smith"
                        className="w-full px-4 py-3 border border-surface-border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent transition-shadow bg-white"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-semibold text-text mb-1.5">
                        Email Address <span className="text-accent-500">*</span>
                      </label>
                      <input
                        id="email"
                        name="email"
                        type="email"
                        value={values.email}
                        onChange={onChange}
                        required
                        placeholder="john@company.com"
                        className="w-full px-4 py-3 border border-surface-border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent transition-shadow bg-white"
                      />
                    </div>
                  </div>

                  {/* Phone & Company */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div>
                      <label htmlFor="phone" className="block text-sm font-semibold text-text mb-1.5">
                        Phone / WhatsApp
                      </label>
                      <input
                        id="phone"
                        name="phone"
                        type="tel"
                        value={values.phone}
                        onChange={onChange}
                        placeholder="+1 555 0123"
                        className="w-full px-4 py-3 border border-surface-border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent transition-shadow bg-white"
                      />
                    </div>
                    <div>
                      <label htmlFor="company" className="block text-sm font-semibold text-text mb-1.5">
                        Company Name
                      </label>
                      <input
                        id="company"
                        name="company"
                        type="text"
                        value={values.company}
                        onChange={onChange}
                        placeholder="Your Company Ltd."
                        className="w-full px-4 py-3 border border-surface-border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent transition-shadow bg-white"
                      />
                    </div>
                  </div>

                  {/* Product Category */}
                  <div>
                    <label htmlFor="productCategory" className="block text-sm font-semibold text-text mb-1.5">
                      Product Category <span className="text-accent-500">*</span>
                    </label>
                    <select
                      id="productCategory"
                      name="productCategory"
                      value={values.productCategory}
                      onChange={onChange}
                      required
                      className="w-full px-4 py-3 border border-surface-border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent transition-shadow bg-white appearance-none"
                    >
                      <option value="">Select a category...</option>
                      {CATEGORIES.map((c) => (
                        <option key={c} value={c}>{c}</option>
                      ))}
                    </select>
                  </div>

                  {/* Product Description */}
                  <div>
                    <label htmlFor="productDescription" className="block text-sm font-semibold text-text mb-1.5">
                      Product Description <span className="text-accent-500">*</span>
                    </label>
                    <textarea
                      id="productDescription"
                      name="productDescription"
                      rows={3}
                      value={values.productDescription}
                      onChange={onChange}
                      required
                      placeholder="Describe your product: materials, dimensions, features, reference links, etc."
                      className="w-full px-4 py-3 border border-surface-border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent transition-shadow bg-white resize-y"
                    />
                  </div>

                  {/* Quantity & Target Price */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div>
                      <label htmlFor="quantity" className="block text-sm font-semibold text-text mb-1.5">
                        Estimated Order Quantity
                      </label>
                      <input
                        id="quantity"
                        name="quantity"
                        type="text"
                        value={values.quantity}
                        onChange={onChange}
                        placeholder="e.g., 5,000 units"
                        className="w-full px-4 py-3 border border-surface-border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent transition-shadow bg-white"
                      />
                    </div>
                    <div>
                      <label htmlFor="targetPrice" className="block text-sm font-semibold text-text mb-1.5">
                        Target Unit Price (USD)
                      </label>
                      <input
                        id="targetPrice"
                        name="targetPrice"
                        type="text"
                        value={values.targetPrice}
                        onChange={onChange}
                        placeholder="e.g., $5.00 – $8.00"
                        className="w-full px-4 py-3 border border-surface-border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent transition-shadow bg-white"
                      />
                    </div>
                  </div>

                  {/* Service Needed */}
                  <div>
                    <label htmlFor="serviceNeeded" className="block text-sm font-semibold text-text mb-1.5">
                      Service Needed <span className="text-accent-500">*</span>
                    </label>
                    <select
                      id="serviceNeeded"
                      name="serviceNeeded"
                      value={values.serviceNeeded}
                      onChange={onChange}
                      required
                      className="w-full px-4 py-3 border border-surface-border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent transition-shadow bg-white appearance-none"
                    >
                      <option value="">Select a service...</option>
                      {SERVICES.map((s) => (
                        <option key={s} value={s}>{s}</option>
                      ))}
                    </select>
                  </div>

                  {/* Additional Message */}
                  <div>
                    <label htmlFor="message" className="block text-sm font-semibold text-text mb-1.5">
                      Additional Notes
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={3}
                      value={values.message}
                      onChange={onChange}
                      placeholder="Any other details, deadlines, certifications required, shipping destination..."
                      className="w-full px-4 py-3 border border-surface-border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent transition-shadow bg-white resize-y"
                    />
                  </div>

                  {/* Error */}
                  {errorMsg && (
                    <div className="flex items-center gap-2 text-sm text-red-600 bg-red-50 rounded-lg px-4 py-3">
                      <AlertCircle size={16} />
                      {errorMsg}
                    </div>
                  )}

                  {/* Success */}
                  {status === 'success' && (
                    <div className="flex items-center gap-2 text-sm text-green-700 bg-green-50 rounded-lg px-4 py-3">
                      <CheckCircle size={16} />
                      Thank you! Your inquiry has been submitted. We'll get back to you within 24 hours with a customized sourcing plan.
                    </div>
                  )}

                  {/* Submit */}
                  <button
                    type="submit"
                    disabled={status === 'submitting'}
                    className="w-full flex items-center justify-center gap-2 bg-accent-500 hover:bg-accent-600 disabled:bg-accent-400 text-white font-semibold px-8 py-4 rounded-lg text-base transition-colors"
                  >
                    {status === 'submitting' ? (
                      <>
                        <Loader2 size={20} className="animate-spin" />
                        Submitting...
                      </>
                    ) : (
                      <>
                        <Send size={18} />
                        Submit Sourcing Inquiry
                      </>
                    )}
                  </button>

                  <p className="text-xs text-text-muted text-center">
                    By submitting, you agree to our Privacy Policy. We'll never share your information.
                  </p>
                </form>
              </div>
            </div>

            {/* Sidebar Info */}
            <div className="lg:w-1/3">
              <div className="sticky top-28 space-y-6">
                {/* Contact Info Card */}
                <div className="bg-brand-800 text-white rounded-xl p-6">
                  <h3 className="text-lg font-bold mb-4">Contact Information</h3>
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <Phone size={18} className="text-accent-400 shrink-0 mt-0.5" />
                      <div>
                        <div className="font-semibold text-sm">Phone / WhatsApp</div>
                        <div className="text-white/70 text-sm">+86 400 888 9999</div>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Mail size={18} className="text-accent-400 shrink-0 mt-0.5" />
                      <div>
                        <div className="font-semibold text-sm">Email</div>
                        <div className="text-white/70 text-sm">info@ssourcingchina.com</div>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <MapPin size={18} className="text-accent-400 shrink-0 mt-0.5" />
                      <div>
                        <div className="font-semibold text-sm">Office</div>
                        <div className="text-white/70 text-sm">Guangzhou, Guangdong, China</div>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Clock size={18} className="text-accent-400 shrink-0 mt-0.5" />
                      <div>
                        <div className="font-semibold text-sm">Response Time</div>
                        <div className="text-white/70 text-sm">Within 24 hours, Monday–Saturday</div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Why Us Card */}
                <div className="bg-surface-alt rounded-xl p-6 border border-surface-border">
                  <h3 className="text-lg font-bold text-text mb-4">Why Work With Us</h3>
                  <ul className="space-y-3">
                    {[
                      '12+ years sourcing experience',
                      '10,000+ verified factories in network',
                      'Bilingual team — English & Mandarin',
                      'On-the-ground presence in Guangdong',
                      'Rigorous 3-stage QC process',
                      'Transparent pricing, no hidden fees',
                      '500+ satisfied global clients',
                    ].map((item) => (
                      <li key={item} className="flex items-start gap-2 text-sm text-text-secondary">
                        <CheckCircle size={16} className="text-green-600 shrink-0 mt-0.5" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Visual */}
                <div className="aspect-[4/3] rounded-xl overflow-hidden bg-gradient-to-br from-brand-700 to-brand-900 flex items-center justify-center">
                  <Globe2 size={56} className="text-brand-400" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}