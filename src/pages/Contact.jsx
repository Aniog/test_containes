import { useState } from 'react'
import { DataClient } from '@strikingly/sdk'
import { STRK_PROJECT_URL, STRK_PROJECT_ANON_KEY } from '@/config.jsx'
import { Mail, Phone, MapPin, Clock, CheckCircle, AlertCircle } from 'lucide-react'
import CTAButton from '@/components/CTAButton'

const client = new DataClient(STRK_PROJECT_URL, STRK_PROJECT_ANON_KEY)

const serviceOptions = [
  'Supplier Sourcing',
  'Factory Verification',
  'Quality Inspection',
  'Production Follow-up',
  'Shipping Coordination',
  'Private Label / OEM',
  'Sample Procurement',
]

const categoryOptions = [
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
  company_name: '',
  email: '',
  phone: '',
  country: '',
  product_category: '',
  product_description: '',
  estimated_quantity: '',
  target_price: '',
  services_needed: [],
  additional_notes: '',
}

export default function Contact() {
  const [values, setValues] = useState(initialValues)
  const [status, setStatus] = useState('idle')
  const [error, setError] = useState(null)

  const handleChange = (e) => {
    const { name, value } = e.target
    setValues((v) => ({ ...v, [name]: value }))
  }

  const handleServiceToggle = (service) => {
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

  const handleSubmit = async (e) => {
    e.preventDefault()
    setError(null)
    const err = validate()
    if (err) { setError(err); return }

    setStatus('submitting')

    const payload = {
      full_name: values.full_name,
      company_name: values.company_name || undefined,
      email: values.email,
      phone: values.phone || undefined,
      country: values.country || undefined,
      product_category: values.product_category || undefined,
      product_description: values.product_description,
      estimated_quantity: values.estimated_quantity || undefined,
      target_price: values.target_price || undefined,
      services_needed: values.services_needed.length > 0 ? values.services_needed : undefined,
      additional_notes: values.additional_notes || undefined,
      status: 'new',
    }

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
      <section className="bg-navy pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="text-gold text-sm font-semibold uppercase tracking-wider">Get in Touch</span>
            <h1 className="text-4xl md:text-5xl font-bold text-white mt-2 mb-4">
              Get a Free Sourcing Quote
            </h1>
            <p className="text-white/70 text-lg leading-relaxed">
              Tell us what you need to source. We'll review your requirements and respond within 24 hours with a tailored plan and transparent pricing.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-light-blue py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Contact Info */}
            <div className="lg:col-span-1">
              <h2 className="text-2xl font-bold text-navy mb-6">Contact Information</h2>
              <div className="space-y-5 mb-8">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-navy rounded-lg flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <div className="text-navy font-semibold text-sm">Office Location</div>
                    <div className="text-text-muted text-sm">Guangzhou, Guangdong, China</div>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-navy rounded-lg flex items-center justify-center flex-shrink-0">
                    <Mail className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <div className="text-navy font-semibold text-sm">Email</div>
                    <a href="mailto:info@ssourcing.cn" className="text-text-muted text-sm hover:text-navy transition-colors">info@ssourcing.cn</a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-navy rounded-lg flex items-center justify-center flex-shrink-0">
                    <Phone className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <div className="text-navy font-semibold text-sm">Phone / WhatsApp</div>
                    <div className="text-text-muted text-sm">+86 20 0000 0000</div>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-navy rounded-lg flex items-center justify-center flex-shrink-0">
                    <Clock className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <div className="text-navy font-semibold text-sm">Response Time</div>
                    <div className="text-text-muted text-sm">Within 24 hours (business days)</div>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-xl p-5 border border-border">
                <h3 className="text-navy font-bold text-sm mb-3">What Happens Next?</h3>
                <ol className="space-y-2">
                  {[
                    'We review your requirements',
                    'We respond within 24 hours',
                    'We propose a sourcing plan',
                    'You decide if you want to proceed',
                  ].map((step, i) => (
                    <li key={step} className="flex items-start gap-3 text-sm text-text-muted">
                      <span className="w-5 h-5 bg-navy text-white rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0">{i + 1}</span>
                      {step}
                    </li>
                  ))}
                </ol>
              </div>
            </div>

            {/* Form */}
            <div className="lg:col-span-2">
              {status === 'success' ? (
                <div className="bg-white rounded-2xl border border-border p-10 text-center shadow-sm">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <CheckCircle className="w-8 h-8 text-green-600" />
                  </div>
                  <h2 className="text-2xl font-bold text-navy mb-2">Inquiry Received!</h2>
                  <p className="text-text-muted mb-6">
                    Thank you for your sourcing inquiry. Our team will review your requirements and get back to you within 24 hours.
                  </p>
                  <button
                    onClick={() => setStatus('idle')}
                    className="bg-navy text-white px-6 py-3 rounded-lg font-semibold text-sm hover:bg-navy-dark transition-colors"
                  >
                    Submit Another Inquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="bg-white rounded-2xl border border-border p-8 shadow-sm">
                  <h2 className="text-xl font-bold text-navy mb-6">Sourcing Inquiry Form</h2>

                  {error && (
                    <div className="flex items-start gap-3 bg-red-50 border border-red-200 rounded-lg p-4 mb-6">
                      <AlertCircle className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
                      <p className="text-red-700 text-sm">{error}</p>
                    </div>
                  )}

                  {/* Contact Details */}
                  <div className="mb-6">
                    <h3 className="text-navy font-semibold text-sm uppercase tracking-wider mb-4 pb-2 border-b border-border">Your Details</h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-navy text-sm font-medium mb-1.5">
                          Full Name <span className="text-china-red">*</span>
                        </label>
                        <input
                          type="text"
                          name="full_name"
                          value={values.full_name}
                          onChange={handleChange}
                          placeholder="Your full name"
                          className="w-full border border-border rounded-lg px-4 py-2.5 text-text-dark text-sm focus:outline-none focus:ring-2 focus:ring-navy/20 focus:border-navy"
                          required
                        />
                      </div>
                      <div>
                        <label className="block text-navy text-sm font-medium mb-1.5">Company Name</label>
                        <input
                          type="text"
                          name="company_name"
                          value={values.company_name}
                          onChange={handleChange}
                          placeholder="Your company"
                          className="w-full border border-border rounded-lg px-4 py-2.5 text-text-dark text-sm focus:outline-none focus:ring-2 focus:ring-navy/20 focus:border-navy"
                        />
                      </div>
                      <div>
                        <label className="block text-navy text-sm font-medium mb-1.5">
                          Email Address <span className="text-china-red">*</span>
                        </label>
                        <input
                          type="email"
                          name="email"
                          value={values.email}
                          onChange={handleChange}
                          placeholder="you@company.com"
                          className="w-full border border-border rounded-lg px-4 py-2.5 text-text-dark text-sm focus:outline-none focus:ring-2 focus:ring-navy/20 focus:border-navy"
                          required
                        />
                      </div>
                      <div>
                        <label className="block text-navy text-sm font-medium mb-1.5">Phone / WhatsApp</label>
                        <input
                          type="text"
                          name="phone"
                          value={values.phone}
                          onChange={handleChange}
                          placeholder="+1 555 000 0000"
                          className="w-full border border-border rounded-lg px-4 py-2.5 text-text-dark text-sm focus:outline-none focus:ring-2 focus:ring-navy/20 focus:border-navy"
                        />
                      </div>
                      <div className="sm:col-span-2">
                        <label className="block text-navy text-sm font-medium mb-1.5">Country</label>
                        <input
                          type="text"
                          name="country"
                          value={values.country}
                          onChange={handleChange}
                          placeholder="Your country"
                          className="w-full border border-border rounded-lg px-4 py-2.5 text-text-dark text-sm focus:outline-none focus:ring-2 focus:ring-navy/20 focus:border-navy"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Product Details */}
                  <div className="mb-6">
                    <h3 className="text-navy font-semibold text-sm uppercase tracking-wider mb-4 pb-2 border-b border-border">Product Details</h3>
                    <div className="space-y-4">
                      <div>
                        <label className="block text-navy text-sm font-medium mb-1.5">Product Category</label>
                        <select
                          name="product_category"
                          value={values.product_category}
                          onChange={handleChange}
                          className="w-full border border-border rounded-lg px-4 py-2.5 text-text-dark text-sm focus:outline-none focus:ring-2 focus:ring-navy/20 focus:border-navy bg-white"
                        >
                          <option value="">Select a category</option>
                          {categoryOptions.map((opt) => (
                            <option key={opt} value={opt}>{opt}</option>
                          ))}
                        </select>
                      </div>
                      <div>
                        <label className="block text-navy text-sm font-medium mb-1.5">
                          Product Description <span className="text-china-red">*</span>
                        </label>
                        <textarea
                          name="product_description"
                          value={values.product_description}
                          onChange={handleChange}
                          rows={4}
                          placeholder="Describe the product(s) you want to source. Include specifications, materials, dimensions, certifications required, and any reference images or links."
                          className="w-full border border-border rounded-lg px-4 py-2.5 text-text-dark text-sm focus:outline-none focus:ring-2 focus:ring-navy/20 focus:border-navy resize-none"
                          required
                        />
                      </div>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-navy text-sm font-medium mb-1.5">Estimated Quantity</label>
                          <input
                            type="text"
                            name="estimated_quantity"
                            value={values.estimated_quantity}
                            onChange={handleChange}
                            placeholder="e.g. 500 units/month"
                            className="w-full border border-border rounded-lg px-4 py-2.5 text-text-dark text-sm focus:outline-none focus:ring-2 focus:ring-navy/20 focus:border-navy"
                          />
                        </div>
                        <div>
                          <label className="block text-navy text-sm font-medium mb-1.5">Target Unit Price</label>
                          <input
                            type="text"
                            name="target_price"
                            value={values.target_price}
                            onChange={handleChange}
                            placeholder="e.g. USD 5–8 per unit"
                            className="w-full border border-border rounded-lg px-4 py-2.5 text-text-dark text-sm focus:outline-none focus:ring-2 focus:ring-navy/20 focus:border-navy"
                          />
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Services */}
                  <div className="mb-6">
                    <h3 className="text-navy font-semibold text-sm uppercase tracking-wider mb-4 pb-2 border-b border-border">Services Needed</h3>
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                      {serviceOptions.map((service) => (
                        <button
                          key={service}
                          type="button"
                          onClick={() => handleServiceToggle(service)}
                          className={`text-left px-3 py-2.5 rounded-lg border text-sm font-medium transition-colors ${
                            values.services_needed.includes(service)
                              ? 'bg-navy text-white border-navy'
                              : 'bg-white text-text-dark border-border hover:border-navy hover:text-navy'
                          }`}
                        >
                          {service}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Notes */}
                  <div className="mb-8">
                    <label className="block text-navy text-sm font-medium mb-1.5">Additional Notes</label>
                    <textarea
                      name="additional_notes"
                      value={values.additional_notes}
                      onChange={handleChange}
                      rows={3}
                      placeholder="Any other requirements, questions, or context that would help us understand your project."
                      className="w-full border border-border rounded-lg px-4 py-2.5 text-text-dark text-sm focus:outline-none focus:ring-2 focus:ring-navy/20 focus:border-navy resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={status === 'submitting'}
                    className="w-full bg-china-red text-white py-3.5 rounded-lg font-semibold text-sm hover:bg-china-red-dark transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
                  >
                    {status === 'submitting' ? 'Submitting…' : 'Submit Sourcing Inquiry'}
                  </button>
                  <p className="text-text-muted text-xs text-center mt-3">
                    We'll respond within 24 hours. No commitment required.
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
