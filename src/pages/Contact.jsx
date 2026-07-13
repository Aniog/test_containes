import { useState } from 'react'
import { MapPin, Mail, Phone, Clock, CheckCircle, AlertCircle } from 'lucide-react'
import { DataClient } from '@strikingly/sdk'
import { STRK_PROJECT_URL, STRK_PROJECT_ANON_KEY } from '@/config.jsx'

const client = new DataClient(STRK_PROJECT_URL, STRK_PROJECT_ANON_KEY)

const productCategories = [
  'Electronics & Tech',
  'Furniture & Home Décor',
  'Apparel & Textiles',
  'Hardware & Industrial',
  'Toys & Baby Products',
  'Health, Beauty & Personal Care',
  'Sports & Outdoor',
  'Packaging & Print',
  'Other',
]

const services = [
  'Supplier Sourcing',
  'Factory Verification',
  'Quality Inspection',
  'Production Follow-up',
  'Shipping Coordination',
  'Private Label / OEM',
  'Full Sourcing Service',
  'Not Sure',
]

const initialValues = {
  name: '',
  email: '',
  company: '',
  country: '',
  phone: '',
  product_name: '',
  product_category: '',
  target_quantity: '',
  target_price: '',
  service_needed: '',
  message: '',
}

function validate(v) {
  if (!v.name.trim()) return 'Full name is required.'
  if (!v.email.trim()) return 'Email address is required.'
  if (!/^\S+@\S+\.\S+$/.test(v.email)) return 'Please enter a valid email address.'
  if (!v.product_name.trim()) return 'Product name is required.'
  if (!v.message.trim()) return 'Please describe your sourcing requirements.'
  return null
}

export default function Contact() {
  const [values, setValues] = useState(initialValues)
  const [status, setStatus] = useState('idle') // idle | submitting | success | error
  const [errorMsg, setErrorMsg] = useState(null)

  const onChange = (e) => {
    const { name, value } = e.target
    setValues((v) => ({ ...v, [name]: value }))
  }

  const onSubmit = async (e) => {
    e.preventDefault()
    setErrorMsg(null)
    const err = validate(values)
    if (err) { setErrorMsg(err); return }

    setStatus('submitting')

    try {
      const payload = {
        name: values.name,
        email: values.email,
        company: values.company || undefined,
        country: values.country || undefined,
        phone: values.phone || undefined,
        product_name: values.product_name,
        product_category: values.product_category || undefined,
        target_quantity: values.target_quantity || undefined,
        target_price: values.target_price || undefined,
        service_needed: values.service_needed || undefined,
        message: values.message,
        status: 'new',
      }

      const { data: response, error } = await client
        .from('Sourcing Inquiries')
        .insert({ data: payload })
        .select()
        .single()

      if (error || response?.success === false) {
        const msgs = Array.isArray(response?.errors) ? response.errors.join(', ') : (error?.message || 'Submission failed.')
        setErrorMsg(msgs)
        setStatus('error')
        return
      }

      setStatus('success')
      setValues(initialValues)
    } catch (err) {
      console.error('Contact form error:', err)
      setErrorMsg(err.message || 'Something went wrong. Please try again.')
      setStatus('error')
    }
  }

  return (
    <div>
      {/* Header */}
      <section className="bg-navy-900 py-20">
        <div className="container-xl text-center">
          <span className="inline-block bg-white/10 text-white text-sm font-semibold px-3 py-1 rounded-full uppercase tracking-wide mb-4">
            Get in Touch
          </span>
          <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4">
            Get a Free Sourcing Quote
          </h1>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Tell us what you need and we will send you a free sourcing plan within 24 hours. No obligation, no sales pressure.
          </p>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-20 bg-gray-50">
        <div className="container-xl">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Contact Info */}
            <div className="lg:col-span-1">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Contact Information</h2>
              <div className="flex flex-col gap-6 mb-8">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 bg-navy-800/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-5 h-5 text-navy-800" />
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900 text-sm">Office Locations</div>
                    <div className="text-gray-500 text-sm mt-0.5">Guangzhou & Yiwu, China</div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 bg-navy-800/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Mail className="w-5 h-5 text-navy-800" />
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900 text-sm">Email</div>
                    <a href="mailto:info@ssourcing.cn" className="text-navy-800 text-sm hover:underline mt-0.5 block">info@ssourcing.cn</a>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 bg-navy-800/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Phone className="w-5 h-5 text-navy-800" />
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900 text-sm">Phone / WhatsApp</div>
                    <div className="text-gray-500 text-sm mt-0.5">+86 (0) 20 1234 5678</div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 bg-navy-800/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Clock className="w-5 h-5 text-navy-800" />
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900 text-sm">Response Time</div>
                    <div className="text-gray-500 text-sm mt-0.5">Within 24 hours (business days)</div>
                  </div>
                </div>
              </div>

              <div className="bg-navy-800 rounded-xl p-6 text-white">
                <h3 className="font-semibold mb-3">What Happens Next?</h3>
                <ol className="flex flex-col gap-3 text-sm text-gray-300">
                  <li className="flex items-start gap-2">
                    <span className="w-5 h-5 bg-white/20 rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0 mt-0.5">1</span>
                    We review your inquiry and confirm we can help.
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-5 h-5 bg-white/20 rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0 mt-0.5">2</span>
                    We send you a free sourcing plan with timeline and fees.
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-5 h-5 bg-white/20 rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0 mt-0.5">3</span>
                    You decide whether to proceed — no obligation.
                  </li>
                </ol>
              </div>
            </div>

            {/* Form */}
            <div className="lg:col-span-2">
              {status === 'success' ? (
                <div className="bg-white rounded-2xl border border-gray-200 p-12 text-center shadow-sm">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                    <CheckCircle className="w-8 h-8 text-green-600" />
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-3">Inquiry Received!</h2>
                  <p className="text-gray-500 text-lg max-w-md mx-auto">
                    Thank you for your inquiry. We will review your requirements and get back to you within 24 hours with a free sourcing plan.
                  </p>
                </div>
              ) : (
                <form onSubmit={onSubmit} className="bg-white rounded-2xl border border-gray-200 p-8 shadow-sm">
                  <h2 className="text-xl font-bold text-gray-900 mb-6">Sourcing Inquiry Form</h2>

                  {errorMsg && (
                    <div className="flex items-start gap-2 bg-red-50 border border-red-200 text-red-700 rounded-lg px-4 py-3 mb-6 text-sm">
                      <AlertCircle className="w-4 h-4 flex-shrink-0 mt-0.5" />
                      {errorMsg}
                    </div>
                  )}

                  {/* Contact Details */}
                  <div className="mb-6">
                    <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-4">Your Details</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          Full Name <span className="text-brand-red">*</span>
                        </label>
                        <input
                          type="text"
                          name="name"
                          value={values.name}
                          onChange={onChange}
                          placeholder="John Smith"
                          className="w-full px-4 py-2.5 border border-gray-200 rounded-lg text-sm text-gray-900 focus:outline-none focus:ring-2 focus:ring-navy-800 focus:border-transparent"
                          required
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          Business Email <span className="text-brand-red">*</span>
                        </label>
                        <input
                          type="email"
                          name="email"
                          value={values.email}
                          onChange={onChange}
                          placeholder="john@company.com"
                          className="w-full px-4 py-2.5 border border-gray-200 rounded-lg text-sm text-gray-900 focus:outline-none focus:ring-2 focus:ring-navy-800 focus:border-transparent"
                          required
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Company Name</label>
                        <input
                          type="text"
                          name="company"
                          value={values.company}
                          onChange={onChange}
                          placeholder="Acme Trading Ltd."
                          className="w-full px-4 py-2.5 border border-gray-200 rounded-lg text-sm text-gray-900 focus:outline-none focus:ring-2 focus:ring-navy-800 focus:border-transparent"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Country</label>
                        <input
                          type="text"
                          name="country"
                          value={values.country}
                          onChange={onChange}
                          placeholder="United States"
                          className="w-full px-4 py-2.5 border border-gray-200 rounded-lg text-sm text-gray-900 focus:outline-none focus:ring-2 focus:ring-navy-800 focus:border-transparent"
                        />
                      </div>
                      <div className="md:col-span-2">
                        <label className="block text-sm font-medium text-gray-700 mb-1">Phone / WhatsApp</label>
                        <input
                          type="text"
                          name="phone"
                          value={values.phone}
                          onChange={onChange}
                          placeholder="+1 555 000 0000"
                          className="w-full px-4 py-2.5 border border-gray-200 rounded-lg text-sm text-gray-900 focus:outline-none focus:ring-2 focus:ring-navy-800 focus:border-transparent"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Product Details */}
                  <div className="mb-6">
                    <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-4">Product & Sourcing Details</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="md:col-span-2">
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          Product Name / Description <span className="text-brand-red">*</span>
                        </label>
                        <input
                          type="text"
                          name="product_name"
                          value={values.product_name}
                          onChange={onChange}
                          placeholder="e.g. Bluetooth speaker, outdoor furniture set, LED strip lights"
                          className="w-full px-4 py-2.5 border border-gray-200 rounded-lg text-sm text-gray-900 focus:outline-none focus:ring-2 focus:ring-navy-800 focus:border-transparent"
                          required
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Product Category</label>
                        <select
                          name="product_category"
                          value={values.product_category}
                          onChange={onChange}
                          className="w-full px-4 py-2.5 border border-gray-200 rounded-lg text-sm text-gray-900 focus:outline-none focus:ring-2 focus:ring-navy-800 focus:border-transparent bg-white"
                        >
                          <option value="">Select a category</option>
                          {productCategories.map((c) => (
                            <option key={c} value={c}>{c}</option>
                          ))}
                        </select>
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Service Needed</label>
                        <select
                          name="service_needed"
                          value={values.service_needed}
                          onChange={onChange}
                          className="w-full px-4 py-2.5 border border-gray-200 rounded-lg text-sm text-gray-900 focus:outline-none focus:ring-2 focus:ring-navy-800 focus:border-transparent bg-white"
                        >
                          <option value="">Select a service</option>
                          {services.map((s) => (
                            <option key={s} value={s}>{s}</option>
                          ))}
                        </select>
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Target Quantity</label>
                        <input
                          type="text"
                          name="target_quantity"
                          value={values.target_quantity}
                          onChange={onChange}
                          placeholder="e.g. 500 units, 1 x 20ft container"
                          className="w-full px-4 py-2.5 border border-gray-200 rounded-lg text-sm text-gray-900 focus:outline-none focus:ring-2 focus:ring-navy-800 focus:border-transparent"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Target Unit Price</label>
                        <input
                          type="text"
                          name="target_price"
                          value={values.target_price}
                          onChange={onChange}
                          placeholder="e.g. USD 5–8 FOB"
                          className="w-full px-4 py-2.5 border border-gray-200 rounded-lg text-sm text-gray-900 focus:outline-none focus:ring-2 focus:ring-navy-800 focus:border-transparent"
                        />
                      </div>
                      <div className="md:col-span-2">
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          Additional Details <span className="text-brand-red">*</span>
                        </label>
                        <textarea
                          name="message"
                          value={values.message}
                          onChange={onChange}
                          rows={5}
                          placeholder="Describe your product requirements, any certifications needed, timeline, and any other relevant details..."
                          className="w-full px-4 py-2.5 border border-gray-200 rounded-lg text-sm text-gray-900 focus:outline-none focus:ring-2 focus:ring-navy-800 focus:border-transparent resize-none"
                          required
                        />
                      </div>
                    </div>
                  </div>

                  <button
                    type="submit"
                    disabled={status === 'submitting'}
                    className="w-full btn-accent text-center disabled:opacity-60 disabled:cursor-not-allowed"
                  >
                    {status === 'submitting' ? 'Sending Inquiry…' : 'Submit Sourcing Inquiry'}
                  </button>
                  <p className="text-xs text-gray-400 text-center mt-3">
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
