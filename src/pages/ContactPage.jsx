import { useState } from 'react'
import { Mail, MapPin, Phone, Clock, MessageSquare, CheckCircle2 } from 'lucide-react'
import { DataClient } from '@strikingly/sdk'
import { STRK_PROJECT_URL, STRK_PROJECT_ANON_KEY } from '@/config.jsx'

let client
try {
  client = new DataClient(STRK_PROJECT_URL, STRK_PROJECT_ANON_KEY)
} catch (e) {
  console.error('DataClient init error:', e)
}

const getErrorMessage = (response, error) => {
  if (Array.isArray(response?.errors) && response.errors.length > 0) {
    return response.errors.join(', ')
  }
  return error?.message || 'Submission failed. Please try again.'
}

const productCategories = [
  'Consumer Electronics',
  'Textiles & Apparel',
  'Home & Garden',
  'Industrial & Machinery',
  'Health & Beauty',
  'Toys & Sports',
  'Packaging & Printing',
  'Building Materials',
  'Other',
]

export default function ContactPage() {
  const [values, setValues] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    product_category: '',
    product_description: '',
    estimated_quantity: '',
    target_price: '',
    message: '',
  })
  const [status, setStatus] = useState('idle')
  const [error, setError] = useState(null)

  const onChange = (e) => {
    const { name, value } = e.target
    setValues((v) => ({ ...v, [name]: value }))
  }

  const validate = () => {
    if (!values.name.trim()) return 'Name is required'
    if (!values.email.trim()) return 'Email is required'
    if (!/^\S+@\S+\.\S+$/.test(values.email)) return 'Please enter a valid email'
    if (!values.product_description.trim()) return 'Please describe the product you want to source'
    return null
  }

  const onSubmit = async (e) => {
    e.preventDefault()
    setError(null)
    const err = validate()
    if (err) { setError(err); return }

    setStatus('submitting')

    try {
      if (!client) {
        throw new Error('Service temporarily unavailable. Please try again later.')
      }

      const { data: response, error: insertError } = await client
        .from('Sourcing Inquiries')
        .insert({
          data: {
            name: values.name,
            email: values.email,
            company: values.company,
            phone: values.phone,
            product_category: values.product_category,
            product_description: values.product_description,
            estimated_quantity: values.estimated_quantity,
            target_price: values.target_price,
            message: values.message,
            status: 'new',
          },
        })
        .select()
        .single()

      if (insertError || response?.success === false) {
        throw new Error(getErrorMessage(response, insertError))
      }

      setStatus('success')
      setValues({
        name: '',
        email: '',
        company: '',
        phone: '',
        product_category: '',
        product_description: '',
        estimated_quantity: '',
        target_price: '',
        message: '',
      })
    } catch (err) {
      console.error('Form submission error:', err)
      setError(err.message || 'Submission failed. Please try again.')
      setStatus('error')
    }
  }

  return (
    <div>
      {/* Page Header */}
      <section className="bg-navy py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="text-orange text-sm font-semibold uppercase tracking-wide">Contact Us</span>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white tracking-tight mt-2 mb-4">
              Get a Free Sourcing Quote
            </h1>
            <p className="text-slate-300 text-lg leading-relaxed">
              Tell us what you need and our team will provide a sourcing plan within 24 hours. No commitment, no hidden fees.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form + Info */}
      <section className="py-16 md:py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Form */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-xl border border-slate-200 p-6 md:p-8">
                <h2 className="text-xl font-bold text-slate-900 mb-2">Sourcing Inquiry Form</h2>
                <p className="text-sm text-slate-600 mb-6">Fill in the details below and we will get back to you within 24 hours.</p>

                {status === 'success' ? (
                  <div className="text-center py-12">
                    <CheckCircle2 className="w-16 h-16 text-green-600 mx-auto mb-4" />
                    <h3 className="text-xl font-bold text-slate-900 mb-2">Inquiry Submitted Successfully</h3>
                    <p className="text-slate-600 mb-6">
                      Thank you for your inquiry. Our sourcing team will review your requirements and respond within 24 hours.
                    </p>
                    <button
                      onClick={() => setStatus('idle')}
                      className="text-navy font-semibold hover:text-orange transition"
                    >
                      Submit Another Inquiry
                    </button>
                  </div>
                ) : (
                  <form onSubmit={onSubmit} className="space-y-5">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-1">Full Name *</label>
                        <input
                          id="name"
                          name="name"
                          type="text"
                          value={values.name}
                          onChange={onChange}
                          required
                          placeholder="John Smith"
                          className="w-full px-4 py-2.5 border border-slate-300 rounded-lg text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-orange/50 focus:border-orange"
                        />
                      </div>
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-1">Email Address *</label>
                        <input
                          id="email"
                          name="email"
                          type="email"
                          value={values.email}
                          onChange={onChange}
                          required
                          placeholder="john@company.com"
                          className="w-full px-4 py-2.5 border border-slate-300 rounded-lg text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-orange/50 focus:border-orange"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                      <div>
                        <label htmlFor="company" className="block text-sm font-medium text-slate-700 mb-1">Company Name</label>
                        <input
                          id="company"
                          name="company"
                          type="text"
                          value={values.company}
                          onChange={onChange}
                          placeholder="Your Company Ltd."
                          className="w-full px-4 py-2.5 border border-slate-300 rounded-lg text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-orange/50 focus:border-orange"
                        />
                      </div>
                      <div>
                        <label htmlFor="phone" className="block text-sm font-medium text-slate-700 mb-1">Phone / WhatsApp</label>
                        <input
                          id="phone"
                          name="phone"
                          type="text"
                          value={values.phone}
                          onChange={onChange}
                          placeholder="+1 234 567 8900"
                          className="w-full px-4 py-2.5 border border-slate-300 rounded-lg text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-orange/50 focus:border-orange"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                      <div>
                        <label htmlFor="product_category" className="block text-sm font-medium text-slate-700 mb-1">Product Category</label>
                        <select
                          id="product_category"
                          name="product_category"
                          value={values.product_category}
                          onChange={onChange}
                          className="w-full px-4 py-2.5 border border-slate-300 rounded-lg text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-orange/50 focus:border-orange bg-white"
                        >
                          <option value="">Select a category</option>
                          {productCategories.map((cat) => (
                            <option key={cat} value={cat}>{cat}</option>
                          ))}
                        </select>
                      </div>
                      <div>
                        <label htmlFor="estimated_quantity" className="block text-sm font-medium text-slate-700 mb-1">Estimated Quantity</label>
                        <input
                          id="estimated_quantity"
                          name="estimated_quantity"
                          type="text"
                          value={values.estimated_quantity}
                          onChange={onChange}
                          placeholder="e.g. 1,000 units"
                          className="w-full px-4 py-2.5 border border-slate-300 rounded-lg text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-orange/50 focus:border-orange"
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="target_price" className="block text-sm font-medium text-slate-700 mb-1">Target Price (USD)</label>
                      <input
                        id="target_price"
                        name="target_price"
                        type="text"
                        value={values.target_price}
                        onChange={onChange}
                        placeholder="e.g. $2.50 per unit FOB"
                        className="w-full px-4 py-2.5 border border-slate-300 rounded-lg text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-orange/50 focus:border-orange"
                      />
                    </div>

                    <div>
                      <label htmlFor="product_description" className="block text-sm font-medium text-slate-700 mb-1">Product Description *</label>
                      <textarea
                        id="product_description"
                        name="product_description"
                        rows={4}
                        value={values.product_description}
                        onChange={onChange}
                        required
                        placeholder="Describe the product you want to source: specifications, materials, size, color, packaging requirements, etc."
                        className="w-full px-4 py-2.5 border border-slate-300 rounded-lg text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-orange/50 focus:border-orange resize-y"
                      />
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-1">Additional Notes</label>
                      <textarea
                        id="message"
                        name="message"
                        rows={3}
                        value={values.message}
                        onChange={onChange}
                        placeholder="Any other requirements, questions, or timeline constraints..."
                        className="w-full px-4 py-2.5 border border-slate-300 rounded-lg text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-orange/50 focus:border-orange resize-y"
                      />
                    </div>

                    {error && (
                      <div className="bg-red-50 border border-red-200 text-red-700 text-sm px-4 py-3 rounded-lg">
                        {error}
                      </div>
                    )}

                    <button
                      type="submit"
                      disabled={status === 'submitting'}
                      className="w-full bg-orange text-white font-semibold px-6 py-3.5 rounded-lg hover:bg-orange-dark transition text-base disabled:opacity-60 disabled:cursor-not-allowed"
                    >
                      {status === 'submitting' ? 'Submitting...' : 'Get a Free Sourcing Quote'}
                    </button>

                    <p className="text-xs text-slate-500 text-center">
                      We respond to all inquiries within 24 hours. Your information is kept confidential.
                    </p>
                  </form>
                )}
              </div>
            </div>

            {/* Contact Info Sidebar */}
            <div className="space-y-6">
              <div className="bg-white rounded-xl border border-slate-200 p-6">
                <h3 className="text-lg font-bold text-slate-900 mb-4">Contact Information</h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <Mail className="w-5 h-5 text-orange mt-0.5" />
                    <div>
                      <div className="text-sm font-medium text-slate-900">Email</div>
                      <div className="text-sm text-slate-600">info@ssourcingchina.com</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Phone className="w-5 h-5 text-orange mt-0.5" />
                    <div>
                      <div className="text-sm font-medium text-slate-900">Phone / WhatsApp</div>
                      <div className="text-sm text-slate-600">+86 138 0000 0000</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-orange mt-0.5" />
                    <div>
                      <div className="text-sm font-medium text-slate-900">Office</div>
                      <div className="text-sm text-slate-600">Guangzhou, Guangdong, China</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Clock className="w-5 h-5 text-orange mt-0.5" />
                    <div>
                      <div className="text-sm font-medium text-slate-900">Working Hours</div>
                      <div className="text-sm text-slate-600">Mon-Fri: 9:00 AM - 6:00 PM (CST)</div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-xl border border-slate-200 p-6">
                <h3 className="text-lg font-bold text-slate-900 mb-4">Why Contact Us?</h3>
                <ul className="space-y-3">
                  {[
                    'Free initial consultation',
                    'No obligation quote',
                    'Response within 24 hours',
                    'Confidential handling',
                    'Expert sourcing advice',
                  ].map((item) => (
                    <li key={item} className="flex items-center gap-2 text-sm text-slate-700">
                      <CheckCircle2 className="w-4 h-4 text-green-600 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-navy rounded-xl p-6">
                <MessageSquare className="w-8 h-8 text-orange mb-3" />
                <h3 className="text-base font-bold text-white mb-2">Prefer to Chat?</h3>
                <p className="text-sm text-slate-300 mb-4">
                  Reach us on WeChat or WhatsApp for a quick conversation about your sourcing needs.
                </p>
                <div className="text-sm text-white font-medium">
                  WhatsApp: +86 138 0000 0000
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
