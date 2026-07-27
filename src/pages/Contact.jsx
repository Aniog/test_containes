import { useState } from 'react'
import { DataClient } from '@strikingly/sdk'
import { STRK_PROJECT_URL, STRK_PROJECT_ANON_KEY } from '@/config.jsx'
import { Mail, Phone, MapPin, Clock, Send, CheckCircle2 } from 'lucide-react'

const client = new DataClient(STRK_PROJECT_URL, STRK_PROJECT_ANON_KEY)

const serviceOptions = [
  { value: 'supplier_search', label: 'Supplier Search & Matching' },
  { value: 'factory_verification', label: 'Factory Verification' },
  { value: 'quality_inspection', label: 'Quality Inspection' },
  { value: 'production_followup', label: 'Production Follow-up' },
  { value: 'shipping_coordination', label: 'Shipping Coordination' },
]

const productCategories = [
  'Electronics & Components',
  'Home & Garden',
  'Industrial & Machinery',
  'Textiles & Apparel',
  'Auto Parts & Accessories',
  'Health & Beauty',
  'Building Materials',
  'Packaging & Printing',
  'Sports & Outdoors',
  'Other',
]

const getErrorMessage = (response, error) => {
  if (Array.isArray(response?.errors) && response.errors.length > 0) {
    return response.errors.join(', ')
  }
  return error?.message || 'Submission failed. Please try again.'
}

export default function Contact() {
  const [values, setValues] = useState({
    name: '',
    email: '',
    company: '',
    country: '',
    product_category: '',
    product_description: '',
    estimated_quantity: '',
    target_price: '',
    timeline: '',
    services_needed: [],
    message: '',
  })
  const [status, setStatus] = useState('idle')
  const [error, setError] = useState(null)

  const onChange = (e) => {
    const { name, value, type, checked } = e.target
    if (type === 'checkbox') {
      setValues((v) => ({
        ...v,
        services_needed: checked
          ? [...v.services_needed, value]
          : v.services_needed.filter((s) => s !== value),
      }))
    } else {
      setValues((v) => ({ ...v, [name]: value }))
    }
  }

  const validate = (v) => {
    if (!v.name.trim()) return 'Name is required'
    if (!v.email.trim()) return 'Email is required'
    if (!/^\S+@\S+\.\S+$/.test(v.email)) return 'Please enter a valid email'
    if (!v.product_description.trim()) return 'Product description is required'
    return null
  }

  const onSubmit = async (e) => {
    e.preventDefault()
    setError(null)
    const err = validate(values)
    if (err) { setError(err); return }

    setStatus('submitting')

    try {
      const { data: response, error: createError } = await client
        .from('SourcingInquiry')
        .insert({
          data: {
            name: values.name,
            email: values.email,
            company: values.company,
            country: values.country,
            product_category: values.product_category,
            product_description: values.product_description,
            estimated_quantity: values.estimated_quantity,
            target_price: values.target_price,
            timeline: values.timeline,
            services_needed: values.services_needed,
            message: values.message,
          },
        })

      if (createError || response?.success === false) {
        setError(getErrorMessage(response, createError))
        setStatus('error')
        return
      }

      setStatus('success')
      setValues({
        name: '',
        email: '',
        company: '',
        country: '',
        product_category: '',
        product_description: '',
        estimated_quantity: '',
        target_price: '',
        timeline: '',
        services_needed: [],
        message: '',
      })
    } catch (err) {
      console.error(err)
      setError(err.message || 'Submission failed. Please try again.')
      setStatus('error')
    }
  }

  return (
    <div>
      <section className="bg-navy-600 py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white tracking-tight mb-4">Contact Us</h1>
          <p className="text-navy-100 text-lg max-w-2xl mx-auto leading-relaxed">
            Tell us what you need to source. We'll respond within 48 hours with a sourcing plan and quote.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 md:gap-12">
            <div className="lg:col-span-2">
              {status === 'success' ? (
                <div className="bg-green-50 border border-green-200 rounded-xl p-8 text-center">
                  <CheckCircle2 className="w-12 h-12 text-green-500 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-navy-600 mb-2">Inquiry Submitted Successfully</h3>
                  <p className="text-gray-500 leading-relaxed">
                    Thank you for your inquiry. Our team will review your requirements and respond within 48 hours with a sourcing plan and quote.
                  </p>
                  <button
                    onClick={() => setStatus('idle')}
                    className="mt-6 text-accent-400 font-semibold hover:text-accent-500 transition-colors"
                  >
                    Submit Another Inquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={onSubmit} className="space-y-6" aria-busy={status === 'submitting'}>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-navy-600 mb-1">Name *</label>
                      <input
                        id="name"
                        name="name"
                        type="text"
                        value={values.name}
                        onChange={onChange}
                        required
                        placeholder="Your full name"
                        className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm text-gray-800 focus:outline-none focus:ring-2 focus:ring-accent-400 focus:border-transparent"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-navy-600 mb-1">Email *</label>
                      <input
                        id="email"
                        name="email"
                        type="email"
                        value={values.email}
                        onChange={onChange}
                        required
                        placeholder="you@company.com"
                        className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm text-gray-800 focus:outline-none focus:ring-2 focus:ring-accent-400 focus:border-transparent"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="company" className="block text-sm font-medium text-navy-600 mb-1">Company</label>
                      <input
                        id="company"
                        name="company"
                        type="text"
                        value={values.company}
                        onChange={onChange}
                        placeholder="Your company name"
                        className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm text-gray-800 focus:outline-none focus:ring-2 focus:ring-accent-400 focus:border-transparent"
                      />
                    </div>
                    <div>
                      <label htmlFor="country" className="block text-sm font-medium text-navy-600 mb-1">Country</label>
                      <input
                        id="country"
                        name="country"
                        type="text"
                        value={values.country}
                        onChange={onChange}
                        placeholder="Your country"
                        className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm text-gray-800 focus:outline-none focus:ring-2 focus:ring-accent-400 focus:border-transparent"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="product_category" className="block text-sm font-medium text-navy-600 mb-1">Product Category</label>
                    <select
                      id="product_category"
                      name="product_category"
                      value={values.product_category}
                      onChange={onChange}
                      className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm text-gray-800 focus:outline-none focus:ring-2 focus:ring-accent-400 focus:border-transparent bg-white"
                    >
                      <option value="">Select a category</option>
                      {productCategories.map((cat) => (
                        <option key={cat} value={cat}>{cat}</option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label htmlFor="product_description" className="block text-sm font-medium text-navy-600 mb-1">Product Description *</label>
                    <textarea
                      id="product_description"
                      name="product_description"
                      rows={4}
                      value={values.product_description}
                      onChange={onChange}
                      required
                      placeholder="Describe the product you want to source, including specifications, materials, and any special requirements."
                      className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm text-gray-800 focus:outline-none focus:ring-2 focus:ring-accent-400 focus:border-transparent"
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div>
                      <label htmlFor="estimated_quantity" className="block text-sm font-medium text-navy-600 mb-1">Estimated Quantity</label>
                      <input
                        id="estimated_quantity"
                        name="estimated_quantity"
                        type="text"
                        value={values.estimated_quantity}
                        onChange={onChange}
                        placeholder="e.g. 1,000 units"
                        className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm text-gray-800 focus:outline-none focus:ring-2 focus:ring-accent-400 focus:border-transparent"
                      />
                    </div>
                    <div>
                      <label htmlFor="target_price" className="block text-sm font-medium text-navy-600 mb-1">Target Price / Unit</label>
                      <input
                        id="target_price"
                        name="target_price"
                        type="text"
                        value={values.target_price}
                        onChange={onChange}
                        placeholder="e.g. $5.00"
                        className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm text-gray-800 focus:outline-none focus:ring-2 focus:ring-accent-400 focus:border-transparent"
                      />
                    </div>
                    <div>
                      <label htmlFor="timeline" className="block text-sm font-medium text-navy-600 mb-1">Timeline</label>
                      <input
                        id="timeline"
                        name="timeline"
                        type="text"
                        value={values.timeline}
                        onChange={onChange}
                        placeholder="e.g. Within 3 months"
                        className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm text-gray-800 focus:outline-none focus:ring-2 focus:ring-accent-400 focus:border-transparent"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-navy-600 mb-2">Services Needed</label>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      {serviceOptions.map((opt) => (
                        <label key={opt.value} className="flex items-center gap-2 cursor-pointer">
                          <input
                            type="checkbox"
                            name="services_needed"
                            value={opt.value}
                            checked={values.services_needed.includes(opt.value)}
                            onChange={onChange}
                            className="w-4 h-4 text-accent-400 border-gray-300 rounded focus:ring-accent-400"
                          />
                          <span className="text-sm text-gray-600">{opt.label}</span>
                        </label>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-navy-600 mb-1">Additional Message</label>
                    <textarea
                      id="message"
                      name="message"
                      rows={3}
                      value={values.message}
                      onChange={onChange}
                      placeholder="Any additional questions or information you'd like to share."
                      className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm text-gray-800 focus:outline-none focus:ring-2 focus:ring-accent-400 focus:border-transparent"
                    />
                  </div>

                  {error && (
                    <div className="bg-red-50 border border-red-200 rounded-lg px-4 py-3 text-red-600 text-sm">
                      {error}
                    </div>
                  )}

                  <button
                    type="submit"
                    disabled={status === 'submitting'}
                    className="inline-flex items-center justify-center gap-2 bg-accent-400 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-accent-500 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {status === 'submitting' ? 'Submitting...' : 'Get a Free Sourcing Quote'}
                    <Send className="w-5 h-5" />
                  </button>
                </form>
              )}
            </div>

            <div className="lg:col-span-1">
              <div className="bg-navy-50 rounded-xl p-6 md:p-8 space-y-6">
                <h3 className="text-lg font-semibold text-navy-600">Contact Information</h3>

                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <Mail className="w-5 h-5 text-navy-600 shrink-0 mt-0.5" />
                    <div>
                      <p className="text-sm font-medium text-navy-600">Email</p>
                      <p className="text-sm text-gray-500">info@ssourcingchina.com</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Phone className="w-5 h-5 text-navy-600 shrink-0 mt-0.5" />
                    <div>
                      <p className="text-sm font-medium text-navy-600">Phone</p>
                      <p className="text-sm text-gray-500">+86 755 8888 0000</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-navy-600 shrink-0 mt-0.5" />
                    <div>
                      <p className="text-sm font-medium text-navy-600">Location</p>
                      <p className="text-sm text-gray-500">Shenzhen, Guangdong, China</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Clock className="w-5 h-5 text-navy-600 shrink-0 mt-0.5" />
                    <div>
                      <p className="text-sm font-medium text-navy-600">Response Time</p>
                      <p className="text-sm text-gray-500">Within 48 hours</p>
                    </div>
                  </div>
                </div>

                <div className="border-t border-navy-100 pt-4">
                  <h4 className="text-sm font-semibold text-navy-600 mb-2">What Happens Next?</h4>
                  <ul className="space-y-2">
                    {[
                      'We review your product requirements',
                      'We develop a sourcing strategy',
                      'We provide a free quote within 48 hours',
                      'You decide — no commitment required',
                    ].map((step) => (
                      <li key={step} className="flex items-start gap-2 text-sm text-gray-500">
                        <span className="w-1.5 h-1.5 bg-accent-400 rounded-full mt-1.5 shrink-0" />
                        {step}
                      </li>
                    ))}
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
