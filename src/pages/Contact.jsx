import { useState } from 'react'
import { DataClient } from '@strikingly/sdk'
import { STRK_PROJECT_URL, STRK_PROJECT_ANON_KEY } from '@/config.jsx'
import { Mail, Phone, MapPin, Clock, CheckCircle, AlertCircle } from 'lucide-react'

const client = new DataClient(STRK_PROJECT_URL, STRK_PROJECT_ANON_KEY)

const categories = [
  'Electronics & Tech',
  'Home & Garden',
  'Apparel & Textiles',
  'Toys & Baby Products',
  'Industrial & Machinery',
  'Health & Beauty',
  'Sports & Outdoors',
  'Furniture & Decor',
  'Packaging & Printing',
  'Other',
]

const serviceOptions = [
  'Supplier Sourcing',
  'Factory Verification',
  'Quality Inspection',
  'Production Follow-up',
  'Shipping Coordination',
  'Private Label / OEM',
  'Sample Procurement',
]

const initialValues = {
  name: '',
  email: '',
  company: '',
  country: '',
  phone: '',
  product_category: '',
  product_description: '',
  estimated_quantity: '',
  target_price: '',
  services_needed: [],
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

  const toggleService = (svc) => {
    setValues((v) => ({
      ...v,
      services_needed: v.services_needed.includes(svc)
        ? v.services_needed.filter((s) => s !== svc)
        : [...v.services_needed, svc],
    }))
  }

  const validate = () => {
    if (!values.name.trim()) return 'Full name is required.'
    if (!values.email.trim()) return 'Email address is required.'
    if (!/^\S+@\S+\.\S+$/.test(values.email)) return 'Please enter a valid email address.'
    if (!values.product_description.trim()) return 'Product description is required.'
    return null
  }

  const onSubmit = async (e) => {
    e.preventDefault()
    setError(null)
    const err = validate()
    if (err) { setError(err); return }

    setStatus('submitting')

    const { data: response, error: createError } = await client
      .from('Sourcing Inquiries')
      .insert({
        data: {
          name: values.name,
          email: values.email,
          company: values.company || undefined,
          country: values.country || undefined,
          phone: values.phone || undefined,
          product_category: values.product_category || undefined,
          product_description: values.product_description,
          estimated_quantity: values.estimated_quantity || undefined,
          target_price: values.target_price || undefined,
          services_needed: values.services_needed.length > 0 ? values.services_needed : undefined,
          message: values.message || undefined,
          status: 'new',
        },
      })
      .select()
      .single()

    if (createError || response?.success === false) {
      const msg = Array.isArray(response?.errors) && response.errors.length > 0
        ? response.errors.join(', ')
        : createError?.message || 'Submission failed. Please try again.'
      setError(msg)
      setStatus('error')
      return
    }

    setStatus('success')
    setValues(initialValues)
  }

  return (
    <div>
      {/* Header */}
      <section className="bg-primary py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <p className="text-red-300 font-semibold text-sm uppercase tracking-wider mb-3">Get in Touch</p>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Get a Free Sourcing Quote</h1>
            <p className="text-blue-200 text-lg leading-relaxed">
              Tell us what you need and we'll get back to you within 24 hours with a tailored sourcing plan and cost estimate.
            </p>
          </div>
        </div>
      </section>

      {/* Form + Info */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Contact Info */}
            <div className="lg:col-span-1">
              <h2 className="text-2xl font-bold text-primary mb-6">Contact Information</h2>
              <div className="space-y-5 mb-8">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 bg-lightblue rounded-lg flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-800 text-sm">Office Location</p>
                    <p className="text-gray-600 text-sm">Guangzhou, Guangdong, China</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 bg-lightblue rounded-lg flex items-center justify-center flex-shrink-0">
                    <Mail className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-800 text-sm">Email</p>
                    <a href="mailto:info@ssourcing.cn" className="text-accent text-sm hover:underline">info@ssourcing.cn</a>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 bg-lightblue rounded-lg flex items-center justify-center flex-shrink-0">
                    <Phone className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-800 text-sm">Phone / WhatsApp</p>
                    <a href="tel:+8620XXXXXXXX" className="text-accent text-sm hover:underline">+86 20 XXXX XXXX</a>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 bg-lightblue rounded-lg flex items-center justify-center flex-shrink-0">
                    <Clock className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-800 text-sm">Response Time</p>
                    <p className="text-gray-600 text-sm">Within 24 business hours</p>
                  </div>
                </div>
              </div>

              <div className="bg-lightblue rounded-xl p-5">
                <h3 className="font-bold text-primary mb-3">What Happens Next?</h3>
                <ol className="space-y-2">
                  {[
                    'We review your inquiry within 24 hours',
                    'A sourcing specialist contacts you to clarify requirements',
                    'We provide a tailored sourcing plan and cost estimate',
                    'You decide whether to proceed — no obligation',
                  ].map((step, i) => (
                    <li key={i} className="flex items-start gap-2.5 text-sm text-gray-700">
                      <span className="w-5 h-5 bg-primary text-white rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0 mt-0.5">{i + 1}</span>
                      {step}
                    </li>
                  ))}
                </ol>
              </div>
            </div>

            {/* Form */}
            <div className="lg:col-span-2">
              {status === 'success' ? (
                <div className="bg-green-50 border border-green-200 rounded-xl p-10 text-center">
                  <CheckCircle className="w-14 h-14 text-green-500 mx-auto mb-4" />
                  <h3 className="text-2xl font-bold text-green-800 mb-2">Inquiry Submitted!</h3>
                  <p className="text-green-700 mb-6">
                    Thank you for your inquiry. A member of our sourcing team will review your requirements and get back to you within 24 business hours.
                  </p>
                  <button
                    onClick={() => setStatus('idle')}
                    className="bg-primary text-white px-6 py-2.5 rounded-md font-semibold text-sm hover:bg-blue-900 transition-colors"
                  >
                    Submit Another Inquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={onSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-1.5">
                        Full Name <span className="text-accent">*</span>
                      </label>
                      <input
                        name="name"
                        type="text"
                        value={values.name}
                        onChange={onChange}
                        placeholder="Your full name"
                        className="w-full border border-gray-300 rounded-md px-3.5 py-2.5 text-sm text-gray-800 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-1.5">
                        Business Email <span className="text-accent">*</span>
                      </label>
                      <input
                        name="email"
                        type="email"
                        value={values.email}
                        onChange={onChange}
                        placeholder="you@company.com"
                        className="w-full border border-gray-300 rounded-md px-3.5 py-2.5 text-sm text-gray-800 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-1.5">Company Name</label>
                      <input
                        name="company"
                        type="text"
                        value={values.company}
                        onChange={onChange}
                        placeholder="Your company"
                        className="w-full border border-gray-300 rounded-md px-3.5 py-2.5 text-sm text-gray-800 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-1.5">Country</label>
                      <input
                        name="country"
                        type="text"
                        value={values.country}
                        onChange={onChange}
                        placeholder="Your country"
                        className="w-full border border-gray-300 rounded-md px-3.5 py-2.5 text-sm text-gray-800 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-1.5">Phone / WhatsApp</label>
                      <input
                        name="phone"
                        type="text"
                        value={values.phone}
                        onChange={onChange}
                        placeholder="+1 555 000 0000"
                        className="w-full border border-gray-300 rounded-md px-3.5 py-2.5 text-sm text-gray-800 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-1.5">Product Category</label>
                      <select
                        name="product_category"
                        value={values.product_category}
                        onChange={onChange}
                        className="w-full border border-gray-300 rounded-md px-3.5 py-2.5 text-sm text-gray-800 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent bg-white"
                      >
                        <option value="">Select a category</option>
                        {categories.map((c) => (
                          <option key={c} value={c}>{c}</option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-1.5">
                      Product Description <span className="text-accent">*</span>
                    </label>
                    <textarea
                      name="product_description"
                      value={values.product_description}
                      onChange={onChange}
                      rows={4}
                      placeholder="Describe the product(s) you want to source — include specifications, materials, dimensions, features, and any other relevant details."
                      className="w-full border border-gray-300 rounded-md px-3.5 py-2.5 text-sm text-gray-800 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent resize-none"
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-1.5">Estimated Quantity</label>
                      <input
                        name="estimated_quantity"
                        type="text"
                        value={values.estimated_quantity}
                        onChange={onChange}
                        placeholder="e.g. 500 units / month"
                        className="w-full border border-gray-300 rounded-md px-3.5 py-2.5 text-sm text-gray-800 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-1.5">Target Unit Price</label>
                      <input
                        name="target_price"
                        type="text"
                        value={values.target_price}
                        onChange={onChange}
                        placeholder="e.g. USD 5–8 per unit"
                        className="w-full border border-gray-300 rounded-md px-3.5 py-2.5 text-sm text-gray-800 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Services Needed</label>
                    <div className="flex flex-wrap gap-2">
                      {serviceOptions.map((svc) => (
                        <button
                          key={svc}
                          type="button"
                          onClick={() => toggleService(svc)}
                          className={`px-3 py-1.5 rounded-full text-sm font-medium border transition-colors ${
                            values.services_needed.includes(svc)
                              ? 'bg-primary text-white border-primary'
                              : 'bg-white text-gray-600 border-gray-300 hover:border-primary hover:text-primary'
                          }`}
                        >
                          {svc}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-1.5">Additional Notes</label>
                    <textarea
                      name="message"
                      value={values.message}
                      onChange={onChange}
                      rows={3}
                      placeholder="Any other requirements, questions, or context that would help us understand your project."
                      className="w-full border border-gray-300 rounded-md px-3.5 py-2.5 text-sm text-gray-800 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent resize-none"
                    />
                  </div>

                  {error && (
                    <div className="flex items-start gap-2.5 bg-red-50 border border-red-200 rounded-lg p-3.5">
                      <AlertCircle className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" />
                      <p className="text-accent text-sm">{error}</p>
                    </div>
                  )}

                  <button
                    type="submit"
                    disabled={status === 'submitting'}
                    className="w-full bg-accent text-white py-3.5 rounded-md font-bold text-base hover:bg-red-700 transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
                  >
                    {status === 'submitting' ? 'Submitting…' : 'Submit Sourcing Inquiry'}
                  </button>
                  <p className="text-gray-400 text-xs text-center">
                    Fields marked with <span className="text-accent">*</span> are required. We respond within 24 business hours.
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
