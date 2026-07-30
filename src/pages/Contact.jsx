import { useState } from 'react'
import { DataClient } from '@strikingly/sdk'
import { STRK_PROJECT_URL, STRK_PROJECT_ANON_KEY } from '@/config.jsx'
import { CheckCircle, Mail, MapPin, Globe, Clock, AlertCircle } from 'lucide-react'

const client = new DataClient(STRK_PROJECT_URL, STRK_PROJECT_ANON_KEY)

const SERVICES = [
  'Supplier Sourcing',
  'Factory Verification',
  'Quality Inspection',
  'Production Follow-up',
  'Shipping Coordination',
  'Private Label / OEM',
]

const CATEGORIES = [
  'Electronics & Components',
  'Furniture & Home Decor',
  'Clothing & Textiles',
  'Machinery & Industrial',
  'Toys & Baby Products',
  'Health & Beauty',
  'Sports & Outdoor',
  'Packaging & Printing',
  'Auto Parts',
  'Other',
]

const initialValues = {
  full_name: '',
  email: '',
  company: '',
  country: '',
  product_category: '',
  product_description: '',
  estimated_quantity: '',
  target_price: '',
  services_needed: [],
  message: '',
  how_did_you_hear: '',
}

export default function Contact() {
  const [values, setValues] = useState(initialValues)
  const [status, setStatus] = useState('idle')
  const [error, setError] = useState(null)

  const onChange = (e) => {
    const { name, value } = e.target
    setValues((v) => ({ ...v, [name]: value }))
  }

  const onServiceToggle = (service) => {
    setValues((v) => ({
      ...v,
      services_needed: v.services_needed.includes(service)
        ? v.services_needed.filter((s) => s !== service)
        : [...v.services_needed, service],
    }))
  }

  const validate = () => {
    if (!values.full_name.trim()) return 'Full name is required.'
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

    const { data: response, error: submitError } = await client
      .from('Sourcing Inquiries')
      .insert({
        data: {
          full_name: values.full_name,
          email: values.email,
          company: values.company || undefined,
          country: values.country || undefined,
          product_category: values.product_category || undefined,
          product_description: values.product_description,
          estimated_quantity: values.estimated_quantity || undefined,
          target_price: values.target_price || undefined,
          services_needed: values.services_needed.length > 0 ? values.services_needed : undefined,
          message: values.message || undefined,
          how_did_you_hear: values.how_did_you_hear || undefined,
        },
      })
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
      <section className="bg-blue-950 text-white py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-blue-300 font-semibold text-sm uppercase tracking-wider mb-3">Get in Touch</p>
            <h1 className="text-4xl md:text-5xl font-bold mb-5">Get a Free Sourcing Quote</h1>
            <p className="text-neutral-300 text-lg leading-relaxed">
              Tell us what you need and we will respond within one business day with a tailored sourcing plan and cost estimate.
            </p>
          </div>
        </div>
      </section>

      {/* Form + Info */}
      <section className="py-20 md:py-28 bg-neutral-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Contact info */}
            <div className="lg:col-span-1 space-y-8">
              <div>
                <h2 className="text-xl font-bold text-neutral-800 mb-4">Contact Information</h2>
                <div className="space-y-4 text-sm text-neutral-600">
                  <div className="flex items-start gap-3">
                    <MapPin className="w-4 h-4 text-blue-700 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-medium text-neutral-800">Office Locations</p>
                      <p>Shenzhen, Guangdong, China</p>
                      <p>Yiwu, Zhejiang, China</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Mail className="w-4 h-4 text-blue-700 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-medium text-neutral-800">Email</p>
                      <a href="mailto:info@ssourcing.cn" className="text-blue-700 hover:text-blue-800">info@ssourcing.cn</a>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Clock className="w-4 h-4 text-blue-700 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-medium text-neutral-800">Response Time</p>
                      <p>Within 1 business day</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Globe className="w-4 h-4 text-blue-700 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-medium text-neutral-800">Languages</p>
                      <p>English · Français · Español · Deutsch</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-blue-50 rounded-xl p-5 border border-blue-100">
                <h3 className="font-semibold text-blue-900 mb-3">What Happens Next?</h3>
                <ol className="space-y-2 text-sm text-neutral-700">
                  {[
                    'We review your inquiry within 1 business day',
                    'We send you a tailored sourcing plan and cost estimate',
                    'You decide whether to proceed — no obligation',
                  ].map((step, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="w-5 h-5 bg-blue-800 text-white text-xs rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 font-semibold">{i + 1}</span>
                      {step}
                    </li>
                  ))}
                </ol>
              </div>
            </div>

            {/* Form */}
            <div className="lg:col-span-2">
              {status === 'success' ? (
                <div className="bg-white rounded-2xl border border-neutral-200 p-10 text-center">
                  <div className="w-16 h-16 bg-green-50 rounded-full flex items-center justify-center mx-auto mb-5">
                    <CheckCircle className="w-8 h-8 text-green-500" />
                  </div>
                  <h2 className="text-2xl font-bold text-neutral-800 mb-3">Inquiry Received</h2>
                  <p className="text-neutral-600 mb-6">
                    Thank you for reaching out. We have received your sourcing inquiry and will get back to you within one business day with a tailored plan.
                  </p>
                  <button
                    onClick={() => setStatus('idle')}
                    className="text-blue-700 font-semibold text-sm hover:text-blue-800"
                  >
                    Submit another inquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={onSubmit} className="bg-white rounded-2xl border border-neutral-200 p-8 space-y-6">
                  <h2 className="text-xl font-bold text-neutral-800">Sourcing Inquiry Form</h2>

                  {error && (
                    <div className="flex items-start gap-2 bg-red-50 border border-red-200 rounded-lg p-4 text-red-700 text-sm">
                      <AlertCircle className="w-4 h-4 flex-shrink-0 mt-0.5" />
                      {error}
                    </div>
                  )}

                  {/* Name + Email */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="full_name" className="block text-sm font-medium text-neutral-700 mb-1.5">
                        Full Name <span className="text-red-500">*</span>
                      </label>
                      <input
                        id="full_name"
                        name="full_name"
                        type="text"
                        value={values.full_name}
                        onChange={onChange}
                        placeholder="Your full name"
                        className="w-full border border-neutral-300 rounded-lg px-3 py-2.5 text-sm text-neutral-800 placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        required
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-neutral-700 mb-1.5">
                        Business Email <span className="text-red-500">*</span>
                      </label>
                      <input
                        id="email"
                        name="email"
                        type="email"
                        value={values.email}
                        onChange={onChange}
                        placeholder="you@company.com"
                        className="w-full border border-neutral-300 rounded-lg px-3 py-2.5 text-sm text-neutral-800 placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        required
                      />
                    </div>
                  </div>

                  {/* Company + Country */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="company" className="block text-sm font-medium text-neutral-700 mb-1.5">Company Name</label>
                      <input
                        id="company"
                        name="company"
                        type="text"
                        value={values.company}
                        onChange={onChange}
                        placeholder="Your company"
                        className="w-full border border-neutral-300 rounded-lg px-3 py-2.5 text-sm text-neutral-800 placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      />
                    </div>
                    <div>
                      <label htmlFor="country" className="block text-sm font-medium text-neutral-700 mb-1.5">Country</label>
                      <input
                        id="country"
                        name="country"
                        type="text"
                        value={values.country}
                        onChange={onChange}
                        placeholder="Your country"
                        className="w-full border border-neutral-300 rounded-lg px-3 py-2.5 text-sm text-neutral-800 placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      />
                    </div>
                  </div>

                  {/* Product category */}
                  <div>
                    <label htmlFor="product_category" className="block text-sm font-medium text-neutral-700 mb-1.5">Product Category</label>
                    <select
                      id="product_category"
                      name="product_category"
                      value={values.product_category}
                      onChange={onChange}
                      className="w-full border border-neutral-300 rounded-lg px-3 py-2.5 text-sm text-neutral-800 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white"
                    >
                      <option value="">Select a category</option>
                      {CATEGORIES.map((c) => <option key={c} value={c}>{c}</option>)}
                    </select>
                  </div>

                  {/* Product description */}
                  <div>
                    <label htmlFor="product_description" className="block text-sm font-medium text-neutral-700 mb-1.5">
                      Product Description <span className="text-red-500">*</span>
                    </label>
                    <textarea
                      id="product_description"
                      name="product_description"
                      rows={4}
                      value={values.product_description}
                      onChange={onChange}
                      placeholder="Describe the product(s) you want to source — include specifications, materials, dimensions, certifications needed, etc."
                      className="w-full border border-neutral-300 rounded-lg px-3 py-2.5 text-sm text-neutral-800 placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
                      required
                    />
                  </div>

                  {/* Quantity + Price */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="estimated_quantity" className="block text-sm font-medium text-neutral-700 mb-1.5">Estimated Quantity</label>
                      <input
                        id="estimated_quantity"
                        name="estimated_quantity"
                        type="text"
                        value={values.estimated_quantity}
                        onChange={onChange}
                        placeholder="e.g. 500 units / month"
                        className="w-full border border-neutral-300 rounded-lg px-3 py-2.5 text-sm text-neutral-800 placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      />
                    </div>
                    <div>
                      <label htmlFor="target_price" className="block text-sm font-medium text-neutral-700 mb-1.5">Target Price (optional)</label>
                      <input
                        id="target_price"
                        name="target_price"
                        type="text"
                        value={values.target_price}
                        onChange={onChange}
                        placeholder="e.g. USD 5–8 per unit"
                        className="w-full border border-neutral-300 rounded-lg px-3 py-2.5 text-sm text-neutral-800 placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      />
                    </div>
                  </div>

                  {/* Services needed */}
                  <div>
                    <p className="block text-sm font-medium text-neutral-700 mb-2">Services Needed</p>
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                      {SERVICES.map((svc) => (
                        <label key={svc} className="flex items-center gap-2 cursor-pointer">
                          <input
                            type="checkbox"
                            checked={values.services_needed.includes(svc)}
                            onChange={() => onServiceToggle(svc)}
                            className="w-4 h-4 text-blue-700 border-neutral-300 rounded focus:ring-blue-500"
                          />
                          <span className="text-sm text-neutral-700">{svc}</span>
                        </label>
                      ))}
                    </div>
                  </div>

                  {/* Message */}
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-neutral-700 mb-1.5">Additional Notes</label>
                    <textarea
                      id="message"
                      name="message"
                      rows={3}
                      value={values.message}
                      onChange={onChange}
                      placeholder="Any other requirements, questions, or context that would help us understand your needs."
                      className="w-full border border-neutral-300 rounded-lg px-3 py-2.5 text-sm text-neutral-800 placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
                    />
                  </div>

                  {/* How did you hear */}
                  <div>
                    <label htmlFor="how_did_you_hear" className="block text-sm font-medium text-neutral-700 mb-1.5">How did you find us?</label>
                    <input
                      id="how_did_you_hear"
                      name="how_did_you_hear"
                      type="text"
                      value={values.how_did_you_hear}
                      onChange={onChange}
                      placeholder="e.g. Google, LinkedIn, referral..."
                      className="w-full border border-neutral-300 rounded-lg px-3 py-2.5 text-sm text-neutral-800 placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={status === 'submitting'}
                    className="w-full bg-amber-600 hover:bg-amber-500 disabled:opacity-60 text-white font-semibold py-3 rounded-lg text-base transition-colors"
                  >
                    {status === 'submitting' ? 'Submitting…' : 'Submit Sourcing Inquiry'}
                  </button>

                  <p className="text-xs text-neutral-500 text-center">
                    No commitment required. We will review your inquiry and respond within one business day.
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
