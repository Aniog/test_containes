import { useState } from 'react'
import { DataClient } from '@strikingly/sdk'
import { STRK_PROJECT_URL, STRK_PROJECT_ANON_KEY } from '@/config.jsx'
import { MapPin, Mail, Phone, Clock, CheckCircle, AlertCircle } from 'lucide-react'

const client = new DataClient(STRK_PROJECT_URL, STRK_PROJECT_ANON_KEY)

const productCategories = [
  'Electronics',
  'Furniture & Home Décor',
  'Apparel & Textiles',
  'Home & Kitchen',
  'Industrial & Hardware',
  'Packaging & Printing',
  'Toys & Baby Products',
  'Sports & Outdoor',
  'Other',
]

const servicesNeeded = [
  'Supplier Sourcing',
  'Factory Verification',
  'Quality Inspection',
  'Production Follow-up',
  'Shipping & Logistics',
  'Full Service (End-to-End)',
  'Not Sure Yet',
]

const initialValues = {
  full_name: '',
  email: '',
  company: '',
  country: '',
  phone: '',
  product_category: '',
  service_needed: '',
  estimated_quantity: '',
  target_price: '',
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

  const validate = () => {
    if (!values.full_name.trim()) return 'Full name is required.'
    if (!values.email.trim()) return 'Email address is required.'
    if (!/^\S+@\S+\.\S+$/.test(values.email)) return 'Please enter a valid email address.'
    if (!values.message.trim() || values.message.trim().length < 10) return 'Please describe your sourcing requirement (at least 10 characters).'
    return null
  }

  const onSubmit = async (e) => {
    e.preventDefault()
    setError(null)
    const validationError = validate()
    if (validationError) {
      setError(validationError)
      return
    }

    setStatus('submitting')

    const payload = {
      full_name: values.full_name,
      email: values.email,
      message: values.message,
      status: 'new',
    }
    if (values.company) payload.company = values.company
    if (values.country) payload.country = values.country
    if (values.phone) payload.phone = values.phone
    if (values.product_category) payload.product_category = values.product_category
    if (values.service_needed) payload.service_needed = values.service_needed
    if (values.estimated_quantity) payload.estimated_quantity = values.estimated_quantity
    if (values.target_price) payload.target_price = values.target_price

    const { data: response, error: submitError } = await client
      .from('Sourcing Inquiries')
      .insert({ data: payload })
      .select()
      .single()

    if (submitError || response?.success === false) {
      const msg = Array.isArray(response?.errors) && response.errors.length > 0
        ? response.errors.join(', ')
        : submitError?.message || 'Submission failed. Please try again.'
      setError(msg)
      setStatus('error')
      return
    }

    setStatus('success')
    setValues(initialValues)
  }

  return (
    <div>
      {/* Hero */}
      <section className="bg-blue-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="text-orange-400 font-semibold text-sm uppercase tracking-wider">Get in Touch</span>
            <h1 className="text-4xl md:text-5xl font-extrabold mt-2 mb-4">
              Get a Free Sourcing Quote
            </h1>
            <p className="text-blue-200 text-lg leading-relaxed">
              Tell us what you need and we'll send you a free sourcing plan within 24 hours.
              No commitment required.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Contact Info */}
            <div className="lg:col-span-1">
              <h2 className="text-xl font-bold text-slate-900 mb-6">Contact Information</h2>
              <div className="space-y-5 mb-8">
                <div className="flex gap-3">
                  <MapPin className="w-5 h-5 text-orange-500 flex-shrink-0 mt-0.5" />
                  <div>
                    <div className="font-semibold text-slate-900 text-sm">Office Locations</div>
                    <div className="text-slate-600 text-sm">Guangzhou & Yiwu, China</div>
                  </div>
                </div>
                <div className="flex gap-3">
                  <Mail className="w-5 h-5 text-orange-500 flex-shrink-0 mt-0.5" />
                  <div>
                    <div className="font-semibold text-slate-900 text-sm">Email</div>
                    <a href="mailto:info@ssourcing.cn" className="text-blue-700 text-sm hover:underline">
                      info@ssourcing.cn
                    </a>
                  </div>
                </div>
                <div className="flex gap-3">
                  <Phone className="w-5 h-5 text-orange-500 flex-shrink-0 mt-0.5" />
                  <div>
                    <div className="font-semibold text-slate-900 text-sm">Phone / WhatsApp</div>
                    <div className="text-slate-600 text-sm">+86 20 0000 0000</div>
                  </div>
                </div>
                <div className="flex gap-3">
                  <Clock className="w-5 h-5 text-orange-500 flex-shrink-0 mt-0.5" />
                  <div>
                    <div className="font-semibold text-slate-900 text-sm">Response Time</div>
                    <div className="text-slate-600 text-sm">Within 24 hours (business days)</div>
                  </div>
                </div>
              </div>

              <div className="bg-blue-50 border border-blue-100 rounded-xl p-5">
                <h3 className="font-semibold text-blue-900 mb-3">What Happens Next?</h3>
                <ol className="space-y-2">
                  {[
                    'We review your inquiry within 24 hours',
                    'A sourcing specialist contacts you to clarify requirements',
                    'We send a free sourcing plan and cost estimate',
                    'You decide whether to proceed — no obligation',
                  ].map((step, i) => (
                    <li key={i} className="flex gap-2 text-sm text-blue-800">
                      <span className="font-bold text-blue-600 flex-shrink-0">{i + 1}.</span>
                      {step}
                    </li>
                  ))}
                </ol>
              </div>
            </div>

            {/* Form */}
            <div className="lg:col-span-2">
              {status === 'success' ? (
                <div className="bg-green-50 border border-green-200 rounded-2xl p-10 text-center">
                  <CheckCircle className="w-14 h-14 text-green-500 mx-auto mb-4" />
                  <h2 className="text-2xl font-bold text-slate-900 mb-2">Inquiry Received!</h2>
                  <p className="text-slate-600 mb-6">
                    Thank you for your inquiry. A member of our sourcing team will contact you within 24 hours.
                  </p>
                  <button
                    onClick={() => setStatus('idle')}
                    className="bg-blue-800 hover:bg-blue-900 text-white font-semibold px-6 py-2.5 rounded-lg transition-colors"
                  >
                    Submit Another Inquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={onSubmit} className="space-y-5">
                  <h2 className="text-xl font-bold text-slate-900 mb-2">Sourcing Inquiry Form</h2>

                  {error && (
                    <div className="flex items-start gap-2 bg-red-50 border border-red-200 text-red-700 rounded-lg p-4 text-sm">
                      <AlertCircle className="w-4 h-4 flex-shrink-0 mt-0.5" />
                      {error}
                    </div>
                  )}

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-1">
                        Full Name <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        name="full_name"
                        value={values.full_name}
                        onChange={onChange}
                        placeholder="John Smith"
                        className="w-full border border-slate-300 rounded-lg px-3 py-2.5 text-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-1">
                        Business Email <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={values.email}
                        onChange={onChange}
                        placeholder="john@company.com"
                        className="w-full border border-slate-300 rounded-lg px-3 py-2.5 text-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-1">Company Name</label>
                      <input
                        type="text"
                        name="company"
                        value={values.company}
                        onChange={onChange}
                        placeholder="Your Company Ltd."
                        className="w-full border border-slate-300 rounded-lg px-3 py-2.5 text-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-1">Country</label>
                      <input
                        type="text"
                        name="country"
                        value={values.country}
                        onChange={onChange}
                        placeholder="United Kingdom"
                        className="w-full border border-slate-300 rounded-lg px-3 py-2.5 text-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-1">Phone / WhatsApp</label>
                      <input
                        type="tel"
                        name="phone"
                        value={values.phone}
                        onChange={onChange}
                        placeholder="+44 7700 000000"
                        className="w-full border border-slate-300 rounded-lg px-3 py-2.5 text-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-1">Product Category</label>
                      <select
                        name="product_category"
                        value={values.product_category}
                        onChange={onChange}
                        className="w-full border border-slate-300 rounded-lg px-3 py-2.5 text-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white"
                      >
                        <option value="">Select a category</option>
                        {productCategories.map((cat) => (
                          <option key={cat} value={cat}>{cat}</option>
                        ))}
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-1">Service Needed</label>
                      <select
                        name="service_needed"
                        value={values.service_needed}
                        onChange={onChange}
                        className="w-full border border-slate-300 rounded-lg px-3 py-2.5 text-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white"
                      >
                        <option value="">Select a service</option>
                        {servicesNeeded.map((svc) => (
                          <option key={svc} value={svc}>{svc}</option>
                        ))}
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-1">Estimated Quantity</label>
                      <input
                        type="text"
                        name="estimated_quantity"
                        value={values.estimated_quantity}
                        onChange={onChange}
                        placeholder="e.g. 500 units / month"
                        className="w-full border border-slate-300 rounded-lg px-3 py-2.5 text-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-1">Target Price</label>
                      <input
                        type="text"
                        name="target_price"
                        value={values.target_price}
                        onChange={onChange}
                        placeholder="e.g. USD 5–8 per unit"
                        className="w-full border border-slate-300 rounded-lg px-3 py-2.5 text-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1">
                      Describe Your Requirement <span className="text-red-500">*</span>
                    </label>
                    <textarea
                      name="message"
                      value={values.message}
                      onChange={onChange}
                      rows={5}
                      placeholder="Please describe the product you want to source, any specific requirements, certifications needed, and your timeline..."
                      className="w-full border border-slate-300 rounded-lg px-3 py-2.5 text-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
                      required
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={status === 'submitting'}
                    className="w-full bg-orange-500 hover:bg-orange-600 disabled:bg-orange-300 text-white font-semibold py-3.5 rounded-lg text-base transition-colors"
                  >
                    {status === 'submitting' ? 'Sending Inquiry…' : 'Submit Sourcing Inquiry'}
                  </button>

                  <p className="text-slate-500 text-xs text-center">
                    We respond within 24 hours on business days. Your information is kept confidential.
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
