import { useState } from 'react'
import { DataClient } from '@strikingly/sdk'
import { STRK_PROJECT_URL, STRK_PROJECT_ANON_KEY } from '@/config.jsx'
import { Mail, Phone, MapPin, Clock, CheckCircle, AlertCircle } from 'lucide-react'

const client = new DataClient(STRK_PROJECT_URL, STRK_PROJECT_ANON_KEY)

const productCategories = [
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

const serviceOptions = [
  'Supplier Sourcing',
  'Factory Verification',
  'Quality Inspection',
  'Production Follow-up',
  'Shipping Coordination',
  'Sample Procurement',
]

const initialValues = {
  full_name: '',
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

const getErrorMessage = (response, error) => {
  if (Array.isArray(response?.errors) && response.errors.length > 0) {
    return response.errors.join(', ')
  }
  return error?.message || 'Submission failed. Please try again.'
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
    const validationError = validate()
    if (validationError) {
      setError(validationError)
      return
    }

    setStatus('submitting')

    const { data: response, error: submitError } = await client
      .from('Sourcing Inquiries')
      .insert({
        data: {
          full_name: values.full_name,
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
          source_page: 'Contact Page',
        },
      })
      .select()
      .single()

    if (submitError || response?.success === false) {
      setError(getErrorMessage(response, submitError))
      setStatus('error')
      return
    }

    setStatus('success')
    setValues(initialValues)
  }

  return (
    <div>
      {/* Header */}
      <section className="bg-[#0F2A4A] py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <span className="text-[#C8102E] text-sm font-semibold uppercase tracking-wider">Get in Touch</span>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mt-2 mb-4">
              Get a Free Sourcing Quote
            </h1>
            <p className="text-slate-300 text-lg leading-relaxed">
              Tell us what you need. We'll review your requirements and respond within 24 hours with a tailored sourcing plan.
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
              <h2 className="text-xl font-bold text-[#0F2A4A] mb-6">Contact Information</h2>
              <div className="flex flex-col gap-5 mb-8">
                <div className="flex items-start gap-3">
                  <div className="w-9 h-9 bg-[#C8102E]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Mail className="w-4 h-4 text-[#C8102E]" />
                  </div>
                  <div>
                    <div className="text-[#0F2A4A] font-medium text-sm">Email</div>
                    <a href="mailto:info@ssourcing.cn" className="text-slate-600 text-sm hover:text-[#C8102E] transition-colors">
                      info@ssourcing.cn
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-9 h-9 bg-[#C8102E]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Phone className="w-4 h-4 text-[#C8102E]" />
                  </div>
                  <div>
                    <div className="text-[#0F2A4A] font-medium text-sm">Phone / WhatsApp</div>
                    <a href="https://wa.me/8618600000000" className="text-slate-600 text-sm hover:text-[#C8102E] transition-colors">
                      +86 186 0000 0000
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-9 h-9 bg-[#C8102E]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-4 h-4 text-[#C8102E]" />
                  </div>
                  <div>
                    <div className="text-[#0F2A4A] font-medium text-sm">Office Locations</div>
                    <div className="text-slate-600 text-sm">Shenzhen, Guangdong</div>
                    <div className="text-slate-600 text-sm">Yiwu, Zhejiang</div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-9 h-9 bg-[#C8102E]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Clock className="w-4 h-4 text-[#C8102E]" />
                  </div>
                  <div>
                    <div className="text-[#0F2A4A] font-medium text-sm">Response Time</div>
                    <div className="text-slate-600 text-sm">Within 24 hours (business days)</div>
                  </div>
                </div>
              </div>

              <div className="bg-slate-50 border border-slate-200 rounded-xl p-5">
                <h3 className="text-[#0F2A4A] font-semibold text-sm mb-3">What Happens Next?</h3>
                <ol className="flex flex-col gap-2">
                  {[
                    'We review your inquiry within 24 hours',
                    'We send you a tailored sourcing plan',
                    'We schedule a call to discuss your needs',
                    'We begin supplier research',
                  ].map((step, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-slate-600">
                      <span className="w-5 h-5 bg-[#C8102E] text-white rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0 mt-0.5">
                        {i + 1}
                      </span>
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
                  <h2 className="text-2xl font-bold text-[#0F2A4A] mb-2">Inquiry Received!</h2>
                  <p className="text-slate-600 mb-6">
                    Thank you for your sourcing inquiry. Our team will review your requirements and respond within 24 hours with a tailored plan.
                  </p>
                  <button
                    onClick={() => setStatus('idle')}
                    className="bg-[#0F2A4A] text-white px-6 py-2.5 rounded-md font-semibold text-sm hover:bg-[#0C2240] transition-colors"
                  >
                    Submit Another Inquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={onSubmit} className="flex flex-col gap-6">
                  {/* Contact Details */}
                  <div>
                    <h3 className="text-[#0F2A4A] font-semibold text-base mb-4 pb-2 border-b border-slate-200">Your Contact Details</h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-[#0F2A4A] mb-1.5">
                          Full Name <span className="text-[#C8102E]">*</span>
                        </label>
                        <input
                          type="text"
                          name="full_name"
                          value={values.full_name}
                          onChange={onChange}
                          placeholder="Your full name"
                          className="w-full border border-slate-300 rounded-md px-3 py-2.5 text-sm text-[#0F2A4A] placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#C8102E]/30 focus:border-[#C8102E]"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-[#0F2A4A] mb-1.5">
                          Business Email <span className="text-[#C8102E]">*</span>
                        </label>
                        <input
                          type="email"
                          name="email"
                          value={values.email}
                          onChange={onChange}
                          placeholder="you@company.com"
                          className="w-full border border-slate-300 rounded-md px-3 py-2.5 text-sm text-[#0F2A4A] placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#C8102E]/30 focus:border-[#C8102E]"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-[#0F2A4A] mb-1.5">Company Name</label>
                        <input
                          type="text"
                          name="company"
                          value={values.company}
                          onChange={onChange}
                          placeholder="Your company"
                          className="w-full border border-slate-300 rounded-md px-3 py-2.5 text-sm text-[#0F2A4A] placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#C8102E]/30 focus:border-[#C8102E]"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-[#0F2A4A] mb-1.5">Country</label>
                        <input
                          type="text"
                          name="country"
                          value={values.country}
                          onChange={onChange}
                          placeholder="e.g. United States"
                          className="w-full border border-slate-300 rounded-md px-3 py-2.5 text-sm text-[#0F2A4A] placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#C8102E]/30 focus:border-[#C8102E]"
                        />
                      </div>
                      <div className="sm:col-span-2">
                        <label className="block text-sm font-medium text-[#0F2A4A] mb-1.5">Phone / WhatsApp</label>
                        <input
                          type="text"
                          name="phone"
                          value={values.phone}
                          onChange={onChange}
                          placeholder="+1 555 000 0000"
                          className="w-full border border-slate-300 rounded-md px-3 py-2.5 text-sm text-[#0F2A4A] placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#C8102E]/30 focus:border-[#C8102E]"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Product Details */}
                  <div>
                    <h3 className="text-[#0F2A4A] font-semibold text-base mb-4 pb-2 border-b border-slate-200">Product Requirements</h3>
                    <div className="flex flex-col gap-4">
                      <div>
                        <label className="block text-sm font-medium text-[#0F2A4A] mb-1.5">Product Category</label>
                        <select
                          name="product_category"
                          value={values.product_category}
                          onChange={onChange}
                          className="w-full border border-slate-300 rounded-md px-3 py-2.5 text-sm text-[#0F2A4A] focus:outline-none focus:ring-2 focus:ring-[#C8102E]/30 focus:border-[#C8102E] bg-white"
                        >
                          <option value="">Select a category</option>
                          {productCategories.map((cat) => (
                            <option key={cat} value={cat}>{cat}</option>
                          ))}
                        </select>
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-[#0F2A4A] mb-1.5">
                          Product Description <span className="text-[#C8102E]">*</span>
                        </label>
                        <textarea
                          name="product_description"
                          value={values.product_description}
                          onChange={onChange}
                          rows={4}
                          placeholder="Describe the product you want to source — include specifications, materials, dimensions, or any reference products."
                          className="w-full border border-slate-300 rounded-md px-3 py-2.5 text-sm text-[#0F2A4A] placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#C8102E]/30 focus:border-[#C8102E] resize-none"
                        />
                      </div>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm font-medium text-[#0F2A4A] mb-1.5">Estimated Quantity</label>
                          <input
                            type="text"
                            name="estimated_quantity"
                            value={values.estimated_quantity}
                            onChange={onChange}
                            placeholder="e.g. 500 units / month"
                            className="w-full border border-slate-300 rounded-md px-3 py-2.5 text-sm text-[#0F2A4A] placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#C8102E]/30 focus:border-[#C8102E]"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-[#0F2A4A] mb-1.5">Target Unit Price</label>
                          <input
                            type="text"
                            name="target_price"
                            value={values.target_price}
                            onChange={onChange}
                            placeholder="e.g. USD 5–8 per unit"
                            className="w-full border border-slate-300 rounded-md px-3 py-2.5 text-sm text-[#0F2A4A] placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#C8102E]/30 focus:border-[#C8102E]"
                          />
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Services */}
                  <div>
                    <h3 className="text-[#0F2A4A] font-semibold text-base mb-4 pb-2 border-b border-slate-200">Services Needed</h3>
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                      {serviceOptions.map((svc) => (
                        <label
                          key={svc}
                          className={`flex items-center gap-2 p-3 rounded-lg border cursor-pointer transition-colors text-sm ${
                            values.services_needed.includes(svc)
                              ? 'border-[#C8102E] bg-[#C8102E]/5 text-[#0F2A4A]'
                              : 'border-slate-200 text-slate-600 hover:border-slate-300'
                          }`}
                        >
                          <input
                            type="checkbox"
                            checked={values.services_needed.includes(svc)}
                            onChange={() => onServiceToggle(svc)}
                            className="accent-red-china"
                          />
                          {svc}
                        </label>
                      ))}
                    </div>
                  </div>

                  {/* Additional Message */}
                  <div>
                    <label className="block text-sm font-medium text-[#0F2A4A] mb-1.5">Additional Notes</label>
                    <textarea
                      name="message"
                      value={values.message}
                      onChange={onChange}
                      rows={3}
                      placeholder="Any other details, special requirements, or questions for our team."
                      className="w-full border border-slate-300 rounded-md px-3 py-2.5 text-sm text-[#0F2A4A] placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#C8102E]/30 focus:border-[#C8102E] resize-none"
                    />
                  </div>

                  {/* Error */}
                  {error && (
                    <div className="flex items-start gap-2 bg-red-50 border border-red-200 rounded-lg p-3">
                      <AlertCircle className="w-4 h-4 text-red-500 flex-shrink-0 mt-0.5" />
                      <p className="text-red-700 text-sm">{error}</p>
                    </div>
                  )}

                  {/* Submit */}
                  <button
                    type="submit"
                    disabled={status === 'submitting'}
                    className="bg-[#C8102E] text-white px-8 py-3.5 rounded-md font-semibold text-base hover:bg-[#A80D26] transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
                  >
                    {status === 'submitting' ? 'Submitting…' : 'Submit Sourcing Inquiry'}
                  </button>
                  <p className="text-xs text-slate-400 text-center">
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
